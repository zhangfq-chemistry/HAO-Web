let presetsForN;
let el;
let compareViews;
let THREE;
let makeFreeRotationControls;
let bindViewerControlRecovery;
let cameraDistanceForRadius;
let disposeSceneObject;
let parseTargetValue;
let desktopBoxAndIso;
let makeMarchingCubes;
let makeAxisGroup;
let orbitalLabel;
let nodeSummary;
let readParams;
let applyDesktopDefaultsToControls;
let renderOrbital;
let UI;
let resizeAfterLayoutChange;
let activityState;
let showExplanationStep;
let pauseExplanation;
let setExplanationFocus;
let openSketchWindow;
let sketchState;
let redrawSketchCanvas;
let clearPredictCanvas;
let redrawPredictCanvas;
let predictSketchState;

export function initActivities(api) {
  presetsForN = api.presetsForN;
  el = api.el;
  compareViews = api.compareViews;
  THREE = api.THREE;
  makeFreeRotationControls = api.makeFreeRotationControls;
  bindViewerControlRecovery = api.bindViewerControlRecovery;
  cameraDistanceForRadius = api.cameraDistanceForRadius;
  disposeSceneObject = api.disposeSceneObject;
  parseTargetValue = api.parseTargetValue;
  desktopBoxAndIso = api.desktopBoxAndIso;
  makeMarchingCubes = api.makeMarchingCubes;
  makeAxisGroup = api.makeAxisGroup;
  orbitalLabel = api.orbitalLabel;
  nodeSummary = api.nodeSummary;
  readParams = api.readParams;
  applyDesktopDefaultsToControls = api.applyDesktopDefaultsToControls;
  renderOrbital = api.renderOrbital;
  UI = api.UI;
  resizeAfterLayoutChange = api.resizeAfterLayoutChange;
  activityState = api.activityState;
  showExplanationStep = api.showExplanationStep;
  pauseExplanation = api.pauseExplanation;
  setExplanationFocus = api.setExplanationFocus;
  openSketchWindow = api.openSketchWindow;
  sketchState = api.sketchState;
  redrawSketchCanvas = api.redrawSketchCanvas;
  clearPredictCanvas = api.clearPredictCanvas;
  redrawPredictCanvas = api.redrawPredictCanvas;
  predictSketchState = api.predictSketchState;
  activityTargets = allOrbitalPresets(6);
}

function allOrbitalPresets(maxN = 6) {
  const presets = [];
  for (let n = 1; n <= maxN; n += 1) presets.push(...presetsForN(n));
  return presets;
}

let activityTargets = [];
function fillSelectOptions(select, options, selectedValue = null) {
  if (!select) return;
  select.replaceChildren();
  for (const item of options) {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    select.append(option);
  }
  if (selectedValue && options.some((item) => item.value === selectedValue)) select.value = selectedValue;
}

function initializeActivityOptions() {
  fillSelectOptions(el.predictTarget, activityTargets, "2,1,1");
  fillSelectOptions(el.challengeGuess, activityTargets, "2,1,1");
  fillSelectOptions(el.compareA, activityTargets, "2,1,1");
  fillSelectOptions(el.compareB, activityTargets, "3,1,1");
}

function compareViewFor(container) {
  if (!container) return null;
  let view = compareViews.find((item) => item.container === container);
  if (view) {
    if (!container.contains(view.renderer.domElement)) {
      container.appendChild(view.renderer.domElement);
    }
    return view;
  }
  const sceneObject = new THREE.Scene();
  sceneObject.background = new THREE.Color(el.backgroundColor?.value || "#000000");
  const cameraObject = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 2000);
  const rendererObject = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  rendererObject.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  container.appendChild(rendererObject.domElement);
  const controlsObject = makeFreeRotationControls(cameraObject, rendererObject.domElement);
  bindViewerControlRecovery(container, controlsObject);
  sceneObject.add(new THREE.AmbientLight(0xffffff, 0.5));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
  keyLight.position.set(0, 0, 80);
  sceneObject.add(keyLight);
  view = { container, scene: sceneObject, camera: cameraObject, renderer: rendererObject, controls: controlsObject, objects: [], radius: 5, target: new THREE.Vector3(), resizeObserver: null, isLeader: false };
  controlsObject.addEventListener("start", () => {
    for (const v of compareViews) v.isLeader = false;
    view.isLeader = true;
  });
  if ("ResizeObserver" in window) {
    view.resizeObserver = new ResizeObserver(() => updateCompareCamera(view, view.radius));
    view.resizeObserver.observe(container);
  }
  compareViews.push(view);
  if (compareViews.length === 1) view.isLeader = true;
  return view;
}

