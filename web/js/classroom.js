const STORAGE_KEY = "hao-classroom-sessions-v1";

const templateDefinitions = {
  links: {
    name: "四图关联",
    question: "四个窗口如何描述同一个波函数？",
    description: "沿“整体形状→距离变化→方向变化→平面读数”追踪同一个波函数。",
    predictionFields: ["claim"],
    claimLabel: "你认为四个窗口之间是什么关系？",
    claimOptions: [
      ["same-wave", "来自同一个 Ψ，只是观察方式不同"],
      ["independent", "分别来自四个互不相关的函数"],
      ["orbital-only", "只有原子轨道窗口表示 Ψ"],
    ],
    correctClaim: "same-wave",
    predictionHint: "先画出你心中的轨道，并标出你认为会在其他视图中再次出现的特征。",
    observation: [
      ["orbital", "先看整体形状", "旋转轨道，找出波瓣、相位分界和空间方向。"],
      ["radial", "再看距离变化", "沿半径读取峰、谷和零点，把它们与轨道的分层对应。"],
      ["angular", "固定半径看方向", "比较角向函数与轨道波瓣的方向和相位分区。"],
      ["projection", "最后落到平面", "在投影中寻找与三维轨道相同的节点线和相位区域。"],
    ],
    evidence: ["orbital", "radial", "angular", "projection"],
    evidenceHint: "从你刚才观察过的视图中，选择最能说明“它们来自同一个 Ψ”的证据。",
    explanationLabel: "把四种读法连成一条因果链",
    explanationPlaceholder: "原子轨道显示……；径向函数说明……；角向函数说明……；投影把……保留在平面上，因此它们……",
    transferLabel: "换一个轨道时，你会按什么顺序读这四幅图？",
    tasks: [
      ["提出一个整体猜想", "先判断四幅图是四个对象，还是同一个波函数的四种读法。"],
      ["沿一条路线探究", "依次观察整体、半径、方向和平面，不在窗口之间来回跳。"],
      ["锁定关键证据", "从已经观察过的现象中，挑出真正支撑猜想的证据。"],
      ["建立四图解释", "把四幅图放进同一条物理因果链，而不是分别描述。"],
      ["迁移读取方法", "把刚形成的读取顺序应用到另一个轨道。"],
    ],
  },
  nodes: {
    name: "寻找节点",
    question: "径向节点和角向节点分别在哪里？",
    description: "先预测节点数量，再用径向曲线零点和三维节面逐步验证。",
    predictionFields: ["claim", "radial", "angular"],
    claimLabel: "两类节点的来源是否相同？",
    claimOptions: [
      ["separate-sources", "不同：径向节点来自 R(r)，角向节点来自 Y(θ,φ)"],
      ["same-source", "相同：都只由 R(r) 决定"],
      ["color-boundary", "节点就是两种颜色的任意交界"],
    ],
    correctClaim: "separate-sources",
    predictionHint: "先用 n-l-1 和 l 作出数量猜想，再画出你认为节点会出现的位置。",
    observation: [
      ["radial", "先找径向零点", "数白色曲线在非原点处穿过零值的位置。"],
      ["orbital", "再找球形节面", "回到三维轨道，寻找对应半径处缺失概率的壳层。"],
      ["angular", "最后找角向节面", "观察穿过原子核的平面或锥面，它们不随半径改变。"],
    ],
    evidence: ["radial", "orbital", "angular"],
    evidenceHint: "分别选择一条能证明径向节点和角向节点来源的证据。",
    explanationLabel: "说明两类节点为何出现在不同位置",
    explanationPlaceholder: "因为 R(r) 在……处为零，所以出现……；因为 Y(θ,φ) 在……方向为零，所以出现……",
    transferLabel: "只看 n 和 l，怎样快速预测任意轨道的两类节点数？",
    tasks: [
      ["预测节点数量", "根据 n、l 判断可能出现的径向节点和角向节点。"],
      ["按来源寻找节点", "先找 R(r) 的零点，再找 Y(θ,φ) 的零值方向。"],
      ["锁定两类证据", "用曲线零点证明径向节点，用节面方向证明角向节点。"],
      ["解释节点来源", "说明为什么球壳节点和穿核节面不是同一件事。"],
      ["迁移节点规律", "用 n-l-1 和 l 预测一个未观察轨道的节点。"],
    ],
  },
  slice: {
    name: "截面与投影",
    question: "三维轨道如何形成二维截面和投影？",
    description: "通过切片、投影和相位颜色建立三维波函数与二维图案的联系。",
    predictionFields: ["claim"],
    claimLabel: "二维截面是怎样得到的？",
    claimOptions: [
      ["slice-sample", "在选定平面上逐点读取 Ψ"],
      ["surface-shadow", "把三维外壳直接投下一个影子"],
      ["density-image", "把电子云照片压扁成二维图"],
    ],
    correctClaim: "slice-sample",
    predictionHint: "在画板中预测穿过原子核的中心截面，只画平面上会看到的相位与节点。",
    observation: [
      ["orbital", "确认切片穿过哪里", "先从三维轨道判断切片平面会穿过哪些波瓣和节点。"],
      ["projection", "读取二维结果", "对照曲面峰谷与底部等高线，辨认相位和零值线。"],
    ],
    evidence: ["orbital", "projection"],
    evidenceHint: "选择能够把三维穿过位置与二维相位图案对应起来的证据。",
    explanationLabel: "区分“切片”与“外壳投影”",
    explanationPlaceholder: "切片不是外壳的影子，而是在……平面上计算……；因此二维图中的……对应三维轨道的……",
    transferLabel: "如果切片平面离开原子核，二维图案会怎样变化？",
    tasks: [
      ["预测二维图案", "画出你认为穿过原子核的截面应该呈现的图案。"],
      ["从三维走向二维", "先确定平面穿过的区域，再读取该平面上的波函数值。"],
      ["锁定对应证据", "把一个三维波瓣或节点与二维区域一一对应。"],
      ["解释降维过程", "说明二维图案为什么会随切片位置改变。"],
      ["迁移切片规律", "预测非中心切片会保留和丢失哪些信息。"],
    ],
  },
  basics: {
    name: "认识轨道",
    question: "轨道的形状、方向和正负相位如何读取？",
    description: "从角向函数和坐标轴出发，建立轨道名称与空间方向的联系。",
    predictionFields: ["claim", "axis"],
    claimLabel: "轨道的两种颜色表示什么？",
    claimOptions: [
      ["phase-sign", "波函数的正、负相位"],
      ["charge-sign", "正电荷和负电荷"],
      ["spin", "α 自旋和 β 自旋"],
    ],
    correctClaim: "phase-sign",
    predictionHint: "根据名称先判断主要方向，再在画板中画出正、负相位分区。",
    observation: [
      ["angular", "先认方向", "用坐标轴和角向波瓣确定轨道沿哪个方向伸展。"],
      ["orbital", "再认相位与对称性", "旋转轨道，观察两种颜色如何被节点分开。"],
    ],
    evidence: ["angular", "orbital"],
    evidenceHint: "选择能够同时支持“空间方向”和“相位含义”的证据。",
    explanationLabel: "用名称、方向和相位解释这个轨道",
    explanationPlaceholder: "名称中的……表示……方向；两种颜色表示……而不是……；节点位于……",
    transferLabel: "遇到一个陌生轨道名称时，你会先读取哪个信息？",
    tasks: [
      ["预测轨道方向", "根据轨道名称预测波瓣沿哪个坐标方向分布。"],
      ["按方向观察", "先用角向函数确定方向，再回到三维轨道检查对称性。"],
      ["锁定方向证据", "选出能证明轨道方向和相位分区的图像。"],
      ["解释相位颜色", "说明颜色、节点和空间方向各自表达什么。"],
      ["迁移识别规则", "总结一套读取陌生轨道名称的顺序。"],
    ],
  },
  compare: {
    name: "轨道对比",
    question: "改变 n、l、m 后，什么改变、什么保持不变？",
    description: "并排旋转两个真实轨道，比较径向节点、角向形状和相位方向。",
    predictionFields: ["claim"],
    claimLabel: "你预计两个轨道的主要差异来自哪里？",
    claimOptions: [
      ["radial", "主要来自径向部分 R(r)"],
      ["angular", "主要来自角向部分 Y(θ,φ)"],
      ["both", "径向与角向部分都改变"],
    ],
    predictionHint: "先画出你认为会改变的特征，并保留你认为不会改变的部分。",
    observation: [
      ["orbital", "先同步比较整体", "用相同视角比较大小、波瓣方向和节点结构。"],
      ["radial", "再核对径向差异", "查看目标轨道的径向曲线，判断新增层次是否来自 n。"],
      ["angular", "最后核对角向差异", "判断波瓣方向或节面变化是否来自 l、m。"],
    ],
    evidence: ["orbital", "radial", "angular"],
    evidenceHint: "只选择能够解释两个轨道“为什么不同”的证据，不必把所有视图都选上。",
    explanationLabel: "把可见差异归因到 n、l、m",
    explanationPlaceholder: "两个轨道的……相同，因为……相同；它们的……不同，因为……发生了变化。",
    transferLabel: "再给出一对适合检验同一规律的轨道，并说明理由。",
    tasks: [
      ["预测差异", "先写出两个轨道在节点、方向和大小上的可能差异。"],
      ["按变量同步比较", "先比较整体，再分别核对径向与角向来源。"],
      ["锁定差异证据", "指出哪一幅图真正解释了差异，而不只是再次展示差异。"],
      ["解释量子数作用", "把每一个可见变化归因到发生改变的量子数。"],
      ["迁移对比方法", "设计另一组只改变一个量子数的对比。"],
    ],
  },
};

