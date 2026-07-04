import { el } from "./dom.js";

let browserFullscreenActive = false;
let fullscreenExitButton = document.createElement("button");
fullscreenExitButton.type = "button";
fullscreenExitButton.className = "fullscreen-exit-button";
fullscreenExitButton.textContent = "退出全屏";
fullscreenExitButton.hidden = true;
document.body.appendChild(fullscreenExitButton);

fullscreenExitButton.addEventListener("click", exitAppFullscreen);
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    browserFullscreenActive = true;
    syncFullscreenUi(true);
  } else if (browserFullscreenActive) {
    browserFullscreenActive = false;
    syncFullscreenUi(false);
  }
});

export function initUI(api) {
  Object.assign(window, api);
  bindAppUI();
  initDrawerAndDock();
  initAccordion();
}

/* ─── Drawer and Dock Logic (Plan C) ─── */
function initDrawerAndDock() {
  const drawer = document.getElementById("settingsDrawer");
  const toggleBtn = document.getElementById("toggleDrawerBtn");
  const container = document.querySelector(".view-container");

  const updateQuadDrawerReservation = () => {
    if (!container) return;
    const shouldReserve = container.classList.contains("quad-view") && !drawer?.classList.contains("closed");
    container.classList.toggle("drawer-reserved", shouldReserve);
  };

  toggleBtn?.addEventListener("click", () => {
    drawer?.classList.toggle("closed");
    updateQuadDrawerReservation();
    setTimeout(() => window.dispatchEvent(new Event("resize")), 450); // wait for animation
  });

  const dock = document.getElementById("viewDock");
  if (!dock) return;
  dock.addEventListener("click", (e) => {
    const btn = e.target.closest(".dock-btn");
    if (!btn) return;
    
    if (btn.id === "openAnimationButton") {
      if (window.playCinematicAnimation) window.playCinematicAnimation();
      return;
    }

    // Update active button
    dock.querySelectorAll(".dock-btn:not(#openAnimationButton)").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const viewName = btn.dataset.view;
    if (!container) return;
    
    if (viewName === "quad") {
      container.classList.add("quad-view");
      document.querySelectorAll(".view-container > .qt-window:not(.floating-palette):not(.floating-sketch):not(.floating-activity)").forEach(win => {
        win.classList.add("active");
      });
    } else {
      container.classList.remove("quad-view");
      // Hide all main viewers, show selected
      document.querySelectorAll(".view-container > .qt-window:not(.floating-palette):not(.floating-sketch):not(.floating-activity)").forEach(win => {
        if (win.dataset.windowName === viewName) {
          win.classList.add("active");
        } else {
          win.classList.remove("active");
        }
      });
    }
    updateQuadDrawerReservation();
    
    // Trigger resize so ThreeJS canvas updates its aspect ratio
    window.dispatchEvent(new Event("resize"));
    setTimeout(() => window.dispatchEvent(new Event("resize")), 450);
  });

  updateQuadDrawerReservation();
}

function initAccordion() {
  const panel = document.querySelector(".client-panel");
  if (!panel) return;
  panel.addEventListener("click", (event) => {
    const legend = event.target.closest("legend");
    if (!legend) return;
    const fieldset = legend.parentElement;
    if (fieldset) {
      fieldset.classList.toggle("open");
    }
  });
}

export function beginFloatingDrag(event, win) {
  if (!win || win.classList.contains("maximized") || event.target.closest(".window-controls")) return;
  if (event.pointerType !== "mouse" && !event.isPrimary) return;
  event.preventDefault();
  const rect = win.getBoundingClientRect();
  activityState.dragging = true;
  activityState.dragPointerId = event.pointerId;
  activityState.dragWindow = win;
  activityState.dragOffsetX = event.clientX - rect.left;
  activityState.dragOffsetY = event.clientY - rect.top;
  event.currentTarget?.setPointerCapture?.(event.pointerId);
  win.style.zIndex = "130";
}

