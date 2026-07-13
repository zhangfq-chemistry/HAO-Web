import { el } from "./dom.js";

const predictSketchState = {
  drawing: false,
  erasing: false,
  strokes: [],
  currentStroke: null,
};

function sketchPointFromEvent(event) {
  const rect = el.predictCanvas.getBoundingClientRect();
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

function redrawPredictCanvas() {
  const canvas = el.predictCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const stroke of predictSketchState.strokes) {
    drawSketchStroke(ctx, stroke, canvas.width, canvas.height);
  }
  if (predictSketchState.currentStroke) {
    drawSketchStroke(ctx, predictSketchState.currentStroke, canvas.width, canvas.height);
  }
}

function resizePredictCanvas() {
  const canvas = el.predictCanvas;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  if (rect.width < 2 || rect.height < 2) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(10, Math.floor(rect.width * ratio));
  const height = Math.max(10, Math.floor(rect.height * ratio));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    redrawPredictCanvas();
  }
}

function setPredictSketchMode(erasing) {
  predictSketchState.erasing = erasing;
  el.predictPenButton?.classList.toggle("active", !erasing);
  el.predictEraserButton?.classList.toggle("active", erasing);
}

function beginPredictStroke(event) {
  if (!el.predictCanvas) return;
  event.preventDefault();
  el.predictCanvas.setPointerCapture?.(event.pointerId);
  predictSketchState.drawing = true;
  predictSketchState.currentStroke = {
    color: el.predictColorInput?.value || "#ffffff",
    size: Number(el.predictSizeInput?.value || 5) * (Math.min(window.devicePixelRatio || 1, 2)),
    mode: predictSketchState.erasing ? "erase" : "draw",
    points: [sketchPointFromEvent(event)],
  };
  redrawPredictCanvas();
}

function continuePredictStroke(event) {
  if (!predictSketchState.drawing || !predictSketchState.currentStroke) return;
  event.preventDefault();
  predictSketchState.currentStroke.points.push(sketchPointFromEvent(event));
  redrawPredictCanvas();
}

function endPredictStroke(event) {
  if (!predictSketchState.drawing || !predictSketchState.currentStroke) return;
  event.preventDefault();
  predictSketchState.strokes.push(predictSketchState.currentStroke);
  predictSketchState.currentStroke = null;
  predictSketchState.drawing = false;
  redrawPredictCanvas();
}

function clearPredictCanvas() {
  predictSketchState.strokes = [];
  predictSketchState.currentStroke = null;
  redrawPredictCanvas();
  if (el.predictResultImage) {
    el.predictResultImage.style.backgroundImage = "none";
  }
}

function bindPredictSketchPanel() {
  if (!el.predictCanvas) return;
  el.predictCanvas.addEventListener("pointerdown", beginPredictStroke);
  el.predictCanvas.addEventListener("pointermove", continuePredictStroke);
  el.predictCanvas.addEventListener("pointerup", endPredictStroke);
  el.predictCanvas.addEventListener("pointercancel", endPredictStroke);
  el.predictPenButton?.addEventListener("click", () => setPredictSketchMode(false));
  el.predictEraserButton?.addEventListener("click", () => setPredictSketchMode(true));
  el.clearPredictButton?.addEventListener("click", clearPredictCanvas);
  setPredictSketchMode(false);
}

export { bindPredictSketchPanel, resizePredictCanvas, clearPredictCanvas, redrawPredictCanvas, predictSketchState };
