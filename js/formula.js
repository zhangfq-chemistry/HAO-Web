import { el } from "./dom.js";
import { readParams, updateWindowControlLabels, angularPlainName, subscriptNumber, superscriptNumber, resizeAfterLayoutChange } from "../app.js";
import { orbitalLabel } from "../orbitals.js";

function formulaSummary(params) {
  const label = orbitalLabel(params.n, params.l, params.m);
  const radialNodes = Math.max(0, params.n - params.l - 1);
  const angularNodes = params.l;
  const orbitalType = angularPlainName(params.l, params.m);
  const nSub = subscriptNumber(params.n);
  const lSub = subscriptNumber(params.l);
  const mSup = superscriptNumber(params.m);
  return {
    label,
    radialNodes,
    angularNodes,
    main: `Ψ(r,θ,φ) = R${nSub}${lSub}(r) · Y${lSub}${mSup}(θ,φ)`,
    radial: `R${nSub}${lSub}(r) 决定离原子核不同距离处的振幅变化；当前轨道有 ${radialNodes} 个径向节点。`,
    angular: `${orbitalType} 对应的 Y${lSub}${mSup}(θ,φ) 决定轨道朝向、节面和正负相位；当前有 ${angularNodes} 个角向节点。`,
    visual: `原子轨道窗口显示 Ψ=+c 和 Ψ=-c 的等值面；轨道投影是在选定平面上看 Ψ；径向分布函数看 r²R²；电子云来自 |Ψ|² 的概率分布。`,
  };
}

function updateFormulaWindow() {
  if (!el.formulaWindow) return;
  const params = readParams();
  const summary = formulaSummary(params);
  if (el.formulaOrbitalName) el.formulaOrbitalName.textContent = summary.label;
  if (el.formulaQuantumText) el.formulaQuantumText.textContent = `n=${params.n}, l=${params.l}, m=${params.m}`;
  if (el.formulaMain) el.formulaMain.textContent = summary.main;
  if (el.formulaRadialText) el.formulaRadialText.textContent = summary.radial;
  if (el.formulaAngularText) el.formulaAngularText.textContent = summary.angular;
  if (el.formulaVisualText) el.formulaVisualText.textContent = summary.visual;
  if (el.formulaRadialNodes) el.formulaRadialNodes.textContent = String(summary.radialNodes);
  if (el.formulaAngularNodes) el.formulaAngularNodes.textContent = String(summary.angularNodes);
  if (el.formulaPhaseText) el.formulaPhaseText.textContent = `${el.positiveLobe?.checked === false ? "隐藏正相" : "正相"} / ${el.negativeLobe?.checked === false ? "隐藏负相" : "负相"}`;
}

function openFormulaWindow() {
  if (!el.formulaWindow) return;
  updateFormulaWindow();
  el.formulaWindow.classList.remove("closed", "minimized");
  el.formulaWindow.style.zIndex = "128";
  updateWindowControlLabels(el.formulaWindow);
  resizeAfterLayoutChange();
}

export { formulaSummary, updateFormulaWindow, openFormulaWindow };