export function continueFloatingDrag(event) {
  const win = activityState.dragWindow;
  if (!activityState.dragging || !win) return;
  if (activityState.dragPointerId !== null && event.pointerId !== activityState.dragPointerId) return;
  event.preventDefault();
  const maxLeft = window.innerWidth - Math.min(120, win.offsetWidth);
  const maxTop = window.innerHeight - 32;
  const left = Math.max(0, Math.min(maxLeft, event.clientX - activityState.dragOffsetX));
  const top = Math.max(0, Math.min(maxTop, event.clientY - activityState.dragOffsetY));
  win.style.left = `${left}px`;
  win.style.top = `${top}px`;
  win.style.right = "auto";
  win.style.bottom = "auto";
}

export function endFloatingDrag() {
  activityState.dragging = false;
  activityState.dragPointerId = null;
  activityState.dragWindow = null;
  recoverAllViewerControls();
}

export function applyPreset() {
  const [n, l, m] = el.preset.value.split(",").map(Number);
  el.n.value = n;
  el.l.value = l;
  el.m.value = Math.abs(m);
  el.cosType.checked = m >= 0;
  el.sinType.checked = m < 0;
  readParams();
  applyDesktopDefaultsToControls();
  renderOrbital();
}

export function makeExclusive(active, group) {
  if (!active.checked) return;
  for (const input of group) {
    if (input && input !== active) input.checked = false;
  }
}

export function applyPalette(which) {
  if (which === "one") {
    el.positiveColor.value = "#ff7a00";
    el.negativeColor.value = "#008fb8";
  } else {
    el.positiveColor.value = "#d83bd8";
    el.negativeColor.value = "#00aeb8";
  }
  renderOrbital();
}

export function bindExclusiveCheckboxes() {
  for (const input of [el.cosType, el.sinType]) {
    input?.addEventListener("change", () => {
      makeExclusive(input, [el.cosType, el.sinType]);
      if (!el.cosType.checked && !el.sinType.checked) el.cosType.checked = true;
      renderOrbital();
    });
  }

  for (const input of [el.wireframe, el.smooth]) {
    input?.addEventListener("change", () => {
      makeExclusive(input, [el.wireframe, el.smooth]);
      renderOrbital();
    });
  }

  for (const input of [el.paletteOne, el.paletteTwo]) {
    input?.addEventListener("change", () => {
      makeExclusive(input, [el.paletteOne, el.paletteTwo]);
      if (!el.paletteOne.checked && !el.paletteTwo.checked) el.paletteTwo.checked = true;
      applyPalette(el.paletteOne.checked ? "one" : "two");
    });
  }

  for (const input of [el.xySlice, el.yzSlice, el.xzSlice]) {
    input?.addEventListener("change", () => {
      makeExclusive(input, [el.xySlice, el.yzSlice, el.xzSlice]);
      renderOrbital();
    });
  }

  for (const input of [el.quarter, el.eighth, el.threeQuarter]) {
    input?.addEventListener("change", () => {
      makeExclusive(input, [el.quarter, el.eighth, el.threeQuarter]);
      renderOrbital();
    });
  }

  for (const input of [el.radialR, el.radialR2, el.radialRdf]) {
    input?.addEventListener("change", () => {
      makeExclusive(input, [el.radialR, el.radialR2, el.radialRdf]);
      if (!el.radialR.checked && !el.radialR2.checked && !el.radialRdf.checked) el.radialRdf.checked = true;
      clearRadialObjects();
      renderRadialView(readParams(), readOptions());
    });
  }
}

export function exportImage() {
  renderer.render(scene, camera);
  const link = document.createElement("a");
  link.download = `${el.orbitalName.textContent || "hao-orbital"}.png`;
  link.href = renderer.domElement.toDataURL("image/png");
  link.click();
}

export function setStatus(text) {
  el.statusText.textContent = text;
}

