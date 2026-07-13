import * as UI from "./js/ui.js";
import * as Activities from "./js/activities.js";
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MarchingCubes } from "three/examples/jsm/objects/MarchingCubes.js";
import { el } from "./js/dom.js";
import { openSketchWindow, bindSketchPanel, redrawSketchCanvas, setSketchMode, beginSketchDrag, continueSketchDrag, endSketchDrag, sketchState , resizeSketchCanvas, registerSketchDeps } from "./js/sketch.js";
import { bindPredictSketchPanel, resizePredictCanvas, clearPredictCanvas, redrawPredictCanvas, predictSketchState } from "./js/predict-sketch.js";
import { t, setLanguage } from "./js/i18n.js";
import { formulaSummary } from "./js/formula.js";
registerSketchDeps({
  updateWindowControlLabels: UI.updateWindowControlLabels,
  resizeAfterLayoutChange
});
import { initAxes, scene, camera, renderer, controls, angularScene, angularCamera, angularRenderer, angularControls, projectionScene, projectionCamera, projectionRenderer, projectionControls, radialScene, radialCamera, radialRenderer, radialControls, axesGroup, angularAxesGroup, setAngularAxesGroup, setAxesGroup, recoverAllViewerControls, refreshAllViewerControls, rebuildMainControls, rebuildAngularControls, refreshViewerControls, recoverViewerControls, makeFreeRotationControls, bindViewerControlRecovery, setAxesVisibility, getAngularAxesGroup , makeLabelSprite, makeCylinderBetween, makeAxisCone, makeAxisGroup, makeRadialAxisGroup} from "./js/renderers.js";

import { initCinematic, cinematicActive, processCinematicTick, playCinematicAnimation, stopCinematicAnimation, exportCinematicVideo, toggleCinematicPlayback, jumpToCinematicStep, applyCinematicVisualState } from "./js/cinematic.js";
// ---- Web Worker Setup ----
const fillWorkers = [
  new Worker(new URL("./js/worker.js", import.meta.url), { type: "module" }),
  new Worker(new URL("./js/worker.js", import.meta.url), { type: "module" }),
];
let nextJobId = 1;
const pendingJobs = new Map();

function handleWorkerMessage(e) {
  const { jobId, fieldBuffer, error } = e.data;
  const job = pendingJobs.get(jobId);
  if (!job) return;
  pendingJobs.delete(jobId);
  if (error) job.reject(new Error(error));
  else job.resolve(fieldBuffer);
}

fillWorkers[0].onmessage = handleWorkerMessage;
fillWorkers[1].onmessage = handleWorkerMessage;

function runFillWorker(workerIdx, fieldBuffer, params, options, sign) {
  return new Promise((resolve, reject) => {
    const jobId = nextJobId++;
    pendingJobs.set(jobId, { resolve, reject });
    fillWorkers[workerIdx].postMessage({ jobId, fieldBuffer, params, options, sign }, [fieldBuffer]);
  });
}
let currentRenderId = 0;
// --------------------------

export const globalXYClipPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 100);



import {
  angularNodeInfo,
  buildAngularSurface,
  buildOrbitalSurface,
  buildOrbitalPoints,
  clampQuantumNumbers,
  clientPsi,
  desktopBoxAndIso,
  fillNodeField,
  fillScalarField,
  nodeSummary,
  orbitalLabel,
  psi,
  radial,
  radialDisplayExtent,
  radialDistribution,
  radialNodeRadii,
  realSphericalHarmonic,
  sampleSlice,
} from "./orbitals.js";

window.addEventListener("error", (e) => {
  const el = document.querySelector("#statusText");
  if (el) el.textContent = "Err: " + e.message;
});
window.addEventListener("unhandledrejection", (e) => {
  const el = document.querySelector("#statusText");
  if (el) el.textContent = "Rej: " + (e.reason?.message || e.reason);
});



let positiveObject = null;
let negativeObject = null;
let cloudPositiveObject = null;
let cloudNegativeObject = null;
let nodeObject = null;
let sliceObject = null;
let boxObject = null;
let cutCapObject = null;
let mainProjection3dObject = null;
let angularPositiveObject = null;
let angularNegativeObject = null;
let angularNodeObject = null;
let projectionSurfaceObject = null;
let projectionContourObject = null;
let projectionBoxObject = null;
let radialSurfaceObject = null;
let radialSideObject = null;
let radialCurveObject = null;
let radialAxisObject = null;
let radialProjectionObject = null;
let radialReferenceObject = null;
let relationOrbitalObject = null;
let relationProjectionObject = null;
let relationRadialObject = null;
let relationAngularObject = null;
let projectionRelationMeta = null;
let radialRelationMeta = null;
let relationRadiusMax = 1;
let relationOrbitalSurfaceRadius = 1;
let currentViewRadius = 5;
let currentAngularRadius = 4;
let currentProjectionRadius = 3;
let currentRadialRadius = 4.5;
const currentProjectionTarget = new THREE.Vector3(0, 0, 0);
const orbitalMeshCache = new Map();
const ORBITAL_MESH_CACHE_LIMIT = 6;
const baseMarchingSourceCache = new Map();
const BASE_MARCHING_SOURCE_CACHE_LIMIT = 4;
let animationIsoRenderer = null;
let animationIsoScene = null;
let animationIsoCamera = null;
let animationIsoGroup = null;
let animationIsoCacheKey = "";
let animationAngularRenderer = null;
let animationAngularScene = null;
let animationAngularCamera = null;
let animationAngularGroup = null;
let animationAngularCacheKey = "";
let animationCloudRenderer = null;
let animationCloudScene = null;
let animationCloudCamera = null;
let animationCloudGroup = null;
let animationCloudCacheKey = "";
let animationRadialRenderer = null;
let animationRadialCamera = null;
let darkThemeBackground = "#000000";

const compareViews = [];


function applyBackgroundColor(color) {
  if (document.documentElement.classList.contains("theme-light")) {
    color = "#6f8583";
  } else if (!color) {
    color = el.backgroundColor?.value || "#000000";
  }
  if (!document.documentElement.classList.contains("theme-light")) {
    darkThemeBackground = color;
  }
  document.documentElement.style.setProperty("--viewer-bg", color);
  const background = new THREE.Color(color);
  scene.background = background.clone();
  angularScene.background = background.clone();
  projectionScene.background = background.clone();
  radialScene.background = background.clone();
  for (const view of compareViews) {
    view.scene.background = background.clone();
  }
}

function mountRelationControls() {
  if (document.querySelector("#relationModeInput")) {
    Object.assign(el, {
      relationMode: document.querySelector("#relationModeInput"),
      syncRotation: document.querySelector("#syncRotationInput"),
      scanRadius: document.querySelector("#scanRadiusInput"),
      scanRadiusValue: document.querySelector("#scanRadiusValue"),
      scanTheta: document.querySelector("#scanThetaInput"),
      scanThetaValue: document.querySelector("#scanThetaValue"),
      scanPhi: document.querySelector("#scanPhiInput"),
      scanPhiValue: document.querySelector("#scanPhiValue"),
    });
    return;
  }
  const anchorFieldset = el.longitudeNode?.closest("fieldset");
  if (!anchorFieldset) return;
  const fieldset = document.createElement("fieldset");
  fieldset.className = "relation-panel";
  fieldset.innerHTML = `
    <legend data-i18n="legend_relation">关联</legend>
    <div class="field-content">
      <div class="check-grid two">
        <label class="check-row"><input id="relationModeInput" type="checkbox" /><span data-i18n="lbl_relation_mode">关联模式</span></label>
        <label class="check-row"><input id="syncRotationInput" type="checkbox" checked /><span data-i18n="lbl_sync_rotation">同步空间视角</span></label>
      </div>
      <label class="range-row" style="display: flex; align-items: center;">
        <span data-i18n="lbl_radius_r" style="margin-right: 6px;">半径 r</span>
        <input id="scanRadiusInput" type="range" min="0" max="100" step="1" value="45" style="flex:1; margin-right: 6px;" />
        <output id="scanRadiusValue" style="min-width: 32px; text-align: right;">45%</output>
        <button id="playScanRadiusBtn" type="button" style="margin-left: 6px; padding: 2px 8px; background: var(--button-bg); color: var(--button-text); border: none; border-radius: 4px; cursor: pointer;">▶</button>
      </label>
      <label class="range-row">
        <span data-i18n="lbl_dir_theta">方向 θ</span>
        <input id="scanThetaInput" type="range" min="0" max="180" step="1" value="90" />
        <output id="scanThetaValue">90°</output>
      </label>
      <label class="range-row">
        <span data-i18n="lbl_dir_phi">方向 φ</span>
        <input id="scanPhiInput" type="range" min="0" max="360" step="1" value="0" />
        <output id="scanPhiValue">0°</output>
      </label>
      <label class="range-row" style="display: flex; align-items: center;">
        <select id="scanSlicePlaneInput" style="margin-right: 6px; width: auto; background: transparent; color: var(--text); border: 1px solid var(--border); border-radius: 4px; padding: 2px;">
          <option value="xoy">XY 切片</option>
          <option value="xoz">XZ 切片</option>
          <option value="yoz">YZ 切片</option>
        </select>
        <input id="scanSliceZInput" type="range" min="-100" max="100" step="1" value="0" style="flex:1; margin-right: 6px;" />
        <output id="scanSliceZValue" style="min-width: 28px; text-align: right;">0</output>
        <button id="playScanSliceBtn" type="button" style="margin-left: 6px; padding: 2px 8px; background: var(--button-bg); color: var(--button-text); border: none; border-radius: 4px; cursor: pointer;">▶</button>
      </label>
    </div>
  `;
  anchorFieldset.insertAdjacentElement("afterend", fieldset);
  Object.assign(el, {
    relationMode: fieldset.querySelector("#relationModeInput"),
    syncRotation: fieldset.querySelector("#syncRotationInput"),
    scanRadius: fieldset.querySelector("#scanRadiusInput"),
    scanRadiusValue: fieldset.querySelector("#scanRadiusValue"),
    playScanRadiusBtn: fieldset.querySelector("#playScanRadiusBtn"),
    scanTheta: fieldset.querySelector("#scanThetaInput"),
    scanThetaValue: fieldset.querySelector("#scanThetaValue"),
    scanPhi: fieldset.querySelector("#scanPhiInput"),
    scanPhiValue: fieldset.querySelector("#scanPhiValue"),
    scanSlicePlane: fieldset.querySelector("#scanSlicePlaneInput"),
    scanSliceZ: fieldset.querySelector("#scanSliceZInput"),
    scanSliceZValue: fieldset.querySelector("#scanSliceZValue"),
    playScanSliceBtn: fieldset.querySelector("#playScanSliceBtn"),
  });

  // Explicitly bind the input event directly here, bypassing the top-level loop just in case
  if (el.scanSlicePlane) {
    el.scanSlicePlane.addEventListener("change", () => {
      if (!el.relationMode.checked) {
        el.relationMode.checked = true;
        clearRadialObjects();
        renderRadialView(readParams(), readOptions());
      }
      const params = readParams();
      const options = readOptions();
      updateRelationOverlays();
      clearProjectionObjects();
      renderProjectionView(params, options);
      refreshMainProjection3D(params, options);
    });
  }
  if (el.scanSliceZ) {
    el.scanSliceZ.addEventListener("input", () => {
      if (!el.relationMode.checked) {
        el.relationMode.checked = true;
        clearRadialObjects();
        renderRadialView(readParams(), readOptions());
      }
      const params = readParams();
      const options = readOptions();
      updateRelationOverlays();
      clearProjectionObjects();
      renderProjectionView(params, options);
      refreshMainProjection3D(params, options);
    });
  }
  if (el.playScanSliceBtn) {
    let animId = null;
    let scanDir = -5;
    let lastTime = 0;
    const animateSlice = (time) => {
      if (time - lastTime > 50) {
        let val = Number(el.scanSliceZ.value);
        val += scanDir;
        if (val >= 100) { val = 100; scanDir = -5; }
        if (val <= -100) { val = -100; scanDir = 5; }
        el.scanSliceZ.value = val;
        el.scanSliceZ.dispatchEvent(new Event('input'));
        
        lastTime = time;
      }
      animId = requestAnimationFrame(animateSlice);
    };
    el.playScanSliceBtn.addEventListener("click", () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
        el.playScanSliceBtn.textContent = "▶";
      } else {
        if (Number(el.scanSliceZ.value) === 0) {
           el.scanSliceZ.value = 100;
           scanDir = -5;
        }
        animId = requestAnimationFrame(animateSlice);
        el.playScanSliceBtn.textContent = "⏸";
      }
    });
  }
  if (el.playScanRadiusBtn) {
    let animId = null;
    let scanDir = 2;
    let lastTime = 0;
    const animateRadius = (time) => {
      if (time - lastTime > 50) {
        let val = Number(el.scanRadius.value);
        val += scanDir;
        if (val >= 100) { val = 100; scanDir = -2; }
        if (val <= 0) { val = 0; scanDir = 2; }
        el.scanRadius.value = val;
        el.scanRadius.dispatchEvent(new Event('input'));
        
        lastTime = time;
      }
      animId = requestAnimationFrame(animateRadius);
    };
    el.playScanRadiusBtn.addEventListener("click", () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
        el.playScanRadiusBtn.textContent = "▶";
      } else {
        animId = requestAnimationFrame(animateRadius);
        el.playScanRadiusBtn.textContent = "⏸";
      }
    });
  }
}




function presetLabel(n, l, m) {
  return orbitalLabel(n, l, m);
}

function presetValue(n, l, m) {
  return `${n},${l},${m}`;
}

function mOrderForL(l) {
  const order = [0];
  for (let m = 1; m <= l; m += 1) order.push(m, -m);
  return order;
}

function presetsForN(n) {
  const nn = Math.max(1, Math.min(6, Math.round(n) || 1));
  const presets = [];
  for (let l = 0; l < nn; l += 1) {
    for (const m of mOrderForL(l)) {
      presets.push({
        value: presetValue(nn, l, m),
        label: presetLabel(nn, l, m),
      });
    }
  }
  return presets;
}





function syncPresetOptions(params = null) {
  if (!el.preset) return;
  const current = params ?? clampQuantumNumbers(Number(el.n.value), Number(el.l.value), Number(el.m.value));
  const presetN = Number(el.preset.dataset.n);
  if (presetN !== current.n) {
    el.preset.replaceChildren();
    for (const preset of presetsForN(current.n)) {
      const option = document.createElement("option");
      option.value = preset.value;
      option.textContent = preset.label;
      el.preset.append(option);
    }
    el.preset.dataset.n = String(current.n);
  }
  el.preset.value = presetValue(current.n, current.l, current.m);
}

const activityState = {
  challengeTarget: null,
  challengeTotal: 0,
  challengeCorrect: 0,
  dragWindow: null,
  dragging: false,
  dragPointerId: null,
  dragOffsetX: 0,
  dragOffsetY: 0,
  explanationStep: 0,
  explanationPlaying: false,
  explanationStartedAt: 0,
  explanationTimer: null,
  explanationFrame: null,
  animationStep: 0,
  animationPlaying: false,
  animationStartedAt: 0,
  animationTimer: null,
  animationFrame: null,
  animationExporting: false,
  annotationMode: false,
  annotationDrag: null,
};

function readParams() {
  const q = clampQuantumNumbers(Number(el.n.value), Number(el.l.value), Number(el.m.value));
  if (el.sinType?.checked && q.m > 0) q.m = -q.m;
  if (el.cosType?.checked && q.m < 0) q.m = Math.abs(q.m);
  el.n.value = q.n;
  el.l.max = q.n - 1;
  el.l.value = q.l;
  el.m.min = -q.l;
  el.m.max = q.l;
  el.m.value = Math.abs(q.m);
  syncPresetOptions(q);
  return {
    ...q,
    z: Math.max(1, Math.min(10, Number(el.z.value) || 1)),
  };
}

function setNodeControlState(input, available) {
  if (!input) return;
  input.disabled = !available;
  input.closest("label")?.classList.toggle("muted", !available);
  if (!available) input.checked = false;
}

function updateNodeControlAvailability(params) {
  const radialCount = radialNodeRadii(params).length;
  const { polar, azimuthal } = angularNodeInfo(params);
  setNodeControlState(el.radialNode, radialCount > 0);
  setNodeControlState(el.polarNode, polar.length > 0);
  setNodeControlState(el.longitudeNode, azimuthal.length > 0);
}

function getOrbitalMaxExtent(plane) {
  const box = new THREE.Box3();
  if (positiveObject && positiveObject.geometry) {
    if (!positiveObject.geometry.boundingBox) positiveObject.geometry.computeBoundingBox();
    box.union(positiveObject.geometry.boundingBox);
  }
  if (negativeObject && negativeObject.geometry) {
    if (!negativeObject.geometry.boundingBox) negativeObject.geometry.computeBoundingBox();
    box.union(negativeObject.geometry.boundingBox);
  }
  if (cloudPositiveObject && cloudPositiveObject.geometry) {
    if (!cloudPositiveObject.geometry.boundingBox) cloudPositiveObject.geometry.computeBoundingBox();
    box.union(cloudPositiveObject.geometry.boundingBox);
  }
  if (cloudNegativeObject && cloudNegativeObject.geometry) {
    if (!cloudNegativeObject.geometry.boundingBox) cloudNegativeObject.geometry.computeBoundingBox();
    box.union(cloudNegativeObject.geometry.boundingBox);
  }
  if (box.isEmpty()) return Number(el.radius.value) * 1.1;
  
  let bound = 0;
  if (plane === 'yoz') bound = Math.max(Math.abs(box.max.x), Math.abs(box.min.x));
  else if (plane === 'xoz') bound = Math.max(Math.abs(box.max.y), Math.abs(box.min.y));
  else bound = Math.max(Math.abs(box.max.z), Math.abs(box.min.z));
  
  return bound * 1.1;
}

function readOptions() {
  const params = readParams();
  updateNodeControlAvailability(params);
  const matched = el.desktopMatch.checked ? desktopBoxAndIso(params) : null;
  let slice = el.slice.value;
  if (el.xySlice?.checked) slice = "xoy";
  if (el.yzSlice?.checked) slice = "yoz";
  if (el.xzSlice?.checked) slice = "xoz";
  if (!el.xySlice?.checked && !el.yzSlice?.checked && !el.xzSlice?.checked) slice = "none";
  const sliceZPercent = Number(el.scanSliceZ?.value ?? 0);
  const scanPlane = el.scanSlicePlane?.value ?? 'xoy';
  const sliceBound = getOrbitalMaxExtent(scanPlane);
  const options = {
    iso: Number(el.iso.value),
    density: Number(el.density.value),
    radius: Number(el.radius.value),
    opacity: Number(el.opacity.value),
    mode: el.mode.value,
    showCloud: el.cloud?.checked ?? false,
    slice,
    sliceOffset: (sliceZPercent / 100) * sliceBound,
    nodeRadial: Boolean(el.node.checked || el.radialNode?.checked),
    nodePolar: Boolean(el.node.checked || el.polarNode?.checked),
    nodeAzimuthal: Boolean(el.node.checked || el.longitudeNode?.checked),
    showNode: Boolean(el.node.checked || el.radialNode?.checked || el.polarNode?.checked || el.longitudeNode?.checked),
    showAxis: el.axis.checked,
    showBox: el.box.checked,
    showPositive: el.positiveLobe?.checked ?? true,
    showNegative: el.negativeLobe?.checked ?? true,
    wireframe: el.wireframe?.checked ?? false,
    smooth: el.smooth?.checked ?? false,
    showProjection: el.projection?.checked ?? false,
    showProjection3d: el.projection3d?.checked ?? false,
    grid3d: el.grid3d?.checked ?? false,
    cutaway: el.eighth?.checked ? "eighth" : el.quarter?.checked ? "quarter" : el.threeQuarter?.checked ? "threeQuarter" : "none",
    radialMode: el.radialR?.checked ? "R" : el.radialR2?.checked ? "R2" : "RDF",
    radialSection: el.radialSection?.checked ?? false,
    radialSide: el.radialSide?.checked ?? false,
    radialCurve: el.radialCurve?.checked ?? true,
    radialAxis: el.radialAxis?.checked ?? false,
    positiveColor: el.positiveColor.value,
    negativeColor: el.negativeColor.value,
    backgroundColor: el.backgroundColor.value,
    desktopMatched: Boolean(matched),
  };
  el.isoValue.value = options.iso.toFixed(4);
  el.densityValue.value = options.density;
  el.radiusValue.value = options.radius.toFixed(1);
  el.opacityValue.value = options.opacity.toFixed(2);
  if (el.boxSizeDisplay) el.boxSizeDisplay.value = (options.radius * 2.4).toFixed(2);
  if (el.intervalValue) el.intervalValue.value = ((options.radius * 2) / options.density).toFixed(3);
  if (el.probabilityValue) el.probabilityValue.value = "0.800";
  el.iso.disabled = false;
  el.density.disabled = false;
  el.radius.disabled = false;
  return options;
}

function applyDesktopDefaultsToControls() {
  if (!el.desktopMatch.checked) return;
  const matched = desktopBoxAndIso(readParams());
  const iso = Math.min(Number(el.iso.max), Math.max(Number(el.iso.min), matched.iso));
  el.iso.value = iso.toFixed(4);
  el.density.value = Math.min(Number(el.density.max), Math.max(Number(el.density.min), matched.gridSize));
  el.radius.value = Math.min(Number(el.radius.max), Math.max(Number(el.radius.min), matched.radius));
  readOptions();
}

function applyBoxSizeToRadius() {
  if (!el.boxSizeDisplay) return;
  const boxSize = Number(el.boxSizeDisplay.value);
  if (!Number.isFinite(boxSize) || boxSize <= 0) return;
  el.radius.value = Math.min(Number(el.radius.max), Math.max(Number(el.radius.min), boxSize / 2.4));
  readOptions();
}

