(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const p={viewer:document.querySelector("#viewer"),angularViewer:document.querySelector("#angularViewer"),projectionViewer:document.querySelector("#projectionViewer"),radialViewer:document.querySelector("#radialViewer"),viewGrid:document.querySelector(".view-grid"),mainWindow:document.querySelector(".main-window"),menuPopup:document.querySelector("#menuPopup"),menuItems:document.querySelectorAll(".menu-item"),toolRender:document.querySelector("#toolRender"),toolSave:document.querySelector("#toolSave"),toolTile:document.querySelector("#toolTile"),toolOverlap:document.querySelector("#toolOverlap"),toolAxis:document.querySelector("#toolAxis"),toolXOY:document.querySelector("#toolXOY"),toolYOZ:document.querySelector("#toolYOZ"),toolXOZ:document.querySelector("#toolXOZ"),preset:document.querySelector("#presetInput"),cosType:document.querySelector("#cosTypeInput"),sinType:document.querySelector("#sinTypeInput"),cloud:document.querySelector("#cloudInput"),positiveLobe:document.querySelector("#positiveLobeInput"),negativeLobe:document.querySelector("#negativeLobeInput"),wireframe:document.querySelector("#wireframeInput"),smooth:document.querySelector("#smoothInput"),projection:document.querySelector("#projectionInput"),projection3d:document.querySelector("#projection3dInput"),paletteOne:document.querySelector("#paletteOneInput"),paletteTwo:document.querySelector("#paletteTwoInput"),xySlice:document.querySelector("#xySliceInput"),yzSlice:document.querySelector("#yzSliceInput"),xzSlice:document.querySelector("#xzSliceInput"),quarter:document.querySelector("#quarterInput"),eighth:document.querySelector("#eighthInput"),threeQuarter:document.querySelector("#threeQuarterInput"),radialR:document.querySelector("#radialRInput"),radialR2:document.querySelector("#radialR2Input"),radialRdf:document.querySelector("#radialRdfInput"),radialSection:document.querySelector("#radialSectionInput"),radialSide:document.querySelector("#radialSideInput"),radialCurve:document.querySelector("#radialCurveInput"),radialAxis:document.querySelector("#radialAxisInput"),radialNode:document.querySelector("#radialNodeInput"),polarNode:document.querySelector("#polarNodeInput"),relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue"),longitudeNode:document.querySelector("#longitudeNodeInput"),grid3d:document.querySelector("#grid3dInput"),desktopMatch:document.querySelector("#desktopMatchInput"),n:document.querySelector("#nInput"),l:document.querySelector("#lInput"),m:document.querySelector("#mInput"),z:document.querySelector("#zInput"),mode:document.querySelector("#modeInput"),slice:document.querySelector("#sliceInput"),node:document.querySelector("#nodeInput"),axis:document.querySelector("#axisInput"),box:document.querySelector("#boxInput"),positiveColor:document.querySelector("#positiveColorInput"),negativeColor:document.querySelector("#negativeColorInput"),backgroundColor:document.querySelector("#backgroundColorInput"),iso:document.querySelector("#isoInput"),density:document.querySelector("#densityInput"),radius:document.querySelector("#radiusInput"),boxSizeDisplay:document.querySelector("#boxSizeDisplay"),intervalValue:document.querySelector("#intervalValue"),probabilityValue:document.querySelector("#probabilityValue"),opacity:document.querySelector("#opacityInput"),isoValue:document.querySelector("#isoValue"),densityValue:document.querySelector("#densityValue"),radiusValue:document.querySelector("#radiusValue"),opacityValue:document.querySelector("#opacityValue"),renderButton:document.querySelector("#renderButton"),axisProxyButton:document.querySelector("#axisProxyButton"),presetButton:document.querySelector("#presetButton"),redrawProxyButton:document.querySelector("#redrawProxyButton"),resetCameraButton:document.querySelector("#resetCameraButton"),screenshotButton:document.querySelector("#screenshotButton"),orbitalName:document.querySelector("#orbitalName"),viewerTitle:document.querySelector("#viewerTitle"),statusText:document.querySelector("#statusText"),posCount:document.querySelector("#posCount"),negCount:document.querySelector("#negCount"),nodeText:document.querySelector("#nodeText"),sliceText:document.querySelector("#sliceText"),boxText:document.querySelector("#boxText"),isoText:document.querySelector("#isoText"),openActivityButton:document.querySelector("#openActivityButton"),annotationModeButton:document.querySelector("#annotationModeButton"),annotationToolbar:document.querySelector("#annotationToolbar"),annotationClearButton:document.querySelector("#annotationClearButton"),openSketchButton:document.querySelector("#openSketchButton"),openAnimationButton:document.querySelector("#openAnimationButton"),openPredictButton:document.querySelector("#openPredictButton"),openChallengeButton:document.querySelector("#openChallengeButton"),sketchWindow:document.querySelector("#sketchWindow"),boxWindow:document.querySelector("#boxWindow"),paletteWindow:document.querySelector("#paletteWindow"),animationWindow:document.querySelector("#animationWindow"),animationCanvas:document.querySelector("#animationCanvas"),animationStepBadge:document.querySelector("#animationStepBadge"),animationTitle:document.querySelector("#animationTitle"),animationText:document.querySelector("#animationText"),animationProgressFill:document.querySelector("#animationProgressFill"),animationRestartButton:document.querySelector("#animationRestartButton"),animationPrevButton:document.querySelector("#animationPrevButton"),animationPlayButton:document.querySelector("#animationPlayButton"),animationNextButton:document.querySelector("#animationNextButton"),animationExportButton:document.querySelector("#animationExportButton"),animationExportOverlay:document.querySelector("#animationExportOverlay"),confirmExportButton:document.querySelector("#confirmExportButton"),cancelExportButton:document.querySelector("#cancelExportButton"),activityWindow:document.querySelector("#activityWindow"),activityTitle:document.querySelector("#activityTitle"),activityModeButtons:document.querySelectorAll("[data-activity-mode]"),activityPanes:document.querySelectorAll(".activity-pane"),predictPane:document.querySelector("#predictPane"),scorePane:document.querySelector("#scorePane"),diagnosisPane:document.querySelector("#diagnosisPane"),nodesPane:document.querySelector("#nodesPane"),comparePane:document.querySelector("#comparePane"),challengePane:document.querySelector("#challengePane"),tabletPane:document.querySelector("#tabletPane"),predictTarget:document.querySelector("#predictTargetInput"),startPredictButton:document.querySelector("#startPredictButton"),verifyPredictButton:document.querySelector("#verifyPredictButton"),clearPredictButton:document.querySelector("#clearPredictButton"),predictCanvas:document.querySelector("#predictCanvas"),predictResultImage:document.querySelector("#predictResultImage"),predictPenButton:document.querySelector("#predictPenButton"),predictEraserButton:document.querySelector("#predictEraserButton"),predictColorInput:document.querySelector("#predictColorInput"),predictSizeInput:document.querySelector("#predictSizeInput"),predictPrompt:document.querySelector("#predictPrompt"),quizRadialInput:document.querySelector("#quizRadialInput"),quizAngularInput:document.querySelector("#quizAngularInput"),scoreCurrentButton:document.querySelector("#scoreCurrentButton"),scorePrompt:document.querySelector("#scorePrompt"),diagnoseNodesButton:document.querySelector("#diagnoseNodesButton"),diagnosePhaseButton:document.querySelector("#diagnosePhaseButton"),diagnoseProjectionButton:document.querySelector("#diagnoseProjectionButton"),diagnosisPrompt:document.querySelector("#diagnosisPrompt"),nodeRevealButton:document.querySelector("#nodeRevealButton"),nodeHideButton:document.querySelector("#nodeHideButton"),compareA:document.querySelector("#compareAInput"),compareB:document.querySelector("#compareBInput"),compareApplyButton:document.querySelector("#compareApplyButton"),compareLoadAButton:document.querySelector("#compareLoadAButton"),compareLoadBButton:document.querySelector("#compareLoadBButton"),compareAViewer:document.querySelector("#compareAViewer"),compareBViewer:document.querySelector("#compareBViewer"),compareATitle:document.querySelector("#compareATitle"),compareBTitle:document.querySelector("#compareBTitle"),compareANotes:document.querySelector("#compareANotes"),compareBNotes:document.querySelector("#compareBNotes"),compareSummary:document.querySelector("#compareSummary"),newChallengeButton:document.querySelector("#newChallengeButton"),challengeGuess:document.querySelector("#challengeGuessInput"),revealChallengeButton:document.querySelector("#revealChallengeButton"),challengePrompt:document.querySelector("#challengePrompt"),explainFormula:document.querySelector("#explainFormula"),sketchCanvas:document.querySelector("#sketchCanvas"),sketchColor:document.querySelector("#sketchColorInput"),sketchSize:document.querySelector("#sketchSizeInput"),sketchPen:document.querySelector("#sketchPenButton"),sketchEraser:document.querySelector("#sketchEraserButton"),sketchClear:document.querySelector("#sketchClearButton"),tabletLargeButton:document.querySelector("#tabletLargeButton"),tabletRestoreButton:document.querySelector("#tabletRestoreButton"),tabletScreenshotButton:document.querySelector("#tabletScreenshotButton")};let Rr=!1,tr=document.createElement("button");tr.type="button";tr.className="fullscreen-exit-button";tr.textContent="退出全屏";tr.hidden=!0;document.body.appendChild(tr);tr.addEventListener("click",vh);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(Rr=!0,Ro(!0)):Rr&&(Rr=!1,Ro(!1))});function Uf(i){Object.assign(window,i),yh()}function za(i,e){var n,r;if(!e||e.classList.contains("maximized")||i.target.closest(".window-controls")||i.pointerType!=="mouse"&&!i.isPrimary)return;i.preventDefault();const t=e.getBoundingClientRect();activityState.dragging=!0,activityState.dragPointerId=i.pointerId,activityState.dragWindow=e,activityState.dragOffsetX=i.clientX-t.left,activityState.dragOffsetY=i.clientY-t.top,(r=(n=i.currentTarget)==null?void 0:n.setPointerCapture)==null||r.call(n,i.pointerId),e.style.zIndex="130"}function Of(i){const e=activityState.dragWindow;if(!activityState.dragging||!e||activityState.dragPointerId!==null&&i.pointerId!==activityState.dragPointerId)return;i.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),n=window.innerHeight-32,r=Math.max(0,Math.min(t,i.clientX-activityState.dragOffsetX)),a=Math.max(0,Math.min(n,i.clientY-activityState.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function Ol(){activityState.dragging=!1,activityState.dragPointerId=null,activityState.dragWindow=null,recoverAllViewerControls()}function xh(){const[i,e,t]=p.preset.value.split(",").map(Number);p.n.value=i,p.l.value=e,p.m.value=Math.abs(t),p.cosType.checked=t>=0,p.sinType.checked=t<0,readParams(),applyDesktopDefaultsToControls(),renderOrbital()}function ar(i,e){if(i.checked)for(const t of e)t&&t!==i&&(t.checked=!1)}function _h(i){i==="one"?(p.positiveColor.value="#ff7a00",p.negativeColor.value="#008fb8"):(p.positiveColor.value="#d83bd8",p.negativeColor.value="#00aeb8"),renderOrbital()}function Ff(){for(const i of[p.cosType,p.sinType])i==null||i.addEventListener("change",()=>{ar(i,[p.cosType,p.sinType]),!p.cosType.checked&&!p.sinType.checked&&(p.cosType.checked=!0),renderOrbital()});for(const i of[p.wireframe,p.smooth])i==null||i.addEventListener("change",()=>{ar(i,[p.wireframe,p.smooth]),renderOrbital()});for(const i of[p.paletteOne,p.paletteTwo])i==null||i.addEventListener("change",()=>{ar(i,[p.paletteOne,p.paletteTwo]),!p.paletteOne.checked&&!p.paletteTwo.checked&&(p.paletteTwo.checked=!0),_h(p.paletteOne.checked?"one":"two")});for(const i of[p.xySlice,p.yzSlice,p.xzSlice])i==null||i.addEventListener("change",()=>{ar(i,[p.xySlice,p.yzSlice,p.xzSlice]),renderOrbital()});for(const i of[p.quarter,p.eighth,p.threeQuarter])i==null||i.addEventListener("change",()=>{ar(i,[p.quarter,p.eighth,p.threeQuarter]),renderOrbital()});for(const i of[p.radialR,p.radialR2,p.radialRdf])i==null||i.addEventListener("change",()=>{ar(i,[p.radialR,p.radialR2,p.radialRdf]),!p.radialR.checked&&!p.radialR2.checked&&!p.radialRdf.checked&&(p.radialRdf.checked=!0),clearRadialObjects(),renderRadialView(readParams(),readOptions())})}function Jo(){renderer.render(scene,camera);const i=document.createElement("a");i.download=`${p.orbitalName.textContent||"hao-orbital"}.png`,i.href=renderer.domElement.toDataURL("image/png"),i.click()}function Yn(i){p.statusText.textContent=i}function zf(){if(p.backgroundColor){(!document.body.contains(p.backgroundColor)||p.backgroundColor.closest(".hidden-control"))&&(document.body.appendChild(p.backgroundColor),Object.assign(p.backgroundColor.style,{position:"fixed",left:"-120px",top:"0",width:"1px",height:"1px",opacity:"0",pointerEvents:"none"}));try{typeof p.backgroundColor.showPicker=="function"?p.backgroundColor.showPicker():p.backgroundColor.click()}catch{p.backgroundColor.click()}}}function Ro(i){document.body.classList.toggle("app-fullscreen",i),tr.hidden=!i,resizeAfterLayoutChange()}async function Bf(){var e;an(),Ro(!0);const i=(e=document.documentElement.requestFullscreen)==null?void 0:e.bind(document.documentElement);if(i)try{await i(),Rr=!0}catch{Rr=!1}}async function vh(){if(an(),Ro(!1),document.fullscreenElement&&document.exitFullscreen)try{await document.exitFullscreen()}catch{}Rr=!1}function kf(){document.body.classList.contains("app-fullscreen")||document.fullscreenElement?vh():Bf()}function an(){p.menuPopup.hidden=!0,p.menuPopup.innerHTML="";for(const i of p.menuItems)i.classList.remove("active")}function Vf(i){const e=i.dataset.menu,t={file:[["重新显示",renderOrbital],["导出图片",Jo],["恢复预设值",()=>{applyDesktopDefaultsToControls(),renderOrbital()}]],window:[["全屏/退出全屏",kf],["画板",openSketchWindow],["盒子设置",openBoxWindow],["背景颜色",zf],["显示/隐藏盒子",Gf],["显示/隐藏坐标轴",Xc],["重置视角",()=>{resetCamera(),resetAngularCamera(getCurrentAngularRadius())}]],help:[["当前说明",()=>Yn("顶部按钮已连接到 Web 端功能")],["项目路径",()=>Yn("web/index.html")]],language:[["中文",()=>Yn("语言: 中文")],["English",()=>Yn("Language: English labels are partly available")]]}[e];an(),i.classList.add("active");const n=i.getBoundingClientRect();p.menuPopup.style.left=`${n.left}px`,p.menuPopup.hidden=!1;for(const[r,a]of t){const s=document.createElement("button");s.type="button",s.textContent=r,s.addEventListener("click",()=>{an(),a()}),p.menuPopup.appendChild(s)}}function qc(){try{const i=readOptions();console.log("[DEBUG] fastUpdateVisualOptions called. options.showAxis =",i.showAxis),setAxesVisibility(i.showAxis,Math.max(1,i.radius/4.5)),p.toolAxis&&p.toolAxis.classList.toggle("active",i.showAxis),boxObject&&(boxObject.visible=i.showBox),p.toolBox&&p.toolBox.classList.toggle("active",i.showBox),radialAxisObject&&(radialAxisObject.visible=i.showAxis),console.log("[DEBUG] fastUpdateVisualOptions completed successfully.")}catch(i){console.error("Error in fastUpdateVisualOptions:",i),alert("坐标轴更新失败: "+i.message+`
`+i.stack)}}function Xc(){try{const i=p.toolAxis?p.toolAxis.classList.contains("active"):p.axis?p.axis.checked:!0;console.log("[DEBUG] toggleAxis called. Internal state was =",i),p.axis&&(p.axis.checked=!i),qc()}catch(i){alert("toggleAxis ERROR: "+i.message)}}function Gf(){try{p.box&&(p.box.checked=!p.box.checked),qc()}catch(i){alert("toggleBox ERROR: "+i.message)}}function Qo(i){var t,n;reopenViewWindows({restoreLayout:!0});const e=i==="overlap";p.viewGrid.classList.toggle("overlap-layout",e),(t=p.toolTile)==null||t.classList.toggle("active",!e),(n=p.toolOverlap)==null||n.classList.toggle("active",e),resizeAfterLayoutChange()}function Xr(i){const e=i.querySelector('[data-window-action="minimize"]'),t=i.querySelector('[data-window-action="maximize"]');e&&(e.textContent=i.classList.contains("minimized")?"□":"－"),t&&(t.textContent=i.classList.contains("maximized")?"❐":"□")}function Hf(i){const e=i.closest(".qt-window");if(!e)return;const t=i.dataset.windowAction;t==="minimize"?(e.classList.toggle("minimized"),e.classList.contains("minimized")&&e.classList.remove("maximized")):t==="maximize"?(e.classList.remove("minimized"),e.classList.toggle("maximized")):t==="close"&&(e.classList.add("closed"),e.classList.remove("minimized","maximized"),e===p.animationWindow&&pauseGenerationAnimation()),Xr(e),resizeAfterLayoutChange(),e===p.animationWindow&&!e.classList.contains("closed")&&requestAnimationFrame(()=>drawGenerationAnimation(0))}function Yc(i){var a,s,o;const e=currentViewRadius,t=Math.max(3,currentAngularRadius),n=cameraDistanceForRadius(e),r=cameraDistanceForRadius(t,40);i==="xoy"?(camera.up.set(0,1,0),angularCamera.up.set(0,1,0),camera.position.set(0,0,n),angularCamera.position.set(0,0,r)):i==="yoz"?(camera.up.set(0,1,0),angularCamera.up.set(0,1,0),camera.position.set(n,0,0),angularCamera.position.set(r,0,0)):i==="xoz"&&(camera.up.set(0,0,-1),angularCamera.up.set(0,0,-1),camera.position.set(0,n,0),angularCamera.position.set(0,r,0)),camera.lookAt(0,0,0),angularCamera.lookAt(0,0,0),updateCameraFrustum(e),updateAngularFrustum(t),controls.target.set(0,0,0),angularControls.target.set(0,0,0),controls.update(),angularControls.update(),(a=p.toolXOY)==null||a.classList.toggle("active",i==="xoy"),(s=p.toolYOZ)==null||s.classList.toggle("active",i==="yoz"),(o=p.toolXOZ)==null||o.classList.toggle("active",i==="xoz")}function yh(){var i,e,t,n,r,a,s,o,c,l,u,h,d,f,_,v,g,m,y,x,S,E,T,A,C,w,M,L,I,N,k,B,O,H,G,ne,ae,re,ee,pe,q,te,fe;if(p.sketchCanvas){(i=p.openActivityButton)==null||i.addEventListener("click",()=>showActivityPane("predict")),(e=p.openSketchButton)==null||e.addEventListener("click",openSketchWindow),(t=p.openPredictButton)==null||t.addEventListener("click",()=>showActivityPane("predict")),(n=p.openChallengeButton)==null||n.addEventListener("click",()=>showActivityPane("challenge"));for(const F of p.activityModeButtons??[])F.addEventListener("click",()=>showActivityPane(F.dataset.activityMode));(r=p.startPredictButton)==null||r.addEventListener("click",startPrediction),(a=p.verifyPredictButton)==null||a.addEventListener("click",verifyPrediction),(s=p.scoreCurrentButton)==null||s.addEventListener("click",scoreCurrentPrediction),(o=p.scoreShowRubricButton)==null||o.addEventListener("click",showScoreRubric),(c=p.scoreResetButton)==null||c.addEventListener("click",resetScorePrompt),(l=p.diagnoseNodesButton)==null||l.addEventListener("click",()=>runDiagnosis("nodes")),(u=p.diagnosePhaseButton)==null||u.addEventListener("click",()=>runDiagnosis("phase")),(h=p.diagnoseProjectionButton)==null||h.addEventListener("click",()=>runDiagnosis("projection"));for(const F of document.querySelectorAll("[data-diagnosis]"))F.addEventListener("click",()=>runDiagnosis(F.dataset.diagnosis));(d=p.nodeRevealButton)==null||d.addEventListener("click",()=>{p.radialNode&&!p.radialNode.disabled&&(p.radialNode.checked=!0),p.polarNode&&!p.polarNode.disabled&&(p.polarNode.checked=!0),p.longitudeNode.checked=!0,p.node.checked=!0,renderOrbital()}),(f=p.nodeHideButton)==null||f.addEventListener("click",()=>{p.radialNode&&(p.radialNode.checked=!1),p.polarNode&&(p.polarNode.checked=!1),p.longitudeNode.checked=!1,p.node.checked=!1,renderOrbital()}),(_=p.compareApplyButton)==null||_.addEventListener("click",()=>{renderOrbitalComparison()}),(v=p.compareA)==null||v.addEventListener("change",()=>{renderCompareSlot("a")}),(g=p.compareB)==null||g.addEventListener("change",()=>{renderCompareSlot("b")}),(m=p.compareLoadAButton)==null||m.addEventListener("click",()=>{var F;(F=p.compareA)!=null&&F.value&&loadCompareTargetToMain(p.compareA.value,"a")}),(y=p.compareLoadBButton)==null||y.addEventListener("click",()=>{var F;(F=p.compareB)!=null&&F.value&&loadCompareTargetToMain(p.compareB.value,"b")}),(x=p.newChallengeButton)==null||x.addEventListener("click",newChallenge),(S=p.revealChallengeButton)==null||S.addEventListener("click",revealChallenge),(E=p.explainRestartButton)==null||E.addEventListener("click",restartExplanation),(T=p.explainPrevButton)==null||T.addEventListener("click",()=>moveExplanationStep(-1)),(A=p.explainPlayButton)==null||A.addEventListener("click",toggleExplanationPlayback),(C=p.explainNextButton)==null||C.addEventListener("click",()=>moveExplanationStep(1)),(w=p.tabletLargeButton)==null||w.addEventListener("click",()=>setTabletMode(!0)),(M=p.tabletRestoreButton)==null||M.addEventListener("click",()=>setTabletMode(!1)),(L=p.tabletScreenshotButton)==null||L.addEventListener("click",Jo),(N=(I=p.boxWindow)==null?void 0:I.querySelector(".window-title"))==null||N.addEventListener("pointerdown",F=>za(F,p.boxWindow)),(B=(k=p.activityWindow)==null?void 0:k.querySelector(".window-title"))==null||B.addEventListener("pointerdown",F=>za(F,p.activityWindow)),(H=(O=p.formulaWindow)==null?void 0:O.querySelector(".window-title"))==null||H.addEventListener("pointerdown",F=>za(F,p.formulaWindow)),(ne=(G=p.animationWindow)==null?void 0:G.querySelector(".window-title"))==null||ne.addEventListener("pointerdown",F=>za(F,p.animationWindow)),window.addEventListener("pointermove",Of),window.addEventListener("pointerup",Ol),window.addEventListener("pointercancel",Ol),window.addEventListener("pointerup",refreshAllViewerControls),window.addEventListener("pointercancel",recoverAllViewerControls),window.addEventListener("blur",recoverAllViewerControls),(ae=p.annotationModeButton)==null||ae.addEventListener("click",toggleAnnotationMode),(re=p.openAnimationButton)==null||re.addEventListener("click",playCinematicAnimation),(ee=document.getElementById("cinematicPlayBtn"))==null||ee.addEventListener("click",toggleCinematicPlayback),(pe=document.getElementById("cinematicExportBtn"))==null||pe.addEventListener("click",exportCinematicVideo),(q=document.getElementById("cinematicExitBtn"))==null||q.addEventListener("click",stopCinematicAnimation),(te=p.openFormulaButton)==null||te.addEventListener("click",openFormulaWindow),(fe=p.annotationClearButton)==null||fe.addEventListener("click",clearAnnotations);for(const F of document.querySelectorAll("[data-annotation-add]"))F.addEventListener("click",()=>addAnnotation(F.dataset.annotationAdd));for(const F of document.querySelectorAll(".annotation-layer"))F.addEventListener("pointerdown",beginAnnotationDrag);window.addEventListener("pointermove",continueAnnotationDrag),window.addEventListener("pointerup",endAnnotationDrag),window.addEventListener("pointercancel",endAnnotationDrag)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jc="165",Hn={ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wf=0,Fl=1,qf=2,Mh=1,Xf=2,Gn=3,Dn=0,$t=1,pt=2,yi=0,Pr=1,zr=2,zl=3,Bl=4,Yf=5,qi=100,jf=101,$f=102,Zf=103,Kf=104,Jf=200,Qf=201,ep=202,tp=203,dc=204,hc=205,np=206,ip=207,rp=208,ap=209,op=210,sp=211,cp=212,lp=213,up=214,dp=0,hp=1,fp=2,Po=3,pp=4,mp=5,gp=6,xp=7,$c=0,_p=1,vp=2,Mi=0,yp=1,Mp=2,Sp=3,Sh=4,wp=5,bp=6,Ep=7,wh=300,Br=301,kr=302,fc=303,pc=304,es=306,mc=1e3,ji=1001,gc=1002,hn=1003,Ap=1004,Ba=1005,yn=1006,gs=1007,$i=1008,Ei=1009,Tp=1010,Cp=1011,Lo=1012,bh=1013,Vr=1014,xi=1015,ts=1016,Eh=1017,Ah=1018,Gr=1020,Rp=35902,Pp=1021,Lp=1022,Cn=1023,Dp=1024,Ip=1025,Lr=1026,Hr=1027,Np=1028,Th=1029,Up=1030,Ch=1031,Rh=1033,xs=33776,_s=33777,vs=33778,ys=33779,kl=35840,Vl=35841,Gl=35842,Hl=35843,Wl=36196,ql=37492,Xl=37496,Yl=37808,jl=37809,$l=37810,Zl=37811,Kl=37812,Jl=37813,Ql=37814,eu=37815,tu=37816,nu=37817,iu=37818,ru=37819,au=37820,ou=37821,Ms=36492,su=36494,cu=36495,Op=36283,lu=36284,uu=36285,du=36286,Fp=3200,zp=3201,Zc=0,Bp=1,gi="",nn="srgb",Ri="srgb-linear",Kc="display-p3",ns="display-p3-linear",Do="linear",ht="srgb",Io="rec709",No="p3",sr=7680,hu=519,kp=512,Vp=513,Gp=514,Ph=515,Hp=516,Wp=517,qp=518,Xp=519,xc=35044,ka=35048,fu="300 es",jn=2e3,Uo=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pu=1234567;const Dr=Math.PI/180,Sa=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function Jc(i,e){return(i%e+e)%e}function Yp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function jp(i,e,t){return i!==e?(t-i)/(e-i):0}function ma(i,e,t){return(1-t)*i+t*e}function $p(i,e,t,n){return ma(i,e,1-Math.exp(-t*n))}function Zp(i,e=1){return e-Math.abs(Jc(i,e*2)-e)}function Kp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function em(i,e){return i+Math.random()*(e-i)}function tm(i){return i*(.5-Math.random())}function nm(i){i!==void 0&&(pu=i);let e=pu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function im(i){return i*Dr}function rm(i){return i*Sa}function am(i){return(i&i-1)===0&&i!==0}function om(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cm(i,e,t,n,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),u=s((e+n)/2),h=a((e-n)/2),d=s((e-n)/2),f=a((n-e)/2),_=s((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _c={DEG2RAD:Dr,RAD2DEG:Sa,generateUUID:Qn,clamp:Et,euclideanModulo:Jc,mapLinear:Yp,inverseLerp:jp,lerp:ma,damp:$p,pingpong:Zp,smoothstep:Kp,smootherstep:Jp,randInt:Qp,randFloat:em,randFloatSpread:tm,seededRandom:nm,degToRad:im,radToDeg:rm,isPowerOfTwo:am,ceilPowerOfTwo:om,floorPowerOfTwo:sm,setQuaternionFromProperEuler:cm,normalize:it,denormalize:Mn};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,r,a,s,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],v=r[0],g=r[3],m=r[6],y=r[1],x=r[4],S=r[7],E=r[2],T=r[5],A=r[8];return a[0]=s*v+o*y+c*E,a[3]=s*g+o*x+c*T,a[6]=s*m+o*S+c*A,a[1]=l*v+u*y+h*E,a[4]=l*g+u*x+h*T,a[7]=l*m+u*S+h*A,a[2]=d*v+f*y+_*E,a[5]=d*g+f*x+_*T,a[8]=d*m+f*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-n*a*u+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*s-o*l,d=o*c-u*a,f=l*a-s*c,_=t*h+n*d+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(o*n-r*s)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*a-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(s*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ss.makeScale(e,t)),this}rotate(e){return this.premultiply(Ss.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ss.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ss=new Ye;function Lh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lm(){const i=Oo("canvas");return i.style.display="block",i}const mu={};function Qc(i){i in mu||(mu[i]=!0,console.warn(i))}function um(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const gu=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xu=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Va={[Ri]:{transfer:Do,primaries:Io,toReference:i=>i,fromReference:i=>i},[nn]:{transfer:ht,primaries:Io,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ns]:{transfer:Do,primaries:No,toReference:i=>i.applyMatrix3(xu),fromReference:i=>i.applyMatrix3(gu)},[Kc]:{transfer:ht,primaries:No,toReference:i=>i.convertSRGBToLinear().applyMatrix3(xu),fromReference:i=>i.applyMatrix3(gu).convertLinearToSRGB()}},dm=new Set([Ri,ns]),rt={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!dm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Va[e].toReference,r=Va[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Va[i].primaries},getTransfer:function(i){return i===gi?Do:Va[i].transfer}};function Ir(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let cr;class hm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cr===void 0&&(cr=Oo("canvas")),cr.width=e.width,cr.height=e.height;const n=cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ir(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ir(t[n]/255)*255):t[n]=Ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fm=0;class Dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(bs(r[s].image)):a.push(bs(r[s]))}else a=bs(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pm=0;class qt extends Pi{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=ji,r=ji,a=yn,s=$i,o=Cn,c=Ei,l=qt.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Qn(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=wh;qt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],_=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,S=(f+1)/2,E=(m+1)/2,T=(u+d)/4,A=(h+v)/4,C=(_+g)/4;return x>S&&x>E?x<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(x),r=T/n,a=A/n):S>E?S<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),n=T/r,a=C/r):E<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(E),n=A/a,r=C/a),this.set(n,r,a,t),this}let y=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mm extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new qt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends mm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ih extends qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gm extends qt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=a[s+0],f=a[s+1],_=a[s+2],v=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==_){let g=1-o;const m=c*d+l*f+u*_+h*v,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),T=Math.atan2(E,m*y);g=Math.sin(g*T)/E,o=Math.sin(o*T)/E}const S=o*y;if(c=c*g+d*S,l=l*g+f*S,u=u*g+_*S,h=h*g+v*S,g===1-o){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=a[s],d=a[s+1],f=a[s+2],_=a[s+3];return e[t]=o*_+u*h+c*f-l*d,e[t+1]=c*_+u*d+l*h-o*f,e[t+2]=l*_+u*f+o*d-c*h,e[t+3]=u*_-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(a/2),d=c(n/2),f=c(r/2),_=c(a/2);switch(s){case"XYZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"YZX":this._x=d*u*h+l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h-d*f*_;break;case"XZY":this._x=d*u*h-l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(s-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(a+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(a-l)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(s-r)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*o+r*l-a*c,this._y=r*u+s*c+a*o-n*l,this._z=a*u+s*l+n*c-r*o,this._w=s*u-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),u=2*(o*t-a*r),h=2*(a*n-s*t);return this.x=t+c*l+s*h-o*u,this.y=n+c*u+o*l-a*h,this.z=r+c*h+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Es.copy(this).projectOnVector(e),this.sub(Es)}reflect(e){return this.sub(Es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Es=new D,_u=new Ti;class En{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,mn):mn.fromBufferAttribute(a,s),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Ha.subVectors(this.max,ia),lr.subVectors(e.a,ia),ur.subVectors(e.b,ia),dr.subVectors(e.c,ia),ci.subVectors(ur,lr),li.subVectors(dr,ur),Fi.subVectors(lr,dr);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Fi.z,Fi.y,ci.z,0,-ci.x,li.z,0,-li.x,Fi.z,0,-Fi.x,-ci.y,ci.x,0,-li.y,li.x,0,-Fi.y,Fi.x,0];return!As(t,lr,ur,dr,Ha)||(t=[1,0,0,0,1,0,0,0,1],!As(t,lr,ur,dr,Ha))?!1:(Wa.crossVectors(ci,li),t=[Wa.x,Wa.y,Wa.z],As(t,lr,ur,dr,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new D,new D,new D,new D,new D,new D,new D,new D],mn=new D,Ga=new En,lr=new D,ur=new D,dr=new D,ci=new D,li=new D,Fi=new D,ia=new D,Ha=new D,Wa=new D,zi=new D;function As(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){zi.fromArray(i,a);const o=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),c=e.dot(zi),l=t.dot(zi),u=n.dot(zi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const xm=new En,ra=new D,Ts=new D;class Li{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xm.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ra,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ts.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Ts)),this.expandByPoint(ra.copy(e.center).sub(Ts))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new D,Cs=new D,qa=new D,ui=new D,Rs=new D,Xa=new D,Ps=new D;class Pa{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Cs.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Cs);const a=e.distanceTo(t)*.5,s=-this.direction.dot(qa),o=ui.dot(this.direction),c=-ui.dot(qa),l=ui.lengthSq(),u=Math.abs(1-s*s);let h,d,f,_;if(u>0)if(h=s*c-o,d=s*o-c,_=a*u,h>=0)if(d>=-_)if(d<=_){const v=1/u;h*=v,d*=v,f=h*(h+s*d+2*o)+d*(s*h+d+2*c)+l}else d=a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*c)+l;else d=-a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-s*a+o)),d=h>0?-a:Math.min(Math.max(-a,-c),a),f=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-a,-c),a),f=d*(d+2*c)+l):(h=Math.max(0,-(s*a+o)),d=h>0?a:Math.min(Math.max(-a,-c),a),f=-h*h+d*(d+2*c)+l);else d=s>0?-a:a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cs).addScaledVector(qa,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,a){Rs.subVectors(t,e),Xa.subVectors(n,e),Ps.crossVectors(Rs,Xa);let s=this.direction.dot(Ps),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ui.subVectors(this.origin,e);const c=o*this.direction.dot(Xa.crossVectors(ui,Xa));if(c<0)return null;const l=o*this.direction.dot(Rs.cross(ui));if(l<0||c+l>s)return null;const u=-o*ui.dot(Ps);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,r,a,s,o,c,l,u,h,d,f,_,v,g){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,u,h,d,f,_,v,g)}set(e,t,n,r,a,s,o,c,l,u,h,d,f,_,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=s,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),a=1/hr.setFromMatrixColumn(e,1).length(),s=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=s*u,f=s*h,_=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+_*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=_+f*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,_=l*u,v=l*h;t[0]=d+v*o,t[4]=_*o-f,t[8]=s*l,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=f*o-_,t[6]=v+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,_=l*u,v=l*h;t[0]=d-v*o,t[4]=-s*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=s*u,t[9]=v-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,f=s*h,_=o*u,v=o*h;t[0]=c*u,t[4]=_*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-_,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,f=s*l,_=o*c,v=o*l;t[0]=c*u,t[4]=v-d*h,t[8]=_*h+f,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+_,t[10]=d-v*h}else if(e.order==="XZY"){const d=s*c,f=s*l,_=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=s*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_m,e,vm)}lookAt(e,t,n){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),di.crossVectors(n,en),di.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),di.crossVectors(n,en)),di.normalize(),Ya.crossVectors(en,di),r[0]=di.x,r[4]=Ya.x,r[8]=en.x,r[1]=di.y,r[5]=Ya.y,r[9]=en.y,r[2]=di.z,r[6]=Ya.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],v=n[6],g=n[10],m=n[14],y=n[3],x=n[7],S=n[11],E=n[15],T=r[0],A=r[4],C=r[8],w=r[12],M=r[1],L=r[5],I=r[9],N=r[13],k=r[2],B=r[6],O=r[10],H=r[14],G=r[3],ne=r[7],ae=r[11],re=r[15];return a[0]=s*T+o*M+c*k+l*G,a[4]=s*A+o*L+c*B+l*ne,a[8]=s*C+o*I+c*O+l*ae,a[12]=s*w+o*N+c*H+l*re,a[1]=u*T+h*M+d*k+f*G,a[5]=u*A+h*L+d*B+f*ne,a[9]=u*C+h*I+d*O+f*ae,a[13]=u*w+h*N+d*H+f*re,a[2]=_*T+v*M+g*k+m*G,a[6]=_*A+v*L+g*B+m*ne,a[10]=_*C+v*I+g*O+m*ae,a[14]=_*w+v*N+g*H+m*re,a[3]=y*T+x*M+S*k+E*G,a[7]=y*A+x*L+S*B+E*ne,a[11]=y*C+x*I+S*O+E*ae,a[15]=y*w+x*N+S*H+E*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],v=e[7],g=e[11],m=e[15];return _*(+a*c*h-r*l*h-a*o*d+n*l*d+r*o*f-n*c*f)+v*(+t*c*f-t*l*d+a*s*d-r*s*f+r*l*u-a*c*u)+g*(+t*l*h-t*o*f-a*s*h+n*s*f+a*o*u-n*l*u)+m*(-r*o*u-t*c*h+t*o*d+r*s*h-n*s*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],v=e[13],g=e[14],m=e[15],y=h*g*l-v*d*l+v*c*f-o*g*f-h*c*m+o*d*m,x=_*d*l-u*g*l-_*c*f+s*g*f+u*c*m-s*d*m,S=u*v*l-_*h*l+_*o*f-s*v*f-u*o*m+s*h*m,E=_*h*c-u*v*c-_*o*d+s*v*d+u*o*g-s*h*g,T=t*y+n*x+r*S+a*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(v*d*a-h*g*a-v*r*f+n*g*f+h*r*m-n*d*m)*A,e[2]=(o*g*a-v*c*a+v*r*l-n*g*l-o*r*m+n*c*m)*A,e[3]=(h*c*a-o*d*a-h*r*l+n*d*l+o*r*f-n*c*f)*A,e[4]=x*A,e[5]=(u*g*a-_*d*a+_*r*f-t*g*f-u*r*m+t*d*m)*A,e[6]=(_*c*a-s*g*a-_*r*l+t*g*l+s*r*m-t*c*m)*A,e[7]=(s*d*a-u*c*a+u*r*l-t*d*l-s*r*f+t*c*f)*A,e[8]=S*A,e[9]=(_*h*a-u*v*a-_*n*f+t*v*f+u*n*m-t*h*m)*A,e[10]=(s*v*a-_*o*a+_*n*l-t*v*l-s*n*m+t*o*m)*A,e[11]=(u*o*a-s*h*a-u*n*l+t*h*l+s*n*f-t*o*f)*A,e[12]=E*A,e[13]=(u*v*r-_*h*r+_*n*d-t*v*d-u*n*g+t*h*g)*A,e[14]=(_*o*r-s*v*r-_*n*c+t*v*c+s*n*g-t*o*g)*A,e[15]=(s*h*r-u*o*r+u*n*c-t*h*c-s*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*s,0,l*c-r*o,u*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,h=o+o,d=a*l,f=a*u,_=a*h,v=s*u,g=s*h,m=o*h,y=c*l,x=c*u,S=c*h,E=n.x,T=n.y,A=n.z;return r[0]=(1-(v+m))*E,r[1]=(f+S)*E,r[2]=(_-x)*E,r[3]=0,r[4]=(f-S)*T,r[5]=(1-(d+m))*T,r[6]=(g+y)*T,r[7]=0,r[8]=(_+x)*A,r[9]=(g-y)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=hr.set(r[0],r[1],r[2]).length();const s=hr.set(r[4],r[5],r[6]).length(),o=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const l=1/a,u=1/s,h=1/o;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,t.setFromRotationMatrix(gn),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=jn){const c=this.elements,l=2*a/(t-e),u=2*a/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let f,_;if(o===jn)f=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===Uo)f=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=jn){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(s-a),d=(t+e)*l,f=(n+r)*u;let _,v;if(o===jn)_=(s+a)*h,v=-2*h;else if(o===Uo)_=a*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hr=new D,gn=new ct,_m=new D(0,0,0),vm=new D(1,1,1),di=new D,Ya=new D,en=new D,vu=new ct,yu=new Ti;class An{constructor(e=0,t=0,n=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yu.setFromEuler(this),this.setFromQuaternion(yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ym=0;const Mu=new D,fr=new Ti,Bn=new ct,ja=new D,aa=new D,Mm=new D,Sm=new Ti,Su=new D(1,0,0),wu=new D(0,1,0),bu=new D(0,0,1),Eu={type:"added"},wm={type:"removed"},pr={type:"childadded",child:null},Ls={type:"childremoved",child:null};class vt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new D,t=new An,n=new Ti,r=new D(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ye}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(Su,e)}rotateY(e){return this.rotateOnAxis(wu,e)}rotateZ(e){return this.rotateOnAxis(bu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Su,e)}translateY(e){return this.translateOnAxis(wu,e)}translateZ(e){return this.translateOnAxis(bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ja.copy(e):ja.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(aa,ja,this.up):Bn.lookAt(ja,aa,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(Bn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eu),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eu),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,Sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new D,kn=new D,Ds=new D,Vn=new D,mr=new D,gr=new D,Au=new D,Is=new D,Ns=new D,Us=new D;class dn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){xn.subVectors(r,t),kn.subVectors(n,t),Ds.subVectors(e,t);const s=xn.dot(xn),o=xn.dot(kn),c=xn.dot(Ds),l=kn.dot(kn),u=kn.dot(Ds),h=s*l-o*o;if(h===0)return a.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,_=(s*u-o*c)*d;return a.set(1-f-_,_,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Vn.x),c.addScaledVector(s,Vn.y),c.addScaledVector(o,Vn.z),c)}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),kn.subVectors(e,t),xn.cross(kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;mr.subVectors(r,n),gr.subVectors(a,n),Is.subVectors(e,n);const c=mr.dot(Is),l=gr.dot(Is);if(c<=0&&l<=0)return t.copy(n);Ns.subVectors(e,r);const u=mr.dot(Ns),h=gr.dot(Ns);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector(mr,s);Us.subVectors(e,a);const f=mr.dot(Us),_=gr.dot(Us);if(_>=0&&f<=_)return t.copy(a);const v=f*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(gr,o);const g=u*_-f*h;if(g<=0&&h-u>=0&&f-_>=0)return Au.subVectors(a,r),o=(h-u)/(h-u+(f-_)),t.copy(r).addScaledVector(Au,o);const m=1/(g+v+d);return s=v*m,o=d*m,t.copy(n).addScaledVector(mr,s).addScaledVector(gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Os(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=Jc(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Os(s,a,e+1/3),this.g=Os(s,a,e),this.b=Os(s,a,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=Nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return rt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Et(Ot.r*255,0,255))*65536+Math.round(Et(Ot.g*255,0,255))*256+Math.round(Et(Ot.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,r=Ot.g,a=Ot.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const h=s-o;switch(l=u<=.5?h/(s+o):h/(2-s-o),s){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=nn){rt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,r=Ot.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL($a);const n=ma(hi.h,$a.h,t),r=ma(hi.s,$a.s,t),a=ma(hi.l,$a.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ye;ye.NAMES=Nh;let bm=0;class ri extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Pr,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=hc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==hc&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xt extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new D,Za=new he;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),a=it(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}}class Uh extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oh extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ue extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Em=0;const sn=new ct,Fs=new vt,xr=new D,tn=new En,oa=new En,Rt=new D;class $e extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lh(e)?Oh:Uh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ye().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Fs.lookAt(e),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ue(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];tn.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(tn.min,oa.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,oa.max),tn.expandByPoint(Rt)):(tn.expandByPoint(oa.min),tn.expandByPoint(oa.max))}tn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Rt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Rt.fromBufferAttribute(o,l),c&&(xr.fromBufferAttribute(e,l),Rt.add(xr)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new D,c[C]=new D;const l=new D,u=new D,h=new D,d=new he,f=new he,_=new he,v=new D,g=new D;function m(C,w,M){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),d.fromBufferAttribute(a,C),f.fromBufferAttribute(a,w),_.fromBufferAttribute(a,M),u.sub(l),h.sub(l),f.sub(d),_.sub(d);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(L),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),o[C].add(v),o[w].add(v),o[M].add(v),c[C].add(g),c[w].add(g),c[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,w=y.length;C<w;++C){const M=y[C],L=M.start,I=M.count;for(let N=L,k=L+I;N<k;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new D,S=new D,E=new D,T=new D;function A(C){E.fromBufferAttribute(r,C),T.copy(E);const w=o[C];x.copy(w),x.sub(E.multiplyScalar(E.dot(w))).normalize(),S.crossVectors(T,w);const L=S.dot(c[C])<0?-1:1;s.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,w=y.length;C<w;++C){const M=y[C],L=M.start,I=M.count;for(let N=L,k=L+I;N<k;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new D,a=new D,s=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,_=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let m=0;m<u;m++)d[_++]=l[f++]}return new Ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $e,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],h=a[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new ct,Bi=new Pa,Ka=new Li,Cu=new D,_r=new D,vr=new D,yr=new D,zs=new D,Ja=new D,Qa=new he,eo=new he,to=new he,Ru=new D,Pu=new D,Lu=new D,no=new D,io=new D;class Je extends vt{constructor(e=new $e,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ja.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],h=a[c];u!==0&&(zs.fromBufferAttribute(h,e),s?Ja.addScaledVector(zs,u):Ja.addScaledVector(zs.sub(t),u))}t.add(Ja)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(a),Bi.copy(e.ray).recast(e.near),!(Ka.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Ka,Cu)===null||Bi.origin.distanceToSquared(Cu)>(e.far-e.near)**2))&&(Tu.copy(a).invert(),Bi.copy(e.ray).applyMatrix4(Tu),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,v=d.length;_<v;_++){const g=d[_],m=s[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=y,E=x;S<E;S+=3){const T=o.getX(S),A=o.getX(S+1),C=o.getX(S+2);r=ro(this,m,e,n,l,u,h,T,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=_,m=v;g<m;g+=3){const y=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);r=ro(this,s,e,n,l,u,h,y,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,v=d.length;_<v;_++){const g=d[_],m=s[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=y,E=x;S<E;S+=3){const T=S,A=S+1,C=S+2;r=ro(this,m,e,n,l,u,h,T,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=_,m=v;g<m;g+=3){const y=g,x=g+1,S=g+2;r=ro(this,s,e,n,l,u,h,y,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Am(i,e,t,n,r,a,s,o){let c;if(e.side===$t?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===Dn,o),c===null)return null;io.copy(o),io.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(io);return l<t.near||l>t.far?null:{distance:l,point:io.clone(),object:i}}function ro(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,_r),i.getVertexPosition(c,vr),i.getVertexPosition(l,yr);const u=Am(i,e,t,n,_r,vr,yr,no);if(u){r&&(Qa.fromBufferAttribute(r,o),eo.fromBufferAttribute(r,c),to.fromBufferAttribute(r,l),u.uv=dn.getInterpolation(no,_r,vr,yr,Qa,eo,to,new he)),a&&(Qa.fromBufferAttribute(a,o),eo.fromBufferAttribute(a,c),to.fromBufferAttribute(a,l),u.uv1=dn.getInterpolation(no,_r,vr,yr,Qa,eo,to,new he)),s&&(Ru.fromBufferAttribute(s,o),Pu.fromBufferAttribute(s,c),Lu.fromBufferAttribute(s,l),u.normal=dn.getInterpolation(no,_r,vr,yr,Ru,Pu,Lu,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new D,materialIndex:0};dn.getNormal(_r,vr,yr,h.normal),u.face=h}return u}class Yr extends $e{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,s,a,0),_("z","y","x",1,-1,n,t,-e,s,a,1),_("x","z","y",1,1,e,n,t,r,s,2),_("x","z","y",1,-1,e,n,-t,r,s,3),_("x","y","z",1,-1,e,t,n,r,a,4),_("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(h,2));function _(v,g,m,y,x,S,E,T,A,C,w){const M=S/A,L=E/C,I=S/2,N=E/2,k=T/2,B=A+1,O=C+1;let H=0,G=0;const ne=new D;for(let ae=0;ae<O;ae++){const re=ae*L-N;for(let ee=0;ee<B;ee++){const pe=ee*M-I;ne[v]=pe*y,ne[g]=re*x,ne[m]=k,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[g]=0,ne[m]=T>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(ee/A),h.push(1-ae/C),H+=1}}for(let ae=0;ae<C;ae++)for(let re=0;re<A;re++){const ee=d+re+B*ae,pe=d+re+B*(ae+1),q=d+(re+1)+B*(ae+1),te=d+(re+1)+B*ae;c.push(ee,pe,te),c.push(pe,q,te),G+=6}o.addGroup(f,G,w),f+=G,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=Wr(i[t]);for(const r in n)e[r]=n[r]}return e}function Tm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const zh={clone:Wr,merge:Vt};var Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bh extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new D,Du=new he,Iu=new he;class cn extends Bh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Iu),t.subVectors(Iu,Du)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mr=-90,Sr=1;class Pm extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Mr,Sr,e,t);r.layers=this.layers,this.add(r);const a=new cn(Mr,Sr,e,t);a.layers=this.layers,this.add(a);const s=new cn(Mr,Sr,e,t);s.layers=this.layers,this.add(s);const o=new cn(Mr,Sr,e,t);o.layers=this.layers,this.add(o);const c=new cn(Mr,Sr,e,t);c.layers=this.layers,this.add(c);const l=new cn(Mr,Sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class kh extends qt{constructor(e,t,n,r,a,s,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Br,super(e,t,n,r,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lm extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new kh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yr(5,5,5),a=new ti({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:yi});a.uniforms.tEquirect.value=t;const s=new Je(r,a),o=t.minFilter;return t.minFilter===$i&&(t.minFilter=yn),new Pm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const Bs=new D,Dm=new D,Im=new Ye;class Ze{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Bs.subVectors(n,t).cross(Dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Im.getNormalMatrix(e),r=this.coplanarPoint(Bs).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Li,ao=new D;class tl{constructor(e=new Ze,t=new Ze,n=new Ze,r=new Ze,a=new Ze,s=new Ze){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],_=r[9],v=r[10],g=r[11],m=r[12],y=r[13],x=r[14],S=r[15];if(n[0].setComponents(c-a,d-l,g-f,S-m).normalize(),n[1].setComponents(c+a,d+l,g+f,S+m).normalize(),n[2].setComponents(c+s,d+u,g+_,S+y).normalize(),n[3].setComponents(c-s,d-u,g-_,S-y).normalize(),n[4].setComponents(c-o,d-h,g-v,S-x).normalize(),t===jn)n[5].setComponents(c+o,d+h,g+v,S+x).normalize();else if(t===Uo)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ao.x=r.normal.x>0?e.max.x:e.min.x,ao.y=r.normal.y>0?e.max.y:e.min.y,ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vh(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Nm(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,o),h.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let f=0,_=d.length;f<_;f++){const v=d[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}class is extends $e{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],_=[],v=[],g=[];for(let m=0;m<u;m++){const y=m*d-s;for(let x=0;x<l;x++){const S=x*h-a;_.push(S,-y,0),v.push(0,0,1),g.push(x/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){const x=y+l*m,S=y+l*(m+1),E=y+1+l*(m+1),T=y+1+l*m;f.push(x,S,T),f.push(S,E,T)}this.setIndex(f),this.setAttribute("position",new Ue(_,3)),this.setAttribute("normal",new Ue(v,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$m=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,r0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,f0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,T0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,h1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Um,alphahash_pars_fragment:Om,alphamap_fragment:Fm,alphamap_pars_fragment:zm,alphatest_fragment:Bm,alphatest_pars_fragment:km,aomap_fragment:Vm,aomap_pars_fragment:Gm,batching_pars_vertex:Hm,batching_vertex:Wm,begin_vertex:qm,beginnormal_vertex:Xm,bsdfs:Ym,iridescence_fragment:jm,bumpmap_pars_fragment:$m,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:Jm,clipping_planes_vertex:Qm,color_fragment:e0,color_pars_fragment:t0,color_pars_vertex:n0,color_vertex:i0,common:r0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:o0,displacementmap_pars_vertex:s0,displacementmap_vertex:c0,emissivemap_fragment:l0,emissivemap_pars_fragment:u0,colorspace_fragment:d0,colorspace_pars_fragment:h0,envmap_fragment:f0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:T0,envmap_vertex:x0,fog_vertex:_0,fog_pars_vertex:v0,fog_fragment:y0,fog_pars_fragment:M0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:w0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:E0,lights_pars_begin:A0,lights_toon_fragment:C0,lights_toon_pars_fragment:R0,lights_phong_fragment:P0,lights_phong_pars_fragment:L0,lights_physical_fragment:D0,lights_physical_pars_fragment:I0,lights_fragment_begin:N0,lights_fragment_maps:U0,lights_fragment_end:O0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:k0,map_fragment:V0,map_pars_fragment:G0,map_particle_fragment:H0,map_particle_pars_fragment:W0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:X0,morphinstance_vertex:Y0,morphcolor_vertex:j0,morphnormal_vertex:$0,morphtarget_pars_vertex:Z0,morphtarget_vertex:K0,normal_fragment_begin:J0,normal_fragment_maps:Q0,normal_pars_fragment:eg,normal_pars_vertex:tg,normal_vertex:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:og,iridescence_pars_fragment:sg,opaque_fragment:cg,packing:lg,premultiplied_alpha_fragment:ug,project_vertex:dg,dithering_fragment:hg,dithering_pars_fragment:fg,roughnessmap_fragment:pg,roughnessmap_pars_fragment:mg,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:xg,shadowmap_vertex:_g,shadowmask_pars_fragment:vg,skinbase_vertex:yg,skinning_pars_vertex:Mg,skinning_vertex:Sg,skinnormal_vertex:wg,specularmap_fragment:bg,specularmap_pars_fragment:Eg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Tg,transmission_fragment:Cg,transmission_pars_fragment:Rg,uv_pars_fragment:Pg,uv_pars_vertex:Lg,uv_vertex:Dg,worldpos_vertex:Ig,background_vert:Ng,background_frag:Ug,backgroundCube_vert:Og,backgroundCube_frag:Fg,cube_vert:zg,cube_frag:Bg,depth_vert:kg,depth_frag:Vg,distanceRGBA_vert:Gg,distanceRGBA_frag:Hg,equirect_vert:Wg,equirect_frag:qg,linedashed_vert:Xg,linedashed_frag:Yg,meshbasic_vert:jg,meshbasic_frag:$g,meshlambert_vert:Zg,meshlambert_frag:Kg,meshmatcap_vert:Jg,meshmatcap_frag:Qg,meshnormal_vert:e1,meshnormal_frag:t1,meshphong_vert:n1,meshphong_frag:i1,meshphysical_vert:r1,meshphysical_frag:a1,meshtoon_vert:o1,meshtoon_frag:s1,points_vert:c1,points_frag:l1,shadow_vert:u1,shadow_frag:d1,sprite_vert:h1,sprite_frag:f1},xe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Tn={basic:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Vt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Vt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Vt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Vt([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Vt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Vt([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Vt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Vt([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Vt([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Vt([xe.lights,xe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Tn.physical={uniforms:Vt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const oo={r:0,b:0,g:0},Vi=new An,p1=new ct;function m1(i,e,t,n,r,a,s){const o=new ye(0);let c=a===!0?0:1,l,u,h=null,d=0,f=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const S=_(y);S===null?m(o,c):S&&S.isColor&&(m(S,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===es)?(u===void 0&&(u=new Je(new Yr(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Wr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Vi.copy(x.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(p1.makeRotationFromEuler(Vi)),u.material.toneMapped=rt.getTransfer(S.colorSpace)!==ht,(h!==S||d!==S.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Je(new is(2,2),new ti({name:"BackgroundMaterial",uniforms:Wr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=rt.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,x){y.getRGB(oo,Fh(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(o,c)},render:v,addToRenderList:g}}function g1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let a=r,s=!1;function o(M,L,I,N,k){let B=!1;const O=h(N,I,L);a!==O&&(a=O,l(a.object)),B=f(M,N,I,k),B&&_(M,N,I,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(B||s)&&(s=!1,S(M,L,I,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,L,I){const N=I.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let B=k[L.id];B===void 0&&(B={},k[L.id]=B);let O=B[N];return O===void 0&&(O=d(c()),B[N]=O),O}function d(M){const L=[],I=[],N=[];for(let k=0;k<t;k++)L[k]=0,I[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,L,I,N){const k=a.attributes,B=L.attributes;let O=0;const H=I.getAttributes();for(const G in H)if(H[G].location>=0){const ae=k[G];let re=B[G];if(re===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),ae===void 0||ae.attribute!==re||re&&ae.data!==re.data)return!0;O++}return a.attributesNum!==O||a.index!==N}function _(M,L,I,N){const k={},B=L.attributes;let O=0;const H=I.getAttributes();for(const G in H)if(H[G].location>=0){let ae=B[G];ae===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const re={};re.attribute=ae,ae&&ae.data&&(re.data=ae.data),k[G]=re,O++}a.attributes=k,a.attributesNum=O,a.index=N}function v(){const M=a.newAttributes;for(let L=0,I=M.length;L<I;L++)M[L]=0}function g(M){m(M,0)}function m(M,L){const I=a.newAttributes,N=a.enabledAttributes,k=a.attributeDivisors;I[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),k[M]!==L&&(i.vertexAttribDivisor(M,L),k[M]=L)}function y(){const M=a.newAttributes,L=a.enabledAttributes;for(let I=0,N=L.length;I<N;I++)L[I]!==M[I]&&(i.disableVertexAttribArray(I),L[I]=0)}function x(M,L,I,N,k,B,O){O===!0?i.vertexAttribIPointer(M,L,I,k,B):i.vertexAttribPointer(M,L,I,N,k,B)}function S(M,L,I,N){v();const k=N.attributes,B=I.getAttributes(),O=L.defaultAttributeValues;for(const H in B){const G=B[H];if(G.location>=0){let ne=k[H];if(ne===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const ae=ne.normalized,re=ne.itemSize,ee=e.get(ne);if(ee===void 0)continue;const pe=ee.buffer,q=ee.type,te=ee.bytesPerElement,fe=q===i.INT||q===i.UNSIGNED_INT||ne.gpuType===bh;if(ne.isInterleavedBufferAttribute){const F=ne.data,se=F.stride,_e=ne.offset;if(F.isInstancedInterleavedBuffer){for(let Se=0;Se<G.locationSize;Se++)m(G.location+Se,F.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Se=0;Se<G.locationSize;Se++)g(G.location+Se);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Se=0;Se<G.locationSize;Se++)x(G.location+Se,re/G.locationSize,q,ae,se*te,(_e+re/G.locationSize*Se)*te,fe)}else{if(ne.isInstancedBufferAttribute){for(let F=0;F<G.locationSize;F++)m(G.location+F,ne.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let F=0;F<G.locationSize;F++)g(G.location+F);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let F=0;F<G.locationSize;F++)x(G.location+F,re/G.locationSize,q,ae,re*te,re/G.locationSize*F*te,fe)}}else if(O!==void 0){const ae=O[H];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(G.location,ae);break;case 3:i.vertexAttrib3fv(G.location,ae);break;case 4:i.vertexAttrib4fv(G.location,ae);break;default:i.vertexAttrib1fv(G.location,ae)}}}}y()}function E(){C();for(const M in n){const L=n[M];for(const I in L){const N=L[I];for(const k in N)u(N[k].object),delete N[k];delete L[I]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const I in L){const N=L[I];for(const k in N)u(N[k].object),delete N[k];delete L[I]}delete n[M.id]}function A(M){for(const L in n){const I=n[L];if(I[M.id]===void 0)continue;const N=I[M.id];for(const k in N)u(N[k].object),delete N[k];delete I[M.id]}}function C(){w(),s=!0,a!==r&&(a=r,l(a.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function x1(i,e,t){let n;function r(l){n=l}function a(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function s(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(l[f],u[f]);else{d.multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)s(l[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v];for(let v=0;v<d.length;v++)t.update(_,n,d[v])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _1(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==Cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ei&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==xi&&!A)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:S,maxSamples:E}}function v1(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Ze,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||_===null||_.length===0||a&&!g)a?u(null):l();else{const y=a?0:n,x=y*4;let S=m.clippingState||null;c.value=S,S=u(_,d,x,f);for(let E=0;E!==x;++E)S[E]=t[E];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const m=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,S=f;x!==v;++x,S+=4)s.copy(h[x]).applyMatrix4(y,o),s.normal.toArray(g,S),g[S+3]=s.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function y1(i){let e=new WeakMap;function t(s,o){return o===fc?s.mapping=Br:o===pc&&(s.mapping=kr),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===fc||o===pc)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Lm(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class nr extends Bh{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cr=4,Nu=[.125,.215,.35,.446,.526,.582],Xi=20,ks=new nr,Uu=new ye;let Vs=null,Gs=0,Hs=0,Ws=!1;const Hi=(1+Math.sqrt(5))/2,wr=1/Hi,Ou=[new D(-Hi,wr,0),new D(Hi,wr,0),new D(-wr,0,Hi),new D(wr,0,Hi),new D(0,Hi,-wr),new D(0,Hi,wr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Hs=this._renderer.getActiveMipmapLevel(),Ws=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs,Gs,Hs),this._renderer.xr.enabled=Ws,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Hs=this._renderer.getActiveMipmapLevel(),Ws=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:ts,format:Cn,colorSpace:Ri,depthBuffer:!1},r=zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zu(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M1(a)),this._blurMaterial=S1(a,e,t)}return r}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,n,r){const o=new cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Uu),u.toneMapping=Mi,u.autoClear=!1;const f=new Xt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new Je(new Yr,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(Uu),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):y===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const x=this._cubeSize;so(r,y*x,m>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Br||e.mapping===kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Je(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;so(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,ks)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Ou[(r-a-1)%Ou.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Je(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),v=a/_,g=isFinite(a)?1+Math.floor(u*v):Xi;g>Xi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);const m=[];let y=0;for(let A=0;A<Xi;++A){const C=A/v,w=Math.exp(-C*C/2);m.push(w),A===0?y+=w:A<g&&(y+=2*w)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const S=this._sizeLods[r],E=3*S*(r>x-Cr?r-x+Cr:0),T=4*(this._cubeSize-S);so(t,E,T,3*S,2*S),c.setRenderTarget(t),c.render(h,ks)}}function M1(i){const e=[],t=[],n=[];let r=i;const a=i-Cr+1+Nu.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let c=1/o;s>i-Cr?c=Nu[s-i+Cr-1]:s===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,v=3,g=2,m=1,y=new Float32Array(v*_*f),x=new Float32Array(g*_*f),S=new Float32Array(m*_*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,C=T>2?0:-1,w=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(w,v*_*T),x.set(d,g*_*T);const M=[T,T,T,T,T,T];S.set(M,m*_*T)}const E=new $e;E.setAttribute("position",new Ft(y,v)),E.setAttribute("uv",new Ft(x,g)),E.setAttribute("faceIndex",new Ft(S,m)),e.push(E),r>Cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zu(i,e,t){const n=new Ai(i,e,t);return n.texture.mapping=es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function S1(i,e,t){const n=new Float32Array(Xi),r=new D(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Bu(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ku(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function w1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===fc||c===pc,u=c===Br||c===kr;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Fu(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Fu(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function b1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Qc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function E1(i,e,t,n){const r={},a=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}d.removeEventListener("dispose",s),delete r[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const v=f[_];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,_=h.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,S=y.length;x<S;x+=3){const E=y[x+0],T=y[x+1],A=y[x+2];d.push(E,T,T,A,A,E)}}else if(_!==void 0){const y=_.array;v=_.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const E=x+0,T=x+1,A=x+2;d.push(E,T,T,A,A,E)}}else return;const g=new(Lh(d)?Oh:Uh)(d,1);g.version=v;const m=a.get(h);m&&e.remove(m),a.set(h,g)}function u(h){const d=a.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function A1(i,e,t){let n;function r(d){n=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function c(d,f){i.drawElements(n,f,a,d*s),t.update(f,n,1)}function l(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,a,d*s,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<_;g++)this.render(d[g]/s,f[g]);else{v.multiDrawElementsWEBGL(n,f,0,a,d,0,_);let g=0;for(let m=0;m<_;m++)g+=f[m];t.update(g,n,1)}}function h(d,f,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/s,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,a,d,0,v,0,_);let m=0;for(let y=0;y<_;y++)m+=f[y];for(let y=0;y<v.length;y++)t.update(m,n,v[y])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function T1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function C1(i,e,t){const n=new WeakMap,r=new Lt;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let S=o.attributes.position.count*x,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*E*4*h),A=new Ih(T,S,E,h);A.type=xi,A.needsUpdate=!0;const C=x*4;for(let M=0;M<h;M++){const L=g[M],I=m[M],N=y[M],k=S*E*4*M;for(let B=0;B<L.count;B++){const O=B*C;f===!0&&(r.fromBufferAttribute(L,B),T[k+O+0]=r.x,T[k+O+1]=r.y,T[k+O+2]=r.z,T[k+O+3]=0),_===!0&&(r.fromBufferAttribute(I,B),T[k+O+4]=r.x,T[k+O+5]=r.y,T[k+O+6]=r.z,T[k+O+7]=0),v===!0&&(r.fromBufferAttribute(N,B),T[k+O+8]=r.x,T[k+O+9]=r.y,T[k+O+10]=r.z,T[k+O+11]=N.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new he(S,E)},n.set(o,d),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const _=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function R1(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}class Gh extends qt{constructor(e,t,n,r,a,s,o,c,l,u=Lr){if(u!==Lr&&u!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Lr&&(n=Vr),n===void 0&&u===Hr&&(n=Gr),super(null,r,a,s,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hh=new qt,Wh=new Gh(1,1);Wh.compareFunction=Ph;const qh=new Ih,Xh=new gm,Yh=new kh,Vu=[],Gu=[],Hu=new Float32Array(16),Wu=new Float32Array(9),qu=new Float32Array(4);function jr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Vu[r];if(a===void 0&&(a=new Float32Array(r),Vu[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rs(i,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function P1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function L1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function D1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function I1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function N1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;qu.set(n),i.uniformMatrix2fv(this.addr,!1,qu),Tt(t,n)}}function U1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),Tt(t,n)}}function O1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Hu.set(n),i.uniformMatrix4fv(this.addr,!1,Hu),Tt(t,n)}}function F1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function z1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function B1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function k1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function V1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function G1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function H1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function W1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function q1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const a=this.type===i.SAMPLER_2D_SHADOW?Wh:Hh;t.setTexture2D(e||a,r)}function X1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Xh,r)}function Y1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Yh,r)}function j1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qh,r)}function $1(i){switch(i){case 5126:return P1;case 35664:return L1;case 35665:return D1;case 35666:return I1;case 35674:return N1;case 35675:return U1;case 35676:return O1;case 5124:case 35670:return F1;case 35667:case 35671:return z1;case 35668:case 35672:return B1;case 35669:case 35673:return k1;case 5125:return V1;case 36294:return G1;case 36295:return H1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return j1}}function Z1(i,e){i.uniform1fv(this.addr,e)}function K1(i,e){const t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function J1(i,e){const t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function Q1(i,e){const t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function ex(i,e){const t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tx(i,e){const t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nx(i,e){const t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ix(i,e){i.uniform1iv(this.addr,e)}function rx(i,e){i.uniform2iv(this.addr,e)}function ax(i,e){i.uniform3iv(this.addr,e)}function ox(i,e){i.uniform4iv(this.addr,e)}function sx(i,e){i.uniform1uiv(this.addr,e)}function cx(i,e){i.uniform2uiv(this.addr,e)}function lx(i,e){i.uniform3uiv(this.addr,e)}function ux(i,e){i.uniform4uiv(this.addr,e)}function dx(i,e,t){const n=this.cache,r=e.length,a=rs(t,r);At(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Hh,a[s])}function hx(i,e,t){const n=this.cache,r=e.length,a=rs(t,r);At(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Xh,a[s])}function fx(i,e,t){const n=this.cache,r=e.length,a=rs(t,r);At(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Yh,a[s])}function px(i,e,t){const n=this.cache,r=e.length,a=rs(t,r);At(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||qh,a[s])}function mx(i){switch(i){case 5126:return Z1;case 35664:return K1;case 35665:return J1;case 35666:return Q1;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return sx;case 36294:return cx;case 36295:return lx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}class gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$1(t.type)}}class xx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mx(t.type)}}class _x{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const qs=/(\w+)(\])?(\[|\.)?/g;function Xu(i,e){i.seq.push(e),i.map[e.id]=e}function vx(i,e,t){const n=i.name,r=n.length;for(qs.lastIndex=0;;){const a=qs.exec(n),s=qs.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){Xu(t,l===void 0?new gx(o,i,e):new xx(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new _x(o),Xu(t,h)),t=h}}}class Eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);vx(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Yu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const yx=37297;let Mx=0;function Sx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function wx(i){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(i);let n;switch(e===t?n="":e===No&&t===Io?n="LinearDisplayP3ToLinearSRGB":e===Io&&t===No&&(n="LinearSRGBToLinearDisplayP3"),i){case Ri:case ns:return[n,"LinearTransferOETF"];case nn:case Kc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ju(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Sx(i.getShaderSource(e),s)}else return r}function bx(i,e){const t=wx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ex(i,e){let t;switch(e){case yp:t="Linear";break;case Mp:t="Reinhard";break;case Sp:t="OptimizedCineon";break;case Sh:t="ACESFilmic";break;case bp:t="AgX";break;case Ep:t="Neutral";break;case wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function Tx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function ha(i){return i!==""}function $u(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(Rx,Lx)}const Px=new Map;function Lx(i,e){let t=Xe[e];if(t===void 0){const n=Px.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}const Dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(i){return i.replace(Dx,Ix)}function Ix(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ju(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ux(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Br:case kr:e="ENVMAP_TYPE_CUBE";break;case es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ox(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $c:e="ENVMAP_BLENDING_MULTIPLY";break;case _p:e="ENVMAP_BLENDING_MIX";break;case vp:e="ENVMAP_BLENDING_ADD";break}return e}function zx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bx(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Nx(t),l=Ux(t),u=Ox(t),h=Fx(t),d=zx(t),f=Ax(t),_=Tx(a),v=r.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ha).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ha).join(`
`),m.length>0&&(m+=`
`)):(g=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),m=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Ex("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,bx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),s=vc(s),s=$u(s,t),s=Zu(s,t),o=vc(o),o=$u(o,t),o=Zu(o,t),s=Ku(s),o=Ku(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+g+s,S=y+m+o,E=Yu(r,r.VERTEX_SHADER,x),T=Yu(r,r.FRAGMENT_SHADER,S);r.attachShader(v,E),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(L){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(v).trim(),N=r.getShaderInfoLog(E).trim(),k=r.getShaderInfoLog(T).trim();let B=!0,O=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,E,T);else{const H=ju(r,E,"vertex"),G=ju(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+H+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||k==="")&&(O=!1);O&&(L.diagnostics={runnable:B,programLog:I,vertexShader:{log:N,prefix:g},fragmentShader:{log:k,prefix:m}})}r.deleteShader(E),r.deleteShader(T),C=new Eo(r,v),w=Cx(r,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,yx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=T,this}let kx=0;class Vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gx(e),t.set(e,n)),n}}class Gx{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}}function Hx(i,e,t,n,r,a,s){const o=new el,c=new Vx,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,M,L,I,N){const k=I.fog,B=N.geometry,O=w.isMeshStandardMaterial?I.environment:null,H=(w.isMeshStandardMaterial?t:e).get(w.envMap||O),G=H&&H.mapping===es?H.image.height:null,ne=_[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=ae!==void 0?ae.length:0;let ee=0;B.morphAttributes.position!==void 0&&(ee=1),B.morphAttributes.normal!==void 0&&(ee=2),B.morphAttributes.color!==void 0&&(ee=3);let pe,q,te,fe;if(ne){const Qe=Tn[ne];pe=Qe.vertexShader,q=Qe.fragmentShader}else pe=w.vertexShader,q=w.fragmentShader,c.update(w),te=c.getVertexShaderID(w),fe=c.getFragmentShaderID(w);const F=i.getRenderTarget(),se=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,Se=!!w.map,z=!!w.matcap,Ae=!!H,ke=!!w.aoMap,Ke=!!w.lightMap,Re=!!w.bumpMap,je=!!w.normalMap,Ge=!!w.displacementMap,Fe=!!w.emissiveMap,at=!!w.metalnessMap,U=!!w.roughnessMap,R=w.anisotropy>0,$=w.clearcoat>0,ie=w.dispersion>0,K=w.iridescence>0,Q=w.sheen>0,le=w.transmission>0,ue=R&&!!w.anisotropyMap,de=$&&!!w.clearcoatMap,we=$&&!!w.clearcoatNormalMap,ce=$&&!!w.clearcoatRoughnessMap,Me=K&&!!w.iridescenceMap,He=K&&!!w.iridescenceThicknessMap,Ie=Q&&!!w.sheenColorMap,ge=Q&&!!w.sheenRoughnessMap,We=!!w.specularMap,qe=!!w.specularColorMap,mt=!!w.specularIntensityMap,b=le&&!!w.transmissionMap,Z=le&&!!w.thicknessMap,X=!!w.gradientMap,J=!!w.alphaMap,oe=w.alphaTest>0,Pe=!!w.alphaHash,Ve=!!w.extensions;let gt=Mi;w.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(gt=i.toneMapping);const yt={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:pe,fragmentShader:q,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:se,instancingColor:se&&N.instanceColor!==null,instancingMorph:se&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ri,alphaToCoverage:!!w.alphaToCoverage,map:Se,matcap:z,envMap:Ae,envMapMode:Ae&&H.mapping,envMapCubeUVHeight:G,aoMap:ke,lightMap:Ke,bumpMap:Re,normalMap:je,displacementMap:d&&Ge,emissiveMap:Fe,normalMapObjectSpace:je&&w.normalMapType===Bp,normalMapTangentSpace:je&&w.normalMapType===Zc,metalnessMap:at,roughnessMap:U,anisotropy:R,anisotropyMap:ue,clearcoat:$,clearcoatMap:de,clearcoatNormalMap:we,clearcoatRoughnessMap:ce,dispersion:ie,iridescence:K,iridescenceMap:Me,iridescenceThicknessMap:He,sheen:Q,sheenColorMap:Ie,sheenRoughnessMap:ge,specularMap:We,specularColorMap:qe,specularIntensityMap:mt,transmission:le,transmissionMap:b,thicknessMap:Z,gradientMap:X,opaque:w.transparent===!1&&w.blending===Pr&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:oe,alphaHash:Pe,combine:w.combine,mapUv:Se&&v(w.map.channel),aoMapUv:ke&&v(w.aoMap.channel),lightMapUv:Ke&&v(w.lightMap.channel),bumpMapUv:Re&&v(w.bumpMap.channel),normalMapUv:je&&v(w.normalMap.channel),displacementMapUv:Ge&&v(w.displacementMap.channel),emissiveMapUv:Fe&&v(w.emissiveMap.channel),metalnessMapUv:at&&v(w.metalnessMap.channel),roughnessMapUv:U&&v(w.roughnessMap.channel),anisotropyMapUv:ue&&v(w.anisotropyMap.channel),clearcoatMapUv:de&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:He&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(w.sheenRoughnessMap.channel),specularMapUv:We&&v(w.specularMap.channel),specularColorMapUv:qe&&v(w.specularColorMap.channel),specularIntensityMapUv:mt&&v(w.specularIntensityMap.channel),transmissionMapUv:b&&v(w.transmissionMap.channel),thicknessMapUv:Z&&v(w.thicknessMap.channel),alphaMapUv:J&&v(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(je||R),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Se||J),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Se&&w.map.isVideoTexture===!0&&rt.getTransfer(w.map.colorSpace)===ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pt,flipSided:w.side===$t,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ve&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function m(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(y(M,w),x(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),w.push(o.mask)}function S(w){const M=_[w.type];let L;if(M){const I=Tn[M];L=zh.clone(I.uniforms)}else L=w.uniforms;return L}function E(w,M){let L;for(let I=0,N=u.length;I<N;I++){const k=u[I];if(k.cacheKey===M){L=k,++L.usedTimes;break}}return L===void 0&&(L=new Bx(i,M,w,a),u.push(L)),L}function T(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){c.remove(w)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:C}}function Wx(){let i=new WeakMap;function e(a){let s=i.get(a);return s===void 0&&(s={},i.set(a,s)),s}function t(a){i.delete(a)}function n(a,s,o){i.get(a)[s]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function qx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ed(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(h,d,f,_,v,g){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function o(h,d,f,_,v,g){const m=s(h,d,f,_,v,g);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(h,d,f,_,v,g){const m=s(h,d,f,_,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||qx),n.length>1&&n.sort(d||Qu),r.length>1&&r.sort(d||Qu)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:u,sort:l}}function Xx(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new ed,i.set(n,[s])):r>=a.length?(s=new ed,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ye};break;case"SpotLight":t={position:new D,direction:new D,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function jx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $x=0;function Zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kx(i){const e=new Yx,t=jx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,a=new ct,s=new ct;function o(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,_=0,v=0,g=0,m=0,y=0,x=0,S=0,E=0,T=0,A=0;l.sort(Zx);for(let w=0,M=l.length;w<M;w++){const L=l[w],I=L.color,N=L.intensity,k=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=I.r*N,h+=I.g*N,d+=I.b*N;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],N);A++}else if(L.isDirectionalLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,G=t.get(L);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=O,f++}else if(L.isSpotLight){const O=e.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(I).multiplyScalar(N),O.distance=k,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[v]=O;const H=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,H.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=H.matrix,L.castShadow){const G=t.get(L);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=B,S++}v++}else if(L.isRectAreaLight){const O=e.get(L);O.color.copy(I).multiplyScalar(N),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=O,g++}else if(L.isPointLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const H=L.shadow,G=t.get(L);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=L.shadow.matrix,x++}n.point[_]=O,_++}else if(L.isHemisphereLight){const O=e.get(L);O.skyColor.copy(L.color).multiplyScalar(N),O.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[m]=O,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==S||C.numSpotMaps!==E||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=f,C.pointLength=_,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=S,C.numSpotMaps=E,C.numLightProbes=A,n.version=$x++)}function c(l,u){let h=0,d=0,f=0,_=0,v=0;const g=u.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const x=l[m];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(x.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),s.identity(),a.copy(x.matrixWorld),a.premultiply(g),s.extractRotation(a),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function td(i){const e=new Kx(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function Jx(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new td(i),e.set(r,[o])):a>=s.length?(o=new td(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Qx extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e_ extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i_(i,e,t){let n=new tl;const r=new he,a=new he,s=new Lt,o=new Qx({depthPacking:zp}),c=new e_,l={},u=t.maxTextureSize,h={[Dn]:$t,[$t]:Dn,[pt]:pt},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:t_,fragmentShader:n_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new $e;_.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Je(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let m=this.type;this.render=function(T,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(yi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=m!==Gn&&this.type===Gn,k=m===Gn&&this.type!==Gn;for(let B=0,O=T.length;B<O;B++){const H=T[B],G=H.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ne=G.getFrameExtents();if(r.multiply(ne),a.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ne.x),r.x=a.x*ne.x,G.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ne.y),r.y=a.y*ne.y,G.mapSize.y=a.y)),G.map===null||N===!0||k===!0){const re=this.type!==Gn?{minFilter:hn,magFilter:hn}:{};G.map!==null&&G.map.dispose(),G.map=new Ai(r.x,r.y,re),G.map.texture.name=H.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ae=G.getViewportCount();for(let re=0;re<ae;re++){const ee=G.getViewport(re);s.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),I.viewport(s),G.updateMatrices(H,re),n=G.getFrustum(),S(A,C,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===Gn&&y(G,C),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,M,L)};function y(T,A){const C=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ai(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,f,v,null)}function x(T,A,C,w){let M=null;const L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=M.uuid,N=A.uuid;let k=l[I];k===void 0&&(k={},l[I]=k);let B=k[N];B===void 0&&(B=M.clone(),k[N]=B,A.addEventListener("dispose",E)),M=B}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Gn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=C}return M}function S(T,A,C,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const N=e.update(T),k=T.material;if(Array.isArray(k)){const B=N.groups;for(let O=0,H=B.length;O<H;O++){const G=B[O],ne=k[G.materialIndex];if(ne&&ne.visible){const ae=x(T,ne,w,M);T.onBeforeShadow(i,T,A,C,N,ae,G),i.renderBufferDirect(C,null,N,ae,T,G),T.onAfterShadow(i,T,A,C,N,ae,G)}}}else if(k.visible){const B=x(T,k,w,M);T.onBeforeShadow(i,T,A,C,N,B,null),i.renderBufferDirect(C,null,N,B,T,null),T.onAfterShadow(i,T,A,C,N,B,null)}}const I=T.children;for(let N=0,k=I.length;N<k;N++)S(I[N],A,C,w,M)}function E(T){T.target.removeEventListener("dispose",E);for(const C in l){const w=l[C],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function r_(i){function e(){let b=!1;const Z=new Lt;let X=null;const J=new Lt(0,0,0,0);return{setMask:function(oe){X!==oe&&!b&&(i.colorMask(oe,oe,oe,oe),X=oe)},setLocked:function(oe){b=oe},setClear:function(oe,Pe,Ve,gt,yt){yt===!0&&(oe*=gt,Pe*=gt,Ve*=gt),Z.set(oe,Pe,Ve,gt),J.equals(Z)===!1&&(i.clearColor(oe,Pe,Ve,gt),J.copy(Z))},reset:function(){b=!1,X=null,J.set(-1,0,0,0)}}}function t(){let b=!1,Z=null,X=null,J=null;return{setTest:function(oe){oe?fe(i.DEPTH_TEST):F(i.DEPTH_TEST)},setMask:function(oe){Z!==oe&&!b&&(i.depthMask(oe),Z=oe)},setFunc:function(oe){if(X!==oe){switch(oe){case dp:i.depthFunc(i.NEVER);break;case hp:i.depthFunc(i.ALWAYS);break;case fp:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case pp:i.depthFunc(i.EQUAL);break;case mp:i.depthFunc(i.GEQUAL);break;case gp:i.depthFunc(i.GREATER);break;case xp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=oe}},setLocked:function(oe){b=oe},setClear:function(oe){J!==oe&&(i.clearDepth(oe),J=oe)},reset:function(){b=!1,Z=null,X=null,J=null}}}function n(){let b=!1,Z=null,X=null,J=null,oe=null,Pe=null,Ve=null,gt=null,yt=null;return{setTest:function(Qe){b||(Qe?fe(i.STENCIL_TEST):F(i.STENCIL_TEST))},setMask:function(Qe){Z!==Qe&&!b&&(i.stencilMask(Qe),Z=Qe)},setFunc:function(Qe,Mt,St){(X!==Qe||J!==Mt||oe!==St)&&(i.stencilFunc(Qe,Mt,St),X=Qe,J=Mt,oe=St)},setOp:function(Qe,Mt,St){(Pe!==Qe||Ve!==Mt||gt!==St)&&(i.stencilOp(Qe,Mt,St),Pe=Qe,Ve=Mt,gt=St)},setLocked:function(Qe){b=Qe},setClear:function(Qe){yt!==Qe&&(i.clearStencil(Qe),yt=Qe)},reset:function(){b=!1,Z=null,X=null,J=null,oe=null,Pe=null,Ve=null,gt=null,yt=null}}}const r=new e,a=new t,s=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,_=!1,v=null,g=null,m=null,y=null,x=null,S=null,E=null,T=new ye(0,0,0),A=0,C=!1,w=null,M=null,L=null,I=null,N=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=O>=2);let G=null,ne={};const ae=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),ee=new Lt().fromArray(ae),pe=new Lt().fromArray(re);function q(b,Z,X,J){const oe=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(b,Pe),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<X;Ve++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(Z+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return Pe}const te={};te[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),fe(i.DEPTH_TEST),a.setFunc(Po),Re(!1),je(Fl),fe(i.CULL_FACE),ke(yi);function fe(b){l[b]!==!0&&(i.enable(b),l[b]=!0)}function F(b){l[b]!==!1&&(i.disable(b),l[b]=!1)}function se(b,Z){return u[b]!==Z?(i.bindFramebuffer(b,Z),u[b]=Z,b===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Z),b===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function _e(b,Z){let X=d,J=!1;if(b){X=h.get(Z),X===void 0&&(X=[],h.set(Z,X));const oe=b.textures;if(X.length!==oe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,Ve=oe.length;Pe<Ve;Pe++)X[Pe]=i.COLOR_ATTACHMENT0+Pe;X.length=oe.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function Se(b){return f!==b?(i.useProgram(b),f=b,!0):!1}const z={[qi]:i.FUNC_ADD,[jf]:i.FUNC_SUBTRACT,[$f]:i.FUNC_REVERSE_SUBTRACT};z[Zf]=i.MIN,z[Kf]=i.MAX;const Ae={[Jf]:i.ZERO,[Qf]:i.ONE,[ep]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[op]:i.SRC_ALPHA_SATURATE,[rp]:i.DST_COLOR,[np]:i.DST_ALPHA,[tp]:i.ONE_MINUS_SRC_COLOR,[hc]:i.ONE_MINUS_SRC_ALPHA,[ap]:i.ONE_MINUS_DST_COLOR,[ip]:i.ONE_MINUS_DST_ALPHA,[sp]:i.CONSTANT_COLOR,[cp]:i.ONE_MINUS_CONSTANT_COLOR,[lp]:i.CONSTANT_ALPHA,[up]:i.ONE_MINUS_CONSTANT_ALPHA};function ke(b,Z,X,J,oe,Pe,Ve,gt,yt,Qe){if(b===yi){_===!0&&(F(i.BLEND),_=!1);return}if(_===!1&&(fe(i.BLEND),_=!0),b!==Yf){if(b!==v||Qe!==C){if((g!==qi||x!==qi)&&(i.blendEquation(i.FUNC_ADD),g=qi,x=qi),Qe)switch(b){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zr:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}m=null,y=null,S=null,E=null,T.set(0,0,0),A=0,v=b,C=Qe}return}oe=oe||Z,Pe=Pe||X,Ve=Ve||J,(Z!==g||oe!==x)&&(i.blendEquationSeparate(z[Z],z[oe]),g=Z,x=oe),(X!==m||J!==y||Pe!==S||Ve!==E)&&(i.blendFuncSeparate(Ae[X],Ae[J],Ae[Pe],Ae[Ve]),m=X,y=J,S=Pe,E=Ve),(gt.equals(T)===!1||yt!==A)&&(i.blendColor(gt.r,gt.g,gt.b,yt),T.copy(gt),A=yt),v=b,C=!1}function Ke(b,Z){b.side===pt?F(i.CULL_FACE):fe(i.CULL_FACE);let X=b.side===$t;Z&&(X=!X),Re(X),b.blending===Pr&&b.transparent===!1?ke(yi):ke(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),a.setFunc(b.depthFunc),a.setTest(b.depthTest),a.setMask(b.depthWrite),r.setMask(b.colorWrite);const J=b.stencilWrite;s.setTest(J),J&&(s.setMask(b.stencilWriteMask),s.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),s.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),Fe(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):F(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(b){w!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),w=b)}function je(b){b!==Wf?(fe(i.CULL_FACE),b!==M&&(b===Fl?i.cullFace(i.BACK):b===qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):F(i.CULL_FACE),M=b}function Ge(b){b!==L&&(B&&i.lineWidth(b),L=b)}function Fe(b,Z,X){b?(fe(i.POLYGON_OFFSET_FILL),(I!==Z||N!==X)&&(i.polygonOffset(Z,X),I=Z,N=X)):F(i.POLYGON_OFFSET_FILL)}function at(b){b?fe(i.SCISSOR_TEST):F(i.SCISSOR_TEST)}function U(b){b===void 0&&(b=i.TEXTURE0+k-1),G!==b&&(i.activeTexture(b),G=b)}function R(b,Z,X){X===void 0&&(G===null?X=i.TEXTURE0+k-1:X=G);let J=ne[X];J===void 0&&(J={type:void 0,texture:void 0},ne[X]=J),(J.type!==b||J.texture!==Z)&&(G!==X&&(i.activeTexture(X),G=X),i.bindTexture(b,Z||te[b]),J.type=b,J.texture=Z)}function $(){const b=ne[G];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function we(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ie(b){ee.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),ee.copy(b))}function ge(b){pe.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),pe.copy(b))}function We(b,Z){let X=c.get(Z);X===void 0&&(X=new WeakMap,c.set(Z,X));let J=X.get(b);J===void 0&&(J=i.getUniformBlockIndex(Z,b.name),X.set(b,J))}function qe(b,Z){const J=c.get(Z).get(b);o.get(Z)!==J&&(i.uniformBlockBinding(Z,J,b.__bindingPointIndex),o.set(Z,J))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},G=null,ne={},u={},h=new WeakMap,d=[],f=null,_=!1,v=null,g=null,m=null,y=null,x=null,S=null,E=null,T=new ye(0,0,0),A=0,C=!1,w=null,M=null,L=null,I=null,N=null,ee.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:fe,disable:F,bindFramebuffer:se,drawBuffers:_e,useProgram:Se,setBlending:ke,setMaterial:Ke,setFlipSided:Re,setCullFace:je,setLineWidth:Ge,setPolygonOffset:Fe,setScissorTest:at,activeTexture:U,bindTexture:R,unbindTexture:$,compressedTexImage2D:ie,compressedTexImage3D:K,texImage2D:Me,texImage3D:He,updateUBOMapping:We,uniformBlockBinding:qe,texStorage2D:we,texStorage3D:ce,texSubImage2D:Q,texSubImage3D:le,compressedTexSubImage2D:ue,compressedTexSubImage3D:de,scissor:Ie,viewport:ge,reset:mt}}function a_(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new he,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,R){return f?new OffscreenCanvas(U,R):Oo("canvas")}function v(U,R,$){let ie=1;const K=at(U);if((K.width>$||K.height>$)&&(ie=$/Math.max(K.width,K.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Q=Math.floor(ie*K.width),le=Math.floor(ie*K.height);h===void 0&&(h=_(Q,le));const ue=R?_(Q,le):h;return ue.width=Q,ue.height=le,ue.getContext("2d").drawImage(U,0,0,Q,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Q+"x"+le+")."),ue}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),U;return U}function g(U){return U.generateMipmaps&&U.minFilter!==hn&&U.minFilter!==yn}function m(U){i.generateMipmap(U)}function y(U,R,$,ie,K=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Q=R;if(R===i.RED&&($===i.FLOAT&&(Q=i.R32F),$===i.HALF_FLOAT&&(Q=i.R16F),$===i.UNSIGNED_BYTE&&(Q=i.R8)),R===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(Q=i.R8UI),$===i.UNSIGNED_SHORT&&(Q=i.R16UI),$===i.UNSIGNED_INT&&(Q=i.R32UI),$===i.BYTE&&(Q=i.R8I),$===i.SHORT&&(Q=i.R16I),$===i.INT&&(Q=i.R32I)),R===i.RG&&($===i.FLOAT&&(Q=i.RG32F),$===i.HALF_FLOAT&&(Q=i.RG16F),$===i.UNSIGNED_BYTE&&(Q=i.RG8)),R===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(Q=i.RG8UI),$===i.UNSIGNED_SHORT&&(Q=i.RG16UI),$===i.UNSIGNED_INT&&(Q=i.RG32UI),$===i.BYTE&&(Q=i.RG8I),$===i.SHORT&&(Q=i.RG16I),$===i.INT&&(Q=i.RG32I)),R===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),R===i.RGBA){const le=K?Do:rt.getTransfer(ie);$===i.FLOAT&&(Q=i.RGBA32F),$===i.HALF_FLOAT&&(Q=i.RGBA16F),$===i.UNSIGNED_BYTE&&(Q=le===ht?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(U,R){let $;return U?R===null||R===Vr||R===Gr?$=i.DEPTH24_STENCIL8:R===xi?$=i.DEPTH32F_STENCIL8:R===Lo&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Vr||R===Gr?$=i.DEPTH_COMPONENT24:R===xi?$=i.DEPTH_COMPONENT32F:R===Lo&&($=i.DEPTH_COMPONENT16),$}function S(U,R){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==hn&&U.minFilter!==yn?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function E(U){const R=U.target;R.removeEventListener("dispose",E),A(R),R.isVideoTexture&&u.delete(R)}function T(U){const R=U.target;R.removeEventListener("dispose",T),w(R)}function A(U){const R=n.get(U);if(R.__webglInit===void 0)return;const $=U.source,ie=d.get($);if(ie){const K=ie[R.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(U),Object.keys(ie).length===0&&d.delete($)}n.remove(U)}function C(U){const R=n.get(U);i.deleteTexture(R.__webglTexture);const $=U.source,ie=d.get($);delete ie[R.__cacheKey],s.memory.textures--}function w(U){const R=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(R.__webglFramebuffer[ie]))for(let K=0;K<R.__webglFramebuffer[ie].length;K++)i.deleteFramebuffer(R.__webglFramebuffer[ie][K]);else i.deleteFramebuffer(R.__webglFramebuffer[ie]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[ie])}else{if(Array.isArray(R.__webglFramebuffer))for(let ie=0;ie<R.__webglFramebuffer.length;ie++)i.deleteFramebuffer(R.__webglFramebuffer[ie]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ie=0;ie<R.__webglColorRenderbuffer.length;ie++)R.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[ie]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const $=U.textures;for(let ie=0,K=$.length;ie<K;ie++){const Q=n.get($[ie]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),s.memory.textures--),n.remove($[ie])}n.remove(U)}let M=0;function L(){M=0}function I(){const U=M;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),M+=1,U}function N(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function k(U,R){const $=n.get(U);if(U.isVideoTexture&&Ge(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const ie=U.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe($,U,R);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+R)}function B(U,R){const $=n.get(U);if(U.version>0&&$.__version!==U.version){pe($,U,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+R)}function O(U,R){const $=n.get(U);if(U.version>0&&$.__version!==U.version){pe($,U,R);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+R)}function H(U,R){const $=n.get(U);if(U.version>0&&$.__version!==U.version){q($,U,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+R)}const G={[mc]:i.REPEAT,[ji]:i.CLAMP_TO_EDGE,[gc]:i.MIRRORED_REPEAT},ne={[hn]:i.NEAREST,[Ap]:i.NEAREST_MIPMAP_NEAREST,[Ba]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[gs]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},ae={[kp]:i.NEVER,[Xp]:i.ALWAYS,[Vp]:i.LESS,[Ph]:i.LEQUAL,[Gp]:i.EQUAL,[qp]:i.GEQUAL,[Hp]:i.GREATER,[Wp]:i.NOTEQUAL};function re(U,R){if(R.type===xi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===yn||R.magFilter===gs||R.magFilter===Ba||R.magFilter===$i||R.minFilter===yn||R.minFilter===gs||R.minFilter===Ba||R.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,G[R.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,G[R.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,G[R.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,ne[R.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,ne[R.minFilter]),R.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ae[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===hn||R.minFilter!==Ba&&R.minFilter!==$i||R.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ee(U,R){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",E));const ie=R.source;let K=d.get(ie);K===void 0&&(K={},d.set(ie,K));const Q=N(R);if(Q!==U.__cacheKey){K[Q]===void 0&&(K[Q]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,$=!0),K[Q].usedTimes++;const le=K[U.__cacheKey];le!==void 0&&(K[U.__cacheKey].usedTimes--,le.usedTimes===0&&C(R)),U.__cacheKey=Q,U.__webglTexture=K[Q].texture}return $}function pe(U,R,$){let ie=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ie=i.TEXTURE_3D);const K=ee(U,R),Q=R.source;t.bindTexture(ie,U.__webglTexture,i.TEXTURE0+$);const le=n.get(Q);if(Q.version!==le.__version||K===!0){t.activeTexture(i.TEXTURE0+$);const ue=rt.getPrimaries(rt.workingColorSpace),de=R.colorSpace===gi?null:rt.getPrimaries(R.colorSpace),we=R.colorSpace===gi||ue===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ce=v(R.image,!1,r.maxTextureSize);ce=Fe(R,ce);const Me=a.convert(R.format,R.colorSpace),He=a.convert(R.type);let Ie=y(R.internalFormat,Me,He,R.colorSpace,R.isVideoTexture);re(ie,R);let ge;const We=R.mipmaps,qe=R.isVideoTexture!==!0,mt=le.__version===void 0||K===!0,b=Q.dataReady,Z=S(R,ce);if(R.isDepthTexture)Ie=x(R.format===Hr,R.type),mt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ie,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ce.width,ce.height,0,Me,He,null));else if(R.isDataTexture)if(We.length>0){qe&&mt&&t.texStorage2D(i.TEXTURE_2D,Z,Ie,We[0].width,We[0].height);for(let X=0,J=We.length;X<J;X++)ge=We[X],qe?b&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ge.width,ge.height,Me,He,ge.data):t.texImage2D(i.TEXTURE_2D,X,Ie,ge.width,ge.height,0,Me,He,ge.data);R.generateMipmaps=!1}else qe?(mt&&t.texStorage2D(i.TEXTURE_2D,Z,Ie,ce.width,ce.height),b&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,Me,He,ce.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ce.width,ce.height,0,Me,He,ce.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){qe&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,Ie,We[0].width,We[0].height,ce.depth);for(let X=0,J=We.length;X<J;X++)if(ge=We[X],R.format!==Cn)if(Me!==null)if(qe){if(b)if(R.layerUpdates.size>0){for(const oe of R.layerUpdates){const Pe=ge.width*ge.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,oe,ge.width,ge.height,1,Me,ge.data.slice(Pe*oe,Pe*(oe+1)),0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ce.depth,Me,ge.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ie,ge.width,ge.height,ce.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?b&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ce.depth,Me,He,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Ie,ge.width,ge.height,ce.depth,0,Me,He,ge.data)}else{qe&&mt&&t.texStorage2D(i.TEXTURE_2D,Z,Ie,We[0].width,We[0].height);for(let X=0,J=We.length;X<J;X++)ge=We[X],R.format!==Cn?Me!==null?qe?b&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ge.width,ge.height,Me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Ie,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?b&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ge.width,ge.height,Me,He,ge.data):t.texImage2D(i.TEXTURE_2D,X,Ie,ge.width,ge.height,0,Me,He,ge.data)}else if(R.isDataArrayTexture)if(qe){if(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,Ie,ce.width,ce.height,ce.depth),b)if(R.layerUpdates.size>0){let X;switch(He){case i.UNSIGNED_BYTE:switch(Me){case i.ALPHA:X=1;break;case i.LUMINANCE:X=1;break;case i.LUMINANCE_ALPHA:X=2;break;case i.RGB:X=3;break;case i.RGBA:X=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:X=1;break;default:throw new Error(`Unknown texel size for type ${He}.`)}const J=ce.width*ce.height*X;for(const oe of R.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,Me,He,ce.data.slice(J*oe,J*(oe+1)));R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Me,He,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ce.width,ce.height,ce.depth,0,Me,He,ce.data);else if(R.isData3DTexture)qe?(mt&&t.texStorage3D(i.TEXTURE_3D,Z,Ie,ce.width,ce.height,ce.depth),b&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Me,He,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ce.width,ce.height,ce.depth,0,Me,He,ce.data);else if(R.isFramebufferTexture){if(mt)if(qe)t.texStorage2D(i.TEXTURE_2D,Z,Ie,ce.width,ce.height);else{let X=ce.width,J=ce.height;for(let oe=0;oe<Z;oe++)t.texImage2D(i.TEXTURE_2D,oe,Ie,X,J,0,Me,He,null),X>>=1,J>>=1}}else if(We.length>0){if(qe&&mt){const X=at(We[0]);t.texStorage2D(i.TEXTURE_2D,Z,Ie,X.width,X.height)}for(let X=0,J=We.length;X<J;X++)ge=We[X],qe?b&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Me,He,ge):t.texImage2D(i.TEXTURE_2D,X,Ie,Me,He,ge);R.generateMipmaps=!1}else if(qe){if(mt){const X=at(ce);t.texStorage2D(i.TEXTURE_2D,Z,Ie,X.width,X.height)}b&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,He,ce)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Me,He,ce);g(R)&&m(ie),le.__version=Q.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function q(U,R,$){if(R.image.length!==6)return;const ie=ee(U,R),K=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+$);const Q=n.get(K);if(K.version!==Q.__version||ie===!0){t.activeTexture(i.TEXTURE0+$);const le=rt.getPrimaries(rt.workingColorSpace),ue=R.colorSpace===gi?null:rt.getPrimaries(R.colorSpace),de=R.colorSpace===gi||le===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const we=R.isCompressedTexture||R.image[0].isCompressedTexture,ce=R.image[0]&&R.image[0].isDataTexture,Me=[];for(let J=0;J<6;J++)!we&&!ce?Me[J]=v(R.image[J],!0,r.maxCubemapSize):Me[J]=ce?R.image[J].image:R.image[J],Me[J]=Fe(R,Me[J]);const He=Me[0],Ie=a.convert(R.format,R.colorSpace),ge=a.convert(R.type),We=y(R.internalFormat,Ie,ge,R.colorSpace),qe=R.isVideoTexture!==!0,mt=Q.__version===void 0||ie===!0,b=K.dataReady;let Z=S(R,He);re(i.TEXTURE_CUBE_MAP,R);let X;if(we){qe&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,We,He.width,He.height);for(let J=0;J<6;J++){X=Me[J].mipmaps;for(let oe=0;oe<X.length;oe++){const Pe=X[oe];R.format!==Cn?Ie!==null?qe?b&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,0,0,Pe.width,Pe.height,Ie,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,0,0,Pe.width,Pe.height,Ie,ge,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,We,Pe.width,Pe.height,0,Ie,ge,Pe.data)}}}else{if(X=R.mipmaps,qe&&mt){X.length>0&&Z++;const J=at(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,We,J.width,J.height)}for(let J=0;J<6;J++)if(ce){qe?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me[J].width,Me[J].height,Ie,ge,Me[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Me[J].width,Me[J].height,0,Ie,ge,Me[J].data);for(let oe=0;oe<X.length;oe++){const Ve=X[oe].image[J].image;qe?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,0,0,Ve.width,Ve.height,Ie,ge,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,We,Ve.width,Ve.height,0,Ie,ge,Ve.data)}}else{qe?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ge,Me[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Ie,ge,Me[J]);for(let oe=0;oe<X.length;oe++){const Pe=X[oe];qe?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,0,0,Ie,ge,Pe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,We,Ie,ge,Pe.image[J])}}}g(R)&&m(i.TEXTURE_CUBE_MAP),Q.__version=K.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function te(U,R,$,ie,K,Q){const le=a.convert($.format,$.colorSpace),ue=a.convert($.type),de=y($.internalFormat,le,ue,$.colorSpace);if(!n.get(R).__hasExternalTextures){const ce=Math.max(1,R.width>>Q),Me=Math.max(1,R.height>>Q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Q,de,ce,Me,R.depth,0,le,ue,null):t.texImage2D(K,Q,de,ce,Me,0,le,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),je(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,K,n.get($).__webglTexture,0,Re(R)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,K,n.get($).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(U,R,$){if(i.bindRenderbuffer(i.RENDERBUFFER,U),R.depthBuffer){const ie=R.depthTexture,K=ie&&ie.isDepthTexture?ie.type:null,Q=x(R.stencilBuffer,K),le=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=Re(R);je(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Q,R.width,R.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Q,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Q,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,U)}else{const ie=R.textures;for(let K=0;K<ie.length;K++){const Q=ie[K],le=a.convert(Q.format,Q.colorSpace),ue=a.convert(Q.type),de=y(Q.internalFormat,le,ue,Q.colorSpace),we=Re(R);$&&je(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,de,R.width,R.height):je(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,de,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,de,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function F(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);const ie=n.get(R.depthTexture).__webglTexture,K=Re(R);if(R.depthTexture.format===Lr)je(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(R.depthTexture.format===Hr)je(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function se(U){const R=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");F(R.__webglFramebuffer,U)}else if($){R.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ie]),R.__webglDepthbuffer[ie]=i.createRenderbuffer(),fe(R.__webglDepthbuffer[ie],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),fe(R.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(U,R,$){const ie=n.get(U);R!==void 0&&te(ie.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&se(U)}function Se(U){const R=U.texture,$=n.get(U),ie=n.get(R);U.addEventListener("dispose",T);const K=U.textures,Q=U.isWebGLCubeRenderTarget===!0,le=K.length>1;if(le||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=R.version,s.memory.textures++),Q){$.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer[ue]=[];for(let de=0;de<R.mipmaps.length;de++)$.__webglFramebuffer[ue][de]=i.createFramebuffer()}else $.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer=[];for(let ue=0;ue<R.mipmaps.length;ue++)$.__webglFramebuffer[ue]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(le)for(let ue=0,de=K.length;ue<de;ue++){const we=n.get(K[ue]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),s.memory.textures++)}if(U.samples>0&&je(U)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ue=0;ue<K.length;ue++){const de=K[ue];$.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ue]);const we=a.convert(de.format,de.colorSpace),ce=a.convert(de.type),Me=y(de.internalFormat,we,ce,de.colorSpace,U.isXRRenderTarget===!0),He=Re(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Me,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,$.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),fe($.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),re(i.TEXTURE_CUBE_MAP,R);for(let ue=0;ue<6;ue++)if(R.mipmaps&&R.mipmaps.length>0)for(let de=0;de<R.mipmaps.length;de++)te($.__webglFramebuffer[ue][de],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else te($.__webglFramebuffer[ue],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(R)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ue=0,de=K.length;ue<de;ue++){const we=K[ue],ce=n.get(we);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),re(i.TEXTURE_2D,we),te($.__webglFramebuffer,U,we,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),g(we)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ue=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ie.__webglTexture),re(ue,R),R.mipmaps&&R.mipmaps.length>0)for(let de=0;de<R.mipmaps.length;de++)te($.__webglFramebuffer[de],U,R,i.COLOR_ATTACHMENT0,ue,de);else te($.__webglFramebuffer,U,R,i.COLOR_ATTACHMENT0,ue,0);g(R)&&m(ue),t.unbindTexture()}U.depthBuffer&&se(U)}function z(U){const R=U.textures;for(let $=0,ie=R.length;$<ie;$++){const K=R[$];if(g(K)){const Q=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(K).__webglTexture;t.bindTexture(Q,le),m(Q),t.unbindTexture()}}}const Ae=[],ke=[];function Ke(U){if(U.samples>0){if(je(U)===!1){const R=U.textures,$=U.width,ie=U.height;let K=i.COLOR_BUFFER_BIT;const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(U),ue=R.length>1;if(ue)for(let de=0;de<R.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let de=0;de<R.length;de++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[de]);const we=n.get(R[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,$,ie,0,0,$,ie,K,i.NEAREST),c===!0&&(Ae.length=0,ke.length=0,Ae.push(i.COLOR_ATTACHMENT0+de),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ae.push(Q),ke.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let de=0;de<R.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,le.__webglColorRenderbuffer[de]);const we=n.get(R[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const R=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Re(U){return Math.min(r.maxSamples,U.samples)}function je(U){const R=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ge(U){const R=s.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}function Fe(U,R){const $=U.colorSpace,ie=U.format,K=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Ri&&$!==gi&&(rt.getTransfer($)===ht?(ie!==Cn||K!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),R}function at(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=H,this.rebindTextures=_e,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=te,this.useMultisampledRTT=je}function o_(i,e){function t(n,r=gi){let a;const s=rt.getTransfer(r);if(n===Ei)return i.UNSIGNED_BYTE;if(n===Eh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ah)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tp)return i.BYTE;if(n===Cp)return i.SHORT;if(n===Lo)return i.UNSIGNED_SHORT;if(n===bh)return i.INT;if(n===Vr)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===Pp)return i.ALPHA;if(n===Lp)return i.RGB;if(n===Cn)return i.RGBA;if(n===Dp)return i.LUMINANCE;if(n===Ip)return i.LUMINANCE_ALPHA;if(n===Lr)return i.DEPTH_COMPONENT;if(n===Hr)return i.DEPTH_STENCIL;if(n===Np)return i.RED;if(n===Th)return i.RED_INTEGER;if(n===Up)return i.RG;if(n===Ch)return i.RG_INTEGER;if(n===Rh)return i.RGBA_INTEGER;if(n===xs||n===_s||n===vs||n===ys)if(s===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===xs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===xs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_s)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ys)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Vl||n===Gl||n===Hl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===kl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===ql||n===Xl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Wl||n===ql)return s===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Xl)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yl||n===jl||n===$l||n===Zl||n===Kl||n===Jl||n===Ql||n===eu||n===tu||n===nu||n===iu||n===ru||n===au||n===ou)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Yl)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eu)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tu)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nu)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===iu)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===au)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ms||n===su||n===cu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ms)return s===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===su)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Op||n===lu||n===uu||n===du)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ms)return a.COMPRESSED_RED_RGTC1_EXT;if(n===lu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===du)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class s_ extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c_={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new qt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ti({vertexShader:l_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class h_ extends Pi{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,_=null;const v=new d_,g=t.getContextAttributes();let m=null,y=null;const x=[],S=[],E=new he;let T=null;const A=new cn;A.layers.enable(1),A.viewport=new Lt;const C=new cn;C.layers.enable(2),C.viewport=new Lt;const w=[A,C],M=new s_;M.layers.enable(1),M.layers.enable(2);let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=x[q];return te===void 0&&(te=new Xs,x[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=x[q];return te===void 0&&(te=new Xs,x[q]=te),te.getGripSpace()},this.getHand=function(q){let te=x[q];return te===void 0&&(te=new Xs,x[q]=te),te.getHandSpace()};function N(q){const te=S.indexOf(q.inputSource);if(te===-1)return;const fe=x[te];fe!==void 0&&(fe.update(q.inputSource,q.frame,l||s),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",B);for(let q=0;q<x.length;q++){const te=S[q];te!==null&&(S[q]=null,x[q].disconnect(te))}L=null,I=null,v.reset(),e.setRenderTarget(m),f=null,d=null,h=null,r=null,y=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",k),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ai(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,fe=null,F=null;g.depth&&(F=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?Hr:Lr,fe=g.stencil?Gr:Vr);const se={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:a};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ai(d.textureWidth,d.textureHeight,{format:Cn,type:Ei,depthTexture:new Gh(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(q){for(let te=0;te<q.removed.length;te++){const fe=q.removed[te],F=S.indexOf(fe);F>=0&&(S[F]=null,x[F].disconnect(fe))}for(let te=0;te<q.added.length;te++){const fe=q.added[te];let F=S.indexOf(fe);if(F===-1){for(let _e=0;_e<x.length;_e++)if(_e>=S.length){S.push(fe),F=_e;break}else if(S[_e]===null){S[_e]=fe,F=_e;break}if(F===-1)break}const se=x[F];se&&se.connect(fe)}}const O=new D,H=new D;function G(q,te,fe){O.setFromMatrixPosition(te.matrixWorld),H.setFromMatrixPosition(fe.matrixWorld);const F=O.distanceTo(H),se=te.projectionMatrix.elements,_e=fe.projectionMatrix.elements,Se=se[14]/(se[10]-1),z=se[14]/(se[10]+1),Ae=(se[9]+1)/se[5],ke=(se[9]-1)/se[5],Ke=(se[8]-1)/se[0],Re=(_e[8]+1)/_e[0],je=Se*Ke,Ge=Se*Re,Fe=F/(-Ke+Re),at=Fe*-Ke;te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(Fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const U=Se+Fe,R=z+Fe,$=je-at,ie=Ge+(F-at),K=Ae*z/R*U,Q=ke*z/R*U;q.projectionMatrix.makePerspective($,ie,K,Q,U,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function ne(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;v.texture!==null&&(q.near=v.depthNear,q.far=v.depthFar),M.near=C.near=A.near=q.near,M.far=C.far=A.far=q.far,(L!==M.near||I!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,I=M.far,A.near=L,A.far=I,C.near=L,C.far=I,A.updateProjectionMatrix(),C.updateProjectionMatrix(),q.updateProjectionMatrix());const te=q.parent,fe=M.cameras;ne(M,te);for(let F=0;F<fe.length;F++)ne(fe[F],te);fe.length===2?G(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),ae(q,M,te)};function ae(q,te,fe){fe===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Sa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let re=null;function ee(q,te){if(u=te.getViewerPose(l||s),_=te,u!==null){const fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let F=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,F=!0);for(let _e=0;_e<fe.length;_e++){const Se=fe[_e];let z=null;if(f!==null)z=f.getViewport(Se);else{const ke=h.getViewSubImage(d,Se);z=ke.viewport,_e===0&&(e.setRenderTargetTextures(y,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(y))}let Ae=w[_e];Ae===void 0&&(Ae=new cn,Ae.layers.enable(_e),Ae.viewport=new Lt,w[_e]=Ae),Ae.matrix.fromArray(Se.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Se.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(z.x,z.y,z.width,z.height),_e===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),F===!0&&M.cameras.push(Ae)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const _e=h.getDepthInformation(fe[0]);_e&&_e.isValid&&_e.texture&&v.init(e,_e,r.renderState)}}for(let fe=0;fe<x.length;fe++){const F=S[fe],se=x[fe];F!==null&&se!==void 0&&se.update(F,te,l||s)}re&&re(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const pe=new Vh;pe.setAnimationLoop(ee),this.setAnimationLoop=function(q){re=q},this.dispose=function(){}}}const Gi=new An,f_=new ct;function p_(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Fh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(g,m):m.isMeshToonMaterial?(a(g,m),h(g,m)):m.isMeshPhongMaterial?(a(g,m),u(g,m)):m.isMeshStandardMaterial?(a(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,S)):m.isMeshMatcapMaterial?(a(g,m),_(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),v(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,y,x):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===$t&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===$t&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,S=y.envMapRotation;x&&(g.envMap.value=x,Gi.copy(S),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),g.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Gi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$t&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function m_(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function l(y,x){let S=r[y.id];S===void 0&&(_(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",g));const E=x.program;n.updateUBOMapping(y,E);const T=e.render.frame;a[y.id]!==T&&(d(y),a[y.id]=T)}function u(y){const x=h();y.__bindingPointIndex=x;const S=i.createBuffer(),E=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function h(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],S=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=S.length;T<A;T++){const C=Array.isArray(S[T])?S[T]:[S[T]];for(let w=0,M=C.length;w<M;w++){const L=C[w];if(f(L,T,w,E)===!0){const I=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let B=0;B<N.length;B++){const O=N[B],H=v(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,I+k,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,k),k+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,S,E){const T=y.value,A=x+"_"+S;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{const C=E[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return E[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(y){const x=y.uniforms;let S=0;const E=16;for(let A=0,C=x.length;A<C;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,L=w.length;M<L;M++){const I=w[M],N=Array.isArray(I.value)?I.value:[I.value];for(let k=0,B=N.length;k<B;k++){const O=N[k],H=v(O),G=S%E;G!==0&&E-G<H.boundary&&(S+=E-G),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=H.storage}}}const T=S%E;return T>0&&(S+=E-T),y.__size=S,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const S=s.indexOf(x.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:c,update:l,dispose:m}}class La{constructor(e={}){const{canvas:t=lm(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=s;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,g=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let S=!1,E=0,T=0,A=null,C=-1,w=null;const M=new Lt,L=new Lt;let I=null;const N=new ye(0);let k=0,B=t.width,O=t.height,H=1,G=null,ne=null;const ae=new Lt(0,0,B,O),re=new Lt(0,0,B,O);let ee=!1;const pe=new tl;let q=!1,te=!1;const fe=new ct,F=new D,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Se(){return A===null?H:1}let z=n;function Ae(P,V){return t.getContext(P,V)}try{const P={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",J,!1),z===null){const V="webgl2";if(z=Ae(V,P),z===null)throw Ae(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ke,Ke,Re,je,Ge,Fe,at,U,R,$,ie,K,Q,le,ue,de,we,ce,Me,He,Ie,ge,We,qe;function mt(){ke=new b1(z),ke.init(),ge=new o_(z,ke),Ke=new _1(z,ke,e,ge),Re=new r_(z),je=new T1(z),Ge=new Wx,Fe=new a_(z,ke,Re,Ge,Ke,ge,je),at=new y1(x),U=new w1(x),R=new Nm(z),We=new g1(z,R),$=new E1(z,R,je,We),ie=new R1(z,$,R,je),Me=new C1(z,Ke,Fe),de=new v1(Ge),K=new Hx(x,at,U,ke,Ke,We,de),Q=new p_(x,Ge),le=new Xx,ue=new Jx(ke),ce=new m1(x,at,U,Re,ie,d,c),we=new i_(x,ie,Ke),qe=new m_(z,je,Ke,Re),He=new x1(z,ke,je),Ie=new A1(z,ke,je),je.programs=K.programs,x.capabilities=Ke,x.extensions=ke,x.properties=Ge,x.renderLists=le,x.shadowMap=we,x.state=Re,x.info=je}mt();const b=new h_(x,z);this.xr=b,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=ke.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ke.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(B,O,!1))},this.getSize=function(P){return P.set(B,O)},this.setSize=function(P,V,Y=!0){if(b.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,O=V,t.width=Math.floor(P*H),t.height=Math.floor(V*H),Y===!0&&(t.style.width=P+"px",t.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(B*H,O*H).floor()},this.setDrawingBufferSize=function(P,V,Y){B=P,O=V,H=Y,t.width=Math.floor(P*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(ae)},this.setViewport=function(P,V,Y,j){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,V,Y,j),Re.viewport(M.copy(ae).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(re)},this.setScissor=function(P,V,Y,j){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,V,Y,j),Re.scissor(L.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(P){Re.setScissorTest(ee=P)},this.setOpaqueSort=function(P){G=P},this.setTransparentSort=function(P){ne=P},this.getClearColor=function(P){return P.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(P=!0,V=!0,Y=!0){let j=0;if(P){let W=!1;if(A!==null){const me=A.texture.format;W=me===Rh||me===Ch||me===Th}if(W){const me=A.texture.type,ve=me===Ei||me===Vr||me===Lo||me===Gr||me===Eh||me===Ah,Ee=ce.getClearColor(),Te=ce.getClearAlpha(),ze=Ee.r,Be=Ee.g,Ne=Ee.b;ve?(f[0]=ze,f[1]=Be,f[2]=Ne,f[3]=Te,z.clearBufferuiv(z.COLOR,0,f)):(_[0]=ze,_[1]=Be,_[2]=Ne,_[3]=Te,z.clearBufferiv(z.COLOR,0,_))}else j|=z.COLOR_BUFFER_BIT}V&&(j|=z.DEPTH_BUFFER_BIT),Y&&(j|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",J,!1),le.dispose(),ue.dispose(),Ge.dispose(),at.dispose(),U.dispose(),ie.dispose(),We.dispose(),qe.dispose(),K.dispose(),b.dispose(),b.removeEventListener("sessionstart",Mt),b.removeEventListener("sessionend",St),Kt.stop()};function Z(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=je.autoReset,V=we.enabled,Y=we.autoUpdate,j=we.needsUpdate,W=we.type;mt(),je.autoReset=P,we.enabled=V,we.autoUpdate=Y,we.needsUpdate=j,we.type=W}function J(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function oe(P){const V=P.target;V.removeEventListener("dispose",oe),Pe(V)}function Pe(P){Ve(P),Ge.remove(P)}function Ve(P){const V=Ge.get(P).programs;V!==void 0&&(V.forEach(function(Y){K.releaseProgram(Y)}),P.isShaderMaterial&&K.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,Y,j,W,me){V===null&&(V=se);const ve=W.isMesh&&W.matrixWorld.determinant()<0,Ee=Lf(P,V,Y,j,W);Re.setMaterial(j,ve);let Te=Y.index,ze=1;if(j.wireframe===!0){if(Te=$.getWireframeAttribute(Y),Te===void 0)return;ze=2}const Be=Y.drawRange,Ne=Y.attributes.position;let tt=Be.start*ze,xt=(Be.start+Be.count)*ze;me!==null&&(tt=Math.max(tt,me.start*ze),xt=Math.min(xt,(me.start+me.count)*ze)),Te!==null?(tt=Math.max(tt,0),xt=Math.min(xt,Te.count)):Ne!=null&&(tt=Math.max(tt,0),xt=Math.min(xt,Ne.count));const _t=xt-tt;if(_t<0||_t===1/0)return;We.setup(W,j,Ee,Y,Te);let Qt,nt=He;if(Te!==null&&(Qt=R.get(Te),nt=Ie,nt.setIndex(Qt)),W.isMesh)j.wireframe===!0?(Re.setLineWidth(j.wireframeLinewidth*Se()),nt.setMode(z.LINES)):nt.setMode(z.TRIANGLES);else if(W.isLine){let Le=j.linewidth;Le===void 0&&(Le=1),Re.setLineWidth(Le*Se()),W.isLineSegments?nt.setMode(z.LINES):W.isLineLoop?nt.setMode(z.LINE_LOOP):nt.setMode(z.LINE_STRIP)}else W.isPoints?nt.setMode(z.POINTS):W.isSprite&&nt.setMode(z.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?nt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):nt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)nt.renderInstances(tt,_t,W.count);else if(Y.isInstancedBufferGeometry){const Le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Bt=Math.min(Y.instanceCount,Le);nt.renderInstances(tt,_t,Bt)}else nt.render(tt,_t)};function gt(P,V,Y){P.transparent===!0&&P.side===pt&&P.forceSinglePass===!1?(P.side=$t,P.needsUpdate=!0,Oa(P,V,Y),P.side=Dn,P.needsUpdate=!0,Oa(P,V,Y),P.side=pt):Oa(P,V,Y)}this.compile=function(P,V,Y=null){Y===null&&(Y=P),g=ue.get(Y),g.init(V),y.push(g),Y.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),P!==Y&&P.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const j=new Set;return P.traverse(function(W){const me=W.material;if(me)if(Array.isArray(me))for(let ve=0;ve<me.length;ve++){const Ee=me[ve];gt(Ee,Y,W),j.add(Ee)}else gt(me,Y,W),j.add(me)}),y.pop(),g=null,j},this.compileAsync=function(P,V,Y=null){const j=this.compile(P,V,Y);return new Promise(W=>{function me(){if(j.forEach(function(ve){Ge.get(ve).currentProgram.isReady()&&j.delete(ve)}),j.size===0){W(P);return}setTimeout(me,10)}ke.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let yt=null;function Qe(P){yt&&yt(P)}function Mt(){Kt.stop()}function St(){Kt.start()}const Kt=new Vh;Kt.setAnimationLoop(Qe),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(P){yt=P,b.setAnimationLoop(P),P===null?Kt.stop():Kt.start()},b.addEventListener("sessionstart",Mt),b.addEventListener("sessionend",St),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),b.enabled===!0&&b.isPresenting===!0&&(b.cameraAutoUpdate===!0&&b.updateCamera(V),V=b.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,V,A),g=ue.get(P,y.length),g.init(V),y.push(g),fe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),pe.setFromProjectionMatrix(fe),te=this.localClippingEnabled,q=de.init(this.clippingPlanes,te),v=le.get(P,m.length),v.init(),m.push(v),b.enabled===!0&&b.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&Jt(me,V,-1/0,x.sortObjects)}Jt(P,V,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,ne),_e=b.enabled===!1||b.isPresenting===!1||b.hasDepthSensing()===!1,_e&&ce.addToRenderList(v,P),this.info.render.frame++,q===!0&&de.beginShadows();const Y=g.state.shadowsArray;we.render(Y,P,V),q===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,W=v.transmissive;if(g.setupLights(),V.isArrayCamera){const me=V.cameras;if(W.length>0)for(let ve=0,Ee=me.length;ve<Ee;ve++){const Te=me[ve];Ni(j,W,P,Te)}_e&&ce.render(P);for(let ve=0,Ee=me.length;ve<Ee;ve++){const Te=me[ve];oi(v,P,Te,Te.viewport)}}else W.length>0&&Ni(j,W,P,V),_e&&ce.render(P),oi(v,P,V);A!==null&&(Fe.updateMultisampleRenderTarget(A),Fe.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(x,P,V),We.resetDefaultState(),C=-1,w=null,y.pop(),y.length>0?(g=y[y.length-1],q===!0&&de.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Jt(P,V,Y,j){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||pe.intersectsSprite(P)){j&&F.setFromMatrixPosition(P.matrixWorld).applyMatrix4(fe);const ve=ie.update(P),Ee=P.material;Ee.visible&&v.push(P,ve,Ee,Y,F.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||pe.intersectsObject(P))){const ve=ie.update(P),Ee=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),F.copy(P.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),F.copy(ve.boundingSphere.center)),F.applyMatrix4(P.matrixWorld).applyMatrix4(fe)),Array.isArray(Ee)){const Te=ve.groups;for(let ze=0,Be=Te.length;ze<Be;ze++){const Ne=Te[ze],tt=Ee[Ne.materialIndex];tt&&tt.visible&&v.push(P,ve,tt,Y,F.z,Ne)}}else Ee.visible&&v.push(P,ve,Ee,Y,F.z,null)}}const me=P.children;for(let ve=0,Ee=me.length;ve<Ee;ve++)Jt(me[ve],V,Y,j)}function oi(P,V,Y,j){const W=P.opaque,me=P.transmissive,ve=P.transparent;g.setupLightsView(Y),q===!0&&de.setGlobalState(x.clippingPlanes,Y),j&&Re.viewport(M.copy(j)),W.length>0&&Ui(W,V,Y),me.length>0&&Ui(me,V,Y),ve.length>0&&Ui(ve,V,Y),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Ni(P,V,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new Ai(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?ts:Ei,minFilter:$i,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const me=g.state.transmissionRenderTarget[j.id],ve=j.viewport||M;me.setSize(ve.z,ve.w);const Ee=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(N),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),_e?ce.render(Y):x.clear();const Te=x.toneMapping;x.toneMapping=Mi;const ze=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),q===!0&&de.setGlobalState(x.clippingPlanes,j),Ui(P,Y,j),Fe.updateMultisampleRenderTarget(me),Fe.updateRenderTargetMipmap(me),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ne=0,tt=V.length;Ne<tt;Ne++){const xt=V[Ne],_t=xt.object,Qt=xt.geometry,nt=xt.material,Le=xt.group;if(nt.side===pt&&_t.layers.test(j.layers)){const Bt=nt.side;nt.side=$t,nt.needsUpdate=!0,Dl(_t,Y,j,Qt,nt,Le),nt.side=Bt,nt.needsUpdate=!0,Be=!0}}Be===!0&&(Fe.updateMultisampleRenderTarget(me),Fe.updateRenderTargetMipmap(me))}x.setRenderTarget(Ee),x.setClearColor(N,k),ze!==void 0&&(j.viewport=ze),x.toneMapping=Te}function Ui(P,V,Y){const j=V.isScene===!0?V.overrideMaterial:null;for(let W=0,me=P.length;W<me;W++){const ve=P[W],Ee=ve.object,Te=ve.geometry,ze=j===null?ve.material:j,Be=ve.group;Ee.layers.test(Y.layers)&&Dl(Ee,V,Y,Te,ze,Be)}}function Dl(P,V,Y,j,W,me){P.onBeforeRender(x,V,Y,j,W,me),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(x,V,Y,j,P,me),W.transparent===!0&&W.side===pt&&W.forceSinglePass===!1?(W.side=$t,W.needsUpdate=!0,x.renderBufferDirect(Y,V,j,W,P,me),W.side=Dn,W.needsUpdate=!0,x.renderBufferDirect(Y,V,j,W,P,me),W.side=pt):x.renderBufferDirect(Y,V,j,W,P,me),P.onAfterRender(x,V,Y,j,W,me)}function Oa(P,V,Y){V.isScene!==!0&&(V=se);const j=Ge.get(P),W=g.state.lights,me=g.state.shadowsArray,ve=W.state.version,Ee=K.getParameters(P,W.state,me,V,Y),Te=K.getProgramCacheKey(Ee);let ze=j.programs;j.environment=P.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(P.isMeshStandardMaterial?U:at).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,ze===void 0&&(P.addEventListener("dispose",oe),ze=new Map,j.programs=ze);let Be=ze.get(Te);if(Be!==void 0){if(j.currentProgram===Be&&j.lightsStateVersion===ve)return Nl(P,Ee),Be}else Ee.uniforms=K.getUniforms(P),P.onBuild(Y,Ee,x),P.onBeforeCompile(Ee,x),Be=K.acquireProgram(Ee,Te),ze.set(Te,Be),j.uniforms=Ee.uniforms;const Ne=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ne.clippingPlanes=de.uniform),Nl(P,Ee),j.needsLights=If(P),j.lightsStateVersion=ve,j.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMap.value=W.state.directionalShadowMap,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotShadowMap.value=W.state.spotShadowMap,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMap.value=W.state.pointShadowMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Be,j.uniformsList=null,Be}function Il(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Eo.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function Nl(P,V){const Y=Ge.get(P);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Lf(P,V,Y,j,W){V.isScene!==!0&&(V=se),Fe.resetTextureUnits();const me=V.fog,ve=j.isMeshStandardMaterial?V.environment:null,Ee=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ri,Te=(j.isMeshStandardMaterial?U:at).get(j.envMap||ve),ze=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ne=!!Y.morphAttributes.position,tt=!!Y.morphAttributes.normal,xt=!!Y.morphAttributes.color;let _t=Mi;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=x.toneMapping);const Qt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=Qt!==void 0?Qt.length:0,Le=Ge.get(j),Bt=g.state.lights;if(q===!0&&(te===!0||P!==w)){const on=P===w&&j.id===C;de.setState(j,P,on)}let ot=!1;j.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Bt.state.version||Le.outputColorSpace!==Ee||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==Te||j.fog===!0&&Le.fog!==me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==de.numPlanes||Le.numIntersection!==de.numIntersection)||Le.vertexAlphas!==ze||Le.vertexTangents!==Be||Le.morphTargets!==Ne||Le.morphNormals!==tt||Le.morphColors!==xt||Le.toneMapping!==_t||Le.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,Le.__version=j.version);let On=Le.currentProgram;ot===!0&&(On=Oa(j,V,W));let Fa=!1,Oi=!1,fs=!1;const Ct=On.getUniforms(),si=Le.uniforms;if(Re.useProgram(On.program)&&(Fa=!0,Oi=!0,fs=!0),j.id!==C&&(C=j.id,Oi=!0),Fa||w!==P){Ct.setValue(z,"projectionMatrix",P.projectionMatrix),Ct.setValue(z,"viewMatrix",P.matrixWorldInverse);const on=Ct.map.cameraPosition;on!==void 0&&on.setValue(z,F.setFromMatrixPosition(P.matrixWorld)),Ke.logarithmicDepthBuffer&&Ct.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ct.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),w!==P&&(w=P,Oi=!0,fs=!0)}if(W.isSkinnedMesh){Ct.setOptional(z,W,"bindMatrix"),Ct.setOptional(z,W,"bindMatrixInverse");const on=W.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ct.setValue(z,"boneTexture",on.boneTexture,Fe))}W.isBatchedMesh&&(Ct.setOptional(z,W,"batchingTexture"),Ct.setValue(z,"batchingTexture",W._matricesTexture,Fe),Ct.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&Ct.setValue(z,"batchingColorTexture",W._colorsTexture,Fe));const ps=Y.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&Me.update(W,Y,On),(Oi||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,Ct.setValue(z,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(si.envMap.value=Te,si.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(si.envMapIntensity.value=V.environmentIntensity),Oi&&(Ct.setValue(z,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&Df(si,fs),me&&j.fog===!0&&Q.refreshFogUniforms(si,me),Q.refreshMaterialUniforms(si,j,H,O,g.state.transmissionRenderTarget[P.id]),Eo.upload(z,Il(Le),si,Fe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Eo.upload(z,Il(Le),si,Fe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ct.setValue(z,"center",W.center),Ct.setValue(z,"modelViewMatrix",W.modelViewMatrix),Ct.setValue(z,"normalMatrix",W.normalMatrix),Ct.setValue(z,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const on=j.uniformsGroups;for(let ms=0,Nf=on.length;ms<Nf;ms++){const Ul=on[ms];qe.update(Ul,On),qe.bind(Ul,On)}}return On}function Df(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function If(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,V,Y){Ge.get(P.texture).__webglTexture=V,Ge.get(P.depthTexture).__webglTexture=Y;const j=Ge.get(P);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){const Y=Ge.get(P);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,Y=0){A=P,E=V,T=Y;let j=!0,W=null,me=!1,ve=!1;if(P){const Te=Ge.get(P);Te.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(z.FRAMEBUFFER,null),j=!1):Te.__webglFramebuffer===void 0?Fe.setupRenderTarget(P):Te.__hasExternalTextures&&Fe.rebindTextures(P,Ge.get(P.texture).__webglTexture,Ge.get(P.depthTexture).__webglTexture);const ze=P.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ve=!0);const Be=Ge.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Be[V])?W=Be[V][Y]:W=Be[V],me=!0):P.samples>0&&Fe.useMultisampledRTT(P)===!1?W=Ge.get(P).__webglMultisampledFramebuffer:Array.isArray(Be)?W=Be[Y]:W=Be,M.copy(P.viewport),L.copy(P.scissor),I=P.scissorTest}else M.copy(ae).multiplyScalar(H).floor(),L.copy(re).multiplyScalar(H).floor(),I=ee;if(Re.bindFramebuffer(z.FRAMEBUFFER,W)&&j&&Re.drawBuffers(P,W),Re.viewport(M),Re.scissor(L),Re.setScissorTest(I),me){const Te=Ge.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,Y)}else if(ve){const Te=Ge.get(P.texture),ze=V||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Te.__webglTexture,Y||0,ze)}C=-1},this.readRenderTargetPixels=function(P,V,Y,j,W,me,ve){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){Re.bindFramebuffer(z.FRAMEBUFFER,Ee);try{const Te=P.texture,ze=Te.format,Be=Te.type;if(!Ke.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-j&&Y>=0&&Y<=P.height-W&&z.readPixels(V,Y,j,W,ge.convert(ze),ge.convert(Be),me)}finally{const Te=A!==null?Ge.get(A).__webglFramebuffer:null;Re.bindFramebuffer(z.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(P,V,Y,j,W,me,ve){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ge.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){Re.bindFramebuffer(z.FRAMEBUFFER,Ee);try{const Te=P.texture,ze=Te.format,Be=Te.type;if(!Ke.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-j&&Y>=0&&Y<=P.height-W){const Ne=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ne),z.bufferData(z.PIXEL_PACK_BUFFER,me.byteLength,z.STREAM_READ),z.readPixels(V,Y,j,W,ge.convert(ze),ge.convert(Be),0),z.flush();const tt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);await um(z,tt,4);try{z.bindBuffer(z.PIXEL_PACK_BUFFER,Ne),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,me)}finally{z.deleteBuffer(Ne),z.deleteSync(tt)}return me}}finally{const Te=A!==null?Ge.get(A).__webglFramebuffer:null;Re.bindFramebuffer(z.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(P,V=null,Y=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);const j=Math.pow(2,-Y),W=Math.floor(P.image.width*j),me=Math.floor(P.image.height*j),ve=V!==null?V.x:0,Ee=V!==null?V.y:0;Fe.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,ve,Ee,W,me),Re.unbindTexture()},this.copyTextureToTexture=function(P,V,Y=null,j=null,W=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1],V=arguments[2],W=arguments[3]||0,Y=null);let me,ve,Ee,Te,ze,Be;Y!==null?(me=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Ee=Y.min.x,Te=Y.min.y):(me=P.image.width,ve=P.image.height,Ee=0,Te=0),j!==null?(ze=j.x,Be=j.y):(ze=0,Be=0);const Ne=ge.convert(V.format),tt=ge.convert(V.type);Fe.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const xt=z.getParameter(z.UNPACK_ROW_LENGTH),_t=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qt=z.getParameter(z.UNPACK_SKIP_PIXELS),nt=z.getParameter(z.UNPACK_SKIP_ROWS),Le=z.getParameter(z.UNPACK_SKIP_IMAGES),Bt=P.isCompressedTexture?P.mipmaps[W]:P.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Bt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Bt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ee),z.pixelStorei(z.UNPACK_SKIP_ROWS,Te),P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,ze,Be,me,ve,Ne,tt,Bt.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,ze,Be,Bt.width,Bt.height,Ne,Bt.data):z.texSubImage2D(z.TEXTURE_2D,W,ze,Be,Ne,tt,Bt),z.pixelStorei(z.UNPACK_ROW_LENGTH,xt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,nt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Le),W===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(P,V,Y=null,j=null,W=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,P=arguments[2],V=arguments[3],W=arguments[4]||0);let me,ve,Ee,Te,ze,Be,Ne,tt,xt;const _t=P.isCompressedTexture?P.mipmaps[W]:P.image;Y!==null?(me=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Ee=Y.max.z-Y.min.z,Te=Y.min.x,ze=Y.min.y,Be=Y.min.z):(me=_t.width,ve=_t.height,Ee=_t.depth,Te=0,ze=0,Be=0),j!==null?(Ne=j.x,tt=j.y,xt=j.z):(Ne=0,tt=0,xt=0);const Qt=ge.convert(V.format),nt=ge.convert(V.type);let Le;if(V.isData3DTexture)Fe.setTexture3D(V,0),Le=z.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Fe.setTexture2DArray(V,0),Le=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const Bt=z.getParameter(z.UNPACK_ROW_LENGTH),ot=z.getParameter(z.UNPACK_IMAGE_HEIGHT),On=z.getParameter(z.UNPACK_SKIP_PIXELS),Fa=z.getParameter(z.UNPACK_SKIP_ROWS),Oi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Te),z.pixelStorei(z.UNPACK_SKIP_ROWS,ze),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Be),P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Le,W,Ne,tt,xt,me,ve,Ee,Qt,nt,_t.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Le,W,Ne,tt,xt,me,ve,Ee,Qt,_t.data):z.texSubImage3D(Le,W,Ne,tt,xt,me,ve,Ee,Qt,nt,_t),z.pixelStorei(z.UNPACK_ROW_LENGTH,Bt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ot),z.pixelStorei(z.UNPACK_SKIP_PIXELS,On),z.pixelStorei(z.UNPACK_SKIP_ROWS,Fa),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Oi),W===0&&V.generateMipmaps&&z.generateMipmap(Le),Re.unbindTexture()},this.initRenderTarget=function(P){Ge.get(P).__webglFramebuffer===void 0&&Fe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Fe.setTextureCube(P,0):P.isData3DTexture?Fe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Fe.setTexture2DArray(P,0):Fe.setTexture2D(P,0),Re.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,Re.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Kc?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===ns?"display-p3":"srgb"}}class $r extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class g_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new D;class Fo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),a=it(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jh extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let br;const sa=new D,Er=new D,Ar=new D,Tr=new he,ca=new he,$h=new ct,co=new D,la=new D,lo=new D,nd=new he,Ys=new he,id=new he;class x_ extends vt{constructor(e=new jh){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new $e;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new g_(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Fo(n,3,0,!1)),br.setAttribute("uv",new Fo(n,2,3,!1))}this.geometry=br,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),$h.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-Ar.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;uo(co.set(-.5,-.5,0),Ar,s,Er,r,a),uo(la.set(.5,-.5,0),Ar,s,Er,r,a),uo(lo.set(.5,.5,0),Ar,s,Er,r,a),nd.set(0,0),Ys.set(1,0),id.set(1,1);let o=e.ray.intersectTriangle(co,la,lo,!1,sa);if(o===null&&(uo(la.set(-.5,.5,0),Ar,s,Er,r,a),Ys.set(0,1),o=e.ray.intersectTriangle(co,lo,la,!1,sa),o===null))return;const c=e.ray.origin.distanceTo(sa);c<e.near||c>e.far||t.push({distance:c,point:sa.clone(),uv:dn.getInterpolation(sa,co,la,lo,nd,Ys,id,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function uo(i,e,t,n,r,a){Tr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ca.x=a*Tr.x-r*Tr.y,ca.y=r*Tr.x+a*Tr.y):ca.copy(Tr),i.copy(e),i.x+=ca.x,i.y+=ca.y,i.applyMatrix4($h)}class ir extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zo=new D,Bo=new D,rd=new ct,ua=new Pa,ho=new Li,js=new D,ad=new D;class wa extends vt{constructor(e=new $e,t=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)zo.fromBufferAttribute(t,r-1),Bo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=zo.distanceTo(Bo);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),ho.radius+=a,e.ray.intersectsSphere(ho)===!1)return;rd.copy(r).invert(),ua.copy(e.ray).applyMatrix4(rd);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let v=f,g=_-1;v<g;v+=l){const m=u.getX(v),y=u.getX(v+1),x=fo(this,e,ua,c,m,y);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(f),m=fo(this,e,ua,c,v,g);m&&t.push(m)}}else{const f=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let v=f,g=_-1;v<g;v+=l){const m=fo(this,e,ua,c,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=fo(this,e,ua,c,_-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function fo(i,e,t,n,r,a){const s=i.geometry.attributes.position;if(zo.fromBufferAttribute(s,r),Bo.fromBufferAttribute(s,a),t.distanceSqToSegment(zo,Bo,js,ad)>n)return;js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(js);if(!(c<e.near||c>e.far))return{distance:c,point:ad.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const od=new D,sd=new D;class il extends wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)od.fromBufferAttribute(t,r),sd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+od.distanceTo(sd);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zh extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cd=new ct,yc=new Pa,po=new Li,mo=new D;class Kh extends vt{constructor(e=new $e,t=new Zh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),po.radius+=a,e.ray.intersectsSphere(po)===!1)return;cd.copy(r).invert(),yc.copy(e.ray).applyMatrix4(cd);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,s.start),f=Math.min(l.count,s.start+s.count);for(let _=d,v=f;_<v;_++){const g=l.getX(_);mo.fromBufferAttribute(h,g),ld(mo,g,c,r,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let _=d,v=f;_<v;_++)mo.fromBufferAttribute(h,_),ld(mo,_,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ld(i,e,t,n,r,a,s){const o=yc.distanceSqToPoint(i);if(o<t){const c=new D;yc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:s})}}class __ extends qt{constructor(e,t,n,r,a,s,o,c,l){super(e,t,n,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const a=n.length;let s;t?s=t:s=e*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-s,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===s)return r/(a-1);const u=n[r],d=n[r+1]-u,f=(s-u)/d;return(r+f)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),c=t||(s.isVector2?new he:new D);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,r=[],a=[],s=[],o=new D,c=new ct;for(let f=0;f<=e;f++){const _=f/e;r[f]=this.getTangentAt(_,new D)}a[0]=new D,s[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Et(r[f-1].dot(r[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,_))}s[f].crossVectors(r[f],a[f])}if(t===!0){let f=Math.acos(Et(a[0].dot(a[e]),-1,1));f/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let _=1;_<=e;_++)a[_].applyMatrix4(c.makeRotationAxis(r[_],f*_)),s[_].crossVectors(r[_],a[_])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jh extends ai{constructor(e=0,t=0,n=1,r=1,a=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new he){const n=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class v_ extends Jh{constructor(e,t,n,r,a,s){super(e,t,n,n,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function rl(){let i=0,e=0,t=0,n=0;function r(a,s,o,c){i=a,e=o,t=-3*a+3*s-2*o-c,n=2*a-2*s+o+c}return{initCatmullRom:function(a,s,o,c,l){r(s,o,l*(o-a),l*(c-s))},initNonuniformCatmullRom:function(a,s,o,c,l,u,h){let d=(s-a)/l-(o-a)/(l+u)+(o-s)/u,f=(o-s)/u-(c-s)/(u+h)+(c-o)/h;d*=u,f*=u,r(s,o,d,f)},calc:function(a){const s=a*a,o=s*a;return i+e*a+t*s+n*o}}}const go=new D,$s=new rl,Zs=new rl,Ks=new rl;class Qh extends ai{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),c=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%a]:(go.subVectors(r[0],r[1]).add(r[0]),l=go);const h=r[o%a],d=r[(o+1)%a];if(this.closed||o+2<a?u=r[(o+2)%a]:(go.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=go),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),$s.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,_,v,g),Zs.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,_,v,g),Ks.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,_,v,g)}else this.curveType==="catmullrom"&&($s.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Zs.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Ks.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set($s.calc(c),Zs.calc(c),Ks.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ud(i,e,t,n,r){const a=(n-e)*.5,s=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+a+s)*c+(-3*t+3*n-2*a-s)*o+a*i+t}function y_(i,e){const t=1-i;return t*t*e}function M_(i,e){return 2*(1-i)*i*e}function S_(i,e){return i*i*e}function ga(i,e,t,n){return y_(i,e)+M_(i,t)+S_(i,n)}function w_(i,e){const t=1-i;return t*t*t*e}function b_(i,e){const t=1-i;return 3*t*t*i*e}function E_(i,e){return 3*(1-i)*i*i*e}function A_(i,e){return i*i*i*e}function xa(i,e,t,n,r){return w_(i,e)+b_(i,t)+E_(i,n)+A_(i,r)}class T_ extends ai{constructor(e=new he,t=new he,n=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new he){const n=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(xa(e,r.x,a.x,s.x,o.x),xa(e,r.y,a.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class C_ extends ai{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(xa(e,r.x,a.x,s.x,o.x),xa(e,r.y,a.y,s.y,o.y),xa(e,r.z,a.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R_ extends ai{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P_ extends ai{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L_ extends ai{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,r=this.v0,a=this.v1,s=this.v2;return n.set(ga(e,r.x,a.x,s.x),ga(e,r.y,a.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ef extends ai{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,a=this.v1,s=this.v2;return n.set(ga(e,r.x,a.x,s.x),ga(e,r.y,a.y,s.y),ga(e,r.z,a.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D_ extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,c=r[s===0?s:s-1],l=r[s],u=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return n.set(ud(o,c.x,l.x,u.x,h.x),ud(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new he().fromArray(r))}return this}}var I_=Object.freeze({__proto__:null,ArcCurve:v_,CatmullRomCurve3:Qh,CubicBezierCurve:T_,CubicBezierCurve3:C_,EllipseCurve:Jh,LineCurve:R_,LineCurve3:P_,QuadraticBezierCurve:L_,QuadraticBezierCurve3:ef,SplineCurve:D_});class al extends $e{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],c=[],l=new D,u=new he;s.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),s.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(s[d]/e+1)/2,u.y=(s[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(o,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zr extends $e{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),a=Math.floor(a);const u=[],h=[],d=[],f=[];let _=0;const v=[],g=n/2;let m=0;y(),s===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ue(h,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function y(){const S=new D,E=new D;let T=0;const A=(t-e)/n;for(let C=0;C<=a;C++){const w=[],M=C/a,L=M*(t-e)+e;for(let I=0;I<=r;I++){const N=I/r,k=N*c+o,B=Math.sin(k),O=Math.cos(k);E.x=L*B,E.y=-M*n+g,E.z=L*O,h.push(E.x,E.y,E.z),S.set(B,A,O).normalize(),d.push(S.x,S.y,S.z),f.push(N,1-M),w.push(_++)}v.push(w)}for(let C=0;C<r;C++)for(let w=0;w<a;w++){const M=v[w][C],L=v[w+1][C],I=v[w+1][C+1],N=v[w][C+1];u.push(M,L,N),u.push(L,I,N),T+=6}l.addGroup(m,T,0),m+=T}function x(S){const E=_,T=new he,A=new D;let C=0;const w=S===!0?e:t,M=S===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),_++;const L=_;for(let I=0;I<=r;I++){const k=I/r*c+o,B=Math.cos(k),O=Math.sin(k);A.x=w*O,A.y=g*M,A.z=w*B,h.push(A.x,A.y,A.z),d.push(0,M,0),T.x=B*.5+.5,T.y=O*.5*M+.5,f.push(T.x,T.y),_++}for(let I=0;I<r;I++){const N=E+I,k=L+I;S===!0?u.push(k,k+1,N):u.push(k+1,k,N),C+=3}l.addGroup(m,C,S===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends Zr{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new ol(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sl extends $e{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const a=[],s=[];o(r),l(n),u(),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(a.slice(),3)),this.setAttribute("uv",new Ue(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new D,S=new D,E=new D;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],S),f(t[T+2],E),c(x,S,E,y)}function c(y,x,S,E){const T=E+1,A=[];for(let C=0;C<=T;C++){A[C]=[];const w=y.clone().lerp(S,C/T),M=x.clone().lerp(S,C/T),L=T-C;for(let I=0;I<=L;I++)I===0&&C===T?A[C][I]=w:A[C][I]=w.clone().lerp(M,I/L)}for(let C=0;C<T;C++)for(let w=0;w<2*(T-C)-1;w++){const M=Math.floor(w/2);w%2===0?(d(A[C][M+1]),d(A[C+1][M]),d(A[C][M])):(d(A[C][M+1]),d(A[C+1][M+1]),d(A[C+1][M]))}}function l(y){const x=new D;for(let S=0;S<a.length;S+=3)x.x=a[S+0],x.y=a[S+1],x.z=a[S+2],x.normalize().multiplyScalar(y),a[S+0]=x.x,a[S+1]=x.y,a[S+2]=x.z}function u(){const y=new D;for(let x=0;x<a.length;x+=3){y.x=a[x+0],y.y=a[x+1],y.z=a[x+2];const S=g(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;s.push(S,1-E)}_(),h()}function h(){for(let y=0;y<s.length;y+=6){const x=s[y+0],S=s[y+2],E=s[y+4],T=Math.max(x,S,E),A=Math.min(x,S,E);T>.9&&A<.1&&(x<.2&&(s[y+0]+=1),S<.2&&(s[y+2]+=1),E<.2&&(s[y+4]+=1))}}function d(y){a.push(y.x,y.y,y.z)}function f(y,x){const S=y*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function _(){const y=new D,x=new D,S=new D,E=new D,T=new he,A=new he,C=new he;for(let w=0,M=0;w<a.length;w+=9,M+=6){y.set(a[w+0],a[w+1],a[w+2]),x.set(a[w+3],a[w+4],a[w+5]),S.set(a[w+6],a[w+7],a[w+8]),T.set(s[M+0],s[M+1]),A.set(s[M+2],s[M+3]),C.set(s[M+4],s[M+5]),E.copy(y).add(x).add(S).divideScalar(3);const L=g(E);v(T,M+0,y,L),v(A,M+2,x,L),v(C,M+4,S,L)}}function v(y,x,S,E){E<0&&y.x===1&&(s[x]=y.x-1),S.x===0&&S.z===0&&(s[x]=E/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.vertices,e.indices,e.radius,e.details)}}const xo=new D,_o=new D,Js=new D,vo=new dn;class N_ extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(Dr*t),s=e.getIndex(),o=e.getAttribute("position"),c=s?s.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let _=0;_<c;_+=3){s?(l[0]=s.getX(_),l[1]=s.getX(_+1),l[2]=s.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:v,b:g,c:m}=vo;if(v.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),vo.getNormal(Js),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const x=(y+1)%3,S=h[y],E=h[x],T=vo[u[y]],A=vo[u[x]],C=`${S}_${E}`,w=`${E}_${S}`;w in d&&d[w]?(Js.dot(d[w].normal)<=a&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),d[w]=null):C in d||(d[C]={index0:l[y],index1:l[x],normal:Js.clone()})}}for(const _ in d)if(d[_]){const{index0:v,index1:g}=d[_];xo.fromBufferAttribute(o,v),_o.fromBufferAttribute(o,g),f.push(xo.x,xo.y,xo.z),f.push(_o.x,_o.y,_o.z)}this.setAttribute("position",new Ue(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class cl extends sl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cl(e.radius,e.detail)}}class Kr extends $e{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let l=0;const u=[],h=new D,d=new D,f=[],_=[],v=[],g=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let S=0;m===0&&s===0?S=.5/t:m===n&&c===Math.PI&&(S=-.5/t);for(let E=0;E<=t;E++){const T=E/t;h.x=-e*Math.cos(r+T*a)*Math.sin(s+x*o),h.y=e*Math.cos(s+x*o),h.z=e*Math.sin(r+T*a)*Math.sin(s+x*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(T+S,1-x),y.push(l++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const x=u[m][y+1],S=u[m][y],E=u[m+1][y],T=u[m+1][y+1];(m!==0||s>0)&&f.push(x,S,T),(m!==n-1||c<Math.PI)&&f.push(S,E,T)}this.setIndex(f),this.setAttribute("position",new Ue(_,3)),this.setAttribute("normal",new Ue(v,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ll extends $e{constructor(e=new ef(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new D,c=new D,l=new he;let u=new D;const h=[],d=[],f=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new Ue(h,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function v(){for(let x=0;x<t;x++)g(x);g(a===!1?t:0),y(),m()}function g(x){u=e.getPointAt(x/t,u);const S=s.normals[x],E=s.binormals[x];for(let T=0;T<=r;T++){const A=T/r*Math.PI*2,C=Math.sin(A),w=-Math.cos(A);c.x=w*S.x+C*E.x,c.y=w*S.y+C*E.y,c.z=w*S.z+C*E.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=t;x++)for(let S=1;S<=r;S++){const E=(r+1)*(x-1)+(S-1),T=(r+1)*x+(S-1),A=(r+1)*x+S,C=(r+1)*(x-1)+S;_.push(E,T,C),_.push(T,A,C)}}function y(){for(let x=0;x<=t;x++)for(let S=0;S<=r;S++)l.x=x/t,l.y=S/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ll(new I_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class tf extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U_ extends tf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nr extends ri{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ul extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class dl extends ul{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qs=new ct,dd=new D,hd=new D;class O_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hd),t.updateMatrixWorld(),Qs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class F_ extends O_{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pn extends ul{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new F_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jr extends ul{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fd=new ct;class z_{constructor(e,t,n=0,r=1/0){this.ray=new Pa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fd),this}intersectObject(e,t=!0,n=[]){return Mc(e,this,n,t),n.sort(pd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Mc(e[r],this,n,t);return n.sort(pd),n}}function pd(i,e){return i.distance-e.distance}function Mc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)Mc(a[s],e,t,!0)}}class md{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const gd=new D;let yo,ec;class B_ extends vt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,r=16776960,a=n*.2,s=a*.2){super(),this.type="ArrowHelper",yo===void 0&&(yo=new $e,yo.setAttribute("position",new Ue([0,0,0,0,1,0],3)),ec=new Zr(0,.5,1,5,1),ec.translate(0,-.5,0)),this.position.copy(t),this.line=new wa(yo,new ir({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Je(ec,new Xt({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{gd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(gd,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);const tc={type:"change"},nc={type:"start"},ic={type:"end"};class k_ extends Pi{constructor(e,t){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.target=new D;const a=1e-6,s=new D;let o=1,c=r.NONE,l=r.NONE,u=0,h=0,d=0;const f=new D,_=new he,v=new he,g=new D,m=new he,y=new he,x=new he,S=new he,E=[],T={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const F=n.domElement.getBoundingClientRect(),se=n.domElement.ownerDocument.documentElement;n.screen.left=F.left+window.pageXOffset-se.clientLeft,n.screen.top=F.top+window.pageYOffset-se.clientTop,n.screen.width=F.width,n.screen.height=F.height};const A=function(){const F=new he;return function(_e,Se){return F.set((_e-n.screen.left)/n.screen.width,(Se-n.screen.top)/n.screen.height),F}}(),C=function(){const F=new he;return function(_e,Se){return F.set((_e-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-Se))/n.screen.width),F}}();this.rotateCamera=function(){const F=new D,se=new Ti,_e=new D,Se=new D,z=new D,Ae=new D;return function(){Ae.set(v.x-_.x,v.y-_.y,0);let Ke=Ae.length();Ke?(f.copy(n.object.position).sub(n.target),_e.copy(f).normalize(),Se.copy(n.object.up).normalize(),z.crossVectors(Se,_e).normalize(),Se.setLength(v.y-_.y),z.setLength(v.x-_.x),Ae.copy(Se.add(z)),F.crossVectors(Ae,f).normalize(),Ke*=n.rotateSpeed,se.setFromAxisAngle(F,Ke),f.applyQuaternion(se),n.object.up.applyQuaternion(se),g.copy(F),d=Ke):!n.staticMoving&&d&&(d*=Math.sqrt(1-n.dynamicDampingFactor),f.copy(n.object.position).sub(n.target),se.setFromAxisAngle(g,d),f.applyQuaternion(se),n.object.up.applyQuaternion(se)),_.copy(v)}}(),this.zoomCamera=function(){let F;c===r.TOUCH_ZOOM_PAN?(F=u/h,u=h,n.object.isPerspectiveCamera?f.multiplyScalar(F):n.object.isOrthographicCamera?(n.object.zoom=_c.clamp(n.object.zoom/F,n.minZoom,n.maxZoom),o!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(F=1+(y.y-m.y)*n.zoomSpeed,F!==1&&F>0&&(n.object.isPerspectiveCamera?f.multiplyScalar(F):n.object.isOrthographicCamera?(n.object.zoom=_c.clamp(n.object.zoom/F,n.minZoom,n.maxZoom),o!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?m.copy(y):m.y+=(y.y-m.y)*this.dynamicDampingFactor)},this.panCamera=function(){const F=new he,se=new D,_e=new D;return function(){if(F.copy(S).sub(x),F.lengthSq()){if(n.object.isOrthographicCamera){const z=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,Ae=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;F.x*=z,F.y*=Ae}F.multiplyScalar(f.length()*n.panSpeed),_e.copy(f).cross(n.object.up).setLength(F.x),_e.add(se.copy(n.object.up).setLength(F.y)),n.object.position.add(_e),n.target.add(_e),n.staticMoving?x.copy(S):x.add(F.subVectors(S,x).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(f.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,f.setLength(n.maxDistance)),m.copy(y)),f.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,f.setLength(n.minDistance)),m.copy(y)))},this.update=function(){f.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,f),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),s.distanceToSquared(n.object.position)>a&&(n.dispatchEvent(tc),s.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(s.distanceToSquared(n.object.position)>a||o!==n.object.zoom)&&(n.dispatchEvent(tc),s.copy(n.object.position),o=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,l=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),f.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(tc),s.copy(n.object.position),o=n.object.zoom};function w(F){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",L)),pe(F),F.pointerType==="touch"?ne(F):B(F))}function M(F){n.enabled!==!1&&(F.pointerType==="touch"?ae(F):O(F))}function L(F){n.enabled!==!1&&(F.pointerType==="touch"?re(F):H(),q(F),E.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",L)))}function I(F){q(F)}function N(F){n.enabled!==!1&&(window.removeEventListener("keydown",N),l===r.NONE&&(F.code===n.keys[r.ROTATE]&&!n.noRotate?l=r.ROTATE:F.code===n.keys[r.ZOOM]&&!n.noZoom?l=r.ZOOM:F.code===n.keys[r.PAN]&&!n.noPan&&(l=r.PAN)))}function k(){n.enabled!==!1&&(l=r.NONE,window.addEventListener("keydown",N))}function B(F){if(c===r.NONE)switch(F.button){case n.mouseButtons.LEFT:c=r.ROTATE;break;case n.mouseButtons.MIDDLE:c=r.ZOOM;break;case n.mouseButtons.RIGHT:c=r.PAN;break}const se=l!==r.NONE?l:c;se===r.ROTATE&&!n.noRotate?(v.copy(C(F.pageX,F.pageY)),_.copy(v)):se===r.ZOOM&&!n.noZoom?(m.copy(A(F.pageX,F.pageY)),y.copy(m)):se===r.PAN&&!n.noPan&&(x.copy(A(F.pageX,F.pageY)),S.copy(x)),n.dispatchEvent(nc)}function O(F){const se=l!==r.NONE?l:c;se===r.ROTATE&&!n.noRotate?(_.copy(v),v.copy(C(F.pageX,F.pageY))):se===r.ZOOM&&!n.noZoom?y.copy(A(F.pageX,F.pageY)):se===r.PAN&&!n.noPan&&S.copy(A(F.pageX,F.pageY))}function H(){c=r.NONE,n.dispatchEvent(ic)}function G(F){if(n.enabled!==!1&&n.noZoom!==!0){switch(F.preventDefault(),F.deltaMode){case 2:m.y-=F.deltaY*.025;break;case 1:m.y-=F.deltaY*.01;break;default:m.y-=F.deltaY*25e-5;break}n.dispatchEvent(nc),n.dispatchEvent(ic)}}function ne(F){switch(te(F),E.length){case 1:c=r.TOUCH_ROTATE,v.copy(C(E[0].pageX,E[0].pageY)),_.copy(v);break;default:c=r.TOUCH_ZOOM_PAN;const se=E[0].pageX-E[1].pageX,_e=E[0].pageY-E[1].pageY;h=u=Math.sqrt(se*se+_e*_e);const Se=(E[0].pageX+E[1].pageX)/2,z=(E[0].pageY+E[1].pageY)/2;x.copy(A(Se,z)),S.copy(x);break}n.dispatchEvent(nc)}function ae(F){switch(te(F),E.length){case 1:_.copy(v),v.copy(C(F.pageX,F.pageY));break;default:const se=fe(F),_e=F.pageX-se.x,Se=F.pageY-se.y;h=Math.sqrt(_e*_e+Se*Se);const z=(F.pageX+se.x)/2,Ae=(F.pageY+se.y)/2;S.copy(A(z,Ae));break}}function re(F){switch(E.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,v.copy(C(F.pageX,F.pageY)),_.copy(v);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let se=0;se<E.length;se++)if(E[se].pointerId!==F.pointerId){const _e=T[E[se].pointerId];v.copy(C(_e.x,_e.y)),_.copy(v);break}break}n.dispatchEvent(ic)}function ee(F){n.enabled!==!1&&F.preventDefault()}function pe(F){E.push(F)}function q(F){delete T[F.pointerId];for(let se=0;se<E.length;se++)if(E[se].pointerId==F.pointerId){E.splice(se,1);return}}function te(F){let se=T[F.pointerId];se===void 0&&(se=new he,T[F.pointerId]=se),se.set(F.pageX,F.pageY)}function fe(F){const se=F.pointerId===E[0].pointerId?E[1]:E[0];return T[se.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",G),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",L),window.removeEventListener("keydown",N),window.removeEventListener("keyup",k)},this.domElement.addEventListener("contextmenu",ee),this.domElement.addEventListener("pointerdown",w),this.domElement.addEventListener("pointercancel",I),this.domElement.addEventListener("wheel",G,{passive:!1}),window.addEventListener("keydown",N),window.addEventListener("keyup",k),this.handleResize(),this.update()}}const xd={type:"change"},rc={type:"start"},_d={type:"end"},Mo=new Pa,vd=new Ze,V_=Math.cos(70*_c.DEG2RAD);class G_ extends Pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",de),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xd),n.update(),a=r.NONE},this.update=function(){const b=new D,Z=new Ti().setFromUnitVectors(e.up,new D(0,1,0)),X=Z.clone().invert(),J=new D,oe=new Ti,Pe=new D,Ve=2*Math.PI;return function(yt=null){const Qe=n.object.position;b.copy(Qe).sub(n.target),b.applyQuaternion(Z),o.setFromVector3(b),n.autoRotate&&a===r.NONE&&I(M(yt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Mt=n.minAzimuthAngle,St=n.maxAzimuthAngle;isFinite(Mt)&&isFinite(St)&&(Mt<-Math.PI?Mt+=Ve:Mt>Math.PI&&(Mt-=Ve),St<-Math.PI?St+=Ve:St>Math.PI&&(St-=Ve),Mt<=St?o.theta=Math.max(Mt,Math.min(St,o.theta)):o.theta=o.theta>(Mt+St)/2?Math.max(Mt,o.theta):Math.min(St,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Kt=!1;if(n.zoomToCursor&&T||n.object.isOrthographicCamera)o.radius=ae(o.radius);else{const Jt=o.radius;o.radius=ae(o.radius*l),Kt=Jt!=o.radius}if(b.setFromSpherical(o),b.applyQuaternion(X),Qe.copy(n.target).add(b),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&T){let Jt=null;if(n.object.isPerspectiveCamera){const oi=b.length();Jt=ae(oi*l);const Ni=oi-Jt;n.object.position.addScaledVector(S,Ni),n.object.updateMatrixWorld(),Kt=!!Ni}else if(n.object.isOrthographicCamera){const oi=new D(E.x,E.y,0);oi.unproject(n.object);const Ni=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Kt=Ni!==n.object.zoom;const Ui=new D(E.x,E.y,0);Ui.unproject(n.object),n.object.position.sub(Ui).add(oi),n.object.updateMatrixWorld(),Jt=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Jt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Jt).add(n.object.position):(Mo.origin.copy(n.object.position),Mo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Mo.direction))<V_?e.lookAt(n.target):(vd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Mo.intersectPlane(vd,n.target))))}else if(n.object.isOrthographicCamera){const Jt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Jt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Kt=!0)}return l=1,T=!1,Kt||J.distanceToSquared(n.object.position)>s||8*(1-oe.dot(n.object.quaternion))>s||Pe.distanceToSquared(n.target)>s?(n.dispatchEvent(xd),J.copy(n.object.position),oe.copy(n.object.quaternion),Pe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Me),n.domElement.removeEventListener("pointerdown",at),n.domElement.removeEventListener("pointercancel",R),n.domElement.removeEventListener("wheel",K),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",R),n.domElement.getRootNode().removeEventListener("keydown",le,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",de),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const s=1e-6,o=new md,c=new md;let l=1;const u=new D,h=new he,d=new he,f=new he,_=new he,v=new he,g=new he,m=new he,y=new he,x=new he,S=new D,E=new he;let T=!1;const A=[],C={};let w=!1;function M(b){return b!==null?2*Math.PI/60*n.autoRotateSpeed*b:2*Math.PI/60/60*n.autoRotateSpeed}function L(b){const Z=Math.abs(b*.01);return Math.pow(.95,n.zoomSpeed*Z)}function I(b){c.theta-=b}function N(b){c.phi-=b}const k=function(){const b=new D;return function(X,J){b.setFromMatrixColumn(J,0),b.multiplyScalar(-X),u.add(b)}}(),B=function(){const b=new D;return function(X,J){n.screenSpacePanning===!0?b.setFromMatrixColumn(J,1):(b.setFromMatrixColumn(J,0),b.crossVectors(n.object.up,b)),b.multiplyScalar(X),u.add(b)}}(),O=function(){const b=new D;return function(X,J){const oe=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;b.copy(Pe).sub(n.target);let Ve=b.length();Ve*=Math.tan(n.object.fov/2*Math.PI/180),k(2*X*Ve/oe.clientHeight,n.object.matrix),B(2*J*Ve/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(X*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),B(J*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(b,Z){if(!n.zoomToCursor)return;T=!0;const X=n.domElement.getBoundingClientRect(),J=b-X.left,oe=Z-X.top,Pe=X.width,Ve=X.height;E.x=J/Pe*2-1,E.y=-(oe/Ve)*2+1,S.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function ae(b){return Math.max(n.minDistance,Math.min(n.maxDistance,b))}function re(b){h.set(b.clientX,b.clientY)}function ee(b){ne(b.clientX,b.clientX),m.set(b.clientX,b.clientY)}function pe(b){_.set(b.clientX,b.clientY)}function q(b){d.set(b.clientX,b.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Z=n.domElement;I(2*Math.PI*f.x/Z.clientHeight),N(2*Math.PI*f.y/Z.clientHeight),h.copy(d),n.update()}function te(b){y.set(b.clientX,b.clientY),x.subVectors(y,m),x.y>0?H(L(x.y)):x.y<0&&G(L(x.y)),m.copy(y),n.update()}function fe(b){v.set(b.clientX,b.clientY),g.subVectors(v,_).multiplyScalar(n.panSpeed),O(g.x,g.y),_.copy(v),n.update()}function F(b){ne(b.clientX,b.clientY),b.deltaY<0?G(L(b.deltaY)):b.deltaY>0&&H(L(b.deltaY)),n.update()}function se(b){let Z=!1;switch(b.code){case n.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),Z=!0;break}Z&&(b.preventDefault(),n.update())}function _e(b){if(A.length===1)h.set(b.pageX,b.pageY);else{const Z=qe(b),X=.5*(b.pageX+Z.x),J=.5*(b.pageY+Z.y);h.set(X,J)}}function Se(b){if(A.length===1)_.set(b.pageX,b.pageY);else{const Z=qe(b),X=.5*(b.pageX+Z.x),J=.5*(b.pageY+Z.y);_.set(X,J)}}function z(b){const Z=qe(b),X=b.pageX-Z.x,J=b.pageY-Z.y,oe=Math.sqrt(X*X+J*J);m.set(0,oe)}function Ae(b){n.enableZoom&&z(b),n.enablePan&&Se(b)}function ke(b){n.enableZoom&&z(b),n.enableRotate&&_e(b)}function Ke(b){if(A.length==1)d.set(b.pageX,b.pageY);else{const X=qe(b),J=.5*(b.pageX+X.x),oe=.5*(b.pageY+X.y);d.set(J,oe)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Z=n.domElement;I(2*Math.PI*f.x/Z.clientHeight),N(2*Math.PI*f.y/Z.clientHeight),h.copy(d)}function Re(b){if(A.length===1)v.set(b.pageX,b.pageY);else{const Z=qe(b),X=.5*(b.pageX+Z.x),J=.5*(b.pageY+Z.y);v.set(X,J)}g.subVectors(v,_).multiplyScalar(n.panSpeed),O(g.x,g.y),_.copy(v)}function je(b){const Z=qe(b),X=b.pageX-Z.x,J=b.pageY-Z.y,oe=Math.sqrt(X*X+J*J);y.set(0,oe),x.set(0,Math.pow(y.y/m.y,n.zoomSpeed)),H(x.y),m.copy(y);const Pe=(b.pageX+Z.x)*.5,Ve=(b.pageY+Z.y)*.5;ne(Pe,Ve)}function Ge(b){n.enableZoom&&je(b),n.enablePan&&Re(b)}function Fe(b){n.enableZoom&&je(b),n.enableRotate&&Ke(b)}function at(b){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(b.pointerId),n.domElement.addEventListener("pointermove",U),n.domElement.addEventListener("pointerup",R)),!ge(b)&&(He(b),b.pointerType==="touch"?we(b):$(b)))}function U(b){n.enabled!==!1&&(b.pointerType==="touch"?ce(b):ie(b))}function R(b){switch(Ie(b),A.length){case 0:n.domElement.releasePointerCapture(b.pointerId),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",R),n.dispatchEvent(_d),a=r.NONE;break;case 1:const Z=A[0],X=C[Z];we({pointerId:Z,pageX:X.x,pageY:X.y});break}}function $(b){let Z;switch(b.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Hn.DOLLY:if(n.enableZoom===!1)return;ee(b),a=r.DOLLY;break;case Hn.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enablePan===!1)return;pe(b),a=r.PAN}else{if(n.enableRotate===!1)return;re(b),a=r.ROTATE}break;case Hn.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enableRotate===!1)return;re(b),a=r.ROTATE}else{if(n.enablePan===!1)return;pe(b),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(rc)}function ie(b){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;q(b);break;case r.DOLLY:if(n.enableZoom===!1)return;te(b);break;case r.PAN:if(n.enablePan===!1)return;fe(b);break}}function K(b){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(b.preventDefault(),n.dispatchEvent(rc),F(Q(b)),n.dispatchEvent(_d))}function Q(b){const Z=b.deltaMode,X={clientX:b.clientX,clientY:b.clientY,deltaY:b.deltaY};switch(Z){case 1:X.deltaY*=16;break;case 2:X.deltaY*=100;break}return b.ctrlKey&&!w&&(X.deltaY*=10),X}function le(b){b.key==="Control"&&(w=!0,n.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(b){b.key==="Control"&&(w=!1,n.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function de(b){n.enabled===!1||n.enablePan===!1||se(b)}function we(b){switch(We(b),A.length){case 1:switch(n.touches.ONE){case or.ROTATE:if(n.enableRotate===!1)return;_e(b),a=r.TOUCH_ROTATE;break;case or.PAN:if(n.enablePan===!1)return;Se(b),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case or.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(b),a=r.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(b),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(rc)}function ce(b){switch(We(b),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ke(b),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Re(b),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(b),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(b),n.update();break;default:a=r.NONE}}function Me(b){n.enabled!==!1&&b.preventDefault()}function He(b){A.push(b.pointerId)}function Ie(b){delete C[b.pointerId];for(let Z=0;Z<A.length;Z++)if(A[Z]==b.pointerId){A.splice(Z,1);return}}function ge(b){for(let Z=0;Z<A.length;Z++)if(A[Z]==b.pointerId)return!0;return!1}function We(b){let Z=C[b.pointerId];Z===void 0&&(Z=new he,C[b.pointerId]=Z),Z.set(b.pageX,b.pageY)}function qe(b){const Z=b.pointerId===A[0]?A[1]:A[0];return C[Z]}n.domElement.addEventListener("contextmenu",Me),n.domElement.addEventListener("pointerdown",at),n.domElement.addEventListener("pointercancel",R),n.domElement.addEventListener("wheel",K,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}class H_ extends Je{constructor(e,t,n=!1,r=!1,a=1e4){const s=new $e;super(s,t),this.isMarchingCubes=!0;const o=this,c=new Float32Array(12*3),l=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=n,this.enableColors=r,this.init=function(y){this.resolution=y,this.isolation=80,this.size=y,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const x=a*3;this.positionArray=new Float32Array(x*3);const S=new Ft(this.positionArray,3);S.setUsage(ka),s.setAttribute("position",S),this.normalArray=new Float32Array(x*3);const E=new Ft(this.normalArray,3);if(E.setUsage(ka),s.setAttribute("normal",E),this.enableUvs){this.uvArray=new Float32Array(x*2);const T=new Ft(this.uvArray,2);T.setUsage(ka),s.setAttribute("uv",T)}if(this.enableColors){this.colorArray=new Float32Array(x*3);const T=new Ft(this.colorArray,3);T.setUsage(ka),s.setAttribute("color",T)}s.boundingSphere=new Li(new D,1)};function h(y,x,S){return y+(x-y)*S}function d(y,x,S,E,T,A,C,w,M,L){const I=(S-C)/(w-C),N=o.normal_cache;c[x+0]=E+I*o.delta,c[x+1]=T,c[x+2]=A,l[x+0]=h(N[y+0],N[y+3],I),l[x+1]=h(N[y+1],N[y+4],I),l[x+2]=h(N[y+2],N[y+5],I),u[x+0]=h(o.palette[M*3+0],o.palette[L*3+0],I),u[x+1]=h(o.palette[M*3+1],o.palette[L*3+1],I),u[x+2]=h(o.palette[M*3+2],o.palette[L*3+2],I)}function f(y,x,S,E,T,A,C,w,M,L){const I=(S-C)/(w-C),N=o.normal_cache;c[x+0]=E,c[x+1]=T+I*o.delta,c[x+2]=A;const k=y+o.yd*3;l[x+0]=h(N[y+0],N[k+0],I),l[x+1]=h(N[y+1],N[k+1],I),l[x+2]=h(N[y+2],N[k+2],I),u[x+0]=h(o.palette[M*3+0],o.palette[L*3+0],I),u[x+1]=h(o.palette[M*3+1],o.palette[L*3+1],I),u[x+2]=h(o.palette[M*3+2],o.palette[L*3+2],I)}function _(y,x,S,E,T,A,C,w,M,L){const I=(S-C)/(w-C),N=o.normal_cache;c[x+0]=E,c[x+1]=T,c[x+2]=A+I*o.delta;const k=y+o.zd*3;l[x+0]=h(N[y+0],N[k+0],I),l[x+1]=h(N[y+1],N[k+1],I),l[x+2]=h(N[y+2],N[k+2],I),u[x+0]=h(o.palette[M*3+0],o.palette[L*3+0],I),u[x+1]=h(o.palette[M*3+1],o.palette[L*3+1],I),u[x+2]=h(o.palette[M*3+2],o.palette[L*3+2],I)}function v(y){const x=y*3;o.normal_cache[x]===0&&(o.normal_cache[x+0]=o.field[y-1]-o.field[y+1],o.normal_cache[x+1]=o.field[y-o.yd]-o.field[y+o.yd],o.normal_cache[x+2]=o.field[y-o.zd]-o.field[y+o.zd])}function g(y,x,S,E,T){const A=E+1,C=E+o.yd,w=E+o.zd,M=A+o.yd,L=A+o.zd,I=E+o.yd+o.zd,N=A+o.yd+o.zd;let k=0;const B=o.field[E],O=o.field[A],H=o.field[C],G=o.field[M],ne=o.field[w],ae=o.field[L],re=o.field[I],ee=o.field[N];B<T&&(k|=1),O<T&&(k|=2),H<T&&(k|=8),G<T&&(k|=4),ne<T&&(k|=16),ae<T&&(k|=32),re<T&&(k|=128),ee<T&&(k|=64);const pe=W_[k];if(pe===0)return 0;const q=o.delta,te=y+q,fe=x+q,F=S+q;pe&1&&(v(E),v(A),d(E*3,0,T,y,x,S,B,O,E,A)),pe&2&&(v(A),v(M),f(A*3,3,T,te,x,S,O,G,A,M)),pe&4&&(v(C),v(M),d(C*3,6,T,y,fe,S,H,G,C,M)),pe&8&&(v(E),v(C),f(E*3,9,T,y,x,S,B,H,E,C)),pe&16&&(v(w),v(L),d(w*3,12,T,y,x,F,ne,ae,w,L)),pe&32&&(v(L),v(N),f(L*3,15,T,te,x,F,ae,ee,L,N)),pe&64&&(v(I),v(N),d(I*3,18,T,y,fe,F,re,ee,I,N)),pe&128&&(v(w),v(I),f(w*3,21,T,y,x,F,ne,re,w,I)),pe&256&&(v(E),v(w),_(E*3,24,T,y,x,S,B,ne,E,w)),pe&512&&(v(A),v(L),_(A*3,27,T,te,x,S,O,ae,A,L)),pe&1024&&(v(M),v(N),_(M*3,30,T,te,fe,S,G,ee,M,N)),pe&2048&&(v(C),v(I),_(C*3,33,T,y,fe,S,H,re,C,I)),k<<=4;let se,_e,Se,z=0,Ae=0;for(;So[k+Ae]!=-1;)se=k+Ae,_e=se+1,Se=se+2,m(c,l,u,3*So[se],3*So[_e],3*So[Se]),Ae+=3,z++;return z}function m(y,x,S,E,T,A){const C=o.count*3;if(o.positionArray[C+0]=y[E],o.positionArray[C+1]=y[E+1],o.positionArray[C+2]=y[E+2],o.positionArray[C+3]=y[T],o.positionArray[C+4]=y[T+1],o.positionArray[C+5]=y[T+2],o.positionArray[C+6]=y[A],o.positionArray[C+7]=y[A+1],o.positionArray[C+8]=y[A+2],o.material.flatShading===!0){const w=(x[E+0]+x[T+0]+x[A+0])/3,M=(x[E+1]+x[T+1]+x[A+1])/3,L=(x[E+2]+x[T+2]+x[A+2])/3;o.normalArray[C+0]=w,o.normalArray[C+1]=M,o.normalArray[C+2]=L,o.normalArray[C+3]=w,o.normalArray[C+4]=M,o.normalArray[C+5]=L,o.normalArray[C+6]=w,o.normalArray[C+7]=M,o.normalArray[C+8]=L}else o.normalArray[C+0]=x[E+0],o.normalArray[C+1]=x[E+1],o.normalArray[C+2]=x[E+2],o.normalArray[C+3]=x[T+0],o.normalArray[C+4]=x[T+1],o.normalArray[C+5]=x[T+2],o.normalArray[C+6]=x[A+0],o.normalArray[C+7]=x[A+1],o.normalArray[C+8]=x[A+2];if(o.enableUvs){const w=o.count*2;o.uvArray[w+0]=y[E+0],o.uvArray[w+1]=y[E+2],o.uvArray[w+2]=y[T+0],o.uvArray[w+3]=y[T+2],o.uvArray[w+4]=y[A+0],o.uvArray[w+5]=y[A+2]}o.enableColors&&(o.colorArray[C+0]=S[E+0],o.colorArray[C+1]=S[E+1],o.colorArray[C+2]=S[E+2],o.colorArray[C+3]=S[T+0],o.colorArray[C+4]=S[T+1],o.colorArray[C+5]=S[T+2],o.colorArray[C+6]=S[A+0],o.colorArray[C+7]=S[A+1],o.colorArray[C+8]=S[A+2]),o.count+=3}this.addBall=function(y,x,S,E,T,A){const C=Math.sign(E);E=Math.abs(E);const w=A!=null;let M=new ye(y,x,S);if(w)try{M=A instanceof ye?A:Array.isArray(A)?new ye(Math.min(Math.abs(A[0]),1),Math.min(Math.abs(A[1]),1),Math.min(Math.abs(A[2]),1)):new ye(A)}catch{M=new ye(y,x,S)}const L=this.size*Math.sqrt(E/T),I=S*this.size,N=x*this.size,k=y*this.size;let B=Math.floor(I-L);B<1&&(B=1);let O=Math.floor(I+L);O>this.size-1&&(O=this.size-1);let H=Math.floor(N-L);H<1&&(H=1);let G=Math.floor(N+L);G>this.size-1&&(G=this.size-1);let ne=Math.floor(k-L);ne<1&&(ne=1);let ae=Math.floor(k+L);ae>this.size-1&&(ae=this.size-1);let re,ee,pe,q,te,fe,F,se,_e,Se,z;for(pe=B;pe<O;pe++)for(te=this.size2*pe,se=pe/this.size-S,_e=se*se,ee=H;ee<G;ee++)for(q=te+this.size*ee,F=ee/this.size-x,Se=F*F,re=ne;re<ae;re++)if(fe=re/this.size-y,z=E/(1e-6+fe*fe+Se+_e)-T,z>0){this.field[q+re]+=z*C;const Ae=Math.sqrt((re-k)*(re-k)+(ee-N)*(ee-N)+(pe-I)*(pe-I))/L,ke=1-Ae*Ae*Ae*(Ae*(Ae*6-15)+10);this.palette[(q+re)*3+0]+=M.r*ke,this.palette[(q+re)*3+1]+=M.g*ke,this.palette[(q+re)*3+2]+=M.b*ke}},this.addPlaneX=function(y,x){const S=this.size,E=this.yd,T=this.zd,A=this.field;let C,w,M,L,I,N,k,B=S*Math.sqrt(y/x);for(B>S&&(B=S),C=0;C<B;C++)if(N=C/S,L=N*N,I=y/(1e-4+L)-x,I>0)for(w=0;w<S;w++)for(k=C+w*E,M=0;M<S;M++)A[T*M+k]+=I},this.addPlaneY=function(y,x){const S=this.size,E=this.yd,T=this.zd,A=this.field;let C,w,M,L,I,N,k,B,O=S*Math.sqrt(y/x);for(O>S&&(O=S),w=0;w<O;w++)if(N=w/S,L=N*N,I=y/(1e-4+L)-x,I>0)for(k=w*E,C=0;C<S;C++)for(B=k+C,M=0;M<S;M++)A[T*M+B]+=I},this.addPlaneZ=function(y,x){const S=this.size,E=this.yd,T=this.zd,A=this.field;let C,w,M,L,I,N,k,B,O=S*Math.sqrt(y/x);for(O>S&&(O=S),M=0;M<O;M++)if(N=M/S,L=N*N,I=y/(1e-4+L)-x,I>0)for(k=T*M,w=0;w<S;w++)for(B=k+w*E,C=0;C<S;C++)A[B+C]+=I},this.setCell=function(y,x,S,E){const T=this.size2*S+this.size*x+y;this.field[T]=E},this.getCell=function(y,x,S){const E=this.size2*S+this.size*x+y;return this.field[E]},this.blur=function(y=1){const x=this.field,S=x.slice(),E=this.size,T=this.size2;for(let A=0;A<E;A++)for(let C=0;C<E;C++)for(let w=0;w<E;w++){const M=T*w+E*C+A;let L=S[M],I=1;for(let N=-1;N<=1;N+=2){const k=N+A;if(!(k<0||k>=E))for(let B=-1;B<=1;B+=2){const O=B+C;if(!(O<0||O>=E))for(let H=-1;H<=1;H+=2){const G=H+w;if(G<0||G>=E)continue;const ne=T*G+E*O+k,ae=S[ne];I++,L+=y*(ae-L)/I}}}x[M]=L}},this.reset=function(){for(let y=0;y<this.size3;y++)this.normal_cache[y*3]=0,this.field[y]=0,this.palette[y*3]=this.palette[y*3+1]=this.palette[y*3+2]=0},this.update=function(){this.count=0;const y=this.size-2;for(let x=1;x<y;x++){const S=this.size2*x,E=(x-this.halfsize)/this.halfsize;for(let T=1;T<y;T++){const A=S+this.size*T,C=(T-this.halfsize)/this.halfsize;for(let w=1;w<y;w++){const M=(w-this.halfsize)/this.halfsize,L=A+w;g(M,C,E,L,this.isolation)}}}this.geometry.setDrawRange(0,this.count),s.getAttribute("position").needsUpdate=!0,s.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(s.getAttribute("uv").needsUpdate=!0),this.enableColors&&(s.getAttribute("color").needsUpdate=!0),this.count/3>a&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const W_=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),So=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function Sc(i,e){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle=e;const r=i.length>2?34:i.length>1?44:58;n.font=`700 ${r}px Segoe UI, Arial, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(i,64,64);const a=new __(t);a.colorSpace=nn;const s=new jh({map:a,transparent:!0,alphaTest:.2,depthTest:!0,depthWrite:!1});s.toneMapped=!1;const o=new x_(s);return o.scale.set(.68,.68,.68),o.renderOrder=20,o}function wc(i,e,t,n){const r=e.clone().sub(i),a=r.length(),s=new Xt({color:n});s.toneMapped=!1;const o=new Je(new Zr(t,t,a,48,1,!1),s);return o.position.copy(i).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new D(0,1,0),r.normalize()),o}function bc(i,e,t,n,r){const a=new Xt({color:r});a.toneMapped=!1;const s=new Je(new ol(n,t,96,1,!1),a);return s.position.copy(e),s.quaternion.setFromUnitVectors(new D(0,1,0),i.clone().normalize()),s}function ko(i,e=.2,t=.9){const n=new dt;n.userData.isAxis=!0,n.name="axis_group_auto";const r=i*t,a=i*.02,s=r*.1,o=a*3,c=[{dir:new D(1,0,0),color:16711680,label:"x",labelColor:"#ff0000"},{dir:new D(0,1,0),color:47400,label:"y",labelColor:"#00e63a"},{dir:new D(0,0,1),color:15785216,label:"z",labelColor:"#fff000"}];for(const l of c){const u=l.dir.clone().multiplyScalar(-r),h=l.dir.clone().multiplyScalar(r);n.add(wc(u,h,a,l.color)),n.add(bc(l.dir,l.dir.clone().multiplyScalar(r*1.01),s,o,l.color));const d=Sc(l.label,l.labelColor);d.scale.setScalar(Math.max(.98,Math.min(1.18,i*.23))),l.label==="x"&&d.position.set(r*1.2,-e,0),l.label==="y"&&d.position.set(-e,r*1.2,0),l.label==="z"&&d.position.set(-e,-e,r*1.2),n.add(d)}return n}function q_(i,e,t,n){const r=new dt,a=Math.max(.018,i*.006),s=i*.08,o=a*3.2,c=new D(0,0,t),l=new D(i,0,t),u=new D(0,0,t+e);r.add(wc(c,l,a,15785216)),r.add(bc(new D(1,0,0),l,s,o,15785216)),r.add(wc(c,u,a,22527)),r.add(bc(new D(0,0,1),u,s,o,22527));const h=Sc("r","#fff000");h.scale.setScalar(.48),h.position.set(i+s*.85,-i*.045,t),r.add(h);const d=Sc(n==="R2"?"R*R":n,"#0057ff");return d.scale.setScalar(.58),d.position.set(-i*.08,0,t+e+s*.9),r.add(d),r}const ut=new $r;ut.background=new ye(1120295);function rr(i,e){const t=new k_(i,e);return t.rotateSpeed=3.2,t.zoomSpeed=1.15,t.panSpeed=.65,t.staticMoving=!1,t.dynamicDampingFactor=.12,t.noRotate=!1,t.noZoom=!1,t.noPan=!1,t}function ac(i){return i.pointerType==="mouse"&&(i.button===2||(i.buttons&2)===2)}function Rn(i){var e;i&&(i.enabled=!0,i.noRotate=!1,i.noZoom=!1,i.noPan=!1,(e=i.handleResize)==null||e.call(i),i.update())}function _i(i){var c,l,u,h,d;if(!i)return;const e=i.object,t=(c=e==null?void 0:e.position)==null?void 0:c.clone(),n=(l=e==null?void 0:e.quaternion)==null?void 0:l.clone(),r=(u=e==null?void 0:e.up)==null?void 0:u.clone(),a=e==null?void 0:e.zoom,s=(h=i.target)==null?void 0:h.clone(),o=i.staticMoving;typeof i.reset=="function"&&t&&s&&(i.staticMoving=!0,i.reset(),e.position.copy(t),n&&e.quaternion.copy(n),r&&e.up.copy(r),typeof a=="number"&&(e.zoom=a),i.target.copy(s),(d=e.updateProjectionMatrix)==null||d.call(e),i.staticMoving=o),Rn(i)}function Da(i,e){const t=i==null?void 0:i.querySelector("canvas");if(!t||!e)return;const n=()=>typeof e=="function"?e():e;t.addEventListener("pointerdown",r=>{if(ac(r)){r.preventDefault(),r.stopImmediatePropagation(),_i(n());return}Rn(n())},{capture:!0}),t.addEventListener("pointermove",r=>{ac(r)&&(r.preventDefault(),r.stopImmediatePropagation())},{capture:!0}),t.addEventListener("pointerup",r=>{ac(r)&&(r.preventDefault(),r.stopImmediatePropagation()),Rn(n())},{capture:!0}),t.addEventListener("pointercancel",()=>_i(n()),{capture:!0}),t.addEventListener("lostpointercapture",()=>_i(n())),t.addEventListener("mouseenter",()=>Rn(n())),t.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopImmediatePropagation(),_i(n())},{capture:!0})}const st=new nr(-5,5,5,-5,.1,1e3),ft=new La({antialias:!0,preserveDrawingBuffer:!0});ft.setPixelRatio(Math.min(window.devicePixelRatio,2));ft.localClippingEnabled=!0;p.viewer.appendChild(ft.domElement);let Ce=rr(st,ft.domElement);const zt=new $r,lt=new nr(-5,5,5,-5,.1,1e3),Di=new La({antialias:!0,preserveDrawingBuffer:!0});Di.setPixelRatio(Math.min(window.devicePixelRatio,2));Di.localClippingEnabled=!0;p.angularViewer.appendChild(Di.domElement);let Oe=rr(lt,Di.domElement);const ni=new $r,Pt=new nr(-5,5,5,-5,.1,1e3);Pt.up.set(0,0,1);const Qr=new La({antialias:!0,preserveDrawingBuffer:!0});Qr.setPixelRatio(Math.min(window.devicePixelRatio,2));p.projectionViewer.appendChild(Qr.domElement);const Sn=rr(Pt,Qr.domElement),ii=new $r,It=new nr(-5,5,5,-5,.1,1e3),ea=new La({antialias:!0,preserveDrawingBuffer:!0});ea.setPixelRatio(Math.min(window.devicePixelRatio,2));p.radialViewer.appendChild(ea.domElement);const Ht=rr(It,ea.domElement);Da(p.viewer,()=>Ce);Da(p.angularViewer,()=>Oe);Da(p.projectionViewer,Sn);Da(p.radialViewer,Ht);function Vo(){_i(Ce),_i(Oe),_i(Sn),_i(Ht)}function yd(){Rn(Ce),Rn(Oe),Rn(Sn),Rn(Ht)}function X_(){var t,n,r;const i=((t=Ce==null?void 0:Ce.target)==null?void 0:t.clone())??new D,e={rotateSpeed:(Ce==null?void 0:Ce.rotateSpeed)??3.2,zoomSpeed:(Ce==null?void 0:Ce.zoomSpeed)??1.15,panSpeed:(Ce==null?void 0:Ce.panSpeed)??.65,staticMoving:(Ce==null?void 0:Ce.staticMoving)??!1,dynamicDampingFactor:(Ce==null?void 0:Ce.dynamicDampingFactor)??.12,noRotate:(Ce==null?void 0:Ce.noRotate)??!1,noZoom:(Ce==null?void 0:Ce.noZoom)??!1,noPan:(Ce==null?void 0:Ce.noPan)??!1};(n=Ce==null?void 0:Ce.dispose)==null||n.call(Ce),Ce=rr(st,ft.domElement),Object.assign(Ce,e),Ce.target.copy(i),(r=Ce.handleResize)==null||r.call(Ce),Ce.update()}function Y_(){var t,n,r;const i=((t=Oe==null?void 0:Oe.target)==null?void 0:t.clone())??new D,e={rotateSpeed:(Oe==null?void 0:Oe.rotateSpeed)??3.2,zoomSpeed:(Oe==null?void 0:Oe.zoomSpeed)??1.15,panSpeed:(Oe==null?void 0:Oe.panSpeed)??.65,staticMoving:(Oe==null?void 0:Oe.staticMoving)??!1,dynamicDampingFactor:(Oe==null?void 0:Oe.dynamicDampingFactor)??.12,noRotate:!1,noZoom:!1,noPan:!1};(n=Oe==null?void 0:Oe.dispose)==null||n.call(Oe),Oe=rr(lt,Di.domElement),Object.assign(Oe,e),Oe.target.copy(i),(r=Oe.handleResize)==null||r.call(Oe),Oe.update()}const hl=new Pn(16777215,1.45);hl.position.set(0,0,1);st.add(hl);st.add(new Pn(16777215,.22));ut.add(st);ut.add(new Jr(16777215,.55));ut.add(new dl(16777215,1447446,.45));const fl=new Pn(16777215,1.45);fl.position.set(0,0,1);lt.add(fl);lt.add(new Pn(16777215,.22));zt.add(lt);zt.add(new Jr(16777215,.55));zt.add(new dl(16777215,1447446,.45));const pl=new Pn(16777215,1.7);pl.position.set(0,0,80);ni.add(pl);ni.add(new Jr(16777215,.65));const ml=new Pn(16777215,1.8);ml.position.set(0,-40,60);ii.add(ml);ii.add(new Jr(16777215,.62));for(const i of[ft,Di,Qr,ea])i.outputColorSpace=nn,i.toneMapping=Sh,i.toneMappingExposure=1.16;hl.intensity=1.45;fl.intensity=1.45;pl.intensity=1.88;ml.intensity=1.92;let Zi=null,Ji=null;function j_(){const i=ut.getObjectByName("mainAxesGroup");i&&ut.remove(i);const e=zt.getObjectByName("angularAxesGroup");e&&zt.remove(e),Zi=ko(4.5,.2,.9),Zi.name="mainAxesGroup",Ji=ko(4.2,.1,.9),Ji.name="angularAxesGroup",ut.add(Zi),zt.add(Ji)}function $_(i){Ji=i}function Z_(){return Ji}function Ec(i,e){Zi&&(Zi.visible=i,e!==void 0&&Zi.scale.setScalar(e)),Ji&&(Ji.visible=i),ut.traverse(t=>{t.userData&&t.userData.isAxis&&(t.visible=i,e!==void 0&&t===Zi&&t.scale.setScalar(e))}),zt.traverse(t=>{t.userData&&t.userData.isAxis&&(t.visible=i)})}const et={drawing:!1,erasing:!1,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,strokes:[],currentStroke:null};function nf(i){const e=p.sketchCanvas.getBoundingClientRect();return{x:(i.clientX-e.left)/Math.max(1,e.width),y:(i.clientY-e.top)/Math.max(1,e.height)}}function Md(i,e,t,n){if(!e.points.length)return;i.save(),i.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",i.strokeStyle=e.color,i.lineWidth=e.size,i.lineCap="round",i.lineJoin="round",i.beginPath();const r=e.points[0];i.moveTo(r.x*t,r.y*n);for(const a of e.points.slice(1))i.lineTo(a.x*t,a.y*n);e.points.length===1&&i.lineTo(r.x*t+.01,r.y*n+.01),i.stroke(),i.restore()}function ta(){const i=p.sketchCanvas;if(!i)return;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);for(const t of et.strokes)Md(e,t,i.width,i.height);et.currentStroke&&Md(e,et.currentStroke,i.width,i.height)}function K_(){const i=p.sketchCanvas;if(!i)return;const e=i.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),n=Math.max(320,Math.floor(e.width*t)),r=Math.max(220,Math.floor(e.height*t));(i.width!==n||i.height!==r)&&(i.width=n,i.height=r,ta())}function oc(i){var e,t;et.erasing=i,(e=p.sketchPen)==null||e.classList.toggle("active",!i),(t=p.sketchEraser)==null||t.classList.toggle("active",i)}function J_(i){var e,t,n,r;p.sketchCanvas&&(i.preventDefault(),(t=(e=p.sketchCanvas).setPointerCapture)==null||t.call(e,i.pointerId),et.drawing=!0,et.currentStroke={color:((n=p.sketchColor)==null?void 0:n.value)||"#ffffff",size:Number(((r=p.sketchSize)==null?void 0:r.value)||5)*Math.min(window.devicePixelRatio||1,2),mode:et.erasing?"erase":"draw",points:[nf(i)]},ta())}function Q_(i){!et.drawing||!et.currentStroke||(i.preventDefault(),et.currentStroke.points.push(nf(i)),ta())}function Sd(i){!et.drawing||!et.currentStroke||(i.preventDefault(),et.strokes.push(et.currentStroke),et.currentStroke=null,et.drawing=!1,ta())}function ev(){var i,e,t,n,r;p.sketchCanvas&&(p.sketchCanvas.addEventListener("pointerdown",J_),p.sketchCanvas.addEventListener("pointermove",Q_),p.sketchCanvas.addEventListener("pointerup",Sd),p.sketchCanvas.addEventListener("pointercancel",Sd),(i=p.sketchPen)==null||i.addEventListener("click",()=>oc(!1)),(e=p.sketchEraser)==null||e.addEventListener("click",()=>oc(!0)),(t=p.sketchClear)==null||t.addEventListener("click",()=>{et.strokes=[],et.currentStroke=null,ta()}),(r=(n=p.sketchWindow)==null?void 0:n.querySelector(".window-title"))==null||r.addEventListener("pointerdown",nv),window.addEventListener("pointermove",iv),window.addEventListener("pointerup",wd),window.addEventListener("pointercancel",wd),oc(!1))}let fa={};function tv(i){fa=i}function Ac(){p.sketchWindow&&(p.sketchWindow.classList.remove("closed","minimized"),p.sketchWindow.style.zIndex="120",fa.updateWindowControlLabels&&fa.updateWindowControlLabels(p.sketchWindow),fa.resizeAfterLayoutChange&&fa.resizeAfterLayoutChange())}function nv(i){var n,r;const e=p.sketchWindow;if(!e||e.classList.contains("maximized")||i.target.closest(".window-controls")||i.pointerType!=="mouse"&&!i.isPrimary)return;i.preventDefault();const t=e.getBoundingClientRect();et.dragging=!0,et.dragPointerId=i.pointerId,et.dragOffsetX=i.clientX-t.left,et.dragOffsetY=i.clientY-t.top,(r=(n=i.currentTarget)==null?void 0:n.setPointerCapture)==null||r.call(n,i.pointerId),e.style.zIndex="130"}function iv(i){const e=p.sketchWindow;if(!e||!et.dragging||et.dragPointerId!==null&&i.pointerId!==et.dragPointerId)return;i.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),n=window.innerHeight-32,r=Math.max(0,Math.min(t,i.clientX-et.dragOffsetX)),a=Math.max(0,Math.min(n,i.clientY-et.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function wd(){et.dragging=!1,et.dragPointerId=null,Vo()}const rv={strokes:[]};function av(i,e,t,n){if(!e.points.length)return;i.save(),i.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",i.strokeStyle=e.color,i.lineWidth=e.size,i.lineCap="round",i.lineJoin="round",i.beginPath();const r=e.points[0];i.moveTo(r.x*t,r.y*n);for(const a of e.points.slice(1))i.lineTo(a.x*t,a.y*n);e.points.length===1&&i.lineTo(r.x*t+.01,r.y*n+.01),i.stroke(),i.restore()}function ov(){const i=p.predictCanvas;if(!i)return;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);for(const t of rv.strokes)av(e,t,i.width,i.height)}function sv(){const i=p.predictCanvas;if(!i)return;const e=i.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),n=Math.max(10,Math.floor(e.width*t)),r=Math.max(10,Math.floor(e.height*t));(i.width!==n||i.height!==r)&&(i.width=n,i.height=r,ov())}const wo=[1];function vi(i){if(i<0)return NaN;for(let e=wo.length;e<=i;e+=1)wo[e]=wo[e-1]*e;return wo[i]}function rf(i,e,t){const n=Math.max(1,Math.min(6,Math.round(i))),r=Math.max(0,Math.min(n-1,Math.round(e))),a=Math.max(-r,Math.min(r,Math.round(t)));return{n,l:r,m:a}}function Un(i,e,t){if(e===0)return`${i}s`;if(e===1)return`${i}${t===0?"Pz":t>0?"Px":"Py"}`;if(e===2){if(t===0)return`${i}Dz2`;if(t===1)return`${i}Dxz`;if(t===-1)return`${i}Dyz`;if(t===2)return`${i}Dx2-y2`;if(t===-2)return`${i}Dxy`}if(e===3){if(t===0)return`${i}Fz3`;if(t===1)return`${i}Fxz2`;if(t===-1)return`${i}Fyz2`;if(t===2)return`${i}Fz(x2-y2)`;if(t===-2)return`${i}Fxyz`;if(t===3)return`${i}Fx(x2-3y2)`;if(t===-3)return`${i}Fy(3x2-y2)`}if(e===4){if(t===0)return`${i}Gz4`;if(t===1)return`${i}Gxz3`;if(t===-1)return`${i}Gyz3`;if(t===2)return`${i}Gz2(x2-y2)`;if(t===-2)return`${i}Gxyz2`;if(t===3)return`${i}Gxz(x2-3y2)`;if(t===-3)return`${i}Gyz(3x2-y2)`;if(t===4)return`${i}Gx4-6x2y2+y4`;if(t===-4)return`${i}Gxy(x2-y2)`}if(e===5){if(t===0)return`${i}Hz5`;if(t===1)return`${i}Hxz4`;if(t===-1)return`${i}Hyz4`;if(t===2)return`${i}Hz3(x2-y2)`;if(t===-2)return`${i}Hxyz3`;if(t===3)return`${i}Hz(x4-6x2y2+y4)`;if(t===-3)return`${i}Hxyz(x2-y2)`;if(t===4)return`${i}Hxz(x2-y2)`;if(t===-4)return`${i}Hyz(x2-y2)`;if(t===5)return`${i}Hx(x4-10x2y2+5y4)`;if(t===-5)return`${i}Hy(5x4-10x2y2+y4)`}return`${i}${["s","P","D","F","G","H"][e]??`L${e}`}${t}`}function cv(i,e,t){let n=0;for(let r=0;r<=i;r+=1){const a=(r%2===0?1:-1)*vi(i+e)/(vi(i-r)*vi(e+r)*vi(r));n+=a*t**r}return n}function lv(i,e,t){const n=Math.abs(e);let r=1;if(n>0){const o=Math.sqrt(Math.max(0,1-t*t));let c=1;for(let l=1;l<=n;l+=1)r*=-c*o,c+=2}if(i===n)return r;let a=t*(2*n+1)*r;if(i===n+1)return a;let s=0;for(let o=n+2;o<=i;o+=1)s=((2*o-1)*t*a-(o+n-1)*r)/(o-n),r=a,a=s;return s}function Tc(i,e,t,n){const r=Math.sin(t),a=Math.cos(t),s=Math.cos(n),o=Math.sin(n);if(i===1){const h=Math.sqrt(3/(4*Math.PI));return e===0?h*a:e>0?h*r*s:h*r*o}if(i===2){if(e===0)return Math.sqrt(5/Math.PI)/4*(3*a*a-1);if(e===1)return Math.sqrt(15/Math.PI)/2*r*a*s;if(e===-1)return Math.sqrt(15/Math.PI)/2*r*a*o;if(e===2)return Math.sqrt(15/Math.PI)/4*r*r*Math.cos(2*n);if(e===-2)return Math.sqrt(15/Math.PI)/4*r*r*Math.sin(2*n)}const c=Math.abs(e),l=Math.sqrt((2*i+1)/(4*Math.PI)*(vi(i-c)/vi(i+c))),u=lv(i,c,Math.cos(t));return e>0?Math.sqrt(2)*l*u*Math.cos(c*n):e<0?Math.sqrt(2)*l*u*Math.sin(c*n):l*u}function Ao(i,e,t){const n=Math.abs(e);let r=1;for(let l=2;l<=2*n;l+=2)r*=(1-t*t)*((l+1)/l);let a=Math.sqrt(Math.max(0,r/2));if(i===n)return a;let s=Math.sqrt(2*n+3)*t*a;if(i===n+1)return s;let o=0,c=Math.sqrt((4*n*n+8*n+3)/(2*n+1));for(let l=n+2;l<=i;l+=1){const u=Math.sqrt((4*l*l-1)/(l*l-n*n));o=s*t*u-a*u/c,a=s,s=o,c=u}return o}function Si(i,e,t,n){const r=2*t*n/i;return Math.sqrt((2*t/i)**3*(vi(i-e-1)/(2*i*vi(i+e))))*Math.exp(-r/2)*r**e*cv(i-e-1,2*e+1,r)}function jt({n:i,l:e,m:t,z:n},r,a,s){const o=Math.hypot(r,a,s);if(o<1e-9)return e===0?Si(i,e,n,0)*Tc(e,t,0,0):0;const c=Math.acos(s/o),l=Math.atan2(a,r);return Si(i,e,n,o)*Tc(e,t,c,l)}function To({n:i,l:e,m:t,z:n},r,a,s){const o=Math.hypot(r,a),c=Math.hypot(o,s),l=c<.01?0:s/c,u=Si(i,e,n,c)*Ao(e,t,l);let h=1/Math.sqrt(Math.PI);if(t!==0){const d=o>.001?t*Math.atan2(a,r):Math.PI/2;h*=t>0?Math.cos(d):-Math.sin(d)}return u*h}function uv(i){return i>=7?120:i===6?100:i===5?90:i===4?80:i===3?70:i===2?60:50}const bd=new Map;function Ii(i,e=.8){const t=`${i.n}|${i.l}|${i.z}|${e}`,n=bd.get(t);if(n)return{...n};let r=0;const a=.002;let s=0,o=0;for(;o<2e5;){const _=pa(i,s),v=pa(i,s+a/2),g=pa(i,s+a);if(r+=(_+4*v+g)/6,s+=a,o+=1,a*r>e)break}const c=s*1.5,l=uv(i.n),h=2*Math.ceil(c)/l*l/2,d=Math.sqrt(pa(i,s)/(4*Math.PI*s*s))||1e-4,f={radius:h,iso:Math.max(1e-4,d),gridSize:l,leastRadius:c};return bd.set(t,f),{...f}}function pa(i,e){return e*e*Si(i.n,i.l,i.z,e)**2}const Ed=new Map;function Cc(i){const e=`${i.n}|${i.l}|${i.z}`,t=Ed.get(e);if(t!=null)return t;const{leastRadius:n}=Ii(i),r=i.n===1&&i.l===0?2:20;let a=n;for(let o=.1;o<=n+r&&(a=o,!(o>n&&pa(i,o)<1e-9));o+=.1);const s=Math.max(1,a);return Ed.set(e,s),s}const Ad=new Map;function gl(i){const e=`${i.n}|${i.l}|${i.z}`,t=Ad.get(e);if(t)return[...t];const n=Math.max(0,i.n-i.l-1);if(!n)return[];const r=Math.max(Cc(i),Ii(i).leastRadius*1.2),a=Math.max(900,i.n*520),s=[];let o=1e-5,c=Si(i.n,i.l,i.z,o);for(let l=1;l<=a;l+=1){const u=r*l/a,h=Si(i.n,i.l,i.z,u);if(Number.isFinite(h)){if(Math.abs(c)>1e-14&&Math.abs(h)>1e-14&&c*h<0){let d=o,f=u,_=c;for(let g=0;g<36;g+=1){const m=(d+f)/2,y=Si(i.n,i.l,i.z,m);_*y<=0?f=m:(d=m,_=y)}const v=(d+f)/2;if(s.some(g=>Math.abs(g-v)<.02)||s.push(v),s.length>=n)break}o=u,c=h}}return s.sort((l,u)=>l-u),Ad.set(e,s),[...s]}function xl(i){const e=Math.abs(i.m),t=Math.max(0,i.l-e),n=[];if(t>0){const a=Math.max(720,i.l*300),s=1e-7,o=d=>{d<=1e-5||d>=Math.PI-1e-5||n.some(f=>Math.abs(f-d)<.01)||n.push(d)};let c=1e-5,l=Ao(i.l,i.m,Math.cos(c)),u=Math.abs(l)>s?c:null,h=Math.abs(l)>s?l:null;for(let d=1;d<a;d+=1){const f=Math.PI*d/a,_=Ao(i.l,i.m,Math.cos(f));if(Math.abs(_)<=s){if(o(f),n.length>=t)break;c=f,l=_;continue}if(h!=null&&h*_<0){let v=u,g=f,m=h;for(let x=0;x<34;x+=1){const S=(v+g)/2,E=Ao(i.l,i.m,Math.cos(S));m*E<=0?g=S:(v=S,m=E)}const y=(v+g)/2;if(o(y),n.length>=t)break}c=f,l=_,u=f,h=_}}const r=[];if(e>0)for(let a=0;a<e;a+=1){const s=i.m>0?(a+.5)*Math.PI/e:a*Math.PI/e;r.push(s)}return{polar:n,azimuthal:r}}function Go(i,e){return`${i-e-1} radial, ${e} angular`}function dv(i,e){const{radius:t}=e,n=Math.min(42,Math.max(24,Math.round(e.density*.58))),r=[],a=[],s=t*2/(n-1),o=t*t,c=35e4;let l=0;for(let _=0;_<n;_+=1){const v=-t+_*s;for(let g=0;g<n;g+=1){const m=-t+g*s;for(let y=0;y<n;y+=1){const x=-t+y*s;if(v*v+m*m+x*x>o||!Td(e.cutaway,v,m,x))continue;const S=jt(i,v,m,x);l=Math.max(l,Math.abs(S))}}}const u=l||1;let h=(i.n*73856093^i.l*19349663^(i.m+8)*83492791^Math.round(t*1e3))>>>0;const d=()=>(h=1664525*h+1013904223>>>0,h/4294967296),f=Math.min(6e6,Math.max(72e4,e.density*e.density*600));for(let _=0;_<f;_+=1){const v=(d()*2-1)*t,g=(d()*2-1)*t,m=(d()*2-1)*t;if(v*v+g*g+m*m>o||!Td(e.cutaway,v,g,m))continue;const y=jt(i,v,g,m),x=Math.min(1,(Math.abs(y)/u)**2);if(d()>x)continue;const S=y>=0?r:a;if(!(S.length/3>=c)&&(S.push(v,g,m),r.length/3>=c&&a.length/3>=c))break}return{positive:r,negative:a}}function Td(i,e,t,n){return i==="quarter"?t<=0&&n<=0:i==="eighth"?e<=0&&t<=0&&n<=0:i==="threeQuarter"?!(t>0&&n>0):!0}function hv(i,e,t,n){const a=t.radius/140;let s=0,o=n*jt(i,0,0,0)-t.iso,c=null;for(let l=1;l<=140;l+=1){const u=l*a,h=n*jt(i,e.x*u,e.y*u,e.z*u)-t.iso;if(o<=0&&h>=0){let d=s,f=u;for(let _=0;_<12;_+=1){const v=(d+f)/2;n*jt(i,e.x*v,e.y*v,e.z*v)-t.iso>=0?f=v:d=v}c=f}if(o>=0&&h<=0&&c!==null){let d=s,f=u;for(let _=0;_<12;_+=1){const v=(d+f)/2;n*jt(i,e.x*v,e.y*v,e.z*v)-t.iso>=0?d=v:f=v}c=d}s=u,o=h}return c}function fv(i,e){const t=e.thetaSegments??58,n=e.phiSegments??96;function r(a){const s=[],o=[],c=[];for(let l=0;l<=t;l+=1){const u=Math.PI*l/t,h=[],d=Math.sin(u),f=Math.cos(u);for(let _=0;_<=n;_+=1){const v=Math.PI*2*_/n,g={x:d*Math.cos(v),y:d*Math.sin(v),z:f},m=hv(i,g,e,a);m===null||!Number.isFinite(m)?h.push(-1):(h.push(s.length/3),s.push(g.x*m,g.y*m,g.z*m))}c.push(h)}for(let l=0;l<t;l+=1)for(let u=0;u<n;u+=1){const h=c[l][u],d=c[l+1][u],f=c[l+1][u+1],_=c[l][u+1];h>=0&&d>=0&&f>=0&&o.push(h,d,f),h>=0&&f>=0&&_>=0&&o.push(h,f,_)}return{vertices:s,indices:o}}return{positive:r(1),negative:r(-1)}}function af(i){const e=Un(i.n,i.l,i.m),t=Math.max(0,i.n-i.l-1),n=i.l,r=Ry(i.l,i.m),a=qd(i.n),s=qd(i.l),o=Cy(i.m);return{label:e,radialNodes:t,angularNodes:n,main:`Ψ(r,θ,φ) = R${a}${s}(r) · Y${s}${o}(θ,φ)`,radial:`R${a}${s}(r) 决定离原子核不同距离处的振幅变化；当前轨道有 ${t} 个径向节点。`,angular:`${r} 对应的 Y${s}${o}(θ,φ) 决定轨道朝向、节面和正负相位；当前有 ${n} 个角向节点。`,visual:"原子轨道窗口显示 Ψ=+c 和 Ψ=-c 的等值面；轨道投影是在选定平面上看 Ψ；径向分布函数看 r²R²；电子云来自 |Ψ|² 的概率分布。"}}let Yt={resizeAfterLayoutChange:()=>{},renderOrbital:()=>{},applyPreset:()=>{},readParams:()=>({n:1,l:0,m:0}),downloadBlob:(i,e)=>{},getCloudPositiveObject:()=>null,getCloudNegativeObject:()=>null,getIsoMeshes:()=>[]};function pv(i){Object.assign(Yt,i)}function _l(){return[{focus:"cloud",title:"第一步：电子云的形成",text:"根据概率密度分布，电子在原子核周围逐渐显现，形成浓密的电子云。"},{focus:"isosurface",title:"第二步：原子轨道实体化",text:"从电子云中提取特定概率的等势面，形成光滑的三维原子轨道轮廓。"},{focus:"slice_projection",title:"第三步：动态切片与投影",text:"对原子轨道进行切片，并将其截面映射为 2D 与 3D 的概率密度投影图。"},{focus:"formula",title:"第四步：径向与角向推导",text:"结合波函数公式，揭示轨道的径向分布函数与角向球面谐和函数构成。"}]}let ei=!1,_a=!1,ba=0,wi=6e3,ln={step:0,localProgress:0},sc=[];function Cd(){_a||(ei=!ei,ei&&(ba=performance.now()-(ln.step*wi+ln.localProgress*wi)))}function Rc(){var a;if(ei)return;document.body.classList.add("cinematic-mode"),p.mainWindow&&(p.mainWindow.style.setProperty("position","fixed","important"),p.mainWindow.style.setProperty("top","0","important"),p.mainWindow.style.setProperty("left","0","important"),p.mainWindow.style.setProperty("width","100vw","important"),p.mainWindow.style.setProperty("height","100vh","important"),p.mainWindow.style.setProperty("z-index","1000","important")),p.viewer&&(p.viewer.style.setProperty("position","absolute","important"),p.viewer.style.setProperty("top","0","important"),p.viewer.style.setProperty("left","0","important"),p.viewer.style.setProperty("width","100%","important"),p.viewer.style.setProperty("height","100%","important"),p.viewer.style.setProperty("background","#000000","important"));const i=(a=p.viewer)==null?void 0:a.querySelector("canvas");i&&(i.style.setProperty("width","100%","important"),i.style.setProperty("height","100%","important")),Yt.resizeAfterLayoutChange();const e=document.getElementById("cinematicOverlay");e&&e.classList.add("visible"),Ce.autoRotate=!0,Ce.autoRotateSpeed=.8,p.cloud.checked=!0,p.wireframe.checked=!0,p.smooth.checked=!0,p.projection3d.checked=!0,Yt.renderOrbital();const t=Yt.getCloudPositiveObject(),n=Yt.getCloudNegativeObject(),r=Yt.getIsoMeshes();t&&(t.visible=!1),n&&(n.visible=!1),r.forEach(s=>s.traverse(o=>{o.isMesh&&(o.material.opacity=0)})),ei=!0,wi=6e3,ba=performance.now(),ln.step=0,of()}function Pc(){ei=!1,document.body.classList.remove("cinematic-mode"),p.mainWindow&&(p.mainWindow.style.removeProperty("position"),p.mainWindow.style.removeProperty("top"),p.mainWindow.style.removeProperty("left"),p.mainWindow.style.removeProperty("width"),p.mainWindow.style.removeProperty("height"),p.mainWindow.style.removeProperty("z-index")),p.viewer&&(p.viewer.style.removeProperty("position"),p.viewer.style.removeProperty("top"),p.viewer.style.removeProperty("left"),p.viewer.style.removeProperty("width"),p.viewer.style.removeProperty("height"),p.viewer.style.removeProperty("background")),Yt.resizeAfterLayoutChange();const i=document.getElementById("cinematicOverlay");i&&i.classList.remove("visible"),Ce.autoRotate=!1,Yt.applyPreset()}function of(){const e=_l()[ln.step];if(!e)return;document.getElementById("cinematicTitle").textContent=e.title,document.getElementById("cinematicText").textContent=e.text;const t=document.getElementById("cinematicFormula");if(ln.step===3){t.classList.add("visible");const n=Yt.readParams(),r=af(n);document.getElementById("cinematicFormulaEq").innerHTML=r.main,document.getElementById("cinematicFormulaRadial").innerHTML="R(r): 径向部分",document.getElementById("cinematicFormulaAngular").innerHTML="Y(θ,φ): 角向部分"}else t.classList.remove("visible")}function mv(i){var u,h;if(!ei)return;const e=_l().length,t=i-ba;let n=Math.floor(t/wi);n>=e?_a?(n=e-1,ln.localProgress=1):(ba=i,n=0):ln.localProgress=t%wi/wi,n!==ln.step&&(ln.step=n,of());const r=ln.localProgress,a=ln.step,s=r*r*(3-2*r),o=Yt.getCloudPositiveObject(),c=Yt.getCloudNegativeObject(),l=Yt.getIsoMeshes();if(a===0){if(o){o.visible=!0;const d=((u=o.userData.probs)==null?void 0:u.length)||0;o.geometry.setDrawRange(0,Math.floor(d*s)),o.material.opacity=Math.min(1,s*2)}if(c){c.visible=!0;const d=((h=c.userData.probs)==null?void 0:h.length)||0;c.geometry.setDrawRange(0,Math.floor(d*s)),c.material.opacity=Math.min(1,s*2)}l.forEach(d=>d.traverse(f=>{f.isMesh&&(f.material.opacity=0)}))}else a===1?(o&&(o.visible=!0,o.geometry.setDrawRange(0,1/0),o.material.opacity=1-s),c&&(c.visible=!0,c.geometry.setDrawRange(0,1/0),c.material.opacity=1-s),l.forEach(d=>d.traverse(f=>{f.name==="integratedProjectionMountain"?f.material.opacity=0:f.isMesh&&(f.material.opacity=s)}))):a===2?(o&&(o.visible=!1),c&&(c.visible=!1),l.forEach(d=>d.traverse(f=>{if(f.name==="integratedProjectionMountain"){f.material.opacity=s;const _=f.userData.plane||"xoy";_==="xoy"?f.scale.set(1,1,.01+s*.99):_==="xoz"?f.scale.set(1,.01+s*.99,1):_==="yoz"&&f.scale.set(.01+s*.99,1,1)}else f.isMesh&&(f.material.opacity=1)}))):a===3&&(o&&(o.visible=!1),c&&(c.visible=!1),l.forEach(d=>d.traverse(f=>{f.name==="integratedProjectionMountain"?(f.material.opacity=1,f.scale.set(1,1,1)):f.isMesh&&(f.material.opacity=1)})))}async function Rd(){const i=p.viewer.querySelector("canvas");if(!(i!=null&&i.captureStream)||typeof MediaRecorder>"u"){alert("当前浏览器不支持直接导出视频。");return}if(_a)return;ei||Rc(),_a=!0,wi=4e3,ba=performance.now(),ln.step=0,sc=[];const e=i.captureStream(30),t=new MediaRecorder(e,{videoBitsPerSecond:6e6});document.getElementById("cinematicExportBtn").textContent="录制中...",document.getElementById("cinematicPlayBtn").disabled=!0,document.getElementById("cinematicExitBtn").disabled=!0;const n=new Promise((c,l)=>{t.ondataavailable=u=>{var h;(h=u.data)!=null&&h.size&&sc.push(u.data)},t.onerror=()=>l(t.error),t.onstop=()=>c(new Blob(sc,{type:t.mimeType||"video/webm"}))});t.start(250);const r=wi*_l().length;await new Promise(c=>setTimeout(c,r+500)),t.state!=="inactive"&&t.stop();const a=await n,s=Yt.readParams(),o=`HAO-Cinematic-${Un(s.n,s.l,s.m)}.webm`;Yt.downloadBlob(a,o),document.getElementById("cinematicExportBtn").textContent="导出视频",document.getElementById("cinematicPlayBtn").disabled=!1,document.getElementById("cinematicExitBtn").disabled=!1,_a=!1,Pc()}tv({updateWindowControlLabels:Xr,resizeAfterLayoutChange:bn});const vl=[new Worker(new URL(""+new URL("worker-wu770f7w.js",import.meta.url).href,import.meta.url),{type:"module"}),new Worker(new URL(""+new URL("worker-wu770f7w.js",import.meta.url).href,import.meta.url),{type:"module"})];let gv=1;const Lc=new Map;function sf(i){const{jobId:e,fieldBuffer:t,error:n}=i.data,r=Lc.get(e);r&&(Lc.delete(e),n?r.reject(new Error(n)):r.resolve(t))}vl[0].onmessage=sf;vl[1].onmessage=sf;function xv(i,e,t,n,r){return new Promise((a,s)=>{const o=gv++;Lc.set(o,{resolve:a,reject:s}),vl[i].postMessage({jobId:o,fieldBuffer:e,params:t,options:n,sign:r},[e])})}let cc=0;const wn=new Ze(new D(0,0,-1),100);window.addEventListener("error",i=>{const e=document.querySelector("#statusText");e&&(e.textContent="Err: "+i.message)});window.addEventListener("unhandledrejection",i=>{var t;const e=document.querySelector("#statusText");e&&(e.textContent="Rej: "+(((t=i.reason)==null?void 0:t.message)||i.reason))});let Nt=null,fn=null,$n=null,Zn=null,va=null,Ur=null,qr=null,Dc=null,Wn=null,qn=null,Or=null,bi=null,ya=null,Yi=null,Kn=null,Xn=null,Jn=null,Qi=null,Ea=null,Ic=null,Nc=null,Uc=null,Oc=null,Fc=null,Gt=null,_n=null,as=1,In=5,Zt=4,yl=3,Ho=4.5;const Ki=[];function Ml(i=(e=>(e=p.backgroundColor)==null?void 0:e.value)()||"#000000"){document.documentElement.style.setProperty("--viewer-bg",i);const t=new ye(i);ut.background=t.clone(),zt.background=t.clone(),ni.background=t.clone(),ii.background=t.clone();for(const n of Ki)n.scene.background=t.clone()}function _v(){var t;if(document.querySelector("#relationModeInput")){Object.assign(p,{relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue")});return}const i=(t=p.longitudeNode)==null?void 0:t.closest("fieldset");if(!i)return;const e=document.createElement("fieldset");e.className="relation-panel",e.innerHTML=`
    <legend data-i18n="legend_relation">关联</legend>
    <div class="check-grid two">
      <label class="check-row"><input id="relationModeInput" type="checkbox" /><span data-i18n="lbl_relation_mode">关联模式</span></label>
      <label class="check-row"><input id="syncRotationInput" type="checkbox" checked /><span data-i18n="lbl_sync_rotation">同步空间视角</span></label>
    </div>
    <label class="range-row">
      <span data-i18n="lbl_radius_r">半径 r</span>
      <input id="scanRadiusInput" type="range" min="0" max="100" step="1" value="45" />
      <output id="scanRadiusValue">45%</output>
    </label>
    <label class="range-row">
      <span data-i18n="lbl_dir_theta">方向 θ</span>
      <input id="scanThetaInput" type="range" min="0" max="180" step="1" value="90" />
      <output id="scanThetaValue">90°</output>
    </label>
    <label class="range-row">
      <span data-i18n="lbl_dir_phi">方向 φ</span>
      <input id="scanPhiInput" type="range" min="0" max="360" step="1" value="0" />
      <output id="scanPhiValue">0°</output>
    </label>
    <label class="range-row">
      <span data-i18n="lbl_slice_z">XY 截面 Z</span>
      <input id="scanSliceZInput" type="range" min="-100" max="100" step="1" value="0" />
      <output id="scanSliceZValue">0</output>
    </label>
  `,i.insertAdjacentElement("afterend",e),Object.assign(p,{relationMode:e.querySelector("#relationModeInput"),syncRotation:e.querySelector("#syncRotationInput"),scanRadius:e.querySelector("#scanRadiusInput"),scanRadiusValue:e.querySelector("#scanRadiusValue"),scanTheta:e.querySelector("#scanThetaInput"),scanThetaValue:e.querySelector("#scanThetaValue"),scanPhi:e.querySelector("#scanPhiInput"),scanPhiValue:e.querySelector("#scanPhiValue"),scanSliceZ:e.querySelector("#scanSliceZInput"),scanSliceZValue:e.querySelector("#scanSliceZValue")}),p.scanSliceZ&&p.scanSliceZ.addEventListener("input",()=>{const n=bt(),r=rn();Na(),bl(),Cl(n,r)})}function vv(i,e,t){return Un(i,e,t)}function cf(i,e,t){return`${i},${e},${t}`}function yv(i){const e=[0];for(let t=1;t<=i;t+=1)e.push(t,-t);return e}function lf(i){const e=Math.max(1,Math.min(6,Math.round(i)||1)),t=[];for(let n=0;n<e;n+=1)for(const r of yv(n))t.push({value:cf(e,n,r),label:vv(e,n,r)});return t}function Mv(i=6){const e=[];for(let t=1;t<=i;t+=1)e.push(...lf(t));return e}const Wt=Mv(6);function bo(i,e,t=null){if(i){i.replaceChildren();for(const n of e){const r=document.createElement("option");r.value=n.value,r.textContent=n.label,i.append(r)}t&&e.some(n=>n.value===t)&&(i.value=t)}}function Sv(){bo(p.predictTarget,Wt,"2,1,1"),bo(p.challengeGuess,Wt,"2,1,1"),bo(p.compareA,Wt,"2,1,1"),bo(p.compareB,Wt,"3,1,1")}function wv(i=null){if(!p.preset)return;const e=i??rf(Number(p.n.value),Number(p.l.value),Number(p.m.value));if(Number(p.preset.dataset.n)!==e.n){p.preset.replaceChildren();for(const n of lf(e.n)){const r=document.createElement("option");r.value=n.value,r.textContent=n.label,p.preset.append(r)}p.preset.dataset.n=String(e.n)}p.preset.value=cf(e.n,e.l,e.m)}const De={challengeTarget:Wt[0],challengeTotal:0,challengeCorrect:0,dragWindow:null,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,explanationStep:0,explanationPlaying:!1,explanationStartedAt:0,explanationTimer:null,explanationFrame:null,animationStep:0,animationPlaying:!1,animationStartedAt:0,animationTimer:null,animationFrame:null,animationExporting:!1,annotationMode:!1,annotationDrag:null};function bt(){var e,t;const i=rf(Number(p.n.value),Number(p.l.value),Number(p.m.value));return(e=p.sinType)!=null&&e.checked&&i.m>0&&(i.m=-i.m),(t=p.cosType)!=null&&t.checked&&i.m<0&&(i.m=Math.abs(i.m)),p.n.value=i.n,p.l.max=i.n-1,p.l.value=i.l,p.m.min=-i.l,p.m.max=i.l,p.m.value=Math.abs(i.m),wv(i),{...i,z:Math.max(1,Math.min(10,Number(p.z.value)||1))}}function lc(i,e){var t;i&&(i.disabled=!e,(t=i.closest("label"))==null||t.classList.toggle("muted",!e),e||(i.checked=!1))}function bv(i){const e=gl(i).length,{polar:t,azimuthal:n}=xl(i);lc(p.radialNode,e>0),lc(p.polarNode,t.length>0),lc(p.longitudeNode,n.length>0)}function rn(){var a,s,o,c,l,u,h,d,f,_,v,g,m,y,x,S,E,T,A,C,w,M,L,I,N,k,B,O,H,G;const i=bt();bv(i);const e=p.desktopMatch.checked?Ii(i):null;let t=p.slice.value;(a=p.xySlice)!=null&&a.checked&&(t="xoy"),(s=p.yzSlice)!=null&&s.checked&&(t="yoz"),(o=p.xzSlice)!=null&&o.checked&&(t="xoz"),!((c=p.xySlice)!=null&&c.checked)&&!((l=p.yzSlice)!=null&&l.checked)&&!((u=p.xzSlice)!=null&&u.checked)&&(t="none");const n=Number(((h=p.scanSliceZ)==null?void 0:h.value)??0),r={iso:Number(p.iso.value),density:Number(p.density.value),radius:Number(p.radius.value),opacity:Number(p.opacity.value),mode:p.mode.value,showCloud:((d=p.cloud)==null?void 0:d.checked)??!1,slice:t,sliceOffset:n/100*Number(p.radius.value),nodeRadial:!!(p.node.checked||(f=p.radialNode)!=null&&f.checked),nodePolar:!!(p.node.checked||(_=p.polarNode)!=null&&_.checked),nodeAzimuthal:!!(p.node.checked||(v=p.longitudeNode)!=null&&v.checked),showNode:!!(p.node.checked||(g=p.radialNode)!=null&&g.checked||(m=p.polarNode)!=null&&m.checked||(y=p.longitudeNode)!=null&&y.checked),showAxis:p.axis.checked,showBox:p.box.checked,showPositive:((x=p.positiveLobe)==null?void 0:x.checked)??!0,showNegative:((S=p.negativeLobe)==null?void 0:S.checked)??!0,wireframe:((E=p.wireframe)==null?void 0:E.checked)??!1,smooth:((T=p.smooth)==null?void 0:T.checked)??!1,showProjection:((A=p.projection)==null?void 0:A.checked)??!1,showProjection3d:((C=p.projection3d)==null?void 0:C.checked)??!1,grid3d:((w=p.grid3d)==null?void 0:w.checked)??!1,cutaway:(M=p.eighth)!=null&&M.checked?"eighth":(L=p.quarter)!=null&&L.checked?"quarter":(I=p.threeQuarter)!=null&&I.checked?"threeQuarter":"none",radialMode:(N=p.radialR)!=null&&N.checked?"R":(k=p.radialR2)!=null&&k.checked?"R2":"RDF",radialSection:((B=p.radialSection)==null?void 0:B.checked)??!1,radialSide:((O=p.radialSide)==null?void 0:O.checked)??!1,radialCurve:((H=p.radialCurve)==null?void 0:H.checked)??!0,radialAxis:((G=p.radialAxis)==null?void 0:G.checked)??!1,positiveColor:p.positiveColor.value,negativeColor:p.negativeColor.value,backgroundColor:p.backgroundColor.value,desktopMatched:!!e};return p.isoValue.value=r.iso.toFixed(4),p.densityValue.value=r.density,p.radiusValue.value=r.radius.toFixed(1),p.opacityValue.value=r.opacity.toFixed(2),p.boxSizeDisplay&&(p.boxSizeDisplay.value=(r.radius*2.4).toFixed(2)),p.intervalValue&&(p.intervalValue.value=(r.radius*2/r.density).toFixed(3)),p.probabilityValue&&(p.probabilityValue.value="0.800"),p.iso.disabled=!1,p.density.disabled=!1,p.radius.disabled=!1,r}function os(){if(!p.desktopMatch.checked)return;const i=Ii(bt()),e=Math.min(Number(p.iso.max),Math.max(Number(p.iso.min),i.iso));p.iso.value=e.toFixed(4),p.density.value=Math.min(Number(p.density.max),Math.max(Number(p.density.min),i.gridSize)),p.radius.value=Math.min(Number(p.radius.max),Math.max(Number(p.radius.min),i.radius)),rn()}function Ev(){if(!p.boxSizeDisplay)return;const i=Number(p.boxSizeDisplay.value);!Number.isFinite(i)||i<=0||(p.radius.value=Math.min(Number(p.radius.max),Math.max(Number(p.radius.min),i/2.4)),rn())}function Pd(i,e){const t=new $e;t.setAttribute("position",new Ue(i,3));const n=new Float32Array(i.length/3);for(let a=0;a<n.length;a+=1){const s=Math.sin((a+1)*12.9898)*43758.5453;n[a]=s-Math.floor(s)}t.setAttribute("seed",new Ft(n,1));const r=new ti({clipping:!0,uniforms:zh.merge([xe.clipping,{uColor:{value:new ye(e)},uTime:{value:0},uSize:{value:3.5}}]),transparent:!0,depthWrite:!1,blending:zr,vertexShader:`
      #include <clipping_planes_pars_vertex>
      attribute float seed;
      uniform float uTime;
      uniform float uSize;
      varying float vSeed;
      varying float vPulse;

      float random(float value) {
        return fract(sin(value * 91.3458) * 47453.5453);
      }

      void main() {
        #include <begin_vertex>
        vSeed = seed;
        float frame = floor(uTime * 13.0 + seed * 11.0);
        float flash = step(0.42, random(seed * 41.0 + frame));
        float shimmer = 0.48 + 0.52 * sin(uTime * (4.5 + seed * 7.0) + seed * 31.0);
        vPulse = mix(0.18, 1.0, flash) * shimmer;
        gl_PointSize = uSize + flash * 1.4;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }
    `,fragmentShader:`
      #include <clipping_planes_pars_fragment>
      uniform vec3 uColor;
      varying float vSeed;
      varying float vPulse;

      void main() {
        #include <clipping_planes_fragment>
        vec2 centered = gl_PointCoord - vec2(0.5);
        float radius = length(centered);
        float core = smoothstep(0.42, 0.05, radius);
        float halo = smoothstep(0.5, 0.12, radius) * 0.34;
        float alpha = (core + halo) * (0.22 + 0.78 * vPulse);
        if (alpha < 0.03) discard;
        vec3 color = uColor * (0.9 + 0.55 * vPulse);
        gl_FragColor = vec4(color, alpha);
      }
    `});return new Kh(t,r)}function Av(i){var e,t;for(const n of[Nt,fn,$n,Zn])n!=null&&n.isPoints&&((t=(e=n.material)==null?void 0:e.uniforms)!=null&&t.uTime)&&(n.material.uniforms.uTime.value=i)}function pn(i){return Number.parseInt(i.replace("#","0x"),16)}const uc=new Map;function ss(i,e,t={}){if(t.clippingPlanes||t._clipPlanes)return Ld(i,e,t);const n=JSON.stringify({color:i,opacity:e,...t});if(uc.has(n))return uc.get(n);const r=Ld(i,e,t);return r.userData={...r.userData,pooled:!0},uc.set(n,r),r}function Ld(i,e,t={}){return new tf({color:i,transparent:e<1,opacity:e,side:pt,emissive:i,emissiveIntensity:.025,roughness:.22,metalness:.05,envMapIntensity:.18,...t})}function Wo(i,e,t){const n=new $e;n.setAttribute("position",new Ue(i.vertices,3)),n.setIndex(i.indices),n.computeVertexNormals();const r=ss(e,t);return new Je(n,r)}function qo(i,e,t=!1){if(!(i!=null&&i.material))return;i.visible=!0,e.wireframe&&!e.smooth?(i.userData.originalMaterial||(i.userData.originalMaterial=i.material),i.material=new Xt({color:i.userData.originalMaterial.color,wireframe:!0,transparent:!0,opacity:.8,side:Dn,clippingPlanes:t?[]:[wn]})):(i.userData.originalMaterial&&(i.material=i.userData.originalMaterial),i.material.wireframe=!1,i.material.side=pt,i.material.flatShading=!e.smooth,t?i.material.clippingPlanes=null:(i.material.clippingPlanes=[wn],i.material.clipIntersection=!1),i.material.needsUpdate=!0)}function Tv(i){return i.wireframe||i.smooth||i.showProjection3d}function Cv(i){return i==="quarter"?[new Ze(new D(0,1,0),0),new Ze(new D(0,0,1),0)]:i==="eighth"?[new Ze(new D(1,0,0),0),new Ze(new D(0,1,0),0),new Ze(new D(0,0,1),0)]:i==="threeQuarter"?[new Ze(new D(0,0,1),0)]:[]}function Sl(i){const e=Cv(i.cutaway),t=na(i.slice);return t==="x"&&e.push(new Ze(new D(1,0,0),0)),t==="y"&&e.push(new Ze(new D(0,1,0),0)),t==="z"&&e.push(new Ze(new D(0,0,1),0)),e}function na(i){return i==="yoz"?"x":i==="xoz"?"y":i==="xoy"?"z":null}function Rv(i){const e=[];i.cutaway==="quarter"&&e.push("y","z"),i.cutaway==="eighth"&&e.push("x","y","z"),i.cutaway==="threeQuarter"&&e.push("y","z");const t=na(i.slice);return t&&e.push(t),[...new Set(e)]}function Xo(i,e,t,n){const r=e._clipPlanes||Sl(e);if(!r.length)return i;const a=e._capFilter||(()=>!0);i.updateMatrixWorld(!0);const s=i.geometry.getAttribute("position"),o=i.geometry.index,c=[],l=o?o.count:Math.min(s.count,i.count||s.count);function u(ee){return i.localToWorld(new D(s.getX(ee),s.getY(ee),s.getZ(ee)))}const h=Math.floor(l/3);for(let ee=0;ee<h;ee+=1){const pe=o?o.getX(ee*3):ee*3,q=o?o.getX(ee*3+1):ee*3+1,te=o?o.getX(ee*3+2):ee*3+2;c.push([u(pe),u(q),u(te)])}let d=c;const f=r.map(()=>[]);r.forEach((ee,pe)=>{const q=[];for(const te of d){const{clipped:fe,segments:F}=Ov(te,ee);fe.length>=3&&q.push(fe),f[pe].push(...F)}d=q});const _=[],v=[],g=new ye(pn(t));function m(ee){return _.push(ee.x,ee.y,ee.z),_.length/3-1}for(const ee of d){const pe=m(ee[0]);for(let q=1;q<ee.length-1;q+=1){const te=m(ee[q]),fe=m(ee[q+1]);v.push(pe,te,fe)}}const y=!e._skipCaps,x=[],S=[],E=[];function T(ee){return x.push(ee.x,ee.y,ee.z),S.push(jt(n,ee.x,ee.y,ee.z)),x.length/3-1}function A(ee){const pe=ee.normal.clone().normalize(),q=Math.abs(pe.x)<.9?new D(1,0,0):new D(0,1,0);q.sub(pe.clone().multiplyScalar(q.dot(pe))).normalize();const te=new D().crossVectors(pe,q).normalize(),fe=pe.clone().multiplyScalar(-ee.constant);return{normal:pe,basisA:q,basisB:te,origin:fe}}function C(ee,pe){const{basisA:q,basisB:te,origin:fe}=A(ee),F=e.radius,se=n.n>=6?6.2:n.n>=5?5.4:3.8,_e=n.n>=6?420:n.n>=5?360:280,Se=Math.max(128,Math.min(_e,Math.round(e.density*se))),z=F*2/Se,Ae=e._capSign??1,ke=e.iso*1.015,Ke=Se+1,Re=new Float32Array(Ke*Ke);function je(K,Q){const le=-F+K*z,ue=-F+Q*z;return fe.clone().addScaledVector(q,le).addScaledVector(te,ue)}function Ge(K,Q){return Q*Ke+K}for(let K=0;K<=Se;K+=1)for(let Q=0;Q<=Se;Q+=1){const le=je(Q,K);Re[Ge(Q,K)]=Ae*jt(n,le.x,le.y,le.z)-ke}function Fe(K,Q){return{point:je(K,Q),value:Re[Ge(K,Q)]}}function at(K,Q,le){return{point:K.point.clone().lerp(Q.point,le),value:K.value+(Q.value-K.value)*le}}function U(K,Q){const le=K-Q;return Math.abs(le)<1e-12?.5:Math.max(0,Math.min(1,K/le))}function R(K,Q){const le=[];for(let ue=0;ue<K.length;ue+=1){const de=K[ue],we=K[(ue+1)%K.length],ce=Q.distanceToPoint(de.point),Me=Q.distanceToPoint(we.point),He=ce>=-1e-7,Ie=Me>=-1e-7;if(He&&Ie)le.push(we);else if(He&&!Ie){const ge=U(ce,Me);le.push(at(de,we,ge))}else if(!He&&Ie){const ge=U(ce,Me);le.push(at(de,we,ge),we)}}return le}function $(K){const Q=[];for(let le=0;le<K.length;le+=1){const ue=K[le],de=K[(le+1)%K.length],we=ue.value>=0,ce=de.value>=0;if(we&&ce)Q.push(de);else if(we&&!ce){const Me=U(ue.value,de.value);Q.push(at(ue,de,Me))}else if(!we&&ce){const Me=U(ue.value,de.value);Q.push(at(ue,de,Me),de)}}return Q}function ie(K){return T(K.point)}for(let K=0;K<Se;K+=1)for(let Q=0;Q<Se;Q+=1){let le=[Fe(Q,K),Fe(Q+1,K),Fe(Q+1,K+1),Fe(Q,K+1)];for(let we=0;we<r.length&&!(we!==pe&&(le=R(le,r[we]),le.length<3));we+=1);if(le.length<3||(le=$(le),le.length<3))continue;const ue=le.reduce((we,ce)=>we.add(ce.point),new D).multiplyScalar(1/le.length);if(!a(pe,ue))continue;const de=ie(le[0]);for(let we=1;we<le.length-1;we+=1)E.push(de,ie(le[we]),ie(le[we+1]))}}y&&r.forEach((ee,pe)=>{C(ee,pe)});const w=new $e;w.setAttribute("position",new Ue(_,3)),w.setIndex(v),e.smooth&&!e.wireframe&&!e._skipSmooth&&uf(w,e),w.computeVertexNormals();const M=ss(g,e.opacity,{wireframe:e.wireframe,flatShading:!e.smooth}),L=new Je(w,M);if(L.userData.vertexCount=v.length,!E.length)return L;const I=new $e,N=mf(S,e.iso*1.6),k=[];for(let ee=0;ee<S.length;ee+=1){const pe=S[ee],q=x[ee*3],te=x[ee*3+1],fe=x[ee*3+2],F=pf(pe,q,te,fe,e,n,N);k.push(F.r,F.g,F.b)}I.setAttribute("position",new Ue(x,3)),I.setAttribute("color",new Ue(k,3)),I.setIndex(E),I.computeVertexNormals();const O=!!na(e.slice)||e.cutaway!=="none",H=new Nr({vertexColors:!0,side:pt,shininess:50,transparent:!1,opacity:1,depthWrite:!0,clippingPlanes:[wn]});H.toneMapped=!1;const G=new Je(I,H);G.renderOrder=O?3:1;const ne=new Xt({vertexColors:!0,side:pt,transparent:!0,opacity:.26,depthWrite:!1,depthTest:!0,blending:zr,clippingPlanes:[wn]});ne.toneMapped=!1;const ae=new Je(I,ne);ae.renderOrder=G.renderOrder+.05;const re=new dt;return re.add(L,G,ae),re.userData.vertexCount=v.length+E.length*2,re}function wl(i){var t,n;let e=((t=i==null?void 0:i.userData)==null?void 0:t.vertexCount)||0;return(n=i==null?void 0:i.traverse)==null||n.call(i,r=>{var a;r!==i&&(e+=((a=r.userData)==null?void 0:a.vertexCount)||0)}),e}async function Dd(i,e,t,n,r){return await zc(i,e,t,n,r)}function Pv(i,e,t,n,r){const a=new dt;let s=0;for(const o of r){const c=Xo(i,{...e,_clipPlanes:o.planes,_capFilter:o.capFilter,_skipSmooth:!0},t,n);c&&(a.add(c),s+=wl(c))}return a.userData.vertexCount=s,a}function Lv(i,e,t){const n=[],r=e.radius,a=Math.max(1800,i.n*620);let s=0,o=t*jt(i,0,0,0)-e.iso;for(let c=1;c<=a;c+=1){const l=r*c/a,u=t*jt(i,l,0,0)-e.iso;if(Number.isFinite(u)&&Number.isFinite(o)&&o*u<0){let h=s,d=l,f=o;for(let v=0;v<36;v+=1){const g=(h+d)/2,m=t*jt(i,g,0,0)-e.iso;f*m<=0?d=g:(h=g,f=m)}const _=(h+d)/2;_>.02&&!n.some(v=>Math.abs(v-_)<.025)&&n.push(_)}s=l,o=u}return n}function Dv(i){const e=(()=>{const n=na(i.slice);return n==="x"?new Ze(new D(1,0,0),0):n==="y"?new Ze(new D(0,1,0),0):n==="z"?new Ze(new D(0,0,1),0):null})(),t=n=>e?[...n,e]:n;return i.cutaway==="threeQuarter"?[{planes:t([new Ze(new D(0,-1,0),0)])},{planes:t([new Ze(new D(0,0,-1),0)])}]:[{planes:Sl(i)}]}function Iv(i,e,t,n){const r=Lv(i,e,t),a=new dt,s=Dv(e),o=pn(n);let c=0;for(const u of r){const h=new Kr(u,i.n>=5?160:128,i.n>=5?96:72);for(const d of s){const f=ss(o,e.opacity,{wireframe:e.wireframe,flatShading:!e.smooth,clippingPlanes:d.planes,clipIntersection:!1}),_=new Je(h.clone(),f);_.userData.vertexCount=h.getAttribute("position").count,a.add(_),c+=_.userData.vertexCount}h.dispose()}const l=Gv(i,e,t);return l&&(a.add(l),c+=wl(l)),a.userData.vertexCount=c,a.children.length?a:null}function Nv(i,e,t,n){return e.cutaway==="quarter"?Xo(i,{...e,_clipPlanes:[new Ze(new D(0,1,0),0),new Ze(new D(0,0,1),0)],_skipSmooth:!0},t,n):e.cutaway==="eighth"?Xo(i,{...e,_clipPlanes:[new Ze(new D(1,0,0),0),new Ze(new D(0,1,0),0),new Ze(new D(0,0,1),0)],_skipSmooth:!0},t,n):e.cutaway==="threeQuarter"?Pv(i,e,t,n,[{planes:[new Ze(new D(0,-1,0),0)],capFilter:(r,a)=>a.z>0},{planes:[new Ze(new D(0,1,0),0),new Ze(new D(0,0,-1),0)],capFilter:(r,a)=>r===1&&a.y>0}]):null}function Uv(i,e,t){var S;i.updateMatrixWorld(!0);const n=i.geometry.getAttribute("position"),r=Number.isFinite(i.count)&&i.count>0?i.count:Number.POSITIVE_INFINITY,a=Number.isFinite((S=i.geometry.drawRange)==null?void 0:S.count)&&i.geometry.drawRange.count>0?i.geometry.drawRange.count:Number.POSITIVE_INFINITY,s=Math.min(n.count,r,a),o=[],c=[],l=new Map;function u(E){return Number.isFinite(E.x)&&Number.isFinite(E.y)&&Number.isFinite(E.z)}const h=na(e.slice);function d(E){return e.cutaway==="quarter"?(E.y>0&&(E.y=0),E.z>0&&(E.z=0)):e.cutaway==="eighth"?(E.x>0&&(E.x=0),E.y>0&&(E.y=0),E.z>0&&(E.z=0)):e.cutaway==="threeQuarter"&&E.y>0&&E.z>0&&(E.y<E.z?E.y=0:E.z=0),h==="x"&&E.x>0&&(E.x=0),h==="y"&&E.y>0&&(E.y=0),h==="z"&&E.z>0&&(E.z=0),E}function f(E,T){const A=i.localToWorld(new D(n.getX(E),n.getY(E),n.getZ(E)));if(d(A),!u(A))return-1;if(T){const w=`${Math.round(A.x*1e4)},${Math.round(A.y*1e4)},${Math.round(A.z*1e4)}`;if(l.has(w))return l.get(w);const M=o.length/3;return o.push(A.x,A.y,A.z),l.set(w,M),M}return o.push(A.x,A.y,A.z),o.length/3-1}const _=Math.floor(s/3),v=e.smooth||e.wireframe;for(let E=0;E<_;E+=1){const T=E*3,A=E*3+1,C=E*3+2,w=f(T,v),M=f(A,v),L=f(C,v);w>=0&&M>=0&&L>=0&&c.push(w,M,L)}const g=new $e;g.setAttribute("position",new Ue(o,3)),g.setIndex(c),e.smooth&&!e.wireframe&&uf(g,e),g.computeVertexNormals();const m=e.wireframe&&!e.smooth;let y;m?y=new Xt({color:pn(t),wireframe:!0,transparent:!0,opacity:.8,side:Dn,clippingPlanes:[wn]}):(y=i.material.clone(),y.color=new ye(pn(t)),y.emissive=new ye(pn(t)),y.wireframe=!1,y.side=pt,y.flatShading=!e.smooth,y.clippingPlanes=[wn],y.needsUpdate=!0);const x=new Je(g,y);return x.userData.vertexCount=s,x}function uf(i,e){const t=i.getAttribute("position"),n=i.index;if(!t||!n)return;const r=t.count,a=Array.from({length:r},()=>new Set);for(let f=0;f<n.count;f+=3){const _=n.getX(f),v=n.getX(f+1),g=n.getX(f+2);a[_].add(v).add(g),a[v].add(_).add(g),a[g].add(_).add(v)}const s=Math.max(.035,e.radius/Math.max(80,e.density*2)),o=new Uint8Array(r),c=na(e.slice);for(let f=0;f<r;f+=1){const _=t.getX(f),v=t.getY(f),g=t.getZ(f);e.cutaway==="quarter"&&(Math.abs(v)<s||Math.abs(g)<s)&&(o[f]=1),e.cutaway==="eighth"&&(Math.abs(_)<s||Math.abs(v)<s||Math.abs(g)<s)&&(o[f]=1),e.cutaway==="threeQuarter"&&(Math.abs(v)<s||Math.abs(g)<s)&&(o[f]=1),c==="x"&&Math.abs(_)<s&&(o[f]=1),c==="y"&&Math.abs(v)<s&&(o[f]=1),c==="z"&&Math.abs(g)<s&&(o[f]=1)}const l=new Float32Array(t.array),u=new Float32Array(l.length),h=e.cutaway==="none"?10:7,d=e.cutaway==="none"?.16:.1;for(let f=0;f<h;f+=1){u.set(l);for(let _=0;_<r;_+=1){if(o[_]||a[_].size<3)continue;let v=0,g=0,m=0;for(const S of a[_]){const E=S*3;v+=l[E],g+=l[E+1],m+=l[E+2]}const y=a[_].size,x=_*3;u[x]=l[x]+(v/y-l[x])*d,u[x+1]=l[x+1]+(g/y-l[x+1])*d,u[x+2]=l[x+2]+(m/y-l[x+2])*d}l.set(u)}t.array.set(l),t.needsUpdate=!0}function Ov(i,e){const t=[],n=[];for(let a=0;a<i.length;a+=1){const s=i[a],o=i[(a+1)%i.length],c=e.distanceToPoint(s)>=-1e-7,l=e.distanceToPoint(o)>=-1e-7;if(c&&l)t.push(o.clone());else if(c&&!l){const u=Id(s,o,e);t.push(u),n.push(u)}else if(!c&&l){const u=Id(s,o,e);t.push(u,o.clone()),n.push(u)}}const r=n.length===2?[[n[0],n[1]]]:[];return{clipped:t,segments:r}}function Id(i,e,t){const n=e.clone().sub(i),r=t.normal.dot(n);if(Math.abs(r)<1e-10)return i.clone();const a=-(t.normal.dot(i)+t.constant)/r;return i.clone().add(n.multiplyScalar(Math.max(0,Math.min(1,a))))}async function Fv(i,e,t,n,r,a){const s=ss(pn(a),t.opacity),o=e.n>=5?5e5:16e4,c=new H_(n.density,s,!0,!0,o);c.isolation=n.iso,c.position.set(0,0,0),c.scale.set(n.radius,n.radius,n.radius);const l=await xv(i,c.field.buffer,e,{...n,cutaway:"none"},r);return c.field=new Float32Array(l),c.update(),c}async function zc(i,e,t,n,r){const a=t.cutaway!=="none"||t.slice!=="none";if(e.l===0&&a){const h=Iv(e,t,n,r);if(h)return h}const s=t.smooth&&!t.wireframe?Math.round(t.density*(a?3:2)):t.density,o={...t,density:Math.min(a?220:180,Math.max(t.density,s))},c=await Fv(i,e,t,o,n,r),l={...t,_capSign:n,_skipCaps:e.l===0},u=Nv(c,l,r,e);return u||(Sl(t).length?Xo(c,l,r,e):Uv(c,t,r))}function zv(i,e){const t=new dt,n=Bv(i,e.radius,e);return n&&t.add(n),t.userData.vertexCount=wl(t),t.children.length?t:null}function Ma(i,e=.18){const t=new Xt({color:i,transparent:!0,opacity:e,side:pt,depthWrite:!1,depthTest:!0,blending:zr});return t.toneMapped=!1,t}function df(i,e,t){const n=new D(Math.cos(i),Math.sin(i),0).multiplyScalar(e),r=new D(0,0,e),a=[-n.x-r.x,-n.y-r.y,-n.z-r.z,n.x-r.x,n.y-r.y,n.z-r.z,n.x+r.x,n.y+r.y,n.z+r.z,-n.x+r.x,-n.y+r.y,-n.z+r.z],s=new $e;return s.setAttribute("position",new Ue(a,3)),s.setIndex([0,1,2,0,2,3]),s.computeVertexNormals(),new Je(s,t)}function hf(i,e,t){const n=Math.min(i,Math.PI-i);if(Math.abs(n-Math.PI/2)<.018){const h=new Je(new al(e,160),t);return h.renderOrder=3,h}const r=e*Math.sin(n),a=e*Math.cos(n),s=160,o=[],c=[];for(const h of[1,-1]){const d=o.length/3;o.push(0,0,0);for(let f=0;f<=s;f+=1){const _=Math.PI*2*f/s;o.push(r*Math.cos(_),r*Math.sin(_),h*a)}for(let f=1;f<=s;f+=1)c.push(d,d+f,d+f+1)}const l=new $e;l.setAttribute("position",new Ue(o,3)),l.setIndex(c),l.computeVertexNormals();const u=new Je(l,t);return u.renderOrder=3,u}function Bv(i,e,t={}){const n=new dt;if(t.nodeRadial){const s=Ma(16756736,.34);for(const o of gl(i)){if(o<=.02||o>=e*.99)continue;const c=new Je(new Kr(o,128,64),s.clone());c.renderOrder=3,n.add(c),n.add(vf(o,16769354,.72))}}const{polar:r,azimuthal:a}=xl(i);if(t.nodePolar){const s=Ma(65394,.32);for(const o of r)n.add(hf(o,e*1.04,s.clone()))}if(t.nodeAzimuthal){const s=Ma(47103,.3);for(const o of a){const c=df(o,e*1.04,s.clone());c.renderOrder=3,n.add(c)}}return n.children.length?n:null}function kv(i,e,t={}){const n=new dt,{polar:r,azimuthal:a}=xl(i);if(t.nodePolar){const s=Ma(65394,.34);for(const o of r)n.add(hf(o,e,s.clone()))}if(t.nodeAzimuthal){const s=Ma(47103,.32);for(const o of a)n.add(df(o,e,s.clone()))}return n.children.length?n:null}function Vv(i,e){return null}function ff(i){const e=new Yr(i*2,i*2,i*2),t=new N_(e),n=new ir({color:13686237,transparent:!0,opacity:.58}),r=new il(t,n);return e.dispose(),r}function Gv(i,e,t=null){const n=Rv(e);if(!n.length)return null;const r=new dt;for(const a of n){const s=gf(i,e,a,t);s&&r.add(s)}return r.children.length?r:null}function Hv(i,e){const t=Math.max(0,Math.min(1,Math.abs(i)/Math.max(e*.5,1e-12))),n=Math.pow(t,.52);return i>=0?new ye(16711896).lerp(new ye(16716306),n):new ye(60159).lerp(new ye(1054975),n)}function pf(i,e,t,n,r,a,s){const o=new ye(r.backgroundColor||"#000000"),c=new ye(16711896),l=new ye(60159),u=(M,L,I)=>{const N=Math.max(0,Math.min(1,(I-M)/Math.max(1e-12,L-M)));return N*N*(3-2*N)},h=Math.min(1,Math.hypot(e,t,n)/Math.max(r.radius,1e-9)),d=Math.pow(1-h,1.45),f=Math.max(0,Math.min(1,(a.n-4)/2)),_=Math.abs(i),v=r.iso*(.86-d*.18-f*.04),g=r.iso*(1.62+d*1.05+f*.28),m=r.iso*(1.05+d*.18),y=Math.max(r.iso*(2.1+d*1.05+f*.22),s*(.48+d*.14)),x=u(v,g,_),S=u(m,y,_),E=Hv(i,s),T=i>=0?c:l,A=.38+S*(.62-d*.06),C=T.clone().lerp(E,Math.max(.34,A)),w=Math.max(0,(1-x)*(.16+d*.06));return C.clone().lerp(o,w)}function mf(i,e){const t=i.map(r=>Math.abs(r)).filter(r=>Number.isFinite(r)&&r>1e-12).sort((r,a)=>r-a);if(!t.length)return Math.max(e,1e-9);const n=Math.min(t.length-1,Math.floor(t.length*.82));return Math.max(e,t[n])}function gf(i,e,t,n=null,r=0,a=1){const s=Math.max(160,Math.min(i.n>=5?420:320,Math.round(e.density*(i.n>=5?5.4:4.4)))),o=e.radius;function c(B,O){return t==="x"?[r,B,O]:t==="y"?[B,r,O]:[B,O,r]}function l(B,O,H){return e.cutaway==="quarter"||e.cutaway==="threeQuarter"?t==="y"?H>0:t==="z"?O>0:!1:e.cutaway==="eighth"?t==="x"?O>0&&H>0:t==="y"?B>0&&H>0:t==="z"?B>0&&O>0:!1:!0}const u=s+1,h=e.iso*1.015,d=new Float32Array(u*u),f=[],_=(B,O)=>O*u+B;for(let B=0;B<=s;B+=1){const O=o-2*o*B/s;for(let H=0;H<=s;H+=1){const G=-o+2*o*H/s,[ne,ae,re]=c(G,O),ee=jt(i,ne,ae,re);d[_(H,B)]=ee;const pe=n==null||(n>0?ee>=0:ee<0);l(ne,ae,re)&&pe&&Math.abs(ee)>=e.iso*.94&&f.push(ee)}}if(!f.length)return null;const v=mf(f,e.iso*1.6),g=[],m=[],y=[];function x(B){return n==null?Math.abs(B)-h:n*B-h}function S(B,O){const H=-o+2*o*B/s,G=o-2*o*O/s,[ne,ae,re]=c(H,G),ee=d[_(B,O)];return{point:new D(ne,ae,re),rawValue:ee,value:x(ee)}}function E(B,O,H){return{point:B.point.clone().lerp(O.point,H),rawValue:B.rawValue+(O.rawValue-B.rawValue)*H,value:B.value+(O.value-B.value)*H}}function T(B,O){const H=B-O;return Math.abs(H)<1e-12?.5:Math.max(0,Math.min(1,B/H))}function A(B){const O=[];for(let H=0;H<B.length;H+=1){const G=B[H],ne=B[(H+1)%B.length],ae=G.value>=0,re=ne.value>=0;ae&&re?O.push(ne):ae&&!re?O.push(E(G,ne,T(G.value,ne.value))):!ae&&re&&O.push(E(G,ne,T(G.value,ne.value)),ne)}return O}function C(B){const{x:O,y:H,z:G}=B.point;g.push(O,H,G);const ne=pf(B.rawValue,O,H,G,e,i,v);return m.push(ne.r,ne.g,ne.b),g.length/3-1}for(let B=0;B<s;B+=1)for(let O=0;O<s;O+=1){const H=-o+2*o*(O+.5)/s,G=o-2*o*(B+.5)/s,[ne,ae,re]=c(H,G);if(!l(ne,ae,re))continue;let ee=[S(O,B),S(O+1,B),S(O+1,B+1),S(O,B+1)];if(ee=A(ee),ee.length<3)continue;const pe=C(ee[0]);for(let q=1;q<ee.length-1;q+=1)y.push(pe,C(ee[q]),C(ee[q+1]))}if(!y.length)return null;const w=new $e;w.setAttribute("position",new Ue(g,3)),w.setAttribute("color",new Ue(m,3)),w.setIndex(y),w.computeVertexNormals();const M=new Xt({vertexColors:!0,side:pt,transparent:!1,opacity:1,depthWrite:!0,color:new ye().setScalar(a)});M.toneMapped=!1;const L=new Je(w,M);L.renderOrder=4,L.userData.vertexCount=y.length;const I=new Xt({vertexColors:!0,side:pt,transparent:!0,opacity:.26*a,depthWrite:!1,depthTest:!0,blending:zr,color:new ye().setScalar(a)});I.toneMapped=!1;const N=new Je(w,I);N.renderOrder=4.05,N.userData.vertexCount=y.length;const k=new dt;return k.add(L,N),k.userData.vertexCount=y.length*2,k}function Wv(){for(const i of[Nt,fn,$n,Zn,va,Ur,qr,Dc])i&&Nn(ut,i);Nt=null,fn=null,$n=null,Zn=null,va=null,Ur=null,qr=null,Dc=null}function qv(){for(const i of[Wn,qn,Or])i&&Nn(zt,i);Wn=null,qn=null,Or=null}function Xv(i,e=!0){const t=Z_();t&&Nn(zt,t);const n=ko(i,Math.max(.08,i*.024),.9);$_(n),n.visible=e,zt.add(n)}function bl(){for(const i of[bi,ya,Yi])i&&Nn(ni,i);bi=null,ya=null,Yi=null}function Aa(){for(const i of[Kn,Jn,Qi,Ea,Ic])i&&Nn(ii,i);Kn=null,Jn=null,Qi=null,Ea=null,Ic=null}function Nn(i,e){i.remove(e),e.traverse(t=>{var n,r,a,s,o,c;if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const l of t.material)(n=l.userData)!=null&&n.pooled||l.dispose();else t.material&&((r=t.material.userData)!=null&&r.pooled||(t.material.map&&t.material.map.dispose(),(c=(o=(s=(a=t.material.uniforms)==null?void 0:a.volumeMap)==null?void 0:s.value)==null?void 0:o.dispose)==null||c.call(o),t.material.dispose()))})}function Yv(i,e){const t=Math.max(36,Math.floor(e.thetaSegments*.6)),r=new cl(1,t).getAttribute("position"),a=[],s=[],o=new Map,c=[];let l=0;for(let d=0;d<r.count;d++){const f=r.getX(d),_=r.getY(d),v=r.getZ(d),g=1e5,m=`${Math.round(f*g)},${Math.round(_*g)},${Math.round(v*g)}`;let y=o.get(m);if(y===void 0){y=a.length/3,a.push(f,_,v),o.set(m,y);const x=Math.acos(v),S=Math.atan2(_,f),E=Tc(i.l,i.m,x,S);c.push(E),Math.abs(E)>l&&(l=Math.abs(E))}s.push(y)}const u=(e.radius??4)/(l||1);function h(d){const f=[],_=[],v=new Int32Array(a.length/3).fill(-1);for(let g=0;g<s.length;g+=3){const m=s[g],y=s[g+1],x=s[g+2],S=c[m]*d,E=c[y]*d,T=c[x]*d;if(S<=1e-6&&E<=1e-6&&T<=1e-6)continue;const A=(C,w)=>{if(v[C]===-1){const M=w>1e-6?w*u:0;v[C]=f.length/3,f.push(a[C*3]*M,a[C*3+1]*M,a[C*3+2]*M)}return v[C]};_.push(A(m,S),A(y,E),A(x,T))}return{vertices:f,indices:_}}return{positive:h(1),negative:h(-1)}}async function Dt(i=!1){i instanceof Event&&(i=!1);const e=++cc;Yo();const t=bt(),n=rn(),r=Un(t.n,t.l,t.m);p.statusText.textContent="Calculating...",p.renderButton.disabled=!0;let a=null,s=null,o=0,c=0;if(n.mode==="marching"||n.mode==="points"){const[l,u]=await Promise.all([Dd(0,t,n,1,n.positiveColor),Dd(1,t,n,-1,n.negativeColor)]);if(e!==cc)return;a=l,s=u,o=a.userData.vertexCount,c=s.userData.vertexCount}else{const{positive:l,negative:u}=fv(t,{...n,thetaSegments:Math.max(30,n.density+18),phiSegments:Math.max(52,n.density*3)});a=Wo(l,pn(n.positiveColor),n.opacity),s=Wo(u,pn(n.negativeColor),n.opacity),qo(a,n),qo(s,n),o=l.vertices.length/3,c=u.vertices.length/3}if(n.showProjection3d||n.showProjection){const l=Sf(t,n);l.name="integratedProjection3DGroup",l.visible=!!n.showProjection3d,a&&a.add(l)}requestAnimationFrame(()=>{if(e!==cc)return;n.showAxis=p.axis.checked,n.showBox=p.box.checked,Wv(),qv(),bl(),Aa(),Ml(n.backgroundColor),Ec(n.showAxis,Math.max(1,n.radius/4.5)),p.toolAxis&&p.toolAxis.classList.toggle("active",n.showAxis),Nt=a,fn=s;const l=Tv(n);if(Nt&&(Nt.visible=n.showPositive&&l,ut.add(Nt)),fn&&(fn.visible=n.showNegative&&l,ut.add(fn)),n.showCloud){const{positive:u,negative:h}=dv(t,n);$n=Pd(u,pn(n.positiveColor)),Zn=Pd(h,pn(n.negativeColor)),$n.material.clippingPlanes=[wn],Zn.material.clippingPlanes=[wn],$n.visible=n.showPositive,Zn.visible=n.showNegative,ut.add($n,Zn),o=u.length/3,c=h.length/3}if(n.showNode&&Go(t.n,t.l)!=="0 radial, 0 angular"&&(va=zv(t,n),va&&ut.add(va)),Ur=Vv(),Ur&&ut.add(Ur),Dc=null,(n.showBox||n.grid3d)&&(qr=ff(n.radius),ut.add(qr)),ay(n),p.orbitalName.textContent=r,p.viewerTitle.textContent=`原子轨道  ${r}`,p.nodeText.textContent=Go(t.n,t.l),p.sliceText.textContent=n.slice.toUpperCase(),p.boxText.textContent=n.radius.toFixed(2),p.isoText.textContent=n.iso.toFixed(5),p.posCount.textContent=String(o),p.negCount.textContent=String(c),p.statusText.textContent="Rendered",p.animationWindow&&!p.animationWindow.classList.contains("closed")&&Wc(),ty(t,n),Cl(t,n),Ra(t,n),i){const u=t.n>=5||t.l>=3?1.65:1.22;Kv(t,n.radius*u,Math.max(Zt,$v(n))),X_(),Y_()}Rn(Ce),Rn(Oe),p.renderButton.disabled=!1,bn()})}function jv(){return Array.from(document.querySelectorAll(".view-grid > .qt-window"))}function Yo(i={}){for(const e of jv())e.classList.remove("closed"),i.restoreLayout?e.classList.remove("minimized","maximized"):e.classList.remove("minimized"),Xr(e)}function Ta(i=In){const e=p.viewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(st.left=-i*t,st.right=i*t,st.top=i,st.bottom=-i):(st.left=-i,st.right=i,st.top=i/t,st.bottom=-i/t),st.near=.1,st.far=Math.max(1e3,i*8),st.updateProjectionMatrix()}function Ci(i,e=90){return Math.max(e,i*2.8)}function jo(i=In){var t,n,r;In=i;const e=Ci(i);st.position.set(0,0,e),st.lookAt(0,0,0),Ta(i),Ce.target.set(0,0,0),Ce.update(),(t=p.toolXOY)==null||t.classList.add("active"),(n=p.toolYOZ)==null||n.classList.remove("active"),(r=p.toolXOZ)==null||r.classList.remove("active")}function Ca(i=Math.max(3,In*.45)){const e=p.angularViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(lt.left=-i*t,lt.right=i*t,lt.top=i,lt.bottom=-i):(lt.left=-i,lt.right=i,lt.top=i/t,lt.bottom=-i/t),lt.near=.1,lt.far=Math.max(1e3,i*8),lt.updateProjectionMatrix()}function Nd(i=4){var t;Zt=Math.max(3,i);const e=Ci(Zt,40);lt.position.set(0,0,e),lt.lookAt(0,0,0),Ca(Zt),Oe.target.set(0,0,0),(t=Oe.handleResize)==null||t.call(Oe),Oe.update()}function $v(i){const e=Math.max(4,Math.min(8,i.radius*.55))*.74;return Math.max(5.8,e*1.55)}function Zv(...i){var a;const e=new En,t=new En;let n=!1;for(const s of i)s&&((a=s.updateWorldMatrix)==null||a.call(s,!0,!1),t.setFromObject(s),!(!Number.isFinite(t.min.x)||!Number.isFinite(t.max.x))&&(n?e.union(t):e.copy(t),n=!0));if(!n)return 4.2;const r=new Li;return e.getBoundingSphere(r),Math.max(.001,r.radius)}function Kv(i,e,t){var s,o,c,l,u;const n=Tl(i);In=e,Zt=Math.max(3,t);const r=Ci(e),a=Ci(Zt,40);n==="yoz"?(st.position.set(r,0,0),lt.position.set(a,0,0)):n==="xoz"?(st.position.set(0,r,0),lt.position.set(0,a,0)):(st.position.set(0,0,r),lt.position.set(0,0,a)),st.lookAt(0,0,0),lt.lookAt(0,0,0),Ta(e),Ca(Zt),Ce.target.set(0,0,0),Oe.target.set(0,0,0),(s=Ce.handleResize)==null||s.call(Ce),(o=Oe.handleResize)==null||o.call(Oe),Ce.update(),Oe.update(),(c=p.toolXOY)==null||c.classList.toggle("active",n==="xoy"),(l=p.toolYOZ)==null||l.classList.toggle("active",n==="yoz"),(u=p.toolXOZ)==null||u.classList.toggle("active",n==="xoz")}function xf(i=Math.max(2.5,In*.6)){const e=p.projectionViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Pt.left=-i*t,Pt.right=i*t,Pt.top=i,Pt.bottom=-i):(Pt.left=-i,Pt.right=i,Pt.top=i/t,Pt.bottom=-i/t),Pt.near=.1,Pt.far=1e3,Pt.updateProjectionMatrix()}function Jv(i=Math.max(3,In*.5)){var e;yl=i,Pt.up.set(0,0,1),Pt.position.set(i*.78,-i*1.18,i*.68),Pt.lookAt(0,0,0),xf(i),Sn.target.set(0,0,0),(e=Sn.handleResize)==null||e.call(Sn),Sn.update()}function El(i=4.5){const e=p.radialViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(It.left=-i*t,It.right=i*t,It.top=i,It.bottom=-i):(It.left=-i,It.right=i,It.top=i/t,It.bottom=-i/t),It.near=.1,It.far=1e3,It.updateProjectionMatrix()}function Qv(i=4.5){var e;Ho=i,It.position.set(i*.65,-i*.9,i*.7),It.lookAt(0,0,0),El(i),Ht.target.set(0,0,0),(e=Ht.handleResize)==null||e.call(Ht),Ht.update()}function ey(){var n;if(!ls()||!((n=p.syncRotation)!=null&&n.checked))return;const i=st.position.clone().sub(Ce.target).normalize(),e=st.up.clone(),t=(r,a,s,o=40)=>{const c=Ci(s,o);r.position.copy(i.clone().multiplyScalar(c)),r.up.copy(e),r.lookAt(0,0,0),a.target.set(0,0,0),r.updateProjectionMatrix()};t(lt,Oe,Zt,40),t(Pt,Sn,yl,30)}function ty(i,e){const t={...e,radius:Math.max(4,Math.min(8,e.radius*.55)),thetaSegments:72},{positive:n,negative:r}=Yv(i,t);Wn=Wo(n,pn(e.positiveColor),1),qn=Wo(r,pn(e.negativeColor),1),qo(Wn,{...e,smooth:e.smooth||!e.wireframe,wireframe:e.wireframe},!0),qo(qn,{...e,smooth:e.smooth||!e.wireframe,wireframe:e.wireframe},!0),Wn.scale.setScalar(.74),qn.scale.setScalar(.74),Wn.visible=e.showPositive,qn.visible=e.showNegative,zt.add(Wn,qn);const a=Zv(Wn,qn),s=Math.max(4.2,a*1.45);e.showNode&&(Or=kv(i,Math.max(a*1.16,2.8),e),Or&&zt.add(Or)),Xv(s,e.showAxis),Zt=Math.max(Zt,s*1.12)}const da=(()=>{const i=[255,0,0],e=[255,0,255],t=[255,255,255],n=[0,255,255],r=[0,0,255],a=[],s=(c,l)=>{for(let u=0;u<l;u+=1)a.push(c)},o=(c,l,u)=>{const h=[(l[0]-c[0])/u,(l[1]-c[1])/u,(l[2]-c[2])/u];for(let d=0;d<u;d+=1)a.push([c[0]+d*h[0],c[1]+d*h[1],c[2]+d*h[2]])};return s(i,20),o(i,e,80),o(e,t,25),s(t,5),o(t,n,25),o(n,r,80),s(r,20),a.reverse().map(([c,l,u])=>new ye(c/255,l/255,u/255))})();function cs(i){const t=(Math.max(-1,Math.min(1,i))+1)/2*(da.length-1),n=Math.max(0,Math.min(da.length-1,Math.floor(t))),r=Math.max(0,Math.min(da.length-1,n+1));return da[n].clone().lerp(da[r],t-n)}function ny(i,e,t,n,r,a){const s=e.rows,o=s.length,c=2*t/(o-1),l=Math.max(1,Math.round(.4/c)),u=new ir({color:16777215,transparent:!0,opacity:.56}),h=(d,f)=>{const _=-t+2*t*d/(o-1),v=-t+2*t*f/(o-1),g=s[f][d]/a;return new D(_,v,n+g*r+.012)};for(let d=0;d<o;d+=l){const f=[];for(let _=0;_<o;_+=1)f.push(h(_,d));i.add(new wa(new $e().setFromPoints(f),u))}for(let d=0;d<o;d+=l){const f=[];for(let _=0;_<o;_+=1)f.push(h(d,_));i.add(new wa(new $e().setFromPoints(f),u))}}function iy(i,e,t,n,r,a=1){const s=e.rows,o=s.length,c=2*t/(o-1),l=[(h,d,f)=>new D(-t+(h+f)*c,-t+d*c,n),(h,d,f)=>new D(-t+(h+1)*c,-t+(d+f)*c,n),(h,d,f)=>new D(-t+(h+1-f)*c,-t+(d+1)*c,n),(h,d,f)=>new D(-t+h*c,-t+(d+1-f)*c,n)],u=[[0,1],[1,2],[2,3],[3,0]];for(const h of r){const d=new ir({color:cs(h).getHex(),transparent:!0,opacity:.95}),f=[];for(let _=0;_<o-1;_+=1)for(let v=0;v<o-1;v+=1){const g=[s[_][v],s[_][v+1],s[_+1][v+1],s[_+1][v]].map(y=>y/a),m=[];for(let y=0;y<4;y+=1){const[x,S]=u[y],E=g[x]-h,T=g[S]-h;if(E===0||E*T<0){const A=Math.abs(E)+Math.abs(T);if(A<1e-12)continue;const C=Math.max(0,Math.min(1,Math.abs(E)/A));m.push(l[y](v,_,C))}}m.length>=2&&(f.push(m[0],m[1]),m.length>=4&&f.push(m[2],m[3]))}f.length&&i.add(new il(new $e().setFromPoints(f),d))}}const Ln={radius:16756736,direction:3538793,point:16776960};function ls(){var i;return!!((i=p.relationMode)!=null&&i.checked)}function ry(){const i=[[ut,Nc],[ni,Uc],[ii,Oc],[zt,Fc]];for(const[e,t]of i)t&&Nn(e,t);Nc=null,Uc=null,Oc=null,Fc=null}function Ud(i){var n,r;let e=0;const t=new D;return(n=i==null?void 0:i.updateMatrixWorld)==null||n.call(i,!0),(r=i==null?void 0:i.traverse)==null||r.call(i,a=>{var o,c;const s=(c=(o=a.geometry)==null?void 0:o.attributes)==null?void 0:c.position;if(s){a.updateMatrixWorld(!0);for(let l=0;l<s.count;l+=1)t.fromBufferAttribute(s,l).applyMatrix4(a.matrixWorld),e=Math.max(e,t.length())}}),e}function ay(i){const e=Math.max(Ud(Nt),Ud(fn));as=e>.001?e*1.02:i.radius*.86}function _f(){var h,d,f,_;const i=rn(),e=Math.max(0,Math.min(100,Number(((h=p.scanRadius)==null?void 0:h.value)??45))),t=Math.max(0,Math.min(180,Number(((d=p.scanTheta)==null?void 0:d.value)??90))),n=(Number(((f=p.scanPhi)==null?void 0:f.value)??0)%360+360)%360,r=Math.max(.001,as||i.radius),a=r*e/100,s=t*Math.PI/180,o=n*Math.PI/180,c=new D(Math.sin(s)*Math.cos(o),Math.sin(s)*Math.sin(o),Math.cos(s)).normalize(),l=c.clone().multiplyScalar(a),u=Number(((_=p.scanSliceZ)==null?void 0:_.value)??0);return{options:i,radiusPercent:e,thetaDegrees:t,phiDegrees:n,r:a,maxRadius:r,direction:c,point:l,sliceZ:u}}function oy(i=_f()){p.scanRadiusValue&&(p.scanRadiusValue.value=`${Math.round(i.radiusPercent)}%`),p.scanThetaValue&&(p.scanThetaValue.value=`${Math.round(i.thetaDegrees)}°`),p.scanPhiValue&&(p.scanPhiValue.value=`${Math.round(i.phiDegrees)}°`),p.scanSliceZValue&&(p.scanSliceZValue.value=`${Math.round(i.sliceZ)}`)}function Al(i,e,t=.95){const n=new ir({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});n.toneMapped=!1;const r=new wa(new $e().setFromPoints(i),n);return r.renderOrder=30,r}function sy(i,e,t=.95){const n=new ir({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});n.toneMapped=!1;const r=new il(new $e().setFromPoints(i),n);return r.renderOrder=30,r}function cy(i,e=16777215,t=.026,n=1){const r=new Qh(i,!1,"centripetal",.18),a=new ll(r,Math.max(80,i.length*2),t,8,!1),s=new Xt({color:e,transparent:n<1,opacity:n,depthTest:!1,depthWrite:!1});s.toneMapped=!1;const o=new Je(a,s);return o.renderOrder=31,o}function Bc(i,e,t,n=.95){const r=[];for(let s=0;s<=160;s+=1){const o=Math.PI*2*s/160;r.push(new D(i*Math.cos(o),i*Math.sin(o),e))}return Al(r,t,n)}function vf(i,e,t=.74){const n=[],s=o=>{for(let c=0;c<160;c+=1){const l=Math.PI*2*c/160,u=Math.PI*2*(c+1)/160;n.push(o(l),o(u))}};for(let o=1;o<12;o+=1){const c=Math.PI*o/12,l=Math.cos(c)*i,u=Math.sin(c)*i;s(h=>new D(u*Math.cos(h),u*Math.sin(h),l))}for(let o=0;o<6;o+=1){const c=Math.PI*o/6;s(l=>new D(i*Math.sin(l)*Math.cos(c),i*Math.sin(l)*Math.sin(c),i*Math.cos(l)))}return sy(n,e,t)}function Ia(i,e,t=1){const n=new Xt({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});n.toneMapped=!1;const r=new Je(new Kr(i,24,16),n);return r.renderOrder=32,r}function yf(i,e,t,n,r){const a=new B_(i,new D(0,0,0),e,t,n,r);return a.traverse(s=>{s.material&&(s.material.depthTest=!1,s.material.depthWrite=!1,s.material.toneMapped=!1,s.renderOrder=31)}),a}function ly(i,e,t){return e==="xoz"?new he(i.x*t,i.z*t):e==="yoz"?new he(i.y*t,i.z*t):new he(i.x*t,i.y*t)}function uy(i,e){const t=i.length();return t>e&&t>1e-9&&i.multiplyScalar(e/t),i}function dy(i){const e=new dt;i.r>.001&&e.add(vf(i.r,Ln.radius,.72));const t=Math.max(i.r,i.maxRadius*.22,1);e.add(yf(i.direction,t,Ln.direction,t*.11,t*.035));const n=Ia(Math.max(.08,i.maxRadius*.018),Ln.point);n.position.copy(i.point),e.add(n),ut.add(e),Nc=e}function hy(i){const e=new dt,t=Math.max(2.4,Zt*.55);e.add(yf(i.direction,t,Ln.direction,t*.14,t*.045));const n=Ia(.08,Ln.point);n.position.copy(i.direction.clone().multiplyScalar(t)),e.add(n),zt.add(e),Fc=e}function fy(i){if(!Gt)return;const e=new dt,t=Gt.radius*.92,n=Gt.radius/Math.max(1e-4,i.maxRadius),r=Math.max(0,i.r*n),a=r>t?t/r:1,s=n*a,o=Math.min(t,Math.max(0,i.r*s));e.add(Bc(o,Gt.bottomZ+.18,Ln.radius,.95));const c=uy(ly(i.point,Gt.plane,s),t),l=Ia(.075,Ln.point);l.position.set(c.x,c.y,Gt.bottomZ+.28),e.add(l),e.add(Al([new D(0,0,Gt.bottomZ+.22),new D(c.x,c.y,Gt.bottomZ+.22)],Ln.direction,.82)),ni.add(e),Uc=e}function py(i){if(!_n)return;const e=i.r/Math.max(1e-4,_n.radialExtent);if(Kn){const o=Kn.userData.rings,c=Math.max(1,Math.round(e*o));Kn.geometry.setDrawRange(0,c*128*6)}if(Xn){const o=Xn.userData.rings,c=Math.max(1,Math.round(e*o)),l=Xn.userData.sideAngles;Xn.geometry.setDrawRange(0,c*l*6)}if(Jn){const o=Jn.userData.samples,c=o*2+1,l=Math.max(1,Math.round(e*o)),u=Jn.geometry.parameters.tubularSegments,h=u/c,d=u/2,f=l*h,_=l*h,v=Math.max(0,Math.floor(d-_)),g=Math.ceil(f+_);Jn.geometry.setDrawRange(v*8*6,g*8*6)}const t=new dt,n=Math.min(_n.radiusScale,e*_n.radiusScale),r=Rl(bt(),i.r,i.options.radialMode),a=_n.curveBaseZ+r/_n.maxAbs*_n.heightScale;t.add(Al([new D(n,0,_n.baseZ-.15),new D(n,0,_n.heightTop)],Ln.radius,.95));const s=Ia(.07,Ln.point);s.position.set(n,0,a),t.add(s),ii.add(t),Oc=t}function Na(){ry();const i=_f();oy(i),wn.constant;const e=i.sliceZ/100*i.maxRadius;wn.constant=e;let t=ut.getObjectByName("relationSliceCap");if(t&&(Nn(ut,t),t=null),!ls()){wn.constant=100;return}Math.abs(e)<i.maxRadius&&(t=gf(bt(),i.options,"z",null,e,.75),t&&(t.name="relationSliceCap",ut.add(t))),dy(i),hy(i),fy(i),py(i)}function my(i){const e=i.length();if(e<1e-6)return;const t=Math.acos(Math.max(-1,Math.min(1,i.z/e))),n=(Math.atan2(i.y,i.x)+Math.PI*2)%(Math.PI*2);p.scanRadius&&(p.scanRadius.value=String(Math.round(Math.max(0,Math.min(100,e/Math.max(1e-4,as)*100))))),p.scanTheta&&(p.scanTheta.value=String(Math.round(t*180/Math.PI))),p.scanPhi&&(p.scanPhi.value=String(Math.round(n*180/Math.PI))),Na(),Yn(`关联高亮：r=${e.toFixed(2)}, θ=${Math.round(t*180/Math.PI)}°, φ=${Math.round(n*180/Math.PI)}°`)}function gy(i){var s;if(!ls())return;const e=ft.domElement.getBoundingClientRect(),t=new he((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),n=new z_;n.params.Points.threshold=Math.max(.12,rn().radius*.025),n.setFromCamera(t,st);const r=[Nt,fn,$n,Zn].filter(Boolean),a=n.intersectObjects(r,!0);(s=a[0])!=null&&s.point&&my(a[0].point)}function Tl(i){const e=Un(i.n,i.l,i.m).replace(/^\d+/,"");return e.startsWith("Dyz")||e.startsWith("Fyz2")||e.startsWith("Gz3y")||e.startsWith("Gzy3")||e.startsWith("Gyz3")||e.startsWith("Hyz4")||e.startsWith("Hyz")?"yoz":e.startsWith("Pz")||e.startsWith("Dz2")||e.startsWith("Dxz")||e.startsWith("Fz3")||e.startsWith("Fxz2")||e.startsWith("Gz4")||e.startsWith("Gz3x")||e.startsWith("Gxz3")||e.startsWith("Gzx3")||e.startsWith("Hxz4")||e.startsWith("Hz5")||e.startsWith("Hxz")?"xoz":"xoy"}function Mf(i,e,t,n){const r=[],a=e.radius;let s=0,o=0,c=0;for(let l=0;l<n;l+=1){const u=[],h=-a+2*a*l/(n-1);for(let d=0;d<n;d+=1){const f=-a+2*a*d/(n-1);let _=0;const v=e.sliceOffset||0;t==="xoy"&&(_=To(i,f,h,v)),t==="xoz"&&(_=To(i,f,v,h)),t==="yoz"&&(_=To(i,v,f,h)),s=Math.max(s,Math.abs(_)),o=Math.max(o,_),c=Math.min(c,_),u.push(_)}r.push(u)}return{data:{rows:r,maxAbs:s,maxPositive:o,minNegative:c},scale:1}}function Sf(i,e){const t=new dt,r=Ii(i).gridSize*2+1,a=e.slice!=="none"?e.slice:Tl(i),{data:s}=Mf(i,e,a,r),o=(s.maxPositive>1e-12?s.maxPositive:s.maxAbs||1)/.9,c=[],l=[],u=[],h=e.radius,d=h*.9;for(let y=0;y<r;y+=1)for(let x=0;x<r;x+=1){const S=-h+2*h*x/(r-1),E=-h+2*h*y/(r-1),T=s.rows[y][x]/o,C=T*d;let w,M,L;a==="xoy"?(w=S,M=E,L=C):a==="xoz"?(w=S,M=C,L=E):a==="yoz"&&(w=C,M=S,L=E),c.push(w,M,L);const I=cs(T);l.push(I.r,I.g,I.b)}for(let y=0;y<r-1;y+=1)for(let x=0;x<r-1;x+=1){const S=y*r+x,E=S+1,T=S+r,A=T+1;u.push(S,T,E,E,T,A)}const f=new $e;f.setAttribute("position",new Ue(c,3)),f.setAttribute("color",new Ue(l,3)),f.setIndex(u),f.computeVertexNormals();const _=new Je(f,new Nr({vertexColors:!0,side:pt,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04}));_.name="integratedProjectionMountain",t.add(_);const v=[];for(let y=0;y<r;y+=1)for(let x=0;x<r;x+=1){const S=-h+2*h*x/(r-1),E=-h+2*h*y/(r-1);a==="xoy"?v.push(S,E,0):a==="xoz"?v.push(S,0,E):a==="yoz"&&v.push(0,S,E)}const g=new $e;g.setAttribute("position",new Ue(v,3)),g.setAttribute("color",new Ue(l,3)),g.setIndex(u),g.computeVertexNormals();const m=new Je(g,new Xt({vertexColors:!0,side:pt,transparent:!0,opacity:.85}));return m.name="integratedProjectionSlice",t.add(m),t.userData.vertexCount=r*r,t.userData.slicePlane=a,t.userData.radius=h,t.userData.size=r,t.userData.projectionScale=o,t}function xy(i,e){const t=`${i.n}|${i.l}|${i.z}`;if(window._maxPsiCache&&window._maxPsiCache[t])return window._maxPsiCache[t];let n=0,r=0;const a=20,s=Math.min(4.7,e.radius*.42);for(let c=0;c<=a;c++){const l=-s+2*s*c/a;for(let u=0;u<=a;u++){const h=-s+2*s*u/a;for(let d=0;d<=a;d++){const f=-s+2*s*d/a,_=To(i,f*2.38,h*2.38,l*2.38);Math.abs(_)>n&&(n=Math.abs(_)),_>r&&(r=_)}}}const o={maxAbs:n,maxPos:r};return window._maxPsiCache||(window._maxPsiCache={}),window._maxPsiCache[t]=o,o}function Cl(i,e){ni.background=new ye(e.backgroundColor);const t=new dt,r=Ii(i).gridSize*2+1,a=e.slice!=="none"?e.slice:Tl(i),{data:s}=Mf(i,e,a,r),o=xy(i,e),c=(o.maxPos>1e-12?o.maxPos:o.maxAbs||1)/.9,l=[],u=[],h=[],d=Math.min(4.7,e.radius*.42),f=d*1,_=-d*1,v=d*.9;Gt={plane:a,radius:d,surfaceZ:f,bottomZ:_,height:v};for(let T=0;T<r;T+=1)for(let A=0;A<r;A+=1){const C=-d+2*d*A/(r-1),w=-d+2*d*T/(r-1),M=s.rows[T][A]/c,L=M;l.push(C,w,f+L*v);const I=cs(M);u.push(I.r,I.g,I.b)}for(let T=0;T<r-1;T+=1)for(let A=0;A<r-1;A+=1){const C=T*r+A,w=C+1,M=C+r,L=M+1;h.push(C,M,w,w,M,L)}const g=new $e;g.setAttribute("position",new Ue(l,3)),g.setAttribute("color",new Ue(u,3)),g.setIndex(h),g.computeVertexNormals(),bi=new Je(g,new Nr({vertexColors:!0,side:pt,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04})),t.add(bi),ny(t,s,d,f,v,c);const m=new dt,y=[];for(let T=0;T<r;T+=1)for(let A=0;A<r;A+=1){const C=-d+2*d*A/(r-1),w=-d+2*d*T/(r-1);y.push(C,w,_+.02)}const x=new $e;x.setAttribute("position",new Ue(y,3)),x.setAttribute("color",new Ue(u,3)),x.setIndex(h),x.computeVertexNormals();const S=new Je(x,new Xt({vertexColors:!0,side:pt,transparent:!0,opacity:.78}));m.add(S);const E=(T,A,C)=>Array.from({length:C},(w,M)=>T+(A-T)*M/(C-1));iy(m,s,d,_+.08,[...E(-1,0,20),...E(0,1,20)],c),ya=m,t.add(ya),Yi=ff(d),Yi.scale.z=1,Yi.position.z=(f+_)/2,t.add(Yi),bi=t,ya=null,Yi=null,ni.add(t),Jv(d*1.92),Na()}function Rl(i,e,t){const n=Math.max(e,1e-4),r=Si(i.n,i.l,i.z,n);return t==="R"?r:t==="R2"?r*r:n*n*r*r}function Od(i,e=11974326){const t=Math.abs(i),n=Math.max(0,Math.min(1,(t-.035)/.72)),r=n*n*(3-2*n);return new ye(e).lerp(cs(i),r)}function _y(i,e,t,n){const r=gl(e).filter(s=>s>.02&&s<n.radialExtent*.995);if(!r.length)return;const a=n.curveBaseZ??(t.radialSide?n.sideZ:n.diskZ+n.curveLift);for(const s of r){const o=s/n.radialExtent*n.radiusScale;if(t.radialCurve){const c=Rl(e,s,t.radialMode),l=a+c/n.maxAbs*n.heightScale;for(const u of[-1,1]){const h=Ia(.065,16761856,.95);h.position.set(u*o,0,l),i.add(h)}}}}function Ra(i,e){var T;ii.background=new ye(e.backgroundColor);const t=i.n>=5?260:190,n=i.n>=5?132:96,r=ls()?Math.max(.001,as||Cc(i)):Math.max(5,Cc(i)),a=[];for(let A=0;A<=t;A+=1)a.push(Rl(i,r*A/t,e.radialMode));const s=Math.max(...a.map(Math.abs),1e-6),o=3.7,c=o*.43,l=-1.25,u=l,h=.08,d=u+o*.72,f=e.radialSide?d:u+h,_=f+a[0]/s*c;_n={radialExtent:r,radiusScale:o,heightScale:c,baseZ:l,diskZ:u,curveLift:h,sideZ:d,curveBaseZ:f,curveOriginZ:_,maxAbs:s,heightTop:f+c+.38};const v=new dt,g=new Je(new Kr(o,128,48,0,Math.PI*2,Math.PI/2,Math.PI/2),new Nr({color:12105912,side:pt,transparent:!0,opacity:.88,shininess:1,specular:2236962}));g.rotation.x=Math.PI/2,g.position.z=l,v.add(g);const m=new $e,y=[],x=[],S=[];for(let A=0;A<=n;A+=1){const C=A/n*o,w=Math.round(A/n*t),M=a[w]/s;for(let L=0;L<=128;L+=1){const I=Math.PI*2*L/128,N=C*Math.cos(I),k=C*Math.sin(I);y.push(N,k,u);const B=Od(M,12105912);x.push(B.r,B.g,B.b)}}const E=129;for(let A=0;A<n;A+=1)for(let C=0;C<128;C+=1){const w=A*E+C,M=w+1,L=w+E,I=L+1;S.push(w,L,M,M,L,I)}if(m.setAttribute("position",new Ue(y,3)),m.setAttribute("color",new Ue(x,3)),m.setIndex(S),m.computeVertexNormals(),Kn=new Je(m,new Nr({vertexColors:!0,side:pt,transparent:!1,opacity:1,shininess:8,specular:2236962})),Kn.userData.rings=n,Kn.userData.samples=t,v.add(Kn),e.radialSide){const A=new Je(new Zr(o,o,Math.max(.1,d-u),160,1,!0),new U_({color:14149604,side:pt,transparent:!0,opacity:.24,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.28,ior:1.45,transmission:.08,specularIntensity:.5,specularColor:16777215}));A.rotation.x=Math.PI/2,A.position.z=(d+u)/2,A.renderOrder=2,v.add(A),v.add(Bc(o,d,16777215,.12)),v.add(Bc(o,u,16777215,.08));const C=new $e,w=[],M=[],L=[],I=e.radialSection?64:128,N=(e.radialSection,0),k=e.radialSection?Math.PI:Math.PI*2;for(let O=0;O<=n;O+=1){const H=O/n*o,G=Math.round(O/n*t),ne=a[G]/s,ae=d+ne*c;for(let re=0;re<=I;re+=1){const ee=N+k*re/I,pe=H*Math.cos(ee),q=H*Math.sin(ee);w.push(pe,q,ae);const te=Od(ne,11711154);M.push(te.r,te.g,te.b)}}const B=I+1;for(let O=0;O<n;O+=1)for(let H=0;H<I;H+=1){const G=O*B+H,ne=G+1,ae=G+B,re=ae+1;L.push(G,ae,ne,ne,ae,re)}C.setAttribute("position",new Ue(w,3)),C.setAttribute("color",new Ue(M,3)),C.setIndex(L),C.computeVertexNormals(),Xn=new Je(C,new Nr({vertexColors:!0,side:pt,transparent:!1,opacity:1,shininess:10,specular:3355443})),Xn.userData.rings=n,Xn.userData.samples=t,Xn.userData.sideAngles=I,v.add(Xn)}if(e.radialCurve){const A=[],C=f;for(let M=0;M<=t;M+=1){const L=o*M/t,I=C+a[M]/s*c;A.push(new D(L,0,I))}const w=A.slice(1).map(M=>new D(-M.x,0,M.z)).reverse();Jn=cy([...w,...A],16777215,e.radialSide?.013:.011),Jn.userData.samples=t,v.add(Jn)}if(e.radialAxis){const A=_;Qi=q_(o+.9,o+.45,A,e.radialMode),v.add(Qi)}_y(v,i,e,_n),Ea=v,ii.add(v),Qi=null,Ic=null,e.radialSide?(Ho=4.9,It.position.set(0,-7.2,d+1.25),It.lookAt(0,0,0),El(Ho),Ht.target.set(0,0,0),(T=Ht.handleResize)==null||T.call(Ht),Ht.update()):Qv(5.3),Na()}function $o(){vy();const i=(e,t,n,r,a)=>{var o;const s=e.getBoundingClientRect();s.width<2||s.height<2||(t.setSize(s.width,s.height,!1),t.domElement.style.width="100%",t.domElement.style.height="100%",n(a),(o=r.handleResize)==null||o.call(r),r.update())};i(p.viewer,ft,Ta,Ce,In),i(p.angularViewer,Di,Ca,Oe,Zt),i(p.projectionViewer,Qr,xf,Sn,yl),i(p.radialViewer,ea,El,Ht,Ho);for(const e of Ki)Pl(e,e.radius);K_(),sv()}function vy(){const i=document.querySelector(".sidebar"),e=i==null?void 0:i.querySelector(".sidebar-fit");if(!i)return;if(window.matchMedia("(max-width: 900px)").matches){document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");return}document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");const t=getComputedStyle(i),n=i.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),r=(e==null?void 0:e.scrollHeight)||i.scrollHeight;if(!n||!r||r<=n+4)return;const a=Math.max(.72,Math.min(1,(n-4)/r));document.documentElement.style.setProperty("--sidebar-zoom",a.toFixed(3)),document.documentElement.style.setProperty("--sidebar-fit-height",`${Math.ceil(r*a)}px`)}function bn(){requestAnimationFrame(()=>{$o(),requestAnimationFrame(()=>{$o(),Vo()})})}function Fd(){var i;De.annotationMode=!De.annotationMode,document.body.classList.toggle("annotation-mode",De.annotationMode),(i=p.annotationToolbar)==null||i.classList.toggle("closed",!De.annotationMode),De.annotationMode&&Yo(),Yn(De.annotationMode?"讲解标注：点击下方按钮添加标签，拖动标签调整位置。":"讲解标注已关闭。")}function yy(i){const t={正相:"orbital",负相:"orbital",节点:"orbital",投影平面:"projection",径向节点:"radial"}[i]||"orbital";return document.querySelector(`[data-annotation-layer="${t}"]`)}function My(i){return i==="正相"?"positive":i==="负相"?"negative":i==="节点"?"node":i==="投影平面"?"projection":i==="径向节点"?"radial":""}function zd(i){const e=yy(i);if(!e)return;const t=document.createElement("button");t.type="button",t.className=`annotation-note ${My(i)}`.trim(),t.textContent=i;const n=e.querySelectorAll(".annotation-note").length;t.style.left=`${12+n%4*12}%`,t.style.top=`${14+n%3*14}%`,e.appendChild(t)}function Bd(){for(const i of document.querySelectorAll(".annotation-layer"))i.replaceChildren()}function kd(i){var r;const e=i.target.closest(".annotation-note");if(!e||!De.annotationMode)return;i.preventDefault(),i.stopPropagation();const t=e.closest(".annotation-layer"),n=e.getBoundingClientRect();De.annotationDrag={note:e,layer:t,offsetX:i.clientX-n.left,offsetY:i.clientY-n.top},(r=e.setPointerCapture)==null||r.call(e,i.pointerId)}function Vd(i){const e=De.annotationDrag;if(!e)return;i.preventDefault();const t=e.layer.getBoundingClientRect(),n=e.note.getBoundingClientRect(),r=Math.max(0,Math.min(t.width-n.width,i.clientX-t.left-e.offsetX)),a=Math.max(0,Math.min(t.height-n.height,i.clientY-t.top-e.offsetY));e.note.style.left=`${r}px`,e.note.style.top=`${a}px`}function Gd(){De.annotationDrag=null}function Hd(){p.boxWindow&&(p.boxWindow.classList.remove("closed","minimized"),p.boxWindow.style.zIndex="126",Xr(p.boxWindow),bn())}function us(i){const[e,t,n]=i.split(",").map(Number);return{n:e,l:t,m:n}}function Sy(i){var o;if(!i)return null;let e=Ki.find(c=>c.container===i);if(e)return i.contains(e.renderer.domElement)||i.appendChild(e.renderer.domElement),e;const t=new $r;t.background=new ye(((o=p.backgroundColor)==null?void 0:o.value)||"#000000");const n=new nr(-5,5,5,-5,.1,2e3),r=new La({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.appendChild(r.domElement);const a=rr(n,r.domElement);Da(i,a),t.add(new Jr(16777215,.5));const s=new Pn(16777215,1.2);return s.position.set(0,0,80),t.add(s),e={container:i,scene:t,camera:n,renderer:r,controls:a,objects:[],radius:5,target:new D,resizeObserver:null,isLeader:!1},a.addEventListener("start",()=>{for(const c of Ki)c.isLeader=!1;e.isLeader=!0}),"ResizeObserver"in window&&(e.resizeObserver=new ResizeObserver(()=>Pl(e,e.radius)),e.resizeObserver.observe(i)),Ki.push(e),Ki.length===1&&(e.isLeader=!0),e}function wy(i){if(i){for(const e of i.objects)Nn(i.scene,e);i.objects=[]}}function Pl(i,e){var s,o;if(!i)return;const t=i.container.getBoundingClientRect();if(t.width<2||t.height<2)return;i.renderer.setSize(t.width,t.height,!1);const n=t.width/t.height,r=Math.max(3,e);n>=1?(i.camera.left=-r*n,i.camera.right=r*n,i.camera.top=r,i.camera.bottom=-r):(i.camera.left=-r,i.camera.right=r,i.camera.top=r/n,i.camera.bottom=-r/n),i.camera.near=.1,i.camera.far=Math.max(1e3,r*8);const a=i.target??new D;i.camera.position.set(a.x,a.y,a.z+Ci(r,40)),i.camera.lookAt(a),i.camera.updateProjectionMatrix(),i.controls.target.copy(a),(o=(s=i.controls).handleResize)==null||o.call(s),i.controls.update()}function by(i,e,t){const n=new En;let r=!1;for(const a of e){a.updateMatrixWorld(!0);const s=new En().setFromObject(a);Number.isFinite(s.min.x)&&Number.isFinite(s.min.y)&&Number.isFinite(s.min.z)&&Number.isFinite(s.max.x)&&Number.isFinite(s.max.y)&&Number.isFinite(s.max.z)&&(n.union(s),r=!0)}if(r){const a=n.getBoundingSphere(new Li);i.target.copy(a.center),i.radius=Math.max(2.5,t,a.radius*1.2)}else i.target.set(0,0,0),i.radius=Math.max(2.5,t);Pl(i,i.radius)}async function Zo(i,e,t,n){var v,g;const r=Sy(i);if(!r)return null;const a={...us(e),z:Number((v=p.z)==null?void 0:v.value)||1},s=Ii(a),o=Math.max(4,Math.min(10,s.radius*.08)),c=Math.min(78,Math.max(42,Math.round(s.gridSize*.72))),l={iso:s.iso,density:c,radius:s.radius,opacity:.96,smooth:!1,wireframe:!0,cutaway:"none",showPositive:!0,showNegative:!0,positiveColor:p.positiveColor.value,negativeColor:p.negativeColor.value,backgroundColor:((g=p.backgroundColor)==null?void 0:g.value)||"#000000"};r.scene.background=new ye(l.backgroundColor),wy(r);const u=await zc(0,a,l,1,l.positiveColor),h=await zc(1,a,l,-1,l.negativeColor),d=o/Math.max(1,s.radius);u.scale.multiplyScalar(d),h.scale.multiplyScalar(d);const f=ko(Math.max(1.6,o*.5));r.scene.add(u,h,f),r.objects.push(u,h,f),by(r,[u,h,f],o*1.45);const _=Un(a.n,a.l,a.m);return t&&(t.textContent=_),n&&(n.textContent=`${Go(a.n,a.l)}；n=${a.n}, l=${a.l}, |m|=${Math.abs(a.m)}`),{params:a,label:_,nodes:Go(a.n,a.l)}}async function kc(){var t,n;const i=await Zo(p.compareAViewer,(t=p.compareA)==null?void 0:t.value,p.compareATitle,p.compareANotes),e=await Zo(p.compareBViewer,(n=p.compareB)==null?void 0:n.value,p.compareBTitle,p.compareBNotes);if(i&&e&&p.compareSummary){const r=i.params.l===e.params.l&&Math.abs(i.params.m)===Math.abs(e.params.m);p.compareSummary.textContent=r?`${i.label} 与 ${e.label} 角向类型相同，重点比较径向节点随 n 增加的变化。`:`${i.label} 与 ${e.label} 角向类型不同，重点比较节点面方向、相位分布和对称性。`}}async function Vc(i){var e,t;return i==="a"?Zo(p.compareAViewer,(e=p.compareA)==null?void 0:e.value,p.compareATitle,p.compareANotes):i==="b"?Zo(p.compareBViewer,(t=p.compareB)==null?void 0:t.value,p.compareBTitle,p.compareBNotes):null}function ds(i){const e=us(i);p.n.value=e.n,p.l.value=e.l,p.m.value=Math.abs(e.m),p.cosType.checked=e.m>=0,p.sinType.checked=e.m<0,bt(),os(),Dt()}function Wd(i,e){var a,s,o,c;const t=us(i);ds(i),p.mainWindow&&(p.mainWindow.classList.remove("closed","minimized","maximized"),Xr(p.mainWindow)),p.positiveLobe&&(p.positiveLobe.checked=!0),p.negativeLobe&&(p.negativeLobe.checked=!0),p.wireframe&&p.smooth&&!p.wireframe.checked&&!p.smooth.checked&&(p.wireframe.checked=!0),bt(),Dt();const n=Vc(e),r=(n==null?void 0:n.label)||Un(t.n,t.l,t.m);p.compareSummary&&(p.compareSummary.textContent=`已载入主视图：${r}`),e==="a"?(s=(a=p.compareAViewer)==null?void 0:a.closest(".compare-view-card"))==null||s.scrollIntoView({block:"nearest",inline:"nearest"}):e==="b"&&((c=(o=p.compareBViewer)==null?void 0:o.closest(".compare-view-card"))==null||c.scrollIntoView({block:"nearest",inline:"nearest"})),bn()}function Gc(i){if(!p.activityWindow)return;const e=i||"predict";p.activityWindow.classList.remove("closed","minimized"),p.activityWindow.style.zIndex="125";for(const a of p.activityPanes??[]){const s=a.dataset.activityPane||a.id.replace(/Pane$/,"");a.classList.toggle("active",s===e)}for(const a of p.activityModeButtons??[])a.classList.toggle("active",a.dataset.activityMode===e);const t=document.querySelector(".client-panel"),n=document.querySelector(".view-grid");e==="challenge"||e==="predict"?(t&&(t.style.opacity="0.5",t.style.filter="blur(8px)",t.style.pointerEvents="none"),n&&(n.style.opacity="0.5",n.style.filter="blur(12px)",n.style.pointerEvents="none")):(t&&(t.style.opacity="1",t.style.filter="none",t.style.pointerEvents="auto"),n&&(n.style.opacity="1",n.style.filter="none",n.style.pointerEvents="auto"));const r={predict:"预测-验证模式",score:"预测评分",diagnosis:"错误诊断",nodes:"节点发现",compare:"轨道对比",challenge:"轨道配对挑战",explain:"原理演示",tablet:"平板课堂"};p.activityTitle&&(p.activityTitle.textContent=r[e]||"课堂互动"),Xr(p.activityWindow),bn(),e==="compare"&&requestAnimationFrame(()=>{kc(),bn()}),e==="explain"?requestAnimationFrame(()=>{Ua(De.explanationStep,{render:!1}),bn()}):(hs(),Af(null))}const wf=7200;function Ey(){const i=bt();return Un(i.n,i.l,i.m)}const Ay=["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"],Ty=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];function bf(i,e){return(i<0?"⁻":"")+String(Math.abs(i)).split("").map(n=>e[Number(n)]??n).join("")}function qd(i){return bf(i,Ay)}function Cy(i){return bf(i,Ty)}function Ry(i,e){return Un(Math.max(1,i+1),i,e).replace(/^\d+/,"")||`l=${i}, m=${e}`}pv({resizeAfterLayoutChange:bn,renderOrbital:Dt,applyPreset:xh,readParams:bt,downloadBlob:(i,e)=>{const t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=e,t.click(),URL.revokeObjectURL(t.href)},getCloudPositiveObject:()=>$n,getCloudNegativeObject:()=>Zn,getIsoMeshes:()=>[Nt,fn,Ur,bi].filter(Boolean)});function Ef(){const i=bt(),e=Un(i.n,i.l,i.m),t=i.n-i.l-1,n=i.l;return[{focus:"all",title:`先把 ${e} 看成一个波函数`,formula:"Ψ(r,θ,φ) = Rₙₗ(r) · Yₗᵐ(θ,φ)",text:"四个窗口不是四套不同的计算。它们都来自同一个 Ψ，只是观察方式不同：在空间中取等值面、在平面上取切片、沿半径取曲线，或只看角向部分。",observe:`当前轨道是 ${e}：n=${i.n} 决定尺度和径向层数，l=${i.l} 决定角向节点，m=${i.m} 决定方向和相位分区。`,reason:"先建立“同源”的概念，后面的每张图就不再是孤立图像，而是同一个函数的不同读法。",action:()=>{p.projection&&(p.projection.checked=!0),Dt()}},{focus:"orbital",title:"原子轨道：找出 Ψ 等于某个值的边界",formula:"Ψ(x,y,z) = +c  和  Ψ(x,y,z) = -c",text:"程序先在三维盒子里布满格点，逐点计算 Ψ。把数值等于正等值和负等值的位置连成曲面，就得到你看到的两个相位区域。",observe:"粉色和蓝色表示波函数符号相反，不表示电荷正负。网格越密，等值面越接近真实边界。",reason:"这一步回答“轨道外形怎么来”：它不是画出来的外壳，而是三维标量场中被等值面算法提取出来的边界。",action:()=>{Co({cloud:!1,wireframe:!0,smooth:!0,projection:!1,node:!1,box:!0})}},{focus:"projection",title:"轨道投影：把同一个 Ψ 放到一个平面上读",formula:"例如：z=0 时，观察 Ψ(x,y,0)",text:"投影窗口先选一个最能显示该轨道对称性的平面，再在平面上逐点计算 Ψ。上方曲面用高度表达数值大小，下方等高线表达相位和节点线。",observe:"看上方曲面的峰、谷，再对照下方等高线：峰对应密集的正相线，谷对应密集的负相线，白色过渡附近就是节点。",reason:"这一步把三维轨道压到二维平面，让学生更容易判断相位分区、节点线和方向。",action:()=>{p.projection&&(p.projection.checked=!0),p.box&&(p.box.checked=!0),p.wireframe&&(p.wireframe.checked=!0),p.smooth&&(p.smooth.checked=!1),Dt()}},{focus:"radial",title:"径向分布：只问电子离原子核多远",formula:"P(r) = r² · Rₙₗ(r)²",text:"径向分布函数暂时不关心方向，只沿半径统计概率。R 决定波函数随距离怎样振荡，r² 会把球壳体积因素加进去。",observe:`${e} 的径向节点数是 n-l-1 = ${t}。曲线下凹或接近零的位置，通常对应概率分布中的分层。`,reason:"这一步解释“为什么有的轨道外面还有一层”：那通常来自径向部分，而不是角向形状突然改变。",action:()=>{p.radialR&&(p.radialR.checked=!1),p.radialR2&&(p.radialR2.checked=!1),p.radialRdf&&(p.radialRdf.checked=!0),p.radialSection&&(p.radialSection.checked=!0),p.radialSide&&(p.radialSide.checked=!0),p.radialCurve&&(p.radialCurve.checked=!0),Dt()}},{focus:"angular",title:"角向函数：只看方向怎样分成正负相",formula:"Yₗᵐ(θ,φ) 决定方向、节面和相位",text:"角向函数把半径影响先拿掉，只保留方向上的变化。这样可以直接看到轨道为什么沿某些轴伸展，为什么中间会出现节面。",observe:`${e} 的角向节点数是 l = ${n}。这些节点决定了轨道方向上的分瓣方式。`,reason:"最后再回到原子轨道时，学生就能把外形拆开理解：径向部分决定层数，角向部分决定方向和分瓣。",action:()=>{p.projection&&(p.projection.checked=!1),p.node&&(p.node.checked=!0),p.longitudeNode&&(p.longitudeNode.checked=!0),p.wireframe&&(p.wireframe.checked=!0),Dt()}}]}function Af(i){var t;for(const n of document.querySelectorAll(".qt-window.teaching-focus"))n.classList.remove("teaching-focus");const e=i==="all"?["orbital","projection","radial","angular"]:[i];for(const n of e)(t=document.querySelector(`[data-window-name="${n}"]`))==null||t.classList.add("teaching-focus")}function Ll(i){p.explainProgressFill&&(p.explainProgressFill.style.width=`${Math.max(0,Math.min(1,i))*100}%`)}function Tf(){De.explanationTimer&&clearTimeout(De.explanationTimer),De.explanationFrame&&cancelAnimationFrame(De.explanationFrame),De.explanationTimer=null,De.explanationFrame=null}function Cf(){if(!De.explanationPlaying)return;const i=(performance.now()-De.explanationStartedAt)/wf;Ll(i),De.explanationFrame=requestAnimationFrame(Cf)}function Rf(){Tf(),De.explanationStartedAt=performance.now(),Cf(),De.explanationTimer=setTimeout(()=>{const i=Ef();if(De.explanationStep>=i.length-1){De.explanationPlaying=!1,p.explainPlayButton&&(p.explainPlayButton.textContent="播放"),Ll(1);return}Ua(De.explanationStep+1),De.explanationPlaying&&Rf()},wf)}function Ua(i,e={}){const t=Ef(),n=Math.max(0,Math.min(t.length-1,i)),r=t[n];De.explanationStep=n,p.explainStepBadge&&(p.explainStepBadge.textContent=`第 ${n+1} 步 / ${t.length} 步`),p.explainStepTitle&&(p.explainStepTitle.textContent=r.title),p.explainStepText&&(p.explainStepText.textContent=r.text),p.explainFormula&&(p.explainFormula.textContent=r.formula),p.explainObserveText&&(p.explainObserveText.textContent=r.observe),p.explainReasonText&&(p.explainReasonText.textContent=r.reason),p.explainHintText&&(p.explainHintText.textContent=`正在讲解 ${Ey()}。你可以暂停后旋转任意一个窗口，再继续播放。`),Af(r.focus),Ll(0),e.render!==!1&&r.action()}function Py(){De.explanationPlaying=!0,p.explainPlayButton&&(p.explainPlayButton.textContent="暂停"),Ua(De.explanationStep),Rf()}function hs(){De.explanationPlaying=!1,p.explainPlayButton&&(p.explainPlayButton.textContent="播放"),Tf()}function Xd(){De.explanationPlaying?hs():Py()}function Yd(){hs(),De.explanationStep=0,Ua(0)}function jd(i){hs(),Ua(De.explanationStep+i)}function Co(i){i.cloud!=null&&p.cloud&&(p.cloud.checked=i.cloud),i.wireframe!=null&&p.wireframe&&(p.wireframe.checked=i.wireframe),i.smooth!=null&&p.smooth&&(p.smooth.checked=i.smooth),i.projection!=null&&p.projection&&(p.projection.checked=i.projection),i.node!=null&&(p.node&&(p.node.checked=i.node),p.radialNode&&(p.radialNode.checked=i.node),p.polarNode&&(p.polarNode.checked=i.node),p.longitudeNode&&(p.longitudeNode.checked=i.node)),i.box!=null&&p.box&&(p.box.checked=i.box),i.grid3d!=null&&p.grid3d&&(p.grid3d.checked=i.grid3d),Dt()}function Ly(){return Wt.find(i=>{var e;return i.value===((e=p.predictTarget)==null?void 0:e.value)})||De.challengeTarget||Wt[0]}function $d(){const i=Ly(),e=us(i.value),t=e.n-e.l-1,n=e.l,r=Math.max(60,100-t*4-n*3);p.scorePrompt&&(p.scorePrompt.textContent=`${i.label} 参考评分：${r} 分。检查点：径向节点 ${t} 个，角向节点 ${n} 个，相位正负分区清楚，方向与坐标轴一致。`),ds(i.value)}function Zd(){p.scorePrompt&&(p.scorePrompt.textContent="评分标准：节点数 30 分，相位颜色 25 分，空间方向 25 分，投影/截面对应关系 20 分。")}function Kd(){p.scorePrompt&&(p.scorePrompt.textContent="评分会根据当前目标轨道给出节点数、相位、方向和投影四项课堂反馈。")}function Jd(i){i==="nodes"?(Co({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!0}),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="节点诊断：观察径向节点数 n-l-1 与角向节点数 l 是否匹配。")):i==="phase"?(Co({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!1}),p.positiveLobe&&(p.positiveLobe.checked=!0),p.negativeLobe&&(p.negativeLobe.checked=!0),Dt(),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="相位诊断：紫色/青色两相表示波函数符号相反，不代表电荷正负。")):(Co({cloud:!1,wireframe:!0,smooth:!1,projection:!0,node:!1,box:!0}),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="投影诊断：对照上方波函数曲面与底部等高线，判断节点线和相位区。"))}function Qd(i){document.body.classList.toggle("tablet-mode",i),i?(Qo("tile"),Gc("tablet"),Yn("平板课堂：已放大按钮和触控区域。")):Yn("已恢复普通课堂布局。"),bn()}function eh(){const i=Wt.find(e=>e.value===p.predictTarget.value)??Wt[0];Ac(),et.strokes=[],et.currentStroke=null,ta(),p.predictPrompt&&(p.predictPrompt.textContent=`请先在画板中预测 ${i.label} 的形状、相位和节面，再点击“显示验证”。`)}function th(){const i=Wt.find(e=>e.value===p.predictTarget.value)??Wt[0];ds(i.value),p.predictPrompt&&(p.predictPrompt.textContent=`已显示 ${i.label}。请对照画板预测与四个窗口中的真实结果。`)}function nh(){const i=Math.floor(Math.random()*Wt.length);De.challengeTarget=Wt[i],ds(De.challengeTarget.value),setTimeout(()=>{p.viewerTitle&&(p.viewerTitle.textContent="原子轨道  ?")},120),p.challengePrompt&&(p.challengePrompt.textContent="观察当前四个窗口中的图像，选择你认为对应的轨道名称。")}function ih(){const i=De.challengeTarget||Wt[0],e=Wt.find(r=>r.value===p.challengeGuess.value),t=(e==null?void 0:e.value)===i.value;De.challengeTotal+=1,t&&(De.challengeCorrect+=1);const n=`（累计 ${De.challengeCorrect}/${De.challengeTotal}）`;p.viewerTitle&&(p.viewerTitle.textContent=`原子轨道  ${i.label}`),p.challengePrompt&&(p.challengePrompt.textContent=t?`回答正确：这是 ${i.label}。`:`还不对。你的答案是 ${(e==null?void 0:e.label)??""}，正确答案是 ${i.label}。`),Yn(`轨道配对 ${n}`)}function Pf(){Av(performance.now()*.001),ei&&mv(performance.now()),Ce.update(),Oe.update(),Sn.update(),Ht.update(),ey(),ft.render(ut,st),Di.render(zt,lt),Qr.render(ni,Pt),ea.render(ii,It);for(const i of Ki)i.controls.update(),i.renderer.render(i.scene,i.camera);requestAnimationFrame(Pf)}_v();for(const i of[p.n,p.l,p.m,p.z,p.iso,p.density,p.radius,p.opacity,p.mode,p.slice,p.node,p.axis,p.box,p.positiveColor,p.negativeColor,p.backgroundColor,p.desktopMatch,p.boxSizeDisplay,p.cloud,p.positiveLobe,p.negativeLobe,p.wireframe,p.smooth,p.projection,p.radialSection,p.radialSide,p.radialCurve,p.radialAxis,p.radialNode,p.polarNode,p.longitudeNode,p.grid3d,p.relationMode,p.syncRotation,p.scanRadius,p.scanTheta,p.scanPhi,p.scanSliceZ])i&&i.addEventListener("input",()=>{if(i===p.boxSizeDisplay&&Ev(),bt(),rn(),i===p.backgroundColor){Ml(p.backgroundColor.value);return}if(i===p.relationMode){Aa(),Ra(bt(),rn());return}if([p.syncRotation,p.scanRadius,p.scanTheta,p.scanPhi,p.scanSliceZ].includes(i)){if(p.relationMode.checked||(p.relationMode.checked=!0,Aa(),Ra(bt(),rn())),Na(),i===p.scanSliceZ){const e=bt(),t=rn();if(bl(),Cl(e,t),t.showProjection3d&&typeof Nt<"u"&&Nt){const n=Nt.children.find(a=>a.name==="integratedProjection3DGroup");n&&(Nt.remove(n),typeof Nn=="function"&&Nn(typeof ut<"u"?ut:null,n));const r=Sf(e,t);r.name="integratedProjection3DGroup",r.visible=!0,Nt.add(r)}}return}if(![p.wireframe,p.smooth].includes(i)){if([p.axis,p.box].includes(i)){qc();return}(i.type==="checkbox"||i.type==="color")&&Dt(!1)}});for(const i of[p.n,p.l,p.m,p.z,p.desktopMatch])i.addEventListener("change",()=>{os(),Dt(!0)});p.preset.addEventListener("input",xh);p.renderButton.addEventListener("click",()=>Dt(!0));var ah;(ah=p.redrawProxyButton)==null||ah.addEventListener("click",()=>Dt(!0));var oh;(oh=p.presetButton)==null||oh.addEventListener("click",()=>{os(),Dt(!0)});var sh;(sh=p.axisProxyButton)==null||sh.addEventListener("click",()=>{Xc()});var ch;(ch=document.querySelector("#colorProxyButton"))==null||ch.addEventListener("click",()=>{p.paletteOne.checked=!p.paletteOne.checked,p.paletteTwo.checked=!p.paletteOne.checked,_h(p.paletteOne.checked?"one":"two")});p.resetCameraButton.addEventListener("click",()=>jo());p.screenshotButton.addEventListener("click",Jo);for(const i of document.querySelectorAll("[data-window-action]"))i.addEventListener("click",e=>{e.stopPropagation(),Hf(i)});for(const i of p.menuItems)i.addEventListener("click",e=>{e.stopPropagation(),Vf(i)});document.addEventListener("click",an);p.menuPopup.addEventListener("click",i=>i.stopPropagation());var lh;(lh=p.toolRender)==null||lh.addEventListener("click",()=>{an(),Dt()});var uh;(uh=p.toolSave)==null||uh.addEventListener("click",()=>{an(),Jo()});var dh;(dh=p.toolTile)==null||dh.addEventListener("click",()=>{an(),Qo("tile")});var hh;(hh=p.toolOverlap)==null||hh.addEventListener("click",()=>{an(),Qo("overlap")});var fh;(fh=p.toolAxis)==null||fh.addEventListener("click",()=>{console.log("[DEBUG] User clicked #toolAxis button."),an(),Xc()});var ph;(ph=p.toolXOY)==null||ph.addEventListener("click",()=>{an(),Yc("xoy")});var mh;(mh=p.toolYOZ)==null||mh.addEventListener("click",()=>{an(),Yc("yoz")});var gh;(gh=p.toolXOZ)==null||gh.addEventListener("click",()=>{an(),Yc("xoz")});setTimeout(()=>{j_(),ft.domElement.addEventListener("click",gy),window.addEventListener("resize",$o),Ml(),Ff(),ev(),yh(),Sv(),$o(),Qo("tile"),os(),jo(),Dt(!0),Pf()},0);function Dy(){return bt(),[{focus:"cloud",title:"第一步：电子云的形成",text:"根据概率密度分布，电子在原子核周围逐渐显现，形成浓密的电子云。"},{focus:"isosurface",title:"第二步：原子轨道实体化",text:"从电子云中提取特定概率的等势面，形成光滑的三维原子轨道轮廓。"},{focus:"slice_projection",title:"第三步：动态切片与投影",text:"对原子轨道进行切片，并将其截面映射为 2D 与 3D 的概率密度投影图。"},{focus:"formula",title:"第四步：径向与角向推导",text:"结合波函数公式，揭示轨道的径向分布函数与角向球面谐和函数构成。"}]}function Wi(i,e){let t=Math.sin(i*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)}let un,er,Fr,vn,mi=[],Ko,be,Hc=!1,pi;function Iy(){if(Hc)return;un=new $r,er=new cn(45,1,.1,1e3),er.position.set(0,0,40),Fr=new G_(er,p.animationCanvas),Fr.enableDamping=!0,Fr.dampingFactor=.05;const i=new Jr(16777215,.2);un.add(i),un.add(new dl(16777215,1447446,.3));const e=new Pn(16777215,1.8);e.position.set(20,30,50),un.add(e);const t=new Pn(16777215,1);t.position.set(-20,-20,40),un.add(t);const n=new Pn(16777215,.6);n.position.set(0,-30,50),un.add(n),Hc=!0}function Ny(){const i=p.animationCanvas.parentElement.getBoundingClientRect(),e=Math.max(300,Math.round(i.width)),t=Math.max(300,Math.round(i.height)),n=p.animationCanvas;return(n.width!==e||n.height!==t)&&(n.width=e,n.height=t),er.aspect=e/t,er.updateProjectionMatrix(),typeof Fr.handleResize=="function"&&Fr.handleResize(),{width:e,height:t}}function Uy(){if(!un)return;for(;un.children.length>2;)un.remove(un.children[2]);be=new dt,un.add(be);const i=bt(),e=rn(),t=Ii(i),n=Math.min(e.radius,Math.max(5,t.leastRadius+1.2)),r=new $e,a=[],s=[],o=[];let c=0;for(let y=0;y<500;y++){const x=(Wi(y,11)*2-1)*n,S=(Wi(y,12)*2-1)*n,E=(Wi(y,13)*2-1)*n;x*x+S*S+E*E<=n*n&&(c=Math.max(c,Math.abs(jt(i,x,S,E))))}for(let y=0;y<15e3;y++){const x=(Wi(y,21)*2-1)*n,S=(Wi(y,22)*2-1)*n,E=(Wi(y,23)*2-1)*n;if(x*x+S*S+E*E>n*n)continue;const T=jt(i,x,S,E),A=(Math.abs(T)/Math.max(c,1e-8))**2;a.push(x,S,E);const C=T>=0?[1,.17,.84]:[0,.84,1];s.push(...C),o.push(A)}r.setAttribute("position",new Ue(a,3)),r.setAttribute("color",new Ue(s,3));const l=new Zh({size:.35,vertexColors:!0,transparent:!0,opacity:1});vn=new Kh(r,l),vn.userData={origPos:new Float32Array(a),probs:o},be.add(vn);const u=Nt?Nt.clone():new dt,h=fn?fn.clone():new dt,d=Math.max(2,Math.min(6,n)),f=Math.max(1,t.leastRadius+1.2),_=d/f;u.scale.set(1/_,1/_,1/_),h.scale.set(1/_,1/_,1/_),Ko=new Ze(new D(0,-1,0),n);const v=y=>{y.isMesh&&(y.material=y.material.clone(),y.material.transparent=!0,y.material.opacity=0,y.material.clippingPlanes=[Ko])};if(u.traverse(v),h.traverse(v),be.add(u),be.add(h),mi=[u,h],be.userData.animProjSurface=null,be.userData.animProjContour=null,bi&&Gt){const y=bi.clone();y.traverse(x=>{x.material&&(x.material=x.material.clone(),x.material.transparent=!0,x.material.opacity=0)}),be.userData.animProjSurface=y,be.add(y)}be.userData.animAngularGroup=new dt;const g=new Ze(new D(0,0,-1),0);be.userData.angularClipPlane=g,[Wn,qn,Or].forEach(y=>{if(y){const x=y.clone();x.traverse(S=>{S.geometry&&(S.geometry=S.geometry.clone(),S.userData.origIndexCount=S.geometry.index?S.geometry.index.count:S.geometry.attributes.position.count),S.material&&(S.material=S.material.clone(),S.material.transparent=!0,S.material.opacity=0,S.material.clippingPlanes=[g],S.material.needsUpdate=!0)}),be.userData.animAngularGroup.add(x)}}),be.add(be.userData.animAngularGroup),be.userData.animRadialGroup=null;const m=new Ze(new D(-1,0,0),0);if(be.userData.radialClipPlane=m,Ea){const y=Ea.clone();y.traverse(x=>{x.geometry&&(x.geometry=x.geometry.clone(),x.userData.origIndexCount=x.geometry.index?x.geometry.index.count:x.geometry.attributes.position.count),x.material&&(x.material=x.material.clone(),x.material.transparent=!0,x.material.opacity=0,x.material.clippingPlanes=[m],x.material.needsUpdate=!0)}),be.userData.animRadialGroup=y,be.add(y)}be.scale.setScalar(12/n)}function Wc(i){Hc||Iy();const{width:e,height:t}=Ny();be||Uy(),Fr.update();const n=De.animationStep;Dy();const r=performance.now()-(De.currentStepStartTime||De.animationStartedAt||performance.now()),a=Math.min(1,r/4e3);document.getElementById("animFormulaOverlay").style.display="none";const s=vn.userData.probs.length,o=vn.geometry.attributes.position,c=vn.userData.origPos,l=vn.userData.probs,u=performance.now()/1e3;let h=0;if(n===0?h=Math.floor(s*a):n===1&&(h=s),n<=1){vn.visible=!0,vn.geometry.setDrawRange(0,h),vn.material.opacity=n===0?1:Math.max(0,1-a*2);for(let E=0;E<h;E++)Wi(E,Math.floor(u*4)+31)>l[E]*.9?o.array[E*3]=9999:(o.array[E*3]=c[E*3],o.array[E*3+1]=c[E*3+1],o.array[E*3+2]=c[E*3+2]);o.needsUpdate=!0}else vn.visible=!1;if(Ko.constant=100,mi.forEach(E=>E.position.x=0),be.userData.animProjSurface&&(be.userData.animProjSurface.traverse(E=>{E.material&&(E.material.opacity=0)}),be.userData.animProjContour&&(be.userData.animProjContour.material.opacity=0)),be.userData.animAngularGroup&&be.userData.animAngularGroup.traverse(E=>{E.material&&(E.material.opacity=0)}),be.userData.animRadialGroup&&be.userData.animRadialGroup.traverse(E=>{E.material&&(E.material.opacity=0)}),n===0)mi.forEach(E=>E.traverse(T=>{T.isMesh&&(T.material.opacity=0)}));else if(n===1)mi.forEach(E=>E.traverse(T=>{T.isMesh&&(T.material.opacity=a)}));else if(n===2){mi.forEach(L=>L.traverse(I=>{I.isMesh&&(I.material.opacity=1)}));const E=new En().setFromObject(mi[0]||be),T=E.max.y/be.scale.y,A=E.min.y/be.scale.y,C=Math.min(1,a/.4);Ko.constant=T-(T-A+.1)*C;const w=be.userData.animProjSurface,M=be.userData.animProjContour;if(w){const I=(Gt?Gt.radius:5)*1.2;mi.forEach(H=>{H.position.x=-I}),w.position.x=I,M&&(M.position.x=I),w.rotation.x=-Math.PI/2,M&&(M.rotation.x=-Math.PI/2);const N=Math.max(0,Math.min(1,(a-.4)/.3));w.traverse(H=>{H.material&&(H.material.opacity=N*(H.isLineSegments?.5:.98))}),M&&(M.material.opacity=N*.5);const B=.01+.99*Math.max(0,Math.min(1,(a-.7)/.3));w.scale.set(1,1,B),M&&M.scale.set(1,1,B);const O=Gt.surfaceZ||0;w.position.y=O*(1-B),M&&(M.position.y=O*(1-B))}}else if(n===3){let L=function(I){const N=new En,k=new ct;I.updateMatrixWorld(!0);const B=new ct().copy(I.matrixWorld).invert();return I.traverse(O=>{if(O.geometry){O.geometry.boundingBox||O.geometry.computeBoundingBox();const H=O.geometry.boundingBox.clone();k.multiplyMatrices(B,O.matrixWorld),H.applyMatrix4(k),N.union(H)}}),N};mi.forEach(I=>I.traverse(N=>{N.isMesh&&(N.material.opacity=1)})),document.getElementById("animFormulaOverlay").style.display="flex";const E=af(bt());document.getElementById("animFormulaEq").innerHTML=E.main,document.getElementById("animFormulaRadial").innerHTML="R(r): 径向部分",document.getElementById("animFormulaAngular").innerHTML="Y(θ,φ): 角向部分";const T=Math.max(0,Math.min(1,a/.6)),A=Math.max(0,Math.min(1,(a-.2)/.6)),C=Gt?Gt.radius:5;er.position.z=Math.max(50,C*8.5);const w=C*2.8,M=1.2;if(be.userData.animRadialGroup){const I=-w*T;if(be.userData.animRadialGroup.position.x=I,be.userData.animRadialGroup.position.y=-C*.4,be.userData.animRadialGroup.scale.setScalar(M),be.userData.animRadialGroup.rotation.x=Math.PI/5,be.userData.animRadialGroup.rotation.y=-Math.PI/4,be.userData.radialClipPlane){if(be.userData.radialBounds===void 0){const O=L(be.userData.animRadialGroup);let H=O.min.x,G=O.max.x;H===1/0&&(H=-3.7,G=3.7),be.userData.radialBounds={min:H,max:G}}const N=be.userData.radialBounds,k=N.min+(N.max-N.min)*A,B=new Ze(new D(-1,0,0),k);be.userData.animRadialGroup.updateMatrixWorld(!0),B.applyMatrix4(be.userData.animRadialGroup.matrixWorld),be.userData.radialClipPlane.copy(B)}be.userData.animRadialGroup.traverse(N=>{N.material&&(N.material.opacity=N.isLineSegments?.5:.95)})}if(be.userData.animAngularGroup){const I=w*T;if(be.userData.animAngularGroup.position.x=I,be.userData.animAngularGroup.position.y=-C*.4,be.userData.animAngularGroup.scale.setScalar(M),be.userData.animAngularGroup.rotation.x=Math.PI/6,be.userData.animAngularGroup.rotation.y=Math.PI/6,be.userData.angularClipPlane){if(be.userData.angularBounds===void 0){const O=L(be.userData.animAngularGroup);let H=O.min.z,G=O.max.z;H===1/0&&(H=-3.5,G=3.5),be.userData.angularBounds={min:H,max:G}}const N=be.userData.angularBounds,k=N.min+(N.max-N.min)*A,B=new Ze(new D(0,0,-1),k);be.userData.animAngularGroup.updateMatrixWorld(!0),B.applyMatrix4(be.userData.animAngularGroup.matrixWorld),be.userData.angularClipPlane.copy(B)}be.userData.animAngularGroup.traverse(N=>{N.material&&(N.material.opacity=N.isLineSegments?.5:.95)})}}(!pi||pi.width!==e||pi.height!==t)&&(pi&&pi.dispose(),pi=new Ai(e,t,{alpha:!0,colorSpace:nn}));const d=ft.getRenderTarget(),f=ft.getClearColor(new ye),_=ft.getClearAlpha(),v=ft.localClippingEnabled;ft.setRenderTarget(pi),ft.setClearColor(0,0),ft.localClippingEnabled=!0,ft.clear(),ft.render(un,er),ft.setRenderTarget(d),ft.setClearColor(f,_),ft.localClippingEnabled=v;const m=p.animationCanvas.getContext("2d",{willReadFrequently:!0}),y=new Uint8Array(e*t*4);ft.readRenderTargetPixels(pi,0,0,e,t,y);const x=new ImageData(new Uint8ClampedArray(y),e,t),S=document.createElement("canvas");S.width=e,S.height=t,S.getContext("2d").putImageData(x,0,0),m.save(),m.clearRect(0,0,e,t),m.scale(1,-1),m.drawImage(S,0,-t),m.restore()}function Oy(){De.animationTimer&&clearTimeout(De.animationTimer),De.animationFrame&&cancelAnimationFrame(De.animationFrame),De.animationTimer=null,De.animationFrame=null}function rh(){De.animationPlaying=!1,p.animationPlayButton&&(p.animationPlayButton.textContent="播放"),Oy()}Uf({readParams:typeof bt<"u"?bt:null,renderOrbital:typeof Dt<"u"?Dt:null,clearRadialObjects:typeof Aa<"u"?Aa:null,renderRadialView:typeof Ra<"u"?Ra:null,readOptions:typeof rn<"u"?rn:null,renderer:typeof ft<"u"?ft:null,scene:typeof ut<"u"?ut:null,camera:typeof st<"u"?st:null,reopenViewWindows:typeof Yo<"u"?Yo:null,resetCamera:typeof jo<"u"?jo:null,resetAngularCamera:typeof Nd<"u"?Nd:null,setAxesVisibility:typeof Ec<"u"?Ec:null,boxObject:typeof qr<"u"?qr:null,radialAxisObject:typeof Qi<"u"?Qi:null,cameraDistanceForRadius:typeof Ci<"u"?Ci:null,updateCameraFrustum:typeof Ta<"u"?Ta:null,updateAngularFrustum:typeof Ca<"u"?Ca:null,angularControls:typeof Oe<"u"?Oe:null,angularCamera:typeof lt<"u"?lt:null,showActivityPane:typeof Gc<"u"?Gc:null,openSketchWindow:typeof Ac<"u"?Ac:null,startPrediction:typeof eh<"u"?eh:null,verifyPrediction:typeof th<"u"?th:null,scoreCurrentPrediction:typeof $d<"u"?$d:null,showScoreRubric:typeof Zd<"u"?Zd:null,resetScorePrompt:typeof Kd<"u"?Kd:null,runDiagnosis:typeof Jd<"u"?Jd:null,renderOrbitalComparison:typeof kc<"u"?kc:null,renderCompareSlot:typeof Vc<"u"?Vc:null,loadCompareTargetToMain:typeof Wd<"u"?Wd:null,newChallenge:typeof nh<"u"?nh:null,revealChallenge:typeof ih<"u"?ih:null,restartExplanation:typeof Yd<"u"?Yd:null,moveExplanationStep:typeof jd<"u"?jd:null,toggleExplanationPlayback:typeof Xd<"u"?Xd:null,setTabletMode:typeof Qd<"u"?Qd:null,playCinematicAnimation:typeof Rc<"u"?Rc:null,toggleCinematicPlayback:typeof Cd<"u"?Cd:null,exportCinematicVideo:typeof Rd<"u"?Rd:null,stopCinematicAnimation:typeof Pc<"u"?Pc:null,openFormulaWindow:typeof openFormulaWindow<"u"?openFormulaWindow:null,clearAnnotations:typeof Bd<"u"?Bd:null,addAnnotation:typeof zd<"u"?zd:null,beginAnnotationDrag:typeof kd<"u"?kd:null,continueAnnotationDrag:typeof Vd<"u"?Vd:null,endAnnotationDrag:typeof Gd<"u"?Gd:null,recoverAllViewerControls:typeof Vo<"u"?Vo:null,refreshAllViewerControls:typeof yd<"u"?yd:null,activityState:typeof De<"u"?De:null,toggleAnnotationMode:typeof Fd<"u"?Fd:null,resizeAfterLayoutChange:typeof bn<"u"?bn:null,openBoxWindow:typeof Hd<"u"?Hd:null,getCurrentAngularRadius:()=>typeof Zt<"u"?Zt:4,getCurrentViewRadius:()=>typeof In<"u"?In:10,pauseGenerationAnimation:typeof rh<"u"?rh:null,drawGenerationAnimation:typeof Wc<"u"?Wc:null});