export function chooseBackgroundColor() {
  if (!el.backgroundColor) return;
  if (!document.body.contains(el.backgroundColor) || el.backgroundColor.closest(".hidden-control")) {
    document.body.appendChild(el.backgroundColor);
    Object.assign(el.backgroundColor.style, {
      position: "fixed",
      left: "-120px",
      top: "0",
      width: "1px",
      height: "1px",
      opacity: "0",
      pointerEvents: "none",
    });
  }
  try {
    if (typeof el.backgroundColor.showPicker === "function") {
      el.backgroundColor.showPicker();
    } else {
      el.backgroundColor.click();
    }
  } catch {
    el.backgroundColor.click();
  }
}

export function syncFullscreenUi(active) {
  document.body.classList.toggle("app-fullscreen", active);
  fullscreenExitButton.hidden = !active;
  resizeAfterLayoutChange();
}

export async function enterAppFullscreen() {
  closeMenu();
  syncFullscreenUi(true);
  const requestFullscreen = document.documentElement.requestFullscreen?.bind(document.documentElement);
  if (!requestFullscreen) return;
  try {
    await requestFullscreen();
    browserFullscreenActive = true;
  } catch {
    browserFullscreenActive = false;
  }
}

export async function exitAppFullscreen() {
  closeMenu();
  syncFullscreenUi(false);
  if (document.fullscreenElement && document.exitFullscreen) {
    try {
      await document.exitFullscreen();
    } catch {
      // The CSS fullscreen fallback has already been cleared.
    }
  }
  browserFullscreenActive = false;
}

export function toggleAppFullscreen() {
  if (document.body.classList.contains("app-fullscreen") || document.fullscreenElement) {
    exitAppFullscreen();
  } else {
    enterAppFullscreen();
  }
}

export function closeMenu() {
  el.menuPopup.hidden = true;
  el.menuPopup.innerHTML = "";
  for (const item of el.menuItems) item.classList.remove("active");
}

export function openMenu(menuButton) {
  const menu = menuButton.dataset.menu;
  const items = {
    file: [
      ["重新显示", renderOrbital],
      ["导出图片", exportImage],
      ["恢复预设值", () => {
        applyDesktopDefaultsToControls();
        renderOrbital();
      }],
    ],
    window: [
      ["全屏/退出全屏", toggleAppFullscreen],
      ["画板", openSketchWindow],
      ["盒子设置", openBoxWindow],
      ["背景颜色", chooseBackgroundColor],
      ["显示/隐藏盒子", toggleBox],
      ["显示/隐藏坐标轴", toggleAxis],
      ["重置视角", () => {
        resetCamera();
        resetAngularCamera(getCurrentAngularRadius());
      }],
    ],
    help: [
      ["当前说明", () => setStatus("顶部按钮已连接到 Web 端功能")],
      ["项目路径", () => setStatus("web/index.html")],
    ],
    language: [
      ["中文", () => setStatus("语言: 中文")],
      ["English", () => setStatus("Language: English labels are partly available")],
    ],
  }[menu];

  closeMenu();
  menuButton.classList.add("active");
  const rect = menuButton.getBoundingClientRect();
  el.menuPopup.style.left = `${rect.left}px`;
  el.menuPopup.hidden = false;
  for (const [label, action] of items) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      closeMenu();
      action();
    });
    el.menuPopup.appendChild(button);
  }
}

export function fastUpdateVisualOptions() {
  try {
    const options = readOptions();
    console.log("[DEBUG] fastUpdateVisualOptions called. options.showAxis =", options.showAxis);
    
    setAxesVisibility(options.showAxis, Math.max(1, options.radius / 4.5));
    if (el.toolAxis) el.toolAxis.classList.toggle("active", options.showAxis);

    if (boxObject) boxObject.visible = options.showBox;
    if (el.toolBox) el.toolBox.classList.toggle("active", options.showBox);

    if (radialAxisObject) radialAxisObject.visible = options.showAxis;
    console.log("[DEBUG] fastUpdateVisualOptions completed successfully.");
  } catch (e) {
    console.error("Error in fastUpdateVisualOptions:", e);
    alert("坐标轴更新失败: " + e.message + "\n" + e.stack);
  }
}

