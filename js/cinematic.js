import { el } from "./dom.js";
import { formulaSummary } from "./formula.js";
import { orbitalLabel } from "../orbitals.js";
import { controls } from "./renderers.js";

let api = {
  resizeAfterLayoutChange: () => {},
  renderOrbital: () => {},
  applyPreset: () => {},
  readParams: () => ({ n: 1, l: 0, m: 0 }),
  downloadBlob: (blob, name) => {},
  getCloudPositiveObject: () => null,
  getCloudNegativeObject: () => null,
  getIsoMeshes: () => [],
  getRadialProjectionObject: () => null,
  getRelationOrbitalObject: () => null
};

export function initCinematic(appApi) {
  Object.assign(api, appApi);
}

function generationSteps() {
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
      text: "通过改变球面半径，观察波函数在空间各点处的径向分布变化。",
    },
    {
      focus: "formula",
      title: "第五步：径向与角向推导",
      text: "结合波函数公式，揭示轨道的径向分布函数与角向球面谐和函数构成。",
    }
  ];
}

export let cinematicActive = false;
let cinematicExporting = false;
let cinematicStartMs = 0;
let cinematicStepDuration = 6000;
let cinematicState = { step: 0, localProgress: 0 };
let cinematicChunks = [];
let savedUIState = null;

export function toggleCinematicPlayback() {
  if (cinematicExporting) return;
  cinematicActive = !cinematicActive;
  if (cinematicActive) cinematicStartMs = performance.now() - (cinematicState.step * cinematicStepDuration + cinematicState.localProgress * cinematicStepDuration);
}

export async function playCinematicAnimation() {
  if (cinematicActive) return;
  
  savedUIState = {
    cloud: el.cloud.checked,
    wireframe: el.wireframe.checked,
    smooth: el.smooth.checked,
    projection3d: el.projection3d.checked,
    relationMode: el.relationMode?.checked,
    scanSliceZ: el.scanSliceZ?.value
  };
  
  document.body.classList.add("cinematic-mode");
  
  if (el.mainWindow) {
    el.mainWindow.style.setProperty("position", "fixed", "important");
    el.mainWindow.style.setProperty("top", "0", "important");
    el.mainWindow.style.setProperty("left", "0", "important");
    el.mainWindow.style.setProperty("width", "100vw", "important");
    el.mainWindow.style.setProperty("height", "100vh", "important");
    el.mainWindow.style.setProperty("z-index", "1000", "important");
  }
  if (el.viewer) {
    el.viewer.style.setProperty("position", "fixed", "important");
    el.viewer.style.setProperty("top", "0", "important");
    el.viewer.style.setProperty("left", "0", "important");
    el.viewer.style.setProperty("width", "100vw", "important");
    el.viewer.style.setProperty("height", "100vh", "important");
    el.viewer.style.setProperty("background", "#000000", "important");
  }
  
  const controls = api.getControls();
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.8;
  
  el.cloud.checked = true;
  el.wireframe.checked = true;
  el.smooth.checked = true;
  el.projection3d.checked = true;
  
  if (el.relationMode && !el.relationMode.checked) {
    el.relationMode.checked = true;
    el.relationMode.dispatchEvent(new Event("input"));
  }
  
  await api.renderOrbital();
  
  resetCinematicStateToStart();
  
  // Enter Quad View mode for animation
  const quadBtn = document.querySelector('.dock-btn[data-view="quad"]');
  if (quadBtn) quadBtn.click();
  
  cinematicActive = true;
  cinematicStepDuration = 6000;
  cinematicStartMs = performance.now();
  cinematicState.step = 0;
  
  api.resizeAfterLayoutChange();
  const overlay = document.getElementById("cinematicOverlay");
  if (overlay) overlay.classList.add("visible");
  
  updateCinematicOverlay();
}