const evidenceLabels = {
  orbital: "原子轨道形状",
  projection: "投影或截面",
  radial: "径向曲线零点",
  angular: "角向函数方向",
};

let api;
let el;
let targets = [];
let bound = false;
let renderToken = 0;
let mirrorFrame = 0;
let sketchObserver = null;

const state = {
  screen: "prepare",
  template: "links",
  step: 0,
  targetValue: "2,1,1",
  compareValue: "3,1,1",
  duration: 600,
  remaining: 600,
  timer: null,
  startedAt: null,
  endedAt: null,
  predictionSaved: false,
  linkedView: "orbital",
  prediction: { claim: "same-wave", radial: 0, angular: 1, axis: "x" },
  visitedViews: [],
  evidence: [],
  explanation: "",
  transfer: "",
  feedback: "",
  nameRevealed: false,
  nodesRevealed: false,
  viewLocked: false,
  studentPreview: false,
  completed: false,
  sketch: { mode: "pen", drawing: false, pointerId: null, strokes: [], current: null },
};

export function initClassroom(dependencies) {
  api = dependencies;
  el = dependencies.el;
  targets = dependencies.targets ?? [];
}

function fillSelect(select, options, selectedValue) {
  if (!select) return;
  select.replaceChildren();
  for (const item of options) {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    select.append(option);
  }
  if (options.some((item) => item.value === selectedValue)) select.value = selectedValue;
}