function clearCompareView(view) {
  if (!view) return;
  for (const object of view.objects) disposeSceneObject(view.scene, object);
  view.objects = [];
}

function updateCompareCamera(view, radius) {
  if (!view) return;
  const rect = view.container.getBoundingClientRect();
  if (rect.width < 2 || rect.height < 2) return;
  view.renderer.setSize(rect.width, rect.height, false);
  const aspect = rect.width / rect.height;
  const frustum = Math.max(3, radius);
  if (aspect >= 1) {
    view.camera.left = -frustum * aspect;
    view.camera.right = frustum * aspect;
    view.camera.top = frustum;
    view.camera.bottom = -frustum;
  } else {
    view.camera.left = -frustum;
    view.camera.right = frustum;
    view.camera.top = frustum / aspect;
    view.camera.bottom = -frustum / aspect;
  }
  view.camera.near = 0.1;
  view.camera.far = Math.max(1000, frustum * 8);
  const target = view.target ?? new THREE.Vector3();
  view.camera.position.set(target.x, target.y, target.z + cameraDistanceForRadius(frustum, 40));
  view.camera.lookAt(target);
  view.camera.updateProjectionMatrix();
  view.controls.target.copy(target);
  view.controls.handleResize?.();
  view.controls.update();
}

function frameCompareObjects(view, objects, fallbackRadius) {
  const bounds = new THREE.Box3();
  let hasBounds = false;
  for (const object of objects) {
    object.updateMatrixWorld(true);
    const objectBounds = new THREE.Box3().setFromObject(object);
    if (
      Number.isFinite(objectBounds.min.x) &&
      Number.isFinite(objectBounds.min.y) &&
      Number.isFinite(objectBounds.min.z) &&
      Number.isFinite(objectBounds.max.x) &&
      Number.isFinite(objectBounds.max.y) &&
      Number.isFinite(objectBounds.max.z)
    ) {
      bounds.union(objectBounds);
      hasBounds = true;
    }
  }
  if (hasBounds) {
    const sphere = bounds.getBoundingSphere(new THREE.Sphere());
    view.target.copy(sphere.center);
    view.radius = Math.max(2.5, fallbackRadius, sphere.radius * 1.2);
  } else {
    view.target.set(0, 0, 0);
    view.radius = Math.max(2.5, fallbackRadius);
  }
  updateCompareCamera(view, view.radius);
}

async function renderCompareView(container, value, titleEl, notesEl) {
  const view = compareViewFor(container);
  if (!view) return null;
  const params = { ...parseTargetValue(value), z: Number(el.z?.value) || 1 };
  const matched = desktopBoxAndIso(params);
  const displayRadius = Math.max(4, Math.min(10, matched.radius * 0.08));
  const density = Math.min(78, Math.max(42, Math.round(matched.gridSize * 0.72)));
  const options = {
    iso: matched.iso,
    density,
    radius: matched.radius,
    opacity: 0.96,
    smooth: false,
    wireframe: true,
    cutaway: "none",
    showPositive: true,
    showNegative: true,
    positiveColor: el.positiveColor.value,
    negativeColor: el.negativeColor.value,
    backgroundColor: el.backgroundColor?.value || "#000000",
  };
  view.scene.background = new THREE.Color(options.backgroundColor);
  clearCompareView(view);
  const positive = await makeMarchingCubes(0, params, options, 1, options.positiveColor);
  const negative = await makeMarchingCubes(1, params, options, -1, options.negativeColor);
  const scale = displayRadius / Math.max(1, matched.radius);
  positive.scale.multiplyScalar(scale);
  negative.scale.multiplyScalar(scale);
  const axis = makeAxisGroup(Math.max(1.6, displayRadius * 0.5));
  view.scene.add(positive, negative, axis);
  view.objects.push(positive, negative, axis);
  frameCompareObjects(view, [positive, negative, axis], displayRadius * 1.45);
  const label = orbitalLabel(params.n, params.l, params.m);
  if (titleEl) titleEl.textContent = label;
  if (notesEl) notesEl.textContent = `${nodeSummary(params.n, params.l)}；n=${params.n}, l=${params.l}, |m|=${Math.abs(params.m)}`;
  return { params, label, nodes: nodeSummary(params.n, params.l) };
}

