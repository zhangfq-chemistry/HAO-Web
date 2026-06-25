(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const g={viewer:document.querySelector("#viewer"),angularViewer:document.querySelector("#angularViewer"),projectionViewer:document.querySelector("#projectionViewer"),radialViewer:document.querySelector("#radialViewer"),viewGrid:document.querySelector(".view-grid"),mainWindow:document.querySelector(".main-window"),menuPopup:document.querySelector("#menuPopup"),menuItems:document.querySelectorAll(".menu-item"),toolRender:document.querySelector("#toolRender"),toolSave:document.querySelector("#toolSave"),toolTile:document.querySelector("#toolTile"),toolOverlap:document.querySelector("#toolOverlap"),toolAxis:document.querySelector("#toolAxis"),toolXOY:document.querySelector("#toolXOY"),toolYOZ:document.querySelector("#toolYOZ"),toolXOZ:document.querySelector("#toolXOZ"),preset:document.querySelector("#presetInput"),cosType:document.querySelector("#cosTypeInput"),sinType:document.querySelector("#sinTypeInput"),cloud:document.querySelector("#cloudInput"),positiveLobe:document.querySelector("#positiveLobeInput"),negativeLobe:document.querySelector("#negativeLobeInput"),wireframe:document.querySelector("#wireframeInput"),smooth:document.querySelector("#smoothInput"),projection:document.querySelector("#projectionInput"),projection3d:document.querySelector("#projection3dInput"),paletteOne:document.querySelector("#paletteOneInput"),paletteTwo:document.querySelector("#paletteTwoInput"),xySlice:document.querySelector("#xySliceInput"),yzSlice:document.querySelector("#yzSliceInput"),xzSlice:document.querySelector("#xzSliceInput"),quarter:document.querySelector("#quarterInput"),eighth:document.querySelector("#eighthInput"),threeQuarter:document.querySelector("#threeQuarterInput"),radialR:document.querySelector("#radialRInput"),radialR2:document.querySelector("#radialR2Input"),radialRdf:document.querySelector("#radialRdfInput"),radialSection:document.querySelector("#radialSectionInput"),radialSide:document.querySelector("#radialSideInput"),radialCurve:document.querySelector("#radialCurveInput"),radialAxis:document.querySelector("#radialAxisInput"),radialNode:document.querySelector("#radialNodeInput"),polarNode:document.querySelector("#polarNodeInput"),relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue"),longitudeNode:document.querySelector("#longitudeNodeInput"),grid3d:document.querySelector("#grid3dInput"),desktopMatch:document.querySelector("#desktopMatchInput"),n:document.querySelector("#nInput"),l:document.querySelector("#lInput"),m:document.querySelector("#mInput"),z:document.querySelector("#zInput"),mode:document.querySelector("#modeInput"),slice:document.querySelector("#sliceInput"),node:document.querySelector("#nodeInput"),axis:document.querySelector("#axisInput"),box:document.querySelector("#boxInput"),positiveColor:document.querySelector("#positiveColorInput"),negativeColor:document.querySelector("#negativeColorInput"),backgroundColor:document.querySelector("#backgroundColorInput"),iso:document.querySelector("#isoInput"),density:document.querySelector("#densityInput"),radius:document.querySelector("#radiusInput"),boxSizeDisplay:document.querySelector("#boxSizeDisplay"),intervalValue:document.querySelector("#intervalValue"),probabilityValue:document.querySelector("#probabilityValue"),opacity:document.querySelector("#opacityInput"),isoValue:document.querySelector("#isoValue"),densityValue:document.querySelector("#densityValue"),radiusValue:document.querySelector("#radiusValue"),opacityValue:document.querySelector("#opacityValue"),renderButton:document.querySelector("#renderButton"),axisProxyButton:document.querySelector("#axisProxyButton"),presetButton:document.querySelector("#presetButton"),redrawProxyButton:document.querySelector("#redrawProxyButton"),resetCameraButton:document.querySelector("#resetCameraButton"),screenshotButton:document.querySelector("#screenshotButton"),orbitalName:document.querySelector("#orbitalName"),viewerTitle:document.querySelector("#viewerTitle"),statusText:document.querySelector("#statusText"),posCount:document.querySelector("#posCount"),negCount:document.querySelector("#negCount"),nodeText:document.querySelector("#nodeText"),sliceText:document.querySelector("#sliceText"),boxText:document.querySelector("#boxText"),isoText:document.querySelector("#isoText"),openActivityButton:document.querySelector("#openActivityButton"),annotationModeButton:document.querySelector("#annotationModeButton"),annotationToolbar:document.querySelector("#annotationToolbar"),annotationClearButton:document.querySelector("#annotationClearButton"),openSketchButton:document.querySelector("#openSketchButton"),openAnimationButton:document.querySelector("#openAnimationButton"),openPredictButton:document.querySelector("#openPredictButton"),openChallengeButton:document.querySelector("#openChallengeButton"),sketchWindow:document.querySelector("#sketchWindow"),boxWindow:document.querySelector("#boxWindow"),paletteWindow:document.querySelector("#paletteWindow"),animationWindow:document.querySelector("#animationWindow"),animationCanvas:document.querySelector("#animationCanvas"),animationStepBadge:document.querySelector("#animationStepBadge"),animationTitle:document.querySelector("#animationTitle"),animationText:document.querySelector("#animationText"),animationProgressFill:document.querySelector("#animationProgressFill"),animationRestartButton:document.querySelector("#animationRestartButton"),animationPrevButton:document.querySelector("#animationPrevButton"),animationPlayButton:document.querySelector("#animationPlayButton"),animationNextButton:document.querySelector("#animationNextButton"),animationExportButton:document.querySelector("#animationExportButton"),animationExportOverlay:document.querySelector("#animationExportOverlay"),confirmExportButton:document.querySelector("#confirmExportButton"),cancelExportButton:document.querySelector("#cancelExportButton"),activityWindow:document.querySelector("#activityWindow"),activityTitle:document.querySelector("#activityTitle"),activityModeButtons:document.querySelectorAll("[data-activity-mode]"),activityPanes:document.querySelectorAll(".activity-pane"),predictPane:document.querySelector("#predictPane"),scorePane:document.querySelector("#scorePane"),diagnosisPane:document.querySelector("#diagnosisPane"),nodesPane:document.querySelector("#nodesPane"),comparePane:document.querySelector("#comparePane"),challengePane:document.querySelector("#challengePane"),tabletPane:document.querySelector("#tabletPane"),predictTarget:document.querySelector("#predictTargetInput"),startPredictButton:document.querySelector("#startPredictButton"),verifyPredictButton:document.querySelector("#verifyPredictButton"),clearPredictButton:document.querySelector("#clearPredictButton"),predictCanvas:document.querySelector("#predictCanvas"),predictResultImage:document.querySelector("#predictResultImage"),predictPenButton:document.querySelector("#predictPenButton"),predictEraserButton:document.querySelector("#predictEraserButton"),predictColorInput:document.querySelector("#predictColorInput"),predictSizeInput:document.querySelector("#predictSizeInput"),predictPrompt:document.querySelector("#predictPrompt"),quizRadialInput:document.querySelector("#quizRadialInput"),quizAngularInput:document.querySelector("#quizAngularInput"),scoreCurrentButton:document.querySelector("#scoreCurrentButton"),scorePrompt:document.querySelector("#scorePrompt"),diagnoseNodesButton:document.querySelector("#diagnoseNodesButton"),diagnosePhaseButton:document.querySelector("#diagnosePhaseButton"),diagnoseProjectionButton:document.querySelector("#diagnoseProjectionButton"),diagnosisPrompt:document.querySelector("#diagnosisPrompt"),nodeRevealButton:document.querySelector("#nodeRevealButton"),nodeHideButton:document.querySelector("#nodeHideButton"),compareA:document.querySelector("#compareAInput"),compareB:document.querySelector("#compareBInput"),compareApplyButton:document.querySelector("#compareApplyButton"),compareLoadAButton:document.querySelector("#compareLoadAButton"),compareLoadBButton:document.querySelector("#compareLoadBButton"),compareAViewer:document.querySelector("#compareAViewer"),compareBViewer:document.querySelector("#compareBViewer"),compareATitle:document.querySelector("#compareATitle"),compareBTitle:document.querySelector("#compareBTitle"),compareANotes:document.querySelector("#compareANotes"),compareBNotes:document.querySelector("#compareBNotes"),compareSummary:document.querySelector("#compareSummary"),newChallengeButton:document.querySelector("#newChallengeButton"),challengeGuess:document.querySelector("#challengeGuessInput"),revealChallengeButton:document.querySelector("#revealChallengeButton"),challengePrompt:document.querySelector("#challengePrompt"),explainFormula:document.querySelector("#explainFormula"),sketchCanvas:document.querySelector("#sketchCanvas"),sketchColor:document.querySelector("#sketchColorInput"),sketchSize:document.querySelector("#sketchSizeInput"),sketchPen:document.querySelector("#sketchPenButton"),sketchEraser:document.querySelector("#sketchEraserButton"),sketchClear:document.querySelector("#sketchClearButton"),tabletLargeButton:document.querySelector("#tabletLargeButton"),tabletRestoreButton:document.querySelector("#tabletRestoreButton"),tabletScreenshotButton:document.querySelector("#tabletScreenshotButton")};function Zh(i){Object.assign(window,i),Qh()}function _s(i,e){var n,r;if(!e||e.classList.contains("maximized")||i.target.closest(".window-controls")||i.pointerType!=="mouse"&&!i.isPrimary)return;i.preventDefault();const t=e.getBoundingClientRect();activityState.dragging=!0,activityState.dragPointerId=i.pointerId,activityState.dragWindow=e,activityState.dragOffsetX=i.clientX-t.left,activityState.dragOffsetY=i.clientY-t.top,(r=(n=i.currentTarget)==null?void 0:n.setPointerCapture)==null||r.call(n,i.pointerId),e.style.zIndex="130"}function Kh(i){const e=activityState.dragWindow;if(!activityState.dragging||!e||activityState.dragPointerId!==null&&i.pointerId!==activityState.dragPointerId)return;i.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),n=window.innerHeight-32,r=Math.max(0,Math.min(t,i.clientX-activityState.dragOffsetX)),s=Math.max(0,Math.min(n,i.clientY-activityState.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${s}px`,e.style.right="auto",e.style.bottom="auto"}function ul(){activityState.dragging=!1,activityState.dragPointerId=null,activityState.dragWindow=null,recoverAllViewerControls()}function Jh(){renderer.render(scene,camera);const i=document.createElement("a");i.download=`${g.orbitalName.textContent||"hao-orbital"}.png`,i.href=renderer.domElement.toDataURL("image/png"),i.click()}function Qh(){var i,e,t,n,r,s,o,a,c,l,u,h,d,f,x,v,m,p,y,_,w,A,E,b,T,S,M,P,D,U,k,B,F,X,H,ee,re,ie,K,fe,W,J,le;if(g.sketchCanvas){(i=g.openActivityButton)==null||i.addEventListener("click",()=>showActivityPane("predict")),(e=g.openSketchButton)==null||e.addEventListener("click",openSketchWindow),(t=g.openPredictButton)==null||t.addEventListener("click",()=>showActivityPane("predict")),(n=g.openChallengeButton)==null||n.addEventListener("click",()=>showActivityPane("challenge"));for(const N of g.activityModeButtons??[])N.addEventListener("click",()=>showActivityPane(N.dataset.activityMode));(r=g.startPredictButton)==null||r.addEventListener("click",startPrediction),(s=g.verifyPredictButton)==null||s.addEventListener("click",verifyPrediction),(o=g.scoreCurrentButton)==null||o.addEventListener("click",scoreCurrentPrediction),(a=g.scoreShowRubricButton)==null||a.addEventListener("click",showScoreRubric),(c=g.scoreResetButton)==null||c.addEventListener("click",resetScorePrompt),(l=g.diagnoseNodesButton)==null||l.addEventListener("click",()=>runDiagnosis("nodes")),(u=g.diagnosePhaseButton)==null||u.addEventListener("click",()=>runDiagnosis("phase")),(h=g.diagnoseProjectionButton)==null||h.addEventListener("click",()=>runDiagnosis("projection"));for(const N of document.querySelectorAll("[data-diagnosis]"))N.addEventListener("click",()=>runDiagnosis(N.dataset.diagnosis));(d=g.nodeRevealButton)==null||d.addEventListener("click",()=>{g.radialNode&&!g.radialNode.disabled&&(g.radialNode.checked=!0),g.polarNode&&!g.polarNode.disabled&&(g.polarNode.checked=!0),g.longitudeNode.checked=!0,g.node.checked=!0,renderOrbital()}),(f=g.nodeHideButton)==null||f.addEventListener("click",()=>{g.radialNode&&(g.radialNode.checked=!1),g.polarNode&&(g.polarNode.checked=!1),g.longitudeNode.checked=!1,g.node.checked=!1,renderOrbital()}),(x=g.compareApplyButton)==null||x.addEventListener("click",()=>{renderOrbitalComparison()}),(v=g.compareA)==null||v.addEventListener("change",()=>{renderCompareSlot("a")}),(m=g.compareB)==null||m.addEventListener("change",()=>{renderCompareSlot("b")}),(p=g.compareLoadAButton)==null||p.addEventListener("click",()=>{var N;(N=g.compareA)!=null&&N.value&&loadCompareTargetToMain(g.compareA.value,"a")}),(y=g.compareLoadBButton)==null||y.addEventListener("click",()=>{var N;(N=g.compareB)!=null&&N.value&&loadCompareTargetToMain(g.compareB.value,"b")}),(_=g.newChallengeButton)==null||_.addEventListener("click",newChallenge),(w=g.revealChallengeButton)==null||w.addEventListener("click",revealChallenge),(A=g.explainRestartButton)==null||A.addEventListener("click",restartExplanation),(E=g.explainPrevButton)==null||E.addEventListener("click",()=>moveExplanationStep(-1)),(b=g.explainPlayButton)==null||b.addEventListener("click",toggleExplanationPlayback),(T=g.explainNextButton)==null||T.addEventListener("click",()=>moveExplanationStep(1)),(S=g.tabletLargeButton)==null||S.addEventListener("click",()=>setTabletMode(!0)),(M=g.tabletRestoreButton)==null||M.addEventListener("click",()=>setTabletMode(!1)),(P=g.tabletScreenshotButton)==null||P.addEventListener("click",Jh),(U=(D=g.boxWindow)==null?void 0:D.querySelector(".window-title"))==null||U.addEventListener("pointerdown",N=>_s(N,g.boxWindow)),(B=(k=g.activityWindow)==null?void 0:k.querySelector(".window-title"))==null||B.addEventListener("pointerdown",N=>_s(N,g.activityWindow)),(X=(F=g.formulaWindow)==null?void 0:F.querySelector(".window-title"))==null||X.addEventListener("pointerdown",N=>_s(N,g.formulaWindow)),(ee=(H=g.animationWindow)==null?void 0:H.querySelector(".window-title"))==null||ee.addEventListener("pointerdown",N=>_s(N,g.animationWindow)),window.addEventListener("pointermove",Kh),window.addEventListener("pointerup",ul),window.addEventListener("pointercancel",ul),window.addEventListener("pointerup",refreshAllViewerControls),window.addEventListener("pointercancel",recoverAllViewerControls),window.addEventListener("blur",recoverAllViewerControls),(re=g.annotationModeButton)==null||re.addEventListener("click",toggleAnnotationMode),(ie=g.openAnimationButton)==null||ie.addEventListener("click",playCinematicAnimation),(K=document.getElementById("cinematicPlayBtn"))==null||K.addEventListener("click",toggleCinematicPlayback),(fe=document.getElementById("cinematicExportBtn"))==null||fe.addEventListener("click",exportCinematicVideo),(W=document.getElementById("cinematicExitBtn"))==null||W.addEventListener("click",stopCinematicAnimation),(J=g.openFormulaButton)==null||J.addEventListener("click",openFormulaWindow),(le=g.annotationClearButton)==null||le.addEventListener("click",clearAnnotations);for(const N of document.querySelectorAll("[data-annotation-add]"))N.addEventListener("click",()=>addAnnotation(N.dataset.annotationAdd));for(const N of document.querySelectorAll(".annotation-layer"))N.addEventListener("pointerdown",beginAnnotationDrag);window.addEventListener("pointermove",continueAnnotationDrag),window.addEventListener("pointerup",endAnnotationDrag),window.addEventListener("pointercancel",endAnnotationDrag)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="165",qa={ROTATE:0,DOLLY:1,PAN:2},ef=0,dl=1,tf=2,Bd=1,nf=2,Ln=3,Sn=0,Gt=1,dt=2,ai=0,ur=1,xr=2,hl=3,fl=4,rf=5,Ai=100,sf=101,af=102,of=103,cf=104,lf=200,uf=201,df=202,hf=203,Ho=204,Go=205,ff=206,pf=207,mf=208,gf=209,xf=210,_f=211,vf=212,yf=213,Mf=214,Sf=0,wf=1,Ef=2,oa=3,bf=4,Af=5,Tf=6,Cf=7,Sc=0,Rf=1,Pf=2,oi=0,Lf=1,If=2,Df=3,kd=4,Nf=5,Uf=6,Of=7,Vd=300,_r=301,vr=302,Wo=303,qo=304,Ta=306,Xo=1e3,Ri=1001,Yo=1002,Jt=1003,Ff=1004,vs=1005,un=1006,Xa=1007,Pi=1008,di=1009,zf=1010,Bf=1011,ca=1012,Hd=1013,yr=1014,ii=1015,Ca=1016,Gd=1017,Wd=1018,Mr=1020,kf=35902,Vf=1021,Hf=1022,_n=1023,Gf=1024,Wf=1025,dr=1026,Sr=1027,qf=1028,qd=1029,Xf=1030,Xd=1031,Yd=1033,Ya=33776,$a=33777,ja=33778,Za=33779,pl=35840,ml=35841,gl=35842,xl=35843,_l=36196,vl=37492,yl=37496,Ml=37808,Sl=37809,wl=37810,El=37811,bl=37812,Al=37813,Tl=37814,Cl=37815,Rl=37816,Pl=37817,Ll=37818,Il=37819,Dl=37820,Nl=37821,Ka=36492,Ul=36494,Ol=36495,Yf=36283,Fl=36284,zl=36285,Bl=36286,$f=3200,jf=3201,wc=0,Zf=1,ni="",jt="srgb",pi="srgb-linear",Ec="display-p3",Ra="display-p3-linear",la="linear",ut="srgb",ua="rec709",da="p3",Hi=7680,kl=519,Kf=512,Jf=513,Qf=514,$d=515,ep=516,tp=517,np=518,ip=519,$o=35044,ys=35048,Vl="300 es",Nn=2e3,ha=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const hr=Math.PI/180,ts=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function bc(i,e){return(i%e+e)%e}function rp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function sp(i,e,t){return i!==e?(t-i)/(e-i):0}function Yr(i,e,t){return(1-t)*i+t*e}function ap(i,e,t,n){return Yr(i,e,1-Math.exp(-t*n))}function op(i,e=1){return e-Math.abs(bc(i,e*2)-e)}function cp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function up(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dp(i,e){return i+Math.random()*(e-i)}function hp(i){return i*(.5-Math.random())}function fp(i){i!==void 0&&(Hl=i);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(i){return i*hr}function mp(i){return i*ts}function gp(i){return(i&i-1)===0&&i!==0}function xp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _p(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vp(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),x=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*x,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*x,a*l);break;case"ZYZ":i.set(c*x,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gl={DEG2RAD:hr,RAD2DEG:ts,generateUUID:Bn,clamp:bt,euclideanModulo:bc,mapLinear:rp,inverseLerp:sp,lerp:Yr,damp:ap,pingpong:op,smoothstep:cp,smootherstep:lp,randInt:up,randFloat:dp,randFloatSpread:hp,seededRandom:fp,degToRad:pp,radToDeg:mp,isPowerOfTwo:gp,ceilPowerOfTwo:xp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:vp,normalize:tt,denormalize:dn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,r,s,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],x=n[8],v=r[0],m=r[3],p=r[6],y=r[1],_=r[4],w=r[7],A=r[2],E=r[5],b=r[8];return s[0]=o*v+a*y+c*A,s[3]=o*m+a*_+c*E,s[6]=o*p+a*w+c*b,s[1]=l*v+u*y+h*A,s[4]=l*m+u*_+h*E,s[7]=l*p+u*w+h*b,s[2]=d*v+f*y+x*A,s[5]=d*m+f*_+x*E,s[8]=d*p+f*w+x*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,x=t*h+n*d+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new He;function jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yp(){const i=fa("canvas");return i.style.display="block",i}const Wl={};function Ac(i){i in Wl||(Wl[i]=!0,console.warn(i))}function Mp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ql=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xl=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[pi]:{transfer:la,primaries:ua,toReference:i=>i,fromReference:i=>i},[jt]:{transfer:ut,primaries:ua,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ra]:{transfer:la,primaries:da,toReference:i=>i.applyMatrix3(Xl),fromReference:i=>i.applyMatrix3(ql)},[Ec]:{transfer:ut,primaries:da,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xl),fromReference:i=>i.applyMatrix3(ql).convertLinearToSRGB()}},Sp=new Set([pi,Ra]),nt={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Sp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ms[e].toReference,r=Ms[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ms[i].primaries},getTransfer:function(i){return i===ni?la:Ms[i].transfer}};function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class wp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=fa("canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ep=0;class Zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(eo(r[o].image)):s.push(eo(r[o]))}else s=eo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bp=0;class kt extends Oi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Ri,r=Ri,s=un,o=Pi,a=_n,c=di,l=kt.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Bn(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xo:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xo:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Vd;kt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],x=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,w=(f+1)/2,A=(p+1)/2,E=(u+d)/4,b=(h+v)/4,T=(x+m)/4;return _>w&&_>A?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=E/n,s=b/n):w>A?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=E/r,s=T/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=b/s,r=T/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-x)*(m-x)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ap extends Oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new kt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Ap{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kd extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tp extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],f=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==x){let m=1-a;const p=c*d+l*f+u*x+h*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,p*y);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const w=a*y;if(c=c*m+d*w,l=l*m+f*w,u=u*m+x*w,h=h*m+v*w,m===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],x=s[o+3];return e[t]=a*x+u*h+c*f-l*d,e[t+1]=c*x+u*d+l*h-a*f,e[t+2]=l*x+u*f+a*d-c*h,e[t+3]=u*x-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),d=c(n/2),f=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*x,this._y=l*f*h-d*u*x,this._z=l*u*x+d*f*h,this._w=l*u*h-d*f*x;break;case"YXZ":this._x=d*u*h+l*f*x,this._y=l*f*h-d*u*x,this._z=l*u*x-d*f*h,this._w=l*u*h+d*f*x;break;case"ZXY":this._x=d*u*h-l*f*x,this._y=l*f*h+d*u*x,this._z=l*u*x+d*f*h,this._w=l*u*h-d*f*x;break;case"ZYX":this._x=d*u*h-l*f*x,this._y=l*f*h+d*u*x,this._z=l*u*x-d*f*h,this._w=l*u*h+d*f*x;break;case"YZX":this._x=d*u*h+l*f*x,this._y=l*f*h+d*u*x,this._z=l*u*x-d*f*h,this._w=l*u*h-d*f*x;break;case"XZY":this._x=d*u*h-l*f*x,this._y=l*f*h-d*u*x,this._z=l*u*x+d*f*h,this._w=l*u*h+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return to.copy(this).projectOnVector(e),this.sub(to)}reflect(e){return this.sub(to.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new L,Yl=new br;class Vn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),ws.subVectors(this.max,Ur),Wi.subVectors(e.a,Ur),qi.subVectors(e.b,Ur),Xi.subVectors(e.c,Ur),$n.subVectors(qi,Wi),jn.subVectors(Xi,qi),vi.subVectors(Wi,Xi);let t=[0,-$n.z,$n.y,0,-jn.z,jn.y,0,-vi.z,vi.y,$n.z,0,-$n.x,jn.z,0,-jn.x,vi.z,0,-vi.x,-$n.y,$n.x,0,-jn.y,jn.x,0,-vi.y,vi.x,0];return!no(t,Wi,qi,Xi,ws)||(t=[1,0,0,0,1,0,0,0,1],!no(t,Wi,qi,Xi,ws))?!1:(Es.crossVectors($n,jn),t=[Es.x,Es.y,Es.z],no(t,Wi,qi,Xi,ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new L,new L,new L,new L,new L,new L,new L,new L],sn=new L,Ss=new Vn,Wi=new L,qi=new L,Xi=new L,$n=new L,jn=new L,vi=new L,Ur=new L,ws=new L,Es=new L,yi=new L;function no(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){yi.fromArray(i,s);const a=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),c=e.dot(yi),l=t.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Cp=new Vn,Or=new L,io=new L;class mi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Or,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(io)),this.expandByPoint(Or.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new L,ro=new L,bs=new L,Zn=new L,so=new L,As=new L,ao=new L;class Pa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ro.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(ro);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=Zn.dot(this.direction),c=-Zn.dot(bs),l=Zn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,x;if(u>0)if(h=o*c-a,d=o*a-c,x=s*u,h>=0)if(d>=-x)if(d<=x){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=x?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ro).addScaledVector(bs,d),f}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),r=Tn.dot(Tn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,r,s){so.subVectors(t,e),As.subVectors(n,e),ao.crossVectors(so,As);let o=this.direction.dot(ao),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const c=a*this.direction.dot(As.crossVectors(Zn,As));if(c<0)return null;const l=a*this.direction.dot(so.cross(Zn));if(l<0||c+l>o)return null;const u=-a*Zn.dot(ao);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,r,s,o,a,c,l,u,h,d,f,x,v,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,d,f,x,v,m)}set(e,t,n,r,s,o,a,c,l,u,h,d,f,x,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,x=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+x*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=x+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,x=l*u,v=l*h;t[0]=d+v*a,t[4]=x*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-x,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,x=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,x=a*u,v=a*h;t[0]=c*u,t[4]=x*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,x=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=x*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+x,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*c,f=o*l,x=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-x,t[2]=x*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Pp)}lookAt(e,t,n){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Kn.crossVectors(n,qt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Kn.crossVectors(n,qt)),Kn.normalize(),Ts.crossVectors(qt,Kn),r[0]=Kn.x,r[4]=Ts.x,r[8]=qt.x,r[1]=Kn.y,r[5]=Ts.y,r[9]=qt.y,r[2]=Kn.z,r[6]=Ts.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],x=n[2],v=n[6],m=n[10],p=n[14],y=n[3],_=n[7],w=n[11],A=n[15],E=r[0],b=r[4],T=r[8],S=r[12],M=r[1],P=r[5],D=r[9],U=r[13],k=r[2],B=r[6],F=r[10],X=r[14],H=r[3],ee=r[7],re=r[11],ie=r[15];return s[0]=o*E+a*M+c*k+l*H,s[4]=o*b+a*P+c*B+l*ee,s[8]=o*T+a*D+c*F+l*re,s[12]=o*S+a*U+c*X+l*ie,s[1]=u*E+h*M+d*k+f*H,s[5]=u*b+h*P+d*B+f*ee,s[9]=u*T+h*D+d*F+f*re,s[13]=u*S+h*U+d*X+f*ie,s[2]=x*E+v*M+m*k+p*H,s[6]=x*b+v*P+m*B+p*ee,s[10]=x*T+v*D+m*F+p*re,s[14]=x*S+v*U+m*X+p*ie,s[3]=y*E+_*M+w*k+A*H,s[7]=y*b+_*P+w*B+A*ee,s[11]=y*T+_*D+w*F+A*re,s[15]=y*S+_*U+w*X+A*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],x=e[3],v=e[7],m=e[11],p=e[15];return x*(+s*c*h-r*l*h-s*a*d+n*l*d+r*a*f-n*c*f)+v*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+m*(+t*l*h-t*a*f-s*o*h+n*o*f+s*a*u-n*l*u)+p*(-r*a*u-t*c*h+t*a*d+r*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],x=e[12],v=e[13],m=e[14],p=e[15],y=h*m*l-v*d*l+v*c*f-a*m*f-h*c*p+a*d*p,_=x*d*l-u*m*l-x*c*f+o*m*f+u*c*p-o*d*p,w=u*v*l-x*h*l+x*a*f-o*v*f-u*a*p+o*h*p,A=x*h*c-u*v*c-x*a*d+o*v*d+u*a*m-o*h*m,E=t*y+n*_+r*w+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=y*b,e[1]=(v*d*s-h*m*s-v*r*f+n*m*f+h*r*p-n*d*p)*b,e[2]=(a*m*s-v*c*s+v*r*l-n*m*l-a*r*p+n*c*p)*b,e[3]=(h*c*s-a*d*s-h*r*l+n*d*l+a*r*f-n*c*f)*b,e[4]=_*b,e[5]=(u*m*s-x*d*s+x*r*f-t*m*f-u*r*p+t*d*p)*b,e[6]=(x*c*s-o*m*s-x*r*l+t*m*l+o*r*p-t*c*p)*b,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*b,e[8]=w*b,e[9]=(x*h*s-u*v*s-x*n*f+t*v*f+u*n*p-t*h*p)*b,e[10]=(o*v*s-x*a*s+x*n*l-t*v*l-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*f-t*a*f)*b,e[12]=A*b,e[13]=(u*v*r-x*h*r+x*n*d-t*v*d-u*n*m+t*h*m)*b,e[14]=(x*a*r-o*v*r-x*n*c+t*v*c+o*n*m-t*a*m)*b,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,x=s*h,v=o*u,m=o*h,p=a*h,y=c*l,_=c*u,w=c*h,A=n.x,E=n.y,b=n.z;return r[0]=(1-(v+p))*A,r[1]=(f+w)*A,r[2]=(x-_)*A,r[3]=0,r[4]=(f-w)*E,r[5]=(1-(d+p))*E,r[6]=(m+y)*E,r[7]=0,r[8]=(x+_)*b,r[9]=(m-y)*b,r[10]=(1-(d+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Yi.set(r[0],r[1],r[2]).length();const o=Yi.set(r[4],r[5],r[6]).length(),a=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const l=1/s,u=1/o,h=1/a;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Nn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let f,x;if(a===Nn)f=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ha)f=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Nn){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*l,f=(n+r)*u;let x,v;if(a===Nn)x=(o+s)*h,v=-2*h;else if(a===ha)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yi=new L,an=new ct,Rp=new L(0,0,0),Pp=new L(1,1,1),Kn=new L,Ts=new L,qt=new L,$l=new ct,jl=new br;class pn{constructor(e=0,t=0,n=0,r=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lp=0;const Zl=new L,$i=new br,Cn=new ct,Cs=new L,Fr=new L,Ip=new L,Dp=new br,Kl=new L(1,0,0),Jl=new L(0,1,0),Ql=new L(0,0,1),eu={type:"added"},Np={type:"removed"},ji={type:"childadded",child:null},oo={type:"childremoved",child:null};class xt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new L,t=new pn,n=new br,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new He}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return Zl.copy(e).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cs.copy(e):Cs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Fr,Cs,this.up):Cn.lookAt(Cs,Fr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Cn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eu),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Np),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eu),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xt.DEFAULT_UP=new L(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new L,Rn=new L,co=new L,Pn=new L,Zi=new L,Ki=new L,tu=new L,lo=new L,uo=new L,ho=new L;class Kt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){on.subVectors(r,t),Rn.subVectors(n,t),co.subVectors(e,t);const o=on.dot(on),a=on.dot(Rn),c=on.dot(co),l=Rn.dot(Rn),u=Rn.dot(co),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,x=(o*u-a*c)*d;return s.set(1-f-x,x,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Pn.x),c.addScaledVector(o,Pn.y),c.addScaledVector(a,Pn.z),c)}static isFrontFacing(e,t,n,r){return on.subVectors(n,t),Rn.subVectors(e,t),on.cross(Rn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Zi.subVectors(r,n),Ki.subVectors(s,n),lo.subVectors(e,n);const c=Zi.dot(lo),l=Ki.dot(lo);if(c<=0&&l<=0)return t.copy(n);uo.subVectors(e,r);const u=Zi.dot(uo),h=Ki.dot(uo);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Zi,o);ho.subVectors(e,s);const f=Zi.dot(ho),x=Ki.dot(ho);if(x>=0&&f<=x)return t.copy(s);const v=f*l-c*x;if(v<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(Ki,a);const m=u*x-f*h;if(m<=0&&h-u>=0&&f-x>=0)return tu.subVectors(s,r),a=(h-u)/(h-u+(f-x)),t.copy(r).addScaledVector(tu,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(Zi,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function fo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=bc(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=fo(o,s,e+1/3),this.g=fo(o,s,e),this.b=fo(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=Jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return nt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(bt(Lt.r*255,0,255))*65536+Math.round(bt(Lt.g*255,0,255))*256+Math.round(bt(Lt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=jt){nt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,r=Lt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Rs);const n=Yr(Jn.h,Rs.h,t),r=Yr(Jn.s,Rs.s,t),s=Yr(Jn.l,Rs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ye;ye.NAMES=Jd;let Up=0;class qn extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=ur,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Go,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vt extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new L,Ps=new pe;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ac("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),e}}class Qd extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eh extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class De extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Op=0;const $t=new ct,po=new xt,Ji=new L,Xt=new Vn,zr=new Vn,wt=new L;class We extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jd(e)?eh:Qd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new De(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Xt.min,zr.min),Xt.expandByPoint(wt),wt.addVectors(Xt.max,zr.max),Xt.expandByPoint(wt)):(Xt.expandByPoint(zr.min),Xt.expandByPoint(zr.max))}Xt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)wt.fromBufferAttribute(a,l),c&&(Ji.fromBufferAttribute(e,l),wt.add(Ji)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new L,c[T]=new L;const l=new L,u=new L,h=new L,d=new pe,f=new pe,x=new pe,v=new L,m=new L;function p(T,S,M){l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,T),f.fromBufferAttribute(s,S),x.fromBufferAttribute(s,M),u.sub(l),h.sub(l),f.sub(d),x.sub(d);const P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(P),a[T].add(v),a[S].add(v),a[M].add(v),c[T].add(m),c[S].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let T=0,S=y.length;T<S;++T){const M=y[T],P=M.start,D=M.count;for(let U=P,k=P+D;U<k;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new L,w=new L,A=new L,E=new L;function b(T){A.fromBufferAttribute(r,T),E.copy(A);const S=a[T];_.copy(S),_.sub(A.multiplyScalar(A.dot(S))).normalize(),w.crossVectors(E,S);const P=w.dot(c[T])<0?-1:1;o.setXYZW(T,_.x,_.y,_.z,P)}for(let T=0,S=y.length;T<S;++T){const M=y[T],P=M.start,D=M.count;for(let U=P,k=P+D;U<k;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const x=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,x=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)d[x++]=l[f++]}return new It(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new We,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nu=new ct,Mi=new Pa,Ls=new mi,iu=new L,Qi=new L,er=new L,tr=new L,mo=new L,Is=new L,Ds=new pe,Ns=new pe,Us=new pe,ru=new L,su=new L,au=new L,Os=new L,Fs=new L;class Ye extends xt{constructor(e=new We,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Is.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(mo.fromBufferAttribute(h,e),o?Is.addScaledVector(mo,u):Is.addScaledVector(mo.sub(t),u))}t.add(Is)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Ls.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ls,iu)===null||Mi.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(nu.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(nu),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const m=d[x],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=y,A=_;w<A;w+=3){const E=a.getX(w),b=a.getX(w+1),T=a.getX(w+2);r=zs(this,p,e,n,l,u,h,E,b,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=x,p=v;m<p;m+=3){const y=a.getX(m),_=a.getX(m+1),w=a.getX(m+2);r=zs(this,o,e,n,l,u,h,y,_,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const m=d[x],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let w=y,A=_;w<A;w+=3){const E=w,b=w+1,T=w+2;r=zs(this,p,e,n,l,u,h,E,b,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=x,p=v;m<p;m+=3){const y=m,_=m+1,w=m+2;r=zs(this,o,e,n,l,u,h,y,_,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fp(i,e,t,n,r,s,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Sn,a),c===null)return null;Fs.copy(a),Fs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Fs);return l<t.near||l>t.far?null:{distance:l,point:Fs.clone(),object:i}}function zs(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Qi),i.getVertexPosition(c,er),i.getVertexPosition(l,tr);const u=Fp(i,e,t,n,Qi,er,tr,Os);if(u){r&&(Ds.fromBufferAttribute(r,a),Ns.fromBufferAttribute(r,c),Us.fromBufferAttribute(r,l),u.uv=Kt.getInterpolation(Os,Qi,er,tr,Ds,Ns,Us,new pe)),s&&(Ds.fromBufferAttribute(s,a),Ns.fromBufferAttribute(s,c),Us.fromBufferAttribute(s,l),u.uv1=Kt.getInterpolation(Os,Qi,er,tr,Ds,Ns,Us,new pe)),o&&(ru.fromBufferAttribute(o,a),su.fromBufferAttribute(o,c),au.fromBufferAttribute(o,l),u.normal=Kt.getInterpolation(Os,Qi,er,tr,ru,su,au,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};Kt.getNormal(Qi,er,tr,h.normal),u.face=h}return u}class Ar extends We{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(h,2));function x(v,m,p,y,_,w,A,E,b,T,S){const M=w/b,P=A/T,D=w/2,U=A/2,k=E/2,B=b+1,F=T+1;let X=0,H=0;const ee=new L;for(let re=0;re<F;re++){const ie=re*P-U;for(let K=0;K<B;K++){const fe=K*M-D;ee[v]=fe*y,ee[m]=ie*_,ee[p]=k,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[p]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(K/b),h.push(1-re/T),X+=1}}for(let re=0;re<T;re++)for(let ie=0;ie<b;ie++){const K=d+ie+B*re,fe=d+ie+B*(re+1),W=d+(ie+1)+B*(re+1),J=d+(ie+1)+B*re;c.push(K,fe,J),c.push(fe,W,J),H+=6}a.addGroup(f,H,S),f+=H,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=wr(i[t]);for(const r in n)e[r]=n[r]}return e}function zp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function th(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const nh={clone:wr,merge:Ot};var Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ih extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new L,ou=new pe,cu=new pe;class ln extends ih{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,ou,cu),t.subVectors(cu,ou)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ir=1;class Vp extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(nr,ir,e,t);r.layers=this.layers,this.add(r);const s=new ln(nr,ir,e,t);s.layers=this.layers,this.add(s);const o=new ln(nr,ir,e,t);o.layers=this.layers,this.add(o);const a=new ln(nr,ir,e,t);a.layers=this.layers,this.add(a);const c=new ln(nr,ir,e,t);c.layers=this.layers,this.add(c);const l=new ln(nr,ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class rh extends kt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:_r,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hp extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new rh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ar(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:ai});s.uniforms.tEquirect.value=t;const o=new Ye(r,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=un),new Vp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const go=new L,Gp=new L,Wp=new He;class Qe{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=go.subVectors(n,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(go),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wp.getNormalMatrix(e),r=this.coplanarPoint(go).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new mi,Bs=new L;class Cc{constructor(e=new Qe,t=new Qe,n=new Qe,r=new Qe,s=new Qe,o=new Qe){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],x=r[9],v=r[10],m=r[11],p=r[12],y=r[13],_=r[14],w=r[15];if(n[0].setComponents(c-s,d-l,m-f,w-p).normalize(),n[1].setComponents(c+s,d+l,m+f,w+p).normalize(),n[2].setComponents(c+o,d+u,m+x,w+y).normalize(),n[3].setComponents(c-o,d-u,m-x,w-y).normalize(),n[4].setComponents(c-a,d-h,m-v,w-_).normalize(),t===Nn)n[5].setComponents(c+a,d+h,m+v,w+_).normalize();else if(t===ha)n[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bs.x=r.normal.x>0?e.max.x:e.min.x,Bs.y=r.normal.y>0?e.max.y:e.min.y,Bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function qp(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),h.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let f=0,x=d.length;f<x;f++){const v=d[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class La extends We{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],x=[],v=[],m=[];for(let p=0;p<u;p++){const y=p*d-o;for(let _=0;_<l;_++){const w=_*h-s;x.push(w,-y,0),v.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const _=y+l*p,w=y+l*(p+1),A=y+1+l*(p+1),E=y+1+l*p;f.push(_,w,E),f.push(w,A,E)}this.setIndex(f),this.setAttribute("position",new De(x,3)),this.setAttribute("normal",new De(v,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xm=`vec3 transformedNormal = objectNormal;
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
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`
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
}`,Em=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
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
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Wm=`struct PhysicalMaterial {
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
}`,qm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
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
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,eg=`#define DISTANCE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
}`,lg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,pg=`#define PHONG
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
}`,mg=`#define STANDARD
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
}`,gg=`#define STANDARD
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
}`,xg=`#define TOON
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
}`,_g=`#define TOON
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
}`,vg=`uniform float size;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,Sg=`uniform vec3 color;
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
}`,wg=`uniform float rotation;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Xp,alphahash_pars_fragment:Yp,alphamap_fragment:$p,alphamap_pars_fragment:jp,alphatest_fragment:Zp,alphatest_pars_fragment:Kp,aomap_fragment:Jp,aomap_pars_fragment:Qp,batching_pars_vertex:em,batching_vertex:tm,begin_vertex:nm,beginnormal_vertex:im,bsdfs:rm,iridescence_fragment:sm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:lm,clipping_planes_vertex:um,color_fragment:dm,color_pars_fragment:hm,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:xm,displacementmap_pars_vertex:_m,displacementmap_vertex:vm,emissivemap_fragment:ym,emissivemap_pars_fragment:Mm,colorspace_fragment:Sm,colorspace_pars_fragment:wm,envmap_fragment:Em,envmap_common_pars_fragment:bm,envmap_pars_fragment:Am,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:zm,envmap_vertex:Cm,fog_vertex:Rm,fog_pars_vertex:Pm,fog_fragment:Lm,fog_pars_fragment:Im,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Nm,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Om,lights_pars_begin:Fm,lights_toon_fragment:Bm,lights_toon_pars_fragment:km,lights_phong_fragment:Vm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Wm,lights_fragment_begin:qm,lights_fragment_maps:Xm,lights_fragment_end:Ym,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Km,map_fragment:Jm,map_pars_fragment:Qm,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:r0,morphcolor_vertex:s0,morphnormal_vertex:a0,morphtarget_pars_vertex:o0,morphtarget_vertex:c0,normal_fragment_begin:l0,normal_fragment_maps:u0,normal_pars_fragment:d0,normal_pars_vertex:h0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:_0,opaque_fragment:v0,packing:y0,premultiplied_alpha_fragment:M0,project_vertex:S0,dithering_fragment:w0,dithering_pars_fragment:E0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:C0,shadowmap_vertex:R0,shadowmask_pars_fragment:P0,skinbase_vertex:L0,skinning_pars_vertex:I0,skinning_vertex:D0,skinnormal_vertex:N0,specularmap_fragment:U0,specularmap_pars_fragment:O0,tonemapping_fragment:F0,tonemapping_pars_fragment:z0,transmission_fragment:B0,transmission_pars_fragment:k0,uv_pars_fragment:V0,uv_pars_vertex:H0,uv_vertex:G0,worldpos_vertex:W0,background_vert:q0,background_frag:X0,backgroundCube_vert:Y0,backgroundCube_frag:$0,cube_vert:j0,cube_frag:Z0,depth_vert:K0,depth_frag:J0,distanceRGBA_vert:Q0,distanceRGBA_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:rg,meshbasic_vert:sg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:cg,meshmatcap_vert:lg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:hg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:xg,meshtoon_frag:_g,points_vert:vg,points_frag:yg,shadow_vert:Mg,shadow_frag:Sg,sprite_vert:wg,sprite_frag:Eg},me={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xn={basic:{uniforms:Ot([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ot([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ot([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ot([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ot([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ot([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ot([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ot([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ot([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ot([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ot([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ot([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ot([me.lights,me.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};xn.physical={uniforms:Ot([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ks={r:0,b:0,g:0},wi=new pn,bg=new ct;function Ag(i,e,t,n,r,s,o){const a=new ye(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function x(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const w=x(y);w===null?p(a,c):w&&w.isColor&&(p(w,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){const w=x(_);w&&(w.isCubeTexture||w.mapping===Ta)?(u===void 0&&(u=new Ye(new Ar(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:wr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),wi.copy(_.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(wi)),u.material.toneMapped=nt.getTransfer(w.colorSpace)!==ut,(h!==w||d!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ye(new La(2,2),new Hn({name:"BackgroundMaterial",uniforms:wr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=nt.getTransfer(w.colorSpace)!==ut,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(ks,th(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:v,addToRenderList:m}}function Tg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(M,P,D,U,k){let B=!1;const F=h(U,D,P);s!==F&&(s=F,l(s.object)),B=f(M,U,D,k),B&&x(M,U,D,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,w(M,P,D,U),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,P,D){const U=D.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let B=k[P.id];B===void 0&&(B={},k[P.id]=B);let F=B[U];return F===void 0&&(F=d(c()),B[U]=F),F}function d(M){const P=[],D=[],U=[];for(let k=0;k<t;k++)P[k]=0,D[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,P,D,U){const k=s.attributes,B=P.attributes;let F=0;const X=D.getAttributes();for(const H in X)if(X[H].location>=0){const re=k[H];let ie=B[H];if(ie===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),re===void 0||re.attribute!==ie||ie&&re.data!==ie.data)return!0;F++}return s.attributesNum!==F||s.index!==U}function x(M,P,D,U){const k={},B=P.attributes;let F=0;const X=D.getAttributes();for(const H in X)if(X[H].location>=0){let re=B[H];re===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));const ie={};ie.attribute=re,re&&re.data&&(ie.data=re.data),k[H]=ie,F++}s.attributes=k,s.attributesNum=F,s.index=U}function v(){const M=s.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const D=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;D[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),k[M]!==P&&(i.vertexAttribDivisor(M,P),k[M]=P)}function y(){const M=s.newAttributes,P=s.enabledAttributes;for(let D=0,U=P.length;D<U;D++)P[D]!==M[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function _(M,P,D,U,k,B,F){F===!0?i.vertexAttribIPointer(M,P,D,k,B):i.vertexAttribPointer(M,P,D,U,k,B)}function w(M,P,D,U){v();const k=U.attributes,B=D.getAttributes(),F=P.defaultAttributeValues;for(const X in B){const H=B[X];if(H.location>=0){let ee=k[X];if(ee===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const re=ee.normalized,ie=ee.itemSize,K=e.get(ee);if(K===void 0)continue;const fe=K.buffer,W=K.type,J=K.bytesPerElement,le=W===i.INT||W===i.UNSIGNED_INT||ee.gpuType===Hd;if(ee.isInterleavedBufferAttribute){const N=ee.data,se=N.stride,xe=ee.offset;if(N.isInstancedInterleavedBuffer){for(let we=0;we<H.locationSize;we++)p(H.location+we,N.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let we=0;we<H.locationSize;we++)m(H.location+we);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let we=0;we<H.locationSize;we++)_(H.location+we,ie/H.locationSize,W,re,se*J,(xe+ie/H.locationSize*we)*J,le)}else{if(ee.isInstancedBufferAttribute){for(let N=0;N<H.locationSize;N++)p(H.location+N,ee.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let N=0;N<H.locationSize;N++)m(H.location+N);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let N=0;N<H.locationSize;N++)_(H.location+N,ie/H.locationSize,W,re,ie*J,ie/H.locationSize*N*J,le)}}else if(F!==void 0){const re=F[X];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(H.location,re);break;case 3:i.vertexAttrib3fv(H.location,re);break;case 4:i.vertexAttrib4fv(H.location,re);break;default:i.vertexAttrib1fv(H.location,re)}}}}y()}function A(){T();for(const M in n){const P=n[M];for(const D in P){const U=P[D];for(const k in U)u(U[k].object),delete U[k];delete P[D]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const D in P){const U=P[D];for(const k in U)u(U[k].object),delete U[k];delete P[D]}delete n[M.id]}function b(M){for(const P in n){const D=n[P];if(D[M.id]===void 0)continue;const U=D[M.id];for(const k in U)u(U[k].object),delete U[k];delete D[M.id]}}function T(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Cg(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(l[f],u[f]);else{d.multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let x=0;x<h;x++)f+=u[x];t.update(f,n,1)}}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)o(l[x],u[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let x=0;for(let v=0;v<h;v++)x+=u[v];for(let v=0;v<d.length;v++)t.update(x,n,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Rg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==_n&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==di&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ii&&!b)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:w,maxSamples:A}}function Pg(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Qe,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const x=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):l();else{const y=s?0:n,_=y*4;let w=p.clippingState||null;c.value=w,w=u(x,d,_,f);for(let A=0;A!==_;++A)w[A]=t[A];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,x){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,x!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,w=f;_!==v;++_,w+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Lg(i){let e=new WeakMap;function t(o,a){return a===Wo?o.mapping=_r:a===qo&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wo||a===qo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Hp(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fi extends ih{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,lu=[.125,.215,.35,.446,.526,.582],Ti=20,xo=new Fi,uu=new ye;let _o=null,vo=0,yo=0,Mo=!1;const bi=(1+Math.sqrt(5))/2,rr=1/bi,du=[new L(-bi,rr,0),new L(bi,rr,0),new L(-rr,0,bi),new L(rr,0,bi),new L(0,bi,-rr),new L(0,bi,rr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,vo,yo),this._renderer.xr.enabled=Mo,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ca,format:_n,colorSpace:pi,depthBuffer:!1},r=fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(s)),this._blurMaterial=Dg(s,e,t)}return r}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,n,r){const a=new ln(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(uu),u.toneMapping=oi,u.autoClear=!1;const f=new Vt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),x=new Ye(new Ar,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(uu),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;Vs(r,y*_,p>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===_r||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Vs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=du[(r-s-1)%du.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ye(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),v=s/x,m=isFinite(s)?1+Math.floor(u*v):Ti;m>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let y=0;for(let b=0;b<Ti;++b){const T=b/v,S=Math.exp(-T*T/2);p.push(S),b===0?y+=S:b<m&&(y+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-n;const w=this._sizeLods[r],A=3*w*(r>_-lr?r-_+lr:0),E=4*(this._cubeSize-w);Vs(t,A,E,3*w,2*w),c.setRenderTarget(t),c.render(h,xo)}}function Ig(i){const e=[],t=[],n=[];let r=i;const s=i-lr+1+lu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-lr?c=lu[o-i+lr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,x=6,v=3,m=2,p=1,y=new Float32Array(v*x*f),_=new Float32Array(m*x*f),w=new Float32Array(p*x*f);for(let E=0;E<f;E++){const b=E%3*2/3-1,T=E>2?0:-1,S=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];y.set(S,v*x*E),_.set(d,m*x*E);const M=[E,E,E,E,E,E];w.set(M,p*x*E)}const A=new We;A.setAttribute("position",new It(y,v)),A.setAttribute("uv",new It(_,m)),A.setAttribute("faceIndex",new It(w,p)),e.push(A),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fu(i,e,t){const n=new Ui(i,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Dg(i,e,t){const n=new Float32Array(Ti),r=new L(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function pu(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function mu(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Rc(){return`

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
	`}function Ng(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wo||c===qo,u=c===_r||c===vr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new hu(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new hu(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ug(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ac("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Og(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const x in d)e.update(d[x],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const x in f){const v=f[x];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,x=h.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,w=y.length;_<w;_+=3){const A=y[_+0],E=y[_+1],b=y[_+2];d.push(A,E,E,b,b,A)}}else if(x!==void 0){const y=x.array;v=x.version;for(let _=0,w=y.length/3-1;_<w;_+=3){const A=_+0,E=_+1,b=_+2;d.push(A,E,E,b,b,A)}}else return;const m=new(jd(d)?eh:Qd)(d,1);m.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Fg(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,x){x!==0&&(i.drawElementsInstanced(n,f,s,d*o,x),t.update(f,n,x))}function u(d,f,x){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<x;m++)this.render(d[m]/o,f[m]);else{v.multiDrawElementsWEBGL(n,f,0,s,d,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];t.update(m,n,1)}}function h(d,f,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,x);let p=0;for(let y=0;y<x;y++)p+=f[y];for(let y=0;y<v.length;y++)t.update(p,n,v[y])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Bg(i,e,t){const n=new WeakMap,r=new At;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),x===!0&&(_=2),v===!0&&(_=3);let w=a.attributes.position.count*_,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*A*4*h),b=new Kd(E,w,A,h);b.type=ii,b.needsUpdate=!0;const T=_*4;for(let M=0;M<h;M++){const P=m[M],D=p[M],U=y[M],k=w*A*4*M;for(let B=0;B<P.count;B++){const F=B*T;f===!0&&(r.fromBufferAttribute(P,B),E[k+F+0]=r.x,E[k+F+1]=r.y,E[k+F+2]=r.z,E[k+F+3]=0),x===!0&&(r.fromBufferAttribute(D,B),E[k+F+4]=r.x,E[k+F+5]=r.y,E[k+F+6]=r.z,E[k+F+7]=0),v===!0&&(r.fromBufferAttribute(U,B),E[k+F+8]=r.x,E[k+F+9]=r.y,E[k+F+10]=r.z,E[k+F+11]=U.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new pe(w,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const x=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function kg(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class ah extends kt{constructor(e,t,n,r,s,o,a,c,l,u=dr){if(u!==dr&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===dr&&(n=yr),n===void 0&&u===Sr&&(n=Mr),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=c!==void 0?c:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const oh=new kt,ch=new ah(1,1);ch.compareFunction=$d;const lh=new Kd,uh=new Tp,dh=new rh,gu=[],xu=[],_u=new Float32Array(16),vu=new Float32Array(9),yu=new Float32Array(4);function Tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=gu[r];if(s===void 0&&(s=new Float32Array(r),gu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ia(i,e){let t=xu[e];t===void 0&&(t=new Int32Array(e),xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function qg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),yt(t,n)}}function Xg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;vu.set(n),i.uniformMatrix3fv(this.addr,!1,vu),yt(t,n)}}function Yg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;_u.set(n),i.uniformMatrix4fv(this.addr,!1,_u),yt(t,n)}}function $g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function e1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function t1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function n1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?ch:oh;t.setTexture2D(e||s,r)}function i1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||uh,r)}function r1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||dh,r)}function s1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||lh,r)}function a1(i){switch(i){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return qg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return jg;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return Qg;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}function o1(i,e){i.uniform1fv(this.addr,e)}function c1(i,e){const t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function l1(i,e){const t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function u1(i,e){const t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function d1(i,e){const t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h1(i,e){const t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f1(i,e){const t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p1(i,e){i.uniform1iv(this.addr,e)}function m1(i,e){i.uniform2iv(this.addr,e)}function g1(i,e){i.uniform3iv(this.addr,e)}function x1(i,e){i.uniform4iv(this.addr,e)}function _1(i,e){i.uniform1uiv(this.addr,e)}function v1(i,e){i.uniform2uiv(this.addr,e)}function y1(i,e){i.uniform3uiv(this.addr,e)}function M1(i,e){i.uniform4uiv(this.addr,e)}function S1(i,e,t){const n=this.cache,r=e.length,s=Ia(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||oh,s[o])}function w1(i,e,t){const n=this.cache,r=e.length,s=Ia(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||uh,s[o])}function E1(i,e,t){const n=this.cache,r=e.length,s=Ia(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||dh,s[o])}function b1(i,e,t){const n=this.cache,r=e.length,s=Ia(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lh,s[o])}function A1(i){switch(i){case 5126:return o1;case 35664:return c1;case 35665:return l1;case 35666:return u1;case 35674:return d1;case 35675:return h1;case 35676:return f1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return x1;case 5125:return _1;case 36294:return v1;case 36295:return y1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return b1}}class T1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=a1(t.type)}}class C1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A1(t.type)}}class R1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function Mu(i,e){i.seq.push(e),i.map[e.id]=e}function P1(i,e,t){const n=i.name,r=n.length;for(So.lastIndex=0;;){const s=So.exec(n),o=So.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Mu(t,l===void 0?new T1(a,i,e):new C1(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new R1(a),Mu(t,h)),t=h}}}class ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);P1(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Su(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const L1=37297;let I1=0;function D1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function N1(i){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(i);let n;switch(e===t?n="":e===da&&t===ua?n="LinearDisplayP3ToLinearSRGB":e===ua&&t===da&&(n="LinearSRGBToLinearDisplayP3"),i){case pi:case Ra:return[n,"LinearTransferOETF"];case jt:case Ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+D1(i.getShaderSource(e),o)}else return r}function U1(i,e){const t=N1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function O1(i,e){let t;switch(e){case Lf:t="Linear";break;case If:t="Reinhard";break;case Df:t="OptimizedCineon";break;case kd:t="ACESFilmic";break;case Uf:t="AgX";break;case Of:t="Neutral";break;case Nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function F1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function z1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function B1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wr(i){return i!==""}function Eu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace(k1,H1)}const V1=new Map;function H1(i,e){let t=Ve[e];if(t===void 0){const n=V1.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jo(t)}const G1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(i){return i.replace(G1,W1)}function W1(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function q1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function X1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _r:case vr:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function $1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sc:e="ENVMAP_BLENDING_MULTIPLY";break;case Rf:e="ENVMAP_BLENDING_MIX";break;case Pf:e="ENVMAP_BLENDING_ADD";break}return e}function j1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Z1(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=q1(t),l=X1(t),u=Y1(t),h=$1(t),d=j1(t),f=F1(t),x=z1(s),v=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==oi?O1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,U1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=jo(o),o=Eu(o,t),o=bu(o,t),a=jo(a),a=Eu(a,t),a=bu(a,t),o=Au(o),a=Au(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+m+o,w=y+p+a,A=Su(r,r.VERTEX_SHADER,_),E=Su(r,r.FRAGMENT_SHADER,w);r.attachShader(v,A),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(P){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(A).trim(),k=r.getShaderInfoLog(E).trim();let B=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,A,E);else{const X=wu(r,A,"vertex"),H=wu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+X+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||k==="")&&(F=!1);F&&(P.diagnostics={runnable:B,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(A),r.deleteShader(E),T=new ia(r,v),S=B1(r,v)}let T;this.getUniforms=function(){return T===void 0&&b(this),T};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,L1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}let K1=0;class J1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q1(e),t.set(e,n)),n}}class Q1{constructor(e){this.id=K1++,this.code=e,this.usedTimes=0}}function ex(i,e,t,n,r,s,o){const a=new Tc,c=new J1,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,D,U){const k=D.fog,B=U.geometry,F=S.isMeshStandardMaterial?D.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),H=X&&X.mapping===Ta?X.image.height:null,ee=x[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ie=re!==void 0?re.length:0;let K=0;B.morphAttributes.position!==void 0&&(K=1),B.morphAttributes.normal!==void 0&&(K=2),B.morphAttributes.color!==void 0&&(K=3);let fe,W,J,le;if(ee){const it=xn[ee];fe=it.vertexShader,W=it.fragmentShader}else fe=S.vertexShader,W=S.fragmentShader,c.update(S),J=c.getVertexShaderID(S),le=c.getFragmentShaderID(S);const N=i.getRenderTarget(),se=U.isInstancedMesh===!0,xe=U.isBatchedMesh===!0,we=!!S.map,O=!!S.matcap,Ae=!!X,ze=!!S.aoMap,je=!!S.lightMap,Re=!!S.bumpMap,qe=!!S.normalMap,Be=!!S.displacementMap,Oe=!!S.emissiveMap,lt=!!S.metalnessMap,I=!!S.roughnessMap,C=S.anisotropy>0,$=S.clearcoat>0,ne=S.dispersion>0,j=S.iridescence>0,Z=S.sheen>0,oe=S.transmission>0,ce=C&&!!S.anisotropyMap,ue=$&&!!S.clearcoatMap,Ee=$&&!!S.clearcoatNormalMap,ae=$&&!!S.clearcoatRoughnessMap,Me=j&&!!S.iridescenceMap,ke=j&&!!S.iridescenceThicknessMap,Le=Z&&!!S.sheenColorMap,ge=Z&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,Xe=!!S.specularColorMap,mt=!!S.specularIntensityMap,z=oe&&!!S.transmissionMap,_e=oe&&!!S.thicknessMap,Q=!!S.gradientMap,te=!!S.alphaMap,he=S.alphaTest>0,Fe=!!S.alphaHash,Ze=!!S.extensions;let gt=oi;S.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Mt={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:fe,fragmentShader:W,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:xe,batchingColor:xe&&U._colorsTexture!==null,instancing:se,instancingColor:se&&U.instanceColor!==null,instancingMorph:se&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:pi,alphaToCoverage:!!S.alphaToCoverage,map:we,matcap:O,envMap:Ae,envMapMode:Ae&&X.mapping,envMapCubeUVHeight:H,aoMap:ze,lightMap:je,bumpMap:Re,normalMap:qe,displacementMap:d&&Be,emissiveMap:Oe,normalMapObjectSpace:qe&&S.normalMapType===Zf,normalMapTangentSpace:qe&&S.normalMapType===wc,metalnessMap:lt,roughnessMap:I,anisotropy:C,anisotropyMap:ce,clearcoat:$,clearcoatMap:ue,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ae,dispersion:ne,iridescence:j,iridescenceMap:Me,iridescenceThicknessMap:ke,sheen:Z,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:Ge,specularColorMap:Xe,specularIntensityMap:mt,transmission:oe,transmissionMap:z,thicknessMap:_e,gradientMap:Q,opaque:S.transparent===!1&&S.blending===ur&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:he,alphaHash:Fe,combine:S.combine,mapUv:we&&v(S.map.channel),aoMapUv:ze&&v(S.aoMap.channel),lightMapUv:je&&v(S.lightMap.channel),bumpMapUv:Re&&v(S.bumpMap.channel),normalMapUv:qe&&v(S.normalMap.channel),displacementMapUv:Be&&v(S.displacementMap.channel),emissiveMapUv:Oe&&v(S.emissiveMap.channel),metalnessMapUv:lt&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:ce&&v(S.anisotropyMap.channel),clearcoatMapUv:ue&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(S.sheenRoughnessMap.channel),specularMapUv:Ge&&v(S.specularMap.channel),specularColorMapUv:Xe&&v(S.specularColorMap.channel),specularIntensityMapUv:mt&&v(S.specularIntensityMap.channel),transmissionMapUv:z&&v(S.transmissionMap.channel),thicknessMapUv:_e&&v(S.thicknessMap.channel),alphaMapUv:te&&v(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(qe||C),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(we||te),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:K,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:we&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dt,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(M,S),_(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),S.push(a.mask)}function w(S){const M=x[S.type];let P;if(M){const D=xn[M];P=nh.clone(D.uniforms)}else P=S.uniforms;return P}function A(S,M){let P;for(let D=0,U=u.length;D<U;D++){const k=u[D];if(k.cacheKey===M){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Z1(i,M,S,s),u.push(P)),P}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function b(S){c.remove(S)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:T}}function tx(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,f,x,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:x,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,x,v,m){const p=o(h,d,f,x,v,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,x,v,m){const p=o(h,d,f,x,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||nx),n.length>1&&n.sort(d||Cu),r.length>1&&r.sort(d||Cu)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ix(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ru,i.set(n,[o])):r>=s.length?(o=new Ru,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ye};break;case"SpotLight":t={position:new L,direction:new L,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function sx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ax=0;function ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cx(i){const e=new rx,t=sx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const r=new L,s=new ct,o=new ct;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,x=0,v=0,m=0,p=0,y=0,_=0,w=0,A=0,E=0,b=0;l.sort(ox);for(let S=0,M=l.length;S<M;S++){const P=l[S],D=P.color,U=P.intensity,k=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*U,h+=D.g*U,d+=D.b*U;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],U);b++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,H=t.get(P);H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=F,f++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(D).multiplyScalar(U),F.distance=k,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[v]=F;const X=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,X.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=X.matrix,P.castShadow){const H=t.get(P);H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=B,w++}v++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(D).multiplyScalar(U),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=F,m++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const X=P.shadow,H=t.get(P);H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=P.shadow.matrix,_++}n.point[x]=F,x++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(U),F.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==f||T.pointLength!==x||T.spotLength!==v||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==y||T.numPointShadows!==_||T.numSpotShadows!==w||T.numSpotMaps!==A||T.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=w+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,T.directionalLength=f,T.pointLength=x,T.spotLength=v,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=y,T.numPointShadows=_,T.numSpotShadows=w,T.numSpotMaps=A,T.numLightProbes=b,n.version=ax++)}function c(l,u){let h=0,d=0,f=0,x=0,v=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const _=l[p];if(_.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),h++}else if(_.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Pu(i){const e=new cx(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function lx(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Pu(i),e.set(r,[a])):s>=o.length?(a=new Pu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class ux extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dx extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function px(i,e,t){let n=new Cc;const r=new pe,s=new pe,o=new At,a=new ux({depthPacking:jf}),c=new dx,l={},u=t.maxTextureSize,h={[Sn]:Gt,[Gt]:Sn,[dt]:dt},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:hx,fragmentShader:fx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new We;x.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ye(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bd;let p=this.type;this.render=function(E,b,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ai),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=p!==Ln&&this.type===Ln,k=p===Ln&&this.type!==Ln;for(let B=0,F=E.length;B<F;B++){const X=E[B],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||U===!0||k===!0){const ie=this.type!==Ln?{minFilter:Jt,magFilter:Jt}:{};H.map!==null&&H.map.dispose(),H.map=new Ui(r.x,r.y,ie),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const re=H.getViewportCount();for(let ie=0;ie<re;ie++){const K=H.getViewport(ie);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),D.viewport(o),H.updateMatrices(X,ie),n=H.getFrustum(),w(b,T,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Ln&&y(H,T),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,P)};function y(E,b){const T=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ui(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,T,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,T,f,v,null)}function _(E,b,T,S){let M=null;const P=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=T.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=M.uuid,U=b.uuid;let k=l[D];k===void 0&&(k={},l[D]=k);let B=k[U];B===void 0&&(B=M.clone(),k[U]=B,b.addEventListener("dispose",A)),M=B}if(M.visible=b.visible,M.wireframe=b.wireframe,S===Ln?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=i.properties.get(M);D.light=T}return M}function w(E,b,T,S,M){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Ln)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const U=e.update(E),k=E.material;if(Array.isArray(k)){const B=U.groups;for(let F=0,X=B.length;F<X;F++){const H=B[F],ee=k[H.materialIndex];if(ee&&ee.visible){const re=_(E,ee,S,M);E.onBeforeShadow(i,E,b,T,U,re,H),i.renderBufferDirect(T,null,U,re,E,H),E.onAfterShadow(i,E,b,T,U,re,H)}}}else if(k.visible){const B=_(E,k,S,M);E.onBeforeShadow(i,E,b,T,U,B,null),i.renderBufferDirect(T,null,U,B,E,null),E.onAfterShadow(i,E,b,T,U,B,null)}}const D=E.children;for(let U=0,k=D.length;U<k;U++)w(D[U],b,T,S,M)}function A(E){E.target.removeEventListener("dispose",A);for(const T in l){const S=l[T],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function mx(i){function e(){let z=!1;const _e=new At;let Q=null;const te=new At(0,0,0,0);return{setMask:function(he){Q!==he&&!z&&(i.colorMask(he,he,he,he),Q=he)},setLocked:function(he){z=he},setClear:function(he,Fe,Ze,gt,Mt){Mt===!0&&(he*=gt,Fe*=gt,Ze*=gt),_e.set(he,Fe,Ze,gt),te.equals(_e)===!1&&(i.clearColor(he,Fe,Ze,gt),te.copy(_e))},reset:function(){z=!1,Q=null,te.set(-1,0,0,0)}}}function t(){let z=!1,_e=null,Q=null,te=null;return{setTest:function(he){he?le(i.DEPTH_TEST):N(i.DEPTH_TEST)},setMask:function(he){_e!==he&&!z&&(i.depthMask(he),_e=he)},setFunc:function(he){if(Q!==he){switch(he){case Sf:i.depthFunc(i.NEVER);break;case wf:i.depthFunc(i.ALWAYS);break;case Ef:i.depthFunc(i.LESS);break;case oa:i.depthFunc(i.LEQUAL);break;case bf:i.depthFunc(i.EQUAL);break;case Af:i.depthFunc(i.GEQUAL);break;case Tf:i.depthFunc(i.GREATER);break;case Cf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=he}},setLocked:function(he){z=he},setClear:function(he){te!==he&&(i.clearDepth(he),te=he)},reset:function(){z=!1,_e=null,Q=null,te=null}}}function n(){let z=!1,_e=null,Q=null,te=null,he=null,Fe=null,Ze=null,gt=null,Mt=null;return{setTest:function(it){z||(it?le(i.STENCIL_TEST):N(i.STENCIL_TEST))},setMask:function(it){_e!==it&&!z&&(i.stencilMask(it),_e=it)},setFunc:function(it,mn,gn){(Q!==it||te!==mn||he!==gn)&&(i.stencilFunc(it,mn,gn),Q=it,te=mn,he=gn)},setOp:function(it,mn,gn){(Fe!==it||Ze!==mn||gt!==gn)&&(i.stencilOp(it,mn,gn),Fe=it,Ze=mn,gt=gn)},setLocked:function(it){z=it},setClear:function(it){Mt!==it&&(i.clearStencil(it),Mt=it)},reset:function(){z=!1,_e=null,Q=null,te=null,he=null,Fe=null,Ze=null,gt=null,Mt=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,x=!1,v=null,m=null,p=null,y=null,_=null,w=null,A=null,E=new ye(0,0,0),b=0,T=!1,S=null,M=null,P=null,D=null,U=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,F=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=F>=2);let H=null,ee={};const re=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),K=new At().fromArray(re),fe=new At().fromArray(ie);function W(z,_e,Q,te){const he=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(z,Fe),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<Q;Ze++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(_e+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return Fe}const J={};J[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(i.DEPTH_TEST),s.setFunc(oa),Re(!1),qe(dl),le(i.CULL_FACE),ze(ai);function le(z){l[z]!==!0&&(i.enable(z),l[z]=!0)}function N(z){l[z]!==!1&&(i.disable(z),l[z]=!1)}function se(z,_e){return u[z]!==_e?(i.bindFramebuffer(z,_e),u[z]=_e,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function xe(z,_e){let Q=d,te=!1;if(z){Q=h.get(_e),Q===void 0&&(Q=[],h.set(_e,Q));const he=z.textures;if(Q.length!==he.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,Ze=he.length;Fe<Ze;Fe++)Q[Fe]=i.COLOR_ATTACHMENT0+Fe;Q.length=he.length,te=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,te=!0);te&&i.drawBuffers(Q)}function we(z){return f!==z?(i.useProgram(z),f=z,!0):!1}const O={[Ai]:i.FUNC_ADD,[sf]:i.FUNC_SUBTRACT,[af]:i.FUNC_REVERSE_SUBTRACT};O[of]=i.MIN,O[cf]=i.MAX;const Ae={[lf]:i.ZERO,[uf]:i.ONE,[df]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[xf]:i.SRC_ALPHA_SATURATE,[mf]:i.DST_COLOR,[ff]:i.DST_ALPHA,[hf]:i.ONE_MINUS_SRC_COLOR,[Go]:i.ONE_MINUS_SRC_ALPHA,[gf]:i.ONE_MINUS_DST_COLOR,[pf]:i.ONE_MINUS_DST_ALPHA,[_f]:i.CONSTANT_COLOR,[vf]:i.ONE_MINUS_CONSTANT_COLOR,[yf]:i.CONSTANT_ALPHA,[Mf]:i.ONE_MINUS_CONSTANT_ALPHA};function ze(z,_e,Q,te,he,Fe,Ze,gt,Mt,it){if(z===ai){x===!0&&(N(i.BLEND),x=!1);return}if(x===!1&&(le(i.BLEND),x=!0),z!==rf){if(z!==v||it!==T){if((m!==Ai||_!==Ai)&&(i.blendEquation(i.FUNC_ADD),m=Ai,_=Ai),it)switch(z){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xr:i.blendFunc(i.ONE,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,y=null,w=null,A=null,E.set(0,0,0),b=0,v=z,T=it}return}he=he||_e,Fe=Fe||Q,Ze=Ze||te,(_e!==m||he!==_)&&(i.blendEquationSeparate(O[_e],O[he]),m=_e,_=he),(Q!==p||te!==y||Fe!==w||Ze!==A)&&(i.blendFuncSeparate(Ae[Q],Ae[te],Ae[Fe],Ae[Ze]),p=Q,y=te,w=Fe,A=Ze),(gt.equals(E)===!1||Mt!==b)&&(i.blendColor(gt.r,gt.g,gt.b,Mt),E.copy(gt),b=Mt),v=z,T=!1}function je(z,_e){z.side===dt?N(i.CULL_FACE):le(i.CULL_FACE);let Q=z.side===Gt;_e&&(Q=!Q),Re(Q),z.blending===ur&&z.transparent===!1?ze(ai):ze(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const te=z.stencilWrite;o.setTest(te),te&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Oe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):N(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(z){S!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),S=z)}function qe(z){z!==ef?(le(i.CULL_FACE),z!==M&&(z===dl?i.cullFace(i.BACK):z===tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):N(i.CULL_FACE),M=z}function Be(z){z!==P&&(B&&i.lineWidth(z),P=z)}function Oe(z,_e,Q){z?(le(i.POLYGON_OFFSET_FILL),(D!==_e||U!==Q)&&(i.polygonOffset(_e,Q),D=_e,U=Q)):N(i.POLYGON_OFFSET_FILL)}function lt(z){z?le(i.SCISSOR_TEST):N(i.SCISSOR_TEST)}function I(z){z===void 0&&(z=i.TEXTURE0+k-1),H!==z&&(i.activeTexture(z),H=z)}function C(z,_e,Q){Q===void 0&&(H===null?Q=i.TEXTURE0+k-1:Q=H);let te=ee[Q];te===void 0&&(te={type:void 0,texture:void 0},ee[Q]=te),(te.type!==z||te.texture!==_e)&&(H!==Q&&(i.activeTexture(Q),H=Q),i.bindTexture(z,_e||J[z]),te.type=z,te.texture=_e)}function $(){const z=ee[H];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(z){K.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),K.copy(z))}function ge(z){fe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),fe.copy(z))}function Ge(z,_e){let Q=c.get(_e);Q===void 0&&(Q=new WeakMap,c.set(_e,Q));let te=Q.get(z);te===void 0&&(te=i.getUniformBlockIndex(_e,z.name),Q.set(z,te))}function Xe(z,_e){const te=c.get(_e).get(z);a.get(_e)!==te&&(i.uniformBlockBinding(_e,te,z.__bindingPointIndex),a.set(_e,te))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},H=null,ee={},u={},h=new WeakMap,d=[],f=null,x=!1,v=null,m=null,p=null,y=null,_=null,w=null,A=null,E=new ye(0,0,0),b=0,T=!1,S=null,M=null,P=null,D=null,U=null,K.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:N,bindFramebuffer:se,drawBuffers:xe,useProgram:we,setBlending:ze,setMaterial:je,setFlipSided:Re,setCullFace:qe,setLineWidth:Be,setPolygonOffset:Oe,setScissorTest:lt,activeTexture:I,bindTexture:C,unbindTexture:$,compressedTexImage2D:ne,compressedTexImage3D:j,texImage2D:Me,texImage3D:ke,updateUBOMapping:Ge,uniformBlockBinding:Xe,texStorage2D:Ee,texStorage3D:ae,texSubImage2D:Z,texSubImage3D:oe,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:Le,viewport:ge,reset:mt}}function gx(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,C){return f?new OffscreenCanvas(I,C):fa("canvas")}function v(I,C,$){let ne=1;const j=lt(I);if((j.width>$||j.height>$)&&(ne=$/Math.max(j.width,j.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Z=Math.floor(ne*j.width),oe=Math.floor(ne*j.height);h===void 0&&(h=x(Z,oe));const ce=C?x(Z,oe):h;return ce.width=Z,ce.height=oe,ce.getContext("2d").drawImage(I,0,0,Z,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+oe+")."),ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==Jt&&I.minFilter!==un}function p(I){i.generateMipmap(I)}function y(I,C,$,ne,j=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=C;if(C===i.RED&&($===i.FLOAT&&(Z=i.R32F),$===i.HALF_FLOAT&&(Z=i.R16F),$===i.UNSIGNED_BYTE&&(Z=i.R8)),C===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(Z=i.R8UI),$===i.UNSIGNED_SHORT&&(Z=i.R16UI),$===i.UNSIGNED_INT&&(Z=i.R32UI),$===i.BYTE&&(Z=i.R8I),$===i.SHORT&&(Z=i.R16I),$===i.INT&&(Z=i.R32I)),C===i.RG&&($===i.FLOAT&&(Z=i.RG32F),$===i.HALF_FLOAT&&(Z=i.RG16F),$===i.UNSIGNED_BYTE&&(Z=i.RG8)),C===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(Z=i.RG8UI),$===i.UNSIGNED_SHORT&&(Z=i.RG16UI),$===i.UNSIGNED_INT&&(Z=i.RG32UI),$===i.BYTE&&(Z=i.RG8I),$===i.SHORT&&(Z=i.RG16I),$===i.INT&&(Z=i.RG32I)),C===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),C===i.RGBA){const oe=j?la:nt.getTransfer(ne);$===i.FLOAT&&(Z=i.RGBA32F),$===i.HALF_FLOAT&&(Z=i.RGBA16F),$===i.UNSIGNED_BYTE&&(Z=oe===ut?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(I,C){let $;return I?C===null||C===yr||C===Mr?$=i.DEPTH24_STENCIL8:C===ii?$=i.DEPTH32F_STENCIL8:C===ca&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===yr||C===Mr?$=i.DEPTH_COMPONENT24:C===ii?$=i.DEPTH_COMPONENT32F:C===ca&&($=i.DEPTH_COMPONENT16),$}function w(I,C){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Jt&&I.minFilter!==un?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function A(I){const C=I.target;C.removeEventListener("dispose",A),b(C),C.isVideoTexture&&u.delete(C)}function E(I){const C=I.target;C.removeEventListener("dispose",E),S(C)}function b(I){const C=n.get(I);if(C.__webglInit===void 0)return;const $=I.source,ne=d.get($);if(ne){const j=ne[C.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(I),Object.keys(ne).length===0&&d.delete($)}n.remove(I)}function T(I){const C=n.get(I);i.deleteTexture(C.__webglTexture);const $=I.source,ne=d.get($);delete ne[C.__cacheKey],o.memory.textures--}function S(I){const C=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(C.__webglFramebuffer[ne]))for(let j=0;j<C.__webglFramebuffer[ne].length;j++)i.deleteFramebuffer(C.__webglFramebuffer[ne][j]);else i.deleteFramebuffer(C.__webglFramebuffer[ne]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[ne])}else{if(Array.isArray(C.__webglFramebuffer))for(let ne=0;ne<C.__webglFramebuffer.length;ne++)i.deleteFramebuffer(C.__webglFramebuffer[ne]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ne=0;ne<C.__webglColorRenderbuffer.length;ne++)C.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[ne]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const $=I.textures;for(let ne=0,j=$.length;ne<j;ne++){const Z=n.get($[ne]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove($[ne])}n.remove(I)}let M=0;function P(){M=0}function D(){const I=M;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),M+=1,I}function U(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function k(I,C){const $=n.get(I);if(I.isVideoTexture&&Be(I),I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){const ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe($,I,C);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+C)}function B(I,C){const $=n.get(I);if(I.version>0&&$.__version!==I.version){fe($,I,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+C)}function F(I,C){const $=n.get(I);if(I.version>0&&$.__version!==I.version){fe($,I,C);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+C)}function X(I,C){const $=n.get(I);if(I.version>0&&$.__version!==I.version){W($,I,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+C)}const H={[Xo]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},ee={[Jt]:i.NEAREST,[Ff]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},re={[Kf]:i.NEVER,[ip]:i.ALWAYS,[Jf]:i.LESS,[$d]:i.LEQUAL,[Qf]:i.EQUAL,[np]:i.GEQUAL,[ep]:i.GREATER,[tp]:i.NOTEQUAL};function ie(I,C){if(C.type===ii&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===un||C.magFilter===Xa||C.magFilter===vs||C.magFilter===Pi||C.minFilter===un||C.minFilter===Xa||C.minFilter===vs||C.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,H[C.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,H[C.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,H[C.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ee[C.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ee[C.minFilter]),C.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,re[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Jt||C.minFilter!==vs&&C.minFilter!==Pi||C.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function K(I,C){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",A));const ne=C.source;let j=d.get(ne);j===void 0&&(j={},d.set(ne,j));const Z=U(C);if(Z!==I.__cacheKey){j[Z]===void 0&&(j[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),j[Z].usedTimes++;const oe=j[I.__cacheKey];oe!==void 0&&(j[I.__cacheKey].usedTimes--,oe.usedTimes===0&&T(C)),I.__cacheKey=Z,I.__webglTexture=j[Z].texture}return $}function fe(I,C,$){let ne=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ne=i.TEXTURE_3D);const j=K(I,C),Z=C.source;t.bindTexture(ne,I.__webglTexture,i.TEXTURE0+$);const oe=n.get(Z);if(Z.version!==oe.__version||j===!0){t.activeTexture(i.TEXTURE0+$);const ce=nt.getPrimaries(nt.workingColorSpace),ue=C.colorSpace===ni?null:nt.getPrimaries(C.colorSpace),Ee=C.colorSpace===ni||ce===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ae=v(C.image,!1,r.maxTextureSize);ae=Oe(C,ae);const Me=s.convert(C.format,C.colorSpace),ke=s.convert(C.type);let Le=y(C.internalFormat,Me,ke,C.colorSpace,C.isVideoTexture);ie(ne,C);let ge;const Ge=C.mipmaps,Xe=C.isVideoTexture!==!0,mt=oe.__version===void 0||j===!0,z=Z.dataReady,_e=w(C,ae);if(C.isDepthTexture)Le=_(C.format===Sr,C.type),mt&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Le,ae.width,ae.height,0,Me,ke,null));else if(C.isDataTexture)if(Ge.length>0){Xe&&mt&&t.texStorage2D(i.TEXTURE_2D,_e,Le,Ge[0].width,Ge[0].height);for(let Q=0,te=Ge.length;Q<te;Q++)ge=Ge[Q],Xe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ge.width,ge.height,Me,ke,ge.data):t.texImage2D(i.TEXTURE_2D,Q,Le,ge.width,ge.height,0,Me,ke,ge.data);C.generateMipmaps=!1}else Xe?(mt&&t.texStorage2D(i.TEXTURE_2D,_e,Le,ae.width,ae.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,ke,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Le,ae.width,ae.height,0,Me,ke,ae.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xe&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Le,Ge[0].width,Ge[0].height,ae.depth);for(let Q=0,te=Ge.length;Q<te;Q++)if(ge=Ge[Q],C.format!==_n)if(Me!==null)if(Xe){if(z)if(C.layerUpdates.size>0){for(const he of C.layerUpdates){const Fe=ge.width*ge.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,he,ge.width,ge.height,1,Me,ge.data.slice(Fe*he,Fe*(he+1)),0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,ae.depth,Me,ge.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Le,ge.width,ge.height,ae.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,ae.depth,Me,ke,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Le,ge.width,ge.height,ae.depth,0,Me,ke,ge.data)}else{Xe&&mt&&t.texStorage2D(i.TEXTURE_2D,_e,Le,Ge[0].width,Ge[0].height);for(let Q=0,te=Ge.length;Q<te;Q++)ge=Ge[Q],C.format!==_n?Me!==null?Xe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ge.width,ge.height,Me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ge.width,ge.height,Me,ke,ge.data):t.texImage2D(i.TEXTURE_2D,Q,Le,ge.width,ge.height,0,Me,ke,ge.data)}else if(C.isDataArrayTexture)if(Xe){if(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Le,ae.width,ae.height,ae.depth),z)if(C.layerUpdates.size>0){let Q;switch(ke){case i.UNSIGNED_BYTE:switch(Me){case i.ALPHA:Q=1;break;case i.LUMINANCE:Q=1;break;case i.LUMINANCE_ALPHA:Q=2;break;case i.RGB:Q=3;break;case i.RGBA:Q=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:Q=1;break;default:throw new Error(`Unknown texel size for type ${ke}.`)}const te=ae.width*ae.height*Q;for(const he of C.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,ae.width,ae.height,1,Me,ke,ae.data.slice(te*he,te*(he+1)));C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,ke,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,Me,ke,ae.data);else if(C.isData3DTexture)Xe?(mt&&t.texStorage3D(i.TEXTURE_3D,_e,Le,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,ke,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,Me,ke,ae.data);else if(C.isFramebufferTexture){if(mt)if(Xe)t.texStorage2D(i.TEXTURE_2D,_e,Le,ae.width,ae.height);else{let Q=ae.width,te=ae.height;for(let he=0;he<_e;he++)t.texImage2D(i.TEXTURE_2D,he,Le,Q,te,0,Me,ke,null),Q>>=1,te>>=1}}else if(Ge.length>0){if(Xe&&mt){const Q=lt(Ge[0]);t.texStorage2D(i.TEXTURE_2D,_e,Le,Q.width,Q.height)}for(let Q=0,te=Ge.length;Q<te;Q++)ge=Ge[Q],Xe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Me,ke,ge):t.texImage2D(i.TEXTURE_2D,Q,Le,Me,ke,ge);C.generateMipmaps=!1}else if(Xe){if(mt){const Q=lt(ae);t.texStorage2D(i.TEXTURE_2D,_e,Le,Q.width,Q.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,ke,ae)}else t.texImage2D(i.TEXTURE_2D,0,Le,Me,ke,ae);m(C)&&p(ne),oe.__version=Z.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function W(I,C,$){if(C.image.length!==6)return;const ne=K(I,C),j=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);const Z=n.get(j);if(j.version!==Z.__version||ne===!0){t.activeTexture(i.TEXTURE0+$);const oe=nt.getPrimaries(nt.workingColorSpace),ce=C.colorSpace===ni?null:nt.getPrimaries(C.colorSpace),ue=C.colorSpace===ni||oe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ee=C.isCompressedTexture||C.image[0].isCompressedTexture,ae=C.image[0]&&C.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!Ee&&!ae?Me[te]=v(C.image[te],!0,r.maxCubemapSize):Me[te]=ae?C.image[te].image:C.image[te],Me[te]=Oe(C,Me[te]);const ke=Me[0],Le=s.convert(C.format,C.colorSpace),ge=s.convert(C.type),Ge=y(C.internalFormat,Le,ge,C.colorSpace),Xe=C.isVideoTexture!==!0,mt=Z.__version===void 0||ne===!0,z=j.dataReady;let _e=w(C,ke);ie(i.TEXTURE_CUBE_MAP,C);let Q;if(Ee){Xe&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ge,ke.width,ke.height);for(let te=0;te<6;te++){Q=Me[te].mipmaps;for(let he=0;he<Q.length;he++){const Fe=Q[he];C.format!==_n?Le!==null?Xe?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,Fe.width,Fe.height,Le,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Ge,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,Fe.width,Fe.height,Le,ge,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Ge,Fe.width,Fe.height,0,Le,ge,Fe.data)}}}else{if(Q=C.mipmaps,Xe&&mt){Q.length>0&&_e++;const te=lt(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ge,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Xe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,Le,ge,Me[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,Me[te].width,Me[te].height,0,Le,ge,Me[te].data);for(let he=0;he<Q.length;he++){const Ze=Q[he].image[te].image;Xe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Ze.width,Ze.height,Le,ge,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Ge,Ze.width,Ze.height,0,Le,ge,Ze.data)}}else{Xe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,ge,Me[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,Le,ge,Me[te]);for(let he=0;he<Q.length;he++){const Fe=Q[he];Xe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Le,ge,Fe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Ge,Le,ge,Fe.image[te])}}}m(C)&&p(i.TEXTURE_CUBE_MAP),Z.__version=j.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function J(I,C,$,ne,j,Z){const oe=s.convert($.format,$.colorSpace),ce=s.convert($.type),ue=y($.internalFormat,oe,ce,$.colorSpace);if(!n.get(C).__hasExternalTextures){const ae=Math.max(1,C.width>>Z),Me=Math.max(1,C.height>>Z);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,Z,ue,ae,Me,C.depth,0,oe,ce,null):t.texImage2D(j,Z,ue,ae,Me,0,oe,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),qe(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,n.get($).__webglTexture,0,Re(C)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,n.get($).__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(I,C,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),C.depthBuffer){const ne=C.depthTexture,j=ne&&ne.isDepthTexture?ne.type:null,Z=_(C.stencilBuffer,j),oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Re(C);qe(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Z,C.width,C.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Z,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Z,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,I)}else{const ne=C.textures;for(let j=0;j<ne.length;j++){const Z=ne[j],oe=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),ue=y(Z.internalFormat,oe,ce,Z.colorSpace),Ee=Re(C);$&&qe(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ue,C.width,C.height):qe(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,ue,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ue,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function N(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),k(C.depthTexture,0);const ne=n.get(C.depthTexture).__webglTexture,j=Re(C);if(C.depthTexture.format===dr)qe(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(C.depthTexture.format===Sr)qe(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function se(I){const C=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");N(C.__webglFramebuffer,I)}else if($){C.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ne]),C.__webglDepthbuffer[ne]=i.createRenderbuffer(),le(C.__webglDepthbuffer[ne],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),le(C.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(I,C,$){const ne=n.get(I);C!==void 0&&J(ne.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&se(I)}function we(I){const C=I.texture,$=n.get(I),ne=n.get(C);I.addEventListener("dispose",E);const j=I.textures,Z=I.isWebGLCubeRenderTarget===!0,oe=j.length>1;if(oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=C.version,o.memory.textures++),Z){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[ce]=[];for(let ue=0;ue<C.mipmaps.length;ue++)$.__webglFramebuffer[ce][ue]=i.createFramebuffer()}else $.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let ce=0;ce<C.mipmaps.length;ce++)$.__webglFramebuffer[ce]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(oe)for(let ce=0,ue=j.length;ce<ue;ce++){const Ee=n.get(j[ce]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&qe(I)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){const ue=j[ce];$.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ce]);const Ee=s.convert(ue.format,ue.colorSpace),ae=s.convert(ue.type),Me=y(ue.internalFormat,Ee,ae,ue.colorSpace,I.isXRRenderTarget===!0),ke=Re(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Me,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,$.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),le($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ie(i.TEXTURE_CUBE_MAP,C);for(let ce=0;ce<6;ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let ue=0;ue<C.mipmaps.length;ue++)J($.__webglFramebuffer[ce][ue],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else J($.__webglFramebuffer[ce],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(C)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let ce=0,ue=j.length;ce<ue;ce++){const Ee=j[ce],ae=n.get(Ee);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),ie(i.TEXTURE_2D,Ee),J($.__webglFramebuffer,I,Ee,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Ee)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ne.__webglTexture),ie(ce,C),C.mipmaps&&C.mipmaps.length>0)for(let ue=0;ue<C.mipmaps.length;ue++)J($.__webglFramebuffer[ue],I,C,i.COLOR_ATTACHMENT0,ce,ue);else J($.__webglFramebuffer,I,C,i.COLOR_ATTACHMENT0,ce,0);m(C)&&p(ce),t.unbindTexture()}I.depthBuffer&&se(I)}function O(I){const C=I.textures;for(let $=0,ne=C.length;$<ne;$++){const j=C[$];if(m(j)){const Z=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(j).__webglTexture;t.bindTexture(Z,oe),p(Z),t.unbindTexture()}}}const Ae=[],ze=[];function je(I){if(I.samples>0){if(qe(I)===!1){const C=I.textures,$=I.width,ne=I.height;let j=i.COLOR_BUFFER_BIT;const Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(I),ce=C.length>1;if(ce)for(let ue=0;ue<C.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ue=0;ue<C.length;ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const Ee=n.get(C[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,$,ne,0,0,$,ne,j,i.NEAREST),c===!0&&(Ae.length=0,ze.length=0,Ae.push(i.COLOR_ATTACHMENT0+ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ae.push(Z),ze.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<C.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const Ee=n.get(C[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const C=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Re(I){return Math.min(r.maxSamples,I.samples)}function qe(I){const C=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Be(I){const C=o.render.frame;u.get(I)!==C&&(u.set(I,C),I.update())}function Oe(I,C){const $=I.colorSpace,ne=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==pi&&$!==ni&&(nt.getTransfer($)===ut?(ne!==_n||j!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}function lt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=xe,this.setupRenderTarget=we,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=J,this.useMultisampledRTT=qe}function xx(i,e){function t(n,r=ni){let s;const o=nt.getTransfer(r);if(n===di)return i.UNSIGNED_BYTE;if(n===Gd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zf)return i.BYTE;if(n===Bf)return i.SHORT;if(n===ca)return i.UNSIGNED_SHORT;if(n===Hd)return i.INT;if(n===yr)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Ca)return i.HALF_FLOAT;if(n===Vf)return i.ALPHA;if(n===Hf)return i.RGB;if(n===_n)return i.RGBA;if(n===Gf)return i.LUMINANCE;if(n===Wf)return i.LUMINANCE_ALPHA;if(n===dr)return i.DEPTH_COMPONENT;if(n===Sr)return i.DEPTH_STENCIL;if(n===qf)return i.RED;if(n===qd)return i.RED_INTEGER;if(n===Xf)return i.RG;if(n===Xd)return i.RG_INTEGER;if(n===Yd)return i.RGBA_INTEGER;if(n===Ya||n===$a||n===ja||n===Za)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===vl||n===yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_l||n===vl)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ml||n===Sl||n===wl||n===El||n===bl||n===Al||n===Tl||n===Cl||n===Rl||n===Pl||n===Ll||n===Il||n===Dl||n===Nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ml)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===Ul||n===Ol)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ka)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yf||n===Fl||n===zl||n===Bl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class _x extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pt extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vx={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,x=.005;l.inputState.pinching&&d>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`;class Sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Hn({vertexShader:yx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new La(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class wx extends Oi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,x=null;const v=new Sx,m=t.getContextAttributes();let p=null,y=null;const _=[],w=[],A=new pe;let E=null;const b=new ln;b.layers.enable(1),b.viewport=new At;const T=new ln;T.layers.enable(2),T.viewport=new At;const S=[b,T],M=new _x;M.layers.enable(1),M.layers.enable(2);let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=_[W];return J===void 0&&(J=new wo,_[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=_[W];return J===void 0&&(J=new wo,_[W]=J),J.getGripSpace()},this.getHand=function(W){let J=_[W];return J===void 0&&(J=new wo,_[W]=J),J.getHandSpace()};function U(W){const J=w.indexOf(W.inputSource);if(J===-1)return;const le=_[J];le!==void 0&&(le.update(W.inputSource,W.frame,l||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",B);for(let W=0;W<_.length;W++){const J=w[W];J!==null&&(w[W]=null,_[W].disconnect(J))}P=null,D=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,y=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",k),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ui(f.framebufferWidth,f.framebufferHeight,{format:_n,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,le=null,N=null;m.depth&&(N=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Sr:dr,le=m.stencil?Mr:yr);const se={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ui(d.textureWidth,d.textureHeight,{format:_n,type:di,depthTexture:new ah(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(W){for(let J=0;J<W.removed.length;J++){const le=W.removed[J],N=w.indexOf(le);N>=0&&(w[N]=null,_[N].disconnect(le))}for(let J=0;J<W.added.length;J++){const le=W.added[J];let N=w.indexOf(le);if(N===-1){for(let xe=0;xe<_.length;xe++)if(xe>=w.length){w.push(le),N=xe;break}else if(w[xe]===null){w[xe]=le,N=xe;break}if(N===-1)break}const se=_[N];se&&se.connect(le)}}const F=new L,X=new L;function H(W,J,le){F.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const N=F.distanceTo(X),se=J.projectionMatrix.elements,xe=le.projectionMatrix.elements,we=se[14]/(se[10]-1),O=se[14]/(se[10]+1),Ae=(se[9]+1)/se[5],ze=(se[9]-1)/se[5],je=(se[8]-1)/se[0],Re=(xe[8]+1)/xe[0],qe=we*je,Be=we*Re,Oe=N/(-je+Re),lt=Oe*-je;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(lt),W.translateZ(Oe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const I=we+Oe,C=O+Oe,$=qe-lt,ne=Be+(N-lt),j=Ae*O/C*I,Z=ze*O/C*I;W.projectionMatrix.makePerspective($,ne,j,Z,I,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ee(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;v.texture!==null&&(W.near=v.depthNear,W.far=v.depthFar),M.near=T.near=b.near=W.near,M.far=T.far=b.far=W.far,(P!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,D=M.far,b.near=P,b.far=D,T.near=P,T.far=D,b.updateProjectionMatrix(),T.updateProjectionMatrix(),W.updateProjectionMatrix());const J=W.parent,le=M.cameras;ee(M,J);for(let N=0;N<le.length;N++)ee(le[N],J);le.length===2?H(M,b,T):M.projectionMatrix.copy(b.projectionMatrix),re(W,M,J)};function re(W,J,le){le===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ts*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ie=null;function K(W,J){if(u=J.getViewerPose(l||o),x=J,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let N=!1;le.length!==M.cameras.length&&(M.cameras.length=0,N=!0);for(let xe=0;xe<le.length;xe++){const we=le[xe];let O=null;if(f!==null)O=f.getViewport(we);else{const ze=h.getViewSubImage(d,we);O=ze.viewport,xe===0&&(e.setRenderTargetTextures(y,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(y))}let Ae=S[xe];Ae===void 0&&(Ae=new ln,Ae.layers.enable(xe),Ae.viewport=new At,S[xe]=Ae),Ae.matrix.fromArray(we.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(we.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(O.x,O.y,O.width,O.height),xe===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),N===!0&&M.cameras.push(Ae)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const xe=h.getDepthInformation(le[0]);xe&&xe.isValid&&xe.texture&&v.init(e,xe,r.renderState)}}for(let le=0;le<_.length;le++){const N=w[le],se=_[le];N!==null&&se!==void 0&&se.update(N,J,l||o)}ie&&ie(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}const fe=new sh;fe.setAnimationLoop(K),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}}const Ei=new pn,Ex=new ct;function bx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,th(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,_,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,w=y.envMapRotation;_&&(m.envMap.value=_,Ei.copy(w),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(Ei)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ax(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const w=_.program;n.uniformBlockBinding(y,w)}function l(y,_){let w=r[y.id];w===void 0&&(x(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",m));const A=_.program;n.updateUBOMapping(y,A);const E=e.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function u(y){const _=h();y.__bindingPointIndex=_;const w=i.createBuffer(),A=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=r[y.id],w=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,b=w.length;E<b;E++){const T=Array.isArray(w[E])?w[E]:[w[E]];for(let S=0,M=T.length;S<M;S++){const P=T[S];if(f(P,E,S,A)===!0){const D=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let B=0;B<U.length;B++){const F=U[B],X=v(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,D+k,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,w,A){const E=y.value,b=_+"_"+w;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const T=A[b];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return A[b]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function x(y){const _=y.uniforms;let w=0;const A=16;for(let b=0,T=_.length;b<T;b++){const S=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,P=S.length;M<P;M++){const D=S[M],U=Array.isArray(D.value)?D.value:[D.value];for(let k=0,B=U.length;k<B;k++){const F=U[k],X=v(F),H=w%A;H!==0&&A-H<X.boundary&&(w+=A-H),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=X.storage}}}const E=w%A;return E>0&&(w+=A-E),y.__size=w,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class cs{constructor(e={}){const{canvas:t=yp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=oi,this.toneMappingExposure=1;const _=this;let w=!1,A=0,E=0,b=null,T=-1,S=null;const M=new At,P=new At;let D=null;const U=new ye(0);let k=0,B=t.width,F=t.height,X=1,H=null,ee=null;const re=new At(0,0,B,F),ie=new At(0,0,B,F);let K=!1;const fe=new Cc;let W=!1,J=!1;const le=new ct,N=new L,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function we(){return b===null?X:1}let O=n;function Ae(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",te,!1),O===null){const V="webgl2";if(O=Ae(V,R),O===null)throw Ae(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ze,je,Re,qe,Be,Oe,lt,I,C,$,ne,j,Z,oe,ce,ue,Ee,ae,Me,ke,Le,ge,Ge,Xe;function mt(){ze=new Ug(O),ze.init(),ge=new xx(O,ze),je=new Rg(O,ze,e,ge),Re=new mx(O),qe=new zg(O),Be=new tx,Oe=new gx(O,ze,Re,Be,je,ge,qe),lt=new Lg(_),I=new Ng(_),C=new qp(O),Ge=new Tg(O,C),$=new Og(O,C,qe,Ge),ne=new kg(O,$,C,qe),Me=new Bg(O,je,Oe),ue=new Pg(Be),j=new ex(_,lt,I,ze,je,Ge,ue),Z=new bx(_,Be),oe=new ix,ce=new lx(ze),ae=new Ag(_,lt,I,Re,ne,d,c),Ee=new px(_,ne,je),Xe=new Ax(O,qe,je,Re),ke=new Cg(O,ze,qe),Le=new Fg(O,ze,qe),qe.programs=j.programs,_.capabilities=je,_.extensions=ze,_.properties=Be,_.renderLists=oe,_.shadowMap=Ee,_.state=Re,_.info=qe}mt();const z=new wx(_,O);this.xr=z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=ze.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ze.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(B,F,!1))},this.getSize=function(R){return R.set(B,F)},this.setSize=function(R,V,q=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,F=V,t.width=Math.floor(R*X),t.height=Math.floor(V*X),q===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(B*X,F*X).floor()},this.setDrawingBufferSize=function(R,V,q){B=R,F=V,X=q,t.width=Math.floor(R*q),t.height=Math.floor(V*q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(re)},this.setViewport=function(R,V,q,Y){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,V,q,Y),Re.viewport(M.copy(re).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,V,q,Y){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,V,q,Y),Re.scissor(P.copy(ie).multiplyScalar(X).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(R){Re.setScissorTest(K=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){ee=R},this.getClearColor=function(R){return R.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(R=!0,V=!0,q=!0){let Y=0;if(R){let G=!1;if(b!==null){const de=b.texture.format;G=de===Yd||de===Xd||de===qd}if(G){const de=b.texture.type,ve=de===di||de===yr||de===ca||de===Mr||de===Gd||de===Wd,Se=ae.getClearColor(),be=ae.getClearAlpha(),Ne=Se.r,Ue=Se.g,Pe=Se.b;ve?(f[0]=Ne,f[1]=Ue,f[2]=Pe,f[3]=be,O.clearBufferuiv(O.COLOR,0,f)):(x[0]=Ne,x[1]=Ue,x[2]=Pe,x[3]=be,O.clearBufferiv(O.COLOR,0,x))}else Y|=O.COLOR_BUFFER_BIT}V&&(Y|=O.DEPTH_BUFFER_BIT),q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",te,!1),oe.dispose(),ce.dispose(),Be.dispose(),lt.dispose(),I.dispose(),ne.dispose(),Ge.dispose(),Xe.dispose(),j.dispose(),z.dispose(),z.removeEventListener("sessionstart",mn),z.removeEventListener("sessionend",gn),xi.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=qe.autoReset,V=Ee.enabled,q=Ee.autoUpdate,Y=Ee.needsUpdate,G=Ee.type;mt(),qe.autoReset=R,Ee.enabled=V,Ee.autoUpdate=q,Ee.needsUpdate=Y,Ee.type=G}function te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function he(R){const V=R.target;V.removeEventListener("dispose",he),Fe(V)}function Fe(R){Ze(R),Be.remove(R)}function Ze(R){const V=Be.get(R).programs;V!==void 0&&(V.forEach(function(q){j.releaseProgram(q)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,q,Y,G,de){V===null&&(V=se);const ve=G.isMesh&&G.matrixWorld.determinant()<0,Se=Xh(R,V,q,Y,G);Re.setMaterial(Y,ve);let be=q.index,Ne=1;if(Y.wireframe===!0){if(be=$.getWireframeAttribute(q),be===void 0)return;Ne=2}const Ue=q.drawRange,Pe=q.attributes.position;let Je=Ue.start*Ne,ht=(Ue.start+Ue.count)*Ne;de!==null&&(Je=Math.max(Je,de.start*Ne),ht=Math.min(ht,(de.start+de.count)*Ne)),be!==null?(Je=Math.max(Je,0),ht=Math.min(ht,be.count)):Pe!=null&&(Je=Math.max(Je,0),ht=Math.min(ht,Pe.count));const ft=ht-Je;if(ft<0||ft===1/0)return;Ge.setup(G,Y,Se,q,be);let Wt,et=ke;if(be!==null&&(Wt=C.get(be),et=Le,et.setIndex(Wt)),G.isMesh)Y.wireframe===!0?(Re.setLineWidth(Y.wireframeLinewidth*we()),et.setMode(O.LINES)):et.setMode(O.TRIANGLES);else if(G.isLine){let Ce=Y.linewidth;Ce===void 0&&(Ce=1),Re.setLineWidth(Ce*we()),G.isLineSegments?et.setMode(O.LINES):G.isLineLoop?et.setMode(O.LINE_LOOP):et.setMode(O.LINE_STRIP)}else G.isPoints?et.setMode(O.POINTS):G.isSprite&&et.setMode(O.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?et.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)et.renderInstances(Je,ft,G.count);else if(q.isInstancedBufferGeometry){const Ce=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Nt=Math.min(q.instanceCount,Ce);et.renderInstances(Je,ft,Nt)}else et.render(Je,ft)};function gt(R,V,q){R.transparent===!0&&R.side===dt&&R.forceSinglePass===!1?(R.side=Gt,R.needsUpdate=!0,gs(R,V,q),R.side=Sn,R.needsUpdate=!0,gs(R,V,q),R.side=dt):gs(R,V,q)}this.compile=function(R,V,q=null){q===null&&(q=R),m=ce.get(q),m.init(V),y.push(m),q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),R!==q&&R.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Y=new Set;return R.traverse(function(G){const de=G.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const Se=de[ve];gt(Se,q,G),Y.add(Se)}else gt(de,q,G),Y.add(de)}),y.pop(),m=null,Y},this.compileAsync=function(R,V,q=null){const Y=this.compile(R,V,q);return new Promise(G=>{function de(){if(Y.forEach(function(ve){Be.get(ve).currentProgram.isReady()&&Y.delete(ve)}),Y.size===0){G(R);return}setTimeout(de,10)}ze.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Mt=null;function it(R){Mt&&Mt(R)}function mn(){xi.stop()}function gn(){xi.start()}const xi=new sh;xi.setAnimationLoop(it),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(R){Mt=R,z.setAnimationLoop(R),R===null?xi.stop():xi.start()},z.addEventListener("sessionstart",mn),z.addEventListener("sessionend",gn),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(V),V=z.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,V,b),m=ce.get(R,y.length),m.init(V),y.push(m),le.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),fe.setFromProjectionMatrix(le),J=this.localClippingEnabled,W=ue.init(this.clippingPlanes,J),v=oe.get(R,p.length),v.init(),p.push(v),z.enabled===!0&&z.isPresenting===!0){const de=_.xr.getDepthSensingMesh();de!==null&&Va(de,V,-1/0,_.sortObjects)}Va(R,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,ee),xe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,xe&&ae.addToRenderList(v,R),this.info.render.frame++,W===!0&&ue.beginShadows();const q=m.state.shadowsArray;Ee.render(q,R,V),W===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,G=v.transmissive;if(m.setupLights(),V.isArrayCamera){const de=V.cameras;if(G.length>0)for(let ve=0,Se=de.length;ve<Se;ve++){const be=de[ve];sl(Y,G,R,be)}xe&&ae.render(R);for(let ve=0,Se=de.length;ve<Se;ve++){const be=de[ve];rl(v,R,be,be.viewport)}}else G.length>0&&sl(Y,G,R,V),xe&&ae.render(R),rl(v,R,V);b!==null&&(Oe.updateMultisampleRenderTarget(b),Oe.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(_,R,V),Ge.resetDefaultState(),T=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],W===!0&&ue.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Va(R,V,q,Y){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||fe.intersectsSprite(R)){Y&&N.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);const ve=ne.update(R),Se=R.material;Se.visible&&v.push(R,ve,Se,q,N.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||fe.intersectsObject(R))){const ve=ne.update(R),Se=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),N.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),N.copy(ve.boundingSphere.center)),N.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){const be=ve.groups;for(let Ne=0,Ue=be.length;Ne<Ue;Ne++){const Pe=be[Ne],Je=Se[Pe.materialIndex];Je&&Je.visible&&v.push(R,ve,Je,q,N.z,Pe)}}else Se.visible&&v.push(R,ve,Se,q,N.z,null)}}const de=R.children;for(let ve=0,Se=de.length;ve<Se;ve++)Va(de[ve],V,q,Y)}function rl(R,V,q,Y){const G=R.opaque,de=R.transmissive,ve=R.transparent;m.setupLightsView(q),W===!0&&ue.setGlobalState(_.clippingPlanes,q),Y&&Re.viewport(M.copy(Y)),G.length>0&&ms(G,V,q),de.length>0&&ms(de,V,q),ve.length>0&&ms(ve,V,q),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function sl(R,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Ui(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Ca:di,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const de=m.state.transmissionRenderTarget[Y.id],ve=Y.viewport||M;de.setSize(ve.z,ve.w);const Se=_.getRenderTarget();_.setRenderTarget(de),_.getClearColor(U),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),xe?ae.render(q):_.clear();const be=_.toneMapping;_.toneMapping=oi;const Ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),W===!0&&ue.setGlobalState(_.clippingPlanes,Y),ms(R,q,Y),Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Pe=0,Je=V.length;Pe<Je;Pe++){const ht=V[Pe],ft=ht.object,Wt=ht.geometry,et=ht.material,Ce=ht.group;if(et.side===dt&&ft.layers.test(Y.layers)){const Nt=et.side;et.side=Gt,et.needsUpdate=!0,al(ft,q,Y,Wt,et,Ce),et.side=Nt,et.needsUpdate=!0,Ue=!0}}Ue===!0&&(Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de))}_.setRenderTarget(Se),_.setClearColor(U,k),Ne!==void 0&&(Y.viewport=Ne),_.toneMapping=be}function ms(R,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,de=R.length;G<de;G++){const ve=R[G],Se=ve.object,be=ve.geometry,Ne=Y===null?ve.material:Y,Ue=ve.group;Se.layers.test(q.layers)&&al(Se,V,q,be,Ne,Ue)}}function al(R,V,q,Y,G,de){R.onBeforeRender(_,V,q,Y,G,de),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(_,V,q,Y,R,de),G.transparent===!0&&G.side===dt&&G.forceSinglePass===!1?(G.side=Gt,G.needsUpdate=!0,_.renderBufferDirect(q,V,Y,G,R,de),G.side=Sn,G.needsUpdate=!0,_.renderBufferDirect(q,V,Y,G,R,de),G.side=dt):_.renderBufferDirect(q,V,Y,G,R,de),R.onAfterRender(_,V,q,Y,G,de)}function gs(R,V,q){V.isScene!==!0&&(V=se);const Y=Be.get(R),G=m.state.lights,de=m.state.shadowsArray,ve=G.state.version,Se=j.getParameters(R,G.state,de,V,q),be=j.getProgramCacheKey(Se);let Ne=Y.programs;Y.environment=R.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(R.isMeshStandardMaterial?I:lt).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ne===void 0&&(R.addEventListener("dispose",he),Ne=new Map,Y.programs=Ne);let Ue=Ne.get(be);if(Ue!==void 0){if(Y.currentProgram===Ue&&Y.lightsStateVersion===ve)return cl(R,Se),Ue}else Se.uniforms=j.getUniforms(R),R.onBuild(q,Se,_),R.onBeforeCompile(Se,_),Ue=j.acquireProgram(Se,be),Ne.set(be,Ue),Y.uniforms=Se.uniforms;const Pe=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=ue.uniform),cl(R,Se),Y.needsLights=$h(R),Y.lightsStateVersion=ve,Y.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.directionalShadowMap.value=G.state.directionalShadowMap,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotShadowMap.value=G.state.spotShadowMap,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMap.value=G.state.pointShadowMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ue,Y.uniformsList=null,Ue}function ol(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=ia.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function cl(R,V){const q=Be.get(R);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Xh(R,V,q,Y,G){V.isScene!==!0&&(V=se),Oe.resetTextureUnits();const de=V.fog,ve=Y.isMeshStandardMaterial?V.environment:null,Se=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pi,be=(Y.isMeshStandardMaterial?I:lt).get(Y.envMap||ve),Ne=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ue=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pe=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,ht=!!q.morphAttributes.color;let ft=oi;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ft=_.toneMapping);const Wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,et=Wt!==void 0?Wt.length:0,Ce=Be.get(Y),Nt=m.state.lights;if(W===!0&&(J===!0||R!==S)){const Yt=R===S&&Y.id===T;ue.setState(Y,R,Yt)}let rt=!1;Y.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Nt.state.version||Ce.outputColorSpace!==Se||G.isBatchedMesh&&Ce.batching===!1||!G.isBatchedMesh&&Ce.batching===!0||G.isBatchedMesh&&Ce.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ce.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||G.isInstancedMesh&&Ce.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ce.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ce.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ce.instancingMorph===!1&&G.morphTexture!==null||Ce.envMap!==be||Y.fog===!0&&Ce.fog!==de||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ue.numPlanes||Ce.numIntersection!==ue.numIntersection)||Ce.vertexAlphas!==Ne||Ce.vertexTangents!==Ue||Ce.morphTargets!==Pe||Ce.morphNormals!==Je||Ce.morphColors!==ht||Ce.toneMapping!==ft||Ce.morphTargetsCount!==et)&&(rt=!0):(rt=!0,Ce.__version=Y.version);let bn=Ce.currentProgram;rt===!0&&(bn=gs(Y,V,G));let xs=!1,_i=!1,Ha=!1;const St=bn.getUniforms(),Yn=Ce.uniforms;if(Re.useProgram(bn.program)&&(xs=!0,_i=!0,Ha=!0),Y.id!==T&&(T=Y.id,_i=!0),xs||S!==R){St.setValue(O,"projectionMatrix",R.projectionMatrix),St.setValue(O,"viewMatrix",R.matrixWorldInverse);const Yt=St.map.cameraPosition;Yt!==void 0&&Yt.setValue(O,N.setFromMatrixPosition(R.matrixWorld)),je.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&St.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,_i=!0,Ha=!0)}if(G.isSkinnedMesh){St.setOptional(O,G,"bindMatrix"),St.setOptional(O,G,"bindMatrixInverse");const Yt=G.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),St.setValue(O,"boneTexture",Yt.boneTexture,Oe))}G.isBatchedMesh&&(St.setOptional(O,G,"batchingTexture"),St.setValue(O,"batchingTexture",G._matricesTexture,Oe),St.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&St.setValue(O,"batchingColorTexture",G._colorsTexture,Oe));const Ga=q.morphAttributes;if((Ga.position!==void 0||Ga.normal!==void 0||Ga.color!==void 0)&&Me.update(G,q,bn),(_i||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,St.setValue(O,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Yn.envMap.value=be,Yn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(Yn.envMapIntensity.value=V.environmentIntensity),_i&&(St.setValue(O,"toneMappingExposure",_.toneMappingExposure),Ce.needsLights&&Yh(Yn,Ha),de&&Y.fog===!0&&Z.refreshFogUniforms(Yn,de),Z.refreshMaterialUniforms(Yn,Y,X,F,m.state.transmissionRenderTarget[R.id]),ia.upload(O,ol(Ce),Yn,Oe)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ia.upload(O,ol(Ce),Yn,Oe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&St.setValue(O,"center",G.center),St.setValue(O,"modelViewMatrix",G.modelViewMatrix),St.setValue(O,"normalMatrix",G.normalMatrix),St.setValue(O,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Yt=Y.uniformsGroups;for(let Wa=0,jh=Yt.length;Wa<jh;Wa++){const ll=Yt[Wa];Xe.update(ll,bn),Xe.bind(ll,bn)}}return bn}function Yh(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function $h(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,V,q){Be.get(R.texture).__webglTexture=V,Be.get(R.depthTexture).__webglTexture=q;const Y=Be.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const q=Be.get(R);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,q=0){b=R,A=V,E=q;let Y=!0,G=null,de=!1,ve=!1;if(R){const be=Be.get(R);be.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1):be.__webglFramebuffer===void 0?Oe.setupRenderTarget(R):be.__hasExternalTextures&&Oe.rebindTextures(R,Be.get(R.texture).__webglTexture,Be.get(R.depthTexture).__webglTexture);const Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ve=!0);const Ue=Be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[V])?G=Ue[V][q]:G=Ue[V],de=!0):R.samples>0&&Oe.useMultisampledRTT(R)===!1?G=Be.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[q]:G=Ue,M.copy(R.viewport),P.copy(R.scissor),D=R.scissorTest}else M.copy(re).multiplyScalar(X).floor(),P.copy(ie).multiplyScalar(X).floor(),D=K;if(Re.bindFramebuffer(O.FRAMEBUFFER,G)&&Y&&Re.drawBuffers(R,G),Re.viewport(M),Re.scissor(P),Re.setScissorTest(D),de){const be=Be.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,be.__webglTexture,q)}else if(ve){const be=Be.get(R.texture),Ne=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,q||0,Ne)}T=-1},this.readRenderTargetPixels=function(R,V,q,Y,G,de,ve){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Re.bindFramebuffer(O.FRAMEBUFFER,Se);try{const be=R.texture,Ne=be.format,Ue=be.type;if(!je.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-G&&O.readPixels(V,q,Y,G,ge.convert(Ne),ge.convert(Ue),de)}finally{const be=b!==null?Be.get(b).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(R,V,q,Y,G,de,ve){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Re.bindFramebuffer(O.FRAMEBUFFER,Se);try{const be=R.texture,Ne=be.format,Ue=be.type;if(!je.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-G){const Pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.bufferData(O.PIXEL_PACK_BUFFER,de.byteLength,O.STREAM_READ),O.readPixels(V,q,Y,G,ge.convert(Ne),ge.convert(Ue),0),O.flush();const Je=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await Mp(O,Je,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,de)}finally{O.deleteBuffer(Pe),O.deleteSync(Je)}return de}}finally{const be=b!==null?Be.get(b).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(R,V=null,q=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const Y=Math.pow(2,-q),G=Math.floor(R.image.width*Y),de=Math.floor(R.image.height*Y),ve=V!==null?V.x:0,Se=V!==null?V.y:0;Oe.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,ve,Se,G,de),Re.unbindTexture()},this.copyTextureToTexture=function(R,V,q=null,Y=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],V=arguments[2],G=arguments[3]||0,q=null);let de,ve,Se,be,Ne,Ue;q!==null?(de=q.max.x-q.min.x,ve=q.max.y-q.min.y,Se=q.min.x,be=q.min.y):(de=R.image.width,ve=R.image.height,Se=0,be=0),Y!==null?(Ne=Y.x,Ue=Y.y):(Ne=0,Ue=0);const Pe=ge.convert(V.format),Je=ge.convert(V.type);Oe.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const ht=O.getParameter(O.UNPACK_ROW_LENGTH),ft=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Wt=O.getParameter(O.UNPACK_SKIP_PIXELS),et=O.getParameter(O.UNPACK_SKIP_ROWS),Ce=O.getParameter(O.UNPACK_SKIP_IMAGES),Nt=R.isCompressedTexture?R.mipmaps[G]:R.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Se),O.pixelStorei(O.UNPACK_SKIP_ROWS,be),R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,Ne,Ue,de,ve,Pe,Je,Nt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,Ne,Ue,Nt.width,Nt.height,Pe,Nt.data):O.texSubImage2D(O.TEXTURE_2D,G,Ne,Ue,Pe,Je,Nt),O.pixelStorei(O.UNPACK_ROW_LENGTH,ht),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Wt),O.pixelStorei(O.UNPACK_SKIP_ROWS,et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ce),G===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(R,V,q=null,Y=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],V=arguments[3],G=arguments[4]||0);let de,ve,Se,be,Ne,Ue,Pe,Je,ht;const ft=R.isCompressedTexture?R.mipmaps[G]:R.image;q!==null?(de=q.max.x-q.min.x,ve=q.max.y-q.min.y,Se=q.max.z-q.min.z,be=q.min.x,Ne=q.min.y,Ue=q.min.z):(de=ft.width,ve=ft.height,Se=ft.depth,be=0,Ne=0,Ue=0),Y!==null?(Pe=Y.x,Je=Y.y,ht=Y.z):(Pe=0,Je=0,ht=0);const Wt=ge.convert(V.format),et=ge.convert(V.type);let Ce;if(V.isData3DTexture)Oe.setTexture3D(V,0),Ce=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Oe.setTexture2DArray(V,0),Ce=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Nt=O.getParameter(O.UNPACK_ROW_LENGTH),rt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),bn=O.getParameter(O.UNPACK_SKIP_PIXELS),xs=O.getParameter(O.UNPACK_SKIP_ROWS),_i=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ne),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ue),R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Ce,G,Pe,Je,ht,de,ve,Se,Wt,et,ft.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Ce,G,Pe,Je,ht,de,ve,Se,Wt,ft.data):O.texSubImage3D(Ce,G,Pe,Je,ht,de,ve,Se,Wt,et,ft),O.pixelStorei(O.UNPACK_ROW_LENGTH,Nt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,bn),O.pixelStorei(O.UNPACK_SKIP_ROWS,xs),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_i),G===0&&V.generateMipmaps&&O.generateMipmap(Ce),Re.unbindTexture()},this.initRenderTarget=function(R){Be.get(R).__webglFramebuffer===void 0&&Oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Oe.setTextureCube(R,0):R.isData3DTexture?Oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Oe.setTexture2DArray(R,0):Oe.setTexture2D(R,0),Re.unbindTexture()},this.resetState=function(){A=0,E=0,b=null,Re.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ec?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Ra?"display-p3":"srgb"}}class ls extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ac("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new L;class pa{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hh extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let sr;const Br=new L,ar=new L,or=new L,cr=new pe,kr=new pe,fh=new ct,Hs=new L,Vr=new L,Gs=new L,Lu=new pe,Eo=new pe,Iu=new pe;class Cx extends xt{constructor(e=new hh){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new We;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tx(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new pa(n,3,0,!1)),sr.setAttribute("uv",new pa(n,2,3,!1))}this.geometry=sr,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),fh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-or.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Ws(Hs.set(-.5,-.5,0),or,o,ar,r,s),Ws(Vr.set(.5,-.5,0),or,o,ar,r,s),Ws(Gs.set(.5,.5,0),or,o,ar,r,s),Lu.set(0,0),Eo.set(1,0),Iu.set(1,1);let a=e.ray.intersectTriangle(Hs,Vr,Gs,!1,Br);if(a===null&&(Ws(Vr.set(-.5,.5,0),or,o,ar,r,s),Eo.set(0,1),a=e.ray.intersectTriangle(Hs,Gs,Vr,!1,Br),a===null))return;const c=e.ray.origin.distanceTo(Br);c<e.near||c>e.far||t.push({distance:c,point:Br.clone(),uv:Kt.getInterpolation(Br,Hs,Vr,Gs,Lu,Eo,Iu,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ws(i,e,t,n,r,s){cr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(kr.x=s*cr.x-r*cr.y,kr.y=r*cr.x+s*cr.y):kr.copy(cr),i.copy(e),i.x+=kr.x,i.y+=kr.y,i.applyMatrix4(fh)}class zi extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ma=new L,ga=new L,Du=new ct,Hr=new Pa,qs=new mi,bo=new L,Nu=new L;class ns extends xt{constructor(e=new We,t=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ma.fromBufferAttribute(t,r-1),ga.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ma.distanceTo(ga);e.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;Du.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(Du);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let v=f,m=x-1;v<m;v+=l){const p=u.getX(v),y=u.getX(v+1),_=Xs(this,e,Hr,c,p,y);_&&t.push(_)}if(this.isLineLoop){const v=u.getX(x-1),m=u.getX(f),p=Xs(this,e,Hr,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let v=f,m=x-1;v<m;v+=l){const p=Xs(this,e,Hr,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Xs(this,e,Hr,c,x-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xs(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(ma.fromBufferAttribute(o,r),ga.fromBufferAttribute(o,s),t.distanceSqToSegment(ma,ga,bo,Nu)>n)return;bo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(bo);if(!(c<e.near||c>e.far))return{distance:c,point:Nu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Uu=new L,Ou=new L;class Pc extends ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Uu.fromBufferAttribute(t,r),Ou.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Uu.distanceTo(Ou);e.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rx extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fu=new ct,Zo=new Pa,Ys=new mi,$s=new L;class Px extends xt{constructor(e=new We,t=new Rx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;Fu.copy(r).invert(),Zo.copy(e.ray).applyMatrix4(Fu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let x=d,v=f;x<v;x++){const m=l.getX(x);$s.fromBufferAttribute(h,m),zu($s,m,c,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=d,v=f;x<v;x++)$s.fromBufferAttribute(h,x),zu($s,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zu(i,e,t,n,r,s,o){const a=Zo.distanceSqToPoint(i);if(a<t){const c=new L;Zo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Lx extends kt{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new pe:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,r=[],s=[],o=[],a=new L,c=new ct;for(let f=0;f<=e;f++){const x=f/e;r[f]=this.getTangentAt(x,new L)}s[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(bt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,x))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(bt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let x=1;x<=e;x++)s[x].applyMatrix4(c.makeRotationAxis(r[x],f*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ph extends Xn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new pe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ix extends ph{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lc(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const js=new L,Ao=new Lc,To=new Lc,Co=new Lc;class mh extends Xn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(js.subVectors(r[0],r[1]).add(r[0]),l=js);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(js.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=js),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),Ao.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,x,v,m),To.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,x,v,m),Co.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,x,v,m)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),To.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Co.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ao.calc(c),To.calc(c),Co.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bu(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function Dx(i,e){const t=1-i;return t*t*e}function Nx(i,e){return 2*(1-i)*i*e}function Ux(i,e){return i*i*e}function $r(i,e,t,n){return Dx(i,e)+Nx(i,t)+Ux(i,n)}function Ox(i,e){const t=1-i;return t*t*t*e}function Fx(i,e){const t=1-i;return 3*t*t*i*e}function zx(i,e){return 3*(1-i)*i*i*e}function Bx(i,e){return i*i*i*e}function jr(i,e,t,n,r){return Ox(i,e)+Fx(i,t)+zx(i,n)+Bx(i,r)}class kx extends Xn{constructor(e=new pe,t=new pe,n=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(jr(e,r.x,s.x,o.x,a.x),jr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vx extends Xn{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(jr(e,r.x,s.x,o.x,a.x),jr(e,r.y,s.y,o.y,a.y),jr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hx extends Xn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gx extends Xn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wx extends Xn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($r(e,r.x,s.x,o.x),$r(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gh extends Xn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($r(e,r.x,s.x,o.x),$r(e,r.y,s.y,o.y),$r(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qx extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Bu(a,c.x,l.x,u.x,h.x),Bu(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var Xx=Object.freeze({__proto__:null,ArcCurve:Ix,CatmullRomCurve3:mh,CubicBezierCurve:kx,CubicBezierCurve3:Vx,EllipseCurve:ph,LineCurve:Hx,LineCurve3:Gx,QuadraticBezierCurve:Wx,QuadraticBezierCurve3:gh,SplineCurve:qx});class Ic extends We{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new L,u=new pe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(a,3)),this.setAttribute("uv",new De(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Cr extends We{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let x=0;const v=[],m=n/2;let p=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new De(h,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2));function y(){const w=new L,A=new L;let E=0;const b=(t-e)/n;for(let T=0;T<=s;T++){const S=[],M=T/s,P=M*(t-e)+e;for(let D=0;D<=r;D++){const U=D/r,k=U*c+a,B=Math.sin(k),F=Math.cos(k);A.x=P*B,A.y=-M*n+m,A.z=P*F,h.push(A.x,A.y,A.z),w.set(B,b,F).normalize(),d.push(w.x,w.y,w.z),f.push(U,1-M),S.push(x++)}v.push(S)}for(let T=0;T<r;T++)for(let S=0;S<s;S++){const M=v[S][T],P=v[S+1][T],D=v[S+1][T+1],U=v[S][T+1];u.push(M,P,U),u.push(P,D,U),E+=6}l.addGroup(p,E,0),p+=E}function _(w){const A=x,E=new pe,b=new L;let T=0;const S=w===!0?e:t,M=w===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),x++;const P=x;for(let D=0;D<=r;D++){const k=D/r*c+a,B=Math.cos(k),F=Math.sin(k);b.x=S*F,b.y=m*M,b.z=S*B,h.push(b.x,b.y,b.z),d.push(0,M,0),E.x=B*.5+.5,E.y=F*.5*M+.5,f.push(E.x,E.y),x++}for(let D=0;D<r;D++){const U=A+D,k=P+D;w===!0?u.push(k,k+1,U):u.push(k+1,k,U),T+=3}l.addGroup(p,T,w===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dc extends Cr{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Dc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nc extends We{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(s.slice(),3)),this.setAttribute("uv",new De(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new L,w=new L,A=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],w),f(t[E+2],A),c(_,w,A,y)}function c(y,_,w,A){const E=A+1,b=[];for(let T=0;T<=E;T++){b[T]=[];const S=y.clone().lerp(w,T/E),M=_.clone().lerp(w,T/E),P=E-T;for(let D=0;D<=P;D++)D===0&&T===E?b[T][D]=S:b[T][D]=S.clone().lerp(M,D/P)}for(let T=0;T<E;T++)for(let S=0;S<2*(E-T)-1;S++){const M=Math.floor(S/2);S%2===0?(d(b[T][M+1]),d(b[T+1][M]),d(b[T][M])):(d(b[T][M+1]),d(b[T+1][M+1]),d(b[T+1][M]))}}function l(y){const _=new L;for(let w=0;w<s.length;w+=3)_.x=s[w+0],_.y=s[w+1],_.z=s[w+2],_.normalize().multiplyScalar(y),s[w+0]=_.x,s[w+1]=_.y,s[w+2]=_.z}function u(){const y=new L;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const w=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(w,1-A)}x(),h()}function h(){for(let y=0;y<o.length;y+=6){const _=o[y+0],w=o[y+2],A=o[y+4],E=Math.max(_,w,A),b=Math.min(_,w,A);E>.9&&b<.1&&(_<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,_){const w=y*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function x(){const y=new L,_=new L,w=new L,A=new L,E=new pe,b=new pe,T=new pe;for(let S=0,M=0;S<s.length;S+=9,M+=6){y.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),w.set(s[S+6],s[S+7],s[S+8]),E.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),T.set(o[M+4],o[M+5]),A.copy(y).add(_).add(w).divideScalar(3);const P=m(A);v(E,M+0,y,P),v(b,M+2,_,P),v(T,M+4,w,P)}}function v(y,_,w,A){A<0&&y.x===1&&(o[_]=y.x-1),w.x===0&&w.z===0&&(o[_]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.vertices,e.indices,e.radius,e.details)}}const Zs=new L,Ks=new L,Ro=new L,Js=new Kt;class Yx extends We{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(hr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let x=0;x<c;x+=3){o?(l[0]=o.getX(x),l[1]=o.getX(x+1),l[2]=o.getX(x+2)):(l[0]=x,l[1]=x+1,l[2]=x+2);const{a:v,b:m,c:p}=Js;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Js.getNormal(Ro),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const _=(y+1)%3,w=h[y],A=h[_],E=Js[u[y]],b=Js[u[_]],T=`${w}_${A}`,S=`${A}_${w}`;S in d&&d[S]?(Ro.dot(d[S].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(b.x,b.y,b.z)),d[S]=null):T in d||(d[T]={index0:l[y],index1:l[_],normal:Ro.clone()})}}for(const x in d)if(d[x]){const{index0:v,index1:m}=d[x];Zs.fromBufferAttribute(a,v),Ks.fromBufferAttribute(a,m),f.push(Zs.x,Zs.y,Zs.z),f.push(Ks.x,Ks.y,Ks.z)}this.setAttribute("position",new De(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Uc extends Nc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uc(e.radius,e.detail)}}class Rr extends We{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,d=new L,f=[],x=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let w=0;p===0&&o===0?w=.5/t:p===n&&c===Math.PI&&(w=-.5/t);for(let A=0;A<=t;A++){const E=A/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+_*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(E+w,1-_),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=u[p][y+1],w=u[p][y],A=u[p+1][y],E=u[p+1][y+1];(p!==0||o>0)&&f.push(_,w,E),(p!==n-1||c<Math.PI)&&f.push(w,A,E)}this.setIndex(f),this.setAttribute("position",new De(x,3)),this.setAttribute("normal",new De(v,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oc extends We{constructor(e=new gh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new pe;let u=new L;const h=[],d=[],f=[],x=[];v(),this.setIndex(x),this.setAttribute("position",new De(h,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2));function v(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),y(),p()}function m(_){u=e.getPointAt(_/t,u);const w=o.normals[_],A=o.binormals[_];for(let E=0;E<=r;E++){const b=E/r*Math.PI*2,T=Math.sin(b),S=-Math.cos(b);c.x=S*w.x+T*A.x,c.y=S*w.y+T*A.y,c.z=S*w.z+T*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let w=1;w<=r;w++){const A=(r+1)*(_-1)+(w-1),E=(r+1)*_+(w-1),b=(r+1)*_+w,T=(r+1)*(_-1)+w;x.push(A,E,T),x.push(E,b,T)}}function y(){for(let _=0;_<=t;_++)for(let w=0;w<=r;w++)l.x=_/t,l.y=w/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Oc(new Xx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class xh extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $x extends xh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pr extends qn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fc extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class _h extends Fc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Po=new ct,ku=new L,Vu=new L;class jx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cc,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(ku),Vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vu),t.updateMatrixWorld(),Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zx extends jx{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bi extends Fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Zx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class us extends Fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hu=new ct;class Kx{constructor(e,t,n=0,r=1/0){this.ray=new Pa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hu),this}intersectObject(e,t=!0,n=[]){return Ko(e,this,n,t),n.sort(Gu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ko(e[r],this,n,t);return n.sort(Gu),n}}function Gu(i,e){return i.distance-e.distance}function Ko(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Ko(s[o],e,t,!0)}}const Wu=new L;let Qs,Lo;class Jx extends xt{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Qs===void 0&&(Qs=new We,Qs.setAttribute("position",new De([0,0,0,0,1,0],3)),Lo=new Cr(0,.5,1,5,1),Lo.translate(0,-.5,0)),this.position.copy(t),this.line=new ns(Qs,new zi({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ye(Lo,new Vt({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Wu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Wu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);const Io={type:"change"},Do={type:"start"},No={type:"end"};class Qx extends Oi{constructor(e,t){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:qa.ROTATE,MIDDLE:qa.DOLLY,RIGHT:qa.PAN},this.target=new L;const s=1e-6,o=new L;let a=1,c=r.NONE,l=r.NONE,u=0,h=0,d=0;const f=new L,x=new pe,v=new pe,m=new L,p=new pe,y=new pe,_=new pe,w=new pe,A=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const N=n.domElement.getBoundingClientRect(),se=n.domElement.ownerDocument.documentElement;n.screen.left=N.left+window.pageXOffset-se.clientLeft,n.screen.top=N.top+window.pageYOffset-se.clientTop,n.screen.width=N.width,n.screen.height=N.height};const b=function(){const N=new pe;return function(xe,we){return N.set((xe-n.screen.left)/n.screen.width,(we-n.screen.top)/n.screen.height),N}}(),T=function(){const N=new pe;return function(xe,we){return N.set((xe-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-we))/n.screen.width),N}}();this.rotateCamera=function(){const N=new L,se=new br,xe=new L,we=new L,O=new L,Ae=new L;return function(){Ae.set(v.x-x.x,v.y-x.y,0);let je=Ae.length();je?(f.copy(n.object.position).sub(n.target),xe.copy(f).normalize(),we.copy(n.object.up).normalize(),O.crossVectors(we,xe).normalize(),we.setLength(v.y-x.y),O.setLength(v.x-x.x),Ae.copy(we.add(O)),N.crossVectors(Ae,f).normalize(),je*=n.rotateSpeed,se.setFromAxisAngle(N,je),f.applyQuaternion(se),n.object.up.applyQuaternion(se),m.copy(N),d=je):!n.staticMoving&&d&&(d*=Math.sqrt(1-n.dynamicDampingFactor),f.copy(n.object.position).sub(n.target),se.setFromAxisAngle(m,d),f.applyQuaternion(se),n.object.up.applyQuaternion(se)),x.copy(v)}}(),this.zoomCamera=function(){let N;c===r.TOUCH_ZOOM_PAN?(N=u/h,u=h,n.object.isPerspectiveCamera?f.multiplyScalar(N):n.object.isOrthographicCamera?(n.object.zoom=Gl.clamp(n.object.zoom/N,n.minZoom,n.maxZoom),a!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(N=1+(y.y-p.y)*n.zoomSpeed,N!==1&&N>0&&(n.object.isPerspectiveCamera?f.multiplyScalar(N):n.object.isOrthographicCamera?(n.object.zoom=Gl.clamp(n.object.zoom/N,n.minZoom,n.maxZoom),a!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?p.copy(y):p.y+=(y.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const N=new pe,se=new L,xe=new L;return function(){if(N.copy(w).sub(_),N.lengthSq()){if(n.object.isOrthographicCamera){const O=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,Ae=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;N.x*=O,N.y*=Ae}N.multiplyScalar(f.length()*n.panSpeed),xe.copy(f).cross(n.object.up).setLength(N.x),xe.add(se.copy(n.object.up).setLength(N.y)),n.object.position.add(xe),n.target.add(xe),n.staticMoving?_.copy(w):_.add(N.subVectors(w,_).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(f.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,f.setLength(n.maxDistance)),p.copy(y)),f.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,f.setLength(n.minDistance)),p.copy(y)))},this.update=function(){f.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,f),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),o.distanceToSquared(n.object.position)>s&&(n.dispatchEvent(Io),o.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(o.distanceToSquared(n.object.position)>s||a!==n.object.zoom)&&(n.dispatchEvent(Io),o.copy(n.object.position),a=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,l=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),f.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(Io),o.copy(n.object.position),a=n.object.zoom};function S(N){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",P)),fe(N),N.pointerType==="touch"?ee(N):B(N))}function M(N){n.enabled!==!1&&(N.pointerType==="touch"?re(N):F(N))}function P(N){n.enabled!==!1&&(N.pointerType==="touch"?ie(N):X(),W(N),A.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",P)))}function D(N){W(N)}function U(N){n.enabled!==!1&&(window.removeEventListener("keydown",U),l===r.NONE&&(N.code===n.keys[r.ROTATE]&&!n.noRotate?l=r.ROTATE:N.code===n.keys[r.ZOOM]&&!n.noZoom?l=r.ZOOM:N.code===n.keys[r.PAN]&&!n.noPan&&(l=r.PAN)))}function k(){n.enabled!==!1&&(l=r.NONE,window.addEventListener("keydown",U))}function B(N){if(c===r.NONE)switch(N.button){case n.mouseButtons.LEFT:c=r.ROTATE;break;case n.mouseButtons.MIDDLE:c=r.ZOOM;break;case n.mouseButtons.RIGHT:c=r.PAN;break}const se=l!==r.NONE?l:c;se===r.ROTATE&&!n.noRotate?(v.copy(T(N.pageX,N.pageY)),x.copy(v)):se===r.ZOOM&&!n.noZoom?(p.copy(b(N.pageX,N.pageY)),y.copy(p)):se===r.PAN&&!n.noPan&&(_.copy(b(N.pageX,N.pageY)),w.copy(_)),n.dispatchEvent(Do)}function F(N){const se=l!==r.NONE?l:c;se===r.ROTATE&&!n.noRotate?(x.copy(v),v.copy(T(N.pageX,N.pageY))):se===r.ZOOM&&!n.noZoom?y.copy(b(N.pageX,N.pageY)):se===r.PAN&&!n.noPan&&w.copy(b(N.pageX,N.pageY))}function X(){c=r.NONE,n.dispatchEvent(No)}function H(N){if(n.enabled!==!1&&n.noZoom!==!0){switch(N.preventDefault(),N.deltaMode){case 2:p.y-=N.deltaY*.025;break;case 1:p.y-=N.deltaY*.01;break;default:p.y-=N.deltaY*25e-5;break}n.dispatchEvent(Do),n.dispatchEvent(No)}}function ee(N){switch(J(N),A.length){case 1:c=r.TOUCH_ROTATE,v.copy(T(A[0].pageX,A[0].pageY)),x.copy(v);break;default:c=r.TOUCH_ZOOM_PAN;const se=A[0].pageX-A[1].pageX,xe=A[0].pageY-A[1].pageY;h=u=Math.sqrt(se*se+xe*xe);const we=(A[0].pageX+A[1].pageX)/2,O=(A[0].pageY+A[1].pageY)/2;_.copy(b(we,O)),w.copy(_);break}n.dispatchEvent(Do)}function re(N){switch(J(N),A.length){case 1:x.copy(v),v.copy(T(N.pageX,N.pageY));break;default:const se=le(N),xe=N.pageX-se.x,we=N.pageY-se.y;h=Math.sqrt(xe*xe+we*we);const O=(N.pageX+se.x)/2,Ae=(N.pageY+se.y)/2;w.copy(b(O,Ae));break}}function ie(N){switch(A.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,v.copy(T(N.pageX,N.pageY)),x.copy(v);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let se=0;se<A.length;se++)if(A[se].pointerId!==N.pointerId){const xe=E[A[se].pointerId];v.copy(T(xe.x,xe.y)),x.copy(v);break}break}n.dispatchEvent(No)}function K(N){n.enabled!==!1&&N.preventDefault()}function fe(N){A.push(N)}function W(N){delete E[N.pointerId];for(let se=0;se<A.length;se++)if(A[se].pointerId==N.pointerId){A.splice(se,1);return}}function J(N){let se=E[N.pointerId];se===void 0&&(se=new pe,E[N.pointerId]=se),se.set(N.pageX,N.pageY)}function le(N){const se=N.pointerId===A[0].pointerId?A[1]:A[0];return E[se.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",K),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",D),n.domElement.removeEventListener("wheel",H),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",P),window.removeEventListener("keydown",U),window.removeEventListener("keyup",k)},this.domElement.addEventListener("contextmenu",K),this.domElement.addEventListener("pointerdown",S),this.domElement.addEventListener("pointercancel",D),this.domElement.addEventListener("wheel",H,{passive:!1}),window.addEventListener("keydown",U),window.addEventListener("keyup",k),this.handleResize(),this.update()}}class e_ extends Ye{constructor(e,t,n=!1,r=!1,s=1e4){const o=new We;super(o,t),this.isMarchingCubes=!0;const a=this,c=new Float32Array(12*3),l=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=n,this.enableColors=r,this.init=function(y){this.resolution=y,this.isolation=80,this.size=y,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const _=s*3;this.positionArray=new Float32Array(_*3);const w=new It(this.positionArray,3);w.setUsage(ys),o.setAttribute("position",w),this.normalArray=new Float32Array(_*3);const A=new It(this.normalArray,3);if(A.setUsage(ys),o.setAttribute("normal",A),this.enableUvs){this.uvArray=new Float32Array(_*2);const E=new It(this.uvArray,2);E.setUsage(ys),o.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(_*3);const E=new It(this.colorArray,3);E.setUsage(ys),o.setAttribute("color",E)}o.boundingSphere=new mi(new L,1)};function h(y,_,w){return y+(_-y)*w}function d(y,_,w,A,E,b,T,S,M,P){const D=(w-T)/(S-T),U=a.normal_cache;c[_+0]=A+D*a.delta,c[_+1]=E,c[_+2]=b,l[_+0]=h(U[y+0],U[y+3],D),l[_+1]=h(U[y+1],U[y+4],D),l[_+2]=h(U[y+2],U[y+5],D),u[_+0]=h(a.palette[M*3+0],a.palette[P*3+0],D),u[_+1]=h(a.palette[M*3+1],a.palette[P*3+1],D),u[_+2]=h(a.palette[M*3+2],a.palette[P*3+2],D)}function f(y,_,w,A,E,b,T,S,M,P){const D=(w-T)/(S-T),U=a.normal_cache;c[_+0]=A,c[_+1]=E+D*a.delta,c[_+2]=b;const k=y+a.yd*3;l[_+0]=h(U[y+0],U[k+0],D),l[_+1]=h(U[y+1],U[k+1],D),l[_+2]=h(U[y+2],U[k+2],D),u[_+0]=h(a.palette[M*3+0],a.palette[P*3+0],D),u[_+1]=h(a.palette[M*3+1],a.palette[P*3+1],D),u[_+2]=h(a.palette[M*3+2],a.palette[P*3+2],D)}function x(y,_,w,A,E,b,T,S,M,P){const D=(w-T)/(S-T),U=a.normal_cache;c[_+0]=A,c[_+1]=E,c[_+2]=b+D*a.delta;const k=y+a.zd*3;l[_+0]=h(U[y+0],U[k+0],D),l[_+1]=h(U[y+1],U[k+1],D),l[_+2]=h(U[y+2],U[k+2],D),u[_+0]=h(a.palette[M*3+0],a.palette[P*3+0],D),u[_+1]=h(a.palette[M*3+1],a.palette[P*3+1],D),u[_+2]=h(a.palette[M*3+2],a.palette[P*3+2],D)}function v(y){const _=y*3;a.normal_cache[_]===0&&(a.normal_cache[_+0]=a.field[y-1]-a.field[y+1],a.normal_cache[_+1]=a.field[y-a.yd]-a.field[y+a.yd],a.normal_cache[_+2]=a.field[y-a.zd]-a.field[y+a.zd])}function m(y,_,w,A,E){const b=A+1,T=A+a.yd,S=A+a.zd,M=b+a.yd,P=b+a.zd,D=A+a.yd+a.zd,U=b+a.yd+a.zd;let k=0;const B=a.field[A],F=a.field[b],X=a.field[T],H=a.field[M],ee=a.field[S],re=a.field[P],ie=a.field[D],K=a.field[U];B<E&&(k|=1),F<E&&(k|=2),X<E&&(k|=8),H<E&&(k|=4),ee<E&&(k|=16),re<E&&(k|=32),ie<E&&(k|=128),K<E&&(k|=64);const fe=t_[k];if(fe===0)return 0;const W=a.delta,J=y+W,le=_+W,N=w+W;fe&1&&(v(A),v(b),d(A*3,0,E,y,_,w,B,F,A,b)),fe&2&&(v(b),v(M),f(b*3,3,E,J,_,w,F,H,b,M)),fe&4&&(v(T),v(M),d(T*3,6,E,y,le,w,X,H,T,M)),fe&8&&(v(A),v(T),f(A*3,9,E,y,_,w,B,X,A,T)),fe&16&&(v(S),v(P),d(S*3,12,E,y,_,N,ee,re,S,P)),fe&32&&(v(P),v(U),f(P*3,15,E,J,_,N,re,K,P,U)),fe&64&&(v(D),v(U),d(D*3,18,E,y,le,N,ie,K,D,U)),fe&128&&(v(S),v(D),f(S*3,21,E,y,_,N,ee,ie,S,D)),fe&256&&(v(A),v(S),x(A*3,24,E,y,_,w,B,ee,A,S)),fe&512&&(v(b),v(P),x(b*3,27,E,J,_,w,F,re,b,P)),fe&1024&&(v(M),v(U),x(M*3,30,E,J,le,w,H,K,M,U)),fe&2048&&(v(T),v(D),x(T*3,33,E,y,le,w,X,ie,T,D)),k<<=4;let se,xe,we,O=0,Ae=0;for(;ea[k+Ae]!=-1;)se=k+Ae,xe=se+1,we=se+2,p(c,l,u,3*ea[se],3*ea[xe],3*ea[we]),Ae+=3,O++;return O}function p(y,_,w,A,E,b){const T=a.count*3;if(a.positionArray[T+0]=y[A],a.positionArray[T+1]=y[A+1],a.positionArray[T+2]=y[A+2],a.positionArray[T+3]=y[E],a.positionArray[T+4]=y[E+1],a.positionArray[T+5]=y[E+2],a.positionArray[T+6]=y[b],a.positionArray[T+7]=y[b+1],a.positionArray[T+8]=y[b+2],a.material.flatShading===!0){const S=(_[A+0]+_[E+0]+_[b+0])/3,M=(_[A+1]+_[E+1]+_[b+1])/3,P=(_[A+2]+_[E+2]+_[b+2])/3;a.normalArray[T+0]=S,a.normalArray[T+1]=M,a.normalArray[T+2]=P,a.normalArray[T+3]=S,a.normalArray[T+4]=M,a.normalArray[T+5]=P,a.normalArray[T+6]=S,a.normalArray[T+7]=M,a.normalArray[T+8]=P}else a.normalArray[T+0]=_[A+0],a.normalArray[T+1]=_[A+1],a.normalArray[T+2]=_[A+2],a.normalArray[T+3]=_[E+0],a.normalArray[T+4]=_[E+1],a.normalArray[T+5]=_[E+2],a.normalArray[T+6]=_[b+0],a.normalArray[T+7]=_[b+1],a.normalArray[T+8]=_[b+2];if(a.enableUvs){const S=a.count*2;a.uvArray[S+0]=y[A+0],a.uvArray[S+1]=y[A+2],a.uvArray[S+2]=y[E+0],a.uvArray[S+3]=y[E+2],a.uvArray[S+4]=y[b+0],a.uvArray[S+5]=y[b+2]}a.enableColors&&(a.colorArray[T+0]=w[A+0],a.colorArray[T+1]=w[A+1],a.colorArray[T+2]=w[A+2],a.colorArray[T+3]=w[E+0],a.colorArray[T+4]=w[E+1],a.colorArray[T+5]=w[E+2],a.colorArray[T+6]=w[b+0],a.colorArray[T+7]=w[b+1],a.colorArray[T+8]=w[b+2]),a.count+=3}this.addBall=function(y,_,w,A,E,b){const T=Math.sign(A);A=Math.abs(A);const S=b!=null;let M=new ye(y,_,w);if(S)try{M=b instanceof ye?b:Array.isArray(b)?new ye(Math.min(Math.abs(b[0]),1),Math.min(Math.abs(b[1]),1),Math.min(Math.abs(b[2]),1)):new ye(b)}catch{M=new ye(y,_,w)}const P=this.size*Math.sqrt(A/E),D=w*this.size,U=_*this.size,k=y*this.size;let B=Math.floor(D-P);B<1&&(B=1);let F=Math.floor(D+P);F>this.size-1&&(F=this.size-1);let X=Math.floor(U-P);X<1&&(X=1);let H=Math.floor(U+P);H>this.size-1&&(H=this.size-1);let ee=Math.floor(k-P);ee<1&&(ee=1);let re=Math.floor(k+P);re>this.size-1&&(re=this.size-1);let ie,K,fe,W,J,le,N,se,xe,we,O;for(fe=B;fe<F;fe++)for(J=this.size2*fe,se=fe/this.size-w,xe=se*se,K=X;K<H;K++)for(W=J+this.size*K,N=K/this.size-_,we=N*N,ie=ee;ie<re;ie++)if(le=ie/this.size-y,O=A/(1e-6+le*le+we+xe)-E,O>0){this.field[W+ie]+=O*T;const Ae=Math.sqrt((ie-k)*(ie-k)+(K-U)*(K-U)+(fe-D)*(fe-D))/P,ze=1-Ae*Ae*Ae*(Ae*(Ae*6-15)+10);this.palette[(W+ie)*3+0]+=M.r*ze,this.palette[(W+ie)*3+1]+=M.g*ze,this.palette[(W+ie)*3+2]+=M.b*ze}},this.addPlaneX=function(y,_){const w=this.size,A=this.yd,E=this.zd,b=this.field;let T,S,M,P,D,U,k,B=w*Math.sqrt(y/_);for(B>w&&(B=w),T=0;T<B;T++)if(U=T/w,P=U*U,D=y/(1e-4+P)-_,D>0)for(S=0;S<w;S++)for(k=T+S*A,M=0;M<w;M++)b[E*M+k]+=D},this.addPlaneY=function(y,_){const w=this.size,A=this.yd,E=this.zd,b=this.field;let T,S,M,P,D,U,k,B,F=w*Math.sqrt(y/_);for(F>w&&(F=w),S=0;S<F;S++)if(U=S/w,P=U*U,D=y/(1e-4+P)-_,D>0)for(k=S*A,T=0;T<w;T++)for(B=k+T,M=0;M<w;M++)b[E*M+B]+=D},this.addPlaneZ=function(y,_){const w=this.size,A=this.yd,E=this.zd,b=this.field;let T,S,M,P,D,U,k,B,F=w*Math.sqrt(y/_);for(F>w&&(F=w),M=0;M<F;M++)if(U=M/w,P=U*U,D=y/(1e-4+P)-_,D>0)for(k=E*M,S=0;S<w;S++)for(B=k+S*A,T=0;T<w;T++)b[B+T]+=D},this.setCell=function(y,_,w,A){const E=this.size2*w+this.size*_+y;this.field[E]=A},this.getCell=function(y,_,w){const A=this.size2*w+this.size*_+y;return this.field[A]},this.blur=function(y=1){const _=this.field,w=_.slice(),A=this.size,E=this.size2;for(let b=0;b<A;b++)for(let T=0;T<A;T++)for(let S=0;S<A;S++){const M=E*S+A*T+b;let P=w[M],D=1;for(let U=-1;U<=1;U+=2){const k=U+b;if(!(k<0||k>=A))for(let B=-1;B<=1;B+=2){const F=B+T;if(!(F<0||F>=A))for(let X=-1;X<=1;X+=2){const H=X+S;if(H<0||H>=A)continue;const ee=E*H+A*F+k,re=w[ee];D++,P+=y*(re-P)/D}}}_[M]=P}},this.reset=function(){for(let y=0;y<this.size3;y++)this.normal_cache[y*3]=0,this.field[y]=0,this.palette[y*3]=this.palette[y*3+1]=this.palette[y*3+2]=0},this.update=function(){this.count=0;const y=this.size-2;for(let _=1;_<y;_++){const w=this.size2*_,A=(_-this.halfsize)/this.halfsize;for(let E=1;E<y;E++){const b=w+this.size*E,T=(E-this.halfsize)/this.halfsize;for(let S=1;S<y;S++){const M=(S-this.halfsize)/this.halfsize,P=b+S;m(M,T,A,P,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>s&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const t_=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),ea=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function Jo(i,e){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle=e;const r=i.length>2?34:i.length>1?44:58;n.font=`700 ${r}px Segoe UI, Arial, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(i,64,64);const s=new Lx(t);s.colorSpace=jt;const o=new hh({map:s,transparent:!0,alphaTest:.2,depthTest:!0,depthWrite:!1});o.toneMapped=!1;const a=new Cx(o);return a.scale.set(.68,.68,.68),a.renderOrder=20,a}function Qo(i,e,t,n){const r=e.clone().sub(i),s=r.length(),o=new Vt({color:n});o.toneMapped=!1;const a=new Ye(new Cr(t,t,s,48,1,!1),o);return a.position.copy(i).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new L(0,1,0),r.normalize()),a}function ec(i,e,t,n,r){const s=new Vt({color:r});s.toneMapped=!1;const o=new Ye(new Dc(n,t,96,1,!1),s);return o.position.copy(e),o.quaternion.setFromUnitVectors(new L(0,1,0),i.clone().normalize()),o}function xa(i,e=.2,t=.9){const n=new pt;n.userData.isAxis=!0,n.name="axis_group_auto";const r=i*t,s=i*.02,o=r*.1,a=s*3,c=[{dir:new L(1,0,0),color:16711680,label:"x",labelColor:"#ff0000"},{dir:new L(0,1,0),color:47400,label:"y",labelColor:"#00e63a"},{dir:new L(0,0,1),color:15785216,label:"z",labelColor:"#fff000"}];for(const l of c){const u=l.dir.clone().multiplyScalar(-r),h=l.dir.clone().multiplyScalar(r);n.add(Qo(u,h,s,l.color)),n.add(ec(l.dir,l.dir.clone().multiplyScalar(r*1.01),o,a,l.color));const d=Jo(l.label,l.labelColor);d.scale.setScalar(Math.max(.98,Math.min(1.18,i*.23))),l.label==="x"&&d.position.set(r*1.2,-e,0),l.label==="y"&&d.position.set(-e,r*1.2,0),l.label==="z"&&d.position.set(-e,-e,r*1.2),n.add(d)}return n}function n_(i,e,t,n){const r=new pt,s=Math.max(.018,i*.006),o=i*.08,a=s*3.2,c=new L(0,0,t),l=new L(i,0,t),u=new L(0,0,t+e);r.add(Qo(c,l,s,15785216)),r.add(ec(new L(1,0,0),l,o,a,15785216)),r.add(Qo(c,u,s,22527)),r.add(ec(new L(0,0,1),u,o,a,22527));const h=Jo("r","#fff000");h.scale.setScalar(.48),h.position.set(i+o*.85,-i*.045,t),r.add(h);const d=Jo(n==="R2"?"R*R":n,"#0057ff");return d.scale.setScalar(.58),d.position.set(-i*.08,0,t+e+o*.9),r.add(d),r}const ot=new ls;ot.background=new ye(1120295);function ki(i,e){const t=new Qx(i,e);return t.rotateSpeed=3.2,t.zoomSpeed=1.15,t.panSpeed=.65,t.staticMoving=!1,t.dynamicDampingFactor=.12,t.noRotate=!1,t.noZoom=!1,t.noPan=!1,t}function Uo(i){return i.pointerType==="mouse"&&(i.button===2||(i.buttons&2)===2)}function vn(i){var e;i&&(i.enabled=!0,i.noRotate=!1,i.noZoom=!1,i.noPan=!1,(e=i.handleResize)==null||e.call(i),i.update())}function ri(i){var c,l,u,h,d;if(!i)return;const e=i.object,t=(c=e==null?void 0:e.position)==null?void 0:c.clone(),n=(l=e==null?void 0:e.quaternion)==null?void 0:l.clone(),r=(u=e==null?void 0:e.up)==null?void 0:u.clone(),s=e==null?void 0:e.zoom,o=(h=i.target)==null?void 0:h.clone(),a=i.staticMoving;typeof i.reset=="function"&&t&&o&&(i.staticMoving=!0,i.reset(),e.position.copy(t),n&&e.quaternion.copy(n),r&&e.up.copy(r),typeof s=="number"&&(e.zoom=s),i.target.copy(o),(d=e.updateProjectionMatrix)==null||d.call(e),i.staticMoving=a),vn(i)}function ds(i,e){const t=i==null?void 0:i.querySelector("canvas");if(!t||!e)return;const n=()=>typeof e=="function"?e():e;t.addEventListener("pointerdown",r=>{if(Uo(r)){r.preventDefault(),r.stopImmediatePropagation(),ri(n());return}vn(n())},{capture:!0}),t.addEventListener("pointermove",r=>{Uo(r)&&(r.preventDefault(),r.stopImmediatePropagation())},{capture:!0}),t.addEventListener("pointerup",r=>{Uo(r)&&(r.preventDefault(),r.stopImmediatePropagation()),vn(n())},{capture:!0}),t.addEventListener("pointercancel",()=>ri(n()),{capture:!0}),t.addEventListener("lostpointercapture",()=>ri(n())),t.addEventListener("mouseenter",()=>vn(n())),t.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopImmediatePropagation(),ri(n())},{capture:!0})}const st=new Fi(-5,5,5,-5,.1,1e3),rn=new cs({antialias:!0,preserveDrawingBuffer:!0});rn.setPixelRatio(Math.min(window.devicePixelRatio,2));rn.localClippingEnabled=!0;g.viewer.appendChild(rn.domElement);let Te=ki(st,rn.domElement);const Dt=new ls,at=new Fi(-5,5,5,-5,.1,1e3),gi=new cs({antialias:!0,preserveDrawingBuffer:!0});gi.setPixelRatio(Math.min(window.devicePixelRatio,2));gi.localClippingEnabled=!0;g.angularViewer.appendChild(gi.domElement);let Ie=ki(at,gi.domElement);const Gn=new ls,Et=new Fi(-5,5,5,-5,.1,1e3);Et.up.set(0,0,1);const Pr=new cs({antialias:!0,preserveDrawingBuffer:!0});Pr.setPixelRatio(Math.min(window.devicePixelRatio,2));g.projectionViewer.appendChild(Pr.domElement);const hn=ki(Et,Pr.domElement),Wn=new ls,Ct=new Fi(-5,5,5,-5,.1,1e3),Lr=new cs({antialias:!0,preserveDrawingBuffer:!0});Lr.setPixelRatio(Math.min(window.devicePixelRatio,2));g.radialViewer.appendChild(Lr.domElement);const Ft=ki(Ct,Lr.domElement);ds(g.viewer,()=>Te);ds(g.angularViewer,()=>Ie);ds(g.projectionViewer,hn);ds(g.radialViewer,Ft);function _a(){ri(Te),ri(Ie),ri(hn),ri(Ft)}function qu(){vn(Te),vn(Ie),vn(hn),vn(Ft)}function i_(){var t,n,r;const i=((t=Te==null?void 0:Te.target)==null?void 0:t.clone())??new L,e={rotateSpeed:(Te==null?void 0:Te.rotateSpeed)??3.2,zoomSpeed:(Te==null?void 0:Te.zoomSpeed)??1.15,panSpeed:(Te==null?void 0:Te.panSpeed)??.65,staticMoving:(Te==null?void 0:Te.staticMoving)??!1,dynamicDampingFactor:(Te==null?void 0:Te.dynamicDampingFactor)??.12,noRotate:(Te==null?void 0:Te.noRotate)??!1,noZoom:(Te==null?void 0:Te.noZoom)??!1,noPan:(Te==null?void 0:Te.noPan)??!1};(n=Te==null?void 0:Te.dispose)==null||n.call(Te),Te=ki(st,rn.domElement),Object.assign(Te,e),Te.target.copy(i),(r=Te.handleResize)==null||r.call(Te),Te.update()}function r_(){var t,n,r;const i=((t=Ie==null?void 0:Ie.target)==null?void 0:t.clone())??new L,e={rotateSpeed:(Ie==null?void 0:Ie.rotateSpeed)??3.2,zoomSpeed:(Ie==null?void 0:Ie.zoomSpeed)??1.15,panSpeed:(Ie==null?void 0:Ie.panSpeed)??.65,staticMoving:(Ie==null?void 0:Ie.staticMoving)??!1,dynamicDampingFactor:(Ie==null?void 0:Ie.dynamicDampingFactor)??.12,noRotate:!1,noZoom:!1,noPan:!1};(n=Ie==null?void 0:Ie.dispose)==null||n.call(Ie),Ie=ki(at,gi.domElement),Object.assign(Ie,e),Ie.target.copy(i),(r=Ie.handleResize)==null||r.call(Ie),Ie.update()}const zc=new Bi(16777215,1.45);zc.position.set(0,0,1);st.add(zc);st.add(new Bi(16777215,.22));ot.add(st);ot.add(new us(16777215,.55));ot.add(new _h(16777215,1447446,.45));const Bc=new Bi(16777215,1.45);Bc.position.set(0,0,1);at.add(Bc);at.add(new Bi(16777215,.22));Dt.add(at);Dt.add(new us(16777215,.55));Dt.add(new _h(16777215,1447446,.45));const kc=new Bi(16777215,1.7);kc.position.set(0,0,80);Gn.add(kc);Gn.add(new us(16777215,.65));const Vc=new Bi(16777215,1.8);Vc.position.set(0,-40,60);Wn.add(Vc);Wn.add(new us(16777215,.62));for(const i of[rn,gi,Pr,Lr])i.outputColorSpace=jt,i.toneMapping=kd,i.toneMappingExposure=1.16;zc.intensity=1.45;Bc.intensity=1.45;kc.intensity=1.88;Vc.intensity=1.92;let Li=null,Di=null;function s_(){const i=ot.getObjectByName("mainAxesGroup");i&&ot.remove(i);const e=Dt.getObjectByName("angularAxesGroup");e&&Dt.remove(e),Li=xa(4.5,.2,.9),Li.name="mainAxesGroup",Di=xa(4.2,.1,.9),Di.name="angularAxesGroup",ot.add(Li),Dt.add(Di)}function a_(i){Di=i}function o_(){return Di}function tc(i,e){Li&&(Li.visible=i,e!==void 0&&Li.scale.setScalar(e)),Di&&(Di.visible=i),ot.traverse(t=>{t.userData&&t.userData.isAxis&&(t.visible=i,e!==void 0&&t===Li&&t.scale.setScalar(e))}),Dt.traverse(t=>{t.userData&&t.userData.isAxis&&(t.visible=i)})}const Ke={drawing:!1,erasing:!1,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,strokes:[],currentStroke:null};function vh(i){const e=g.sketchCanvas.getBoundingClientRect();return{x:(i.clientX-e.left)/Math.max(1,e.width),y:(i.clientY-e.top)/Math.max(1,e.height)}}function Xu(i,e,t,n){if(!e.points.length)return;i.save(),i.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",i.strokeStyle=e.color,i.lineWidth=e.size,i.lineCap="round",i.lineJoin="round",i.beginPath();const r=e.points[0];i.moveTo(r.x*t,r.y*n);for(const s of e.points.slice(1))i.lineTo(s.x*t,s.y*n);e.points.length===1&&i.lineTo(r.x*t+.01,r.y*n+.01),i.stroke(),i.restore()}function Ir(){const i=g.sketchCanvas;if(!i)return;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);for(const t of Ke.strokes)Xu(e,t,i.width,i.height);Ke.currentStroke&&Xu(e,Ke.currentStroke,i.width,i.height)}function c_(){const i=g.sketchCanvas;if(!i)return;const e=i.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),n=Math.max(320,Math.floor(e.width*t)),r=Math.max(220,Math.floor(e.height*t));(i.width!==n||i.height!==r)&&(i.width=n,i.height=r,Ir())}function Oo(i){var e,t;Ke.erasing=i,(e=g.sketchPen)==null||e.classList.toggle("active",!i),(t=g.sketchEraser)==null||t.classList.toggle("active",i)}function l_(i){var e,t,n,r;g.sketchCanvas&&(i.preventDefault(),(t=(e=g.sketchCanvas).setPointerCapture)==null||t.call(e,i.pointerId),Ke.drawing=!0,Ke.currentStroke={color:((n=g.sketchColor)==null?void 0:n.value)||"#ffffff",size:Number(((r=g.sketchSize)==null?void 0:r.value)||5)*Math.min(window.devicePixelRatio||1,2),mode:Ke.erasing?"erase":"draw",points:[vh(i)]},Ir())}function u_(i){!Ke.drawing||!Ke.currentStroke||(i.preventDefault(),Ke.currentStroke.points.push(vh(i)),Ir())}function Yu(i){!Ke.drawing||!Ke.currentStroke||(i.preventDefault(),Ke.strokes.push(Ke.currentStroke),Ke.currentStroke=null,Ke.drawing=!1,Ir())}function d_(){var i,e,t,n,r;g.sketchCanvas&&(g.sketchCanvas.addEventListener("pointerdown",l_),g.sketchCanvas.addEventListener("pointermove",u_),g.sketchCanvas.addEventListener("pointerup",Yu),g.sketchCanvas.addEventListener("pointercancel",Yu),(i=g.sketchPen)==null||i.addEventListener("click",()=>Oo(!1)),(e=g.sketchEraser)==null||e.addEventListener("click",()=>Oo(!0)),(t=g.sketchClear)==null||t.addEventListener("click",()=>{Ke.strokes=[],Ke.currentStroke=null,Ir()}),(r=(n=g.sketchWindow)==null?void 0:n.querySelector(".window-title"))==null||r.addEventListener("pointerdown",f_),window.addEventListener("pointermove",p_),window.addEventListener("pointerup",$u),window.addEventListener("pointercancel",$u),Oo(!1))}let qr={};function h_(i){qr=i}function nc(){g.sketchWindow&&(g.sketchWindow.classList.remove("closed","minimized"),g.sketchWindow.style.zIndex="120",qr.updateWindowControlLabels&&qr.updateWindowControlLabels(g.sketchWindow),qr.resizeAfterLayoutChange&&qr.resizeAfterLayoutChange())}function f_(i){var n,r;const e=g.sketchWindow;if(!e||e.classList.contains("maximized")||i.target.closest(".window-controls")||i.pointerType!=="mouse"&&!i.isPrimary)return;i.preventDefault();const t=e.getBoundingClientRect();Ke.dragging=!0,Ke.dragPointerId=i.pointerId,Ke.dragOffsetX=i.clientX-t.left,Ke.dragOffsetY=i.clientY-t.top,(r=(n=i.currentTarget)==null?void 0:n.setPointerCapture)==null||r.call(n,i.pointerId),e.style.zIndex="130"}function p_(i){const e=g.sketchWindow;if(!e||!Ke.dragging||Ke.dragPointerId!==null&&i.pointerId!==Ke.dragPointerId)return;i.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),n=window.innerHeight-32,r=Math.max(0,Math.min(t,i.clientX-Ke.dragOffsetX)),s=Math.max(0,Math.min(n,i.clientY-Ke.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${s}px`,e.style.right="auto",e.style.bottom="auto"}function $u(){Ke.dragging=!1,Ke.dragPointerId=null,_a()}const m_={strokes:[]};function g_(i,e,t,n){if(!e.points.length)return;i.save(),i.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",i.strokeStyle=e.color,i.lineWidth=e.size,i.lineCap="round",i.lineJoin="round",i.beginPath();const r=e.points[0];i.moveTo(r.x*t,r.y*n);for(const s of e.points.slice(1))i.lineTo(s.x*t,s.y*n);e.points.length===1&&i.lineTo(r.x*t+.01,r.y*n+.01),i.stroke(),i.restore()}function x_(){const i=g.predictCanvas;if(!i)return;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);for(const t of m_.strokes)g_(e,t,i.width,i.height)}function __(){const i=g.predictCanvas;if(!i)return;const e=i.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),n=Math.max(10,Math.floor(e.width*t)),r=Math.max(10,Math.floor(e.height*t));(i.width!==n||i.height!==r)&&(i.width=n,i.height=r,x_())}const ta=[1];function si(i){if(i<0)return NaN;for(let e=ta.length;e<=i;e+=1)ta[e]=ta[e-1]*e;return ta[i]}function yh(i,e,t){const n=Math.max(1,Math.min(6,Math.round(i))),r=Math.max(0,Math.min(n-1,Math.round(e))),s=Math.max(-r,Math.min(r,Math.round(t)));return{n,l:r,m:s}}function En(i,e,t){if(e===0)return`${i}s`;if(e===1)return`${i}${t===0?"Pz":t>0?"Px":"Py"}`;if(e===2){if(t===0)return`${i}Dz2`;if(t===1)return`${i}Dxz`;if(t===-1)return`${i}Dyz`;if(t===2)return`${i}Dx2-y2`;if(t===-2)return`${i}Dxy`}if(e===3){if(t===0)return`${i}Fz3`;if(t===1)return`${i}Fxz2`;if(t===-1)return`${i}Fyz2`;if(t===2)return`${i}Fz(x2-y2)`;if(t===-2)return`${i}Fxyz`;if(t===3)return`${i}Fx(x2-3y2)`;if(t===-3)return`${i}Fy(3x2-y2)`}if(e===4){if(t===0)return`${i}Gz4`;if(t===1)return`${i}Gxz3`;if(t===-1)return`${i}Gyz3`;if(t===2)return`${i}Gz2(x2-y2)`;if(t===-2)return`${i}Gxyz2`;if(t===3)return`${i}Gxz(x2-3y2)`;if(t===-3)return`${i}Gyz(3x2-y2)`;if(t===4)return`${i}Gx4-6x2y2+y4`;if(t===-4)return`${i}Gxy(x2-y2)`}if(e===5){if(t===0)return`${i}Hz5`;if(t===1)return`${i}Hxz4`;if(t===-1)return`${i}Hyz4`;if(t===2)return`${i}Hz3(x2-y2)`;if(t===-2)return`${i}Hxyz3`;if(t===3)return`${i}Hz(x4-6x2y2+y4)`;if(t===-3)return`${i}Hxyz(x2-y2)`;if(t===4)return`${i}Hxz(x2-y2)`;if(t===-4)return`${i}Hyz(x2-y2)`;if(t===5)return`${i}Hx(x4-10x2y2+5y4)`;if(t===-5)return`${i}Hy(5x4-10x2y2+y4)`}return`${i}${["s","P","D","F","G","H"][e]??`L${e}`}${t}`}function v_(i,e,t){let n=0;for(let r=0;r<=i;r+=1){const s=(r%2===0?1:-1)*si(i+e)/(si(i-r)*si(e+r)*si(r));n+=s*t**r}return n}function y_(i,e,t){const n=Math.abs(e);let r=1;if(n>0){const a=Math.sqrt(Math.max(0,1-t*t));let c=1;for(let l=1;l<=n;l+=1)r*=-c*a,c+=2}if(i===n)return r;let s=t*(2*n+1)*r;if(i===n+1)return s;let o=0;for(let a=n+2;a<=i;a+=1)o=((2*a-1)*t*s-(a+n-1)*r)/(a-n),r=s,s=o;return o}function ic(i,e,t,n){const r=Math.sin(t),s=Math.cos(t),o=Math.cos(n),a=Math.sin(n);if(i===1){const h=Math.sqrt(3/(4*Math.PI));return e===0?h*s:e>0?h*r*o:h*r*a}if(i===2){if(e===0)return Math.sqrt(5/Math.PI)/4*(3*s*s-1);if(e===1)return Math.sqrt(15/Math.PI)/2*r*s*o;if(e===-1)return Math.sqrt(15/Math.PI)/2*r*s*a;if(e===2)return Math.sqrt(15/Math.PI)/4*r*r*Math.cos(2*n);if(e===-2)return Math.sqrt(15/Math.PI)/4*r*r*Math.sin(2*n)}const c=Math.abs(e),l=Math.sqrt((2*i+1)/(4*Math.PI)*(si(i-c)/si(i+c))),u=y_(i,c,Math.cos(t));return e>0?Math.sqrt(2)*l*u*Math.cos(c*n):e<0?Math.sqrt(2)*l*u*Math.sin(c*n):l*u}function ra(i,e,t){const n=Math.abs(e);let r=1;for(let l=2;l<=2*n;l+=2)r*=(1-t*t)*((l+1)/l);let s=Math.sqrt(Math.max(0,r/2));if(i===n)return s;let o=Math.sqrt(2*n+3)*t*s;if(i===n+1)return o;let a=0,c=Math.sqrt((4*n*n+8*n+3)/(2*n+1));for(let l=n+2;l<=i;l+=1){const u=Math.sqrt((4*l*l-1)/(l*l-n*n));a=o*t*u-s*u/c,s=o,o=a,c=u}return a}function ci(i,e,t,n){const r=2*t*n/i;return Math.sqrt((2*t/i)**3*(si(i-e-1)/(2*i*si(i+e))))*Math.exp(-r/2)*r**e*v_(i-e-1,2*e+1,r)}function Qt({n:i,l:e,m:t,z:n},r,s,o){const a=Math.hypot(r,s,o);if(a<1e-9)return e===0?ci(i,e,n,0)*ic(e,t,0,0):0;const c=Math.acos(o/a),l=Math.atan2(s,r);return ci(i,e,n,a)*ic(e,t,c,l)}function sa({n:i,l:e,m:t,z:n},r,s,o){const a=Math.hypot(r,s),c=Math.hypot(a,o),l=c<.01?0:o/c,u=ci(i,e,n,c)*ra(e,t,l);let h=1/Math.sqrt(Math.PI);if(t!==0){const d=a>.001?t*Math.atan2(s,r):Math.PI/2;h*=t>0?Math.cos(d):-Math.sin(d)}return u*h}function M_(i){return i>=7?120:i===6?100:i===5?90:i===4?80:i===3?70:i===2?60:50}const ju=new Map;function Vi(i,e=.8){const t=`${i.n}|${i.l}|${i.z}|${e}`,n=ju.get(t);if(n)return{...n};let r=0;const s=.002;let o=0,a=0;for(;a<2e5;){const x=Xr(i,o),v=Xr(i,o+s/2),m=Xr(i,o+s);if(r+=(x+4*v+m)/6,o+=s,a+=1,s*r>e)break}const c=o*1.5,l=M_(i.n),h=2*Math.ceil(c)/l*l/2,d=Math.sqrt(Xr(i,o)/(4*Math.PI*o*o))||1e-4,f={radius:h,iso:Math.max(1e-4,d),gridSize:l,leastRadius:c};return ju.set(t,f),{...f}}function Xr(i,e){return e*e*ci(i.n,i.l,i.z,e)**2}const Zu=new Map;function rc(i){const e=`${i.n}|${i.l}|${i.z}`,t=Zu.get(e);if(t!=null)return t;const{leastRadius:n}=Vi(i),r=i.n===1&&i.l===0?2:20;let s=n;for(let a=.1;a<=n+r&&(s=a,!(a>n&&Xr(i,a)<1e-9));a+=.1);const o=Math.max(1,s);return Zu.set(e,o),o}const Ku=new Map;function Hc(i){const e=`${i.n}|${i.l}|${i.z}`,t=Ku.get(e);if(t)return[...t];const n=Math.max(0,i.n-i.l-1);if(!n)return[];const r=Math.max(rc(i),Vi(i).leastRadius*1.2),s=Math.max(900,i.n*520),o=[];let a=1e-5,c=ci(i.n,i.l,i.z,a);for(let l=1;l<=s;l+=1){const u=r*l/s,h=ci(i.n,i.l,i.z,u);if(Number.isFinite(h)){if(Math.abs(c)>1e-14&&Math.abs(h)>1e-14&&c*h<0){let d=a,f=u,x=c;for(let m=0;m<36;m+=1){const p=(d+f)/2,y=ci(i.n,i.l,i.z,p);x*y<=0?f=p:(d=p,x=y)}const v=(d+f)/2;if(o.some(m=>Math.abs(m-v)<.02)||o.push(v),o.length>=n)break}a=u,c=h}}return o.sort((l,u)=>l-u),Ku.set(e,o),[...o]}function Gc(i){const e=Math.abs(i.m),t=Math.max(0,i.l-e),n=[];if(t>0){const s=Math.max(720,i.l*300),o=1e-7,a=d=>{d<=1e-5||d>=Math.PI-1e-5||n.some(f=>Math.abs(f-d)<.01)||n.push(d)};let c=1e-5,l=ra(i.l,i.m,Math.cos(c)),u=Math.abs(l)>o?c:null,h=Math.abs(l)>o?l:null;for(let d=1;d<s;d+=1){const f=Math.PI*d/s,x=ra(i.l,i.m,Math.cos(f));if(Math.abs(x)<=o){if(a(f),n.length>=t)break;c=f,l=x;continue}if(h!=null&&h*x<0){let v=u,m=f,p=h;for(let _=0;_<34;_+=1){const w=(v+m)/2,A=ra(i.l,i.m,Math.cos(w));p*A<=0?m=w:(v=w,p=A)}const y=(v+m)/2;if(a(y),n.length>=t)break}c=f,l=x,u=f,h=x}}const r=[];if(e>0)for(let s=0;s<e;s+=1){const o=i.m>0?(s+.5)*Math.PI/e:s*Math.PI/e;r.push(o)}return{polar:n,azimuthal:r}}function va(i,e){return`${i-e-1} radial, ${e} angular`}function S_(i,e){const{radius:t}=e,n=Math.min(42,Math.max(24,Math.round(e.density*.58))),r=[],s=[],o=t*2/(n-1),a=t*t,c=35e4;let l=0;for(let x=0;x<n;x+=1){const v=-t+x*o;for(let m=0;m<n;m+=1){const p=-t+m*o;for(let y=0;y<n;y+=1){const _=-t+y*o;if(v*v+p*p+_*_>a||!Ju(e.cutaway,v,p,_))continue;const w=Qt(i,v,p,_);l=Math.max(l,Math.abs(w))}}}const u=l||1;let h=(i.n*73856093^i.l*19349663^(i.m+8)*83492791^Math.round(t*1e3))>>>0;const d=()=>(h=1664525*h+1013904223>>>0,h/4294967296),f=Math.min(6e6,Math.max(72e4,e.density*e.density*600));for(let x=0;x<f;x+=1){const v=(d()*2-1)*t,m=(d()*2-1)*t,p=(d()*2-1)*t;if(v*v+m*m+p*p>a||!Ju(e.cutaway,v,m,p))continue;const y=Qt(i,v,m,p),_=Math.min(1,(Math.abs(y)/u)**2);if(d()>_)continue;const w=y>=0?r:s;if(!(w.length/3>=c)&&(w.push(v,m,p),r.length/3>=c&&s.length/3>=c))break}return{positive:r,negative:s}}function Ju(i,e,t,n){return i==="quarter"?t<=0&&n<=0:i==="eighth"?e<=0&&t<=0&&n<=0:i==="threeQuarter"?!(t>0&&n>0):!0}function w_(i,e,t,n){const s=t.radius/140;let o=0,a=n*Qt(i,0,0,0)-t.iso,c=null;for(let l=1;l<=140;l+=1){const u=l*s,h=n*Qt(i,e.x*u,e.y*u,e.z*u)-t.iso;if(a<=0&&h>=0){let d=o,f=u;for(let x=0;x<12;x+=1){const v=(d+f)/2;n*Qt(i,e.x*v,e.y*v,e.z*v)-t.iso>=0?f=v:d=v}c=f}if(a>=0&&h<=0&&c!==null){let d=o,f=u;for(let x=0;x<12;x+=1){const v=(d+f)/2;n*Qt(i,e.x*v,e.y*v,e.z*v)-t.iso>=0?d=v:f=v}c=d}o=u,a=h}return c}function E_(i,e){const t=e.thetaSegments??58,n=e.phiSegments??96;function r(s){const o=[],a=[],c=[];for(let l=0;l<=t;l+=1){const u=Math.PI*l/t,h=[],d=Math.sin(u),f=Math.cos(u);for(let x=0;x<=n;x+=1){const v=Math.PI*2*x/n,m={x:d*Math.cos(v),y:d*Math.sin(v),z:f},p=w_(i,m,e,s);p===null||!Number.isFinite(p)?h.push(-1):(h.push(o.length/3),o.push(m.x*p,m.y*p,m.z*p))}c.push(h)}for(let l=0;l<t;l+=1)for(let u=0;u<n;u+=1){const h=c[l][u],d=c[l+1][u],f=c[l+1][u+1],x=c[l][u+1];h>=0&&d>=0&&f>=0&&a.push(h,d,f),h>=0&&f>=0&&x>=0&&a.push(h,f,x)}return{vertices:o,indices:a}}return{positive:r(1),negative:r(-1)}}function b_(i){const e=En(i.n,i.l,i.m),t=Math.max(0,i.n-i.l-1),n=i.l,r=Vv(i.l,i.m),s=pd(i.n),o=pd(i.l),a=kv(i.m);return{label:e,radialNodes:t,angularNodes:n,main:`Ψ(r,θ,φ) = R${s}${o}(r) · Y${o}${a}(θ,φ)`,radial:`R${s}${o}(r) 决定离原子核不同距离处的振幅变化；当前轨道有 ${t} 个径向节点。`,angular:`${r} 对应的 Y${o}${a}(θ,φ) 决定轨道朝向、节面和正负相位；当前有 ${n} 个角向节点。`,visual:"原子轨道窗口显示 Ψ=+c 和 Ψ=-c 的等值面；轨道投影是在选定平面上看 Ψ；径向分布函数看 r²R²；电子云来自 |Ψ|² 的概率分布。"}}let Ht={resizeAfterLayoutChange:()=>{},renderOrbital:()=>{},applyPreset:()=>{},readParams:()=>({n:1,l:0,m:0}),downloadBlob:(i,e)=>{},getCloudPositiveObject:()=>null,getCloudNegativeObject:()=>null,getIsoMeshes:()=>[]};function A_(i){Object.assign(Ht,i)}function Wc(){return[{focus:"cloud",title:"第一步：电子云的形成",text:"根据概率密度分布，电子在原子核周围逐渐显现，形成浓密的电子云。"},{focus:"isosurface",title:"第二步：原子轨道实体化",text:"从电子云中提取特定概率的等势面，形成光滑的三维原子轨道轮廓。"},{focus:"slice_projection",title:"第三步：动态切片与投影",text:"对原子轨道进行切片，并将其截面映射为 2D 与 3D 的概率密度投影图。"},{focus:"formula",title:"第四步：径向与角向推导",text:"结合波函数公式，揭示轨道的径向分布函数与角向球面谐和函数构成。"}]}let kn=!1,Zr=!1,is=0,li=6e3,Zt={step:0,localProgress:0},Fo=[];function Qu(){Zr||(kn=!kn,kn&&(is=performance.now()-(Zt.step*li+Zt.localProgress*li)))}function sc(){var s;if(kn)return;document.body.classList.add("cinematic-mode"),g.mainWindow&&(g.mainWindow.style.setProperty("position","fixed","important"),g.mainWindow.style.setProperty("top","0","important"),g.mainWindow.style.setProperty("left","0","important"),g.mainWindow.style.setProperty("width","100vw","important"),g.mainWindow.style.setProperty("height","100vh","important"),g.mainWindow.style.setProperty("z-index","1000","important")),g.viewer&&(g.viewer.style.setProperty("position","absolute","important"),g.viewer.style.setProperty("top","0","important"),g.viewer.style.setProperty("left","0","important"),g.viewer.style.setProperty("width","100%","important"),g.viewer.style.setProperty("height","100%","important"),g.viewer.style.setProperty("background","#000000","important"));const i=(s=g.viewer)==null?void 0:s.querySelector("canvas");i&&(i.style.setProperty("width","100%","important"),i.style.setProperty("height","100%","important")),Ht.resizeAfterLayoutChange();const e=document.getElementById("cinematicOverlay");e&&e.classList.add("visible"),Te.autoRotate=!0,Te.autoRotateSpeed=.8,g.cloud.checked=!0,g.wireframe.checked=!0,g.smooth.checked=!0,g.projection3d.checked=!0,Ht.renderOrbital();const t=Ht.getCloudPositiveObject(),n=Ht.getCloudNegativeObject(),r=Ht.getIsoMeshes();t&&(t.visible=!1),n&&(n.visible=!1),r.forEach(o=>o.traverse(a=>{a.isMesh&&(a.material.opacity=0)})),kn=!0,li=6e3,is=performance.now(),Zt.step=0,Mh()}function ac(){kn=!1,document.body.classList.remove("cinematic-mode"),g.mainWindow&&(g.mainWindow.style.removeProperty("position"),g.mainWindow.style.removeProperty("top"),g.mainWindow.style.removeProperty("left"),g.mainWindow.style.removeProperty("width"),g.mainWindow.style.removeProperty("height"),g.mainWindow.style.removeProperty("z-index")),g.viewer&&(g.viewer.style.removeProperty("position"),g.viewer.style.removeProperty("top"),g.viewer.style.removeProperty("left"),g.viewer.style.removeProperty("width"),g.viewer.style.removeProperty("height"),g.viewer.style.removeProperty("background")),Ht.resizeAfterLayoutChange();const i=document.getElementById("cinematicOverlay");i&&i.classList.remove("visible"),Te.autoRotate=!1,Ht.applyPreset()}function Mh(){const e=Wc()[Zt.step];if(!e)return;document.getElementById("cinematicTitle").textContent=e.title,document.getElementById("cinematicText").textContent=e.text;const t=document.getElementById("cinematicFormula");if(Zt.step===3){t.classList.add("visible");const n=Ht.readParams(),r=b_(n);document.getElementById("cinematicFormulaEq").innerHTML=r.main,document.getElementById("cinematicFormulaRadial").innerHTML="R(r): 径向部分",document.getElementById("cinematicFormulaAngular").innerHTML="Y(θ,φ): 角向部分"}else t.classList.remove("visible")}function T_(i){var u,h;if(!kn)return;const e=Wc().length,t=i-is;let n=Math.floor(t/li);n>=e?Zr?(n=e-1,Zt.localProgress=1):(is=i,n=0):Zt.localProgress=t%li/li,n!==Zt.step&&(Zt.step=n,Mh());const r=Zt.localProgress,s=Zt.step,o=r*r*(3-2*r),a=Ht.getCloudPositiveObject(),c=Ht.getCloudNegativeObject(),l=Ht.getIsoMeshes();if(s===0){if(a){a.visible=!0;const d=((u=a.userData.probs)==null?void 0:u.length)||0;a.geometry.setDrawRange(0,Math.floor(d*o)),a.material.opacity=Math.min(1,o*2)}if(c){c.visible=!0;const d=((h=c.userData.probs)==null?void 0:h.length)||0;c.geometry.setDrawRange(0,Math.floor(d*o)),c.material.opacity=Math.min(1,o*2)}l.forEach(d=>d.traverse(f=>{f.isMesh&&(f.material.opacity=0)}))}else s===1?(a&&(a.visible=!0,a.geometry.setDrawRange(0,1/0),a.material.opacity=1-o),c&&(c.visible=!0,c.geometry.setDrawRange(0,1/0),c.material.opacity=1-o),l.forEach(d=>d.traverse(f=>{f.name==="integratedProjectionMountain"?f.material.opacity=0:f.isMesh&&(f.material.opacity=o)}))):s===2?(a&&(a.visible=!1),c&&(c.visible=!1),l.forEach(d=>d.traverse(f=>{if(f.name==="integratedProjectionMountain"){f.material.opacity=o;const x=f.userData.plane||"xoy";x==="xoy"?f.scale.set(1,1,.01+o*.99):x==="xoz"?f.scale.set(1,.01+o*.99,1):x==="yoz"&&f.scale.set(.01+o*.99,1,1)}else f.isMesh&&(f.material.opacity=1)}))):s===3&&(a&&(a.visible=!1),c&&(c.visible=!1),l.forEach(d=>d.traverse(f=>{f.name==="integratedProjectionMountain"?(f.material.opacity=1,f.scale.set(1,1,1)):f.isMesh&&(f.material.opacity=1)})))}async function ed(){const i=g.viewer.querySelector("canvas");if(!(i!=null&&i.captureStream)||typeof MediaRecorder>"u"){alert("当前浏览器不支持直接导出视频。");return}if(Zr)return;kn||sc(),Zr=!0,li=4e3,is=performance.now(),Zt.step=0,Fo=[];const e=i.captureStream(30),t=new MediaRecorder(e,{videoBitsPerSecond:6e6});document.getElementById("cinematicExportBtn").textContent="录制中...",document.getElementById("cinematicPlayBtn").disabled=!0,document.getElementById("cinematicExitBtn").disabled=!0;const n=new Promise((c,l)=>{t.ondataavailable=u=>{var h;(h=u.data)!=null&&h.size&&Fo.push(u.data)},t.onerror=()=>l(t.error),t.onstop=()=>c(new Blob(Fo,{type:t.mimeType||"video/webm"}))});t.start(250);const r=li*Wc().length;await new Promise(c=>setTimeout(c,r+500)),t.state!=="inactive"&&t.stop();const s=await n,o=Ht.readParams(),a=`HAO-Cinematic-${En(o.n,o.l,o.m)}.webm`;Ht.downloadBlob(s,a),document.getElementById("cinematicExportBtn").textContent="导出视频",document.getElementById("cinematicPlayBtn").disabled=!1,document.getElementById("cinematicExitBtn").disabled=!1,Zr=!1,ac()}h_({updateWindowControlLabels,resizeAfterLayoutChange:ui});const qc=[new Worker(new URL(""+new URL("worker-wu770f7w.js",import.meta.url).href,import.meta.url),{type:"module"}),new Worker(new URL(""+new URL("worker-wu770f7w.js",import.meta.url).href,import.meta.url),{type:"module"})];let C_=1;const oc=new Map;function Sh(i){const{jobId:e,fieldBuffer:t,error:n}=i.data,r=oc.get(e);r&&(oc.delete(e),n?r.reject(new Error(n)):r.resolve(t))}qc[0].onmessage=Sh;qc[1].onmessage=Sh;function R_(i,e,t,n,r){return new Promise((s,o)=>{const a=C_++;oc.set(a,{resolve:s,reject:o}),qc[i].postMessage({jobId:a,fieldBuffer:e,params:t,options:n,sign:r},[e])})}let zo=0;const fn=new Qe(new L(0,0,-1),100);window.addEventListener("error",i=>{const e=document.querySelector("#statusText");e&&(e.textContent="Err: "+i.message)});window.addEventListener("unhandledrejection",i=>{var t;const e=document.querySelector("#statusText");e&&(e.textContent="Rej: "+(((t=i.reason)==null?void 0:t.message)||i.reason))});let zt=null,yn=null,Un=null,On=null,Kr=null,mr=null,Er=null,cc=null,ei=null,ti=null,Jr=null,gr=null,Qr=null,Ci=null,Fn=null,Dn=null,zn=null,Ni=null,lc=null,uc=null,dc=null,hc=null,fc=null,pc=null,In=null,cn=null,Da=1,hi=5,nn=4,Xc=3,ya=4.5,Bo=!1;const Ii=[];function Yc(i=(e=>(e=g.backgroundColor)==null?void 0:e.value)()||"#000000"){document.documentElement.style.setProperty("--viewer-bg",i);const t=new ye(i);ot.background=t.clone(),Dt.background=t.clone(),Gn.background=t.clone(),Wn.background=t.clone();for(const n of Ii)n.scene.background=t.clone()}function P_(){var t;if(document.querySelector("#relationModeInput")){Object.assign(g,{relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue")});return}const i=(t=g.longitudeNode)==null?void 0:t.closest("fieldset");if(!i)return;const e=document.createElement("fieldset");e.className="relation-panel",e.innerHTML=`
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
  `,i.insertAdjacentElement("afterend",e),Object.assign(g,{relationMode:e.querySelector("#relationModeInput"),syncRotation:e.querySelector("#syncRotationInput"),scanRadius:e.querySelector("#scanRadiusInput"),scanRadiusValue:e.querySelector("#scanRadiusValue"),scanTheta:e.querySelector("#scanThetaInput"),scanThetaValue:e.querySelector("#scanThetaValue"),scanPhi:e.querySelector("#scanPhiInput"),scanPhiValue:e.querySelector("#scanPhiValue"),scanSliceZ:e.querySelector("#scanSliceZInput"),scanSliceZValue:e.querySelector("#scanSliceZValue")}),g.scanSliceZ&&g.scanSliceZ.addEventListener("input",()=>{const n=Rt(),r=en();fs(),Zc(),el(n,r)})}const Dr=document.createElement("button");Dr.type="button";Dr.className="fullscreen-exit-button";Dr.textContent="退出全屏";Dr.hidden=!0;document.body.appendChild(Dr);function L_(i,e,t){return En(i,e,t)}function wh(i,e,t){return`${i},${e},${t}`}function I_(i){const e=[0];for(let t=1;t<=i;t+=1)e.push(t,-t);return e}function Eh(i){const e=Math.max(1,Math.min(6,Math.round(i)||1)),t=[];for(let n=0;n<e;n+=1)for(const r of I_(n))t.push({value:wh(e,n,r),label:L_(e,n,r)});return t}function D_(i=6){const e=[];for(let t=1;t<=i;t+=1)e.push(...Eh(t));return e}const Bt=D_(6);function na(i,e,t=null){if(i){i.replaceChildren();for(const n of e){const r=document.createElement("option");r.value=n.value,r.textContent=n.label,i.append(r)}t&&e.some(n=>n.value===t)&&(i.value=t)}}function N_(){na(g.predictTarget,Bt,"2,1,1"),na(g.challengeGuess,Bt,"2,1,1"),na(g.compareA,Bt,"2,1,1"),na(g.compareB,Bt,"3,1,1")}function U_(i=null){if(!g.preset)return;const e=i??yh(Number(g.n.value),Number(g.l.value),Number(g.m.value));if(Number(g.preset.dataset.n)!==e.n){g.preset.replaceChildren();for(const n of Eh(e.n)){const r=document.createElement("option");r.value=n.value,r.textContent=n.label,g.preset.append(r)}g.preset.dataset.n=String(e.n)}g.preset.value=wh(e.n,e.l,e.m)}const $e={challengeTarget:Bt[0],challengeTotal:0,challengeCorrect:0,explanationStep:0,explanationPlaying:!1,explanationStartedAt:0,explanationTimer:null,explanationFrame:null,annotationDrag:null};function Rt(){var e,t;const i=yh(Number(g.n.value),Number(g.l.value),Number(g.m.value));return(e=g.sinType)!=null&&e.checked&&i.m>0&&(i.m=-i.m),(t=g.cosType)!=null&&t.checked&&i.m<0&&(i.m=Math.abs(i.m)),g.n.value=i.n,g.l.max=i.n-1,g.l.value=i.l,g.m.min=-i.l,g.m.max=i.l,g.m.value=Math.abs(i.m),U_(i),{...i,z:Math.max(1,Math.min(10,Number(g.z.value)||1))}}function ko(i,e){var t;i&&(i.disabled=!e,(t=i.closest("label"))==null||t.classList.toggle("muted",!e),e||(i.checked=!1))}function O_(i){const e=Hc(i).length,{polar:t,azimuthal:n}=Gc(i);ko(g.radialNode,e>0),ko(g.polarNode,t.length>0),ko(g.longitudeNode,n.length>0)}function en(){var s,o,a,c,l,u,h,d,f,x,v,m,p,y,_,w,A,E,b,T,S,M,P,D,U,k,B,F,X,H;const i=Rt();O_(i);const e=g.desktopMatch.checked?Vi(i):null;let t=g.slice.value;(s=g.xySlice)!=null&&s.checked&&(t="xoy"),(o=g.yzSlice)!=null&&o.checked&&(t="yoz"),(a=g.xzSlice)!=null&&a.checked&&(t="xoz"),!((c=g.xySlice)!=null&&c.checked)&&!((l=g.yzSlice)!=null&&l.checked)&&!((u=g.xzSlice)!=null&&u.checked)&&(t="none");const n=Number(((h=g.scanSliceZ)==null?void 0:h.value)??0),r={iso:Number(g.iso.value),density:Number(g.density.value),radius:Number(g.radius.value),opacity:Number(g.opacity.value),mode:g.mode.value,showCloud:((d=g.cloud)==null?void 0:d.checked)??!1,slice:t,sliceOffset:n/100*Number(g.radius.value),nodeRadial:!!(g.node.checked||(f=g.radialNode)!=null&&f.checked),nodePolar:!!(g.node.checked||(x=g.polarNode)!=null&&x.checked),nodeAzimuthal:!!(g.node.checked||(v=g.longitudeNode)!=null&&v.checked),showNode:!!(g.node.checked||(m=g.radialNode)!=null&&m.checked||(p=g.polarNode)!=null&&p.checked||(y=g.longitudeNode)!=null&&y.checked),showAxis:g.axis.checked,showBox:g.box.checked,showPositive:((_=g.positiveLobe)==null?void 0:_.checked)??!0,showNegative:((w=g.negativeLobe)==null?void 0:w.checked)??!0,wireframe:((A=g.wireframe)==null?void 0:A.checked)??!1,smooth:((E=g.smooth)==null?void 0:E.checked)??!1,showProjection:((b=g.projection)==null?void 0:b.checked)??!1,showProjection3d:((T=g.projection3d)==null?void 0:T.checked)??!1,grid3d:((S=g.grid3d)==null?void 0:S.checked)??!1,cutaway:(M=g.eighth)!=null&&M.checked?"eighth":(P=g.quarter)!=null&&P.checked?"quarter":(D=g.threeQuarter)!=null&&D.checked?"threeQuarter":"none",radialMode:(U=g.radialR)!=null&&U.checked?"R":(k=g.radialR2)!=null&&k.checked?"R2":"RDF",radialSection:((B=g.radialSection)==null?void 0:B.checked)??!1,radialSide:((F=g.radialSide)==null?void 0:F.checked)??!1,radialCurve:((X=g.radialCurve)==null?void 0:X.checked)??!0,radialAxis:((H=g.radialAxis)==null?void 0:H.checked)??!1,positiveColor:g.positiveColor.value,negativeColor:g.negativeColor.value,backgroundColor:g.backgroundColor.value,desktopMatched:!!e};return g.isoValue.value=r.iso.toFixed(4),g.densityValue.value=r.density,g.radiusValue.value=r.radius.toFixed(1),g.opacityValue.value=r.opacity.toFixed(2),g.boxSizeDisplay&&(g.boxSizeDisplay.value=(r.radius*2.4).toFixed(2)),g.intervalValue&&(g.intervalValue.value=(r.radius*2/r.density).toFixed(3)),g.probabilityValue&&(g.probabilityValue.value="0.800"),g.iso.disabled=!1,g.density.disabled=!1,g.radius.disabled=!1,r}function Na(){if(!g.desktopMatch.checked)return;const i=Vi(Rt()),e=Math.min(Number(g.iso.max),Math.max(Number(g.iso.min),i.iso));g.iso.value=e.toFixed(4),g.density.value=Math.min(Number(g.density.max),Math.max(Number(g.density.min),i.gridSize)),g.radius.value=Math.min(Number(g.radius.max),Math.max(Number(g.radius.min),i.radius)),en()}function F_(){if(!g.boxSizeDisplay)return;const i=Number(g.boxSizeDisplay.value);!Number.isFinite(i)||i<=0||(g.radius.value=Math.min(Number(g.radius.max),Math.max(Number(g.radius.min),i/2.4)),en())}function td(i,e){const t=new We;t.setAttribute("position",new De(i,3));const n=new Float32Array(i.length/3);for(let s=0;s<n.length;s+=1){const o=Math.sin((s+1)*12.9898)*43758.5453;n[s]=o-Math.floor(o)}t.setAttribute("seed",new It(n,1));const r=new Hn({clipping:!0,uniforms:nh.merge([me.clipping,{uColor:{value:new ye(e)},uTime:{value:0},uSize:{value:3.5}}]),transparent:!0,depthWrite:!1,blending:xr,vertexShader:`
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
    `});return new Px(t,r)}function z_(i){var e,t;for(const n of[zt,yn,Un,On])n!=null&&n.isPoints&&((t=(e=n.material)==null?void 0:e.uniforms)!=null&&t.uTime)&&(n.material.uniforms.uTime.value=i)}function tn(i){return Number.parseInt(i.replace("#","0x"),16)}const Vo=new Map;function Ua(i,e,t={}){if(t.clippingPlanes||t._clipPlanes)return nd(i,e,t);const n=JSON.stringify({color:i,opacity:e,...t});if(Vo.has(n))return Vo.get(n);const r=nd(i,e,t);return r.userData={...r.userData,pooled:!0},Vo.set(n,r),r}function nd(i,e,t={}){return new xh({color:i,transparent:e<1,opacity:e,side:dt,emissive:i,emissiveIntensity:.025,roughness:.22,metalness:.05,envMapIntensity:.18,...t})}function Ma(i,e,t){const n=new We;n.setAttribute("position",new De(i.vertices,3)),n.setIndex(i.indices),n.computeVertexNormals();const r=Ua(e,t);return new Ye(n,r)}function Sa(i,e,t=!1){if(!(i!=null&&i.material))return;i.visible=!0,e.wireframe&&!e.smooth?(i.userData.originalMaterial||(i.userData.originalMaterial=i.material),i.material=new Vt({color:i.userData.originalMaterial.color,wireframe:!0,transparent:!0,opacity:.8,side:Sn,clippingPlanes:t?[]:[fn]})):(i.userData.originalMaterial&&(i.material=i.userData.originalMaterial),i.material.wireframe=!1,i.material.side=dt,i.material.flatShading=!e.smooth,t?i.material.clippingPlanes=null:(i.material.clippingPlanes=[fn],i.material.clipIntersection=!1),i.material.needsUpdate=!0)}function B_(i){return i.wireframe||i.smooth||i.showProjection3d}function k_(i){return i==="quarter"?[new Qe(new L(0,1,0),0),new Qe(new L(0,0,1),0)]:i==="eighth"?[new Qe(new L(1,0,0),0),new Qe(new L(0,1,0),0),new Qe(new L(0,0,1),0)]:i==="threeQuarter"?[new Qe(new L(0,0,1),0)]:[]}function $c(i){const e=k_(i.cutaway),t=Nr(i.slice);return t==="x"&&e.push(new Qe(new L(1,0,0),0)),t==="y"&&e.push(new Qe(new L(0,1,0),0)),t==="z"&&e.push(new Qe(new L(0,0,1),0)),e}function Nr(i){return i==="yoz"?"x":i==="xoz"?"y":i==="xoy"?"z":null}function V_(i){const e=[];i.cutaway==="quarter"&&e.push("y","z"),i.cutaway==="eighth"&&e.push("x","y","z"),i.cutaway==="threeQuarter"&&e.push("y","z");const t=Nr(i.slice);return t&&e.push(t),[...new Set(e)]}function wa(i,e,t,n){const r=e._clipPlanes||$c(e);if(!r.length)return i;const s=e._capFilter||(()=>!0);i.updateMatrixWorld(!0);const o=i.geometry.getAttribute("position"),a=i.geometry.index,c=[],l=a?a.count:Math.min(o.count,i.count||o.count);function u(K){return i.localToWorld(new L(o.getX(K),o.getY(K),o.getZ(K)))}const h=Math.floor(l/3);for(let K=0;K<h;K+=1){const fe=a?a.getX(K*3):K*3,W=a?a.getX(K*3+1):K*3+1,J=a?a.getX(K*3+2):K*3+2;c.push([u(fe),u(W),u(J)])}let d=c;const f=r.map(()=>[]);r.forEach((K,fe)=>{const W=[];for(const J of d){const{clipped:le,segments:N}=$_(J,K);le.length>=3&&W.push(le),f[fe].push(...N)}d=W});const x=[],v=[],m=new ye(tn(t));function p(K){return x.push(K.x,K.y,K.z),x.length/3-1}for(const K of d){const fe=p(K[0]);for(let W=1;W<K.length-1;W+=1){const J=p(K[W]),le=p(K[W+1]);v.push(fe,J,le)}}const y=!e._skipCaps,_=[],w=[],A=[];function E(K){return _.push(K.x,K.y,K.z),w.push(Qt(n,K.x,K.y,K.z)),_.length/3-1}function b(K){const fe=K.normal.clone().normalize(),W=Math.abs(fe.x)<.9?new L(1,0,0):new L(0,1,0);W.sub(fe.clone().multiplyScalar(W.dot(fe))).normalize();const J=new L().crossVectors(fe,W).normalize(),le=fe.clone().multiplyScalar(-K.constant);return{normal:fe,basisA:W,basisB:J,origin:le}}function T(K,fe){const{basisA:W,basisB:J,origin:le}=b(K),N=e.radius,se=n.n>=6?6.2:n.n>=5?5.4:3.8,xe=n.n>=6?420:n.n>=5?360:280,we=Math.max(128,Math.min(xe,Math.round(e.density*se))),O=N*2/we,Ae=e._capSign??1,ze=e.iso*1.015,je=we+1,Re=new Float32Array(je*je);function qe(j,Z){const oe=-N+j*O,ce=-N+Z*O;return le.clone().addScaledVector(W,oe).addScaledVector(J,ce)}function Be(j,Z){return Z*je+j}for(let j=0;j<=we;j+=1)for(let Z=0;Z<=we;Z+=1){const oe=qe(Z,j);Re[Be(Z,j)]=Ae*Qt(n,oe.x,oe.y,oe.z)-ze}function Oe(j,Z){return{point:qe(j,Z),value:Re[Be(j,Z)]}}function lt(j,Z,oe){return{point:j.point.clone().lerp(Z.point,oe),value:j.value+(Z.value-j.value)*oe}}function I(j,Z){const oe=j-Z;return Math.abs(oe)<1e-12?.5:Math.max(0,Math.min(1,j/oe))}function C(j,Z){const oe=[];for(let ce=0;ce<j.length;ce+=1){const ue=j[ce],Ee=j[(ce+1)%j.length],ae=Z.distanceToPoint(ue.point),Me=Z.distanceToPoint(Ee.point),ke=ae>=-1e-7,Le=Me>=-1e-7;if(ke&&Le)oe.push(Ee);else if(ke&&!Le){const ge=I(ae,Me);oe.push(lt(ue,Ee,ge))}else if(!ke&&Le){const ge=I(ae,Me);oe.push(lt(ue,Ee,ge),Ee)}}return oe}function $(j){const Z=[];for(let oe=0;oe<j.length;oe+=1){const ce=j[oe],ue=j[(oe+1)%j.length],Ee=ce.value>=0,ae=ue.value>=0;if(Ee&&ae)Z.push(ue);else if(Ee&&!ae){const Me=I(ce.value,ue.value);Z.push(lt(ce,ue,Me))}else if(!Ee&&ae){const Me=I(ce.value,ue.value);Z.push(lt(ce,ue,Me),ue)}}return Z}function ne(j){return E(j.point)}for(let j=0;j<we;j+=1)for(let Z=0;Z<we;Z+=1){let oe=[Oe(Z,j),Oe(Z+1,j),Oe(Z+1,j+1),Oe(Z,j+1)];for(let Ee=0;Ee<r.length&&!(Ee!==fe&&(oe=C(oe,r[Ee]),oe.length<3));Ee+=1);if(oe.length<3||(oe=$(oe),oe.length<3))continue;const ce=oe.reduce((Ee,ae)=>Ee.add(ae.point),new L).multiplyScalar(1/oe.length);if(!s(fe,ce))continue;const ue=ne(oe[0]);for(let Ee=1;Ee<oe.length-1;Ee+=1)A.push(ue,ne(oe[Ee]),ne(oe[Ee+1]))}}y&&r.forEach((K,fe)=>{T(K,fe)});const S=new We;S.setAttribute("position",new De(x,3)),S.setIndex(v),e.smooth&&!e.wireframe&&!e._skipSmooth&&bh(S,e),S.computeVertexNormals();const M=Ua(m,e.opacity,{wireframe:e.wireframe,flatShading:!e.smooth}),P=new Ye(S,M);if(P.userData.vertexCount=v.length,!A.length)return P;const D=new We,U=Ph(w,e.iso*1.6),k=[];for(let K=0;K<w.length;K+=1){const fe=w[K],W=_[K*3],J=_[K*3+1],le=_[K*3+2],N=Rh(fe,W,J,le,e,n,U);k.push(N.r,N.g,N.b)}D.setAttribute("position",new De(_,3)),D.setAttribute("color",new De(k,3)),D.setIndex(A),D.computeVertexNormals();const F=!!Nr(e.slice)||e.cutaway!=="none",X=new pr({vertexColors:!0,side:dt,shininess:50,transparent:!1,opacity:1,depthWrite:!0,clippingPlanes:[fn]});X.toneMapped=!1;const H=new Ye(D,X);H.renderOrder=F?3:1;const ee=new Vt({vertexColors:!0,side:dt,transparent:!0,opacity:.26,depthWrite:!1,depthTest:!0,blending:xr,clippingPlanes:[fn]});ee.toneMapped=!1;const re=new Ye(D,ee);re.renderOrder=H.renderOrder+.05;const ie=new pt;return ie.add(P,H,re),ie.userData.vertexCount=v.length+A.length*2,ie}function jc(i){var t,n;let e=((t=i==null?void 0:i.userData)==null?void 0:t.vertexCount)||0;return(n=i==null?void 0:i.traverse)==null||n.call(i,r=>{var s;r!==i&&(e+=((s=r.userData)==null?void 0:s.vertexCount)||0)}),e}async function id(i,e,t,n,r){return await mc(i,e,t,n,r)}function H_(i,e,t,n,r){const s=new pt;let o=0;for(const a of r){const c=wa(i,{...e,_clipPlanes:a.planes,_capFilter:a.capFilter,_skipSmooth:!0},t,n);c&&(s.add(c),o+=jc(c))}return s.userData.vertexCount=o,s}function G_(i,e,t){const n=[],r=e.radius,s=Math.max(1800,i.n*620);let o=0,a=t*Qt(i,0,0,0)-e.iso;for(let c=1;c<=s;c+=1){const l=r*c/s,u=t*Qt(i,l,0,0)-e.iso;if(Number.isFinite(u)&&Number.isFinite(a)&&a*u<0){let h=o,d=l,f=a;for(let v=0;v<36;v+=1){const m=(h+d)/2,p=t*Qt(i,m,0,0)-e.iso;f*p<=0?d=m:(h=m,f=p)}const x=(h+d)/2;x>.02&&!n.some(v=>Math.abs(v-x)<.025)&&n.push(x)}o=l,a=u}return n}function W_(i){const e=(()=>{const n=Nr(i.slice);return n==="x"?new Qe(new L(1,0,0),0):n==="y"?new Qe(new L(0,1,0),0):n==="z"?new Qe(new L(0,0,1),0):null})(),t=n=>e?[...n,e]:n;return i.cutaway==="threeQuarter"?[{planes:t([new Qe(new L(0,-1,0),0)])},{planes:t([new Qe(new L(0,0,-1),0)])}]:[{planes:$c(i)}]}function q_(i,e,t,n){const r=G_(i,e,t),s=new pt,o=W_(e),a=tn(n);let c=0;for(const u of r){const h=new Rr(u,i.n>=5?160:128,i.n>=5?96:72);for(const d of o){const f=Ua(a,e.opacity,{wireframe:e.wireframe,flatShading:!e.smooth,clippingPlanes:d.planes,clipIntersection:!1}),x=new Ye(h.clone(),f);x.userData.vertexCount=h.getAttribute("position").count,s.add(x),c+=x.userData.vertexCount}h.dispose()}const l=ev(i,e,t);return l&&(s.add(l),c+=jc(l)),s.userData.vertexCount=c,s.children.length?s:null}function X_(i,e,t,n){return e.cutaway==="quarter"?wa(i,{...e,_clipPlanes:[new Qe(new L(0,1,0),0),new Qe(new L(0,0,1),0)],_skipSmooth:!0},t,n):e.cutaway==="eighth"?wa(i,{...e,_clipPlanes:[new Qe(new L(1,0,0),0),new Qe(new L(0,1,0),0),new Qe(new L(0,0,1),0)],_skipSmooth:!0},t,n):e.cutaway==="threeQuarter"?H_(i,e,t,n,[{planes:[new Qe(new L(0,-1,0),0)],capFilter:(r,s)=>s.z>0},{planes:[new Qe(new L(0,1,0),0),new Qe(new L(0,0,-1),0)],capFilter:(r,s)=>r===1&&s.y>0}]):null}function Y_(i,e,t){var w;i.updateMatrixWorld(!0);const n=i.geometry.getAttribute("position"),r=Number.isFinite(i.count)&&i.count>0?i.count:Number.POSITIVE_INFINITY,s=Number.isFinite((w=i.geometry.drawRange)==null?void 0:w.count)&&i.geometry.drawRange.count>0?i.geometry.drawRange.count:Number.POSITIVE_INFINITY,o=Math.min(n.count,r,s),a=[],c=[],l=new Map;function u(A){return Number.isFinite(A.x)&&Number.isFinite(A.y)&&Number.isFinite(A.z)}const h=Nr(e.slice);function d(A){return e.cutaway==="quarter"?(A.y>0&&(A.y=0),A.z>0&&(A.z=0)):e.cutaway==="eighth"?(A.x>0&&(A.x=0),A.y>0&&(A.y=0),A.z>0&&(A.z=0)):e.cutaway==="threeQuarter"&&A.y>0&&A.z>0&&(A.y<A.z?A.y=0:A.z=0),h==="x"&&A.x>0&&(A.x=0),h==="y"&&A.y>0&&(A.y=0),h==="z"&&A.z>0&&(A.z=0),A}function f(A,E){const b=i.localToWorld(new L(n.getX(A),n.getY(A),n.getZ(A)));if(d(b),!u(b))return-1;if(E){const S=`${Math.round(b.x*1e4)},${Math.round(b.y*1e4)},${Math.round(b.z*1e4)}`;if(l.has(S))return l.get(S);const M=a.length/3;return a.push(b.x,b.y,b.z),l.set(S,M),M}return a.push(b.x,b.y,b.z),a.length/3-1}const x=Math.floor(o/3),v=e.smooth||e.wireframe;for(let A=0;A<x;A+=1){const E=A*3,b=A*3+1,T=A*3+2,S=f(E,v),M=f(b,v),P=f(T,v);S>=0&&M>=0&&P>=0&&c.push(S,M,P)}const m=new We;m.setAttribute("position",new De(a,3)),m.setIndex(c),e.smooth&&!e.wireframe&&bh(m,e),m.computeVertexNormals();const p=e.wireframe&&!e.smooth;let y;p?y=new Vt({color:tn(t),wireframe:!0,transparent:!0,opacity:.8,side:Sn,clippingPlanes:[fn]}):(y=i.material.clone(),y.color=new ye(tn(t)),y.emissive=new ye(tn(t)),y.wireframe=!1,y.side=dt,y.flatShading=!e.smooth,y.clippingPlanes=[fn],y.needsUpdate=!0);const _=new Ye(m,y);return _.userData.vertexCount=o,_}function bh(i,e){const t=i.getAttribute("position"),n=i.index;if(!t||!n)return;const r=t.count,s=Array.from({length:r},()=>new Set);for(let f=0;f<n.count;f+=3){const x=n.getX(f),v=n.getX(f+1),m=n.getX(f+2);s[x].add(v).add(m),s[v].add(x).add(m),s[m].add(x).add(v)}const o=Math.max(.035,e.radius/Math.max(80,e.density*2)),a=new Uint8Array(r),c=Nr(e.slice);for(let f=0;f<r;f+=1){const x=t.getX(f),v=t.getY(f),m=t.getZ(f);e.cutaway==="quarter"&&(Math.abs(v)<o||Math.abs(m)<o)&&(a[f]=1),e.cutaway==="eighth"&&(Math.abs(x)<o||Math.abs(v)<o||Math.abs(m)<o)&&(a[f]=1),e.cutaway==="threeQuarter"&&(Math.abs(v)<o||Math.abs(m)<o)&&(a[f]=1),c==="x"&&Math.abs(x)<o&&(a[f]=1),c==="y"&&Math.abs(v)<o&&(a[f]=1),c==="z"&&Math.abs(m)<o&&(a[f]=1)}const l=new Float32Array(t.array),u=new Float32Array(l.length),h=e.cutaway==="none"?10:7,d=e.cutaway==="none"?.16:.1;for(let f=0;f<h;f+=1){u.set(l);for(let x=0;x<r;x+=1){if(a[x]||s[x].size<3)continue;let v=0,m=0,p=0;for(const w of s[x]){const A=w*3;v+=l[A],m+=l[A+1],p+=l[A+2]}const y=s[x].size,_=x*3;u[_]=l[_]+(v/y-l[_])*d,u[_+1]=l[_+1]+(m/y-l[_+1])*d,u[_+2]=l[_+2]+(p/y-l[_+2])*d}l.set(u)}t.array.set(l),t.needsUpdate=!0}function $_(i,e){const t=[],n=[];for(let s=0;s<i.length;s+=1){const o=i[s],a=i[(s+1)%i.length],c=e.distanceToPoint(o)>=-1e-7,l=e.distanceToPoint(a)>=-1e-7;if(c&&l)t.push(a.clone());else if(c&&!l){const u=rd(o,a,e);t.push(u),n.push(u)}else if(!c&&l){const u=rd(o,a,e);t.push(u,a.clone()),n.push(u)}}const r=n.length===2?[[n[0],n[1]]]:[];return{clipped:t,segments:r}}function rd(i,e,t){const n=e.clone().sub(i),r=t.normal.dot(n);if(Math.abs(r)<1e-10)return i.clone();const s=-(t.normal.dot(i)+t.constant)/r;return i.clone().add(n.multiplyScalar(Math.max(0,Math.min(1,s))))}async function j_(i,e,t,n,r,s){const o=Ua(tn(s),t.opacity),a=e.n>=5?5e5:16e4,c=new e_(n.density,o,!0,!0,a);c.isolation=n.iso,c.position.set(0,0,0),c.scale.set(n.radius,n.radius,n.radius);const l=await R_(i,c.field.buffer,e,{...n,cutaway:"none"},r);return c.field=new Float32Array(l),c.update(),c}async function mc(i,e,t,n,r){const s=t.cutaway!=="none"||t.slice!=="none";if(e.l===0&&s){const h=q_(e,t,n,r);if(h)return h}const o=t.smooth&&!t.wireframe?Math.round(t.density*(s?3:2)):t.density,a={...t,density:Math.min(s?220:180,Math.max(t.density,o))},c=await j_(i,e,t,a,n,r),l={...t,_capSign:n,_skipCaps:e.l===0},u=X_(c,l,r,e);return u||($c(t).length?wa(c,l,r,e):Y_(c,t,r))}function Z_(i,e){const t=new pt,n=K_(i,e.radius,e);return n&&t.add(n),t.userData.vertexCount=jc(t),t.children.length?t:null}function es(i,e=.18){const t=new Vt({color:i,transparent:!0,opacity:e,side:dt,depthWrite:!1,depthTest:!0,blending:xr});return t.toneMapped=!1,t}function Ah(i,e,t){const n=new L(Math.cos(i),Math.sin(i),0).multiplyScalar(e),r=new L(0,0,e),s=[-n.x-r.x,-n.y-r.y,-n.z-r.z,n.x-r.x,n.y-r.y,n.z-r.z,n.x+r.x,n.y+r.y,n.z+r.z,-n.x+r.x,-n.y+r.y,-n.z+r.z],o=new We;return o.setAttribute("position",new De(s,3)),o.setIndex([0,1,2,0,2,3]),o.computeVertexNormals(),new Ye(o,t)}function Th(i,e,t){const n=Math.min(i,Math.PI-i);if(Math.abs(n-Math.PI/2)<.018){const h=new Ye(new Ic(e,160),t);return h.renderOrder=3,h}const r=e*Math.sin(n),s=e*Math.cos(n),o=160,a=[],c=[];for(const h of[1,-1]){const d=a.length/3;a.push(0,0,0);for(let f=0;f<=o;f+=1){const x=Math.PI*2*f/o;a.push(r*Math.cos(x),r*Math.sin(x),h*s)}for(let f=1;f<=o;f+=1)c.push(d,d+f,d+f+1)}const l=new We;l.setAttribute("position",new De(a,3)),l.setIndex(c),l.computeVertexNormals();const u=new Ye(l,t);return u.renderOrder=3,u}function K_(i,e,t={}){const n=new pt;if(t.nodeRadial){const o=es(16756736,.34);for(const a of Hc(i)){if(a<=.02||a>=e*.99)continue;const c=new Ye(new Rr(a,128,64),o.clone());c.renderOrder=3,n.add(c),n.add(Nh(a,16769354,.72))}}const{polar:r,azimuthal:s}=Gc(i);if(t.nodePolar){const o=es(65394,.32);for(const a of r)n.add(Th(a,e*1.04,o.clone()))}if(t.nodeAzimuthal){const o=es(47103,.3);for(const a of s){const c=Ah(a,e*1.04,o.clone());c.renderOrder=3,n.add(c)}}return n.children.length?n:null}function J_(i,e,t={}){const n=new pt,{polar:r,azimuthal:s}=Gc(i);if(t.nodePolar){const o=es(65394,.34);for(const a of r)n.add(Th(a,e,o.clone()))}if(t.nodeAzimuthal){const o=es(47103,.32);for(const a of s)n.add(Ah(a,e,o.clone()))}return n.children.length?n:null}function Q_(i,e){return null}function Ch(i){const e=new Ar(i*2,i*2,i*2),t=new Yx(e),n=new zi({color:13686237,transparent:!0,opacity:.58}),r=new Pc(t,n);return e.dispose(),r}function ev(i,e,t=null){const n=V_(e);if(!n.length)return null;const r=new pt;for(const s of n){const o=Lh(i,e,s,t);o&&r.add(o)}return r.children.length?r:null}function tv(i,e){const t=Math.max(0,Math.min(1,Math.abs(i)/Math.max(e*.5,1e-12))),n=Math.pow(t,.52);return i>=0?new ye(16711896).lerp(new ye(16716306),n):new ye(60159).lerp(new ye(1054975),n)}function Rh(i,e,t,n,r,s,o){const a=new ye(r.backgroundColor||"#000000"),c=new ye(16711896),l=new ye(60159),u=(M,P,D)=>{const U=Math.max(0,Math.min(1,(D-M)/Math.max(1e-12,P-M)));return U*U*(3-2*U)},h=Math.min(1,Math.hypot(e,t,n)/Math.max(r.radius,1e-9)),d=Math.pow(1-h,1.45),f=Math.max(0,Math.min(1,(s.n-4)/2)),x=Math.abs(i),v=r.iso*(.86-d*.18-f*.04),m=r.iso*(1.62+d*1.05+f*.28),p=r.iso*(1.05+d*.18),y=Math.max(r.iso*(2.1+d*1.05+f*.22),o*(.48+d*.14)),_=u(v,m,x),w=u(p,y,x),A=tv(i,o),E=i>=0?c:l,b=.38+w*(.62-d*.06),T=E.clone().lerp(A,Math.max(.34,b)),S=Math.max(0,(1-_)*(.16+d*.06));return T.clone().lerp(a,S)}function Ph(i,e){const t=i.map(r=>Math.abs(r)).filter(r=>Number.isFinite(r)&&r>1e-12).sort((r,s)=>r-s);if(!t.length)return Math.max(e,1e-9);const n=Math.min(t.length-1,Math.floor(t.length*.82));return Math.max(e,t[n])}function Lh(i,e,t,n=null,r=0,s=1){const o=Math.max(160,Math.min(i.n>=5?420:320,Math.round(e.density*(i.n>=5?5.4:4.4)))),a=e.radius;function c(B,F){return t==="x"?[r,B,F]:t==="y"?[B,r,F]:[B,F,r]}function l(B,F,X){return e.cutaway==="quarter"||e.cutaway==="threeQuarter"?t==="y"?X>0:t==="z"?F>0:!1:e.cutaway==="eighth"?t==="x"?F>0&&X>0:t==="y"?B>0&&X>0:t==="z"?B>0&&F>0:!1:!0}const u=o+1,h=e.iso*1.015,d=new Float32Array(u*u),f=[],x=(B,F)=>F*u+B;for(let B=0;B<=o;B+=1){const F=a-2*a*B/o;for(let X=0;X<=o;X+=1){const H=-a+2*a*X/o,[ee,re,ie]=c(H,F),K=Qt(i,ee,re,ie);d[x(X,B)]=K;const fe=n==null||(n>0?K>=0:K<0);l(ee,re,ie)&&fe&&Math.abs(K)>=e.iso*.94&&f.push(K)}}if(!f.length)return null;const v=Ph(f,e.iso*1.6),m=[],p=[],y=[];function _(B){return n==null?Math.abs(B)-h:n*B-h}function w(B,F){const X=-a+2*a*B/o,H=a-2*a*F/o,[ee,re,ie]=c(X,H),K=d[x(B,F)];return{point:new L(ee,re,ie),rawValue:K,value:_(K)}}function A(B,F,X){return{point:B.point.clone().lerp(F.point,X),rawValue:B.rawValue+(F.rawValue-B.rawValue)*X,value:B.value+(F.value-B.value)*X}}function E(B,F){const X=B-F;return Math.abs(X)<1e-12?.5:Math.max(0,Math.min(1,B/X))}function b(B){const F=[];for(let X=0;X<B.length;X+=1){const H=B[X],ee=B[(X+1)%B.length],re=H.value>=0,ie=ee.value>=0;re&&ie?F.push(ee):re&&!ie?F.push(A(H,ee,E(H.value,ee.value))):!re&&ie&&F.push(A(H,ee,E(H.value,ee.value)),ee)}return F}function T(B){const{x:F,y:X,z:H}=B.point;m.push(F,X,H);const ee=Rh(B.rawValue,F,X,H,e,i,v);return p.push(ee.r,ee.g,ee.b),m.length/3-1}for(let B=0;B<o;B+=1)for(let F=0;F<o;F+=1){const X=-a+2*a*(F+.5)/o,H=a-2*a*(B+.5)/o,[ee,re,ie]=c(X,H);if(!l(ee,re,ie))continue;let K=[w(F,B),w(F+1,B),w(F+1,B+1),w(F,B+1)];if(K=b(K),K.length<3)continue;const fe=T(K[0]);for(let W=1;W<K.length-1;W+=1)y.push(fe,T(K[W]),T(K[W+1]))}if(!y.length)return null;const S=new We;S.setAttribute("position",new De(m,3)),S.setAttribute("color",new De(p,3)),S.setIndex(y),S.computeVertexNormals();const M=new Vt({vertexColors:!0,side:dt,transparent:!1,opacity:1,depthWrite:!0,color:new ye().setScalar(s)});M.toneMapped=!1;const P=new Ye(S,M);P.renderOrder=4,P.userData.vertexCount=y.length;const D=new Vt({vertexColors:!0,side:dt,transparent:!0,opacity:.26*s,depthWrite:!1,depthTest:!0,blending:xr,color:new ye().setScalar(s)});D.toneMapped=!1;const U=new Ye(S,D);U.renderOrder=4.05,U.userData.vertexCount=y.length;const k=new pt;return k.add(P,U),k.userData.vertexCount=y.length*2,k}function nv(){for(const i of[zt,yn,Un,On,Kr,mr,Er,cc])i&&wn(ot,i);zt=null,yn=null,Un=null,On=null,Kr=null,mr=null,Er=null,cc=null}function iv(){for(const i of[ei,ti,Jr])i&&wn(Dt,i);ei=null,ti=null,Jr=null}function rv(i,e=!0){const t=o_();t&&wn(Dt,t);const n=xa(i,Math.max(.08,i*.024),.9);a_(n),n.visible=e,Dt.add(n)}function Zc(){for(const i of[gr,Qr,Ci])i&&wn(Gn,i);gr=null,Qr=null,Ci=null}function rs(){for(const i of[Fn,zn,Ni,lc,uc])i&&wn(Wn,i);Fn=null,zn=null,Ni=null,lc=null,uc=null}function wn(i,e){i.remove(e),e.traverse(t=>{var n,r,s,o,a,c;if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const l of t.material)(n=l.userData)!=null&&n.pooled||l.dispose();else t.material&&((r=t.material.userData)!=null&&r.pooled||(t.material.map&&t.material.map.dispose(),(c=(a=(o=(s=t.material.uniforms)==null?void 0:s.volumeMap)==null?void 0:o.value)==null?void 0:a.dispose)==null||c.call(a),t.material.dispose()))})}function sv(i,e){const t=Math.max(36,Math.floor(e.thetaSegments*.6)),r=new Uc(1,t).getAttribute("position"),s=[],o=[],a=new Map,c=[];let l=0;for(let d=0;d<r.count;d++){const f=r.getX(d),x=r.getY(d),v=r.getZ(d),m=1e5,p=`${Math.round(f*m)},${Math.round(x*m)},${Math.round(v*m)}`;let y=a.get(p);if(y===void 0){y=s.length/3,s.push(f,x,v),a.set(p,y);const _=Math.acos(v),w=Math.atan2(x,f),A=ic(i.l,i.m,_,w);c.push(A),Math.abs(A)>l&&(l=Math.abs(A))}o.push(y)}const u=(e.radius??4)/(l||1);function h(d){const f=[],x=[],v=new Int32Array(s.length/3).fill(-1);for(let m=0;m<o.length;m+=3){const p=o[m],y=o[m+1],_=o[m+2],w=c[p]*d,A=c[y]*d,E=c[_]*d;if(w<=1e-6&&A<=1e-6&&E<=1e-6)continue;const b=(T,S)=>{if(v[T]===-1){const M=S>1e-6?S*u:0;v[T]=f.length/3,f.push(s[T*3]*M,s[T*3+1]*M,s[T*3+2]*M)}return v[T]};x.push(b(p,w),b(y,A),b(_,E))}return{vertices:f,indices:x}}return{positive:h(1),negative:h(-1)}}async function Tt(i=!1){i instanceof Event&&(i=!1);const e=++zo;gc();const t=Rt(),n=en(),r=En(t.n,t.l,t.m);g.statusText.textContent="Calculating...",g.renderButton.disabled=!0;let s=null,o=null,a=0,c=0;if(n.mode==="marching"||n.mode==="points"){const[l,u]=await Promise.all([id(0,t,n,1,n.positiveColor),id(1,t,n,-1,n.negativeColor)]);if(e!==zo)return;s=l,o=u,a=s.userData.vertexCount,c=o.userData.vertexCount}else{const{positive:l,negative:u}=E_(t,{...n,thetaSegments:Math.max(30,n.density+18),phiSegments:Math.max(52,n.density*3)});s=Ma(l,tn(n.positiveColor),n.opacity),o=Ma(u,tn(n.negativeColor),n.opacity),Sa(s,n),Sa(o,n),a=l.vertices.length/3,c=u.vertices.length/3}if(n.showProjection3d||n.showProjection){const l=Fh(t,n);l.name="integratedProjection3DGroup",l.visible=!!n.showProjection3d,s&&s.add(l)}requestAnimationFrame(()=>{if(e!==zo)return;n.showAxis=g.axis.checked,n.showBox=g.box.checked,nv(),iv(),Zc(),rs(),Yc(n.backgroundColor),tc(n.showAxis,Math.max(1,n.radius/4.5)),g.toolAxis&&g.toolAxis.classList.toggle("active",n.showAxis),zt=s,yn=o;const l=B_(n);if(zt&&(zt.visible=n.showPositive&&l,ot.add(zt)),yn&&(yn.visible=n.showNegative&&l,ot.add(yn)),n.showCloud){const{positive:u,negative:h}=S_(t,n);Un=td(u,tn(n.positiveColor)),On=td(h,tn(n.negativeColor)),Un.material.clippingPlanes=[fn],On.material.clippingPlanes=[fn],Un.visible=n.showPositive,On.visible=n.showNegative,ot.add(Un,On),a=u.length/3,c=h.length/3}if(n.showNode&&va(t.n,t.l)!=="0 radial, 0 angular"&&(Kr=Z_(t,n),Kr&&ot.add(Kr)),mr=Q_(),mr&&ot.add(mr),cc=null,(n.showBox||n.grid3d)&&(Er=Ch(n.radius),ot.add(Er)),xv(n),g.orbitalName.textContent=r,g.viewerTitle.textContent=`原子轨道  ${r}`,g.nodeText.textContent=va(t.n,t.l),g.sliceText.textContent=n.slice.toUpperCase(),g.boxText.textContent=n.radius.toFixed(2),g.isoText.textContent=n.iso.toFixed(5),g.posCount.textContent=String(a),g.negCount.textContent=String(c),g.statusText.textContent="Rendered",g.animationWindow&&!g.animationWindow.classList.contains("closed")&&drawGenerationAnimation(0),fv(t,n),el(t,n),os(t,n),i){const u=t.n>=5||t.l>=3?1.65:1.22;lv(t,n.radius*u,Math.max(nn,ov(n))),i_(),r_()}vn(Te),vn(Ie),g.renderButton.disabled=!1,ui()})}function av(){return Array.from(document.querySelectorAll(".view-grid > .qt-window"))}function gc(i={}){for(const e of av())e.classList.remove("closed"),i.restoreLayout?e.classList.remove("minimized","maximized"):e.classList.remove("minimized"),updateWindowControlLabels(e)}function ss(i=hi){const e=g.viewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(st.left=-i*t,st.right=i*t,st.top=i,st.bottom=-i):(st.left=-i,st.right=i,st.top=i/t,st.bottom=-i/t),st.near=.1,st.far=Math.max(1e3,i*8),st.updateProjectionMatrix()}function fi(i,e=90){return Math.max(e,i*2.8)}function Ea(i=hi){var t,n,r;hi=i;const e=fi(i);st.position.set(0,0,e),st.lookAt(0,0,0),ss(i),Te.target.set(0,0,0),Te.update(),(t=g.toolXOY)==null||t.classList.add("active"),(n=g.toolYOZ)==null||n.classList.remove("active"),(r=g.toolXOZ)==null||r.classList.remove("active")}function as(i=Math.max(3,hi*.45)){const e=g.angularViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(at.left=-i*t,at.right=i*t,at.top=i,at.bottom=-i):(at.left=-i,at.right=i,at.top=i/t,at.bottom=-i/t),at.near=.1,at.far=Math.max(1e3,i*8),at.updateProjectionMatrix()}function sd(i=4){var t;nn=Math.max(3,i);const e=fi(nn,40);at.position.set(0,0,e),at.lookAt(0,0,0),as(nn),Ie.target.set(0,0,0),(t=Ie.handleResize)==null||t.call(Ie),Ie.update()}function ov(i){const e=Math.max(4,Math.min(8,i.radius*.55))*.74;return Math.max(5.8,e*1.55)}function cv(...i){var s;const e=new Vn,t=new Vn;let n=!1;for(const o of i)o&&((s=o.updateWorldMatrix)==null||s.call(o,!0,!1),t.setFromObject(o),!(!Number.isFinite(t.min.x)||!Number.isFinite(t.max.x))&&(n?e.union(t):e.copy(t),n=!0));if(!n)return 4.2;const r=new mi;return e.getBoundingSphere(r),Math.max(.001,r.radius)}function lv(i,e,t){var o,a,c,l,u;const n=Qc(i);hi=e,nn=Math.max(3,t);const r=fi(e),s=fi(nn,40);n==="yoz"?(st.position.set(r,0,0),at.position.set(s,0,0)):n==="xoz"?(st.position.set(0,r,0),at.position.set(0,s,0)):(st.position.set(0,0,r),at.position.set(0,0,s)),st.lookAt(0,0,0),at.lookAt(0,0,0),ss(e),as(nn),Te.target.set(0,0,0),Ie.target.set(0,0,0),(o=Te.handleResize)==null||o.call(Te),(a=Ie.handleResize)==null||a.call(Ie),Te.update(),Ie.update(),(c=g.toolXOY)==null||c.classList.toggle("active",n==="xoy"),(l=g.toolYOZ)==null||l.classList.toggle("active",n==="yoz"),(u=g.toolXOZ)==null||u.classList.toggle("active",n==="xoz")}function Ih(i=Math.max(2.5,hi*.6)){const e=g.projectionViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Et.left=-i*t,Et.right=i*t,Et.top=i,Et.bottom=-i):(Et.left=-i,Et.right=i,Et.top=i/t,Et.bottom=-i/t),Et.near=.1,Et.far=1e3,Et.updateProjectionMatrix()}function uv(i=Math.max(3,hi*.5)){var e;Xc=i,Et.up.set(0,0,1),Et.position.set(i*.78,-i*1.18,i*.68),Et.lookAt(0,0,0),Ih(i),hn.target.set(0,0,0),(e=hn.handleResize)==null||e.call(hn),hn.update()}function Kc(i=4.5){const e=g.radialViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Ct.left=-i*t,Ct.right=i*t,Ct.top=i,Ct.bottom=-i):(Ct.left=-i,Ct.right=i,Ct.top=i/t,Ct.bottom=-i/t),Ct.near=.1,Ct.far=1e3,Ct.updateProjectionMatrix()}function dv(i=4.5){var e;ya=i,Ct.position.set(i*.65,-i*.9,i*.7),Ct.lookAt(0,0,0),Kc(i),Ft.target.set(0,0,0),(e=Ft.handleResize)==null||e.call(Ft),Ft.update()}function hv(){var n;if(!Fa()||!((n=g.syncRotation)!=null&&n.checked))return;const i=st.position.clone().sub(Te.target).normalize(),e=st.up.clone(),t=(r,s,o,a=40)=>{const c=fi(o,a);r.position.copy(i.clone().multiplyScalar(c)),r.up.copy(e),r.lookAt(0,0,0),s.target.set(0,0,0),r.updateProjectionMatrix()};t(at,Ie,nn,40),t(Et,hn,Xc,30)}function fv(i,e){const t={...e,radius:Math.max(4,Math.min(8,e.radius*.55)),thetaSegments:72},{positive:n,negative:r}=sv(i,t);ei=Ma(n,tn(e.positiveColor),1),ti=Ma(r,tn(e.negativeColor),1),Sa(ei,{...e,smooth:e.smooth||!e.wireframe,wireframe:e.wireframe},!0),Sa(ti,{...e,smooth:e.smooth||!e.wireframe,wireframe:e.wireframe},!0),ei.scale.setScalar(.74),ti.scale.setScalar(.74),ei.visible=e.showPositive,ti.visible=e.showNegative,Dt.add(ei,ti);const s=cv(ei,ti),o=Math.max(4.2,s*1.45);e.showNode&&(Jr=J_(i,Math.max(s*1.16,2.8),e),Jr&&Dt.add(Jr)),rv(o,e.showAxis),nn=Math.max(nn,o*1.12)}const Gr=(()=>{const i=[255,0,0],e=[255,0,255],t=[255,255,255],n=[0,255,255],r=[0,0,255],s=[],o=(c,l)=>{for(let u=0;u<l;u+=1)s.push(c)},a=(c,l,u)=>{const h=[(l[0]-c[0])/u,(l[1]-c[1])/u,(l[2]-c[2])/u];for(let d=0;d<u;d+=1)s.push([c[0]+d*h[0],c[1]+d*h[1],c[2]+d*h[2]])};return o(i,20),a(i,e,80),a(e,t,25),o(t,5),a(t,n,25),a(n,r,80),o(r,20),s.reverse().map(([c,l,u])=>new ye(c/255,l/255,u/255))})();function Oa(i){const t=(Math.max(-1,Math.min(1,i))+1)/2*(Gr.length-1),n=Math.max(0,Math.min(Gr.length-1,Math.floor(t))),r=Math.max(0,Math.min(Gr.length-1,n+1));return Gr[n].clone().lerp(Gr[r],t-n)}function pv(i,e,t,n,r,s){const o=e.rows,a=o.length,c=2*t/(a-1),l=Math.max(1,Math.round(.4/c)),u=new zi({color:16777215,transparent:!0,opacity:.56}),h=(d,f)=>{const x=-t+2*t*d/(a-1),v=-t+2*t*f/(a-1),m=o[f][d]/s;return new L(x,v,n+m*r+.012)};for(let d=0;d<a;d+=l){const f=[];for(let x=0;x<a;x+=1)f.push(h(x,d));i.add(new ns(new We().setFromPoints(f),u))}for(let d=0;d<a;d+=l){const f=[];for(let x=0;x<a;x+=1)f.push(h(d,x));i.add(new ns(new We().setFromPoints(f),u))}}function mv(i,e,t,n,r,s=1){const o=e.rows,a=o.length,c=2*t/(a-1),l=[(h,d,f)=>new L(-t+(h+f)*c,-t+d*c,n),(h,d,f)=>new L(-t+(h+1)*c,-t+(d+f)*c,n),(h,d,f)=>new L(-t+(h+1-f)*c,-t+(d+1)*c,n),(h,d,f)=>new L(-t+h*c,-t+(d+1-f)*c,n)],u=[[0,1],[1,2],[2,3],[3,0]];for(const h of r){const d=new zi({color:Oa(h).getHex(),transparent:!0,opacity:.95}),f=[];for(let x=0;x<a-1;x+=1)for(let v=0;v<a-1;v+=1){const m=[o[x][v],o[x][v+1],o[x+1][v+1],o[x+1][v]].map(y=>y/s),p=[];for(let y=0;y<4;y+=1){const[_,w]=u[y],A=m[_]-h,E=m[w]-h;if(A===0||A*E<0){const b=Math.abs(A)+Math.abs(E);if(b<1e-12)continue;const T=Math.max(0,Math.min(1,Math.abs(A)/b));p.push(l[y](v,x,T))}}p.length>=2&&(f.push(p[0],p[1]),p.length>=4&&f.push(p[2],p[3]))}f.length&&i.add(new Pc(new We().setFromPoints(f),d))}}const Mn={radius:16756736,direction:3538793,point:16776960};function Fa(){var i;return!!((i=g.relationMode)!=null&&i.checked)}function gv(){const i=[[ot,dc],[Gn,hc],[Wn,fc],[Dt,pc]];for(const[e,t]of i)t&&wn(e,t);dc=null,hc=null,fc=null,pc=null}function ad(i){var n,r;let e=0;const t=new L;return(n=i==null?void 0:i.updateMatrixWorld)==null||n.call(i,!0),(r=i==null?void 0:i.traverse)==null||r.call(i,s=>{var a,c;const o=(c=(a=s.geometry)==null?void 0:a.attributes)==null?void 0:c.position;if(o){s.updateMatrixWorld(!0);for(let l=0;l<o.count;l+=1)t.fromBufferAttribute(o,l).applyMatrix4(s.matrixWorld),e=Math.max(e,t.length())}}),e}function xv(i){const e=Math.max(ad(zt),ad(yn));Da=e>.001?e*1.02:i.radius*.86}function Dh(){var h,d,f,x;const i=en(),e=Math.max(0,Math.min(100,Number(((h=g.scanRadius)==null?void 0:h.value)??45))),t=Math.max(0,Math.min(180,Number(((d=g.scanTheta)==null?void 0:d.value)??90))),n=(Number(((f=g.scanPhi)==null?void 0:f.value)??0)%360+360)%360,r=Math.max(.001,Da||i.radius),s=r*e/100,o=t*Math.PI/180,a=n*Math.PI/180,c=new L(Math.sin(o)*Math.cos(a),Math.sin(o)*Math.sin(a),Math.cos(o)).normalize(),l=c.clone().multiplyScalar(s),u=Number(((x=g.scanSliceZ)==null?void 0:x.value)??0);return{options:i,radiusPercent:e,thetaDegrees:t,phiDegrees:n,r:s,maxRadius:r,direction:c,point:l,sliceZ:u}}function _v(i=Dh()){g.scanRadiusValue&&(g.scanRadiusValue.value=`${Math.round(i.radiusPercent)}%`),g.scanThetaValue&&(g.scanThetaValue.value=`${Math.round(i.thetaDegrees)}°`),g.scanPhiValue&&(g.scanPhiValue.value=`${Math.round(i.phiDegrees)}°`),g.scanSliceZValue&&(g.scanSliceZValue.value=`${Math.round(i.sliceZ)}`)}function Jc(i,e,t=.95){const n=new zi({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});n.toneMapped=!1;const r=new ns(new We().setFromPoints(i),n);return r.renderOrder=30,r}function vv(i,e,t=.95){const n=new zi({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});n.toneMapped=!1;const r=new Pc(new We().setFromPoints(i),n);return r.renderOrder=30,r}function yv(i,e=16777215,t=.026,n=1){const r=new mh(i,!1,"centripetal",.18),s=new Oc(r,Math.max(80,i.length*2),t,8,!1),o=new Vt({color:e,transparent:n<1,opacity:n,depthTest:!1,depthWrite:!1});o.toneMapped=!1;const a=new Ye(s,o);return a.renderOrder=31,a}function xc(i,e,t,n=.95){const r=[];for(let o=0;o<=160;o+=1){const a=Math.PI*2*o/160;r.push(new L(i*Math.cos(a),i*Math.sin(a),e))}return Jc(r,t,n)}function Nh(i,e,t=.74){const n=[],o=a=>{for(let c=0;c<160;c+=1){const l=Math.PI*2*c/160,u=Math.PI*2*(c+1)/160;n.push(a(l),a(u))}};for(let a=1;a<12;a+=1){const c=Math.PI*a/12,l=Math.cos(c)*i,u=Math.sin(c)*i;o(h=>new L(u*Math.cos(h),u*Math.sin(h),l))}for(let a=0;a<6;a+=1){const c=Math.PI*a/6;o(l=>new L(i*Math.sin(l)*Math.cos(c),i*Math.sin(l)*Math.sin(c),i*Math.cos(l)))}return vv(n,e,t)}function hs(i,e,t=1){const n=new Vt({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});n.toneMapped=!1;const r=new Ye(new Rr(i,24,16),n);return r.renderOrder=32,r}function Uh(i,e,t,n,r){const s=new Jx(i,new L(0,0,0),e,t,n,r);return s.traverse(o=>{o.material&&(o.material.depthTest=!1,o.material.depthWrite=!1,o.material.toneMapped=!1,o.renderOrder=31)}),s}function Mv(i,e,t){return e==="xoz"?new pe(i.x*t,i.z*t):e==="yoz"?new pe(i.y*t,i.z*t):new pe(i.x*t,i.y*t)}function Sv(i,e){const t=i.length();return t>e&&t>1e-9&&i.multiplyScalar(e/t),i}function wv(i){const e=new pt;i.r>.001&&e.add(Nh(i.r,Mn.radius,.72));const t=Math.max(i.r,i.maxRadius*.22,1);e.add(Uh(i.direction,t,Mn.direction,t*.11,t*.035));const n=hs(Math.max(.08,i.maxRadius*.018),Mn.point);n.position.copy(i.point),e.add(n),ot.add(e),dc=e}function Ev(i){const e=new pt,t=Math.max(2.4,nn*.55);e.add(Uh(i.direction,t,Mn.direction,t*.14,t*.045));const n=hs(.08,Mn.point);n.position.copy(i.direction.clone().multiplyScalar(t)),e.add(n),Dt.add(e),pc=e}function bv(i){if(!In)return;const e=new pt,t=In.radius*.92,n=In.radius/Math.max(1e-4,i.maxRadius),r=Math.max(0,i.r*n),s=r>t?t/r:1,o=n*s,a=Math.min(t,Math.max(0,i.r*o));e.add(xc(a,In.bottomZ+.18,Mn.radius,.95));const c=Sv(Mv(i.point,In.plane,o),t),l=hs(.075,Mn.point);l.position.set(c.x,c.y,In.bottomZ+.28),e.add(l),e.add(Jc([new L(0,0,In.bottomZ+.22),new L(c.x,c.y,In.bottomZ+.22)],Mn.direction,.82)),Gn.add(e),hc=e}function Av(i){if(!cn)return;const e=i.r/Math.max(1e-4,cn.radialExtent);if(Fn){const a=Fn.userData.rings,c=Math.max(1,Math.round(e*a));Fn.geometry.setDrawRange(0,c*128*6)}if(Dn){const a=Dn.userData.rings,c=Math.max(1,Math.round(e*a)),l=Dn.userData.sideAngles;Dn.geometry.setDrawRange(0,c*l*6)}if(zn){const a=zn.userData.samples,c=a*2+1,l=Math.max(1,Math.round(e*a)),u=zn.geometry.parameters.tubularSegments,h=u/c,d=u/2,f=l*h,x=l*h,v=Math.max(0,Math.floor(d-x)),m=Math.ceil(f+x);zn.geometry.setDrawRange(v*8*6,m*8*6)}const t=new pt,n=Math.min(cn.radiusScale,e*cn.radiusScale),r=tl(Rt(),i.r,i.options.radialMode),s=cn.curveBaseZ+r/cn.maxAbs*cn.heightScale;t.add(Jc([new L(n,0,cn.baseZ-.15),new L(n,0,cn.heightTop)],Mn.radius,.95));const o=hs(.07,Mn.point);o.position.set(n,0,s),t.add(o),Wn.add(t),fc=t}function fs(){gv();const i=Dh();_v(i),fn.constant;const e=i.sliceZ/100*i.maxRadius;fn.constant=e;let t=ot.getObjectByName("relationSliceCap");if(t&&(wn(ot,t),t=null),!Fa()){fn.constant=100;return}Math.abs(e)<i.maxRadius&&(t=Lh(Rt(),i.options,"z",null,e,.75),t&&(t.name="relationSliceCap",ot.add(t))),wv(i),Ev(i),bv(i),Av(i)}function Tv(i){const e=i.length();if(e<1e-6)return;const t=Math.acos(Math.max(-1,Math.min(1,i.z/e))),n=(Math.atan2(i.y,i.x)+Math.PI*2)%(Math.PI*2);g.scanRadius&&(g.scanRadius.value=String(Math.round(Math.max(0,Math.min(100,e/Math.max(1e-4,Da)*100))))),g.scanTheta&&(g.scanTheta.value=String(Math.round(t*180/Math.PI))),g.scanPhi&&(g.scanPhi.value=String(Math.round(n*180/Math.PI))),fs(),setStatus(`关联高亮：r=${e.toFixed(2)}, θ=${Math.round(t*180/Math.PI)}°, φ=${Math.round(n*180/Math.PI)}°`)}function Cv(i){var o;if(!Fa())return;const e=rn.domElement.getBoundingClientRect(),t=new pe((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),n=new Kx;n.params.Points.threshold=Math.max(.12,en().radius*.025),n.setFromCamera(t,st);const r=[zt,yn,Un,On].filter(Boolean),s=n.intersectObjects(r,!0);(o=s[0])!=null&&o.point&&Tv(s[0].point)}function Qc(i){const e=En(i.n,i.l,i.m).replace(/^\d+/,"");return e.startsWith("Dyz")||e.startsWith("Fyz2")||e.startsWith("Gz3y")||e.startsWith("Gzy3")||e.startsWith("Gyz3")||e.startsWith("Hyz4")||e.startsWith("Hyz")?"yoz":e.startsWith("Pz")||e.startsWith("Dz2")||e.startsWith("Dxz")||e.startsWith("Fz3")||e.startsWith("Fxz2")||e.startsWith("Gz4")||e.startsWith("Gz3x")||e.startsWith("Gxz3")||e.startsWith("Gzx3")||e.startsWith("Hxz4")||e.startsWith("Hz5")||e.startsWith("Hxz")?"xoz":"xoy"}function Oh(i,e,t,n){const r=[],s=e.radius;let o=0,a=0,c=0;for(let l=0;l<n;l+=1){const u=[],h=-s+2*s*l/(n-1);for(let d=0;d<n;d+=1){const f=-s+2*s*d/(n-1);let x=0;const v=e.sliceOffset||0;t==="xoy"&&(x=sa(i,f,h,v)),t==="xoz"&&(x=sa(i,f,v,h)),t==="yoz"&&(x=sa(i,v,f,h)),o=Math.max(o,Math.abs(x)),a=Math.max(a,x),c=Math.min(c,x),u.push(x)}r.push(u)}return{data:{rows:r,maxAbs:o,maxPositive:a,minNegative:c},scale:1}}function Fh(i,e){const t=new pt,r=Vi(i).gridSize*2+1,s=e.slice!=="none"?e.slice:Qc(i),{data:o}=Oh(i,e,s,r),a=(o.maxPositive>1e-12?o.maxPositive:o.maxAbs||1)/.9,c=[],l=[],u=[],h=e.radius,d=h*.9;for(let y=0;y<r;y+=1)for(let _=0;_<r;_+=1){const w=-h+2*h*_/(r-1),A=-h+2*h*y/(r-1),E=o.rows[y][_]/a,T=E*d;let S,M,P;s==="xoy"?(S=w,M=A,P=T):s==="xoz"?(S=w,M=T,P=A):s==="yoz"&&(S=T,M=w,P=A),c.push(S,M,P);const D=Oa(E);l.push(D.r,D.g,D.b)}for(let y=0;y<r-1;y+=1)for(let _=0;_<r-1;_+=1){const w=y*r+_,A=w+1,E=w+r,b=E+1;u.push(w,E,A,A,E,b)}const f=new We;f.setAttribute("position",new De(c,3)),f.setAttribute("color",new De(l,3)),f.setIndex(u),f.computeVertexNormals();const x=new Ye(f,new pr({vertexColors:!0,side:dt,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04}));x.name="integratedProjectionMountain",t.add(x);const v=[];for(let y=0;y<r;y+=1)for(let _=0;_<r;_+=1){const w=-h+2*h*_/(r-1),A=-h+2*h*y/(r-1);s==="xoy"?v.push(w,A,0):s==="xoz"?v.push(w,0,A):s==="yoz"&&v.push(0,w,A)}const m=new We;m.setAttribute("position",new De(v,3)),m.setAttribute("color",new De(l,3)),m.setIndex(u),m.computeVertexNormals();const p=new Ye(m,new Vt({vertexColors:!0,side:dt,transparent:!0,opacity:.85}));return p.name="integratedProjectionSlice",t.add(p),t.userData.vertexCount=r*r,t.userData.slicePlane=s,t.userData.radius=h,t.userData.size=r,t.userData.projectionScale=a,t}function Rv(i,e){const t=`${i.n}|${i.l}|${i.z}`;if(window._maxPsiCache&&window._maxPsiCache[t])return window._maxPsiCache[t];let n=0,r=0;const s=20,o=Math.min(4.7,e.radius*.42);for(let c=0;c<=s;c++){const l=-o+2*o*c/s;for(let u=0;u<=s;u++){const h=-o+2*o*u/s;for(let d=0;d<=s;d++){const f=-o+2*o*d/s,x=sa(i,f*2.38,h*2.38,l*2.38);Math.abs(x)>n&&(n=Math.abs(x)),x>r&&(r=x)}}}const a={maxAbs:n,maxPos:r};return window._maxPsiCache||(window._maxPsiCache={}),window._maxPsiCache[t]=a,a}function el(i,e){Gn.background=new ye(e.backgroundColor);const t=new pt,r=Vi(i).gridSize*2+1,s=e.slice!=="none"?e.slice:Qc(i),{data:o}=Oh(i,e,s,r),a=Rv(i,e),c=(a.maxPos>1e-12?a.maxPos:a.maxAbs||1)/.9,l=[],u=[],h=[],d=Math.min(4.7,e.radius*.42),f=d*1,x=-d*1,v=d*.9;In={plane:s,radius:d,surfaceZ:f,bottomZ:x,height:v};for(let E=0;E<r;E+=1)for(let b=0;b<r;b+=1){const T=-d+2*d*b/(r-1),S=-d+2*d*E/(r-1),M=o.rows[E][b]/c,P=M;l.push(T,S,f+P*v);const D=Oa(M);u.push(D.r,D.g,D.b)}for(let E=0;E<r-1;E+=1)for(let b=0;b<r-1;b+=1){const T=E*r+b,S=T+1,M=T+r,P=M+1;h.push(T,M,S,S,M,P)}const m=new We;m.setAttribute("position",new De(l,3)),m.setAttribute("color",new De(u,3)),m.setIndex(h),m.computeVertexNormals(),gr=new Ye(m,new pr({vertexColors:!0,side:dt,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04})),t.add(gr),pv(t,o,d,f,v,c);const p=new pt,y=[];for(let E=0;E<r;E+=1)for(let b=0;b<r;b+=1){const T=-d+2*d*b/(r-1),S=-d+2*d*E/(r-1);y.push(T,S,x+.02)}const _=new We;_.setAttribute("position",new De(y,3)),_.setAttribute("color",new De(u,3)),_.setIndex(h),_.computeVertexNormals();const w=new Ye(_,new Vt({vertexColors:!0,side:dt,transparent:!0,opacity:.78}));p.add(w);const A=(E,b,T)=>Array.from({length:T},(S,M)=>E+(b-E)*M/(T-1));mv(p,o,d,x+.08,[...A(-1,0,20),...A(0,1,20)],c),Qr=p,t.add(Qr),Ci=Ch(d),Ci.scale.z=1,Ci.position.z=(f+x)/2,t.add(Ci),gr=t,Qr=null,Ci=null,Gn.add(t),uv(d*1.92),fs()}function tl(i,e,t){const n=Math.max(e,1e-4),r=ci(i.n,i.l,i.z,n);return t==="R"?r:t==="R2"?r*r:n*n*r*r}function od(i,e=11974326){const t=Math.abs(i),n=Math.max(0,Math.min(1,(t-.035)/.72)),r=n*n*(3-2*n);return new ye(e).lerp(Oa(i),r)}function Pv(i,e,t,n){const r=Hc(e).filter(o=>o>.02&&o<n.radialExtent*.995);if(!r.length)return;const s=n.curveBaseZ??(t.radialSide?n.sideZ:n.diskZ+n.curveLift);for(const o of r){const a=o/n.radialExtent*n.radiusScale;if(t.radialCurve){const c=tl(e,o,t.radialMode),l=s+c/n.maxAbs*n.heightScale;for(const u of[-1,1]){const h=hs(.065,16761856,.95);h.position.set(u*a,0,l),i.add(h)}}}}function os(i,e){var E;Wn.background=new ye(e.backgroundColor);const t=i.n>=5?260:190,n=i.n>=5?132:96,r=Fa()?Math.max(.001,Da||rc(i)):Math.max(5,rc(i)),s=[];for(let b=0;b<=t;b+=1)s.push(tl(i,r*b/t,e.radialMode));const o=Math.max(...s.map(Math.abs),1e-6),a=3.7,c=a*.43,l=-1.25,u=l,h=.08,d=u+a*.72,f=e.radialSide?d:u+h,x=f+s[0]/o*c;cn={radialExtent:r,radiusScale:a,heightScale:c,baseZ:l,diskZ:u,curveLift:h,sideZ:d,curveBaseZ:f,curveOriginZ:x,maxAbs:o,heightTop:f+c+.38};const v=new pt,m=new Ye(new Rr(a,128,48,0,Math.PI*2,Math.PI/2,Math.PI/2),new pr({color:12105912,side:dt,transparent:!0,opacity:.88,shininess:1,specular:2236962}));m.rotation.x=Math.PI/2,m.position.z=l,v.add(m);const p=new We,y=[],_=[],w=[];for(let b=0;b<=n;b+=1){const T=b/n*a,S=Math.round(b/n*t),M=s[S]/o;for(let P=0;P<=128;P+=1){const D=Math.PI*2*P/128,U=T*Math.cos(D),k=T*Math.sin(D);y.push(U,k,u);const B=od(M,12105912);_.push(B.r,B.g,B.b)}}const A=129;for(let b=0;b<n;b+=1)for(let T=0;T<128;T+=1){const S=b*A+T,M=S+1,P=S+A,D=P+1;w.push(S,P,M,M,P,D)}if(p.setAttribute("position",new De(y,3)),p.setAttribute("color",new De(_,3)),p.setIndex(w),p.computeVertexNormals(),Fn=new Ye(p,new pr({vertexColors:!0,side:dt,transparent:!1,opacity:1,shininess:8,specular:2236962})),Fn.userData.rings=n,Fn.userData.samples=t,v.add(Fn),e.radialSide){const b=new Ye(new Cr(a,a,Math.max(.1,d-u),160,1,!0),new $x({color:14149604,side:dt,transparent:!0,opacity:.24,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.28,ior:1.45,transmission:.08,specularIntensity:.5,specularColor:16777215}));b.rotation.x=Math.PI/2,b.position.z=(d+u)/2,b.renderOrder=2,v.add(b),v.add(xc(a,d,16777215,.12)),v.add(xc(a,u,16777215,.08));const T=new We,S=[],M=[],P=[],D=e.radialSection?64:128,U=(e.radialSection,0),k=e.radialSection?Math.PI:Math.PI*2;for(let F=0;F<=n;F+=1){const X=F/n*a,H=Math.round(F/n*t),ee=s[H]/o,re=d+ee*c;for(let ie=0;ie<=D;ie+=1){const K=U+k*ie/D,fe=X*Math.cos(K),W=X*Math.sin(K);S.push(fe,W,re);const J=od(ee,11711154);M.push(J.r,J.g,J.b)}}const B=D+1;for(let F=0;F<n;F+=1)for(let X=0;X<D;X+=1){const H=F*B+X,ee=H+1,re=H+B,ie=re+1;P.push(H,re,ee,ee,re,ie)}T.setAttribute("position",new De(S,3)),T.setAttribute("color",new De(M,3)),T.setIndex(P),T.computeVertexNormals(),Dn=new Ye(T,new pr({vertexColors:!0,side:dt,transparent:!1,opacity:1,shininess:10,specular:3355443})),Dn.userData.rings=n,Dn.userData.samples=t,Dn.userData.sideAngles=D,v.add(Dn)}if(e.radialCurve){const b=[],T=f;for(let M=0;M<=t;M+=1){const P=a*M/t,D=T+s[M]/o*c;b.push(new L(P,0,D))}const S=b.slice(1).map(M=>new L(-M.x,0,M.z)).reverse();zn=yv([...S,...b],16777215,e.radialSide?.013:.011),zn.userData.samples=t,v.add(zn)}if(e.radialAxis){const b=x;Ni=n_(a+.9,a+.45,b,e.radialMode),v.add(Ni)}Pv(v,i,e,cn),lc=v,Wn.add(v),Ni=null,uc=null,e.radialSide?(ya=4.9,Ct.position.set(0,-7.2,d+1.25),Ct.lookAt(0,0,0),Kc(ya),Ft.target.set(0,0,0),(E=Ft.handleResize)==null||E.call(Ft),Ft.update()):dv(5.3),fs()}function ba(){Lv();const i=(e,t,n,r,s)=>{var a;const o=e.getBoundingClientRect();o.width<2||o.height<2||(t.setSize(o.width,o.height,!1),t.domElement.style.width="100%",t.domElement.style.height="100%",n(s),(a=r.handleResize)==null||a.call(r),r.update())};i(g.viewer,rn,ss,Te,hi),i(g.angularViewer,gi,as,Ie,nn),i(g.projectionViewer,Pr,Ih,hn,Xc),i(g.radialViewer,Lr,Kc,Ft,ya);for(const e of Ii)nl(e,e.radius);c_(),__()}function Lv(){const i=document.querySelector(".sidebar"),e=i==null?void 0:i.querySelector(".sidebar-fit");if(!i)return;if(window.matchMedia("(max-width: 900px)").matches){document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");return}document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");const t=getComputedStyle(i),n=i.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),r=(e==null?void 0:e.scrollHeight)||i.scrollHeight;if(!n||!r||r<=n+4)return;const s=Math.max(.72,Math.min(1,(n-4)/r));document.documentElement.style.setProperty("--sidebar-zoom",s.toFixed(3)),document.documentElement.style.setProperty("--sidebar-fit-height",`${Math.ceil(r*s)}px`)}function ui(){requestAnimationFrame(()=>{ba(),requestAnimationFrame(()=>{ba(),_a()})})}function Iv(i){const t={正相:"orbital",负相:"orbital",节点:"orbital",投影平面:"projection",径向节点:"radial"}[i]||"orbital";return document.querySelector(`[data-annotation-layer="${t}"]`)}function Dv(i){return i==="正相"?"positive":i==="负相"?"negative":i==="节点"?"node":i==="投影平面"?"projection":i==="径向节点"?"radial":""}function cd(i){const e=Iv(i);if(!e)return;const t=document.createElement("button");t.type="button",t.className=`annotation-note ${Dv(i)}`.trim(),t.textContent=i;const n=e.querySelectorAll(".annotation-note").length;t.style.left=`${12+n%4*12}%`,t.style.top=`${14+n%3*14}%`,e.appendChild(t)}function ld(){for(const i of document.querySelectorAll(".annotation-layer"))i.replaceChildren()}function ud(i){i.target.closest(".annotation-note")}function dd(i){const e=$e.annotationDrag;if(!e)return;i.preventDefault();const t=e.layer.getBoundingClientRect(),n=e.note.getBoundingClientRect(),r=Math.max(0,Math.min(t.width-n.width,i.clientX-t.left-e.offsetX)),s=Math.max(0,Math.min(t.height-n.height,i.clientY-t.top-e.offsetY));e.note.style.left=`${r}px`,e.note.style.top=`${s}px`}function hd(){$e.annotationDrag=null}function za(i){const[e,t,n]=i.split(",").map(Number);return{n:e,l:t,m:n}}function Nv(i){var a;if(!i)return null;let e=Ii.find(c=>c.container===i);if(e)return i.contains(e.renderer.domElement)||i.appendChild(e.renderer.domElement),e;const t=new ls;t.background=new ye(((a=g.backgroundColor)==null?void 0:a.value)||"#000000");const n=new Fi(-5,5,5,-5,.1,2e3),r=new cs({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.appendChild(r.domElement);const s=ki(n,r.domElement);ds(i,s),t.add(new us(16777215,.5));const o=new Bi(16777215,1.2);return o.position.set(0,0,80),t.add(o),e={container:i,scene:t,camera:n,renderer:r,controls:s,objects:[],radius:5,target:new L,resizeObserver:null,isLeader:!1},s.addEventListener("start",()=>{for(const c of Ii)c.isLeader=!1;e.isLeader=!0}),"ResizeObserver"in window&&(e.resizeObserver=new ResizeObserver(()=>nl(e,e.radius)),e.resizeObserver.observe(i)),Ii.push(e),Ii.length===1&&(e.isLeader=!0),e}function Uv(i){if(i){for(const e of i.objects)wn(i.scene,e);i.objects=[]}}function nl(i,e){var o,a;if(!i)return;const t=i.container.getBoundingClientRect();if(t.width<2||t.height<2)return;i.renderer.setSize(t.width,t.height,!1);const n=t.width/t.height,r=Math.max(3,e);n>=1?(i.camera.left=-r*n,i.camera.right=r*n,i.camera.top=r,i.camera.bottom=-r):(i.camera.left=-r,i.camera.right=r,i.camera.top=r/n,i.camera.bottom=-r/n),i.camera.near=.1,i.camera.far=Math.max(1e3,r*8);const s=i.target??new L;i.camera.position.set(s.x,s.y,s.z+fi(r,40)),i.camera.lookAt(s),i.camera.updateProjectionMatrix(),i.controls.target.copy(s),(a=(o=i.controls).handleResize)==null||a.call(o),i.controls.update()}function Ov(i,e,t){const n=new Vn;let r=!1;for(const s of e){s.updateMatrixWorld(!0);const o=new Vn().setFromObject(s);Number.isFinite(o.min.x)&&Number.isFinite(o.min.y)&&Number.isFinite(o.min.z)&&Number.isFinite(o.max.x)&&Number.isFinite(o.max.y)&&Number.isFinite(o.max.z)&&(n.union(o),r=!0)}if(r){const s=n.getBoundingSphere(new mi);i.target.copy(s.center),i.radius=Math.max(2.5,t,s.radius*1.2)}else i.target.set(0,0,0),i.radius=Math.max(2.5,t);nl(i,i.radius)}async function Aa(i,e,t,n){var v,m;const r=Nv(i);if(!r)return null;const s={...za(e),z:Number((v=g.z)==null?void 0:v.value)||1},o=Vi(s),a=Math.max(4,Math.min(10,o.radius*.08)),c=Math.min(78,Math.max(42,Math.round(o.gridSize*.72))),l={iso:o.iso,density:c,radius:o.radius,opacity:.96,smooth:!1,wireframe:!0,cutaway:"none",showPositive:!0,showNegative:!0,positiveColor:g.positiveColor.value,negativeColor:g.negativeColor.value,backgroundColor:((m=g.backgroundColor)==null?void 0:m.value)||"#000000"};r.scene.background=new ye(l.backgroundColor),Uv(r);const u=await mc(0,s,l,1,l.positiveColor),h=await mc(1,s,l,-1,l.negativeColor),d=a/Math.max(1,o.radius);u.scale.multiplyScalar(d),h.scale.multiplyScalar(d);const f=xa(Math.max(1.6,a*.5));r.scene.add(u,h,f),r.objects.push(u,h,f),Ov(r,[u,h,f],a*1.45);const x=En(s.n,s.l,s.m);return t&&(t.textContent=x),n&&(n.textContent=`${va(s.n,s.l)}；n=${s.n}, l=${s.l}, |m|=${Math.abs(s.m)}`),{params:s,label:x,nodes:va(s.n,s.l)}}async function _c(){var t,n;const i=await Aa(g.compareAViewer,(t=g.compareA)==null?void 0:t.value,g.compareATitle,g.compareANotes),e=await Aa(g.compareBViewer,(n=g.compareB)==null?void 0:n.value,g.compareBTitle,g.compareBNotes);if(i&&e&&g.compareSummary){const r=i.params.l===e.params.l&&Math.abs(i.params.m)===Math.abs(e.params.m);g.compareSummary.textContent=r?`${i.label} 与 ${e.label} 角向类型相同，重点比较径向节点随 n 增加的变化。`:`${i.label} 与 ${e.label} 角向类型不同，重点比较节点面方向、相位分布和对称性。`}}async function vc(i){var e,t;return i==="a"?Aa(g.compareAViewer,(e=g.compareA)==null?void 0:e.value,g.compareATitle,g.compareANotes):i==="b"?Aa(g.compareBViewer,(t=g.compareB)==null?void 0:t.value,g.compareBTitle,g.compareBNotes):null}function Ba(i){const e=za(i);g.n.value=e.n,g.l.value=e.l,g.m.value=Math.abs(e.m),g.cosType.checked=e.m>=0,g.sinType.checked=e.m<0,Rt(),Na(),Tt()}function fd(i,e){var s,o,a,c;const t=za(i);Ba(i),g.mainWindow&&(g.mainWindow.classList.remove("closed","minimized","maximized"),updateWindowControlLabels(g.mainWindow)),g.positiveLobe&&(g.positiveLobe.checked=!0),g.negativeLobe&&(g.negativeLobe.checked=!0),g.wireframe&&g.smooth&&!g.wireframe.checked&&!g.smooth.checked&&(g.wireframe.checked=!0),Rt(),Tt();const n=vc(e),r=(n==null?void 0:n.label)||En(t.n,t.l,t.m);g.compareSummary&&(g.compareSummary.textContent=`已载入主视图：${r}`),e==="a"?(o=(s=g.compareAViewer)==null?void 0:s.closest(".compare-view-card"))==null||o.scrollIntoView({block:"nearest",inline:"nearest"}):e==="b"&&((c=(a=g.compareBViewer)==null?void 0:a.closest(".compare-view-card"))==null||c.scrollIntoView({block:"nearest",inline:"nearest"})),ui()}function yc(i){if(!g.activityWindow)return;const e=i||"predict";g.activityWindow.classList.remove("closed","minimized"),g.activityWindow.style.zIndex="125";for(const s of g.activityPanes??[]){const o=s.dataset.activityPane||s.id.replace(/Pane$/,"");s.classList.toggle("active",o===e)}for(const s of g.activityModeButtons??[])s.classList.toggle("active",s.dataset.activityMode===e);const t=document.querySelector(".client-panel"),n=document.querySelector(".view-grid");e==="challenge"||e==="predict"?(t&&(t.style.opacity="0.5",t.style.filter="blur(8px)",t.style.pointerEvents="none"),n&&(n.style.opacity="0.5",n.style.filter="blur(12px)",n.style.pointerEvents="none")):(t&&(t.style.opacity="1",t.style.filter="none",t.style.pointerEvents="auto"),n&&(n.style.opacity="1",n.style.filter="none",n.style.pointerEvents="auto"));const r={predict:"预测-验证模式",score:"预测评分",diagnosis:"错误诊断",nodes:"节点发现",compare:"轨道对比",challenge:"轨道配对挑战",explain:"原理演示",tablet:"平板课堂"};g.activityTitle&&(g.activityTitle.textContent=r[e]||"课堂互动"),updateWindowControlLabels(g.activityWindow),ui(),e==="compare"&&requestAnimationFrame(()=>{_c(),ui()}),e==="explain"?requestAnimationFrame(()=>{ps($e.explanationStep,{render:!1}),ui()}):(ka(),Vh(null))}const zh=7200;function Fv(){const i=Rt();return En(i.n,i.l,i.m)}const zv=["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"],Bv=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];function Bh(i,e){return(i<0?"⁻":"")+String(Math.abs(i)).split("").map(n=>e[Number(n)]??n).join("")}function pd(i){return Bh(i,zv)}function kv(i){return Bh(i,Bv)}function Vv(i,e){return En(Math.max(1,i+1),i,e).replace(/^\d+/,"")||`l=${i}, m=${e}`}A_({resizeAfterLayoutChange:ui,renderOrbital:Tt,applyPreset,readParams:Rt,downloadBlob:(i,e)=>{const t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=e,t.click(),URL.revokeObjectURL(t.href)},getCloudPositiveObject:()=>Un,getCloudNegativeObject:()=>On,getIsoMeshes:()=>[zt,yn,mr,gr].filter(Boolean)});function kh(){const i=Rt(),e=En(i.n,i.l,i.m),t=i.n-i.l-1,n=i.l;return[{focus:"all",title:`先把 ${e} 看成一个波函数`,formula:"Ψ(r,θ,φ) = Rₙₗ(r) · Yₗᵐ(θ,φ)",text:"四个窗口不是四套不同的计算。它们都来自同一个 Ψ，只是观察方式不同：在空间中取等值面、在平面上取切片、沿半径取曲线，或只看角向部分。",observe:`当前轨道是 ${e}：n=${i.n} 决定尺度和径向层数，l=${i.l} 决定角向节点，m=${i.m} 决定方向和相位分区。`,reason:"先建立“同源”的概念，后面的每张图就不再是孤立图像，而是同一个函数的不同读法。",action:()=>{g.projection&&(g.projection.checked=!0),Tt()}},{focus:"orbital",title:"原子轨道：找出 Ψ 等于某个值的边界",formula:"Ψ(x,y,z) = +c  和  Ψ(x,y,z) = -c",text:"程序先在三维盒子里布满格点，逐点计算 Ψ。把数值等于正等值和负等值的位置连成曲面，就得到你看到的两个相位区域。",observe:"粉色和蓝色表示波函数符号相反，不表示电荷正负。网格越密，等值面越接近真实边界。",reason:"这一步回答“轨道外形怎么来”：它不是画出来的外壳，而是三维标量场中被等值面算法提取出来的边界。",action:()=>{aa({cloud:!1,wireframe:!0,smooth:!0,projection:!1,node:!1,box:!0})}},{focus:"projection",title:"轨道投影：把同一个 Ψ 放到一个平面上读",formula:"例如：z=0 时，观察 Ψ(x,y,0)",text:"投影窗口先选一个最能显示该轨道对称性的平面，再在平面上逐点计算 Ψ。上方曲面用高度表达数值大小，下方等高线表达相位和节点线。",observe:"看上方曲面的峰、谷，再对照下方等高线：峰对应密集的正相线，谷对应密集的负相线，白色过渡附近就是节点。",reason:"这一步把三维轨道压到二维平面，让学生更容易判断相位分区、节点线和方向。",action:()=>{g.projection&&(g.projection.checked=!0),g.box&&(g.box.checked=!0),g.wireframe&&(g.wireframe.checked=!0),g.smooth&&(g.smooth.checked=!1),Tt()}},{focus:"radial",title:"径向分布：只问电子离原子核多远",formula:"P(r) = r² · Rₙₗ(r)²",text:"径向分布函数暂时不关心方向，只沿半径统计概率。R 决定波函数随距离怎样振荡，r² 会把球壳体积因素加进去。",observe:`${e} 的径向节点数是 n-l-1 = ${t}。曲线下凹或接近零的位置，通常对应概率分布中的分层。`,reason:"这一步解释“为什么有的轨道外面还有一层”：那通常来自径向部分，而不是角向形状突然改变。",action:()=>{g.radialR&&(g.radialR.checked=!1),g.radialR2&&(g.radialR2.checked=!1),g.radialRdf&&(g.radialRdf.checked=!0),g.radialSection&&(g.radialSection.checked=!0),g.radialSide&&(g.radialSide.checked=!0),g.radialCurve&&(g.radialCurve.checked=!0),Tt()}},{focus:"angular",title:"角向函数：只看方向怎样分成正负相",formula:"Yₗᵐ(θ,φ) 决定方向、节面和相位",text:"角向函数把半径影响先拿掉，只保留方向上的变化。这样可以直接看到轨道为什么沿某些轴伸展，为什么中间会出现节面。",observe:`${e} 的角向节点数是 l = ${n}。这些节点决定了轨道方向上的分瓣方式。`,reason:"最后再回到原子轨道时，学生就能把外形拆开理解：径向部分决定层数，角向部分决定方向和分瓣。",action:()=>{g.projection&&(g.projection.checked=!1),g.node&&(g.node.checked=!0),g.longitudeNode&&(g.longitudeNode.checked=!0),g.wireframe&&(g.wireframe.checked=!0),Tt()}}]}function Vh(i){var t;for(const n of document.querySelectorAll(".qt-window.teaching-focus"))n.classList.remove("teaching-focus");const e=i==="all"?["orbital","projection","radial","angular"]:[i];for(const n of e)(t=document.querySelector(`[data-window-name="${n}"]`))==null||t.classList.add("teaching-focus")}function il(i){g.explainProgressFill&&(g.explainProgressFill.style.width=`${Math.max(0,Math.min(1,i))*100}%`)}function Hh(){$e.explanationTimer&&clearTimeout($e.explanationTimer),$e.explanationFrame&&cancelAnimationFrame($e.explanationFrame),$e.explanationTimer=null,$e.explanationFrame=null}function Gh(){if(!$e.explanationPlaying)return;const i=(performance.now()-$e.explanationStartedAt)/zh;il(i),$e.explanationFrame=requestAnimationFrame(Gh)}function Wh(){Hh(),$e.explanationStartedAt=performance.now(),Gh(),$e.explanationTimer=setTimeout(()=>{const i=kh();if($e.explanationStep>=i.length-1){$e.explanationPlaying=!1,g.explainPlayButton&&(g.explainPlayButton.textContent="播放"),il(1);return}ps($e.explanationStep+1),$e.explanationPlaying&&Wh()},zh)}function ps(i,e={}){const t=kh(),n=Math.max(0,Math.min(t.length-1,i)),r=t[n];$e.explanationStep=n,g.explainStepBadge&&(g.explainStepBadge.textContent=`第 ${n+1} 步 / ${t.length} 步`),g.explainStepTitle&&(g.explainStepTitle.textContent=r.title),g.explainStepText&&(g.explainStepText.textContent=r.text),g.explainFormula&&(g.explainFormula.textContent=r.formula),g.explainObserveText&&(g.explainObserveText.textContent=r.observe),g.explainReasonText&&(g.explainReasonText.textContent=r.reason),g.explainHintText&&(g.explainHintText.textContent=`正在讲解 ${Fv()}。你可以暂停后旋转任意一个窗口，再继续播放。`),Vh(r.focus),il(0),e.render!==!1&&r.action()}function Hv(){$e.explanationPlaying=!0,g.explainPlayButton&&(g.explainPlayButton.textContent="暂停"),ps($e.explanationStep),Wh()}function ka(){$e.explanationPlaying=!1,g.explainPlayButton&&(g.explainPlayButton.textContent="播放"),Hh()}function md(){$e.explanationPlaying?ka():Hv()}function gd(){ka(),$e.explanationStep=0,ps(0)}function xd(i){ka(),ps($e.explanationStep+i)}function aa(i){i.cloud!=null&&g.cloud&&(g.cloud.checked=i.cloud),i.wireframe!=null&&g.wireframe&&(g.wireframe.checked=i.wireframe),i.smooth!=null&&g.smooth&&(g.smooth.checked=i.smooth),i.projection!=null&&g.projection&&(g.projection.checked=i.projection),i.node!=null&&(g.node&&(g.node.checked=i.node),g.radialNode&&(g.radialNode.checked=i.node),g.polarNode&&(g.polarNode.checked=i.node),g.longitudeNode&&(g.longitudeNode.checked=i.node)),i.box!=null&&g.box&&(g.box.checked=i.box),i.grid3d!=null&&g.grid3d&&(g.grid3d.checked=i.grid3d),Tt()}function Gv(){return Bt.find(i=>{var e;return i.value===((e=g.predictTarget)==null?void 0:e.value)})||$e.challengeTarget||Bt[0]}function _d(){const i=Gv(),e=za(i.value),t=e.n-e.l-1,n=e.l,r=Math.max(60,100-t*4-n*3);g.scorePrompt&&(g.scorePrompt.textContent=`${i.label} 参考评分：${r} 分。检查点：径向节点 ${t} 个，角向节点 ${n} 个，相位正负分区清楚，方向与坐标轴一致。`),Ba(i.value)}function vd(){g.scorePrompt&&(g.scorePrompt.textContent="评分标准：节点数 30 分，相位颜色 25 分，空间方向 25 分，投影/截面对应关系 20 分。")}function yd(){g.scorePrompt&&(g.scorePrompt.textContent="评分会根据当前目标轨道给出节点数、相位、方向和投影四项课堂反馈。")}function Md(i){i==="nodes"?(aa({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!0}),g.diagnosisPrompt&&(g.diagnosisPrompt.textContent="节点诊断：观察径向节点数 n-l-1 与角向节点数 l 是否匹配。")):i==="phase"?(aa({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!1}),g.positiveLobe&&(g.positiveLobe.checked=!0),g.negativeLobe&&(g.negativeLobe.checked=!0),Tt(),g.diagnosisPrompt&&(g.diagnosisPrompt.textContent="相位诊断：紫色/青色两相表示波函数符号相反，不代表电荷正负。")):(aa({cloud:!1,wireframe:!0,smooth:!1,projection:!0,node:!1,box:!0}),g.diagnosisPrompt&&(g.diagnosisPrompt.textContent="投影诊断：对照上方波函数曲面与底部等高线，判断节点线和相位区。"))}function Sd(i){document.body.classList.toggle("tablet-mode",i),i?(setWindowLayout("tile"),yc("tablet"),setStatus("平板课堂：已放大按钮和触控区域。")):setStatus("已恢复普通课堂布局。"),ui()}function wd(){const i=Bt.find(e=>e.value===g.predictTarget.value)??Bt[0];nc(),Ke.strokes=[],Ke.currentStroke=null,Ir(),g.predictPrompt&&(g.predictPrompt.textContent=`请先在画板中预测 ${i.label} 的形状、相位和节面，再点击“显示验证”。`)}function Ed(){const i=Bt.find(e=>e.value===g.predictTarget.value)??Bt[0];Ba(i.value),g.predictPrompt&&(g.predictPrompt.textContent=`已显示 ${i.label}。请对照画板预测与四个窗口中的真实结果。`)}function bd(){const i=Math.floor(Math.random()*Bt.length);$e.challengeTarget=Bt[i],Ba($e.challengeTarget.value),setTimeout(()=>{g.viewerTitle&&(g.viewerTitle.textContent="原子轨道  ?")},120),g.challengePrompt&&(g.challengePrompt.textContent="观察当前四个窗口中的图像，选择你认为对应的轨道名称。")}function Ad(){const i=$e.challengeTarget||Bt[0],e=Bt.find(r=>r.value===g.challengeGuess.value),t=(e==null?void 0:e.value)===i.value;$e.challengeTotal+=1,t&&($e.challengeCorrect+=1);const n=`（累计 ${$e.challengeCorrect}/${$e.challengeTotal}）`;g.viewerTitle&&(g.viewerTitle.textContent=`原子轨道  ${i.label}`),g.challengePrompt&&(g.challengePrompt.textContent=t?`回答正确：这是 ${i.label}。`:`还不对。你的答案是 ${(e==null?void 0:e.label)??""}，正确答案是 ${i.label}。`),setStatus(`轨道配对 ${n}`)}function qh(){z_(performance.now()*.001),kn&&T_(performance.now()),Te.update(),Ie.update(),hn.update(),Ft.update(),hv(),rn.render(ot,st),gi.render(Dt,at),Pr.render(Gn,Et),Lr.render(Wn,Ct);for(const i of Ii)i.controls.update(),i.renderer.render(i.scene,i.camera);requestAnimationFrame(qh)}P_();for(const i of[g.n,g.l,g.m,g.z,g.iso,g.density,g.radius,g.opacity,g.mode,g.slice,g.node,g.axis,g.box,g.positiveColor,g.negativeColor,g.backgroundColor,g.desktopMatch,g.boxSizeDisplay,g.cloud,g.positiveLobe,g.negativeLobe,g.wireframe,g.smooth,g.projection,g.radialSection,g.radialSide,g.radialCurve,g.radialAxis,g.radialNode,g.polarNode,g.longitudeNode,g.grid3d,g.relationMode,g.syncRotation,g.scanRadius,g.scanTheta,g.scanPhi,g.scanSliceZ])i&&i.addEventListener("input",()=>{if(i===g.boxSizeDisplay&&F_(),Rt(),en(),i===g.backgroundColor){Yc(g.backgroundColor.value);return}if(i===g.relationMode){rs(),os(Rt(),en());return}if([g.syncRotation,g.scanRadius,g.scanTheta,g.scanPhi,g.scanSliceZ].includes(i)){if(g.relationMode.checked||(g.relationMode.checked=!0,rs(),os(Rt(),en())),fs(),i===g.scanSliceZ){const e=Rt(),t=en();if(Zc(),el(e,t),t.showProjection3d&&typeof zt<"u"&&zt){const n=zt.children.find(s=>s.name==="integratedProjection3DGroup");n&&(zt.remove(n),typeof wn=="function"&&wn(typeof ot<"u"?ot:null,n));const r=Fh(e,t);r.name="integratedProjection3DGroup",r.visible=!0,zt.add(r)}}return}if(![g.wireframe,g.smooth].includes(i)){if([g.axis,g.box].includes(i)){fastUpdateVisualOptions();return}(i.type==="checkbox"||i.type==="color")&&Tt(!1)}});for(const i of[g.n,g.l,g.m,g.z,g.desktopMatch])i.addEventListener("change",()=>{Na(),Tt(!0)});g.preset.addEventListener("input",applyPreset);g.renderButton.addEventListener("click",()=>Tt(!0));var Td;(Td=g.redrawProxyButton)==null||Td.addEventListener("click",()=>Tt(!0));var Cd;(Cd=g.presetButton)==null||Cd.addEventListener("click",()=>{Na(),Tt(!0)});var Rd;(Rd=g.axisProxyButton)==null||Rd.addEventListener("click",()=>{toggleAxis()});var Pd;(Pd=document.querySelector("#colorProxyButton"))==null||Pd.addEventListener("click",()=>{g.paletteOne.checked=!g.paletteOne.checked,g.paletteTwo.checked=!g.paletteOne.checked,applyPalette(g.paletteOne.checked?"one":"two")});g.resetCameraButton.addEventListener("click",()=>Ea());g.screenshotButton.addEventListener("click",exportImage);for(const i of document.querySelectorAll("[data-window-action]"))i.addEventListener("click",e=>{e.stopPropagation(),handleWindowControl(i)});for(const i of g.menuItems)i.addEventListener("click",e=>{e.stopPropagation(),openMenu(i)});document.addEventListener("click",closeMenu);g.menuPopup.addEventListener("click",i=>i.stopPropagation());Dr.addEventListener("click",exitAppFullscreen);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(Bo=!0,syncFullscreenUi(!0)):Bo&&(Bo=!1,syncFullscreenUi(!1))});var Ld;(Ld=g.toolRender)==null||Ld.addEventListener("click",()=>{closeMenu(),Tt()});var Id;(Id=g.toolSave)==null||Id.addEventListener("click",()=>{closeMenu(),exportImage()});var Dd;(Dd=g.toolTile)==null||Dd.addEventListener("click",()=>{closeMenu(),setWindowLayout("tile")});var Nd;(Nd=g.toolOverlap)==null||Nd.addEventListener("click",()=>{closeMenu(),setWindowLayout("overlap")});var Ud;(Ud=g.toolAxis)==null||Ud.addEventListener("click",()=>{console.log("[DEBUG] User clicked #toolAxis button."),closeMenu(),toggleAxis()});var Od;(Od=g.toolXOY)==null||Od.addEventListener("click",()=>{closeMenu(),setPlaneView("xoy")});var Fd;(Fd=g.toolYOZ)==null||Fd.addEventListener("click",()=>{closeMenu(),setPlaneView("yoz")});var zd;(zd=g.toolXOZ)==null||zd.addEventListener("click",()=>{closeMenu(),setPlaneView("xoz")});setTimeout(()=>{s_(),rn.domElement.addEventListener("click",Cv),window.addEventListener("resize",ba),Yc(),bindExclusiveCheckboxes(),d_(),bindAppUI(),N_(),ba(),setWindowLayout("tile"),Na(),Ea(),Tt(!0),qh()},0);Zh({readParams:typeof Rt<"u"?Rt:null,renderOrbital:typeof Tt<"u"?Tt:null,clearRadialObjects:typeof rs<"u"?rs:null,renderRadialView:typeof os<"u"?os:null,readOptions:typeof en<"u"?en:null,renderer:typeof rn<"u"?rn:null,scene:typeof ot<"u"?ot:null,camera:typeof st<"u"?st:null,reopenViewWindows:typeof gc<"u"?gc:null,resetCamera:typeof Ea<"u"?Ea:null,resetAngularCamera:typeof sd<"u"?sd:null,setAxesVisibility:typeof tc<"u"?tc:null,boxObject:typeof Er<"u"?Er:null,radialAxisObject:typeof Ni<"u"?Ni:null,cameraDistanceForRadius:typeof fi<"u"?fi:null,updateCameraFrustum:typeof ss<"u"?ss:null,updateAngularFrustum:typeof as<"u"?as:null,angularControls:typeof Ie<"u"?Ie:null,angularCamera:typeof at<"u"?at:null,showActivityPane:typeof yc<"u"?yc:null,openSketchWindow:typeof nc<"u"?nc:null,startPrediction:typeof wd<"u"?wd:null,verifyPrediction:typeof Ed<"u"?Ed:null,scoreCurrentPrediction:typeof _d<"u"?_d:null,showScoreRubric:typeof vd<"u"?vd:null,resetScorePrompt:typeof yd<"u"?yd:null,runDiagnosis:typeof Md<"u"?Md:null,renderOrbitalComparison:typeof _c<"u"?_c:null,renderCompareSlot:typeof vc<"u"?vc:null,loadCompareTargetToMain:typeof fd<"u"?fd:null,newChallenge:typeof bd<"u"?bd:null,revealChallenge:typeof Ad<"u"?Ad:null,restartExplanation:typeof gd<"u"?gd:null,moveExplanationStep:typeof xd<"u"?xd:null,toggleExplanationPlayback:typeof md<"u"?md:null,setTabletMode:typeof Sd<"u"?Sd:null,playCinematicAnimation:typeof sc<"u"?sc:null,toggleCinematicPlayback:typeof Qu<"u"?Qu:null,exportCinematicVideo:typeof ed<"u"?ed:null,stopCinematicAnimation:typeof ac<"u"?ac:null,openFormulaWindow:typeof openFormulaWindow<"u"?openFormulaWindow:null,clearAnnotations:typeof ld<"u"?ld:null,addAnnotation:typeof cd<"u"?cd:null,beginAnnotationDrag:typeof ud<"u"?ud:null,continueAnnotationDrag:typeof dd<"u"?dd:null,endAnnotationDrag:typeof hd<"u"?hd:null,recoverAllViewerControls:typeof _a<"u"?_a:null,refreshAllViewerControls:typeof qu<"u"?qu:null});
