import * as THREE from "three";
import { runFillWorker } from "../app.js";

const vertexShader = `
varying vec3 vOrigin;
varying vec3 vDirection;
varying vec3 vWorldPosition;

void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    
    // Calculate the camera position in object's local space
    vOrigin = (inverse(modelMatrix) * vec4(cameraPosition, 1.0)).xyz;
    
    // The direction of the ray in local space
    vDirection = position - vOrigin;
    
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`;

const fragmentShader = `
precision highp float;
precision highp sampler3D;

varying vec3 vOrigin;
varying vec3 vDirection;
varying vec3 vWorldPosition;

uniform sampler3D uVolume;
uniform float uThreshold;
uniform vec3 uColor;
uniform float uOpacity;
uniform int uDensity;
uniform int uSteps;
uniform float uSliceZ;
uniform int uSliceAxis; // 0=none, 1=x, 2=y, 3=z
uniform float uSliceSign; // 1 or -1
uniform int uCutaway; // 0=none, 1=quarter, 2=eighth
uniform float uRadiusScan; // 1.0 means no cut, <1.0 cuts outside sphere

vec2 hitBox(vec3 orig, vec3 dir) {
    vec3 box_min = vec3(-0.5);
    vec3 box_max = vec3(0.5);
    vec3 inv_dir = 1.0 / dir;
    vec3 tmin_tmp = (box_min - orig) * inv_dir;
    vec3 tmax_tmp = (box_max - orig) * inv_dir;
    vec3 tmin = min(tmin_tmp, tmax_tmp);
    vec3 tmax = max(tmin_tmp, tmax_tmp);
    float t0 = max(tmin.x, max(tmin.y, tmin.z));
    float t1 = min(tmax.x, min(tmax.y, tmax.z));
    return vec2(t0, t1);
}

float sampleVolume(vec3 p) {
    vec3 tc = p + 0.5;
    return texture(uVolume, tc).r;
}

vec3 computeNormal(vec3 p, float stepSize) {
    vec2 e = vec2(stepSize, 0.0);
    float nx = sampleVolume(p + e.xyy) - sampleVolume(p - e.xyy);
    float ny = sampleVolume(p + e.yxy) - sampleVolume(p - e.yxy);
    float nz = sampleVolume(p + e.yyx) - sampleVolume(p - e.yyx);
    return normalize(vec3(nx, ny, nz));
}

bool isCutaway(vec3 p) {
    if (uCutaway == 1) { // quarter
        if (p.x > 0.0 && p.y > 0.0) return true;
    } else if (uCutaway == 2) { // eighth
        if (p.x > 0.0 && p.y > 0.0 && p.z > 0.0) return true;
    }
    // Radius scan spherical cut
    if (uRadiusScan < 1.0) {
        if (length(p) > uRadiusScan * 0.5) return true;
    }
    return false;
}

bool isSliced(vec3 p) {
    // p goes from -0.5 to 0.5, uSliceZ is already mapped to -0.5 to 0.5
    if (uSliceAxis == 1) return (p.x * uSliceSign) > (uSliceZ * uSliceSign);
    if (uSliceAxis == 2) return (p.y * uSliceSign) > (uSliceZ * uSliceSign);
    if (uSliceAxis == 3) return (p.z * uSliceSign) > (uSliceZ * uSliceSign);
    return false;
}

void main() {
    vec3 rayDir = normalize(vDirection);
    vec2 bounds = hitBox(vOrigin, rayDir);
    
    if (bounds.x > bounds.y) discard;
    bounds.x = max(bounds.x, 0.0);
    
    vec3 p = vOrigin + bounds.x * rayDir;
    float stepSize = 1.732 / float(uSteps);
    float t = bounds.x;
    float tMax = bounds.y;
    
    bool hit = false;
    vec3 hitPos;
    float hitVal;
    
    for (int i = 0; i < 400; i++) {
        if (t > tMax || float(i) > float(uSteps)) break;
        hitPos = vOrigin + t * rayDir;
        if (!isCutaway(hitPos) && !isSliced(hitPos)) {
            hitVal = sampleVolume(hitPos);
            if (hitVal > uThreshold) {
                hit = true;
                break;
            }
        }
        t += stepSize;
    }
    
    if (!hit) discard;
    
    vec3 normal = computeNormal(hitPos, 1.0 / float(uDensity));
    // If we're hitting a slice plane, the normal should be the slice plane normal
    // Check if we are right on the edge of the slice
    if (uSliceAxis != 0 && (hitPos.z * uSliceSign > uSliceZ * uSliceSign - stepSize * 2.0)) {
        if (uSliceAxis == 3) {
            normal = vec3(0.0, 0.0, uSliceSign);
        } else if (uSliceAxis == 2) {
            normal = vec3(0.0, uSliceSign, 0.0);
        } else if (uSliceAxis == 1) {
            normal = vec3(uSliceSign, 0.0, 0.0);
        }
    }
    
    normal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0)); // Main directional light
    
    float ambient = 0.4;
    float diff = max(dot(normal, lightDir), 0.0);
    
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), 16.0);
    
    // Add rim lighting
    float rim = 1.0 - max(dot(viewDir, normal), 0.0);
    rim = smoothstep(0.6, 1.0, rim);
    
    vec3 finalColor = uColor * (ambient + diff * 0.7) + vec3(1.0) * spec * 0.4 + uColor * rim * 0.5;
    
    gl_FragColor = vec4(finalColor, uOpacity);
}
`;