export function toggleAxis() {
  try {
    const currentState = el.toolAxis ? el.toolAxis.classList.contains("active") : (el.axis ? el.axis.checked : true);
    console.log("[DEBUG] toggleAxis called. Internal state was =", currentState);
    if (el.axis) el.axis.checked = !currentState;
    fastUpdateVisualOptions();
  } catch (e) {
    alert("toggleAxis ERROR: " + e.message);
  }
}

export function toggleBox() {
  try {
    if (el.box) el.box.checked = !el.box.checked;
    fastUpdateVisualOptions();
  } catch (e) {
    alert("toggleBox ERROR: " + e.message);
  }
}

export function setWindowLayout(mode) {
  // Legacy layout function, removed in Plan C.
  // We no longer have a view grid to toggle.
  resizeAfterLayoutChange();
}

export function updateWindowControlLabels(win) {
  const minimize = win.querySelector('[data-window-action="minimize"]');
  const maximize = win.querySelector('[data-window-action="maximize"]');
  if (minimize) minimize.textContent = win.classList.contains("minimized") ? "□" : "－";
  if (maximize) maximize.textContent = win.classList.contains("maximized") ? "❐" : "□";
}

export function handleWindowControl(button) {
  const win = button.closest(".qt-window");
  if (!win) return;
  const action = button.dataset.windowAction;
  if (action === "minimize") {
    win.classList.toggle("minimized");
    if (win.classList.contains("minimized")) win.classList.remove("maximized");
  } else if (action === "maximize") {
    win.classList.remove("minimized");
    win.classList.toggle("maximized");
  } else if (action === "close") {
    win.classList.add("closed");
    win.classList.remove("minimized", "maximized");
    if (win === el.animationWindow) pauseGenerationAnimation();
  }
  updateWindowControlLabels(win);
  resizeAfterLayoutChange();

}

export function setPlaneView(plane) {
  const radius = getCurrentViewRadius();
  const angularRadius = Math.max(3, getCurrentAngularRadius());
  const projectionRadius = typeof getCurrentProjectionRadius !== "undefined" ? getCurrentProjectionRadius() : radius;
  const radialRadius = typeof getCurrentRadialRadius !== "undefined" ? getCurrentRadialRadius() : radius;
  const projectionFocus = typeof getCurrentProjectionTarget !== "undefined"
    ? getCurrentProjectionTarget()
    : { x: 0, y: 0, z: 0 };
  
  const mainDistance = cameraDistanceForRadius(radius);
  const angularDistance = cameraDistanceForRadius(angularRadius, 40);
  const projDistance = cameraDistanceForRadius(projectionRadius);
  const radialDistance = typeof cameraDistanceForRadius !== "undefined" ? cameraDistanceForRadius(radialRadius) : radialRadius * 1.5;

  if (plane === "xoy") {
    camera.up.set(0, 1, 0);
    angularCamera.up.set(0, 1, 0);
    camera.position.set(0, 0, mainDistance);
    angularCamera.position.set(0, 0, angularDistance);
    if (window.projectionCamera) { projectionCamera.up.set(0, 1, 0); projectionCamera.position.set(projectionFocus.x, projectionFocus.y, projectionFocus.z + projDistance); }
    if (window.radialCamera) { radialCamera.up.set(0, 1, 0); radialCamera.position.set(0, 0, radialDistance); }
  } else if (plane === "yoz") {
    camera.up.set(0, 1, 0);
    angularCamera.up.set(0, 1, 0);
    camera.position.set(mainDistance, 0, 0);
    angularCamera.position.set(angularDistance, 0, 0);
    if (window.projectionCamera) { projectionCamera.up.set(0, 1, 0); projectionCamera.position.set(projectionFocus.x + projDistance, projectionFocus.y, projectionFocus.z); }
    if (window.radialCamera) { radialCamera.up.set(0, 1, 0); radialCamera.position.set(radialDistance, 0, 0); }
  } else if (plane === "xoz") {
    camera.up.set(0, 0, 1);
    angularCamera.up.set(0, 0, 1);
    camera.position.set(0, -mainDistance, 0);
    angularCamera.position.set(0, -angularDistance, 0);
    if (window.projectionCamera) { projectionCamera.up.set(0, 0, 1); projectionCamera.position.set(projectionFocus.x, projectionFocus.y - projDistance, projectionFocus.z); }
    if (window.radialCamera) { radialCamera.up.set(0, 0, 1); radialCamera.position.set(0, -radialDistance, 0); }
  }
  
  camera.lookAt(0, 0, 0);
  angularCamera.lookAt(0, 0, 0);
  if (window.projectionCamera) projectionCamera.lookAt(projectionFocus.x, projectionFocus.y, projectionFocus.z);
  if (window.radialCamera) radialCamera.lookAt(0, 0, 0);
  
  updateCameraFrustum(radius);
  updateAngularFrustum(angularRadius);
  if (window.updateProjectionFrustum) updateProjectionFrustum(projectionRadius);
  if (window.updateRadialFrustum) updateRadialFrustum(radialRadius);
  
  controls.target.set(0, 0, 0);
  angularControls.target.set(0, 0, 0);
  if (window.projectionControls) projectionControls.target.set(projectionFocus.x, projectionFocus.y, projectionFocus.z);
  if (window.radialControls) radialControls.target.set(0, 0, 0);
  
  controls.update();
  angularControls.update();
  if (window.projectionControls) projectionControls.update();
  if (window.radialControls) radialControls.update();
  
  el.toolXOY?.classList.toggle("active", plane === "xoy");
  el.toolYOZ?.classList.toggle("active", plane === "yoz");
  el.toolXOZ?.classList.toggle("active", plane === "xoz");
}