export function initializeClassroomOptions() {
  fillSelect(el.classroomTarget, targets, state.targetValue);
  fillSelect(el.classroomCompareTarget, targets, state.compareValue);
  if (!bound) bindClassroomUI();
  selectTemplate(state.template);
  setScreen("prepare");
  renderHistory();
  updateTimerText();
}

function currentTarget() {
  return targets.find((item) => item.value === state.targetValue) ?? targets[0];
}

function comparisonTarget() {
  return targets.find((item) => item.value === state.compareValue) ?? targets[1] ?? targets[0];
}

function targetParams(target = currentTarget()) {
  return api.parseTargetValue(target?.value ?? "2,1,1");
}

function expectedAxis(params) {
  if (params.l === 0) return "无特定方向";
  if (params.l === 1) {
    if (params.m === 0) return "z";
    return params.m > 0 ? "x" : "y";
  }
  return "复合方向";
}

function currentDefinition() {
  return templateDefinitions[state.template] ?? templateDefinitions.links;
}

function fillClaimOptions(definition) {
  if (!el.classroomPredictionClaim) return;
  const previous = state.prediction.claim;
  el.classroomPredictionClaim.replaceChildren();
  for (const [value, label] of definition.claimOptions ?? []) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    el.classroomPredictionClaim.append(option);
  }
  const values = (definition.claimOptions ?? []).map(([value]) => value);
  const selected = values.includes(previous) ? previous : values[0];
  if (selected) {
    el.classroomPredictionClaim.value = selected;
    state.prediction.claim = selected;
  }
}

function configureTemplateUI() {
  const definition = currentDefinition();
  const visibleFields = new Set(definition.predictionFields ?? []);
  const fieldMap = {
    claim: el.classroomPredictionClaimField,
    radial: el.classroomPredictionRadialField,
    angular: el.classroomPredictionAngularField,
    axis: el.classroomPredictionAxisField,
  };
  for (const [key, field] of Object.entries(fieldMap)) field?.classList.toggle("classroom-field-hidden", !visibleFields.has(key));
  fillClaimOptions(definition);
  if (el.classroomPredictionClaimLabel) el.classroomPredictionClaimLabel.textContent = definition.claimLabel;
  if (el.classroomPredictionHint) el.classroomPredictionHint.textContent = definition.predictionHint;
  if (el.classroomEvidenceHint) el.classroomEvidenceHint.textContent = definition.evidenceHint;
  if (el.classroomExplanationLabel) el.classroomExplanationLabel.textContent = definition.explanationLabel;
  if (el.classroomExplanation) el.classroomExplanation.placeholder = definition.explanationPlaceholder;
  if (el.classroomTransferLabel) el.classroomTransferLabel.textContent = definition.transferLabel;
  if (el.classroomTransfer) el.classroomTransfer.placeholder = definition.transferLabel;
  const allowedEvidence = new Set(definition.evidence ?? []);
  for (const input of el.classroomEvidenceInputs ?? []) {
    const visible = allowedEvidence.has(input.value);
    input.closest("label")?.classList.toggle("classroom-field-hidden", !visible);
    if (!visible) input.checked = false;
  }
  renderObservationRoute();
}

