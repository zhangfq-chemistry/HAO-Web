import { el } from "./dom.js";
import { formulaSummary } from "./formula.js";
import { orbitalLabel } from "../orbitals.js";
import { controls } from "./renderers.js";
import * as THREE from "three";

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
  getRelationOrbitalObject: () => null,
  getAngularObjects: () => [],
  getScene: () => null,
  getGlobalXYClipPlane: () => null,
  getRadius: () => 5,
  setDrawRange: (start, count) => {},
  rebuildRelationSliceCapHighQuality: () => {},
  rebuildRelationSliceCapFastSeparated: () => {},
  updateRelationRadiusScanOnly: () => {}
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
let cinematicState = { step: 0, localProgress: 0 };
let cinematicAngularGroup = null;

function getStepDurations() {
  // Configurable durations for each step (in milliseconds)
  // Step 0: Overview
  // Step 1: Transparency mapping
  // Step 2: Z-axis slice scanning
  // Step 3: Radial distribution scan
  // Step 4: Formulas
  return [8000, 8000, 18000, 24000, 10000];
}

function getCinematicTimeline(elapsed) {
  const durs = getStepDurations();
  let acc = 0;
  for (let i = 0; i < durs.length; i++) {
    if (elapsed < acc + durs[i]) {
      return { step: i, progress: (elapsed - acc) / durs[i], stepStart: acc, stepDur: durs[i] };
    }
    acc += durs[i];
  }
  return { step: durs.length, progress: 1, stepStart: acc, stepDur: 0 };
}
let cinematicChunks = [];
let savedUIState = null;

export function toggleCinematicPlayback() {
  if (cinematicExporting) return;
  
  // If we are at the end, restart from the beginning
  const totalSteps = typeof generationSteps !== 'undefined' ? generationSteps().length : 5;
  if (!cinematicActive && cinematicState.step >= totalSteps - 1 && cinematicState.localProgress >= 1) {
    cinematicStartMs = performance.now();
    cinematicState.step = 0;
    cinematicState.localProgress = 0;
    resetCinematicStateToStart();
  }

  cinematicActive = !cinematicActive;
  
  const btn = document.getElementById("cinematicPlayBtn");
  if (btn) btn.textContent = cinematicActive ? "暂停" : "播放";

  if (cinematicActive) {
    const durs = getStepDurations();
    let acc = 0;
    for (let i = 0; i < cinematicState.step; i++) acc += durs[i];
    cinematicStartMs = performance.now() - (acc + cinematicState.localProgress * durs[cinematicState.step]);
  } else {
    // When pausing, redraw the high-quality mountains ONLY if we are in step 2 (where they are visible)
    if (typeof api !== "undefined" && api.updateProjectionsHighQuality) {
      if (cinematicState.step === 2) {
        api.updateProjectionsHighQuality();
      }
    }
  }
}

export function jumpToCinematicStep(stepIndex) {
  if (cinematicExporting) return;
  const durs = getStepDurations();
  if (stepIndex < 0 || stepIndex >= durs.length) return;
  
  let acc = 0;
  for (let i = 0; i < stepIndex; i++) acc += durs[i];
  
  cinematicStartMs = performance.now() - acc;
  cinematicState.step = stepIndex;
  cinematicState.localProgress = 0;
  
  resetCinematicStateToStart();
  
  if (!cinematicActive) {
    toggleCinematicPlayback();
  }
}