export function stopCinematicAnimation() {
  cinematicActive = false;
  document.body.classList.remove("cinematic-mode");
  
  // Exit Quad View mode, go back to orbital
  const orbitalBtn = document.querySelector('.dock-btn[data-view="orbital"]');
  if (orbitalBtn) orbitalBtn.click();
  
  if (el.mainWindow) {
    el.mainWindow.style.removeProperty("position");
    el.mainWindow.style.removeProperty("top");
    el.mainWindow.style.removeProperty("left");
    el.mainWindow.style.removeProperty("width");
    el.mainWindow.style.removeProperty("height");
    el.mainWindow.style.removeProperty("z-index");
  }
  if (el.viewer) {
    el.viewer.style.removeProperty("position");
    el.viewer.style.removeProperty("top");
    el.viewer.style.removeProperty("left");
    el.viewer.style.removeProperty("width");
    el.viewer.style.removeProperty("height");
    el.viewer.style.removeProperty("background");
  }

  api.resizeAfterLayoutChange();
  const overlay = document.getElementById("cinematicOverlay");
  if (overlay) overlay.classList.remove("visible");
  
  const formulaOverlay = document.getElementById("cinematicFormula");
  if (formulaOverlay) formulaOverlay.classList.remove("visible");

  setRadialWindowCinematic(false);

  if (savedUIState) {
    el.cloud.checked = savedUIState.cloud;
    el.wireframe.checked = savedUIState.wireframe;
    el.smooth.checked = savedUIState.smooth;
    el.projection3d.checked = savedUIState.projection3d;
    if (el.relationMode) el.relationMode.checked = savedUIState.relationMode;
    if (el.scanSliceZ) el.scanSliceZ.value = savedUIState.scanSliceZ;
    savedUIState = null;
  }
  
  controls.autoRotate = false;
  if (api.renderOrbital) {
    api.renderOrbital();
  }
}

function setRadialWindowCinematic(active) {
  // Radial graph is now rendered as a 3D object in the main scene.
  // We no longer need to manipulate the UI windows during cinematic mode for this.
}

function updateCinematicOverlay() {
  const steps = generationSteps();
  const stepData = steps[cinematicState.step];
  if (!stepData) return;
  
  document.getElementById("cinematicTitle").textContent = stepData.title;
  document.getElementById("cinematicText").textContent = stepData.text;
  
  const totalSteps = generationSteps().length;
  const overallProgress = (cinematicState.step + cinematicState.localProgress) / totalSteps;
  const progressFill = document.getElementById("cinematicProgressFill");
  if (progressFill) progressFill.style.width = (overallProgress * 100) + "%";
  
  const formulaOverlay = document.getElementById("cinematicFormula");
  if (cinematicState.step === 4) {
    formulaOverlay.classList.add("visible");
    const params = api.readParams();
    const summary = formulaSummary(params);
    document.getElementById("cinematicFormulaEq").innerHTML = summary.main;
    document.getElementById("cinematicFormulaRadial").innerHTML = "R(r): 径向部分";
    document.getElementById("cinematicFormulaAngular").innerHTML = "Y(θ,φ): 角向部分";
  } else {
    formulaOverlay.classList.remove("visible");
  }
}

function resetCinematicStateToStart() {
  const cloudPos = api.getCloudPositiveObject();
  const cloudNeg = api.getCloudNegativeObject();
  const isoMeshes = api.getIsoMeshes();
  if (cloudPos) cloudPos.visible = false;
  if (cloudNeg) cloudNeg.visible = false;
  isoMeshes.forEach(m => m.traverse(c => {
    if (c.material) {
      c.material.transparent = true;
      c.material.opacity = 0;
      c.material.needsUpdate = true;
    }
  }));
  const scanSliceZ = document.getElementById("scanSliceZInput");
  if (scanSliceZ) {
    scanSliceZ.value = 100;
    if (window.positiveObject && window.positiveObject.updateSliceZ) window.positiveObject.updateSliceZ(100);
    if (window.negativeObject && window.negativeObject.updateSliceZ) window.negativeObject.updateSliceZ(100);
    if (window.globalXYClipPlane) window.globalXYClipPlane.constant = 100;
  }
  setRadialWindowCinematic(false);
}