async function renderOrbitalComparison() {
  const a = await renderCompareView(el.compareAViewer, el.compareA?.value, el.compareATitle, el.compareANotes);
  const b = await renderCompareView(el.compareBViewer, el.compareB?.value, el.compareBTitle, el.compareBNotes);
  if (a && b && el.compareSummary) {
    const sameAngular = a.params.l === b.params.l && Math.abs(a.params.m) === Math.abs(b.params.m);
    el.compareSummary.textContent = sameAngular
      ? `${a.label} 与 ${b.label} 角向类型相同，重点比较径向节点随 n 增加的变化。`
      : `${a.label} 与 ${b.label} 角向类型不同，重点比较节点面方向、相位分布和对称性。`;
  }
}

async function renderCompareSlot(slot) {
  if (slot === "a") {
    return renderCompareView(el.compareAViewer, el.compareA?.value, el.compareATitle, el.compareANotes);
  }
  if (slot === "b") {
    return renderCompareView(el.compareBViewer, el.compareB?.value, el.compareBTitle, el.compareBNotes);
  }
  return null;
}

function applyTarget(value) {
  const target = parseTargetValue(value);
  el.n.value = target.n;
  el.l.value = target.l;
  el.m.value = Math.abs(target.m);
  el.cosType.checked = target.m >= 0;
  el.sinType.checked = target.m < 0;
  readParams();
  applyDesktopDefaultsToControls();
  renderOrbital();
}