export async function playCinematicAnimation() {
  if (cinematicActive) return;
  
  const btn = document.getElementById("cinematicPlayBtn");
  if (btn) btn.textContent = "暂停";
  
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
  
  const angularObjects = api.getAngularObjects ? api.getAngularObjects() : [];
  if (angularObjects.length > 0) {
    cinematicAngularGroup = new THREE.Group();
    cinematicAngularGroup.name = "cinematicAngularGroup";
    angularObjects.forEach(obj => {
      const clone = obj.clone();
      
      if (clone.material) {
        clone.material = clone.material.clone();
        clone.material.side = THREE.DoubleSide; // ensure inside is visible during scan
        clone.userData.uThetaProgress = { value: 0.0 };
        clone.userData.uPhiProgress = { value: 0.0 };
        clone.material.onBeforeCompile = (shader) => {
          shader.uniforms.uThetaProgress = clone.userData.uThetaProgress;
          shader.uniforms.uPhiProgress = clone.userData.uPhiProgress;
          
          shader.vertexShader = `
            varying vec3 vLocalPosAngular;
            ${shader.vertexShader}
          `.replace(
            `#include <begin_vertex>`,
            `
            #include <begin_vertex>
            vLocalPosAngular = position;
            `
          );
          
          shader.fragmentShader = `
            varying vec3 vLocalPosAngular;
            uniform float uThetaProgress;
            uniform float uPhiProgress;
            ${shader.fragmentShader}
          `.replace(
            `#include <clipping_planes_fragment>`,
            `
            #include <clipping_planes_fragment>
            
            vec3 pAng = normalize(vLocalPosAngular);
            float thetaAng = acos(pAng.y);
            float phiAng = atan(pAng.z, pAng.x);
            if (phiAng < 0.0) phiAng += 2.0 * 3.14159265359;
            
            float phiMod = mod(phiAng, 3.14159265359);
            // Thick meridian slice (0.3 rad)
            bool isMeridian = (phiMod <= 0.3 || phiMod >= 3.14159265359 - 0.3);
            
            if (uPhiProgress < 0.001) {
               if (!isMeridian) discard;
               if (thetaAng > uThetaProgress * 3.14159265359) discard;
            } else {
               if (!isMeridian && phiAng > uPhiProgress * 2.0 * 3.14159265359) discard;
            }
            `
          );
        };
      }
      
      clone.scale.setScalar(1); 
      cinematicAngularGroup.add(clone);
    });
    cinematicAngularGroup.scale.setScalar(0.001);
    cinematicAngularGroup.visible = false;
    const scene = api.getScene ? api.getScene() : null;
    if (scene) scene.add(cinematicAngularGroup);
  }

  resetCinematicStateToStart();
  
  // Enter Quad View mode for animation
  const quadBtn = document.querySelector('.dock-btn[data-view="quad"]');
  if (quadBtn) quadBtn.click();
  
  cinematicActive = true;
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
  
  if (cinematicAngularGroup) {
    const scene = api.getScene ? api.getScene() : null;
    if (scene) scene.remove(cinematicAngularGroup);
    cinematicAngularGroup = null;
  }
  
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
  isoMeshes.forEach(m => {
    if (m.name === "integratedProjection3DGroup") {
      m.position.set(0, 0, 0);
    }
    m.traverse(c => {
      if (c.material) {
        c.material.transparent = true;
        c.material.opacity = 0;
        c.material.needsUpdate = true;
      }
      c.position.set(0, 0, 0);
    });
  });
  const scanSliceZ = document.getElementById("scanSliceZInput");
  if (scanSliceZ) {
    scanSliceZ.value = 100;
    scanSliceZ.dispatchEvent(new Event('input'));
  }
  setRadialWindowCinematic(false);
}

