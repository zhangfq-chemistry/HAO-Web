(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const A={viewer:document.querySelector("#viewer"),angularViewer:document.querySelector("#angularViewer"),projectionViewer:document.querySelector("#projectionViewer"),radialViewer:document.querySelector("#radialViewer"),viewGrid:document.querySelector(".view-grid"),mainWindow:document.querySelector(".main-window"),menuPopup:document.querySelector("#menuPopup"),menuItems:document.querySelectorAll(".menu-item"),toolRender:document.querySelector("#toolRender"),toolSave:document.querySelector("#toolSave"),toolTile:document.querySelector("#toolTile"),toolOverlap:document.querySelector("#toolOverlap"),toolAxis:document.querySelector("#toolAxis"),toolXOY:document.querySelector("#toolXOY"),toolYOZ:document.querySelector("#toolYOZ"),toolXOZ:document.querySelector("#toolXOZ"),preset:document.querySelector("#presetInput"),cosType:document.querySelector("#cosTypeInput"),sinType:document.querySelector("#sinTypeInput"),cloud:document.querySelector("#cloudInput"),positiveLobe:document.querySelector("#positiveLobeInput"),negativeLobe:document.querySelector("#negativeLobeInput"),wireframe:document.querySelector("#wireframeInput"),smooth:document.querySelector("#smoothInput"),projection:document.querySelector("#projectionInput"),projection3d:document.querySelector("#projection3dInput"),paletteOne:document.querySelector("#paletteOneInput"),paletteTwo:document.querySelector("#paletteTwoInput"),xySlice:document.querySelector("#xySliceInput"),yzSlice:document.querySelector("#yzSliceInput"),xzSlice:document.querySelector("#xzSliceInput"),quarter:document.querySelector("#quarterInput"),eighth:document.querySelector("#eighthInput"),threeQuarter:document.querySelector("#threeQuarterInput"),radialR:document.querySelector("#radialRInput"),radialR2:document.querySelector("#radialR2Input"),radialRdf:document.querySelector("#radialRdfInput"),radialSection:document.querySelector("#radialSectionInput"),radialSide:document.querySelector("#radialSideInput"),radialCurve:document.querySelector("#radialCurveInput"),radialAxis:document.querySelector("#radialAxisInput"),radialNode:document.querySelector("#radialNodeInput"),polarNode:document.querySelector("#polarNodeInput"),relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue"),longitudeNode:document.querySelector("#longitudeNodeInput"),grid3d:document.querySelector("#grid3dInput"),desktopMatch:document.querySelector("#desktopMatchInput"),n:document.querySelector("#nInput"),l:document.querySelector("#lInput"),m:document.querySelector("#mInput"),z:document.querySelector("#zInput"),mode:document.querySelector("#modeInput"),slice:document.querySelector("#sliceInput"),node:document.querySelector("#nodeInput"),axis:document.querySelector("#axisInput"),box:document.querySelector("#boxInput"),positiveColor:document.querySelector("#positiveColorInput"),negativeColor:document.querySelector("#negativeColorInput"),backgroundColor:document.querySelector("#backgroundColorInput"),iso:document.querySelector("#isoInput"),density:document.querySelector("#densityInput"),radius:document.querySelector("#radiusInput"),boxSizeDisplay:document.querySelector("#boxSizeDisplay"),intervalValue:document.querySelector("#intervalValue"),probabilityValue:document.querySelector("#probabilityValue"),opacity:document.querySelector("#opacityInput"),isoValue:document.querySelector("#isoValue"),densityValue:document.querySelector("#densityValue"),radiusValue:document.querySelector("#radiusValue"),opacityValue:document.querySelector("#opacityValue"),renderButton:document.querySelector("#renderButton"),axisProxyButton:document.querySelector("#axisProxyButton"),presetButton:document.querySelector("#presetButton"),redrawProxyButton:document.querySelector("#redrawProxyButton"),resetCameraButton:document.querySelector("#resetCameraButton"),screenshotButton:document.querySelector("#screenshotButton"),orbitalName:document.querySelector("#orbitalName"),viewerTitle:document.querySelector("#viewerTitle"),statusText:document.querySelector("#statusText"),posCount:document.querySelector("#posCount"),negCount:document.querySelector("#negCount"),nodeText:document.querySelector("#nodeText"),sliceText:document.querySelector("#sliceText"),boxText:document.querySelector("#boxText"),isoText:document.querySelector("#isoText"),openActivityButton:document.querySelector("#openActivityButton"),annotationModeButton:document.querySelector("#annotationModeButton"),annotationToolbar:document.querySelector("#annotationToolbar"),annotationClearButton:document.querySelector("#annotationClearButton"),openSketchButton:document.querySelector("#openSketchButton"),openAnimationButton:document.querySelector("#openAnimationButton"),openPredictButton:document.querySelector("#openPredictButton"),openChallengeButton:document.querySelector("#openChallengeButton"),sketchWindow:document.querySelector("#sketchWindow"),boxWindow:document.querySelector("#boxWindow"),paletteWindow:document.querySelector("#paletteWindow"),animationWindow:document.querySelector("#animationWindow"),animationCanvas:document.querySelector("#animationCanvas"),animationStepBadge:document.querySelector("#animationStepBadge"),animationTitle:document.querySelector("#animationTitle"),animationText:document.querySelector("#animationText"),animationProgressFill:document.querySelector("#animationProgressFill"),animationRestartButton:document.querySelector("#animationRestartButton"),animationPrevButton:document.querySelector("#animationPrevButton"),animationPlayButton:document.querySelector("#animationPlayButton"),animationNextButton:document.querySelector("#animationNextButton"),animationExportButton:document.querySelector("#animationExportButton"),animationExportOverlay:document.querySelector("#animationExportOverlay"),confirmExportButton:document.querySelector("#confirmExportButton"),cancelExportButton:document.querySelector("#cancelExportButton"),activityWindow:document.querySelector("#activityWindow"),activityTitle:document.querySelector("#activityTitle"),activityModeButtons:document.querySelectorAll("[data-activity-mode]"),activityPanes:document.querySelectorAll(".activity-pane"),predictPane:document.querySelector("#predictPane"),scorePane:document.querySelector("#scorePane"),diagnosisPane:document.querySelector("#diagnosisPane"),nodesPane:document.querySelector("#nodesPane"),comparePane:document.querySelector("#comparePane"),challengePane:document.querySelector("#challengePane"),tabletPane:document.querySelector("#tabletPane"),predictTarget:document.querySelector("#predictTargetInput"),startPredictButton:document.querySelector("#startPredictButton"),verifyPredictButton:document.querySelector("#verifyPredictButton"),clearPredictButton:document.querySelector("#clearPredictButton"),predictCanvas:document.querySelector("#predictCanvas"),predictResultImage:document.querySelector("#predictResultImage"),predictPenButton:document.querySelector("#predictPenButton"),predictEraserButton:document.querySelector("#predictEraserButton"),predictColorInput:document.querySelector("#predictColorInput"),predictSizeInput:document.querySelector("#predictSizeInput"),predictPrompt:document.querySelector("#predictPrompt"),quizRadialInput:document.querySelector("#quizRadialInput"),quizAngularInput:document.querySelector("#quizAngularInput"),scoreCurrentButton:document.querySelector("#scoreCurrentButton"),scorePrompt:document.querySelector("#scorePrompt"),diagnoseNodesButton:document.querySelector("#diagnoseNodesButton"),diagnosePhaseButton:document.querySelector("#diagnosePhaseButton"),diagnoseProjectionButton:document.querySelector("#diagnoseProjectionButton"),diagnosisPrompt:document.querySelector("#diagnosisPrompt"),nodeRevealButton:document.querySelector("#nodeRevealButton"),nodeHideButton:document.querySelector("#nodeHideButton"),compareA:document.querySelector("#compareAInput"),compareB:document.querySelector("#compareBInput"),compareApplyButton:document.querySelector("#compareApplyButton"),compareLoadAButton:document.querySelector("#compareLoadAButton"),compareLoadBButton:document.querySelector("#compareLoadBButton"),compareAViewer:document.querySelector("#compareAViewer"),compareBViewer:document.querySelector("#compareBViewer"),compareATitle:document.querySelector("#compareATitle"),compareBTitle:document.querySelector("#compareBTitle"),compareANotes:document.querySelector("#compareANotes"),compareBNotes:document.querySelector("#compareBNotes"),compareSummary:document.querySelector("#compareSummary"),newChallengeButton:document.querySelector("#newChallengeButton"),challengeGuess:document.querySelector("#challengeGuessInput"),revealChallengeButton:document.querySelector("#revealChallengeButton"),challengePrompt:document.querySelector("#challengePrompt"),explainFormula:document.querySelector("#explainFormula"),sketchCanvas:document.querySelector("#sketchCanvas"),sketchColor:document.querySelector("#sketchColorInput"),sketchSize:document.querySelector("#sketchSizeInput"),sketchPen:document.querySelector("#sketchPenButton"),sketchEraser:document.querySelector("#sketchEraserButton"),sketchClear:document.querySelector("#sketchClearButton"),tabletLargeButton:document.querySelector("#tabletLargeButton"),tabletRestoreButton:document.querySelector("#tabletRestoreButton"),tabletScreenshotButton:document.querySelector("#tabletScreenshotButton")};function Kr(i,e){var n,r;if(!e||e.classList.contains("maximized")||i.target.closest(".window-controls")||i.pointerType!=="mouse"&&!i.isPrimary)return;i.preventDefault();const t=e.getBoundingClientRect();activityState.dragging=!0,activityState.dragPointerId=i.pointerId,activityState.dragWindow=e,activityState.dragOffsetX=i.clientX-t.left,activityState.dragOffsetY=i.clientY-t.top,(r=(n=i.currentTarget)==null?void 0:n.setPointerCapture)==null||r.call(n,i.pointerId),e.style.zIndex="130"}function Xh(i){const e=activityState.dragWindow;if(!activityState.dragging||!e||activityState.dragPointerId!==null&&i.pointerId!==activityState.dragPointerId)return;i.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),n=window.innerHeight-32,r=Math.max(0,Math.min(t,i.clientX-activityState.dragOffsetX)),s=Math.max(0,Math.min(n,i.clientY-activityState.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${s}px`,e.style.right="auto",e.style.bottom="auto"}function Ic(){activityState.dragging=!1,activityState.dragPointerId=null,activityState.dragWindow=null,recoverAllViewerControls()}function Yh(){renderer.render(scene,camera);const i=document.createElement("a");i.download=`${A.orbitalName.textContent||"hao-orbital"}.png`,i.href=renderer.domElement.toDataURL("image/png"),i.click()}function $h(){var i,e,t,n,r,s,o,a,c,l,u,d,h,f,g,x,m,p,v,_,S,b,E,w,T,y,M,P,D,N,k,B,F,X,H,ee,re,ie,K,fe,W,J,le;if(A.sketchCanvas){(i=A.openActivityButton)==null||i.addEventListener("click",()=>showActivityPane("predict")),(e=A.openSketchButton)==null||e.addEventListener("click",openSketchWindow),(t=A.openPredictButton)==null||t.addEventListener("click",()=>showActivityPane("predict")),(n=A.openChallengeButton)==null||n.addEventListener("click",()=>showActivityPane("challenge"));for(const U of A.activityModeButtons??[])U.addEventListener("click",()=>showActivityPane(U.dataset.activityMode));(r=A.startPredictButton)==null||r.addEventListener("click",startPrediction),(s=A.verifyPredictButton)==null||s.addEventListener("click",verifyPrediction),(o=A.scoreCurrentButton)==null||o.addEventListener("click",scoreCurrentPrediction),(a=A.scoreShowRubricButton)==null||a.addEventListener("click",showScoreRubric),(c=A.scoreResetButton)==null||c.addEventListener("click",resetScorePrompt),(l=A.diagnoseNodesButton)==null||l.addEventListener("click",()=>runDiagnosis("nodes")),(u=A.diagnosePhaseButton)==null||u.addEventListener("click",()=>runDiagnosis("phase")),(d=A.diagnoseProjectionButton)==null||d.addEventListener("click",()=>runDiagnosis("projection"));for(const U of document.querySelectorAll("[data-diagnosis]"))U.addEventListener("click",()=>runDiagnosis(U.dataset.diagnosis));(h=A.nodeRevealButton)==null||h.addEventListener("click",()=>{A.radialNode&&!A.radialNode.disabled&&(A.radialNode.checked=!0),A.polarNode&&!A.polarNode.disabled&&(A.polarNode.checked=!0),A.longitudeNode.checked=!0,A.node.checked=!0,renderOrbital()}),(f=A.nodeHideButton)==null||f.addEventListener("click",()=>{A.radialNode&&(A.radialNode.checked=!1),A.polarNode&&(A.polarNode.checked=!1),A.longitudeNode.checked=!1,A.node.checked=!1,renderOrbital()}),(g=A.compareApplyButton)==null||g.addEventListener("click",()=>{renderOrbitalComparison()}),(x=A.compareA)==null||x.addEventListener("change",()=>{renderCompareSlot("a")}),(m=A.compareB)==null||m.addEventListener("change",()=>{renderCompareSlot("b")}),(p=A.compareLoadAButton)==null||p.addEventListener("click",()=>{var U;(U=A.compareA)!=null&&U.value&&loadCompareTargetToMain(A.compareA.value,"a")}),(v=A.compareLoadBButton)==null||v.addEventListener("click",()=>{var U;(U=A.compareB)!=null&&U.value&&loadCompareTargetToMain(A.compareB.value,"b")}),(_=A.newChallengeButton)==null||_.addEventListener("click",newChallenge),(S=A.revealChallengeButton)==null||S.addEventListener("click",revealChallenge),(b=A.explainRestartButton)==null||b.addEventListener("click",restartExplanation),(E=A.explainPrevButton)==null||E.addEventListener("click",()=>moveExplanationStep(-1)),(w=A.explainPlayButton)==null||w.addEventListener("click",toggleExplanationPlayback),(T=A.explainNextButton)==null||T.addEventListener("click",()=>moveExplanationStep(1)),(y=A.tabletLargeButton)==null||y.addEventListener("click",()=>setTabletMode(!0)),(M=A.tabletRestoreButton)==null||M.addEventListener("click",()=>setTabletMode(!1)),(P=A.tabletScreenshotButton)==null||P.addEventListener("click",Yh),(N=(D=A.boxWindow)==null?void 0:D.querySelector(".window-title"))==null||N.addEventListener("pointerdown",U=>Kr(U,A.boxWindow)),(B=(k=A.activityWindow)==null?void 0:k.querySelector(".window-title"))==null||B.addEventListener("pointerdown",U=>Kr(U,A.activityWindow)),(X=(F=A.formulaWindow)==null?void 0:F.querySelector(".window-title"))==null||X.addEventListener("pointerdown",U=>Kr(U,A.formulaWindow)),(ee=(H=A.animationWindow)==null?void 0:H.querySelector(".window-title"))==null||ee.addEventListener("pointerdown",U=>Kr(U,A.animationWindow)),window.addEventListener("pointermove",Xh),window.addEventListener("pointerup",Ic),window.addEventListener("pointercancel",Ic),window.addEventListener("pointerup",refreshAllViewerControls),window.addEventListener("pointercancel",recoverAllViewerControls),window.addEventListener("blur",recoverAllViewerControls),(re=A.annotationModeButton)==null||re.addEventListener("click",toggleAnnotationMode),(ie=A.openAnimationButton)==null||ie.addEventListener("click",playCinematicAnimation),(K=document.getElementById("cinematicPlayBtn"))==null||K.addEventListener("click",toggleCinematicPlayback),(fe=document.getElementById("cinematicExportBtn"))==null||fe.addEventListener("click",exportCinematicVideo),(W=document.getElementById("cinematicExitBtn"))==null||W.addEventListener("click",stopCinematicAnimation),(J=A.openFormulaButton)==null||J.addEventListener("click",openFormulaWindow),(le=A.annotationClearButton)==null||le.addEventListener("click",clearAnnotations);for(const U of document.querySelectorAll("[data-annotation-add]"))U.addEventListener("click",()=>addAnnotation(U.dataset.annotationAdd));for(const U of document.querySelectorAll(".annotation-layer"))U.addEventListener("pointerdown",beginAnnotationDrag);window.addEventListener("pointermove",continueAnnotationDrag),window.addEventListener("pointerup",endAnnotationDrag),window.addEventListener("pointercancel",endAnnotationDrag)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ho="165",va={ROTATE:0,DOLLY:1,PAN:2},Zh=0,Dc=1,jh=2,Bu=1,Kh=2,Sn=3,pn=0,zt=1,ct=2,Kn=0,$i=1,nr=2,Uc=3,Nc=4,Jh=5,pi=100,Qh=101,ed=102,td=103,nd=104,id=200,rd=201,sd=202,ad=203,mo=204,go=205,od=206,cd=207,ld=208,ud=209,hd=210,dd=211,fd=212,pd=213,md=214,gd=0,_d=1,xd=2,Bs=3,vd=4,Md=5,yd=6,Sd=7,Go=0,Ed=1,wd=2,Jn=0,bd=1,Ad=2,Td=3,ku=4,Cd=5,Rd=6,Pd=7,Vu=300,ir=301,rr=302,_o=303,xo=304,ta=306,vo=1e3,_i=1001,Mo=1002,Xt=1003,Ld=1004,Jr=1005,en=1006,Ma=1007,xi=1008,ei=1009,Id=1010,Dd=1011,ks=1012,Hu=1013,sr=1014,$n=1015,na=1016,Gu=1017,Wu=1018,ar=1020,Ud=35902,Nd=1021,Od=1022,un=1023,Fd=1024,zd=1025,Zi=1026,or=1027,Bd=1028,qu=1029,kd=1030,Xu=1031,Yu=1033,ya=33776,Sa=33777,Ea=33778,wa=33779,Oc=35840,Fc=35841,zc=35842,Bc=35843,kc=36196,Vc=37492,Hc=37496,Gc=37808,Wc=37809,qc=37810,Xc=37811,Yc=37812,$c=37813,Zc=37814,jc=37815,Kc=37816,Jc=37817,Qc=37818,el=37819,tl=37820,nl=37821,ba=36492,il=36494,rl=36495,Vd=36283,sl=36284,al=36285,ol=36286,Hd=3200,Gd=3201,Wo=0,Wd=1,Yn="",Wt="srgb",ni="srgb-linear",qo="display-p3",ia="display-p3-linear",Vs="linear",ot="srgb",Hs="rec709",Gs="p3",Ai=7680,cl=519,qd=512,Xd=513,Yd=514,$u=515,$d=516,Zd=517,jd=518,Kd=519,yo=35044,Qr=35048,ll="300 es",bn=2e3,Ws=2001;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const ji=Math.PI/180,Hr=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Xo(i,e){return(i%e+e)%e}function Jd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Qd(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function ef(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function tf(i,e=1){return e-Math.abs(Xo(i,e*2)-e)}function nf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function af(i,e){return i+Math.random()*(e-i)}function of(i){return i*(.5-Math.random())}function cf(i){i!==void 0&&(ul=i);let e=ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lf(i){return i*ji}function uf(i){return i*Hr}function hf(i){return(i&i-1)===0&&i!==0}function df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ff(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pf(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hl={DEG2RAD:ji,RAD2DEG:Hr,generateUUID:Pn,clamp:wt,euclideanModulo:Xo,mapLinear:Jd,inverseLerp:Qd,lerp:Ur,damp:ef,pingpong:tf,smoothstep:nf,smootherstep:rf,randInt:sf,randFloat:af,randFloatSpread:of,seededRandom:cf,degToRad:lf,radToDeg:uf,isPowerOfTwo:hf,ceilPowerOfTwo:df,floorPowerOfTwo:ff,setQuaternionFromProperEuler:pf,normalize:Qe,denormalize:tn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,r,s,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=r[0],m=r[3],p=r[6],v=r[1],_=r[4],S=r[7],b=r[2],E=r[5],w=r[8];return s[0]=o*x+a*v+c*b,s[3]=o*m+a*_+c*E,s[6]=o*p+a*S+c*w,s[1]=l*x+u*v+d*b,s[4]=l*m+u*_+d*E,s[7]=l*p+u*S+d*w,s[2]=h*x+f*v+g*b,s[5]=h*m+f*_+g*E,s[8]=h*p+f*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=t*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*l-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=h*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new He;function Zu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mf(){const i=qs("canvas");return i.style.display="block",i}const dl={};function Yo(i){i in dl||(dl[i]=!0,console.warn(i))}function gf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const fl=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pl=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[ni]:{transfer:Vs,primaries:Hs,toReference:i=>i,fromReference:i=>i},[Wt]:{transfer:ot,primaries:Hs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ia]:{transfer:Vs,primaries:Gs,toReference:i=>i.applyMatrix3(pl),fromReference:i=>i.applyMatrix3(fl)},[qo]:{transfer:ot,primaries:Gs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pl),fromReference:i=>i.applyMatrix3(fl).convertLinearToSRGB()}},_f=new Set([ni,ia]),et={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_f.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=es[e].toReference,r=es[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return es[i].primaries},getTransfer:function(i){return i===Yn?Vs:es[i].transfer}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class xf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=qs("canvas")),Ti.width=e.width,Ti.height=e.height;const n=Ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vf=0;class ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ca(r[o].image)):s.push(Ca(r[o]))}else s=Ca(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mf=0;class Nt extends Ei{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=_i,r=_i,s=en,o=xi,a=un,c=ei,l=Nt.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Pn(),this.name="",this.source=new ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Vu;Nt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,S=(f+1)/2,b=(p+1)/2,E=(u+h)/4,w=(d+x)/4,T=(g+m)/4;return _>S&&_>b?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=E/n,s=w/n):S>b?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=E/r,s=T/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=w/s,r=T/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yf extends Ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Nt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ju(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends yf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ku extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sf extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const h=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==h||l!==f||u!==g){let m=1-a;const p=c*h+l*f+u*g+d*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const b=Math.sqrt(_),E=Math.atan2(b,p*v);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const S=a*v;if(c=c*m+h*S,l=l*m+f*S,u=u*m+g*S,d=d*m+x*S,m===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),h=c(n/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new L,ml=new lr;class Si{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(s,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),ns.subVectors(this.max,Sr),Ci.subVectors(e.a,Sr),Ri.subVectors(e.b,Sr),Pi.subVectors(e.c,Sr),Bn.subVectors(Ri,Ci),kn.subVectors(Pi,Ri),oi.subVectors(Ci,Pi);let t=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-oi.z,oi.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,oi.z,0,-oi.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-oi.y,oi.x,0];return!Pa(t,Ci,Ri,Pi,ns)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,Ci,Ri,Pi,ns))?!1:(is.crossVectors(Bn,kn),t=[is.x,is.y,is.z],Pa(t,Ci,Ri,Pi,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new L,new L,new L,new L,new L,new L,new L,new L],Zt=new L,ts=new Si,Ci=new L,Ri=new L,Pi=new L,Bn=new L,kn=new L,oi=new L,Sr=new L,ns=new L,is=new L,ci=new L;function Pa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ci.fromArray(i,s);const a=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ef=new Si,Er=new L,La=new L;class wi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ef.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Er,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(La)),this.expandByPoint(Er.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new L,Ia=new L,rs=new L,Vn=new L,Da=new L,ss=new L,Ua=new L;class ra{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ia.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Ia);const s=e.distanceTo(t)*.5,o=-this.direction.dot(rs),a=Vn.dot(this.direction),c=-Vn.dot(rs),l=Vn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ia).addScaledVector(rs,h),f}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),r=xn.dot(xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,r,s){Da.subVectors(t,e),ss.subVectors(n,e),Ua.crossVectors(Da,ss);let o=this.direction.dot(Ua),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const c=a*this.direction.dot(ss.crossVectors(Vn,ss));if(c<0)return null;const l=a*this.direction.dot(Da.cross(Vn));if(l<0||c+l>o)return null;const u=-a*Vn.dot(Ua);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,r,s,o,a,c,l,u,d,h,f,g,x,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,d,h,f,g,x,m)}set(e,t,n,r,s,o,a,c,l,u,d,h,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-x*l,t[9]=-a*c,t[2]=x-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,x=l*d;t[0]=h+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,x=l*d;t[0]=h-x*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+x,t[1]=c*d,t[5]=x*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-x*d}else if(e.order==="XZY"){const h=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+x,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wf,e,bf)}lookAt(e,t,n){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Hn.crossVectors(n,kt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Hn.crossVectors(n,kt)),Hn.normalize(),as.crossVectors(kt,Hn),r[0]=Hn.x,r[4]=as.x,r[8]=kt.x,r[1]=Hn.y,r[5]=as.y,r[9]=kt.y,r[2]=Hn.z,r[6]=as.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],_=n[7],S=n[11],b=n[15],E=r[0],w=r[4],T=r[8],y=r[12],M=r[1],P=r[5],D=r[9],N=r[13],k=r[2],B=r[6],F=r[10],X=r[14],H=r[3],ee=r[7],re=r[11],ie=r[15];return s[0]=o*E+a*M+c*k+l*H,s[4]=o*w+a*P+c*B+l*ee,s[8]=o*T+a*D+c*F+l*re,s[12]=o*y+a*N+c*X+l*ie,s[1]=u*E+d*M+h*k+f*H,s[5]=u*w+d*P+h*B+f*ee,s[9]=u*T+d*D+h*F+f*re,s[13]=u*y+d*N+h*X+f*ie,s[2]=g*E+x*M+m*k+p*H,s[6]=g*w+x*P+m*B+p*ee,s[10]=g*T+x*D+m*F+p*re,s[14]=g*y+x*N+m*X+p*ie,s[3]=v*E+_*M+S*k+b*H,s[7]=v*w+_*P+S*B+b*ee,s[11]=v*T+_*D+S*F+b*re,s[15]=v*y+_*N+S*X+b*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*h+n*l*h+r*a*f-n*c*f)+x*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+m*(+t*l*d-t*a*f-s*o*d+n*o*f+s*a*u-n*l*u)+p*(-r*a*u-t*c*d+t*a*h+r*o*d-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=d*m*l-x*h*l+x*c*f-a*m*f-d*c*p+a*h*p,_=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,S=u*x*l-g*d*l+g*a*f-o*x*f-u*a*p+o*d*p,b=g*d*c-u*x*c-g*a*h+o*x*h+u*a*m-o*d*m,E=t*v+n*_+r*S+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(x*h*s-d*m*s-x*r*f+n*m*f+d*r*p-n*h*p)*w,e[2]=(a*m*s-x*c*s+x*r*l-n*m*l-a*r*p+n*c*p)*w,e[3]=(d*c*s-a*h*s-d*r*l+n*h*l+a*r*f-n*c*f)*w,e[4]=_*w,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*w,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*w,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*w,e[8]=S*w,e[9]=(g*d*s-u*x*s-g*n*f+t*x*f+u*n*p-t*d*p)*w,e[10]=(o*x*s-g*a*s+g*n*l-t*x*l-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*d*s-u*n*l+t*d*l+o*n*f-t*a*f)*w,e[12]=b*w,e[13]=(u*x*r-g*d*r+g*n*h-t*x*h-u*n*m+t*d*m)*w,e[14]=(g*a*r-o*x*r-g*n*c+t*x*c+o*n*m-t*a*m)*w,e[15]=(o*d*r-u*a*r+u*n*c-t*d*c-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,x=o*u,m=o*d,p=a*d,v=c*l,_=c*u,S=c*d,b=n.x,E=n.y,w=n.z;return r[0]=(1-(x+p))*b,r[1]=(f+S)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(f-S)*E,r[5]=(1-(h+p))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(g+_)*w,r[9]=(m-v)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Li.set(r[0],r[1],r[2]).length();const o=Li.set(r[4],r[5],r[6]).length(),a=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const l=1/s,u=1/o,d=1/a;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=d,jt.elements[9]*=d,jt.elements[10]*=d,t.setFromRotationMatrix(jt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=bn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let f,g;if(a===bn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ws)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=bn){const c=this.elements,l=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*l,f=(n+r)*u;let g,x;if(a===bn)g=(o+s)*d,x=-2*d;else if(a===Ws)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new L,jt=new st,wf=new L(0,0,0),bf=new L(1,1,1),Hn=new L,as=new L,kt=new L,gl=new st,_l=new lr;class sn{constructor(e=0,t=0,n=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Af=0;const xl=new L,Ii=new lr,vn=new st,os=new L,wr=new L,Tf=new L,Cf=new lr,vl=new L(1,0,0),Ml=new L(0,1,0),yl=new L(0,0,1),Sl={type:"added"},Rf={type:"removed"},Di={type:"childadded",child:null},Na={type:"childremoved",child:null};class gt extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new L,t=new sn,n=new lr,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new He}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(vl,e)}rotateY(e){return this.rotateOnAxis(Ml,e)}rotateZ(e){return this.rotateOnAxis(yl,e)}translateOnAxis(e,t){return xl.copy(e).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vl,e)}translateY(e){return this.translateOnAxis(Ml,e)}translateZ(e){return this.translateOnAxis(yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(wr,os,this.up):vn.lookAt(os,wr,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(vn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DEFAULT_UP=new L(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new L,Mn=new L,Oa=new L,yn=new L,Ui=new L,Ni=new L,El=new L,Fa=new L,za=new L,Ba=new L;class qt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),Mn.subVectors(n,t),Oa.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(Mn),c=Kt.dot(Oa),l=Mn.dot(Mn),u=Mn.dot(Oa),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yn.x),c.addScaledVector(o,yn.y),c.addScaledVector(a,yn.z),c)}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),Mn.subVectors(e,t),Kt.cross(Mn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Kt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ui.subVectors(r,n),Ni.subVectors(s,n),Fa.subVectors(e,n);const c=Ui.dot(Fa),l=Ni.dot(Fa);if(c<=0&&l<=0)return t.copy(n);za.subVectors(e,r);const u=Ui.dot(za),d=Ni.dot(za);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ui,o);Ba.subVectors(e,s);const f=Ui.dot(Ba),g=Ni.dot(Ba);if(g>=0&&f<=g)return t.copy(s);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ni,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return El.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(El,a);const p=1/(m+x+h);return o=x*p,a=h*p,t.copy(n).addScaledVector(Ui,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function ka(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=Xo(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ka(o,s,e+1/3),this.g=ka(o,s,e),this.b=ka(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return et.fromWorkingColorSpace(Ct.copy(this),e),Math.round(wt(Ct.r*255,0,255))*65536+Math.round(wt(Ct.g*255,0,255))*256+Math.round(wt(Ct.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Wt){et.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(cs);const n=Ur(Gn.h,cs.h,t),r=Ur(Gn.s,cs.s,t),s=Ur(Gn.l,cs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Me;Me.NAMES=Ju;let Pf=0;class On extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=$i,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ot extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new L,ls=new pe;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yo&&(e.usage=this.usage),e}}class Qu extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eh extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ie extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lf=0;const Gt=new st,Va=new gt,Oi=new L,Vt=new Si,br=new Si,St=new L;class We extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zu(e)?eh:Qu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ie(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];br.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Vt.min,br.min),Vt.expandByPoint(St),St.addVectors(Vt.max,br.max),Vt.expandByPoint(St)):(Vt.expandByPoint(br.min),Vt.expandByPoint(br.max))}Vt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)St.fromBufferAttribute(a,l),c&&(Oi.fromBufferAttribute(e,l),St.add(Oi)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new L,c[T]=new L;const l=new L,u=new L,d=new L,h=new pe,f=new pe,g=new pe,x=new L,m=new L;function p(T,y,M){l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),h.fromBufferAttribute(s,T),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[T].add(x),a[y].add(x),a[M].add(x),c[T].add(m),c[y].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let T=0,y=v.length;T<y;++T){const M=v[T],P=M.start,D=M.count;for(let N=P,k=P+D;N<k;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new L,S=new L,b=new L,E=new L;function w(T){b.fromBufferAttribute(r,T),E.copy(b);const y=a[T];_.copy(y),_.sub(b.multiplyScalar(b.dot(y))).normalize(),S.crossVectors(E,y);const P=S.dot(c[T])<0?-1:1;o.setXYZW(T,_.x,_.y,_.z,P)}for(let T=0,y=v.length;T<y;++T){const M=v[T],P=M.start,D=M.count;for(let N=P,k=P+D;N<k;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Rt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new We,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new st,li=new ra,us=new wi,bl=new L,Fi=new L,zi=new L,Bi=new L,Ha=new L,hs=new L,ds=new pe,fs=new pe,ps=new pe,Al=new L,Tl=new L,Cl=new L,ms=new L,gs=new L;class Ye extends gt{constructor(e=new We,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){hs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Ha.fromBufferAttribute(d,e),o?hs.addScaledVector(Ha,u):hs.addScaledVector(Ha.sub(t),u))}t.add(hs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),li.copy(e.ray).recast(e.near),!(us.containsPoint(li.origin)===!1&&(li.intersectSphere(us,bl)===null||li.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(wl.copy(s).invert(),li.copy(e.ray).applyMatrix4(wl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,b=_;S<b;S+=3){const E=a.getX(S),w=a.getX(S+1),T=a.getX(S+2);r=_s(this,p,e,n,l,u,d,E,w,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=_s(this,o,e,n,l,u,d,v,_,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,b=_;S<b;S+=3){const E=S,w=S+1,T=S+2;r=_s(this,p,e,n,l,u,d,E,w,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=m,_=m+1,S=m+2;r=_s(this,o,e,n,l,u,d,v,_,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function If(i,e,t,n,r,s,o,a){let c;if(e.side===zt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===pn,a),c===null)return null;gs.copy(a),gs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(gs);return l<t.near||l>t.far?null:{distance:l,point:gs.clone(),object:i}}function _s(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Fi),i.getVertexPosition(c,zi),i.getVertexPosition(l,Bi);const u=If(i,e,t,n,Fi,zi,Bi,ms);if(u){r&&(ds.fromBufferAttribute(r,a),fs.fromBufferAttribute(r,c),ps.fromBufferAttribute(r,l),u.uv=qt.getInterpolation(ms,Fi,zi,Bi,ds,fs,ps,new pe)),s&&(ds.fromBufferAttribute(s,a),fs.fromBufferAttribute(s,c),ps.fromBufferAttribute(s,l),u.uv1=qt.getInterpolation(ms,Fi,zi,Bi,ds,fs,ps,new pe)),o&&(Al.fromBufferAttribute(o,a),Tl.fromBufferAttribute(o,c),Cl.fromBufferAttribute(o,l),u.normal=qt.getInterpolation(ms,Fi,zi,Bi,Al,Tl,Cl,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};qt.getNormal(Fi,zi,Bi,d.normal),u.face=d}return u}class ur extends We{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(d,2));function g(x,m,p,v,_,S,b,E,w,T,y){const M=S/w,P=b/T,D=S/2,N=b/2,k=E/2,B=w+1,F=T+1;let X=0,H=0;const ee=new L;for(let re=0;re<F;re++){const ie=re*P-N;for(let K=0;K<B;K++){const fe=K*M-D;ee[x]=fe*v,ee[m]=ie*_,ee[p]=k,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[p]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(K/w),d.push(1-re/T),X+=1}}for(let re=0;re<T;re++)for(let ie=0;ie<w;ie++){const K=h+ie+B*re,fe=h+ie+B*(re+1),W=h+(ie+1)+B*(re+1),J=h+(ie+1)+B*re;c.push(K,fe,J),c.push(fe,W,J),H+=6}a.addGroup(f,H,y),f+=H,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=cr(i[t]);for(const r in n)e[r]=n[r]}return e}function Df(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function th(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const nh={clone:cr,merge:Dt};var Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ih extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new L,Rl=new pe,Pl=new pe;class Qt extends ih{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,Rl,Pl),t.subVectors(Pl,Rl)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ji*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Vi=1;class Of extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(ki,Vi,e,t);r.layers=this.layers,this.add(r);const s=new Qt(ki,Vi,e,t);s.layers=this.layers,this.add(s);const o=new Qt(ki,Vi,e,t);o.layers=this.layers,this.add(o);const a=new Qt(ki,Vi,e,t);a.layers=this.layers,this.add(a);const c=new Qt(ki,Vi,e,t);c.layers=this.layers,this.add(c);const l=new Qt(ki,Vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rh extends Nt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ff extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new rh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ur(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Kn});s.uniforms.tEquirect.value=t;const o=new Ye(r,s),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=en),new Of(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ga=new L,zf=new L,Bf=new He;class Ke{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ga.subVectors(n,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ga),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bf.getNormalMatrix(e),r=this.coplanarPoint(Ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new wi,xs=new L;class Zo{constructor(e=new Ke,t=new Ke,n=new Ke,r=new Ke,s=new Ke,o=new Ke){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],x=r[10],m=r[11],p=r[12],v=r[13],_=r[14],S=r[15];if(n[0].setComponents(c-s,h-l,m-f,S-p).normalize(),n[1].setComponents(c+s,h+l,m+f,S+p).normalize(),n[2].setComponents(c+o,h+u,m+g,S+v).normalize(),n[3].setComponents(c-o,h-u,m-g,S-v).normalize(),n[4].setComponents(c-a,h-d,m-x,S-_).normalize(),t===bn)n[5].setComponents(c+a,h+d,m+x,S+_).normalize();else if(t===Ws)n[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(xs.x=r.normal.x>0?e.max.x:e.min.x,xs.y=r.normal.y>0?e.max.y:e.min.y,xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function kf(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c._updateRange,h=c.updateRanges;if(i.bindBuffer(l,a),d.count===-1&&h.length===0&&i.bufferSubData(l,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){const x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class sa extends We{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*h-o;for(let _=0;_<l;_++){const S=_*d-s;g.push(S,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const _=v+l*p,S=v+l*(p+1),b=v+1+l*(p+1),E=v+1+l*p;f.push(_,S,E),f.push(S,b,E)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
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
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
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
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
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
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ep=`#ifdef USE_IRIDESCENCE
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
#endif`,tp=`#ifdef USE_BUMPMAP
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dp=`vec3 transformedNormal = objectNormal;
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
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`
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
}`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
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
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
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
#endif`,Bp=`struct PhysicalMaterial {
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
}`,kp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,t0=`uniform vec3 diffuse;
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
}`,n0=`#define LAMBERT
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
}`,i0=`#define LAMBERT
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
}`,r0=`#define MATCAP
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
}`,s0=`#define MATCAP
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
}`,a0=`#define NORMAL
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
}`,o0=`#define NORMAL
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
}`,c0=`#define PHONG
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
}`,l0=`#define PHONG
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
}`,u0=`#define STANDARD
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
}`,h0=`#define STANDARD
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
}`,d0=`#define TOON
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
}`,f0=`#define TOON
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
}`,p0=`uniform float size;
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#include <common>
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
}`,_0=`uniform vec3 color;
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
}`,x0=`uniform float rotation;
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
}`,v0=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Vf,alphahash_pars_fragment:Hf,alphamap_fragment:Gf,alphamap_pars_fragment:Wf,alphatest_fragment:qf,alphatest_pars_fragment:Xf,aomap_fragment:Yf,aomap_pars_fragment:$f,batching_pars_vertex:Zf,batching_vertex:jf,begin_vertex:Kf,beginnormal_vertex:Jf,bsdfs:Qf,iridescence_fragment:ep,bumpmap_pars_fragment:tp,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:rp,clipping_planes_vertex:sp,color_fragment:ap,color_pars_fragment:op,color_pars_vertex:cp,color_vertex:lp,common:up,cube_uv_reflection_fragment:hp,defaultnormal_vertex:dp,displacementmap_pars_vertex:fp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:_p,colorspace_pars_fragment:xp,envmap_fragment:vp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:yp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Dp,envmap_vertex:Ep,fog_vertex:wp,fog_pars_vertex:bp,fog_fragment:Ap,fog_pars_fragment:Tp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Rp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Ip,lights_toon_fragment:Up,lights_toon_pars_fragment:Np,lights_phong_fragment:Op,lights_phong_pars_fragment:Fp,lights_physical_fragment:zp,lights_physical_pars_fragment:Bp,lights_fragment_begin:kp,lights_fragment_maps:Vp,lights_fragment_end:Hp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Xp,map_fragment:Yp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:jp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:Qp,morphcolor_vertex:em,morphnormal_vertex:tm,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:rm,normal_fragment_maps:sm,normal_pars_fragment:am,normal_pars_vertex:om,normal_vertex:cm,normalmap_pars_fragment:lm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:hm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:fm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:_m,dithering_fragment:xm,dithering_pars_fragment:vm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Em,shadowmap_vertex:wm,shadowmask_pars_fragment:bm,skinbase_vertex:Am,skinning_pars_vertex:Tm,skinning_vertex:Cm,skinnormal_vertex:Rm,specularmap_fragment:Pm,specularmap_pars_fragment:Lm,tonemapping_fragment:Im,tonemapping_pars_fragment:Dm,transmission_fragment:Um,transmission_pars_fragment:Nm,uv_pars_fragment:Om,uv_pars_vertex:Fm,uv_vertex:zm,worldpos_vertex:Bm,background_vert:km,background_frag:Vm,backgroundCube_vert:Hm,backgroundCube_frag:Gm,cube_vert:Wm,cube_frag:qm,depth_vert:Xm,depth_frag:Ym,distanceRGBA_vert:$m,distanceRGBA_frag:Zm,equirect_vert:jm,equirect_frag:Km,linedashed_vert:Jm,linedashed_frag:Qm,meshbasic_vert:e0,meshbasic_frag:t0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:r0,meshmatcap_frag:s0,meshnormal_vert:a0,meshnormal_frag:o0,meshphong_vert:c0,meshphong_frag:l0,meshphysical_vert:u0,meshphysical_frag:h0,meshtoon_vert:d0,meshtoon_frag:f0,points_vert:p0,points_frag:m0,shadow_vert:g0,shadow_frag:_0,sprite_vert:x0,sprite_frag:v0},me={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},cn={basic:{uniforms:Dt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Dt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Dt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Dt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Dt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Dt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Dt([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Dt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Dt([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Dt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Dt([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Dt([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Dt([me.lights,me.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};cn.physical={uniforms:Dt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const vs={r:0,b:0,g:0},hi=new sn,M0=new st;function y0(i,e,t,n,r,s,o){const a=new Me(0);let c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1;const S=g(v);S===null?p(a,c):S&&S.isColor&&(p(S,1),_=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===ta)?(u===void 0&&(u=new Ye(new ur(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:cr(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hi.copy(_.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(M0.makeRotationFromEuler(hi)),u.material.toneMapped=et.getTransfer(S.colorSpace)!==ot,(d!==S||h!==S.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ye(new sa(2,2),new In({name:"BackgroundMaterial",uniforms:cr(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(vs,th(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m}}function S0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(M,P,D,N,k){let B=!1;const F=d(N,D,P);s!==F&&(s=F,l(s.object)),B=f(M,N,D,k),B&&g(M,N,D,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(M,P,D,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,P,D){const N=D.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let B=k[P.id];B===void 0&&(B={},k[P.id]=B);let F=B[N];return F===void 0&&(F=h(c()),B[N]=F),F}function h(M){const P=[],D=[],N=[];for(let k=0;k<t;k++)P[k]=0,D[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,P,D,N){const k=s.attributes,B=P.attributes;let F=0;const X=D.getAttributes();for(const H in X)if(X[H].location>=0){const re=k[H];let ie=B[H];if(ie===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),re===void 0||re.attribute!==ie||ie&&re.data!==ie.data)return!0;F++}return s.attributesNum!==F||s.index!==N}function g(M,P,D,N){const k={},B=P.attributes;let F=0;const X=D.getAttributes();for(const H in X)if(X[H].location>=0){let re=B[H];re===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));const ie={};ie.attribute=re,re&&re.data&&(ie.data=re.data),k[H]=ie,F++}s.attributes=k,s.attributesNum=F,s.index=N}function x(){const M=s.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const D=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;D[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),k[M]!==P&&(i.vertexAttribDivisor(M,P),k[M]=P)}function v(){const M=s.newAttributes,P=s.enabledAttributes;for(let D=0,N=P.length;D<N;D++)P[D]!==M[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function _(M,P,D,N,k,B,F){F===!0?i.vertexAttribIPointer(M,P,D,k,B):i.vertexAttribPointer(M,P,D,N,k,B)}function S(M,P,D,N){x();const k=N.attributes,B=D.getAttributes(),F=P.defaultAttributeValues;for(const X in B){const H=B[X];if(H.location>=0){let ee=k[X];if(ee===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const re=ee.normalized,ie=ee.itemSize,K=e.get(ee);if(K===void 0)continue;const fe=K.buffer,W=K.type,J=K.bytesPerElement,le=W===i.INT||W===i.UNSIGNED_INT||ee.gpuType===Hu;if(ee.isInterleavedBufferAttribute){const U=ee.data,se=U.stride,_e=ee.offset;if(U.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)p(H.location+Ee,U.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)m(H.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Ee=0;Ee<H.locationSize;Ee++)_(H.location+Ee,ie/H.locationSize,W,re,se*J,(_e+ie/H.locationSize*Ee)*J,le)}else{if(ee.isInstancedBufferAttribute){for(let U=0;U<H.locationSize;U++)p(H.location+U,ee.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let U=0;U<H.locationSize;U++)m(H.location+U);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let U=0;U<H.locationSize;U++)_(H.location+U,ie/H.locationSize,W,re,ie*J,ie/H.locationSize*U*J,le)}}else if(F!==void 0){const re=F[X];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(H.location,re);break;case 3:i.vertexAttrib3fv(H.location,re);break;case 4:i.vertexAttrib4fv(H.location,re);break;default:i.vertexAttrib1fv(H.location,re)}}}}v()}function b(){T();for(const M in n){const P=n[M];for(const D in P){const N=P[D];for(const k in N)u(N[k].object),delete N[k];delete P[D]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const D in P){const N=P[D];for(const k in N)u(N[k].object),delete N[k];delete P[D]}delete n[M.id]}function w(M){for(const P in n){const D=n[P];if(D[M.id]===void 0)continue;const N=D[M.id];for(const k in N)u(N[k].object),delete N[k];delete D[M.id]}}function T(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:y,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function E0(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d;f++)this.render(l[f],u[f]);else{h.multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];for(let x=0;x<h.length;x++)t.update(g,n,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function w0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==un&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const w=E===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ei&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==$n&&!w)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:S,maxSamples:b}}function b0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ke,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,_=v*4;let S=p.clippingState||null;c.value=S,S=u(g,h,_,f);for(let b=0;b!==_;++b)S[b]=t[b];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=f;_!==x;++_,S+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function A0(i){let e=new WeakMap;function t(o,a){return a===_o?o.mapping=ir:a===xo&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_o||a===xo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ff(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class hr extends ih{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,Ll=[.125,.215,.35,.446,.526,.582],mi=20,Wa=new hr,Il=new Me;let qa=null,Xa=0,Ya=0,$a=!1;const fi=(1+Math.sqrt(5))/2,Hi=1/fi,Dl=[new L(-fi,Hi,0),new L(fi,Hi,0),new L(-Hi,0,fi),new L(Hi,0,fi),new L(0,fi,-Hi),new L(0,fi,Hi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){qa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Xa,Ya),this._renderer.xr.enabled=$a,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:na,format:un,colorSpace:ni,depthBuffer:!1},r=Nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T0(s)),this._blurMaterial=C0(s,e,t)}return r}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,r){const a=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Il),u.toneMapping=Jn,u.autoClear=!1;const f=new Ot({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Ye(new ur,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Il),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;Ms(r,v*_,p>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ir||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ms(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dl[(r-s-1)%Dl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ye(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*mi-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):mi;m>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let v=0;for(let w=0;w<mi;++w){const T=w/x,y=Math.exp(-T*T/2);p.push(y),w===0?v+=y:w<m&&(v+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const S=this._sizeLods[r],b=3*S*(r>_-Yi?r-_+Yi:0),E=4*(this._cubeSize-S);Ms(t,b,E,3*S,2*S),c.setRenderTarget(t),c.render(d,Wa)}}function T0(i){const e=[],t=[],n=[];let r=i;const s=i-Yi+1+Ll.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Yi?c=Ll[o-i+Yi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),_=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,T=E>2?0:-1,y=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];v.set(y,x*g*E),_.set(h,m*g*E);const M=[E,E,E,E,E,E];S.set(M,p*g*E)}const b=new We;b.setAttribute("position",new Rt(v,x)),b.setAttribute("uv",new Rt(_,m)),b.setAttribute("faceIndex",new Rt(S,p)),e.push(b),r>Yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nl(i,e,t){const n=new yi(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function C0(i,e,t){const n=new Float32Array(mi),r=new L(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ol(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Fl(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function jo(){return`

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
	`}function R0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===_o||c===xo,u=c===ir||c===rr;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ul(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Ul(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function P0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Yo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function L0(i,e,t,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let _=0,S=v.length;_<S;_+=3){const b=v[_+0],E=v[_+1],w=v[_+2];h.push(b,E,E,w,w,b)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const b=_+0,E=_+1,w=_+2;h.push(b,E,E,w,w,b)}}else return;const m=new(Zu(h)?eh:Qu)(h,1);m.version=x;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function I0(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,h*o,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<g;m++)this.render(h[m]/o,f[m]);else{x.multiDrawElementsWEBGL(n,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}}function d(h,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v];for(let v=0;v<x.length;v++)t.update(p,n,x[v])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function D0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function U0(i,e,t){const n=new WeakMap,r=new bt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let S=a.attributes.position.count*_,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const E=new Float32Array(S*b*4*d),w=new Ku(E,S,b,d);w.type=$n,w.needsUpdate=!0;const T=_*4;for(let M=0;M<d;M++){const P=m[M],D=p[M],N=v[M],k=S*b*4*M;for(let B=0;B<P.count;B++){const F=B*T;f===!0&&(r.fromBufferAttribute(P,B),E[k+F+0]=r.x,E[k+F+1]=r.y,E[k+F+2]=r.z,E[k+F+3]=0),g===!0&&(r.fromBufferAttribute(D,B),E[k+F+4]=r.x,E[k+F+5]=r.y,E[k+F+6]=r.z,E[k+F+7]=0),x===!0&&(r.fromBufferAttribute(N,B),E[k+F+8]=r.x,E[k+F+9]=r.y,E[k+F+10]=r.z,E[k+F+11]=N.itemSize===4?r.w:1)}}h={count:d,texture:w,size:new pe(S,b)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function N0(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class ah extends Nt{constructor(e,t,n,r,s,o,a,c,l,u=Zi){if(u!==Zi&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zi&&(n=sr),n===void 0&&u===or&&(n=ar),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const oh=new Nt,ch=new ah(1,1);ch.compareFunction=$u;const lh=new Ku,uh=new Sf,hh=new rh,zl=[],Bl=[],kl=new Float32Array(16),Vl=new Float32Array(9),Hl=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=zl[r];if(s===void 0&&(s=new Float32Array(r),zl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function aa(i,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function O0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function k0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Hl.set(n),i.uniformMatrix2fv(this.addr,!1,Hl),vt(t,n)}}function V0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Vl.set(n),i.uniformMatrix3fv(this.addr,!1,Vl),vt(t,n)}}function H0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;kl.set(n),i.uniformMatrix4fv(this.addr,!1,kl),vt(t,n)}}function G0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Y0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function K0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?ch:oh;t.setTexture2D(e||s,r)}function J0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||uh,r)}function Q0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||hh,r)}function eg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||lh,r)}function tg(i){switch(i){case 5126:return O0;case 35664:return F0;case 35665:return z0;case 35666:return B0;case 35674:return k0;case 35675:return V0;case 35676:return H0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return q0;case 35669:case 35673:return X0;case 5125:return Y0;case 36294:return $0;case 36295:return Z0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return eg}}function ng(i,e){i.uniform1fv(this.addr,e)}function ig(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function rg(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function sg(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function ag(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function og(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cg(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lg(i,e){i.uniform1iv(this.addr,e)}function ug(i,e){i.uniform2iv(this.addr,e)}function hg(i,e){i.uniform3iv(this.addr,e)}function dg(i,e){i.uniform4iv(this.addr,e)}function fg(i,e){i.uniform1uiv(this.addr,e)}function pg(i,e){i.uniform2uiv(this.addr,e)}function mg(i,e){i.uniform3uiv(this.addr,e)}function gg(i,e){i.uniform4uiv(this.addr,e)}function _g(i,e,t){const n=this.cache,r=e.length,s=aa(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||oh,s[o])}function xg(i,e,t){const n=this.cache,r=e.length,s=aa(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||uh,s[o])}function vg(i,e,t){const n=this.cache,r=e.length,s=aa(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hh,s[o])}function Mg(i,e,t){const n=this.cache,r=e.length,s=aa(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lh,s[o])}function yg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return rg;case 35666:return sg;case 35674:return ag;case 35675:return og;case 35676:return cg;case 5124:case 35670:return lg;case 35667:case 35671:return ug;case 35668:case 35672:return hg;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return Mg}}class Sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tg(t.type)}}class Eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yg(t.type)}}class wg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function Gl(i,e){i.seq.push(e),i.map[e.id]=e}function bg(i,e,t){const n=i.name,r=n.length;for(Za.lastIndex=0;;){const s=Za.exec(n),o=Za.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Gl(t,l===void 0?new Sg(a,i,e):new Eg(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new wg(a),Gl(t,d)),t=d}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);bg(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Wl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ag=37297;let Tg=0;function Cg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Rg(i){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(i);let n;switch(e===t?n="":e===Gs&&t===Hs?n="LinearDisplayP3ToLinearSRGB":e===Hs&&t===Gs&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case ia:return[n,"LinearTransferOETF"];case Wt:case qo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ql(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Cg(i.getShaderSource(e),o)}else return r}function Pg(i,e){const t=Rg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Lg(i,e){let t;switch(e){case bd:t="Linear";break;case Ad:t="Reinhard";break;case Td:t="OptimizedCineon";break;case ku:t="ACESFilmic";break;case Rd:t="AgX";break;case Pd:t="Neutral";break;case Cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function Dg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ug(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Lr(i){return i!==""}function Xl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(i){return i.replace(Ng,Fg)}const Og=new Map;function Fg(i,e){let t=Ve[e];if(t===void 0){const n=Og.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return So(t)}const zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(zg,Bg)}function Bg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function kg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case rr:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Go:e="ENVMAP_BLENDING_MULTIPLY";break;case Ed:e="ENVMAP_BLENDING_MIX";break;case wd:e="ENVMAP_BLENDING_ADD";break}return e}function Wg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qg(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kg(t),l=Vg(t),u=Hg(t),d=Gg(t),h=Wg(t),f=Ig(t),g=Dg(s),x=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Jn?Lg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Pg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=So(o),o=Xl(o,t),o=Yl(o,t),a=So(a),a=Xl(a,t),a=Yl(a,t),o=$l(o),a=$l(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+m+o,S=v+p+a,b=Wl(r,r.VERTEX_SHADER,_),E=Wl(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(P){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(b).trim(),k=r.getShaderInfoLog(E).trim();let B=!0,F=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,b,E);else{const X=ql(r,b,"vertex"),H=ql(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+X+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||k==="")&&(F=!1);F&&(P.diagnostics={runnable:B,programLog:D,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(b),r.deleteShader(E),T=new Os(r,x),y=Ug(r,x)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Ag)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}let Xg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $g(e),t.set(e,n)),n}}class $g{constructor(e){this.id=Xg++,this.code=e,this.usedTimes=0}}function Zg(i,e,t,n,r,s,o){const a=new $o,c=new Yg,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,D,N){const k=D.fog,B=N.geometry,F=y.isMeshStandardMaterial?D.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),H=X&&X.mapping===ta?X.image.height:null,ee=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ie=re!==void 0?re.length:0;let K=0;B.morphAttributes.position!==void 0&&(K=1),B.morphAttributes.normal!==void 0&&(K=2),B.morphAttributes.color!==void 0&&(K=3);let fe,W,J,le;if(ee){const nt=cn[ee];fe=nt.vertexShader,W=nt.fragmentShader}else fe=y.vertexShader,W=y.fragmentShader,c.update(y),J=c.getVertexShaderID(y),le=c.getFragmentShaderID(y);const U=i.getRenderTarget(),se=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,Ee=!!y.map,O=!!y.matcap,Ae=!!X,Fe=!!y.aoMap,$e=!!y.lightMap,Re=!!y.bumpMap,qe=!!y.normalMap,Be=!!y.displacementMap,Ne=!!y.emissiveMap,at=!!y.metalnessMap,I=!!y.roughnessMap,C=y.anisotropy>0,$=y.clearcoat>0,ne=y.dispersion>0,Z=y.iridescence>0,j=y.sheen>0,oe=y.transmission>0,ce=C&&!!y.anisotropyMap,ue=$&&!!y.clearcoatMap,we=$&&!!y.clearcoatNormalMap,ae=$&&!!y.clearcoatRoughnessMap,ye=Z&&!!y.iridescenceMap,ke=Z&&!!y.iridescenceThicknessMap,Le=j&&!!y.sheenColorMap,ge=j&&!!y.sheenRoughnessMap,Ge=!!y.specularMap,Xe=!!y.specularColorMap,pt=!!y.specularIntensityMap,z=oe&&!!y.transmissionMap,xe=oe&&!!y.thicknessMap,Q=!!y.gradientMap,te=!!y.alphaMap,de=y.alphaTest>0,Oe=!!y.alphaHash,Ze=!!y.extensions;let mt=Jn;y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(mt=i.toneMapping);const Mt={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:fe,fragmentShader:W,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:se,instancingColor:se&&N.instanceColor!==null,instancingMorph:se&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ni,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:O,envMap:Ae,envMapMode:Ae&&X.mapping,envMapCubeUVHeight:H,aoMap:Fe,lightMap:$e,bumpMap:Re,normalMap:qe,displacementMap:h&&Be,emissiveMap:Ne,normalMapObjectSpace:qe&&y.normalMapType===Wd,normalMapTangentSpace:qe&&y.normalMapType===Wo,metalnessMap:at,roughnessMap:I,anisotropy:C,anisotropyMap:ce,clearcoat:$,clearcoatMap:ue,clearcoatNormalMap:we,clearcoatRoughnessMap:ae,dispersion:ne,iridescence:Z,iridescenceMap:ye,iridescenceThicknessMap:ke,sheen:j,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:Ge,specularColorMap:Xe,specularIntensityMap:pt,transmission:oe,transmissionMap:z,thicknessMap:xe,gradientMap:Q,opaque:y.transparent===!1&&y.blending===$i&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:de,alphaHash:Oe,combine:y.combine,mapUv:Ee&&x(y.map.channel),aoMapUv:Fe&&x(y.aoMap.channel),lightMapUv:$e&&x(y.lightMap.channel),bumpMapUv:Re&&x(y.bumpMap.channel),normalMapUv:qe&&x(y.normalMap.channel),displacementMapUv:Be&&x(y.displacementMap.channel),emissiveMapUv:Ne&&x(y.emissiveMap.channel),metalnessMapUv:at&&x(y.metalnessMap.channel),roughnessMapUv:I&&x(y.roughnessMap.channel),anisotropyMapUv:ce&&x(y.anisotropyMap.channel),clearcoatMapUv:ue&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:we&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(y.sheenRoughnessMap.channel),specularMapUv:Ge&&x(y.specularMap.channel),specularColorMapUv:Xe&&x(y.specularColorMap.channel),specularIntensityMapUv:pt&&x(y.specularIntensityMap.channel),transmissionMapUv:z&&x(y.transmissionMap.channel),thicknessMapUv:xe&&x(y.thicknessMap.channel),alphaMapUv:te&&x(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(qe||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Ee||te),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:K,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ct,flipSided:y.side===zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ze&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(v(M,y),_(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function _(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),y.push(a.mask)}function S(y){const M=g[y.type];let P;if(M){const D=cn[M];P=nh.clone(D.uniforms)}else P=y.uniforms;return P}function b(y,M){let P;for(let D=0,N=u.length;D<N;D++){const k=u[D];if(k.cacheKey===M){P=k,++P.usedTimes;break}}return P===void 0&&(P=new qg(i,M,y,s),u.push(P)),P}function E(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function w(y){c.remove(y)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:T}}function jg(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,g,x,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function a(d,h,f,g,x,m){const p=o(d,h,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,g,x,m){const p=o(d,h,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||Kg),n.length>1&&n.sort(h||jl),r.length>1&&r.sort(h||jl)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Jg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Kl,i.set(n,[o])):r>=s.length?(o=new Kl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Me};break;case"SpotLight":t={position:new L,direction:new L,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function e1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let t1=0;function n1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i1(i){const e=new Qg,t=e1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const r=new L,s=new st,o=new st;function a(l){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,_=0,S=0,b=0,E=0,w=0;l.sort(n1);for(let y=0,M=l.length;y<M;y++){const P=l[y],D=P.color,N=P.intensity,k=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*N,d+=D.g*N,h+=D.b*N;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],N);w++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,H=t.get(P);H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=F,f++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(D).multiplyScalar(N),F.distance=k,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[x]=F;const X=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,X.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=X.matrix,P.castShadow){const H=t.get(P);H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=B,S++}x++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(D).multiplyScalar(N),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=F,m++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const X=P.shadow,H=t.get(P);H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=P.shadow.matrix,_++}n.point[g]=F,g++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(N),F.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==v||T.numPointShadows!==_||T.numSpotShadows!==S||T.numSpotMaps!==b||T.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=S+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,T.directionalLength=f,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=v,T.numPointShadows=_,T.numSpotShadows=S,T.numSpotMaps=b,T.numLightProbes=w,n.version=t1++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const _=l[p];if(_.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(_.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Jl(i){const e=new i1(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function r1(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jl(i),e.set(r,[a])):s>=o.length?(a=new Jl(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class s1 extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a1 extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const o1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c1=`uniform sampler2D shadow_pass;
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
}`;function l1(i,e,t){let n=new Zo;const r=new pe,s=new pe,o=new bt,a=new s1({depthPacking:Gd}),c=new a1,l={},u=t.maxTextureSize,d={[pn]:zt,[zt]:pn,[ct]:ct},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:o1,fragmentShader:c1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new We;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ye(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let p=this.type;this.render=function(E,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Kn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=p!==Sn&&this.type===Sn,k=p===Sn&&this.type!==Sn;for(let B=0,F=E.length;B<F;B++){const X=E[B],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||N===!0||k===!0){const ie=this.type!==Sn?{minFilter:Xt,magFilter:Xt}:{};H.map!==null&&H.map.dispose(),H.map=new yi(r.x,r.y,ie),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const re=H.getViewportCount();for(let ie=0;ie<re;ie++){const K=H.getViewport(ie);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),D.viewport(o),H.updateMatrices(X,ie),n=H.getFrustum(),S(w,T,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Sn&&v(H,T),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,P)};function v(E,w){const T=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new yi(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,T,h,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,T,f,x,null)}function _(E,w,T,y){let M=null;const P=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=T.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=M.uuid,N=w.uuid;let k=l[D];k===void 0&&(k={},l[D]=k);let B=k[N];B===void 0&&(B=M.clone(),k[N]=B,w.addEventListener("dispose",b)),M=B}if(M.visible=w.visible,M.wireframe=w.wireframe,y===Sn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=i.properties.get(M);D.light=T}return M}function S(E,w,T,y,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Sn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const N=e.update(E),k=E.material;if(Array.isArray(k)){const B=N.groups;for(let F=0,X=B.length;F<X;F++){const H=B[F],ee=k[H.materialIndex];if(ee&&ee.visible){const re=_(E,ee,y,M);E.onBeforeShadow(i,E,w,T,N,re,H),i.renderBufferDirect(T,null,N,re,E,H),E.onAfterShadow(i,E,w,T,N,re,H)}}}else if(k.visible){const B=_(E,k,y,M);E.onBeforeShadow(i,E,w,T,N,B,null),i.renderBufferDirect(T,null,N,B,E,null),E.onAfterShadow(i,E,w,T,N,B,null)}}const D=E.children;for(let N=0,k=D.length;N<k;N++)S(D[N],w,T,y,M)}function b(E){E.target.removeEventListener("dispose",b);for(const T in l){const y=l[T],M=E.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function u1(i){function e(){let z=!1;const xe=new bt;let Q=null;const te=new bt(0,0,0,0);return{setMask:function(de){Q!==de&&!z&&(i.colorMask(de,de,de,de),Q=de)},setLocked:function(de){z=de},setClear:function(de,Oe,Ze,mt,Mt){Mt===!0&&(de*=mt,Oe*=mt,Ze*=mt),xe.set(de,Oe,Ze,mt),te.equals(xe)===!1&&(i.clearColor(de,Oe,Ze,mt),te.copy(xe))},reset:function(){z=!1,Q=null,te.set(-1,0,0,0)}}}function t(){let z=!1,xe=null,Q=null,te=null;return{setTest:function(de){de?le(i.DEPTH_TEST):U(i.DEPTH_TEST)},setMask:function(de){xe!==de&&!z&&(i.depthMask(de),xe=de)},setFunc:function(de){if(Q!==de){switch(de){case gd:i.depthFunc(i.NEVER);break;case _d:i.depthFunc(i.ALWAYS);break;case xd:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case vd:i.depthFunc(i.EQUAL);break;case Md:i.depthFunc(i.GEQUAL);break;case yd:i.depthFunc(i.GREATER);break;case Sd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=de}},setLocked:function(de){z=de},setClear:function(de){te!==de&&(i.clearDepth(de),te=de)},reset:function(){z=!1,xe=null,Q=null,te=null}}}function n(){let z=!1,xe=null,Q=null,te=null,de=null,Oe=null,Ze=null,mt=null,Mt=null;return{setTest:function(nt){z||(nt?le(i.STENCIL_TEST):U(i.STENCIL_TEST))},setMask:function(nt){xe!==nt&&!z&&(i.stencilMask(nt),xe=nt)},setFunc:function(nt,an,on){(Q!==nt||te!==an||de!==on)&&(i.stencilFunc(nt,an,on),Q=nt,te=an,de=on)},setOp:function(nt,an,on){(Oe!==nt||Ze!==an||mt!==on)&&(i.stencilOp(nt,an,on),Oe=nt,Ze=an,mt=on)},setLocked:function(nt){z=nt},setClear:function(nt){Mt!==nt&&(i.clearStencil(nt),Mt=nt)},reset:function(){z=!1,xe=null,Q=null,te=null,de=null,Oe=null,Ze=null,mt=null,Mt=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,h=[],f=null,g=!1,x=null,m=null,p=null,v=null,_=null,S=null,b=null,E=new Me(0,0,0),w=0,T=!1,y=null,M=null,P=null,D=null,N=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,F=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=F>=2);let H=null,ee={};const re=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),K=new bt().fromArray(re),fe=new bt().fromArray(ie);function W(z,xe,Q,te){const de=new Uint8Array(4),Oe=i.createTexture();i.bindTexture(z,Oe),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<Q;Ze++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(xe+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return Oe}const J={};J[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(i.DEPTH_TEST),s.setFunc(Bs),Re(!1),qe(Dc),le(i.CULL_FACE),Fe(Kn);function le(z){l[z]!==!0&&(i.enable(z),l[z]=!0)}function U(z){l[z]!==!1&&(i.disable(z),l[z]=!1)}function se(z,xe){return u[z]!==xe?(i.bindFramebuffer(z,xe),u[z]=xe,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xe),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function _e(z,xe){let Q=h,te=!1;if(z){Q=d.get(xe),Q===void 0&&(Q=[],d.set(xe,Q));const de=z.textures;if(Q.length!==de.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,Ze=de.length;Oe<Ze;Oe++)Q[Oe]=i.COLOR_ATTACHMENT0+Oe;Q.length=de.length,te=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,te=!0);te&&i.drawBuffers(Q)}function Ee(z){return f!==z?(i.useProgram(z),f=z,!0):!1}const O={[pi]:i.FUNC_ADD,[Qh]:i.FUNC_SUBTRACT,[ed]:i.FUNC_REVERSE_SUBTRACT};O[td]=i.MIN,O[nd]=i.MAX;const Ae={[id]:i.ZERO,[rd]:i.ONE,[sd]:i.SRC_COLOR,[mo]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[ld]:i.DST_COLOR,[od]:i.DST_ALPHA,[ad]:i.ONE_MINUS_SRC_COLOR,[go]:i.ONE_MINUS_SRC_ALPHA,[ud]:i.ONE_MINUS_DST_COLOR,[cd]:i.ONE_MINUS_DST_ALPHA,[dd]:i.CONSTANT_COLOR,[fd]:i.ONE_MINUS_CONSTANT_COLOR,[pd]:i.CONSTANT_ALPHA,[md]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(z,xe,Q,te,de,Oe,Ze,mt,Mt,nt){if(z===Kn){g===!0&&(U(i.BLEND),g=!1);return}if(g===!1&&(le(i.BLEND),g=!0),z!==Jh){if(z!==x||nt!==T){if((m!==pi||_!==pi)&&(i.blendEquation(i.FUNC_ADD),m=pi,_=pi),nt)switch(z){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nr:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,v=null,S=null,b=null,E.set(0,0,0),w=0,x=z,T=nt}return}de=de||xe,Oe=Oe||Q,Ze=Ze||te,(xe!==m||de!==_)&&(i.blendEquationSeparate(O[xe],O[de]),m=xe,_=de),(Q!==p||te!==v||Oe!==S||Ze!==b)&&(i.blendFuncSeparate(Ae[Q],Ae[te],Ae[Oe],Ae[Ze]),p=Q,v=te,S=Oe,b=Ze),(mt.equals(E)===!1||Mt!==w)&&(i.blendColor(mt.r,mt.g,mt.b,Mt),E.copy(mt),w=Mt),x=z,T=!1}function $e(z,xe){z.side===ct?U(i.CULL_FACE):le(i.CULL_FACE);let Q=z.side===zt;xe&&(Q=!Q),Re(Q),z.blending===$i&&z.transparent===!1?Fe(Kn):Fe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const te=z.stencilWrite;o.setTest(te),te&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ne(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):U(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(z){y!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),y=z)}function qe(z){z!==Zh?(le(i.CULL_FACE),z!==M&&(z===Dc?i.cullFace(i.BACK):z===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):U(i.CULL_FACE),M=z}function Be(z){z!==P&&(B&&i.lineWidth(z),P=z)}function Ne(z,xe,Q){z?(le(i.POLYGON_OFFSET_FILL),(D!==xe||N!==Q)&&(i.polygonOffset(xe,Q),D=xe,N=Q)):U(i.POLYGON_OFFSET_FILL)}function at(z){z?le(i.SCISSOR_TEST):U(i.SCISSOR_TEST)}function I(z){z===void 0&&(z=i.TEXTURE0+k-1),H!==z&&(i.activeTexture(z),H=z)}function C(z,xe,Q){Q===void 0&&(H===null?Q=i.TEXTURE0+k-1:Q=H);let te=ee[Q];te===void 0&&(te={type:void 0,texture:void 0},ee[Q]=te),(te.type!==z||te.texture!==xe)&&(H!==Q&&(i.activeTexture(Q),H=Q),i.bindTexture(z,xe||J[z]),te.type=z,te.texture=xe)}function $(){const z=ee[H];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(z){K.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),K.copy(z))}function ge(z){fe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),fe.copy(z))}function Ge(z,xe){let Q=c.get(xe);Q===void 0&&(Q=new WeakMap,c.set(xe,Q));let te=Q.get(z);te===void 0&&(te=i.getUniformBlockIndex(xe,z.name),Q.set(z,te))}function Xe(z,xe){const te=c.get(xe).get(z);a.get(xe)!==te&&(i.uniformBlockBinding(xe,te,z.__bindingPointIndex),a.set(xe,te))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},H=null,ee={},u={},d=new WeakMap,h=[],f=null,g=!1,x=null,m=null,p=null,v=null,_=null,S=null,b=null,E=new Me(0,0,0),w=0,T=!1,y=null,M=null,P=null,D=null,N=null,K.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:U,bindFramebuffer:se,drawBuffers:_e,useProgram:Ee,setBlending:Fe,setMaterial:$e,setFlipSided:Re,setCullFace:qe,setLineWidth:Be,setPolygonOffset:Ne,setScissorTest:at,activeTexture:I,bindTexture:C,unbindTexture:$,compressedTexImage2D:ne,compressedTexImage3D:Z,texImage2D:ye,texImage3D:ke,updateUBOMapping:Ge,uniformBlockBinding:Xe,texStorage2D:we,texStorage3D:ae,texSubImage2D:j,texSubImage3D:oe,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:Le,viewport:ge,reset:pt}}function h1(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,C){return f?new OffscreenCanvas(I,C):qs("canvas")}function x(I,C,$){let ne=1;const Z=at(I);if((Z.width>$||Z.height>$)&&(ne=$/Math.max(Z.width,Z.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const j=Math.floor(ne*Z.width),oe=Math.floor(ne*Z.height);d===void 0&&(d=g(j,oe));const ce=C?g(j,oe):d;return ce.width=j,ce.height=oe,ce.getContext("2d").drawImage(I,0,0,j,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+oe+")."),ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==Xt&&I.minFilter!==en}function p(I){i.generateMipmap(I)}function v(I,C,$,ne,Z=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let j=C;if(C===i.RED&&($===i.FLOAT&&(j=i.R32F),$===i.HALF_FLOAT&&(j=i.R16F),$===i.UNSIGNED_BYTE&&(j=i.R8)),C===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(j=i.R8UI),$===i.UNSIGNED_SHORT&&(j=i.R16UI),$===i.UNSIGNED_INT&&(j=i.R32UI),$===i.BYTE&&(j=i.R8I),$===i.SHORT&&(j=i.R16I),$===i.INT&&(j=i.R32I)),C===i.RG&&($===i.FLOAT&&(j=i.RG32F),$===i.HALF_FLOAT&&(j=i.RG16F),$===i.UNSIGNED_BYTE&&(j=i.RG8)),C===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(j=i.RG8UI),$===i.UNSIGNED_SHORT&&(j=i.RG16UI),$===i.UNSIGNED_INT&&(j=i.RG32UI),$===i.BYTE&&(j=i.RG8I),$===i.SHORT&&(j=i.RG16I),$===i.INT&&(j=i.RG32I)),C===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),C===i.RGBA){const oe=Z?Vs:et.getTransfer(ne);$===i.FLOAT&&(j=i.RGBA32F),$===i.HALF_FLOAT&&(j=i.RGBA16F),$===i.UNSIGNED_BYTE&&(j=oe===ot?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(I,C){let $;return I?C===null||C===sr||C===ar?$=i.DEPTH24_STENCIL8:C===$n?$=i.DEPTH32F_STENCIL8:C===ks&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===sr||C===ar?$=i.DEPTH_COMPONENT24:C===$n?$=i.DEPTH_COMPONENT32F:C===ks&&($=i.DEPTH_COMPONENT16),$}function S(I,C){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Xt&&I.minFilter!==en?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function b(I){const C=I.target;C.removeEventListener("dispose",b),w(C),C.isVideoTexture&&u.delete(C)}function E(I){const C=I.target;C.removeEventListener("dispose",E),y(C)}function w(I){const C=n.get(I);if(C.__webglInit===void 0)return;const $=I.source,ne=h.get($);if(ne){const Z=ne[C.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(I),Object.keys(ne).length===0&&h.delete($)}n.remove(I)}function T(I){const C=n.get(I);i.deleteTexture(C.__webglTexture);const $=I.source,ne=h.get($);delete ne[C.__cacheKey],o.memory.textures--}function y(I){const C=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(C.__webglFramebuffer[ne]))for(let Z=0;Z<C.__webglFramebuffer[ne].length;Z++)i.deleteFramebuffer(C.__webglFramebuffer[ne][Z]);else i.deleteFramebuffer(C.__webglFramebuffer[ne]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[ne])}else{if(Array.isArray(C.__webglFramebuffer))for(let ne=0;ne<C.__webglFramebuffer.length;ne++)i.deleteFramebuffer(C.__webglFramebuffer[ne]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ne=0;ne<C.__webglColorRenderbuffer.length;ne++)C.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[ne]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const $=I.textures;for(let ne=0,Z=$.length;ne<Z;ne++){const j=n.get($[ne]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove($[ne])}n.remove(I)}let M=0;function P(){M=0}function D(){const I=M;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),M+=1,I}function N(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function k(I,C){const $=n.get(I);if(I.isVideoTexture&&Be(I),I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){const ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe($,I,C);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+C)}function B(I,C){const $=n.get(I);if(I.version>0&&$.__version!==I.version){fe($,I,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+C)}function F(I,C){const $=n.get(I);if(I.version>0&&$.__version!==I.version){fe($,I,C);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+C)}function X(I,C){const $=n.get(I);if(I.version>0&&$.__version!==I.version){W($,I,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+C)}const H={[vo]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},ee={[Xt]:i.NEAREST,[Ld]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},re={[qd]:i.NEVER,[Kd]:i.ALWAYS,[Xd]:i.LESS,[$u]:i.LEQUAL,[Yd]:i.EQUAL,[jd]:i.GEQUAL,[$d]:i.GREATER,[Zd]:i.NOTEQUAL};function ie(I,C){if(C.type===$n&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===en||C.magFilter===Ma||C.magFilter===Jr||C.magFilter===xi||C.minFilter===en||C.minFilter===Ma||C.minFilter===Jr||C.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,H[C.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,H[C.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,H[C.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ee[C.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ee[C.minFilter]),C.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,re[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Xt||C.minFilter!==Jr&&C.minFilter!==xi||C.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function K(I,C){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",b));const ne=C.source;let Z=h.get(ne);Z===void 0&&(Z={},h.set(ne,Z));const j=N(C);if(j!==I.__cacheKey){Z[j]===void 0&&(Z[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),Z[j].usedTimes++;const oe=Z[I.__cacheKey];oe!==void 0&&(Z[I.__cacheKey].usedTimes--,oe.usedTimes===0&&T(C)),I.__cacheKey=j,I.__webglTexture=Z[j].texture}return $}function fe(I,C,$){let ne=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ne=i.TEXTURE_3D);const Z=K(I,C),j=C.source;t.bindTexture(ne,I.__webglTexture,i.TEXTURE0+$);const oe=n.get(j);if(j.version!==oe.__version||Z===!0){t.activeTexture(i.TEXTURE0+$);const ce=et.getPrimaries(et.workingColorSpace),ue=C.colorSpace===Yn?null:et.getPrimaries(C.colorSpace),we=C.colorSpace===Yn||ce===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ae=x(C.image,!1,r.maxTextureSize);ae=Ne(C,ae);const ye=s.convert(C.format,C.colorSpace),ke=s.convert(C.type);let Le=v(C.internalFormat,ye,ke,C.colorSpace,C.isVideoTexture);ie(ne,C);let ge;const Ge=C.mipmaps,Xe=C.isVideoTexture!==!0,pt=oe.__version===void 0||Z===!0,z=j.dataReady,xe=S(C,ae);if(C.isDepthTexture)Le=_(C.format===or,C.type),pt&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Le,ae.width,ae.height,0,ye,ke,null));else if(C.isDataTexture)if(Ge.length>0){Xe&&pt&&t.texStorage2D(i.TEXTURE_2D,xe,Le,Ge[0].width,Ge[0].height);for(let Q=0,te=Ge.length;Q<te;Q++)ge=Ge[Q],Xe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ge.width,ge.height,ye,ke,ge.data):t.texImage2D(i.TEXTURE_2D,Q,Le,ge.width,ge.height,0,ye,ke,ge.data);C.generateMipmaps=!1}else Xe?(pt&&t.texStorage2D(i.TEXTURE_2D,xe,Le,ae.width,ae.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,ye,ke,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Le,ae.width,ae.height,0,ye,ke,ae.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xe&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Le,Ge[0].width,Ge[0].height,ae.depth);for(let Q=0,te=Ge.length;Q<te;Q++)if(ge=Ge[Q],C.format!==un)if(ye!==null)if(Xe){if(z)if(C.layerUpdates.size>0){for(const de of C.layerUpdates){const Oe=ge.width*ge.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,de,ge.width,ge.height,1,ye,ge.data.slice(Oe*de,Oe*(de+1)),0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,ae.depth,ye,ge.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Le,ge.width,ge.height,ae.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,ae.depth,ye,ke,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Le,ge.width,ge.height,ae.depth,0,ye,ke,ge.data)}else{Xe&&pt&&t.texStorage2D(i.TEXTURE_2D,xe,Le,Ge[0].width,Ge[0].height);for(let Q=0,te=Ge.length;Q<te;Q++)ge=Ge[Q],C.format!==un?ye!==null?Xe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ge.width,ge.height,ye,ke,ge.data):t.texImage2D(i.TEXTURE_2D,Q,Le,ge.width,ge.height,0,ye,ke,ge.data)}else if(C.isDataArrayTexture)if(Xe){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Le,ae.width,ae.height,ae.depth),z)if(C.layerUpdates.size>0){let Q;switch(ke){case i.UNSIGNED_BYTE:switch(ye){case i.ALPHA:Q=1;break;case i.LUMINANCE:Q=1;break;case i.LUMINANCE_ALPHA:Q=2;break;case i.RGB:Q=3;break;case i.RGBA:Q=4;break;default:throw new Error(`Unknown texel size for format ${ye}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:Q=1;break;default:throw new Error(`Unknown texel size for type ${ke}.`)}const te=ae.width*ae.height*Q;for(const de of C.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,ae.width,ae.height,1,ye,ke,ae.data.slice(te*de,te*(de+1)));C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ye,ke,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,ye,ke,ae.data);else if(C.isData3DTexture)Xe?(pt&&t.texStorage3D(i.TEXTURE_3D,xe,Le,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ye,ke,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,ye,ke,ae.data);else if(C.isFramebufferTexture){if(pt)if(Xe)t.texStorage2D(i.TEXTURE_2D,xe,Le,ae.width,ae.height);else{let Q=ae.width,te=ae.height;for(let de=0;de<xe;de++)t.texImage2D(i.TEXTURE_2D,de,Le,Q,te,0,ye,ke,null),Q>>=1,te>>=1}}else if(Ge.length>0){if(Xe&&pt){const Q=at(Ge[0]);t.texStorage2D(i.TEXTURE_2D,xe,Le,Q.width,Q.height)}for(let Q=0,te=Ge.length;Q<te;Q++)ge=Ge[Q],Xe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ye,ke,ge):t.texImage2D(i.TEXTURE_2D,Q,Le,ye,ke,ge);C.generateMipmaps=!1}else if(Xe){if(pt){const Q=at(ae);t.texStorage2D(i.TEXTURE_2D,xe,Le,Q.width,Q.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,ke,ae)}else t.texImage2D(i.TEXTURE_2D,0,Le,ye,ke,ae);m(C)&&p(ne),oe.__version=j.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function W(I,C,$){if(C.image.length!==6)return;const ne=K(I,C),Z=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);const j=n.get(Z);if(Z.version!==j.__version||ne===!0){t.activeTexture(i.TEXTURE0+$);const oe=et.getPrimaries(et.workingColorSpace),ce=C.colorSpace===Yn?null:et.getPrimaries(C.colorSpace),ue=C.colorSpace===Yn||oe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const we=C.isCompressedTexture||C.image[0].isCompressedTexture,ae=C.image[0]&&C.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!we&&!ae?ye[te]=x(C.image[te],!0,r.maxCubemapSize):ye[te]=ae?C.image[te].image:C.image[te],ye[te]=Ne(C,ye[te]);const ke=ye[0],Le=s.convert(C.format,C.colorSpace),ge=s.convert(C.type),Ge=v(C.internalFormat,Le,ge,C.colorSpace),Xe=C.isVideoTexture!==!0,pt=j.__version===void 0||ne===!0,z=Z.dataReady;let xe=S(C,ke);ie(i.TEXTURE_CUBE_MAP,C);let Q;if(we){Xe&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ge,ke.width,ke.height);for(let te=0;te<6;te++){Q=ye[te].mipmaps;for(let de=0;de<Q.length;de++){const Oe=Q[de];C.format!==un?Le!==null?Xe?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,Oe.width,Oe.height,Le,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,Ge,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,Oe.width,Oe.height,Le,ge,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,Ge,Oe.width,Oe.height,0,Le,ge,Oe.data)}}}else{if(Q=C.mipmaps,Xe&&pt){Q.length>0&&xe++;const te=at(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ge,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Xe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,Le,ge,ye[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,ye[te].width,ye[te].height,0,Le,ge,ye[te].data);for(let de=0;de<Q.length;de++){const Ze=Q[de].image[te].image;Xe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,Ze.width,Ze.height,Le,ge,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,Ge,Ze.width,Ze.height,0,Le,ge,Ze.data)}}else{Xe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,ge,ye[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,Le,ge,ye[te]);for(let de=0;de<Q.length;de++){const Oe=Q[de];Xe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,Le,ge,Oe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,Ge,Le,ge,Oe.image[te])}}}m(C)&&p(i.TEXTURE_CUBE_MAP),j.__version=Z.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function J(I,C,$,ne,Z,j){const oe=s.convert($.format,$.colorSpace),ce=s.convert($.type),ue=v($.internalFormat,oe,ce,$.colorSpace);if(!n.get(C).__hasExternalTextures){const ae=Math.max(1,C.width>>j),ye=Math.max(1,C.height>>j);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,ue,ae,ye,C.depth,0,oe,ce,null):t.texImage2D(Z,j,ue,ae,ye,0,oe,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),qe(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Z,n.get($).__webglTexture,0,Re(C)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,Z,n.get($).__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(I,C,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),C.depthBuffer){const ne=C.depthTexture,Z=ne&&ne.isDepthTexture?ne.type:null,j=_(C.stencilBuffer,Z),oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Re(C);qe(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,j,C.width,C.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,j,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,j,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,I)}else{const ne=C.textures;for(let Z=0;Z<ne.length;Z++){const j=ne[Z],oe=s.convert(j.format,j.colorSpace),ce=s.convert(j.type),ue=v(j.internalFormat,oe,ce,j.colorSpace),we=Re(C);$&&qe(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ue,C.width,C.height):qe(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,ue,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ue,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function U(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),k(C.depthTexture,0);const ne=n.get(C.depthTexture).__webglTexture,Z=Re(C);if(C.depthTexture.format===Zi)qe(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(C.depthTexture.format===or)qe(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function se(I){const C=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");U(C.__webglFramebuffer,I)}else if($){C.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ne]),C.__webglDepthbuffer[ne]=i.createRenderbuffer(),le(C.__webglDepthbuffer[ne],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),le(C.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(I,C,$){const ne=n.get(I);C!==void 0&&J(ne.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&se(I)}function Ee(I){const C=I.texture,$=n.get(I),ne=n.get(C);I.addEventListener("dispose",E);const Z=I.textures,j=I.isWebGLCubeRenderTarget===!0,oe=Z.length>1;if(oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=C.version,o.memory.textures++),j){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[ce]=[];for(let ue=0;ue<C.mipmaps.length;ue++)$.__webglFramebuffer[ce][ue]=i.createFramebuffer()}else $.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let ce=0;ce<C.mipmaps.length;ce++)$.__webglFramebuffer[ce]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(oe)for(let ce=0,ue=Z.length;ce<ue;ce++){const we=n.get(Z[ce]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&qe(I)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ce=0;ce<Z.length;ce++){const ue=Z[ce];$.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ce]);const we=s.convert(ue.format,ue.colorSpace),ae=s.convert(ue.type),ye=v(ue.internalFormat,we,ae,ue.colorSpace,I.isXRRenderTarget===!0),ke=Re(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,ye,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,$.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),le($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ie(i.TEXTURE_CUBE_MAP,C);for(let ce=0;ce<6;ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let ue=0;ue<C.mipmaps.length;ue++)J($.__webglFramebuffer[ce][ue],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else J($.__webglFramebuffer[ce],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(C)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let ce=0,ue=Z.length;ce<ue;ce++){const we=Z[ce],ae=n.get(we);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),ie(i.TEXTURE_2D,we),J($.__webglFramebuffer,I,we,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(we)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ne.__webglTexture),ie(ce,C),C.mipmaps&&C.mipmaps.length>0)for(let ue=0;ue<C.mipmaps.length;ue++)J($.__webglFramebuffer[ue],I,C,i.COLOR_ATTACHMENT0,ce,ue);else J($.__webglFramebuffer,I,C,i.COLOR_ATTACHMENT0,ce,0);m(C)&&p(ce),t.unbindTexture()}I.depthBuffer&&se(I)}function O(I){const C=I.textures;for(let $=0,ne=C.length;$<ne;$++){const Z=C[$];if(m(Z)){const j=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(Z).__webglTexture;t.bindTexture(j,oe),p(j),t.unbindTexture()}}}const Ae=[],Fe=[];function $e(I){if(I.samples>0){if(qe(I)===!1){const C=I.textures,$=I.width,ne=I.height;let Z=i.COLOR_BUFFER_BIT;const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(I),ce=C.length>1;if(ce)for(let ue=0;ue<C.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ue=0;ue<C.length;ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const we=n.get(C[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,$,ne,0,0,$,ne,Z,i.NEAREST),c===!0&&(Ae.length=0,Fe.length=0,Ae.push(i.COLOR_ATTACHMENT0+ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ae.push(j),Fe.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<C.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const we=n.get(C[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const C=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Re(I){return Math.min(r.maxSamples,I.samples)}function qe(I){const C=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Be(I){const C=o.render.frame;u.get(I)!==C&&(u.set(I,C),I.update())}function Ne(I,C){const $=I.colorSpace,ne=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==ni&&$!==Yn&&(et.getTransfer($)===ot?(ne!==un||Z!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}function at(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=_e,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=J,this.useMultisampledRTT=qe}function d1(i,e){function t(n,r=Yn){let s;const o=et.getTransfer(r);if(n===ei)return i.UNSIGNED_BYTE;if(n===Gu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Id)return i.BYTE;if(n===Dd)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===Hu)return i.INT;if(n===sr)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===na)return i.HALF_FLOAT;if(n===Nd)return i.ALPHA;if(n===Od)return i.RGB;if(n===un)return i.RGBA;if(n===Fd)return i.LUMINANCE;if(n===zd)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===Bd)return i.RED;if(n===qu)return i.RED_INTEGER;if(n===kd)return i.RG;if(n===Xu)return i.RG_INTEGER;if(n===Yu)return i.RGBA_INTEGER;if(n===ya||n===Sa||n===Ea||n===wa)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Fc||n===zc||n===Bc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kc||n===Vc||n===Hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===kc||n===Vc)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gc||n===Wc||n===qc||n===Xc||n===Yc||n===$c||n===Zc||n===jc||n===Kc||n===Jc||n===Qc||n===el||n===tl||n===nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$c)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===il||n===rl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ba)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vd||n===sl||n===al||n===ol)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class f1 extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ft extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p1={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p1)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const m1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g1=`
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

}`;class _1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Nt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:m1,fragmentShader:g1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new sa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class x1 extends Ei{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const x=new _1,m=t.getContextAttributes();let p=null,v=null;const _=[],S=[],b=new pe;let E=null;const w=new Qt;w.layers.enable(1),w.viewport=new bt;const T=new Qt;T.layers.enable(2),T.viewport=new bt;const y=[w,T],M=new f1;M.layers.enable(1),M.layers.enable(2);let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=_[W];return J===void 0&&(J=new ja,_[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=_[W];return J===void 0&&(J=new ja,_[W]=J),J.getGripSpace()},this.getHand=function(W){let J=_[W];return J===void 0&&(J=new ja,_[W]=J),J.getHandSpace()};function N(W){const J=S.indexOf(W.inputSource);if(J===-1)return;const le=_[J];le!==void 0&&(le.update(W.inputSource,W.frame,l||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",B);for(let W=0;W<_.length;W++){const J=S[W];J!==null&&(S[W]=null,_[W].disconnect(J))}P=null,D=null,x.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,v=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",k),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new yi(f.framebufferWidth,f.framebufferHeight,{format:un,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,le=null,U=null;m.depth&&(U=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?or:Zi,le=m.stencil?ar:sr);const se={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new yi(h.textureWidth,h.textureHeight,{format:un,type:ei,depthTexture:new ah(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(W){for(let J=0;J<W.removed.length;J++){const le=W.removed[J],U=S.indexOf(le);U>=0&&(S[U]=null,_[U].disconnect(le))}for(let J=0;J<W.added.length;J++){const le=W.added[J];let U=S.indexOf(le);if(U===-1){for(let _e=0;_e<_.length;_e++)if(_e>=S.length){S.push(le),U=_e;break}else if(S[_e]===null){S[_e]=le,U=_e;break}if(U===-1)break}const se=_[U];se&&se.connect(le)}}const F=new L,X=new L;function H(W,J,le){F.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const U=F.distanceTo(X),se=J.projectionMatrix.elements,_e=le.projectionMatrix.elements,Ee=se[14]/(se[10]-1),O=se[14]/(se[10]+1),Ae=(se[9]+1)/se[5],Fe=(se[9]-1)/se[5],$e=(se[8]-1)/se[0],Re=(_e[8]+1)/_e[0],qe=Ee*$e,Be=Ee*Re,Ne=U/(-$e+Re),at=Ne*-$e;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(at),W.translateZ(Ne),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const I=Ee+Ne,C=O+Ne,$=qe-at,ne=Be+(U-at),Z=Ae*O/C*I,j=Fe*O/C*I;W.projectionMatrix.makePerspective($,ne,Z,j,I,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ee(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),M.near=T.near=w.near=W.near,M.far=T.far=w.far=W.far,(P!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,D=M.far,w.near=P,w.far=D,T.near=P,T.far=D,w.updateProjectionMatrix(),T.updateProjectionMatrix(),W.updateProjectionMatrix());const J=W.parent,le=M.cameras;ee(M,J);for(let U=0;U<le.length;U++)ee(le[U],J);le.length===2?H(M,w,T):M.projectionMatrix.copy(w.projectionMatrix),re(W,M,J)};function re(W,J,le){le===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Hr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(W){c=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ie=null;function K(W,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let U=!1;le.length!==M.cameras.length&&(M.cameras.length=0,U=!0);for(let _e=0;_e<le.length;_e++){const Ee=le[_e];let O=null;if(f!==null)O=f.getViewport(Ee);else{const Fe=d.getViewSubImage(h,Ee);O=Fe.viewport,_e===0&&(e.setRenderTargetTextures(v,Fe.colorTexture,h.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(v))}let Ae=y[_e];Ae===void 0&&(Ae=new Qt,Ae.layers.enable(_e),Ae.viewport=new bt,y[_e]=Ae),Ae.matrix.fromArray(Ee.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ee.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(O.x,O.y,O.width,O.height),_e===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),U===!0&&M.cameras.push(Ae)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const _e=d.getDepthInformation(le[0]);_e&&_e.isValid&&_e.texture&&x.init(e,_e,r.renderState)}}for(let le=0;le<_.length;le++){const U=S[le],se=_[le];U!==null&&se!==void 0&&se.update(U,J,l||o)}ie&&ie(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const fe=new sh;fe.setAnimationLoop(K),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}}const di=new sn,v1=new st;function M1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,th(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),_=v.envMap,S=v.envMapRotation;_&&(m.envMap.value=_,di.copy(S),di.x*=-1,di.y*=-1,di.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(di)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function y1(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const S=_.program;n.uniformBlockBinding(v,S)}function l(v,_){let S=r[v.id];S===void 0&&(g(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const b=_.program;n.updateUBOMapping(v,b);const E=e.render.frame;s[v.id]!==E&&(h(v),s[v.id]=E)}function u(v){const _=d();v.__bindingPointIndex=_;const S=i.createBuffer(),b=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],S=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,w=S.length;E<w;E++){const T=Array.isArray(S[E])?S[E]:[S[E]];for(let y=0,M=T.length;y<M;y++){const P=T[y];if(f(P,E,y,b)===!0){const D=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let B=0;B<N.length;B++){const F=N[B],X=x(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,D+k,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,S,b){const E=v.value,w=_+"_"+S;if(b[w]===void 0)return typeof E=="number"||typeof E=="boolean"?b[w]=E:b[w]=E.clone(),!0;{const T=b[w];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return b[w]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function g(v){const _=v.uniforms;let S=0;const b=16;for(let w=0,T=_.length;w<T;w++){const y=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,P=y.length;M<P;M++){const D=y[M],N=Array.isArray(D.value)?D.value:[D.value];for(let k=0,B=N.length;k<B;k++){const F=N[k],X=x(F),H=S%b;H!==0&&b-H<X.boundary&&(S+=b-H),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=X.storage}}}const E=S%b;return E>0&&(S+=b-E),v.__size=S,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class oa{constructor(e={}){const{canvas:t=mf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=Jn,this.toneMappingExposure=1;const _=this;let S=!1,b=0,E=0,w=null,T=-1,y=null;const M=new bt,P=new bt;let D=null;const N=new Me(0);let k=0,B=t.width,F=t.height,X=1,H=null,ee=null;const re=new bt(0,0,B,F),ie=new bt(0,0,B,F);let K=!1;const fe=new Zo;let W=!1,J=!1;const le=new st,U=new L,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Ee(){return w===null?X:1}let O=n;function Ae(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ho}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",te,!1),O===null){const V="webgl2";if(O=Ae(V,R),O===null)throw Ae(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,$e,Re,qe,Be,Ne,at,I,C,$,ne,Z,j,oe,ce,ue,we,ae,ye,ke,Le,ge,Ge,Xe;function pt(){Fe=new P0(O),Fe.init(),ge=new d1(O,Fe),$e=new w0(O,Fe,e,ge),Re=new u1(O),qe=new D0(O),Be=new jg,Ne=new h1(O,Fe,Re,Be,$e,ge,qe),at=new A0(_),I=new R0(_),C=new kf(O),Ge=new S0(O,C),$=new L0(O,C,qe,Ge),ne=new N0(O,$,C,qe),ye=new U0(O,$e,Ne),ue=new b0(Be),Z=new Zg(_,at,I,Fe,$e,Ge,ue),j=new M1(_,Be),oe=new Jg,ce=new r1(Fe),ae=new y0(_,at,I,Re,ne,h,c),we=new l1(_,ne,$e),Xe=new y1(O,qe,$e,Re),ke=new E0(O,Fe,qe),Le=new I0(O,Fe,qe),qe.programs=Z.programs,_.capabilities=$e,_.extensions=Fe,_.properties=Be,_.renderLists=oe,_.shadowMap=we,_.state=Re,_.info=qe}pt();const z=new x1(_,O);this.xr=z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(B,F,!1))},this.getSize=function(R){return R.set(B,F)},this.setSize=function(R,V,q=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,F=V,t.width=Math.floor(R*X),t.height=Math.floor(V*X),q===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(B*X,F*X).floor()},this.setDrawingBufferSize=function(R,V,q){B=R,F=V,X=q,t.width=Math.floor(R*q),t.height=Math.floor(V*q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(re)},this.setViewport=function(R,V,q,Y){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,V,q,Y),Re.viewport(M.copy(re).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,V,q,Y){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,V,q,Y),Re.scissor(P.copy(ie).multiplyScalar(X).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(R){Re.setScissorTest(K=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){ee=R},this.getClearColor=function(R){return R.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(R=!0,V=!0,q=!0){let Y=0;if(R){let G=!1;if(w!==null){const he=w.texture.format;G=he===Yu||he===Xu||he===qu}if(G){const he=w.texture.type,ve=he===ei||he===sr||he===ks||he===ar||he===Gu||he===Wu,Se=ae.getClearColor(),be=ae.getClearAlpha(),De=Se.r,Ue=Se.g,Pe=Se.b;ve?(f[0]=De,f[1]=Ue,f[2]=Pe,f[3]=be,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=De,g[1]=Ue,g[2]=Pe,g[3]=be,O.clearBufferiv(O.COLOR,0,g))}else Y|=O.COLOR_BUFFER_BIT}V&&(Y|=O.DEPTH_BUFFER_BIT),q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",te,!1),oe.dispose(),ce.dispose(),Be.dispose(),at.dispose(),I.dispose(),ne.dispose(),Ge.dispose(),Xe.dispose(),Z.dispose(),z.dispose(),z.removeEventListener("sessionstart",an),z.removeEventListener("sessionend",on),si.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=qe.autoReset,V=we.enabled,q=we.autoUpdate,Y=we.needsUpdate,G=we.type;pt(),qe.autoReset=R,we.enabled=V,we.autoUpdate=q,we.needsUpdate=Y,we.type=G}function te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function de(R){const V=R.target;V.removeEventListener("dispose",de),Oe(V)}function Oe(R){Ze(R),Be.remove(R)}function Ze(R){const V=Be.get(R).programs;V!==void 0&&(V.forEach(function(q){Z.releaseProgram(q)}),R.isShaderMaterial&&Z.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,q,Y,G,he){V===null&&(V=se);const ve=G.isMesh&&G.matrixWorld.determinant()<0,Se=Hh(R,V,q,Y,G);Re.setMaterial(Y,ve);let be=q.index,De=1;if(Y.wireframe===!0){if(be=$.getWireframeAttribute(q),be===void 0)return;De=2}const Ue=q.drawRange,Pe=q.attributes.position;let je=Ue.start*De,ut=(Ue.start+Ue.count)*De;he!==null&&(je=Math.max(je,he.start*De),ut=Math.min(ut,(he.start+he.count)*De)),be!==null?(je=Math.max(je,0),ut=Math.min(ut,be.count)):Pe!=null&&(je=Math.max(je,0),ut=Math.min(ut,Pe.count));const ht=ut-je;if(ht<0||ht===1/0)return;Ge.setup(G,Y,Se,q,be);let Bt,Je=ke;if(be!==null&&(Bt=C.get(be),Je=Le,Je.setIndex(Bt)),G.isMesh)Y.wireframe===!0?(Re.setLineWidth(Y.wireframeLinewidth*Ee()),Je.setMode(O.LINES)):Je.setMode(O.TRIANGLES);else if(G.isLine){let Te=Y.linewidth;Te===void 0&&(Te=1),Re.setLineWidth(Te*Ee()),G.isLineSegments?Je.setMode(O.LINES):G.isLineLoop?Je.setMode(O.LINE_LOOP):Je.setMode(O.LINE_STRIP)}else G.isPoints?Je.setMode(O.POINTS):G.isSprite&&Je.setMode(O.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?Je.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):Je.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Je.renderInstances(je,ht,G.count);else if(q.isInstancedBufferGeometry){const Te=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Lt=Math.min(q.instanceCount,Te);Je.renderInstances(je,ht,Lt)}else Je.render(je,ht)};function mt(R,V,q){R.transparent===!0&&R.side===ct&&R.forceSinglePass===!1?(R.side=zt,R.needsUpdate=!0,Zr(R,V,q),R.side=pn,R.needsUpdate=!0,Zr(R,V,q),R.side=ct):Zr(R,V,q)}this.compile=function(R,V,q=null){q===null&&(q=R),m=ce.get(q),m.init(V),v.push(m),q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),R!==q&&R.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Y=new Set;return R.traverse(function(G){const he=G.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const Se=he[ve];mt(Se,q,G),Y.add(Se)}else mt(he,q,G),Y.add(he)}),v.pop(),m=null,Y},this.compileAsync=function(R,V,q=null){const Y=this.compile(R,V,q);return new Promise(G=>{function he(){if(Y.forEach(function(ve){Be.get(ve).currentProgram.isReady()&&Y.delete(ve)}),Y.size===0){G(R);return}setTimeout(he,10)}Fe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Mt=null;function nt(R){Mt&&Mt(R)}function an(){si.stop()}function on(){si.start()}const si=new sh;si.setAnimationLoop(nt),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(R){Mt=R,z.setAnimationLoop(R),R===null?si.stop():si.start()},z.addEventListener("sessionstart",an),z.addEventListener("sessionend",on),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(V),V=z.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,V,w),m=ce.get(R,v.length),m.init(V),v.push(m),le.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),fe.setFromProjectionMatrix(le),J=this.localClippingEnabled,W=ue.init(this.clippingPlanes,J),x=oe.get(R,p.length),x.init(),p.push(x),z.enabled===!0&&z.isPresenting===!0){const he=_.xr.getDepthSensingMesh();he!==null&&ma(he,V,-1/0,_.sortObjects)}ma(R,V,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(H,ee),_e=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,_e&&ae.addToRenderList(x,R),this.info.render.frame++,W===!0&&ue.beginShadows();const q=m.state.shadowsArray;we.render(q,R,V),W===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=x.opaque,G=x.transmissive;if(m.setupLights(),V.isArrayCamera){const he=V.cameras;if(G.length>0)for(let ve=0,Se=he.length;ve<Se;ve++){const be=he[ve];Tc(Y,G,R,be)}_e&&ae.render(R);for(let ve=0,Se=he.length;ve<Se;ve++){const be=he[ve];Ac(x,R,be,be.viewport)}}else G.length>0&&Tc(Y,G,R,V),_e&&ae.render(R),Ac(x,R,V);w!==null&&(Ne.updateMultisampleRenderTarget(w),Ne.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(_,R,V),Ge.resetDefaultState(),T=-1,y=null,v.pop(),v.length>0?(m=v[v.length-1],W===!0&&ue.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function ma(R,V,q,Y){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||fe.intersectsSprite(R)){Y&&U.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);const ve=ne.update(R),Se=R.material;Se.visible&&x.push(R,ve,Se,q,U.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||fe.intersectsObject(R))){const ve=ne.update(R),Se=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),U.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),U.copy(ve.boundingSphere.center)),U.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){const be=ve.groups;for(let De=0,Ue=be.length;De<Ue;De++){const Pe=be[De],je=Se[Pe.materialIndex];je&&je.visible&&x.push(R,ve,je,q,U.z,Pe)}}else Se.visible&&x.push(R,ve,Se,q,U.z,null)}}const he=R.children;for(let ve=0,Se=he.length;ve<Se;ve++)ma(he[ve],V,q,Y)}function Ac(R,V,q,Y){const G=R.opaque,he=R.transmissive,ve=R.transparent;m.setupLightsView(q),W===!0&&ue.setGlobalState(_.clippingPlanes,q),Y&&Re.viewport(M.copy(Y)),G.length>0&&$r(G,V,q),he.length>0&&$r(he,V,q),ve.length>0&&$r(ve,V,q),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Tc(R,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new yi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?na:ei,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const he=m.state.transmissionRenderTarget[Y.id],ve=Y.viewport||M;he.setSize(ve.z,ve.w);const Se=_.getRenderTarget();_.setRenderTarget(he),_.getClearColor(N),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_e?ae.render(q):_.clear();const be=_.toneMapping;_.toneMapping=Jn;const De=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),W===!0&&ue.setGlobalState(_.clippingPlanes,Y),$r(R,q,Y),Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Pe=0,je=V.length;Pe<je;Pe++){const ut=V[Pe],ht=ut.object,Bt=ut.geometry,Je=ut.material,Te=ut.group;if(Je.side===ct&&ht.layers.test(Y.layers)){const Lt=Je.side;Je.side=zt,Je.needsUpdate=!0,Cc(ht,q,Y,Bt,Je,Te),Je.side=Lt,Je.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he))}_.setRenderTarget(Se),_.setClearColor(N,k),De!==void 0&&(Y.viewport=De),_.toneMapping=be}function $r(R,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,he=R.length;G<he;G++){const ve=R[G],Se=ve.object,be=ve.geometry,De=Y===null?ve.material:Y,Ue=ve.group;Se.layers.test(q.layers)&&Cc(Se,V,q,be,De,Ue)}}function Cc(R,V,q,Y,G,he){R.onBeforeRender(_,V,q,Y,G,he),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(_,V,q,Y,R,he),G.transparent===!0&&G.side===ct&&G.forceSinglePass===!1?(G.side=zt,G.needsUpdate=!0,_.renderBufferDirect(q,V,Y,G,R,he),G.side=pn,G.needsUpdate=!0,_.renderBufferDirect(q,V,Y,G,R,he),G.side=ct):_.renderBufferDirect(q,V,Y,G,R,he),R.onAfterRender(_,V,q,Y,G,he)}function Zr(R,V,q){V.isScene!==!0&&(V=se);const Y=Be.get(R),G=m.state.lights,he=m.state.shadowsArray,ve=G.state.version,Se=Z.getParameters(R,G.state,he,V,q),be=Z.getProgramCacheKey(Se);let De=Y.programs;Y.environment=R.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(R.isMeshStandardMaterial?I:at).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,De===void 0&&(R.addEventListener("dispose",de),De=new Map,Y.programs=De);let Ue=De.get(be);if(Ue!==void 0){if(Y.currentProgram===Ue&&Y.lightsStateVersion===ve)return Pc(R,Se),Ue}else Se.uniforms=Z.getUniforms(R),R.onBuild(q,Se,_),R.onBeforeCompile(Se,_),Ue=Z.acquireProgram(Se,be),De.set(be,Ue),Y.uniforms=Se.uniforms;const Pe=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=ue.uniform),Pc(R,Se),Y.needsLights=Wh(R),Y.lightsStateVersion=ve,Y.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.directionalShadowMap.value=G.state.directionalShadowMap,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotShadowMap.value=G.state.spotShadowMap,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMap.value=G.state.pointShadowMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ue,Y.uniformsList=null,Ue}function Rc(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Os.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Pc(R,V){const q=Be.get(R);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Hh(R,V,q,Y,G){V.isScene!==!0&&(V=se),Ne.resetTextureUnits();const he=V.fog,ve=Y.isMeshStandardMaterial?V.environment:null,Se=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ni,be=(Y.isMeshStandardMaterial?I:at).get(Y.envMap||ve),De=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ue=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pe=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color;let ht=Jn;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=_.toneMapping);const Bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Je=Bt!==void 0?Bt.length:0,Te=Be.get(Y),Lt=m.state.lights;if(W===!0&&(J===!0||R!==y)){const Ht=R===y&&Y.id===T;ue.setState(Y,R,Ht)}let it=!1;Y.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Lt.state.version||Te.outputColorSpace!==Se||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==be||Y.fog===!0&&Te.fog!==he||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ue.numPlanes||Te.numIntersection!==ue.numIntersection)||Te.vertexAlphas!==De||Te.vertexTangents!==Ue||Te.morphTargets!==Pe||Te.morphNormals!==je||Te.morphColors!==ut||Te.toneMapping!==ht||Te.morphTargetsCount!==Je)&&(it=!0):(it=!0,Te.__version=Y.version);let gn=Te.currentProgram;it===!0&&(gn=Zr(Y,V,G));let jr=!1,ai=!1,ga=!1;const yt=gn.getUniforms(),zn=Te.uniforms;if(Re.useProgram(gn.program)&&(jr=!0,ai=!0,ga=!0),Y.id!==T&&(T=Y.id,ai=!0),jr||y!==R){yt.setValue(O,"projectionMatrix",R.projectionMatrix),yt.setValue(O,"viewMatrix",R.matrixWorldInverse);const Ht=yt.map.cameraPosition;Ht!==void 0&&Ht.setValue(O,U.setFromMatrixPosition(R.matrixWorld)),$e.logarithmicDepthBuffer&&yt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&yt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,ai=!0,ga=!0)}if(G.isSkinnedMesh){yt.setOptional(O,G,"bindMatrix"),yt.setOptional(O,G,"bindMatrixInverse");const Ht=G.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),yt.setValue(O,"boneTexture",Ht.boneTexture,Ne))}G.isBatchedMesh&&(yt.setOptional(O,G,"batchingTexture"),yt.setValue(O,"batchingTexture",G._matricesTexture,Ne),yt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&yt.setValue(O,"batchingColorTexture",G._colorsTexture,Ne));const _a=q.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0)&&ye.update(G,q,gn),(ai||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,yt.setValue(O,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zn.envMap.value=be,zn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(zn.envMapIntensity.value=V.environmentIntensity),ai&&(yt.setValue(O,"toneMappingExposure",_.toneMappingExposure),Te.needsLights&&Gh(zn,ga),he&&Y.fog===!0&&j.refreshFogUniforms(zn,he),j.refreshMaterialUniforms(zn,Y,X,F,m.state.transmissionRenderTarget[R.id]),Os.upload(O,Rc(Te),zn,Ne)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Os.upload(O,Rc(Te),zn,Ne),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&yt.setValue(O,"center",G.center),yt.setValue(O,"modelViewMatrix",G.modelViewMatrix),yt.setValue(O,"normalMatrix",G.normalMatrix),yt.setValue(O,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ht=Y.uniformsGroups;for(let xa=0,qh=Ht.length;xa<qh;xa++){const Lc=Ht[xa];Xe.update(Lc,gn),Xe.bind(Lc,gn)}}return gn}function Gh(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Wh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,V,q){Be.get(R.texture).__webglTexture=V,Be.get(R.depthTexture).__webglTexture=q;const Y=Be.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const q=Be.get(R);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,q=0){w=R,b=V,E=q;let Y=!0,G=null,he=!1,ve=!1;if(R){const be=Be.get(R);be.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1):be.__webglFramebuffer===void 0?Ne.setupRenderTarget(R):be.__hasExternalTextures&&Ne.rebindTextures(R,Be.get(R.texture).__webglTexture,Be.get(R.depthTexture).__webglTexture);const De=R.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ve=!0);const Ue=Be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[V])?G=Ue[V][q]:G=Ue[V],he=!0):R.samples>0&&Ne.useMultisampledRTT(R)===!1?G=Be.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[q]:G=Ue,M.copy(R.viewport),P.copy(R.scissor),D=R.scissorTest}else M.copy(re).multiplyScalar(X).floor(),P.copy(ie).multiplyScalar(X).floor(),D=K;if(Re.bindFramebuffer(O.FRAMEBUFFER,G)&&Y&&Re.drawBuffers(R,G),Re.viewport(M),Re.scissor(P),Re.setScissorTest(D),he){const be=Be.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,be.__webglTexture,q)}else if(ve){const be=Be.get(R.texture),De=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,q||0,De)}T=-1},this.readRenderTargetPixels=function(R,V,q,Y,G,he,ve){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Re.bindFramebuffer(O.FRAMEBUFFER,Se);try{const be=R.texture,De=be.format,Ue=be.type;if(!$e.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-G&&O.readPixels(V,q,Y,G,ge.convert(De),ge.convert(Ue),he)}finally{const be=w!==null?Be.get(w).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(R,V,q,Y,G,he,ve){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Re.bindFramebuffer(O.FRAMEBUFFER,Se);try{const be=R.texture,De=be.format,Ue=be.type;if(!$e.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-G){const Pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.bufferData(O.PIXEL_PACK_BUFFER,he.byteLength,O.STREAM_READ),O.readPixels(V,q,Y,G,ge.convert(De),ge.convert(Ue),0),O.flush();const je=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await gf(O,je,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,he)}finally{O.deleteBuffer(Pe),O.deleteSync(je)}return he}}finally{const be=w!==null?Be.get(w).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(R,V=null,q=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const Y=Math.pow(2,-q),G=Math.floor(R.image.width*Y),he=Math.floor(R.image.height*Y),ve=V!==null?V.x:0,Se=V!==null?V.y:0;Ne.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,ve,Se,G,he),Re.unbindTexture()},this.copyTextureToTexture=function(R,V,q=null,Y=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],V=arguments[2],G=arguments[3]||0,q=null);let he,ve,Se,be,De,Ue;q!==null?(he=q.max.x-q.min.x,ve=q.max.y-q.min.y,Se=q.min.x,be=q.min.y):(he=R.image.width,ve=R.image.height,Se=0,be=0),Y!==null?(De=Y.x,Ue=Y.y):(De=0,Ue=0);const Pe=ge.convert(V.format),je=ge.convert(V.type);Ne.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const ut=O.getParameter(O.UNPACK_ROW_LENGTH),ht=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Bt=O.getParameter(O.UNPACK_SKIP_PIXELS),Je=O.getParameter(O.UNPACK_SKIP_ROWS),Te=O.getParameter(O.UNPACK_SKIP_IMAGES),Lt=R.isCompressedTexture?R.mipmaps[G]:R.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Lt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Se),O.pixelStorei(O.UNPACK_SKIP_ROWS,be),R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,De,Ue,he,ve,Pe,je,Lt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,De,Ue,Lt.width,Lt.height,Pe,Lt.data):O.texSubImage2D(O.TEXTURE_2D,G,De,Ue,Pe,je,Lt),O.pixelStorei(O.UNPACK_ROW_LENGTH,ut),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Je),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Te),G===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(R,V,q=null,Y=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],V=arguments[3],G=arguments[4]||0);let he,ve,Se,be,De,Ue,Pe,je,ut;const ht=R.isCompressedTexture?R.mipmaps[G]:R.image;q!==null?(he=q.max.x-q.min.x,ve=q.max.y-q.min.y,Se=q.max.z-q.min.z,be=q.min.x,De=q.min.y,Ue=q.min.z):(he=ht.width,ve=ht.height,Se=ht.depth,be=0,De=0,Ue=0),Y!==null?(Pe=Y.x,je=Y.y,ut=Y.z):(Pe=0,je=0,ut=0);const Bt=ge.convert(V.format),Je=ge.convert(V.type);let Te;if(V.isData3DTexture)Ne.setTexture3D(V,0),Te=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Ne.setTexture2DArray(V,0),Te=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Lt=O.getParameter(O.UNPACK_ROW_LENGTH),it=O.getParameter(O.UNPACK_IMAGE_HEIGHT),gn=O.getParameter(O.UNPACK_SKIP_PIXELS),jr=O.getParameter(O.UNPACK_SKIP_ROWS),ai=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,De),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ue),R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Te,G,Pe,je,ut,he,ve,Se,Bt,Je,ht.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Te,G,Pe,je,ut,he,ve,Se,Bt,ht.data):O.texSubImage3D(Te,G,Pe,je,ut,he,ve,Se,Bt,Je,ht),O.pixelStorei(O.UNPACK_ROW_LENGTH,Lt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it),O.pixelStorei(O.UNPACK_SKIP_PIXELS,gn),O.pixelStorei(O.UNPACK_SKIP_ROWS,jr),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ai),G===0&&V.generateMipmaps&&O.generateMipmap(Te),Re.unbindTexture()},this.initRenderTarget=function(R){Be.get(R).__webglFramebuffer===void 0&&Ne.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ne.setTextureCube(R,0):R.isData3DTexture?Ne.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ne.setTexture2DArray(R,0):Ne.setTexture2D(R,0),Re.unbindTexture()},this.resetState=function(){b=0,E=0,w=null,Re.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qo?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===ia?"display-p3":"srgb"}}class ca extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class S1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yo("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new L;class Xs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dh extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gi;const Ar=new L,Wi=new L,qi=new L,Xi=new pe,Tr=new pe,fh=new st,ys=new L,Cr=new L,Ss=new L,Ql=new pe,Ka=new pe,eu=new pe;class E1 extends gt{constructor(e=new dh){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new We;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new S1(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Xs(n,3,0,!1)),Gi.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),fh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-qi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Es(ys.set(-.5,-.5,0),qi,o,Wi,r,s),Es(Cr.set(.5,-.5,0),qi,o,Wi,r,s),Es(Ss.set(.5,.5,0),qi,o,Wi,r,s),Ql.set(0,0),Ka.set(1,0),eu.set(1,1);let a=e.ray.intersectTriangle(ys,Cr,Ss,!1,Ar);if(a===null&&(Es(Cr.set(-.5,.5,0),qi,o,Wi,r,s),Ka.set(0,1),a=e.ray.intersectTriangle(ys,Ss,Cr,!1,Ar),a===null))return;const c=e.ray.origin.distanceTo(Ar);c<e.near||c>e.far||t.push({distance:c,point:Ar.clone(),uv:qt.getInterpolation(Ar,ys,Cr,Ss,Ql,Ka,eu,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Es(i,e,t,n,r,s){Xi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Tr.x=s*Xi.x-r*Xi.y,Tr.y=r*Xi.x+s*Xi.y):Tr.copy(Xi),i.copy(e),i.x+=Tr.x,i.y+=Tr.y,i.applyMatrix4(fh)}class bi extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ys=new L,$s=new L,tu=new st,Rr=new ra,ws=new wi,Ja=new L,nu=new L;class Gr extends gt{constructor(e=new We,t=new bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ys.fromBufferAttribute(t,r-1),$s.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ys.distanceTo($s);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),ws.radius+=s,e.ray.intersectsSphere(ws)===!1)return;tu.copy(r).invert(),Rr.copy(e.ray).applyMatrix4(tu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=u.getX(x),v=u.getX(x+1),_=bs(this,e,Rr,c,p,v);_&&t.push(_)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),p=bs(this,e,Rr,c,x,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=bs(this,e,Rr,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=bs(this,e,Rr,c,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bs(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(Ys.fromBufferAttribute(o,r),$s.fromBufferAttribute(o,s),t.distanceSqToSegment(Ys,$s,Ja,nu)>n)return;Ja.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ja);if(!(c<e.near||c>e.far))return{distance:c,point:nu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const iu=new L,ru=new L;class Ko extends Gr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)iu.fromBufferAttribute(t,r),ru.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+iu.distanceTo(ru);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class w1 extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const su=new st,Eo=new ra,As=new wi,Ts=new L;class b1 extends gt{constructor(e=new We,t=new w1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),As.radius+=s,e.ray.intersectsSphere(As)===!1)return;su.copy(r).invert(),Eo.copy(e.ray).applyMatrix4(su);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,x=f;g<x;g++){const m=l.getX(g);Ts.fromBufferAttribute(d,m),au(Ts,m,c,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,x=f;g<x;g++)Ts.fromBufferAttribute(d,g),au(Ts,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function au(i,e,t,n,r,s,o){const a=Eo.distanceSqToPoint(i);if(a<t){const c=new L;Eo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class A1 extends Nt{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new pe:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,r=[],s=[],o=[],a=new L,c=new st;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(wt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(wt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ph extends Fn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new pe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class T1 extends ph{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jo(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Cs=new L,Qa=new Jo,eo=new Jo,to=new Jo;class mh extends Fn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Cs.subVectors(r[0],r[1]).add(r[0]),l=Cs);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Cs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Qa.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,x,m),eo.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,x,m),to.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),eo.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),to.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Qa.calc(c),eo.calc(c),to.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ou(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function C1(i,e){const t=1-i;return t*t*e}function R1(i,e){return 2*(1-i)*i*e}function P1(i,e){return i*i*e}function Nr(i,e,t,n){return C1(i,e)+R1(i,t)+P1(i,n)}function L1(i,e){const t=1-i;return t*t*t*e}function I1(i,e){const t=1-i;return 3*t*t*i*e}function D1(i,e){return 3*(1-i)*i*i*e}function U1(i,e){return i*i*i*e}function Or(i,e,t,n,r){return L1(i,e)+I1(i,t)+D1(i,n)+U1(i,r)}class N1 extends Fn{constructor(e=new pe,t=new pe,n=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,r.x,s.x,o.x,a.x),Or(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class O1 extends Fn{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,r.x,s.x,o.x,a.x),Or(e,r.y,s.y,o.y,a.y),Or(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class F1 extends Fn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z1 extends Fn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B1 extends Fn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Nr(e,r.x,s.x,o.x),Nr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gh extends Fn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Nr(e,r.x,s.x,o.x),Nr(e,r.y,s.y,o.y),Nr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k1 extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(ou(a,c.x,l.x,u.x,d.x),ou(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var V1=Object.freeze({__proto__:null,ArcCurve:T1,CatmullRomCurve3:mh,CubicBezierCurve:N1,CubicBezierCurve3:O1,EllipseCurve:ph,LineCurve:F1,LineCurve3:z1,QuadraticBezierCurve:B1,QuadraticBezierCurve3:gh,SplineCurve:k1});class Qo extends We{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new L,u=new pe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class fr extends We{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const x=[],m=n/2;let p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(f,2));function v(){const S=new L,b=new L;let E=0;const w=(t-e)/n;for(let T=0;T<=s;T++){const y=[],M=T/s,P=M*(t-e)+e;for(let D=0;D<=r;D++){const N=D/r,k=N*c+a,B=Math.sin(k),F=Math.cos(k);b.x=P*B,b.y=-M*n+m,b.z=P*F,d.push(b.x,b.y,b.z),S.set(B,w,F).normalize(),h.push(S.x,S.y,S.z),f.push(N,1-M),y.push(g++)}x.push(y)}for(let T=0;T<r;T++)for(let y=0;y<s;y++){const M=x[y][T],P=x[y+1][T],D=x[y+1][T+1],N=x[y][T+1];u.push(M,P,N),u.push(P,D,N),E+=6}l.addGroup(p,E,0),p+=E}function _(S){const b=g,E=new pe,w=new L;let T=0;const y=S===!0?e:t,M=S===!0?1:-1;for(let D=1;D<=r;D++)d.push(0,m*M,0),h.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let D=0;D<=r;D++){const k=D/r*c+a,B=Math.cos(k),F=Math.sin(k);w.x=y*F,w.y=m*M,w.z=y*B,d.push(w.x,w.y,w.z),h.push(0,M,0),E.x=B*.5+.5,E.y=F*.5*M+.5,f.push(E.x,E.y),g++}for(let D=0;D<r;D++){const N=b+D,k=P+D;S===!0?u.push(k,k+1,N):u.push(k+1,k,N),T+=3}l.addGroup(p,T,S===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ec extends fr{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ec(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tc extends We{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new L,S=new L,b=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],S),f(t[E+2],b),c(_,S,b,v)}function c(v,_,S,b){const E=b+1,w=[];for(let T=0;T<=E;T++){w[T]=[];const y=v.clone().lerp(S,T/E),M=_.clone().lerp(S,T/E),P=E-T;for(let D=0;D<=P;D++)D===0&&T===E?w[T][D]=y:w[T][D]=y.clone().lerp(M,D/P)}for(let T=0;T<E;T++)for(let y=0;y<2*(E-T)-1;y++){const M=Math.floor(y/2);y%2===0?(h(w[T][M+1]),h(w[T+1][M]),h(w[T][M])):(h(w[T][M+1]),h(w[T+1][M+1]),h(w[T+1][M]))}}function l(v){const _=new L;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(v),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function u(){const v=new L;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const S=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(S,1-b)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const _=o[v+0],S=o[v+2],b=o[v+4],E=Math.max(_,S,b),w=Math.min(_,S,b);E>.9&&w<.1&&(_<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function f(v,_){const S=v*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function g(){const v=new L,_=new L,S=new L,b=new L,E=new pe,w=new pe,T=new pe;for(let y=0,M=0;y<s.length;y+=9,M+=6){v.set(s[y+0],s[y+1],s[y+2]),_.set(s[y+3],s[y+4],s[y+5]),S.set(s[y+6],s[y+7],s[y+8]),E.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),T.set(o[M+4],o[M+5]),b.copy(v).add(_).add(S).divideScalar(3);const P=m(b);x(E,M+0,v,P),x(w,M+2,_,P),x(T,M+4,S,P)}}function x(v,_,S,b){b<0&&v.x===1&&(o[_]=v.x-1),S.x===0&&S.z===0&&(o[_]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.vertices,e.indices,e.radius,e.details)}}const Rs=new L,Ps=new L,no=new L,Ls=new qt;class H1 extends We{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(ji*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:x,b:m,c:p}=Ls;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Ls.getNormal(no),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const _=(v+1)%3,S=d[v],b=d[_],E=Ls[u[v]],w=Ls[u[_]],T=`${S}_${b}`,y=`${b}_${S}`;y in h&&h[y]?(no.dot(h[y].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(w.x,w.y,w.z)),h[y]=null):T in h||(h[T]={index0:l[v],index1:l[_],normal:no.clone()})}}for(const g in h)if(h[g]){const{index0:x,index1:m}=h[g];Rs.fromBufferAttribute(a,x),Ps.fromBufferAttribute(a,m),f.push(Rs.x,Rs.y,Rs.z),f.push(Ps.x,Ps.y,Ps.z)}this.setAttribute("position",new Ie(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class nc extends tc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nc(e.radius,e.detail)}}class pr extends We{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new L,h=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&c===Math.PI&&(S=-.5/t);for(let b=0;b<=t;b++){const E=b/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(E+S,1-_),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const _=u[p][v+1],S=u[p][v],b=u[p+1][v],E=u[p+1][v+1];(p!==0||o>0)&&f.push(_,S,E),(p!==n-1||c<Math.PI)&&f.push(S,b,E)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ic extends We{constructor(e=new gh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new pe;let u=new L;const d=[],h=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(f,2));function x(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),v(),p()}function m(_){u=e.getPointAt(_/t,u);const S=o.normals[_],b=o.binormals[_];for(let E=0;E<=r;E++){const w=E/r*Math.PI*2,T=Math.sin(w),y=-Math.cos(w);c.x=y*S.x+T*b.x,c.y=y*S.y+T*b.y,c.z=y*S.z+T*b.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let S=1;S<=r;S++){const b=(r+1)*(_-1)+(S-1),E=(r+1)*_+(S-1),w=(r+1)*_+S,T=(r+1)*(_-1)+S;g.push(b,E,T),g.push(E,w,T)}}function v(){for(let _=0;_<=t;_++)for(let S=0;S<=r;S++)l.x=_/t,l.y=S/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ic(new V1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class _h extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G1 extends _h{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ji extends On{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rc extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class xh extends rc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const io=new st,cu=new L,lu=new L;class W1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class q1 extends W1{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mr extends rc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new q1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class la extends rc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const uu=new st;class X1{constructor(e,t,n=0,r=1/0){this.ray=new ra(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uu),this}intersectObject(e,t=!0,n=[]){return wo(e,this,n,t),n.sort(hu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)wo(e[r],this,n,t);return n.sort(hu),n}}function hu(i,e){return i.distance-e.distance}function wo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)wo(s[o],e,t,!0)}}const du=new L;let Is,ro;class Y1 extends gt{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Is===void 0&&(Is=new We,Is.setAttribute("position",new Ie([0,0,0,0,1,0],3)),ro=new fr(0,.5,1,5,1),ro.translate(0,-.5,0)),this.position.copy(t),this.line=new Gr(Is,new bi({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ye(ro,new Ot({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{du.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(du,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);const so={type:"change"},ao={type:"start"},oo={type:"end"};class $1 extends Ei{constructor(e,t){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:va.ROTATE,MIDDLE:va.DOLLY,RIGHT:va.PAN},this.target=new L;const s=1e-6,o=new L;let a=1,c=r.NONE,l=r.NONE,u=0,d=0,h=0;const f=new L,g=new pe,x=new pe,m=new L,p=new pe,v=new pe,_=new pe,S=new pe,b=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const U=n.domElement.getBoundingClientRect(),se=n.domElement.ownerDocument.documentElement;n.screen.left=U.left+window.pageXOffset-se.clientLeft,n.screen.top=U.top+window.pageYOffset-se.clientTop,n.screen.width=U.width,n.screen.height=U.height};const w=function(){const U=new pe;return function(_e,Ee){return U.set((_e-n.screen.left)/n.screen.width,(Ee-n.screen.top)/n.screen.height),U}}(),T=function(){const U=new pe;return function(_e,Ee){return U.set((_e-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-Ee))/n.screen.width),U}}();this.rotateCamera=function(){const U=new L,se=new lr,_e=new L,Ee=new L,O=new L,Ae=new L;return function(){Ae.set(x.x-g.x,x.y-g.y,0);let $e=Ae.length();$e?(f.copy(n.object.position).sub(n.target),_e.copy(f).normalize(),Ee.copy(n.object.up).normalize(),O.crossVectors(Ee,_e).normalize(),Ee.setLength(x.y-g.y),O.setLength(x.x-g.x),Ae.copy(Ee.add(O)),U.crossVectors(Ae,f).normalize(),$e*=n.rotateSpeed,se.setFromAxisAngle(U,$e),f.applyQuaternion(se),n.object.up.applyQuaternion(se),m.copy(U),h=$e):!n.staticMoving&&h&&(h*=Math.sqrt(1-n.dynamicDampingFactor),f.copy(n.object.position).sub(n.target),se.setFromAxisAngle(m,h),f.applyQuaternion(se),n.object.up.applyQuaternion(se)),g.copy(x)}}(),this.zoomCamera=function(){let U;c===r.TOUCH_ZOOM_PAN?(U=u/d,u=d,n.object.isPerspectiveCamera?f.multiplyScalar(U):n.object.isOrthographicCamera?(n.object.zoom=hl.clamp(n.object.zoom/U,n.minZoom,n.maxZoom),a!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(U=1+(v.y-p.y)*n.zoomSpeed,U!==1&&U>0&&(n.object.isPerspectiveCamera?f.multiplyScalar(U):n.object.isOrthographicCamera?(n.object.zoom=hl.clamp(n.object.zoom/U,n.minZoom,n.maxZoom),a!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?p.copy(v):p.y+=(v.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const U=new pe,se=new L,_e=new L;return function(){if(U.copy(S).sub(_),U.lengthSq()){if(n.object.isOrthographicCamera){const O=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,Ae=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;U.x*=O,U.y*=Ae}U.multiplyScalar(f.length()*n.panSpeed),_e.copy(f).cross(n.object.up).setLength(U.x),_e.add(se.copy(n.object.up).setLength(U.y)),n.object.position.add(_e),n.target.add(_e),n.staticMoving?_.copy(S):_.add(U.subVectors(S,_).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(f.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,f.setLength(n.maxDistance)),p.copy(v)),f.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,f.setLength(n.minDistance)),p.copy(v)))},this.update=function(){f.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,f),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),o.distanceToSquared(n.object.position)>s&&(n.dispatchEvent(so),o.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(o.distanceToSquared(n.object.position)>s||a!==n.object.zoom)&&(n.dispatchEvent(so),o.copy(n.object.position),a=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,l=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),f.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(so),o.copy(n.object.position),a=n.object.zoom};function y(U){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",P)),fe(U),U.pointerType==="touch"?ee(U):B(U))}function M(U){n.enabled!==!1&&(U.pointerType==="touch"?re(U):F(U))}function P(U){n.enabled!==!1&&(U.pointerType==="touch"?ie(U):X(),W(U),b.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",P)))}function D(U){W(U)}function N(U){n.enabled!==!1&&(window.removeEventListener("keydown",N),l===r.NONE&&(U.code===n.keys[r.ROTATE]&&!n.noRotate?l=r.ROTATE:U.code===n.keys[r.ZOOM]&&!n.noZoom?l=r.ZOOM:U.code===n.keys[r.PAN]&&!n.noPan&&(l=r.PAN)))}function k(){n.enabled!==!1&&(l=r.NONE,window.addEventListener("keydown",N))}function B(U){if(c===r.NONE)switch(U.button){case n.mouseButtons.LEFT:c=r.ROTATE;break;case n.mouseButtons.MIDDLE:c=r.ZOOM;break;case n.mouseButtons.RIGHT:c=r.PAN;break}const se=l!==r.NONE?l:c;se===r.ROTATE&&!n.noRotate?(x.copy(T(U.pageX,U.pageY)),g.copy(x)):se===r.ZOOM&&!n.noZoom?(p.copy(w(U.pageX,U.pageY)),v.copy(p)):se===r.PAN&&!n.noPan&&(_.copy(w(U.pageX,U.pageY)),S.copy(_)),n.dispatchEvent(ao)}function F(U){const se=l!==r.NONE?l:c;se===r.ROTATE&&!n.noRotate?(g.copy(x),x.copy(T(U.pageX,U.pageY))):se===r.ZOOM&&!n.noZoom?v.copy(w(U.pageX,U.pageY)):se===r.PAN&&!n.noPan&&S.copy(w(U.pageX,U.pageY))}function X(){c=r.NONE,n.dispatchEvent(oo)}function H(U){if(n.enabled!==!1&&n.noZoom!==!0){switch(U.preventDefault(),U.deltaMode){case 2:p.y-=U.deltaY*.025;break;case 1:p.y-=U.deltaY*.01;break;default:p.y-=U.deltaY*25e-5;break}n.dispatchEvent(ao),n.dispatchEvent(oo)}}function ee(U){switch(J(U),b.length){case 1:c=r.TOUCH_ROTATE,x.copy(T(b[0].pageX,b[0].pageY)),g.copy(x);break;default:c=r.TOUCH_ZOOM_PAN;const se=b[0].pageX-b[1].pageX,_e=b[0].pageY-b[1].pageY;d=u=Math.sqrt(se*se+_e*_e);const Ee=(b[0].pageX+b[1].pageX)/2,O=(b[0].pageY+b[1].pageY)/2;_.copy(w(Ee,O)),S.copy(_);break}n.dispatchEvent(ao)}function re(U){switch(J(U),b.length){case 1:g.copy(x),x.copy(T(U.pageX,U.pageY));break;default:const se=le(U),_e=U.pageX-se.x,Ee=U.pageY-se.y;d=Math.sqrt(_e*_e+Ee*Ee);const O=(U.pageX+se.x)/2,Ae=(U.pageY+se.y)/2;S.copy(w(O,Ae));break}}function ie(U){switch(b.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,x.copy(T(U.pageX,U.pageY)),g.copy(x);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let se=0;se<b.length;se++)if(b[se].pointerId!==U.pointerId){const _e=E[b[se].pointerId];x.copy(T(_e.x,_e.y)),g.copy(x);break}break}n.dispatchEvent(oo)}function K(U){n.enabled!==!1&&U.preventDefault()}function fe(U){b.push(U)}function W(U){delete E[U.pointerId];for(let se=0;se<b.length;se++)if(b[se].pointerId==U.pointerId){b.splice(se,1);return}}function J(U){let se=E[U.pointerId];se===void 0&&(se=new pe,E[U.pointerId]=se),se.set(U.pageX,U.pageY)}function le(U){const se=U.pointerId===b[0].pointerId?b[1]:b[0];return E[se.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",K),n.domElement.removeEventListener("pointerdown",y),n.domElement.removeEventListener("pointercancel",D),n.domElement.removeEventListener("wheel",H),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",P),window.removeEventListener("keydown",N),window.removeEventListener("keyup",k)},this.domElement.addEventListener("contextmenu",K),this.domElement.addEventListener("pointerdown",y),this.domElement.addEventListener("pointercancel",D),this.domElement.addEventListener("wheel",H,{passive:!1}),window.addEventListener("keydown",N),window.addEventListener("keyup",k),this.handleResize(),this.update()}}class Z1 extends Ye{constructor(e,t,n=!1,r=!1,s=1e4){const o=new We;super(o,t),this.isMarchingCubes=!0;const a=this,c=new Float32Array(12*3),l=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=n,this.enableColors=r,this.init=function(v){this.resolution=v,this.isolation=80,this.size=v,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const _=s*3;this.positionArray=new Float32Array(_*3);const S=new Rt(this.positionArray,3);S.setUsage(Qr),o.setAttribute("position",S),this.normalArray=new Float32Array(_*3);const b=new Rt(this.normalArray,3);if(b.setUsage(Qr),o.setAttribute("normal",b),this.enableUvs){this.uvArray=new Float32Array(_*2);const E=new Rt(this.uvArray,2);E.setUsage(Qr),o.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(_*3);const E=new Rt(this.colorArray,3);E.setUsage(Qr),o.setAttribute("color",E)}o.boundingSphere=new wi(new L,1)};function d(v,_,S){return v+(_-v)*S}function h(v,_,S,b,E,w,T,y,M,P){const D=(S-T)/(y-T),N=a.normal_cache;c[_+0]=b+D*a.delta,c[_+1]=E,c[_+2]=w,l[_+0]=d(N[v+0],N[v+3],D),l[_+1]=d(N[v+1],N[v+4],D),l[_+2]=d(N[v+2],N[v+5],D),u[_+0]=d(a.palette[M*3+0],a.palette[P*3+0],D),u[_+1]=d(a.palette[M*3+1],a.palette[P*3+1],D),u[_+2]=d(a.palette[M*3+2],a.palette[P*3+2],D)}function f(v,_,S,b,E,w,T,y,M,P){const D=(S-T)/(y-T),N=a.normal_cache;c[_+0]=b,c[_+1]=E+D*a.delta,c[_+2]=w;const k=v+a.yd*3;l[_+0]=d(N[v+0],N[k+0],D),l[_+1]=d(N[v+1],N[k+1],D),l[_+2]=d(N[v+2],N[k+2],D),u[_+0]=d(a.palette[M*3+0],a.palette[P*3+0],D),u[_+1]=d(a.palette[M*3+1],a.palette[P*3+1],D),u[_+2]=d(a.palette[M*3+2],a.palette[P*3+2],D)}function g(v,_,S,b,E,w,T,y,M,P){const D=(S-T)/(y-T),N=a.normal_cache;c[_+0]=b,c[_+1]=E,c[_+2]=w+D*a.delta;const k=v+a.zd*3;l[_+0]=d(N[v+0],N[k+0],D),l[_+1]=d(N[v+1],N[k+1],D),l[_+2]=d(N[v+2],N[k+2],D),u[_+0]=d(a.palette[M*3+0],a.palette[P*3+0],D),u[_+1]=d(a.palette[M*3+1],a.palette[P*3+1],D),u[_+2]=d(a.palette[M*3+2],a.palette[P*3+2],D)}function x(v){const _=v*3;a.normal_cache[_]===0&&(a.normal_cache[_+0]=a.field[v-1]-a.field[v+1],a.normal_cache[_+1]=a.field[v-a.yd]-a.field[v+a.yd],a.normal_cache[_+2]=a.field[v-a.zd]-a.field[v+a.zd])}function m(v,_,S,b,E){const w=b+1,T=b+a.yd,y=b+a.zd,M=w+a.yd,P=w+a.zd,D=b+a.yd+a.zd,N=w+a.yd+a.zd;let k=0;const B=a.field[b],F=a.field[w],X=a.field[T],H=a.field[M],ee=a.field[y],re=a.field[P],ie=a.field[D],K=a.field[N];B<E&&(k|=1),F<E&&(k|=2),X<E&&(k|=8),H<E&&(k|=4),ee<E&&(k|=16),re<E&&(k|=32),ie<E&&(k|=128),K<E&&(k|=64);const fe=j1[k];if(fe===0)return 0;const W=a.delta,J=v+W,le=_+W,U=S+W;fe&1&&(x(b),x(w),h(b*3,0,E,v,_,S,B,F,b,w)),fe&2&&(x(w),x(M),f(w*3,3,E,J,_,S,F,H,w,M)),fe&4&&(x(T),x(M),h(T*3,6,E,v,le,S,X,H,T,M)),fe&8&&(x(b),x(T),f(b*3,9,E,v,_,S,B,X,b,T)),fe&16&&(x(y),x(P),h(y*3,12,E,v,_,U,ee,re,y,P)),fe&32&&(x(P),x(N),f(P*3,15,E,J,_,U,re,K,P,N)),fe&64&&(x(D),x(N),h(D*3,18,E,v,le,U,ie,K,D,N)),fe&128&&(x(y),x(D),f(y*3,21,E,v,_,U,ee,ie,y,D)),fe&256&&(x(b),x(y),g(b*3,24,E,v,_,S,B,ee,b,y)),fe&512&&(x(w),x(P),g(w*3,27,E,J,_,S,F,re,w,P)),fe&1024&&(x(M),x(N),g(M*3,30,E,J,le,S,H,K,M,N)),fe&2048&&(x(T),x(D),g(T*3,33,E,v,le,S,X,ie,T,D)),k<<=4;let se,_e,Ee,O=0,Ae=0;for(;Ds[k+Ae]!=-1;)se=k+Ae,_e=se+1,Ee=se+2,p(c,l,u,3*Ds[se],3*Ds[_e],3*Ds[Ee]),Ae+=3,O++;return O}function p(v,_,S,b,E,w){const T=a.count*3;if(a.positionArray[T+0]=v[b],a.positionArray[T+1]=v[b+1],a.positionArray[T+2]=v[b+2],a.positionArray[T+3]=v[E],a.positionArray[T+4]=v[E+1],a.positionArray[T+5]=v[E+2],a.positionArray[T+6]=v[w],a.positionArray[T+7]=v[w+1],a.positionArray[T+8]=v[w+2],a.material.flatShading===!0){const y=(_[b+0]+_[E+0]+_[w+0])/3,M=(_[b+1]+_[E+1]+_[w+1])/3,P=(_[b+2]+_[E+2]+_[w+2])/3;a.normalArray[T+0]=y,a.normalArray[T+1]=M,a.normalArray[T+2]=P,a.normalArray[T+3]=y,a.normalArray[T+4]=M,a.normalArray[T+5]=P,a.normalArray[T+6]=y,a.normalArray[T+7]=M,a.normalArray[T+8]=P}else a.normalArray[T+0]=_[b+0],a.normalArray[T+1]=_[b+1],a.normalArray[T+2]=_[b+2],a.normalArray[T+3]=_[E+0],a.normalArray[T+4]=_[E+1],a.normalArray[T+5]=_[E+2],a.normalArray[T+6]=_[w+0],a.normalArray[T+7]=_[w+1],a.normalArray[T+8]=_[w+2];if(a.enableUvs){const y=a.count*2;a.uvArray[y+0]=v[b+0],a.uvArray[y+1]=v[b+2],a.uvArray[y+2]=v[E+0],a.uvArray[y+3]=v[E+2],a.uvArray[y+4]=v[w+0],a.uvArray[y+5]=v[w+2]}a.enableColors&&(a.colorArray[T+0]=S[b+0],a.colorArray[T+1]=S[b+1],a.colorArray[T+2]=S[b+2],a.colorArray[T+3]=S[E+0],a.colorArray[T+4]=S[E+1],a.colorArray[T+5]=S[E+2],a.colorArray[T+6]=S[w+0],a.colorArray[T+7]=S[w+1],a.colorArray[T+8]=S[w+2]),a.count+=3}this.addBall=function(v,_,S,b,E,w){const T=Math.sign(b);b=Math.abs(b);const y=w!=null;let M=new Me(v,_,S);if(y)try{M=w instanceof Me?w:Array.isArray(w)?new Me(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new Me(w)}catch{M=new Me(v,_,S)}const P=this.size*Math.sqrt(b/E),D=S*this.size,N=_*this.size,k=v*this.size;let B=Math.floor(D-P);B<1&&(B=1);let F=Math.floor(D+P);F>this.size-1&&(F=this.size-1);let X=Math.floor(N-P);X<1&&(X=1);let H=Math.floor(N+P);H>this.size-1&&(H=this.size-1);let ee=Math.floor(k-P);ee<1&&(ee=1);let re=Math.floor(k+P);re>this.size-1&&(re=this.size-1);let ie,K,fe,W,J,le,U,se,_e,Ee,O;for(fe=B;fe<F;fe++)for(J=this.size2*fe,se=fe/this.size-S,_e=se*se,K=X;K<H;K++)for(W=J+this.size*K,U=K/this.size-_,Ee=U*U,ie=ee;ie<re;ie++)if(le=ie/this.size-v,O=b/(1e-6+le*le+Ee+_e)-E,O>0){this.field[W+ie]+=O*T;const Ae=Math.sqrt((ie-k)*(ie-k)+(K-N)*(K-N)+(fe-D)*(fe-D))/P,Fe=1-Ae*Ae*Ae*(Ae*(Ae*6-15)+10);this.palette[(W+ie)*3+0]+=M.r*Fe,this.palette[(W+ie)*3+1]+=M.g*Fe,this.palette[(W+ie)*3+2]+=M.b*Fe}},this.addPlaneX=function(v,_){const S=this.size,b=this.yd,E=this.zd,w=this.field;let T,y,M,P,D,N,k,B=S*Math.sqrt(v/_);for(B>S&&(B=S),T=0;T<B;T++)if(N=T/S,P=N*N,D=v/(1e-4+P)-_,D>0)for(y=0;y<S;y++)for(k=T+y*b,M=0;M<S;M++)w[E*M+k]+=D},this.addPlaneY=function(v,_){const S=this.size,b=this.yd,E=this.zd,w=this.field;let T,y,M,P,D,N,k,B,F=S*Math.sqrt(v/_);for(F>S&&(F=S),y=0;y<F;y++)if(N=y/S,P=N*N,D=v/(1e-4+P)-_,D>0)for(k=y*b,T=0;T<S;T++)for(B=k+T,M=0;M<S;M++)w[E*M+B]+=D},this.addPlaneZ=function(v,_){const S=this.size,b=this.yd,E=this.zd,w=this.field;let T,y,M,P,D,N,k,B,F=S*Math.sqrt(v/_);for(F>S&&(F=S),M=0;M<F;M++)if(N=M/S,P=N*N,D=v/(1e-4+P)-_,D>0)for(k=E*M,y=0;y<S;y++)for(B=k+y*b,T=0;T<S;T++)w[B+T]+=D},this.setCell=function(v,_,S,b){const E=this.size2*S+this.size*_+v;this.field[E]=b},this.getCell=function(v,_,S){const b=this.size2*S+this.size*_+v;return this.field[b]},this.blur=function(v=1){const _=this.field,S=_.slice(),b=this.size,E=this.size2;for(let w=0;w<b;w++)for(let T=0;T<b;T++)for(let y=0;y<b;y++){const M=E*y+b*T+w;let P=S[M],D=1;for(let N=-1;N<=1;N+=2){const k=N+w;if(!(k<0||k>=b))for(let B=-1;B<=1;B+=2){const F=B+T;if(!(F<0||F>=b))for(let X=-1;X<=1;X+=2){const H=X+y;if(H<0||H>=b)continue;const ee=E*H+b*F+k,re=S[ee];D++,P+=v*(re-P)/D}}}_[M]=P}},this.reset=function(){for(let v=0;v<this.size3;v++)this.normal_cache[v*3]=0,this.field[v]=0,this.palette[v*3]=this.palette[v*3+1]=this.palette[v*3+2]=0},this.update=function(){this.count=0;const v=this.size-2;for(let _=1;_<v;_++){const S=this.size2*_,b=(_-this.halfsize)/this.halfsize;for(let E=1;E<v;E++){const w=S+this.size*E,T=(E-this.halfsize)/this.halfsize;for(let y=1;y<v;y++){const M=(y-this.halfsize)/this.halfsize,P=w+y;m(M,T,b,P,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>s&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const j1=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Ds=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function bo(i,e){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle=e;const r=i.length>2?34:i.length>1?44:58;n.font=`700 ${r}px Segoe UI, Arial, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(i,64,64);const s=new A1(t);s.colorSpace=Wt;const o=new dh({map:s,transparent:!0,alphaTest:.2,depthTest:!0,depthWrite:!1});o.toneMapped=!1;const a=new E1(o);return a.scale.set(.68,.68,.68),a.renderOrder=20,a}function Ao(i,e,t,n){const r=e.clone().sub(i),s=r.length(),o=new Ot({color:n});o.toneMapped=!1;const a=new Ye(new fr(t,t,s,48,1,!1),o);return a.position.copy(i).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new L(0,1,0),r.normalize()),a}function To(i,e,t,n,r){const s=new Ot({color:r});s.toneMapped=!1;const o=new Ye(new ec(n,t,96,1,!1),s);return o.position.copy(e),o.quaternion.setFromUnitVectors(new L(0,1,0),i.clone().normalize()),o}function Co(i,e=.2,t=.9){const n=new ft;n.userData.isAxis=!0,n.name="axis_group_auto";const r=i*t,s=i*.02,o=r*.1,a=s*3,c=[{dir:new L(1,0,0),color:16711680,label:"x",labelColor:"#ff0000"},{dir:new L(0,1,0),color:47400,label:"y",labelColor:"#00e63a"},{dir:new L(0,0,1),color:15785216,label:"z",labelColor:"#fff000"}];for(const l of c){const u=l.dir.clone().multiplyScalar(-r),d=l.dir.clone().multiplyScalar(r);n.add(Ao(u,d,s,l.color)),n.add(To(l.dir,l.dir.clone().multiplyScalar(r*1.01),o,a,l.color));const h=bo(l.label,l.labelColor);h.scale.setScalar(Math.max(.98,Math.min(1.18,i*.23))),l.label==="x"&&h.position.set(r*1.2,-e,0),l.label==="y"&&h.position.set(-e,r*1.2,0),l.label==="z"&&h.position.set(-e,-e,r*1.2),n.add(h)}return n}function K1(i,e,t,n){const r=new ft,s=Math.max(.018,i*.006),o=i*.08,a=s*3.2,c=new L(0,0,t),l=new L(i,0,t),u=new L(0,0,t+e);r.add(Ao(c,l,s,15785216)),r.add(To(new L(1,0,0),l,o,a,15785216)),r.add(Ao(c,u,s,22527)),r.add(To(new L(0,0,1),u,o,a,22527));const d=bo("r","#fff000");d.scale.setScalar(.48),d.position.set(i+o*.85,-i*.045,t),r.add(d);const h=bo(n==="R2"?"R*R":n,"#0057ff");return h.scale.setScalar(.58),h.position.set(-i*.08,0,t+e+o*.9),r.add(h),r}const lt=new ca;lt.background=new Me(1120295);function gr(i,e){const t=new $1(i,e);return t.rotateSpeed=3.2,t.zoomSpeed=1.15,t.panSpeed=.65,t.staticMoving=!1,t.dynamicDampingFactor=.12,t.noRotate=!1,t.noZoom=!1,t.noPan=!1,t}function co(i){return i.pointerType==="mouse"&&(i.button===2||(i.buttons&2)===2)}function Qi(i){var e;i&&(i.enabled=!0,i.noRotate=!1,i.noZoom=!1,i.noPan=!1,(e=i.handleResize)==null||e.call(i),i.update())}function Zn(i){var c,l,u,d,h;if(!i)return;const e=i.object,t=(c=e==null?void 0:e.position)==null?void 0:c.clone(),n=(l=e==null?void 0:e.quaternion)==null?void 0:l.clone(),r=(u=e==null?void 0:e.up)==null?void 0:u.clone(),s=e==null?void 0:e.zoom,o=(d=i.target)==null?void 0:d.clone(),a=i.staticMoving;typeof i.reset=="function"&&t&&o&&(i.staticMoving=!0,i.reset(),e.position.copy(t),n&&e.quaternion.copy(n),r&&e.up.copy(r),typeof s=="number"&&(e.zoom=s),i.target.copy(o),(h=e.updateProjectionMatrix)==null||h.call(e),i.staticMoving=a),Qi(i)}function ua(i,e){const t=i==null?void 0:i.querySelector("canvas");if(!t||!e)return;const n=()=>typeof e=="function"?e():e;t.addEventListener("pointerdown",r=>{if(co(r)){r.preventDefault(),r.stopImmediatePropagation(),Zn(n());return}Qi(n())},{capture:!0}),t.addEventListener("pointermove",r=>{co(r)&&(r.preventDefault(),r.stopImmediatePropagation())},{capture:!0}),t.addEventListener("pointerup",r=>{co(r)&&(r.preventDefault(),r.stopImmediatePropagation()),Qi(n())},{capture:!0}),t.addEventListener("pointercancel",()=>Zn(n()),{capture:!0}),t.addEventListener("lostpointercapture",()=>Zn(n())),t.addEventListener("mouseenter",()=>Qi(n())),t.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopImmediatePropagation(),Zn(n())},{capture:!0})}const rt=new hr(-5,5,5,-5,.1,1e3),mn=new oa({antialias:!0,preserveDrawingBuffer:!0});mn.setPixelRatio(Math.min(window.devicePixelRatio,2));mn.localClippingEnabled=!0;A.viewer.appendChild(mn.domElement);let Ce=gr(rt,mn.domElement);const Pt=new ca,dt=new hr(-5,5,5,-5,.1,1e3),ii=new oa({antialias:!0,preserveDrawingBuffer:!0});ii.setPixelRatio(Math.min(window.devicePixelRatio,2));ii.localClippingEnabled=!0;A.angularViewer.appendChild(ii.domElement);let ze=gr(dt,ii.domElement);const Dn=new ca,Et=new hr(-5,5,5,-5,.1,1e3);Et.up.set(0,0,1);const _r=new oa({antialias:!0,preserveDrawingBuffer:!0});_r.setPixelRatio(Math.min(window.devicePixelRatio,2));A.projectionViewer.appendChild(_r.domElement);const ln=gr(Et,_r.domElement),Un=new ca,At=new hr(-5,5,5,-5,.1,1e3),xr=new oa({antialias:!0,preserveDrawingBuffer:!0});xr.setPixelRatio(Math.min(window.devicePixelRatio,2));A.radialViewer.appendChild(xr.domElement);const Ft=gr(At,xr.domElement);ua(A.viewer,()=>Ce);ua(A.angularViewer,()=>ze);ua(A.projectionViewer,ln);ua(A.radialViewer,Ft);function vh(){Zn(Ce),Zn(ze),Zn(ln),Zn(Ft)}function J1(){var t,n,r;const i=((t=Ce==null?void 0:Ce.target)==null?void 0:t.clone())??new L,e={rotateSpeed:(Ce==null?void 0:Ce.rotateSpeed)??3.2,zoomSpeed:(Ce==null?void 0:Ce.zoomSpeed)??1.15,panSpeed:(Ce==null?void 0:Ce.panSpeed)??.65,staticMoving:(Ce==null?void 0:Ce.staticMoving)??!1,dynamicDampingFactor:(Ce==null?void 0:Ce.dynamicDampingFactor)??.12,noRotate:(Ce==null?void 0:Ce.noRotate)??!1,noZoom:(Ce==null?void 0:Ce.noZoom)??!1,noPan:(Ce==null?void 0:Ce.noPan)??!1};(n=Ce==null?void 0:Ce.dispose)==null||n.call(Ce),Ce=gr(rt,mn.domElement),Object.assign(Ce,e),Ce.target.copy(i),(r=Ce.handleResize)==null||r.call(Ce),Ce.update()}function Q1(){var t,n,r;const i=((t=ze==null?void 0:ze.target)==null?void 0:t.clone())??new L,e={rotateSpeed:(ze==null?void 0:ze.rotateSpeed)??3.2,zoomSpeed:(ze==null?void 0:ze.zoomSpeed)??1.15,panSpeed:(ze==null?void 0:ze.panSpeed)??.65,staticMoving:(ze==null?void 0:ze.staticMoving)??!1,dynamicDampingFactor:(ze==null?void 0:ze.dynamicDampingFactor)??.12,noRotate:!1,noZoom:!1,noPan:!1};(n=ze==null?void 0:ze.dispose)==null||n.call(ze),ze=gr(dt,ii.domElement),Object.assign(ze,e),ze.target.copy(i),(r=ze.handleResize)==null||r.call(ze),ze.update()}const sc=new mr(16777215,1.45);sc.position.set(0,0,1);rt.add(sc);rt.add(new mr(16777215,.22));lt.add(rt);lt.add(new la(16777215,.55));lt.add(new xh(16777215,1447446,.45));const ac=new mr(16777215,1.45);ac.position.set(0,0,1);dt.add(ac);dt.add(new mr(16777215,.22));Pt.add(dt);Pt.add(new la(16777215,.55));Pt.add(new xh(16777215,1447446,.45));const oc=new mr(16777215,1.7);oc.position.set(0,0,80);Dn.add(oc);Dn.add(new la(16777215,.65));const cc=new mr(16777215,1.8);cc.position.set(0,-40,60);Un.add(cc);Un.add(new la(16777215,.62));for(const i of[mn,ii,_r,xr])i.outputColorSpace=Wt,i.toneMapping=ku,i.toneMappingExposure=1.16;sc.intensity=1.45;ac.intensity=1.45;oc.intensity=1.88;cc.intensity=1.92;let vi=null,Mi=null;function e_(){const i=lt.getObjectByName("mainAxesGroup");i&&lt.remove(i);const e=Pt.getObjectByName("angularAxesGroup");e&&Pt.remove(e),vi=Co(4.5,.2,.9),vi.name="mainAxesGroup",Mi=Co(4.2,.1,.9),Mi.name="angularAxesGroup",lt.add(vi),Pt.add(Mi)}function t_(i){Mi=i}function n_(){return Mi}function i_(i,e){vi&&(vi.visible=i,e!==void 0&&vi.scale.setScalar(e)),Mi&&(Mi.visible=i),lt.traverse(t=>{t.userData&&t.userData.isAxis&&(t.visible=i,e!==void 0&&t===vi&&t.scale.setScalar(e))}),Pt.traverse(t=>{t.userData&&t.userData.isAxis&&(t.visible=i)})}const tt={drawing:!1,erasing:!1,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,strokes:[],currentStroke:null};function Mh(i){const e=A.sketchCanvas.getBoundingClientRect();return{x:(i.clientX-e.left)/Math.max(1,e.width),y:(i.clientY-e.top)/Math.max(1,e.height)}}function fu(i,e,t,n){if(!e.points.length)return;i.save(),i.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",i.strokeStyle=e.color,i.lineWidth=e.size,i.lineCap="round",i.lineJoin="round",i.beginPath();const r=e.points[0];i.moveTo(r.x*t,r.y*n);for(const s of e.points.slice(1))i.lineTo(s.x*t,s.y*n);e.points.length===1&&i.lineTo(r.x*t+.01,r.y*n+.01),i.stroke(),i.restore()}function qr(){const i=A.sketchCanvas;if(!i)return;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);for(const t of tt.strokes)fu(e,t,i.width,i.height);tt.currentStroke&&fu(e,tt.currentStroke,i.width,i.height)}function r_(){const i=A.sketchCanvas;if(!i)return;const e=i.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),n=Math.max(320,Math.floor(e.width*t)),r=Math.max(220,Math.floor(e.height*t));(i.width!==n||i.height!==r)&&(i.width=n,i.height=r,qr())}function lo(i){var e,t;tt.erasing=i,(e=A.sketchPen)==null||e.classList.toggle("active",!i),(t=A.sketchEraser)==null||t.classList.toggle("active",i)}function s_(i){var e,t,n,r;A.sketchCanvas&&(i.preventDefault(),(t=(e=A.sketchCanvas).setPointerCapture)==null||t.call(e,i.pointerId),tt.drawing=!0,tt.currentStroke={color:((n=A.sketchColor)==null?void 0:n.value)||"#ffffff",size:Number(((r=A.sketchSize)==null?void 0:r.value)||5)*Math.min(window.devicePixelRatio||1,2),mode:tt.erasing?"erase":"draw",points:[Mh(i)]},qr())}function a_(i){!tt.drawing||!tt.currentStroke||(i.preventDefault(),tt.currentStroke.points.push(Mh(i)),qr())}function pu(i){!tt.drawing||!tt.currentStroke||(i.preventDefault(),tt.strokes.push(tt.currentStroke),tt.currentStroke=null,tt.drawing=!1,qr())}function o_(){var i,e,t,n,r;A.sketchCanvas&&(A.sketchCanvas.addEventListener("pointerdown",s_),A.sketchCanvas.addEventListener("pointermove",a_),A.sketchCanvas.addEventListener("pointerup",pu),A.sketchCanvas.addEventListener("pointercancel",pu),(i=A.sketchPen)==null||i.addEventListener("click",()=>lo(!1)),(e=A.sketchEraser)==null||e.addEventListener("click",()=>lo(!0)),(t=A.sketchClear)==null||t.addEventListener("click",()=>{tt.strokes=[],tt.currentStroke=null,qr()}),(r=(n=A.sketchWindow)==null?void 0:n.querySelector(".window-title"))==null||r.addEventListener("pointerdown",c_),window.addEventListener("pointermove",l_),window.addEventListener("pointerup",mu),window.addEventListener("pointercancel",mu),lo(!1))}function c_(i){var n,r;const e=A.sketchWindow;if(!e||e.classList.contains("maximized")||i.target.closest(".window-controls")||i.pointerType!=="mouse"&&!i.isPrimary)return;i.preventDefault();const t=e.getBoundingClientRect();tt.dragging=!0,tt.dragPointerId=i.pointerId,tt.dragOffsetX=i.clientX-t.left,tt.dragOffsetY=i.clientY-t.top,(r=(n=i.currentTarget)==null?void 0:n.setPointerCapture)==null||r.call(n,i.pointerId),e.style.zIndex="130"}function l_(i){const e=A.sketchWindow;if(!e||!tt.dragging||tt.dragPointerId!==null&&i.pointerId!==tt.dragPointerId)return;i.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),n=window.innerHeight-32,r=Math.max(0,Math.min(t,i.clientX-tt.dragOffsetX)),s=Math.max(0,Math.min(n,i.clientY-tt.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${s}px`,e.style.right="auto",e.style.bottom="auto"}function mu(){tt.dragging=!1,tt.dragPointerId=null,vh()}const u_={strokes:[]};function h_(i,e,t,n){if(!e.points.length)return;i.save(),i.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",i.strokeStyle=e.color,i.lineWidth=e.size,i.lineCap="round",i.lineJoin="round",i.beginPath();const r=e.points[0];i.moveTo(r.x*t,r.y*n);for(const s of e.points.slice(1))i.lineTo(s.x*t,s.y*n);e.points.length===1&&i.lineTo(r.x*t+.01,r.y*n+.01),i.stroke(),i.restore()}function d_(){const i=A.predictCanvas;if(!i)return;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);for(const t of u_.strokes)h_(e,t,i.width,i.height)}function f_(){const i=A.predictCanvas;if(!i)return;const e=i.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),n=Math.max(10,Math.floor(e.width*t)),r=Math.max(10,Math.floor(e.height*t));(i.width!==n||i.height!==r)&&(i.width=n,i.height=r,d_())}const Us=[1];function jn(i){if(i<0)return NaN;for(let e=Us.length;e<=i;e+=1)Us[e]=Us[e-1]*e;return Us[i]}function yh(i,e,t){const n=Math.max(1,Math.min(6,Math.round(i))),r=Math.max(0,Math.min(n-1,Math.round(e))),s=Math.max(-r,Math.min(r,Math.round(t)));return{n,l:r,m:s}}function lc(i,e,t){if(e===0)return`${i}s`;if(e===1)return`${i}${t===0?"Pz":t>0?"Px":"Py"}`;if(e===2){if(t===0)return`${i}Dz2`;if(t===1)return`${i}Dxz`;if(t===-1)return`${i}Dyz`;if(t===2)return`${i}Dx2-y2`;if(t===-2)return`${i}Dxy`}if(e===3){if(t===0)return`${i}Fz3`;if(t===1)return`${i}Fxz2`;if(t===-1)return`${i}Fyz2`;if(t===2)return`${i}Fz(x2-y2)`;if(t===-2)return`${i}Fxyz`;if(t===3)return`${i}Fx(x2-3y2)`;if(t===-3)return`${i}Fy(3x2-y2)`}if(e===4){if(t===0)return`${i}Gz4`;if(t===1)return`${i}Gxz3`;if(t===-1)return`${i}Gyz3`;if(t===2)return`${i}Gz2(x2-y2)`;if(t===-2)return`${i}Gxyz2`;if(t===3)return`${i}Gxz(x2-3y2)`;if(t===-3)return`${i}Gyz(3x2-y2)`;if(t===4)return`${i}Gx4-6x2y2+y4`;if(t===-4)return`${i}Gxy(x2-y2)`}if(e===5){if(t===0)return`${i}Hz5`;if(t===1)return`${i}Hxz4`;if(t===-1)return`${i}Hyz4`;if(t===2)return`${i}Hz3(x2-y2)`;if(t===-2)return`${i}Hxyz3`;if(t===3)return`${i}Hz(x4-6x2y2+y4)`;if(t===-3)return`${i}Hxyz(x2-y2)`;if(t===4)return`${i}Hxz(x2-y2)`;if(t===-4)return`${i}Hyz(x2-y2)`;if(t===5)return`${i}Hx(x4-10x2y2+5y4)`;if(t===-5)return`${i}Hy(5x4-10x2y2+y4)`}return`${i}${["s","P","D","F","G","H"][e]??`L${e}`}${t}`}function p_(i,e,t){let n=0;for(let r=0;r<=i;r+=1){const s=(r%2===0?1:-1)*jn(i+e)/(jn(i-r)*jn(e+r)*jn(r));n+=s*t**r}return n}function m_(i,e,t){const n=Math.abs(e);let r=1;if(n>0){const a=Math.sqrt(Math.max(0,1-t*t));let c=1;for(let l=1;l<=n;l+=1)r*=-c*a,c+=2}if(i===n)return r;let s=t*(2*n+1)*r;if(i===n+1)return s;let o=0;for(let a=n+2;a<=i;a+=1)o=((2*a-1)*t*s-(a+n-1)*r)/(a-n),r=s,s=o;return o}function Ro(i,e,t,n){const r=Math.sin(t),s=Math.cos(t),o=Math.cos(n),a=Math.sin(n);if(i===1){const d=Math.sqrt(3/(4*Math.PI));return e===0?d*s:e>0?d*r*o:d*r*a}if(i===2){if(e===0)return Math.sqrt(5/Math.PI)/4*(3*s*s-1);if(e===1)return Math.sqrt(15/Math.PI)/2*r*s*o;if(e===-1)return Math.sqrt(15/Math.PI)/2*r*s*a;if(e===2)return Math.sqrt(15/Math.PI)/4*r*r*Math.cos(2*n);if(e===-2)return Math.sqrt(15/Math.PI)/4*r*r*Math.sin(2*n)}const c=Math.abs(e),l=Math.sqrt((2*i+1)/(4*Math.PI)*(jn(i-c)/jn(i+c))),u=m_(i,c,Math.cos(t));return e>0?Math.sqrt(2)*l*u*Math.cos(c*n):e<0?Math.sqrt(2)*l*u*Math.sin(c*n):l*u}function Fs(i,e,t){const n=Math.abs(e);let r=1;for(let l=2;l<=2*n;l+=2)r*=(1-t*t)*((l+1)/l);let s=Math.sqrt(Math.max(0,r/2));if(i===n)return s;let o=Math.sqrt(2*n+3)*t*s;if(i===n+1)return o;let a=0,c=Math.sqrt((4*n*n+8*n+3)/(2*n+1));for(let l=n+2;l<=i;l+=1){const u=Math.sqrt((4*l*l-1)/(l*l-n*n));a=o*t*u-s*u/c,s=o,o=a,c=u}return a}function Qn(i,e,t,n){const r=2*t*n/i;return Math.sqrt((2*t/i)**3*(jn(i-e-1)/(2*i*jn(i+e))))*Math.exp(-r/2)*r**e*p_(i-e-1,2*e+1,r)}function Yt({n:i,l:e,m:t,z:n},r,s,o){const a=Math.hypot(r,s,o);if(a<1e-9)return e===0?Qn(i,e,n,0)*Ro(e,t,0,0):0;const c=Math.acos(o/a),l=Math.atan2(s,r);return Qn(i,e,n,a)*Ro(e,t,c,l)}function zs({n:i,l:e,m:t,z:n},r,s,o){const a=Math.hypot(r,s),c=Math.hypot(a,o),l=c<.01?0:o/c,u=Qn(i,e,n,c)*Fs(e,t,l);let d=1/Math.sqrt(Math.PI);if(t!==0){const h=a>.001?t*Math.atan2(s,r):Math.PI/2;d*=t>0?Math.cos(h):-Math.sin(h)}return u*d}function g_(i){return i>=7?120:i===6?100:i===5?90:i===4?80:i===3?70:i===2?60:50}const gu=new Map;function vr(i,e=.8){const t=`${i.n}|${i.l}|${i.z}|${e}`,n=gu.get(t);if(n)return{...n};let r=0;const s=.002;let o=0,a=0;for(;a<2e5;){const g=Ir(i,o),x=Ir(i,o+s/2),m=Ir(i,o+s);if(r+=(g+4*x+m)/6,o+=s,a+=1,s*r>e)break}const c=o*1.5,l=g_(i.n),d=2*Math.ceil(c)/l*l/2,h=Math.sqrt(Ir(i,o)/(4*Math.PI*o*o))||1e-4,f={radius:d,iso:Math.max(1e-4,h),gridSize:l,leastRadius:c};return gu.set(t,f),{...f}}function Ir(i,e){return e*e*Qn(i.n,i.l,i.z,e)**2}const _u=new Map;function Po(i){const e=`${i.n}|${i.l}|${i.z}`,t=_u.get(e);if(t!=null)return t;const{leastRadius:n}=vr(i),r=i.n===1&&i.l===0?2:20;let s=n;for(let a=.1;a<=n+r&&(s=a,!(a>n&&Ir(i,a)<1e-9));a+=.1);const o=Math.max(1,s);return _u.set(e,o),o}const xu=new Map;function uc(i){const e=`${i.n}|${i.l}|${i.z}`,t=xu.get(e);if(t)return[...t];const n=Math.max(0,i.n-i.l-1);if(!n)return[];const r=Math.max(Po(i),vr(i).leastRadius*1.2),s=Math.max(900,i.n*520),o=[];let a=1e-5,c=Qn(i.n,i.l,i.z,a);for(let l=1;l<=s;l+=1){const u=r*l/s,d=Qn(i.n,i.l,i.z,u);if(Number.isFinite(d)){if(Math.abs(c)>1e-14&&Math.abs(d)>1e-14&&c*d<0){let h=a,f=u,g=c;for(let m=0;m<36;m+=1){const p=(h+f)/2,v=Qn(i.n,i.l,i.z,p);g*v<=0?f=p:(h=p,g=v)}const x=(h+f)/2;if(o.some(m=>Math.abs(m-x)<.02)||o.push(x),o.length>=n)break}a=u,c=d}}return o.sort((l,u)=>l-u),xu.set(e,o),[...o]}function hc(i){const e=Math.abs(i.m),t=Math.max(0,i.l-e),n=[];if(t>0){const s=Math.max(720,i.l*300),o=1e-7,a=h=>{h<=1e-5||h>=Math.PI-1e-5||n.some(f=>Math.abs(f-h)<.01)||n.push(h)};let c=1e-5,l=Fs(i.l,i.m,Math.cos(c)),u=Math.abs(l)>o?c:null,d=Math.abs(l)>o?l:null;for(let h=1;h<s;h+=1){const f=Math.PI*h/s,g=Fs(i.l,i.m,Math.cos(f));if(Math.abs(g)<=o){if(a(f),n.length>=t)break;c=f,l=g;continue}if(d!=null&&d*g<0){let x=u,m=f,p=d;for(let _=0;_<34;_+=1){const S=(x+m)/2,b=Fs(i.l,i.m,Math.cos(S));p*b<=0?m=S:(x=S,p=b)}const v=(x+m)/2;if(a(v),n.length>=t)break}c=f,l=g,u=f,d=g}}const r=[];if(e>0)for(let s=0;s<e;s+=1){const o=i.m>0?(s+.5)*Math.PI/e:s*Math.PI/e;r.push(o)}return{polar:n,azimuthal:r}}function vu(i,e){return`${i-e-1} radial, ${e} angular`}function __(i,e){const{radius:t}=e,n=Math.min(42,Math.max(24,Math.round(e.density*.58))),r=[],s=[],o=t*2/(n-1),a=t*t,c=35e4;let l=0;for(let g=0;g<n;g+=1){const x=-t+g*o;for(let m=0;m<n;m+=1){const p=-t+m*o;for(let v=0;v<n;v+=1){const _=-t+v*o;if(x*x+p*p+_*_>a||!Mu(e.cutaway,x,p,_))continue;const S=Yt(i,x,p,_);l=Math.max(l,Math.abs(S))}}}const u=l||1;let d=(i.n*73856093^i.l*19349663^(i.m+8)*83492791^Math.round(t*1e3))>>>0;const h=()=>(d=1664525*d+1013904223>>>0,d/4294967296),f=Math.min(6e6,Math.max(72e4,e.density*e.density*600));for(let g=0;g<f;g+=1){const x=(h()*2-1)*t,m=(h()*2-1)*t,p=(h()*2-1)*t;if(x*x+m*m+p*p>a||!Mu(e.cutaway,x,m,p))continue;const v=Yt(i,x,m,p),_=Math.min(1,(Math.abs(v)/u)**2);if(h()>_)continue;const S=v>=0?r:s;if(!(S.length/3>=c)&&(S.push(x,m,p),r.length/3>=c&&s.length/3>=c))break}return{positive:r,negative:s}}function Mu(i,e,t,n){return i==="quarter"?t<=0&&n<=0:i==="eighth"?e<=0&&t<=0&&n<=0:i==="threeQuarter"?!(t>0&&n>0):!0}function x_(i,e,t,n){const s=t.radius/140;let o=0,a=n*Yt(i,0,0,0)-t.iso,c=null;for(let l=1;l<=140;l+=1){const u=l*s,d=n*Yt(i,e.x*u,e.y*u,e.z*u)-t.iso;if(a<=0&&d>=0){let h=o,f=u;for(let g=0;g<12;g+=1){const x=(h+f)/2;n*Yt(i,e.x*x,e.y*x,e.z*x)-t.iso>=0?f=x:h=x}c=f}if(a>=0&&d<=0&&c!==null){let h=o,f=u;for(let g=0;g<12;g+=1){const x=(h+f)/2;n*Yt(i,e.x*x,e.y*x,e.z*x)-t.iso>=0?h=x:f=x}c=h}o=u,a=d}return c}function v_(i,e){const t=e.thetaSegments??58,n=e.phiSegments??96;function r(s){const o=[],a=[],c=[];for(let l=0;l<=t;l+=1){const u=Math.PI*l/t,d=[],h=Math.sin(u),f=Math.cos(u);for(let g=0;g<=n;g+=1){const x=Math.PI*2*g/n,m={x:h*Math.cos(x),y:h*Math.sin(x),z:f},p=x_(i,m,e,s);p===null||!Number.isFinite(p)?d.push(-1):(d.push(o.length/3),o.push(m.x*p,m.y*p,m.z*p))}c.push(d)}for(let l=0;l<t;l+=1)for(let u=0;u<n;u+=1){const d=c[l][u],h=c[l+1][u],f=c[l+1][u+1],g=c[l][u+1];d>=0&&h>=0&&f>=0&&a.push(d,h,f),d>=0&&f>=0&&g>=0&&a.push(d,f,g)}return{vertices:o,indices:a}}return{positive:r(1),negative:r(-1)}}let M_={resizeAfterLayoutChange:()=>{},renderOrbital:()=>{},applyPreset:()=>{},readParams:()=>({n:1,l:0,m:0}),downloadBlob:(i,e)=>{},getCloudPositiveObject:()=>null,getCloudNegativeObject:()=>null,getIsoMeshes:()=>[]};function y_(i){Object.assign(M_,i)}updateWindowControlLabels;const dc=[new Worker(new URL(""+new URL("worker-wu770f7w.js",import.meta.url).href,import.meta.url),{type:"module"}),new Worker(new URL(""+new URL("worker-wu770f7w.js",import.meta.url).href,import.meta.url),{type:"module"})];let S_=1;const Lo=new Map;function Sh(i){const{jobId:e,fieldBuffer:t,error:n}=i.data,r=Lo.get(e);r&&(Lo.delete(e),n?r.reject(new Error(n)):r.resolve(t))}dc[0].onmessage=Sh;dc[1].onmessage=Sh;function E_(i,e,t,n,r){return new Promise((s,o)=>{const a=S_++;Lo.set(a,{resolve:s,reject:o}),dc[i].postMessage({jobId:a,fieldBuffer:e,params:t,options:n,sign:r},[e])})}let uo=0;const rn=new Ke(new L(0,0,-1),100);window.addEventListener("error",i=>{const e=document.querySelector("#statusText");e&&(e.textContent="Err: "+i.message)});window.addEventListener("unhandledrejection",i=>{var t;const e=document.querySelector("#statusText");e&&(e.textContent="Rej: "+(((t=i.reason)==null?void 0:t.message)||i.reason))});let Ut=null,hn=null,An=null,Tn=null,Fr=null,er=null,Zs=null,Io=null,qn=null,Xn=null,zr=null,tr=null,Br=null,gi=null,Cn=null,wn=null,Rn=null,kr=null,Do=null,Uo=null,No=null,Oo=null,Fo=null,zo=null,En=null,Jt=null,ha=1,ti=5,Ln=4,fc=3,js=4.5,ho=!1;const pc=[];function mc(i=(e=>(e=A.backgroundColor)==null?void 0:e.value)()||"#000000"){document.documentElement.style.setProperty("--viewer-bg",i);const t=new Me(i);lt.background=t.clone(),Pt.background=t.clone(),Dn.background=t.clone(),Un.background=t.clone();for(const n of pc)n.scene.background=t.clone()}function w_(){var t;if(document.querySelector("#relationModeInput")){Object.assign(A,{relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue")});return}const i=(t=A.longitudeNode)==null?void 0:t.closest("fieldset");if(!i)return;const e=document.createElement("fieldset");e.className="relation-panel",e.innerHTML=`
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
  `,i.insertAdjacentElement("afterend",e),Object.assign(A,{relationMode:e.querySelector("#relationModeInput"),syncRotation:e.querySelector("#syncRotationInput"),scanRadius:e.querySelector("#scanRadiusInput"),scanRadiusValue:e.querySelector("#scanRadiusValue"),scanTheta:e.querySelector("#scanThetaInput"),scanThetaValue:e.querySelector("#scanThetaValue"),scanPhi:e.querySelector("#scanPhiInput"),scanPhiValue:e.querySelector("#scanPhiValue"),scanSliceZ:e.querySelector("#scanSliceZInput"),scanSliceZValue:e.querySelector("#scanSliceZValue")}),A.scanSliceZ&&A.scanSliceZ.addEventListener("input",()=>{const n=nn(),r=dn();Yr(),vc(),wc(n,r)})}const Mr=document.createElement("button");Mr.type="button";Mr.className="fullscreen-exit-button";Mr.textContent="退出全屏";Mr.hidden=!0;document.body.appendChild(Mr);function b_(i,e,t){return lc(i,e,t)}function Eh(i,e,t){return`${i},${e},${t}`}function A_(i){const e=[0];for(let t=1;t<=i;t+=1)e.push(t,-t);return e}function wh(i){const e=Math.max(1,Math.min(6,Math.round(i)||1)),t=[];for(let n=0;n<e;n+=1)for(const r of A_(n))t.push({value:Eh(e,n,r),label:b_(e,n,r)});return t}function T_(i=6){const e=[];for(let t=1;t<=i;t+=1)e.push(...wh(t));return e}const Dr=T_(6);function Ns(i,e,t=null){if(i){i.replaceChildren();for(const n of e){const r=document.createElement("option");r.value=n.value,r.textContent=n.label,i.append(r)}t&&e.some(n=>n.value===t)&&(i.value=t)}}function C_(){Ns(A.predictTarget,Dr,"2,1,1"),Ns(A.challengeGuess,Dr,"2,1,1"),Ns(A.compareA,Dr,"2,1,1"),Ns(A.compareB,Dr,"3,1,1")}function R_(i=null){if(!A.preset)return;const e=i??yh(Number(A.n.value),Number(A.l.value),Number(A.m.value));if(Number(A.preset.dataset.n)!==e.n){A.preset.replaceChildren();for(const n of wh(e.n)){const r=document.createElement("option");r.value=n.value,r.textContent=n.label,A.preset.append(r)}A.preset.dataset.n=String(e.n)}A.preset.value=Eh(e.n,e.l,e.m)}Dr[0];function nn(){var e,t;const i=yh(Number(A.n.value),Number(A.l.value),Number(A.m.value));return(e=A.sinType)!=null&&e.checked&&i.m>0&&(i.m=-i.m),(t=A.cosType)!=null&&t.checked&&i.m<0&&(i.m=Math.abs(i.m)),A.n.value=i.n,A.l.max=i.n-1,A.l.value=i.l,A.m.min=-i.l,A.m.max=i.l,A.m.value=Math.abs(i.m),R_(i),{...i,z:Math.max(1,Math.min(10,Number(A.z.value)||1))}}function fo(i,e){var t;i&&(i.disabled=!e,(t=i.closest("label"))==null||t.classList.toggle("muted",!e),e||(i.checked=!1))}function P_(i){const e=uc(i).length,{polar:t,azimuthal:n}=hc(i);fo(A.radialNode,e>0),fo(A.polarNode,t.length>0),fo(A.longitudeNode,n.length>0)}function dn(){var s,o,a,c,l,u,d,h,f,g,x,m,p,v,_,S,b,E,w,T,y,M,P,D,N,k,B,F,X,H;const i=nn();P_(i);const e=A.desktopMatch.checked?vr(i):null;let t=A.slice.value;(s=A.xySlice)!=null&&s.checked&&(t="xoy"),(o=A.yzSlice)!=null&&o.checked&&(t="yoz"),(a=A.xzSlice)!=null&&a.checked&&(t="xoz"),!((c=A.xySlice)!=null&&c.checked)&&!((l=A.yzSlice)!=null&&l.checked)&&!((u=A.xzSlice)!=null&&u.checked)&&(t="none");const n=Number(((d=A.scanSliceZ)==null?void 0:d.value)??0),r={iso:Number(A.iso.value),density:Number(A.density.value),radius:Number(A.radius.value),opacity:Number(A.opacity.value),mode:A.mode.value,showCloud:((h=A.cloud)==null?void 0:h.checked)??!1,slice:t,sliceOffset:n/100*Number(A.radius.value),nodeRadial:!!(A.node.checked||(f=A.radialNode)!=null&&f.checked),nodePolar:!!(A.node.checked||(g=A.polarNode)!=null&&g.checked),nodeAzimuthal:!!(A.node.checked||(x=A.longitudeNode)!=null&&x.checked),showNode:!!(A.node.checked||(m=A.radialNode)!=null&&m.checked||(p=A.polarNode)!=null&&p.checked||(v=A.longitudeNode)!=null&&v.checked),showAxis:A.axis.checked,showBox:A.box.checked,showPositive:((_=A.positiveLobe)==null?void 0:_.checked)??!0,showNegative:((S=A.negativeLobe)==null?void 0:S.checked)??!0,wireframe:((b=A.wireframe)==null?void 0:b.checked)??!1,smooth:((E=A.smooth)==null?void 0:E.checked)??!1,showProjection:((w=A.projection)==null?void 0:w.checked)??!1,showProjection3d:((T=A.projection3d)==null?void 0:T.checked)??!1,grid3d:((y=A.grid3d)==null?void 0:y.checked)??!1,cutaway:(M=A.eighth)!=null&&M.checked?"eighth":(P=A.quarter)!=null&&P.checked?"quarter":(D=A.threeQuarter)!=null&&D.checked?"threeQuarter":"none",radialMode:(N=A.radialR)!=null&&N.checked?"R":(k=A.radialR2)!=null&&k.checked?"R2":"RDF",radialSection:((B=A.radialSection)==null?void 0:B.checked)??!1,radialSide:((F=A.radialSide)==null?void 0:F.checked)??!1,radialCurve:((X=A.radialCurve)==null?void 0:X.checked)??!0,radialAxis:((H=A.radialAxis)==null?void 0:H.checked)??!1,positiveColor:A.positiveColor.value,negativeColor:A.negativeColor.value,backgroundColor:A.backgroundColor.value,desktopMatched:!!e};return A.isoValue.value=r.iso.toFixed(4),A.densityValue.value=r.density,A.radiusValue.value=r.radius.toFixed(1),A.opacityValue.value=r.opacity.toFixed(2),A.boxSizeDisplay&&(A.boxSizeDisplay.value=(r.radius*2.4).toFixed(2)),A.intervalValue&&(A.intervalValue.value=(r.radius*2/r.density).toFixed(3)),A.probabilityValue&&(A.probabilityValue.value="0.800"),A.iso.disabled=!1,A.density.disabled=!1,A.radius.disabled=!1,r}function gc(){if(!A.desktopMatch.checked)return;const i=vr(nn()),e=Math.min(Number(A.iso.max),Math.max(Number(A.iso.min),i.iso));A.iso.value=e.toFixed(4),A.density.value=Math.min(Number(A.density.max),Math.max(Number(A.density.min),i.gridSize)),A.radius.value=Math.min(Number(A.radius.max),Math.max(Number(A.radius.min),i.radius)),dn()}function L_(){if(!A.boxSizeDisplay)return;const i=Number(A.boxSizeDisplay.value);!Number.isFinite(i)||i<=0||(A.radius.value=Math.min(Number(A.radius.max),Math.max(Number(A.radius.min),i/2.4)),dn())}function yu(i,e){const t=new We;t.setAttribute("position",new Ie(i,3));const n=new Float32Array(i.length/3);for(let s=0;s<n.length;s+=1){const o=Math.sin((s+1)*12.9898)*43758.5453;n[s]=o-Math.floor(o)}t.setAttribute("seed",new Rt(n,1));const r=new In({clipping:!0,uniforms:nh.merge([me.clipping,{uColor:{value:new Me(e)},uTime:{value:0},uSize:{value:3.5}}]),transparent:!0,depthWrite:!1,blending:nr,vertexShader:`
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
    `});return new b1(t,r)}function I_(i){var e,t;for(const n of[Ut,hn,An,Tn])n!=null&&n.isPoints&&((t=(e=n.material)==null?void 0:e.uniforms)!=null&&t.uTime)&&(n.material.uniforms.uTime.value=i)}function $t(i){return Number.parseInt(i.replace("#","0x"),16)}const po=new Map;function da(i,e,t={}){if(t.clippingPlanes||t._clipPlanes)return Su(i,e,t);const n=JSON.stringify({color:i,opacity:e,...t});if(po.has(n))return po.get(n);const r=Su(i,e,t);return r.userData={...r.userData,pooled:!0},po.set(n,r),r}function Su(i,e,t={}){return new _h({color:i,transparent:e<1,opacity:e,side:ct,emissive:i,emissiveIntensity:.025,roughness:.22,metalness:.05,envMapIntensity:.18,...t})}function Ks(i,e,t){const n=new We;n.setAttribute("position",new Ie(i.vertices,3)),n.setIndex(i.indices),n.computeVertexNormals();const r=da(e,t);return new Ye(n,r)}function Js(i,e,t=!1){if(!(i!=null&&i.material))return;i.visible=!0,e.wireframe&&!e.smooth?(i.userData.originalMaterial||(i.userData.originalMaterial=i.material),i.material=new Ot({color:i.userData.originalMaterial.color,wireframe:!0,transparent:!0,opacity:.8,side:pn,clippingPlanes:t?[]:[rn]})):(i.userData.originalMaterial&&(i.material=i.userData.originalMaterial),i.material.wireframe=!1,i.material.side=ct,i.material.flatShading=!e.smooth,t?i.material.clippingPlanes=null:(i.material.clippingPlanes=[rn],i.material.clipIntersection=!1),i.material.needsUpdate=!0)}function D_(i){return i.wireframe||i.smooth||i.showProjection3d}function U_(i){return i==="quarter"?[new Ke(new L(0,1,0),0),new Ke(new L(0,0,1),0)]:i==="eighth"?[new Ke(new L(1,0,0),0),new Ke(new L(0,1,0),0),new Ke(new L(0,0,1),0)]:i==="threeQuarter"?[new Ke(new L(0,0,1),0)]:[]}function _c(i){const e=U_(i.cutaway),t=yr(i.slice);return t==="x"&&e.push(new Ke(new L(1,0,0),0)),t==="y"&&e.push(new Ke(new L(0,1,0),0)),t==="z"&&e.push(new Ke(new L(0,0,1),0)),e}function yr(i){return i==="yoz"?"x":i==="xoz"?"y":i==="xoy"?"z":null}function N_(i){const e=[];i.cutaway==="quarter"&&e.push("y","z"),i.cutaway==="eighth"&&e.push("x","y","z"),i.cutaway==="threeQuarter"&&e.push("y","z");const t=yr(i.slice);return t&&e.push(t),[...new Set(e)]}function Qs(i,e,t,n){const r=e._clipPlanes||_c(e);if(!r.length)return i;const s=e._capFilter||(()=>!0);i.updateMatrixWorld(!0);const o=i.geometry.getAttribute("position"),a=i.geometry.index,c=[],l=a?a.count:Math.min(o.count,i.count||o.count);function u(K){return i.localToWorld(new L(o.getX(K),o.getY(K),o.getZ(K)))}const d=Math.floor(l/3);for(let K=0;K<d;K+=1){const fe=a?a.getX(K*3):K*3,W=a?a.getX(K*3+1):K*3+1,J=a?a.getX(K*3+2):K*3+2;c.push([u(fe),u(W),u(J)])}let h=c;const f=r.map(()=>[]);r.forEach((K,fe)=>{const W=[];for(const J of h){const{clipped:le,segments:U}=H_(J,K);le.length>=3&&W.push(le),f[fe].push(...U)}h=W});const g=[],x=[],m=new Me($t(t));function p(K){return g.push(K.x,K.y,K.z),g.length/3-1}for(const K of h){const fe=p(K[0]);for(let W=1;W<K.length-1;W+=1){const J=p(K[W]),le=p(K[W+1]);x.push(fe,J,le)}}const v=!e._skipCaps,_=[],S=[],b=[];function E(K){return _.push(K.x,K.y,K.z),S.push(Yt(n,K.x,K.y,K.z)),_.length/3-1}function w(K){const fe=K.normal.clone().normalize(),W=Math.abs(fe.x)<.9?new L(1,0,0):new L(0,1,0);W.sub(fe.clone().multiplyScalar(W.dot(fe))).normalize();const J=new L().crossVectors(fe,W).normalize(),le=fe.clone().multiplyScalar(-K.constant);return{normal:fe,basisA:W,basisB:J,origin:le}}function T(K,fe){const{basisA:W,basisB:J,origin:le}=w(K),U=e.radius,se=n.n>=6?6.2:n.n>=5?5.4:3.8,_e=n.n>=6?420:n.n>=5?360:280,Ee=Math.max(128,Math.min(_e,Math.round(e.density*se))),O=U*2/Ee,Ae=e._capSign??1,Fe=e.iso*1.015,$e=Ee+1,Re=new Float32Array($e*$e);function qe(Z,j){const oe=-U+Z*O,ce=-U+j*O;return le.clone().addScaledVector(W,oe).addScaledVector(J,ce)}function Be(Z,j){return j*$e+Z}for(let Z=0;Z<=Ee;Z+=1)for(let j=0;j<=Ee;j+=1){const oe=qe(j,Z);Re[Be(j,Z)]=Ae*Yt(n,oe.x,oe.y,oe.z)-Fe}function Ne(Z,j){return{point:qe(Z,j),value:Re[Be(Z,j)]}}function at(Z,j,oe){return{point:Z.point.clone().lerp(j.point,oe),value:Z.value+(j.value-Z.value)*oe}}function I(Z,j){const oe=Z-j;return Math.abs(oe)<1e-12?.5:Math.max(0,Math.min(1,Z/oe))}function C(Z,j){const oe=[];for(let ce=0;ce<Z.length;ce+=1){const ue=Z[ce],we=Z[(ce+1)%Z.length],ae=j.distanceToPoint(ue.point),ye=j.distanceToPoint(we.point),ke=ae>=-1e-7,Le=ye>=-1e-7;if(ke&&Le)oe.push(we);else if(ke&&!Le){const ge=I(ae,ye);oe.push(at(ue,we,ge))}else if(!ke&&Le){const ge=I(ae,ye);oe.push(at(ue,we,ge),we)}}return oe}function $(Z){const j=[];for(let oe=0;oe<Z.length;oe+=1){const ce=Z[oe],ue=Z[(oe+1)%Z.length],we=ce.value>=0,ae=ue.value>=0;if(we&&ae)j.push(ue);else if(we&&!ae){const ye=I(ce.value,ue.value);j.push(at(ce,ue,ye))}else if(!we&&ae){const ye=I(ce.value,ue.value);j.push(at(ce,ue,ye),ue)}}return j}function ne(Z){return E(Z.point)}for(let Z=0;Z<Ee;Z+=1)for(let j=0;j<Ee;j+=1){let oe=[Ne(j,Z),Ne(j+1,Z),Ne(j+1,Z+1),Ne(j,Z+1)];for(let we=0;we<r.length&&!(we!==fe&&(oe=C(oe,r[we]),oe.length<3));we+=1);if(oe.length<3||(oe=$(oe),oe.length<3))continue;const ce=oe.reduce((we,ae)=>we.add(ae.point),new L).multiplyScalar(1/oe.length);if(!s(fe,ce))continue;const ue=ne(oe[0]);for(let we=1;we<oe.length-1;we+=1)b.push(ue,ne(oe[we]),ne(oe[we+1]))}}v&&r.forEach((K,fe)=>{T(K,fe)});const y=new We;y.setAttribute("position",new Ie(g,3)),y.setIndex(x),e.smooth&&!e.wireframe&&!e._skipSmooth&&bh(y,e),y.computeVertexNormals();const M=da(m,e.opacity,{wireframe:e.wireframe,flatShading:!e.smooth}),P=new Ye(y,M);if(P.userData.vertexCount=x.length,!b.length)return P;const D=new We,N=Ph(S,e.iso*1.6),k=[];for(let K=0;K<S.length;K+=1){const fe=S[K],W=_[K*3],J=_[K*3+1],le=_[K*3+2],U=Rh(fe,W,J,le,e,n,N);k.push(U.r,U.g,U.b)}D.setAttribute("position",new Ie(_,3)),D.setAttribute("color",new Ie(k,3)),D.setIndex(b),D.computeVertexNormals();const F=!!yr(e.slice)||e.cutaway!=="none",X=new Ji({vertexColors:!0,side:ct,shininess:50,transparent:!1,opacity:1,depthWrite:!0,clippingPlanes:[rn]});X.toneMapped=!1;const H=new Ye(D,X);H.renderOrder=F?3:1;const ee=new Ot({vertexColors:!0,side:ct,transparent:!0,opacity:.26,depthWrite:!1,depthTest:!0,blending:nr,clippingPlanes:[rn]});ee.toneMapped=!1;const re=new Ye(D,ee);re.renderOrder=H.renderOrder+.05;const ie=new ft;return ie.add(P,H,re),ie.userData.vertexCount=x.length+b.length*2,ie}function xc(i){var t,n;let e=((t=i==null?void 0:i.userData)==null?void 0:t.vertexCount)||0;return(n=i==null?void 0:i.traverse)==null||n.call(i,r=>{var s;r!==i&&(e+=((s=r.userData)==null?void 0:s.vertexCount)||0)}),e}async function Eu(i,e,t,n,r){return await W_(i,e,t,n,r)}function O_(i,e,t,n,r){const s=new ft;let o=0;for(const a of r){const c=Qs(i,{...e,_clipPlanes:a.planes,_capFilter:a.capFilter,_skipSmooth:!0},t,n);c&&(s.add(c),o+=xc(c))}return s.userData.vertexCount=o,s}function F_(i,e,t){const n=[],r=e.radius,s=Math.max(1800,i.n*620);let o=0,a=t*Yt(i,0,0,0)-e.iso;for(let c=1;c<=s;c+=1){const l=r*c/s,u=t*Yt(i,l,0,0)-e.iso;if(Number.isFinite(u)&&Number.isFinite(a)&&a*u<0){let d=o,h=l,f=a;for(let x=0;x<36;x+=1){const m=(d+h)/2,p=t*Yt(i,m,0,0)-e.iso;f*p<=0?h=m:(d=m,f=p)}const g=(d+h)/2;g>.02&&!n.some(x=>Math.abs(x-g)<.025)&&n.push(g)}o=l,a=u}return n}function z_(i){const e=(()=>{const n=yr(i.slice);return n==="x"?new Ke(new L(1,0,0),0):n==="y"?new Ke(new L(0,1,0),0):n==="z"?new Ke(new L(0,0,1),0):null})(),t=n=>e?[...n,e]:n;return i.cutaway==="threeQuarter"?[{planes:t([new Ke(new L(0,-1,0),0)])},{planes:t([new Ke(new L(0,0,-1),0)])}]:[{planes:_c(i)}]}function B_(i,e,t,n){const r=F_(i,e,t),s=new ft,o=z_(e),a=$t(n);let c=0;for(const u of r){const d=new pr(u,i.n>=5?160:128,i.n>=5?96:72);for(const h of o){const f=da(a,e.opacity,{wireframe:e.wireframe,flatShading:!e.smooth,clippingPlanes:h.planes,clipIntersection:!1}),g=new Ye(d.clone(),f);g.userData.vertexCount=d.getAttribute("position").count,s.add(g),c+=g.userData.vertexCount}d.dispose()}const l=Z_(i,e,t);return l&&(s.add(l),c+=xc(l)),s.userData.vertexCount=c,s.children.length?s:null}function k_(i,e,t,n){return e.cutaway==="quarter"?Qs(i,{...e,_clipPlanes:[new Ke(new L(0,1,0),0),new Ke(new L(0,0,1),0)],_skipSmooth:!0},t,n):e.cutaway==="eighth"?Qs(i,{...e,_clipPlanes:[new Ke(new L(1,0,0),0),new Ke(new L(0,1,0),0),new Ke(new L(0,0,1),0)],_skipSmooth:!0},t,n):e.cutaway==="threeQuarter"?O_(i,e,t,n,[{planes:[new Ke(new L(0,-1,0),0)],capFilter:(r,s)=>s.z>0},{planes:[new Ke(new L(0,1,0),0),new Ke(new L(0,0,-1),0)],capFilter:(r,s)=>r===1&&s.y>0}]):null}function V_(i,e,t){var S;i.updateMatrixWorld(!0);const n=i.geometry.getAttribute("position"),r=Number.isFinite(i.count)&&i.count>0?i.count:Number.POSITIVE_INFINITY,s=Number.isFinite((S=i.geometry.drawRange)==null?void 0:S.count)&&i.geometry.drawRange.count>0?i.geometry.drawRange.count:Number.POSITIVE_INFINITY,o=Math.min(n.count,r,s),a=[],c=[],l=new Map;function u(b){return Number.isFinite(b.x)&&Number.isFinite(b.y)&&Number.isFinite(b.z)}const d=yr(e.slice);function h(b){return e.cutaway==="quarter"?(b.y>0&&(b.y=0),b.z>0&&(b.z=0)):e.cutaway==="eighth"?(b.x>0&&(b.x=0),b.y>0&&(b.y=0),b.z>0&&(b.z=0)):e.cutaway==="threeQuarter"&&b.y>0&&b.z>0&&(b.y<b.z?b.y=0:b.z=0),d==="x"&&b.x>0&&(b.x=0),d==="y"&&b.y>0&&(b.y=0),d==="z"&&b.z>0&&(b.z=0),b}function f(b,E){const w=i.localToWorld(new L(n.getX(b),n.getY(b),n.getZ(b)));if(h(w),!u(w))return-1;if(E){const y=`${Math.round(w.x*1e4)},${Math.round(w.y*1e4)},${Math.round(w.z*1e4)}`;if(l.has(y))return l.get(y);const M=a.length/3;return a.push(w.x,w.y,w.z),l.set(y,M),M}return a.push(w.x,w.y,w.z),a.length/3-1}const g=Math.floor(o/3),x=e.smooth||e.wireframe;for(let b=0;b<g;b+=1){const E=b*3,w=b*3+1,T=b*3+2,y=f(E,x),M=f(w,x),P=f(T,x);y>=0&&M>=0&&P>=0&&c.push(y,M,P)}const m=new We;m.setAttribute("position",new Ie(a,3)),m.setIndex(c),e.smooth&&!e.wireframe&&bh(m,e),m.computeVertexNormals();const p=e.wireframe&&!e.smooth;let v;p?v=new Ot({color:$t(t),wireframe:!0,transparent:!0,opacity:.8,side:pn,clippingPlanes:[rn]}):(v=i.material.clone(),v.color=new Me($t(t)),v.emissive=new Me($t(t)),v.wireframe=!1,v.side=ct,v.flatShading=!e.smooth,v.clippingPlanes=[rn],v.needsUpdate=!0);const _=new Ye(m,v);return _.userData.vertexCount=o,_}function bh(i,e){const t=i.getAttribute("position"),n=i.index;if(!t||!n)return;const r=t.count,s=Array.from({length:r},()=>new Set);for(let f=0;f<n.count;f+=3){const g=n.getX(f),x=n.getX(f+1),m=n.getX(f+2);s[g].add(x).add(m),s[x].add(g).add(m),s[m].add(g).add(x)}const o=Math.max(.035,e.radius/Math.max(80,e.density*2)),a=new Uint8Array(r),c=yr(e.slice);for(let f=0;f<r;f+=1){const g=t.getX(f),x=t.getY(f),m=t.getZ(f);e.cutaway==="quarter"&&(Math.abs(x)<o||Math.abs(m)<o)&&(a[f]=1),e.cutaway==="eighth"&&(Math.abs(g)<o||Math.abs(x)<o||Math.abs(m)<o)&&(a[f]=1),e.cutaway==="threeQuarter"&&(Math.abs(x)<o||Math.abs(m)<o)&&(a[f]=1),c==="x"&&Math.abs(g)<o&&(a[f]=1),c==="y"&&Math.abs(x)<o&&(a[f]=1),c==="z"&&Math.abs(m)<o&&(a[f]=1)}const l=new Float32Array(t.array),u=new Float32Array(l.length),d=e.cutaway==="none"?10:7,h=e.cutaway==="none"?.16:.1;for(let f=0;f<d;f+=1){u.set(l);for(let g=0;g<r;g+=1){if(a[g]||s[g].size<3)continue;let x=0,m=0,p=0;for(const S of s[g]){const b=S*3;x+=l[b],m+=l[b+1],p+=l[b+2]}const v=s[g].size,_=g*3;u[_]=l[_]+(x/v-l[_])*h,u[_+1]=l[_+1]+(m/v-l[_+1])*h,u[_+2]=l[_+2]+(p/v-l[_+2])*h}l.set(u)}t.array.set(l),t.needsUpdate=!0}function H_(i,e){const t=[],n=[];for(let s=0;s<i.length;s+=1){const o=i[s],a=i[(s+1)%i.length],c=e.distanceToPoint(o)>=-1e-7,l=e.distanceToPoint(a)>=-1e-7;if(c&&l)t.push(a.clone());else if(c&&!l){const u=wu(o,a,e);t.push(u),n.push(u)}else if(!c&&l){const u=wu(o,a,e);t.push(u,a.clone()),n.push(u)}}const r=n.length===2?[[n[0],n[1]]]:[];return{clipped:t,segments:r}}function wu(i,e,t){const n=e.clone().sub(i),r=t.normal.dot(n);if(Math.abs(r)<1e-10)return i.clone();const s=-(t.normal.dot(i)+t.constant)/r;return i.clone().add(n.multiplyScalar(Math.max(0,Math.min(1,s))))}async function G_(i,e,t,n,r,s){const o=da($t(s),t.opacity),a=e.n>=5?5e5:16e4,c=new Z1(n.density,o,!0,!0,a);c.isolation=n.iso,c.position.set(0,0,0),c.scale.set(n.radius,n.radius,n.radius);const l=await E_(i,c.field.buffer,e,{...n,cutaway:"none"},r);return c.field=new Float32Array(l),c.update(),c}async function W_(i,e,t,n,r){const s=t.cutaway!=="none"||t.slice!=="none";if(e.l===0&&s){const d=B_(e,t,n,r);if(d)return d}const o=t.smooth&&!t.wireframe?Math.round(t.density*(s?3:2)):t.density,a={...t,density:Math.min(s?220:180,Math.max(t.density,o))},c=await G_(i,e,t,a,n,r),l={...t,_capSign:n,_skipCaps:e.l===0},u=k_(c,l,r,e);return u||(_c(t).length?Qs(c,l,r,e):V_(c,t,r))}function q_(i,e){const t=new ft,n=X_(i,e.radius,e);return n&&t.add(n),t.userData.vertexCount=xc(t),t.children.length?t:null}function Vr(i,e=.18){const t=new Ot({color:i,transparent:!0,opacity:e,side:ct,depthWrite:!1,depthTest:!0,blending:nr});return t.toneMapped=!1,t}function Ah(i,e,t){const n=new L(Math.cos(i),Math.sin(i),0).multiplyScalar(e),r=new L(0,0,e),s=[-n.x-r.x,-n.y-r.y,-n.z-r.z,n.x-r.x,n.y-r.y,n.z-r.z,n.x+r.x,n.y+r.y,n.z+r.z,-n.x+r.x,-n.y+r.y,-n.z+r.z],o=new We;return o.setAttribute("position",new Ie(s,3)),o.setIndex([0,1,2,0,2,3]),o.computeVertexNormals(),new Ye(o,t)}function Th(i,e,t){const n=Math.min(i,Math.PI-i);if(Math.abs(n-Math.PI/2)<.018){const d=new Ye(new Qo(e,160),t);return d.renderOrder=3,d}const r=e*Math.sin(n),s=e*Math.cos(n),o=160,a=[],c=[];for(const d of[1,-1]){const h=a.length/3;a.push(0,0,0);for(let f=0;f<=o;f+=1){const g=Math.PI*2*f/o;a.push(r*Math.cos(g),r*Math.sin(g),d*s)}for(let f=1;f<=o;f+=1)c.push(h,h+f,h+f+1)}const l=new We;l.setAttribute("position",new Ie(a,3)),l.setIndex(c),l.computeVertexNormals();const u=new Ye(l,t);return u.renderOrder=3,u}function X_(i,e,t={}){const n=new ft;if(t.nodeRadial){const o=Vr(16756736,.34);for(const a of uc(i)){if(a<=.02||a>=e*.99)continue;const c=new Ye(new pr(a,128,64),o.clone());c.renderOrder=3,n.add(c),n.add(Oh(a,16769354,.72))}}const{polar:r,azimuthal:s}=hc(i);if(t.nodePolar){const o=Vr(65394,.32);for(const a of r)n.add(Th(a,e*1.04,o.clone()))}if(t.nodeAzimuthal){const o=Vr(47103,.3);for(const a of s){const c=Ah(a,e*1.04,o.clone());c.renderOrder=3,n.add(c)}}return n.children.length?n:null}function Y_(i,e,t={}){const n=new ft,{polar:r,azimuthal:s}=hc(i);if(t.nodePolar){const o=Vr(65394,.34);for(const a of r)n.add(Th(a,e,o.clone()))}if(t.nodeAzimuthal){const o=Vr(47103,.32);for(const a of s)n.add(Ah(a,e,o.clone()))}return n.children.length?n:null}function $_(i,e){return null}function Ch(i){const e=new ur(i*2,i*2,i*2),t=new H1(e),n=new bi({color:13686237,transparent:!0,opacity:.58}),r=new Ko(t,n);return e.dispose(),r}function Z_(i,e,t=null){const n=N_(e);if(!n.length)return null;const r=new ft;for(const s of n){const o=Lh(i,e,s,t);o&&r.add(o)}return r.children.length?r:null}function j_(i,e){const t=Math.max(0,Math.min(1,Math.abs(i)/Math.max(e*.5,1e-12))),n=Math.pow(t,.52);return i>=0?new Me(16711896).lerp(new Me(16716306),n):new Me(60159).lerp(new Me(1054975),n)}function Rh(i,e,t,n,r,s,o){const a=new Me(r.backgroundColor||"#000000"),c=new Me(16711896),l=new Me(60159),u=(M,P,D)=>{const N=Math.max(0,Math.min(1,(D-M)/Math.max(1e-12,P-M)));return N*N*(3-2*N)},d=Math.min(1,Math.hypot(e,t,n)/Math.max(r.radius,1e-9)),h=Math.pow(1-d,1.45),f=Math.max(0,Math.min(1,(s.n-4)/2)),g=Math.abs(i),x=r.iso*(.86-h*.18-f*.04),m=r.iso*(1.62+h*1.05+f*.28),p=r.iso*(1.05+h*.18),v=Math.max(r.iso*(2.1+h*1.05+f*.22),o*(.48+h*.14)),_=u(x,m,g),S=u(p,v,g),b=j_(i,o),E=i>=0?c:l,w=.38+S*(.62-h*.06),T=E.clone().lerp(b,Math.max(.34,w)),y=Math.max(0,(1-_)*(.16+h*.06));return T.clone().lerp(a,y)}function Ph(i,e){const t=i.map(r=>Math.abs(r)).filter(r=>Number.isFinite(r)&&r>1e-12).sort((r,s)=>r-s);if(!t.length)return Math.max(e,1e-9);const n=Math.min(t.length-1,Math.floor(t.length*.82));return Math.max(e,t[n])}function Lh(i,e,t,n=null,r=0,s=1){const o=Math.max(160,Math.min(i.n>=5?420:320,Math.round(e.density*(i.n>=5?5.4:4.4)))),a=e.radius;function c(B,F){return t==="x"?[r,B,F]:t==="y"?[B,r,F]:[B,F,r]}function l(B,F,X){return e.cutaway==="quarter"||e.cutaway==="threeQuarter"?t==="y"?X>0:t==="z"?F>0:!1:e.cutaway==="eighth"?t==="x"?F>0&&X>0:t==="y"?B>0&&X>0:t==="z"?B>0&&F>0:!1:!0}const u=o+1,d=e.iso*1.015,h=new Float32Array(u*u),f=[],g=(B,F)=>F*u+B;for(let B=0;B<=o;B+=1){const F=a-2*a*B/o;for(let X=0;X<=o;X+=1){const H=-a+2*a*X/o,[ee,re,ie]=c(H,F),K=Yt(i,ee,re,ie);h[g(X,B)]=K;const fe=n==null||(n>0?K>=0:K<0);l(ee,re,ie)&&fe&&Math.abs(K)>=e.iso*.94&&f.push(K)}}if(!f.length)return null;const x=Ph(f,e.iso*1.6),m=[],p=[],v=[];function _(B){return n==null?Math.abs(B)-d:n*B-d}function S(B,F){const X=-a+2*a*B/o,H=a-2*a*F/o,[ee,re,ie]=c(X,H),K=h[g(B,F)];return{point:new L(ee,re,ie),rawValue:K,value:_(K)}}function b(B,F,X){return{point:B.point.clone().lerp(F.point,X),rawValue:B.rawValue+(F.rawValue-B.rawValue)*X,value:B.value+(F.value-B.value)*X}}function E(B,F){const X=B-F;return Math.abs(X)<1e-12?.5:Math.max(0,Math.min(1,B/X))}function w(B){const F=[];for(let X=0;X<B.length;X+=1){const H=B[X],ee=B[(X+1)%B.length],re=H.value>=0,ie=ee.value>=0;re&&ie?F.push(ee):re&&!ie?F.push(b(H,ee,E(H.value,ee.value))):!re&&ie&&F.push(b(H,ee,E(H.value,ee.value)),ee)}return F}function T(B){const{x:F,y:X,z:H}=B.point;m.push(F,X,H);const ee=Rh(B.rawValue,F,X,H,e,i,x);return p.push(ee.r,ee.g,ee.b),m.length/3-1}for(let B=0;B<o;B+=1)for(let F=0;F<o;F+=1){const X=-a+2*a*(F+.5)/o,H=a-2*a*(B+.5)/o,[ee,re,ie]=c(X,H);if(!l(ee,re,ie))continue;let K=[S(F,B),S(F+1,B),S(F+1,B+1),S(F,B+1)];if(K=w(K),K.length<3)continue;const fe=T(K[0]);for(let W=1;W<K.length-1;W+=1)v.push(fe,T(K[W]),T(K[W+1]))}if(!v.length)return null;const y=new We;y.setAttribute("position",new Ie(m,3)),y.setAttribute("color",new Ie(p,3)),y.setIndex(v),y.computeVertexNormals();const M=new Ot({vertexColors:!0,side:ct,transparent:!1,opacity:1,depthWrite:!0,color:new Me().setScalar(s)});M.toneMapped=!1;const P=new Ye(y,M);P.renderOrder=4,P.userData.vertexCount=v.length;const D=new Ot({vertexColors:!0,side:ct,transparent:!0,opacity:.26*s,depthWrite:!1,depthTest:!0,blending:nr,color:new Me().setScalar(s)});D.toneMapped=!1;const N=new Ye(y,D);N.renderOrder=4.05,N.userData.vertexCount=v.length;const k=new ft;return k.add(P,N),k.userData.vertexCount=v.length*2,k}function K_(){for(const i of[Ut,hn,An,Tn,Fr,er,Zs,Io])i&&Nn(lt,i);Ut=null,hn=null,An=null,Tn=null,Fr=null,er=null,Zs=null,Io=null}function J_(){for(const i of[qn,Xn,zr])i&&Nn(Pt,i);qn=null,Xn=null,zr=null}function Q_(i,e=!0){const t=n_();t&&Nn(Pt,t);const n=Co(i,Math.max(.08,i*.024),.9);t_(n),n.visible=e,Pt.add(n)}function vc(){for(const i of[tr,Br,gi])i&&Nn(Dn,i);tr=null,Br=null,gi=null}function Bo(){for(const i of[Cn,Rn,kr,Do,Uo])i&&Nn(Un,i);Cn=null,Rn=null,kr=null,Do=null,Uo=null}function Nn(i,e){i.remove(e),e.traverse(t=>{var n,r,s,o,a,c;if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const l of t.material)(n=l.userData)!=null&&n.pooled||l.dispose();else t.material&&((r=t.material.userData)!=null&&r.pooled||(t.material.map&&t.material.map.dispose(),(c=(a=(o=(s=t.material.uniforms)==null?void 0:s.volumeMap)==null?void 0:o.value)==null?void 0:a.dispose)==null||c.call(a),t.material.dispose()))})}function ex(i,e){const t=Math.max(36,Math.floor(e.thetaSegments*.6)),r=new nc(1,t).getAttribute("position"),s=[],o=[],a=new Map,c=[];let l=0;for(let h=0;h<r.count;h++){const f=r.getX(h),g=r.getY(h),x=r.getZ(h),m=1e5,p=`${Math.round(f*m)},${Math.round(g*m)},${Math.round(x*m)}`;let v=a.get(p);if(v===void 0){v=s.length/3,s.push(f,g,x),a.set(p,v);const _=Math.acos(x),S=Math.atan2(g,f),b=Ro(i.l,i.m,_,S);c.push(b),Math.abs(b)>l&&(l=Math.abs(b))}o.push(v)}const u=(e.radius??4)/(l||1);function d(h){const f=[],g=[],x=new Int32Array(s.length/3).fill(-1);for(let m=0;m<o.length;m+=3){const p=o[m],v=o[m+1],_=o[m+2],S=c[p]*h,b=c[v]*h,E=c[_]*h;if(S<=1e-6&&b<=1e-6&&E<=1e-6)continue;const w=(T,y)=>{if(x[T]===-1){const M=y>1e-6?y*u:0;x[T]=f.length/3,f.push(s[T*3]*M,s[T*3+1]*M,s[T*3+2]*M)}return x[T]};g.push(w(p,S),w(v,b),w(_,E))}return{vertices:f,indices:g}}return{positive:d(1),negative:d(-1)}}async function ri(i=!1){i instanceof Event&&(i=!1);const e=++uo;nx();const t=nn(),n=dn(),r=lc(t.n,t.l,t.m);A.statusText.textContent="Calculating...",A.renderButton.disabled=!0;let s=null,o=null,a=0,c=0;if(n.mode==="marching"||n.mode==="points"){const[l,u]=await Promise.all([Eu(0,t,n,1,n.positiveColor),Eu(1,t,n,-1,n.negativeColor)]);if(e!==uo)return;s=l,o=u,a=s.userData.vertexCount,c=o.userData.vertexCount}else{const{positive:l,negative:u}=v_(t,{...n,thetaSegments:Math.max(30,n.density+18),phiSegments:Math.max(52,n.density*3)});s=Ks(l,$t(n.positiveColor),n.opacity),o=Ks(u,$t(n.negativeColor),n.opacity),Js(s,n),Js(o,n),a=l.vertices.length/3,c=u.vertices.length/3}if(n.showProjection3d||n.showProjection){const l=Bh(t,n);l.name="integratedProjection3DGroup",l.visible=!!n.showProjection3d,s&&s.add(l)}requestAnimationFrame(()=>{if(e!==uo)return;n.showAxis=A.axis.checked,n.showBox=A.box.checked,K_(),J_(),vc(),Bo(),mc(n.backgroundColor),i_(n.showAxis,Math.max(1,n.radius/4.5)),A.toolAxis&&A.toolAxis.classList.toggle("active",n.showAxis),Ut=s,hn=o;const l=D_(n);if(Ut&&(Ut.visible=n.showPositive&&l,lt.add(Ut)),hn&&(hn.visible=n.showNegative&&l,lt.add(hn)),n.showCloud){const{positive:u,negative:d}=__(t,n);An=yu(u,$t(n.positiveColor)),Tn=yu(d,$t(n.negativeColor)),An.material.clippingPlanes=[rn],Tn.material.clippingPlanes=[rn],An.visible=n.showPositive,Tn.visible=n.showNegative,lt.add(An,Tn),a=u.length/3,c=d.length/3}if(n.showNode&&vu(t.n,t.l)!=="0 radial, 0 angular"&&(Fr=q_(t,n),Fr&&lt.add(Fr)),er=$_(),er&&lt.add(er),Io=null,(n.showBox||n.grid3d)&&(Zs=Ch(n.radius),lt.add(Zs)),fx(n),A.orbitalName.textContent=r,A.viewerTitle.textContent=`原子轨道  ${r}`,A.nodeText.textContent=vu(t.n,t.l),A.sliceText.textContent=n.slice.toUpperCase(),A.boxText.textContent=n.radius.toFixed(2),A.isoText.textContent=n.iso.toFixed(5),A.posCount.textContent=String(a),A.negCount.textContent=String(c),A.statusText.textContent="Rendered",A.animationWindow&&!A.animationWindow.classList.contains("closed")&&drawGenerationAnimation(0),lx(t,n),wc(t,n),Vo(t,n),i){const u=t.n>=5||t.l>=3?1.65:1.22;sx(t,n.radius*u,Math.max(Ln,ix(n))),J1(),Q1()}Qi(Ce),Qi(ze),A.renderButton.disabled=!1,kh()})}function tx(){return Array.from(document.querySelectorAll(".view-grid > .qt-window"))}function nx(i={}){for(const e of tx())e.classList.remove("closed"),i.restoreLayout?e.classList.remove("minimized","maximized"):e.classList.remove("minimized"),updateWindowControlLabels(e)}function Mc(i=ti){const e=A.viewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(rt.left=-i*t,rt.right=i*t,rt.top=i,rt.bottom=-i):(rt.left=-i,rt.right=i,rt.top=i/t,rt.bottom=-i/t),rt.near=.1,rt.far=Math.max(1e3,i*8),rt.updateProjectionMatrix()}function Wr(i,e=90){return Math.max(e,i*2.8)}function Ih(i=ti){var t,n,r;ti=i;const e=Wr(i);rt.position.set(0,0,e),rt.lookAt(0,0,0),Mc(i),Ce.target.set(0,0,0),Ce.update(),(t=A.toolXOY)==null||t.classList.add("active"),(n=A.toolYOZ)==null||n.classList.remove("active"),(r=A.toolXOZ)==null||r.classList.remove("active")}function Dh(i=Math.max(3,ti*.45)){const e=A.angularViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(dt.left=-i*t,dt.right=i*t,dt.top=i,dt.bottom=-i):(dt.left=-i,dt.right=i,dt.top=i/t,dt.bottom=-i/t),dt.near=.1,dt.far=Math.max(1e3,i*8),dt.updateProjectionMatrix()}function ix(i){const e=Math.max(4,Math.min(8,i.radius*.55))*.74;return Math.max(5.8,e*1.55)}function rx(...i){var s;const e=new Si,t=new Si;let n=!1;for(const o of i)o&&((s=o.updateWorldMatrix)==null||s.call(o,!0,!1),t.setFromObject(o),!(!Number.isFinite(t.min.x)||!Number.isFinite(t.max.x))&&(n?e.union(t):e.copy(t),n=!0));if(!n)return 4.2;const r=new wi;return e.getBoundingSphere(r),Math.max(.001,r.radius)}function sx(i,e,t){var o,a,c,l,u;const n=Ec(i);ti=e,Ln=Math.max(3,t);const r=Wr(e),s=Wr(Ln,40);n==="yoz"?(rt.position.set(r,0,0),dt.position.set(s,0,0)):n==="xoz"?(rt.position.set(0,r,0),dt.position.set(0,s,0)):(rt.position.set(0,0,r),dt.position.set(0,0,s)),rt.lookAt(0,0,0),dt.lookAt(0,0,0),Mc(e),Dh(Ln),Ce.target.set(0,0,0),ze.target.set(0,0,0),(o=Ce.handleResize)==null||o.call(Ce),(a=ze.handleResize)==null||a.call(ze),Ce.update(),ze.update(),(c=A.toolXOY)==null||c.classList.toggle("active",n==="xoy"),(l=A.toolYOZ)==null||l.classList.toggle("active",n==="yoz"),(u=A.toolXOZ)==null||u.classList.toggle("active",n==="xoz")}function Uh(i=Math.max(2.5,ti*.6)){const e=A.projectionViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Et.left=-i*t,Et.right=i*t,Et.top=i,Et.bottom=-i):(Et.left=-i,Et.right=i,Et.top=i/t,Et.bottom=-i/t),Et.near=.1,Et.far=1e3,Et.updateProjectionMatrix()}function ax(i=Math.max(3,ti*.5)){var e;fc=i,Et.up.set(0,0,1),Et.position.set(i*.78,-i*1.18,i*.68),Et.lookAt(0,0,0),Uh(i),ln.target.set(0,0,0),(e=ln.handleResize)==null||e.call(ln),ln.update()}function yc(i=4.5){const e=A.radialViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(At.left=-i*t,At.right=i*t,At.top=i,At.bottom=-i):(At.left=-i,At.right=i,At.top=i/t,At.bottom=-i/t),At.near=.1,At.far=1e3,At.updateProjectionMatrix()}function ox(i=4.5){var e;js=i,At.position.set(i*.65,-i*.9,i*.7),At.lookAt(0,0,0),yc(i),Ft.target.set(0,0,0),(e=Ft.handleResize)==null||e.call(Ft),Ft.update()}function cx(){var n;if(!pa()||!((n=A.syncRotation)!=null&&n.checked))return;const i=rt.position.clone().sub(Ce.target).normalize(),e=rt.up.clone(),t=(r,s,o,a=40)=>{const c=Wr(o,a);r.position.copy(i.clone().multiplyScalar(c)),r.up.copy(e),r.lookAt(0,0,0),s.target.set(0,0,0),r.updateProjectionMatrix()};t(dt,ze,Ln,40),t(Et,ln,fc,30)}function lx(i,e){const t={...e,radius:Math.max(4,Math.min(8,e.radius*.55)),thetaSegments:72},{positive:n,negative:r}=ex(i,t);qn=Ks(n,$t(e.positiveColor),1),Xn=Ks(r,$t(e.negativeColor),1),Js(qn,{...e,smooth:e.smooth||!e.wireframe,wireframe:e.wireframe},!0),Js(Xn,{...e,smooth:e.smooth||!e.wireframe,wireframe:e.wireframe},!0),qn.scale.setScalar(.74),Xn.scale.setScalar(.74),qn.visible=e.showPositive,Xn.visible=e.showNegative,Pt.add(qn,Xn);const s=rx(qn,Xn),o=Math.max(4.2,s*1.45);e.showNode&&(zr=Y_(i,Math.max(s*1.16,2.8),e),zr&&Pt.add(zr)),Q_(o,e.showAxis),Ln=Math.max(Ln,o*1.12)}const Pr=(()=>{const i=[255,0,0],e=[255,0,255],t=[255,255,255],n=[0,255,255],r=[0,0,255],s=[],o=(c,l)=>{for(let u=0;u<l;u+=1)s.push(c)},a=(c,l,u)=>{const d=[(l[0]-c[0])/u,(l[1]-c[1])/u,(l[2]-c[2])/u];for(let h=0;h<u;h+=1)s.push([c[0]+h*d[0],c[1]+h*d[1],c[2]+h*d[2]])};return o(i,20),a(i,e,80),a(e,t,25),o(t,5),a(t,n,25),a(n,r,80),o(r,20),s.reverse().map(([c,l,u])=>new Me(c/255,l/255,u/255))})();function fa(i){const t=(Math.max(-1,Math.min(1,i))+1)/2*(Pr.length-1),n=Math.max(0,Math.min(Pr.length-1,Math.floor(t))),r=Math.max(0,Math.min(Pr.length-1,n+1));return Pr[n].clone().lerp(Pr[r],t-n)}function ux(i,e,t,n,r,s){const o=e.rows,a=o.length,c=2*t/(a-1),l=Math.max(1,Math.round(.4/c)),u=new bi({color:16777215,transparent:!0,opacity:.56}),d=(h,f)=>{const g=-t+2*t*h/(a-1),x=-t+2*t*f/(a-1),m=o[f][h]/s;return new L(g,x,n+m*r+.012)};for(let h=0;h<a;h+=l){const f=[];for(let g=0;g<a;g+=1)f.push(d(g,h));i.add(new Gr(new We().setFromPoints(f),u))}for(let h=0;h<a;h+=l){const f=[];for(let g=0;g<a;g+=1)f.push(d(h,g));i.add(new Gr(new We().setFromPoints(f),u))}}function hx(i,e,t,n,r,s=1){const o=e.rows,a=o.length,c=2*t/(a-1),l=[(d,h,f)=>new L(-t+(d+f)*c,-t+h*c,n),(d,h,f)=>new L(-t+(d+1)*c,-t+(h+f)*c,n),(d,h,f)=>new L(-t+(d+1-f)*c,-t+(h+1)*c,n),(d,h,f)=>new L(-t+d*c,-t+(h+1-f)*c,n)],u=[[0,1],[1,2],[2,3],[3,0]];for(const d of r){const h=new bi({color:fa(d).getHex(),transparent:!0,opacity:.95}),f=[];for(let g=0;g<a-1;g+=1)for(let x=0;x<a-1;x+=1){const m=[o[g][x],o[g][x+1],o[g+1][x+1],o[g+1][x]].map(v=>v/s),p=[];for(let v=0;v<4;v+=1){const[_,S]=u[v],b=m[_]-d,E=m[S]-d;if(b===0||b*E<0){const w=Math.abs(b)+Math.abs(E);if(w<1e-12)continue;const T=Math.max(0,Math.min(1,Math.abs(b)/w));p.push(l[v](x,g,T))}}p.length>=2&&(f.push(p[0],p[1]),p.length>=4&&f.push(p[2],p[3]))}f.length&&i.add(new Ko(new We().setFromPoints(f),h))}}const fn={radius:16756736,direction:3538793,point:16776960};function pa(){var i;return!!((i=A.relationMode)!=null&&i.checked)}function dx(){const i=[[lt,No],[Dn,Oo],[Un,Fo],[Pt,zo]];for(const[e,t]of i)t&&Nn(e,t);No=null,Oo=null,Fo=null,zo=null}function bu(i){var n,r;let e=0;const t=new L;return(n=i==null?void 0:i.updateMatrixWorld)==null||n.call(i,!0),(r=i==null?void 0:i.traverse)==null||r.call(i,s=>{var a,c;const o=(c=(a=s.geometry)==null?void 0:a.attributes)==null?void 0:c.position;if(o){s.updateMatrixWorld(!0);for(let l=0;l<o.count;l+=1)t.fromBufferAttribute(o,l).applyMatrix4(s.matrixWorld),e=Math.max(e,t.length())}}),e}function fx(i){const e=Math.max(bu(Ut),bu(hn));ha=e>.001?e*1.02:i.radius*.86}function Nh(){var d,h,f,g;const i=dn(),e=Math.max(0,Math.min(100,Number(((d=A.scanRadius)==null?void 0:d.value)??45))),t=Math.max(0,Math.min(180,Number(((h=A.scanTheta)==null?void 0:h.value)??90))),n=(Number(((f=A.scanPhi)==null?void 0:f.value)??0)%360+360)%360,r=Math.max(.001,ha||i.radius),s=r*e/100,o=t*Math.PI/180,a=n*Math.PI/180,c=new L(Math.sin(o)*Math.cos(a),Math.sin(o)*Math.sin(a),Math.cos(o)).normalize(),l=c.clone().multiplyScalar(s),u=Number(((g=A.scanSliceZ)==null?void 0:g.value)??0);return{options:i,radiusPercent:e,thetaDegrees:t,phiDegrees:n,r:s,maxRadius:r,direction:c,point:l,sliceZ:u}}function px(i=Nh()){A.scanRadiusValue&&(A.scanRadiusValue.value=`${Math.round(i.radiusPercent)}%`),A.scanThetaValue&&(A.scanThetaValue.value=`${Math.round(i.thetaDegrees)}°`),A.scanPhiValue&&(A.scanPhiValue.value=`${Math.round(i.phiDegrees)}°`),A.scanSliceZValue&&(A.scanSliceZValue.value=`${Math.round(i.sliceZ)}`)}function Sc(i,e,t=.95){const n=new bi({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});n.toneMapped=!1;const r=new Gr(new We().setFromPoints(i),n);return r.renderOrder=30,r}function mx(i,e,t=.95){const n=new bi({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});n.toneMapped=!1;const r=new Ko(new We().setFromPoints(i),n);return r.renderOrder=30,r}function gx(i,e=16777215,t=.026,n=1){const r=new mh(i,!1,"centripetal",.18),s=new ic(r,Math.max(80,i.length*2),t,8,!1),o=new Ot({color:e,transparent:n<1,opacity:n,depthTest:!1,depthWrite:!1});o.toneMapped=!1;const a=new Ye(s,o);return a.renderOrder=31,a}function ko(i,e,t,n=.95){const r=[];for(let o=0;o<=160;o+=1){const a=Math.PI*2*o/160;r.push(new L(i*Math.cos(a),i*Math.sin(a),e))}return Sc(r,t,n)}function Oh(i,e,t=.74){const n=[],o=a=>{for(let c=0;c<160;c+=1){const l=Math.PI*2*c/160,u=Math.PI*2*(c+1)/160;n.push(a(l),a(u))}};for(let a=1;a<12;a+=1){const c=Math.PI*a/12,l=Math.cos(c)*i,u=Math.sin(c)*i;o(d=>new L(u*Math.cos(d),u*Math.sin(d),l))}for(let a=0;a<6;a+=1){const c=Math.PI*a/6;o(l=>new L(i*Math.sin(l)*Math.cos(c),i*Math.sin(l)*Math.sin(c),i*Math.cos(l)))}return mx(n,e,t)}function Xr(i,e,t=1){const n=new Ot({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});n.toneMapped=!1;const r=new Ye(new pr(i,24,16),n);return r.renderOrder=32,r}function Fh(i,e,t,n,r){const s=new Y1(i,new L(0,0,0),e,t,n,r);return s.traverse(o=>{o.material&&(o.material.depthTest=!1,o.material.depthWrite=!1,o.material.toneMapped=!1,o.renderOrder=31)}),s}function _x(i,e,t){return e==="xoz"?new pe(i.x*t,i.z*t):e==="yoz"?new pe(i.y*t,i.z*t):new pe(i.x*t,i.y*t)}function xx(i,e){const t=i.length();return t>e&&t>1e-9&&i.multiplyScalar(e/t),i}function vx(i){const e=new ft;i.r>.001&&e.add(Oh(i.r,fn.radius,.72));const t=Math.max(i.r,i.maxRadius*.22,1);e.add(Fh(i.direction,t,fn.direction,t*.11,t*.035));const n=Xr(Math.max(.08,i.maxRadius*.018),fn.point);n.position.copy(i.point),e.add(n),lt.add(e),No=e}function Mx(i){const e=new ft,t=Math.max(2.4,Ln*.55);e.add(Fh(i.direction,t,fn.direction,t*.14,t*.045));const n=Xr(.08,fn.point);n.position.copy(i.direction.clone().multiplyScalar(t)),e.add(n),Pt.add(e),zo=e}function yx(i){if(!En)return;const e=new ft,t=En.radius*.92,n=En.radius/Math.max(1e-4,i.maxRadius),r=Math.max(0,i.r*n),s=r>t?t/r:1,o=n*s,a=Math.min(t,Math.max(0,i.r*o));e.add(ko(a,En.bottomZ+.18,fn.radius,.95));const c=xx(_x(i.point,En.plane,o),t),l=Xr(.075,fn.point);l.position.set(c.x,c.y,En.bottomZ+.28),e.add(l),e.add(Sc([new L(0,0,En.bottomZ+.22),new L(c.x,c.y,En.bottomZ+.22)],fn.direction,.82)),Dn.add(e),Oo=e}function Sx(i){if(!Jt)return;const e=i.r/Math.max(1e-4,Jt.radialExtent);if(Cn){const a=Cn.userData.rings,c=Math.max(1,Math.round(e*a));Cn.geometry.setDrawRange(0,c*128*6)}if(wn){const a=wn.userData.rings,c=Math.max(1,Math.round(e*a)),l=wn.userData.sideAngles;wn.geometry.setDrawRange(0,c*l*6)}if(Rn){const a=Rn.userData.samples,c=a*2+1,l=Math.max(1,Math.round(e*a)),u=Rn.geometry.parameters.tubularSegments,d=u/c,h=u/2,f=l*d,g=l*d,x=Math.max(0,Math.floor(h-g)),m=Math.ceil(f+g);Rn.geometry.setDrawRange(x*8*6,m*8*6)}const t=new ft,n=Math.min(Jt.radiusScale,e*Jt.radiusScale),r=bc(nn(),i.r,i.options.radialMode),s=Jt.curveBaseZ+r/Jt.maxAbs*Jt.heightScale;t.add(Sc([new L(n,0,Jt.baseZ-.15),new L(n,0,Jt.heightTop)],fn.radius,.95));const o=Xr(.07,fn.point);o.position.set(n,0,s),t.add(o),Un.add(t),Fo=t}function Yr(){dx();const i=Nh();px(i),rn.constant;const e=i.sliceZ/100*i.maxRadius;rn.constant=e;let t=lt.getObjectByName("relationSliceCap");if(t&&(Nn(lt,t),t=null),!pa()){rn.constant=100;return}Math.abs(e)<i.maxRadius&&(t=Lh(nn(),i.options,"z",null,e,.75),t&&(t.name="relationSliceCap",lt.add(t))),vx(i),Mx(i),yx(i),Sx(i)}function Ex(i){const e=i.length();if(e<1e-6)return;const t=Math.acos(Math.max(-1,Math.min(1,i.z/e))),n=(Math.atan2(i.y,i.x)+Math.PI*2)%(Math.PI*2);A.scanRadius&&(A.scanRadius.value=String(Math.round(Math.max(0,Math.min(100,e/Math.max(1e-4,ha)*100))))),A.scanTheta&&(A.scanTheta.value=String(Math.round(t*180/Math.PI))),A.scanPhi&&(A.scanPhi.value=String(Math.round(n*180/Math.PI))),Yr(),setStatus(`关联高亮：r=${e.toFixed(2)}, θ=${Math.round(t*180/Math.PI)}°, φ=${Math.round(n*180/Math.PI)}°`)}function wx(i){var o;if(!pa())return;const e=mn.domElement.getBoundingClientRect(),t=new pe((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),n=new X1;n.params.Points.threshold=Math.max(.12,dn().radius*.025),n.setFromCamera(t,rt);const r=[Ut,hn,An,Tn].filter(Boolean),s=n.intersectObjects(r,!0);(o=s[0])!=null&&o.point&&Ex(s[0].point)}function Ec(i){const e=lc(i.n,i.l,i.m).replace(/^\d+/,"");return e.startsWith("Dyz")||e.startsWith("Fyz2")||e.startsWith("Gz3y")||e.startsWith("Gzy3")||e.startsWith("Gyz3")||e.startsWith("Hyz4")||e.startsWith("Hyz")?"yoz":e.startsWith("Pz")||e.startsWith("Dz2")||e.startsWith("Dxz")||e.startsWith("Fz3")||e.startsWith("Fxz2")||e.startsWith("Gz4")||e.startsWith("Gz3x")||e.startsWith("Gxz3")||e.startsWith("Gzx3")||e.startsWith("Hxz4")||e.startsWith("Hz5")||e.startsWith("Hxz")?"xoz":"xoy"}function zh(i,e,t,n){const r=[],s=e.radius;let o=0,a=0,c=0;for(let l=0;l<n;l+=1){const u=[],d=-s+2*s*l/(n-1);for(let h=0;h<n;h+=1){const f=-s+2*s*h/(n-1);let g=0;const x=e.sliceOffset||0;t==="xoy"&&(g=zs(i,f,d,x)),t==="xoz"&&(g=zs(i,f,x,d)),t==="yoz"&&(g=zs(i,x,f,d)),o=Math.max(o,Math.abs(g)),a=Math.max(a,g),c=Math.min(c,g),u.push(g)}r.push(u)}return{data:{rows:r,maxAbs:o,maxPositive:a,minNegative:c},scale:1}}function Bh(i,e){const t=new ft,r=vr(i).gridSize*2+1,s=e.slice!=="none"?e.slice:Ec(i),{data:o}=zh(i,e,s,r),a=(o.maxPositive>1e-12?o.maxPositive:o.maxAbs||1)/.9,c=[],l=[],u=[],d=e.radius,h=d*.9;for(let v=0;v<r;v+=1)for(let _=0;_<r;_+=1){const S=-d+2*d*_/(r-1),b=-d+2*d*v/(r-1),E=o.rows[v][_]/a,T=E*h;let y,M,P;s==="xoy"?(y=S,M=b,P=T):s==="xoz"?(y=S,M=T,P=b):s==="yoz"&&(y=T,M=S,P=b),c.push(y,M,P);const D=fa(E);l.push(D.r,D.g,D.b)}for(let v=0;v<r-1;v+=1)for(let _=0;_<r-1;_+=1){const S=v*r+_,b=S+1,E=S+r,w=E+1;u.push(S,E,b,b,E,w)}const f=new We;f.setAttribute("position",new Ie(c,3)),f.setAttribute("color",new Ie(l,3)),f.setIndex(u),f.computeVertexNormals();const g=new Ye(f,new Ji({vertexColors:!0,side:ct,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04}));g.name="integratedProjectionMountain",t.add(g);const x=[];for(let v=0;v<r;v+=1)for(let _=0;_<r;_+=1){const S=-d+2*d*_/(r-1),b=-d+2*d*v/(r-1);s==="xoy"?x.push(S,b,0):s==="xoz"?x.push(S,0,b):s==="yoz"&&x.push(0,S,b)}const m=new We;m.setAttribute("position",new Ie(x,3)),m.setAttribute("color",new Ie(l,3)),m.setIndex(u),m.computeVertexNormals();const p=new Ye(m,new Ot({vertexColors:!0,side:ct,transparent:!0,opacity:.85}));return p.name="integratedProjectionSlice",t.add(p),t.userData.vertexCount=r*r,t.userData.slicePlane=s,t.userData.radius=d,t.userData.size=r,t.userData.projectionScale=a,t}function bx(i,e){const t=`${i.n}|${i.l}|${i.z}`;if(window._maxPsiCache&&window._maxPsiCache[t])return window._maxPsiCache[t];let n=0,r=0;const s=20,o=Math.min(4.7,e.radius*.42);for(let c=0;c<=s;c++){const l=-o+2*o*c/s;for(let u=0;u<=s;u++){const d=-o+2*o*u/s;for(let h=0;h<=s;h++){const f=-o+2*o*h/s,g=zs(i,f*2.38,d*2.38,l*2.38);Math.abs(g)>n&&(n=Math.abs(g)),g>r&&(r=g)}}}const a={maxAbs:n,maxPos:r};return window._maxPsiCache||(window._maxPsiCache={}),window._maxPsiCache[t]=a,a}function wc(i,e){Dn.background=new Me(e.backgroundColor);const t=new ft,r=vr(i).gridSize*2+1,s=e.slice!=="none"?e.slice:Ec(i),{data:o}=zh(i,e,s,r),a=bx(i,e),c=(a.maxPos>1e-12?a.maxPos:a.maxAbs||1)/.9,l=[],u=[],d=[],h=Math.min(4.7,e.radius*.42),f=h*1,g=-h*1,x=h*.9;En={plane:s,radius:h,surfaceZ:f,bottomZ:g,height:x};for(let E=0;E<r;E+=1)for(let w=0;w<r;w+=1){const T=-h+2*h*w/(r-1),y=-h+2*h*E/(r-1),M=o.rows[E][w]/c,P=M;l.push(T,y,f+P*x);const D=fa(M);u.push(D.r,D.g,D.b)}for(let E=0;E<r-1;E+=1)for(let w=0;w<r-1;w+=1){const T=E*r+w,y=T+1,M=T+r,P=M+1;d.push(T,M,y,y,M,P)}const m=new We;m.setAttribute("position",new Ie(l,3)),m.setAttribute("color",new Ie(u,3)),m.setIndex(d),m.computeVertexNormals(),tr=new Ye(m,new Ji({vertexColors:!0,side:ct,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04})),t.add(tr),ux(t,o,h,f,x,c);const p=new ft,v=[];for(let E=0;E<r;E+=1)for(let w=0;w<r;w+=1){const T=-h+2*h*w/(r-1),y=-h+2*h*E/(r-1);v.push(T,y,g+.02)}const _=new We;_.setAttribute("position",new Ie(v,3)),_.setAttribute("color",new Ie(u,3)),_.setIndex(d),_.computeVertexNormals();const S=new Ye(_,new Ot({vertexColors:!0,side:ct,transparent:!0,opacity:.78}));p.add(S);const b=(E,w,T)=>Array.from({length:T},(y,M)=>E+(w-E)*M/(T-1));hx(p,o,h,g+.08,[...b(-1,0,20),...b(0,1,20)],c),Br=p,t.add(Br),gi=Ch(h),gi.scale.z=1,gi.position.z=(f+g)/2,t.add(gi),tr=t,Br=null,gi=null,Dn.add(t),ax(h*1.92),Yr()}function bc(i,e,t){const n=Math.max(e,1e-4),r=Qn(i.n,i.l,i.z,n);return t==="R"?r:t==="R2"?r*r:n*n*r*r}function Au(i,e=11974326){const t=Math.abs(i),n=Math.max(0,Math.min(1,(t-.035)/.72)),r=n*n*(3-2*n);return new Me(e).lerp(fa(i),r)}function Ax(i,e,t,n){const r=uc(e).filter(o=>o>.02&&o<n.radialExtent*.995);if(!r.length)return;const s=n.curveBaseZ??(t.radialSide?n.sideZ:n.diskZ+n.curveLift);for(const o of r){const a=o/n.radialExtent*n.radiusScale;if(t.radialCurve){const c=bc(e,o,t.radialMode),l=s+c/n.maxAbs*n.heightScale;for(const u of[-1,1]){const d=Xr(.065,16761856,.95);d.position.set(u*a,0,l),i.add(d)}}}}function Vo(i,e){var E;Un.background=new Me(e.backgroundColor);const t=i.n>=5?260:190,n=i.n>=5?132:96,r=pa()?Math.max(.001,ha||Po(i)):Math.max(5,Po(i)),s=[];for(let w=0;w<=t;w+=1)s.push(bc(i,r*w/t,e.radialMode));const o=Math.max(...s.map(Math.abs),1e-6),a=3.7,c=a*.43,l=-1.25,u=l,d=.08,h=u+a*.72,f=e.radialSide?h:u+d,g=f+s[0]/o*c;Jt={radialExtent:r,radiusScale:a,heightScale:c,baseZ:l,diskZ:u,curveLift:d,sideZ:h,curveBaseZ:f,curveOriginZ:g,maxAbs:o,heightTop:f+c+.38};const x=new ft,m=new Ye(new pr(a,128,48,0,Math.PI*2,Math.PI/2,Math.PI/2),new Ji({color:12105912,side:ct,transparent:!0,opacity:.88,shininess:1,specular:2236962}));m.rotation.x=Math.PI/2,m.position.z=l,x.add(m);const p=new We,v=[],_=[],S=[];for(let w=0;w<=n;w+=1){const T=w/n*a,y=Math.round(w/n*t),M=s[y]/o;for(let P=0;P<=128;P+=1){const D=Math.PI*2*P/128,N=T*Math.cos(D),k=T*Math.sin(D);v.push(N,k,u);const B=Au(M,12105912);_.push(B.r,B.g,B.b)}}const b=129;for(let w=0;w<n;w+=1)for(let T=0;T<128;T+=1){const y=w*b+T,M=y+1,P=y+b,D=P+1;S.push(y,P,M,M,P,D)}if(p.setAttribute("position",new Ie(v,3)),p.setAttribute("color",new Ie(_,3)),p.setIndex(S),p.computeVertexNormals(),Cn=new Ye(p,new Ji({vertexColors:!0,side:ct,transparent:!1,opacity:1,shininess:8,specular:2236962})),Cn.userData.rings=n,Cn.userData.samples=t,x.add(Cn),e.radialSide){const w=new Ye(new fr(a,a,Math.max(.1,h-u),160,1,!0),new G1({color:14149604,side:ct,transparent:!0,opacity:.24,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.28,ior:1.45,transmission:.08,specularIntensity:.5,specularColor:16777215}));w.rotation.x=Math.PI/2,w.position.z=(h+u)/2,w.renderOrder=2,x.add(w),x.add(ko(a,h,16777215,.12)),x.add(ko(a,u,16777215,.08));const T=new We,y=[],M=[],P=[],D=e.radialSection?64:128,N=(e.radialSection,0),k=e.radialSection?Math.PI:Math.PI*2;for(let F=0;F<=n;F+=1){const X=F/n*a,H=Math.round(F/n*t),ee=s[H]/o,re=h+ee*c;for(let ie=0;ie<=D;ie+=1){const K=N+k*ie/D,fe=X*Math.cos(K),W=X*Math.sin(K);y.push(fe,W,re);const J=Au(ee,11711154);M.push(J.r,J.g,J.b)}}const B=D+1;for(let F=0;F<n;F+=1)for(let X=0;X<D;X+=1){const H=F*B+X,ee=H+1,re=H+B,ie=re+1;P.push(H,re,ee,ee,re,ie)}T.setAttribute("position",new Ie(y,3)),T.setAttribute("color",new Ie(M,3)),T.setIndex(P),T.computeVertexNormals(),wn=new Ye(T,new Ji({vertexColors:!0,side:ct,transparent:!1,opacity:1,shininess:10,specular:3355443})),wn.userData.rings=n,wn.userData.samples=t,wn.userData.sideAngles=D,x.add(wn)}if(e.radialCurve){const w=[],T=f;for(let M=0;M<=t;M+=1){const P=a*M/t,D=T+s[M]/o*c;w.push(new L(P,0,D))}const y=w.slice(1).map(M=>new L(-M.x,0,M.z)).reverse();Rn=gx([...y,...w],16777215,e.radialSide?.013:.011),Rn.userData.samples=t,x.add(Rn)}if(e.radialAxis){const w=g;kr=K1(a+.9,a+.45,w,e.radialMode),x.add(kr)}Ax(x,i,e,Jt),Do=x,Un.add(x),kr=null,Uo=null,e.radialSide?(js=4.9,At.position.set(0,-7.2,h+1.25),At.lookAt(0,0,0),yc(js),Ft.target.set(0,0,0),(E=Ft.handleResize)==null||E.call(Ft),Ft.update()):ox(5.3),Yr()}function ea(){Tx();const i=(e,t,n,r,s)=>{var a;const o=e.getBoundingClientRect();o.width<2||o.height<2||(t.setSize(o.width,o.height,!1),t.domElement.style.width="100%",t.domElement.style.height="100%",n(s),(a=r.handleResize)==null||a.call(r),r.update())};i(A.viewer,mn,Mc,Ce,ti),i(A.angularViewer,ii,Dh,ze,Ln),i(A.projectionViewer,_r,Uh,ln,fc),i(A.radialViewer,xr,yc,Ft,js);for(const e of pc)Cx(e,e.radius);r_(),f_()}function Tx(){const i=document.querySelector(".sidebar"),e=i==null?void 0:i.querySelector(".sidebar-fit");if(!i)return;if(window.matchMedia("(max-width: 900px)").matches){document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");return}document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");const t=getComputedStyle(i),n=i.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),r=(e==null?void 0:e.scrollHeight)||i.scrollHeight;if(!n||!r||r<=n+4)return;const s=Math.max(.72,Math.min(1,(n-4)/r));document.documentElement.style.setProperty("--sidebar-zoom",s.toFixed(3)),document.documentElement.style.setProperty("--sidebar-fit-height",`${Math.ceil(r*s)}px`)}function kh(){requestAnimationFrame(()=>{ea(),requestAnimationFrame(()=>{ea(),vh()})})}function Cx(i,e){var o,a;if(!i)return;const t=i.container.getBoundingClientRect();if(t.width<2||t.height<2)return;i.renderer.setSize(t.width,t.height,!1);const n=t.width/t.height,r=Math.max(3,e);n>=1?(i.camera.left=-r*n,i.camera.right=r*n,i.camera.top=r,i.camera.bottom=-r):(i.camera.left=-r,i.camera.right=r,i.camera.top=r/n,i.camera.bottom=-r/n),i.camera.near=.1,i.camera.far=Math.max(1e3,r*8);const s=i.target??new L;i.camera.position.set(s.x,s.y,s.z+Wr(r,40)),i.camera.lookAt(s),i.camera.updateProjectionMatrix(),i.controls.target.copy(s),(a=(o=i.controls).handleResize)==null||a.call(o),i.controls.update()}y_({resizeAfterLayoutChange:kh,renderOrbital:ri,applyPreset,readParams:nn,downloadBlob:(i,e)=>{const t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=e,t.click(),URL.revokeObjectURL(t.href)},getCloudPositiveObject:()=>An,getCloudNegativeObject:()=>Tn,getIsoMeshes:()=>[Ut,hn,er,tr].filter(Boolean)});function Vh(){I_(performance.now()*.001),Ce.update(),ze.update(),ln.update(),Ft.update(),cx(),mn.render(lt,rt),ii.render(Pt,dt),_r.render(Dn,Et),xr.render(Un,At);for(const i of pc)i.controls.update(),i.renderer.render(i.scene,i.camera);requestAnimationFrame(Vh)}w_();for(const i of[A.n,A.l,A.m,A.z,A.iso,A.density,A.radius,A.opacity,A.mode,A.slice,A.node,A.axis,A.box,A.positiveColor,A.negativeColor,A.backgroundColor,A.desktopMatch,A.boxSizeDisplay,A.cloud,A.positiveLobe,A.negativeLobe,A.wireframe,A.smooth,A.projection,A.radialSection,A.radialSide,A.radialCurve,A.radialAxis,A.radialNode,A.polarNode,A.longitudeNode,A.grid3d,A.relationMode,A.syncRotation,A.scanRadius,A.scanTheta,A.scanPhi,A.scanSliceZ])i&&i.addEventListener("input",()=>{if(i===A.boxSizeDisplay&&L_(),nn(),dn(),i===A.backgroundColor){mc(A.backgroundColor.value);return}if(i===A.relationMode){Bo(),Vo(nn(),dn());return}if([A.syncRotation,A.scanRadius,A.scanTheta,A.scanPhi,A.scanSliceZ].includes(i)){if(A.relationMode.checked||(A.relationMode.checked=!0,Bo(),Vo(nn(),dn())),Yr(),i===A.scanSliceZ){const e=nn(),t=dn();if(vc(),wc(e,t),t.showProjection3d&&typeof Ut<"u"&&Ut){const n=Ut.children.find(s=>s.name==="integratedProjection3DGroup");n&&(Ut.remove(n),typeof Nn=="function"&&Nn(typeof lt<"u"?lt:null,n));const r=Bh(e,t);r.name="integratedProjection3DGroup",r.visible=!0,Ut.add(r)}}return}if(![A.wireframe,A.smooth].includes(i)){if([A.axis,A.box].includes(i)){fastUpdateVisualOptions();return}(i.type==="checkbox"||i.type==="color")&&ri(!1)}});for(const i of[A.n,A.l,A.m,A.z,A.desktopMatch])i.addEventListener("change",()=>{gc(),ri(!0)});A.preset.addEventListener("input",applyPreset);A.renderButton.addEventListener("click",()=>ri(!0));var Tu;(Tu=A.redrawProxyButton)==null||Tu.addEventListener("click",()=>ri(!0));var Cu;(Cu=A.presetButton)==null||Cu.addEventListener("click",()=>{gc(),ri(!0)});var Ru;(Ru=A.axisProxyButton)==null||Ru.addEventListener("click",()=>{toggleAxis()});var Pu;(Pu=document.querySelector("#colorProxyButton"))==null||Pu.addEventListener("click",()=>{A.paletteOne.checked=!A.paletteOne.checked,A.paletteTwo.checked=!A.paletteOne.checked,applyPalette(A.paletteOne.checked?"one":"two")});A.resetCameraButton.addEventListener("click",()=>Ih());A.screenshotButton.addEventListener("click",exportImage);for(const i of document.querySelectorAll("[data-window-action]"))i.addEventListener("click",e=>{e.stopPropagation(),handleWindowControl(i)});for(const i of A.menuItems)i.addEventListener("click",e=>{e.stopPropagation(),openMenu(i)});document.addEventListener("click",closeMenu);A.menuPopup.addEventListener("click",i=>i.stopPropagation());Mr.addEventListener("click",exitAppFullscreen);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(ho=!0,syncFullscreenUi(!0)):ho&&(ho=!1,syncFullscreenUi(!1))});var Lu;(Lu=A.toolRender)==null||Lu.addEventListener("click",()=>{closeMenu(),ri()});var Iu;(Iu=A.toolSave)==null||Iu.addEventListener("click",()=>{closeMenu(),exportImage()});var Du;(Du=A.toolTile)==null||Du.addEventListener("click",()=>{closeMenu(),setWindowLayout("tile")});var Uu;(Uu=A.toolOverlap)==null||Uu.addEventListener("click",()=>{closeMenu(),setWindowLayout("overlap")});var Nu;(Nu=A.toolAxis)==null||Nu.addEventListener("click",()=>{console.log("[DEBUG] User clicked #toolAxis button."),closeMenu(),toggleAxis()});var Ou;(Ou=A.toolXOY)==null||Ou.addEventListener("click",()=>{closeMenu(),setPlaneView("xoy")});var Fu;(Fu=A.toolYOZ)==null||Fu.addEventListener("click",()=>{closeMenu(),setPlaneView("yoz")});var zu;(zu=A.toolXOZ)==null||zu.addEventListener("click",()=>{closeMenu(),setPlaneView("xoz")});setTimeout(()=>{e_(),mn.domElement.addEventListener("click",wx),window.addEventListener("resize",ea),mc(),bindExclusiveCheckboxes(),o_(),bindAppUI(),C_(),ea(),setWindowLayout("tile"),gc(),Ih(),ri(!0),Vh()},0);$h();
