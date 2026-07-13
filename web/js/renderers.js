import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { el } from "./dom.js";

function makeLabelSprite(text, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  const fontSize = text.length > 2 ? 34 : text.length > 1 ? 44 : 58;
  ctx.font = `700 ${fontSize}px Segoe UI, Arial, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 64, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.2,
    depthTest: true,
    depthWrite: false,
  });
  material.toneMapped = false;
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.68, 0.68, 0.68);
  sprite.renderOrder = 20;
  return sprite;
}

function makeCylinderBetween(start, end, radius, color) {
  const direction = end.clone().sub(start);
  const length = direction.length();
  const material = new THREE.MeshBasicMaterial({ color });
  material.toneMapped = false;
  const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, 48, 1, false), material);
  cylinder.position.copy(start).add(end).multiplyScalar(0.5);
  cylinder.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return cylinder;
}

function makeAxisCone(direction, center, height, radius, color) {
  const material = new THREE.MeshBasicMaterial({ color });
  material.toneMapped = false;
  const cone = new THREE.Mesh(new THREE.ConeGeometry(radius, height, 96, 1, false), material);
  cone.position.copy(center);
  cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
  return cone;
}

function makeAxisGroup(length, labelOffset = 0.2, extent = 0.9) {
  const group = new THREE.Group();
  group.userData.isAxis = true;
  group.name = "axis_group_auto";
  const shaftLength = length * extent;
  const shaftRadius = length * 0.02;
  const coneHeight = shaftLength * 0.1;
  const coneRadius = shaftRadius * 3;
  const axes = [
    { dir: new THREE.Vector3(1, 0, 0), color: 0xff0000, label: "x", labelColor: "#ff0000" },
    { dir: new THREE.Vector3(0, 1, 0), color: 0x00b928, label: "y", labelColor: "#00e63a" },
    { dir: new THREE.Vector3(0, 0, 1), color: 0xf0dd00, label: "z", labelColor: "#fff000" },
  ];
  for (const axis of axes) {
    const start = axis.dir.clone().multiplyScalar(-shaftLength);
    const end = axis.dir.clone().multiplyScalar(shaftLength);
    group.add(makeCylinderBetween(start, end, shaftRadius, axis.color));
    group.add(makeAxisCone(axis.dir, axis.dir.clone().multiplyScalar(shaftLength * 1.01), coneHeight, coneRadius, axis.color));
    const label = makeLabelSprite(axis.label, axis.labelColor);
    label.scale.setScalar(Math.max(0.98, Math.min(1.18, length * 0.23)));
    if (axis.label === "x") label.position.set(shaftLength * 1.2, -labelOffset, 0);
    if (axis.label === "y") label.position.set(-labelOffset, shaftLength * 1.2, 0);
    if (axis.label === "z") label.position.set(-labelOffset, -labelOffset, shaftLength * 1.2);
    group.add(label);
  }
  return group;
}

function makeRadialAxisGroup(length, height, zOffset, modeLabel) {
  const group = new THREE.Group();
  const shaftRadius = Math.max(0.018, length * 0.006);
  const coneHeight = length * 0.08;
  const coneRadius = shaftRadius * 3.2;
  const origin = new THREE.Vector3(0, 0, zOffset);
  const rEnd = new THREE.Vector3(length, 0, zOffset);
  const valueEnd = new THREE.Vector3(0, 0, zOffset + height);

  group.add(makeCylinderBetween(origin, rEnd, shaftRadius, 0xf0dd00));
  group.add(makeAxisCone(new THREE.Vector3(1, 0, 0), rEnd, coneHeight, coneRadius, 0xf0dd00));
  group.add(makeCylinderBetween(origin, valueEnd, shaftRadius, 0x0057ff));
  group.add(makeAxisCone(new THREE.Vector3(0, 0, 1), valueEnd, coneHeight, coneRadius, 0x0057ff));

  const rLabel = makeLabelSprite("r", "#fff000");
  rLabel.scale.setScalar(0.48);
  rLabel.position.set(length + coneHeight * 0.85, -length * 0.045, zOffset);
  group.add(rLabel);

  const valueLabel = makeLabelSprite(modeLabel === "R2" ? "R*R" : modeLabel, "#0057ff");
  valueLabel.scale.setScalar(0.58);
  valueLabel.position.set(-length * 0.08, 0, zOffset + height + coneHeight * 0.9);
  group.add(valueLabel);
  return group;
}




const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111827);

function makeFreeRotationControls(cameraObject, domElement) {
  const freeControls = new TrackballControls(cameraObject, domElement);
  freeControls.rotateSpeed = 3.2;
  freeControls.zoomSpeed = 1.15;
  freeControls.panSpeed = 0.65;
  freeControls.staticMoving = false;
  freeControls.dynamicDampingFactor = 0.12;
  freeControls.noRotate = false;
  freeControls.noZoom = false;
  freeControls.noPan = false;
  return freeControls;
}

function isSecondaryMouseEvent(event) {
  return event.pointerType === "mouse" && (event.button === 2 || (event.buttons & 2) === 2);
}

function refreshViewerControls(controlsObject) {
  if (!controlsObject) return;
  controlsObject.enabled = true;
  controlsObject.noRotate = false;
  controlsObject.noZoom = false;
  controlsObject.noPan = false;
  controlsObject.handleResize?.();
  controlsObject.update();
}

function recoverViewerControls(controlsObject) {
  if (!controlsObject) return;
  const object = controlsObject.object;
  const savedPosition = object?.position?.clone();
  const savedQuaternion = object?.quaternion?.clone();
  const savedUp = object?.up?.clone();
  const savedZoom = object?.zoom;
  const savedTarget = controlsObject.target?.clone();
  const wasStaticMoving = controlsObject.staticMoving;

  // TrackballControls keeps the active mouse state in a private closure. Calling
  // reset() is the only public way to clear a missed pointerup/pointercancel
  // state, so preserve the current camera view and restore it immediately.
  if (typeof controlsObject.reset === "function" && savedPosition && savedTarget) {
    controlsObject.staticMoving = true;
    controlsObject.reset();
    object.position.copy(savedPosition);
    if (savedQuaternion) object.quaternion.copy(savedQuaternion);
    if (savedUp) object.up.copy(savedUp);
    if (typeof savedZoom === "number") object.zoom = savedZoom;
    controlsObject.target.copy(savedTarget);
    object.updateProjectionMatrix?.();
    controlsObject.staticMoving = wasStaticMoving;
  }

  refreshViewerControls(controlsObject);
}

function bindViewerControlRecovery(viewer, controlsObject) {
  const canvas = viewer?.querySelector("canvas");
  if (!canvas || !controlsObject) return;
  const currentControls = () => (typeof controlsObject === "function" ? controlsObject() : controlsObject);
  canvas.addEventListener("pointerdown", (event) => {
    if (isSecondaryMouseEvent(event)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      recoverViewerControls(currentControls());
      return;
    }
    refreshViewerControls(currentControls());
  }, { capture: true });
  canvas.addEventListener("pointermove", (event) => {
    if (!isSecondaryMouseEvent(event)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, { capture: true });
  canvas.addEventListener("pointerup", (event) => {
    if (isSecondaryMouseEvent(event)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    refreshViewerControls(currentControls());
  }, { capture: true });
  canvas.addEventListener("pointercancel", () => recoverViewerControls(currentControls()), { capture: true });
  canvas.addEventListener("lostpointercapture", () => recoverViewerControls(currentControls()));
  canvas.addEventListener("mouseenter", () => refreshViewerControls(currentControls()));
  canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    recoverViewerControls(currentControls());
  }, { capture: true });
}

const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.localClippingEnabled = true;
el.viewer.appendChild(renderer.domElement);

let controls = makeFreeRotationControls(camera, renderer.domElement);

const angularScene = new THREE.Scene();
const angularCamera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 1000);
const angularRenderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
angularRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
angularRenderer.localClippingEnabled = true;
el.angularViewer.appendChild(angularRenderer.domElement);
let angularControls = makeFreeRotationControls(angularCamera, angularRenderer.domElement);

const projectionScene = new THREE.Scene();
const projectionCamera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 1000);
projectionCamera.up.set(0, 0, 1);
const projectionRenderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
projectionRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
el.projectionViewer.appendChild(projectionRenderer.domElement);
const projectionControls = makeFreeRotationControls(projectionCamera, projectionRenderer.domElement);

const radialScene = new THREE.Scene();
const radialCamera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 1000);
const radialRenderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
radialRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
el.radialViewer.appendChild(radialRenderer.domElement);
const radialControls = makeFreeRotationControls(radialCamera, radialRenderer.domElement);

bindViewerControlRecovery(el.viewer, () => controls);
bindViewerControlRecovery(el.angularViewer, () => angularControls);
bindViewerControlRecovery(el.projectionViewer, projectionControls);
bindViewerControlRecovery(el.radialViewer, radialControls);

function recoverAllViewerControls() {
  recoverViewerControls(controls);
  recoverViewerControls(angularControls);
  recoverViewerControls(projectionControls);
  recoverViewerControls(radialControls);
}

function refreshAllViewerControls() {
  refreshViewerControls(controls);
  refreshViewerControls(angularControls);
  refreshViewerControls(projectionControls);
  refreshViewerControls(radialControls);
}

function rebuildMainControls() {
  const savedTarget = controls?.target?.clone() ?? new THREE.Vector3();
  const settings = {
    rotateSpeed: controls?.rotateSpeed ?? 3.2,
    zoomSpeed: controls?.zoomSpeed ?? 1.15,
    panSpeed: controls?.panSpeed ?? 0.65,
    staticMoving: controls?.staticMoving ?? false,
    dynamicDampingFactor: controls?.dynamicDampingFactor ?? 0.12,
    noRotate: controls?.noRotate ?? false,
    noZoom: controls?.noZoom ?? false,
    noPan: controls?.noPan ?? false,
  };
  controls?.dispose?.();
  controls = makeFreeRotationControls(camera, renderer.domElement);
  Object.assign(controls, settings);
  controls.target.copy(savedTarget);
  controls.handleResize?.();
  controls.update();
}

function rebuildAngularControls() {
  const savedTarget = angularControls?.target?.clone() ?? new THREE.Vector3();
  const settings = {
    rotateSpeed: angularControls?.rotateSpeed ?? 3.2,
    zoomSpeed: angularControls?.zoomSpeed ?? 1.15,
    panSpeed: angularControls?.panSpeed ?? 0.65,
    staticMoving: angularControls?.staticMoving ?? false,
    dynamicDampingFactor: angularControls?.dynamicDampingFactor ?? 0.12,
    noRotate: false,
    noZoom: false,
    noPan: false,
  };
  angularControls?.dispose?.();
  angularControls = makeFreeRotationControls(angularCamera, angularRenderer.domElement);
  Object.assign(angularControls, settings);
  angularControls.target.copy(savedTarget);
  angularControls.handleResize?.();
  angularControls.update();
}

const light = new THREE.DirectionalLight(0xffffff, 1.45);
light.position.set(0, 0, 1);
camera.add(light);
camera.add(new THREE.DirectionalLight(0xffffff, 0.22));
scene.add(camera);
scene.add(new THREE.AmbientLight(0xffffff, 0.55));
scene.add(new THREE.HemisphereLight(0xffffff, 0x161616, 0.45));
const angularLight = new THREE.DirectionalLight(0xffffff, 1.45);
angularLight.position.set(0, 0, 1);
angularCamera.add(angularLight);
angularCamera.add(new THREE.DirectionalLight(0xffffff, 0.22));
angularScene.add(angularCamera);
angularScene.add(new THREE.AmbientLight(0xffffff, 0.55));
angularScene.add(new THREE.HemisphereLight(0xffffff, 0x161616, 0.45));
const projectionLight = new THREE.DirectionalLight(0xffffff, 1.7);
projectionLight.position.set(0, 0, 80);
projectionScene.add(projectionLight);
projectionScene.add(new THREE.AmbientLight(0xffffff, 0.65));
const radialLight = new THREE.DirectionalLight(0xffffff, 1.8);
radialLight.position.set(0, -40, 60);
radialScene.add(radialLight);
radialScene.add(new THREE.AmbientLight(0xffffff, 0.62));

for (const rendererObject of [renderer, angularRenderer, projectionRenderer, radialRenderer]) {
  rendererObject.outputColorSpace = THREE.SRGBColorSpace;
  rendererObject.toneMapping = THREE.ACESFilmicToneMapping;
  rendererObject.toneMappingExposure = 1.16;
}

light.intensity = 1.45;
angularLight.intensity = 1.45;
projectionLight.intensity = 1.88;
radialLight.intensity = 1.92;

let axesGroup = null;
let angularAxesGroup = null;

function initAxes() {
  const oldAxes = scene.getObjectByName("mainAxesGroup");
  if (oldAxes) scene.remove(oldAxes);
  const oldAngular = angularScene.getObjectByName("angularAxesGroup");
  if (oldAngular) angularScene.remove(oldAngular);

  axesGroup = makeAxisGroup(4.5, 0.2, 0.9);
  axesGroup.name = "mainAxesGroup";
  angularAxesGroup = makeAxisGroup(4.2, 0.1, 0.9);
  angularAxesGroup.name = "angularAxesGroup";
  
  scene.add(axesGroup);
  angularScene.add(angularAxesGroup);
}


function setAngularAxesGroup(g) { angularAxesGroup = g; }
function getAngularAxesGroup() { return angularAxesGroup; }
function setAxesGroup(g) { axesGroup = g; }

function setAxesVisibility(visible, scale) {
  if (axesGroup) {
    axesGroup.visible = visible;
    if (scale !== undefined) axesGroup.scale.setScalar(scale);
  }
  if (angularAxesGroup) {
    angularAxesGroup.visible = visible;
  }
  
  // Update visibility on all known axes objects without removing them from scene
  scene.traverse(c => {
    if (c.userData && c.userData.isAxis) {
      c.visible = visible;
      if (scale !== undefined && c === axesGroup) c.scale.setScalar(scale);
    }
  });
  
  angularScene.traverse(c => {
    if (c.userData && c.userData.isAxis) {
      c.visible = visible;
    }
  });
}
export { makeLabelSprite, makeCylinderBetween, makeAxisCone, makeAxisGroup, makeRadialAxisGroup, initAxes, setAngularAxesGroup, getAngularAxesGroup, setAxesGroup, setAxesVisibility, scene, camera, renderer, controls, angularScene, angularCamera, angularRenderer, angularControls, projectionScene, projectionCamera, projectionRenderer, projectionControls, radialScene, radialCamera, radialRenderer, radialControls, axesGroup, angularAxesGroup, recoverAllViewerControls, refreshAllViewerControls, rebuildMainControls, rebuildAngularControls, refreshViewerControls, recoverViewerControls, makeFreeRotationControls, bindViewerControlRecovery };