function renderObservationRoute() {
  if (!el.classroomObservationRoute) return;
  el.classroomObservationRoute.replaceChildren();
  for (const [view, title, text] of currentDefinition().observation ?? []) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "classroom-observation-step";
    button.classList.toggle("complete", state.visitedViews.includes(view));
    button.dataset.classroomObserveView = view;
    const index = document.createElement("span");
    index.textContent = String(el.classroomObservationRoute.children.length + 1);
    const copy = document.createElement("span");
    const heading = document.createElement("strong");
    heading.textContent = title;
    const detail = document.createElement("small");
    detail.textContent = text;
    copy.append(heading, detail);
    button.append(index, copy);
    button.addEventListener("click", () => {
      markViewVisited(view);
      setLinkedView(view);
    });
    el.classroomObservationRoute.append(button);
  }
}

function markViewVisited(view) {
  if (!evidenceLabels[view] || state.visitedViews.includes(view)) return;
  state.visitedViews.push(view);
  renderObservationRoute();
  updateLearningTrail();
}

function claimLabel(value = state.prediction.claim) {
  return currentDefinition().claimOptions?.find(([key]) => key === value)?.[1] ?? "尚未选择";
}

function predictionSummary() {
  const fields = new Set(currentDefinition().predictionFields ?? []);
  const parts = [];
  if (fields.has("claim")) parts.push(claimLabel());
  if (fields.has("radial")) parts.push(`径向节点 ${state.prediction.radial}`);
  if (fields.has("angular")) parts.push(`角向节点 ${state.prediction.angular}`);
  if (fields.has("axis")) parts.push(`主要方向 ${state.prediction.axis}`);
  return parts.join("；") || "已在画板中留下猜想";
}

function expectedCompareClaim() {
  const first = targetParams(currentTarget());
  const second = targetParams(comparisonTarget());
  const radialChanged = first.n !== second.n || (first.n - first.l - 1) !== (second.n - second.l - 1);
  const angularChanged = first.l !== second.l || first.m !== second.m;
  if (radialChanged && angularChanged) return "both";
  if (angularChanged) return "angular";
  return "radial";
}

function expectedClaim() {
  return state.template === "compare" ? expectedCompareClaim() : currentDefinition().correctClaim;
}

function selectTemplate(name) {
  if (!templateDefinitions[name]) return;
  state.template = name;
  for (const button of el.classroomTemplates ?? []) {
    const selected = button.dataset.classroomTemplate === name;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  }
  const definition = templateDefinitions[name];
  if (el.classroomTemplateQuestion) el.classroomTemplateQuestion.textContent = `核心问题：${definition.question}`;
  if (el.classroomTemplateDescription) el.classroomTemplateDescription.textContent = definition.description;
  el.classroomCompareTargetLabel?.classList.toggle("visible", name === "compare");
  configureTemplateUI();
}

function setScreen(name) {
  const normalized = ["prepare", "live", "review"].includes(name) ? name : "prepare";
  state.screen = normalized;
  for (const screen of el.classroomScreens ?? []) {
    screen.classList.toggle("active", screen.dataset.classroomPane === normalized);
  }
  for (const button of el.classroomScreenTabs ?? []) {
    button.classList.toggle("active", button.dataset.classroomScreen === normalized);
  }
  if (normalized === "review") updateReviewScreen();
  api.UI?.updateWindowControlLabels?.(el.activityWindow);
  requestAnimationFrame(() => {
    api.resizeAfterLayoutChange?.();
    resizeSketchCanvas();
    resizeClassroomViews();
  });
}

function resetBackgroundInteraction() {
  for (const element of [document.querySelector(".client-panel"), document.querySelector(".view-grid")]) {
    if (!element) continue;
    element.style.opacity = "1";
    element.style.filter = "none";
    element.style.pointerEvents = "auto";
  }
}

export function showClassroomPane(mode = "prepare") {
  if (!el.activityWindow) return;
  const legacyMap = { predict: "prepare", challenge: "prepare", tablet: "prepare", compare: "prepare" };
  if (mode === "compare") selectTemplate("compare");
  const screen = legacyMap[mode] ?? mode;
  el.activityWindow.classList.remove("closed", "minimized");
  el.activityWindow.style.zIndex = "125";
  resetBackgroundInteraction();
  setScreen(screen);
  if (el.activityTitle) el.activityTitle.textContent = "课堂互动";
}

function startTimer() {
  stopTimer();
  state.timer = window.setInterval(() => {
    if (state.remaining <= 0) {
      stopTimer();
      state.remaining = 0;
      updateTimerText();
      return;
    }
    state.remaining -= 1;
    updateTimerText();
  }, 1000);
}

function stopTimer() {
  if (state.timer) window.clearInterval(state.timer);
  state.timer = null;
}