export function bindAppUI() {
  document.querySelectorAll('.window-title').forEach(header => {
    header.addEventListener('dblclick', (e) => {
      const win = e.target.closest('.qt-window');
      if (!win || e.target.closest('.window-controls')) return;
      win.classList.toggle('maximized');
      resizeAfterLayoutChange();
    });
  });
  if (!el.sketchCanvas) return;
  el.openActivityButton?.addEventListener("click", () => showActivityPane("predict"));
  el.openSketchButton?.addEventListener("click", openSketchWindow);
  el.openPredictButton?.addEventListener("click", () => showActivityPane("predict"));
  el.openChallengeButton?.addEventListener("click", () => showActivityPane("challenge"));
  el.openAnimationButton?.addEventListener("click", () => {
    if (window.playCinematicAnimation) window.playCinematicAnimation();
  });
  for (const button of el.activityModeButtons ?? []) {
    button.addEventListener("click", () => showActivityPane(button.dataset.activityMode));
  }
  el.startPredictButton?.addEventListener("click", startPrediction);
  el.verifyPredictButton?.addEventListener("click", verifyPrediction);
  el.scoreCurrentButton?.addEventListener("click", scoreCurrentPrediction);
  el.scoreShowRubricButton?.addEventListener("click", showScoreRubric);
  el.scoreResetButton?.addEventListener("click", resetScorePrompt);
  el.diagnoseNodesButton?.addEventListener("click", () => runDiagnosis("nodes"));
  el.diagnosePhaseButton?.addEventListener("click", () => runDiagnosis("phase"));
  el.diagnoseProjectionButton?.addEventListener("click", () => runDiagnosis("projection"));
  for (const button of document.querySelectorAll("[data-diagnosis]")) {
    button.addEventListener("click", () => runDiagnosis(button.dataset.diagnosis));
  }
  el.nodeRevealButton?.addEventListener("click", () => {
    if (el.radialNode && !el.radialNode.disabled) el.radialNode.checked = true;
    if (el.polarNode && !el.polarNode.disabled) el.polarNode.checked = true;
    el.longitudeNode.checked = true;
    el.node.checked = true;
    renderOrbital();
  });
  el.nodeHideButton?.addEventListener("click", () => {
    if (el.radialNode) el.radialNode.checked = false;
    if (el.polarNode) el.polarNode.checked = false;
    el.longitudeNode.checked = false;
    el.node.checked = false;
    renderOrbital();
  });
  el.compareApplyButton?.addEventListener("click", () => {
    renderOrbitalComparison();
  });
  el.compareA?.addEventListener("change", () => {
    renderCompareSlot("a");
  });
  el.compareB?.addEventListener("change", () => {
    renderCompareSlot("b");
  });
  el.compareLoadAButton?.addEventListener("click", () => {
    if (el.compareA?.value) loadCompareTargetToMain(el.compareA.value, "a");
  });
  el.compareLoadBButton?.addEventListener("click", () => {
    if (el.compareB?.value) loadCompareTargetToMain(el.compareB.value, "b");
  });
  el.newChallengeButton?.addEventListener("click", newChallenge);
  el.revealChallengeButton?.addEventListener("click", revealChallenge);
  el.explainRestartButton?.addEventListener("click", restartExplanation);
  el.explainPrevButton?.addEventListener("click", () => moveExplanationStep(-1));
  el.explainPlayButton?.addEventListener("click", toggleExplanationPlayback);
  el.explainNextButton?.addEventListener("click", () => moveExplanationStep(1));
  el.tabletLargeButton?.addEventListener("click", () => setTabletMode(true));
  el.tabletRestoreButton?.addEventListener("click", () => setTabletMode(false));
  el.tabletScreenshotButton?.addEventListener("click", exportImage);
  el.boxWindow?.querySelector(".window-title")?.addEventListener("pointerdown", (event) => beginFloatingDrag(event, el.boxWindow));
  el.activityWindow?.querySelector(".window-title")?.addEventListener("pointerdown", (event) => beginFloatingDrag(event, el.activityWindow));
  el.formulaWindow?.querySelector(".window-title")?.addEventListener("pointerdown", (event) => beginFloatingDrag(event, el.formulaWindow));
  el.animationWindow?.querySelector(".window-title")?.addEventListener("pointerdown", (event) => beginFloatingDrag(event, el.animationWindow));
  window.addEventListener("pointermove", continueFloatingDrag);
  window.addEventListener("pointerup", endFloatingDrag);
  window.addEventListener("pointercancel", endFloatingDrag);
  window.addEventListener("pointerup", refreshAllViewerControls);
  window.addEventListener("pointercancel", recoverAllViewerControls);
  window.addEventListener("blur", recoverAllViewerControls);
  el.annotationModeButton?.addEventListener("click", toggleAnnotationMode);
  document.getElementById("cinematicPlayBtn")?.addEventListener("click", toggleCinematicPlayback);
  
  const stepBtns = document.querySelectorAll("#cinematicStepBtns .step-btn");
  stepBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const stepIdx = parseInt(btn.dataset.step, 10);
      if (!isNaN(stepIdx) && window.jumpToCinematicStep) {
        window.jumpToCinematicStep(stepIdx);
      }
    });
  });

  document.getElementById("cinematicExportBtn")?.addEventListener("click", exportCinematicVideo);
  document.getElementById("cinematicExitBtn")?.addEventListener("click", stopCinematicAnimation);
  el.openFormulaButton?.addEventListener("click", openFormulaWindow);
  el.annotationClearButton?.addEventListener("click", clearAnnotations);
  for (const button of document.querySelectorAll("[data-annotation-add]")) {
    button.addEventListener("click", () => addAnnotation(button.dataset.annotationAdd));
  }
  for (const layer of document.querySelectorAll(".annotation-layer")) {
    layer.addEventListener("pointerdown", beginAnnotationDrag);
  }
  window.addEventListener("pointermove", continueAnnotationDrag);
  window.addEventListener("pointerup", endAnnotationDrag);
  window.addEventListener("pointercancel", endAnnotationDrag);
}