export function processCinematicTick(timeMs) {
  if (!cinematicActive) return;
  
  const totalSteps = generationSteps().length;
  let elapsed = timeMs - cinematicStartMs;
  let newStep = Math.floor(elapsed / cinematicStepDuration);

  // If we are about to leave step 2, but the slice hasn't reached the end, hold the timeline!
  if (cinematicState.step === 2 && newStep > 2) {
    const scanSliceZ = document.getElementById("scanSliceZInput");
    if (scanSliceZ && Number(scanSliceZ.value) > -100) {
      elapsed = 3 * cinematicStepDuration - 1;
      newStep = 2;
      cinematicStartMs = timeMs - elapsed; // Shift start time so it doesn't skip later
    }
  }

  // If we are about to leave step 3, but the radius scan hasn't reached the end, hold the timeline!
  if (cinematicState.step === 3 && newStep > 3) {
    const scanRadius = document.getElementById("scanRadiusInput");
    if (scanRadius && Number(scanRadius.value) < 100) {
      elapsed = 4 * cinematicStepDuration - 1;
      newStep = 3;
      cinematicStartMs = timeMs - elapsed;
    }
  }
  
  if (newStep >= totalSteps) {
    if (!cinematicExporting) {
      cinematicStartMs = timeMs;
      newStep = 0;
      resetCinematicStateToStart();
    } else {
      newStep = totalSteps - 1;
      cinematicState.localProgress = 1;
    }
  } else {
    cinematicState.localProgress = (elapsed % cinematicStepDuration) / cinematicStepDuration;
  }
  
  if (newStep !== cinematicState.step) {
    cinematicState.step = newStep;
    if (newStep === 2) window._cinematicLastSliceMs = 0;
    if (newStep === 3) {
      window._cinematicLastRadiusMs = 0;
      if (typeof document !== "undefined") {
        const scanRadius = document.getElementById("scanRadiusInput");
        if (scanRadius) {
          scanRadius.value = 0;
          if (window.positiveObject && window.positiveObject.updateRadiusScan) window.positiveObject.updateRadiusScan(0);
          if (window.negativeObject && window.negativeObject.updateRadiusScan) window.negativeObject.updateRadiusScan(0);
        }
        const scanSliceZ = document.getElementById("scanSliceZInput");
        if (scanSliceZ) {
          scanSliceZ.value = 100;
          if (window.positiveObject && window.positiveObject.updateSliceZ) window.positiveObject.updateSliceZ(100);
          if (window.negativeObject && window.negativeObject.updateSliceZ) window.negativeObject.updateSliceZ(100);
          if (window.globalXYClipPlane) window.globalXYClipPlane.constant = 100;
        }
      }
    }
    
    setRadialWindowCinematic(newStep === 3);
    
    updateCinematicOverlay();
  }
  
  const overallProgress = (cinematicState.step + cinematicState.localProgress) / totalSteps;
  const progressFill = document.getElementById("cinematicProgressFill");
  if (progressFill) progressFill.style.width = (overallProgress * 100) + "%";
  
  const p = cinematicState.localProgress;
  const step = cinematicState.step;
  const smoothP = p * p * (3 - 2 * p);
  
  const cloudPos = api.getCloudPositiveObject();
  const cloudNeg = api.getCloudNegativeObject();
  const isoMeshes = api.getIsoMeshes();
  const radialGraph = api.getRadialProjectionObject ? api.getRadialProjectionObject() : null;
  const relationOrbital = api.getRelationOrbitalObject ? api.getRelationOrbitalObject() : null;

  if (step === 0) {
    if (radialGraph) radialGraph.visible = false;
    if (relationOrbital) relationOrbital.visible = false;
    if (cloudPos) {
      cloudPos.visible = true;
      const totalPoints = cloudPos.geometry.attributes.position.count;
      const drawCount = Math.floor(totalPoints * smoothP);
      cloudPos.geometry.setDrawRange(0, drawCount);
      if (cloudPos.material.uniforms?.uCurrentDrawCount) cloudPos.material.uniforms.uCurrentDrawCount.value = drawCount;
      if (cloudPos.material.uniforms?.uGlobalOpacity) cloudPos.material.uniforms.uGlobalOpacity.value = Math.min(1, smoothP * 2);
    }
    if (cloudNeg) {
      cloudNeg.visible = true;
      const totalPoints = cloudNeg.geometry.attributes.position.count;
      const drawCount = Math.floor(totalPoints * smoothP);
      cloudNeg.geometry.setDrawRange(0, drawCount);
      if (cloudNeg.material.uniforms?.uCurrentDrawCount) cloudNeg.material.uniforms.uCurrentDrawCount.value = drawCount;
      if (cloudNeg.material.uniforms?.uGlobalOpacity) cloudNeg.material.uniforms.uGlobalOpacity.value = Math.min(1, smoothP * 2);
    }
    isoMeshes.forEach(m => {
      m.visible = false;
      m.traverse(c => {
        if (c.material) c.material.opacity = 0;
      });
    });
  }
  else if (step === 1) {
    if (radialGraph) radialGraph.visible = false;
    if (relationOrbital) relationOrbital.visible = false;
    if (cloudPos) {
      cloudPos.visible = true;
      cloudPos.geometry.setDrawRange(0, Infinity);
      if (cloudPos.material.uniforms?.uCurrentDrawCount) cloudPos.material.uniforms.uCurrentDrawCount.value = 9999999.0;
      if (cloudPos.material.uniforms?.uGlobalOpacity) cloudPos.material.uniforms.uGlobalOpacity.value = 1 - smoothP;
    }
    if (cloudNeg) {
      cloudNeg.visible = true;
      cloudNeg.geometry.setDrawRange(0, Infinity);
      if (cloudNeg.material.uniforms?.uCurrentDrawCount) cloudNeg.material.uniforms.uCurrentDrawCount.value = 9999999.0;
      if (cloudNeg.material.uniforms?.uGlobalOpacity) cloudNeg.material.uniforms.uGlobalOpacity.value = 1 - smoothP;
    }
    isoMeshes.forEach(m => {
      m.visible = true;
      m.traverse(c => {
        if (c.name === "integratedProjectionMountain" || c.name === "integratedProjectionBox") {
           c.material.opacity = 0;
        } else if (c.isMesh) {
           c.material.opacity = smoothP;
        }
      });
    });
  }
  else if (step === 2) {
    if (radialGraph) radialGraph.visible = false;
    if (relationOrbital) relationOrbital.visible = false;
    if (cloudPos) cloudPos.visible = false;
    if (cloudNeg) cloudNeg.visible = false;
      if (typeof document !== "undefined") {
        const scanSliceZ = document.getElementById("scanSliceZInput");
        if (scanSliceZ) {
          // Exactly as requested: step by 5 (val -= 5) every 50ms, decoupling from 'p'
          // This avoids lag-induced huge jumps and matches the smooth manual play button.
          if (!window._cinematicLastSliceMs) window._cinematicLastSliceMs = timeMs;
          if (timeMs - window._cinematicLastSliceMs >= 50) {
            let val = Number(scanSliceZ.value);
            if (val > -100) {
              val -= 5;
              if (val < -100) val = -100;
              scanSliceZ.value = val;
              // Bypassing input event to save CPU, directly updating the volume shader!
              if (window.positiveObject && window.positiveObject.updateSliceZ) {
                  window.positiveObject.updateSliceZ(val);
              }
              if (window.negativeObject && window.negativeObject.updateSliceZ) {
                  window.negativeObject.updateSliceZ(val);
              }
              // Also update the global clipping plane so everything else respects it
              window.globalXYClipPlane.constant = val;
            }
            window._cinematicLastSliceMs = timeMs;
          }
        }
      }
    
    const currentIsoMeshes = api.getIsoMeshes();
    currentIsoMeshes.forEach(m => m.traverse(c => {
      if (c.name === "integratedProjectionMountain") {
         if (c.material) c.material.opacity = 1;
      } else if (c.name === "integratedProjectionBox") {
         if (c.material) c.material.opacity = 0.2;
      } else if (c.isMesh) {
         c.material.opacity = 1;
      }
    }));
  }
  else if (step === 3) {
    if (radialGraph) radialGraph.visible = true;
    if (relationOrbital) relationOrbital.visible = true;
    if (cloudPos) cloudPos.visible = false;
    if (cloudNeg) cloudNeg.visible = false;
    
    if (typeof document !== "undefined") {
      const scanRadius = document.getElementById("scanRadiusInput");
      if (scanRadius) {
        if (!window._cinematicLastRadiusMs) window._cinematicLastRadiusMs = timeMs;
        if (timeMs - window._cinematicLastRadiusMs >= 50) {
          let val = Number(scanRadius.value);
          if (val < 100) {
            val += 2;
            if (val > 100) val = 100;
              scanRadius.value = val;
              if (window.positiveObject && window.positiveObject.updateRadiusScan) {
                  window.positiveObject.updateRadiusScan(val);
              }
              if (window.negativeObject && window.negativeObject.updateRadiusScan) {
                  window.negativeObject.updateRadiusScan(val);
              }
          }
          window._cinematicLastRadiusMs = timeMs;
        }
      }
    }

    const currentIsoMeshes = api.getIsoMeshes();
    currentIsoMeshes.forEach(m => m.traverse(c => {
      if (c.name === "integratedProjectionMountain" || c.name === "integratedProjectionBox") {
         if (c.material) c.material.opacity = 0;
      } else if (c.isMesh) {
         c.material.opacity = 1;
      }
    }));
  }
  else if (step === 4) {
    if (radialGraph) radialGraph.visible = false;
    if (relationOrbital) relationOrbital.visible = false;
    if (cloudPos) cloudPos.visible = false;
    if (cloudNeg) cloudNeg.visible = false;
    isoMeshes.forEach(m => m.traverse(c => {
      if (c.name === "integratedProjectionMountain" || c.name === "integratedProjectionBox") {
         if (c.material) c.material.opacity = 0;
      } else if (c.isMesh) {
         c.material.opacity = 1;
      }
    }));
  }

  // Post-tick cleanup: Ensure dynamically recreated objects (like relation markers and radial graph) 
  // strictly adhere to the cinematic visibility rules, overriding any side-effects from input events.
  const currentRelationOrbital = api.getRelationOrbitalObject ? api.getRelationOrbitalObject() : null;
  if (currentRelationOrbital) {
    currentRelationOrbital.visible = (step === 3);
  }
  const currentRadialGraph = api.getRadialProjectionObject ? api.getRadialProjectionObject() : null;
  if (currentRadialGraph) {
    currentRadialGraph.visible = (step === 3);
  }
}