function updateTimerText() {
  if (!el.classroomTimerValue) return;
  const minutes = Math.floor(state.remaining / 60);
  const seconds = state.remaining % 60;
  el.classroomTimerValue.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

async function startActivity() {
  state.targetValue = el.classroomTarget?.value || state.targetValue;
  state.compareValue = el.classroomCompareTarget?.value || state.compareValue;
  state.duration = Number(el.classroomDur…2756 tokens truncated…w.radius * factor);
  api.updateCompareCamera(view, view.radius);
}

function updateStageVisibility() {
  const prediction = state.step === 0;
  const comparison = !prediction && state.template === "compare" && state.linkedView === "orbital";
  const snapshot = !prediction && !comparison && state.linkedView !== "orbital";
  el.classroomLiveScreen?.classList.toggle("is-predicting", prediction);
  el.classroomSketchStage?.classList.toggle("active", prediction);
  el.classroomCompareStage?.classList.toggle("active", comparison);
  el.classroomSnapshotStage?.classList.toggle("active", snapshot);
  el.classroomOrbitalStage?.classList.toggle("active", !prediction && !comparison && !snapshot);
  if (el.classroomViewerTitle) {
    el.classroomViewerTitle.textContent = prediction
      ? "预测画板"
      : comparison
        ? "同步轨道对比"
        : evidenceLabels[state.linkedView] || "原子轨道";
  }
  if (el.classroomViewerSubtitle) {
    el.classroomViewerSubtitle.textContent = prediction
      ? "验证前不会显示真实轨道"
      : snapshot
        ? "显示主工作区中的实时科学视图"
        : "左键自由旋转，滚轮缩放";
  }
}

function resizeClassroomViews() {
  for (const container of [el.classroomViewer, el.classroomCompareAViewer, el.classroomCompareBViewer, el.classroomReviewViewer]) {
    if (!container || !container.offsetWidth || !container.offsetHeight) continue;
    const view = api.compareViewFor(container);
    api.updateCompareCamera(view, view?.radius || 5);
  }
  resizeSnapshotCanvas();
}

function setLinkedView(viewName) {
  if (!evidenceLabels[viewName]) return;
  state.linkedView = viewName;
  if (state.step >= 1) markViewVisited(viewName);
  for (const button of el.classroomViewButtons ?? []) button.classList.toggle("selected", button.dataset.classroomView === viewName);
  const evidenceInput = [...(el.classroomEvidenceInputs ?? [])].find((input) => input.value === viewName);
  if (state.step >= 2 && evidenceInput) evidenceInput.checked = true;
  updateEvidencePanel();
  updateStageVisibility();
  resizeClassroomViews();
}

function sourceCanvasForLinkedView() {
  const map = {
    projection: "#projectionViewer canvas",
    radial: "#radialViewer canvas",
    angular: "#angularViewer canvas",
  };
  return map[state.linkedView] ? document.querySelector(map[state.linkedView]) : null;
}

function resizeSnapshotCanvas() {
  const canvas = el.classroomSnapshotCanvas;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(rect.width * dpr));
  const height = Math.max(1, Math.round(rect.height * dpr));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

function mirrorLinkedView() {
  mirrorFrame = requestAnimationFrame(mirrorLinkedView);
  if (state.screen !== "live" || state.linkedView === "orbital" || !el.classroomSnapshotStage?.classList.contains("active")) return;
  const source = sourceCanvasForLinkedView();
  const canvas = el.classroomSnapshotCanvas;
  if (!source || !canvas) return;
  resizeSnapshotCanvas();
  const context = canvas.getContext("2d");
  context.fillStyle = el.backgroundColor?.value || "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
  const scale = Math.min(canvas.width / source.width, canvas.height / source.height);
  const width = source.width * scale;
  const height = source.height * scale;
  context.drawImage(source, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
}

function relaySnapshotPointer(type, event) {
  const source = sourceCanvasForLinkedView();
  const snapshot = el.classroomSnapshotCanvas;
  if (!source || !snapshot) return;
  const from = snapshot.getBoundingClientRect();
  const to = source.getBoundingClientRect();
  const x = to.left + ((event.clientX - from.left) / Math.max(1, from.width)) * to.width;
  const y = to.top + ((event.clientY - from.top) / Math.max(1, from.height)) * to.height;
  source.dispatchEvent(new PointerEvent(type, {
    bubbles: true,
    cancelable: true,
    pointerId: event.pointerId,
    pointerType: event.pointerType,
    isPrimary: event.isPrimary,
    button: event.button,
    buttons: event.buttons,
    clientX: x,
    clientY: y,
  }));
}

function bindSnapshotInteraction() {
  const canvas = el.classroomSnapshotCanvas;
  if (!canvas || canvas.dataset.interactionBound === "true") return;
  canvas.dataset.interactionBound = "true";
  canvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    canvas.setPointerCapture?.(event.pointerId);
    relaySnapshotPointer("pointerdown", event);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!event.buttons) return;
    event.preventDefault();
    relaySnapshotPointer("pointermove", event);
  });
  for (const type of ["pointerup", "pointercancel"]) {
    canvas.addEventListener(type, (event) => {
      relaySnapshotPointer(type, event);
      canvas.releasePointerCapture?.(event.pointerId);
    });
  }
  canvas.addEventListener("wheel", (event) => {
    const source = sourceCanvasForLinkedView();
    if (!source) return;
    event.preventDefault();
    source.dispatchEvent(new WheelEvent("wheel", {
      bubbles: true,
      cancelable: true,
      clientX: event.clientX,
      clientY: event.clientY,
      deltaX: event.deltaX,
      deltaY: event.deltaY,
      deltaMode: event.deltaMode,
    }));
  }, { passive: false });
}