export function processCinematicTick(timeMs) {
  if (!cinematicActive) return;
  
  const totalSteps = generationSteps().length;
  let elapsed = timeMs - cinematicStartMs;
  let timeline = getCinematicTimeline(elapsed);
  let newStep = timeline.step;

  // If we are about to leave step 2, but the slice hasn't reached the end, hold the timeline!
  if (cinematicState.step === 2 && newStep > 2) {
    const scanSliceZ = document.getElementById("scanSliceZInput");
    if (scanSliceZ && Number(scanSliceZ.value) > 1) {
      const durs = getStepDurations();
      elapsed = timeline.stepStart - 1;
      timeline = getCinematicTimeline(elapsed);
      newStep = 2;
      cinematicStartMs = timeMs - elapsed; // Shift start time so it doesn't skip later
    }
  }

  // If we are about to leave step 3, but the radius scan hasn't reached the end, hold the timeline!
  if (cinematicState.step === 3 && newStep > 3) {
    const scanRadius = document.getElementById("scanRadiusInput");
    if (scanRadius && Number(scanRadius.value) < 100) {
      elapsed = timeline.stepStart - 1;
      timeline = getCinematicTimeline(elapsed);
      newStep = 3;
      cinematicStartMs = timeMs - elapsed;
    }
  }
  
  if (newStep >= totalSteps) {
    if (cinematicExporting) {
      cinematicState.step = totalSteps - 1;
      cinematicState.localProgress = 1;
      updateCinematicOverlay();
      return;
    }
    
    // Stop at the end of the last step
    cinematicState.step = totalSteps - 1;
    cinematicState.localProgress = 1;
    updateCinematicOverlay();
    
    // Auto-pause when reaching the end
    cinematicActive = false;
    const btn = document.getElementById("cinematicPlayBtn");
    if (btn) btn.textContent = "播放";
    return;
  }
  
  const previousStep = cinematicState.step;
  cinematicState.step = newStep;
  cinematicState.localProgress = timeline.progress;
  updateCinematicOverlay();
  if (previousStep !== 3 && newStep === 3 && api.updateProjectionsHighQuality) {
    api.updateProjectionsHighQuality();
    if (api.rebuildRelationSliceCapHighQuality) api.rebuildRelationSliceCapHighQuality();
    if (api.updateRelationRadiusScanOnly) api.updateRelationRadiusScanOnly();
  }
  
  const p = cinematicState.localProgress;
  const step = cinematicState.step;
  const smoothP = p * p * (3 - 2 * p);
  
  if (step === 2) {
    const scanSliceZ = document.getElementById("scanSliceZInput");
    if (scanSliceZ && typeof api !== "undefined" && api.getGlobalXYClipPlane && api.getRadius) {
      let val = 100 - smoothP * 100;
      if (Math.abs(Number(scanSliceZ.value) - val) > 0.01) {
        scanSliceZ.value = val;
        const plane = api.getGlobalXYClipPlane();
        plane.constant = (val / 100) * api.getRadius();
        if (api.updateProjectionsFast) {
          api.updateProjectionsFast();
        }
        if (api.rebuildRelationSliceCapFastSeparated) {
          api.rebuildRelationSliceCapFastSeparated();
        }
      }
    }
  } else if (step === 3) {
    const scanRadius = document.getElementById("scanRadiusInput");
    if (scanRadius) {
      let val = smoothP * 100;
      if (val > 100) val = 100;
      if (Math.abs(Number(scanRadius.value) - val) > 0.01) {
        scanRadius.value = val;
        if (api.updateRelationRadiusScanOnly) api.updateRelationRadiusScanOnly();
      }
    }
  }

  applyCinematicVisualState();
}

