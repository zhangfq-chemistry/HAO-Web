(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ul="165",po={ROTATE:0,DOLLY:1,PAN:2},ef=0,_c=1,tf=2,Uh=1,nf=2,Yn=3,Mi=0,jt=1,pt=2,_i=0,Tr=1,ol=2,vc=3,yc=4,rf=5,zi=100,af=101,sf=102,of=103,lf=104,cf=200,uf=201,hf=202,df=203,ll=204,cl=205,ff=206,pf=207,mf=208,gf=209,xf=210,_f=211,vf=212,yf=213,Mf=214,Sf=0,bf=1,Ef=2,Ms=3,wf=4,Tf=5,Af=6,Cf=7,ks=0,Rf=1,Pf=2,vi=0,Lf=1,If=2,Df=3,Hr=4,Uf=5,Nf=6,Ff=7,Nh=300,Dr=301,Ur=302,ul=303,hl=304,Vs=306,dl=1e3,Vi=1001,fl=1002,ln=1003,Of=1004,La=1005,yn=1006,mo=1007,Hi=1008,Si=1009,zf=1010,Bf=1011,Ss=1012,Fh=1013,Nr=1014,gi=1015,Hs=1016,Oh=1017,zh=1018,Fr=1020,kf=35902,Vf=1021,Hf=1022,Dn=1023,Gf=1024,Wf=1025,Ar=1026,Or=1027,qf=1028,Bh=1029,Xf=1030,kh=1031,Vh=1033,go=33776,xo=33777,_o=33778,vo=33779,Mc=35840,Sc=35841,bc=35842,Ec=35843,wc=36196,Tc=37492,Ac=37496,Cc=37808,Rc=37809,Pc=37810,Lc=37811,Ic=37812,Dc=37813,Uc=37814,Nc=37815,Fc=37816,Oc=37817,zc=37818,Bc=37819,kc=37820,Vc=37821,yo=36492,Hc=36494,Gc=36495,Yf=36283,Wc=36284,qc=36285,Xc=36286,$f=3200,Zf=3201,Gs=0,jf=1,pi="",Ft="srgb",Ei="srgb-linear",Nl="display-p3",Ws="display-p3-linear",bs="linear",ot="srgb",Es="rec709",ws="p3",nr=7680,Yc=519,Kf=512,Jf=513,Qf=514,Hh=515,ep=516,tp=517,np=518,ip=519,pl=35044,Ia=35048,$c="300 es",Zn=2e3,Ts=2001;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zc=1234567;const Cr=Math.PI/180,ga=180/Math.PI;function Qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function Fl(n,e){return(n%e+e)%e}function rp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ap(n,e,t){return n!==e?(t-n)/(e-n):0}function la(n,e,t){return(1-t)*n+t*e}function sp(n,e,t,i){return la(n,e,1-Math.exp(-t*i))}function op(n,e=1){return e-Math.abs(Fl(n,e*2)-e)}function lp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function up(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hp(n,e){return n+Math.random()*(e-n)}function dp(n){return n*(.5-Math.random())}function fp(n){n!==void 0&&(Zc=n);let e=Zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(n){return n*Cr}function mp(n){return n*ga}function gp(n){return(n&n-1)===0&&n!==0}function xp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _p(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vp(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+i)/2),u=o((e+i)/2),h=a((e-i)/2),d=o((e-i)/2),f=a((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(s*u,l*h,l*d,s*c);break;case"YZY":n.set(l*d,s*u,l*h,s*c);break;case"ZXZ":n.set(l*h,l*d,s*u,s*c);break;case"XZX":n.set(s*u,l*x,l*f,s*c);break;case"YXY":n.set(l*f,s*u,l*x,s*c);break;case"ZYZ":n.set(l*x,l*f,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jc={DEG2RAD:Cr,RAD2DEG:ga,generateUUID:Qn,clamp:At,euclideanModulo:Fl,mapLinear:rp,inverseLerp:ap,lerp:la,damp:sp,pingpong:op,smoothstep:lp,smootherstep:cp,randInt:up,randFloat:hp,randFloatSpread:dp,seededRandom:fp,degToRad:pp,radToDeg:mp,isPowerOfTwo:gp,ceilPowerOfTwo:xp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:vp,normalize:Qe,denormalize:Mn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,a,o,s,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],x=i[8],_=r[0],g=r[3],p=r[6],M=r[1],v=r[4],y=r[7],T=r[2],E=r[5],A=r[8];return a[0]=o*_+s*M+l*T,a[3]=o*g+s*v+l*E,a[6]=o*p+s*y+l*A,a[1]=c*_+u*M+h*T,a[4]=c*g+u*v+h*E,a[7]=c*p+u*y+h*A,a[2]=d*_+f*M+x*T,a[5]=d*g+f*v+x*E,a[8]=d*p+f*y+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*o-s*c,d=s*l-u*a,f=c*a-o*l,x=t*h+i*d+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(s*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*a-s*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new ke;function Gh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function As(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yp(){const n=As("canvas");return n.style.display="block",n}const Kc={};function Ol(n){n in Kc||(Kc[n]=!0,console.warn(n))}function Mp(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Jc=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qc=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[Ei]:{transfer:bs,primaries:Es,toReference:n=>n,fromReference:n=>n},[Ft]:{transfer:ot,primaries:Es,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ws]:{transfer:bs,primaries:ws,toReference:n=>n.applyMatrix3(Qc),fromReference:n=>n.applyMatrix3(Jc)},[Nl]:{transfer:ot,primaries:ws,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Qc),fromReference:n=>n.applyMatrix3(Jc).convertLinearToSRGB()}},Sp=new Set([Ei,Ws]),et={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Sp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Da[e].toReference,r=Da[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Da[n].primaries},getTransfer:function(n){return n===pi?bs:Da[n].transfer}};function Rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function So(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ir;class bp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=As("canvas")),ir.width=e.width,ir.height=e.height;const i=ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Rr(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rr(t[i]/255)*255):t[i]=Rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ep=0;class Wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(bo(r[o].image)):a.push(bo(r[o]))}else a=bo(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wp=0;class Yt extends Zi{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Vi,r=Vi,a=yn,o=Hi,s=Dn,l=Si,c=Yt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Qn(),this.name="",this.source=new Wh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dl:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dl:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Nh;Yt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],x=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(f+1)/2,T=(p+1)/2,E=(u+d)/4,A=(h+_)/4,R=(x+g)/4;return v>y&&v>T?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=E/i,a=A/i):y>T?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=E/r,a=R/r):T<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(T),i=A/a,r=R/a),this.set(i,r,a,t),this}let M=Math.sqrt((g-x)*(g-x)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tp extends Zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Tp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class qh extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=a[o+0],f=a[o+1],x=a[o+2],_=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==x){let g=1-s;const p=l*d+c*f+u*x+h*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),E=Math.atan2(T,p*M);g=Math.sin(g*E)/T,s=Math.sin(s*E)/T}const y=s*M;if(l=l*g+d*y,c=c*g+f*y,u=u*g+x*y,h=h*g+_*y,g===1-s){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=a[o],d=a[o+1],f=a[o+2],x=a[o+3];return e[t]=s*x+u*h+l*f-c*d,e[t+1]=l*x+u*d+c*h-s*f,e[t+2]=c*x+u*f+s*d-l*h,e[t+3]=u*x-s*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),h=s(a/2),d=l(i/2),f=l(r/2),x=l(a/2);switch(o){case"XYZ":this._x=d*u*h+c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h-d*f*x;break;case"YXZ":this._x=d*u*h+c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h+d*f*x;break;case"ZXY":this._x=d*u*h-c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h-d*f*x;break;case"ZYX":this._x=d*u*h-c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h+d*f*x;break;case"YZX":this._x=d*u*h+c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h-d*f*x;break;case"XZY":this._x=d*u*h-c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+s+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(o-r)*f}else if(i>s&&i>h){const f=2*Math.sqrt(1+i-s-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(a+c)/f}else if(s>h){const f=2*Math.sqrt(1+s-i-h);this._w=(a-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-s);this._w=(o-r)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),u=2*(s*t-a*r),h=2*(a*i-o*t);return this.x=t+l*c+o*h-s*u,this.y=i+l*u+s*c-a*h,this.z=r+l*h+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new P,eu=new Gr;class un{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(a,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Na.subVectors(this.max,Kr),rr.subVectors(e.a,Kr),ar.subVectors(e.b,Kr),sr.subVectors(e.c,Kr),si.subVectors(ar,rr),oi.subVectors(sr,ar),Li.subVectors(rr,sr);let t=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Li.z,Li.y,si.z,0,-si.x,oi.z,0,-oi.x,Li.z,0,-Li.x,-si.y,si.x,0,-oi.y,oi.x,0,-Li.y,Li.x,0];return!wo(t,rr,ar,sr,Na)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,rr,ar,sr,Na))?!1:(Fa.crossVectors(si,oi),t=[Fa.x,Fa.y,Fa.z],wo(t,rr,ar,sr,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new P,new P,new P,new P,new P,new P,new P,new P],pn=new P,Ua=new un,rr=new P,ar=new P,sr=new P,si=new P,oi=new P,Li=new P,Kr=new P,Na=new P,Fa=new P,Ii=new P;function wo(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Ii.fromArray(n,a);const s=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Cp=new un,Jr=new P,To=new P;class wi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const t=Jr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(To)),this.expandByPoint(Jr.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new P,Ao=new P,Oa=new P,li=new P,Co=new P,za=new P,Ro=new P;class qs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ao.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Ao);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Oa),s=li.dot(this.direction),l=-li.dot(Oa),c=li.lengthSq(),u=Math.abs(1-o*o);let h,d,f,x;if(u>0)if(h=o*l-s,d=o*s-l,x=a*u,h>=0)if(d>=-x)if(d<=x){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*s)+d*(o*h+d+2*l)+c}else d=a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;else d=-a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*a+s)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(h=Math.max(0,-(o*a+s)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c);else d=o>0?-a:a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ao).addScaledVector(Oa,d),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),r=Gn.dot(Gn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,r,a){Co.subVectors(t,e),za.subVectors(i,e),Ro.crossVectors(Co,za);let o=this.direction.dot(Ro),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=s*this.direction.dot(za.crossVectors(li,za));if(l<0)return null;const c=s*this.direction.dot(Co.cross(li));if(c<0||l+c>o)return null;const u=-s*li.dot(Ro);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,r,a,o,s,l,c,u,h,d,f,x,_,g){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,u,h,d,f,x,_,g)}set(e,t,i,r,a,o,s,l,c,u,h,d,f,x,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=x,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),a=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=o*u,f=o*h,x=s*u,_=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+x*c,t[5]=d-_*c,t[9]=-s*l,t[2]=_-d*c,t[6]=x+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,x=c*u,_=c*h;t[0]=d+_*s,t[4]=x*s-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=f*s-x,t[6]=_+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,x=c*u,_=c*h;t[0]=d-_*s,t[4]=-o*h,t[8]=x+f*s,t[1]=f+x*s,t[5]=o*u,t[9]=_-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,x=s*u,_=s*h;t[0]=l*u,t[4]=x*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-x,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,x=s*l,_=s*c;t[0]=l*u,t[4]=_-d*h,t[8]=x*h+f,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=f*h+x,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,x=s*l,_=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-x,t[2]=x*h-f,t[6]=s*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Pp)}lookAt(e,t,i){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ci.crossVectors(i,en),ci.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ci.crossVectors(i,en)),ci.normalize(),Ba.crossVectors(en,ci),r[0]=ci.x,r[4]=Ba.x,r[8]=en.x,r[1]=ci.y,r[5]=Ba.y,r[9]=en.y,r[2]=ci.z,r[6]=Ba.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],x=i[2],_=i[6],g=i[10],p=i[14],M=i[3],v=i[7],y=i[11],T=i[15],E=r[0],A=r[4],R=r[8],b=r[12],S=r[1],L=r[5],F=r[9],U=r[13],B=r[2],G=r[6],V=r[10],Z=r[14],q=r[3],ie=r[7],he=r[11],$=r[15];return a[0]=o*E+s*S+l*B+c*q,a[4]=o*A+s*L+l*G+c*ie,a[8]=o*R+s*F+l*V+c*he,a[12]=o*b+s*U+l*Z+c*$,a[1]=u*E+h*S+d*B+f*q,a[5]=u*A+h*L+d*G+f*ie,a[9]=u*R+h*F+d*V+f*he,a[13]=u*b+h*U+d*Z+f*$,a[2]=x*E+_*S+g*B+p*q,a[6]=x*A+_*L+g*G+p*ie,a[10]=x*R+_*F+g*V+p*he,a[14]=x*b+_*U+g*Z+p*$,a[3]=M*E+v*S+y*B+T*q,a[7]=M*A+v*L+y*G+T*ie,a[11]=M*R+v*F+y*V+T*he,a[15]=M*b+v*U+y*Z+T*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],x=e[3],_=e[7],g=e[11],p=e[15];return x*(+a*l*h-r*c*h-a*s*d+i*c*d+r*s*f-i*l*f)+_*(+t*l*f-t*c*d+a*o*d-r*o*f+r*c*u-a*l*u)+g*(+t*c*h-t*s*f-a*o*h+i*o*f+a*s*u-i*c*u)+p*(-r*s*u-t*l*h+t*s*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],x=e[12],_=e[13],g=e[14],p=e[15],M=h*g*c-_*d*c+_*l*f-s*g*f-h*l*p+s*d*p,v=x*d*c-u*g*c-x*l*f+o*g*f+u*l*p-o*d*p,y=u*_*c-x*h*c+x*s*f-o*_*f-u*s*p+o*h*p,T=x*h*l-u*_*l-x*s*d+o*_*d+u*s*g-o*h*g,E=t*M+i*v+r*y+a*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=M*A,e[1]=(_*d*a-h*g*a-_*r*f+i*g*f+h*r*p-i*d*p)*A,e[2]=(s*g*a-_*l*a+_*r*c-i*g*c-s*r*p+i*l*p)*A,e[3]=(h*l*a-s*d*a-h*r*c+i*d*c+s*r*f-i*l*f)*A,e[4]=v*A,e[5]=(u*g*a-x*d*a+x*r*f-t*g*f-u*r*p+t*d*p)*A,e[6]=(x*l*a-o*g*a-x*r*c+t*g*c+o*r*p-t*l*p)*A,e[7]=(o*d*a-u*l*a+u*r*c-t*d*c-o*r*f+t*l*f)*A,e[8]=y*A,e[9]=(x*h*a-u*_*a-x*i*f+t*_*f+u*i*p-t*h*p)*A,e[10]=(o*_*a-x*s*a+x*i*c-t*_*c-o*i*p+t*s*p)*A,e[11]=(u*s*a-o*h*a-u*i*c+t*h*c+o*i*f-t*s*f)*A,e[12]=T*A,e[13]=(u*_*r-x*h*r+x*i*d-t*_*d-u*i*g+t*h*g)*A,e[14]=(x*s*r-o*_*r-x*i*l+t*_*l+o*i*g-t*s*g)*A,e[15]=(o*h*r-u*s*r+u*i*l-t*h*l-o*i*d+t*s*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,h=s+s,d=a*c,f=a*u,x=a*h,_=o*u,g=o*h,p=s*h,M=l*c,v=l*u,y=l*h,T=i.x,E=i.y,A=i.z;return r[0]=(1-(_+p))*T,r[1]=(f+y)*T,r[2]=(x-v)*T,r[3]=0,r[4]=(f-y)*E,r[5]=(1-(d+p))*E,r[6]=(g+M)*E,r[7]=0,r[8]=(x+v)*A,r[9]=(g-M)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=or.set(r[0],r[1],r[2]).length();const o=or.set(r[4],r[5],r[6]).length(),s=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/a,u=1/o,h=1/s;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Zn){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,x;if(s===Zn)f=-(o+a)/(o-a),x=-2*o*a/(o-a);else if(s===Ts)f=-o/(o-a),x=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Zn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-a),d=(t+e)*c,f=(i+r)*u;let x,_;if(s===Zn)x=(o+a)*h,_=-2*h;else if(s===Ts)x=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const or=new P,mn=new st,Rp=new P(0,0,0),Pp=new P(1,1,1),ci=new P,Ba=new P,en=new P,tu=new st,nu=new Gr;class hn{constructor(e=0,t=0,i=0,r=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(At(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lp=0;const iu=new P,lr=new Gr,Wn=new st,ka=new P,Qr=new P,Ip=new P,Dp=new Gr,ru=new P(1,0,0),au=new P(0,1,0),su=new P(0,0,1),ou={type:"added"},Up={type:"removed"},cr={type:"childadded",child:null},Po={type:"childremoved",child:null};class _t extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new P,t=new hn,i=new Gr,r=new P(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new ke}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ka.copy(e):ka.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Qr,ka,this.up):Wn.lookAt(ka,Qr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(Wn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ou),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Up),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ou),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),x=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new P(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new P,qn=new P,Lo=new P,Xn=new P,ur=new P,hr=new P,lu=new P,Io=new P,Do=new P,Uo=new P;class on{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){gn.subVectors(r,t),qn.subVectors(i,t),Lo.subVectors(e,t);const o=gn.dot(gn),s=gn.dot(qn),l=gn.dot(Lo),c=qn.dot(qn),u=qn.dot(Lo),h=o*c-s*s;if(h===0)return a.set(0,0,0),null;const d=1/h,f=(c*l-s*u)*d,x=(o*u-s*l)*d;return a.set(1-f-x,x,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(s,Xn.z),l)}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),qn.subVectors(e,t),gn.cross(qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),gn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;ur.subVectors(r,i),hr.subVectors(a,i),Io.subVectors(e,i);const l=ur.dot(Io),c=hr.dot(Io);if(l<=0&&c<=0)return t.copy(i);Do.subVectors(e,r);const u=ur.dot(Do),h=hr.dot(Do);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ur,o);Uo.subVectors(e,a);const f=ur.dot(Uo),x=hr.dot(Uo);if(x>=0&&f<=x)return t.copy(a);const _=f*c-l*x;if(_<=0&&c>=0&&x<=0)return s=c/(c-x),t.copy(i).addScaledVector(hr,s);const g=u*x-f*h;if(g<=0&&h-u>=0&&f-x>=0)return lu.subVectors(a,r),s=(h-u)/(h-u+(f-x)),t.copy(r).addScaledVector(lu,s);const p=1/(g+_+d);return o=_*p,s=d*p,t.copy(i).addScaledVector(ur,o).addScaledVector(hr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Va={h:0,s:0,l:0};function No(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Fl(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=No(o,a,e+1/3),this.g=No(o,a,e),this.b=No(o,a,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=Ft){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=Xh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return et.fromWorkingColorSpace(Ut.copy(this),e),Math.round(At(Ut.r*255,0,255))*65536+Math.round(At(Ut.g*255,0,255))*256+Math.round(At(Ut.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,r=Ut.g,a=Ut.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=u<=.5?h/(o+s):h/(2-o-s),o){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Ft){et.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,r=Ut.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Va);const i=la(ui.h,Va.h,t),r=la(ui.s,Va.s,t),a=la(ui.l,Va.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Se;Se.NAMES=Xh;let Np=0;class Bn extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Tr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ti extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new P,Ha=new pe;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ol("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),a=Qe(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}}class Yh extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $h extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xe extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fp=0;const an=new st,Fo=new _t,dr=new P,tn=new un,ea=new un,Et=new P;class Ke extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gh(e)?$h:Yh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ke().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];tn.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];ea.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(tn.min,ea.min),tn.expandByPoint(Et),Et.addVectors(tn.max,ea.max),tn.expandByPoint(Et)):(tn.expandByPoint(ea.min),tn.expandByPoint(ea.max))}tn.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Et.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Et.fromBufferAttribute(s,c),l&&(dr.fromBufferAttribute(e,c),Et.add(dr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let R=0;R<i.count;R++)s[R]=new P,l[R]=new P;const c=new P,u=new P,h=new P,d=new pe,f=new pe,x=new pe,_=new P,g=new P;function p(R,b,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(a,R),f.fromBufferAttribute(a,b),x.fromBufferAttribute(a,S),u.sub(c),h.sub(c),f.sub(d),x.sub(d);const L=1/(f.x*x.y-x.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(L),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(L),s[R].add(_),s[b].add(_),s[S].add(_),l[R].add(g),l[b].add(g),l[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,b=M.length;R<b;++R){const S=M[R],L=S.start,F=S.count;for(let U=L,B=L+F;U<B;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new P,y=new P,T=new P,E=new P;function A(R){T.fromBufferAttribute(r,R),E.copy(T);const b=s[R];v.copy(b),v.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(E,b);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,b=M.length;R<b;++R){const S=M[R],L=S.start,F=S.count;for(let U=L,B=L+F;U<B;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new P,a=new P,o=new P,s=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const x=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),s.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),s.add(u),l.add(u),c.add(u),i.setXYZ(x,s.x,s.y,s.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,d=new c.constructor(l.length*u);let f=0,x=0;for(let _=0,g=l.length;_<g;_++){s.isInterleavedBufferAttribute?f=l[_]*s.data.stride+s.offset:f=l[_]*u;for(let p=0;p<u;p++)d[x++]=c[f++]}return new Ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ke,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new st,Di=new qs,Ga=new wi,uu=new P,fr=new P,pr=new P,mr=new P,Oo=new P,Wa=new P,qa=new pe,Xa=new pe,Ya=new pe,hu=new P,du=new P,fu=new P,$a=new P,Za=new P;class rt extends _t{constructor(e=new Ke,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Wa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],h=a[l];u!==0&&(Oo.fromBufferAttribute(h,e),o?Wa.addScaledVector(Oo,u):Wa.addScaledVector(Oo.sub(t),u))}t.add(Wa)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(a),Di.copy(e.ray).recast(e.near),!(Ga.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Ga,uu)===null||Di.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(cu.copy(a).invert(),Di.copy(e.ray).applyMatrix4(cu),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(s!==null)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){const g=d[x],p=o[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(s.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,T=v;y<T;y+=3){const E=s.getX(y),A=s.getX(y+1),R=s.getX(y+2);r=ja(this,p,e,i,c,u,h,E,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),_=Math.min(s.count,f.start+f.count);for(let g=x,p=_;g<p;g+=3){const M=s.getX(g),v=s.getX(g+1),y=s.getX(g+2);r=ja(this,o,e,i,c,u,h,M,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){const g=d[x],p=o[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,T=v;y<T;y+=3){const E=y,A=y+1,R=y+2;r=ja(this,p,e,i,c,u,h,E,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=x,p=_;g<p;g+=3){const M=g,v=g+1,y=g+2;r=ja(this,o,e,i,c,u,h,M,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Op(n,e,t,i,r,a,o,s){let l;if(e.side===jt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Mi,s),l===null)return null;Za.copy(s),Za.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Za);return c<t.near||c>t.far?null:{distance:c,point:Za.clone(),object:n}}function ja(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,fr),n.getVertexPosition(l,pr),n.getVertexPosition(c,mr);const u=Op(n,e,t,i,fr,pr,mr,$a);if(u){r&&(qa.fromBufferAttribute(r,s),Xa.fromBufferAttribute(r,l),Ya.fromBufferAttribute(r,c),u.uv=on.getInterpolation($a,fr,pr,mr,qa,Xa,Ya,new pe)),a&&(qa.fromBufferAttribute(a,s),Xa.fromBufferAttribute(a,l),Ya.fromBufferAttribute(a,c),u.uv1=on.getInterpolation($a,fr,pr,mr,qa,Xa,Ya,new pe)),o&&(hu.fromBufferAttribute(o,s),du.fromBufferAttribute(o,l),fu.fromBufferAttribute(o,c),u.normal=on.getInterpolation($a,fr,pr,mr,hu,du,fu,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new P,materialIndex:0};on.getNormal(fr,pr,mr,h.normal),u.face=h}return u}class Wr extends Ke{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;x("z","y","x",-1,-1,i,t,e,o,a,0),x("z","y","x",1,-1,i,t,-e,o,a,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,a,4),x("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(h,2));function x(_,g,p,M,v,y,T,E,A,R,b){const S=y/A,L=T/R,F=y/2,U=T/2,B=E/2,G=A+1,V=R+1;let Z=0,q=0;const ie=new P;for(let he=0;he<V;he++){const $=he*L-U;for(let fe=0;fe<G;fe++){const se=fe*S-F;ie[_]=se*M,ie[g]=$*v,ie[p]=B,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[g]=0,ie[p]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(fe/A),h.push(1-he/R),Z+=1}}for(let he=0;he<R;he++)for(let $=0;$<A;$++){const fe=d+$+G*he,se=d+$+G*(he+1),H=d+($+1)+G*(he+1),K=d+($+1)+G*he;l.push(fe,se,K),l.push(se,H,K),q+=6}s.addGroup(f,q,b),f+=q,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=zr(n[t]);for(const r in i)e[r]=i[r]}return e}function zp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Bp={clone:zr,merge:Wt};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jh extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new P,pu=new pe,mu=new pe;class vn extends jh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,xr=1;class Hp extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(gr,xr,e,t);r.layers=this.layers,this.add(r);const a=new vn(gr,xr,e,t);a.layers=this.layers,this.add(a);const o=new vn(gr,xr,e,t);o.layers=this.layers,this.add(o);const s=new vn(gr,xr,e,t);s.layers=this.layers,this.add(s);const l=new vn(gr,xr,e,t);l.layers=this.layers,this.add(l);const c=new vn(gr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Kh extends Yt{constructor(e,t,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gp extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wr(5,5,5),a=new ei({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:_i});a.uniforms.tEquirect.value=t;const o=new rt(r,a),s=t.minFilter;return t.minFilter===Hi&&(t.minFilter=yn),new Hp(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const zo=new P,Wp=new P,qp=new ke;class lt{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zo.subVectors(i,t).cross(Wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qp.getNormalMatrix(e),r=this.coplanarPoint(zo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new wi,Ka=new P;class Bl{constructor(e=new lt,t=new lt,i=new lt,r=new lt,a=new lt,o=new lt){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],x=r[9],_=r[10],g=r[11],p=r[12],M=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-a,d-c,g-f,y-p).normalize(),i[1].setComponents(l+a,d+c,g+f,y+p).normalize(),i[2].setComponents(l+o,d+u,g+x,y+M).normalize(),i[3].setComponents(l-o,d-u,g-x,y-M).normalize(),i[4].setComponents(l-s,d-h,g-_,y-v).normalize(),t===Zn)i[5].setComponents(l+s,d+h,g+_,y+v).normalize();else if(t===Ts)i[5].setComponents(s,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jh(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Xp(n){const e=new WeakMap;function t(s,l){const c=s.array,u=s.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),s.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:h}}function i(s,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,s),h.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let f=0,x=d.length;f<x;f++){const _=d[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(n.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:r,remove:a,update:o}}class Xs extends Ke{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,h=e/s,d=t/l,f=[],x=[],_=[],g=[];for(let p=0;p<u;p++){const M=p*d-o;for(let v=0;v<c;v++){const y=v*h-a;x.push(y,-M,0),_.push(0,0,1),g.push(v/s),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<s;M++){const v=M+c*p,y=M+c*(p+1),T=M+1+c*(p+1),E=M+1+c*p;f.push(v,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gm=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`
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
}`,wm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
#endif`,Fm=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
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
#endif`,qm=`struct PhysicalMaterial {
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
}`,Xm=`
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#ifdef USE_INSTANCING_MORPH
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
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
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
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,g0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L0=`float getShadowMask() {
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
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,eg=`#define DISTANCE
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
}`,tg=`#define DISTANCE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,ug=`#define MATCAP
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
}`,hg=`#define MATCAP
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
}`,fg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,xg=`#define STANDARD
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
}`,_g=`#define TOON
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
}`,vg=`#define TOON
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
}`,yg=`uniform float size;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,bg=`uniform vec3 color;
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
}`,Eg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Yp,alphahash_pars_fragment:$p,alphamap_fragment:Zp,alphamap_pars_fragment:jp,alphatest_fragment:Kp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:em,batching_pars_vertex:tm,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:rm,bsdfs:am,iridescence_fragment:sm,bumpmap_pars_fragment:om,clipping_planes_fragment:lm,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:um,clipping_planes_vertex:hm,color_fragment:dm,color_pars_fragment:fm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:_m,displacementmap_pars_vertex:vm,displacementmap_vertex:ym,emissivemap_fragment:Mm,emissivemap_pars_fragment:Sm,colorspace_fragment:bm,colorspace_pars_fragment:Em,envmap_fragment:wm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Am,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:Bm,envmap_vertex:Rm,fog_vertex:Pm,fog_pars_vertex:Lm,fog_fragment:Im,fog_pars_fragment:Dm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Nm,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Om,lights_pars_begin:zm,lights_toon_fragment:km,lights_toon_pars_fragment:Vm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Wm,lights_physical_pars_fragment:qm,lights_fragment_begin:Xm,lights_fragment_maps:Ym,lights_fragment_end:$m,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Jm,map_fragment:Qm,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:r0,morphinstance_vertex:a0,morphcolor_vertex:s0,morphnormal_vertex:o0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:u0,normal_fragment_maps:h0,normal_pars_fragment:d0,normal_pars_vertex:f0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:g0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:v0,opaque_fragment:y0,packing:M0,premultiplied_alpha_fragment:S0,project_vertex:b0,dithering_fragment:E0,dithering_pars_fragment:w0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:C0,shadowmap_pars_vertex:R0,shadowmap_vertex:P0,shadowmask_pars_fragment:L0,skinbase_vertex:I0,skinning_pars_vertex:D0,skinning_vertex:U0,skinnormal_vertex:N0,specularmap_fragment:F0,specularmap_pars_fragment:O0,tonemapping_fragment:z0,tonemapping_pars_fragment:B0,transmission_fragment:k0,transmission_pars_fragment:V0,uv_pars_fragment:H0,uv_pars_vertex:G0,uv_vertex:W0,worldpos_vertex:q0,background_vert:X0,background_frag:Y0,backgroundCube_vert:$0,backgroundCube_frag:Z0,cube_vert:j0,cube_frag:K0,depth_vert:J0,depth_frag:Q0,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:rg,linedashed_frag:ag,meshbasic_vert:sg,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:ug,meshmatcap_frag:hg,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:xg,meshtoon_vert:_g,meshtoon_frag:vg,points_vert:yg,points_frag:Mg,shadow_vert:Sg,shadow_frag:bg,sprite_vert:Eg,sprite_frag:wg},me={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},An={basic:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Se(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Wt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Wt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Se(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Wt([me.points,me.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Wt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Wt([me.common,me.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Wt([me.sprite,me.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Wt([me.common,me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Wt([me.lights,me.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};An.physical={uniforms:Wt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ja={r:0,b:0,g:0},Ni=new hn,Tg=new st;function Ag(n,e,t,i,r,a,o){const s=new Se(0);let l=a===!0?0:1,c,u,h=null,d=0,f=null;function x(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const y=x(M);y===null?p(s,l):y&&y.isColor&&(p(y,1),v=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,v){const y=x(v);y&&(y.isCubeTexture||y.mapping===Vs)?(u===void 0&&(u=new rt(new Wr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:zr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ni.copy(v.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(Ni)),u.material.toneMapped=et.getTransfer(y.colorSpace)!==ot,(h!==y||d!==y.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new rt(new Xs(2,2),new ei({name:"BackgroundMaterial",uniforms:zr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(Ja,Zh(n)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,v,o)}return{getClearColor:function(){return s},setClearColor:function(M,v=1){s.set(M),l=v,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(s,l)},render:_,addToRenderList:g}}function Cg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let a=r,o=!1;function s(S,L,F,U,B){let G=!1;const V=h(U,F,L);a!==V&&(a=V,c(a.object)),G=f(S,U,F,B),G&&x(S,U,F,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(S,L,F,U),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,L,F){const U=F.wireframe===!0;let B=i[S.id];B===void 0&&(B={},i[S.id]=B);let G=B[L.id];G===void 0&&(G={},B[L.id]=G);let V=G[U];return V===void 0&&(V=d(l()),G[U]=V),V}function d(S){const L=[],F=[],U=[];for(let B=0;B<t;B++)L[B]=0,F[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:U,object:S,attributes:{},index:null}}function f(S,L,F,U){const B=a.attributes,G=L.attributes;let V=0;const Z=F.getAttributes();for(const q in Z)if(Z[q].location>=0){const he=B[q];let $=G[q];if($===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),he===void 0||he.attribute!==$||$&&he.data!==$.data)return!0;V++}return a.attributesNum!==V||a.index!==U}function x(S,L,F,U){const B={},G=L.attributes;let V=0;const Z=F.getAttributes();for(const q in Z)if(Z[q].location>=0){let he=G[q];he===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));const $={};$.attribute=he,he&&he.data&&($.data=he.data),B[q]=$,V++}a.attributes=B,a.attributesNum=V,a.index=U}function _(){const S=a.newAttributes;for(let L=0,F=S.length;L<F;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){const F=a.newAttributes,U=a.enabledAttributes,B=a.attributeDivisors;F[S]=1,U[S]===0&&(n.enableVertexAttribArray(S),U[S]=1),B[S]!==L&&(n.vertexAttribDivisor(S,L),B[S]=L)}function M(){const S=a.newAttributes,L=a.enabledAttributes;for(let F=0,U=L.length;F<U;F++)L[F]!==S[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function v(S,L,F,U,B,G,V){V===!0?n.vertexAttribIPointer(S,L,F,B,G):n.vertexAttribPointer(S,L,F,U,B,G)}function y(S,L,F,U){_();const B=U.attributes,G=F.getAttributes(),V=L.defaultAttributeValues;for(const Z in G){const q=G[Z];if(q.location>=0){let ie=B[Z];if(ie===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const he=ie.normalized,$=ie.itemSize,fe=e.get(ie);if(fe===void 0)continue;const se=fe.buffer,H=fe.type,K=fe.bytesPerElement,oe=H===n.INT||H===n.UNSIGNED_INT||ie.gpuType===Fh;if(ie.isInterleavedBufferAttribute){const N=ie.data,Q=N.stride,re=ie.offset;if(N.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)p(q.location+ge,N.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ge=0;ge<q.locationSize;ge++)g(q.location+ge);n.bindBuffer(n.ARRAY_BUFFER,se);for(let ge=0;ge<q.locationSize;ge++)v(q.location+ge,$/q.locationSize,H,he,Q*K,(re+$/q.locationSize*ge)*K,oe)}else{if(ie.isInstancedBufferAttribute){for(let N=0;N<q.locationSize;N++)p(q.location+N,ie.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let N=0;N<q.locationSize;N++)g(q.location+N);n.bindBuffer(n.ARRAY_BUFFER,se);for(let N=0;N<q.locationSize;N++)v(q.location+N,$/q.locationSize,H,he,$*K,$/q.locationSize*N*K,oe)}}else if(V!==void 0){const he=V[Z];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(q.location,he);break;case 3:n.vertexAttrib3fv(q.location,he);break;case 4:n.vertexAttrib4fv(q.location,he);break;default:n.vertexAttrib1fv(q.location,he)}}}}M()}function T(){R();for(const S in i){const L=i[S];for(const F in L){const U=L[F];for(const B in U)u(U[B].object),delete U[B];delete L[F]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const F in L){const U=L[F];for(const B in U)u(U[B].object),delete U[B];delete L[F]}delete i[S.id]}function A(S){for(const L in i){const F=i[L];if(F[S.id]===void 0)continue;const U=F[S.id];for(const B in U)u(U[B].object),delete U[B];delete F[S.id]}}function R(){b(),o=!0,a!==r&&(a=r,c(a.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:R,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Rg(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function s(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(c[f],u[f]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let x=0;x<h;x++)f+=u[x];t.update(f,i,1)}}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let x=0;for(let _=0;_<h;_++)x+=u[_];for(let _=0;_<d.length;_++)t.update(x,i,d[_])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Pg(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Dn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(E){const A=E===Hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Si&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==gi&&!A)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:y,maxSamples:T}}function Lg(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new lt,s=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const x=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||x===null||x.length===0||a&&!g)a?u(null):c();else{const M=a?0:i,v=M*4;let y=p.clippingState||null;l.value=y,y=u(x,d,v,f);for(let T=0;T!==v;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,x){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,x!==!0||g===null){const p=f+_*4,M=d.matrixWorldInverse;s.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(M,s),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Ig(n){let e=new WeakMap;function t(o,s){return s===ul?o.mapping=Dr:s===hl&&(o.mapping=Ur),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===ul||s===hl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Gp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class En extends jh{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,gu=[.125,.215,.35,.446,.526,.582],Bi=20,Bo=new En,xu=new Se;let ko=null,Vo=0,Ho=0,Go=!1;const Oi=(1+Math.sqrt(5))/2,_r=1/Oi,_u=[new P(-Oi,_r,0),new P(Oi,_r,0),new P(-_r,0,Oi),new P(_r,0,Oi),new P(0,Oi,-_r),new P(0,Oi,_r),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ko=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Vo,Ho),this._renderer.xr.enabled=Go,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Hs,format:Dn,colorSpace:Ei,depthBuffer:!1},r=yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(a)),this._blurMaterial=Ug(a,e,t)}return r}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,i,r){const s=new vn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xu),u.toneMapping=vi,u.autoClear=!1;const f=new Ti({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),x=new rt(new Wr,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(xu),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(s.up.set(0,l[p],0),s.lookAt(c[p],0,0)):M===1?(s.up.set(0,0,l[p]),s.lookAt(0,c[p],0)):(s.up.set(0,l[p],0),s.lookAt(0,0,c[p]));const v=this._cubeSize;Qa(r,M*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(x,s),u.render(e,s)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Dr||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Qa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Bo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=_u[(r-a-1)%_u.length];this._blur(e,a-1,a,o,s)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,x=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),_=a/x,g=isFinite(a)?1+Math.floor(u*_):Bi;g>Bi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const p=[];let M=0;for(let A=0;A<Bi;++A){const R=A/_,b=Math.exp(-R*R/2);p.push(b),A===0?M+=b:A<g&&(M+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const y=this._sizeLods[r],T=3*y*(r>v-Er?r-v+Er:0),E=4*(this._cubeSize-y);Qa(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(h,Bo)}}function Dg(n){const e=[],t=[],i=[];let r=n;const a=n-Er+1+gu.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-Er?l=gu[o-n+Er-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,x=6,_=3,g=2,p=1,M=new Float32Array(_*x*f),v=new Float32Array(g*x*f),y=new Float32Array(p*x*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,R=E>2?0:-1,b=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];M.set(b,_*x*E),v.set(d,g*x*E);const S=[E,E,E,E,E,E];y.set(S,p*x*E)}const T=new Ke;T.setAttribute("position",new Ot(M,_)),T.setAttribute("uv",new Ot(v,g)),T.setAttribute("faceIndex",new Ot(y,p)),e.push(T),r>Er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yu(n,e,t){const i=new Xi(n,e,t);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ug(n,e,t){const i=new Float32Array(Bi),r=new P(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Mu(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Su(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function Ng(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===ul||l===hl,u=l===Dr||l===Ur;if(c||u){let h=e.get(s);const d=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return t===null&&(t=new vu(n)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),h.texture;if(h!==void 0)return h.texture;{const f=s.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new vu(n)),h=c?t.fromEquirectangular(s):t.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),s.addEventListener("dispose",a),h.texture):null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Fg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ol("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Og(n,e,t,i){const r={},a=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const _=d.morphAttributes[x];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",o),delete r[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const x in f){const _=f[x];for(let g=0,p=_.length;g<p;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,x=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,y=M.length;v<y;v+=3){const T=M[v+0],E=M[v+1],A=M[v+2];d.push(T,E,E,A,A,T)}}else if(x!==void 0){const M=x.array;_=x.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const T=v+0,E=v+1,A=v+2;d.push(T,E,E,A,A,T)}}else return;const g=new(Gh(d)?$h:Yh)(d,1);g.version=_;const p=a.get(h);p&&e.remove(p),a.set(h,g)}function u(h){const d=a.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function zg(n,e,t){let i;function r(d){i=d}let a,o;function s(d){a=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,a,d*o),t.update(f,i,1)}function c(d,f,x){x!==0&&(n.drawElementsInstanced(i,f,a,d*o,x),t.update(f,i,x))}function u(d,f,x){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<x;g++)this.render(d[g]/o,f[g]);else{_.multiDrawElementsWEBGL(i,f,0,a,d,0,x);let g=0;for(let p=0;p<x;p++)g+=f[p];t.update(g,i,1)}}function h(d,f,x,_){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,a,d,0,_,0,x);let p=0;for(let M=0;M<x;M++)p+=f[M];for(let M=0;M<_.length;M++)t.update(p,i,_[M])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Bg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kg(n,e,t){const i=new WeakMap,r=new Ct;function a(o,s,l){const c=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(s);if(d===void 0||d.count!==h){let S=function(){R.dispose(),i.delete(s),s.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const x=s.morphAttributes.position!==void 0,_=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,p=s.morphAttributes.position||[],M=s.morphAttributes.normal||[],v=s.morphAttributes.color||[];let y=0;x===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let T=s.attributes.position.count*y,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*E*4*h),R=new qh(A,T,E,h);R.type=gi,R.needsUpdate=!0;const b=y*4;for(let L=0;L<h;L++){const F=p[L],U=M[L],B=v[L],G=T*E*4*L;for(let V=0;V<F.count;V++){const Z=V*b;x===!0&&(r.fromBufferAttribute(F,V),A[G+Z+0]=r.x,A[G+Z+1]=r.y,A[G+Z+2]=r.z,A[G+Z+3]=0),_===!0&&(r.fromBufferAttribute(U,V),A[G+Z+4]=r.x,A[G+Z+5]=r.y,A[G+Z+6]=r.z,A[G+Z+7]=0),g===!0&&(r.fromBufferAttribute(B,V),A[G+Z+8]=r.x,A[G+Z+9]=r.y,A[G+Z+10]=r.z,A[G+Z+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new pe(T,E)},i.set(s,d),s.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const _=s.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function Vg(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class Qh extends Yt{constructor(e,t,i,r,a,o,s,l,c,u=Ar){if(u!==Ar&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ar&&(i=Nr),i===void 0&&u===Or&&(i=Fr),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ed=new Yt,td=new Qh(1,1);td.compareFunction=Hh;const nd=new qh,id=new Ap,rd=new Kh,bu=[],Eu=[],wu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=bu[r];if(a===void 0&&(a=new Float32Array(r),bu[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ys(n,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;Au.set(i),n.uniformMatrix2fv(this.addr,!1,Au),Mt(t,i)}}function Yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;Tu.set(i),n.uniformMatrix3fv(this.addr,!1,Tu),Mt(t,i)}}function $g(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;wu.set(i),n.uniformMatrix4fv(this.addr,!1,wu),Mt(t,i)}}function Zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Qg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function i1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?td:ed;t.setTexture2D(e||a,r)}function r1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||id,r)}function a1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rd,r)}function s1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nd,r)}function o1(n){switch(n){case 5126:return Hg;case 35664:return Gg;case 35665:return Wg;case 35666:return qg;case 35674:return Xg;case 35675:return Yg;case 35676:return $g;case 5124:case 35670:return Zg;case 35667:case 35671:return jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return s1}}function l1(n,e){n.uniform1fv(this.addr,e)}function c1(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function u1(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function h1(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function d1(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function f1(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p1(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m1(n,e){n.uniform1iv(this.addr,e)}function g1(n,e){n.uniform2iv(this.addr,e)}function x1(n,e){n.uniform3iv(this.addr,e)}function _1(n,e){n.uniform4iv(this.addr,e)}function v1(n,e){n.uniform1uiv(this.addr,e)}function y1(n,e){n.uniform2uiv(this.addr,e)}function M1(n,e){n.uniform3uiv(this.addr,e)}function S1(n,e){n.uniform4uiv(this.addr,e)}function b1(n,e,t){const i=this.cache,r=e.length,a=Ys(t,r);yt(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ed,a[o])}function E1(n,e,t){const i=this.cache,r=e.length,a=Ys(t,r);yt(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||id,a[o])}function w1(n,e,t){const i=this.cache,r=e.length,a=Ys(t,r);yt(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||rd,a[o])}function T1(n,e,t){const i=this.cache,r=e.length,a=Ys(t,r);yt(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||nd,a[o])}function A1(n){switch(n){case 5126:return l1;case 35664:return c1;case 35665:return u1;case 35666:return h1;case 35674:return d1;case 35675:return f1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return x1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return y1;case 36295:return M1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return T1}}class C1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o1(t.type)}}class R1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A1(t.type)}}class P1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function Cu(n,e){n.seq.push(e),n.map[e.id]=e}function L1(n,e,t){const i=n.name,r=i.length;for(Wo.lastIndex=0;;){const a=Wo.exec(i),o=Wo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Cu(t,c===void 0?new C1(s,n,e):new R1(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new P1(s),Cu(t,h)),t=h}}}class vs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);L1(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ru(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const I1=37297;let D1=0;function U1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function N1(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===ws&&t===Es?i="LinearDisplayP3ToLinearSRGB":e===Es&&t===ws&&(i="LinearSRGBToLinearDisplayP3"),n){case Ei:case Ws:return[i,"LinearTransferOETF"];case Ft:case Nl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Pu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+U1(n.getShaderSource(e),o)}else return r}function F1(n,e){const t=N1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function O1(n,e){let t;switch(e){case Lf:t="Linear";break;case If:t="Reinhard";break;case Df:t="OptimizedCineon";break;case Hr:t="ACESFilmic";break;case Nf:t="AgX";break;case Ff:t="Neutral";break;case Uf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function z1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function B1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function k1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function sa(n){return n!==""}function Lu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(n){return n.replace(V1,G1)}const H1=new Map;function G1(n,e){let t=Be[e];if(t===void 0){const i=H1.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ml(t)}const W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(n){return n.replace(W1,q1)}function q1(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Uu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Y1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Dr:case Ur:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function Z1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ks:e="ENVMAP_BLENDING_MULTIPLY";break;case Rf:e="ENVMAP_BLENDING_MIX";break;case Pf:e="ENVMAP_BLENDING_ADD";break}return e}function j1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function K1(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=X1(t),c=Y1(t),u=$1(t),h=Z1(t),d=j1(t),f=z1(t),x=B1(a),_=r.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(sa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(g=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Be.tonemapping_pars_fragment:"",t.toneMapping!==vi?O1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,F1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),o=ml(o),o=Lu(o,t),o=Iu(o,t),s=ml(s),s=Lu(s,t),s=Iu(s,t),o=Du(o),s=Du(s),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+g+o,y=M+p+s,T=Ru(r,r.VERTEX_SHADER,v),E=Ru(r,r.FRAGMENT_SHADER,y);r.attachShader(_,T),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(T).trim(),B=r.getShaderInfoLog(E).trim();let G=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,E);else{const Z=Pu(r,T,"vertex"),q=Pu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+Z+`
`+q)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||B==="")&&(V=!1);V&&(L.diagnostics={runnable:G,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:B,prefix:p}})}r.deleteShader(T),r.deleteShader(E),R=new vs(r,_),b=k1(r,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,I1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let J1=0;class Q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ex(e),t.set(e,i)),i}}class ex{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function tx(n,e,t,i,r,a,o){const s=new zl,l=new Q1,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,L,F,U){const B=F.fog,G=U.geometry,V=b.isMeshStandardMaterial?F.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),q=Z&&Z.mapping===Vs?Z.image.height:null,ie=x[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const he=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$=he!==void 0?he.length:0;let fe=0;G.morphAttributes.position!==void 0&&(fe=1),G.morphAttributes.normal!==void 0&&(fe=2),G.morphAttributes.color!==void 0&&(fe=3);let se,H,K,oe;if(ie){const tt=An[ie];se=tt.vertexShader,H=tt.fragmentShader}else se=b.vertexShader,H=b.fragmentShader,l.update(b),K=l.getVertexShaderID(b),oe=l.getFragmentShaderID(b);const N=n.getRenderTarget(),Q=U.isInstancedMesh===!0,re=U.isBatchedMesh===!0,ge=!!b.map,D=!!b.matcap,ae=!!Z,Ee=!!b.aoMap,ze=!!b.lightMap,Pe=!!b.bumpMap,Ie=!!b.normalMap,Ve=!!b.displacementMap,Oe=!!b.emissiveMap,ht=!!b.metalnessMap,I=!!b.roughnessMap,w=b.anisotropy>0,Y=b.clearcoat>0,ee=b.dispersion>0,te=b.iridescence>0,ne=b.sheen>0,Re=b.transmission>0,xe=w&&!!b.anisotropyMap,_e=Y&&!!b.clearcoatMap,He=Y&&!!b.clearcoatNormalMap,le=Y&&!!b.clearcoatRoughnessMap,Te=te&&!!b.iridescenceMap,We=te&&!!b.iridescenceThicknessMap,Ne=ne&&!!b.sheenColorMap,ve=ne&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,qe=!!b.specularColorMap,mt=!!b.specularIntensityMap,O=Re&&!!b.transmissionMap,ye=Re&&!!b.thicknessMap,j=!!b.gradientMap,J=!!b.alphaMap,de=b.alphaTest>0,Fe=!!b.alphaHash,Ye=!!b.extensions;let gt=vi;b.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(gt=n.toneMapping);const St={shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:se,fragmentShader:H,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:re,batchingColor:re&&U._colorsTexture!==null,instancing:Q,instancingColor:Q&&U.instanceColor!==null,instancingMorph:Q&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ei,alphaToCoverage:!!b.alphaToCoverage,map:ge,matcap:D,envMap:ae,envMapMode:ae&&Z.mapping,envMapCubeUVHeight:q,aoMap:Ee,lightMap:ze,bumpMap:Pe,normalMap:Ie,displacementMap:d&&Ve,emissiveMap:Oe,normalMapObjectSpace:Ie&&b.normalMapType===jf,normalMapTangentSpace:Ie&&b.normalMapType===Gs,metalnessMap:ht,roughnessMap:I,anisotropy:w,anisotropyMap:xe,clearcoat:Y,clearcoatMap:_e,clearcoatNormalMap:He,clearcoatRoughnessMap:le,dispersion:ee,iridescence:te,iridescenceMap:Te,iridescenceThicknessMap:We,sheen:ne,sheenColorMap:Ne,sheenRoughnessMap:ve,specularMap:Ge,specularColorMap:qe,specularIntensityMap:mt,transmission:Re,transmissionMap:O,thicknessMap:ye,gradientMap:j,opaque:b.transparent===!1&&b.blending===Tr&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:Fe,combine:b.combine,mapUv:ge&&_(b.map.channel),aoMapUv:Ee&&_(b.aoMap.channel),lightMapUv:ze&&_(b.lightMap.channel),bumpMapUv:Pe&&_(b.bumpMap.channel),normalMapUv:Ie&&_(b.normalMap.channel),displacementMapUv:Ve&&_(b.displacementMap.channel),emissiveMapUv:Oe&&_(b.emissiveMap.channel),metalnessMapUv:ht&&_(b.metalnessMap.channel),roughnessMapUv:I&&_(b.roughnessMap.channel),anisotropyMapUv:xe&&_(b.anisotropyMap.channel),clearcoatMapUv:_e&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(b.sheenRoughnessMap.channel),specularMapUv:Ge&&_(b.specularMap.channel),specularColorMapUv:qe&&_(b.specularColorMap.channel),specularIntensityMapUv:mt&&_(b.specularIntensityMap.channel),transmissionMapUv:O&&_(b.transmissionMap.channel),thicknessMapUv:ye&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ie||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(ge||J),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:ge&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pt,flipSided:b.side===jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ye&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(M(S,b),v(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),b.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.doubleSided&&s.enable(10),S.flipSided&&s.enable(11),S.useDepthPacking&&s.enable(12),S.dithering&&s.enable(13),S.transmission&&s.enable(14),S.sheen&&s.enable(15),S.opaque&&s.enable(16),S.pointsUvs&&s.enable(17),S.decodeVideoTexture&&s.enable(18),S.alphaToCoverage&&s.enable(19),b.push(s.mask)}function y(b){const S=x[b.type];let L;if(S){const F=An[S];L=Bp.clone(F.uniforms)}else L=b.uniforms;return L}function T(b,S){let L;for(let F=0,U=u.length;F<U;F++){const B=u[F];if(B.cacheKey===S){L=B,++L.usedTimes;break}}return L===void 0&&(L=new K1(n,S,b,a),u.push(L)),L}function E(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:R}}function nx(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,x,_,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:x,renderOrder:h.renderOrder,z:_,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function s(h,d,f,x,_,g){const p=o(h,d,f,x,_,g);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,x,_,g){const p=o(h,d,f,x,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||ix),i.length>1&&i.sort(d||Nu),r.length>1&&r.sort(d||Nu)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function rx(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Fu,n.set(i,[o])):r>=a.length?(o=new Fu,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ax(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Se};break;case"SpotLight":t={position:new P,direction:new P,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ox=0;function lx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cx(n){const e=new ax,t=sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,a=new st,o=new st;function s(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,x=0,_=0,g=0,p=0,M=0,v=0,y=0,T=0,E=0,A=0;c.sort(lx);for(let b=0,S=c.length;b<S;b++){const L=c[b],F=L.color,U=L.intensity,B=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*U,h+=F.g*U,d+=F.b*U;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],U);A++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,q=t.get(L);q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=L.shadow.matrix,M++}i.directional[f]=V,f++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(U),V.distance=B,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[_]=V;const Z=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,Z.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[_]=Z.matrix,L.castShadow){const q=t.get(L);q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=G,y++}_++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(F).multiplyScalar(U),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=V,g++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Z=L.shadow,q=t.get(L);q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,i.pointShadow[x]=q,i.pointShadowMap[x]=G,i.pointShadowMatrix[x]=L.shadow.matrix,v++}i.point[x]=V,x++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(U),V.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[p]=V,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==f||R.pointLength!==x||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==T||R.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,R.directionalLength=f,R.pointLength=x,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=T,R.numLightProbes=A,i.version=ox++)}function l(c,u){let h=0,d=0,f=0,x=0,_=0;const g=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const v=c[p];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(v.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),a.copy(v.matrixWorld),a.premultiply(g),o.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:s,setupView:l,state:i}}function Ou(n){const e=new cx(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function s(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function ux(n){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new Ou(n),e.set(r,[s])):a>=o.length?(s=new Ou(n),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}class hx extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dx extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`;function mx(n,e,t){let i=new Bl;const r=new pe,a=new pe,o=new Ct,s=new hx({depthPacking:Zf}),l=new dx,c={},u=t.maxTextureSize,h={[Mi]:jt,[jt]:Mi,[pt]:pt},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:fx,fragmentShader:px}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new Ke;x.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rt(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(E,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(_i),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==Yn&&this.type===Yn,B=p===Yn&&this.type!==Yn;for(let G=0,V=E.length;G<V;G++){const Z=E[G],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ie=q.getFrameExtents();if(r.multiply(ie),a.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ie.x),r.x=a.x*ie.x,q.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ie.y),r.y=a.y*ie.y,q.mapSize.y=a.y)),q.map===null||U===!0||B===!0){const $=this.type!==Yn?{minFilter:ln,magFilter:ln}:{};q.map!==null&&q.map.dispose(),q.map=new Xi(r.x,r.y,$),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const he=q.getViewportCount();for(let $=0;$<he;$++){const fe=q.getViewport($);o.set(a.x*fe.x,a.y*fe.y,a.x*fe.z,a.y*fe.w),F.viewport(o),q.updateMatrices(Z,$),i=q.getFrustum(),y(A,R,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Yn&&M(q,R),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,S,L)};function M(E,A){const R=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xi(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,R,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,R,f,_,null)}function v(E,A,R,b){let S=null;const L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:s,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=S.uuid,U=A.uuid;let B=c[F];B===void 0&&(B={},c[F]=B);let G=B[U];G===void 0&&(G=S.clone(),B[U]=G,A.addEventListener("dispose",T)),S=G}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Yn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=R}return S}function y(E,A,R,b,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Yn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const U=e.update(E),B=E.material;if(Array.isArray(B)){const G=U.groups;for(let V=0,Z=G.length;V<Z;V++){const q=G[V],ie=B[q.materialIndex];if(ie&&ie.visible){const he=v(E,ie,b,S);E.onBeforeShadow(n,E,A,R,U,he,q),n.renderBufferDirect(R,null,U,he,E,q),E.onAfterShadow(n,E,A,R,U,he,q)}}}else if(B.visible){const G=v(E,B,b,S);E.onBeforeShadow(n,E,A,R,U,G,null),n.renderBufferDirect(R,null,U,G,E,null),E.onAfterShadow(n,E,A,R,U,G,null)}}const F=E.children;for(let U=0,B=F.length;U<B;U++)y(F[U],A,R,b,S)}function T(E){E.target.removeEventListener("dispose",T);for(const R in c){const b=c[R],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function gx(n){function e(){let O=!1;const ye=new Ct;let j=null;const J=new Ct(0,0,0,0);return{setMask:function(de){j!==de&&!O&&(n.colorMask(de,de,de,de),j=de)},setLocked:function(de){O=de},setClear:function(de,Fe,Ye,gt,St){St===!0&&(de*=gt,Fe*=gt,Ye*=gt),ye.set(de,Fe,Ye,gt),J.equals(ye)===!1&&(n.clearColor(de,Fe,Ye,gt),J.copy(ye))},reset:function(){O=!1,j=null,J.set(-1,0,0,0)}}}function t(){let O=!1,ye=null,j=null,J=null;return{setTest:function(de){de?oe(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(de){ye!==de&&!O&&(n.depthMask(de),ye=de)},setFunc:function(de){if(j!==de){switch(de){case Sf:n.depthFunc(n.NEVER);break;case bf:n.depthFunc(n.ALWAYS);break;case Ef:n.depthFunc(n.LESS);break;case Ms:n.depthFunc(n.LEQUAL);break;case wf:n.depthFunc(n.EQUAL);break;case Tf:n.depthFunc(n.GEQUAL);break;case Af:n.depthFunc(n.GREATER);break;case Cf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=de}},setLocked:function(de){O=de},setClear:function(de){J!==de&&(n.clearDepth(de),J=de)},reset:function(){O=!1,ye=null,j=null,J=null}}}function i(){let O=!1,ye=null,j=null,J=null,de=null,Fe=null,Ye=null,gt=null,St=null;return{setTest:function(tt){O||(tt?oe(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(tt){ye!==tt&&!O&&(n.stencilMask(tt),ye=tt)},setFunc:function(tt,wn,Tn){(j!==tt||J!==wn||de!==Tn)&&(n.stencilFunc(tt,wn,Tn),j=tt,J=wn,de=Tn)},setOp:function(tt,wn,Tn){(Fe!==tt||Ye!==wn||gt!==Tn)&&(n.stencilOp(tt,wn,Tn),Fe=tt,Ye=wn,gt=Tn)},setLocked:function(tt){O=tt},setClear:function(tt){St!==tt&&(n.clearStencil(tt),St=tt)},reset:function(){O=!1,ye=null,j=null,J=null,de=null,Fe=null,Ye=null,gt=null,St=null}}}const r=new e,a=new t,o=new i,s=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,x=!1,_=null,g=null,p=null,M=null,v=null,y=null,T=null,E=new Se(0,0,0),A=0,R=!1,b=null,S=null,L=null,F=null,U=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,V=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=V>=2);let q=null,ie={};const he=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),fe=new Ct().fromArray(he),se=new Ct().fromArray($);function H(O,ye,j,J){const de=new Uint8Array(4),Fe=n.createTexture();n.bindTexture(O,Fe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<j;Ye++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ye+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Fe}const K={};K[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(Ms),Pe(!1),Ie(_c),oe(n.CULL_FACE),Ee(_i);function oe(O){c[O]!==!0&&(n.enable(O),c[O]=!0)}function N(O){c[O]!==!1&&(n.disable(O),c[O]=!1)}function Q(O,ye){return u[O]!==ye?(n.bindFramebuffer(O,ye),u[O]=ye,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ye),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function re(O,ye){let j=d,J=!1;if(O){j=h.get(ye),j===void 0&&(j=[],h.set(ye,j));const de=O.textures;if(j.length!==de.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Fe=0,Ye=de.length;Fe<Ye;Fe++)j[Fe]=n.COLOR_ATTACHMENT0+Fe;j.length=de.length,J=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,J=!0);J&&n.drawBuffers(j)}function ge(O){return f!==O?(n.useProgram(O),f=O,!0):!1}const D={[zi]:n.FUNC_ADD,[af]:n.FUNC_SUBTRACT,[sf]:n.FUNC_REVERSE_SUBTRACT};D[of]=n.MIN,D[lf]=n.MAX;const ae={[cf]:n.ZERO,[uf]:n.ONE,[hf]:n.SRC_COLOR,[ll]:n.SRC_ALPHA,[xf]:n.SRC_ALPHA_SATURATE,[mf]:n.DST_COLOR,[ff]:n.DST_ALPHA,[df]:n.ONE_MINUS_SRC_COLOR,[cl]:n.ONE_MINUS_SRC_ALPHA,[gf]:n.ONE_MINUS_DST_COLOR,[pf]:n.ONE_MINUS_DST_ALPHA,[_f]:n.CONSTANT_COLOR,[vf]:n.ONE_MINUS_CONSTANT_COLOR,[yf]:n.CONSTANT_ALPHA,[Mf]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(O,ye,j,J,de,Fe,Ye,gt,St,tt){if(O===_i){x===!0&&(N(n.BLEND),x=!1);return}if(x===!1&&(oe(n.BLEND),x=!0),O!==rf){if(O!==_||tt!==R){if((g!==zi||v!==zi)&&(n.blendEquation(n.FUNC_ADD),g=zi,v=zi),tt)switch(O){case Tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.ONE,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}p=null,M=null,y=null,T=null,E.set(0,0,0),A=0,_=O,R=tt}return}de=de||ye,Fe=Fe||j,Ye=Ye||J,(ye!==g||de!==v)&&(n.blendEquationSeparate(D[ye],D[de]),g=ye,v=de),(j!==p||J!==M||Fe!==y||Ye!==T)&&(n.blendFuncSeparate(ae[j],ae[J],ae[Fe],ae[Ye]),p=j,M=J,y=Fe,T=Ye),(gt.equals(E)===!1||St!==A)&&(n.blendColor(gt.r,gt.g,gt.b,St),E.copy(gt),A=St),_=O,R=!1}function ze(O,ye){O.side===pt?N(n.CULL_FACE):oe(n.CULL_FACE);let j=O.side===jt;ye&&(j=!j),Pe(j),O.blending===Tr&&O.transparent===!1?Ee(_i):Ee(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const J=O.stencilWrite;o.setTest(J),J&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Oe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(O){b!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),b=O)}function Ie(O){O!==ef?(oe(n.CULL_FACE),O!==S&&(O===_c?n.cullFace(n.BACK):O===tf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),S=O}function Ve(O){O!==L&&(G&&n.lineWidth(O),L=O)}function Oe(O,ye,j){O?(oe(n.POLYGON_OFFSET_FILL),(F!==ye||U!==j)&&(n.polygonOffset(ye,j),F=ye,U=j)):N(n.POLYGON_OFFSET_FILL)}function ht(O){O?oe(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function I(O){O===void 0&&(O=n.TEXTURE0+B-1),q!==O&&(n.activeTexture(O),q=O)}function w(O,ye,j){j===void 0&&(q===null?j=n.TEXTURE0+B-1:j=q);let J=ie[j];J===void 0&&(J={type:void 0,texture:void 0},ie[j]=J),(J.type!==O||J.texture!==ye)&&(q!==j&&(n.activeTexture(j),q=j),n.bindTexture(O,ye||K[O]),J.type=O,J.texture=ye)}function Y(){const O=ie[q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(O){fe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),fe.copy(O))}function ve(O){se.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),se.copy(O))}function Ge(O,ye){let j=l.get(ye);j===void 0&&(j=new WeakMap,l.set(ye,j));let J=j.get(O);J===void 0&&(J=n.getUniformBlockIndex(ye,O.name),j.set(O,J))}function qe(O,ye){const J=l.get(ye).get(O);s.get(ye)!==J&&(n.uniformBlockBinding(ye,J,O.__bindingPointIndex),s.set(ye,J))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},q=null,ie={},u={},h=new WeakMap,d=[],f=null,x=!1,_=null,g=null,p=null,M=null,v=null,y=null,T=null,E=new Se(0,0,0),A=0,R=!1,b=null,S=null,L=null,F=null,U=null,fe.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:N,bindFramebuffer:Q,drawBuffers:re,useProgram:ge,setBlending:Ee,setMaterial:ze,setFlipSided:Pe,setCullFace:Ie,setLineWidth:Ve,setPolygonOffset:Oe,setScissorTest:ht,activeTexture:I,bindTexture:w,unbindTexture:Y,compressedTexImage2D:ee,compressedTexImage3D:te,texImage2D:Te,texImage3D:We,updateUBOMapping:Ge,uniformBlockBinding:qe,texStorage2D:He,texStorage3D:le,texSubImage2D:ne,texSubImage3D:Re,compressedTexSubImage2D:xe,compressedTexSubImage3D:_e,scissor:Ne,viewport:ve,reset:mt}}function xx(n,e,t,i,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,w){return f?new OffscreenCanvas(I,w):As("canvas")}function _(I,w,Y){let ee=1;const te=ht(I);if((te.width>Y||te.height>Y)&&(ee=Y/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ne=Math.floor(ee*te.width),Re=Math.floor(ee*te.height);h===void 0&&(h=x(ne,Re));const xe=w?x(ne,Re):h;return xe.width=ne,xe.height=Re,xe.getContext("2d").drawImage(I,0,0,ne,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ne+"x"+Re+")."),xe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==ln&&I.minFilter!==yn}function p(I){n.generateMipmap(I)}function M(I,w,Y,ee,te=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ne=w;if(w===n.RED&&(Y===n.FLOAT&&(ne=n.R32F),Y===n.HALF_FLOAT&&(ne=n.R16F),Y===n.UNSIGNED_BYTE&&(ne=n.R8)),w===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.R8UI),Y===n.UNSIGNED_SHORT&&(ne=n.R16UI),Y===n.UNSIGNED_INT&&(ne=n.R32UI),Y===n.BYTE&&(ne=n.R8I),Y===n.SHORT&&(ne=n.R16I),Y===n.INT&&(ne=n.R32I)),w===n.RG&&(Y===n.FLOAT&&(ne=n.RG32F),Y===n.HALF_FLOAT&&(ne=n.RG16F),Y===n.UNSIGNED_BYTE&&(ne=n.RG8)),w===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RG16UI),Y===n.UNSIGNED_INT&&(ne=n.RG32UI),Y===n.BYTE&&(ne=n.RG8I),Y===n.SHORT&&(ne=n.RG16I),Y===n.INT&&(ne=n.RG32I)),w===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),w===n.RGBA){const Re=te?bs:et.getTransfer(ee);Y===n.FLOAT&&(ne=n.RGBA32F),Y===n.HALF_FLOAT&&(ne=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ne=Re===ot?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(I,w){let Y;return I?w===null||w===Nr||w===Fr?Y=n.DEPTH24_STENCIL8:w===gi?Y=n.DEPTH32F_STENCIL8:w===Ss&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Nr||w===Fr?Y=n.DEPTH_COMPONENT24:w===gi?Y=n.DEPTH_COMPONENT32F:w===Ss&&(Y=n.DEPTH_COMPONENT16),Y}function y(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==ln&&I.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){const w=I.target;w.removeEventListener("dispose",T),A(w),w.isVideoTexture&&u.delete(w)}function E(I){const w=I.target;w.removeEventListener("dispose",E),b(w)}function A(I){const w=i.get(I);if(w.__webglInit===void 0)return;const Y=I.source,ee=d.get(Y);if(ee){const te=ee[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(I),Object.keys(ee).length===0&&d.delete(Y)}i.remove(I)}function R(I){const w=i.get(I);n.deleteTexture(w.__webglTexture);const Y=I.source,ee=d.get(Y);delete ee[w.__cacheKey],o.memory.textures--}function b(I){const w=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let te=0;te<w.__webglFramebuffer[ee].length;te++)n.deleteFramebuffer(w.__webglFramebuffer[ee][te]);else n.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ee]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=I.textures;for(let ee=0,te=Y.length;ee<te;ee++){const ne=i.get(Y[ee]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(Y[ee])}i.remove(I)}let S=0;function L(){S=0}function F(){const I=S;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),S+=1,I}function U(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function B(I,w){const Y=i.get(I);if(I.isVideoTexture&&Ve(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Y,I,w);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+w)}function G(I,w){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){se(Y,I,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+w)}function V(I,w){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){se(Y,I,w);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+w)}function Z(I,w){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){H(Y,I,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+w)}const q={[dl]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},ie={[ln]:n.NEAREST,[Of]:n.NEAREST_MIPMAP_NEAREST,[La]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[mo]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},he={[Kf]:n.NEVER,[ip]:n.ALWAYS,[Jf]:n.LESS,[Hh]:n.LEQUAL,[Qf]:n.EQUAL,[np]:n.GEQUAL,[ep]:n.GREATER,[tp]:n.NOTEQUAL};function $(I,w){if(w.type===gi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===yn||w.magFilter===mo||w.magFilter===La||w.magFilter===Hi||w.minFilter===yn||w.minFilter===mo||w.minFilter===La||w.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,q[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,q[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,q[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ie[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ln||w.minFilter!==La&&w.minFilter!==Hi||w.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function fe(I,w){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",T));const ee=w.source;let te=d.get(ee);te===void 0&&(te={},d.set(ee,te));const ne=U(w);if(ne!==I.__cacheKey){te[ne]===void 0&&(te[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),te[ne].usedTimes++;const Re=te[I.__cacheKey];Re!==void 0&&(te[I.__cacheKey].usedTimes--,Re.usedTimes===0&&R(w)),I.__cacheKey=ne,I.__webglTexture=te[ne].texture}return Y}function se(I,w,Y){let ee=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=n.TEXTURE_3D);const te=fe(I,w),ne=w.source;t.bindTexture(ee,I.__webglTexture,n.TEXTURE0+Y);const Re=i.get(ne);if(ne.version!==Re.__version||te===!0){t.activeTexture(n.TEXTURE0+Y);const xe=et.getPrimaries(et.workingColorSpace),_e=w.colorSpace===pi?null:et.getPrimaries(w.colorSpace),He=w.colorSpace===pi||xe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let le=_(w.image,!1,r.maxTextureSize);le=Oe(w,le);const Te=a.convert(w.format,w.colorSpace),We=a.convert(w.type);let Ne=M(w.internalFormat,Te,We,w.colorSpace,w.isVideoTexture);$(ee,w);let ve;const Ge=w.mipmaps,qe=w.isVideoTexture!==!0,mt=Re.__version===void 0||te===!0,O=ne.dataReady,ye=y(w,le);if(w.isDepthTexture)Ne=v(w.format===Or,w.type),mt&&(qe?t.texStorage2D(n.TEXTURE_2D,1,Ne,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ne,le.width,le.height,0,Te,We,null));else if(w.isDataTexture)if(Ge.length>0){qe&&mt&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,Ge[0].width,Ge[0].height);for(let j=0,J=Ge.length;j<J;j++)ve=Ge[j],qe?O&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,Te,We,ve.data):t.texImage2D(n.TEXTURE_2D,j,Ne,ve.width,ve.height,0,Te,We,ve.data);w.generateMipmaps=!1}else qe?(mt&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,le.width,le.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Te,We,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,le.width,le.height,0,Te,We,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qe&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ne,Ge[0].width,Ge[0].height,le.depth);for(let j=0,J=Ge.length;j<J;j++)if(ve=Ge[j],w.format!==Dn)if(Te!==null)if(qe){if(O)if(w.layerUpdates.size>0){for(const de of w.layerUpdates){const Fe=ve.width*ve.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,de,ve.width,ve.height,1,Te,ve.data.slice(Fe*de,Fe*(de+1)),0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,le.depth,Te,ve.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Ne,ve.width,ve.height,le.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,le.depth,Te,We,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Ne,ve.width,ve.height,le.depth,0,Te,We,ve.data)}else{qe&&mt&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,Ge[0].width,Ge[0].height);for(let j=0,J=Ge.length;j<J;j++)ve=Ge[j],w.format!==Dn?Te!==null?qe?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,Te,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Ne,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,Te,We,ve.data):t.texImage2D(n.TEXTURE_2D,j,Ne,ve.width,ve.height,0,Te,We,ve.data)}else if(w.isDataArrayTexture)if(qe){if(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ne,le.width,le.height,le.depth),O)if(w.layerUpdates.size>0){let j;switch(We){case n.UNSIGNED_BYTE:switch(Te){case n.ALPHA:j=1;break;case n.LUMINANCE:j=1;break;case n.LUMINANCE_ALPHA:j=2;break;case n.RGB:j=3;break;case n.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${Te}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${We}.`)}const J=le.width*le.height*j;for(const de of w.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,le.width,le.height,1,Te,We,le.data.slice(J*de,J*(de+1)));w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Te,We,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,le.width,le.height,le.depth,0,Te,We,le.data);else if(w.isData3DTexture)qe?(mt&&t.texStorage3D(n.TEXTURE_3D,ye,Ne,le.width,le.height,le.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Te,We,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,le.width,le.height,le.depth,0,Te,We,le.data);else if(w.isFramebufferTexture){if(mt)if(qe)t.texStorage2D(n.TEXTURE_2D,ye,Ne,le.width,le.height);else{let j=le.width,J=le.height;for(let de=0;de<ye;de++)t.texImage2D(n.TEXTURE_2D,de,Ne,j,J,0,Te,We,null),j>>=1,J>>=1}}else if(Ge.length>0){if(qe&&mt){const j=ht(Ge[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ne,j.width,j.height)}for(let j=0,J=Ge.length;j<J;j++)ve=Ge[j],qe?O&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Te,We,ve):t.texImage2D(n.TEXTURE_2D,j,Ne,Te,We,ve);w.generateMipmaps=!1}else if(qe){if(mt){const j=ht(le);t.texStorage2D(n.TEXTURE_2D,ye,Ne,j.width,j.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,We,le)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Te,We,le);g(w)&&p(ee),Re.__version=ne.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function H(I,w,Y){if(w.image.length!==6)return;const ee=fe(I,w),te=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Y);const ne=i.get(te);if(te.version!==ne.__version||ee===!0){t.activeTexture(n.TEXTURE0+Y);const Re=et.getPrimaries(et.workingColorSpace),xe=w.colorSpace===pi?null:et.getPrimaries(w.colorSpace),_e=w.colorSpace===pi||Re===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const He=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let J=0;J<6;J++)!He&&!le?Te[J]=_(w.image[J],!0,r.maxCubemapSize):Te[J]=le?w.image[J].image:w.image[J],Te[J]=Oe(w,Te[J]);const We=Te[0],Ne=a.convert(w.format,w.colorSpace),ve=a.convert(w.type),Ge=M(w.internalFormat,Ne,ve,w.colorSpace),qe=w.isVideoTexture!==!0,mt=ne.__version===void 0||ee===!0,O=te.dataReady;let ye=y(w,We);$(n.TEXTURE_CUBE_MAP,w);let j;if(He){qe&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ge,We.width,We.height);for(let J=0;J<6;J++){j=Te[J].mipmaps;for(let de=0;de<j.length;de++){const Fe=j[de];w.format!==Dn?Ne!==null?qe?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ge,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,Fe.width,Fe.height,Ne,ve,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ge,Fe.width,Fe.height,0,Ne,ve,Fe.data)}}}else{if(j=w.mipmaps,qe&&mt){j.length>0&&ye++;const J=ht(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(le){qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te[J].width,Te[J].height,Ne,ve,Te[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,Te[J].width,Te[J].height,0,Ne,ve,Te[J].data);for(let de=0;de<j.length;de++){const Ye=j[de].image[J].image;qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ye.width,Ye.height,Ne,ve,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ge,Ye.width,Ye.height,0,Ne,ve,Ye.data)}}else{qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,ve,Te[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,Ne,ve,Te[J]);for(let de=0;de<j.length;de++){const Fe=j[de];qe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ne,ve,Fe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ge,Ne,ve,Fe.image[J])}}}g(w)&&p(n.TEXTURE_CUBE_MAP),ne.__version=te.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function K(I,w,Y,ee,te,ne){const Re=a.convert(Y.format,Y.colorSpace),xe=a.convert(Y.type),_e=M(Y.internalFormat,Re,xe,Y.colorSpace);if(!i.get(w).__hasExternalTextures){const le=Math.max(1,w.width>>ne),Te=Math.max(1,w.height>>ne);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,_e,le,Te,w.depth,0,Re,xe,null):t.texImage2D(te,ne,_e,le,Te,0,Re,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ie(w)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,te,i.get(Y).__webglTexture,0,Pe(w)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,te,i.get(Y).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(I,w,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){const ee=w.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,ne=v(w.stencilBuffer,te),Re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=Pe(w);Ie(w)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,ne,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ne,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ne,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,I)}else{const ee=w.textures;for(let te=0;te<ee.length;te++){const ne=ee[te],Re=a.convert(ne.format,ne.colorSpace),xe=a.convert(ne.type),_e=M(ne.internalFormat,Re,xe,ne.colorSpace),He=Pe(w);Y&&Ie(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,_e,w.width,w.height):Ie(w)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,_e,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,_e,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,te=Pe(w);if(w.depthTexture.format===Ar)Ie(w)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(w.depthTexture.format===Or)Ie(w)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Q(I){const w=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");N(w.__webglFramebuffer,I)}else if(Y){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=n.createRenderbuffer(),oe(w.__webglDepthbuffer[ee],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),oe(w.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(I,w,Y){const ee=i.get(I);w!==void 0&&K(ee.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Q(I)}function ge(I){const w=I.texture,Y=i.get(I),ee=i.get(w);I.addEventListener("dispose",E);const te=I.textures,ne=I.isWebGLCubeRenderTarget===!0,Re=te.length>1;if(Re||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++),ne){Y.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[xe]=[];for(let _e=0;_e<w.mipmaps.length;_e++)Y.__webglFramebuffer[xe][_e]=n.createFramebuffer()}else Y.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)Y.__webglFramebuffer[xe]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Re)for(let xe=0,_e=te.length;xe<_e;xe++){const He=i.get(te[xe]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Ie(I)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let xe=0;xe<te.length;xe++){const _e=te[xe];Y.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[xe]);const He=a.convert(_e.format,_e.colorSpace),le=a.convert(_e.type),Te=M(_e.internalFormat,He,le,_e.colorSpace,I.isXRRenderTarget===!0),We=Pe(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Te,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Y.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),$(n.TEXTURE_CUBE_MAP,w);for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)K(Y.__webglFramebuffer[xe][_e],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,_e);else K(Y.__webglFramebuffer[xe],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(w)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let xe=0,_e=te.length;xe<_e;xe++){const He=te[xe],le=i.get(He);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),$(n.TEXTURE_2D,He),K(Y.__webglFramebuffer,I,He,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),g(He)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,ee.__webglTexture),$(xe,w),w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)K(Y.__webglFramebuffer[_e],I,w,n.COLOR_ATTACHMENT0,xe,_e);else K(Y.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,xe,0);g(w)&&p(xe),t.unbindTexture()}I.depthBuffer&&Q(I)}function D(I){const w=I.textures;for(let Y=0,ee=w.length;Y<ee;Y++){const te=w[Y];if(g(te)){const ne=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=i.get(te).__webglTexture;t.bindTexture(ne,Re),p(ne),t.unbindTexture()}}}const ae=[],Ee=[];function ze(I){if(I.samples>0){if(Ie(I)===!1){const w=I.textures,Y=I.width,ee=I.height;let te=n.COLOR_BUFFER_BIT;const ne=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(I),xe=w.length>1;if(xe)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);const He=i.get(w[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,te,n.NEAREST),l===!0&&(ae.length=0,Ee.length=0,ae.push(n.COLOR_ATTACHMENT0+_e),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ae.push(ne),Ee.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);const He=i.get(w[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Pe(I){return Math.min(r.maxSamples,I.samples)}function Ie(I){const w=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ve(I){const w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function Oe(I,w){const Y=I.colorSpace,ee=I.format,te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Ei&&Y!==pi&&(et.getTransfer(Y)===ot?(ee!==Dn||te!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function ht(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=re,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Ie}function _x(n,e){function t(i,r=pi){let a;const o=et.getTransfer(r);if(i===Si)return n.UNSIGNED_BYTE;if(i===Oh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.BYTE;if(i===Bf)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===Fh)return n.INT;if(i===Nr)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===Hs)return n.HALF_FLOAT;if(i===Vf)return n.ALPHA;if(i===Hf)return n.RGB;if(i===Dn)return n.RGBA;if(i===Gf)return n.LUMINANCE;if(i===Wf)return n.LUMINANCE_ALPHA;if(i===Ar)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===qf)return n.RED;if(i===Bh)return n.RED_INTEGER;if(i===Xf)return n.RG;if(i===kh)return n.RG_INTEGER;if(i===Vh)return n.RGBA_INTEGER;if(i===go||i===xo||i===_o||i===vo)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===go)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===go)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mc||i===Sc||i===bc||i===Ec)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Mc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ec)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wc||i===Tc||i===Ac)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===wc||i===Tc)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ac)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cc||i===Rc||i===Pc||i===Lc||i===Ic||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===zc||i===Bc||i===kc||i===Vc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Cc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ic)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yo||i===Hc||i===Gc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===yo)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yf||i===Wc||i===qc||i===Xc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===yo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Wc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class vx extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yx={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`;class bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Yt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:Mx,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Ex extends Zi{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,x=null;const _=new bx,g=t.getContextAttributes();let p=null,M=null;const v=[],y=[],T=new pe;let E=null;const A=new vn;A.layers.enable(1),A.viewport=new Ct;const R=new vn;R.layers.enable(2),R.viewport=new Ct;const b=[A,R],S=new vx;S.layers.enable(1),S.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=v[H];return K===void 0&&(K=new qo,v[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=v[H];return K===void 0&&(K=new qo,v[H]=K),K.getGripSpace()},this.getHand=function(H){let K=v[H];return K===void 0&&(K=new qo,v[H]=K),K.getHandSpace()};function U(H){const K=y.indexOf(H.inputSource);if(K===-1)return;const oe=v[K];oe!==void 0&&(oe.update(H.inputSource,H.frame,c||o),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",G);for(let H=0;H<v.length;H++){const K=y[H];K!==null&&(y[H]=null,v[H].disconnect(K))}L=null,F=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,M=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",B),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Xi(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,oe=null,N=null;g.depth&&(N=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Or:Ar,oe=g.stencil?Fr:Nr);const Q={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:a};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Q),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Xi(d.textureWidth,d.textureHeight,{format:Dn,type:Si,depthTexture:new Qh(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(H){for(let K=0;K<H.removed.length;K++){const oe=H.removed[K],N=y.indexOf(oe);N>=0&&(y[N]=null,v[N].disconnect(oe))}for(let K=0;K<H.added.length;K++){const oe=H.added[K];let N=y.indexOf(oe);if(N===-1){for(let re=0;re<v.length;re++)if(re>=y.length){y.push(oe),N=re;break}else if(y[re]===null){y[re]=oe,N=re;break}if(N===-1)break}const Q=v[N];Q&&Q.connect(oe)}}const V=new P,Z=new P;function q(H,K,oe){V.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld);const N=V.distanceTo(Z),Q=K.projectionMatrix.elements,re=oe.projectionMatrix.elements,ge=Q[14]/(Q[10]-1),D=Q[14]/(Q[10]+1),ae=(Q[9]+1)/Q[5],Ee=(Q[9]-1)/Q[5],ze=(Q[8]-1)/Q[0],Pe=(re[8]+1)/re[0],Ie=ge*ze,Ve=ge*Pe,Oe=N/(-ze+Pe),ht=Oe*-ze;K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ht),H.translateZ(Oe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const I=ge+Oe,w=D+Oe,Y=Ie-ht,ee=Ve+(N-ht),te=ae*D/w*I,ne=Ee*D/w*I;H.projectionMatrix.makePerspective(Y,ee,te,ne,I,w),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function ie(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;_.texture!==null&&(H.near=_.depthNear,H.far=_.depthFar),S.near=R.near=A.near=H.near,S.far=R.far=A.far=H.far,(L!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,F=S.far,A.near=L,A.far=F,R.near=L,R.far=F,A.updateProjectionMatrix(),R.updateProjectionMatrix(),H.updateProjectionMatrix());const K=H.parent,oe=S.cameras;ie(S,K);for(let N=0;N<oe.length;N++)ie(oe[N],K);oe.length===2?q(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),he(H,S,K)};function he(H,K,oe){oe===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ga*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let $=null;function fe(H,K){if(u=K.getViewerPose(c||o),x=K,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let N=!1;oe.length!==S.cameras.length&&(S.cameras.length=0,N=!0);for(let re=0;re<oe.length;re++){const ge=oe[re];let D=null;if(f!==null)D=f.getViewport(ge);else{const Ee=h.getViewSubImage(d,ge);D=Ee.viewport,re===0&&(e.setRenderTargetTextures(M,Ee.colorTexture,d.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(M))}let ae=b[re];ae===void 0&&(ae=new vn,ae.layers.enable(re),ae.viewport=new Ct,b[re]=ae),ae.matrix.fromArray(ge.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ge.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(D.x,D.y,D.width,D.height),re===0&&(S.matrix.copy(ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),N===!0&&S.cameras.push(ae)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const re=h.getDepthInformation(oe[0]);re&&re.isValid&&re.texture&&_.init(e,re,r.renderState)}}for(let oe=0;oe<v.length;oe++){const N=y[oe],Q=v[oe];N!==null&&Q!==void 0&&Q.update(N,K,c||o)}$&&$(H,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const se=new Jh;se.setAnimationLoop(fe),this.setAnimationLoop=function(H){$=H},this.dispose=function(){}}}const Fi=new hn,wx=new st;function Tx(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Zh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,M,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(g,p):p.isMeshToonMaterial?(a(g,p),h(g,p)):p.isMeshPhongMaterial?(a(g,p),u(g,p)):p.isMeshStandardMaterial?(a(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(a(g,p),x(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),_(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?l(g,p,M,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),v=M.envMap,y=M.envMapRotation;v&&(g.envMap.value=v,Fi.copy(y),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),g.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(Fi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ax(n,e,t,i){let r={},a={},o=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const y=v.program;i.uniformBlockBinding(M,y)}function c(M,v){let y=r[M.id];y===void 0&&(x(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",g));const T=v.program;i.updateUBOMapping(M,T);const E=e.render.frame;a[M.id]!==E&&(d(M),a[M.id]=E)}function u(M){const v=h();M.__bindingPointIndex=v;const y=n.createBuffer(),T=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function h(){for(let M=0;M<s;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=r[M.id],y=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,A=y.length;E<A;E++){const R=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,S=R.length;b<S;b++){const L=R[b];if(f(L,E,b,T)===!0){const F=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let G=0;G<U.length;G++){const V=U[G],Z=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,F+B,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,v,y,T){const E=M.value,A=v+"_"+y;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const R=T[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function x(M){const v=M.uniforms;let y=0;const T=16;for(let A=0,R=v.length;A<R;A++){const b=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,L=b.length;S<L;S++){const F=b[S],U=Array.isArray(F.value)?F.value:[F.value];for(let B=0,G=U.length;B<G;B++){const V=U[B],Z=_(V),q=y%T;q!==0&&T-q<Z.boundary&&(y+=T-q),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=Z.storage}}}const E=y%T;return E>0&&(y+=T-E),M.__size=y,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){const v=M.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},a={}}return{bind:l,update:c,dispose:p}}class ni{constructor(e={}){const{canvas:t=yp(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),x=new Int32Array(4);let _=null,g=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=vi,this.toneMappingExposure=1;const v=this;let y=!1,T=0,E=0,A=null,R=-1,b=null;const S=new Ct,L=new Ct;let F=null;const U=new Se(0);let B=0,G=t.width,V=t.height,Z=1,q=null,ie=null;const he=new Ct(0,0,G,V),$=new Ct(0,0,G,V);let fe=!1;const se=new Bl;let H=!1,K=!1;const oe=new st,N=new P,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function ge(){return A===null?Z:1}let D=i;function ae(C,z){return t.getContext(C,z)}try{const C={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ul}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",J,!1),D===null){const z="webgl2";if(D=ae(z,C),D===null)throw ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ee,ze,Pe,Ie,Ve,Oe,ht,I,w,Y,ee,te,ne,Re,xe,_e,He,le,Te,We,Ne,ve,Ge,qe;function mt(){Ee=new Fg(D),Ee.init(),ve=new _x(D,Ee),ze=new Pg(D,Ee,e,ve),Pe=new gx(D),Ie=new Bg(D),Ve=new nx,Oe=new xx(D,Ee,Pe,Ve,ze,ve,Ie),ht=new Ig(v),I=new Ng(v),w=new Xp(D),Ge=new Cg(D,w),Y=new Og(D,w,Ie,Ge),ee=new Vg(D,Y,w,Ie),Te=new kg(D,ze,Oe),_e=new Lg(Ve),te=new tx(v,ht,I,Ee,ze,Ge,_e),ne=new Tx(v,Ve),Re=new rx,xe=new ux(Ee),le=new Ag(v,ht,I,Pe,ee,d,l),He=new mx(v,ee,ze),qe=new Ax(D,Ie,ze,Pe),We=new Rg(D,Ee,Ie),Ne=new zg(D,Ee,Ie),Ie.programs=te.programs,v.capabilities=ze,v.extensions=Ee,v.properties=Ve,v.renderLists=Re,v.shadowMap=He,v.state=Pe,v.info=Ie}mt();const O=new Ex(v,D);this.xr=O,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(G,V,!1))},this.getSize=function(C){return C.set(G,V)},this.setSize=function(C,z,W=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,V=z,t.width=Math.floor(C*Z),t.height=Math.floor(z*Z),W===!0&&(t.style.width=C+"px",t.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(G*Z,V*Z).floor()},this.setDrawingBufferSize=function(C,z,W){G=C,V=z,Z=W,t.width=Math.floor(C*W),t.height=Math.floor(z*W),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,z,W,X){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,z,W,X),Pe.viewport(S.copy(he).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,z,W,X){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,z,W,X),Pe.scissor(L.copy($).multiplyScalar(Z).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(C){Pe.setScissorTest(fe=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){ie=C},this.getClearColor=function(C){return C.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(C=!0,z=!0,W=!0){let X=0;if(C){let k=!1;if(A!==null){const ue=A.texture.format;k=ue===Vh||ue===kh||ue===Bh}if(k){const ue=A.texture.type,Me=ue===Si||ue===Nr||ue===Ss||ue===Fr||ue===Oh||ue===zh,be=le.getClearColor(),we=le.getClearAlpha(),De=be.r,Ue=be.g,Le=be.b;Me?(f[0]=De,f[1]=Ue,f[2]=Le,f[3]=we,D.clearBufferuiv(D.COLOR,0,f)):(x[0]=De,x[1]=Ue,x[2]=Le,x[3]=we,D.clearBufferiv(D.COLOR,0,x))}else X|=D.COLOR_BUFFER_BIT}z&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Re.dispose(),xe.dispose(),Ve.dispose(),ht.dispose(),I.dispose(),ee.dispose(),Ge.dispose(),qe.dispose(),te.dispose(),O.dispose(),O.removeEventListener("sessionstart",wn),O.removeEventListener("sessionend",Tn),Ri.stop()};function ye(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Ie.autoReset,z=He.enabled,W=He.autoUpdate,X=He.needsUpdate,k=He.type;mt(),Ie.autoReset=C,He.enabled=z,He.autoUpdate=W,He.needsUpdate=X,He.type=k}function J(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function de(C){const z=C.target;z.removeEventListener("dispose",de),Fe(z)}function Fe(C){Ye(C),Ve.remove(C)}function Ye(C){const z=Ve.get(C).programs;z!==void 0&&(z.forEach(function(W){te.releaseProgram(W)}),C.isShaderMaterial&&te.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,W,X,k,ue){z===null&&(z=Q);const Me=k.isMesh&&k.matrixWorld.determinant()<0,be=jd(C,z,W,X,k);Pe.setMaterial(X,Me);let we=W.index,De=1;if(X.wireframe===!0){if(we=Y.getWireframeAttribute(W),we===void 0)return;De=2}const Ue=W.drawRange,Le=W.attributes.position;let je=Ue.start*De,dt=(Ue.start+Ue.count)*De;ue!==null&&(je=Math.max(je,ue.start*De),dt=Math.min(dt,(ue.start+ue.count)*De)),we!==null?(je=Math.max(je,0),dt=Math.min(dt,we.count)):Le!=null&&(je=Math.max(je,0),dt=Math.min(dt,Le.count));const ft=dt-je;if(ft<0||ft===1/0)return;Ge.setup(k,X,be,W,we);let Qt,Je=We;if(we!==null&&(Qt=w.get(we),Je=Ne,Je.setIndex(Qt)),k.isMesh)X.wireframe===!0?(Pe.setLineWidth(X.wireframeLinewidth*ge()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(k.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),Pe.setLineWidth(Ae*ge()),k.isLineSegments?Je.setMode(D.LINES):k.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else k.isPoints?Je.setMode(D.POINTS):k.isSprite&&Je.setMode(D.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?Je.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):Je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Je.renderInstances(je,ft,k.count);else if(W.isInstancedBufferGeometry){const Ae=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Bt=Math.min(W.instanceCount,Ae);Je.renderInstances(je,ft,Bt)}else Je.render(je,ft)};function gt(C,z,W){C.transparent===!0&&C.side===pt&&C.forceSinglePass===!1?(C.side=jt,C.needsUpdate=!0,Ra(C,z,W),C.side=Mi,C.needsUpdate=!0,Ra(C,z,W),C.side=pt):Ra(C,z,W)}this.compile=function(C,z,W=null){W===null&&(W=C),g=xe.get(W),g.init(z),M.push(g),W.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),C!==W&&C.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights();const X=new Set;return C.traverse(function(k){const ue=k.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){const be=ue[Me];gt(be,W,k),X.add(be)}else gt(ue,W,k),X.add(ue)}),M.pop(),g=null,X},this.compileAsync=function(C,z,W=null){const X=this.compile(C,z,W);return new Promise(k=>{function ue(){if(X.forEach(function(Me){Ve.get(Me).currentProgram.isReady()&&X.delete(Me)}),X.size===0){k(C);return}setTimeout(ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let St=null;function tt(C){St&&St(C)}function wn(){Ri.stop()}function Tn(){Ri.start()}const Ri=new Jh;Ri.setAnimationLoop(tt),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(C){St=C,O.setAnimationLoop(C),C===null?Ri.stop():Ri.start()},O.addEventListener("sessionstart",wn),O.addEventListener("sessionend",Tn),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(z),z=O.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,z,A),g=xe.get(C,M.length),g.init(z),M.push(g),oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(oe),K=this.localClippingEnabled,H=_e.init(this.clippingPlanes,K),_=Re.get(C,p.length),_.init(),p.push(_),O.enabled===!0&&O.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&co(ue,z,-1/0,v.sortObjects)}co(C,z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,ie),re=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,re&&le.addToRenderList(_,C),this.info.render.frame++,H===!0&&_e.beginShadows();const W=g.state.shadowsArray;He.render(W,C,z),H===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,k=_.transmissive;if(g.setupLights(),z.isArrayCamera){const ue=z.cameras;if(k.length>0)for(let Me=0,be=ue.length;Me<be;Me++){const we=ue[Me];fc(X,k,C,we)}re&&le.render(C);for(let Me=0,be=ue.length;Me<be;Me++){const we=ue[Me];dc(_,C,we,we.viewport)}}else k.length>0&&fc(X,k,C,z),re&&le.render(C),dc(_,C,z);A!==null&&(Oe.updateMultisampleRenderTarget(A),Oe.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(v,C,z),Ge.resetDefaultState(),R=-1,b=null,M.pop(),M.length>0?(g=M[M.length-1],H===!0&&_e.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function co(C,z,W,X){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||se.intersectsSprite(C)){X&&N.setFromMatrixPosition(C.matrixWorld).applyMatrix4(oe);const Me=ee.update(C),be=C.material;be.visible&&_.push(C,Me,be,W,N.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||se.intersectsObject(C))){const Me=ee.update(C),be=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),N.copy(C.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),N.copy(Me.boundingSphere.center)),N.applyMatrix4(C.matrixWorld).applyMatrix4(oe)),Array.isArray(be)){const we=Me.groups;for(let De=0,Ue=we.length;De<Ue;De++){const Le=we[De],je=be[Le.materialIndex];je&&je.visible&&_.push(C,Me,je,W,N.z,Le)}}else be.visible&&_.push(C,Me,be,W,N.z,null)}}const ue=C.children;for(let Me=0,be=ue.length;Me<be;Me++)co(ue[Me],z,W,X)}function dc(C,z,W,X){const k=C.opaque,ue=C.transmissive,Me=C.transparent;g.setupLightsView(W),H===!0&&_e.setGlobalState(v.clippingPlanes,W),X&&Pe.viewport(S.copy(X)),k.length>0&&Ca(k,z,W),ue.length>0&&Ca(ue,z,W),Me.length>0&&Ca(Me,z,W),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function fc(C,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new Xi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Hs:Si,minFilter:Hi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ue=g.state.transmissionRenderTarget[X.id],Me=X.viewport||S;ue.setSize(Me.z,Me.w);const be=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(U),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),re?le.render(W):v.clear();const we=v.toneMapping;v.toneMapping=vi;const De=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),H===!0&&_e.setGlobalState(v.clippingPlanes,X),Ca(C,W,X),Oe.updateMultisampleRenderTarget(ue),Oe.updateRenderTargetMipmap(ue),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Le=0,je=z.length;Le<je;Le++){const dt=z[Le],ft=dt.object,Qt=dt.geometry,Je=dt.material,Ae=dt.group;if(Je.side===pt&&ft.layers.test(X.layers)){const Bt=Je.side;Je.side=jt,Je.needsUpdate=!0,pc(ft,W,X,Qt,Je,Ae),Je.side=Bt,Je.needsUpdate=!0,Ue=!0}}Ue===!0&&(Oe.updateMultisampleRenderTarget(ue),Oe.updateRenderTargetMipmap(ue))}v.setRenderTarget(be),v.setClearColor(U,B),De!==void 0&&(X.viewport=De),v.toneMapping=we}function Ca(C,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ue=C.length;k<ue;k++){const Me=C[k],be=Me.object,we=Me.geometry,De=X===null?Me.material:X,Ue=Me.group;be.layers.test(W.layers)&&pc(be,z,W,we,De,Ue)}}function pc(C,z,W,X,k,ue){C.onBeforeRender(v,z,W,X,k,ue),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(v,z,W,X,C,ue),k.transparent===!0&&k.side===pt&&k.forceSinglePass===!1?(k.side=jt,k.needsUpdate=!0,v.renderBufferDirect(W,z,X,k,C,ue),k.side=Mi,k.needsUpdate=!0,v.renderBufferDirect(W,z,X,k,C,ue),k.side=pt):v.renderBufferDirect(W,z,X,k,C,ue),C.onAfterRender(v,z,W,X,k,ue)}function Ra(C,z,W){z.isScene!==!0&&(z=Q);const X=Ve.get(C),k=g.state.lights,ue=g.state.shadowsArray,Me=k.state.version,be=te.getParameters(C,k.state,ue,z,W),we=te.getProgramCacheKey(be);let De=X.programs;X.environment=C.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(C.isMeshStandardMaterial?I:ht).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,De===void 0&&(C.addEventListener("dispose",de),De=new Map,X.programs=De);let Ue=De.get(we);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===Me)return gc(C,be),Ue}else be.uniforms=te.getUniforms(C),C.onBuild(W,be,v),C.onBeforeCompile(be,v),Ue=te.acquireProgram(be,we),De.set(we,Ue),X.uniforms=be.uniforms;const Le=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=_e.uniform),gc(C,be),X.needsLights=Jd(C),X.lightsStateVersion=Me,X.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function mc(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=vs.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function gc(C,z){const W=Ve.get(C);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function jd(C,z,W,X,k){z.isScene!==!0&&(z=Q),Oe.resetTextureUnits();const ue=z.fog,Me=X.isMeshStandardMaterial?z.environment:null,be=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ei,we=(X.isMeshStandardMaterial?I:ht).get(X.envMap||Me),De=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,dt=!!W.morphAttributes.color;let ft=vi;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=v.toneMapping);const Qt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Je=Qt!==void 0?Qt.length:0,Ae=Ve.get(X),Bt=g.state.lights;if(H===!0&&(K===!0||C!==b)){const rn=C===b&&X.id===R;_e.setState(X,C,rn)}let nt=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Bt.state.version||Ae.outputColorSpace!==be||k.isBatchedMesh&&Ae.batching===!1||!k.isBatchedMesh&&Ae.batching===!0||k.isBatchedMesh&&Ae.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ae.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ae.instancing===!1||!k.isInstancedMesh&&Ae.instancing===!0||k.isSkinnedMesh&&Ae.skinning===!1||!k.isSkinnedMesh&&Ae.skinning===!0||k.isInstancedMesh&&Ae.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ae.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ae.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ae.instancingMorph===!1&&k.morphTexture!==null||Ae.envMap!==we||X.fog===!0&&Ae.fog!==ue||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==_e.numPlanes||Ae.numIntersection!==_e.numIntersection)||Ae.vertexAlphas!==De||Ae.vertexTangents!==Ue||Ae.morphTargets!==Le||Ae.morphNormals!==je||Ae.morphColors!==dt||Ae.toneMapping!==ft||Ae.morphTargetsCount!==Je)&&(nt=!0):(nt=!0,Ae.__version=X.version);let Vn=Ae.currentProgram;nt===!0&&(Vn=Ra(X,z,k));let Pa=!1,Pi=!1,uo=!1;const bt=Vn.getUniforms(),ai=Ae.uniforms;if(Pe.useProgram(Vn.program)&&(Pa=!0,Pi=!0,uo=!0),X.id!==R&&(R=X.id,Pi=!0),Pa||b!==C){bt.setValue(D,"projectionMatrix",C.projectionMatrix),bt.setValue(D,"viewMatrix",C.matrixWorldInverse);const rn=bt.map.cameraPosition;rn!==void 0&&rn.setValue(D,N.setFromMatrixPosition(C.matrixWorld)),ze.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&bt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Pi=!0,uo=!0)}if(k.isSkinnedMesh){bt.setOptional(D,k,"bindMatrix"),bt.setOptional(D,k,"bindMatrixInverse");const rn=k.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),bt.setValue(D,"boneTexture",rn.boneTexture,Oe))}k.isBatchedMesh&&(bt.setOptional(D,k,"batchingTexture"),bt.setValue(D,"batchingTexture",k._matricesTexture,Oe),bt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&bt.setValue(D,"batchingColorTexture",k._colorsTexture,Oe));const ho=W.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0)&&Te.update(k,W,Vn),(Pi||Ae.receiveShadow!==k.receiveShadow)&&(Ae.receiveShadow=k.receiveShadow,bt.setValue(D,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ai.envMap.value=we,ai.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(ai.envMapIntensity.value=z.environmentIntensity),Pi&&(bt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&Kd(ai,uo),ue&&X.fog===!0&&ne.refreshFogUniforms(ai,ue),ne.refreshMaterialUniforms(ai,X,Z,V,g.state.transmissionRenderTarget[C.id]),vs.upload(D,mc(Ae),ai,Oe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(vs.upload(D,mc(Ae),ai,Oe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&bt.setValue(D,"center",k.center),bt.setValue(D,"modelViewMatrix",k.modelViewMatrix),bt.setValue(D,"normalMatrix",k.normalMatrix),bt.setValue(D,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const rn=X.uniformsGroups;for(let fo=0,Qd=rn.length;fo<Qd;fo++){const xc=rn[fo];qe.update(xc,Vn),qe.bind(xc,Vn)}}return Vn}function Kd(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Jd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,z,W){Ve.get(C.texture).__webglTexture=z,Ve.get(C.depthTexture).__webglTexture=W;const X=Ve.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,z){const W=Ve.get(C);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,W=0){A=C,T=z,E=W;let X=!0,k=null,ue=!1,Me=!1;if(C){const we=Ve.get(C);we.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(D.FRAMEBUFFER,null),X=!1):we.__webglFramebuffer===void 0?Oe.setupRenderTarget(C):we.__hasExternalTextures&&Oe.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);const De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Me=!0);const Ue=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ue[z])?k=Ue[z][W]:k=Ue[z],ue=!0):C.samples>0&&Oe.useMultisampledRTT(C)===!1?k=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[W]:k=Ue,S.copy(C.viewport),L.copy(C.scissor),F=C.scissorTest}else S.copy(he).multiplyScalar(Z).floor(),L.copy($).multiplyScalar(Z).floor(),F=fe;if(Pe.bindFramebuffer(D.FRAMEBUFFER,k)&&X&&Pe.drawBuffers(C,k),Pe.viewport(S),Pe.scissor(L),Pe.setScissorTest(F),ue){const we=Ve.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,W)}else if(Me){const we=Ve.get(C.texture),De=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,W||0,De)}R=-1},this.readRenderTargetPixels=function(C,z,W,X,k,ue,Me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){Pe.bindFramebuffer(D.FRAMEBUFFER,be);try{const we=C.texture,De=we.format,Ue=we.type;if(!ze.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-X&&W>=0&&W<=C.height-k&&D.readPixels(z,W,X,k,ve.convert(De),ve.convert(Ue),ue)}finally{const we=A!==null?Ve.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(C,z,W,X,k,ue,Me){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){Pe.bindFramebuffer(D.FRAMEBUFFER,be);try{const we=C.texture,De=we.format,Ue=we.type;if(!ze.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=C.width-X&&W>=0&&W<=C.height-k){const Le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(z,W,X,k,ve.convert(De),ve.convert(Ue),0),D.flush();const je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await Mp(D,je,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue)}finally{D.deleteBuffer(Le),D.deleteSync(je)}return ue}}finally{const we=A!==null?Ve.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(C,z=null,W=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-W),k=Math.floor(C.image.width*X),ue=Math.floor(C.image.height*X),Me=z!==null?z.x:0,be=z!==null?z.y:0;Oe.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Me,be,k,ue),Pe.unbindTexture()},this.copyTextureToTexture=function(C,z,W=null,X=null,k=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],z=arguments[2],k=arguments[3]||0,W=null);let ue,Me,be,we,De,Ue;W!==null?(ue=W.max.x-W.min.x,Me=W.max.y-W.min.y,be=W.min.x,we=W.min.y):(ue=C.image.width,Me=C.image.height,be=0,we=0),X!==null?(De=X.x,Ue=X.y):(De=0,Ue=0);const Le=ve.convert(z.format),je=ve.convert(z.type);Oe.setTexture2D(z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const dt=D.getParameter(D.UNPACK_ROW_LENGTH),ft=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qt=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),Ae=D.getParameter(D.UNPACK_SKIP_IMAGES),Bt=C.isCompressedTexture?C.mipmaps[k]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,we),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,De,Ue,ue,Me,Le,je,Bt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,De,Ue,Bt.width,Bt.height,Le,Bt.data):D.texSubImage2D(D.TEXTURE_2D,k,De,Ue,Le,je,Bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,dt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ae),k===0&&z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(C,z,W=null,X=null,k=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,C=arguments[2],z=arguments[3],k=arguments[4]||0);let ue,Me,be,we,De,Ue,Le,je,dt;const ft=C.isCompressedTexture?C.mipmaps[k]:C.image;W!==null?(ue=W.max.x-W.min.x,Me=W.max.y-W.min.y,be=W.max.z-W.min.z,we=W.min.x,De=W.min.y,Ue=W.min.z):(ue=ft.width,Me=ft.height,be=ft.depth,we=0,De=0,Ue=0),X!==null?(Le=X.x,je=X.y,dt=X.z):(Le=0,je=0,dt=0);const Qt=ve.convert(z.format),Je=ve.convert(z.type);let Ae;if(z.isData3DTexture)Oe.setTexture3D(z,0),Ae=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Oe.setTexture2DArray(z,0),Ae=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Bt=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Vn=D.getParameter(D.UNPACK_SKIP_PIXELS),Pa=D.getParameter(D.UNPACK_SKIP_ROWS),Pi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,De),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Ae,k,Le,je,dt,ue,Me,be,Qt,Je,ft.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,k,Le,je,dt,ue,Me,be,Qt,ft.data):D.texSubImage3D(Ae,k,Le,je,dt,ue,Me,be,Qt,Je,ft),D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pa),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pi),k===0&&z.generateMipmaps&&D.generateMipmap(Ae),Pe.unbindTexture()},this.initRenderTarget=function(C){Ve.get(C).__webglFramebuffer===void 0&&Oe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Oe.setTextureCube(C,0):C.isData3DTexture?Oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Oe.setTexture2DArray(C,0):Oe.setTexture2D(C,0),Pe.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,Pe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Nl?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Ws?"display-p3":"srgb"}}class Ai extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ol("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new P;class Cs{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),a=Qe(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ad extends Bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vr;const ta=new P,yr=new P,Mr=new P,Sr=new pe,na=new pe,sd=new st,es=new P,ia=new P,ts=new P,zu=new pe,Xo=new pe,Bu=new pe;class Rx extends _t{constructor(e=new ad){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new Ke;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Cx(t,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new Cs(i,3,0,!1)),vr.setAttribute("uv",new Cs(i,2,3,!1))}this.geometry=vr,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),sd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-Mr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;ns(es.set(-.5,-.5,0),Mr,o,yr,r,a),ns(ia.set(.5,-.5,0),Mr,o,yr,r,a),ns(ts.set(.5,.5,0),Mr,o,yr,r,a),zu.set(0,0),Xo.set(1,0),Bu.set(1,1);let s=e.ray.intersectTriangle(es,ia,ts,!1,ta);if(s===null&&(ns(ia.set(-.5,.5,0),Mr,o,yr,r,a),Xo.set(0,1),s=e.ray.intersectTriangle(es,ts,ia,!1,ta),s===null))return;const l=e.ray.origin.distanceTo(ta);l<e.near||l>e.far||t.push({distance:l,point:ta.clone(),uv:on.getInterpolation(ta,es,ia,ts,zu,Xo,Bu,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ns(n,e,t,i,r,a){Sr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(na.x=a*Sr.x-r*Sr.y,na.y=r*Sr.x+a*Sr.y):na.copy(Sr),n.copy(e),n.x+=na.x,n.y+=na.y,n.applyMatrix4(sd)}class ji extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rs=new P,Ps=new P,ku=new st,ra=new qs,is=new wi,Yo=new P,Vu=new P;class xa extends _t{constructor(e=new Ke,t=new ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Rs.fromBufferAttribute(t,r-1),Ps.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Rs.distanceTo(Ps);e.setAttribute("lineDistance",new Xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(r),is.radius+=a,e.ray.intersectsSphere(is)===!1)return;ku.copy(r).invert(),ra.copy(e.ray).applyMatrix4(ku);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let _=f,g=x-1;_<g;_+=c){const p=u.getX(_),M=u.getX(_+1),v=rs(this,e,ra,l,p,M);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(x-1),g=u.getX(f),p=rs(this,e,ra,l,_,g);p&&t.push(p)}}else{const f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let _=f,g=x-1;_<g;_+=c){const p=rs(this,e,ra,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=rs(this,e,ra,l,x-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function rs(n,e,t,i,r,a){const o=n.geometry.attributes.position;if(Rs.fromBufferAttribute(o,r),Ps.fromBufferAttribute(o,a),t.distanceSqToSegment(Rs,Ps,Yo,Vu)>i)return;Yo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Yo);if(!(l<e.near||l>e.far))return{distance:l,point:Vu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Hu=new P,Gu=new P;class Vl extends xa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Hu.fromBufferAttribute(t,r),Gu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Hu.distanceTo(Gu);e.setAttribute("lineDistance",new Xe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Px extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wu=new st,gl=new qs,as=new wi,ss=new P;class Lx extends _t{constructor(e=new Ke,t=new Px){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere),as.applyMatrix4(r),as.radius+=a,e.ray.intersectsSphere(as)===!1)return;Wu.copy(r).invert(),gl.copy(e.ray).applyMatrix4(Wu);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let x=d,_=f;x<_;x++){const g=c.getX(x);ss.fromBufferAttribute(h,g),qu(ss,g,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=d,_=f;x<_;x++)ss.fromBufferAttribute(h,x),qu(ss,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function qu(n,e,t,i,r,a,o){const s=gl.distanceSqToPoint(n);if(s<t){const l=new P;gl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class Ix extends Yt{constructor(e,t,i,r,a,o,s,l,c){super(e,t,i,r,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let o;t?o=t:o=e*i[a-1];let s=0,l=a-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=i[r]-o,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(a-1);const u=i[r],d=i[r+1]-u,f=(o-u)/d;return(r+f)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),l=t||(o.isVector2?new pe:new P);return l.copy(s).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,r=[],a=[],o=[],s=new P,l=new st;for(let f=0;f<=e;f++){const x=f/e;r[f]=this.getTangentAt(x,new P)}a[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),o[f]=o[f-1].clone(),s.crossVectors(r[f-1],r[f]),s.length()>Number.EPSILON){s.normalize();const x=Math.acos(At(r[f-1].dot(r[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(s,x))}o[f].crossVectors(r[f],a[f])}if(t===!0){let f=Math.acos(At(a[0].dot(a[e]),-1,1));f/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(f=-f);for(let x=1;x<=e;x++)a[x].applyMatrix4(l.makeRotationAxis(r[x],f*x)),o[x].crossVectors(r[x],a[x])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class od extends ii{constructor(e=0,t=0,i=1,r=1,a=0,o=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=l}getPoint(e,t=new pe){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);const s=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Dx extends od{constructor(e,t,i,r,a,o){super(e,t,i,i,r,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hl(){let n=0,e=0,t=0,i=0;function r(a,o,s,l){n=a,e=s,t=-3*a+3*o-2*s-l,i=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,c){r(o,s,c*(s-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,c,u,h){let d=(o-a)/c-(s-a)/(c+u)+(s-o)/u,f=(s-o)/u-(l-o)/(u+h)+(l-s)/h;d*=u,f*=u,r(o,s,d,f)},calc:function(a){const o=a*a,s=o*a;return n+e*a+t*o+i*s}}}const os=new P,$o=new Hl,Zo=new Hl,jo=new Hl;class ld extends ii{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let s=Math.floor(o),l=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:l===0&&s===a-1&&(s=a-2,l=1);let c,u;this.closed||s>0?c=r[(s-1)%a]:(os.subVectors(r[0],r[1]).add(r[0]),c=os);const h=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(os.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=os),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),$o.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,x,_,g),Zo.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,x,_,g),jo.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,x,_,g)}else this.curveType==="catmullrom"&&($o.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Zo.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),jo.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set($o.calc(l),Zo.calc(l),jo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xu(n,e,t,i,r){const a=(i-e)*.5,o=(r-t)*.5,s=n*n,l=n*s;return(2*t-2*i+a+o)*l+(-3*t+3*i-2*a-o)*s+a*n+t}function Ux(n,e){const t=1-n;return t*t*e}function Nx(n,e){return 2*(1-n)*n*e}function Fx(n,e){return n*n*e}function ca(n,e,t,i){return Ux(n,e)+Nx(n,t)+Fx(n,i)}function Ox(n,e){const t=1-n;return t*t*t*e}function zx(n,e){const t=1-n;return 3*t*t*n*e}function Bx(n,e){return 3*(1-n)*n*n*e}function kx(n,e){return n*n*n*e}function ua(n,e,t,i,r){return Ox(n,e)+zx(n,t)+Bx(n,i)+kx(n,r)}class Vx extends ii{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(ua(e,r.x,a.x,o.x,s.x),ua(e,r.y,a.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hx extends ii{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(ua(e,r.x,a.x,o.x,s.x),ua(e,r.y,a.y,o.y,s.y),ua(e,r.z,a.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gx extends ii{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wx extends ii{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qx extends ii{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(ca(e,r.x,a.x,o.x),ca(e,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends ii{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(ca(e,r.x,a.x,o.x),ca(e,r.y,a.y,o.y),ca(e,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xx extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,r=this.points,a=(r.length-1)*e,o=Math.floor(a),s=a-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Xu(s,l.x,c.x,u.x,h.x),Xu(s,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var Yx=Object.freeze({__proto__:null,ArcCurve:Dx,CatmullRomCurve3:ld,CubicBezierCurve:Vx,CubicBezierCurve3:Hx,EllipseCurve:od,LineCurve:Gx,LineCurve3:Wx,QuadraticBezierCurve:qx,QuadraticBezierCurve3:cd,SplineCurve:Xx});class Xr extends Ke{constructor(e=1,t=1,i=1,r=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],h=[],d=[],f=[];let x=0;const _=[],g=i/2;let p=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function M(){const y=new P,T=new P;let E=0;const A=(t-e)/i;for(let R=0;R<=a;R++){const b=[],S=R/a,L=S*(t-e)+e;for(let F=0;F<=r;F++){const U=F/r,B=U*l+s,G=Math.sin(B),V=Math.cos(B);T.x=L*G,T.y=-S*i+g,T.z=L*V,h.push(T.x,T.y,T.z),y.set(G,A,V).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-S),b.push(x++)}_.push(b)}for(let R=0;R<r;R++)for(let b=0;b<a;b++){const S=_[b][R],L=_[b+1][R],F=_[b+1][R+1],U=_[b][R+1];u.push(S,L,U),u.push(L,F,U),E+=6}c.addGroup(p,E,0),p+=E}function v(y){const T=x,E=new pe,A=new P;let R=0;const b=y===!0?e:t,S=y===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),x++;const L=x;for(let F=0;F<=r;F++){const B=F/r*l+s,G=Math.cos(B),V=Math.sin(B);A.x=b*V,A.y=g*S,A.z=b*G,h.push(A.x,A.y,A.z),d.push(0,S,0),E.x=G*.5+.5,E.y=V*.5*S+.5,f.push(E.x,E.y),x++}for(let F=0;F<r;F++){const U=T+F,B=L+F;y===!0?u.push(B,B+1,U):u.push(B+1,B,U),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends Xr{constructor(e=1,t=1,i=32,r=1,a=!1,o=0,s=Math.PI*2){super(0,e,t,i,r,a,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(e){return new Gl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ls=new P,cs=new P,Ko=new P,us=new on;class $x extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(Cr*t),o=e.getIndex(),s=e.getAttribute("position"),l=o?o.count:s.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:_,b:g,c:p}=us;if(_.fromBufferAttribute(s,c[0]),g.fromBufferAttribute(s,c[1]),p.fromBufferAttribute(s,c[2]),us.getNormal(Ko),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const v=(M+1)%3,y=h[M],T=h[v],E=us[u[M]],A=us[u[v]],R=`${y}_${T}`,b=`${T}_${y}`;b in d&&d[b]?(Ko.dot(d[b].normal)<=a&&(f.push(E.x,E.y,E.z),f.push(A.x,A.y,A.z)),d[b]=null):R in d||(d[R]={index0:c[M],index1:c[v],normal:Ko.clone()})}}for(const x in d)if(d[x]){const{index0:_,index1:g}=d[x];ls.fromBufferAttribute(s,_),cs.fromBufferAttribute(s,g),f.push(ls.x,ls.y,ls.z),f.push(cs.x,cs.y,cs.z)}this.setAttribute("position",new Xe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}const Zx={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let a=ud(n,0,r,t,!0);const o=[];if(!a||a.next===a.prev)return o;let s,l,c,u,h,d,f;if(i&&(a=e_(n,e,a,t)),n.length>80*t){s=c=n[0],l=u=n[1];for(let x=t;x<r;x+=t)h=n[x],d=n[x+1],h<s&&(s=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-s,u-l),f=f!==0?32767/f:0}return _a(a,o,t,s,l,f,0),o}};function ud(n,e,t,i,r){let a,o;if(r===h_(n,e,t,i)>0)for(a=e;a<t;a+=i)o=Yu(a,n[a],n[a+1],o);else for(a=t-i;a>=e;a-=i)o=Yu(a,n[a],n[a+1],o);return o&&$s(o,o.next)&&(ya(o),o=o.next),o}function Yi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&($s(t,t.next)||ut(t.prev,t,t.next)===0)){if(ya(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function _a(n,e,t,i,r,a,o){if(!n)return;!o&&a&&a_(n,i,r,a);let s=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,a?Kx(n,i,r,a):jx(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),ya(n),n=c.next,s=c.next;continue}if(n=c,n===s){o?o===1?(n=Jx(Yi(n),e,t),_a(n,e,t,i,r,a,2)):o===2&&Qx(n,e,t,i,r,a):_a(Yi(n),e,t,i,r,a,1);break}}}function jx(n){const e=n.prev,t=n,i=n.next;if(ut(e,t,i)>=0)return!1;const r=e.x,a=t.x,o=i.x,s=e.y,l=t.y,c=i.y,u=r<a?r<o?r:o:a<o?a:o,h=s<l?s<c?s:c:l<c?l:c,d=r>a?r>o?r:o:a>o?a:o,f=s>l?s>c?s:c:l>c?l:c;let x=i.next;for(;x!==e;){if(x.x>=u&&x.x<=d&&x.y>=h&&x.y<=f&&wr(r,s,a,l,o,c,x.x,x.y)&&ut(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Kx(n,e,t,i){const r=n.prev,a=n,o=n.next;if(ut(r,a,o)>=0)return!1;const s=r.x,l=a.x,c=o.x,u=r.y,h=a.y,d=o.y,f=s<l?s<c?s:c:l<c?l:c,x=u<h?u<d?u:d:h<d?h:d,_=s>l?s>c?s:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,p=xl(f,x,e,t,i),M=xl(_,g,e,t,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=p&&y&&y.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=x&&v.y<=g&&v!==r&&v!==o&&wr(s,u,l,h,c,d,v.x,v.y)&&ut(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=x&&y.y<=g&&y!==r&&y!==o&&wr(s,u,l,h,c,d,y.x,y.y)&&ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=x&&v.y<=g&&v!==r&&v!==o&&wr(s,u,l,h,c,d,v.x,v.y)&&ut(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=x&&y.y<=g&&y!==r&&y!==o&&wr(s,u,l,h,c,d,y.x,y.y)&&ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Jx(n,e,t){let i=n;do{const r=i.prev,a=i.next.next;!$s(r,a)&&hd(r,i,i.next,a)&&va(r,a)&&va(a,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),ya(i),ya(i.next),i=n=a),i=i.next}while(i!==n);return Yi(i)}function Qx(n,e,t,i,r,a){let o=n;do{let s=o.next.next;for(;s!==o.prev;){if(o.i!==s.i&&l_(o,s)){let l=dd(o,s);o=Yi(o,o.next),l=Yi(l,l.next),_a(o,e,t,i,r,a,0),_a(l,e,t,i,r,a,0);return}s=s.next}o=o.next}while(o!==n)}function e_(n,e,t,i){const r=[];let a,o,s,l,c;for(a=0,o=e.length;a<o;a++)s=e[a]*i,l=a<o-1?e[a+1]*i:n.length,c=ud(n,s,l,i,!1),c===c.next&&(c.steiner=!0),r.push(o_(c));for(r.sort(t_),a=0;a<r.length;a++)t=n_(r[a],t);return t}function t_(n,e){return n.x-e.x}function n_(n,e){const t=i_(n,e);if(!t)return e;const i=dd(t,n);return Yi(i,i.next),Yi(t,t.next)}function i_(n,e){let t=e,i=-1/0,r;const a=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=a&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===a))return r}t=t.next}while(t!==e);if(!r)return null;const s=r,l=r.x,c=r.y;let u=1/0,h;t=r;do a>=t.x&&t.x>=l&&a!==t.x&&wr(o<c?a:i,o,l,c,o<c?i:a,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(a-t.x),va(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&r_(r,t)))&&(r=t,u=h)),t=t.next;while(t!==s);return r}function r_(n,e){return ut(n.prev,n,e.prev)<0&&ut(e.next,n,n.next)<0}function a_(n,e,t,i){let r=n;do r.z===0&&(r.z=xl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,s_(r)}function s_(n){let e,t,i,r,a,o,s,l,c=1;do{for(t=n,n=null,a=null,o=0;t;){for(o++,i=t,s=0,e=0;e<c&&(s++,i=i.nextZ,!!i);e++);for(l=c;s>0||l>0&&i;)s!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,s--):(r=i,i=i.nextZ,l--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;t=i}a.nextZ=null,c*=2}while(o>1);return n}function xl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function o_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wr(n,e,t,i,r,a,o,s){return(r-o)*(e-s)>=(n-o)*(a-s)&&(n-o)*(i-s)>=(t-o)*(e-s)&&(t-o)*(a-s)>=(r-o)*(i-s)}function l_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!c_(n,e)&&(va(n,e)&&va(e,n)&&u_(n,e)&&(ut(n.prev,n,e.prev)||ut(n,e.prev,e))||$s(n,e)&&ut(n.prev,n,n.next)>0&&ut(e.prev,e,e.next)>0)}function ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function $s(n,e){return n.x===e.x&&n.y===e.y}function hd(n,e,t,i){const r=ds(ut(n,e,t)),a=ds(ut(n,e,i)),o=ds(ut(t,i,n)),s=ds(ut(t,i,e));return!!(r!==a&&o!==s||r===0&&hs(n,t,e)||a===0&&hs(n,i,e)||o===0&&hs(t,n,i)||s===0&&hs(t,e,i))}function hs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ds(n){return n>0?1:n<0?-1:0}function c_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&hd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function va(n,e){return ut(n.prev,n,n.next)<0?ut(n,e,n.next)>=0&&ut(n,n.prev,e)>=0:ut(n,e,n.prev)<0||ut(n,n.next,e)<0}function u_(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function dd(n,e){const t=new _l(n.i,n.x,n.y),i=new _l(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Yu(n,e,t,i){const r=new _l(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ya(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _l(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function h_(n,e,t,i){let r=0;for(let a=e,o=t-i;a<t;a+=i)r+=(n[o]-n[a])*(n[a+1]+n[o+1]),o=a;return r}class Wl{static area(e){const t=e.length;let i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return Wl.area(e)<0}static triangulateShape(e,t){const i=[],r=[],a=[];$u(e),Zu(i,e);let o=e.length;t.forEach($u);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Zu(i,t[l]);const s=Zx.triangulate(i,r);for(let l=0;l<s.length;l+=3)a.push(s.slice(l,l+3));return a}}function $u(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Zs extends Ke{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],x=[],_=[],g=[];for(let p=0;p<=i;p++){const M=[],v=p/i;let y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const E=T/t;h.x=-e*Math.cos(r+E*a)*Math.sin(o+v*s),h.y=e*Math.cos(o+v*s),h.z=e*Math.sin(r+E*a)*Math.sin(o+v*s),x.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(E+y,1-v),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const v=u[p][M+1],y=u[p][M],T=u[p+1][M],E=u[p+1][M+1];(p!==0||o>0)&&f.push(v,y,E),(p!==i-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Xe(x,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ql extends Ke{constructor(e=new cd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};const o=e.computeFrenetFrames(t,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const s=new P,l=new P,c=new pe;let u=new P;const h=[],d=[],f=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function _(){for(let v=0;v<t;v++)g(v);g(a===!1?t:0),M(),p()}function g(v){u=e.getPointAt(v/t,u);const y=o.normals[v],T=o.binormals[v];for(let E=0;E<=r;E++){const A=E/r*Math.PI*2,R=Math.sin(A),b=-Math.cos(A);l.x=b*y.x+R*T.x,l.y=b*y.y+R*T.y,l.z=b*y.z+R*T.z,l.normalize(),d.push(l.x,l.y,l.z),s.x=u.x+i*l.x,s.y=u.y+i*l.y,s.z=u.z+i*l.z,h.push(s.x,s.y,s.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=r;y++){const T=(r+1)*(v-1)+(y-1),E=(r+1)*v+(y-1),A=(r+1)*v+y,R=(r+1)*(v-1)+y;x.push(T,E,R),x.push(E,A,R)}}function M(){for(let v=0;v<=t;v++)for(let y=0;y<=r;y++)c.x=v/t,c.y=y/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ql(new Yx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class d_ extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fd extends d_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gi extends Bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Se(16777215),this.specular=new Se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pd extends Bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class md extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Jo=new st,ju=new P,Ku=new P;class f_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bl,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(ju),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class p_ extends f_{constructor(){super(new En(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dn extends md{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new p_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ci extends md{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ju=new st;class m_{constructor(e,t,i=0,r=1/0){this.ray=new qs(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ju),this}intersectObject(e,t=!0,i=[]){return vl(e,this,i,t),i.sort(Qu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)vl(e[r],this,i,t);return i.sort(Qu),i}}function Qu(n,e){return n.distance-e.distance}function vl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let o=0,s=a.length;o<s;o++)vl(a[o],e,t,!0)}}const eh=new P;let fs,Qo;class g_ extends _t{constructor(e=new P(0,0,1),t=new P(0,0,0),i=1,r=16776960,a=i*.2,o=a*.2){super(),this.type="ArrowHelper",fs===void 0&&(fs=new Ke,fs.setAttribute("position",new Xe([0,0,0,0,1,0],3)),Qo=new Xr(0,.5,1,5,1),Qo.translate(0,-.5,0)),this.position.copy(t),this.line=new xa(fs,new ji({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new rt(Qo,new Ti({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{eh.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(eh,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);const el={type:"change"},tl={type:"start"},nl={type:"end"};class x_ extends Zi{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:po.ROTATE,MIDDLE:po.DOLLY,RIGHT:po.PAN},this.target=new P;const a=1e-6,o=new P;let s=1,l=r.NONE,c=r.NONE,u=0,h=0,d=0;const f=new P,x=new pe,_=new pe,g=new P,p=new pe,M=new pe,v=new pe,y=new pe,T=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const N=i.domElement.getBoundingClientRect(),Q=i.domElement.ownerDocument.documentElement;i.screen.left=N.left+window.pageXOffset-Q.clientLeft,i.screen.top=N.top+window.pageYOffset-Q.clientTop,i.screen.width=N.width,i.screen.height=N.height};const A=function(){const N=new pe;return function(re,ge){return N.set((re-i.screen.left)/i.screen.width,(ge-i.screen.top)/i.screen.height),N}}(),R=function(){const N=new pe;return function(re,ge){return N.set((re-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-ge))/i.screen.width),N}}();this.rotateCamera=function(){const N=new P,Q=new Gr,re=new P,ge=new P,D=new P,ae=new P;return function(){ae.set(_.x-x.x,_.y-x.y,0);let ze=ae.length();ze?(f.copy(i.object.position).sub(i.target),re.copy(f).normalize(),ge.copy(i.object.up).normalize(),D.crossVectors(ge,re).normalize(),ge.setLength(_.y-x.y),D.setLength(_.x-x.x),ae.copy(ge.add(D)),N.crossVectors(ae,f).normalize(),ze*=i.rotateSpeed,Q.setFromAxisAngle(N,ze),f.applyQuaternion(Q),i.object.up.applyQuaternion(Q),g.copy(N),d=ze):!i.staticMoving&&d&&(d*=Math.sqrt(1-i.dynamicDampingFactor),f.copy(i.object.position).sub(i.target),Q.setFromAxisAngle(g,d),f.applyQuaternion(Q),i.object.up.applyQuaternion(Q)),x.copy(_)}}(),this.zoomCamera=function(){let N;l===r.TOUCH_ZOOM_PAN?(N=u/h,u=h,i.object.isPerspectiveCamera?f.multiplyScalar(N):i.object.isOrthographicCamera?(i.object.zoom=jc.clamp(i.object.zoom/N,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(N=1+(M.y-p.y)*i.zoomSpeed,N!==1&&N>0&&(i.object.isPerspectiveCamera?f.multiplyScalar(N):i.object.isOrthographicCamera?(i.object.zoom=jc.clamp(i.object.zoom/N,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?p.copy(M):p.y+=(M.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const N=new pe,Q=new P,re=new P;return function(){if(N.copy(y).sub(v),N.lengthSq()){if(i.object.isOrthographicCamera){const D=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,ae=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;N.x*=D,N.y*=ae}N.multiplyScalar(f.length()*i.panSpeed),re.copy(f).cross(i.object.up).setLength(N.x),re.add(Q.copy(i.object.up).setLength(N.y)),i.object.position.add(re),i.target.add(re),i.staticMoving?v.copy(y):v.add(N.subVectors(y,v).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(f.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,f.setLength(i.maxDistance)),p.copy(M)),f.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,f.setLength(i.minDistance)),p.copy(M)))},this.update=function(){f.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,f),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>a&&(i.dispatchEvent(el),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>a||s!==i.object.zoom)&&(i.dispatchEvent(el),o.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),f.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(el),o.copy(i.object.position),s=i.object.zoom};function b(N){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",L)),se(N),N.pointerType==="touch"?ie(N):G(N))}function S(N){i.enabled!==!1&&(N.pointerType==="touch"?he(N):V(N))}function L(N){i.enabled!==!1&&(N.pointerType==="touch"?$(N):Z(),H(N),T.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",L)))}function F(N){H(N)}function U(N){i.enabled!==!1&&(window.removeEventListener("keydown",U),c===r.NONE&&(N.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:N.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:N.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function B(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",U))}function G(N){if(l===r.NONE)switch(N.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(_.copy(R(N.pageX,N.pageY)),x.copy(_)):Q===r.ZOOM&&!i.noZoom?(p.copy(A(N.pageX,N.pageY)),M.copy(p)):Q===r.PAN&&!i.noPan&&(v.copy(A(N.pageX,N.pageY)),y.copy(v)),i.dispatchEvent(tl)}function V(N){const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(x.copy(_),_.copy(R(N.pageX,N.pageY))):Q===r.ZOOM&&!i.noZoom?M.copy(A(N.pageX,N.pageY)):Q===r.PAN&&!i.noPan&&y.copy(A(N.pageX,N.pageY))}function Z(){l=r.NONE,i.dispatchEvent(nl)}function q(N){if(i.enabled!==!1&&i.noZoom!==!0){switch(N.preventDefault(),N.deltaMode){case 2:p.y-=N.deltaY*.025;break;case 1:p.y-=N.deltaY*.01;break;default:p.y-=N.deltaY*25e-5;break}i.dispatchEvent(tl),i.dispatchEvent(nl)}}function ie(N){switch(K(N),T.length){case 1:l=r.TOUCH_ROTATE,_.copy(R(T[0].pageX,T[0].pageY)),x.copy(_);break;default:l=r.TOUCH_ZOOM_PAN;const Q=T[0].pageX-T[1].pageX,re=T[0].pageY-T[1].pageY;h=u=Math.sqrt(Q*Q+re*re);const ge=(T[0].pageX+T[1].pageX)/2,D=(T[0].pageY+T[1].pageY)/2;v.copy(A(ge,D)),y.copy(v);break}i.dispatchEvent(tl)}function he(N){switch(K(N),T.length){case 1:x.copy(_),_.copy(R(N.pageX,N.pageY));break;default:const Q=oe(N),re=N.pageX-Q.x,ge=N.pageY-Q.y;h=Math.sqrt(re*re+ge*ge);const D=(N.pageX+Q.x)/2,ae=(N.pageY+Q.y)/2;y.copy(A(D,ae));break}}function $(N){switch(T.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,_.copy(R(N.pageX,N.pageY)),x.copy(_);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let Q=0;Q<T.length;Q++)if(T[Q].pointerId!==N.pointerId){const re=E[T[Q].pointerId];_.copy(R(re.x,re.y)),x.copy(_);break}break}i.dispatchEvent(nl)}function fe(N){i.enabled!==!1&&N.preventDefault()}function se(N){T.push(N)}function H(N){delete E[N.pointerId];for(let Q=0;Q<T.length;Q++)if(T[Q].pointerId==N.pointerId){T.splice(Q,1);return}}function K(N){let Q=E[N.pointerId];Q===void 0&&(Q=new pe,E[N.pointerId]=Q),Q.set(N.pageX,N.pageY)}function oe(N){const Q=N.pointerId===T[0].pointerId?T[1]:T[0];return E[Q.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",fe),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",F),i.domElement.removeEventListener("wheel",q),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",L),window.removeEventListener("keydown",U),window.removeEventListener("keyup",B)},this.domElement.addEventListener("contextmenu",fe),this.domElement.addEventListener("pointerdown",b),this.domElement.addEventListener("pointercancel",F),this.domElement.addEventListener("wheel",q,{passive:!1}),window.addEventListener("keydown",U),window.addEventListener("keyup",B),this.handleResize(),this.update()}}class gd extends rt{constructor(e,t,i=!1,r=!1,a=1e4){const o=new Ke;super(o,t),this.isMarchingCubes=!0;const s=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(M){this.resolution=M,this.isolation=80,this.size=M,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const v=a*3;this.positionArray=new Float32Array(v*3);const y=new Ot(this.positionArray,3);y.setUsage(Ia),o.setAttribute("position",y),this.normalArray=new Float32Array(v*3);const T=new Ot(this.normalArray,3);if(T.setUsage(Ia),o.setAttribute("normal",T),this.enableUvs){this.uvArray=new Float32Array(v*2);const E=new Ot(this.uvArray,2);E.setUsage(Ia),o.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(v*3);const E=new Ot(this.colorArray,3);E.setUsage(Ia),o.setAttribute("color",E)}o.boundingSphere=new wi(new P,1)};function h(M,v,y){return M+(v-M)*y}function d(M,v,y,T,E,A,R,b,S,L){const F=(y-R)/(b-R),U=s.normal_cache;l[v+0]=T+F*s.delta,l[v+1]=E,l[v+2]=A,c[v+0]=h(U[M+0],U[M+3],F),c[v+1]=h(U[M+1],U[M+4],F),c[v+2]=h(U[M+2],U[M+5],F),u[v+0]=h(s.palette[S*3+0],s.palette[L*3+0],F),u[v+1]=h(s.palette[S*3+1],s.palette[L*3+1],F),u[v+2]=h(s.palette[S*3+2],s.palette[L*3+2],F)}function f(M,v,y,T,E,A,R,b,S,L){const F=(y-R)/(b-R),U=s.normal_cache;l[v+0]=T,l[v+1]=E+F*s.delta,l[v+2]=A;const B=M+s.yd*3;c[v+0]=h(U[M+0],U[B+0],F),c[v+1]=h(U[M+1],U[B+1],F),c[v+2]=h(U[M+2],U[B+2],F),u[v+0]=h(s.palette[S*3+0],s.palette[L*3+0],F),u[v+1]=h(s.palette[S*3+1],s.palette[L*3+1],F),u[v+2]=h(s.palette[S*3+2],s.palette[L*3+2],F)}function x(M,v,y,T,E,A,R,b,S,L){const F=(y-R)/(b-R),U=s.normal_cache;l[v+0]=T,l[v+1]=E,l[v+2]=A+F*s.delta;const B=M+s.zd*3;c[v+0]=h(U[M+0],U[B+0],F),c[v+1]=h(U[M+1],U[B+1],F),c[v+2]=h(U[M+2],U[B+2],F),u[v+0]=h(s.palette[S*3+0],s.palette[L*3+0],F),u[v+1]=h(s.palette[S*3+1],s.palette[L*3+1],F),u[v+2]=h(s.palette[S*3+2],s.palette[L*3+2],F)}function _(M){const v=M*3;s.normal_cache[v]===0&&(s.normal_cache[v+0]=s.field[M-1]-s.field[M+1],s.normal_cache[v+1]=s.field[M-s.yd]-s.field[M+s.yd],s.normal_cache[v+2]=s.field[M-s.zd]-s.field[M+s.zd])}function g(M,v,y,T,E){const A=T+1,R=T+s.yd,b=T+s.zd,S=A+s.yd,L=A+s.zd,F=T+s.yd+s.zd,U=A+s.yd+s.zd;let B=0;const G=s.field[T],V=s.field[A],Z=s.field[R],q=s.field[S],ie=s.field[b],he=s.field[L],$=s.field[F],fe=s.field[U];G<E&&(B|=1),V<E&&(B|=2),Z<E&&(B|=8),q<E&&(B|=4),ie<E&&(B|=16),he<E&&(B|=32),$<E&&(B|=128),fe<E&&(B|=64);const se=__[B];if(se===0)return 0;const H=s.delta,K=M+H,oe=v+H,N=y+H;se&1&&(_(T),_(A),d(T*3,0,E,M,v,y,G,V,T,A)),se&2&&(_(A),_(S),f(A*3,3,E,K,v,y,V,q,A,S)),se&4&&(_(R),_(S),d(R*3,6,E,M,oe,y,Z,q,R,S)),se&8&&(_(T),_(R),f(T*3,9,E,M,v,y,G,Z,T,R)),se&16&&(_(b),_(L),d(b*3,12,E,M,v,N,ie,he,b,L)),se&32&&(_(L),_(U),f(L*3,15,E,K,v,N,he,fe,L,U)),se&64&&(_(F),_(U),d(F*3,18,E,M,oe,N,$,fe,F,U)),se&128&&(_(b),_(F),f(b*3,21,E,M,v,N,ie,$,b,F)),se&256&&(_(T),_(b),x(T*3,24,E,M,v,y,G,ie,T,b)),se&512&&(_(A),_(L),x(A*3,27,E,K,v,y,V,he,A,L)),se&1024&&(_(S),_(U),x(S*3,30,E,K,oe,y,q,fe,S,U)),se&2048&&(_(R),_(F),x(R*3,33,E,M,oe,y,Z,$,R,F)),B<<=4;let Q,re,ge,D=0,ae=0;for(;ps[B+ae]!=-1;)Q=B+ae,re=Q+1,ge=Q+2,p(l,c,u,3*ps[Q],3*ps[re],3*ps[ge]),ae+=3,D++;return D}function p(M,v,y,T,E,A){const R=s.count*3;if(s.positionArray[R+0]=M[T],s.positionArray[R+1]=M[T+1],s.positionArray[R+2]=M[T+2],s.positionArray[R+3]=M[E],s.positionArray[R+4]=M[E+1],s.positionArray[R+5]=M[E+2],s.positionArray[R+6]=M[A],s.positionArray[R+7]=M[A+1],s.positionArray[R+8]=M[A+2],s.material.flatShading===!0){const b=(v[T+0]+v[E+0]+v[A+0])/3,S=(v[T+1]+v[E+1]+v[A+1])/3,L=(v[T+2]+v[E+2]+v[A+2])/3;s.normalArray[R+0]=b,s.normalArray[R+1]=S,s.normalArray[R+2]=L,s.normalArray[R+3]=b,s.normalArray[R+4]=S,s.normalArray[R+5]=L,s.normalArray[R+6]=b,s.normalArray[R+7]=S,s.normalArray[R+8]=L}else s.normalArray[R+0]=v[T+0],s.normalArray[R+1]=v[T+1],s.normalArray[R+2]=v[T+2],s.normalArray[R+3]=v[E+0],s.normalArray[R+4]=v[E+1],s.normalArray[R+5]=v[E+2],s.normalArray[R+6]=v[A+0],s.normalArray[R+7]=v[A+1],s.normalArray[R+8]=v[A+2];if(s.enableUvs){const b=s.count*2;s.uvArray[b+0]=M[T+0],s.uvArray[b+1]=M[T+2],s.uvArray[b+2]=M[E+0],s.uvArray[b+3]=M[E+2],s.uvArray[b+4]=M[A+0],s.uvArray[b+5]=M[A+2]}s.enableColors&&(s.colorArray[R+0]=y[T+0],s.colorArray[R+1]=y[T+1],s.colorArray[R+2]=y[T+2],s.colorArray[R+3]=y[E+0],s.colorArray[R+4]=y[E+1],s.colorArray[R+5]=y[E+2],s.colorArray[R+6]=y[A+0],s.colorArray[R+7]=y[A+1],s.colorArray[R+8]=y[A+2]),s.count+=3}this.addBall=function(M,v,y,T,E,A){const R=Math.sign(T);T=Math.abs(T);const b=A!=null;let S=new Se(M,v,y);if(b)try{S=A instanceof Se?A:Array.isArray(A)?new Se(Math.min(Math.abs(A[0]),1),Math.min(Math.abs(A[1]),1),Math.min(Math.abs(A[2]),1)):new Se(A)}catch{S=new Se(M,v,y)}const L=this.size*Math.sqrt(T/E),F=y*this.size,U=v*this.size,B=M*this.size;let G=Math.floor(F-L);G<1&&(G=1);let V=Math.floor(F+L);V>this.size-1&&(V=this.size-1);let Z=Math.floor(U-L);Z<1&&(Z=1);let q=Math.floor(U+L);q>this.size-1&&(q=this.size-1);let ie=Math.floor(B-L);ie<1&&(ie=1);let he=Math.floor(B+L);he>this.size-1&&(he=this.size-1);let $,fe,se,H,K,oe,N,Q,re,ge,D;for(se=G;se<V;se++)for(K=this.size2*se,Q=se/this.size-y,re=Q*Q,fe=Z;fe<q;fe++)for(H=K+this.size*fe,N=fe/this.size-v,ge=N*N,$=ie;$<he;$++)if(oe=$/this.size-M,D=T/(1e-6+oe*oe+ge+re)-E,D>0){this.field[H+$]+=D*R;const ae=Math.sqrt(($-B)*($-B)+(fe-U)*(fe-U)+(se-F)*(se-F))/L,Ee=1-ae*ae*ae*(ae*(ae*6-15)+10);this.palette[(H+$)*3+0]+=S.r*Ee,this.palette[(H+$)*3+1]+=S.g*Ee,this.palette[(H+$)*3+2]+=S.b*Ee}},this.addPlaneX=function(M,v){const y=this.size,T=this.yd,E=this.zd,A=this.field;let R,b,S,L,F,U,B,G=y*Math.sqrt(M/v);for(G>y&&(G=y),R=0;R<G;R++)if(U=R/y,L=U*U,F=M/(1e-4+L)-v,F>0)for(b=0;b<y;b++)for(B=R+b*T,S=0;S<y;S++)A[E*S+B]+=F},this.addPlaneY=function(M,v){const y=this.size,T=this.yd,E=this.zd,A=this.field;let R,b,S,L,F,U,B,G,V=y*Math.sqrt(M/v);for(V>y&&(V=y),b=0;b<V;b++)if(U=b/y,L=U*U,F=M/(1e-4+L)-v,F>0)for(B=b*T,R=0;R<y;R++)for(G=B+R,S=0;S<y;S++)A[E*S+G]+=F},this.addPlaneZ=function(M,v){const y=this.size,T=this.yd,E=this.zd,A=this.field;let R,b,S,L,F,U,B,G,V=y*Math.sqrt(M/v);for(V>y&&(V=y),S=0;S<V;S++)if(U=S/y,L=U*U,F=M/(1e-4+L)-v,F>0)for(B=E*S,b=0;b<y;b++)for(G=B+b*T,R=0;R<y;R++)A[G+R]+=F},this.setCell=function(M,v,y,T){const E=this.size2*y+this.size*v+M;this.field[E]=T},this.getCell=function(M,v,y){const T=this.size2*y+this.size*v+M;return this.field[T]},this.blur=function(M=1){const v=this.field,y=v.slice(),T=this.size,E=this.size2;for(let A=0;A<T;A++)for(let R=0;R<T;R++)for(let b=0;b<T;b++){const S=E*b+T*R+A;let L=y[S],F=1;for(let U=-1;U<=1;U+=2){const B=U+A;if(!(B<0||B>=T))for(let G=-1;G<=1;G+=2){const V=G+R;if(!(V<0||V>=T))for(let Z=-1;Z<=1;Z+=2){const q=Z+b;if(q<0||q>=T)continue;const ie=E*q+T*V+B,he=y[ie];F++,L+=M*(he-L)/F}}}v[S]=L}},this.reset=function(){for(let M=0;M<this.size3;M++)this.normal_cache[M*3]=0,this.field[M]=0,this.palette[M*3]=this.palette[M*3+1]=this.palette[M*3+2]=0},this.update=function(){this.count=0;const M=this.size-2;for(let v=1;v<M;v++){const y=this.size2*v,T=(v-this.halfsize)/this.halfsize;for(let E=1;E<M;E++){const A=y+this.size*E,R=(E-this.halfsize)/this.halfsize;for(let b=1;b<M;b++){const S=(b-this.halfsize)/this.halfsize,L=A+b;g(S,R,T,L,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>a&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const __=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),ps=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),ms=[1];function xi(n){if(n<0)return NaN;for(let e=ms.length;e<=n;e+=1)ms[e]=ms[e-1]*e;return ms[n]}function xd(n,e,t){const i=Math.max(1,Math.min(6,Math.round(n))),r=Math.max(0,Math.min(i-1,Math.round(e))),a=Math.max(-r,Math.min(r,Math.round(t)));return{n:i,l:r,m:a}}function kn(n,e,t){if(e===0)return`${n}s`;if(e===1)return`${n}${t===0?"Pz":t>0?"Px":"Py"}`;if(e===2){if(t===0)return`${n}Dz2`;if(t===1)return`${n}Dxz`;if(t===-1)return`${n}Dyz`;if(t===2)return`${n}Dx2-y2`;if(t===-2)return`${n}Dxy`}if(e===3){if(t===0)return`${n}Fz3`;if(t===1)return`${n}Fxz2`;if(t===-1)return`${n}Fyz2`;if(t===2)return`${n}Fz(x2-y2)`;if(t===-2)return`${n}Fxyz`;if(t===3)return`${n}Fx(x2-3y2)`;if(t===-3)return`${n}Fy(3x2-y2)`}if(e===4){if(t===0)return`${n}Gz4`;if(t===1)return`${n}Gxz3`;if(t===-1)return`${n}Gyz3`;if(t===2)return`${n}Gz2(x2-y2)`;if(t===-2)return`${n}Gxyz2`;if(t===3)return`${n}Gxz(x2-3y2)`;if(t===-3)return`${n}Gyz(3x2-y2)`;if(t===4)return`${n}Gx4-6x2y2+y4`;if(t===-4)return`${n}Gxy(x2-y2)`}if(e===5){if(t===0)return`${n}Hz5`;if(t===1)return`${n}Hxz4`;if(t===-1)return`${n}Hyz4`;if(t===2)return`${n}Hz3(x2-y2)`;if(t===-2)return`${n}Hxyz3`;if(t===3)return`${n}Hz(x4-6x2y2+y4)`;if(t===-3)return`${n}Hxyz(x2-y2)`;if(t===4)return`${n}Hxz(x2-y2)`;if(t===-4)return`${n}Hyz(x2-y2)`;if(t===5)return`${n}Hx(x4-10x2y2+5y4)`;if(t===-5)return`${n}Hy(5x4-10x2y2+y4)`}return`${n}${["s","P","D","F","G","H"][e]??`L${e}`}${t}`}function v_(n,e,t){let i=0;for(let r=0;r<=n;r+=1){const a=(r%2===0?1:-1)*xi(n+e)/(xi(n-r)*xi(e+r)*xi(r));i+=a*t**r}return i}function y_(n,e,t){const i=Math.abs(e);let r=1;if(i>0){const s=Math.sqrt(Math.max(0,1-t*t));let l=1;for(let c=1;c<=i;c+=1)r*=-l*s,l+=2}if(n===i)return r;let a=t*(2*i+1)*r;if(n===i+1)return a;let o=0;for(let s=i+2;s<=n;s+=1)o=((2*s-1)*t*a-(s+i-1)*r)/(s-i),r=a,a=o;return o}function yl(n,e,t,i){const r=Math.sin(t),a=Math.cos(t),o=Math.cos(i),s=Math.sin(i);if(n===1){const h=Math.sqrt(3/(4*Math.PI));return e===0?h*a:e>0?h*r*o:h*r*s}if(n===2){if(e===0)return Math.sqrt(5/Math.PI)/4*(3*a*a-1);if(e===1)return Math.sqrt(15/Math.PI)/2*r*a*o;if(e===-1)return Math.sqrt(15/Math.PI)/2*r*a*s;if(e===2)return Math.sqrt(15/Math.PI)/4*r*r*Math.cos(2*i);if(e===-2)return Math.sqrt(15/Math.PI)/4*r*r*Math.sin(2*i)}const l=Math.abs(e),c=Math.sqrt((2*n+1)/(4*Math.PI)*(xi(n-l)/xi(n+l))),u=y_(n,l,Math.cos(t));return e>0?Math.sqrt(2)*c*u*Math.cos(l*i):e<0?Math.sqrt(2)*c*u*Math.sin(l*i):c*u}function M_(n,e,t){const i=Math.abs(e);let r=1;for(let c=2;c<=2*i;c+=2)r*=(1-t*t)*((c+1)/c);let a=Math.sqrt(Math.max(0,r/2));if(n===i)return a;let o=Math.sqrt(2*i+3)*t*a;if(n===i+1)return o;let s=0,l=Math.sqrt((4*i*i+8*i+3)/(2*i+1));for(let c=i+2;c<=n;c+=1){const u=Math.sqrt((4*c*c-1)/(c*c-i*i));s=o*t*u-a*u/l,a=o,o=s,l=u}return s}function $i(n,e,t,i){const r=2*t*i/n;return Math.sqrt((2*t/n)**3*(xi(n-e-1)/(2*n*xi(n+e))))*Math.exp(-r/2)*r**e*v_(n-e-1,2*e+1,r)}function zt({n,l:e,m:t,z:i},r,a,o){const s=Math.hypot(r,a,o);if(s<1e-9)return e===0?$i(n,e,i,0)*yl(e,t,0,0):0;const l=Math.acos(o/s),c=Math.atan2(a,r);return $i(n,e,i,s)*yl(e,t,l,c)}function il({n,l:e,m:t,z:i},r,a,o){const s=Math.hypot(r,a),l=Math.hypot(s,o),c=l<.01?0:o/l,u=$i(n,e,i,l)*M_(e,t,c);let h=1/Math.sqrt(Math.PI);if(t!==0){const d=s>.001?t*Math.atan2(a,r):Math.PI/2;h*=t>0?Math.cos(d):-Math.sin(d)}return u*h}function S_(n){return n>=7?120:n===6?100:n===5?90:n===4?80:n===3?70:n===2?60:50}function ri(n,e=.8){let t=0;const i=.002;let r=0,a=0;for(;a<2e5;){const h=gs(n,r),d=gs(n,r+i/2),f=gs(n,r+i);if(t+=(h+4*d+f)/6,r+=i,a+=1,i*t>e)break}const o=r*1.5,s=S_(n.n),c=2*Math.ceil(o)/s*s/2,u=Math.sqrt(gs(n,r)/(4*Math.PI*r*r))||1e-4;return{radius:c,iso:Math.max(1e-4,u),gridSize:s,leastRadius:o}}function gs(n,e){return e*e*$i(n.n,n.l,n.z,e)**2}function Ls(n,e){return`${n-e-1} radial, ${e} angular`}function b_(n,e){const{radius:t}=e,i=Math.min(42,Math.max(24,Math.round(e.density*.58))),r=[],a=[],o=t*2/(i-1),s=t*t,l=15e4;let c=0;for(let x=0;x<i;x+=1){const _=-t+x*o;for(let g=0;g<i;g+=1){const p=-t+g*o;for(let M=0;M<i;M+=1){const v=-t+M*o;if(_*_+p*p+v*v>s||!Ml(e.cutaway,_,p,v))continue;const y=zt(n,_,p,v);c=Math.max(c,Math.abs(y))}}}const u=c||1;let h=(n.n*73856093^n.l*19349663^(n.m+8)*83492791^Math.round(t*1e3))>>>0;const d=()=>(h=1664525*h+1013904223>>>0,h/4294967296),f=Math.min(26e5,Math.max(72e4,e.density*e.density*430));for(let x=0;x<f;x+=1){const _=(d()*2-1)*t,g=(d()*2-1)*t,p=(d()*2-1)*t;if(_*_+g*g+p*p>s||!Ml(e.cutaway,_,g,p))continue;const M=zt(n,_,g,p),v=Math.min(1,(Math.abs(M)/u)**2);if(d()>v)continue;const y=M>=0?r:a;if(!(y.length/3>=l)&&(y.push(_,g,p),r.length/3>=l&&a.length/3>=l))break}return{positive:r,negative:a}}function _d(n,e){const t=e.thetaSegments??64,i=e.phiSegments??128,r=e.radius??4,a=[];let o=0;for(let l=0;l<=t;l+=1){const c=Math.PI*l/t,u=[];for(let h=0;h<=i;h+=1){const d=Math.PI*2*h/i,f=yl(n.l,n.m,c,d);u.push(f),o=Math.max(o,Math.abs(f))}a.push(u)}function s(l){const c=[],u=[],h=[],d=r/(o||1);for(let f=0;f<=t;f+=1){const x=Math.PI*f/t,_=[],g=Math.sin(x),p=Math.cos(x);for(let M=0;M<=i;M+=1){const v=Math.PI*2*M/i,y=a[f][M];if(l*y<=1e-6){_.push(-1);continue}const T=Math.abs(y)*d;_.push(c.length/3),c.push(T*g*Math.cos(v),T*g*Math.sin(v),T*p)}h.push(_)}for(let f=0;f<t;f+=1)for(let x=0;x<i;x+=1){const _=h[f][x],g=h[f+1][x],p=h[f][x+1],M=h[f+1][x+1];_>=0&&g>=0&&p>=0&&u.push(_,g,p),p>=0&&g>=0&&M>=0&&u.push(p,g,M)}return{vertices:c,indices:u}}return{positive:s(1),negative:s(-1)}}function Ml(n,e,t,i){return n==="quarter"?t<=0&&i<=0:n==="eighth"?e<=0&&t<=0&&i<=0:n==="threeQuarter"?!(t>0&&i>0):!0}function vd(n,e,t,i=1){const r=t.density,a=t.radius,o=a*2/r;let s=0,l=0;for(let c=0;c<r;c+=1){const u=-a+c*o;for(let h=0;h<r;h+=1){const d=-a+h*o;for(let f=0;f<r;f+=1){const x=-a+f*o,_=Ml(t.cutaway,x,d,u)?i*zt(e,x,d,u):0;n[s]=_,l=Math.max(l,Math.abs(_)),s+=1}}}return l}function E_(n,e,t){return vd(n,e,t,1)}function w_(n,e,t,i=180){const r=[],a=e.radius;let o=0;for(let s=0;s<i;s+=1){const l=[],c=a-2*a*s/(i-1);for(let u=0;u<i;u+=1){const h=-a+2*a*u/(i-1);let d=0;t==="xoy"&&(d=zt(n,h,c,0)),t==="xoz"&&(d=zt(n,h,0,c)),t==="yoz"&&(d=zt(n,0,h,c)),o=Math.max(o,Math.abs(d)),l.push(d)}r.push(l)}return{rows:r,maxAbs:o}}function T_(n,e,t,i){const a=t.radius/140;let o=0,s=i*zt(n,0,0,0)-t.iso,l=null;for(let c=1;c<=140;c+=1){const u=c*a,h=i*zt(n,e.x*u,e.y*u,e.z*u)-t.iso;if(s<=0&&h>=0){let d=o,f=u;for(let x=0;x<12;x+=1){const _=(d+f)/2;i*zt(n,e.x*_,e.y*_,e.z*_)-t.iso>=0?f=_:d=_}l=f}if(s>=0&&h<=0&&l!==null){let d=o,f=u;for(let x=0;x<12;x+=1){const _=(d+f)/2;i*zt(n,e.x*_,e.y*_,e.z*_)-t.iso>=0?d=_:f=_}l=d}o=u,s=h}return l}function A_(n,e){const t=e.thetaSegments??58,i=e.phiSegments??96;function r(a){const o=[],s=[],l=[];for(let c=0;c<=t;c+=1){const u=Math.PI*c/t,h=[],d=Math.sin(u),f=Math.cos(u);for(let x=0;x<=i;x+=1){const _=Math.PI*2*x/i,g={x:d*Math.cos(_),y:d*Math.sin(_),z:f},p=T_(n,g,e,a);p===null||!Number.isFinite(p)?h.push(-1):(h.push(o.length/3),o.push(g.x*p,g.y*p,g.z*p))}l.push(h)}for(let c=0;c<t;c+=1)for(let u=0;u<i;u+=1){const h=l[c][u],d=l[c+1][u],f=l[c+1][u+1],x=l[c][u+1];h>=0&&d>=0&&f>=0&&s.push(h,d,f),h>=0&&f>=0&&x>=0&&s.push(h,f,x)}return{vertices:o,indices:s}}return{positive:r(1),negative:r(-1)}}const m={viewer:document.querySelector("#viewer"),angularViewer:document.querySelector("#angularViewer"),projectionViewer:document.querySelector("#projectionViewer"),radialViewer:document.querySelector("#radialViewer"),viewGrid:document.querySelector(".view-grid"),mainWindow:document.querySelector(".main-window"),menuPopup:document.querySelector("#menuPopup"),menuItems:document.querySelectorAll(".menu-item"),toolRender:document.querySelector("#toolRender"),toolSave:document.querySelector("#toolSave"),toolTile:document.querySelector("#toolTile"),toolOverlap:document.querySelector("#toolOverlap"),toolAxis:document.querySelector("#toolAxis"),toolXOY:document.querySelector("#toolXOY"),toolYOZ:document.querySelector("#toolYOZ"),toolXOZ:document.querySelector("#toolXOZ"),preset:document.querySelector("#presetInput"),cosType:document.querySelector("#cosTypeInput"),sinType:document.querySelector("#sinTypeInput"),cloud:document.querySelector("#cloudInput"),positiveLobe:document.querySelector("#positiveLobeInput"),negativeLobe:document.querySelector("#negativeLobeInput"),wireframe:document.querySelector("#wireframeInput"),smooth:document.querySelector("#smoothInput"),projection:document.querySelector("#projectionInput"),paletteOne:document.querySelector("#paletteOneInput"),paletteTwo:document.querySelector("#paletteTwoInput"),xySlice:document.querySelector("#xySliceInput"),yzSlice:document.querySelector("#yzSliceInput"),xzSlice:document.querySelector("#xzSliceInput"),quarter:document.querySelector("#quarterInput"),eighth:document.querySelector("#eighthInput"),threeQuarter:document.querySelector("#threeQuarterInput"),radialR:document.querySelector("#radialRInput"),radialR2:document.querySelector("#radialR2Input"),radialRdf:document.querySelector("#radialRdfInput"),radialSection:document.querySelector("#radialSectionInput"),radialSide:document.querySelector("#radialSideInput"),radialCurve:document.querySelector("#radialCurveInput"),radialAxis:document.querySelector("#radialAxisInput"),relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue"),longitudeNode:document.querySelector("#longitudeNodeInput"),grid3d:document.querySelector("#grid3dInput"),desktopMatch:document.querySelector("#desktopMatchInput"),n:document.querySelector("#nInput"),l:document.querySelector("#lInput"),m:document.querySelector("#mInput"),z:document.querySelector("#zInput"),mode:document.querySelector("#modeInput"),slice:document.querySelector("#sliceInput"),node:document.querySelector("#nodeInput"),axis:document.querySelector("#axisInput"),box:document.querySelector("#boxInput"),positiveColor:document.querySelector("#positiveColorInput"),negativeColor:document.querySelector("#negativeColorInput"),backgroundColor:document.querySelector("#backgroundColorInput"),iso:document.querySelector("#isoInput"),density:document.querySelector("#densityInput"),radius:document.querySelector("#radiusInput"),boxSizeDisplay:document.querySelector("#boxSizeDisplay"),intervalValue:document.querySelector("#intervalValue"),probabilityValue:document.querySelector("#probabilityValue"),opacity:document.querySelector("#opacityInput"),isoValue:document.querySelector("#isoValue"),densityValue:document.querySelector("#densityValue"),radiusValue:document.querySelector("#radiusValue"),opacityValue:document.querySelector("#opacityValue"),renderButton:document.querySelector("#renderButton"),axisProxyButton:document.querySelector("#axisProxyButton"),presetButton:document.querySelector("#presetButton"),redrawProxyButton:document.querySelector("#redrawProxyButton"),resetCameraButton:document.querySelector("#resetCameraButton"),screenshotButton:document.querySelector("#screenshotButton"),orbitalName:document.querySelector("#orbitalName"),viewerTitle:document.querySelector("#viewerTitle"),statusText:document.querySelector("#statusText"),posCount:document.querySelector("#posCount"),negCount:document.querySelector("#negCount"),nodeText:document.querySelector("#nodeText"),sliceText:document.querySelector("#sliceText"),boxText:document.querySelector("#boxText"),isoText:document.querySelector("#isoText"),openActivityButton:document.querySelector("#openActivityButton"),annotationModeButton:document.querySelector("#annotationModeButton"),annotationToolbar:document.querySelector("#annotationToolbar"),annotationClearButton:document.querySelector("#annotationClearButton"),openSketchButton:document.querySelector("#openSketchButton"),openAnimationButton:document.querySelector("#openAnimationButton"),openFormulaButton:document.querySelector("#openFormulaButton"),openPredictButton:document.querySelector("#openPredictButton"),openChallengeButton:document.querySelector("#openChallengeButton"),sketchWindow:document.querySelector("#sketchWindow"),formulaWindow:document.querySelector("#formulaWindow"),formulaOrbitalName:document.querySelector("#formulaOrbitalName"),formulaQuantumText:document.querySelector("#formulaQuantumText"),formulaMain:document.querySelector("#formulaMain"),formulaRadialText:document.querySelector("#formulaRadialText"),formulaAngularText:document.querySelector("#formulaAngularText"),formulaVisualText:document.querySelector("#formulaVisualText"),formulaRadialNodes:document.querySelector("#formulaRadialNodes"),formulaAngularNodes:document.querySelector("#formulaAngularNodes"),formulaPhaseText:document.querySelector("#formulaPhaseText"),animationWindow:document.querySelector("#animationWindow"),animationCanvas:document.querySelector("#animationCanvas"),animationStepBadge:document.querySelector("#animationStepBadge"),animationTitle:document.querySelector("#animationTitle"),animationText:document.querySelector("#animationText"),animationProgressFill:document.querySelector("#animationProgressFill"),animationRestartButton:document.querySelector("#animationRestartButton"),animationPrevButton:document.querySelector("#animationPrevButton"),animationPlayButton:document.querySelector("#animationPlayButton"),animationNextButton:document.querySelector("#animationNextButton"),animationExportButton:document.querySelector("#animationExportButton"),activityWindow:document.querySelector("#activityWindow"),activityTitle:document.querySelector("#activityTitle"),activityModeButtons:document.querySelectorAll("[data-activity-mode]"),activityPanes:document.querySelectorAll(".activity-pane"),predictPane:document.querySelector("#predictPane"),scorePane:document.querySelector("#scorePane"),diagnosisPane:document.querySelector("#diagnosisPane"),nodesPane:document.querySelector("#nodesPane"),comparePane:document.querySelector("#comparePane"),challengePane:document.querySelector("#challengePane"),explainPane:document.querySelector("#explainPane"),tabletPane:document.querySelector("#tabletPane"),predictTarget:document.querySelector("#predictTargetInput"),startPredictButton:document.querySelector("#startPredictButton"),verifyPredictButton:document.querySelector("#verifyPredictButton"),predictPrompt:document.querySelector("#predictPrompt"),scoreCurrentButton:document.querySelector("#scoreCurrentButton"),scoreShowRubricButton:document.querySelector("#scoreShowRubricButton"),scoreResetButton:document.querySelector("#scoreResetButton"),scorePrompt:document.querySelector("#scorePrompt"),diagnoseNodesButton:document.querySelector("#diagnoseNodesButton"),diagnosePhaseButton:document.querySelector("#diagnosePhaseButton"),diagnoseProjectionButton:document.querySelector("#diagnoseProjectionButton"),diagnosisPrompt:document.querySelector("#diagnosisPrompt"),nodeRevealButton:document.querySelector("#nodeRevealButton"),nodeHideButton:document.querySelector("#nodeHideButton"),compareA:document.querySelector("#compareAInput"),compareB:document.querySelector("#compareBInput"),compareApplyButton:document.querySelector("#compareApplyButton"),compareLoadAButton:document.querySelector("#compareLoadAButton"),compareLoadBButton:document.querySelector("#compareLoadBButton"),compareAViewer:document.querySelector("#compareAViewer"),compareBViewer:document.querySelector("#compareBViewer"),compareATitle:document.querySelector("#compareATitle"),compareBTitle:document.querySelector("#compareBTitle"),compareANotes:document.querySelector("#compareANotes"),compareBNotes:document.querySelector("#compareBNotes"),compareSummary:document.querySelector("#compareSummary"),newChallengeButton:document.querySelector("#newChallengeButton"),challengeGuess:document.querySelector("#challengeGuessInput"),revealChallengeButton:document.querySelector("#revealChallengeButton"),challengePrompt:document.querySelector("#challengePrompt"),explainRestartButton:document.querySelector("#explainRestartButton"),explainPrevButton:document.querySelector("#explainPrevButton"),explainPlayButton:document.querySelector("#explainPlayButton"),explainNextButton:document.querySelector("#explainNextButton"),explainProgressFill:document.querySelector("#explainProgressFill"),explainStepBadge:document.querySelector("#explainStepBadge"),explainStepTitle:document.querySelector("#explainStepTitle"),explainStepText:document.querySelector("#explainStepText"),explainFormula:document.querySelector("#explainFormula"),explainObserveText:document.querySelector("#explainObserveText"),explainReasonText:document.querySelector("#explainReasonText"),explainHintText:document.querySelector("#explainHintText"),sketchCanvas:document.querySelector("#sketchCanvas"),sketchColor:document.querySelector("#sketchColorInput"),sketchSize:document.querySelector("#sketchSizeInput"),sketchPen:document.querySelector("#sketchPenButton"),sketchEraser:document.querySelector("#sketchEraserButton"),sketchClear:document.querySelector("#sketchClearButton"),tabletLargeButton:document.querySelector("#tabletLargeButton"),tabletRestoreButton:document.querySelector("#tabletRestoreButton"),tabletScreenshotButton:document.querySelector("#tabletScreenshotButton")},qt=new Ai;qt.background=new Se(1120295);function Yr(n,e){const t=new x_(n,e);return t.rotateSpeed=3.2,t.zoomSpeed=1.15,t.panSpeed=.65,t.staticMoving=!1,t.dynamicDampingFactor=.12,t.noRotate=!1,t.noZoom=!1,t.noPan=!1,t}function rl(n){return n.pointerType==="mouse"&&(n.button===2||(n.buttons&2)===2)}function _n(n){var l,c,u,h,d,f;if(!n)return;const e=n.object,t=(l=e==null?void 0:e.position)==null?void 0:l.clone(),i=(c=e==null?void 0:e.quaternion)==null?void 0:c.clone(),r=(u=e==null?void 0:e.up)==null?void 0:u.clone(),a=e==null?void 0:e.zoom,o=(h=n.target)==null?void 0:h.clone(),s=n.staticMoving;typeof n.reset=="function"&&t&&o&&(n.staticMoving=!0,n.reset(),e.position.copy(t),i&&e.quaternion.copy(i),r&&e.up.copy(r),typeof a=="number"&&(e.zoom=a),n.target.copy(o),(d=e.updateProjectionMatrix)==null||d.call(e),n.staticMoving=s),n.enabled=!0,n.noRotate=!1,n.noZoom=!1,n.noPan=!1,(f=n.handleResize)==null||f.call(n),n.update()}function Ea(n,e){const t=n==null?void 0:n.querySelector("canvas");if(!t||!e)return;const i=()=>typeof e=="function"?e():e;t.addEventListener("pointerdown",r=>{if(rl(r)){r.preventDefault(),r.stopImmediatePropagation(),_n(i());return}_n(i())},{capture:!0}),t.addEventListener("pointermove",r=>{rl(r)&&(r.preventDefault(),r.stopImmediatePropagation())},{capture:!0}),t.addEventListener("pointerup",r=>{rl(r)&&(r.preventDefault(),r.stopImmediatePropagation()),_n(i())},{capture:!0}),t.addEventListener("pointercancel",()=>_n(i()),{capture:!0}),t.addEventListener("lostpointercapture",()=>_n(i())),t.addEventListener("mouseenter",()=>_n(i())),t.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopImmediatePropagation(),_n(i())},{capture:!0})}const $e=new En(-5,5,5,-5,.1,1e3),fn=new ni({antialias:!0,preserveDrawingBuffer:!0});fn.setPixelRatio(Math.min(window.devicePixelRatio,2));fn.localClippingEnabled=!0;m.viewer.appendChild(fn.domElement);let Ce=Yr($e,fn.domElement);const bn=new Ai,it=new En(-5,5,5,-5,.1,1e3),Ki=new ni({antialias:!0,preserveDrawingBuffer:!0});Ki.setPixelRatio(Math.min(window.devicePixelRatio,2));Ki.localClippingEnabled=!0;m.angularViewer.appendChild(Ki.domElement);const Lt=Yr(it,Ki.domElement),On=new Ai,vt=new En(-5,5,5,-5,.1,1e3);vt.up.set(0,0,1);const Ji=new ni({antialias:!0,preserveDrawingBuffer:!0});Ji.setPixelRatio(Math.min(window.devicePixelRatio,2));m.projectionViewer.appendChild(Ji.domElement);const In=Yr(vt,Ji.domElement),zn=new Ai,Pt=new En(-5,5,5,-5,.1,1e3),$r=new ni({antialias:!0,preserveDrawingBuffer:!0});$r.setPixelRatio(Math.min(window.devicePixelRatio,2));m.radialViewer.appendChild($r.domElement);const Zt=Yr(Pt,$r.domElement);Ea(m.viewer,()=>Ce);Ea(m.angularViewer,Lt);Ea(m.projectionViewer,In);Ea(m.radialViewer,Zt);function Pr(){_n(Ce),_n(Lt),_n(In),_n(Zt)}function C_(){var t,i,r;const n=((t=Ce==null?void 0:Ce.target)==null?void 0:t.clone())??new P,e={rotateSpeed:(Ce==null?void 0:Ce.rotateSpeed)??3.2,zoomSpeed:(Ce==null?void 0:Ce.zoomSpeed)??1.15,panSpeed:(Ce==null?void 0:Ce.panSpeed)??.65,staticMoving:(Ce==null?void 0:Ce.staticMoving)??!1,dynamicDampingFactor:(Ce==null?void 0:Ce.dynamicDampingFactor)??.12,noRotate:(Ce==null?void 0:Ce.noRotate)??!1,noZoom:(Ce==null?void 0:Ce.noZoom)??!1,noPan:(Ce==null?void 0:Ce.noPan)??!1};(i=Ce==null?void 0:Ce.dispose)==null||i.call(Ce),Ce=Yr($e,fn.domElement),Object.assign(Ce,e),Ce.target.copy(n),(r=Ce.handleResize)==null||r.call(Ce),Ce.update()}const Xl=new dn(16777215,1.45);Xl.position.set(0,0,1);$e.add(Xl);$e.add(new dn(16777215,.28));qt.add($e);qt.add(new Ci(16777215,.42));const Yl=new dn(16777215,1.45);Yl.position.set(0,0,1);it.add(Yl);it.add(new dn(16777215,.28));bn.add(it);bn.add(new Ci(16777215,.42));const $l=new dn(16777215,1.7);$l.position.set(0,0,80);On.add($l);On.add(new Ci(16777215,.65));const Zl=new dn(16777215,1.8);Zl.position.set(0,-40,60);zn.add(Zl);zn.add(new Ci(16777215,.62));for(const n of[fn,Ki,Ji,$r])n.outputColorSpace=Ft,n.toneMapping=Hr,n.toneMappingExposure=1.16;Xl.intensity=1.72;Yl.intensity=1.72;$l.intensity=1.88;Zl.intensity=1.92;const Ma=js(4.5,.2,.9);let mi=js(4.2,.1,.9);qt.add(Ma);bn.add(mi);let wt=null,Tt=null,Wi=null,qi=null,Is=null,ha=null,Ds=null,Sl=null,di=null,fi=null,da=null,fa=null,ki=null,pa=null,ma=null,sn=null,bl=null,El=null,wl=null,Tl=null,Al=null,Cl=null,$n=null,xn=null,jl=1,ti=5,Kt=4,Kl=3,Sa=4.5,Cn=null,jn=null,Vt=null,Sn=null,th="",Rn=null,Kn=null,Ht=null,Un=null,nh="",Pn=null,yi=null,Gt=null,Nn=null,ih="",Ln=null,Nt=null,Lr=!1;const ba=[],Ze={drawing:!1,erasing:!1,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,strokes:[],currentStroke:null};function Jl(n=(e=>(e=m.backgroundColor)==null?void 0:e.value)()||"#668080"){document.documentElement.style.setProperty("--viewer-bg",n);const t=new Se(n);qt.background=t.clone(),bn.background=t.clone(),On.background=t.clone(),zn.background=t.clone();for(const i of ba)i.scene.background=t.clone()}function R_(){var t;if(document.querySelector("#relationModeInput")){Object.assign(m,{relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue")});return}const n=(t=m.longitudeNode)==null?void 0:t.closest("fieldset");if(!n)return;const e=document.createElement("fieldset");e.className="relation-panel",e.innerHTML=`
    <legend>关联</legend>
    <div class="check-grid two">
      <label class="check-row"><input id="relationModeInput" type="checkbox" /><span>关联模式</span></label>
      <label class="check-row"><input id="syncRotationInput" type="checkbox" checked /><span>同步空间视角</span></label>
    </div>
    <label class="range-row">
      <span>半径 r</span>
      <input id="scanRadiusInput" type="range" min="0" max="100" step="1" value="45" />
      <output id="scanRadiusValue">45%</output>
    </label>
    <label class="range-row">
      <span>方向 θ</span>
      <input id="scanThetaInput" type="range" min="0" max="180" step="1" value="90" />
      <output id="scanThetaValue">90°</output>
    </label>
    <label class="range-row">
      <span>方向 φ</span>
      <input id="scanPhiInput" type="range" min="0" max="360" step="1" value="0" />
      <output id="scanPhiValue">0°</output>
    </label>
  `,n.insertAdjacentElement("afterend",e),Object.assign(m,{relationMode:e.querySelector("#relationModeInput"),syncRotation:e.querySelector("#syncRotationInput"),scanRadius:e.querySelector("#scanRadiusInput"),scanRadiusValue:e.querySelector("#scanRadiusValue"),scanTheta:e.querySelector("#scanThetaInput"),scanThetaValue:e.querySelector("#scanThetaValue"),scanPhi:e.querySelector("#scanPhiInput"),scanPhiValue:e.querySelector("#scanPhiValue")})}R_();Jl();const Qi=document.createElement("button");Qi.type="button";Qi.className="fullscreen-exit-button";Qi.textContent="退出全屏";Qi.hidden=!0;document.body.appendChild(Qi);function P_(n,e,t){return kn(n,e,t)}function yd(n,e,t){return`${n},${e},${t}`}function L_(n){const e=[0];for(let t=1;t<=n;t+=1)e.push(t,-t);return e}function Md(n){const e=Math.max(1,Math.min(6,Math.round(n)||1)),t=[];for(let i=0;i<e;i+=1)for(const r of L_(i))t.push({value:yd(e,i,r),label:P_(e,i,r)});return t}function I_(n=6){const e=[];for(let t=1;t<=n;t+=1)e.push(...Md(t));return e}const Xt=I_(6);function xs(n,e,t=null){if(n){n.replaceChildren();for(const i of e){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,n.append(r)}t&&e.some(i=>i.value===t)&&(n.value=t)}}function D_(){xs(m.predictTarget,Xt,"2,1,1"),xs(m.challengeGuess,Xt,"2,1,1"),xs(m.compareA,Xt,"2,1,1"),xs(m.compareB,Xt,"3,1,1")}function U_(n=null){if(!m.preset)return;const e=n??xd(Number(m.n.value),Number(m.l.value),Number(m.m.value));if(Number(m.preset.dataset.n)!==e.n){m.preset.replaceChildren();for(const i of Md(e.n)){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,m.preset.append(r)}m.preset.dataset.n=String(e.n)}m.preset.value=yd(e.n,e.l,e.m)}const ce={challengeTarget:Xt[0],challengeTotal:0,challengeCorrect:0,dragWindow:null,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,explanationStep:0,explanationPlaying:!1,explanationStartedAt:0,explanationTimer:null,explanationFrame:null,animationStep:0,animationPlaying:!1,animationStartedAt:0,animationTimer:null,animationFrame:null,animationExporting:!1,annotationMode:!1,annotationDrag:null};function ct(){var e,t;const n=xd(Number(m.n.value),Number(m.l.value),Number(m.m.value));return(e=m.sinType)!=null&&e.checked&&n.m>0&&(n.m=-n.m),(t=m.cosType)!=null&&t.checked&&n.m<0&&(n.m=Math.abs(n.m)),m.n.value=n.n,m.l.max=n.n-1,m.l.value=n.l,m.m.min=-n.l,m.m.max=n.l,m.m.value=Math.abs(n.m),U_(n),{...n,z:Math.max(1,Math.min(10,Number(m.z.value)||1))}}function Jt(){var r,a,o,s,l,c,u,h,d,f,x,_,g,p,M,v,y,T,E,A,R,b,S;const n=ct(),e=m.desktopMatch.checked?ri(n):null;let t=m.slice.value;(r=m.xySlice)!=null&&r.checked&&(t="xoy"),(a=m.yzSlice)!=null&&a.checked&&(t="yoz"),(o=m.xzSlice)!=null&&o.checked&&(t="xoz"),!((s=m.xySlice)!=null&&s.checked)&&!((l=m.yzSlice)!=null&&l.checked)&&!((c=m.xzSlice)!=null&&c.checked)&&(t="none");const i={iso:Number(m.iso.value),density:Number(m.density.value),radius:Number(m.radius.value),opacity:Number(m.opacity.value),mode:m.mode.value,showCloud:((u=m.cloud)==null?void 0:u.checked)??!1,slice:t,showNode:m.node.checked||((h=m.longitudeNode)==null?void 0:h.checked),showAxis:m.axis.checked,showBox:m.box.checked,showPositive:((d=m.positiveLobe)==null?void 0:d.checked)??!0,showNegative:((f=m.negativeLobe)==null?void 0:f.checked)??!0,wireframe:((x=m.wireframe)==null?void 0:x.checked)??!1,smooth:((_=m.smooth)==null?void 0:_.checked)??!1,showProjection:((g=m.projection)==null?void 0:g.checked)??!1,grid3d:((p=m.grid3d)==null?void 0:p.checked)??!1,cutaway:(M=m.eighth)!=null&&M.checked?"eighth":(v=m.quarter)!=null&&v.checked?"quarter":(y=m.threeQuarter)!=null&&y.checked?"threeQuarter":"none",radialMode:(T=m.radialR)!=null&&T.checked?"R":(E=m.radialR2)!=null&&E.checked?"R2":"RDF",radialSection:((A=m.radialSection)==null?void 0:A.checked)??!1,radialSide:((R=m.radialSide)==null?void 0:R.checked)??!1,radialCurve:((b=m.radialCurve)==null?void 0:b.checked)??!0,radialAxis:((S=m.radialAxis)==null?void 0:S.checked)??!1,positiveColor:m.positiveColor.value,negativeColor:m.negativeColor.value,backgroundColor:m.backgroundColor.value,desktopMatched:!!e};return m.isoValue.value=i.iso.toFixed(4),m.densityValue.value=i.density,m.radiusValue.value=i.radius.toFixed(1),m.opacityValue.value=i.opacity.toFixed(2),m.boxSizeDisplay&&(m.boxSizeDisplay.value=(i.radius*2.4).toFixed(2)),m.intervalValue&&(m.intervalValue.value=(i.radius*2/i.density).toFixed(3)),m.probabilityValue&&(m.probabilityValue.value="0.800"),m.iso.disabled=!1,m.density.disabled=!1,m.radius.disabled=!1,i}function Zr(){if(!m.desktopMatch.checked)return;const n=ri(ct()),e=Math.min(Number(m.iso.max),Math.max(Number(m.iso.min),n.iso));m.iso.value=e.toFixed(4),m.density.value=Math.min(Number(m.density.max),Math.max(Number(m.density.min),n.gridSize)),m.radius.value=Math.min(Number(m.radius.max),Math.max(Number(m.radius.min),n.radius)),Jt()}function N_(){if(!m.boxSizeDisplay)return;const n=Number(m.boxSizeDisplay.value);!Number.isFinite(n)||n<=0||(m.radius.value=Math.min(Number(m.radius.max),Math.max(Number(m.radius.min),n/2.4)),Jt())}function Us(n,e){const t=new Ke;t.setAttribute("position",new Xe(n,3));const i=new Float32Array(n.length/3);for(let a=0;a<i.length;a+=1){const o=Math.sin((a+1)*12.9898)*43758.5453;i[a]=o-Math.floor(o)}t.setAttribute("seed",new Ot(i,1));const r=new ei({uniforms:{uColor:{value:new Se(e)},uTime:{value:0},uSize:{value:2.7}},transparent:!0,depthWrite:!1,blending:ol,vertexShader:`
      attribute float seed;
      uniform float uTime;
      uniform float uSize;
      varying float vSeed;
      varying float vPulse;

      float random(float value) {
        return fract(sin(value * 91.3458) * 47453.5453);
      }

      void main() {
        vSeed = seed;
        float frame = floor(uTime * 13.0 + seed * 11.0);
        float flash = step(0.42, random(seed * 41.0 + frame));
        float shimmer = 0.48 + 0.52 * sin(uTime * (4.5 + seed * 7.0) + seed * 31.0);
        vPulse = mix(0.18, 1.0, flash) * shimmer;
        gl_PointSize = uSize + flash * 1.4;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      varying float vSeed;
      varying float vPulse;

      void main() {
        vec2 centered = gl_PointCoord - vec2(0.5);
        float radius = length(centered);
        float core = smoothstep(0.42, 0.05, radius);
        float halo = smoothstep(0.5, 0.12, radius) * 0.34;
        float alpha = (core + halo) * (0.22 + 0.78 * vPulse);
        if (alpha < 0.03) discard;
        vec3 color = uColor * (0.9 + 0.55 * vPulse);
        gl_FragColor = vec4(color, alpha);
      }
    `});return new Lx(t,r)}function F_(n){var e,t;for(const i of[wt,Tt,Wi,qi])i!=null&&i.isPoints&&((t=(e=i.material)==null?void 0:e.uniforms)!=null&&t.uTime)&&(i.material.uniforms.uTime.value=n)}function It(n){return Number.parseInt(n.replace("#","0x"),16)}function Rl(n,e){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle=e;const r=n.length>2?34:n.length>1?44:58;i.font=`700 ${r}px Segoe UI, Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,64,64);const a=new Ix(t);a.colorSpace=Ft;const o=new ad({map:a,transparent:!0,alphaTest:.2,depthTest:!0,depthWrite:!1});o.toneMapped=!1;const s=new Rx(o);return s.scale.set(.68,.68,.68),s.renderOrder=20,s}function Pl(n,e,t,i){const r=e.clone().sub(n),a=r.length(),o=new Ti({color:i});o.toneMapped=!1;const s=new rt(new Xr(t,t,a,48,1,!1),o);return s.position.copy(n).add(e).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new P(0,1,0),r.normalize()),s}function Ll(n,e,t,i,r){const a=new Ti({color:r});a.toneMapped=!1;const o=new rt(new Gl(i,t,96,1,!1),a);return o.position.copy(e),o.quaternion.setFromUnitVectors(new P(0,1,0),n.clone().normalize()),o}function js(n,e=.2,t=.9){const i=new Rt,r=n*t,a=n*.02,o=r*.1,s=a*3,l=[{dir:new P(1,0,0),color:16711680,label:"x",labelColor:"#ff0000"},{dir:new P(0,1,0),color:47400,label:"y",labelColor:"#00e63a"},{dir:new P(0,0,1),color:15785216,label:"z",labelColor:"#fff000"}];for(const c of l){const u=c.dir.clone().multiplyScalar(-r),h=c.dir.clone().multiplyScalar(r);i.add(Pl(u,h,a,c.color)),i.add(Ll(c.dir,c.dir.clone().multiplyScalar(r*1.01),o,s,c.color));const d=Rl(c.label,c.labelColor);c.label==="x"&&d.position.set(r*1.2,-e,0),c.label==="y"&&d.position.set(-e,r*1.2,0),c.label==="z"&&d.position.set(-e,-e,r*1.2),i.add(d)}return i}function O_(n,e,t,i){const r=new Rt,a=Math.max(.018,n*.006),o=n*.08,s=a*3.2,l=new P(0,0,t),c=new P(n,0,t),u=new P(0,0,t+e);r.add(Pl(l,c,a,15785216)),r.add(Ll(new P(1,0,0),c,o,s,15785216)),r.add(Pl(l,u,a,22527)),r.add(Ll(new P(0,0,1),u,o,s,22527));const h=Rl("r","#fff000");h.scale.setScalar(.48),h.position.set(n+o*.85,-n*.045,t),r.add(h);const d=Rl(i==="R2"?"R*R":i,"#0057ff");return d.scale.setScalar(.58),d.position.set(-n*.08,0,t+e+o*.9),r.add(d),r}function Br(n,e,t){const i=new Ke;i.setAttribute("position",new Xe(n.vertices,3)),i.setIndex(n.indices),i.computeVertexNormals();const r=new pd({color:e,transparent:t<1,opacity:t,side:pt,emissive:e,emissiveIntensity:.055});return new rt(i,r)}function kr(n,e){n!=null&&n.material&&(n.visible=!0,n.material.wireframe=e.wireframe&&!e.smooth,n.material.flatShading=!e.smooth,n.material.clippingPlanes=[],n.material.clipIntersection=!1,n.material.needsUpdate=!0)}function Sd(n){return n.wireframe||n.smooth}function z_(n){return n==="quarter"?[new lt(new P(0,1,0),0),new lt(new P(0,0,1),0)]:n==="eighth"?[new lt(new P(1,0,0),0),new lt(new P(0,1,0),0),new lt(new P(0,0,1),0)]:n==="threeQuarter"?[new lt(new P(0,0,1),0)]:[]}function bd(n){const e=z_(n.cutaway),t=Ks(n.slice);return t==="x"&&e.push(new lt(new P(1,0,0),0)),t==="y"&&e.push(new lt(new P(0,1,0),0)),t==="z"&&e.push(new lt(new P(0,0,1),0)),e}function Ks(n){return n==="yoz"?"x":n==="xoz"?"y":n==="xoy"?"z":null}function Ns(n,e,t,i){const r=e._clipPlanes||bd(e);if(!r.length)return n;const a=e._capFilter||(()=>!0);n.updateMatrixWorld(!0);const o=n.geometry.getAttribute("position"),s=n.geometry.index,l=[],c=s?s.count:Math.min(o.count,n.count||o.count);function u($){return n.localToWorld(new P(o.getX($),o.getY($),o.getZ($)))}const h=Math.floor(c/3);for(let $=0;$<h;$+=1){const fe=s?s.getX($*3):$*3,se=s?s.getX($*3+1):$*3+1,H=s?s.getX($*3+2):$*3+2;l.push([u(fe),u(se),u(H)])}let d=l;const f=r.map(()=>[]);r.forEach(($,fe)=>{const se=[];for(const H of d){const{clipped:K,segments:oe}=rh(H,$);K.length>=3&&se.push(K),f[fe].push(...oe)}d=se});const x=[],_=[],g=new Se(It(t));function p($){return x.push($.x,$.y,$.z),x.length/3-1}for(const $ of d){const fe=p($[0]);for(let se=1;se<$.length-1;se+=1){const H=p($[se]),K=p($[se+1]);_.push(fe,H,K)}}const M=[],v=[],y=[];function T($){return M.push($.x,$.y,$.z),v.push(zt(i,$.x,$.y,$.z)),M.length/3-1}function E($,fe){let se=!1;for(let H=0,K=fe.length-1;H<fe.length;K=H,H+=1){const oe=fe[H],N=fe[K];oe.y>$.y!=N.y>$.y&&$.x<(N.x-oe.x)*($.y-oe.y)/(N.y-oe.y+1e-12)+oe.x&&(se=!se)}return se}function A($){let fe=0;for(let se=0;se<$.length;se+=1){const H=$[se],K=$[(se+1)%$.length];fe+=H.x*K.y-K.x*H.y}return fe*.5}function R($){return $.reduce((fe,se)=>fe.add(se),new P).multiplyScalar(1/$.length)}function b($,fe){const se=$.normal.clone().normalize(),H=Math.abs(se.x)<.9?new P(1,0,0):new P(0,1,0);H.sub(se.clone().multiplyScalar(H.dot(se))).normalize();const K=new P().crossVectors(se,H).normalize(),oe=W_(f[fe]),N=[];for(const re of oe){if(re.length<3)continue;let ge=q_(re,$);for(let ze=0;ze<r.length&&!(ze!==fe&&(ge=rh(ge,r[ze]).clipped,ge.length<3));ze+=1);if(ge.length<3)continue;const D=R(ge);if(!a(fe,D))continue;const ae=ge.map(ze=>new pe(ze.dot(H),ze.dot(K))),Ee=A(ae);Math.abs(Ee)<1e-7||N.push({points3D:ge,points2D:ae,area:Ee,absArea:Math.abs(Ee),parent:-1,depth:0})}for(let re=0;re<N.length;re+=1){const ge=N[re].points2D[0];let D=-1,ae=Number.POSITIVE_INFINITY;for(let Ee=0;Ee<N.length;Ee+=1)re===Ee||N[Ee].absArea<=N[re].absArea||E(ge,N[Ee].points2D)&&N[Ee].absArea<ae&&(D=Ee,ae=N[Ee].absArea);N[re].parent=D}const Q=re=>{let ge=0,D=N[re].parent;for(;D>=0;)ge+=1,D=N[D].parent;return ge};N.forEach((re,ge)=>{re.depth=Q(ge)}),N.forEach((re,ge)=>{if(re.depth%2!==0)return;const D=[],ae=[];N.forEach(Ie=>{Ie.depth%2===1&&Ie.parent===ge&&(D.push(Ie.points2D),ae.push(Ie))});const Ee=[...re.points3D,...ae.flatMap(Ie=>Ie.points3D)];[...re.points2D,...D.flat()];const ze=M.length/3;for(const Ie of Ee)T(Ie);const Pe=Wl.triangulateShape(re.points2D,D);for(const Ie of Pe){const Ve=Ee[Ie[0]],Oe=Ee[Ie[1]],ht=Ee[Ie[2]],I=Ve.clone().add(Oe).add(ht).multiplyScalar(1/3);(e._capSign??1)*zt(i,I.x,I.y,I.z)<e.iso*.48||y.push(ze+Ie[0],ze+Ie[1],ze+Ie[2])}})}r.forEach(($,fe)=>{b($,fe)});const S=new Ke;S.setAttribute("position",new Xe(x,3)),S.setIndex(_),e.smooth&&!e.wireframe&&!e._skipSmooth&&Ed(S,e),S.computeVertexNormals();const L=new Gi({color:g,emissive:g,emissiveIntensity:.08,shininess:28,specular:3355443,transparent:e.opacity<1,opacity:e.opacity,side:pt,wireframe:e.wireframe,flatShading:!e.smooth}),F=new rt(S,L);if(F.userData.vertexCount=_.length,!y.length)return F;const U=new Ke,B=Z_(v,e.iso*1.6),G=[];for(const $ of v){const fe=$_($,B);G.push(fe.r,fe.g,fe.b)}U.setAttribute("position",new Xe(M,3)),U.setAttribute("color",new Xe(G,3)),U.setIndex(y),U.computeVertexNormals();const Z=!!Ks(e.slice)||e.cutaway!=="none",q=new Gi({vertexColors:!0,side:pt,transparent:!1,opacity:1,depthWrite:!0,shininess:6,specular:1118481});q.toneMapped=!1;const ie=new rt(U,q);ie.renderOrder=Z?3:1;const he=new Rt;return he.add(F,ie),he.userData.vertexCount=_.length+y.length,he}function B_(n){var t,i;let e=((t=n==null?void 0:n.userData)==null?void 0:t.vertexCount)||0;return(i=n==null?void 0:n.traverse)==null||i.call(n,r=>{var a;r!==n&&(e+=((a=r.userData)==null?void 0:a.vertexCount)||0)}),e}function k_(n,e,t,i,r){const a=new Rt;let o=0;for(const s of r){const l=Ns(n,{...e,_clipPlanes:s.planes,_capFilter:s.capFilter,_skipSmooth:!0},t,i);l&&(a.add(l),o+=B_(l))}return a.userData.vertexCount=o,a}function V_(n,e,t,i){return e.cutaway==="quarter"?Ns(n,{...e,_clipPlanes:[new lt(new P(0,1,0),0),new lt(new P(0,0,1),0)],_skipSmooth:!0},t,i):e.cutaway==="eighth"?Ns(n,{...e,_clipPlanes:[new lt(new P(1,0,0),0),new lt(new P(0,1,0),0),new lt(new P(0,0,1),0)],_skipSmooth:!0},t,i):e.cutaway==="threeQuarter"?k_(n,e,t,i,[{planes:[new lt(new P(0,-1,0),0)],capFilter:(r,a)=>a.z>0},{planes:[new lt(new P(0,1,0),0),new lt(new P(0,0,-1),0)],capFilter:(r,a)=>r===1&&a.y>0}]):null}function H_(n,e,t){var v;n.updateMatrixWorld(!0);const i=n.geometry.getAttribute("position"),r=Number.isFinite(n.count)&&n.count>0?n.count:Number.POSITIVE_INFINITY,a=Number.isFinite((v=n.geometry.drawRange)==null?void 0:v.count)&&n.geometry.drawRange.count>0?n.geometry.drawRange.count:Number.POSITIVE_INFINITY,o=Math.min(i.count,r,a),s=[],l=[],c=new Map;function u(y){return Number.isFinite(y.x)&&Number.isFinite(y.y)&&Number.isFinite(y.z)}const h=Ks(e.slice);function d(y){return e.cutaway==="quarter"?(y.y>0&&(y.y=0),y.z>0&&(y.z=0)):e.cutaway==="eighth"?(y.x>0&&(y.x=0),y.y>0&&(y.y=0),y.z>0&&(y.z=0)):e.cutaway==="threeQuarter"&&y.y>0&&y.z>0&&(y.y<y.z?y.y=0:y.z=0),h==="x"&&y.x>0&&(y.x=0),h==="y"&&y.y>0&&(y.y=0),h==="z"&&y.z>0&&(y.z=0),y}function f(y,T){const E=n.localToWorld(new P(i.getX(y),i.getY(y),i.getZ(y)));if(d(E),!u(E))return-1;if(T){const R=`${Math.round(E.x*1e4)},${Math.round(E.y*1e4)},${Math.round(E.z*1e4)}`;if(c.has(R))return c.get(R);const b=s.length/3;return s.push(E.x,E.y,E.z),c.set(R,b),b}return s.push(E.x,E.y,E.z),s.length/3-1}const x=Math.floor(o/3),_=e.smooth&&!e.wireframe;for(let y=0;y<x;y+=1){const T=y*3,E=y*3+1,A=y*3+2,R=f(T,_),b=f(E,_),S=f(A,_);R>=0&&b>=0&&S>=0&&l.push(R,b,S)}const g=new Ke;g.setAttribute("position",new Xe(s,3)),g.setIndex(l),e.smooth&&!e.wireframe&&Ed(g,e),g.computeVertexNormals();const p=n.material.clone();p.color=new Se(It(t)),p.emissive=new Se(It(t)),p.side=pt,p.wireframe=e.wireframe,p.flatShading=!e.smooth,p.clippingPlanes=[],p.needsUpdate=!0;const M=new rt(g,p);return M.userData.vertexCount=o,M}function Ed(n,e){const t=n.getAttribute("position"),i=n.index;if(!t||!i)return;const r=t.count,a=Array.from({length:r},()=>new Set);for(let f=0;f<i.count;f+=3){const x=i.getX(f),_=i.getX(f+1),g=i.getX(f+2);a[x].add(_).add(g),a[_].add(x).add(g),a[g].add(x).add(_)}const o=Math.max(.035,e.radius/Math.max(80,e.density*2)),s=new Uint8Array(r),l=Ks(e.slice);for(let f=0;f<r;f+=1){const x=t.getX(f),_=t.getY(f),g=t.getZ(f);e.cutaway==="quarter"&&(Math.abs(_)<o||Math.abs(g)<o)&&(s[f]=1),e.cutaway==="eighth"&&(Math.abs(x)<o||Math.abs(_)<o||Math.abs(g)<o)&&(s[f]=1),e.cutaway==="threeQuarter"&&(Math.abs(_)<o||Math.abs(g)<o)&&(s[f]=1),l==="x"&&Math.abs(x)<o&&(s[f]=1),l==="y"&&Math.abs(_)<o&&(s[f]=1),l==="z"&&Math.abs(g)<o&&(s[f]=1)}const c=new Float32Array(t.array),u=new Float32Array(c.length),h=e.cutaway==="none"?10:7,d=e.cutaway==="none"?.16:.1;for(let f=0;f<h;f+=1){u.set(c);for(let x=0;x<r;x+=1){if(s[x]||a[x].size<3)continue;let _=0,g=0,p=0;for(const y of a[x]){const T=y*3;_+=c[T],g+=c[T+1],p+=c[T+2]}const M=a[x].size,v=x*3;u[v]=c[v]+(_/M-c[v])*d,u[v+1]=c[v+1]+(g/M-c[v+1])*d,u[v+2]=c[v+2]+(p/M-c[v+2])*d}c.set(u)}t.array.set(c),t.needsUpdate=!0}function rh(n,e){const t=[],i=[];for(let a=0;a<n.length;a+=1){const o=n[a],s=n[(a+1)%n.length],l=e.distanceToPoint(o)>=-1e-7,c=e.distanceToPoint(s)>=-1e-7;if(l&&c)t.push(s.clone());else if(l&&!c){const u=ah(o,s,e);t.push(u),i.push(u)}else if(!l&&c){const u=ah(o,s,e);t.push(u,s.clone()),i.push(u)}}const r=i.length===2?[[i[0],i[1]]]:[];return{clipped:t,segments:r}}function ah(n,e,t){const i=e.clone().sub(n),r=t.normal.dot(i);if(Math.abs(r)<1e-10)return n.clone();const a=-(t.normal.dot(n)+t.constant)/r;return n.clone().add(i.multiplyScalar(Math.max(0,Math.min(1,a))))}function G_(n){return`${Math.round(n.x*1e4)},${Math.round(n.y*1e4)},${Math.round(n.z*1e4)}`}function W_(n){const e=new Map,t=new Map;function i(s){const l=G_(s);return e.has(l)||e.set(l,s.clone()),t.has(l)||t.set(l,new Set),l}for(const[s,l]of n){const c=i(s),u=i(l);c!==u&&(t.get(c).add(u),t.get(u).add(c))}const r=[],a=new Set;function o(s,l){return s<l?`${s}|${l}`:`${l}|${s}`}for(const s of t.keys())for(const l of t.get(s)){const c=o(s,l);if(a.has(c))continue;const u=[s];let h=s,d=l;a.add(c);let f=0;for(;f<2e4;){u.push(d);const _=[...t.get(d)],g=_.find(p=>p!==h&&!a.has(o(d,p)))??_.find(p=>p!==h);if(!g||g===s)break;a.add(o(d,g)),h=d,d=g,f+=1}const x=u.map(_=>e.get(_));x.length>=3&&r.push(x)}return r}function q_(n,e){const t=n.reduce((o,s)=>o.add(s),new P).multiplyScalar(1/n.length),i=e.normal.clone().normalize(),r=Math.abs(i.x)<.9?new P(1,0,0):new P(0,1,0);r.sub(i.clone().multiplyScalar(r.dot(i))).normalize();const a=new P().crossVectors(i,r).normalize();return[...n].sort((o,s)=>{const l=o.clone().sub(t),c=s.clone().sub(t),u=Math.atan2(l.dot(a),l.dot(r)),h=Math.atan2(c.dot(a),c.dot(r));return u-h})}function Fs(n,e,t,i){const r=e.cutaway!=="none"||e.slice!=="none",a=e.smooth&&!e.wireframe?Math.round(e.density*(r?3:2)):e.density,o={...e,density:Math.min(r?220:180,Math.max(e.density,a))},s=new pd({color:It(i),transparent:e.opacity<1,opacity:e.opacity,side:pt,emissive:It(i),emissiveIntensity:.055}),l=n.n>=5?5e5:16e4,c=new gd(o.density,s,!0,!0,l);c.isolation=o.iso,c.position.set(0,0,0),c.scale.set(o.radius,o.radius,o.radius),vd(c.field,n,{...o,cutaway:"none"},t),c.update();const u={...e,_capSign:t},h=V_(c,u,i,n);return h||(bd(e).length?Ns(c,u,i,n):H_(c,e,i))}function X_(n,e){const t=new fd({color:15922423,roughness:.65,transparent:!0,opacity:.26,side:pt}),i=new gd(e.density,t,!0,!0,1e5);return i.isolation=0,i.scale.set(e.radius,e.radius,e.radius),E_(i.field,n,e),i.update(),i.userData.vertexCount=i.count??0,i}function Y_(n,e){return null}function wd(n){const e=new Wr(n*2,n*2,n*2),t=new $x(e),i=new ji({color:13686237,transparent:!0,opacity:.58}),r=new Vl(t,i);return e.dispose(),r}function $_(n,e){const t=Math.max(0,Math.min(1,Math.abs(n)/Math.max(e,1e-12))),i=Math.pow(t,.82),r=(n>=0?1:-1)*i,a=i*i*(3-2*i),o=eo(r);return new Se(11974326).lerp(o,a*.94)}function Z_(n,e){const t=n.map(r=>Math.abs(r)).filter(r=>Number.isFinite(r)&&r>1e-12).sort((r,a)=>r-a);if(!t.length)return Math.max(e,1e-9);const i=Math.min(t.length-1,Math.floor(t.length*.82));return Math.max(e,t[i])}function j_(){for(const n of[wt,Tt,Wi,qi,Is,ha,Ds,Sl])n&&er(qt,n);wt=null,Tt=null,Wi=null,qi=null,Is=null,ha=null,Ds=null,Sl=null}function K_(){for(const n of[di,fi])n&&er(bn,n);di=null,fi=null}function J_(n,e=!0){mi&&er(bn,mi),mi=js(n,Math.max(.08,n*.024),.9),mi.visible=e,bn.add(mi)}function Q_(){for(const n of[da,fa,ki])n&&er(On,n);da=null,fa=null,ki=null}function Td(){for(const n of[pa,ma,sn,bl,El])n&&er(zn,n);pa=null,ma=null,sn=null,bl=null,El=null}function er(n,e){n.remove(e),e.traverse(t=>{var i,r,a,o;if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const s of t.material)s.dispose();else t.material&&(t.material.map&&t.material.map.dispose(),(o=(a=(r=(i=t.material.uniforms)==null?void 0:i.volumeMap)==null?void 0:r.value)==null?void 0:a.dispose)==null||o.call(a),t.material.dispose())})}function at(){Ql();const n=ct(),e=Jt(),t=kn(n.n,n.l,n.m);m.statusText.textContent="Calculating",m.renderButton.disabled=!0,requestAnimationFrame(()=>{var s;j_(),K_(),Q_(),Td();let i=0,r=0;if(Jl(e.backgroundColor),Ma.visible=e.showAxis,Ma.scale.setScalar(Math.max(1,e.radius/4.5)),(s=m.toolAxis)==null||s.classList.toggle("active",e.showAxis),e.mode==="marching"||e.mode==="points")wt=Fs(n,e,1,e.positiveColor),Tt=Fs(n,e,-1,e.negativeColor),i=wt.userData.vertexCount,r=Tt.userData.vertexCount;else{const{positive:l,negative:c}=A_(n,{...e,thetaSegments:Math.max(30,e.density+18),phiSegments:Math.max(52,e.density*3)});wt=Br(l,It(e.positiveColor),e.opacity),Tt=Br(c,It(e.negativeColor),e.opacity),kr(wt,e),kr(Tt,e),i=l.vertices.length/3,r=c.vertices.length/3}const a=Sd(e);if(wt&&Tt&&(wt.visible=e.showPositive&&a,Tt.visible=e.showNegative&&a,qt.add(wt,Tt)),e.showCloud){const{positive:l,negative:c}=b_(n,e);Wi=Us(l,It(e.positiveColor)),qi=Us(c,It(e.negativeColor)),Wi.visible=e.showPositive,qi.visible=e.showNegative,qt.add(Wi,qi),i=l.length/3,r=c.length/3}e.showNode&&Ls(n.n,n.l)!=="0 radial, 0 angular"&&(Is=X_(n,e),qt.add(Is)),ha=Y_(),ha&&qt.add(ha),Sl=null,(e.showBox||e.grid3d)&&(Ds=wd(e.radius),qt.add(Ds)),dv(e),m.orbitalName.textContent=t,m.viewerTitle.textContent=`原子轨道  ${t}`,m.nodeText.textContent=Ls(n.n,n.l),m.sliceText.textContent=e.slice.toUpperCase(),m.boxText.textContent=e.radius.toFixed(2),m.isoText.textContent=e.iso.toFixed(5),m.posCount.textContent=String(i),m.negCount.textContent=String(r),m.statusText.textContent="Rendered",Fd(),m.animationWindow&&!m.animationWindow.classList.contains("closed")&&Vr(0),lv(n,e),Tv(n,e),Ld(n,e);const o=n.n>=5||n.l>=3?1.65:1.22;rv(n,e.radius*o,Math.max(Kt,nv(e))),C_(),m.renderButton.disabled=!1,cn()})}function ev(){return Array.from(document.querySelectorAll(".view-grid > .qt-window"))}function Ql(n={}){for(const e of ev())e.classList.remove("closed"),n.restoreLayout?e.classList.remove("minimized","maximized"):e.classList.remove("minimized"),tr(e)}function Js(n=ti){const e=m.viewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?($e.left=-n*t,$e.right=n*t,$e.top=n,$e.bottom=-n):($e.left=-n,$e.right=n,$e.top=n/t,$e.bottom=-n/t),$e.near=.1,$e.far=Math.max(1e3,n*8),$e.updateProjectionMatrix()}function bi(n,e=90){return Math.max(e,n*2.8)}function ec(n=ti){var t,i,r;ti=n;const e=bi(n);$e.position.set(0,0,e),$e.lookAt(0,0,0),Js(n),Ce.target.set(0,0,0),Ce.update(),(t=m.toolXOY)==null||t.classList.add("active"),(i=m.toolYOZ)==null||i.classList.remove("active"),(r=m.toolXOZ)==null||r.classList.remove("active")}function Qs(n=Math.max(3,ti*.45)){const e=m.angularViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(it.left=-n*t,it.right=n*t,it.top=n,it.bottom=-n):(it.left=-n,it.right=n,it.top=n/t,it.bottom=-n/t),it.near=.1,it.far=Math.max(1e3,n*8),it.updateProjectionMatrix()}function tv(n=4){var t;Kt=Math.max(3,n);const e=bi(Kt,40);it.position.set(0,0,e),it.lookAt(0,0,0),Qs(Kt),Lt.target.set(0,0,0),(t=Lt.handleResize)==null||t.call(Lt),Lt.update()}function nv(n){const e=Math.max(4,Math.min(8,n.radius*.55))*.74;return Math.max(5.8,e*1.55)}function iv(...n){var a;const e=new un,t=new un;let i=!1;for(const o of n)o&&((a=o.updateWorldMatrix)==null||a.call(o,!0,!1),t.setFromObject(o),!(!Number.isFinite(t.min.x)||!Number.isFinite(t.max.x))&&(i?e.union(t):e.copy(t),i=!0));if(!i)return 4.2;const r=new wi;return e.getBoundingSphere(r),Math.max(.001,r.radius)}function rv(n,e,t){var o,s,l,c,u;const i=rc(n);ti=e,Kt=Math.max(3,t);const r=bi(e),a=bi(Kt,40);i==="yoz"?($e.position.set(r,0,0),it.position.set(a,0,0)):i==="xoz"?($e.position.set(0,r,0),it.position.set(0,a,0)):($e.position.set(0,0,r),it.position.set(0,0,a)),$e.lookAt(0,0,0),it.lookAt(0,0,0),Js(e),Qs(Kt),Ce.target.set(0,0,0),Lt.target.set(0,0,0),(o=Ce.handleResize)==null||o.call(Ce),(s=Lt.handleResize)==null||s.call(Lt),Ce.update(),Lt.update(),(l=m.toolXOY)==null||l.classList.toggle("active",i==="xoy"),(c=m.toolYOZ)==null||c.classList.toggle("active",i==="yoz"),(u=m.toolXOZ)==null||u.classList.toggle("active",i==="xoz")}function Ad(n=Math.max(2.5,ti*.6)){const e=m.projectionViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(vt.left=-n*t,vt.right=n*t,vt.top=n,vt.bottom=-n):(vt.left=-n,vt.right=n,vt.top=n/t,vt.bottom=-n/t),vt.near=.1,vt.far=1e3,vt.updateProjectionMatrix()}function av(n=Math.max(3,ti*.5)){var e;Kl=n,vt.up.set(0,0,1),vt.position.set(n*.78,-n*1.18,n*.68),vt.lookAt(0,0,0),Ad(n),In.target.set(0,0,0),(e=In.handleResize)==null||e.call(In),In.update()}function tc(n=4.5){const e=m.radialViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Pt.left=-n*t,Pt.right=n*t,Pt.top=n,Pt.bottom=-n):(Pt.left=-n,Pt.right=n,Pt.top=n/t,Pt.bottom=-n/t),Pt.near=.1,Pt.far=1e3,Pt.updateProjectionMatrix()}function sv(n=4.5){var e;Sa=n,Pt.position.set(n*.65,-n*.9,n*.7),Pt.lookAt(0,0,0),tc(n),Zt.target.set(0,0,0),(e=Zt.handleResize)==null||e.call(Zt),Zt.update()}function ov(){var i;if(!nc()||!((i=m.syncRotation)!=null&&i.checked))return;const n=$e.position.clone().sub(Ce.target).normalize(),e=$e.up.clone(),t=(r,a,o,s=40)=>{const l=bi(o,s);r.position.copy(n.clone().multiplyScalar(l)),r.up.copy(e),r.lookAt(0,0,0),a.target.set(0,0,0),r.updateProjectionMatrix()};t(it,Lt,Kt,40),t(vt,In,Kl,30)}function lv(n,e){const t={...e,radius:Math.max(4,Math.min(8,e.radius*.55)),thetaSegments:72,phiSegments:144},{positive:i,negative:r}=_d(n,t);di=Br(i,It(e.positiveColor),1),fi=Br(r,It(e.negativeColor),1),kr(di,{...e,smooth:!0,wireframe:e.wireframe}),kr(fi,{...e,smooth:!0,wireframe:e.wireframe}),di.scale.setScalar(.74),fi.scale.setScalar(.74);const a=Sd(e);di.visible=e.showPositive&&a,fi.visible=e.showNegative&&a,bn.add(di,fi);const o=iv(di,fi),s=Math.max(4.2,o*1.45);J_(s,e.showAxis),Kt=Math.max(Kt,s*1.12)}const aa=(()=>{const n=[255,0,0],e=[255,0,255],t=[255,255,255],i=[0,255,255],r=[0,0,255],a=[],o=(l,c)=>{for(let u=0;u<c;u+=1)a.push(l)},s=(l,c,u)=>{const h=[(c[0]-l[0])/u,(c[1]-l[1])/u,(c[2]-l[2])/u];for(let d=0;d<u;d+=1)a.push([l[0]+d*h[0],l[1]+d*h[1],l[2]+d*h[2]])};return o(n,20),s(n,e,80),s(e,t,25),o(t,5),s(t,i,25),s(i,r,80),o(r,20),a.reverse().map(([l,c,u])=>new Se(l/255,c/255,u/255))})();function eo(n){const t=(Math.max(-1,Math.min(1,n))+1)/2*(aa.length-1),i=Math.max(0,Math.min(aa.length-1,Math.floor(t))),r=Math.max(0,Math.min(aa.length-1,i+1));return aa[i].clone().lerp(aa[r],t-i)}function cv(n,e,t,i,r,a){const o=e.rows,s=o.length,l=2*t/(s-1),c=Math.max(1,Math.round(.4/l)),u=new ji({color:16777215,transparent:!0,opacity:.56}),h=(d,f)=>{const x=-t+2*t*d/(s-1),_=-t+2*t*f/(s-1),g=o[f][d]/a;return new P(x,_,i+g*r+.012)};for(let d=0;d<s;d+=c){const f=[];for(let x=0;x<s;x+=1)f.push(h(x,d));n.add(new xa(new Ke().setFromPoints(f),u))}for(let d=0;d<s;d+=c){const f=[];for(let x=0;x<s;x+=1)f.push(h(d,x));n.add(new xa(new Ke().setFromPoints(f),u))}}function uv(n,e,t,i,r,a=1){const o=e.rows,s=o.length,l=2*t/(s-1),c=[(h,d,f)=>new P(-t+(h+f)*l,-t+d*l,i),(h,d,f)=>new P(-t+(h+1)*l,-t+(d+f)*l,i),(h,d,f)=>new P(-t+(h+1-f)*l,-t+(d+1)*l,i),(h,d,f)=>new P(-t+h*l,-t+(d+1-f)*l,i)],u=[[0,1],[1,2],[2,3],[3,0]];for(const h of r){const d=new ji({color:eo(h).getHex(),transparent:!0,opacity:.95}),f=[];for(let x=0;x<s-1;x+=1)for(let _=0;_<s-1;_+=1){const g=[o[x][_],o[x][_+1],o[x+1][_+1],o[x+1][_]].map(M=>M/a),p=[];for(let M=0;M<4;M+=1){const[v,y]=u[M],T=g[v]-h,E=g[y]-h;if(T===0||T*E<0){const A=Math.abs(T)+Math.abs(E);if(A<1e-12)continue;const R=Math.max(0,Math.min(1,Math.abs(T)/A));p.push(c[M](_,x,R))}}p.length>=2&&(f.push(p[0],p[1]),p.length>=4&&f.push(p[2],p[3]))}f.length&&n.add(new Vl(new Ke().setFromPoints(f),d))}}const Fn={radius:16756736,direction:3538793,point:16776960};function nc(){var n;return!!((n=m.relationMode)!=null&&n.checked)}function hv(){const n=[[qt,wl],[On,Tl],[zn,Al],[bn,Cl]];for(const[e,t]of n)t&&er(e,t);wl=null,Tl=null,Al=null,Cl=null}function sh(n){var i,r;let e=0;const t=new P;return(i=n==null?void 0:n.updateMatrixWorld)==null||i.call(n,!0),(r=n==null?void 0:n.traverse)==null||r.call(n,a=>{var s,l;const o=(l=(s=a.geometry)==null?void 0:s.attributes)==null?void 0:l.position;if(o){a.updateMatrixWorld(!0);for(let c=0;c<o.count;c+=1)t.fromBufferAttribute(o,c).applyMatrix4(a.matrixWorld),e=Math.max(e,t.length())}}),e}function dv(n){const e=Math.max(sh(wt),sh(Tt));jl=e>.001?e*1.02:n.radius*.86}function Cd(){var u,h,d;const n=Jt(),e=Math.max(0,Math.min(100,Number(((u=m.scanRadius)==null?void 0:u.value)??45))),t=Math.max(0,Math.min(180,Number(((h=m.scanTheta)==null?void 0:h.value)??90))),i=(Number(((d=m.scanPhi)==null?void 0:d.value)??0)%360+360)%360,r=Math.max(.001,jl||n.radius),a=r*e/100,o=t*Math.PI/180,s=i*Math.PI/180,l=new P(Math.sin(o)*Math.cos(s),Math.sin(o)*Math.sin(s),Math.cos(o)).normalize(),c=l.clone().multiplyScalar(a);return{options:n,radiusPercent:e,thetaDegrees:t,phiDegrees:i,r:a,maxRadius:r,direction:l,point:c}}function fv(n=Cd()){m.scanRadiusValue&&(m.scanRadiusValue.value=`${Math.round(n.radiusPercent)}%`),m.scanThetaValue&&(m.scanThetaValue.value=`${Math.round(n.thetaDegrees)}°`),m.scanPhiValue&&(m.scanPhiValue.value=`${Math.round(n.phiDegrees)}°`)}function ic(n,e,t=.95){const i=new ji({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new xa(new Ke().setFromPoints(n),i);return r.renderOrder=30,r}function pv(n,e,t=.95){const i=new ji({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new Vl(new Ke().setFromPoints(n),i);return r.renderOrder=30,r}function mv(n,e=16777215,t=.026,i=1){const r=new ld(n,!1,"centripetal",.18),a=new ql(r,Math.max(80,n.length*2),t,8,!1),o=new Ti({color:e,transparent:i<1,opacity:i,depthTest:!1,depthWrite:!1});o.toneMapped=!1;const s=new rt(a,o);return s.renderOrder=31,s}function Il(n,e,t,i=.95){const r=[];for(let o=0;o<=160;o+=1){const s=Math.PI*2*o/160;r.push(new P(n*Math.cos(s),n*Math.sin(s),e))}return ic(r,t,i)}function gv(n,e,t=.74){const i=[],o=s=>{for(let l=0;l<160;l+=1){const c=Math.PI*2*l/160,u=Math.PI*2*(l+1)/160;i.push(s(c),s(u))}};for(let s=1;s<12;s+=1){const l=Math.PI*s/12,c=Math.cos(l)*n,u=Math.sin(l)*n;o(h=>new P(u*Math.cos(h),u*Math.sin(h),c))}for(let s=0;s<6;s+=1){const l=Math.PI*s/6;o(c=>new P(n*Math.sin(c)*Math.cos(l),n*Math.sin(c)*Math.sin(l),n*Math.cos(c)))}return pv(i,e,t)}function to(n,e,t=1){const i=new Ti({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new rt(new Zs(n,24,16),i);return r.renderOrder=32,r}function Rd(n,e,t,i,r){const a=new g_(n,new P(0,0,0),e,t,i,r);return a.traverse(o=>{o.material&&(o.material.depthTest=!1,o.material.depthWrite=!1,o.material.toneMapped=!1,o.renderOrder=31)}),a}function xv(n,e,t){return e==="xoz"?new pe(n.x*t,n.z*t):e==="yoz"?new pe(n.y*t,n.z*t):new pe(n.x*t,n.y*t)}function _v(n,e){const t=n.length();return t>e&&t>1e-9&&n.multiplyScalar(e/t),n}function vv(n){const e=new Rt;n.r>.001&&e.add(gv(n.r,Fn.radius,.72));const t=Math.max(n.r,n.maxRadius*.22,1);e.add(Rd(n.direction,t,Fn.direction,t*.11,t*.035));const i=to(Math.max(.08,n.maxRadius*.018),Fn.point);i.position.copy(n.point),e.add(i),qt.add(e),wl=e}function yv(n){const e=new Rt,t=Math.max(2.4,Kt*.55);e.add(Rd(n.direction,t,Fn.direction,t*.14,t*.045));const i=to(.08,Fn.point);i.position.copy(n.direction.clone().multiplyScalar(t)),e.add(i),bn.add(e),Cl=e}function Mv(n){if(!$n)return;const e=new Rt,t=$n.radius*.92,i=$n.radius/Math.max(1e-4,n.maxRadius),r=Math.max(0,n.r*i),a=r>t?t/r:1,o=i*a,s=Math.min(t,Math.max(0,n.r*o));e.add(Il(s,$n.bottomZ+.18,Fn.radius,.95));const l=_v(xv(n.point,$n.plane,o),t),c=to(.075,Fn.point);c.position.set(l.x,l.y,$n.bottomZ+.28),e.add(c),e.add(ic([new P(0,0,$n.bottomZ+.22),new P(l.x,l.y,$n.bottomZ+.22)],Fn.direction,.82)),On.add(e),Tl=e}function Sv(n){if(!xn)return;const e=new Rt,t=Math.min(xn.radiusScale,n.r/Math.max(1e-4,xn.radialExtent)*xn.radiusScale),i=Pd(ct(),n.r,n.options.radialMode),r=xn.diskZ+xn.curveLift+i/xn.maxAbs*xn.heightScale;e.add(ic([new P(t,0,xn.baseZ-.15),new P(t,0,xn.heightTop)],Fn.radius,.95));const a=to(.07,Fn.point);a.position.set(t,0,r),e.add(a),zn.add(e),Al=e}function no(){hv();const n=Cd();fv(n),nc()&&(vv(n),yv(n),Mv(n),Sv(n))}function bv(n){const e=n.length();if(e<1e-6)return;const t=Math.acos(Math.max(-1,Math.min(1,n.z/e))),i=(Math.atan2(n.y,n.x)+Math.PI*2)%(Math.PI*2);m.scanRadius&&(m.scanRadius.value=String(Math.round(Math.max(0,Math.min(100,e/Math.max(1e-4,jl)*100))))),m.scanTheta&&(m.scanTheta.value=String(Math.round(t*180/Math.PI))),m.scanPhi&&(m.scanPhi.value=String(Math.round(i*180/Math.PI))),no(),Jn(`关联高亮：r=${e.toFixed(2)}, θ=${Math.round(t*180/Math.PI)}°, φ=${Math.round(i*180/Math.PI)}°`)}function Ev(n){var o;if(!nc())return;const e=fn.domElement.getBoundingClientRect(),t=new pe((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),i=new m_;i.params.Points.threshold=Math.max(.12,Jt().radius*.025),i.setFromCamera(t,$e);const r=[wt,Tt,Wi,qi].filter(Boolean),a=i.intersectObjects(r,!0);(o=a[0])!=null&&o.point&&bv(a[0].point)}function rc(n){const e=kn(n.n,n.l,n.m).replace(/^\d+/,"");return e.startsWith("Dyz")||e.startsWith("Fyz2")||e.startsWith("Gz3y")||e.startsWith("Gzy3")||e.startsWith("Gyz3")||e.startsWith("Hyz4")||e.startsWith("Hyz")?"yoz":e.startsWith("Pz")||e.startsWith("Dz2")||e.startsWith("Dxz")||e.startsWith("Fz3")||e.startsWith("Fxz2")||e.startsWith("Gz4")||e.startsWith("Gz3x")||e.startsWith("Gxz3")||e.startsWith("Gzx3")||e.startsWith("Hxz4")||e.startsWith("Hz5")||e.startsWith("Hxz")?"xoz":"xoy"}function wv(n,e,t,i){const r=[],a=e.radius;let o=0,s=0,l=0;for(let c=0;c<i;c+=1){const u=[],h=-a+2*a*c/(i-1);for(let d=0;d<i;d+=1){const f=-a+2*a*d/(i-1);let x=0;t==="xoy"&&(x=il(n,f,h,0)),t==="xoz"&&(x=il(n,f,0,h)),t==="yoz"&&(x=il(n,0,f,h)),o=Math.max(o,Math.abs(x)),s=Math.max(s,x),l=Math.min(l,x),u.push(x)}r.push(u)}return{data:{rows:r,maxAbs:o,maxPositive:s,minNegative:l},scale:1}}function Tv(n,e){On.background=new Se(e.backgroundColor);const t=new Rt,r=ri(n).gridSize*2+1,a=rc(n),{data:o}=wv(n,e,a,r),s=(o.maxPositive>1e-12?o.maxPositive:o.maxAbs||1)/.9,l=[],c=[],u=[],h=Math.min(4.7,e.radius*.42),d=h*1,f=-h*1,x=h*.9;$n={plane:a,radius:h,surfaceZ:d,bottomZ:f,height:x};for(let T=0;T<r;T+=1)for(let E=0;E<r;E+=1){const A=-h+2*h*E/(r-1),R=-h+2*h*T/(r-1),b=o.rows[T][E]/s,S=b;l.push(A,R,d+S*x);const L=eo(b);c.push(L.r,L.g,L.b)}for(let T=0;T<r-1;T+=1)for(let E=0;E<r-1;E+=1){const A=T*r+E,R=A+1,b=A+r,S=b+1;u.push(A,b,R,R,b,S)}const _=new Ke;_.setAttribute("position",new Xe(l,3)),_.setAttribute("color",new Xe(c,3)),_.setIndex(u),_.computeVertexNormals(),da=new rt(_,new Gi({vertexColors:!0,side:pt,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04})),t.add(da),cv(t,o,h,d,x,s);const g=new Rt,p=[];for(let T=0;T<r;T+=1)for(let E=0;E<r;E+=1){const A=-h+2*h*E/(r-1),R=-h+2*h*T/(r-1);p.push(A,R,f+.02)}const M=new Ke;M.setAttribute("position",new Xe(p,3)),M.setAttribute("color",new Xe(c,3)),M.setIndex(u),M.computeVertexNormals();const v=new rt(M,new Ti({vertexColors:!0,side:pt,transparent:!0,opacity:.78}));g.add(v);const y=(T,E,A)=>Array.from({length:A},(R,b)=>T+(E-T)*b/(A-1));uv(g,o,h,f+.08,[...y(-1,0,20),...y(0,1,20)],s),fa=g,t.add(fa),ki=wd(h),ki.scale.z=1,ki.position.z=(d+f)/2,t.add(ki),da=t,fa=null,ki=null,On.add(t),av(h*1.92),no()}function Pd(n,e,t){const i=Math.max(e,1e-4),r=$i(n.n,n.l,n.z,i);return t==="R"?r:t==="R2"?r*r:i*i*r*r}function oh(n,e=11974326){const t=Math.abs(n),i=Math.max(0,Math.min(1,(t-.035)/.72)),r=i*i*(3-2*i);return new Se(e).lerp(eo(n),r)}function Ld(n,e){var y;zn.background=new Se(e.backgroundColor);const t=150,i=80,r=Math.min(e.radius,Math.max(5,ri(n).leastRadius+1.2)),a=[];for(let T=0;T<=t;T+=1)a.push(Pd(n,r*T/t,e.radialMode));const o=Math.max(...a.map(Math.abs),1e-6),s=3.7,l=s*.43,c=-1.25,u=c,h=.08,d=u+s*.72;xn={radialExtent:r,radiusScale:s,heightScale:l,baseZ:c,diskZ:u,curveLift:h,maxAbs:o,heightTop:(e.radialSide?d:u+h)+l+.38};const f=new Rt,x=new rt(new Zs(s,128,48,0,Math.PI*2,Math.PI/2,Math.PI/2),new Gi({color:12105912,side:pt,transparent:!0,opacity:.88,shininess:1,specular:2236962}));x.rotation.x=Math.PI/2,x.position.z=c,f.add(x);const _=new Ke,g=[],p=[],M=[];for(let T=0;T<=i;T+=1){const E=T/i*s,A=Math.round(T/i*t),R=a[A]/o;for(let b=0;b<=128;b+=1){const S=Math.PI*2*b/128,L=E*Math.cos(S),F=E*Math.sin(S);g.push(L,F,u);const U=oh(R,12105912);p.push(U.r,U.g,U.b)}}const v=129;for(let T=0;T<i;T+=1)for(let E=0;E<128;E+=1){const A=T*v+E,R=A+1,b=A+v,S=b+1;M.push(A,b,R,R,b,S)}if(_.setAttribute("position",new Xe(g,3)),_.setAttribute("color",new Xe(p,3)),_.setIndex(M),_.computeVertexNormals(),pa=new rt(_,new Gi({vertexColors:!0,side:pt,transparent:!1,opacity:1,shininess:8,specular:2236962})),f.add(pa),e.radialSide){const T=new rt(new Xr(s,s,Math.max(.1,d-u),160,1,!0),new fd({color:14149604,side:pt,transparent:!0,opacity:.24,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.28,ior:1.45,transmission:.08,specularIntensity:.5,specularColor:16777215}));T.rotation.x=Math.PI/2,T.position.z=(d+u)/2,T.renderOrder=2,f.add(T),f.add(Il(s,d,16777215,.12)),f.add(Il(s,u,16777215,.08));const E=new Ke,A=[],R=[],b=[],S=e.radialSection?64:128,L=(e.radialSection,0),F=e.radialSection?Math.PI:Math.PI*2;for(let B=0;B<=i;B+=1){const G=B/i*s,V=Math.round(B/i*t),Z=a[V]/o,q=d+Z*l;for(let ie=0;ie<=S;ie+=1){const he=L+F*ie/S,$=G*Math.cos(he),fe=G*Math.sin(he);A.push($,fe,q);const se=oh(Z,11711154);R.push(se.r,se.g,se.b)}}const U=S+1;for(let B=0;B<i;B+=1)for(let G=0;G<S;G+=1){const V=B*U+G,Z=V+1,q=V+U,ie=q+1;b.push(V,q,Z,Z,q,ie)}E.setAttribute("position",new Xe(A,3)),E.setAttribute("color",new Xe(R,3)),E.setIndex(b),E.computeVertexNormals(),f.add(new rt(E,new Gi({vertexColors:!0,side:pt,transparent:!1,opacity:1,shininess:10,specular:3355443})))}if(e.radialCurve){const T=[],E=e.radialSide?d:u+h;for(let R=0;R<=t;R+=1){const b=s*R/t,S=E+a[R]/o*l;T.push(new P(b,0,S))}const A=T.slice(1).map(R=>new P(-R.x,0,R.z)).reverse();ma=mv([...A,...T],16777215,e.radialSide?.013:.011),f.add(ma)}if(e.radialAxis){const T=e.radialSide?d:.1;sn=O_(s+.9,s+.45,T,e.radialMode),f.add(sn)}bl=f,zn.add(f),pa=null,ma=null,sn=null,El=null,e.radialSide?(Sa=4.9,Pt.position.set(0,-7.2,d+1.25),Pt.lookAt(0,0,0),tc(Sa),Zt.target.set(0,0,0),(y=Zt.handleResize)==null||y.call(Zt),Zt.update()):sv(5.3),no()}function Os(){Av();const n=(e,t,i,r,a)=>{var s;const o=e.getBoundingClientRect();o.width<2||o.height<2||(t.setSize(o.width,o.height,!1),t.domElement.style.width="100%",t.domElement.style.height="100%",i(a),(s=r.handleResize)==null||s.call(r),r.update())};n(m.viewer,fn,Js,Ce,ti),n(m.angularViewer,Ki,Qs,Lt,Kt),n(m.projectionViewer,Ji,Ad,In,Kl),n(m.radialViewer,$r,tc,Zt,Sa);for(const e of ba)sc(e,e.radius);Cv()}function Av(){const n=document.querySelector(".sidebar"),e=n==null?void 0:n.querySelector(".sidebar-fit");if(!n)return;if(window.matchMedia("(max-width: 900px)").matches){document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");return}document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");const t=getComputedStyle(n),i=n.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),r=(e==null?void 0:e.scrollHeight)||n.scrollHeight;if(!i||!r||r<=i+4)return;const a=Math.max(.72,Math.min(1,(i-4)/r));document.documentElement.style.setProperty("--sidebar-zoom",a.toFixed(3)),document.documentElement.style.setProperty("--sidebar-fit-height",`${Math.ceil(r*a)}px`)}function cn(){requestAnimationFrame(()=>{Os(),requestAnimationFrame(()=>{Os(),Pr()})})}function Id(n){const e=m.sketchCanvas.getBoundingClientRect();return{x:(n.clientX-e.left)/Math.max(1,e.width),y:(n.clientY-e.top)/Math.max(1,e.height)}}function lh(n,e,t,i){if(!e.points.length)return;n.save(),n.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",n.strokeStyle=e.color,n.lineWidth=e.size,n.lineCap="round",n.lineJoin="round",n.beginPath();const r=e.points[0];n.moveTo(r.x*t,r.y*i);for(const a of e.points.slice(1))n.lineTo(a.x*t,a.y*i);e.points.length===1&&n.lineTo(r.x*t+.01,r.y*i+.01),n.stroke(),n.restore()}function jr(){const n=m.sketchCanvas;if(!n)return;const e=n.getContext("2d");e.clearRect(0,0,n.width,n.height);for(const t of Ze.strokes)lh(e,t,n.width,n.height);Ze.currentStroke&&lh(e,Ze.currentStroke,n.width,n.height)}function Cv(){const n=m.sketchCanvas;if(!n)return;const e=n.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,Math.floor(e.width*t)),r=Math.max(220,Math.floor(e.height*t));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r,jr())}function al(n){var e,t;Ze.erasing=n,(e=m.sketchPen)==null||e.classList.toggle("active",!n),(t=m.sketchEraser)==null||t.classList.toggle("active",n)}function Rv(n){var e,t,i,r;m.sketchCanvas&&(n.preventDefault(),(t=(e=m.sketchCanvas).setPointerCapture)==null||t.call(e,n.pointerId),Ze.drawing=!0,Ze.currentStroke={color:((i=m.sketchColor)==null?void 0:i.value)||"#ffffff",size:Number(((r=m.sketchSize)==null?void 0:r.value)||5)*Math.min(window.devicePixelRatio||1,2),mode:Ze.erasing?"erase":"draw",points:[Id(n)]},jr())}function Pv(n){!Ze.drawing||!Ze.currentStroke||(n.preventDefault(),Ze.currentStroke.points.push(Id(n)),jr())}function ch(n){!Ze.drawing||!Ze.currentStroke||(n.preventDefault(),Ze.strokes.push(Ze.currentStroke),Ze.currentStroke=null,Ze.drawing=!1,jr())}function Lv(){var n,e,t,i,r,a,o,s,l,c,u,h,d,f,x,_,g,p,M,v,y,T,E,A,R,b,S,L,F,U,B,G,V,Z,q,ie,he,$,fe,se,H,K,oe,N,Q,re,ge,D;if(m.sketchCanvas){m.sketchCanvas.addEventListener("pointerdown",Rv),m.sketchCanvas.addEventListener("pointermove",Pv),m.sketchCanvas.addEventListener("pointerup",ch),m.sketchCanvas.addEventListener("pointercancel",ch),(n=m.openActivityButton)==null||n.addEventListener("click",()=>oa("predict")),(e=m.openSketchButton)==null||e.addEventListener("click",ac),(t=m.openPredictButton)==null||t.addEventListener("click",()=>oa("predict")),(i=m.openChallengeButton)==null||i.addEventListener("click",()=>oa("challenge"));for(const ae of m.activityModeButtons??[])ae.addEventListener("click",()=>oa(ae.dataset.activityMode));(r=m.startPredictButton)==null||r.addEventListener("click",zy),(a=m.verifyPredictButton)==null||a.addEventListener("click",By),(o=m.scoreCurrentButton)==null||o.addEventListener("click",Ny),(s=m.scoreShowRubricButton)==null||s.addEventListener("click",Fy),(l=m.scoreResetButton)==null||l.addEventListener("click",Oy),(c=m.diagnoseNodesButton)==null||c.addEventListener("click",()=>_s("nodes")),(u=m.diagnosePhaseButton)==null||u.addEventListener("click",()=>_s("phase")),(h=m.diagnoseProjectionButton)==null||h.addEventListener("click",()=>_s("projection"));for(const ae of document.querySelectorAll("[data-diagnosis]"))ae.addEventListener("click",()=>_s(ae.dataset.diagnosis));(d=m.nodeRevealButton)==null||d.addEventListener("click",()=>{m.longitudeNode.checked=!0,m.node.checked=!0,at()}),(f=m.nodeHideButton)==null||f.addEventListener("click",()=>{m.longitudeNode.checked=!1,m.node.checked=!1,at()}),(x=m.compareApplyButton)==null||x.addEventListener("click",()=>{Dd()}),(_=m.compareA)==null||_.addEventListener("change",()=>{Dl("a")}),(g=m.compareB)==null||g.addEventListener("change",()=>{Dl("b")}),(p=m.compareLoadAButton)==null||p.addEventListener("click",()=>{var ae;(ae=m.compareA)!=null&&ae.value&&hh(m.compareA.value,"a")}),(M=m.compareLoadBButton)==null||M.addEventListener("click",()=>{var ae;(ae=m.compareB)!=null&&ae.value&&hh(m.compareB.value,"b")}),(v=m.newChallengeButton)==null||v.addEventListener("click",ky),(y=m.revealChallengeButton)==null||y.addEventListener("click",Vy),(T=m.explainRestartButton)==null||T.addEventListener("click",Dy),(E=m.explainPrevButton)==null||E.addEventListener("click",()=>_h(-1)),(A=m.explainPlayButton)==null||A.addEventListener("click",Iy),(R=m.explainNextButton)==null||R.addEventListener("click",()=>_h(1)),(b=m.tabletLargeButton)==null||b.addEventListener("click",()=>vh(!0)),(S=m.tabletRestoreButton)==null||S.addEventListener("click",()=>vh(!1)),(L=m.tabletScreenshotButton)==null||L.addEventListener("click",oo),(U=(F=m.sketchWindow)==null?void 0:F.querySelector(".window-title"))==null||U.addEventListener("pointerdown",Hy),(G=(B=m.activityWindow)==null?void 0:B.querySelector(".window-title"))==null||G.addEventListener("pointerdown",ae=>sl(ae,m.activityWindow)),(Z=(V=m.formulaWindow)==null?void 0:V.querySelector(".window-title"))==null||Z.addEventListener("pointerdown",ae=>sl(ae,m.formulaWindow)),(ie=(q=m.animationWindow)==null?void 0:q.querySelector(".window-title"))==null||ie.addEventListener("pointerdown",ae=>sl(ae,m.animationWindow)),window.addEventListener("pointermove",Gy),window.addEventListener("pointermove",Wy),window.addEventListener("pointerup",yh),window.addEventListener("pointerup",Mh),window.addEventListener("pointercancel",yh),window.addEventListener("pointercancel",Mh),window.addEventListener("pointerup",Pr),window.addEventListener("pointercancel",Pr),window.addEventListener("blur",Pr),(he=m.sketchPen)==null||he.addEventListener("click",()=>al(!1)),($=m.sketchEraser)==null||$.addEventListener("click",()=>al(!0)),(fe=m.sketchClear)==null||fe.addEventListener("click",()=>{Ze.strokes=[],Ze.currentStroke=null,jr()}),(se=m.annotationModeButton)==null||se.addEventListener("click",Iv),(H=m.openAnimationButton)==null||H.addEventListener("click",Py),(K=m.animationRestartButton)==null||K.addEventListener("click",Ty),(oe=m.animationPrevButton)==null||oe.addEventListener("click",()=>gh(-1)),(N=m.animationPlayButton)==null||N.addEventListener("click",wy),(Q=m.animationNextButton)==null||Q.addEventListener("click",()=>gh(1)),(re=m.animationExportButton)==null||re.addEventListener("click",Ry),(ge=m.openFormulaButton)==null||ge.addEventListener("click",Yv),(D=m.annotationClearButton)==null||D.addEventListener("click",Fv);for(const ae of document.querySelectorAll("[data-annotation-add]"))ae.addEventListener("click",()=>Nv(ae.dataset.annotationAdd));for(const ae of document.querySelectorAll(".annotation-layer"))ae.addEventListener("pointerdown",Ov);window.addEventListener("pointermove",zv),window.addEventListener("pointerup",uh),window.addEventListener("pointercancel",uh),al(!1)}}function Iv(){var n;ce.annotationMode=!ce.annotationMode,document.body.classList.toggle("annotation-mode",ce.annotationMode),(n=m.annotationToolbar)==null||n.classList.toggle("closed",!ce.annotationMode),ce.annotationMode&&Ql(),Jn(ce.annotationMode?"讲解标注：点击下方按钮添加标签，拖动标签调整位置。":"讲解标注已关闭。")}function Dv(n){const t={正相:"orbital",负相:"orbital",节点:"orbital",投影平面:"projection",径向节点:"radial"}[n]||"orbital";return document.querySelector(`[data-annotation-layer="${t}"]`)}function Uv(n){return n==="正相"?"positive":n==="负相"?"negative":n==="节点"?"node":n==="投影平面"?"projection":n==="径向节点"?"radial":""}function Nv(n){const e=Dv(n);if(!e)return;const t=document.createElement("button");t.type="button",t.className=`annotation-note ${Uv(n)}`.trim(),t.textContent=n;const i=e.querySelectorAll(".annotation-note").length;t.style.left=`${12+i%4*12}%`,t.style.top=`${14+i%3*14}%`,e.appendChild(t)}function Fv(){for(const n of document.querySelectorAll(".annotation-layer"))n.replaceChildren()}function Ov(n){var r;const e=n.target.closest(".annotation-note");if(!e||!ce.annotationMode)return;n.preventDefault(),n.stopPropagation();const t=e.closest(".annotation-layer"),i=e.getBoundingClientRect();ce.annotationDrag={note:e,layer:t,offsetX:n.clientX-i.left,offsetY:n.clientY-i.top},(r=e.setPointerCapture)==null||r.call(e,n.pointerId)}function zv(n){const e=ce.annotationDrag;if(!e)return;n.preventDefault();const t=e.layer.getBoundingClientRect(),i=e.note.getBoundingClientRect(),r=Math.max(0,Math.min(t.width-i.width,n.clientX-t.left-e.offsetX)),a=Math.max(0,Math.min(t.height-i.height,n.clientY-t.top-e.offsetY));e.note.style.left=`${r}px`,e.note.style.top=`${a}px`}function uh(){ce.annotationDrag=null}function ac(){m.sketchWindow&&(m.sketchWindow.classList.remove("closed","minimized"),m.sketchWindow.style.zIndex="120",tr(m.sketchWindow),cn())}function io(n){const[e,t,i]=n.split(",").map(Number);return{n:e,l:t,m:i}}function Bv(n){var s;if(!n)return null;let e=ba.find(l=>l.container===n);if(e)return n.contains(e.renderer.domElement)||n.appendChild(e.renderer.domElement),e;const t=new Ai;t.background=new Se(((s=m.backgroundColor)==null?void 0:s.value)||"#668080");const i=new En(-5,5,5,-5,.1,2e3),r=new ni({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.appendChild(r.domElement);const a=Yr(i,r.domElement);Ea(n,a),t.add(new Ci(16777215,.5));const o=new dn(16777215,1.2);return o.position.set(0,0,80),t.add(o),e={container:n,scene:t,camera:i,renderer:r,controls:a,objects:[],radius:5,target:new P,resizeObserver:null},"ResizeObserver"in window&&(e.resizeObserver=new ResizeObserver(()=>sc(e,e.radius)),e.resizeObserver.observe(n)),ba.push(e),e}function kv(n){if(n){for(const e of n.objects)er(n.scene,e);n.objects=[]}}function sc(n,e){var o,s;if(!n)return;const t=n.container.getBoundingClientRect();if(t.width<2||t.height<2)return;n.renderer.setSize(t.width,t.height,!1);const i=t.width/t.height,r=Math.max(3,e);i>=1?(n.camera.left=-r*i,n.camera.right=r*i,n.camera.top=r,n.camera.bottom=-r):(n.camera.left=-r,n.camera.right=r,n.camera.top=r/i,n.camera.bottom=-r/i),n.camera.near=.1,n.camera.far=Math.max(1e3,r*8);const a=n.target??new P;n.camera.position.set(a.x,a.y,a.z+bi(r,40)),n.camera.lookAt(a),n.camera.updateProjectionMatrix(),n.controls.target.copy(a),(s=(o=n.controls).handleResize)==null||s.call(o),n.controls.update()}function Vv(n,e,t){const i=new un;let r=!1;for(const a of e){a.updateMatrixWorld(!0);const o=new un().setFromObject(a);Number.isFinite(o.min.x)&&Number.isFinite(o.min.y)&&Number.isFinite(o.min.z)&&Number.isFinite(o.max.x)&&Number.isFinite(o.max.y)&&Number.isFinite(o.max.z)&&(i.union(o),r=!0)}if(r){const a=i.getBoundingSphere(new wi);n.target.copy(a.center),n.radius=Math.max(2.5,t,a.radius*1.2)}else n.target.set(0,0,0),n.radius=Math.max(2.5,t);sc(n,n.radius)}function zs(n,e,t,i){var _,g;const r=Bv(n);if(!r)return null;const a={...io(e),z:Number((_=m.z)==null?void 0:_.value)||1},o=ri(a),s=Math.max(4,Math.min(10,o.radius*.08)),l=Math.min(78,Math.max(42,Math.round(o.gridSize*.72))),c={iso:o.iso,density:l,radius:o.radius,opacity:.96,smooth:!1,wireframe:!0,cutaway:"none",showPositive:!0,showNegative:!0,positiveColor:m.positiveColor.value,negativeColor:m.negativeColor.value,backgroundColor:((g=m.backgroundColor)==null?void 0:g.value)||"#668080"};r.scene.background=new Se(c.backgroundColor),kv(r);const u=Fs(a,c,1,c.positiveColor),h=Fs(a,c,-1,c.negativeColor),d=s/Math.max(1,o.radius);u.scale.multiplyScalar(d),h.scale.multiplyScalar(d);const f=js(Math.max(1.6,s*.5));r.scene.add(u,h,f),r.objects.push(u,h,f),Vv(r,[u,h,f],s*1.45);const x=kn(a.n,a.l,a.m);return t&&(t.textContent=x),i&&(i.textContent=`${Ls(a.n,a.l)}；n=${a.n}, l=${a.l}, |m|=${Math.abs(a.m)}`),{params:a,label:x,nodes:Ls(a.n,a.l)}}function Dd(){var t,i;const n=zs(m.compareAViewer,(t=m.compareA)==null?void 0:t.value,m.compareATitle,m.compareANotes),e=zs(m.compareBViewer,(i=m.compareB)==null?void 0:i.value,m.compareBTitle,m.compareBNotes);if(n&&e&&m.compareSummary){const r=n.params.l===e.params.l&&Math.abs(n.params.m)===Math.abs(e.params.m);m.compareSummary.textContent=r?`${n.label} 与 ${e.label} 角向类型相同，重点比较径向节点随 n 增加的变化。`:`${n.label} 与 ${e.label} 角向类型不同，重点比较节点面方向、相位分布和对称性。`}}function Dl(n){var e,t;return n==="a"?zs(m.compareAViewer,(e=m.compareA)==null?void 0:e.value,m.compareATitle,m.compareANotes):n==="b"?zs(m.compareBViewer,(t=m.compareB)==null?void 0:t.value,m.compareBTitle,m.compareBNotes):null}function ro(n){const e=io(n);m.n.value=e.n,m.l.value=e.l,m.m.value=Math.abs(e.m),m.cosType.checked=e.m>=0,m.sinType.checked=e.m<0,ct(),Zr(),at()}function hh(n,e){var a,o,s,l;const t=io(n);ro(n),m.mainWindow&&(m.mainWindow.classList.remove("closed","minimized","maximized"),tr(m.mainWindow)),m.positiveLobe&&(m.positiveLobe.checked=!0),m.negativeLobe&&(m.negativeLobe.checked=!0),m.wireframe&&m.smooth&&!m.wireframe.checked&&!m.smooth.checked&&(m.wireframe.checked=!0),ct(),at();const i=Dl(e),r=(i==null?void 0:i.label)||kn(t.n,t.l,t.m);m.compareSummary&&(m.compareSummary.textContent=`已载入主视图：${r}`),e==="a"?(o=(a=m.compareAViewer)==null?void 0:a.closest(".compare-view-card"))==null||o.scrollIntoView({block:"nearest",inline:"nearest"}):e==="b"&&((l=(s=m.compareBViewer)==null?void 0:s.closest(".compare-view-card"))==null||l.scrollIntoView({block:"nearest",inline:"nearest"})),cn()}function oa(n){if(!m.activityWindow)return;const e=n||"predict";m.activityWindow.classList.remove("closed","minimized"),m.activityWindow.style.zIndex="125";for(const i of m.activityPanes??[]){const r=i.dataset.activityPane||i.id.replace(/Pane$/,"");i.classList.toggle("active",r===e)}for(const i of m.activityModeButtons??[])i.classList.toggle("active",i.dataset.activityMode===e);const t={predict:"预测-验证模式",score:"预测评分",diagnosis:"错误诊断",nodes:"节点发现",compare:"轨道对比",challenge:"轨道配对挑战",explain:"原理演示",tablet:"平板课堂"};m.activityTitle&&(m.activityTitle.textContent=t[e]||"课堂互动"),tr(m.activityWindow),cn(),e==="compare"&&requestAnimationFrame(()=>{Dd(),cn()}),e==="explain"?requestAnimationFrame(()=>{Aa(ce.explanationStep,{render:!1}),cn()}):(so(),Ta(null))}const Ud=7200;function Hv(){const n=ct();return kn(n.n,n.l,n.m)}const Gv=["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"],Wv=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];function Nd(n,e){return(n<0?"⁻":"")+String(Math.abs(n)).split("").map(i=>e[Number(i)]??i).join("")}function dh(n){return Nd(n,Gv)}function qv(n){return Nd(n,Wv)}function Xv(n,e){return kn(Math.max(1,n+1),n,e).replace(/^\d+/,"")||`l=${n}, m=${e}`}function oc(n){const e=kn(n.n,n.l,n.m),t=Math.max(0,n.n-n.l-1),i=n.l,r=Xv(n.l,n.m),a=dh(n.n),o=dh(n.l),s=qv(n.m);return{label:e,radialNodes:t,angularNodes:i,main:`Ψ(r,θ,φ) = R${a}${o}(r) · Y${o}${s}(θ,φ)`,radial:`R${a}${o}(r) 决定离原子核不同距离处的振幅变化；当前轨道有 ${t} 个径向节点。`,angular:`${r} 对应的 Y${o}${s}(θ,φ) 决定轨道朝向、节面和正负相位；当前有 ${i} 个角向节点。`,visual:"原子轨道窗口显示 Ψ=+c 和 Ψ=-c 的等值面；轨道投影是在选定平面上看 Ψ；径向分布函数看 r²R²；电子云来自 |Ψ|² 的概率分布。"}}function Fd(){var t,i;if(!m.formulaWindow)return;const n=ct(),e=oc(n);m.formulaOrbitalName&&(m.formulaOrbitalName.textContent=e.label),m.formulaQuantumText&&(m.formulaQuantumText.textContent=`n=${n.n}, l=${n.l}, m=${n.m}`),m.formulaMain&&(m.formulaMain.textContent=e.main),m.formulaRadialText&&(m.formulaRadialText.textContent=e.radial),m.formulaAngularText&&(m.formulaAngularText.textContent=e.angular),m.formulaVisualText&&(m.formulaVisualText.textContent=e.visual),m.formulaRadialNodes&&(m.formulaRadialNodes.textContent=String(e.radialNodes)),m.formulaAngularNodes&&(m.formulaAngularNodes.textContent=String(e.angularNodes)),m.formulaPhaseText&&(m.formulaPhaseText.textContent=`${((t=m.positiveLobe)==null?void 0:t.checked)===!1?"隐藏正相":"正相"} / ${((i=m.negativeLobe)==null?void 0:i.checked)===!1?"隐藏负相":"负相"}`)}function Yv(){m.formulaWindow&&(Fd(),m.formulaWindow.classList.remove("closed","minimized"),m.formulaWindow.style.zIndex="128",tr(m.formulaWindow),cn())}const $v=5200;function ao(){const n=ct(),e=oc(n);return[{focus:"all",title:"同一个波函数，四种观察方式",text:`${e.label} 的四个窗口都来自同一个 Ψ。动画先给出公式，再依次把它变成轨道、投影、径向图和电子云。`},{focus:"radial",title:"径向函数决定离核距离",text:`Rₙₗ(r) 控制波函数随半径的振荡和衰减；当前轨道有 ${e.radialNodes} 个径向节点。`},{focus:"angular",title:"角向函数决定方向和节面",text:`Yₗᵐ(θ,φ) 给出方向上的正负相位分区；当前轨道有 ${e.angularNodes} 个角向节点。`},{focus:"orbital",title:"径向 × 角向，合成三维波函数",text:"R(r) 提供距离变化，Y(θ,φ) 提供方向变化，两者相乘后形成空间中的正相和负相区域。"},{focus:"orbital",title:"抽取 Ψ=±c，得到原子轨道等值面",text:"等值面不是电子轨迹，而是波函数达到某个正值或负值时形成的边界。"},{focus:"projection",title:"把同一个 Ψ 放到平面上，得到轨道投影",text:"投影窗口把空间波函数在代表性平面上读出来，上方是高度曲面，下方是等高线。"},{focus:"orbital",title:"按 |Ψ|² 随机出现，形成电子云",text:"电子云表示电子出现概率。越亮、越密的区域，表示多次测量中电子更容易出现。"}]}function Zv(){const n=m.animationCanvas;if(!n)return null;const e=n.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,e.width||640),r=Math.max(220,e.height||360);(n.width!==Math.round(i*t)||n.height!==Math.round(r*t))&&(n.width=Math.round(i*t),n.height=Math.round(r*t));const a=n.getContext("2d");return a.setTransform(t,0,0,t,0,0),{ctx:a,width:i,height:r}}function lc(n,e,t,i,r,a){const o=Math.min(a,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function jv(n,e,t,i){const r=["公式","径向","角向","合成","等值面","投影","电子云"],o=e-42,s=34,l=o-42;n.save(),n.lineWidth=2,n.strokeStyle="rgba(255,255,255,0.45)",n.beginPath(),n.moveTo(42,s),n.lineTo(o,s),n.stroke(),n.strokeStyle="#ffb000",n.beginPath(),n.moveTo(42,s),n.lineTo(42+l*Math.min(1,(t+i)/(r.length-1)),s),n.stroke(),r.forEach((c,u)=>{const h=42+l*u/(r.length-1),d=u===t;n.fillStyle=d?"#ffb000":"rgba(255,255,255,0.82)",n.beginPath(),n.arc(h,s,d?8:5,0,Math.PI*2),n.fill(),n.fillStyle=d?"#fff4bf":"rgba(255,255,255,0.86)",n.font=d?"bold 14px sans-serif":"13px sans-serif",n.textAlign="center",n.fillText(c,h,s+24)}),n.restore()}function Kv(n,e,t,i){const r=oc(ct()),a=e/2,o=t*.52;n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.92)",lc(n,a-220,o-68,440,136,12),n.fill(),n.fillStyle="#111827",n.textAlign="center",n.font="bold 30px serif",n.fillText(r.main,a,o-12),n.font="18px sans-serif",n.fillStyle="#175cd3",n.fillText("同一个 Ψ 经过不同读取方式，形成四个窗口的图像",a,o+34),n.restore()}function Od(n,e,t,i,r=1){n.save(),n.globalAlpha=Math.min(1,r*1.6),n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText(i,e/2,t*.9),n.restore()}function fh(n,e,t,i=1){const r=ct(),a=Math.max(0,r.n-r.l-1),o=Math.min(e*.82,560),s=76,l=(e-o)/2,c=t*.77;n.save(),n.globalAlpha=Math.min(1,i*1.6),n.fillStyle="rgba(255,255,255,0.9)",lc(n,l,c,o,s,10),n.fill(),n.fillStyle="#111827",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText(`径向节点数 = n - l - 1 = ${r.n} - ${r.l} - 1 = ${a}`,e/2,c+29),n.font="15px sans-serif",n.fillStyle=a>0?"#175cd3":"#667085",n.fillText(a>0?"曲线过零处对应三维空间中的球形径向节面":"当前轨道没有径向节点，因此不会出现球形径向节面",e/2,c+55),n.restore()}function Jv(n,e,t,i,r,a,o=1,s=""){if(!(e!=null&&e.domElement)||!t||!i)return!1;e.render(t,i);const l=e.domElement;if(!l.width||!l.height)return!1;const c=Math.min(r*.92,l.width),u=Math.min(a*.72,c*(l.height/Math.max(1,l.width))),h=Math.min(c,u*(l.width/Math.max(1,l.height))),d=Math.min(u,h*(l.height/Math.max(1,l.width)));return n.save(),n.globalAlpha=Math.min(1,o*1.4),n.drawImage(l,(r-h)/2,a*.12,h,d),s&&(n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText(s,r/2,a*.1)),n.restore(),!0}function Qv(){return Ln||(Nt=new En(-5,5,5,-5,.1,2e3),Ln=new ni({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Ln.outputColorSpace=Ft,Ln.toneMapping=Hr,Ln.toneMappingExposure=1.16),!0}function zd(n,e,t,i,r=!1){if(!Qv())return!1;const a=r?Math.max(180,Math.min(520,Math.floor(e*.92))):Math.max(260,Math.min(700,Math.floor(e*.58))),o=r?Math.max(130,Math.min(360,Math.floor(t*.78))):Math.max(190,Math.min(560,Math.floor(t*.7)));Ln.setSize(a,o,!1);const s=new Se(getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#668080");Ln.setClearColor(s,1);const l=Math.max(4.5,Sa||4.8),c=a/o,u=l*1.05;c>=1?(Nt.left=-u*c,Nt.right=u*c,Nt.top=u,Nt.bottom=-u):(Nt.left=-u,Nt.right=u,Nt.top=u/c,Nt.bottom=-u/c),Nt.near=.1,Nt.far=2e3;const h=i*Math.PI*.75+performance.now()*18e-5;Nt.up.set(0,0,1),Nt.position.set(Math.cos(h)*l*.55,-l*1.35,l*.46+Math.sin(h)*l*.1),Nt.lookAt(0,0,0),Nt.updateProjectionMatrix();const d=sn==null?void 0:sn.visible;sn&&(sn.visible=!1),Ln.render(zn,Nt),sn&&d!=null&&(sn.visible=d),n.save(),n.globalAlpha=Math.min(1,i*1.4);const f=r?(e-a)/2:Math.min(e-a-e*.04,Math.max(e*.36,(e-a)/2+e*.16));return n.drawImage(Ln.domElement,f,t*.12,a,o),n.restore(),!0}function ey(n,e,t,i=1){const r=ct(),a=ri(r),o=Math.max(4,a.leastRadius+1),s=Math.min(300,e*.32),l=150,c=e*.055,u=t*.16,h=22,d=[];for(let p=0;p<=140;p+=1)d.push($i(r.n,r.l,r.z,o*p/140));const f=Math.max(...d.map(p=>Math.abs(p)),1e-4),x=Math.max(2,Math.floor(140*Math.min(1,i)));n.save(),n.globalAlpha=Math.min(1,i*1.7),n.fillStyle="rgba(255,255,255,0.9)",lc(n,c,u,s,l,10),n.fill(),n.strokeStyle="rgba(17,24,39,0.28)",n.lineWidth=1,n.beginPath(),n.moveTo(c+h,u+l*.58),n.lineTo(c+s-h,u+l*.58),n.moveTo(c+h,u+h),n.lineTo(c+h,u+l-h),n.stroke(),n.strokeStyle="#175cd3",n.lineWidth=2.4,n.beginPath();for(let p=0;p<=x;p+=1){const M=c+h+(s-h*2)*p/140,v=u+l*.58-d[p]/f*(l*.36);p===0?n.moveTo(M,v):n.lineTo(M,v)}n.stroke();const _=u+l*.58,g=[];for(let p=2;p<=x;p+=1){const M=d[p-1],v=d[p];if(M===0||M*v<0){const y=Math.abs(M)/Math.max(1e-9,Math.abs(M)+Math.abs(v)),T=c+h+(s-h*2)*(p-1+y)/140;g.push(T)}}g.length&&(n.save(),n.fillStyle="#ffb000",g.forEach(p=>{n.beginPath(),n.arc(p,_,4.2,0,Math.PI*2),n.fill()}),n.restore()),n.fillStyle="#111827",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText("Rnl(r) 函数图像",c+s/2,u+18),n.font="12px sans-serif",n.fillText("横轴 r",c+s-38,u+l-8),n.save(),n.translate(c+12,u+l/2),n.rotate(-Math.PI/2),n.fillText("振幅",0,0),n.restore(),n.restore()}function ty(n,e,t,i){if(zd(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.5),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("径向分布函数的 3D 读法",e/2,t*.1),n.restore(),ey(n,e,t,i),fh(n,e,t,i);return}const r=ct(),a=ri(r),o=Math.max(4,a.leastRadius+1),s=e*.14,l=t*.66,c=e*.72,u=t*.42,h=[];for(let x=0;x<=180;x+=1){const _=o*x/180;h.push($i(r.n,r.l,r.z,_))}const d=Math.max(...h.map(x=>Math.abs(x)),1e-4),f=Math.max(2,Math.floor(180*i));n.save(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2,n.beginPath(),n.moveTo(s,l),n.lineTo(s+c,l),n.moveTo(s,l-u/2),n.lineTo(s,l+u/2),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=3,n.beginPath();for(let x=0;x<=f;x+=1){const _=s+c*x/180,g=l-h[x]/d*(u/2);x===0?n.moveTo(_,g):n.lineTo(_,g)}n.stroke(),n.fillStyle="#ffb000";for(let x=1;x<f;x+=1)if(h[x-1]*h[x]<=0){const _=s+c*x/180;n.beginPath(),n.arc(_,l,4,0,Math.PI*2),n.fill()}n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Rnl(r)",s+c/2,l-u/2-18),n.font="14px sans-serif",n.textAlign="left",n.fillText("r = 0 原子核",s-38,l+24),n.textAlign="right",n.fillText("r 增大：离核距离",s+c,l+28),n.save(),n.translate(s-34,l-u/2+12),n.rotate(-Math.PI/2),n.textAlign="center",n.fillText("纵轴：径向波函数振幅 Rnl(r)",0,0),n.restore(),n.fillStyle="#ffb000",n.beginPath(),n.arc(s,l,5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.88)",n.textAlign="center",n.fillText("曲线穿过横轴的位置，对应径向节面",s+c*.55,l+u/2+22),fh(n,e,t,i),n.restore()}function ny(){Un&&(Un.traverse(n=>{var e,t;n.geometry&&((t=(e=n.geometry).dispose)==null||t.call(e)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{var a;return(a=r.dispose)==null?void 0:a.call(r)})}),Kn==null||Kn.remove(Un),Un=null)}function iy(){if(Rn)return!0;Kn=new Ai,Ht=new En(-5,5,5,-5,.1,2e3),Rn=new ni({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Rn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Rn.outputColorSpace=Ft,Rn.toneMapping=Hr,Rn.toneMappingExposure=1.18,Kn.add(new Ci(16777215,.58));const n=new dn(16777215,1.72);n.position.set(5,-6,8),Kn.add(n);const e=new dn(16777215,.55);return e.position.set(-4,5,4),Kn.add(e),!0}function ry(){const n=ct(),e=Jt(),t=[n.n,n.l,n.m,n.z,e.positiveColor,e.negativeColor].join("|");if(Un&&nh===t)return!0;ny(),nh=t,Un=new Rt;const i={radius:3.8,thetaSegments:80,phiSegments:160},{positive:r,negative:a}=_d(n,i),o=Br(r,It(e.positiveColor),.96),s=Br(a,It(e.negativeColor),.96);return kr(o,{...e,smooth:!0,wireframe:!1}),kr(s,{...e,smooth:!0,wireframe:!1}),Un.add(s,o),Kn.add(Un),!0}function Bd(n,e,t,i){if(!iy()||!ry())return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(620,Math.floor(t*.78)));Rn.setSize(r,a,!1),Rn.setClearColor(0,0);const o=new un().setFromObject(Un);if(o.isEmpty())return!1;const s=o.getCenter(new P),l=Math.max(1,o.getSize(new P).length()*.5),c=r/a,u=l*1.08;c>=1?(Ht.left=-u*c,Ht.right=u*c,Ht.top=u,Ht.bottom=-u):(Ht.left=-u,Ht.right=u,Ht.top=u/c,Ht.bottom=-u/c),Ht.near=.1,Ht.far=Math.max(1e3,l*18);const h=i*Math.PI*.7;Ht.position.copy(s).add(new P(Math.cos(h)*l*1.5,-l*1.9,l*.95+Math.sin(h)*l*.35)),Ht.lookAt(s),Ht.updateProjectionMatrix();const d=.16+.84*(1-(1-Math.min(1,i))**3);return Un.traverse(f=>{var x;((x=f.material)==null?void 0:x.opacity)!=null&&f.isMesh&&(f.material.transparent=!0,f.material.opacity=d,f.material.needsUpdate=!0)}),Rn.render(Kn,Ht),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Rn.domElement,(e-r)/2,t*.08,r,a),n.restore(),!0}function ay(n,e,t,i){var c,u;if(Bd(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)：每一个方向对应一个角向函数值",e/2,t*.12),n.font="14px sans-serif",n.fillStyle=((c=m.positiveColor)==null?void 0:c.value)||"#d83bd8",n.fillText("正相位 Y > 0",e*.32,t*.84),n.fillStyle=((u=m.negativeColor)==null?void 0:u.value)||"#00aeb8",n.fillText("负相位 Y < 0",e*.68,t*.84),n.fillStyle="#ffd15c",n.fillText("两色交界处就是 Y = 0 的角向节面",e/2,t*.9),n.restore();return}const r=ct(),a=e/2,o=t*.56,s=Math.max(2,r.l*2||1),l=Math.min(e,t)*.18*Math.min(1,i*1.7);n.save(),n.translate(a,o),n.rotate(r.m*Math.PI/12);for(let h=0;h<s;h+=1){const d=Math.PI*2*h/s,f=h%2===0,x=l*(r.l===0?1.25:1.55);n.save(),n.rotate(d);const _=n.createRadialGradient(x*.5,0,4,x*.5,0,x);_.addColorStop(0,f?"#ff2bd6":"#00d7ff"),_.addColorStop(1,f?"rgba(255,43,214,0.15)":"rgba(0,215,255,0.15)"),n.fillStyle=_,n.beginPath(),n.ellipse(x*.55,0,x*.62,l*.5,0,0,Math.PI*2),n.fill(),n.restore()}n.strokeStyle="#ffb000",n.lineWidth=2;for(let h=0;h<Math.max(1,r.l);h+=1)n.beginPath(),n.moveTo(-l*2,0),n.lineTo(l*2,0),n.stroke(),n.rotate(Math.PI/Math.max(1,r.l));n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)",0,-l*1.75-20),n.font="14px sans-serif",n.fillStyle="#ff9cff",n.fillText("Y > 0：正相位",l*1.7,-l*.88),n.fillStyle="#72f6ff",n.fillText("Y < 0：负相位",-l*1.7,l*.95),n.fillStyle="#ffd15c",n.fillText("Y = 0：角向节面/节线",0,l*1.9),n.strokeStyle="rgba(255,255,255,0.78)",n.lineWidth=1.1,n.beginPath(),n.moveTo(0,0),n.lineTo(l*1.55,-l*1.15),n.stroke(),n.fillStyle="rgba(255,255,255,0.9)",n.textAlign="left",n.fillText("一个方向由 θ 和 φ 确定",l*1.6,-l*1.18),n.restore()}function sy(n,e,t,i){const r=Math.min(1,i*1.45),a=[e*.2,e*.5,e*.8],o=e*.24,s=t*.32,l=t*.2,c=(h,d,f)=>{n.strokeStyle="#ffb000",n.fillStyle="#ffb000",n.lineWidth=3.2,n.beginPath(),n.moveTo(h,d),n.lineTo(f,d),n.stroke(),n.beginPath(),n.moveTo(f,d),n.lineTo(f-13,d-8),n.lineTo(f-13,d+8),n.closePath(),n.fill()};n.save(),n.globalAlpha=r,n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText("径向",a[0],l-20),n.fillText("角向",a[1],l-20),n.fillText("轨道",a[2],l-20),n.save(),n.translate(a[0]-o/2,l),zd(n,o,s,i,!0),n.restore(),n.save(),n.translate(a[1]-o/2,l),Bd(n,o,s,i),n.restore(),n.save(),n.translate(a[2]-o/2,l),Vd(n,o,s,i),n.restore();const u=l+s*.78;n.fillStyle="#ffb000",n.font="bold 34px serif",n.fillText("×",(a[0]+a[1])/2,u),c(a[1]+o*.46,u,a[2]-o*.48),n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 28px serif",n.fillText("R(r) × Y(θ,φ) = Ψ(x,y,z)",e/2,t*.76),n.restore()}function oy(n,e,t,i){return sy(n,e,t,i)}function ly(n,e,t,i){var l,c;const r=e/2,a=t*.56,o=Math.min(e,t)*.27*Math.min(1,i*1.5),s=ct();n.save(),n.globalAlpha=.96,n.fillStyle=((l=m.negativeColor)==null?void 0:l.value)||"#00a0a0",n.beginPath(),n.ellipse(r-o*.76,a,o*(s.l>2?.9:.78),o*.72,-.12,0,Math.PI*2),n.fill(),n.fillStyle=((c=m.positiveColor)==null?void 0:c.value)||"#b24bb2",n.beginPath(),n.ellipse(r+o*.76,a,o*(s.l>2?.9:.78),o*.72,.12,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2;for(let u=0;u<10;u+=1){const h=a-o*.72+o*1.44*u/9;n.beginPath(),n.moveTo(r-o*1.65,h),n.lineTo(r+o*1.65,h),n.stroke()}n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("抽取 Ψ=+c 与 Ψ=-c",r,a+o+38),n.restore()}function $t(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function kd(n){return{x:n.x*.82+n.y*.34,y:-n.z*.88+n.y*.22}}function cy(n,e=6e4){var r,a;const t=[],i=[new P,new P,new P];for(const o of n)o.object&&((a=(r=o.object).updateWorldMatrix)==null||a.call(r,!0,!0),o.object.traverse(s=>{var d,f;const l=(f=(d=s.geometry)==null?void 0:d.attributes)==null?void 0:f.position;if(!l)return;const c=s.geometry.index,u=Math.floor(c?c.count/3:l.count/3);if(!u)return;s.updateWorldMatrix(!0,!1);const h=Math.max(1,Math.ceil(u/Math.max(1,e/n.length)));for(let x=0;x<u;x+=h){let _=0;const g=[];for(let p=0;p<3;p+=1){const M=c?c.getX(x*3+p):x*3+p;i[p].fromBufferAttribute(l,M).applyMatrix4(s.matrixWorld),_+=i[p].y,g.push(kd(i[p]))}t.push({points:g,color:o.color,depth:_/3})}}));return t}function uy(n,e){const t=new Se(n);return`rgba(${Math.round(t.r*255)}, ${Math.round(t.g*255)}, ${Math.round(t.b*255)}, ${e})`}function hy(n,e,t,i,r){if(!e.length)return!1;let a=1e-4;for(const u of e)for(const h of u.points)a=Math.max(a,Math.abs(h.x),Math.abs(h.y));const o=Math.min(t,i)*.34/a,s=t/2,l=i*.55,c=.14+.76*(1-(1-Math.min(1,r))**3);return n.save(),e.sort((u,h)=>u.depth-h.depth).forEach(u=>{const[h,d,f]=u.points;n.fillStyle=uy(u.color,c),n.beginPath(),n.moveTo(s+h.x*o,l+h.y*o),n.lineTo(s+d.x*o,l+d.y*o),n.lineTo(s+f.x*o,l+f.y*o),n.closePath(),n.fill()}),n.restore(),!0}function ph(){Sn&&(Sn.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(t=>{var i;return(i=t.dispose)==null?void 0:i.call(t)})}),jn==null||jn.remove(Sn),Sn=null)}function dy(){if(Cn)return!0;jn=new Ai,Vt=new En(-5,5,5,-5,.1,2e3),Cn=new ni({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Cn.outputColorSpace=Ft,Cn.toneMapping=Hr,Cn.toneMappingExposure=1.12,jn.add(new Ci(16777215,.56));const n=new dn(16777215,1.65);n.position.set(5,-7,8),jn.add(n);const e=new dn(16777215,.55);return e.position.set(-6,4,5),jn.add(e),!0}function fy(n=1){var r,a,o,s,l,c,u;const e=Jt(),t=[(wt==null?void 0:wt.uuid)||"",(Tt==null?void 0:Tt.uuid)||"",((r=m.positiveColor)==null?void 0:r.value)||"",((a=m.negativeColor)==null?void 0:a.value)||"",e.opacity].join("|");if(Sn&&th===t)return!0;ph(),th=t,Sn=new Rt;const i=[{object:Tt,color:((o=m.negativeColor)==null?void 0:o.value)||"#00a0a0"},{object:wt,color:((s=m.positiveColor)==null?void 0:s.value)||"#b24bb2"}];for(const h of i)(c=(l=h.object)==null?void 0:l.updateWorldMatrix)==null||c.call(l,!0,!0),(u=h.object)==null||u.traverse(d=>{if(!d.isMesh||!d.geometry)return;const f=new Gi({color:It(h.color),emissive:It(h.color),emissiveIntensity:.04,shininess:26,side:pt,transparent:!0,opacity:Math.min(.98,e.opacity)}),x=new rt(d.geometry,f);x.matrix.copy(d.matrixWorld),x.matrixAutoUpdate=!1,Sn.add(x)});return Sn.children.length?(jn.add(Sn),!0):(ph(),!1)}function Vd(n,e,t,i){if(!wt&&!Tt||!dy()||!fy(i))return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(680,Math.floor(t*.82)));Cn.setSize(r,a,!1),Cn.setClearColor(0,0);const o=new un().setFromObject(Sn);if(o.isEmpty())return!1;const s=o.getCenter(new P),l=Math.max(1,o.getSize(new P).length()*.5),c=r/a,u=l*1.16;c>=1?(Vt.left=-u*c,Vt.right=u*c,Vt.top=u,Vt.bottom=-u):(Vt.left=-u,Vt.right=u,Vt.top=u/c,Vt.bottom=-u/c),Vt.near=.1,Vt.far=Math.max(2e3,l*20);const h=performance.now()*42e-5+i*Math.PI*.28;Vt.position.copy(s).add(new P(Math.cos(h)*l*1.65,Math.sin(h)*l*1.65,l*.92)),Vt.lookAt(s),Vt.updateProjectionMatrix();const d=.08+.9*(1-(1-Math.min(1,i))**3);return Sn.traverse(f=>{f.material&&(f.material.opacity=d)}),Cn.render(jn,Vt),n.save(),n.globalAlpha=Math.min(1,i*1.4),n.drawImage(Cn.domElement,(e-r)/2,t*.1,r,a),n.restore(),!0}function py(n,e,t,i){var a,o;if(Vd(n,e,t,i)){n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore();return}const r=cy([{object:Tt,color:((a=m.negativeColor)==null?void 0:a.value)||"#00a0a0"},{object:wt,color:((o=m.positiveColor)==null?void 0:o.value)||"#b24bb2"}]);if(!hy(n,r,e,t,i)){ly(n,e,t,i);return}n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore()}function my(n,e){var a,o;const t=Math.min(1,Math.abs(n)/Math.max(e,1e-8)),i=new Se(n>=0?((a=m.positiveColor)==null?void 0:a.value)||"#b24bb2":((o=m.negativeColor)==null?void 0:o.value)||"#00a0a0"),r=new Se(16777215);return i.lerp(r,1-Math.sqrt(t)),`rgba(${Math.round(i.r*255)}, ${Math.round(i.g*255)}, ${Math.round(i.b*255)}, ${.16+.78*t})`}function gy(n,e,t,i,r,a){var h,d;const o=[.18,.32,.48,.64,.8].filter((f,x,_)=>x/_.length<=a+.08),s=e.length,l=i/(s-1),c=r/(s-1),u=(f,x,_)=>Math.abs(x-f)<1e-9?.5:(_-f)/(x-f);for(const f of[1,-1]){n.strokeStyle=f>0?((h=m.positiveColor)==null?void 0:h.value)||"#ff2bd6":((d=m.negativeColor)==null?void 0:d.value)||"#00d7ff",n.lineWidth=1.45;for(const x of o){const _=f*t*x;n.beginPath();for(let g=0;g<s-1;g+=1)for(let p=0;p<s-1;p+=1){const M=e[g][p],v=e[g][p+1],y=e[g+1][p+1],T=e[g+1][p],E=[];(M-_)*(v-_)<=0&&E.push([p+u(M,v,_),g]),(v-_)*(y-_)<=0&&E.push([p+1,g+u(v,y,_)]),(y-_)*(T-_)<=0&&E.push([p+1-u(y,T,_),g+1]),(T-_)*(M-_)<=0&&E.push([p,g+1-u(T,M,_)]),E.length>=2&&(n.moveTo(-i/2+E[0][0]*l,-r/2+E[0][1]*c),n.lineTo(-i/2+E[1][0]*l,-r/2+E[1][1]*c))}n.stroke()}}}function xy(n,e,t,i){if(Jv(n,Ji,On,vt,e,t,i,"轨道投影的 3D 视图")){Od(n,e,t,"同一个 Ψ 在投影平面上显示为高度曲面和等高线",i);return}const r=ct(),a=Jt(),o=rc(r),s=w_(r,a,o,78),l=e/2,c=t*.58,u=e*.56,h=t*.34,d=document.createElement("canvas");d.width=s.rows.length,d.height=s.rows.length;const f=d.getContext("2d");for(let x=0;x<s.rows.length;x+=1)for(let _=0;_<s.rows.length;_+=1)f.fillStyle=my(s.rows[x][_],s.maxAbs),f.fillRect(_,x,1,1);n.save(),n.translate(l,c),n.transform(1,-.22,.35,.82,0,0),n.fillStyle="rgba(238,244,244,0.88)",n.fillRect(-u/2,-h/2,u,h),n.globalAlpha=Math.min(1,i*1.35),n.drawImage(d,-u/2,-h/2,u,h),n.globalAlpha=Math.min(1,i*1.8),gy(n,s.rows,s.maxAbs,u,h,i),n.strokeStyle="rgba(255,255,255,0.9)",n.strokeRect(-u/2,-h/2,u,h),n.restore(),n.save(),n.globalAlpha=i,n.strokeStyle="#ffb000",n.lineWidth=2,n.beginPath(),n.moveTo(l,t*.22),n.lineTo(l,c-h*.22),n.stroke(),n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText(`当前投影平面：${o.toUpperCase()}，颜色来自 Ψ 的正负`,l,t*.2),n.restore()}function _y(){Nn&&(Nn.traverse(n=>{var e,t,i;n.geometry&&!((e=n.userData)!=null&&e.sharedGeometry)&&((i=(t=n.geometry).dispose)==null||i.call(t)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{var o;return(o=a.dispose)==null?void 0:o.call(a)})}),yi==null||yi.remove(Nn),Nn=null)}function vy(){if(Pn)return!0;yi=new Ai,Gt=new En(-5,5,5,-5,.1,2e3),Pn=new ni({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Pn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Pn.outputColorSpace=Ft,Pn.toneMapping=Hr,Pn.toneMappingExposure=1.18,yi.add(new Ci(16777215,.56));const n=new dn(16777215,1.55);return n.position.set(5,-7,8),yi.add(n),!0}function mh(n,e,t,i=3200){const r=Math.min(e.radius,Math.max(5,ri(n).leastRadius+1.2)),a=r*r;let o=0;for(let c=0;c<520;c+=1){const u=($t(c,51)*2-1)*r,h=($t(c,52)*2-1)*r,d=($t(c,53)*2-1)*r;u*u+h*h+d*d>a||(o=Math.max(o,Math.abs(zt(n,u,h,d))))}const s=[];let l=0;for(;s.length/3<i&&l<i*110;){const c=($t(l,61+t)*2-1)*r,u=($t(l,62+t)*2-1)*r,h=($t(l,63+t)*2-1)*r;if(l+=1,c*c+u*u+h*h>a)continue;const d=zt(n,c,u,h);if(t*d<=0)continue;const f=(Math.abs(d)/Math.max(o,1e-8))**2;$t(l,71+t)>f*.92||s.push(c,u,h)}return{points:s,radius:r}}function yy(){const n=ct(),e=Jt(),t=[n.n,n.l,n.m,n.z,e.radius.toFixed(3),e.iso.toFixed(5),e.positiveColor,e.negativeColor].join("|");if(Nn&&ih===t)return!0;_y(),ih=t,Nn=new Rt;const i=mh(n,e,1),r=mh(n,e,-1),a=Us(i.points,It(e.positiveColor)),o=Us(r.points,It(e.negativeColor));return a.material.uniforms.uSize.value=3.4,o.material.uniforms.uSize.value=3.4,Nn.add(o,a),yi.add(Nn),!0}function My(n,e,t,i,r){if(!vy()||!yy())return!1;const a=Math.max(240,Math.min(900,Math.floor(e))),o=Math.max(180,Math.min(680,Math.floor(t*.82)));Pn.setSize(a,o,!1),Pn.setClearColor(0,0),Nn.traverse(f=>{var x,_,g;(_=(x=f.material)==null?void 0:x.uniforms)!=null&&_.uTime?(f.material.uniforms.uTime.value=r,f.material.opacity=Math.min(1,i*1.3)):((g=f.material)==null?void 0:g.opacity)!=null&&f.isMesh&&(f.material.opacity=.28*Math.min(1,i*1.6),f.material.needsUpdate=!0)});const s=new un().setFromObject(Nn);if(s.isEmpty())return!1;const l=s.getCenter(new P),c=Math.max(1,s.getSize(new P).length()*.5),u=a/o,h=c*1.1;u>=1?(Gt.left=-h*u,Gt.right=h*u,Gt.top=h,Gt.bottom=-h):(Gt.left=-h,Gt.right=h,Gt.top=h/u,Gt.bottom=-h/u),Gt.near=.1,Gt.far=Math.max(2e3,c*20);const d=r*.25;return Gt.position.copy(l).add(new P(Math.cos(d)*c*1.55,-c*1.75,c*.95)),Gt.lookAt(l),Gt.updateProjectionMatrix(),Pn.render(yi,Gt),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Pn.domElement,(e-a)/2,t*.1,a,o),n.restore(),!0}function Sy(n,e,t,i,r){if(My(n,e,t,i,r)){Od(n,e,t,"|Ψ|² 越大，三维空间中的闪烁点越密集",i);return}const a=ct(),o=Jt(),s=Math.min(o.radius,Math.max(5,ri(a).leastRadius+1.2));let l=0;for(let f=0;f<260;f+=1){const x=($t(f,11)*2-1)*s,_=($t(f,12)*2-1)*s,g=($t(f,13)*2-1)*s;x*x+_*_+g*g>s*s||(l=Math.max(l,Math.abs(zt(a,x,_,g))))}const c=e/2,u=t*.55,h=Math.min(e,t)*.34/s,d=Math.floor(1500*i);n.save();for(let f=0;f<d;f+=1){const x=($t(f,21)*2-1)*s,_=($t(f,22)*2-1)*s,g=($t(f,23)*2-1)*s;if(x*x+_*_+g*g>s*s)continue;const p=zt(a,x,_,g),M=(Math.abs(p)/Math.max(l,1e-8))**2;if($t(f,Math.floor(r*4)+31)>M*.9)continue;const v=kd(new P(x,_,g));n.fillStyle=p>=0?"rgba(255,43,214,0.82)":"rgba(0,215,255,0.82)",n.fillRect(c+v.x*h,u+v.y*h,1.9,1.9)}n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("|Ψ|² 越大，随机点越密",c,t*.84),n.restore()}function Vr(n=0){var x,_;const e=Zv();if(!e)return;const{ctx:t,width:i,height:r}=e,a=ce.animationStep,o=ao();t.clearRect(0,0,i,r),t.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#668080",t.fillRect(0,0,i,r);const s=16/9;let l=i,c=l/s;c>r&&(c=r,l=c*s);const u=(i-l)/2,h=(r-c)/2,d=54;t.save(),t.translate(u,h),jv(t,l,a,n),t.translate(0,d);const f=c-d;a===0?Kv(t,l,f,n):a===1?ty(t,l,f,n):a===2?ay(t,l,f,n):a===3?oy(t,l,f,n):a===4?py(t,l,f,n):a===5?xy(t,l,f,n):Sy(t,l,f,n,performance.now()*.001),t.restore(),m.animationProgressFill&&(m.animationProgressFill.style.width=`${Math.round(n*100)}%`),m.animationStepBadge&&(m.animationStepBadge.textContent=`第 ${a+1} 步 / ${o.length} 步`),m.animationTitle&&(m.animationTitle.textContent=((x=o[a])==null?void 0:x.title)||""),m.animationText&&(m.animationText.textContent=a===3?"径向给出离核距离变化，角向给出方向和相位；共同决定同一个三维波函数。":((_=o[a])==null?void 0:_.text)||"")}function by(){ce.animationTimer&&clearTimeout(ce.animationTimer),ce.animationFrame&&cancelAnimationFrame(ce.animationFrame),ce.animationTimer=null,ce.animationFrame=null}function Hd(){var t;if(!ce.animationPlaying)return;const n=ao(),e=Math.min(1,(performance.now()-ce.animationStartedAt)/$v);if(Vr(e),e>=1){if(ce.animationStep>=n.length-1){ce.animationPlaying=!1,m.animationPlayButton&&(m.animationPlayButton.textContent="播放");return}ce.animationStep+=1,ce.animationStartedAt=performance.now(),Ta((t=n[ce.animationStep])==null?void 0:t.focus)}ce.animationFrame=requestAnimationFrame(Hd)}function Ir(n,e=0){var i;const t=ao();ce.animationStep=Math.max(0,Math.min(t.length-1,n)),Ta((i=t[ce.animationStep])==null?void 0:i.focus),Vr(e)}function Ey(){ce.animationPlaying=!0,ce.animationStartedAt=performance.now(),m.animationPlayButton&&(m.animationPlayButton.textContent="暂停"),Hd()}function wa(){ce.animationPlaying=!1,m.animationPlayButton&&(m.animationPlayButton.textContent="播放"),by()}function wy(){ce.animationPlaying?wa():Ey()}function Ty(){wa(),Ir(0,0)}function gh(n){wa(),Ir(ce.animationStep+n,0)}function Ay(){return typeof MediaRecorder>"u"||!MediaRecorder.isTypeSupported?"":["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(n=>MediaRecorder.isTypeSupported(n))||""}function xh(){return new Promise(n=>requestAnimationFrame(n))}function Cy(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),1200)}async function Ry(){var d,f;const n=m.animationCanvas;if(!(n!=null&&n.captureStream)||typeof MediaRecorder>"u"){alert("当前浏览器不支持直接导出视频。建议使用新版 Chrome 或 Edge 打开后再导出。");return}if(ce.animationExporting)return;wa(),ce.animationExporting=!0;const e=ce.animationStep,t=[m.animationRestartButton,m.animationPrevButton,m.animationPlayButton,m.animationNextButton,m.animationExportButton].filter(Boolean),i=t.map(x=>x.disabled),r=((d=m.animationExportButton)==null?void 0:d.textContent)||"导出视频";t.forEach(x=>{x.disabled=!0}),m.animationExportButton&&(m.animationExportButton.textContent="导出中...");const a=ao(),o=[],s=n.captureStream(30),l=Ay(),c={videoBitsPerSecond:6e6,...l?{mimeType:l}:{}};let u;try{u=new MediaRecorder(s,c)}catch{s.getTracks().forEach(_=>_.stop()),alert("当前浏览器无法创建视频录制器，请换用新版 Chrome 或 Edge。"),ce.animationExporting=!1,t.forEach((_,g)=>{_.disabled=i[g]}),m.animationExportButton&&(m.animationExportButton.textContent=r),Ir(e,0);return}const h=new Promise((x,_)=>{u.ondataavailable=g=>{var p;(p=g.data)!=null&&p.size&&o.push(g.data)},u.onerror=()=>_(u.error||new Error("video export failed")),u.onstop=()=>x(new Blob(o,{type:u.mimeType||"video/webm"}))});try{Ir(0,0),await xh(),u.start(250);const x=2600;for(let M=0;M<a.length;M+=1){ce.animationStep=M,Ta((f=a[M])==null?void 0:f.focus);const v=performance.now();let y=0;for(;y<1;)y=Math.min(1,(performance.now()-v)/x),Vr(y),await xh();Vr(1),await new Promise(T=>setTimeout(T,160))}u.state!=="inactive"&&u.stop();const _=await h,g=ct(),p=`HAO-${kn(g.n,g.l,g.m)}-generation.webm`;Cy(_,p)}catch(x){u.state!=="inactive"&&u.stop(),console.error(x),alert("导出视频失败，请刷新页面后再试。")}finally{s.getTracks().forEach(x=>x.stop()),ce.animationExporting=!1,t.forEach((x,_)=>{x.disabled=i[_]}),m.animationExportButton&&(m.animationExportButton.textContent=r),Ir(e,0)}}function Py(){m.animationWindow&&(m.animationWindow.classList.remove("closed","minimized"),m.animationWindow.style.zIndex="129",tr(m.animationWindow),cn(),requestAnimationFrame(()=>Ir(ce.animationStep,0)))}function Gd(){const n=ct(),e=kn(n.n,n.l,n.m),t=n.n-n.l-1,i=n.l;return[{focus:"all",title:`先把 ${e} 看成一个波函数`,formula:"Ψ(r,θ,φ) = Rₙₗ(r) · Yₗᵐ(θ,φ)",text:"四个窗口不是四套不同的计算。它们都来自同一个 Ψ，只是观察方式不同：在空间中取等值面、在平面上取切片、沿半径取曲线，或只看角向部分。",observe:`当前轨道是 ${e}：n=${n.n} 决定尺度和径向层数，l=${n.l} 决定角向节点，m=${n.m} 决定方向和相位分区。`,reason:"先建立“同源”的概念，后面的每张图就不再是孤立图像，而是同一个函数的不同读法。",action:()=>{m.projection&&(m.projection.checked=!0),at()}},{focus:"orbital",title:"原子轨道：找出 Ψ 等于某个值的边界",formula:"Ψ(x,y,z) = +c  和  Ψ(x,y,z) = -c",text:"程序先在三维盒子里布满格点，逐点计算 Ψ。把数值等于正等值和负等值的位置连成曲面，就得到你看到的两个相位区域。",observe:"粉色和蓝色表示波函数符号相反，不表示电荷正负。网格越密，等值面越接近真实边界。",reason:"这一步回答“轨道外形怎么来”：它不是画出来的外壳，而是三维标量场中被等值面算法提取出来的边界。",action:()=>{ys({cloud:!1,wireframe:!0,smooth:!0,projection:!1,node:!1,box:!0})}},{focus:"projection",title:"轨道投影：把同一个 Ψ 放到一个平面上读",formula:"例如：z=0 时，观察 Ψ(x,y,0)",text:"投影窗口先选一个最能显示该轨道对称性的平面，再在平面上逐点计算 Ψ。上方曲面用高度表达数值大小，下方等高线表达相位和节点线。",observe:"看上方曲面的峰、谷，再对照下方等高线：峰对应密集的正相线，谷对应密集的负相线，白色过渡附近就是节点。",reason:"这一步把三维轨道压到二维平面，让学生更容易判断相位分区、节点线和方向。",action:()=>{m.projection&&(m.projection.checked=!0),m.box&&(m.box.checked=!0),m.wireframe&&(m.wireframe.checked=!0),m.smooth&&(m.smooth.checked=!1),at()}},{focus:"radial",title:"径向分布：只问电子离原子核多远",formula:"P(r) = r² · Rₙₗ(r)²",text:"径向分布函数暂时不关心方向，只沿半径统计概率。R 决定波函数随距离怎样振荡，r² 会把球壳体积因素加进去。",observe:`${e} 的径向节点数是 n-l-1 = ${t}。曲线下凹或接近零的位置，通常对应概率分布中的分层。`,reason:"这一步解释“为什么有的轨道外面还有一层”：那通常来自径向部分，而不是角向形状突然改变。",action:()=>{m.radialR&&(m.radialR.checked=!1),m.radialR2&&(m.radialR2.checked=!1),m.radialRdf&&(m.radialRdf.checked=!0),m.radialSection&&(m.radialSection.checked=!0),m.radialSide&&(m.radialSide.checked=!0),m.radialCurve&&(m.radialCurve.checked=!0),at()}},{focus:"angular",title:"角向函数：只看方向怎样分成正负相",formula:"Yₗᵐ(θ,φ) 决定方向、节面和相位",text:"角向函数把半径影响先拿掉，只保留方向上的变化。这样可以直接看到轨道为什么沿某些轴伸展，为什么中间会出现节面。",observe:`${e} 的角向节点数是 l = ${i}。这些节点决定了轨道方向上的分瓣方式。`,reason:"最后再回到原子轨道时，学生就能把外形拆开理解：径向部分决定层数，角向部分决定方向和分瓣。",action:()=>{m.projection&&(m.projection.checked=!1),m.node&&(m.node.checked=!0),m.longitudeNode&&(m.longitudeNode.checked=!0),m.wireframe&&(m.wireframe.checked=!0),at()}}]}function Ta(n){var t;for(const i of document.querySelectorAll(".qt-window.teaching-focus"))i.classList.remove("teaching-focus");const e=n==="all"?["orbital","projection","radial","angular"]:[n];for(const i of e)(t=document.querySelector(`[data-window-name="${i}"]`))==null||t.classList.add("teaching-focus")}function cc(n){m.explainProgressFill&&(m.explainProgressFill.style.width=`${Math.max(0,Math.min(1,n))*100}%`)}function Wd(){ce.explanationTimer&&clearTimeout(ce.explanationTimer),ce.explanationFrame&&cancelAnimationFrame(ce.explanationFrame),ce.explanationTimer=null,ce.explanationFrame=null}function qd(){if(!ce.explanationPlaying)return;const n=(performance.now()-ce.explanationStartedAt)/Ud;cc(n),ce.explanationFrame=requestAnimationFrame(qd)}function Xd(){Wd(),ce.explanationStartedAt=performance.now(),qd(),ce.explanationTimer=setTimeout(()=>{const n=Gd();if(ce.explanationStep>=n.length-1){ce.explanationPlaying=!1,m.explainPlayButton&&(m.explainPlayButton.textContent="播放"),cc(1);return}Aa(ce.explanationStep+1),ce.explanationPlaying&&Xd()},Ud)}function Aa(n,e={}){const t=Gd(),i=Math.max(0,Math.min(t.length-1,n)),r=t[i];ce.explanationStep=i,m.explainStepBadge&&(m.explainStepBadge.textContent=`第 ${i+1} 步 / ${t.length} 步`),m.explainStepTitle&&(m.explainStepTitle.textContent=r.title),m.explainStepText&&(m.explainStepText.textContent=r.text),m.explainFormula&&(m.explainFormula.textContent=r.formula),m.explainObserveText&&(m.explainObserveText.textContent=r.observe),m.explainReasonText&&(m.explainReasonText.textContent=r.reason),m.explainHintText&&(m.explainHintText.textContent=`正在讲解 ${Hv()}。你可以暂停后旋转任意一个窗口，再继续播放。`),Ta(r.focus),cc(0),e.render!==!1&&r.action()}function Ly(){ce.explanationPlaying=!0,m.explainPlayButton&&(m.explainPlayButton.textContent="暂停"),Aa(ce.explanationStep),Xd()}function so(){ce.explanationPlaying=!1,m.explainPlayButton&&(m.explainPlayButton.textContent="播放"),Wd()}function Iy(){ce.explanationPlaying?so():Ly()}function Dy(){so(),ce.explanationStep=0,Aa(0)}function _h(n){so(),Aa(ce.explanationStep+n)}function ys(n){n.cloud!=null&&m.cloud&&(m.cloud.checked=n.cloud),n.wireframe!=null&&m.wireframe&&(m.wireframe.checked=n.wireframe),n.smooth!=null&&m.smooth&&(m.smooth.checked=n.smooth),n.projection!=null&&m.projection&&(m.projection.checked=n.projection),n.node!=null&&(m.node&&(m.node.checked=n.node),m.longitudeNode&&(m.longitudeNode.checked=n.node)),n.box!=null&&m.box&&(m.box.checked=n.box),n.grid3d!=null&&m.grid3d&&(m.grid3d.checked=n.grid3d),at()}function Uy(){return Xt.find(n=>{var e;return n.value===((e=m.predictTarget)==null?void 0:e.value)})||ce.challengeTarget||Xt[0]}function Ny(){const n=Uy(),e=io(n.value),t=e.n-e.l-1,i=e.l,r=Math.max(60,100-t*4-i*3);m.scorePrompt&&(m.scorePrompt.textContent=`${n.label} 参考评分：${r} 分。检查点：径向节点 ${t} 个，角向节点 ${i} 个，相位正负分区清楚，方向与坐标轴一致。`),ro(n.value)}function Fy(){m.scorePrompt&&(m.scorePrompt.textContent="评分标准：节点数 30 分，相位颜色 25 分，空间方向 25 分，投影/截面对应关系 20 分。")}function Oy(){m.scorePrompt&&(m.scorePrompt.textContent="评分会根据当前目标轨道给出节点数、相位、方向和投影四项课堂反馈。")}function _s(n){n==="nodes"?(ys({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!0}),m.diagnosisPrompt&&(m.diagnosisPrompt.textContent="节点诊断：观察径向节点数 n-l-1 与角向节点数 l 是否匹配。")):n==="phase"?(ys({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!1}),m.positiveLobe&&(m.positiveLobe.checked=!0),m.negativeLobe&&(m.negativeLobe.checked=!0),at(),m.diagnosisPrompt&&(m.diagnosisPrompt.textContent="相位诊断：紫色/青色两相表示波函数符号相反，不代表电荷正负。")):(ys({cloud:!1,wireframe:!0,smooth:!1,projection:!0,node:!1,box:!0}),m.diagnosisPrompt&&(m.diagnosisPrompt.textContent="投影诊断：对照上方波函数曲面与底部等高线，判断节点线和相位区。"))}function vh(n){document.body.classList.toggle("tablet-mode",n),n?(lo("tile"),oa("tablet"),Jn("平板课堂：已放大按钮和触控区域。")):Jn("已恢复普通课堂布局。"),cn()}function zy(){const n=Xt.find(e=>e.value===m.predictTarget.value)??Xt[0];ac(),Ze.strokes=[],Ze.currentStroke=null,jr(),m.predictPrompt&&(m.predictPrompt.textContent=`请先在画板中预测 ${n.label} 的形状、相位和节面，再点击“显示验证”。`)}function By(){const n=Xt.find(e=>e.value===m.predictTarget.value)??Xt[0];ro(n.value),m.predictPrompt&&(m.predictPrompt.textContent=`已显示 ${n.label}。请对照画板预测与四个窗口中的真实结果。`)}function ky(){const n=Math.floor(Math.random()*Xt.length);ce.challengeTarget=Xt[n],ro(ce.challengeTarget.value),setTimeout(()=>{m.viewerTitle&&(m.viewerTitle.textContent="原子轨道  ?")},120),m.challengePrompt&&(m.challengePrompt.textContent="观察当前四个窗口中的图像，选择你认为对应的轨道名称。")}function Vy(){const n=ce.challengeTarget||Xt[0],e=Xt.find(r=>r.value===m.challengeGuess.value),t=(e==null?void 0:e.value)===n.value;ce.challengeTotal+=1,t&&(ce.challengeCorrect+=1);const i=`（累计 ${ce.challengeCorrect}/${ce.challengeTotal}）`;m.viewerTitle&&(m.viewerTitle.textContent=`原子轨道  ${n.label}`),m.challengePrompt&&(m.challengePrompt.textContent=t?`回答正确：这是 ${n.label}。`:`还不对。你的答案是 ${(e==null?void 0:e.label)??""}，正确答案是 ${n.label}。`),Jn(`轨道配对 ${i}`)}function Hy(n){var i,r;const e=m.sketchWindow;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();Ze.dragging=!0,Ze.dragPointerId=n.pointerId,Ze.dragOffsetX=n.clientX-t.left,Ze.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function Gy(n){const e=m.sketchWindow;if(!e||!Ze.dragging||Ze.dragPointerId!==null&&n.pointerId!==Ze.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-Ze.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-Ze.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function yh(){Ze.dragging=!1,Ze.dragPointerId=null,Pr()}function sl(n,e){var i,r;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();ce.dragging=!0,ce.dragPointerId=n.pointerId,ce.dragWindow=e,ce.dragOffsetX=n.clientX-t.left,ce.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function Wy(n){const e=ce.dragWindow;if(!ce.dragging||!e||ce.dragPointerId!==null&&n.pointerId!==ce.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-ce.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-ce.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function Mh(){ce.dragging=!1,ce.dragPointerId=null,ce.dragWindow=null,Pr()}function Yd(){F_(performance.now()*.001),Ce.update(),Lt.update(),In.update(),Zt.update(),ov(),fn.render(qt,$e),Ki.render(bn,it),Ji.render(On,vt),$r.render(zn,Pt);for(const n of ba)n.controls.update(),n.renderer.render(n.scene,n.camera);requestAnimationFrame(Yd)}function qy(){const[n,e,t]=m.preset.value.split(",").map(Number);m.n.value=n,m.l.value=e,m.m.value=Math.abs(t),m.cosType.checked=t>=0,m.sinType.checked=t<0,ct(),Zr(),at()}function br(n,e){if(n.checked)for(const t of e)t&&t!==n&&(t.checked=!1)}function $d(n){n==="one"?(m.positiveColor.value="#ff7a00",m.negativeColor.value="#008fb8"):(m.positiveColor.value="#d83bd8",m.negativeColor.value="#00aeb8"),at()}function Xy(){for(const n of[m.cosType,m.sinType])n==null||n.addEventListener("change",()=>{br(n,[m.cosType,m.sinType]),!m.cosType.checked&&!m.sinType.checked&&(m.cosType.checked=!0),at()});for(const n of[m.wireframe,m.smooth])n==null||n.addEventListener("change",()=>{br(n,[m.wireframe,m.smooth]),at()});for(const n of[m.paletteOne,m.paletteTwo])n==null||n.addEventListener("change",()=>{br(n,[m.paletteOne,m.paletteTwo]),!m.paletteOne.checked&&!m.paletteTwo.checked&&(m.paletteTwo.checked=!0),$d(m.paletteOne.checked?"one":"two")});for(const n of[m.xySlice,m.yzSlice,m.xzSlice])n==null||n.addEventListener("change",()=>{br(n,[m.xySlice,m.yzSlice,m.xzSlice]),at()});for(const n of[m.quarter,m.eighth,m.threeQuarter])n==null||n.addEventListener("change",()=>{br(n,[m.quarter,m.eighth,m.threeQuarter]),at()});for(const n of[m.radialR,m.radialR2,m.radialRdf])n==null||n.addEventListener("change",()=>{br(n,[m.radialR,m.radialR2,m.radialRdf]),!m.radialR.checked&&!m.radialR2.checked&&!m.radialRdf.checked&&(m.radialRdf.checked=!0),Td(),Ld(ct(),Jt())})}function oo(){fn.render(qt,$e);const n=document.createElement("a");n.download=`${m.orbitalName.textContent||"hao-orbital"}.png`,n.href=fn.domElement.toDataURL("image/png"),n.click()}function Jn(n){m.statusText.textContent=n}function Yy(){if(m.backgroundColor){(!document.body.contains(m.backgroundColor)||m.backgroundColor.closest(".hidden-control"))&&(document.body.appendChild(m.backgroundColor),Object.assign(m.backgroundColor.style,{position:"fixed",left:"-120px",top:"0",width:"1px",height:"1px",opacity:"0",pointerEvents:"none"}));try{typeof m.backgroundColor.showPicker=="function"?m.backgroundColor.showPicker():m.backgroundColor.click()}catch{m.backgroundColor.click()}}}function Bs(n){document.body.classList.toggle("app-fullscreen",n),Qi.hidden=!n,cn()}async function $y(){var e;nn(),Bs(!0);const n=(e=document.documentElement.requestFullscreen)==null?void 0:e.bind(document.documentElement);if(n)try{await n(),Lr=!0}catch{Lr=!1}}async function Zd(){if(nn(),Bs(!1),document.fullscreenElement&&document.exitFullscreen)try{await document.exitFullscreen()}catch{}Lr=!1}function Zy(){document.body.classList.contains("app-fullscreen")||document.fullscreenElement?Zd():$y()}function nn(){m.menuPopup.hidden=!0,m.menuPopup.innerHTML="";for(const n of m.menuItems)n.classList.remove("active")}function jy(n){const e=n.dataset.menu,t={file:[["重新显示",at],["导出图片",oo],["恢复预设值",()=>{Zr(),at()}]],window:[["全屏/退出全屏",Zy],["画板",ac],["背景颜色",Yy],["显示/隐藏盒子",Ky],["显示/隐藏坐标轴",uc],["重置视角",()=>{ec(),tv(Kt)}]],help:[["当前说明",()=>Jn("顶部按钮已连接到 Web 端功能")],["项目路径",()=>Jn("web/index.html")]],language:[["中文",()=>Jn("语言: 中文")],["English",()=>Jn("Language: English labels are partly available")]]}[e];nn(),n.classList.add("active");const i=n.getBoundingClientRect();m.menuPopup.style.left=`${i.left}px`,m.menuPopup.hidden=!1;for(const[r,a]of t){const o=document.createElement("button");o.type="button",o.textContent=r,o.addEventListener("click",()=>{nn(),a()}),m.menuPopup.appendChild(o)}}function uc(){var e;m.axis.checked=!m.axis.checked;const n=Jt();Ma.visible=n.showAxis,Ma.scale.setScalar(Math.max(1,n.radius/4.5)),mi&&(mi.visible=n.showAxis),(e=m.toolAxis)==null||e.classList.toggle("active",n.showAxis),render()}function Ky(){m.box.checked=!m.box.checked,Jt(),at()}function lo(n){var t,i;Ql({restoreLayout:!0});const e=n==="overlap";m.viewGrid.classList.toggle("overlap-layout",e),(t=m.toolTile)==null||t.classList.toggle("active",!e),(i=m.toolOverlap)==null||i.classList.toggle("active",e),cn()}function tr(n){const e=n.querySelector('[data-window-action="minimize"]'),t=n.querySelector('[data-window-action="maximize"]');e&&(e.textContent=n.classList.contains("minimized")?"□":"－"),t&&(t.textContent=n.classList.contains("maximized")?"❐":"□")}function Jy(n){const e=n.closest(".qt-window");if(!e)return;const t=n.dataset.windowAction;t==="minimize"?(e.classList.toggle("minimized"),e.classList.contains("minimized")&&e.classList.remove("maximized")):t==="maximize"?(e.classList.remove("minimized"),e.classList.toggle("maximized")):t==="close"&&(e.classList.add("closed"),e.classList.remove("minimized","maximized"),e===m.animationWindow&&wa()),tr(e),cn(),e===m.animationWindow&&!e.classList.contains("closed")&&requestAnimationFrame(()=>Vr(0))}function hc(n){var a,o,s;const e=ti,t=Math.max(3,Kt),i=bi(e),r=bi(t,40);n==="xoy"?($e.position.set(0,0,i),it.position.set(0,0,r)):n==="yoz"?($e.position.set(i,0,0),it.position.set(r,0,0)):n==="xoz"&&($e.position.set(0,i,0),it.position.set(0,r,0)),$e.lookAt(0,0,0),it.lookAt(0,0,0),Js(e),Qs(t),Ce.target.set(0,0,0),Lt.target.set(0,0,0),Ce.update(),Lt.update(),(a=m.toolXOY)==null||a.classList.toggle("active",n==="xoy"),(o=m.toolYOZ)==null||o.classList.toggle("active",n==="yoz"),(s=m.toolXOZ)==null||s.classList.toggle("active",n==="xoz")}for(const n of[m.n,m.l,m.m,m.z,m.iso,m.density,m.radius,m.opacity,m.mode,m.slice,m.node,m.axis,m.box,m.positiveColor,m.negativeColor,m.backgroundColor,m.desktopMatch,m.boxSizeDisplay,m.cloud,m.positiveLobe,m.negativeLobe,m.wireframe,m.smooth,m.projection,m.radialSection,m.radialSide,m.radialCurve,m.radialAxis,m.longitudeNode,m.grid3d,m.relationMode,m.syncRotation,m.scanRadius,m.scanTheta,m.scanPhi])n&&n.addEventListener("input",()=>{if(n===m.boxSizeDisplay&&N_(),ct(),Jt(),n===m.backgroundColor){Jl(m.backgroundColor.value);return}if([m.relationMode,m.syncRotation,m.scanRadius,m.scanTheta,m.scanPhi].includes(n)){no();return}[m.wireframe,m.smooth].includes(n)||(n.type==="checkbox"||n.type==="color")&&at()});for(const n of[m.n,m.l,m.m,m.z,m.desktopMatch])n.addEventListener("change",()=>{Zr(),at()});m.preset.addEventListener("input",qy);m.renderButton.addEventListener("click",at);var Sh;(Sh=m.redrawProxyButton)==null||Sh.addEventListener("click",at);var bh;(bh=m.presetButton)==null||bh.addEventListener("click",()=>{Zr(),at()});var Eh;(Eh=m.axisProxyButton)==null||Eh.addEventListener("click",()=>{uc()});var wh;(wh=document.querySelector("#colorProxyButton"))==null||wh.addEventListener("click",()=>{m.paletteOne.checked=!m.paletteOne.checked,m.paletteTwo.checked=!m.paletteOne.checked,$d(m.paletteOne.checked?"one":"two")});m.resetCameraButton.addEventListener("click",()=>ec());m.screenshotButton.addEventListener("click",oo);for(const n of document.querySelectorAll("[data-window-action]"))n.addEventListener("click",e=>{e.stopPropagation(),Jy(n)});for(const n of m.menuItems)n.addEventListener("click",e=>{e.stopPropagation(),jy(n)});document.addEventListener("click",nn);m.menuPopup.addEventListener("click",n=>n.stopPropagation());Qi.addEventListener("click",Zd);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(Lr=!0,Bs(!0)):Lr&&(Lr=!1,Bs(!1))});var Th;(Th=m.toolRender)==null||Th.addEventListener("click",()=>{nn(),at()});var Ah;(Ah=m.toolSave)==null||Ah.addEventListener("click",()=>{nn(),oo()});var Ch;(Ch=m.toolTile)==null||Ch.addEventListener("click",()=>{nn(),lo("tile")});var Rh;(Rh=m.toolOverlap)==null||Rh.addEventListener("click",()=>{nn(),lo("overlap")});var Ph;(Ph=m.toolAxis)==null||Ph.addEventListener("click",()=>{nn(),uc()});var Lh;(Lh=m.toolXOY)==null||Lh.addEventListener("click",()=>{nn(),hc("xoy")});var Ih;(Ih=m.toolYOZ)==null||Ih.addEventListener("click",()=>{nn(),hc("yoz")});var Dh;(Dh=m.toolXOZ)==null||Dh.addEventListener("click",()=>{nn(),hc("xoz")});fn.domElement.addEventListener("click",Ev);window.addEventListener("resize",Os);Xy();Lv();D_();Os();lo("tile");Zr();ec();at();Yd();