function openMainWorkspace() {
  const view = state.linkedView === "orbital" ? (el.classroomStartView?.value || "quad") : state.linkedView;
  activateMainView(view);
  el.activityWindow?.classList.add("minimized");
  api.UI?.updateWindowControlLabels?.(el.activityWindow);
  api.resizeAfterLayoutChange?.();
}

function toggleName() {
  state.nameRevealed = !state.nameRevealed;
  updateActivityIdentity();
  updateEvidencePanel();
}

function setNodesVisible(visible) {
  if (el.radialNode && !el.radialNode.disabled) el.radialNode.checked = visible;
  if (el.polarNode && !el.polarNode.disabled) el.polarNode.checked = visible;
  if (el.longitudeNode) el.longitudeNode.checked = visible;
  if (el.node) el.node.checked = visible;
  state.nodesRevealed = visible;
  api.renderOrbital?.();
  setFeedback(visible ? "节点已在主工作区中揭示，可结合径向曲线和角向函数核对。" : "节点已隐藏，学生可以先进行预测。", "success");
}

function toggleViewLock() {
  state.viewLocked = !state.viewLocked;
  for (const container of [el.classroomViewer, el.classroomCompareAViewer, el.classroomCompareBViewer]) {
    if (!container) continue;
    const view = api.compareViewFor(container);
    if (view?.controls) view.controls.enabled = !state.viewLocked;
  }
  if (el.classroomLockViewButton) el.classroomLockViewButton.textContent = state.viewLocked ? "解除视角" : "锁定视角";
}

function togglePreviewMode() {
  state.studentPreview = !state.studentPreview;
  el.classroomShell?.classList.toggle("classroom-student-preview", state.studentPreview);
  if (el.classroomPreviewModeButton) el.classroomPreviewModeButton.textContent = state.studentPreview ? "教师视图" : "学生预览";
}

function updateReviewScreen() {
  const target = currentTarget();
  const params = targetParams(target);
  const radial = params.n - params.l - 1;
  const angular = params.l;
  const evidenceText = state.evidence.length ? state.evidence.map((item) => evidenceLabels[item]).join("、") : "未选择证据";
  if (el.classroomReviewTitle) el.classroomReviewTitle.textContent = `课堂回顾 · ${templateDefinitions[state.template].name}`;
  if (el.classroomReviewMeta) el.classroomReviewMeta.textContent = `${target?.label || "轨道"} · ${state.completed ? "已完成" : "进行中"}`;
  if (el.classroomReviewPrediction) el.classroomReviewPrediction.textContent = predictionSummary();
  if (el.classroomReviewEvidence) el.classroomReviewEvidence.textContent = evidenceText;
  if (el.classroomReviewExplanation) el.classroomReviewExplanation.textContent = state.explanation || "尚未填写解释";
  if (el.classroomReviewTransfer) el.classroomReviewTransfer.textContent = state.transfer || "尚未完成迁移";
  if (el.classroomReviewFeedback) el.classroomReviewFeedback.textContent = state.feedback || `正确节点数：径向 ${radial}，角向 ${angular}`;
  requestAnimationFrame(async () => {
    if (el.classroomReviewViewer?.offsetWidth) {
      await api.renderCompareView(el.classroomReviewViewer, target?.value, null, null, { smooth: true, wireframe: false });
      tightenClassroomCamera(el.classroomReviewViewer, 0.7);
      resizeClassroomViews();
    }
  });
  renderHistory();
}

function sessionRecord() {
  const target = currentTarget();
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    savedAt: new Date().toISOString(),
    template: state.template,
    templateName: templateDefinitions[state.template].name,
    targetValue: state.targetValue,
    targetLabel: target?.label || state.targetValue,
    prediction: { ...state.prediction },
    visitedViews: [...state.visitedViews],
    evidence: [...state.evidence],
    explanation: state.explanation,
    transfer: state.transfer,
    feedback: state.feedback,
  };
}

function readHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveReview() {
  const records = readHistory();
  records.unshift(sessionRecord());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records.slice(0, 24)));
  renderHistory();
  if (el.classroomSaveReviewButton) el.classroomSaveReviewButton.textContent = "已保存";
  window.setTimeout(() => { if (el.classroomSaveReviewButton) el.classroomSaveReviewButton.textContent = "保存活动"; }, 1200);
}

function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
  renderHistory();
}