export function applyCinematicVisualState() {
  if (!document.body.classList.contains("cinematic-mode")) return;
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
    if (cinematicAngularGroup) cinematicAngularGroup.visible = false;
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
      m.visible = true;
      m.traverse(c => {
        if (c.name === "integratedProjectionMountain" || c.name === "integratedProjectionBox" || c.name === "integratedProjectionFlat") {
          c.visible = false;
        }
        if (c.material) {
          c.material.opacity = 0;
        }
      });
    });
  }
  else if (step === 1) {
    if (radialGraph) radialGraph.visible = false;
    if (relationOrbital) relationOrbital.visible = false;
    if (cinematicAngularGroup) cinematicAngularGroup.visible = false;
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
      if (m.name === "integratedProjection3DGroup") {
        m.position.set(0, 0, 0);
      }
      m.traverse(c => {
        if (c.name === "integratedProjectionMountain" || c.name === "integratedProjectionBox" || c.name === "integratedProjectionFlat") {
           c.visible = false;
           c.position.set(0, 0, 0);
        } else if (c.isMesh) {
           c.visible = true;
           if (c.material) c.material.opacity = smoothP;
        }
      });
    });
  }
  else if (step === 2) {
    if (radialGraph) radialGraph.visible = false;
    if (relationOrbital) relationOrbital.visible = false;
    if (cloudPos) cloudPos.visible = false;
    if (cloudNeg) cloudNeg.visible = false;
    if (cinematicAngularGroup) cinematicAngularGroup.visible = false;
    
    const currentIsoMeshes = api.getIsoMeshes();
    currentIsoMeshes.forEach(m => {
      if (m.name === "integratedProjection3DGroup") {
        m.position.set(0, 0, 0);
      }
      
      m.traverse(c => {
        if (c.name === "integratedProjectionMountain") {
           c.visible = true;
           if (c.material) c.material.opacity = 1;
        } else if (c.name === "integratedProjectionFlat") {
           c.visible = true;
           if (c.material) c.material.opacity = 0.45;
        } else if (c.name === "integratedProjectionBox") {
           c.visible = true;
           if (c.material) c.material.opacity = 0.2;
        } else if (c.isMesh) {
           c.visible = true;
           if (c.material) c.material.opacity = 1;
        }
      });
    });
  }
  else if (step === 3) {
    if (radialGraph) radialGraph.visible = true;
    if (relationOrbital) relationOrbital.visible = true;
    if (cloudPos) cloudPos.visible = false;
    if (cloudNeg) cloudNeg.visible = false;
    if (cinematicAngularGroup) cinematicAngularGroup.visible = false;

    const currentIsoMeshes = api.getIsoMeshes();
    currentIsoMeshes.forEach(m => {
      if (m.name === "integratedProjection3DGroup") {
        m.position.set(0, 0, 0);
      }
      m.traverse(c => {
        if (c.name === "integratedProjectionMountain" || c.name === "integratedProjectionBox" || c.name === "integratedProjectionFlat") {
           c.visible = false;
           if (c.material) c.material.opacity = 0;
           c.position.set(0, 0, 0);
        } else if (c.isMesh) {
           c.visible = true;
           c.material.opacity = 1;
        }
      });
    });
  }
  else if (step === 4) {
    if (radialGraph) radialGraph.visible = false;
    if (relationOrbital) relationOrbital.visible = false;
    if (cloudPos) cloudPos.visible = false;
    if (cloudNeg) cloudNeg.visible = false;
    isoMeshes.forEach(m => {
      if (m.name === "integratedProjection3DGroup") {
        m.position.set(0, 0, 0);
      }
      m.traverse(c => {
        if (c.name === "integratedProjectionMountain" || c.name === "integratedProjectionBox" || c.name === "integratedProjectionFlat") {
           c.visible = false;
           if (c.material) c.material.opacity = 0;
           c.position.set(0, 0, 0);
        } else if (c.isMesh) {
           c.visible = true;
           c.material.opacity = 1; // keep background half-cut orbital
        }
      });
    });
    
    if (cinematicAngularGroup) {
      cinematicAngularGroup.visible = true;
      
      const r = api.getRadius ? api.getRadius() : 5;
      const targetScale = r * 0.7; // size to fit well within orbital
      cinematicAngularGroup.scale.setScalar(targetScale);
      cinematicAngularGroup.rotation.y = 0; // stop rotation for clean scan
      
      cinematicAngularGroup.traverse(c => {
        if (c.isMesh && c.material) {
          c.material.transparent = true;
          c.material.opacity = Math.min(1, smoothP * 4.0); // quick fade in
        }
        if (c.userData.uThetaProgress) {
          if (smoothP <= 0.4) {
             c.userData.uThetaProgress.value = smoothP / 0.4;
             c.userData.uPhiProgress.value = 0.0;
          } else {
             c.userData.uThetaProgress.value = 1.0;
             c.userData.uPhiProgress.value = (smoothP - 0.4) / 0.6;
          }
        }
      });
    }
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
  
  const durs = getStepDurations();
  const totalDuration = durs.reduce((a, b) => a + b, 0);
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
