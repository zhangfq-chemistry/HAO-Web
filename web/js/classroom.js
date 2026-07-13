const STORAGE_KEY = "hao-classroom-sessions-v1";

const templateDefinitions = {
  links: {
    name: "四图关联",
    question: "四个窗口如何描述同一个波函数？",
    description: "学生将先预测，再通过旋转、半径扫描和视图切换寻找对应证据。",
    tasks: [
      ["先作出预测", "在看到真实结果前，判断轨道的形状、方向、节点和相位。"],
      ["主动寻找对应关系", "旋转轨道并切换视图，观察哪些特征在四个窗口中保持一致。"],
      ["选择支持证据", "从轨道、投影、径向和角向视图中选择真正支持判断的证据。"],
      ["完成物理解释", "用“因为……所以……”说明四个视图之间的关系。"],
      ["核对并形成小结", "比较最初预测和最终结论，记录需要修正的概念。"],
    ],
  },
  nodes: {
    name: "寻找节点",
    question: "径向节点和角向节点分别在哪里？",
    description: "先预测节点数量，再用径向曲线零点和三维节面逐步验证。",
    tasks: [
      ["预测节点数量", "根据 n、l 判断可能出现的径向节点和角向节点。"],
      ["观察节点位置", "查看径向曲线零点，并在三维轨道中寻找对应节面。"],
      ["建立节点证据", "选择径向曲线或角向函数作为节点判断的证据。"],
      ["解释节点来源", "说明节点是由径向部分还是角向部分产生的。"],
      ["核对节点规律", "用 n-l-1 和 l 核对观察结果。"],
    ],
  },
  slice: {
    name: "截面与投影",
    question: "三维轨道如何形成二维截面和投影？",
    description: "通过切片、投影和相位颜色建立三维波函数与二维图案的联系。",
    tasks: [
      ["预测二维图案", "画出你认为穿过原子核的截面应该呈现的图案。"],
      ["移动切片观察", "在主工作区移动切片，观察截面随位置发生的变化。"],
      ["选择投影证据", "用投影轮廓或切片颜色支持你的判断。"],
      ["解释降维过程", "说明截面和投影分别保留了波函数的哪些信息。"],
      ["比较预测与结果", "总结三维形状与二维图案之间的对应关系。"],
    ],
  },
  basics: {
    name: "认识轨道",
    question: "轨道的形状、方向和正负相位如何读取？",
    description: "从角向函数和坐标轴出发，建立轨道名称与空间方向的联系。",
    tasks: [
      ["预测轨道方向", "根据轨道名称预测波瓣沿哪个坐标方向分布。"],
      ["旋转观察形状", "从不同方向观察波瓣、相位和对称性。"],
      ["选择方向证据", "用角向函数和坐标轴说明轨道方向。"],
      ["解释相位颜色", "说明两种颜色表示波函数相位，而不是电荷正负。"],
      ["形成识别规则", "总结如何从名称判断方向和节点。"],
    ],
  },
  compare: {
    name: "轨道对比",
    question: "改变 n、l、m 后，什么改变、什么保持不变？",
    description: "并排旋转两个真实轨道，比较径向节点、角向形状和相位方向。",
    tasks: [
      ["预测差异", "先写出两个轨道在节点、方向和大小上的可能差异。"],
      ["同步旋转对比", "从相同视角观察两个轨道的波瓣和节点。"],
      ["选择差异证据", "指出差异来自径向函数还是角向函数。"],
      ["解释量子数作用", "说明 n、l、m 分别控制了哪些可见特征。"],
      ["形成对比结论", "总结两个轨道最重要的相同点和不同点。"],
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
  linkedView: "orbital",
  prediction: { radial: 0, angular: 1, axis: "x" },
  evidence: [],
  explanation: "",
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
  state.duration = Number(el.classroomDuration?.value) || 600;
  state.remaining = state.duration;
  state.startedAt = new Date();
  state.endedAt = null;
  state.completed = false;
  state.step = 0;
  state.evidence = [];
  state.explanation = "";
  state.feedback = "";
  state.nameRevealed = !el.classroomHideName?.checked;
  state.nodesRevealed = false;
  state.linkedView = "orbital";
  clearSketch();
  for (const input of el.classroomEvidenceInputs ?? []) input.checked = false;
  if (el.classroomExplanation) el.classroomExplanation.value = "";
  updateTimerText();
  setScreen("live");
  updateStep(0);
  applyStartView();
  await api.applyTarget(state.targetValue);
  await renderClassroomViews();
  updateActivityIdentity();
  startTimer();
}

function applyStartView() {
  const view = el.classroomStartView?.value || "quad";
  activateMainView(view);
}

function activateMainView(view) {
  document.querySelector(`#viewDock .dock-btn[data-view="${view}"]`)?.click();
}

function updateActivityIdentity() {
  const target = currentTarget();
  const definition = templateDefinitions[state.template];
  if (el.classroomActivityName) {
    const targetName = state.nameRevealed ? target?.label : "未知轨道";
    el.classroomActivityName.textContent = `${definition.name} · ${targetName}`;
  }
  if (el.classroomSessionStatus) {
    el.classroomSessionStatus.textContent = state.startedAt
      ? `进行中 · ${state.startedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
      : "课堂尚未开始";
  }
  if (el.classroomToggleNameButton) el.classroomToggleNameButton.textContent = state.nameRevealed ? "隐藏名称" : "显示名称";
}

function updateStep(index) {
  state.step = Math.max(0, Math.min(4, index));
  const definition = templateDefinitions[state.template];
  const [title, text] = definition.tasks[state.step];
  for (const button of el.classroomSteps ?? []) {
    const step = Number(button.dataset.classroomStep);
    button.classList.toggle("active", step === state.step);
    button.classList.toggle("complete", step < state.step);
  }
  for (const panel of el.classroomStepPanels ?? []) {
    panel.classList.toggle("active", Number(panel.dataset.classroomStepPanel) === state.step);
  }
  if (el.classroomStepBadge) el.classroomStepBadge.textContent = `第 ${state.step + 1} 步 / 5 步`;
  if (el.classroomTaskTitle) el.classroomTaskTitle.textContent = title;
  if (el.classroomTaskText) el.classroomTaskText.textContent = text;
  if (el.classroomPreviousButton) el.classroomPreviousButton.disabled = state.step === 0;
  if (el.classroomNextButton) {
    el.classroomNextButton.textContent = ["提交预测", "进入证据", "开始解释", "完成并小结", "查看课堂回顾"][state.step];
  }
  updateStageVisibility();
  updateEvidencePanel();
  if (state.step === 4) buildConclusion();
  requestAnimationFrame(() => {
    resizeSketchCanvas();
    resizeClassroomViews();
  });
}

function savePrediction() {
  state.prediction = {
    radial: Number(el.classroomPredictionRadial?.value) || 0,
    angular: Number(el.classroomPredictionAngular?.value) || 0,
    axis: el.classroomPredictionAxis?.value || "x",
  };
  if (el.classroomSaveState) el.classroomSaveState.textContent = "预测已保存";
  updateEvidencePanel();
}

function selectedEvidence() {
  return [...(el.classroomEvidenceInputs ?? [])].filter((input) => input.checked).map((input) => input.value);
}

function validateStep() {
  if (state.step === 0) {
    savePrediction();
    return true;
  }
  if (state.step === 2) {
    state.evidence = selectedEvidence();
    if (el.classroomRequireEvidence?.checked && state.evidence.length === 0) {
      setFeedback("请至少选择一条支持判断的证据，再进入解释。", "warning");
      return false;
    }
    buildDiagnosticFeedback();
  }
  if (state.step === 3) {
    state.explanation = el.classroomExplanation?.value.trim() || "";
    if (!state.explanation) {
      setFeedback("请先用一句话解释你的判断，再完成活动。", "warning");
      return false;
    }
    finishActivity(false);
  }
  return true;
}

function nextStep() {
  if (!validateStep()) return;
  if (state.step >= 4) {
    setScreen("review");
    return;
  }
  updateStep(state.step + 1);
}

function previousStep() {
  if (state.step > 0) updateStep(state.step - 1);
}

function updateEvidencePanel() {
  const target = currentTarget();
  if (el.classroomAnswerOrbital) el.classroomAnswerOrbital.textContent = state.nameRevealed || state.step >= 4 ? target?.label : "?";
  if (el.classroomAnswerRadial) el.classroomAnswerRadial.textContent = String(state.prediction.radial);
  if (el.classroomAnswerAngular) el.classroomAnswerAngular.textContent = String(state.prediction.angular);
  if (el.classroomAnswerAxis) el.classroomAnswerAxis.textContent = state.prediction.axis;
  if (el.classroomEvidenceList) {
    el.classroomEvidenceList.replaceChildren();
    const evidence = state.evidence.length ? state.evidence : selectedEvidence();
    if (!evidence.length) {
      const item = document.createElement("li");
      item.textContent = "尚未选择";
      el.classroomEvidenceList.append(item);
    } else {
      for (const key of evidence) {
        const item = document.createElement("li");
        item.textContent = evidenceLabels[key] || key;
        el.classroomEvidenceList.append(item);
      }
    }
  }
}

function setFeedback(message, kind = "") {
  state.feedback = message;
  if (!el.classroomFeedback) return;
  el.classroomFeedback.textContent = message;
  el.classroomFeedback.classList.toggle("success", kind === "success");
  el.classroomFeedback.classList.toggle("warning", kind === "warning");
}

function buildDiagnosticFeedback() {
  const params = targetParams();
  const radial = params.n - params.l - 1;
  const angular = params.l;
  const axis = expectedAxis(params);
  const messages = [];
  if (state.prediction.radial !== radial) messages.push(`你预测了 ${state.prediction.radial} 个径向节点，但径向函数应有 ${radial} 个非原点零点。`);
  if (state.prediction.angular !== angular) messages.push(`你预测了 ${state.prediction.angular} 个角向节点，而 l=${params.l} 对应 ${angular} 个角向节点。`);
  if (axis !== "复合方向" && axis !== "无特定方向" && state.prediction.axis !== axis) messages.push(`轨道方向与预测不一致，可结合角向函数和坐标轴重新判断。`);
  if (!messages.length) messages.push("你的节点和方向判断与计算结果一致，请继续说明证据之间的联系。");
  setFeedback(messages.join(" "), messages.length === 1 && messages[0].startsWith("你的节点") ? "success" : "warning");
}

function buildConclusion() {
  const target = currentTarget();
  const params = targetParams(target);
  const radial = params.n - params.l - 1;
  const angular = params.l;
  const axis = expectedAxis(params);
  state.nameRevealed = true;
  updateActivityIdentity();
  if (el.classroomConclusion) {
    el.classroomConclusion.textContent = `${target?.label}：径向节点 ${radial} 个，角向节点 ${angular} 个，主要方向为 ${axis}。正负颜色表示波函数相位，不表示电荷正负。`;
  }
  if (el.classroomAnswerOrbital) el.classroomAnswerOrbital.textContent = target?.label;
  if (el.classroomAnswerRadial) el.classroomAnswerRadial.textContent = `${state.prediction.radial} → ${radial}`;
  if (el.classroomAnswerAngular) el.classroomAnswerAngular.textContent = `${state.prediction.angular} → ${angular}`;
  if (el.classroomAnswerAxis) el.classroomAnswerAxis.textContent = `${state.prediction.axis} → ${axis}`;
}

function finishActivity(openReview = true) {
  stopTimer();
  state.endedAt = new Date();
  state.completed = true;
  state.explanation = el.classroomExplanation?.value.trim() || state.explanation;
  state.evidence = selectedEvidence();
  buildDiagnosticFeedback();
  updateStep(4);
  updateReviewScreen();
  if (openReview) setScreen("review");
}

async function renderClassroomViews() {
  const token = ++renderToken;
  const target = currentTarget();
  if (!target) return;
  if (state.template === "compare") {
    const second = comparisonTarget();
    await Promise.all([
      api.renderCompareView(el.classroomCompareAViewer, target.value, el.classroomCompareATitle, null, { smooth: true, wireframe: false, matte: true }),
      api.renderCompareView(el.classroomCompareBViewer, second.value, el.classroomCompareBTitle, null, { smooth: true, wireframe: false, matte: true }),
    ]);
    tightenClassroomCamera(el.classroomCompareAViewer);
    tightenClassroomCamera(el.classroomCompareBViewer);
  } else {
    await api.renderCompareView(el.classroomViewer, target.value, null, null, { smooth: true, wireframe: false, matte: true });
    tightenClassroomCamera(el.classroomViewer);
  }
  if (token !== renderToken) return;
  updateStageVisibility();
  resizeClassroomViews();
}

function tightenClassroomCamera(container, factor = 0.62) {
  if (!container) return;
  const view = api.compareViewFor(container);
  if (!view) return;
  view.radius = Math.max(3, view.radius * factor);
  api.updateCompareCamera(view, view.radius);
}

function updateStageVisibility() {
  const prediction = state.step === 0;
  const comparison = !prediction && state.template === "compare";
  const snapshot = !prediction && !comparison && state.linkedView !== "orbital";
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
  if (el.classroomReviewPrediction) el.classroomReviewPrediction.textContent = `径向节点 ${state.prediction.radial}，角向节点 ${state.prediction.angular}，方向 ${state.prediction.axis}`;
  if (el.classroomReviewEvidence) el.classroomReviewEvidence.textContent = evidenceText;
  if (el.classroomReviewExplanation) el.classroomReviewExplanation.textContent = state.explanation || "尚未填写解释";
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
    evidence: [...state.evidence],
    explanation: state.explanation,
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
    summary.textContent = record.explanation || "未填写解释";
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
  context.font = "600 27px Segoe UI, Microsoft YaHei, sans-serif";
  context.fillText("最初预测", 1010, 150);
  context.fillText("证据修正", 1010, 330);
  context.fillText("最终解释", 1010, 510);
  context.fillText("概念反馈", 1010, 690);
  context.fillStyle = "#aab6c3";
  context.font = "23px Segoe UI, Microsoft YaHei, sans-serif";
  drawWrappedText(context, el.classroomReviewPrediction?.textContent || "", 1010, 190, 530, 34);
  drawWrappedText(context, el.classroomReviewEvidence?.textContent || "", 1010, 370, 530, 34);
  drawWrappedText(context, el.classroomReviewExplanation?.textContent || "", 1010, 550, 530, 34);
  drawWrappedText(context, el.classroomReviewFeedback?.textContent || "", 1010, 730, 530, 34);
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
  el.classroomExplanation?.addEventListener("input", () => { state.explanation = el.classroomExplanation.value; });
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