export async function makeRaymarchedVolume(workerIdx, params, renderOptions, sign, colorHex) {
  const density = 120; // Hardcode density to 120 for optimal 3D texture size vs quality
  const buffer = new ArrayBuffer(density * density * density * 4);
  
  // We fill the entire volume without cutaways so the shader can handle dynamic cutaways!
  const updatedBuffer = await runFillWorker(workerIdx, buffer, params, { ...renderOptions, cutaway: "none", density }, sign);
  const floatArray = new Float32Array(updatedBuffer);
  
  const texture = new THREE.Data3DTexture(floatArray, density, density, density);
  texture.format = THREE.RedFormat;
  texture.type = THREE.FloatType;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.unpackAlignment = 1;
  texture.needsUpdate = true;
  
  const color = new THREE.Color(colorHex);
  
  const cutawayMap = { "none": 0, "quarter": 1, "eighth": 2 };
  const sliceAxisMap = { "none": 0, "x": 1, "y": 2, "z": 3 };
  
  // SliceZ is usually in absolute world coordinates (-radius to radius). 
  // We map it to -0.5 to 0.5 for the shader.
  let sliceZUniform = 0.5;
  if (renderOptions.sliceZ !== undefined && renderOptions.radius) {
      sliceZUniform = renderOptions.sliceZ / (renderOptions.radius * 2);
  }
  
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uVolume: { value: texture },
      uThreshold: { value: renderOptions.iso },
      uColor: { value: color },
      uOpacity: { value: renderOptions.opacity || 1.0 },
      uDensity: { value: density },
      uSteps: { value: 150 },
      uSliceZ: { value: sliceZUniform },
      uSliceAxis: { value: sliceAxisMap[renderOptions.slice || "none"] || 0 },
      uSliceSign: { value: renderOptions.sliceDirection === "backward" ? -1.0 : 1.0 },
      uCutaway: { value: cutawayMap[renderOptions.cutaway || "none"] || 0 },
      uRadiusScan: { value: 1.0 }
    },
    transparent: true,
    side: THREE.FrontSide, 
    blending: THREE.NormalBlending,
    depthWrite: true,
  });
  material.side = THREE.DoubleSide; 
  
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const mesh = new THREE.Mesh(geometry, material);
  
  const diameter = renderOptions.radius * 2;
  mesh.scale.set(diameter, diameter, diameter);
  
  // Custom update function for cinematic animations
  mesh.updateSliceZ = (z) => {
    material.uniforms.uSliceZ.value = z / (renderOptions.radius * 2);
  };
  mesh.updateRadiusScan = (percent) => {
    material.uniforms.uRadiusScan.value = percent / 100.0;
  };
  
  mesh.update = () => {}; // No-op for compatibility
  
  return mesh;
}