function makePointCloud(points, color) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
  const seeds = new Float32Array(points.length / 3);
  const indices = new Float32Array(points.length / 3);
  for (let i = 0; i < seeds.length; i += 1) {
    const raw = Math.sin((i + 1) * 12.9898) * 43758.5453;
    seeds[i] = raw - Math.floor(raw);
    indices[i] = i;
  }
  geometry.setAttribute("seed", new THREE.BufferAttribute(seeds, 1));
  geometry.setAttribute("vertexIndex", new THREE.BufferAttribute(indices, 1));
  const material = new THREE.ShaderMaterial({
    clipping: true,
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.clipping,
      {
        uColor: { value: new THREE.Color(color) },
        uTime: { value: 0 },
        uSize: { value: 3.5 },
        uCurrentDrawCount: { value: 9999999.0 },
        uGlobalOpacity: { value: 1.0 },
      }
    ]),
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      #include <clipping_planes_pars_vertex>
      attribute float seed;
      attribute float vertexIndex;
      uniform float uTime;
      uniform float uSize;
      uniform float uCurrentDrawCount;
      uniform float uGlobalOpacity;
      varying float vSeed;
      varying float vPulse;
      varying float vImpact;

      float random(float value) {
        return fract(sin(value * 91.3458) * 47453.5453);
      }

      void main() {
        #include <begin_vertex>
        vSeed = seed;
        float frame = floor(uTime * 13.0 + seed * 11.0);
        float flash = step(0.42, random(seed * 41.0 + frame));
        float shimmer = 0.48 + 0.52 * sin(uTime * (4.5 + seed * 7.0) + seed * 31.0);
        
        float dist = uCurrentDrawCount - vertexIndex;
        float impact = 0.0;
        if (dist >= 0.0 && dist < 3000.0) {
            impact = 1.0 - (dist / 3000.0);
            impact = impact * impact; // non-linear fade
        }
        vImpact = impact;
        
        vPulse = mix(0.18, 1.0, flash) * shimmer;
        gl_PointSize = uSize + flash * 1.4 + impact * 2.0;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }
    `,
    fragmentShader: `
      #include <clipping_planes_pars_fragment>
      uniform vec3 uColor;
      uniform float uGlobalOpacity;
      varying float vSeed;
      varying float vPulse;
      varying float vImpact;

      void main() {
        #include <clipping_planes_fragment>
        vec2 centered = gl_PointCoord - vec2(0.5);
        float radius = length(centered);
        float core = smoothstep(0.42, 0.05, radius);
        float halo = smoothstep(0.5, 0.12, radius) * 0.34;
        
        float baseAlpha = (core + halo) * (0.22 + 0.78 * vPulse);
        float impactAlpha = core * vImpact; // impact is mostly core
        float alpha = clamp(baseAlpha + impactAlpha * 2.0, 0.0, 1.0);
        
        if (alpha < 0.03) discard;
        
        vec3 color = uColor * (0.9 + 0.55 * vPulse);
        color = color + color * (vImpact * 2.0); // Make it glow its own color, not pure white
        
        gl_FragColor = vec4(color, alpha * uGlobalOpacity);
      }
    `,
  });
  return new THREE.Points(geometry, material);
}

let liveSamplingActive = false;
let liveSamplingStartTime = 0;
let wantsLiveSampling = false;
const LIVE_SAMPLING_DURATION = 5000;

function startLiveSampling() {
  if (!el.cloud.checked) {
    el.cloud.checked = true;
  }
  wantsLiveSampling = true;
  renderOrbital();
}

function updatePointCloudAnimation(time, timeMs) {
  let progress = 1.0;
  if (liveSamplingActive) {
    progress = (timeMs - liveSamplingStartTime) / LIVE_SAMPLING_DURATION;
    if (progress >= 1.0) {
      progress = 1.0;
      liveSamplingActive = false;
    }
  }

  for (const object of [positiveObject, negativeObject, cloudPositiveObject, cloudNegativeObject]) {
    if (object?.isPoints && object.material?.uniforms?.uTime) {
      object.material.uniforms.uTime.value = time;
      
      if (liveSamplingActive || progress < 1.0) {
        const totalPoints = object.geometry.attributes.position.count;
        const currentDrawCount = Math.floor(totalPoints * progress);
        object.geometry.setDrawRange(0, currentDrawCount);
        if (object.material.uniforms.uCurrentDrawCount) {
          object.material.uniforms.uCurrentDrawCount.value = currentDrawCount;
        }
      } else {
        object.geometry.setDrawRange(0, Infinity);
        if (object.material.uniforms.uCurrentDrawCount) {
          object.material.uniforms.uCurrentDrawCount.value = 9999999.0;
        }
      }
    }
  }
}

function colorToNumber(value) {
  return Number.parseInt(value.replace("#", "0x"), 16);
}











const materialPool = new Map();

function getMatteOrbitalMaterial(color, opacity, overrides = {}) {
  if (overrides.clippingPlanes || overrides._clipPlanes) return makeMatteOrbitalMaterial(color, opacity, overrides);
  const key = JSON.stringify({ color, opacity, ...overrides });
  if (materialPool.has(key)) return materialPool.get(key);
  const mat = makeMatteOrbitalMaterial(color, opacity, overrides);
  mat.userData = { ...mat.userData, pooled: true };
  materialPool.set(key, mat);
  return mat;
}

function makeMatteOrbitalMaterial(color, opacity, overrides = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    side: THREE.DoubleSide,
    emissive: color,
    emissiveIntensity: 0.025,
    roughness: 0.22,
    metalness: 0.05,
    envMapIntensity: 0.18,
    ...overrides,
  });
}

function makeSurface(surface, color, opacity) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(surface.vertices, 3));
  geometry.setIndex(surface.indices);
  geometry.computeVertexNormals();
  const material = getMatteOrbitalMaterial(color, opacity);
  return new THREE.Mesh(geometry, material);
}

function applyMeshStyle(object, options, noClip = false) {
  if (!object?.material) return;
  object.visible = true;
  const isWireframe = options.wireframe && !options.smooth;
  const basePlanes = options._clipPlanes || clippingPlanesForOptions(options) || [];

  if (isWireframe) {
    if (!object.userData.originalMaterial) {
      object.userData.originalMaterial = object.material;
    }
    object.material = new THREE.MeshBasicMaterial({
      color: object.userData.originalMaterial.color,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
      side: THREE.FrontSide,
      clippingPlanes: noClip ? basePlanes : [...basePlanes, globalXYClipPlane]
    });
  } else {
    if (object.userData.originalMaterial) {
      object.material = object.userData.originalMaterial;
    }
    object.material.wireframe = false;
    object.material.side = THREE.DoubleSide;
    object.material.flatShading = !options.smooth;
    if (!noClip) {
      object.material.clippingPlanes = [...basePlanes, globalXYClipPlane];
      object.material.clipIntersection = false;
    } else {
      object.material.clippingPlanes = basePlanes.length > 0 ? basePlanes : null;
    }
    object.material.needsUpdate = true;
  }
}

function showOrbitalSurface(options) {
  return options.wireframe || options.smooth;
}

function clippingPlanesFor(cutaway) {
  if (cutaway === "quarter") {
    return [
      new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
      new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
    ];
  }
  if (cutaway === "eighth") {
    return [
      new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
      new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
      new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
    ];
  }
  if (cutaway === "threeQuarter") {
    return [new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)];
  }
  return [];
}

function clippingPlanesForOptions(options) {
  const planes = clippingPlanesFor(options.cutaway);
  const sliceAxis = sliceAxisFor(options.slice);
  if (sliceAxis === "x") planes.push(new THREE.Plane(new THREE.Vector3(1, 0, 0), 0));
  if (sliceAxis === "y") planes.push(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));
  if (sliceAxis === "z") planes.push(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
  return planes;
}

function sliceAxisFor(slice) {
  if (slice === "yoz") return "x";
  if (slice === "xoz") return "y";
  if (slice === "xoy") return "z";
  return null;
}

function cutAxesForOptions(options) {
  const axes = [];
  if (options.cutaway === "quarter") axes.push("y", "z");
  if (options.cutaway === "eighth") axes.push("x", "y", "z");
  if (options.cutaway === "threeQuarter") axes.push("y", "z");
  const sliceAxis = sliceAxisFor(options.slice);
  if (sliceAxis) axes.push(sliceAxis);
  return [...new Set(axes)];
}

function makeClosedClippedMesh(source, options, color, params) {
  const planes = options._clipPlanes || clippingPlanesForOptions(options);
  if (!planes.length) return source;
  const capFilter = options._capFilter || (() => true);

  source.updateMatrixWorld(true);
  const position = source.geometry.getAttribute("position");
  const index = source.geometry.index;
  const triangles = [];
  const activeVertexCount = index ? index.count : Math.min(position.count, source.count || position.count);

  function worldVertex(i) {
    return source.localToWorld(new THREE.Vector3(position.getX(i), position.getY(i), position.getZ(i)));
  }

  const triangleCount = Math.floor(activeVertexCount / 3);
  for (let i = 0; i < triangleCount; i += 1) {
    const a = index ? index.getX(i * 3) : i * 3;
    const b = index ? index.getX(i * 3 + 1) : i * 3 + 1;
    const c = index ? index.getX(i * 3 + 2) : i * 3 + 2;
    triangles.push([worldVertex(a), worldVertex(b), worldVertex(c)]);
  }

  let polygons = triangles;
  const capSegmentsByPlane = planes.map(() => []);
  planes.forEach((plane, planeIndex) => {
    const next = [];
    for (const polygon of polygons) {
      const { clipped, segments } = clipPolygonWithPlane(polygon, plane);
      if (clipped.length >= 3) next.push(clipped);
      capSegmentsByPlane[planeIndex].push(...segments);
    }
    polygons = next;
  });

  const surfaceVertices = [];
  const surfaceIndices = [];
  const lobeColor = new THREE.Color(colorToNumber(color));

  function addSurfaceVertex(v) {
    surfaceVertices.push(v.x, v.y, v.z);
    return surfaceVertices.length / 3 - 1;
  }

  for (const polygon of polygons) {
    const base = addSurfaceVertex(polygon[0]);
    for (let i = 1; i < polygon.length - 1; i += 1) {
      const b = addSurfaceVertex(polygon[i]);
      const c = addSurfaceVertex(polygon[i + 1]);
      surfaceIndices.push(base, b, c);
    }
  }

  const shouldBuildGeometryCap = !options._skipCaps;
  const capVertices = [];
  const capValues = [];
  const capIndices = [];

  function addCapVertex(v) {
    capVertices.push(v.x, v.y, v.z);
    capValues.push(psi(params, v.x, v.y, v.z));
    return capVertices.length / 3 - 1;
  }

  function pointInPolygon2D(point, polygon) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
      const pi = polygon[i];
      const pj = polygon[j];
      if ((pi.y > point.y) !== (pj.y > point.y) && point.x < ((pj.x - pi.x) * (point.y - pi.y)) / (pj.y - pi.y + 1e-12) + pi.x) {
        inside = !inside;
      }
    }
    return inside;
  }

  function polygonArea2D(polygon) {
    let area = 0;
    for (let i = 0; i < polygon.length; i += 1) {
      const a = polygon[i];
      const b = polygon[(i + 1) % polygon.length];
      area += a.x * b.y - b.x * a.y;
    }
    return area * 0.5;
  }

  function polygonCentroid3D(points) {
    return points.reduce((sum, point) => sum.add(point), new THREE.Vector3()).multiplyScalar(1 / points.length);
  }

  function makePlaneFrame(plane) {
    const normal = plane.normal.clone().normalize();
    const basisA = Math.abs(normal.x) < 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
    basisA.sub(normal.clone().multiplyScalar(basisA.dot(normal))).normalize();
    const basisB = new THREE.Vector3().crossVectors(normal, basisA).normalize();
    const origin = normal.clone().multiplyScalar(-plane.constant);
    return { normal, basisA, basisB, origin };
  }

  function pointAllowedOnCap(point, planeIndex) {
    if (!capFilter(planeIndex, point)) return false;
    for (let i = 0; i < planes.length; i += 1) {
      if (i === planeIndex) continue;
      if (planes[i].distanceToPoint(point) < -1e-6) return false;
    }
    return true;
  }

  function addSampledCapForPlane(plane, planeIndex) {
    const { basisA, basisB, origin } = makePlaneFrame(plane);
    const radius = options.radius;
    const capDensityFactor = params.n >= 6 ? 6.2 : params.n >= 5 ? 5.4 : 3.8;
    const capMaxSamples = params.n >= 6 ? 420 : params.n >= 5 ? 360 : 280;
    const samples = Math.max(128, Math.min(capMaxSamples, Math.round(options.density * capDensityFactor)));
    const step = (radius * 2) / samples;
    const sign = options._capSign ?? 1;
    const threshold = options.iso * 1.015;
    const gridStride = samples + 1;
    const sampleValues = new Float32Array(gridStride * gridStride);

    function samplePoint(ix, iy) {
      const a = -radius + ix * step;
      const b = -radius + iy * step;
      return origin.clone().addScaledVector(basisA, a).addScaledVector(basisB, b);
    }

    function sampleOffset(ix, iy) {
      return iy * gridStride + ix;
    }

    for (let iy = 0; iy <= samples; iy += 1) {
      for (let ix = 0; ix <= samples; ix += 1) {
        const point = samplePoint(ix, iy);
        sampleValues[sampleOffset(ix, iy)] = sign * psi(params, point.x, point.y, point.z) - threshold;
      }
    }

    function sampleCorner(ix, iy) {
      const point = samplePoint(ix, iy);
      return {
        point,
        value: sampleValues[sampleOffset(ix, iy)],
      };
    }

    function interpolateSample(a, b, t) {
      return {
        point: a.point.clone().lerp(b.point, t),
        value: a.value + (b.value - a.value) * t,
      };
    }

    function crossingRatio(a, b) {
      const denominator = a - b;
      if (Math.abs(denominator) < 1e-12) return 0.5;
      return Math.max(0, Math.min(1, a / denominator));
    }

    function clipSamplePolygonByPlane(polygon, clipPlane) {
      const clipped = [];
      for (let i = 0; i < polygon.length; i += 1) {
        const current = polygon[i];
        const next = polygon[(i + 1) % polygon.length];
        const currentDistance = clipPlane.distanceToPoint(current.point);
        const nextDistance = clipPlane.distanceToPoint(next.point);
        const currentInside = currentDistance >= -1e-7;
        const nextInside = nextDistance >= -1e-7;
        if (currentInside && nextInside) {
          clipped.push(next);
        } else if (currentInside && !nextInside) {
          const t = crossingRatio(currentDistance, nextDistance);
          clipped.push(interpolateSample(current, next, t));
        } else if (!currentInside && nextInside) {
          const t = crossingRatio(currentDistance, nextDistance);
          clipped.push(interpolateSample(current, next, t), next);
        }
      }
      return clipped;
    }

    function clipSamplePolygonByIso(polygon) {
      const clipped = [];
      for (let i = 0; i < polygon.length; i += 1) {
        const current = polygon[i];
        const next = polygon[(i + 1) % polygon.length];
        const currentInside = current.value >= 0;
        const nextInside = next.value >= 0;
        if (currentInside && nextInside) {
          clipped.push(next);
        } else if (currentInside && !nextInside) {
          const t = crossingRatio(current.value, next.value);
          clipped.push(interpolateSample(current, next, t));
        } else if (!currentInside && nextInside) {
          const t = crossingRatio(current.value, next.value);
          clipped.push(interpolateSample(current, next, t), next);
        }
      }
      return clipped;
    }

    function addCapSample(sample) {
      return addCapVertex(sample.point);
    }

    for (let iy = 0; iy < samples; iy += 1) {
      for (let ix = 0; ix < samples; ix += 1) {
        let polygon = [
          sampleCorner(ix, iy),
          sampleCorner(ix + 1, iy),
          sampleCorner(ix + 1, iy + 1),
          sampleCorner(ix, iy + 1),
        ];
        for (let otherIndex = 0; otherIndex < planes.length; otherIndex += 1) {
          if (otherIndex === planeIndex) continue;
          polygon = clipSamplePolygonByPlane(polygon, planes[otherIndex]);
          if (polygon.length < 3) break;
        }
        if (polygon.length < 3) continue;
        polygon = clipSamplePolygonByIso(polygon);
        if (polygon.length < 3) continue;
        const centroid = polygon.reduce((sum, item) => sum.add(item.point), new THREE.Vector3()).multiplyScalar(1 / polygon.length);
        if (!capFilter(planeIndex, centroid)) continue;
        const base = addCapSample(polygon[0]);
        for (let i = 1; i < polygon.length - 1; i += 1) {
          capIndices.push(base, addCapSample(polygon[i]), addCapSample(polygon[i + 1]));
        }
      }
    }
  }

  function addLoopCapForPlane(plane, planeIndex) {
    const normal = plane.normal.clone().normalize();
    const basisA = Math.abs(normal.x) < 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
    basisA.sub(normal.clone().multiplyScalar(basisA.dot(normal))).normalize();
    const basisB = new THREE.Vector3().crossVectors(normal, basisA).normalize();
    const loops = buildSegmentLoops(capSegmentsByPlane[planeIndex]);
    const polygons2D = [];
    for (const loop of loops) {
      if (loop.length < 3) continue;
      let ordered = orderLoopPoints(loop, plane);
      for (let otherIndex = 0; otherIndex < planes.length; otherIndex += 1) {
        if (otherIndex === planeIndex) continue;
        ordered = clipPolygonWithPlane(ordered, planes[otherIndex]).clipped;
        if (ordered.length < 3) break;
      }
      if (ordered.length < 3) continue;
      const centroid = polygonCentroid3D(ordered);
      if (!capFilter(planeIndex, centroid)) continue;
      const points2D = ordered.map((point) => new THREE.Vector2(point.dot(basisA), point.dot(basisB)));
      const area = polygonArea2D(points2D);
      if (Math.abs(area) < 1e-7) continue;
      polygons2D.push({ points3D: ordered, points2D, area, absArea: Math.abs(area), parent: -1, depth: 0 });
    }
    for (let i = 0; i < polygons2D.length; i += 1) {
      const sample = polygons2D[i].points2D[0];
      let parent = -1;
      let parentArea = Number.POSITIVE_INFINITY;
      for (let j = 0; j < polygons2D.length; j += 1) {
        if (i === j || polygons2D[j].absArea <= polygons2D[i].absArea) continue;
        if (pointInPolygon2D(sample, polygons2D[j].points2D) && polygons2D[j].absArea < parentArea) {
          parent = j;
          parentArea = polygons2D[j].absArea;
        }
      }
      polygons2D[i].parent = parent;
    }
    const depthOf = (index) => {
      let depth = 0;
      let parent = polygons2D[index].parent;
      while (parent >= 0) {
        depth += 1;
        parent = polygons2D[parent].parent;
      }
      return depth;
    };
    polygons2D.forEach((polygon, index) => {
      polygon.depth = depthOf(index);
    });
    polygons2D.forEach((outer, outerIndex) => {
      if (outer.depth % 2 !== 0) return;
      const holes = [];
      const holePolygons = [];
      polygons2D.forEach((candidate) => {
        if (candidate.depth % 2 === 1 && candidate.parent === outerIndex) {
          holes.push(candidate.points2D);
          holePolygons.push(candidate);
        }
      });
      const combined3D = [...outer.points3D, ...holePolygons.flatMap((hole) => hole.points3D)];
      const combined2D = [...outer.points2D, ...holes.flat()];
      const vertexOffset = capVertices.length / 3;
      for (const point of combined3D) addCapVertex(point);
      const faces = THREE.ShapeUtils.triangulateShape(outer.points2D, holes);
      for (const face of faces) {
        const p0 = combined3D[face[0]];
        const p1 = combined3D[face[1]];
        const p2 = combined3D[face[2]];
        const midpoint = p0.clone().add(p1).add(p2).multiplyScalar(1 / 3);
        const signedValue = (options._capSign ?? 1) * psi(params, midpoint.x, midpoint.y, midpoint.z);
        if (signedValue < options.iso * 0.48) continue;
        capIndices.push(vertexOffset + face[0], vertexOffset + face[1], vertexOffset + face[2]);
      }
    });
  }

  if (shouldBuildGeometryCap) planes.forEach((plane, planeIndex) => {
    addSampledCapForPlane(plane, planeIndex);
  });

  const surfaceGeometry = new THREE.BufferGeometry();
  surfaceGeometry.setAttribute("position", new THREE.Float32BufferAttribute(surfaceVertices, 3));
  surfaceGeometry.setIndex(surfaceIndices);
  if (options.smooth && !options.wireframe && !options._skipSmooth) smoothBufferGeometry(surfaceGeometry, options);
  surfaceGeometry.computeVertexNormals();
  const surfaceMaterial = getMatteOrbitalMaterial(lobeColor, options.opacity, {
    wireframe: options.wireframe,
    flatShading: !options.smooth,
  });
  const surfaceMesh = new THREE.Mesh(surfaceGeometry, surfaceMaterial);
  surfaceMesh.userData.vertexCount = surfaceIndices.length;
  if (!capIndices.length) return surfaceMesh;

  const capGeometry = new THREE.BufferGeometry();
  const capScale = robustWavefunctionScale(capValues, options.iso * 1.6);
  const capColors = [];
  for (let i = 0; i < capValues.length; i += 1) {
    const value = capValues[i];
    const px = capVertices[i * 3];
    const py = capVertices[i * 3 + 1];
    const pz = capVertices[i * 3 + 2];
    const color = sharedCapColor(value, px, py, pz, options, params, capScale);
    capColors.push(color.r, color.g, color.b);
  }
  capGeometry.setAttribute("position", new THREE.Float32BufferAttribute(capVertices, 3));
  capGeometry.setAttribute("color", new THREE.Float32BufferAttribute(capColors, 3));
  capGeometry.setIndex(capIndices);
  capGeometry.computeVertexNormals();
  const isCoordinateSlice = Boolean(sliceAxisFor(options.slice));
  const showFullCapColor = isCoordinateSlice || options.cutaway !== "none";
  // Use Phong material so the 3D surface reacts to light and shows its shape!
  const capMaterial = new THREE.MeshPhongMaterial({
    vertexColors: true,
    side: THREE.DoubleSide,
    shininess: 50,
    transparent: false,
    opacity: 1,
    depthWrite: true,
    clippingPlanes: [globalXYClipPlane]
  });
  capMaterial.toneMapped = false;
  const capMesh = new THREE.Mesh(capGeometry, capMaterial);
  capMesh.name = "cutCapSurface";
  capMesh.renderOrder = showFullCapColor ? 3 : 1;
  const capGlowMaterial = new THREE.MeshBasicMaterial({
    vertexColors: true,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.26,
    depthWrite: false,
    depthTest: true,
    blending: THREE.AdditiveBlending,
    clippingPlanes: [globalXYClipPlane]
  });
  capGlowMaterial.toneMapped = false;
  const capGlowMesh = new THREE.Mesh(capGeometry, capGlowMaterial);
  capGlowMesh.name = "cutCapGlow";
  capGlowMesh.renderOrder = capMesh.renderOrder + 0.05;
  const group = new THREE.Group();
  group.add(surfaceMesh, capMesh, capGlowMesh);
  group.userData.vertexCount = surfaceIndices.length + capIndices.length * 2;
  return group;
}

function objectVertexCount(object) {
  let count = object?.userData?.vertexCount || 0;
  object?.traverse?.((child) => {
    if (child !== object) count += child.userData?.vertexCount || 0;
  });
  return count;
}

















async function makeCachedMarchingCubes(workerIdx, params, options, sign, color) {
  return await makeMarchingCubes(workerIdx, params, options, sign, color);
}

function makeUnionCutMesh(source, options, color, params, regions) {
  const group = new THREE.Group();
  let count = 0;
  for (const region of regions) {
    const piece = makeClosedClippedMesh(source, {
      ...options,
      _clipPlanes: region.planes,
      _capFilter: region.capFilter,
      _skipSmooth: true,
    }, color, params);
    if (!piece) continue;
    group.add(piece);
    count += objectVertexCount(piece);
  }
  group.userData.vertexCount = count;
  return group;
}

function makeClippedSurfacePiece(source, options, color, planes) {
  const mesh = makeStaticMarchingMesh(source, {
    ...options,
    cutaway: "none",
    slice: "none",
  }, color);
  if (mesh.material) {
    mesh.material.clippingPlanes = [...planes, globalXYClipPlane];
    mesh.material.clipIntersection = false;
    mesh.material.needsUpdate = true;
  }
  return mesh;
}

function makeClippedSurfaceUnion(source, options, color, regions) {
  const group = new THREE.Group();
  let count = 0;
  for (const region of regions) {
    const piece = makeClippedSurfacePiece(source, options, color, region.planes);
    if (!piece) continue;
    group.add(piece);
    count += objectVertexCount(piece);
  }
  group.userData.vertexCount = count;
  return group;
}

function sOrbitalIsoRadii(params, options, sign) {
  const roots = [];
  const maxR = options.radius;
  const steps = Math.max(1800, params.n * 620);
  let previousR = 0;
  let previousValue = sign * psi(params, 0, 0, 0) - options.iso;

  for (let i = 1; i <= steps; i += 1) {
    const r = (maxR * i) / steps;
    const value = sign * psi(params, r, 0, 0) - options.iso;
    if (Number.isFinite(value) && Number.isFinite(previousValue) && previousValue * value < 0) {
      let lo = previousR;
      let hi = r;
      let vlo = previousValue;
      for (let k = 0; k < 36; k += 1) {
        const mid = (lo + hi) / 2;
        const vmid = sign * psi(params, mid, 0, 0) - options.iso;
        if (vlo * vmid <= 0) {
          hi = mid;
        } else {
          lo = mid;
          vlo = vmid;
        }
      }
      const root = (lo + hi) / 2;
      if (root > 0.02 && !roots.some((existing) => Math.abs(existing - root) < 0.025)) roots.push(root);
    }
    previousR = r;
    previousValue = value;
  }
  return roots;
}

function sOrbitalClipRegions(options) {
  const slicePlane = (() => {
    const axis = sliceAxisFor(options.slice);
    if (axis === "x") return new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
    if (axis === "y") return new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    if (axis === "z") return new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    return null;
  })();
  const withSlice = (planes) => (slicePlane ? [...planes, slicePlane] : planes);
  if (options.cutaway === "threeQuarter") {
    return [
      { planes: withSlice([new THREE.Plane(new THREE.Vector3(0, -1, 0), 0)]) },
      { planes: withSlice([new THREE.Plane(new THREE.Vector3(0, 0, -1), 0)]) },
    ];
  }
  return [{ planes: clippingPlanesForOptions(options) }];
}

function makeSOrbitalCutMesh(params, options, sign, color) {
  const radii = sOrbitalIsoRadii(params, options, sign);
  const group = new THREE.Group();
  const regions = sOrbitalClipRegions(options);
  const baseColor = colorToNumber(color);
  let count = 0;

  for (const radius of radii) {
    const geometry = new THREE.SphereGeometry(radius, params.n >= 5 ? 160 : 128, params.n >= 5 ? 96 : 72);
    for (const region of regions) {
      const material = getMatteOrbitalMaterial(baseColor, options.opacity, {
        wireframe: options.wireframe,
        flatShading: !options.smooth,
        clippingPlanes: region.planes,
        clipIntersection: false,
      });
      const mesh = new THREE.Mesh(geometry.clone(), material);
      mesh.userData.vertexCount = geometry.getAttribute("position").count;
      group.add(mesh);
      count += mesh.userData.vertexCount;
    }
    geometry.dispose();
  }
  const caps = makeCutawayCaps(params, options, sign);
  if (caps) {
    group.add(caps);
    count += objectVertexCount(caps);
  }
  group.userData.vertexCount = count;
  return group.children.length ? group : null;
}

function makeAngleCutMesh(source, options, color, params) {
  if (options.cutaway === "quarter") {
    return makeClosedClippedMesh(source, {
      ...options,
      _clipPlanes: [
        new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
        new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
      ],
      _skipSmooth: true,
    }, color, params);
  }
  if (options.cutaway === "eighth") {
    return makeClosedClippedMesh(source, {
      ...options,
      _clipPlanes: [
        new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
        new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
        new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
      ],
      _skipSmooth: true,
    }, color, params);
  }
  if (options.cutaway === "threeQuarter") {
    return makeUnionCutMesh(source, options, color, params, [
      {
        planes: [new THREE.Plane(new THREE.Vector3(0, -1, 0), 0)],
        capFilter: (_planeIndex, center) => center.z > 0,
      },
      {
        planes: [
        new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
          new THREE.Plane(new THREE.Vector3(0, 0, -1), 0),
        ],
        capFilter: (planeIndex, center) => planeIndex === 1 && center.y > 0,
      },
    ]);
  }
  return null;
}

function makeStaticMarchingMesh(source, options, color) {
  source.updateMatrixWorld(true);
  const position = source.geometry.getAttribute("position");
  const sourceCount = Number.isFinite(source.count) && source.count > 0 ? source.count : Number.POSITIVE_INFINITY;
  const drawCount = Number.isFinite(source.geometry.drawRange?.count) && source.geometry.drawRange.count > 0
    ? source.geometry.drawRange.count
    : Number.POSITIVE_INFINITY;
  const activeVertexCount = Math.min(position.count, sourceCount, drawCount);
  const vertices = [];
  const indices = [];
  const sharedVertices = new Map();

  function isFinitePoint(point) {
    return Number.isFinite(point.x) && Number.isFinite(point.y) && Number.isFinite(point.z);
  }

  const sliceAxis = sliceAxisFor(options.slice);

  function flattenCutawayPoint(point) {
    if (options.cutaway === "quarter") {
      if (point.y > 0) point.y = 0;
      if (point.z > 0) point.z = 0;
    } else if (options.cutaway === "eighth") {
      if (point.x > 0) point.x = 0;
      if (point.y > 0) point.y = 0;
      if (point.z > 0) point.z = 0;
    } else if (options.cutaway === "threeQuarter" && point.y > 0 && point.z > 0) {
      if (point.y < point.z) point.y = 0;
      else point.z = 0;
    }
    if (sliceAxis === "x" && point.x > 0) point.x = 0;
    if (sliceAxis === "y" && point.y > 0) point.y = 0;
    if (sliceAxis === "z" && point.z > 0) point.z = 0;
    return point;
  }

  function addWorldVertex(i, share) {
    const point = source.localToWorld(new THREE.Vector3(position.getX(i), position.getY(i), position.getZ(i)));
    flattenCutawayPoint(point);
    if (!isFinitePoint(point)) return -1;
    if (share) {
      const q = 10000;
      const key = `${Math.round(point.x * q)},${Math.round(point.y * q)},${Math.round(point.z * q)}`;
      if (sharedVertices.has(key)) return sharedVertices.get(key);
      const vertexIndex = vertices.length / 3;
      vertices.push(point.x, point.y, point.z);
      sharedVertices.set(key, vertexIndex);
      return vertexIndex;
    }
    vertices.push(point.x, point.y, point.z);
    return vertices.length / 3 - 1;
  }

  const triangleCount = Math.floor(activeVertexCount / 3);
  const shareVertices = options.smooth || options.wireframe;
  for (let i = 0; i < triangleCount; i += 1) {
    const a = i * 3;
    const b = i * 3 + 1;
    const c = i * 3 + 2;
    const ia = addWorldVertex(a, shareVertices);
    const ib = addWorldVertex(b, shareVertices);
    const ic = addWorldVertex(c, shareVertices);
    if (ia >= 0 && ib >= 0 && ic >= 0) indices.push(ia, ib, ic);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  if (options.smooth && !options.wireframe) smoothBufferGeometry(geometry, options);
  geometry.computeVertexNormals();

  const isWireframe = options.wireframe && !options.smooth;
  let material;
  if (isWireframe) {
    material = new THREE.MeshBasicMaterial({
      color: colorToNumber(color),
      wireframe: true,
      transparent: true,
      opacity: 0.8,
      side: THREE.FrontSide,
      clippingPlanes: [globalXYClipPlane]
    });
  } else {
    material = source.material.clone();
    material.color = new THREE.Color(colorToNumber(color));
    material.emissive = new THREE.Color(colorToNumber(color));
    material.wireframe = false;
    material.side = THREE.DoubleSide;
    material.flatShading = !options.smooth;
    material.clippingPlanes = [globalXYClipPlane];
    material.needsUpdate = true;
  }

  const mesh = new THREE.Mesh(geometry, material);
  mesh.userData.vertexCount = activeVertexCount;
  return mesh;
}

function smoothBufferGeometry(geometry, options) {
  const position = geometry.getAttribute("position");
  const index = geometry.index;
  if (!position || !index) return;

  const vertexCount = position.count;
  const adjacency = Array.from({ length: vertexCount }, () => new Set());
  for (let i = 0; i < index.count; i += 3) {
    const a = index.getX(i);
    const b = index.getX(i + 1);
    const c = index.getX(i + 2);
    adjacency[a].add(b).add(c);
    adjacency[b].add(a).add(c);
    adjacency[c].add(a).add(b);
  }

  const eps = Math.max(0.035, options.radius / Math.max(80, options.density * 2));
  const locked = new Uint8Array(vertexCount);
  const sliceAxis = sliceAxisFor(options.slice);
  for (let i = 0; i < vertexCount; i += 1) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);
    if (options.cutaway === "quarter" && (Math.abs(y) < eps || Math.abs(z) < eps)) locked[i] = 1;
    if (options.cutaway === "eighth" && (Math.abs(x) < eps || Math.abs(y) < eps || Math.abs(z) < eps)) locked[i] = 1;
    if (options.cutaway === "threeQuarter" && (Math.abs(y) < eps || Math.abs(z) < eps)) locked[i] = 1;
    if (sliceAxis === "x" && Math.abs(x) < eps) locked[i] = 1;
    if (sliceAxis === "y" && Math.abs(y) < eps) locked[i] = 1;
    if (sliceAxis === "z" && Math.abs(z) < eps) locked[i] = 1;
  }

  const source = new Float32Array(position.array);
  const target = new Float32Array(source.length);
  const iterations = options.cutaway === "none" ? 10 : 7;
  const relaxation = options.cutaway === "none" ? 0.16 : 0.1;

  for (let iter = 0; iter < iterations; iter += 1) {
    target.set(source);
    for (let i = 0; i < vertexCount; i += 1) {
      if (locked[i] || adjacency[i].size < 3) continue;
      let ax = 0;
      let ay = 0;
      let az = 0;
      for (const neighbor of adjacency[i]) {
        const ni = neighbor * 3;
        ax += source[ni];
        ay += source[ni + 1];
        az += source[ni + 2];
      }
      const count = adjacency[i].size;
      const pi = i * 3;
      target[pi] = source[pi] + (ax / count - source[pi]) * relaxation;
      target[pi + 1] = source[pi + 1] + (ay / count - source[pi + 1]) * relaxation;
      target[pi + 2] = source[pi + 2] + (az / count - source[pi + 2]) * relaxation;
    }
    source.set(target);
  }

  position.array.set(source);
  position.needsUpdate = true;
}

function cloneDisplayMesh(source, options) {
  const mesh = new THREE.Mesh(source.geometry.clone(), source.material.clone());
  mesh.material.wireframe = options.wireframe;
  mesh.material.flatShading = !options.smooth;
  mesh.material.needsUpdate = true;
  return mesh;
}

function clipPolygonWithPlane(polygon, plane) {
  const clipped = [];
  const intersections = [];
  for (let i = 0; i < polygon.length; i += 1) {
    const current = polygon[i];
    const next = polygon[(i + 1) % polygon.length];
    const currentInside = plane.distanceToPoint(current) >= -1e-7;
    const nextInside = plane.distanceToPoint(next) >= -1e-7;
    if (currentInside && nextInside) {
      clipped.push(next.clone());
    } else if (currentInside && !nextInside) {
      const intersection = intersectSegmentPlane(current, next, plane);
      clipped.push(intersection);
      intersections.push(intersection);
    } else if (!currentInside && nextInside) {
      const intersection = intersectSegmentPlane(current, next, plane);
      clipped.push(intersection, next.clone());
      intersections.push(intersection);
    }
  }
  const segments = intersections.length === 2 ? [[intersections[0], intersections[1]]] : [];
  return { clipped, segments };
}

function intersectSegmentPlane(a, b, plane) {
  const ab = b.clone().sub(a);
  const denominator = plane.normal.dot(ab);
  if (Math.abs(denominator) < 1e-10) return a.clone();
  const t = -(plane.normal.dot(a) + plane.constant) / denominator;
  return a.clone().add(ab.multiplyScalar(Math.max(0, Math.min(1, t))));
}

function pointKey(point) {
  const q = 10000;
  return `${Math.round(point.x * q)},${Math.round(point.y * q)},${Math.round(point.z * q)}`;
}

function buildSegmentLoops(segments) {
  const points = new Map();
  const adjacency = new Map();
  function addPoint(point) {
    const key = pointKey(point);
    if (!points.has(key)) points.set(key, point.clone());
    if (!adjacency.has(key)) adjacency.set(key, new Set());
    return key;
  }
  for (const [a, b] of segments) {
    const ak = addPoint(a);
    const bk = addPoint(b);
    if (ak === bk) continue;
    adjacency.get(ak).add(bk);
    adjacency.get(bk).add(ak);
  }

  const loops = [];
  const usedEdges = new Set();
  function edgeKey(a, b) {
    return a < b ? `${a}|${b}` : `${b}|${a}`;
  }

  for (const start of adjacency.keys()) {
    for (const next of adjacency.get(start)) {
      const firstEdge = edgeKey(start, next);
      if (usedEdges.has(firstEdge)) continue;
      const loopKeys = [start];
      let prev = start;
      let current = next;
      usedEdges.add(firstEdge);
      let guard = 0;
      while (guard < 20000) {
        loopKeys.push(current);
        const neighbors = [...adjacency.get(current)];
        const candidate = neighbors.find((key) => key !== prev && !usedEdges.has(edgeKey(current, key))) ?? neighbors.find((key) => key !== prev);
        if (!candidate || candidate === start) break;
        usedEdges.add(edgeKey(current, candidate));
        prev = current;
        current = candidate;
        guard += 1;
      }
      const loop = loopKeys.map((key) => points.get(key));
      if (loop.length >= 3) loops.push(loop);
    }
  }
  return loops;
}

function orderLoopPoints(points, plane) {
  const center = points.reduce((sum, point) => sum.add(point), new THREE.Vector3()).multiplyScalar(1 / points.length);
  const normal = plane.normal.clone().normalize();
  const basisA = Math.abs(normal.x) < 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  basisA.sub(normal.clone().multiplyScalar(basisA.dot(normal))).normalize();
  const basisB = new THREE.Vector3().crossVectors(normal, basisA).normalize();
  return [...points].sort((p1, p2) => {
    const v1 = p1.clone().sub(center);
    const v2 = p2.clone().sub(center);
    const a1 = Math.atan2(v1.dot(basisB), v1.dot(basisA));
    const a2 = Math.atan2(v2.dot(basisB), v2.dot(basisA));
    return a1 - a2;
  });
}

async function makeBaseMarchingSource(workerIdx, params, options, renderOptions, sign, color) {
  const material = getMatteOrbitalMaterial(colorToNumber(color), options.opacity);
  const maxPolyCount = params.n >= 5 ? 500000 : 160000;
  const mesh = new MarchingCubes(renderOptions.density, material, true, true, maxPolyCount);
  mesh.isolation = renderOptions.iso;
  mesh.position.set(0, 0, 0);
  mesh.scale.set(renderOptions.radius, renderOptions.radius, renderOptions.radius);
  
  const updatedBuffer = await runFillWorker(workerIdx, mesh.field.buffer, params, { ...renderOptions, cutaway: "none" }, sign);
  mesh.field = new Float32Array(updatedBuffer);
  mesh.update();
  return mesh;
}

async function makeMarchingCubes(workerIdx, params, options, sign, color) {
  const hasCutBoundary = options.cutaway !== "none" || options.slice !== "none";
  if (params.l === 0 && hasCutBoundary) {
    const sMesh = makeSOrbitalCutMesh(params, options, sign, color);
    if (sMesh) return sMesh;
  }
  const smoothDensity = options.smooth && !options.wireframe
    ? Math.round(options.density * (hasCutBoundary ? 3 : 2))
    : options.density;
  const renderOptions = {
    ...options,
    density: Math.min(hasCutBoundary ? 220 : 180, Math.max(options.density, smoothDensity)),
  };
  const mesh = await makeBaseMarchingSource(workerIdx, params, options, renderOptions, sign, color);
  const signedOptions = { ...options, _capSign: sign, _skipCaps: params.l === 0 };
  const angleCut = makeAngleCutMesh(mesh, signedOptions, color, params);
  if (angleCut) return angleCut;
  if (clippingPlanesForOptions(options).length) return makeClosedClippedMesh(mesh, signedOptions, color, params);
  return makeStaticMarchingMesh(mesh, options, color);
}

function makeNodeSurface(params, options) {
  const group = new THREE.Group();
  const guides = makeNodeGuideSurfaces(params, options.radius, options);
  if (guides) group.add(guides);
  group.userData.vertexCount = objectVertexCount(group);
  return group.children.length ? group : null;
}

function makeNodeGuideMaterial(color, opacity = 0.18) {
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    side: THREE.DoubleSide,
    depthWrite: false,
    depthTest: true,
    blending: THREE.AdditiveBlending,
  });
  material.toneMapped = false;
  return material;
}

function makePlaneThroughZ(phi, radius, material) {
  const u = new THREE.Vector3(Math.cos(phi), Math.sin(phi), 0).multiplyScalar(radius);
  const z = new THREE.Vector3(0, 0, radius);
  const vertices = [
    -u.x - z.x, -u.y - z.y, -u.z - z.z,
    u.x - z.x, u.y - z.y, u.z - z.z,
    u.x + z.x, u.y + z.y, u.z + z.z,
    -u.x + z.x, -u.y + z.y, -u.z + z.z,
  ];
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex([0, 1, 2, 0, 2, 3]);
  geometry.computeVertexNormals();
  return new THREE.Mesh(geometry, material);
}

function makePolarNodeSurface(theta, radius, material) {
  const alpha = Math.min(theta, Math.PI - theta);
  if (Math.abs(alpha - Math.PI / 2) < 0.018) {
    const disk = new THREE.Mesh(new THREE.CircleGeometry(radius, 160), material);
    disk.renderOrder = 3;
    return disk;
  }

  const ringRadius = radius * Math.sin(alpha);
  const height = radius * Math.cos(alpha);
  const segments = 160;
  const vertices = [];
  const indices = [];
  for (const sign of [1, -1]) {
    const base = vertices.length / 3;
    vertices.push(0, 0, 0);
    for (let i = 0; i <= segments; i += 1) {
      const phi = (Math.PI * 2 * i) / segments;
      vertices.push(ringRadius * Math.cos(phi), ringRadius * Math.sin(phi), sign * height);
    }
    for (let i = 1; i <= segments; i += 1) indices.push(base, base + i, base + i + 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const cone = new THREE.Mesh(geometry, material);
  cone.renderOrder = 3;
  return cone;
}

function makeNodeGuideSurfaces(params, radius, options = {}) {
  const group = new THREE.Group();
  if (options.nodeRadial) {
    const radialMaterial = makeNodeGuideMaterial(0xffb000, 0.34);
    for (const r of radialNodeRadii(params)) {
      if (r <= 0.02 || r >= radius * 0.99) continue;
      const shell = new THREE.Mesh(new THREE.SphereGeometry(r, 128, 64), radialMaterial.clone());
      shell.renderOrder = 3;
      group.add(shell);
      group.add(sphereWireLines(r, 0xffe14a, 0.72));
    }
  }

  const { polar, azimuthal } = angularNodeInfo(params);
  if (options.nodePolar) {
    const polarMaterial = makeNodeGuideMaterial(0x00ff72, 0.32);
    for (const theta of polar) group.add(makePolarNodeSurface(theta, radius * 1.04, polarMaterial.clone()));
  }

  if (options.nodeAzimuthal) {
    const azimuthalMaterial = makeNodeGuideMaterial(0x00b7ff, 0.3);
    for (const phi of azimuthal) {
      const plane = makePlaneThroughZ(phi, radius * 1.04, azimuthalMaterial.clone());
      plane.renderOrder = 3;
      group.add(plane);
    }
  }
  return group.children.length ? group : null;
}

function makeAngularNodeGuides(params, radius, options = {}) {
  const group = new THREE.Group();
  const { polar, azimuthal } = angularNodeInfo(params);
  if (options.nodePolar) {
    const polarMaterial = makeNodeGuideMaterial(0x00ff72, 0.34);
    for (const theta of polar) group.add(makePolarNodeSurface(theta, radius, polarMaterial.clone()));
  }
  if (options.nodeAzimuthal) {
    const azimuthalMaterial = makeNodeGuideMaterial(0x00b7ff, 0.32);
    for (const phi of azimuthal) group.add(makePlaneThroughZ(phi, radius, azimuthalMaterial.clone()));
  }
  return group.children.length ? group : null;
}

function makeSlicePlane(params, options) {
  // Desktop-style xy/yz/xz slices are handled as cut-open isosurfaces with
  // colored caps in makeCutawayCaps(), not as an extra flat overlay plane.
  return null;
  if (options.slice === "none") return null;

  const canvas = document.createElement("canvas");
  canvas.width = 180;
  canvas.height = 180;
  const ctx = canvas.getContext("2d");
  const image = ctx.createImageData(canvas.width, canvas.height);
  const data = sampleSlice(params, options, options.slice, canvas.width);
  const maxAbs = data.maxAbs || 1;

  for (let y = 0; y < canvas.height; y += 1) {
    for (let x = 0; x < canvas.width; x += 1) {
      const value = data.rows[y][x] / maxAbs;
      const index = (y * canvas.width + x) * 4;
      if (value >= 0) {
        image.data[index] = 255;
        image.data[index + 1] = Math.round(245 - Math.abs(value) * 140);
        image.data[index + 2] = Math.round(245 - Math.abs(value) * 115);
      } else {
        image.data[index] = Math.round(235 - Math.abs(value) * 130);
        image.data[index + 1] = Math.round(242 - Math.abs(value) * 95);
        image.data[index + 2] = 255;
      }
      image.data[index + 3] = Math.round(55 + Math.min(1, Math.abs(value)) * 160);
    }
  }
  ctx.putImageData(image, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.68,
    depthWrite: false,
  });
  const geometry = new THREE.PlaneGeometry(options.radius * 2, options.radius * 2, 1, 1);
  const mesh = new THREE.Mesh(geometry, material);
  if (options.slice === "xoy") {
    mesh.rotation.set(0, 0, 0);
  } else if (options.slice === "xoz") {
    mesh.rotation.set(Math.PI / 2, 0, 0);
  } else if (options.slice === "yoz") {
    mesh.rotation.set(0, Math.PI / 2, 0);
  }
  return mesh;
}

function makeBoundaryBox(radius) {
  const geometry = new THREE.BoxGeometry(radius * 2, radius * 2, radius * 2);
  const edges = new THREE.EdgesGeometry(geometry);
  
  const lineGeometry = new THREE.BufferGeometry().copy(edges);
  const material = new THREE.LineDashedMaterial({ 
    color: 0x88eeff, 
    transparent: true, 
    opacity: 0.45,
    dashSize: radius * 0.08,
    gapSize: radius * 0.04,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  
  const lines = new THREE.LineSegments(lineGeometry, material);
  lines.computeLineDistances();
  
  geometry.dispose();
  edges.dispose();
  return lines;
}

function makeCutawayCaps(params, options, forcedSign = null) {
  const planes = cutAxesForOptions(options);
  if (!planes.length) return null;
  const group = new THREE.Group();
  for (const plane of planes) {
    const cap = makeCutPlaneMesh(params, options, plane, forcedSign);
    if (cap) group.add(cap);
  }
  return group.children.length ? group : null;
}

function sliceCapColor(value, scale) {
  const raw = Math.max(0, Math.min(1, Math.abs(value) / Math.max(scale * 0.5, 1e-12)));
  const t = Math.pow(raw, 0.52);
  if (value >= 0) return new THREE.Color(0xff00d8).lerp(new THREE.Color(0xff1212), t);
  return new THREE.Color(0x00eaff).lerp(new THREE.Color(0x1018ff), t);
}

function sharedCapColor(value, x, y, z, options, params, capScale) {
  const capBackground = new THREE.Color(options.backgroundColor || "#000000");
  const capPositiveRim = new THREE.Color(0xff00d8);
  const capNegativeRim = new THREE.Color(0x00eaff);
  const capSmoothstep = (edge0, edge1, currentValue) => {
    const t = Math.max(0, Math.min(1, (currentValue - edge0) / Math.max(1e-12, edge1 - edge0)));
    return t * t * (3 - 2 * t);
  };
  const radialFraction = Math.min(1, Math.hypot(x, y, z) / Math.max(options.radius, 1e-9));
  const innerWeight = Math.pow(1 - radialFraction, 1.45);
  const highNWeight = Math.max(0, Math.min(1, (params.n - 4) / 2));
  const signedValue = Math.abs(value);
  const edgeStart = options.iso * (0.86 - innerWeight * 0.18 - highNWeight * 0.04);
  const edgeEnd = options.iso * (1.62 + innerWeight * 1.05 + highNWeight * 0.28);
  const innerStart = options.iso * (1.05 + innerWeight * 0.18);
  const innerEnd = Math.max(options.iso * (2.1 + innerWeight * 1.05 + highNWeight * 0.22), capScale * (0.48 + innerWeight * 0.14));
  const edgeFeather = capSmoothstep(edgeStart, edgeEnd, signedValue);
  const innerFeather = capSmoothstep(innerStart, innerEnd, signedValue);
  const phaseColor = sliceCapColor(value, capScale);
  const rimColor = value >= 0 ? capPositiveRim : capNegativeRim;
  const phaseStrength = 0.38 + innerFeather * (0.62 - innerWeight * 0.06);
  const softPhase = rimColor.clone().lerp(phaseColor, Math.max(0.34, phaseStrength));
  const backgroundMix = Math.max(0, (1 - edgeFeather) * (0.16 + innerWeight * 0.06));
  return softPhase.clone().lerp(capBackground, backgroundMix);
}

function robustWavefunctionScale(values, fallback) {
  const absValues = values
    .map((value) => Math.abs(value))
    .filter((value) => Number.isFinite(value) && value > 1e-12)
    .sort((a, b) => a - b);
  if (!absValues.length) return Math.max(fallback, 1e-9);
  const percentileIndex = Math.min(absValues.length - 1, Math.floor(absValues.length * 0.82));
  return Math.max(fallback, absValues[percentileIndex]);
}

function makeCutPlaneMesh(params, options, plane, forcedSign = null, offset = 0, brightnessMultiplier = 1.0, fastMode = false) {
  let samples = Math.max(96, Math.min(params.n >= 5 ? 144 : 120, Math.round(options.density * 2.5)));
  if (fastMode) samples = 32;
  if (typeof cinematicActive !== "undefined" && cinematicActive && !options._forceHighQualityCap) {
    samples = Math.min(samples, 64);
  }
  if (options._forceHighQualityCap) {
    const highQualitySamples = Math.min(
      params.n >= 6 ? 260 : 220,
      Math.round(options.density * (params.n >= 6 ? 4.2 : 3.6))
    );
    samples = Math.max(samples, highQualitySamples);
  }
  const radius = options.radius;
  function pointFor(a, b) {
    if (plane === "x") return [offset, a, b];
    if (plane === "y") return [a, offset, b];
    return [a, b, offset];
  }
  function inAngleCutRegion(x, y, z) {
    if (options.cutaway === "quarter" || options.cutaway === "threeQuarter") {
      if (plane === "y") return z > 0;
      if (plane === "z") return y > 0;
      return false;
    }
    if (options.cutaway === "eighth") {
      if (plane === "x") return y > 0 && z > 0;
      if (plane === "y") return x > 0 && z > 0;
      if (plane === "z") return x > 0 && y > 0;
      return false;
    }
    return true;
  }

  const gridStride = samples + 1;
  const threshold = options.iso * 1.015;
  const values = new Float32Array(gridStride * gridStride);
  const visibleValues = [];
  const sampleOffset = (ix, iy) => iy * gridStride + ix;
  for (let iy = 0; iy <= samples; iy += 1) {
    const b = radius - (2 * radius * iy) / samples;
    for (let ix = 0; ix <= samples; ix += 1) {
      const a = -radius + (2 * radius * ix) / samples;
      const [x, y, z] = pointFor(a, b);
      const value = psi(params, x, y, z);
      values[sampleOffset(ix, iy)] = value;
      const signMatches = forcedSign == null || (forcedSign > 0 ? value >= 0 : value < 0);
      if (inAngleCutRegion(x, y, z) && signMatches && Math.abs(value) >= options.iso * 0.94) visibleValues.push(value);
    }
  }
  if (!visibleValues.length) return null;

  const capScale = robustWavefunctionScale(visibleValues, options.iso * 1.6);
  const vertices = [];
  const colors = [];
  const indices = [];

  function signedSampleValue(rawValue, phaseSign = forcedSign) {
    return phaseSign == null ? Math.abs(rawValue) - threshold : phaseSign * rawValue - threshold;
  }

  function sampleCorner(ix, iy, phaseSign = forcedSign) {
    const a = -radius + (2 * radius * ix) / samples;
    const b = radius - (2 * radius * iy) / samples;
    const [x, y, z] = pointFor(a, b);
    const rawValue = values[sampleOffset(ix, iy)];
    return {
      point: new THREE.Vector3(x, y, z),
      rawValue,
      value: signedSampleValue(rawValue, phaseSign),
    };
  }

  function interpolateSample(a, b, t) {
    return {
      point: a.point.clone().lerp(b.point, t),
      rawValue: a.rawValue + (b.rawValue - a.rawValue) * t,
      value: a.value + (b.value - a.value) * t,
    };
  }

  function crossingRatio(a, b) {
    const denominator = a - b;
    if (Math.abs(denominator) < 1e-12) return 0.5;
    return Math.max(0, Math.min(1, a / denominator));
  }

  function clipSamplePolygonByIso(polygon) {
    const clipped = [];
    for (let i = 0; i < polygon.length; i += 1) {
      const current = polygon[i];
      const next = polygon[(i + 1) % polygon.length];
      const currentInside = current.value >= 0;
      const nextInside = next.value >= 0;
      if (currentInside && nextInside) {
        clipped.push(next);
      } else if (currentInside && !nextInside) {
        clipped.push(interpolateSample(current, next, crossingRatio(current.value, next.value)));
      } else if (!currentInside && nextInside) {
        clipped.push(interpolateSample(current, next, crossingRatio(current.value, next.value)), next);
      }
    }
    return clipped;
  }

  function addCapVertex(sample) {
    const { x, y, z } = sample.point;
    vertices.push(x, y, z);
    const color = sharedCapColor(sample.rawValue, x, y, z, options, params, capScale);
    colors.push(color.r, color.g, color.b);
    return vertices.length / 3 - 1;
  }

  const phaseSigns = options._separatePhaseCaps && forcedSign == null ? [1, -1] : [forcedSign];
  for (const phaseSign of phaseSigns) {
    for (let iy = 0; iy < samples; iy += 1) {
      for (let ix = 0; ix < samples; ix += 1) {
        const centerA = -radius + (2 * radius * (ix + 0.5)) / samples;
        const centerB = radius - (2 * radius * (iy + 0.5)) / samples;
        const [cx, cy, cz] = pointFor(centerA, centerB);
        if (!inAngleCutRegion(cx, cy, cz)) continue;
        let polygon = [
          sampleCorner(ix, iy, phaseSign),
          sampleCorner(ix + 1, iy, phaseSign),
          sampleCorner(ix + 1, iy + 1, phaseSign),
          sampleCorner(ix, iy + 1, phaseSign),
        ];
        polygon = clipSamplePolygonByIso(polygon);
        if (polygon.length < 3) continue;
        const base = addCapVertex(polygon[0]);
        for (let i = 1; i < polygon.length - 1; i += 1) {
          indices.push(base, addCapVertex(polygon[i]), addCapVertex(polygon[i + 1]));
        }
      }
    }
  }
  if (!indices.length) return null;

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const material = new THREE.MeshBasicMaterial({
    vertexColors: true,
    side: THREE.DoubleSide,
    transparent: false,
    opacity: 1,
    depthWrite: true,
    color: new THREE.Color().setScalar(brightnessMultiplier),
  });
  material.toneMapped = false;
  const mesh = new THREE.Mesh(geometry, material);
  mesh.renderOrder = 4;
  mesh.userData.vertexCount = indices.length;

  const glowMaterial = new THREE.MeshBasicMaterial({
    vertexColors: true,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.26 * brightnessMultiplier,
    depthWrite: false,
    depthTest: true,
    blending: THREE.AdditiveBlending,
    color: new THREE.Color().setScalar(brightnessMultiplier),
  });
  glowMaterial.toneMapped = false;
  const glow = new THREE.Mesh(geometry, glowMaterial);
  glow.renderOrder = 4.05;
  glow.userData.vertexCount = indices.length;
  const group = new THREE.Group();
  group.add(mesh, glow);
  group.userData.vertexCount = indices.length * 2;
  return group;
}

function clearObjects() {
  for (const object of [positiveObject, negativeObject, cloudPositiveObject, cloudNegativeObject, nodeObject, sliceObject, boxObject, cutCapObject, mainProjection3dObject]) {
    if (!object) continue;
    disposeSceneObject(scene, object);
  }
  positiveObject = null;
  negativeObject = null;
  cloudPositiveObject = null;
  cloudNegativeObject = null;
  nodeObject = null;
  sliceObject = null;
  boxObject = null;
  cutCapObject = null;
  mainProjection3dObject = null;
}

function clearAngularObjects() {
  for (const object of [angularPositiveObject, angularNegativeObject, angularNodeObject]) {
    if (!object) continue;
    disposeSceneObject(angularScene, object);
  }
  angularPositiveObject = null;
  angularNegativeObject = null;
  angularNodeObject = null;
}

function replaceAngularAxes(length, visible = true) {
  const current = getAngularAxesGroup();
  if (current) disposeSceneObject(angularScene, current);
  const newGroup = makeAxisGroup(length, Math.max(0.08, length * 0.024), 0.9);
  setAngularAxesGroup(newGroup);
  newGroup.visible = visible;
  angularScene.add(newGroup);
}

function clearProjectionObjects() {
  for (const object of [projectionSurfaceObject, projectionContourObject, projectionBoxObject]) {
    if (!object) continue;
    disposeSceneObject(projectionScene, object);
  }
  projectionSurfaceObject = null;
  projectionContourObject = null;
  projectionBoxObject = null;
}

function refreshMainProjection3D(params, options, fastMode = false) {
  if (mainProjection3dObject) {
    disposeSceneObject(scene, mainProjection3dObject);
    mainProjection3dObject = null;
  }
  if (!(options.showProjection3d || options.showProjection)) return;
  const proj3dObj = makeIntegratedProjection3D(params, options, fastMode);
  proj3dObj.name = "integratedProjection3DGroup";
  proj3dObj.visible = !!options.showProjection3d;
  scene.add(proj3dObj);
  mainProjection3dObject = proj3dObj;
}

function clearRadialObjects() {
  for (const object of [radialSurfaceObject, radialCurveObject, radialAxisObject, radialProjectionObject, radialReferenceObject]) {
    if (!object) continue;
    if (typeof scene !== 'undefined' && object.parent === scene) {
      disposeSceneObject(scene, object);
    } else {
      disposeSceneObject(radialScene, object);
    }
  }
  radialSurfaceObject = null;
  radialCurveObject = null;
  radialAxisObject = null;
  radialProjectionObject = null;
  radialReferenceObject = null;
}

function disposeSceneObject(targetScene, object) {
  targetScene.remove(object);
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (Array.isArray(child.material)) {
      for (const material of child.material) {
        if (!material.userData?.pooled) material.dispose();
      }
    } else if (child.material) {
      if (!child.material.userData?.pooled) {
        if (child.material.map) child.material.map.dispose();
        child.material.uniforms?.volumeMap?.value?.dispose?.();
        child.material.dispose();
      }
    }
  });
}

function buildUniformAngularSurface(params, options) {
  const detail = Math.max(36, Math.floor(options.thetaSegments * 0.6)); 
  const geo = new THREE.IcosahedronGeometry(1, detail);
  const unindexedPos = geo.getAttribute("position");
  
  const posArray = [];
  const indices = [];
  const sharedVertices = new Map();
  const values = [];
  let maxAbs = 0;
  
  for (let i = 0; i < unindexedPos.count; i++) {
    const x = unindexedPos.getX(i);
    const y = unindexedPos.getY(i);
    const z = unindexedPos.getZ(i);
    const q = 100000;
    const key = `${Math.round(x*q)},${Math.round(y*q)},${Math.round(z*q)}`;
    
    let idx = sharedVertices.get(key);
    if (idx === undefined) {
      idx = posArray.length / 3;
      posArray.push(x, y, z);
      sharedVertices.set(key, idx);
      
      const theta = Math.acos(z);
      const phi = Math.atan2(y, x);
      const val = realSphericalHarmonic(params.l, params.m, theta, phi);
      values.push(val);
      if (Math.abs(val) > maxAbs) maxAbs = Math.abs(val);
    }
    indices.push(idx);
  }
  
  const scale = (options.radius ?? 4) / (maxAbs || 1);
  
  function buildForSign(sign) {
    const newPos = [];
    const newIndices = [];
    const vertexMap = new Int32Array(posArray.length / 3).fill(-1);
    
    for (let i = 0; i < indices.length; i += 3) {
      const a = indices[i];
      const b = indices[i + 1];
      const c = indices[i + 2];
      
      const valA = values[a] * sign;
      const valB = values[b] * sign;
      const valC = values[c] * sign;
      
      if (valA <= 1e-6 && valB <= 1e-6 && valC <= 1e-6) continue;
      
      const processVertex = (idx, val) => {
        if (vertexMap[idx] === -1) {
          const r = val > 1e-6 ? val * scale : 0;
          vertexMap[idx] = newPos.length / 3;
          newPos.push(posArray[idx*3] * r, posArray[idx*3+1] * r, posArray[idx*3+2] * r);
        }
        return vertexMap[idx];
      };
      
      newIndices.push(processVertex(a, valA), processVertex(b, valB), processVertex(c, valC));
    }
    
    return { vertices: newPos, indices: newIndices };
  }
  
  return { positive: buildForSign(1), negative: buildForSign(-1) };
}

async function renderOrbital(forceResetCamera = false) {
  if (forceResetCamera instanceof Event) forceResetCamera = false;
  const renderId = ++currentRenderId;
  reopenViewWindows();
  const params = readParams();
  const options = readOptions();
  const name = orbitalLabel(params.n, params.l, params.m);

  el.statusText.textContent = "Calculating...";
  el.renderButton.disabled = true;

  let newPositiveObject = null;
  let newNegativeObject = null;
  let posCount = 0;
  let negCount = 0;

  if (options.mode === "marching" || options.mode === "points") {
    const [posObj, negObj] = await Promise.all([
      makeCachedMarchingCubes(0, params, options, 1, options.positiveColor),
      makeCachedMarchingCubes(1, params, options, -1, options.negativeColor)
    ]);
    if (renderId !== currentRenderId) return;
    newPositiveObject = posObj;
    newNegativeObject = negObj;
    posCount = newPositiveObject.userData.vertexCount;
    negCount = newNegativeObject.userData.vertexCount;
  } else {
    const { positive, negative } = buildOrbitalSurface(params, {
      ...options,
      thetaSegments: Math.max(30, options.density + 18),
      phiSegments: Math.max(52, options.density * 3),
    });
    newPositiveObject = makeSurface(positive, colorToNumber(options.positiveColor), options.opacity);
    newNegativeObject = makeSurface(negative, colorToNumber(options.negativeColor), options.opacity);
    applyMeshStyle(newPositiveObject, options);
    applyMeshStyle(newNegativeObject, options);
    posCount = positive.vertices.length / 3;
    negCount = negative.vertices.length / 3;
  }
  

  
  await new Promise(resolve => requestAnimationFrame(() => {
    if (renderId !== currentRenderId) { resolve(); return; }
    options.showAxis = el.axis.checked;
    options.showBox = el.box.checked;

    // Replace all four views together only after the latest calculation is
    // complete. This avoids both stale overlap and a blank intermediate view.
    clearObjects();
    clearAngularObjects();
    clearProjectionObjects();
    clearRadialObjects();

    applyBackgroundColor(options.backgroundColor);
    setAxesVisibility(options.showAxis, Math.max(1, options.radius / 4.5));
    if (el.toolAxis) el.toolAxis.classList.toggle("active", options.showAxis);

    positiveObject = newPositiveObject;
    negativeObject = newNegativeObject;
    const surfaceVisible = showOrbitalSurface(options);
    if (positiveObject) {
      positiveObject.visible = options.showPositive && surfaceVisible;
      scene.add(positiveObject);
    }
    if (negativeObject) {
      negativeObject.visible = options.showNegative && surfaceVisible;
      scene.add(negativeObject);
    }

    if (options.showProjection3d || options.showProjection) {
      const proj3dObj = makeIntegratedProjection3D(params, options);
      proj3dObj.name = "integratedProjection3DGroup";
      proj3dObj.visible = !!options.showProjection3d;
      scene.add(proj3dObj);
      mainProjection3dObject = proj3dObj;
    }

    if (options.showCloud) {
      const { positive, negative } = buildOrbitalPoints(params, options);
      cloudPositiveObject = makePointCloud(positive, colorToNumber(options.positiveColor));
      cloudNegativeObject = makePointCloud(negative, colorToNumber(options.negativeColor));
      const cloudBasePlanes = options._clipPlanes || clippingPlanesForOptions(options) || [];
      cloudPositiveObject.material.clippingPlanes = [...cloudBasePlanes, globalXYClipPlane];
      cloudNegativeObject.material.clippingPlanes = [...cloudBasePlanes, globalXYClipPlane];
      cloudPositiveObject.visible = options.showPositive;
      cloudNegativeObject.visible = options.showNegative;
      scene.add(cloudPositiveObject, cloudNegativeObject);
      posCount = positive.length / 3;
      negCount = negative.length / 3;
    }

    if (options.showNode && nodeSummary(params.n, params.l) !== "0 radial, 0 angular") {
      nodeObject = makeNodeSurface(params, options);
      if (nodeObject) scene.add(nodeObject);
    }

    sliceObject = makeSlicePlane(params, options);
    if (sliceObject) scene.add(sliceObject);
    cutCapObject = null;

    if (options.showBox || options.grid3d) {
      boxObject = makeBoundaryBox(options.radius);
      scene.add(boxObject);
    }
    updateRelationRadiusMax(options);

    el.orbitalName.textContent = name;
    if (el.viewerTitle) el.viewerTitle.textContent = `原子轨道  ${name}`;
    el.nodeText.textContent = nodeSummary(params.n, params.l);
    el.sliceText.textContent = options.slice.toUpperCase();
    el.boxText.textContent = options.radius.toFixed(2);
    el.isoText.textContent = options.iso.toFixed(5);
    el.posCount.textContent = String(posCount);
    el.negCount.textContent = String(negCount);
    el.statusText.textContent = "Rendered";
    if (el.animationWindow && !el.animationWindow.classList.contains("closed")) {
      drawGenerationAnimation(0);
    }

    renderAngularOrbital(params, options, positiveObject, negativeObject);
    renderProjectionView(params, options);
    renderRadialView(params, options);
    
    if (forceResetCamera) {
      const highOrbitalPadding = params.n >= 5 || params.l >= 3 ? 1.65 : 1.22;
      resetOrbitalCameras(params, options.radius * highOrbitalPadding, Math.max(currentAngularRadius, angularViewRadius(options)));
      rebuildMainControls();
      rebuildAngularControls();
    }
    
    if (wantsLiveSampling) {
        wantsLiveSampling = false;
        liveSamplingActive = true;
        liveSamplingStartTime = performance.now();
        if (cloudPositiveObject) cloudPositiveObject.visible = true;
        if (cloudNegativeObject) cloudNegativeObject.visible = true;
    }
    
    refreshViewerControls(controls);
    refreshViewerControls(angularControls);
    el.renderButton.disabled = false;
    resizeAfterLayoutChange();
    resolve();
  }));
}

function viewWindows() {
  return Array.from(document.querySelectorAll(".view-grid > .qt-window"));
}

function reopenViewWindows(options = {}) {
  for (const win of viewWindows()) {
    win.classList.remove("closed");
    if (options.restoreLayout) win.classList.remove("minimized", "maximized");
    else win.classList.remove("minimized");
    UI.updateWindowControlLabels(win);
  }
}

function updateCameraFrustum(radius = currentViewRadius) {
  const rect = el.viewer.getBoundingClientRect();
  const aspect = rect.width && rect.height ? rect.width / rect.height : 1;
  if (aspect >= 1) {
    camera.left = -radius * aspect;
    camera.right = radius * aspect;
    camera.top = radius;
    camera.bottom = -radius;
  } else {
    camera.left = -radius;
    camera.right = radius;
    camera.top = radius / aspect;
    camera.bottom = -radius / aspect;
  }
  camera.near = 0.1;
  camera.far = Math.max(1000, radius * 8);
  camera.updateProjectionMatrix();
}

function cameraDistanceForRadius(radius, minimum = 90) {
  return Math.max(minimum, radius * 2.8);
}

function resetCamera(radius = currentViewRadius) {
  currentViewRadius = radius;
  const distance = cameraDistanceForRadius(radius);
  camera.position.set(0, 0, distance);
  camera.lookAt(0, 0, 0);
  updateCameraFrustum(radius);
  controls.target.set(0, 0, 0);
  controls.update();
  el.toolXOY?.classList.add("active");
  el.toolYOZ?.classList.remove("active");
  el.toolXOZ?.classList.remove("active");
}

function updateAngularFrustum(radius = Math.max(3, currentViewRadius * 0.45)) {
  const rect = el.angularViewer.getBoundingClientRect();
  const aspect = rect.width && rect.height ? rect.width / rect.height : 1;
  if (aspect >= 1) {
    angularCamera.left = -radius * aspect;
    angularCamera.right = radius * aspect;
    angularCamera.top = radius;
    angularCamera.bottom = -radius;
  } else {
    angularCamera.left = -radius;
    angularCamera.right = radius;
    angularCamera.top = radius / aspect;
    angularCamera.bottom = -radius / aspect;
  }
  angularCamera.near = 0.1;
  angularCamera.far = Math.max(1000, radius * 8);
  angularCamera.updateProjectionMatrix();
}

function resetAngularCamera(radius = 4) {
  currentAngularRadius = Math.max(3, radius);
  const distance = cameraDistanceForRadius(currentAngularRadius, 40);
  angularCamera.position.set(0, 0, distance);
  angularCamera.lookAt(0, 0, 0);
  updateAngularFrustum(currentAngularRadius);
  angularControls.target.set(0, 0, 0);
  angularControls.handleResize?.();
  angularControls.update();
}

function angularViewRadius(options) {
  const angularSurfaceRadius = Math.max(4, Math.min(8, options.radius * 0.55)) * 0.74;
  return Math.max(5.8, angularSurfaceRadius * 1.55);
}

function objectBoundingRadius(...objects) {
  const box = new THREE.Box3();
  const objectBox = new THREE.Box3();
  let hasObject = false;
  for (const object of objects) {
    if (!object) continue;
    object.updateWorldMatrix?.(true, false);
    objectBox.setFromObject(object);
    if (!Number.isFinite(objectBox.min.x) || !Number.isFinite(objectBox.max.x)) continue;
    if (!hasObject) box.copy(objectBox);
    else box.union(objectBox);
    hasObject = true;
  }
  if (!hasObject) return 4.2;
  const sphere = new THREE.Sphere();
  box.getBoundingSphere(sphere);
  return Math.max(0.001, sphere.radius);
}

function resetOrbitalCameras(params, mainRadius, angularRadius) {
  const plane = desktopProjectionPlane(params);
  currentViewRadius = mainRadius;
  currentAngularRadius = Math.max(3, angularRadius);
  const mainDistance = cameraDistanceForRadius(mainRadius);
  const angularDistance = cameraDistanceForRadius(currentAngularRadius, 40);
  if (plane === "yoz") {
    camera.up.set(0, 0, 1);
    angularCamera.up.set(0, 0, 1);
    camera.position.set(mainDistance, 0, 0);
    angularCamera.position.set(angularDistance, 0, 0);
  } else if (plane === "xoz") {
    camera.up.set(0, 0, 1);
    angularCamera.up.set(0, 0, 1);
    camera.position.set(0, mainDistance, 0);
    angularCamera.position.set(0, angularDistance, 0);
  } else {
    camera.up.set(0, 1, 0);
    angularCamera.up.set(0, 1, 0);
    camera.position.set(0, 0, mainDistance);
    angularCamera.position.set(0, 0, angularDistance);
  }
  camera.lookAt(0, 0, 0);
  angularCamera.lookAt(0, 0, 0);
  updateCameraFrustum(mainRadius);
  updateAngularFrustum(currentAngularRadius);
  controls.target.set(0, 0, 0);
  angularControls.target.set(0, 0, 0);
  controls.handleResize?.();
  angularControls.handleResize?.();
  controls.update();
  angularControls.update();
  el.toolXOY?.classList.toggle("active", plane === "xoy");
  el.toolYOZ?.classList.toggle("active", plane === "yoz");
  el.toolXOZ?.classList.toggle("active", plane === "xoz");
}

function updateProjectionFrustum(radius = Math.max(2.5, currentViewRadius * 0.6)) {
  const rect = el.projectionViewer.getBoundingClientRect();
  const aspect = rect.width && rect.height ? rect.width / rect.height : 1;
  if (aspect >= 1) {
    projectionCamera.left = -radius * aspect;
    projectionCamera.right = radius * aspect;
    projectionCamera.top = radius;
    projectionCamera.bottom = -radius;
  } else {
    projectionCamera.left = -radius;
    projectionCamera.right = radius;
    projectionCamera.top = radius / aspect;
    projectionCamera.bottom = -radius / aspect;
  }
  projectionCamera.near = 0.1;
  projectionCamera.far = 1000;
  projectionCamera.updateProjectionMatrix();
}

function resetProjectionCamera(radius = Math.max(3, currentViewRadius * 0.5), target = currentProjectionTarget) {
  currentProjectionRadius = radius;
  currentProjectionTarget.copy(target);
  projectionCamera.up.set(0, 0, 1);
  projectionCamera.position.set(
    currentProjectionTarget.x + radius * 0.78,
    currentProjectionTarget.y - radius * 1.18,
    currentProjectionTarget.z + radius * 0.68
  );
  projectionCamera.lookAt(currentProjectionTarget);
  updateProjectionFrustum(radius);
  projectionControls.target.copy(currentProjectionTarget);
  projectionControls.handleResize?.();
  projectionControls.update();
}

function updateRadialFrustum(radius = 4.5) {
  const rect = el.radialViewer.getBoundingClientRect();
  const aspect = rect.width && rect.height ? rect.width / rect.height : 1;
  if (aspect >= 1) {
    radialCamera.left = -radius * aspect;
    radialCamera.right = radius * aspect;
    radialCamera.top = radius;
    radialCamera.bottom = -radius;
  } else {
    radialCamera.left = -radius;
    radialCamera.right = radius;
    radialCamera.top = radius / aspect;
    radialCamera.bottom = -radius / aspect;
  }
  radialCamera.near = 0.1;
  radialCamera.far = 1000;
  radialCamera.updateProjectionMatrix();
}

function resetRadialCamera(radius = 4.5, target = new THREE.Vector3(0, 0, 0)) {
  currentRadialRadius = radius;
  radialCamera.position.set(0, 0, radius * 1.5);
  radialCamera.lookAt(target);
  updateRadialFrustum(radius);
  radialControls.target.copy(target);
  radialControls.handleResize?.();
  radialControls.update();
}

function syncLinkedCameras() {
  if (!relationEnabled() || !el.syncRotation?.checked) return;
  const direction = camera.position.clone().sub(controls.target).normalize();
  const up = camera.up.clone();
  const syncOne = (targetCamera, targetControls, radius, minimumDistance = 40, focus = new THREE.Vector3(0, 0, 0)) => {
    const distance = cameraDistanceForRadius(radius, minimumDistance);
    targetCamera.position.copy(focus.clone().add(direction.clone().multiplyScalar(distance)));
    targetCamera.up.copy(up);
    targetCamera.lookAt(focus);
    targetControls.target.copy(focus);
    targetCamera.updateProjectionMatrix();
  };
  syncOne(angularCamera, angularControls, currentAngularRadius, 40);
  syncOne(projectionCamera, projectionControls, currentProjectionRadius, 30, currentProjectionTarget);
}

function renderAngularOrbital(params, options) {
  const angularOptions = {
    ...options,
    radius: Math.max(4, Math.min(8, options.radius * 0.55)),
    thetaSegments: 72,
    phiSegments: 144,
  };
  const { positive, negative } = buildUniformAngularSurface(params, angularOptions);
  angularPositiveObject = makeSurface(positive, colorToNumber(options.positiveColor), 1);
  angularNegativeObject = makeSurface(negative, colorToNumber(options.negativeColor), 1);
  applyMeshStyle(angularPositiveObject, { ...options, smooth: options.smooth || !options.wireframe, wireframe: options.wireframe }, true);
  applyMeshStyle(angularNegativeObject, { ...options, smooth: options.smooth || !options.wireframe, wireframe: options.wireframe }, true);
  angularPositiveObject.scale.setScalar(0.74);
  angularNegativeObject.scale.setScalar(0.74);
  angularPositiveObject.visible = options.showPositive;
  angularNegativeObject.visible = options.showNegative;
  angularScene.add(angularPositiveObject, angularNegativeObject);
  const lobeRadius = objectBoundingRadius(angularPositiveObject, angularNegativeObject);
  const axisLength = Math.max(4.2, lobeRadius * 1.45);
  if (options.showNode) {
    angularNodeObject = makeAngularNodeGuides(params, Math.max(lobeRadius * 1.16, 2.8), options);
    if (angularNodeObject) angularScene.add(angularNodeObject);
  }
  replaceAngularAxes(axisLength, options.showAxis);
  currentAngularRadius = Math.max(currentAngularRadius, axisLength * 1.12);
}

function fitCanvasToDisplay(canvas) {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(320, Math.floor(rect.width * ratio));
  const height = Math.max(240, Math.floor(rect.height * ratio));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  return { width, height };
}

function phaseBaseColor(value) {
  return new THREE.Color(value >= 0 ? (el.positiveColor?.value || "#ab57ab") : (el.negativeColor?.value || "#219e9e"));
}

function phaseColor(value) {
  const t = Math.min(1, Math.abs(value));
  return phaseBaseColor(value).lerp(new THREE.Color(0xffffff), Math.max(0, 1 - t) * 0.88);
}

const desktopProjectionLut = (() => {
  const red = [255, 0, 0];
  const orange = [255, 0, 255];
  const white = [255, 255, 255];
  const green = [0, 255, 255];
  const blue = [0, 0, 255];
  const colors = [];
  const push = (color, count) => {
    for (let i = 0; i < count; i += 1) colors.push(color);
  };
  const interp = (from, to, count) => {
    const step = [(to[0] - from[0]) / count, (to[1] - from[1]) / count, (to[2] - from[2]) / count];
    for (let i = 0; i < count; i += 1) {
      colors.push([from[0] + i * step[0], from[1] + i * step[1], from[2] + i * step[2]]);
    }
  };
  push(red, 20);
  interp(red, orange, 80);
  interp(orange, white, 25);
  push(white, 5);
  interp(white, green, 25);
  interp(green, blue, 80);
  push(blue, 20);
  return colors.reverse().map(([r, g, b]) => new THREE.Color(r / 255, g / 255, b / 255));
})();

function projectionPhaseColor(value) {
  const v = Math.max(-1, Math.min(1, value));
  const t = ((v + 1) / 2) * (desktopProjectionLut.length - 1);
  const i0 = Math.max(0, Math.min(desktopProjectionLut.length - 1, Math.floor(t)));
  const i1 = Math.max(0, Math.min(desktopProjectionLut.length - 1, i0 + 1));
  return desktopProjectionLut[i0].clone().lerp(desktopProjectionLut[i1], t - i0);
}

function projectionHeightValue(value) {
  return value;
}

function addGridLines(group, radius, z, divisions, color = 0xffffff, opacity = 0.72) {
  const material = new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity });
  for (let i = 0; i <= divisions; i += 1) {
    const v = -radius + (2 * radius * i) / divisions;
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-radius, v, z), new THREE.Vector3(radius, v, z)]), material));
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(v, -radius, z), new THREE.Vector3(v, radius, z)]), material));
  }
}

function addProjectionSurfaceGrid(group, data, radius, surfaceZ, height, scale) {
  const rows = data.rows;
  const size = rows.length;
  const step = (2 * radius) / (size - 1);
  const stride = Math.max(1, Math.round(0.4 / step));
  const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.56 });
  const makePoint = (x, y) => {
    const px = -radius + (2 * radius * x) / (size - 1);
    const py = -radius + (2 * radius * y) / (size - 1);
    const value = projectionHeightValue(rows[y][x] / scale);
    return new THREE.Vector3(px, py, surfaceZ + value * height + 0.012);
  };

  for (let y = 0; y < size; y += stride) {
    const points = [];
    for (let x = 0; x < size; x += 1) points.push(makePoint(x, y));
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material));
  }
  for (let x = 0; x < size; x += stride) {
    const points = [];
    for (let y = 0; y < size; y += 1) points.push(makePoint(x, y));
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material));
  }
}

function addContourLines(group, data, radius, z, levels, scale = 1) {
  const rows = data.rows;
  const size = rows.length;
  const step = (2 * radius) / (size - 1);
  const edgePoints = [
    (x, y, t) => new THREE.Vector3(-radius + (x + t) * step, -radius + y * step, z),
    (x, y, t) => new THREE.Vector3(-radius + (x + 1) * step, -radius + (y + t) * step, z),
    (x, y, t) => new THREE.Vector3(-radius + (x + 1 - t) * step, -radius + (y + 1) * step, z),
    (x, y, t) => new THREE.Vector3(-radius + x * step, -radius + (y + 1 - t) * step, z),
  ];
  const edgeCorners = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ];

  for (const level of levels) {
    const material = new THREE.LineBasicMaterial({ color: projectionPhaseColor(level).getHex(), transparent: true, opacity: 0.95 });
    const segments = [];
    for (let y = 0; y < size - 1; y += 1) {
      for (let x = 0; x < size - 1; x += 1) {
        const values = [rows[y][x], rows[y][x + 1], rows[y + 1][x + 1], rows[y + 1][x]].map((v) => v / scale);
        const points = [];
        for (let e = 0; e < 4; e += 1) {
          const [a, b] = edgeCorners[e];
          const va = values[a] - level;
          const vb = values[b] - level;
          if (va === 0 || va * vb < 0) {
            const denom = Math.abs(va) + Math.abs(vb);
            if (denom < 1e-12) continue;
            const t = Math.max(0, Math.min(1, Math.abs(va) / denom));
            points.push(edgePoints[e](x, y, t));
          }
        }
        if (points.length >= 2) {
          segments.push(points[0], points[1]);
          if (points.length >= 4) segments.push(points[2], points[3]);
        }
      }
    }
    if (segments.length) group.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(segments), material));
  }
}

const relationColors = {
  radius: 0xffb000,
  direction: 0x35ff69,
  point: 0xffff00,
  helper: 0xffffff,
};

function relationEnabled() {
  return Boolean(el.relationMode?.checked);
}

function disposeRelationObjects() {
  const entries = [
    [scene, relationOrbitalObject],
    [projectionScene, relationProjectionObject],
    [radialScene, relationRadialObject],
    [angularScene, relationAngularObject],
  ];
  for (const [targetScene, object] of entries) {
    if (object) disposeSceneObject(targetScene, object);
  }
  relationOrbitalObject = null;
  relationProjectionObject = null;
  relationRadialObject = null;
  relationAngularObject = null;
}

function objectMaxDistanceFromOrigin(object) {
  let maxDistance = 0;
  const point = new THREE.Vector3();
  object?.updateMatrixWorld?.(true);
  object?.traverse?.((child) => {
    const positions = child.geometry?.attributes?.position;
    if (!positions) return;
    child.updateMatrixWorld(true);
    for (let i = 0; i < positions.count; i += 1) {
      point.fromBufferAttribute(positions, i).applyMatrix4(child.matrixWorld);
      maxDistance = Math.max(maxDistance, point.length());
    }
  });
  return maxDistance;
}

function updateRelationRadiusMax(options) {
  const surfaceRadius = Math.max(
    objectMaxDistanceFromOrigin(positiveObject),
    objectMaxDistanceFromOrigin(negativeObject)
  );
  relationOrbitalSurfaceRadius = surfaceRadius > 0.001 ? surfaceRadius : options.radius * 0.86;
  relationRadiusMax = Math.max(0.001, relationOrbitalSurfaceRadius * 1.2);
}

function relationState() {
  const options = readOptions();
  const radiusPercent = Math.max(0, Math.min(100, Number(el.scanRadius?.value ?? 45)));
  const thetaDegrees = Math.max(0, Math.min(180, Number(el.scanTheta?.value ?? 90)));
  const phiDegrees = ((Number(el.scanPhi?.value ?? 0) % 360) + 360) % 360;
  const maxRadius = Math.max(0.001, relationRadiusMax || options.radius);
  const r = (maxRadius * radiusPercent) / 100;
  const theta = (thetaDegrees * Math.PI) / 180;
  const phi = (phiDegrees * Math.PI) / 180;
  const direction = new THREE.Vector3(Math.sin(theta) * Math.cos(phi), Math.sin(theta) * Math.sin(phi), Math.cos(theta)).normalize();
  const point = direction.clone().multiplyScalar(r);
  const sliceZ = Number(el.scanSliceZ?.value ?? 0);
  const slicePlane = el.scanSlicePlane?.value ?? 'xoy';
  return { options, radiusPercent, thetaDegrees, phiDegrees, r, maxRadius, direction, point, sliceZ, slicePlane };
}

function syncRelationLabels(state = relationState()) {
  if (el.scanRadiusValue) el.scanRadiusValue.value = `${Math.round(state.radiusPercent)}%`;
  if (el.scanThetaValue) el.scanThetaValue.value = `${Math.round(state.thetaDegrees)}°`;
  if (el.scanPhiValue) el.scanPhiValue.value = `${Math.round(state.phiDegrees)}°`;
  if (el.scanSliceZValue) el.scanSliceZValue.value = `${Math.round(state.sliceZ)}`;
}

function lineFromPoints(points, color, opacity = 0.95) {
  const material = new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity, depthTest: false, depthWrite: false });
  material.toneMapped = false;
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material);
  line.renderOrder = 30;
  return line;
}

function lineSegmentsFromPoints(points, color, opacity = 0.95) {
  const material = new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity, depthTest: false, depthWrite: false });
  material.toneMapped = false;
  const line = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(points), material);
  line.renderOrder = 30;
  return line;
}

function solidCurveFromPoints(points, color = 0xffffff, radius = 0.026, opacity = 1) {
  const curve = new THREE.CatmullRomCurve3(points, false, "centripetal", 0.18);
  const geometry = new THREE.TubeGeometry(curve, Math.max(80, points.length * 2), radius, 8, false);
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    depthTest: false,
    depthWrite: false,
  });
  material.toneMapped = false;
  const mesh = new THREE.Mesh(geometry, material);
  mesh.renderOrder = 31;
  return mesh;
}

function circleLine(radius, z, color, opacity = 0.95) {
  const points = [];
  const segments = 160;
  for (let i = 0; i <= segments; i += 1) {
    const angle = (Math.PI * 2 * i) / segments;
    points.push(new THREE.Vector3(radius * Math.cos(angle), radius * Math.sin(angle), z));
  }
  return lineFromPoints(points, color, opacity);
}

function sphereWireLines(radius, color, opacity = 0.74) {
  const points = [];
  const segments = 160;
  const rings = 12;
  const addLoop = (makePoint) => {
    for (let i = 0; i < segments; i += 1) {
      const a = (Math.PI * 2 * i) / segments;
      const b = (Math.PI * 2 * (i + 1)) / segments;
      points.push(makePoint(a), makePoint(b));
    }
  };
  for (let r = 1; r < rings; r += 1) {
    const theta = (Math.PI * r) / rings;
    const z = Math.cos(theta) * radius;
    const ringRadius = Math.sin(theta) * radius;
    addLoop((angle) => new THREE.Vector3(ringRadius * Math.cos(angle), ringRadius * Math.sin(angle), z));
  }
  for (let m = 0; m < 6; m += 1) {
    const phi = (Math.PI * m) / 6;
    addLoop((theta) => new THREE.Vector3(
      radius * Math.sin(theta) * Math.cos(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(theta)
    ));
  }
  return lineSegmentsFromPoints(points, color, opacity);
}

/* old signature kept conceptually by the helpers above */
function unusedLineFromPoints(points, color, opacity = 0.95) {
  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity })
  );
}

function markerSphere(radius, color, opacity = 1) {
  const material = new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, depthTest: false, depthWrite: false });
  material.toneMapped = false;
  const marker = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 24, 16),
    material
  );
  marker.renderOrder = 32;
  return marker;
}

function relationArrow(direction, length, color, headLength, headWidth) {
  const arrow = new THREE.ArrowHelper(direction, new THREE.Vector3(0, 0, 0), length, color, headLength, headWidth);
  arrow.traverse((child) => {
    if (!child.material) return;
    child.material.depthTest = false;
    child.material.depthWrite = false;
    child.material.toneMapped = false;
    child.renderOrder = 31;
  });
  return arrow;
}

function projectionPointFor(point, plane, scale) {
  if (plane === "xoz") return new THREE.Vector2(point.x * scale, point.z * scale);
  if (plane === "yoz") return new THREE.Vector2(point.y * scale, point.z * scale);
  return new THREE.Vector2(point.x * scale, point.y * scale);
}

function clampVector2Length(vector, maxLength) {
  const length = vector.length();
  if (length > maxLength && length > 1e-9) vector.multiplyScalar(maxLength / length);
  return vector;
}

function addRelationOrbital(state) {
  const group = new THREE.Group();
  const displayMaxRadius = Math.max(0.001, state.maxRadius);
  const displayR = state.r;
  const displayPoint = state.direction.clone().multiplyScalar(displayR);
  if (displayR > 0.001) {
    group.add(sphereWireLines(displayR, relationColors.radius, 0.72));
  }
  const arrowLength = Math.max(displayR, displayMaxRadius * 0.22, 1);
  group.add(relationArrow(state.direction, arrowLength, relationColors.direction, arrowLength * 0.11, arrowLength * 0.035));
  const point = markerSphere(Math.max(0.08, displayMaxRadius * 0.018), relationColors.point);
  point.position.copy(displayPoint);
  group.add(point);
  scene.add(group);
  relationOrbitalObject = group;
}

function addRelationAngular(state) {
  const group = new THREE.Group();
  const length = Math.max(2.4, currentAngularRadius * 0.55);
  group.add(relationArrow(state.direction, length, relationColors.direction, length * 0.14, length * 0.045));
  const point = markerSphere(0.08, relationColors.point);
  point.position.copy(state.direction.clone().multiplyScalar(length));
  group.add(point);
  angularScene.add(group);
  relationAngularObject = group;
}

function addRelationProjection(state) {
  if (!projectionRelationMeta) return;
  const group = new THREE.Group();
  const planeLimit = projectionRelationMeta.radius * 0.92;
  const rawScale = projectionRelationMeta.radius / Math.max(0.0001, state.maxRadius);
  const localRadiusRaw = Math.max(0, state.r * rawScale);
  const displayCompression = localRadiusRaw > planeLimit ? planeLimit / localRadiusRaw : 1;
  const scale = rawScale * displayCompression;
  const localRadius = Math.min(planeLimit, Math.max(0, state.r * scale));
  group.add(circleLine(localRadius, projectionRelationMeta.bottomZ + 0.18, relationColors.radius, 0.95));
  const projected = clampVector2Length(projectionPointFor(state.point, projectionRelationMeta.plane, scale), planeLimit);
  const point = markerSphere(0.075, relationColors.point);
  point.position.set(projected.x, projected.y, projectionRelationMeta.bottomZ + 0.28);
  group.add(point);
  group.add(lineFromPoints(
    [new THREE.Vector3(0, 0, projectionRelationMeta.bottomZ + 0.22), new THREE.Vector3(projected.x, projected.y, projectionRelationMeta.bottomZ + 0.22)],
    relationColors.direction,
    0.82
  ));
  projectionScene.add(group);
  relationProjectionObject = group;
}

function addRelationRadial(state) {
  if (!radialRelationMeta) return;

  const currentPercent = Math.max(0, Math.min(1, state.r / Math.max(0.0001, radialRelationMeta.radialExtent)));
  radialSurfaceObject?.geometry?.setDrawRange(0, Infinity);
  radialSideObject?.geometry?.setDrawRange(0, Infinity);
  radialCurveObject?.geometry?.setDrawRange(0, Infinity);

  const group = new THREE.Group();
  const x = Math.min(radialRelationMeta.radiusScale, currentPercent * radialRelationMeta.radiusScale);
  const rawValue = radialValueForMode(readParams(), state.r, state.options.radialMode);
  const z = radialRelationMeta.curveBaseZ + (rawValue / radialRelationMeta.maxAbs) * radialRelationMeta.heightScale;
  group.add(lineFromPoints(
    [new THREE.Vector3(x, 0, radialRelationMeta.curveBaseZ), new THREE.Vector3(x, 0, z)],
    relationColors.radius,
    0.95
  ));
  const point = markerSphere(0.028, relationColors.point);
  point.position.set(x, 0, z);
  group.add(point);
  radialScene.add(group);
  relationRadialObject = group;
}

function updateRelationOverlays() {
  disposeRelationObjects();
  const state = relationState();
  syncRelationLabels(state);

  const prevClip = globalXYClipPlane.constant;
  const newClip = state.options.sliceOffset;

  if (state.slicePlane === 'yoz') {
    globalXYClipPlane.normal.set(-1, 0, 0);
  } else if (state.slicePlane === 'xoz') {
    globalXYClipPlane.normal.set(0, -1, 0);
  } else {
    globalXYClipPlane.normal.set(0, 0, -1);
  }
  globalXYClipPlane.constant = newClip;

  let relationSliceCap = scene.getObjectByName("relationSliceCap");
  if (relationSliceCap) {
    disposeSceneObject(scene, relationSliceCap);
    relationSliceCap = null;
  }

  if (!relationEnabled()) {
    globalXYClipPlane.constant = 100;
  globalXYClipPlane.normal.set(0, 0, -1);
    return;
  }
  
  if (Math.abs(newClip) < state.maxRadius) {
    let axis = "z";
    if (state.slicePlane === "xoz") axis = "y";
    if (state.slicePlane === "yoz") axis = "x";
    
    // Use the same separated-phase cap path as the cinematic slice scan.
    let existingCap = scene.getObjectByName("relationSliceCap");
    if (existingCap) {
      disposeSceneObject(scene, existingCap);
    }
    const instantCap = makeCutPlaneMesh(
      readParams(),
      { ...state.options, _separatePhaseCaps: true },
      axis,
      null,
      newClip,
      0.75,
      true
    );
    if (instantCap) {
      instantCap.name = "relationSliceCap";
      scene.add(instantCap);
    }
    
    // Debounce the high-quality cap replacement
    clearTimeout(window._capDebounceTimer);
    window._capDebounceTimer = setTimeout(() => {
      let capToReplace = scene.getObjectByName("relationSliceCap");
      if (capToReplace) {
        disposeSceneObject(scene, capToReplace);
      }
      const highQualityCap = makeCutPlaneMesh(
        readParams(),
        { ...state.options, _forceHighQualityCap: true, _separatePhaseCaps: true },
        axis,
        null,
        newClip,
        0.75,
        false
      );
      if (highQualityCap) {
        highQualityCap.name = "relationSliceCap";
        scene.add(highQualityCap);
      }
    }, 60);
  }
  
  addRelationOrbital(state);
  addRelationAngular(state);
  addRelationProjection(state);
  addRelationRadial(state);
}

function rebuildRelationSliceCapHighQuality() {
  const state = relationState();
  syncRelationLabels(state);
  const newClip = state.options.sliceOffset;

  if (state.slicePlane === "yoz") {
    globalXYClipPlane.normal.set(-1, 0, 0);
  } else if (state.slicePlane === "xoz") {
    globalXYClipPlane.normal.set(0, -1, 0);
  } else {
    globalXYClipPlane.normal.set(0, 0, -1);
  }
  globalXYClipPlane.constant = newClip;

  const existingCap = scene.getObjectByName("relationSliceCap");
  if (existingCap) disposeSceneObject(scene, existingCap);
  clearTimeout(window._capDebounceTimer);

  if (!relationEnabled() || Math.abs(newClip) >= state.maxRadius) return;
  let axis = "z";
  if (state.slicePlane === "xoz") axis = "y";
  if (state.slicePlane === "yoz") axis = "x";

  const highQualityCap = makeCutPlaneMesh(
    readParams(),
    { ...state.options, _forceHighQualityCap: true, _separatePhaseCaps: true },
    axis,
    null,
    newClip,
    0.75,
    false
  );
  if (highQualityCap) {
    highQualityCap.name = "relationSliceCap";
    scene.add(highQualityCap);
  }
}

function rebuildRelationSliceCapFastSeparated() {
  const state = relationState();
  syncRelationLabels(state);
  const newClip = state.options.sliceOffset;

  if (state.slicePlane === "yoz") {
    globalXYClipPlane.normal.set(-1, 0, 0);
  } else if (state.slicePlane === "xoz") {
    globalXYClipPlane.normal.set(0, -1, 0);
  } else {
    globalXYClipPlane.normal.set(0, 0, -1);
  }
  globalXYClipPlane.constant = newClip;

  const existingCap = scene.getObjectByName("relationSliceCap");
  if (existingCap) disposeSceneObject(scene, existingCap);
  clearTimeout(window._capDebounceTimer);

  if (!relationEnabled() || Math.abs(newClip) >= state.maxRadius) return;
  let axis = "z";
  if (state.slicePlane === "xoz") axis = "y";
  if (state.slicePlane === "yoz") axis = "x";

  const fastCap = makeCutPlaneMesh(
    readParams(),
    { ...state.options, _separatePhaseCaps: true },
    axis,
    null,
    newClip,
    0.75,
    true
  );
  if (fastCap) {
    fastCap.name = "relationSliceCap";
    scene.add(fastCap);
  }
}

function updateRelationRadiusScanOnly() {
  disposeRelationObjects();
  const state = relationState();
  syncRelationLabels(state);
  addRelationOrbital(state);
  addRelationAngular(state);
  addRelationProjection(state);
  addRelationRadial(state);
}

function setRelationFromPoint(point) {
  const r = point.length();
  if (r < 1e-6) return;
  const theta = Math.acos(Math.max(-1, Math.min(1, point.z / r)));
  const phi = (Math.atan2(point.y, point.x) + Math.PI * 2) % (Math.PI * 2);
  if (el.scanRadius) el.scanRadius.value = String(Math.round(Math.max(0, Math.min(100, (r / Math.max(0.0001, relationRadiusMax)) * 100))));
  if (el.scanTheta) el.scanTheta.value = String(Math.round((theta * 180) / Math.PI));
  if (el.scanPhi) el.scanPhi.value = String(Math.round((phi * 180) / Math.PI));
  updateRelationOverlays();
  UI.setStatus(`关联高亮：r=${r.toFixed(2)}, θ=${Math.round((theta * 180) / Math.PI)}°, φ=${Math.round((phi * 180) / Math.PI)}°`);
}

function pickRelationPoint(event) {
  // Disabled by user request: relation point should only be updated via sliders
  return;
}

function desktopProjectionPlane(params) {
  const label = orbitalLabel(params.n, params.l, params.m).replace(/^\d+/, "");
  if (
    label.startsWith("Dyz") ||
    label.startsWith("Fyz2") ||
    label.startsWith("Gz3y") ||
    label.startsWith("Gzy3") ||
    label.startsWith("Gyz3") ||
    label.startsWith("Hyz4") ||
    label.startsWith("Hyz")
  ) {
    return "yoz";
  }
  if (
    label.startsWith("Pz") ||
    label.startsWith("Dz2") ||
    label.startsWith("Dxz") ||
    label.startsWith("Fz3") ||
    label.startsWith("Fxz2") ||
    label.startsWith("Gz4") ||
    label.startsWith("Gz3x") ||
    label.startsWith("Gxz3") ||
    label.startsWith("Gzx3") ||
    label.startsWith("Hxz4") ||
    label.startsWith("Hz5") ||
    label.startsWith("Hxz")
  ) {
    return "xoz";
  }
  return "xoy";
}

// Orbital projection uses one fixed laboratory plane for every orbital.
// Keep orbital-dependent camera framing separate from projection sampling.
function defaultProjectionSlicePlane() {
  return "xoy";
}

function applyProjectionFrameTransform(frame, plane) {
  frame.matrixAutoUpdate = false;
  frame.matrix.identity();
  if (plane === "xoz") {
    // Local (a, b, height) -> world (x, z, y).
    frame.matrix.set(
      1, 0, 0, 0,
      0, 0, 1, 0,
      0, 1, 0, 0,
      0, 0, 0, 1
    );
  } else if (plane === "yoz") {
    // Local (a, b, height) -> world (y, z, x).
    frame.matrix.set(
      0, 0, 1, 0,
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 0, 1
    );
  }
}

function sampleProjectionSlice(params, options, plane, size, fastMode = false) {
  let actualSize = size;
  if (fastMode) actualSize = Math.min(size, 30);
  
  const rows = [];
  const radius = options.radius;
  let maxAbs = 0;
  let maxPositive = 0;
  let minNegative = 0;

  for (let yIndex = 0; yIndex < actualSize; yIndex += 1) {
    const row = [];
    const b = -radius + (2 * radius * yIndex) / (actualSize - 1);
    for (let xIndex = 0; xIndex < actualSize; xIndex += 1) {
      const a = -radius + (2 * radius * xIndex) / (actualSize - 1);
      let value = 0;
      const zOffset = options.sliceOffset || 0;
      if (plane === "xoy") value = clientPsi(params, a, b, zOffset);
      if (plane === "xoz") value = clientPsi(params, a, zOffset, b);
      if (plane === "yoz") value = clientPsi(params, zOffset, a, b);
      maxAbs = Math.max(maxAbs, Math.abs(value));
      maxPositive = Math.max(maxPositive, value);
      minNegative = Math.min(minNegative, value);
      row.push(value);
    }
    rows.push(row);
  }

  return { data: { rows, maxAbs, maxPositive, minNegative }, scale: 1 };
}

function makeIntegratedProjection3D(params, options, fastMode = false) {
  const group = new THREE.Group();
  const desktopGrid = desktopBoxAndIso(params).gridSize;
  let size = Math.min(desktopGrid * 2 + 1, 90);
  if (fastMode) size = Math.min(size, 30);
  // Apply Dynamic LOD: vastly reduce computation when cinematic is active
  if (typeof cinematicActive !== "undefined" && cinematicActive && !fastMode) {
    size = Math.min(size, 81);
  }
  const isRelationMode = (typeof el !== 'undefined' && el.relationMode?.checked);
  const plane = (isRelationMode && el.scanSlicePlane) ? el.scanSlicePlane.value : (options.slice !== "none" ? options.slice : defaultProjectionSlicePlane());
  
  const { data } = sampleProjectionSlice(params, options, plane, size, fastMode);
  const globalMax = getGlobalMaxPsi(params, options);
  const projectionScale = (globalMax.maxPos > 1e-12 ? globalMax.maxPos : globalMax.maxAbs || 1) / 0.9;
  const vertices = [];
  const colors = [];
  const indices = [];
  const radius = options.radius;

  const rawClipZ = Number.isFinite(options.sliceOffset)
    ? options.sliceOffset
    : (isRelationMode && typeof globalXYClipPlane !== 'undefined' ? globalXYClipPlane.constant : 0);
  const clipZ = Number.isFinite(rawClipZ) && Math.abs(rawClipZ) <= radius ? rawClipZ : 0;
  const surfaceZ = clipZ + radius;
  const height = radius * 0.8;
  
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const a = -radius + (2 * radius * x) / (size - 1);
      const b = -radius + (2 * radius * y) / (size - 1);
      const value = data.rows[y][x] / projectionScale;
      const shapedValue = projectionHeightValue(value);
      const mountainZ = surfaceZ + shapedValue * height;
      
      let px, py, pz;
      if (plane === "xoy") { px = a; py = b; pz = mountainZ; }
      else if (plane === "xoz") { px = a; py = mountainZ; pz = b; }
      else if (plane === "yoz") { px = mountainZ; py = a; pz = b; }
      
      vertices.push(px, py, pz);
      const color = projectionPhaseColor(value);
      colors.push(color.r, color.g, color.b);
    }
  }
  
  for (let y = 0; y < size - 1; y += 1) {
    for (let x = 0; x < size - 1; x += 1) {
      const a = y * size + x;
      const b = a + 1;
      const c = a + size;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshPhongMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 1,
      depthWrite: true,
      specular: 0x333333,
      shininess: 10,
      emissive: 0x111111,
      emissiveIntensity: 0.04,
    })
  );
  mesh.name = "integratedProjectionMountain";
  mesh.renderOrder = 4;
  group.add(mesh);
  
  const flatVertices = [];
  for (let i = 0; i < vertices.length; i += 3) {
    if (plane === "xoy") {
       flatVertices.push(vertices[i], vertices[i+1], 0);
    } else if (plane === "xoz") {
       flatVertices.push(vertices[i], 0, vertices[i+2]);
    } else if (plane === "yoz") {
       flatVertices.push(0, vertices[i+1], vertices[i+2]);
    }
  }
  const thickness = radius * 0.005;
  
  const thickVertices = [];
  const thickColors = [];
  const thickIndices = [];
  const N = size * size;
  
  for (let i = 0; i < N; i++) {
    let vx = flatVertices[i * 3];
    let vy = flatVertices[i * 3 + 1];
    let vz = flatVertices[i * 3 + 2];
    
    thickVertices.push(vx, vy, vz);
    
    let bx = vx, by = vy, bz = vz;
    if (plane === "xoy") bz -= thickness;
    else if (plane === "xoz") by -= thickness;
    else if (plane === "yoz") bx -= thickness;
    thickVertices.push(bx, by, bz);
    
    const cr = colors[i * 3];
    const cg = colors[i * 3 + 1];
    const cb = colors[i * 3 + 2];
    thickColors.push(cr, cg, cb);
    thickColors.push(cr, cg, cb);
  }
  
  for (let y = 0; y < size - 1; y += 1) {
    for (let x = 0; x < size - 1; x += 1) {
      const a = y * size + x;
      const b = a + 1;
      const c = a + size;
      const d = c + 1;
      
      const tA = 2 * a, tB = 2 * b, tC = 2 * c, tD = 2 * d;
      thickIndices.push(tA, tB, tC, tB, tD, tC);
      
      const bA = 2 * a + 1, bB = 2 * b + 1, bC = 2 * c + 1, bD = 2 * d + 1;
      thickIndices.push(bA, bC, bB, bB, bC, bD);
    }
  }
  
  const addSideQuad = (i1, i2) => {
    const t1 = 2 * i1, b1 = 2 * i1 + 1;
    const t2 = 2 * i2, b2 = 2 * i2 + 1;
    thickIndices.push(b1, b2, t2, t1, b1, t2);
  };
  
  for(let x = 0; x < size - 1; x++) addSideQuad(x, x + 1);
  for(let y = 0; y < size - 1; y++) addSideQuad(y * size + size - 1, (y + 1) * size + size - 1);
  for(let x = size - 1; x > 0; x--) addSideQuad((size - 1) * size + x, (size - 1) * size + x - 1);
  for(let y = size - 1; y > 0; y--) addSideQuad(y * size, (y - 1) * size);
  
  const flatGeometry = new THREE.BufferGeometry();
  flatGeometry.setAttribute("position", new THREE.Float32BufferAttribute(thickVertices, 3));
  flatGeometry.setAttribute("color", new THREE.Float32BufferAttribute(thickColors, 3));
  flatGeometry.setIndex(thickIndices);
  flatGeometry.computeVertexNormals();
  
  const flatMesh = new THREE.Mesh(
    flatGeometry,
    new THREE.MeshPhongMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
      shininess: 90,
      specular: 0x333333,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    })
  );
  flatMesh.name = "integratedProjectionFlat";
  flatMesh.renderOrder = 4;
  
  if (plane === "xoy") {
    flatMesh.position.set(0, 0, clipZ);
  } else if (plane === "xoz") {
    flatMesh.position.set(0, clipZ, 0);
  } else if (plane === "yoz") {
    flatMesh.position.set(clipZ, 0, 0);
  }
  
  group.add(flatMesh);
  
  const box = makeBoundaryBox(options.radius);
  box.name = "integratedProjectionBox";
  
  const midZ = (surfaceZ + clipZ) / 2;
  // Make sure scale is at least a tiny number to avoid zero-scale issues
  const scaleZ = Math.max(0.001, (surfaceZ - clipZ) / (2 * options.radius));
  
  if (plane === "xoy") {
    box.position.set(0, 0, midZ);
    box.scale.set(1, 1, scaleZ);
  } else if (plane === "xoz") {
    box.position.set(0, midZ, 0);
    box.scale.set(1, scaleZ, 1);
  } else if (plane === "yoz") {
    box.position.set(midZ, 0, 0);
    box.scale.set(scaleZ, 1, 1);
  }
  
  group.add(box);
  
  group.userData.vertexCount = size * size;
  group.userData.slicePlane = plane;
  group.userData.radius = radius;
  group.userData.size = size;
  group.userData.projectionScale = projectionScale;
  group.userData.surfaceZ = surfaceZ;
  group.userData.height = height;
  return group;
}

function updateIntegratedProjectionGeometry(group, sweepOffset) {
  const params = readParams();
  const plane = group.userData.slicePlane;
  const radius = group.userData.radius;
  const size = group.userData.size;
  const projectionScale = group.userData.projectionScale;
  const height = group.userData.height;
  const surfaceZ = group.userData.surfaceZ;
  
  const mountain = group.children.find(c => c.name === "integratedProjectionMountain");
  if (!mountain) return;
  
  const { data } = sampleProjectionSlice(params, readOptions(), plane, size);
  
  const mPos = mountain.geometry.attributes.position;
  const mCol = mountain.geometry.attributes.color;
  
  let i = 0;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const a = -radius + (2 * radius * x) / (size - 1);
      const b = -radius + (2 * radius * y) / (size - 1);
      
      const val = data.rows[y][x];
      const scaledVal = val / projectionScale;
      const shapedVal = projectionHeightValue(scaledVal);
      const mountainZ = surfaceZ + shapedVal * height;
      
      let mx, my, mz;
      if (plane === "xoy") { 
          mx = a; my = b; mz = mountainZ; 
      } else if (plane === "xoz") { 
          mx = a; my = mountainZ; mz = b; 
      } else if (plane === "yoz") { 
          mx = mountainZ; my = a; mz = b; 
      }
      
      mPos.setXYZ(i, mx, my, mz);
      
      const color = projectionPhaseColor(scaledVal);
      mCol.setXYZ(i, color.r, color.g, color.b);
      i++;
    }
  }
  
  mPos.needsUpdate = true;
  mCol.needsUpdate = true;
  mountain.geometry.computeVertexNormals();
}

function getGlobalMaxPsi(params, options) {
  const cacheKey = `${params.n}|${params.l}|${params.z}`;
  if (window._maxPsiCache && window._maxPsiCache[cacheKey]) return window._maxPsiCache[cacheKey];
  
  let maxAbs = 0;
  let maxPos = 0;
  const size = 20;
  const radius = Math.min(4.7, options.radius * 0.42);
  for (let z = 0; z <= size; z++) {
    const pz = -radius + (2 * radius * z) / size;
    for (let y = 0; y <= size; y++) {
      const py = -radius + (2 * radius * y) / size;
      for (let x = 0; x <= size; x++) {
        const px = -radius + (2 * radius * x) / size;
        const value = clientPsi(params, px * 2.38, py * 2.38, pz * 2.38);
        if (Math.abs(value) > maxAbs) maxAbs = Math.abs(value);
        if (value > maxPos) maxPos = value;
      }
    }
  }
  const result = { maxAbs, maxPos };
  if (!window._maxPsiCache) window._maxPsiCache = {};
  window._maxPsiCache[cacheKey] = result;
  return result;
}

function renderProjectionView(params, options, fastMode = false) {
  projectionScene.background = new THREE.Color(options.backgroundColor);
  const group = new THREE.Group();
  const projectionFrame = new THREE.Group();
  group.add(projectionFrame);
  const desktopGrid = desktopBoxAndIso(params).gridSize;
  let size = Math.min(desktopGrid * 2 + 1, 90);
  if (fastMode) size = Math.min(size, 30);
  // Apply Dynamic LOD: vastly reduce computation when cinematic is active
  if (typeof cinematicActive !== "undefined" && cinematicActive && !fastMode) {
    size = Math.min(size, 81);
  }
  const projectionPlane = (el.relationMode?.checked && el.scanSlicePlane) ? el.scanSlicePlane.value : (options.slice !== "none" ? options.slice : defaultProjectionSlicePlane());
  const { data } = sampleProjectionSlice(params, options, projectionPlane, size, fastMode);
  
  const globalMax = getGlobalMaxPsi(params, options);
  const projectionScale = (globalMax.maxPos > 1e-12 ? globalMax.maxPos : globalMax.maxAbs || 1) / 0.9;
  const vertices = [];
  const colors = [];
  const indices = [];
  const radius = Math.min(4.7, options.radius * 0.42);
  const surfaceZ = radius * 2.0;
  const bottomZ = 0;
  const height = radius * 0.9;
  projectionRelationMeta = { plane: projectionPlane, radius, surfaceZ, bottomZ, height };
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const px = -radius + (2 * radius * x) / (size - 1);
      const py = -radius + (2 * radius * y) / (size - 1);
      const value = data.rows[y][x] / projectionScale;
      const shapedValue = projectionHeightValue(value);
      vertices.push(px, py, surfaceZ + shapedValue * height);
      const color = projectionPhaseColor(value);
      colors.push(color.r, color.g, color.b);
    }
  }
  for (let y = 0; y < size - 1; y += 1) {
    for (let x = 0; x < size - 1; x += 1) {
      const a = y * size + x;
      const b = a + 1;
      const c = a + size;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  projectionSurfaceObject = new THREE.Mesh(
    geometry,
    new THREE.MeshPhongMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.98,
      specular: 0x333333,
      shininess: 10,
      emissive: 0x111111,
      emissiveIntensity: 0.04,
    })
  );
  projectionFrame.add(projectionSurfaceObject);
  // The white wire grid is generated in the local XOY coordinates, just like
  // the colored height surface. Keep both in one oriented subgroup so XOY,
  // XOZ and YOZ can never diverge.
  const surfaceGridGroup = new THREE.Group();
  addProjectionSurfaceGrid(surfaceGridGroup, data, radius, surfaceZ, height, projectionScale);
  projectionFrame.add(surfaceGridGroup);

  const contourGroup = new THREE.Group();
  const sliceVertices = [];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const px = -radius + (2 * radius * x) / (size - 1);
      const py = -radius + (2 * radius * y) / (size - 1);
      sliceVertices.push(px, py, bottomZ + 0.02);
    }
  }
  const sliceGeometry = new THREE.BufferGeometry();
  sliceGeometry.setAttribute("position", new THREE.Float32BufferAttribute(sliceVertices, 3));
  sliceGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  sliceGeometry.setIndex(indices);
  sliceGeometry.computeVertexNormals();
  const sliceMesh = new THREE.Mesh(
    sliceGeometry,
    new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, transparent: true, opacity: 0.78 })
  );
  contourGroup.add(sliceMesh);
  const projectionLevels = (from, to, count) =>
    Array.from({ length: count }, (_, index) => from + ((to - from) * index) / (count - 1));
  addContourLines(
    contourGroup,
    data,
    radius,
    bottomZ + 0.08,
    [...projectionLevels(-1, 0, 20), ...projectionLevels(0, 1, 20)],
    projectionScale
  );
  projectionContourObject = contourGroup;
  projectionFrame.add(projectionContourObject);
  
  projectionBoxObject = makeBoundaryBox(radius);
  projectionBoxObject.scale.z = 1;
  projectionBoxObject.position.z = (surfaceZ + bottomZ) / 2;
  projectionFrame.add(projectionBoxObject);
  applyProjectionFrameTransform(projectionFrame, projectionPlane);
  projectionSurfaceObject = group;
  projectionContourObject = null;
  projectionBoxObject = null;
  projectionScene.add(group);
  const projectionCenter = new THREE.Vector3(0, 0, 0);
  const centerOffset = (surfaceZ + bottomZ) / 2;
  if (projectionPlane === "xoy") projectionCenter.set(0, 0, centerOffset);
  else if (projectionPlane === "xoz") projectionCenter.set(0, centerOffset, 0);
  else if (projectionPlane === "yoz") projectionCenter.set(centerOffset, 0, 0);
  resetProjectionCamera(radius * 1.92, projectionCenter);
  updateRelationOverlays();
}

function radialValueForMode(params, r, mode) {
  const rr = Math.max(r, 0.0001);
  const rv = radial(params.n, params.l, params.z, rr);
  if (mode === "R") return rv;
  if (mode === "R2") return rv * rv;
  return rr * rr * rv * rv;
}

function radialClientColor(value, neutral = 0xb6b6b6) {
  const magnitude = Math.abs(value);
  const t = Math.max(0, Math.min(1, (magnitude - 0.035) / 0.72));
  const shaped = t * t * (3 - 2 * t);
  return new THREE.Color(neutral).lerp(projectionPhaseColor(value), shaped);
}

function addRadialNodeMarkers(group, params, options, meta) {
  const nodes = radialNodeRadii(params).filter((r) => r > 0.02 && r < meta.radialExtent * 0.995);
  if (!nodes.length) return;
  const curveZ = meta.curveBaseZ ?? (options.radialSide ? meta.sideZ : meta.diskZ + meta.curveLift);
  for (const nodeR of nodes) {
    const x = (nodeR / meta.radialExtent) * meta.radiusScale;
    if (options.radialCurve) {
      const z = curveZ;
      for (const sign of [-1, 1]) {
        const point = markerSphere(0.065, 0xffc400, 0.95);
        point.position.set(sign * x, 0, z);
        group.add(point);
      }
    }
  }
}

function renderRadialView(params, options) {
  const samples = params.n >= 5 ? 260 : 190;
  const rings = params.n >= 5 ? 132 : 96;
  const radialExtent = Math.max(0.001, relationRadiusMax || relationOrbitalSurfaceRadius * 1.2 || radialDisplayExtent(params));
  const values = [];
  for (let i = 0; i <= samples; i += 1) {
    values.push(radialValueForMode(params, (radialExtent * i) / samples, options.radialMode));
  }
  const maxAbs = Math.max(...values.map(Math.abs), 0.000001);
  const radiusScale = 3.7;
  const shellRadiusScale = radiusScale;
  const radialDisplayScale = shellRadiusScale;
  const heightScale = radialDisplayScale * 0.43;
  const baseZ = -1.25;
  const diskZ = baseZ;
  const curveLift = 0.08;
  const sideZ = diskZ + radialDisplayScale * 0.72;
  const curveBaseZ = options.radialSide ? sideZ : diskZ + curveLift;
  const curveOriginZ = curveBaseZ + (values[0] / maxAbs) * heightScale;
  radialRelationMeta = {
    radialExtent,
    radiusScale: radialDisplayScale,
    heightScale,
    baseZ,
    diskZ,
    curveLift,
    sideZ,
    curveBaseZ,
    curveOriginZ,
    maxAbs,
    heightTop: curveBaseZ + heightScale + 0.38,
  };

  const group = new THREE.Group();
  const halfSphere = new THREE.Mesh(
    new THREE.SphereGeometry(shellRadiusScale, 128, 48, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2),
    new THREE.MeshPhongMaterial({
      color: 0xb8b8b8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.88,
      shininess: 1,
      specular: 0x222222,
    })
  );
  halfSphere.rotation.x = Math.PI / 2;
  halfSphere.position.z = baseZ;
  group.add(halfSphere);

  const topGeometry = new THREE.BufferGeometry();
  const vertices = [];
  const colors = [];
  const indices = [];
  for (let i = 0; i <= rings; i += 1) {
    const r = (i / rings) * shellRadiusScale;
    const sourceIndex = Math.round((i / rings) * samples);
    const value = values[sourceIndex] / maxAbs;
    for (let j = 0; j <= 128; j += 1) {
      const theta = (Math.PI * 2 * j) / 128;
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      vertices.push(x, y, diskZ);
      const color = radialClientColor(value, 0xb8b8b8);
      colors.push(color.r, color.g, color.b);
    }
  }
  const row = 129;
  for (let i = 0; i < rings; i += 1) {
    for (let j = 0; j < 128; j += 1) {
      const a = i * row + j;
      const b = a + 1;
      const c = a + row;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  topGeometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  topGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  topGeometry.setIndex(indices);
  topGeometry.computeVertexNormals();
  radialSurfaceObject = new THREE.Mesh(
    topGeometry,
    new THREE.MeshPhongMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
      transparent: false,
      opacity: 1,
      shininess: 8,
      specular: 0x222222,
    })
  );
  radialSurfaceObject.userData.rings = rings;
  radialSurfaceObject.userData.samples = samples;
  group.add(radialSurfaceObject);

  if (options.radialSide) {
    const connector = new THREE.Mesh(
      new THREE.CylinderGeometry(shellRadiusScale, shellRadiusScale, Math.max(0.1, sideZ - diskZ), 160, 1, true),
      new THREE.MeshPhysicalMaterial({
        color: 0xd7e7e4,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.24,
        depthWrite: false,
        roughness: 0.22,
        metalness: 0,
        clearcoat: 0.55,
        clearcoatRoughness: 0.28,
        ior: 1.45,
        transmission: 0.08,
        specularIntensity: 0.5,
        specularColor: 0xffffff,
      })
    );
    connector.rotation.x = Math.PI / 2;
    connector.position.z = (sideZ + diskZ) / 2;
    connector.renderOrder = 2;
    group.add(connector);
    group.add(circleLine(shellRadiusScale, sideZ, 0xffffff, 0.12));
    group.add(circleLine(shellRadiusScale, diskZ, 0xffffff, 0.08));

    const sideGeometry = new THREE.BufferGeometry();
    const sideVertices = [];
    const sideColors = [];
    const sideIndices = [];
    const sideAngles = options.radialSection ? 64 : 128;
    const thetaStart = options.radialSection ? 0 : 0;
    const thetaSpan = options.radialSection ? Math.PI : Math.PI * 2;
    for (let i = 0; i <= rings; i += 1) {
      const r = (i / rings) * shellRadiusScale;
      const sourceIndex = Math.round((i / rings) * samples);
      const value = values[sourceIndex] / maxAbs;
      const z = sideZ + value * heightScale;
      for (let j = 0; j <= sideAngles; j += 1) {
        const theta = thetaStart + (thetaSpan * j) / sideAngles;
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        sideVertices.push(x, y, z);
        const color = radialClientColor(value, 0xb2b2b2);
        sideColors.push(color.r, color.g, color.b);
      }
    }
    const sectionRow = sideAngles + 1;
    for (let i = 0; i < rings; i += 1) {
      for (let j = 0; j < sideAngles; j += 1) {
        const a = i * sectionRow + j;
        const b = a + 1;
        const c = a + sectionRow;
        const d = c + 1;
        sideIndices.push(a, c, b, b, c, d);
      }
    }
    sideGeometry.setAttribute("position", new THREE.Float32BufferAttribute(sideVertices, 3));
    sideGeometry.setAttribute("color", new THREE.Float32BufferAttribute(sideColors, 3));
    sideGeometry.setIndex(sideIndices);
    sideGeometry.computeVertexNormals();
    radialSideObject = new THREE.Mesh(
      sideGeometry,
      new THREE.MeshPhongMaterial({
        vertexColors: true,
        side: THREE.DoubleSide,
        transparent: false,
        opacity: 1,
        shininess: 10,
        specular: 0x333333,
      })
    );
    radialSideObject.userData.rings = rings;
    radialSideObject.userData.samples = samples;
    radialSideObject.userData.sideAngles = sideAngles;
    group.add(radialSideObject);
  }

  if (options.radialCurve) {
    const curvePoints = [];
    const curveZ = curveBaseZ;
    for (let i = 0; i <= samples; i += 1) {
      const r = (radialDisplayScale * i) / samples;
      const z = curveZ + (values[i] / maxAbs) * heightScale;
      curvePoints.push(new THREE.Vector3(r, 0, z));
    }
    const mirrored = curvePoints.slice(1).map((p) => new THREE.Vector3(-p.x, 0, p.z)).reverse();
    radialCurveObject = solidCurveFromPoints([...mirrored, ...curvePoints], 0xffffff, options.radialSide ? 0.013 : 0.011);
    radialCurveObject.userData.samples = samples;
    group.add(radialCurveObject);
  }

  if (options.radialAxis) {
    const axisZ = curveOriginZ;
    radialAxisObject = makeRadialAxisGroup(radialDisplayScale + 0.9, radialDisplayScale + 0.45, axisZ, options.radialMode);
    group.add(radialAxisObject);
  }
  addRadialNodeMarkers(group, params, options, radialRelationMeta);

  radialProjectionObject = group;
  
  if (document.body.classList.contains("cinematic-mode")) {
    scene.add(group);
    group.position.set(options.radius * 1.35, 0, 0);
    group.rotation.y = -Math.PI / 6; // slightly angle it for better 3D visibility
    const s = Math.max(0.8, options.radius * 0.08);
    group.scale.set(s, s, s);
  } else {
    radialScene.add(group);
  }
  
  radialAxisObject = null;
  radialReferenceObject = null;
  const radialTarget = new THREE.Vector3(0, 0, baseZ);
  if (options.radialSide) {
    currentRadialRadius = 4.9;
    radialCamera.position.set(0, -7.2, sideZ + 1.25);
    radialCamera.lookAt(radialTarget);
    updateRadialFrustum(currentRadialRadius);
    radialControls.target.copy(radialTarget);
    radialControls.handleResize?.();
    radialControls.update();
  } else {
    resetRadialCamera(5.3, radialTarget);
  }
  updateRelationOverlays();
}

function resize() {
  fitSidebarToViewport();
  const resizeViewer = (viewer, rendererObject, updateFrustum, controlsObject, radius) => {
    const rect = viewer.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    rendererObject.setSize(rect.width, rect.height, false);
    rendererObject.domElement.style.width = "100%";
    rendererObject.domElement.style.height = "100%";
    updateFrustum(radius);
    controlsObject.handleResize?.();
    controlsObject.update();
  };

  resizeViewer(el.viewer, renderer, updateCameraFrustum, controls, currentViewRadius);
  resizeViewer(el.angularViewer, angularRenderer, updateAngularFrustum, angularControls, currentAngularRadius);
  resizeViewer(el.projectionViewer, projectionRenderer, updateProjectionFrustum, projectionControls, currentProjectionRadius);
  resizeViewer(el.radialViewer, radialRenderer, updateRadialFrustum, radialControls, currentRadialRadius);
  for (const view of compareViews) Activities.updateCompareCamera(view, view.radius);
  resizeSketchCanvas();
  resizePredictCanvas();
}

function fitSidebarToViewport() {
  const sidebar = document.querySelector(".sidebar");
  const fit = sidebar?.querySelector(".sidebar-fit");
  if (!sidebar) return;
  if (window.matchMedia("(max-width: 900px)").matches) {
    document.documentElement.style.setProperty("--sidebar-zoom", "1");
    document.documentElement.style.setProperty("--sidebar-fit-height", "auto");
    return;
  }

  document.documentElement.style.setProperty("--sidebar-zoom", "1");
  document.documentElement.style.setProperty("--sidebar-fit-height", "auto");
  const sidebarStyle = getComputedStyle(sidebar);
  const available = sidebar.clientHeight - parseFloat(sidebarStyle.paddingTop) - parseFloat(sidebarStyle.paddingBottom);
  const needed = fit?.scrollHeight || sidebar.scrollHeight;
  if (!available || !needed || needed <= available + 4) return;

  const ratio = Math.max(0.72, Math.min(1, (available - 4) / needed));
  document.documentElement.style.setProperty("--sidebar-zoom", ratio.toFixed(3));
  document.documentElement.style.setProperty("--sidebar-fit-height", `${Math.ceil(needed * ratio)}px`);
}

function resizeAfterLayoutChange() {
  requestAnimationFrame(() => {
    resize();
    requestAnimationFrame(() => {
      resize();
      recoverAllViewerControls();
    });
  });
}



















function toggleAnnotationMode() {
  activityState.annotationMode = !activityState.annotationMode;
  document.body.classList.toggle("annotation-mode", activityState.annotationMode);
  el.annotationToolbar?.classList.toggle("closed", !activityState.annotationMode);
  if (activityState.annotationMode) reopenViewWindows();
  UI.setStatus(activityState.annotationMode ? "讲解标注：点击下方按钮添加标签，拖动标签调整位置。" : "讲解标注已关闭。");
}

function annotationTargetLayer(label) {
  const map = {
    正相: "orbital",
    负相: "orbital",
    节点: "orbital",
    投影平面: "projection",
    径向节点: "radial",
  };
  const name = map[label] || "orbital";
  return document.querySelector(`[data-annotation-layer="${name}"]`);
}

function annotationClass(label) {
  if (label === "正相") return "positive";
  if (label === "负相") return "negative";
  if (label === "节点") return "node";
  if (label === "投影平面") return "projection";
  if (label === "径向节点") return "radial";
  return "";
}

function addAnnotation(label) {
  const layer = annotationTargetLayer(label);
  if (!layer) return;
  const note = document.createElement("button");
  note.type = "button";
  note.className = `annotation-note ${annotationClass(label)}`.trim();
  note.textContent = label;
  const count = layer.querySelectorAll(".annotation-note").length;
  note.style.left = `${12 + (count % 4) * 12}%`;
  note.style.top = `${14 + (count % 3) * 14}%`;
  layer.appendChild(note);
}

function clearAnnotations() {
  for (const layer of document.querySelectorAll(".annotation-layer")) layer.replaceChildren();
}

function beginAnnotationDrag(event) {
  const note = event.target.closest(".annotation-note");
  if (!note || !activityState.annotationMode) return;
  event.preventDefault();
  event.stopPropagation();
  const layer = note.closest(".annotation-layer");
  const noteRect = note.getBoundingClientRect();
  activityState.annotationDrag = {
    note,
    layer,
    offsetX: event.clientX - noteRect.left,
    offsetY: event.clientY - noteRect.top,
  };
  note.setPointerCapture?.(event.pointerId);
}

function continueAnnotationDrag(event) {
  const drag = activityState.annotationDrag;
  if (!drag) return;
  event.preventDefault();
  const layerRect = drag.layer.getBoundingClientRect();
  const noteRect = drag.note.getBoundingClientRect();
  const left = Math.max(0, Math.min(layerRect.width - noteRect.width, event.clientX - layerRect.left - drag.offsetX));
  const top = Math.max(0, Math.min(layerRect.height - noteRect.height, event.clientY - layerRect.top - drag.offsetY));
  drag.note.style.left = `${left}px`;
  drag.note.style.top = `${top}px`;
}

function endAnnotationDrag() {
  activityState.annotationDrag = null;
}



function openBoxWindow() {
  if (!el.boxWindow) return;
  el.boxWindow.classList.remove("closed", "minimized");
  el.boxWindow.style.zIndex = "126";
  UI.updateWindowControlLabels(el.boxWindow);
  resizeAfterLayoutChange();
}

function parseTargetValue(value) {
  const [n, l, m] = value.split(",").map(Number);
  return { n, l, m };
}












const explanationDuration = 7200;

function currentOrbitalLabelText() {
  const params = readParams();
  return orbitalLabel(params.n, params.l, params.m);
}

const subscriptDigits = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
const superscriptDigits = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];

function unicodeNumber(value, digits) {
  const sign = value < 0 ? "⁻" : "";
  return sign + String(Math.abs(value)).split("").map((char) => digits[Number(char)] ?? char).join("");
}

function subscriptNumber(value) {
  return unicodeNumber(value, subscriptDigits);
}

function superscriptNumber(value) {
  return unicodeNumber(value, superscriptDigits);
}

function angularPlainName(l, m) {
  const label = orbitalLabel(Math.max(1, l + 1), l, m).replace(/^\d+/, "");
  return label || `l=${l}, m=${m}`;
}








initCinematic({
  resizeAfterLayoutChange,
  renderOrbital,
  applyPreset: UI.applyPreset,
  readParams,
  downloadBlob: (blob, name) => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    URL.revokeObjectURL(a.href);
  },
  getCloudPositiveObject: () => cloudPositiveObject,
  getCloudNegativeObject: () => cloudNegativeObject,
  getIsoMeshes: () => [positiveObject, negativeObject, sliceObject, projectionSurfaceObject, mainProjection3dObject].filter(Boolean),
  getRadialProjectionObject: () => radialProjectionObject,
  getRelationOrbitalObject: () => relationOrbitalObject,
  getAngularObjects: () => [angularPositiveObject, angularNegativeObject].filter(Boolean),
  getScene: () => typeof scene !== "undefined" ? scene : null,
  getControls: () => controls,
  getGlobalXYClipPlane: () => globalXYClipPlane,
  getRadius: () => readOptions().radius,
  updateProjectionsFast: () => {
    const params = readParams();
    const options = readOptions();
    clearProjectionObjects();
    renderProjectionView(params, options, true); // fast mode
    if (options.showProjection3d) {
      if (mainProjection3dObject) {
        if (typeof disposeSceneObject === "function") disposeSceneObject(typeof scene !== "undefined" ? scene : null, mainProjection3dObject);
        mainProjection3dObject = null;
      }
      const newProj = makeIntegratedProjection3D(params, options, true); // fast mode
      if (newProj) {
        newProj.name = "integratedProjection3DGroup";
        newProj.visible = true;
        scene.add(newProj);
        mainProjection3dObject = newProj;
      }
    }
    if (typeof applyCinematicVisualState === "function") {
      applyCinematicVisualState();
    }
  },
  updateProjectionsHighQuality: () => {
    const params = readParams();
    const options = readOptions();
    clearProjectionObjects();
    renderProjectionView(params, options, false);
    if (options.showProjection3d) {
      if (mainProjection3dObject) {
        if (typeof disposeSceneObject === "function") disposeSceneObject(typeof scene !== "undefined" ? scene : null, mainProjection3dObject);
        mainProjection3dObject = null;
      }
      const newProj = makeIntegratedProjection3D(params, options, false);
      if (newProj) {
        newProj.name = "integratedProjection3DGroup";
        newProj.visible = true;
        scene.add(newProj);
        mainProjection3dObject = newProj;
      }
    }
    if (typeof applyCinematicVisualState === "function") {
      applyCinematicVisualState();
    }
  },
  rebuildRelationSliceCapHighQuality,
  rebuildRelationSliceCapFastSeparated,
  updateRelationRadiusScanOnly,
  setDrawRange: (start, count) => {
     const currentPercent = count / 100;
     if (typeof radialSurfaceObject !== 'undefined' && radialSurfaceObject) {
         const rings = radialSurfaceObject.userData.rings;
         const currentRings = Math.max(1, Math.round(currentPercent * rings));
         radialSurfaceObject.geometry.setDrawRange(start, currentRings * 128 * 6);
     }
     if (typeof radialSideObject !== 'undefined' && radialSideObject) {
         const rings = radialSideObject.userData.rings;
         const currentRings = Math.max(1, Math.round(currentPercent * rings));
         radialSideObject.geometry.setDrawRange(start, currentRings * radialSideObject.userData.sideAngles * 6);
     }
     if (typeof radialCurveObject !== 'undefined' && radialCurveObject) {
         const samples = radialCurveObject.userData.samples;
         const currentSamples = Math.max(1, Math.round(currentPercent * samples));
         const totalPoints = samples * 2 + 1;
         const segmentsPerSample = radialCurveObject.geometry.parameters.tubularSegments / totalPoints;
         const centerSegment = radialCurveObject.geometry.parameters.tubularSegments / 2;
         const visSegs = currentSamples * segmentsPerSample;
         const startSeg = Math.max(0, Math.floor(centerSegment - visSegs));
         radialCurveObject.geometry.setDrawRange(startSeg * 8 * 6, Math.ceil(visSegs * 2) * 8 * 6);
     }
  }
});
function explanationSteps() {
  const params = readParams();
  const label = orbitalLabel(params.n, params.l, params.m);
  const radialNodes = params.n - params.l - 1;
  const angularNodes = params.l;
  return [
    {
      focus: "all",
      title: `先把 ${label} 看成一个波函数`,
      formula: "Ψ(r,θ,φ) = Rₙₗ(r) · Yₗᵐ(θ,φ)",
      text: "四个窗口不是四套不同的计算。它们都来自同一个 Ψ，只是观察方式不同：在空间中取等值面、在平面上取切片、沿半径取曲线，或只看角向部分。",
      observe: `当前轨道是 ${label}：n=${params.n} 决定尺度和径向层数，l=${params.l} 决定角向节点，m=${params.m} 决定方向和相位分区。`,
      reason: "先建立“同源”的概念，后面的每张图就不再是孤立图像，而是同一个函数的不同读法。",
      action: () => {
        if (el.projection) el.projection.checked = true;
        renderOrbital();
      },
    },
    {
      focus: "orbital",
      title: "原子轨道：找出 Ψ 等于某个值的边界",
      formula: "Ψ(x,y,z) = +c  和  Ψ(x,y,z) = -c",
      text: "程序先在三维盒子里布满格点，逐点计算 Ψ。把数值等于正等值和负等值的位置连成曲面，就得到你看到的两个相位区域。",
      observe: "粉色和蓝色表示波函数符号相反，不表示电荷正负。网格越密，等值面越接近真实边界。",
      reason: "这一步回答“轨道外形怎么来”：它不是画出来的外壳，而是三维标量场中被等值面算法提取出来的边界。",
      action: () => {
        setOrbitalVisualState({ cloud: false, wireframe: true, smooth: true, projection: false, node: false, box: true });
      },
    },
    {
      focus: "projection",
      title: "轨道投影：把同一个 Ψ 放到一个平面上读",
      formula: "例如：z=0 时，观察 Ψ(x,y,0)",
      text: "投影窗口先选一个最能显示该轨道对称性的平面，再在平面上逐点计算 Ψ。上方曲面用高度表达数值大小，下方等高线表达相位和节点线。",
      observe: "看上方曲面的峰、谷，再对照下方等高线：峰对应密集的正相线，谷对应密集的负相线，白色过渡附近就是节点。",
      reason: "这一步把三维轨道压到二维平面，让学生更容易判断相位分区、节点线和方向。",
      action: () => {
        if (el.projection) el.projection.checked = true;
        if (el.box) el.box.checked = true;
        if (el.wireframe) el.wireframe.checked = true;
        if (el.smooth) el.smooth.checked = false;
        renderOrbital();
      },
    },
    {
      focus: "radial",
      title: "径向分布：只问电子离原子核多远",
      formula: "P(r) = r² · Rₙₗ(r)²",
      text: "径向分布函数暂时不关心方向，只沿半径统计概率。R 决定波函数随距离怎样振荡，r² 会把球壳体积因素加进去。",
      observe: `${label} 的径向节点数是 n-l-1 = ${radialNodes}。曲线下凹或接近零的位置，通常对应概率分布中的分层。`,
      reason: "这一步解释“为什么有的轨道外面还有一层”：那通常来自径向部分，而不是角向形状突然改变。",
      action: () => {
        if (el.radialR) el.radialR.checked = false;
        if (el.radialR2) el.radialR2.checked = false;
        if (el.radialRdf) el.radialRdf.checked = true;
        if (el.radialSection) el.radialSection.checked = true;
        if (el.radialSide) el.radialSide.checked = true;
        if (el.radialCurve) el.radialCurve.checked = true;
        renderOrbital();
      },
    },
    {
      focus: "angular",
      title: "角向函数：只看方向怎样分成正负相",
      formula: "Yₗᵐ(θ,φ) 决定方向、节面和相位",
      text: "角向函数把半径影响先拿掉，只保留方向上的变化。这样可以直接看到轨道为什么沿某些轴伸展，为什么中间会出现节面。",
      observe: `${label} 的角向节点数是 l = ${angularNodes}。这些节点决定了轨道方向上的分瓣方式。`,
      reason: "最后再回到原子轨道时，学生就能把外形拆开理解：径向部分决定层数，角向部分决定方向和分瓣。",
      action: () => {
        if (el.projection) el.projection.checked = false;
        if (el.node) el.node.checked = true;
        if (el.longitudeNode) el.longitudeNode.checked = true;
        if (el.wireframe) el.wireframe.checked = true;
        renderOrbital();
      },
    },
  ];
}

function setExplanationFocus(focus) {
  for (const win of document.querySelectorAll(".qt-window.teaching-focus")) {
    win.classList.remove("teaching-focus");
  }
  const names = focus === "all" ? ["orbital", "projection", "radial", "angular"] : [focus];
  for (const name of names) {
    document.querySelector(`[data-window-name="${name}"]`)?.classList.add("teaching-focus");
  }
}

function updateExplanationProgress(progress) {
  if (el.explainProgressFill) {
    el.explainProgressFill.style.width = `${Math.max(0, Math.min(1, progress)) * 100}%`;
  }
}

function stopExplanationTimer() {
  if (activityState.explanationTimer) clearTimeout(activityState.explanationTimer);
  if (activityState.explanationFrame) cancelAnimationFrame(activityState.explanationFrame);
  activityState.explanationTimer = null;
  activityState.explanationFrame = null;
}

function tickExplanationProgress() {
  if (!activityState.explanationPlaying) return;
  const progress = (performance.now() - activityState.explanationStartedAt) / explanationDuration;
  updateExplanationProgress(progress);
  activityState.explanationFrame = requestAnimationFrame(tickExplanationProgress);
}

function scheduleExplanationNext() {
  stopExplanationTimer();
  activityState.explanationStartedAt = performance.now();
  tickExplanationProgress();
  activityState.explanationTimer = setTimeout(() => {
    const steps = explanationSteps();
    if (activityState.explanationStep >= steps.length - 1) {
      activityState.explanationPlaying = false;
      if (el.explainPlayButton) el.explainPlayButton.textContent = "播放";
      updateExplanationProgress(1);
      return;
    }
    showExplanationStep(activityState.explanationStep + 1);
    if (activityState.explanationPlaying) scheduleExplanationNext();
  }, explanationDuration);
}

function showExplanationStep(index, opts = {}) {
  const steps = explanationSteps();
  const stepIndex = Math.max(0, Math.min(steps.length - 1, index));
  const step = steps[stepIndex];
  activityState.explanationStep = stepIndex;
  if (el.explainStepBadge) el.explainStepBadge.textContent = `第 ${stepIndex + 1} 步 / ${steps.length} 步`;
  if (el.explainStepTitle) el.explainStepTitle.textContent = step.title;
  if (el.explainStepText) el.explainStepText.textContent = step.text;
  if (el.explainFormula) el.explainFormula.textContent = step.formula;
  if (el.explainObserveText) el.explainObserveText.textContent = step.observe;
  if (el.explainReasonText) el.explainReasonText.textContent = step.reason;
  if (el.explainHintText) {
    el.explainHintText.textContent = `正在讲解 ${currentOrbitalLabelText()}。你可以暂停后旋转任意一个窗口，再继续播放。`;
  }
  setExplanationFocus(step.focus);
  updateExplanationProgress(0);
  if (opts.render !== false) step.action();
}

function playExplanation() {
  activityState.explanationPlaying = true;
  if (el.explainPlayButton) el.explainPlayButton.textContent = "暂停";
  showExplanationStep(activityState.explanationStep);
  scheduleExplanationNext();
}

function pauseExplanation() {
  activityState.explanationPlaying = false;
  if (el.explainPlayButton) el.explainPlayButton.textContent = "播放";
  stopExplanationTimer();
}

function toggleExplanationPlayback() {
  if (activityState.explanationPlaying) pauseExplanation();
  else playExplanation();
}

function restartExplanation() {
  pauseExplanation();
  activityState.explanationStep = 0;
  showExplanationStep(0);
}

function moveExplanationStep(delta) {
  pauseExplanation();
  showExplanationStep(activityState.explanationStep + delta);
}

function setOrbitalVisualState(state) {
  if (state.cloud != null && el.cloud) el.cloud.checked = state.cloud;
  if (state.wireframe != null && el.wireframe) el.wireframe.checked = state.wireframe;
  if (state.smooth != null && el.smooth) el.smooth.checked = state.smooth;
  if (state.projection != null && el.projection) el.projection.checked = state.projection;
  if (state.node != null) {
    if (el.node) el.node.checked = state.node;
    if (el.radialNode) el.radialNode.checked = state.node;
    if (el.polarNode) el.polarNode.checked = state.node;
    if (el.longitudeNode) el.longitudeNode.checked = state.node;
  }
  if (state.box != null && el.box) el.box.checked = state.box;
  if (state.grid3d != null && el.grid3d) el.grid3d.checked = state.grid3d;
  renderOrbital();
}



function showScoreRubric() {
  if (el.scorePrompt) {
    el.scorePrompt.textContent = "评分标准：节点数 30 分，相位颜色 25 分，空间方向 25 分，投影/截面对应关系 20 分。";
  }
}

function resetScorePrompt() {
  if (el.scorePrompt) {
    el.scorePrompt.textContent = "评分会根据当前目标轨道给出节点数、相位、方向和投影四项课堂反馈。";
  }
}

function runDiagnosis(type) {
  if (type === "nodes") {
    setOrbitalVisualState({ cloud: false, wireframe: true, smooth: false, projection: false, node: true });
    if (el.diagnosisPrompt) el.diagnosisPrompt.textContent = "节点诊断：观察径向节点数 n-l-1 与角向节点数 l 是否匹配。";
  } else if (type === "phase") {
    setOrbitalVisualState({ cloud: false, wireframe: true, smooth: false, projection: false, node: false });
    if (el.positiveLobe) el.positiveLobe.checked = true;
    if (el.negativeLobe) el.negativeLobe.checked = true;
    renderOrbital();
    if (el.diagnosisPrompt) el.diagnosisPrompt.textContent = "相位诊断：紫色/青色两相表示波函数符号相反，不代表电荷正负。";
  } else {
    setOrbitalVisualState({ cloud: false, wireframe: true, smooth: false, projection: true, node: false, box: true });
    if (el.diagnosisPrompt) el.diagnosisPrompt.textContent = "投影诊断：对照上方波函数曲面与底部等高线，判断节点线和相位区。";
  }
}

function setTabletMode(enabled) {
  document.body.classList.toggle("tablet-mode", enabled);
  if (enabled) {
    UI.setWindowLayout("tile");
    Activities.showActivityPane("tablet");
    UI.setStatus("平板课堂：已放大按钮和触控区域。");
  } else {
    UI.setStatus("已恢复普通课堂布局。");
  }
  resizeAfterLayoutChange();
}














function animate() {
  updatePointCloudAnimation(performance.now() * 0.001, performance.now());
  if (cinematicActive) processCinematicTick(performance.now());
  controls.update();
  angularControls.update();
  projectionControls.update();
  radialControls.update();
  syncLinkedCameras();
  renderer.render(scene, camera);
  angularRenderer.render(angularScene, angularCamera);
  projectionRenderer.render(projectionScene, projectionCamera);
  radialRenderer.render(radialScene, radialCamera);
  for (const view of compareViews) {
    view.controls.update();
    view.renderer.render(view.scene, view.camera);
  }
  requestAnimationFrame(animate);
}





















mountRelationControls();

for (const input of [
  el.n,
  el.l,
  el.m,
  el.z,
  el.iso,
  el.density,
  el.radius,
  el.opacity,
  el.mode,
  el.slice,
  el.node,
  el.axis,
  el.box,
  el.positiveColor,
  el.negativeColor,
  el.backgroundColor,
  el.desktopMatch,
  el.boxSizeDisplay,
  el.cloud,
  el.positiveLobe,
  el.negativeLobe,
  el.wireframe,
  el.smooth,
  el.projection,
  el.radialSection,
  el.radialSide,
  el.radialCurve,
  el.radialAxis,
  el.radialNode,
  el.polarNode,
  el.longitudeNode,
  el.grid3d,
  el.relationMode,
  el.syncRotation,
  el.scanRadius,
  el.scanTheta,
  el.scanPhi,
  el.scanSliceZ,
  el.projection3d,
]) {
  if (!input) continue;
  input.addEventListener("input", () => {
    if (input === el.boxSizeDisplay) applyBoxSizeToRadius();
    readParams();
    readOptions();
    if (input === el.backgroundColor) {
      applyBackgroundColor(el.backgroundColor.value);
      return;
    }
    if (input === el.relationMode) {
      clearRadialObjects();
      renderRadialView(readParams(), readOptions());
      return;
    }
    if ([el.syncRotation, el.scanRadius, el.scanTheta, el.scanPhi].includes(input)) {
      if (!el.relationMode.checked) {
        el.relationMode.checked = true;
        clearRadialObjects();
        renderRadialView(readParams(), readOptions());
      }
      updateRelationRadiusScanOnly();
      return;
    }
    if ([el.wireframe, el.smooth].includes(input)) return;
    if ([el.axis, el.box].includes(input)) {
      UI.fastUpdateVisualOptions();
      return;
    }
    if (input.type === "checkbox" || input.type === "color") renderOrbital(false);
  });
}

for (const input of [el.n, el.l, el.m, el.z, el.desktopMatch]) {
  input.addEventListener("change", () => {
    applyDesktopDefaultsToControls();
    renderOrbital(true);
  });
}

el.preset.addEventListener("input", UI.applyPreset);
el.renderButton.addEventListener("click", () => renderOrbital(true));
el.samplePlayBtn?.addEventListener("click", startLiveSampling);
el.cloud?.addEventListener("change", (e) => { if (e.target.checked) startLiveSampling(); });
el.redrawProxyButton?.addEventListener("click", () => renderOrbital(true));
el.presetButton?.addEventListener("click", () => {
  applyDesktopDefaultsToControls();
  renderOrbital(true);
});
el.axisProxyButton?.addEventListener("click", () => {
  UI.toggleAxis();
});
document.querySelector("#colorProxyButton")?.addEventListener("click", () => {
  el.paletteOne.checked = !el.paletteOne.checked;
  el.paletteTwo.checked = !el.paletteOne.checked;
  UI.applyPalette(el.paletteOne.checked ? "one" : "two");
});
el.resetCameraButton.addEventListener("click", () => resetCamera());
el.screenshotButton.addEventListener("click", UI.exportImage);
for (const button of document.querySelectorAll("[data-window-action]")) {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    UI.handleWindowControl(button);
  });
}
for (const item of el.menuItems) {
  item.addEventListener("click", (event) => {
    event.stopPropagation();
    UI.openMenu(item);
  });
}
document.addEventListener("click", UI.closeMenu);
el.menuPopup.addEventListener("click", (event) => event.stopPropagation());

el.toolRender?.addEventListener("click", () => {
  UI.closeMenu();
  renderOrbital();
});
el.toolSave?.addEventListener("click", () => {
  UI.closeMenu();
  UI.exportImage();
});
const toolThemeBtn = document.getElementById("toolTheme");
toolThemeBtn?.addEventListener("click", () => {
  UI.closeMenu();
  document.documentElement.classList.toggle("theme-light");
  const isLight = document.documentElement.classList.contains("theme-light");
  toolThemeBtn.textContent = isLight ? "🌞" : "🌗";
  
  applyBackgroundColor(isLight ? undefined : darkThemeBackground);
});
  el.toolAxis?.addEventListener("click", () => {
    UI.closeMenu();
    UI.toggleAxis();
  });
el.toolXOY?.addEventListener("click", () => {
  UI.closeMenu();
  UI.setPlaneView("xoy");
});
el.toolYOZ?.addEventListener("click", () => {
  UI.closeMenu();
  UI.setPlaneView("yoz");
});
el.toolXOZ?.addEventListener("click", () => {
  UI.closeMenu();
  UI.setPlaneView("xoz");
});
setTimeout(() => {
  initAxes();
  renderer.domElement.addEventListener("click", pickRelationPoint);
  window.addEventListener("resize", resize);


  applyBackgroundColor();
  UI.bindExclusiveCheckboxes();
  bindSketchPanel();
bindPredictSketchPanel();
  UI.bindAppUI();
  Activities.initializeActivityOptions();
  document.getElementById("openAnimationButton")?.addEventListener("click", () => {
    playCinematicAnimation();
  });
  resize();
  UI.setWindowLayout("tile");
  applyDesktopDefaultsToControls();
  resetCamera();
  renderOrbital(true);
  animate();
}, 0);



export { updateWindowControlLabels } from "./js/ui.js";
export { makeAxisGroup, readParams, angularPlainName, subscriptNumber, superscriptNumber, resizeAfterLayoutChange };




const generationDuration = 5200;

function generationSteps() {
  const params = readParams();
  return [
    {
      focus: "cloud",
      title: "第一步：电子云的形成",
      text: "根据概率密度分布，电子在原子核周围逐渐显现，形成浓密的电子云。",
    },
    {
      focus: "isosurface",
      title: "第二步：原子轨道实体化",
      text: "从电子云中提取特定概率的等势面，形成光滑的三维原子轨道轮廓。",
    },
    {
      focus: "slice_projection",
      title: "第三步：动态切片与投影",
      text: "对原子轨道进行切片，并将其截面映射为 2D 与 3D 的概率密度投影图。",
    },
    {
      focus: "radial_scan",
      title: "第四步：径向分布扫描",
      text: "从原子核中心向外沿径向扫描，展示波函数随半径变化的特征分布。",
    },
    {
      focus: "formula",
      title: "第五步：波动解析",
      text: "结合波函数公式，揭示轨道的径向分布函数与角向球面谐和函数构成。",
    }
  ];
}


// --- NATIVE 3D ANIMATION ENGINE ---
function seededNoise(index, seed) {
  let x = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}
let animScene, animCamera, animControls;
let animCloudPoints, animIsoMeshes = [], animSlicePlane, animGroup;
let animInitialized = false;
let animRenderTarget;

function initNativeAnimation() {
  if (animInitialized) return;
  
  animScene = new THREE.Scene();
  animCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  animCamera.position.set(0, 0, 40);
  
  animControls = new OrbitControls(animCamera, el.animationCanvas);
  animControls.enableDamping = true;
  animControls.dampingFactor = 0.05;

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  animScene.add(ambientLight);
  animScene.add(new THREE.HemisphereLight(0xffffff, 0x161616, 0.3));
  
  // Use absolute positioned lights to guarantee illumination from all angles
  const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
  dirLight1.position.set(20, 30, 50);
  animScene.add(dirLight1);
  
  const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.0);
  dirLight2.position.set(-20, -20, 40);
  animScene.add(dirLight2);
  
  const dirLight3 = new THREE.DirectionalLight(0xffffff, 0.6);
  dirLight3.position.set(0, -30, 50);
  animScene.add(dirLight3);
  
  animInitialized = true;
}

function resizeNativeAnimation() {
  const rect = el.animationCanvas.parentElement.getBoundingClientRect();
  const width = Math.max(300, Math.round(rect.width));
  const height = Math.max(300, Math.round(rect.height));
  
  const canvas = el.animationCanvas;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  
  animCamera.aspect = width / height;
  animCamera.updateProjectionMatrix();
  if (typeof animControls.handleResize === 'function') {
    animControls.handleResize();
  }
  
  return { width, height };
}

function rebuildAnimationModels() {
  if (!animScene) return;
  while(animScene.children.length > 2) {
    animScene.remove(animScene.children[2]);
  }
  animGroup = new THREE.Group();
  animScene.add(animGroup);
  
  const params = readParams();
  const options = readOptions();
  const box = desktopBoxAndIso(params);
  const radius = Math.min(options.radius, Math.max(5, box.leastRadius + 1.2));
  
  // 1. Cloud (Points)
  const geo = new THREE.BufferGeometry();
  const pos = [], colors = [], probs = [];
  let maxAbs = 0;
  for (let i = 0; i < 500; i++) {
     const x = (seededNoise(i, 11) * 2 - 1) * radius;
     const y = (seededNoise(i, 12) * 2 - 1) * radius;
     const z = (seededNoise(i, 13) * 2 - 1) * radius;
     if (x*x+y*y+z*z <= radius*radius) maxAbs = Math.max(maxAbs, Math.abs(psi(params, x, y, z)));
  }
  for (let i = 0; i < 15000; i++) {
     const x = (seededNoise(i, 21) * 2 - 1) * radius;
     const y = (seededNoise(i, 22) * 2 - 1) * radius;
     const z = (seededNoise(i, 23) * 2 - 1) * radius;
     if (x*x+y*y+z*z > radius*radius) continue;
     const val = psi(params, x, y, z);
     const prob = (Math.abs(val) / Math.max(maxAbs, 1e-8)) ** 2;
     pos.push(x, y, z);
     const c = val >= 0 ? [1, 0.17, 0.84] : [0, 0.84, 1];
     colors.push(...c);
     probs.push(prob);
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const mat = new THREE.PointsMaterial({ size: 0.35, vertexColors: true, transparent: true, opacity: 1 });
  animCloudPoints = new THREE.Points(geo, mat);
  animCloudPoints.userData = { origPos: new Float32Array(pos), probs };
  animGroup.add(animCloudPoints);

  // 2. Isosurface (Clone from main scene)
  const isoPos = positiveObject ? positiveObject.clone() : new THREE.Group();
  const isoNeg = negativeObject ? negativeObject.clone() : new THREE.Group();
  
  const displayRadius = Math.max(2, Math.min(6, radius));
  const matchedRadius = Math.max(1, box.leastRadius + 1.2);
  const mainScale = displayRadius / matchedRadius;
  
  isoPos.scale.set(1/mainScale, 1/mainScale, 1/mainScale);
  isoNeg.scale.set(1/mainScale, 1/mainScale, 1/mainScale);

  animSlicePlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), radius);

  const applyMat = (obj) => {
    if (obj.isMesh) {
      obj.material = obj.material.clone();
      obj.material.transparent = true;
      obj.material.opacity = 0;
      obj.material.clippingPlanes = [animSlicePlane];
    }
  };
  isoPos.traverse(applyMat);
  isoNeg.traverse(applyMat);
  
  animGroup.add(isoPos);
  animGroup.add(isoNeg);
  animIsoMeshes = [isoPos, isoNeg];
  
  animGroup.userData.animProjSurface = null;
  animGroup.userData.animProjContour = null;
  if (projectionSurfaceObject && projectionRelationMeta) {
    const surfaceGroup = projectionSurfaceObject.clone();
    surfaceGroup.traverse(c => {
      if (c.material) {
        c.material = c.material.clone();
        c.material.transparent = true;
        c.material.opacity = 0;
      }
    });
    animGroup.userData.animProjSurface = surfaceGroup;
    animGroup.add(surfaceGroup);
  }

  // 4. Angular Meshes
  animGroup.userData.animAngularGroup = new THREE.Group();
  const angularClipPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);
  animGroup.userData.angularClipPlane = angularClipPlane;
  
  [angularPositiveObject, angularNegativeObject, angularNodeObject].forEach(obj => {
    if (obj) {
      const clone = obj.clone();
      clone.traverse(c => {
        if (c.geometry) {
          c.geometry = c.geometry.clone();
          c.userData.origIndexCount = c.geometry.index ? c.geometry.index.count : c.geometry.attributes.position.count;
        }
        if (c.material) {
          c.material = c.material.clone();
          c.material.transparent = true;
          c.material.opacity = 0;
          c.material.clippingPlanes = [angularClipPlane];
          c.material.needsUpdate = true;
        }
      });
      animGroup.userData.animAngularGroup.add(clone);
    }
  });
  animGroup.add(animGroup.userData.animAngularGroup);

  // 5. Radial Meshes
  animGroup.userData.animRadialGroup = null;
  const radialClipPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0);
  animGroup.userData.radialClipPlane = radialClipPlane;
  
  if (radialProjectionObject) {
    const radialGroup = radialProjectionObject.clone();
    radialGroup.traverse(c => {
      if (c.geometry) {
        c.geometry = c.geometry.clone();
        c.userData.origIndexCount = c.geometry.index ? c.geometry.index.count : c.geometry.attributes.position.count;
      }
      if (c.material) {
        c.material = c.material.clone();
        c.material.transparent = true;
        c.material.opacity = 0;
        c.material.clippingPlanes = [radialClipPlane];
        c.material.needsUpdate = true;
      }
    });
    animGroup.userData.animRadialGroup = radialGroup;
    animGroup.add(radialGroup);
  }

  animGroup.scale.setScalar(12 / radius);
}

function drawGenerationAnimation(progress) {
  if (!animInitialized) initNativeAnimation();
  const { width, height } = resizeNativeAnimation();
  if (!animGroup) rebuildAnimationModels();
  
  animControls.update();

  const stepIndex = activityState.animationStep;
  const steps = generationSteps();
  
  const localTime = performance.now() - (activityState.currentStepStartTime || activityState.animationStartedAt || performance.now());
  const localProgress = Math.min(1, localTime / 4000);

  document.getElementById("animFormulaOverlay").style.display = "none";
  
  // Update Cloud Flickering and Accumulation
  const totalPoints = animCloudPoints.userData.probs.length;
  const posAttr = animCloudPoints.geometry.attributes.position;
  const origPos = animCloudPoints.userData.origPos;
  const probs = animCloudPoints.userData.probs;
  const timeSec = performance.now() / 1000;
  
  let drawCount = 0;
  if (stepIndex === 0) {
    drawCount = Math.floor(totalPoints * localProgress);
  } else if (stepIndex === 1) {
    drawCount = totalPoints;
  }
  
  if (stepIndex <= 1) {
    animCloudPoints.visible = true;
    animCloudPoints.geometry.setDrawRange(0, drawCount);
    animCloudPoints.material.opacity = stepIndex === 0 ? 1 : Math.max(0, 1 - localProgress * 2);
    for(let i=0; i<drawCount; i++) {
        if(seededNoise(i, Math.floor(timeSec * 4) + 31) > probs[i] * 0.9) {
            posAttr.array[i*3] = 9999;
        } else {
            posAttr.array[i*3] = origPos[i*3];
            posAttr.array[i*3+1] = origPos[i*3+1];
            posAttr.array[i*3+2] = origPos[i*3+2];
        }
    }
    posAttr.needsUpdate = true;
  } else {
    animCloudPoints.visible = false;
  }

  // Update Isosurfaces
  animSlicePlane.constant = 100;
  
  // Reset positions and visibilities for all steps
  animIsoMeshes.forEach(m => m.position.x = 0);
  if (animGroup.userData.animProjSurface) {
    animGroup.userData.animProjSurface.traverse(c => {
      if (c.material) c.material.opacity = 0;
    });
    if (animGroup.userData.animProjContour) {
      animGroup.userData.animProjContour.material.opacity = 0;
    }
  }
  if (animGroup.userData.animAngularGroup) {
    animGroup.userData.animAngularGroup.traverse(c => {
      if (c.material) c.material.opacity = 0;
    });
  }
  if (animGroup.userData.animRadialGroup) {
    animGroup.userData.animRadialGroup.traverse(c => {
      if (c.material) c.material.opacity = 0;
    });
  }

  if (stepIndex === 0) {
    animIsoMeshes.forEach(m => m.traverse(c => { if(c.isMesh) c.material.opacity = 0; }));
  } else if (stepIndex === 1) {
    animIsoMeshes.forEach(m => m.traverse(c => { if(c.isMesh) c.material.opacity = localProgress; }));
  } else if (stepIndex === 2) {
    animIsoMeshes.forEach(m => m.traverse(c => { if(c.isMesh) c.material.opacity = 1; }));
    const box = new THREE.Box3().setFromObject(animIsoMeshes[0] || animGroup);
    const maxH = box.max.y / animGroup.scale.y;
    const minH = box.min.y / animGroup.scale.y;
    
    // 0 to 0.4: sweep down
    // 0.4 to 0.7: fade in 2D
    // 0.7 to 1.0: extrude 3D
    const sweepP = Math.min(1, localProgress / 0.4);
    animSlicePlane.constant = maxH - (maxH - minH + 0.1) * sweepP;
    
    const projSurface = animGroup.userData.animProjSurface;
    const projContour = animGroup.userData.animProjContour;
    if (projSurface) {
      // Offset positions to show side-by-side
      const radius = projectionRelationMeta ? projectionRelationMeta.radius : 5;
      const offset = radius * 1.2;
      animIsoMeshes.forEach(m => { m.position.x = -offset; });
      projSurface.position.x = offset;
      if (projContour) projContour.position.x = offset;
      
      // Stand it up to face the camera
      projSurface.rotation.x = -Math.PI / 2;
      if (projContour) projContour.rotation.x = -Math.PI / 2;
      
      const fadeP = Math.max(0, Math.min(1, (localProgress - 0.4) / 0.3));
      projSurface.traverse(c => {
        if (c.material) c.material.opacity = fadeP * (c.isLineSegments ? 0.5 : 0.98);
      });
      if (projContour) projContour.material.opacity = fadeP * 0.5;
      
      const extrudeP = Math.max(0, Math.min(1, (localProgress - 0.7) / 0.3));
      const sZ = 0.01 + 0.99 * extrudeP;
      // Scale on local Z
      projSurface.scale.set(1, 1, sZ);
      if (projContour) projContour.scale.set(1, 1, sZ);
      
      // Adjust position so the flat base stays at `surfaceZ` world coordinate
      const surfaceZ = projectionRelationMeta.surfaceZ || 0;
      // After rotation X = -PI/2, local Z is world -Y.
      // We want world Y to be aligned at `surfaceZ`.
      projSurface.position.y = surfaceZ * (1 - sZ);
      if (projContour) projContour.position.y = surfaceZ * (1 - sZ);
    }
  } else if (stepIndex === 3) {
    // Keep orbital fully visible in the center
    animIsoMeshes.forEach(m => m.traverse(c => { 
        if(c.isMesh) c.material.opacity = 1; 
    }));
    
    document.getElementById("animFormulaOverlay").style.display = "flex";
    const summary = formulaSummary(readParams());
    document.getElementById("animFormulaEq").innerHTML = summary.main;
    document.getElementById("animFormulaRadial").innerHTML = "R(r): 径向部分";
    document.getElementById("animFormulaAngular").innerHTML = "Y(θ,φ): 角向部分";

    const slideP = Math.max(0, Math.min(1, localProgress / 0.6)); // Slide out in the first 60%
    const sweepP = Math.max(0, Math.min(1, (localProgress - 0.2) / 0.6)); // Sweep from 20% to 80%
    
    const radius = projectionRelationMeta ? projectionRelationMeta.radius : 5;
    
    // Keep this explanatory split view stable and readable.
    animCamera.position.set(0, 0, Math.max(44, radius * 7.4));
    animCamera.up.set(0, 1, 0);
    animCamera.lookAt(0, 0, 0);
    if (animControls) {
      animControls.target.set(0, 0, 0);
      animControls.update();
    }
    
    const offset = radius * 0.72;
    const scaleFactor = 1.2;
    
    function getLocalBounds(group) {
        const box = new THREE.Box3();
        const tempMatrix = new THREE.Matrix4();
        group.updateMatrixWorld(true);
        const inverseWorld = new THREE.Matrix4().copy(group.matrixWorld).invert();
        group.traverse(c => {
            if (c.geometry) {
                if (!c.geometry.boundingBox) c.geometry.computeBoundingBox();
                const geomBox = c.geometry.boundingBox.clone();
                tempMatrix.multiplyMatrices(inverseWorld, c.matrixWorld);
                geomBox.applyMatrix4(tempMatrix);
                box.union(geomBox);
            }
        });
        return box;
    }
    
    if (animGroup.userData.animRadialGroup) {
       const currentRadialX = -offset * slideP;
       animGroup.userData.animRadialGroup.position.x = currentRadialX;
       animGroup.userData.animRadialGroup.position.y = -radius * 0.4;
       animGroup.userData.animRadialGroup.scale.setScalar(scaleFactor);
       animGroup.userData.animRadialGroup.rotation.x = -Math.PI / 7;
       animGroup.userData.animRadialGroup.rotation.y = 0;
       animGroup.userData.animRadialGroup.rotation.z = 0;
       
       if (animGroup.userData.radialClipPlane) {
          if (animGroup.userData.radialBounds === undefined) {
             const box = getLocalBounds(animGroup.userData.animRadialGroup);
             let xMin = box.min.x; let xMax = box.max.x;
             if (xMin === Infinity) { xMin = -3.7; xMax = 3.7; }
             animGroup.userData.radialBounds = { min: xMin, max: xMax };
          }
          
          const rBounds = animGroup.userData.radialBounds;
          const localLimit = rBounds.min + (rBounds.max - rBounds.min) * sweepP;
          const localPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), localLimit);
          animGroup.userData.animRadialGroup.updateMatrixWorld(true);
          localPlane.applyMatrix4(animGroup.userData.animRadialGroup.matrixWorld);
          animGroup.userData.radialClipPlane.copy(localPlane);
       }
       
       animGroup.userData.animRadialGroup.traverse(c => {
          if (c.material) c.material.opacity = (c.isLineSegments ? 0.5 : 0.95);
       });
    }
    
    if (animGroup.userData.animAngularGroup) {
       const currentAngularX = offset * slideP;
       animGroup.userData.animAngularGroup.position.x = currentAngularX;
       animGroup.userData.animAngularGroup.position.y = -radius * 0.4;
       animGroup.userData.animAngularGroup.scale.setScalar(scaleFactor);
       animGroup.userData.animAngularGroup.rotation.x = Math.PI / 6;
       animGroup.userData.animAngularGroup.rotation.y = Math.PI / 6;
       
       if (animGroup.userData.angularClipPlane) {
          if (animGroup.userData.angularBounds === undefined) {
             const box = getLocalBounds(animGroup.userData.animAngularGroup);
             let zMin = box.min.z; let zMax = box.max.z;
             if (zMin === Infinity) { zMin = -3.5; zMax = 3.5; }
             animGroup.userData.angularBounds = { min: zMin, max: zMax };
          }
          
          const aBounds = animGroup.userData.angularBounds;
          const localLimit = aBounds.min + (aBounds.max - aBounds.min) * sweepP;
          const localPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), localLimit);
          animGroup.userData.animAngularGroup.updateMatrixWorld(true);
          localPlane.applyMatrix4(animGroup.userData.animAngularGroup.matrixWorld);
          animGroup.userData.angularClipPlane.copy(localPlane);
       }
       
       animGroup.userData.animAngularGroup.traverse(c => {
          if (c.material) c.material.opacity = (c.isLineSegments ? 0.5 : 0.95);
       });
    }
  }

  // Render Target
  if (!animRenderTarget || animRenderTarget.width !== width || animRenderTarget.height !== height) {
    if (animRenderTarget) animRenderTarget.dispose();
    animRenderTarget = new THREE.WebGLRenderTarget(width, height, { alpha: true, colorSpace: THREE.SRGBColorSpace });
  }
  
  const oldTarget = renderer.getRenderTarget();
  const oldClearColor = renderer.getClearColor(new THREE.Color());
  const oldClearAlpha = renderer.getClearAlpha();
  const oldClipping = renderer.localClippingEnabled;
  
  renderer.setRenderTarget(animRenderTarget);
  renderer.setClearColor(0x000000, 0);
  renderer.localClippingEnabled = true;
  renderer.clear();
  renderer.render(animScene, animCamera);
  
  renderer.setRenderTarget(oldTarget);
  renderer.setClearColor(oldClearColor, oldClearAlpha);
  renderer.localClippingEnabled = oldClipping;
  
  const canvas = el.animationCanvas;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const buffer = new Uint8Array(width * height * 4);
  renderer.readRenderTargetPixels(animRenderTarget, 0, 0, width, height, buffer);
  
  const imgData = new ImageData(new Uint8ClampedArray(buffer), width, height);
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = width;
  tempCanvas.height = height;
  tempCanvas.getContext("2d").putImageData(imgData, 0, 0);
  
  ctx.save();
  ctx.clearRect(0, 0, width, height);
  ctx.scale(1, -1);
  ctx.drawImage(tempCanvas, 0, -height);
  ctx.restore();
}

function stopGenerationTimer() {
  if (activityState.animationTimer) clearTimeout(activityState.animationTimer);
  if (activityState.animationFrame) cancelAnimationFrame(activityState.animationFrame);
  activityState.animationTimer = null;
  activityState.animationFrame = null;
}

function tickGenerationAnimation() {
  if (!activityState.animationPlaying) return;
  const steps = generationSteps();
  const progress = Math.min(1, (performance.now() - activityState.animationStartedAt) / generationDuration);
  drawGenerationAnimation(progress);
  if (progress >= 1) {
    if (activityState.animationStep >= steps.length - 1) {
      activityState.animationPlaying = false;
      if (el.animationPlayButton) el.animationPlayButton.textContent = "播放";
      return;
    }
    activityState.animationStep += 1;
    activityState.animationStartedAt = performance.now();
    setExplanationFocus(steps[activityState.animationStep]?.focus);
  }
  activityState.animationFrame = requestAnimationFrame(tickGenerationAnimation);
}

function showGenerationStep(index, progress = 0) {
  const steps = generationSteps();
  activityState.animationStep = Math.max(0, Math.min(steps.length - 1, index));
  setExplanationFocus(steps[activityState.animationStep]?.focus);
  drawGenerationAnimation(progress);
}

function playGenerationAnimation() {
  activityState.animationPlaying = true;
  activityState.animationStartedAt = performance.now();
  if (el.animationPlayButton) el.animationPlayButton.textContent = "暂停";
  tickGenerationAnimation();
}

function pauseGenerationAnimation() {
  activityState.animationPlaying = false;
  if (el.animationPlayButton) el.animationPlayButton.textContent = "播放";
  stopGenerationTimer();
}

function toggleGenerationPlayback() {
  if (activityState.animationPlaying) pauseGenerationAnimation();
  else playGenerationAnimation();
}

function restartGenerationAnimation() {
  pauseGenerationAnimation();
  showGenerationStep(0, 0);
}


Activities.initActivities({
  presetsForN: typeof presetsForN !== 'undefined' ? presetsForN : null,
  el: typeof el !== 'undefined' ? el : null,
  compareViews: typeof compareViews !== 'undefined' ? compareViews : null,
  THREE: typeof THREE !== 'undefined' ? THREE : null,
  makeFreeRotationControls: typeof makeFreeRotationControls !== 'undefined' ? makeFreeRotationControls : null,
  bindViewerControlRecovery: typeof bindViewerControlRecovery !== 'undefined' ? bindViewerControlRecovery : null,
  cameraDistanceForRadius: typeof cameraDistanceForRadius !== 'undefined' ? cameraDistanceForRadius : null,
  disposeSceneObject: typeof disposeSceneObject !== 'undefined' ? disposeSceneObject : null,
  parseTargetValue: typeof parseTargetValue !== 'undefined' ? parseTargetValue : null,
  desktopBoxAndIso: typeof desktopBoxAndIso !== 'undefined' ? desktopBoxAndIso : null,
  makeMarchingCubes: typeof makeMarchingCubes !== 'undefined' ? makeMarchingCubes : null,
  makeAxisGroup: typeof makeAxisGroup !== 'undefined' ? makeAxisGroup : null,
  orbitalLabel: typeof orbitalLabel !== 'undefined' ? orbitalLabel : null,
  nodeSummary: typeof nodeSummary !== 'undefined' ? nodeSummary : null,
  readParams: typeof readParams !== 'undefined' ? readParams : null,
  applyDesktopDefaultsToControls: typeof applyDesktopDefaultsToControls !== 'undefined' ? applyDesktopDefaultsToControls : null,
  renderOrbital: typeof renderOrbital !== 'undefined' ? renderOrbital : null,
  UI: typeof UI !== 'undefined' ? UI : null,
  resizeAfterLayoutChange: typeof resizeAfterLayoutChange !== 'undefined' ? resizeAfterLayoutChange : null,
  activityState: typeof activityState !== 'undefined' ? activityState : null,
  showExplanationStep: typeof showExplanationStep !== 'undefined' ? showExplanationStep : null,
  pauseExplanation: typeof pauseExplanation !== 'undefined' ? pauseExplanation : null,
  setExplanationFocus: typeof setExplanationFocus !== 'undefined' ? setExplanationFocus : null,
  openSketchWindow: typeof openSketchWindow !== 'undefined' ? openSketchWindow : null,
  sketchState: typeof sketchState !== 'undefined' ? sketchState : null,
  redrawSketchCanvas: typeof redrawSketchCanvas !== 'undefined' ? redrawSketchCanvas : null,
  clearPredictCanvas: typeof clearPredictCanvas !== 'undefined' ? clearPredictCanvas : null,
  redrawPredictCanvas: typeof redrawPredictCanvas !== 'undefined' ? redrawPredictCanvas : null,
  predictSketchState: typeof predictSketchState !== 'undefined' ? predictSketchState : null
});

UI.initUI({
  readParams: typeof readParams !== 'undefined' ? readParams : null,
  renderOrbital: typeof renderOrbital !== 'undefined' ? renderOrbital : null,
  clearRadialObjects: typeof clearRadialObjects !== 'undefined' ? clearRadialObjects : null,
  renderRadialView: typeof renderRadialView !== 'undefined' ? renderRadialView : null,
  readOptions: typeof readOptions !== 'undefined' ? readOptions : null,
  renderer: typeof renderer !== 'undefined' ? renderer : null,
  scene: typeof scene !== 'undefined' ? scene : null,
  camera: typeof camera !== 'undefined' ? camera : null,
  angularRenderer: typeof angularRenderer !== 'undefined' ? angularRenderer : null,
  angularScene: typeof angularScene !== 'undefined' ? angularScene : null,
  projectionRenderer: typeof projectionRenderer !== 'undefined' ? projectionRenderer : null,
  projectionScene: typeof projectionScene !== 'undefined' ? projectionScene : null,
  radialRenderer: typeof radialRenderer !== 'undefined' ? radialRenderer : null,
  radialScene: typeof radialScene !== 'undefined' ? radialScene : null,
  reopenViewWindows: typeof reopenViewWindows !== 'undefined' ? reopenViewWindows : null,
  resetCamera: typeof resetCamera !== 'undefined' ? resetCamera : null,
  resetAngularCamera: typeof resetAngularCamera !== 'undefined' ? resetAngularCamera : null,
  setAxesVisibility: typeof setAxesVisibility !== 'undefined' ? setAxesVisibility : null,
  boxObject: typeof boxObject !== 'undefined' ? boxObject : null,
  radialAxisObject: typeof radialAxisObject !== 'undefined' ? radialAxisObject : null,
  cameraDistanceForRadius: typeof cameraDistanceForRadius !== 'undefined' ? cameraDistanceForRadius : null,
  updateCameraFrustum: typeof updateCameraFrustum !== 'undefined' ? updateCameraFrustum : null,
  updateAngularFrustum: typeof updateAngularFrustum !== 'undefined' ? updateAngularFrustum : null,
  angularControls: typeof angularControls !== 'undefined' ? angularControls : null,
  angularCamera: typeof angularCamera !== 'undefined' ? angularCamera : null,
  showActivityPane: Activities.showActivityPane,
  openSketchWindow: typeof openSketchWindow !== 'undefined' ? openSketchWindow : null,
  startPrediction: Activities.startPrediction,
  verifyPrediction: Activities.verifyPrediction,
  scoreCurrentPrediction: Activities.scoreCurrentPrediction,
  showScoreRubric: typeof showScoreRubric !== 'undefined' ? showScoreRubric : null,
  resetScorePrompt: typeof resetScorePrompt !== 'undefined' ? resetScorePrompt : null,
  runDiagnosis: typeof runDiagnosis !== 'undefined' ? runDiagnosis : null,
  renderOrbitalComparison: Activities.renderOrbitalComparison,
  renderCompareSlot: Activities.renderCompareSlot,
  loadCompareTargetToMain: Activities.loadCompareTargetToMain,
  newChallenge: Activities.newChallenge,
  revealChallenge: Activities.revealChallenge,
  restartExplanation: typeof restartExplanation !== 'undefined' ? restartExplanation : null,
  moveExplanationStep: typeof moveExplanationStep !== 'undefined' ? moveExplanationStep : null,
  toggleExplanationPlayback: typeof toggleExplanationPlayback !== 'undefined' ? toggleExplanationPlayback : null,
  setTabletMode: typeof setTabletMode !== 'undefined' ? setTabletMode : null,
  playCinematicAnimation: typeof playCinematicAnimation !== 'undefined' ? playCinematicAnimation : null,
  toggleCinematicPlayback: typeof toggleCinematicPlayback !== 'undefined' ? toggleCinematicPlayback : null,
  jumpToCinematicStep: typeof jumpToCinematicStep !== 'undefined' ? jumpToCinematicStep : null,
  exportCinematicVideo: typeof exportCinematicVideo !== 'undefined' ? exportCinematicVideo : null,
  stopCinematicAnimation: typeof stopCinematicAnimation !== 'undefined' ? stopCinematicAnimation : null,
  openFormulaWindow: typeof openFormulaWindow !== 'undefined' ? openFormulaWindow : null,
  clearAnnotations: typeof clearAnnotations !== 'undefined' ? clearAnnotations : null,
  addAnnotation: typeof addAnnotation !== 'undefined' ? addAnnotation : null,
  beginAnnotationDrag: typeof beginAnnotationDrag !== 'undefined' ? beginAnnotationDrag : null,
  continueAnnotationDrag: typeof continueAnnotationDrag !== 'undefined' ? continueAnnotationDrag : null,
  endAnnotationDrag: typeof endAnnotationDrag !== 'undefined' ? endAnnotationDrag : null,
  recoverAllViewerControls: typeof recoverAllViewerControls !== 'undefined' ? recoverAllViewerControls : null,
  refreshAllViewerControls: typeof refreshAllViewerControls !== 'undefined' ? refreshAllViewerControls : null,
  activityState: typeof activityState !== 'undefined' ? activityState : null,
  toggleAnnotationMode: typeof toggleAnnotationMode !== 'undefined' ? toggleAnnotationMode : null,
  resizeAfterLayoutChange: typeof resizeAfterLayoutChange !== 'undefined' ? resizeAfterLayoutChange : null,
  openBoxWindow: typeof openBoxWindow !== 'undefined' ? openBoxWindow : null,
  getCurrentAngularRadius: () => typeof currentAngularRadius !== 'undefined' ? currentAngularRadius : 4,
  getCurrentViewRadius: () => typeof currentViewRadius !== 'undefined' ? currentViewRadius : 10,
  getCurrentProjectionRadius: () => typeof currentProjectionRadius !== 'undefined' ? currentProjectionRadius : 10,
  getCurrentProjectionTarget: () => currentProjectionTarget.clone(),
  getCurrentRadialRadius: () => typeof currentRadialRadius !== 'undefined' ? currentRadialRadius : 5.3,
  updateProjectionFrustum: typeof updateProjectionFrustum !== 'undefined' ? updateProjectionFrustum : null,
  updateRadialFrustum: typeof updateRadialFrustum !== 'undefined' ? updateRadialFrustum : null,
  projectionCamera: typeof projectionCamera !== 'undefined' ? projectionCamera : null,
  radialCamera: typeof radialCamera !== 'undefined' ? radialCamera : null,
  projectionControls: typeof projectionControls !== 'undefined' ? projectionControls : null,
  radialControls: typeof radialControls !== 'undefined' ? radialControls : null,
  pauseGenerationAnimation: typeof pauseGenerationAnimation !== 'undefined' ? pauseGenerationAnimation : null,
  drawGenerationAnimation: typeof drawGenerationAnimation !== 'undefined' ? drawGenerationAnimation : null,
  controls: typeof controls !== 'undefined' ? controls : null,
  applyDesktopDefaultsToControls: typeof applyDesktopDefaultsToControls !== 'undefined' ? applyDesktopDefaultsToControls : null
});