export async function exportCinematicVideo() {
  const canvas = el.viewer.querySelector("canvas");
  if (!canvas?.captureStream || typeof MediaRecorder === "undefined") {
    alert("当前浏览器不支持直接导出视频。");
    return;
  }
  if (cinematicExporting) return;
  
  if (!cinematicActive) {
    await playCinematicAnimation();
  }
  
  cinematicExporting = true;
  cinematicStepDuration = 4000;
  cinematicStartMs = performance.now();
  cinematicState.step = 0;
  cinematicChunks = [];
  
  const stream = canvas.captureStream(30);
  const recorder = new MediaRecorder(stream, { videoBitsPerSecond: 6000000 });
  
  document.getElementById("cinematicExportBtn").textContent = "录制中...";
  document.getElementById("cinematicPlayBtn").disabled = true;
  document.getElementById("cinematicExitBtn").disabled = true;
  
  const stopped = new Promise((resolve, reject) => {
    recorder.ondataavailable = (event) => {
      if (event.data?.size) cinematicChunks.push(event.data);
    };
    recorder.onerror = () => reject(recorder.error);
    recorder.onstop = () => resolve(new Blob(cinematicChunks, { type: recorder.mimeType || "video/webm" }));
  });
  
  recorder.start(250);
  
  const totalDuration = cinematicStepDuration * generationSteps().length;
  await new Promise(r => setTimeout(r, totalDuration + 500));
  
  if (recorder.state !== "inactive") recorder.stop();
  const blob = await stopped;
  const params = api.readParams();
  const name = `HAO-Cinematic-${orbitalLabel(params.n, params.l, params.m)}.webm`;
  api.downloadBlob(blob, name);
  
  document.getElementById("cinematicExportBtn").textContent = "导出视频";
  document.getElementById("cinematicPlayBtn").disabled = false;
  document.getElementById("cinematicExitBtn").disabled = false;
  cinematicExporting = false;
  stopCinematicAnimation();
}