function renderHistory() {
  if (!el.classroomHistoryList) return;
  el.classroomHistoryList.replaceChildren();
  const records = readHistory();
  if (!records.length) {
    const empty = document.createElement("p");
    empty.textContent = "暂无已保存活动。";
    el.classroomHistoryList.append(empty);
    return;
  }
  for (const record of records) {
    const item = document.createElement("article");
    item.className = "classroom-history-item";
    const title = document.createElement("strong");
    title.textContent = `${record.templateName} · ${record.targetLabel}`;
    const time = document.createElement("small");
    time.textContent = new Date(record.savedAt).toLocaleString();
    const summary = document.createElement("span");
    summary.textContent = [record.explanation, record.transfer].filter(Boolean).join(" · ") || "未填写解释";
    item.append(title, time, summary);
    el.classroomHistoryList.append(item);
  }
}

function exportReviewImage() {
  const canvas = document.createElement("canvas");
  canvas.width = 1600;
  canvas.height = 900;
  const context = canvas.getContext("2d");
  const background = el.backgroundColor?.value || "#000000";
  context.fillStyle = background;
  context.fillRect(0, 0, canvas.width, canvas.height);
  const reviewView = api.compareViewFor(el.classroomReviewViewer);
  const source = reviewView?.renderer?.domElement;
  if (source?.width) context.drawImage(source, 40, 110, 920, 700);
  context.fillStyle = "#f0f4f8";
  context.font = "600 42px Segoe UI, Microsoft YaHei, sans-serif";
  context.fillText(el.classroomReviewTitle?.textContent || "课堂回顾", 40, 66);
  context.font = "600 25px Segoe UI, Microsoft YaHei, sans-serif";
  context.fillText("最初猜想", 1010, 130);
  context.fillText("关键证据", 1010, 265);
  context.fillText("最终解释", 1010, 400);
  context.fillText("迁移结论", 1010, 535);
  context.fillText("概念反馈", 1010, 670);
  context.fillStyle = "#aab6c3";
  context.font = "21px Segoe UI, Microsoft YaHei, sans-serif";
  drawWrappedText(context, el.classroomReviewPrediction?.textContent || "", 1010, 165, 530, 30);
  drawWrappedText(context, el.classroomReviewEvidence?.textContent || "", 1010, 300, 530, 30);
  drawWrappedText(context, el.classroomReviewExplanation?.textContent || "", 1010, 435, 530, 30);
  drawWrappedText(context, el.classroomReviewTransfer?.textContent || "", 1010, 570, 530, 30);
  drawWrappedText(context, el.classroomReviewFeedback?.textContent || "", 1010, 705, 530, 30);
  const link = document.createElement("a");
  link.download = `HAO-classroom-${currentTarget()?.label || "orbital"}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight) {
  let line = "";
  let row = 0;
  for (const char of String(text)) {
    const test = line + char;
    if (context.measureText(test).width > maxWidth && line) {
      context.fillText(line, x, y + row * lineHeight);
      line = char;
      row += 1;
    } else {
      line = test;
    }
  }
  if (line) context.fillText(line, x, y + row * lineHeight);
}

function resizeSketchCanvas() {
  const canvas = el.classroomSketchCanvas;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  if (rect.width < 2 || rect.height < 2) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.round(rect.width * dpr);
  const height = Math.round(rect.height * dpr);
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    redrawSketch();
  }
}

function sketchPoint(event) {
  const rect = el.classroomSketchCanvas.getBoundingClientRect();
  return { x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height };
}

function beginSketch(event) {
  if (event.button !== undefined && event.button !== 0) return;
  state.sketch.drawing = true;
  state.sketch.pointerId = event.pointerId;
  state.sketch.current = {
    mode: state.sketch.mode,
    color: el.classroomSketchColor?.value || "#ffffff",
    size: Number(el.classroomSketchSize?.value) || 5,
    points: [sketchPoint(event)],
  };
  el.classroomSketchCanvas.setPointerCapture?.(event.pointerId);
  redrawSketch();
}

function continueSketch(event) {
  if (!state.sketch.drawing || event.pointerId !== state.sketch.pointerId || !state.sketch.current) return;
  state.sketch.current.points.push(sketchPoint(event));
  redrawSketch();
}

function endSketch(event) {
  if (!state.sketch.drawing || event.pointerId !== state.sketch.pointerId) return;
  if (state.sketch.current) state.sketch.strokes.push(state.sketch.current);
  state.sketch.drawing = false;
  state.sketch.pointerId = null;
  state.sketch.current = null;
  redrawSketch();
}

function redrawSketch() {
  const canvas = el.classroomSketchCanvas;
  if (!canvas?.width || !canvas?.height) return;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (const stroke of [...state.sketch.strokes, ...(state.sketch.current ? [state.sketch.current] : [])]) drawStroke(context, canvas, stroke);
}

function drawStroke(context, canvas, stroke) {
  if (!stroke.points.length) return;
  context.save();
  context.globalCompositeOperation = stroke.mode === "eraser" ? "destination-out" : "source-over";
  context.strokeStyle = stroke.color;
  context.lineWidth = stroke.size * Math.min(window.devicePixelRatio || 1, 2);
  context.lineCap = "round";
  context.lineJoin = "round";
  context.beginPath();
  stroke.points.forEach((point, index) => {
    const x = point.x * canvas.width;
    const y = point.y * canvas.height;
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  if (stroke.points.length === 1) context.lineTo(stroke.points[0].x * canvas.width + 0.01, stroke.points[0].y * canvas.height + 0.01);
  context.stroke();
  context.restore();
}

function setSketchMode(mode) {
  state.sketch.mode = mode;
  el.classroomSketchPen?.classList.toggle("active", mode === "pen");
  el.classroomSketchEraser?.classList.toggle("active", mode === "eraser");
}

function clearSketch() {
  state.sketch.strokes = [];
  state.sketch.current = null;
  redrawSketch();
}

function bindClassroomUI() {
  bound = true;
  for (const button of el.classroomScreenTabs ?? []) button.addEventListener("click", () => setScreen(button.dataset.classroomScreen));
  for (const button of el.classroomTemplates ?? []) button.addEventListener("click", () => selectTemplate(button.dataset.classroomTemplate));
  for (const button of el.classroomSteps ?? []) button.addEventListener("click", () => {
    const requested = Number(button.dataset.classroomStep);
    if (requested <= state.step || !state.studentPreview) updateStep(requested);
  });
  for (const button of el.classroomViewButtons ?? []) button.addEventListener("click", () => setLinkedView(button.dataset.classroomView));
  for (const input of el.classroomEvidenceInputs ?? []) input.addEventListener("change", updateEvidencePanel);
  for (const input of [
    el.classroomPredictionClaim,
    el.classroomPredictionRadial,
    el.classroomPredictionAngular,
    el.classroomPredictionAxis,
  ]) {
    input?.addEventListener("change", () => {
      if (!state.startedAt) return;
      state.predictionSaved = false;
      if (el.classroomSaveState) el.classroomSaveState.textContent = "猜想已修改，等待重新锁定";
      updateLearningTrail();
    });
  }
  el.classroomStartButton?.addEventListener("click", startActivity);
  el.classroomBackButton?.addEventListener("click", () => setScreen("prepare"));
  el.classroomEndButton?.addEventListener("click", () => finishActivity(true));
  el.classroomPreviousButton?.addEventListener("click", previousStep);
  el.classroomNextButton?.addEventListener("click", nextStep);
  el.classroomPreviewModeButton?.addEventListener("click", togglePreviewMode);
  el.classroomOpenWorkspaceButton?.addEventListener("click", openMainWorkspace);
  el.classroomToggleNameButton?.addEventListener("click", toggleName);
  el.classroomHideNodesButton?.addEventListener("click", () => setNodesVisible(false));
  el.classroomRevealNodesButton?.addEventListener("click", () => setNodesVisible(true));
  el.classroomLockViewButton?.addEventListener("click", toggleViewLock);
  el.classroomTarget?.addEventListener("change", () => { state.targetValue = el.classroomTarget.value; });
  el.classroomCompareTarget?.addEventListener("change", () => { state.compareValue = el.classroomCompareTarget.value; });
  el.classroomExportReviewButton?.addEventListener("click", exportReviewImage);
  el.classroomSaveReviewButton?.addEventListener("click", saveReview);
  el.classroomClearHistoryButton?.addEventListener("click", clearHistory);
  el.classroomExplanation?.addEventListener("input", () => {
    state.explanation = el.classroomExplanation.value;
    updateLearningTrail();
  });
  el.classroomTransfer?.addEventListener("input", () => {
    state.transfer = el.classroomTransfer.value;
    updateLearningTrail();
  });
  el.classroomSketchPen?.addEventListener("click", () => setSketchMode("pen"));
  el.classroomSketchEraser?.addEventListener("click", () => setSketchMode("eraser"));
  el.classroomSketchClear?.addEventListener("click", clearSketch);
  el.classroomSketchCanvas?.addEventListener("pointerdown", beginSketch);
  el.classroomSketchCanvas?.addEventListener("pointermove", continueSketch);
  el.classroomSketchCanvas?.addEventListener("pointerup", endSketch);
  el.classroomSketchCanvas?.addEventListener("pointercancel", endSketch);
  if ("ResizeObserver" in window && el.classroomSketchCanvas) {
    sketchObserver = new ResizeObserver(() => resizeSketchCanvas());
    sketchObserver.observe(el.classroomSketchCanvas);
  }
  bindSnapshotInteraction();
  if (!mirrorFrame) mirrorLinkedView();
}

export function getClassroomState() {
  return state;
}