function loadCompareTargetToMain(value, slot) {
  const target = parseTargetValue(value);
  applyTarget(value);
  if (el.mainWindow) {
    el.mainWindow.classList.remove("closed", "minimized", "maximized");
    UI.updateWindowControlLabels(el.mainWindow);
  }
  if (el.positiveLobe) el.positiveLobe.checked = true;
  if (el.negativeLobe) el.negativeLobe.checked = true;
  if (el.wireframe && el.smooth && !el.wireframe.checked && !el.smooth.checked) {
    el.wireframe.checked = true;
  }
  readParams();
  renderOrbital();
  const compareInfo = renderCompareSlot(slot);
  const loadedLabel = compareInfo?.label || orbitalLabel(target.n, target.l, target.m);
  if (el.compareSummary) {
    el.compareSummary.textContent = `已载入主视图：${loadedLabel}`;
  }
  if (slot === "a") {
    el.compareAViewer?.closest(".compare-view-card")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  } else if (slot === "b") {
    el.compareBViewer?.closest(".compare-view-card")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
  resizeAfterLayoutChange();
}

function showActivityPaneLegacy(mode) {
  if (!el.activityWindow) return;
  el.activityWindow.classList.remove("closed", "minimized");
  el.activityWindow.style.zIndex = "125";
  el.predictPane?.classList.toggle("active", mode === "predict");
  el.challengePane?.classList.toggle("active", mode === "challenge");
  if (el.activityTitle) el.activityTitle.textContent = mode === "predict" ? "预测-验证模式" : "轨道配对挑战";
  UI.updateWindowControlLabels(el.activityWindow);
  resizeAfterLayoutChange();
}

function showActivityPane(mode) {
  if (!el.activityWindow) return;
  const activeMode = mode || "predict";
  el.activityWindow.classList.remove("closed", "minimized");
  el.activityWindow.style.zIndex = "125";
  for (const pane of el.activityPanes ?? []) {
    const paneMode = pane.dataset.activityPane || pane.id.replace(/Pane$/, "");
    pane.classList.toggle("active", paneMode === activeMode);
  }
  for (const button of el.activityModeButtons ?? []) {
    button.classList.toggle("active", button.dataset.activityMode === activeMode);
  }
  
  const clientPanel = document.querySelector(".client-panel");
  const viewGrid = document.querySelector(".view-grid");
  
  if (activeMode === "challenge" || activeMode === "predict") {
    if (clientPanel) {
      clientPanel.style.opacity = "0.5";
      clientPanel.style.filter = "blur(8px)";
      clientPanel.style.pointerEvents = "none";
    }
    if (viewGrid) {
      viewGrid.style.opacity = "0.5";
      viewGrid.style.filter = "blur(12px)";
      viewGrid.style.pointerEvents = "none";
    }
  } else {
    if (clientPanel) {
      clientPanel.style.opacity = "1";
      clientPanel.style.filter = "none";
      clientPanel.style.pointerEvents = "auto";
    }
    if (viewGrid) {
      viewGrid.style.opacity = "1";
      viewGrid.style.filter = "none";
      viewGrid.style.pointerEvents = "auto";
    }
  }
  const titles = {
    predict: "预测-验证模式",
    score: "预测评分",
    diagnosis: "错误诊断",
    nodes: "节点发现",
    compare: "轨道对比",
    challenge: "轨道配对挑战",
    explain: "原理演示",
    tablet: "平板课堂",
  };
  if (el.activityTitle) el.activityTitle.textContent = titles[activeMode] || "课堂互动";
  UI.updateWindowControlLabels(el.activityWindow);
  resizeAfterLayoutChange();
  if (activeMode === "compare") {
    requestAnimationFrame(() => {
      renderOrbitalComparison();
      resizeAfterLayoutChange();
    });
  }
  if (activeMode === "explain") {
    requestAnimationFrame(() => {
      showExplanationStep(activityState.explanationStep, { render: false });
      resizeAfterLayoutChange();
    });
  } else {
    pauseExplanation();
    setExplanationFocus(null);
  }
}

function targetForCurrentActivity() {
  return activityTargets.find((item) => item.value === el.predictTarget?.value)
    || activityState.challengeTarget
    || activityTargets[0];
}

function scoreCurrentPrediction() {
  const target = targetForCurrentActivity();
  const params = parseTargetValue(target.value);
  const radialNodes = params.n - params.l - 1;
  const angularNodes = params.l;
  const score = Math.max(60, 100 - radialNodes * 4 - angularNodes * 3);
  if (el.scorePrompt) {
    el.scorePrompt.textContent = `${target.label} 参考评分：${score} 分。检查点：径向节点 ${radialNodes} 个，角向节点 ${angularNodes} 个，相位正负分区清楚，方向与坐标轴一致。`;
  }
  applyTarget(target.value);
}

function startPrediction() {
  const target = activityTargets.find((item) => item.value === el.predictTarget.value) ?? activityTargets[0];
  if (clearPredictCanvas) clearPredictCanvas();
  if (predictSketchState) {
    predictSketchState.strokes = [];
    predictSketchState.currentStroke = null;
  }
  if (redrawPredictCanvas) redrawPredictCanvas();
  if (el.predictPrompt) {
    el.predictPrompt.textContent = `请先在画板中预测 ${target.label} 的形状、相位和节面，再点击“显示验证”。`;
  }
}

function verifyPrediction() {
  const target = activityTargets.find((item) => item.value === el.predictTarget.value) ?? activityTargets[0];
  applyTarget(target.value);
  const viewGrid = document.querySelector(".view-grid");
  if (viewGrid) {
    viewGrid.style.opacity = "1";
    viewGrid.style.filter = "none";
    viewGrid.style.pointerEvents = "auto";
  }
  if (el.predictPrompt) {
    el.predictPrompt.textContent = `已显示 ${target.label}。请对照画板预测与四个窗口中的真实结果。`;
  }
}

function newChallenge() {
  const index = Math.floor(Math.random() * activityTargets.length);
  activityState.challengeTarget = activityTargets[index];
  applyTarget(activityState.challengeTarget.value);
  setTimeout(() => {
    if (el.viewerTitle) el.viewerTitle.textContent = "原子轨道  ?";
  }, 120);
  if (el.challengePrompt) {
    el.challengePrompt.textContent = "观察当前四个窗口中的图像，选择你认为对应的轨道名称。";
  }
}

function revealChallenge() {
  const answer = activityState.challengeTarget || activityTargets[0];
  const guess = activityTargets.find((item) => item.value === el.challengeGuess.value);
  const correct = guess?.value === answer.value;
  activityState.challengeTotal += 1;
  if (correct) activityState.challengeCorrect += 1;
  const scoreText = `（累计 ${activityState.challengeCorrect}/${activityState.challengeTotal}）`;
  if (el.viewerTitle) el.viewerTitle.textContent = `原子轨道  ${answer.label}`;
  if (el.challengePrompt) {
    el.challengePrompt.textContent = correct
      ? `回答正确：这是 ${answer.label}。`
      : `还不对。你的答案是 ${guess?.label ?? ""}，正确答案是 ${answer.label}。`;
  }
  UI.setStatus(`轨道配对 ${scoreText}`);
}



export {
  initializeActivityOptions,
  compareViewFor,
  clearCompareView,
  updateCompareCamera,
  frameCompareObjects,
  renderCompareView,
  renderOrbitalComparison,
  renderCompareSlot,
  applyTarget,
  loadCompareTargetToMain,
  showActivityPaneLegacy,
  showActivityPane,
  targetForCurrentActivity,
  scoreCurrentPrediction,
  startPrediction,
  verifyPrediction,
  newChallenge,
  revealChallenge
};

export { activityTargets };
