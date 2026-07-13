import { recoverAllViewerControls } from "./renderers.js";
import { el } from "./dom.js";

const sketchState = {
  drawing: false,
  erasing: false,
  dragging: false,
  dragPointerId: null,
  dragOffsetX: 0,
  dragOffsetY: 0,
  strokes: [],
  currentStroke: null,
};

function sketchPointFromEvent(event) {
  const rect = el.sketchCanvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) / Math.max(1, rect.width),
    y: (event.clientY - rect.top) / Math.max(1, rect.height),
  };
}

function drawSketchStroke(ctx, stroke, width, height) {
  if (!stroke.points.length) return;
  ctx.save();
  ctx.globalCompositeOperation = stroke.mode === "erase" ? "destination-out" : "source-over";
  ctx.strokeStyle = stroke.color;
  ctx.lineWidth = stroke.size;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  const first = stroke.points[0];
  ctx.moveTo(first.x * width, first.y * height);
  for (const point of stroke.points.slice(1)) {
    ctx.lineTo(point.x * width, point.y * height);
  }
  if (stroke.points.length === 1) {
    ctx.lineTo(first.x * width + 0.01, first.y * height + 0.01);
  }
  ctx.stroke();
  ctx.restore();
}

function redrawSketchCanvas() {
  const canvas = el.sketchCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const stroke of sketchState.strokes) {
    drawSketchStroke(ctx, stroke, canvas.width, canvas.height);
  }
  if (sketchState.currentStroke) {
    drawSketchStroke(ctx, sketchState.currentStroke, canvas.width, canvas.height);
  }
}

function resizeSketchCanvas() {
  const canvas = el.sketchCanvas;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  if (rect.width < 2 || rect.height < 2) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(320, Math.floor(rect.width * ratio));
  const height = Math.max(220, Math.floor(rect.height * ratio));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    redrawSketchCanvas();
  }
}

function setSketchMode(erasing) {
  sketchState.erasing = erasing;
  el.sketchPen?.classList.toggle("active", !erasing);
  el.sketchEraser?.classList.toggle("active", erasing);
}

function beginSketchStroke(event) {
  if (!el.sketchCanvas) return;
  event.preventDefault();
  el.sketchCanvas.setPointerCapture?.(event.pointerId);
  sketchState.drawing = true;
  sketchState.currentStroke = {
    color: el.sketchColor?.value || "#ffffff",
    size: Number(el.sketchSize?.value || 5) * (Math.min(window.devicePixelRatio || 1, 2)),
    mode: sketchState.erasing ? "erase" : "draw",
    points: [sketchPointFromEvent(event)],
  };
  redrawSketchCanvas();
}

function continueSketchStroke(event) {
  if (!sketchState.drawing || !sketchState.currentStroke) return;
  event.preventDefault();
  sketchState.currentStroke.points.push(sketchPointFromEvent(event));
  redrawSketchCanvas();
}

function endSketchStroke(event) {
  if (!sketchState.drawing || !sketchState.currentStroke) return;
  event.preventDefault();
  sketchState.strokes.push(sketchState.currentStroke);
  sketchState.currentStroke = null;
  sketchState.drawing = false;
  redrawSketchCanvas();
}

function bindSketchPanel() {
  if (!el.sketchCanvas) return;
  el.sketchCanvas.addEventListener("pointerdown", beginSketchStroke);
  el.sketchCanvas.addEventListener("pointermove", continueSketchStroke);
  el.sketchCanvas.addEventListener("pointerup", endSketchStroke);
  el.sketchCanvas.addEventListener("pointercancel", endSketchStroke);
  el.sketchPen?.addEventListener("click", () => setSketchMode(false));
  el.sketchEraser?.addEventListener("click", () => setSketchMode(true));
  el.sketchClear?.addEventListener("click", () => {
    sketchState.strokes = [];
    sketchState.currentStroke = null;
    redrawSketchCanvas();
  });
  el.sketchWindow?.querySelector(".window-title")?.addEventListener("pointerdown", beginSketchDrag);
  window.addEventListener("pointermove", continueSketchDrag);
  window.addEventListener("pointerup", endSketchDrag);
  window.addEventListener("pointercancel", endSketchDrag);
  setSketchMode(false);
}

let deps = {};
function registerSketchDeps(d) {
  deps = d;
}

function openSketchWindow() {
  if (!el.sketchWindow) return;
  el.sketchWindow.classList.remove("closed", "minimized");
  el.sketchWindow.style.zIndex = "120";
  if (deps.updateWindowControlLabels) deps.updateWindowControlLabels(el.sketchWindow);
  if (deps.resizeAfterLayoutChange) deps.resizeAfterLayoutChange();
}

function beginSketchDrag(event) {
  const win = el.sketchWindow;
  if (!win || win.classList.contains("maximized") || event.target.closest(".window-controls")) return;
  if (event.pointerType !== "mouse" && !event.isPrimary) return;
  event.preventDefault();
  const rect = win.getBoundingClientRect();
  sketchState.dragging = true;
  sketchState.dragPointerId = event.pointerId;
  sketchState.dragOffsetX = event.clientX - rect.left;
  sketchState.dragOffsetY = event.clientY - rect.top;
  event.currentTarget?.setPointerCapture?.(event.pointerId);
  win.style.zIndex = "130";
}

function continueSketchDrag(event) {
  const win = el.sketchWindow;
  if (!win || !sketchState.dragging) return;
  if (sketchState.dragPointerId !== null && event.pointerId !== sketchState.dragPointerId) return;
  event.preventDefault();
  const maxLeft = window.innerWidth - Math.min(120, win.offsetWidth);
  const maxTop = window.innerHeight - 32;
  const left = Math.max(0, Math.min(maxLeft, event.clientX - sketchState.dragOffsetX));
  const top = Math.max(0, Math.min(maxTop, event.clientY - sketchState.dragOffsetY));
  win.style.left = `${left}px`;
  win.style.top = `${top}px`;
  win.style.right = "auto";
  win.style.bottom = "auto";
}

function endSketchDrag() {
  sketchState.dragging = false;
  sketchState.dragPointerId = null;
  recoverAllViewerControls();
}

export { openSketchWindow, bindSketchPanel, redrawSketchCanvas, resizeSketchCanvas, setSketchMode, beginSketchDrag, continueSketchDrag, endSketchDrag, sketchState, registerSketchDeps };
