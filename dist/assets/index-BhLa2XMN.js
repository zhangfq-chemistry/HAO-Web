(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="165",ds={ROTATE:0,DOLLY:1,PAN:2},nf=0,Ec=1,rf=2,kh=1,af=2,$n=3,wi=0,Zt=1,ft=2,Si=0,Ar=1,Ir=2,wc=3,Ac=4,of=5,Gi=100,sf=101,lf=102,cf=103,uf=104,hf=200,df=201,ff=202,pf=203,al=204,ol=205,mf=206,gf=207,_f=208,vf=209,xf=210,Mf=211,yf=212,Sf=213,bf=214,Ef=0,wf=1,Af=2,Ao=3,Tf=4,Cf=5,Rf=6,Pf=7,Il=0,Lf=1,If=2,bi=0,Df=1,Nf=2,Uf=3,Hr=4,Ff=5,Of=6,zf=7,Vh=300,Dr=301,Nr=302,sl=303,ll=304,Go=306,cl=1e3,Xi=1001,ul=1002,un=1003,Bf=1004,Fa=1005,xn=1006,fs=1007,Yi=1008,Ai=1009,kf=1010,Vf=1011,To=1012,Hh=1013,Ur=1014,xi=1015,Wo=1016,Gh=1017,Wh=1018,Fr=1020,Hf=35902,Gf=1021,Wf=1022,In=1023,qf=1024,Xf=1025,Tr=1026,Or=1027,Yf=1028,qh=1029,$f=1030,Xh=1031,Yh=1033,ps=33776,ms=33777,gs=33778,_s=33779,Tc=35840,Cc=35841,Rc=35842,Pc=35843,Lc=36196,Ic=37492,Dc=37496,Nc=37808,Uc=37809,Fc=37810,Oc=37811,zc=37812,Bc=37813,kc=37814,Vc=37815,Hc=37816,Gc=37817,Wc=37818,qc=37819,Xc=37820,Yc=37821,vs=36492,$c=36494,jc=36495,jf=36283,Zc=36284,Kc=36285,Jc=36286,Zf=3200,Kf=3201,Dl=0,Jf=1,mi="",Ft="srgb",Ci="srgb-linear",Nl="display-p3",qo="display-p3-linear",Co="linear",ut="srgb",Ro="rec709",Po="p3",ir=7680,Qc=519,Qf=512,ep=513,tp=514,$h=515,np=516,ip=517,rp=518,ap=519,hl=35044,Oa=35048,eu="300 es",Zn=2e3,Lo=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tu=1234567;const Cr=Math.PI/180,Sa=180/Math.PI;function ei(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Ul(n,e){return(n%e+e)%e}function op(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sp(n,e,t){return n!==e?(t-n)/(e-n):0}function ua(n,e,t){return(1-t)*n+t*e}function lp(n,e,t,i){return ua(n,e,1-Math.exp(-t*i))}function cp(n,e=1){return e-Math.abs(Ul(n,e*2)-e)}function up(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function hp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fp(n,e){return n+Math.random()*(e-n)}function pp(n){return n*(.5-Math.random())}function mp(n){n!==void 0&&(tu=n);let e=tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gp(n){return n*Cr}function _p(n){return n*Sa}function vp(n){return(n&n-1)===0&&n!==0}function xp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yp(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),u=s((e+i)/2),h=a((e-i)/2),d=s((e-i)/2),f=a((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nu={DEG2RAD:Cr,RAD2DEG:Sa,generateUUID:ei,clamp:Rt,euclideanModulo:Ul,mapLinear:op,inverseLerp:sp,lerp:ua,damp:lp,pingpong:cp,smoothstep:up,smootherstep:hp,randInt:dp,randFloat:fp,randFloatSpread:pp,seededRandom:mp,degToRad:gp,radToDeg:_p,isPowerOfTwo:vp,ceilPowerOfTwo:xp,floorPowerOfTwo:Mp,setQuaternionFromProperEuler:yp,normalize:tt,denormalize:Mn};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,a,s,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],_=i[8],v=r[0],g=r[3],m=r[6],M=r[1],x=r[4],y=r[7],C=r[2],E=r[5],w=r[8];return a[0]=s*v+o*M+l*C,a[3]=s*g+o*x+l*E,a[6]=s*m+o*y+l*w,a[1]=c*v+u*M+h*C,a[4]=c*g+u*x+h*E,a[7]=c*m+u*y+h*w,a[2]=d*v+f*M+_*C,a[5]=d*g+f*x+_*E,a[8]=d*m+f*y+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,d=o*l-u*a,f=c*a-s*l,_=t*h+i*d+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*s)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*a-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(s*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xs.makeScale(e,t)),this}rotate(e){return this.premultiply(xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(xs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new We;function jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sp(){const n=Io("canvas");return n.style.display="block",n}const iu={};function Fl(n){n in iu||(iu[n]=!0,console.warn(n))}function bp(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const ru=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),au=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),za={[Ci]:{transfer:Co,primaries:Ro,toReference:n=>n,fromReference:n=>n},[Ft]:{transfer:ut,primaries:Ro,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qo]:{transfer:Co,primaries:Po,toReference:n=>n.applyMatrix3(au),fromReference:n=>n.applyMatrix3(ru)},[Nl]:{transfer:ut,primaries:Po,toReference:n=>n.convertSRGBToLinear().applyMatrix3(au),fromReference:n=>n.applyMatrix3(ru).convertLinearToSRGB()}},Ep=new Set([Ci,qo]),nt={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ep.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=za[e].toReference,r=za[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return za[n].primaries},getTransfer:function(n){return n===mi?Co:za[n].transfer}};function Rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rr;class wp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Io("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Rr(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rr(t[i]/255)*255):t[i]=Rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ap=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ys(r[s].image)):a.push(ys(r[s]))}else a=ys(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function ys(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tp=0;class Yt extends Ki{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Xi,r=Xi,a=xn,s=Yi,o=In,l=Ai,c=Yt.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ei(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cl:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cl:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Vh;Yt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,C=(m+1)/2,E=(u+d)/4,w=(h+v)/4,R=(_+g)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(x),r=E/i,a=w/i):y>C?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=E/r,a=R/r):C<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(C),i=w/a,r=R/a),this.set(i,r,a,t),this}let M=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(h-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cp extends Ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Cp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kh extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rp extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=a[s+0],f=a[s+1],_=a[s+2],v=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==_){let g=1-o;const m=l*d+c*f+u*_+h*v,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),E=Math.atan2(C,m*M);g=Math.sin(g*E)/C,o=Math.sin(o*E)/C}const y=o*M;if(l=l*g+d*y,c=c*g+f*y,u=u*g+_*y,h=h*g+v*y,g===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=a[s],d=a[s+1],f=a[s+2],_=a[s+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(a/2),d=l(i/2),f=l(r/2),_=l(a/2);switch(s){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(s-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(a+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(a-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(s-r)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),u=2*(o*t-a*r),h=2*(a*i-s*t);return this.x=t+l*c+s*h-o*u,this.y=i+l*u+o*c-a*h,this.z=r+l*h+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new P,ou=new Gr;class hn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,pn):pn.fromBufferAttribute(a,s),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),ka.subVectors(this.max,Jr),ar.subVectors(e.a,Jr),or.subVectors(e.b,Jr),sr.subVectors(e.c,Jr),si.subVectors(or,ar),li.subVectors(sr,or),Fi.subVectors(ar,sr);let t=[0,-si.z,si.y,0,-li.z,li.y,0,-Fi.z,Fi.y,si.z,0,-si.x,li.z,0,-li.x,Fi.z,0,-Fi.x,-si.y,si.x,0,-li.y,li.x,0,-Fi.y,Fi.x,0];return!bs(t,ar,or,sr,ka)||(t=[1,0,0,0,1,0,0,0,1],!bs(t,ar,or,sr,ka))?!1:(Va.crossVectors(si,li),t=[Va.x,Va.y,Va.z],bs(t,ar,or,sr,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new P,new P,new P,new P,new P,new P,new P,new P],pn=new P,Ba=new hn,ar=new P,or=new P,sr=new P,si=new P,li=new P,Fi=new P,Jr=new P,ka=new P,Va=new P,Oi=new P;function bs(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Oi.fromArray(n,a);const o=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pp=new hn,Qr=new P,Es=new P;class Ri{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Es.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Es)),this.expandByPoint(Qr.copy(e.center).sub(Es))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new P,ws=new P,Ha=new P,ci=new P,As=new P,Ga=new P,Ts=new P;class Xo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ws.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(ws);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ha),o=ci.dot(this.direction),l=-ci.dot(Ha),c=ci.lengthSq(),u=Math.abs(1-s*s);let h,d,f,_;if(u>0)if(h=s*l-o,d=s*o-l,_=a*u,h>=0)if(d>=-_)if(d<=_){const v=1/u;h*=v,d*=v,f=h*(h+s*d+2*o)+d*(s*h+d+2*l)+c}else d=a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;else d=-a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-s*a+o)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(h=Math.max(0,-(s*a+o)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c);else d=s>0?-a:a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ws).addScaledVector(Ha,d),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,r,a){As.subVectors(t,e),Ga.subVectors(i,e),Ts.crossVectors(As,Ga);let s=this.direction.dot(Ts),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ci.subVectors(this.origin,e);const l=o*this.direction.dot(Ga.crossVectors(ci,Ga));if(l<0)return null;const c=o*this.direction.dot(As.cross(ci));if(c<0||l+c>s)return null;const u=-o*ci.dot(Ts);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,r,a,s,o,l,c,u,h,d,f,_,v,g){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,u,h,d,f,_,v,g)}set(e,t,i,r,a,s,o,l,c,u,h,d,f,_,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),a=1/lr.setFromMatrixColumn(e,1).length(),s=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=s*u,f=s*h,_=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=_+f*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,v=c*h;t[0]=d+v*o,t[4]=_*o-f,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=f*o-_,t[6]=v+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,v=c*h;t[0]=d-v*o,t[4]=-s*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=s*u,t[9]=v-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,f=s*h,_=o*u,v=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=_*h+f,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-v*h}else if(e.order==="XZY"){const d=s*l,f=s*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=s*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lp,e,Ip)}lookAt(e,t,i){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ui.crossVectors(i,Qt),ui.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ui.crossVectors(i,Qt)),ui.normalize(),Wa.crossVectors(Qt,ui),r[0]=ui.x,r[4]=Wa.x,r[8]=Qt.x,r[1]=ui.y,r[5]=Wa.y,r[9]=Qt.y,r[2]=ui.z,r[6]=Wa.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],_=i[2],v=i[6],g=i[10],m=i[14],M=i[3],x=i[7],y=i[11],C=i[15],E=r[0],w=r[4],R=r[8],b=r[12],S=r[1],L=r[5],N=r[9],I=r[13],F=r[2],k=r[6],V=r[10],X=r[14],G=r[3],ie=r[7],ne=r[11],oe=r[15];return a[0]=s*E+o*S+l*F+c*G,a[4]=s*w+o*L+l*k+c*ie,a[8]=s*R+o*N+l*V+c*ne,a[12]=s*b+o*I+l*X+c*oe,a[1]=u*E+h*S+d*F+f*G,a[5]=u*w+h*L+d*k+f*ie,a[9]=u*R+h*N+d*V+f*ne,a[13]=u*b+h*I+d*X+f*oe,a[2]=_*E+v*S+g*F+m*G,a[6]=_*w+v*L+g*k+m*ie,a[10]=_*R+v*N+g*V+m*ne,a[14]=_*b+v*I+g*X+m*oe,a[3]=M*E+x*S+y*F+C*G,a[7]=M*w+x*L+y*k+C*ie,a[11]=M*R+x*N+y*V+C*ne,a[15]=M*b+x*I+y*X+C*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],v=e[7],g=e[11],m=e[15];return _*(+a*l*h-r*c*h-a*o*d+i*c*d+r*o*f-i*l*f)+v*(+t*l*f-t*c*d+a*s*d-r*s*f+r*c*u-a*l*u)+g*(+t*c*h-t*o*f-a*s*h+i*s*f+a*o*u-i*c*u)+m*(-r*o*u-t*l*h+t*o*d+r*s*h-i*s*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],v=e[13],g=e[14],m=e[15],M=h*g*c-v*d*c+v*l*f-o*g*f-h*l*m+o*d*m,x=_*d*c-u*g*c-_*l*f+s*g*f+u*l*m-s*d*m,y=u*v*c-_*h*c+_*o*f-s*v*f-u*o*m+s*h*m,C=_*h*l-u*v*l-_*o*d+s*v*d+u*o*g-s*h*g,E=t*M+i*x+r*y+a*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=M*w,e[1]=(v*d*a-h*g*a-v*r*f+i*g*f+h*r*m-i*d*m)*w,e[2]=(o*g*a-v*l*a+v*r*c-i*g*c-o*r*m+i*l*m)*w,e[3]=(h*l*a-o*d*a-h*r*c+i*d*c+o*r*f-i*l*f)*w,e[4]=x*w,e[5]=(u*g*a-_*d*a+_*r*f-t*g*f-u*r*m+t*d*m)*w,e[6]=(_*l*a-s*g*a-_*r*c+t*g*c+s*r*m-t*l*m)*w,e[7]=(s*d*a-u*l*a+u*r*c-t*d*c-s*r*f+t*l*f)*w,e[8]=y*w,e[9]=(_*h*a-u*v*a-_*i*f+t*v*f+u*i*m-t*h*m)*w,e[10]=(s*v*a-_*o*a+_*i*c-t*v*c-s*i*m+t*o*m)*w,e[11]=(u*o*a-s*h*a-u*i*c+t*h*c+s*i*f-t*o*f)*w,e[12]=C*w,e[13]=(u*v*r-_*h*r+_*i*d-t*v*d-u*i*g+t*h*g)*w,e[14]=(_*o*r-s*v*r-_*i*l+t*v*l+s*i*g-t*o*g)*w,e[15]=(s*h*r-u*o*r+u*i*l-t*h*l-s*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,h=o+o,d=a*c,f=a*u,_=a*h,v=s*u,g=s*h,m=o*h,M=l*c,x=l*u,y=l*h,C=i.x,E=i.y,w=i.z;return r[0]=(1-(v+m))*C,r[1]=(f+y)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(f-y)*E,r[5]=(1-(d+m))*E,r[6]=(g+M)*E,r[7]=0,r[8]=(_+x)*w,r[9]=(g-M)*w,r[10]=(1-(d+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=lr.set(r[0],r[1],r[2]).length();const s=lr.set(r[4],r[5],r[6]).length(),o=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/a,u=1/s,h=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=Zn){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,_;if(o===Zn)f=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===Lo)f=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=Zn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(s-a),d=(t+e)*c,f=(i+r)*u;let _,v;if(o===Zn)_=(s+a)*h,v=-2*h;else if(o===Lo)_=a*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lr=new P,mn=new lt,Lp=new P(0,0,0),Ip=new P(1,1,1),ui=new P,Wa=new P,Qt=new P,su=new lt,lu=new Gr;class bn{constructor(e=0,t=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dp=0;const cu=new P,cr=new Gr,qn=new lt,qa=new P,ea=new P,Np=new P,Up=new Gr,uu=new P(1,0,0),hu=new P(0,1,0),du=new P(0,0,1),fu={type:"added"},Fp={type:"removed"},ur={type:"childadded",child:null},Cs={type:"childremoved",child:null};class vt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new P,t=new bn,i=new Gr,r=new P(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new We}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qa.copy(e):qa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ea,qa,this.up):qn.lookAt(qa,ea,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(qn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,Np),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new P,Xn=new P,Rs=new P,Yn=new P,hr=new P,dr=new P,pu=new P,Ps=new P,Ls=new P,Is=new P;class cn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){gn.subVectors(r,t),Xn.subVectors(i,t),Rs.subVectors(e,t);const s=gn.dot(gn),o=gn.dot(Xn),l=gn.dot(Rs),c=Xn.dot(Xn),u=Xn.dot(Rs),h=s*c-o*o;if(h===0)return a.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(s*u-o*l)*d;return a.set(1-f-_,_,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Yn.x),l.addScaledVector(s,Yn.y),l.addScaledVector(o,Yn.z),l)}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),Xn.subVectors(e,t),gn.cross(Xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),gn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;hr.subVectors(r,i),dr.subVectors(a,i),Ps.subVectors(e,i);const l=hr.dot(Ps),c=dr.dot(Ps);if(l<=0&&c<=0)return t.copy(i);Ls.subVectors(e,r);const u=hr.dot(Ls),h=dr.dot(Ls);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(hr,s);Is.subVectors(e,a);const f=hr.dot(Is),_=dr.dot(Is);if(_>=0&&f<=_)return t.copy(a);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(dr,o);const g=u*_-f*h;if(g<=0&&h-u>=0&&f-_>=0)return pu.subVectors(a,r),o=(h-u)/(h-u+(f-_)),t.copy(r).addScaledVector(pu,o);const m=1/(g+v+d);return s=v*m,o=d*m,t.copy(i).addScaledVector(hr,s).addScaledVector(dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Ds(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Ul(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Ds(s,a,e+1/3),this.g=Ds(s,a,e),this.b=Ds(s,a,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ft){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=Jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return nt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Rt(Nt.r*255,0,255))*65536+Math.round(Rt(Nt.g*255,0,255))*256+Math.round(Rt(Nt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,a=Nt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Ft){nt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Xa);const i=ua(hi.h,Xa.h,t),r=ua(hi.s,Xa.s,t),a=ua(hi.l,Xa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new xe;xe.NAMES=Jh;let Op=0;class ii extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Ar,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nn extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new P,Ya=new me;class zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),a=tt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),e}}class Qh extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ed extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ke extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zp=0;const sn=new lt,Ns=new vt,fr=new P,en=new hn,ta=new hn,At=new P;class je extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?ed:Qh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new We().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Ns.lookAt(e),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];en.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(en.min,ta.min),en.expandByPoint(At),At.addVectors(en.max,ta.max),en.expandByPoint(At)):(en.expandByPoint(ta.min),en.expandByPoint(ta.max))}en.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)At.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(At));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(fr.fromBufferAttribute(e,c),At.add(fr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new P,l[R]=new P;const c=new P,u=new P,h=new P,d=new me,f=new me,_=new me,v=new P,g=new P;function m(R,b,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(a,R),f.fromBufferAttribute(a,b),_.fromBufferAttribute(a,S),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(L),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),o[R].add(v),o[b].add(v),o[S].add(v),l[R].add(g),l[b].add(g),l[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,b=M.length;R<b;++R){const S=M[R],L=S.start,N=S.count;for(let I=L,F=L+N;I<F;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new P,y=new P,C=new P,E=new P;function w(R){C.fromBufferAttribute(r,R),E.copy(C);const b=o[R];x.copy(b),x.sub(C.multiplyScalar(C.dot(b))).normalize(),y.crossVectors(E,b);const L=y.dot(l[R])<0?-1:1;s.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,b=M.length;R<b;++R){const S=M[R],L=S.start,N=S.count;for(let I=L,F=L+N;I<F;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new P,a=new P,s=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)d[_++]=c[f++]}return new zt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new je,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new lt,zi=new Xo,$a=new Ri,gu=new P,pr=new P,mr=new P,gr=new P,Us=new P,ja=new P,Za=new me,Ka=new me,Ja=new me,_u=new P,vu=new P,xu=new P,Qa=new P,eo=new P;class $e extends vt{constructor(e=new je,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ja.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],h=a[l];u!==0&&(Us.fromBufferAttribute(h,e),s?ja.addScaledVector(Us,u):ja.addScaledVector(Us.sub(t),u))}t.add(ja)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(a),zi.copy(e.ray).recast(e.near),!($a.containsPoint(zi.origin)===!1&&(zi.intersectSphere($a,gu)===null||zi.origin.distanceToSquared(gu)>(e.far-e.near)**2))&&(mu.copy(a).invert(),zi.copy(e.ray).applyMatrix4(mu),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,v=d.length;_<v;_++){const g=d[_],m=s[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,C=x;y<C;y+=3){const E=o.getX(y),w=o.getX(y+1),R=o.getX(y+2);r=to(this,m,e,i,c,u,h,E,w,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=_,m=v;g<m;g+=3){const M=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);r=to(this,s,e,i,c,u,h,M,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,v=d.length;_<v;_++){const g=d[_],m=s[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,C=x;y<C;y+=3){const E=y,w=y+1,R=y+2;r=to(this,m,e,i,c,u,h,E,w,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=_,m=v;g<m;g+=3){const M=g,x=g+1,y=g+2;r=to(this,s,e,i,c,u,h,M,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Bp(n,e,t,i,r,a,s,o){let l;if(e.side===Zt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===wi,o),l===null)return null;eo.copy(o),eo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:n}}function to(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,pr),n.getVertexPosition(l,mr),n.getVertexPosition(c,gr);const u=Bp(n,e,t,i,pr,mr,gr,Qa);if(u){r&&(Za.fromBufferAttribute(r,o),Ka.fromBufferAttribute(r,l),Ja.fromBufferAttribute(r,c),u.uv=cn.getInterpolation(Qa,pr,mr,gr,Za,Ka,Ja,new me)),a&&(Za.fromBufferAttribute(a,o),Ka.fromBufferAttribute(a,l),Ja.fromBufferAttribute(a,c),u.uv1=cn.getInterpolation(Qa,pr,mr,gr,Za,Ka,Ja,new me)),s&&(_u.fromBufferAttribute(s,o),vu.fromBufferAttribute(s,l),xu.fromBufferAttribute(s,c),u.normal=cn.getInterpolation(Qa,pr,mr,gr,_u,vu,xu,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};cn.getNormal(pr,mr,gr,h.normal),u.face=h}return u}class Wr extends je{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,s,a,0),_("z","y","x",1,-1,i,t,-e,s,a,1),_("x","z","y",1,1,e,i,t,r,s,2),_("x","z","y",1,-1,e,i,-t,r,s,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2));function _(v,g,m,M,x,y,C,E,w,R,b){const S=y/w,L=C/R,N=y/2,I=C/2,F=E/2,k=w+1,V=R+1;let X=0,G=0;const ie=new P;for(let ne=0;ne<V;ne++){const oe=ne*L-I;for(let Q=0;Q<k;Q++){const pe=Q*S-N;ie[v]=pe*M,ie[g]=oe*x,ie[m]=F,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[g]=0,ie[m]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Q/w),h.push(1-ne/R),X+=1}}for(let ne=0;ne<R;ne++)for(let oe=0;oe<w;oe++){const Q=d+oe+k*ne,pe=d+oe+k*(ne+1),W=d+(oe+1)+k*(ne+1),K=d+(oe+1)+k*ne;l.push(Q,pe,K),l.push(pe,W,K),G+=6}o.addGroup(f,G,b),f+=G,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=zr(n[t]);for(const r in i)e[r]=i[r]}return e}function kp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function td(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Vp={clone:zr,merge:Wt};var Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nd extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new P,Mu=new me,yu=new me;class vn extends nd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,yu),t.subVectors(yu,Mu)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,vr=1;class Wp extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(_r,vr,e,t);r.layers=this.layers,this.add(r);const a=new vn(_r,vr,e,t);a.layers=this.layers,this.add(a);const s=new vn(_r,vr,e,t);s.layers=this.layers,this.add(s);const o=new vn(_r,vr,e,t);o.layers=this.layers,this.add(o);const l=new vn(_r,vr,e,t);l.layers=this.layers,this.add(l);const c=new vn(_r,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class id extends Yt{constructor(e,t,i,r,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qp extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new id(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wr(5,5,5),a=new ti({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Si});a.uniforms.tEquirect.value=t;const s=new $e(r,a),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=xn),new Wp(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const Fs=new P,Xp=new P,Yp=new We;class it{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fs.subVectors(i,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yp.getNormalMatrix(e),r=this.coplanarPoint(Fs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Ri,no=new P;class zl{constructor(e=new it,t=new it,i=new it,r=new it,a=new it,s=new it){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],_=r[9],v=r[10],g=r[11],m=r[12],M=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-a,d-c,g-f,y-m).normalize(),i[1].setComponents(l+a,d+c,g+f,y+m).normalize(),i[2].setComponents(l+s,d+u,g+_,y+M).normalize(),i[3].setComponents(l-s,d-u,g-_,y-M).normalize(),i[4].setComponents(l-o,d-h,g-v,y-x).normalize(),t===Zn)i[5].setComponents(l+o,d+h,g+v,y+x).normalize();else if(t===Lo)i[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(no.x=r.normal.x>0?e.max.x:e.min.x,no.y=r.normal.y>0?e.max.y:e.min.y,no.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rd(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function $p(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),h.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let f=0,_=d.length;f<_;f++){const v=d[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class Yo extends je{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],v=[],g=[];for(let m=0;m<u;m++){const M=m*d-s;for(let x=0;x<c;x++){const y=x*h-a;_.push(y,-M,0),v.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const x=M+c*m,y=M+c*(m+1),C=M+1+c*(m+1),E=M+1+c*m;f.push(x,y,E),f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
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
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vm=`#define PI 3.141592653589793
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`
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
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
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
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,Ym=`struct PhysicalMaterial {
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
}`,$m=`
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
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
}`,tg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
}`,sg=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,fg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,_g=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,yg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:jp,alphahash_pars_fragment:Zp,alphamap_fragment:Kp,alphamap_pars_fragment:Jp,alphatest_fragment:Qp,alphatest_pars_fragment:em,aomap_fragment:tm,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:rm,begin_vertex:am,beginnormal_vertex:om,bsdfs:sm,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:um,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:vm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:Mm,displacementmap_pars_vertex:ym,displacementmap_vertex:Sm,emissivemap_fragment:bm,emissivemap_pars_fragment:Em,colorspace_fragment:wm,colorspace_pars_fragment:Am,envmap_fragment:Tm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Rm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Vm,envmap_vertex:Lm,fog_vertex:Im,fog_pars_vertex:Dm,fog_fragment:Nm,fog_pars_fragment:Um,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Bm,lights_pars_begin:km,lights_toon_fragment:Hm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Wm,lights_phong_pars_fragment:qm,lights_physical_fragment:Xm,lights_physical_pars_fragment:Ym,lights_fragment_begin:$m,lights_fragment_maps:jm,lights_fragment_end:Zm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:e0,map_fragment:t0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:r0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:o0,morphinstance_vertex:s0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:u0,morphtarget_vertex:h0,normal_fragment_begin:d0,normal_fragment_maps:f0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:y0,opaque_fragment:S0,packing:b0,premultiplied_alpha_fragment:E0,project_vertex:w0,dithering_fragment:A0,dithering_pars_fragment:T0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:R0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:L0,shadowmap_vertex:I0,shadowmask_pars_fragment:D0,skinbase_vertex:N0,skinning_pars_vertex:U0,skinning_vertex:F0,skinnormal_vertex:O0,specularmap_fragment:z0,specularmap_pars_fragment:B0,tonemapping_fragment:k0,tonemapping_pars_fragment:V0,transmission_fragment:H0,transmission_pars_fragment:G0,uv_pars_fragment:W0,uv_pars_vertex:q0,uv_vertex:X0,worldpos_vertex:Y0,background_vert:$0,background_frag:j0,backgroundCube_vert:Z0,backgroundCube_frag:K0,cube_vert:J0,cube_frag:Q0,depth_vert:eg,depth_frag:tg,distanceRGBA_vert:ng,distanceRGBA_frag:ig,equirect_vert:rg,equirect_frag:ag,linedashed_vert:og,linedashed_frag:sg,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:ug,meshlambert_frag:hg,meshmatcap_vert:dg,meshmatcap_frag:fg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:_g,meshphysical_vert:vg,meshphysical_frag:xg,meshtoon_vert:Mg,meshtoon_frag:yg,points_vert:Sg,points_frag:bg,shadow_vert:Eg,shadow_frag:wg,sprite_vert:Ag,sprite_frag:Tg},ge={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Tn={basic:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Wt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Wt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Wt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Wt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Wt([ge.points,ge.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Wt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Wt([ge.common,ge.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Wt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Wt([ge.sprite,ge.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Wt([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Wt([ge.lights,ge.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Tn.physical={uniforms:Wt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const io={r:0,b:0,g:0},ki=new bn,Cg=new lt;function Rg(n,e,t,i,r,a,s){const o=new xe(0);let l=a===!0?0:1,c,u,h=null,d=0,f=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const y=_(M);y===null?m(o,l):y&&y.isColor&&(m(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===Go)?(u===void 0&&(u=new $e(new Wr(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:zr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ki.copy(x.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(ki)),u.material.toneMapped=nt.getTransfer(y.colorSpace)!==ut,(h!==y||d!==y.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $e(new Yo(2,2),new ti({name:"BackgroundMaterial",uniforms:zr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=nt.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(io,td(n)),i.buffers.color.setClear(io.r,io.g,io.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:v,addToRenderList:g}}function Pg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let a=r,s=!1;function o(S,L,N,I,F){let k=!1;const V=h(I,N,L);a!==V&&(a=V,c(a.object)),k=f(S,I,N,F),k&&_(S,I,N,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(k||s)&&(s=!1,y(S,L,N,I),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,L,N){const I=N.wireframe===!0;let F=i[S.id];F===void 0&&(F={},i[S.id]=F);let k=F[L.id];k===void 0&&(k={},F[L.id]=k);let V=k[I];return V===void 0&&(V=d(l()),k[I]=V),V}function d(S){const L=[],N=[],I=[];for(let F=0;F<t;F++)L[F]=0,N[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:I,object:S,attributes:{},index:null}}function f(S,L,N,I){const F=a.attributes,k=L.attributes;let V=0;const X=N.getAttributes();for(const G in X)if(X[G].location>=0){const ne=F[G];let oe=k[G];if(oe===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),ne===void 0||ne.attribute!==oe||oe&&ne.data!==oe.data)return!0;V++}return a.attributesNum!==V||a.index!==I}function _(S,L,N,I){const F={},k=L.attributes;let V=0;const X=N.getAttributes();for(const G in X)if(X[G].location>=0){let ne=k[G];ne===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor));const oe={};oe.attribute=ne,ne&&ne.data&&(oe.data=ne.data),F[G]=oe,V++}a.attributes=F,a.attributesNum=V,a.index=I}function v(){const S=a.newAttributes;for(let L=0,N=S.length;L<N;L++)S[L]=0}function g(S){m(S,0)}function m(S,L){const N=a.newAttributes,I=a.enabledAttributes,F=a.attributeDivisors;N[S]=1,I[S]===0&&(n.enableVertexAttribArray(S),I[S]=1),F[S]!==L&&(n.vertexAttribDivisor(S,L),F[S]=L)}function M(){const S=a.newAttributes,L=a.enabledAttributes;for(let N=0,I=L.length;N<I;N++)L[N]!==S[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function x(S,L,N,I,F,k,V){V===!0?n.vertexAttribIPointer(S,L,N,F,k):n.vertexAttribPointer(S,L,N,I,F,k)}function y(S,L,N,I){v();const F=I.attributes,k=N.getAttributes(),V=L.defaultAttributeValues;for(const X in k){const G=k[X];if(G.location>=0){let ie=F[X];if(ie===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const ne=ie.normalized,oe=ie.itemSize,Q=e.get(ie);if(Q===void 0)continue;const pe=Q.buffer,W=Q.type,K=Q.bytesPerElement,ce=W===n.INT||W===n.UNSIGNED_INT||ie.gpuType===Hh;if(ie.isInterleavedBufferAttribute){const O=ie.data,re=O.stride,ve=ie.offset;if(O.isInstancedInterleavedBuffer){for(let Se=0;Se<G.locationSize;Se++)m(G.location+Se,O.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Se=0;Se<G.locationSize;Se++)g(G.location+Se);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Se=0;Se<G.locationSize;Se++)x(G.location+Se,oe/G.locationSize,W,ne,re*K,(ve+oe/G.locationSize*Se)*K,ce)}else{if(ie.isInstancedBufferAttribute){for(let O=0;O<G.locationSize;O++)m(G.location+O,ie.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let O=0;O<G.locationSize;O++)g(G.location+O);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let O=0;O<G.locationSize;O++)x(G.location+O,oe/G.locationSize,W,ne,oe*K,oe/G.locationSize*O*K,ce)}}else if(V!==void 0){const ne=V[X];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(G.location,ne);break;case 3:n.vertexAttrib3fv(G.location,ne);break;case 4:n.vertexAttrib4fv(G.location,ne);break;default:n.vertexAttrib1fv(G.location,ne)}}}}M()}function C(){R();for(const S in i){const L=i[S];for(const N in L){const I=L[N];for(const F in I)u(I[F].object),delete I[F];delete L[N]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const N in L){const I=L[N];for(const F in I)u(I[F].object),delete I[F];delete L[N]}delete i[S.id]}function w(S){for(const L in i){const N=i[L];if(N[S.id]===void 0)continue;const I=N[S.id];for(const F in I)u(I[F].object),delete I[F];delete N[S.id]}}function R(){b(),s=!0,a!==r&&(a=r,c(a.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function Lg(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(c[f],u[f]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,i,1)}}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)s(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v];for(let v=0;v<d.length;v++)t.update(_,i,d[v])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ig(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==In&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const w=E===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ai&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==xi&&!w)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function Dg(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new it,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!r||_===null||_.length===0||a&&!g)a?u(null):c();else{const M=a?0:i,x=M*4;let y=m.clippingState||null;l.value=y,y=u(_,d,x,f);for(let C=0;C!==x;++C)y[C]=t[C];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const m=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=f;x!==v;++x,y+=4)s.copy(h[x]).applyMatrix4(M,o),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Ng(n){let e=new WeakMap;function t(s,o){return o===sl?s.mapping=Dr:o===ll&&(s.mapping=Nr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===sl||o===ll)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new qp(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class En extends nd{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wr=4,Su=[.125,.215,.35,.446,.526,.582],Wi=20,Os=new En,bu=new xe;let zs=null,Bs=0,ks=0,Vs=!1;const Hi=(1+Math.sqrt(5))/2,xr=1/Hi,Eu=[new P(-Hi,xr,0),new P(Hi,xr,0),new P(-xr,0,Hi),new P(xr,0,Hi),new P(0,Hi,-xr),new P(0,Hi,xr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){zs=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),Vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zs,Bs,ks),this._renderer.xr.enabled=Vs,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zs=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),Vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Wo,format:In,colorSpace:Ci,depthBuffer:!1},r=Au(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(a)),this._blurMaterial=Fg(a,e,t)}return r}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Os)}_sceneToCubeUV(e,t,i,r){const o=new vn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(bu),u.toneMapping=bi,u.autoClear=!1;const f=new nn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),_=new $e(new Wr,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(bu),v=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;ro(r,M*x,m>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Dr||e.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new $e(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;ro(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Os)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Eu[(r-a-1)%Eu.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $e(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),v=a/_,g=isFinite(a)?1+Math.floor(u*v):Wi;g>Wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wi}`);const m=[];let M=0;for(let w=0;w<Wi;++w){const R=w/v,b=Math.exp(-R*R/2);m.push(b),w===0?M+=b:w<g&&(M+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-wr?r-x+wr:0),E=4*(this._cubeSize-y);ro(t,C,E,3*y,2*y),l.setRenderTarget(t),l.render(h,Os)}}function Ug(n){const e=[],t=[],i=[];let r=n;const a=n-wr+1+Su.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-wr?l=Su[s-n+wr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,v=3,g=2,m=1,M=new Float32Array(v*_*f),x=new Float32Array(g*_*f),y=new Float32Array(m*_*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,R=E>2?0:-1,b=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(b,v*_*E),x.set(d,g*_*E);const S=[E,E,E,E,E,E];y.set(S,m*_*E)}const C=new je;C.setAttribute("position",new zt(M,v)),C.setAttribute("uv",new zt(x,g)),C.setAttribute("faceIndex",new zt(y,m)),e.push(C),r>wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Au(n,e,t){const i=new Zi(n,e,t);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fg(n,e,t){const i=new Float32Array(Wi),r=new P(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Tu(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Cu(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function Og(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===sl||l===ll,u=l===Dr||l===Nr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new wu(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new wu(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function zg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bg(n,e,t,i){const r={},a=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}d.removeEventListener("dispose",s),delete r[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const v=f[_];for(let g=0,m=v.length;g<m;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,_=h.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let x=0,y=M.length;x<y;x+=3){const C=M[x+0],E=M[x+1],w=M[x+2];d.push(C,E,E,w,w,C)}}else if(_!==void 0){const M=_.array;v=_.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const C=x+0,E=x+1,w=x+2;d.push(C,E,E,w,w,C)}}else return;const g=new(jh(d)?ed:Qh)(d,1);g.version=v;const m=a.get(h);m&&e.remove(m),a.set(h,g)}function u(h){const d=a.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function kg(n,e,t){let i;function r(d){i=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,f){n.drawElements(i,f,a,d*s),t.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,a,d*s,_),t.update(f,i,_))}function u(d,f,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<_;g++)this.render(d[g]/s,f[g]);else{v.multiDrawElementsWEBGL(i,f,0,a,d,0,_);let g=0;for(let m=0;m<_;m++)g+=f[m];t.update(g,i,1)}}function h(d,f,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/s,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,a,d,0,v,0,_);let m=0;for(let M=0;M<_;M++)m+=f[M];for(let M=0;M<v.length;M++)t.update(m,i,v[M])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Vg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Hg(n,e,t){const i=new WeakMap,r=new Pt;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let C=o.attributes.position.count*y,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*E*4*h),R=new Kh(w,C,E,h);R.type=xi,R.needsUpdate=!0;const b=y*4;for(let L=0;L<h;L++){const N=m[L],I=M[L],F=x[L],k=C*E*4*L;for(let V=0;V<N.count;V++){const X=V*b;_===!0&&(r.fromBufferAttribute(N,V),w[k+X+0]=r.x,w[k+X+1]=r.y,w[k+X+2]=r.z,w[k+X+3]=0),v===!0&&(r.fromBufferAttribute(I,V),w[k+X+4]=r.x,w[k+X+5]=r.y,w[k+X+6]=r.z,w[k+X+7]=0),g===!0&&(r.fromBufferAttribute(F,V),w[k+X+8]=r.x,w[k+X+9]=r.y,w[k+X+10]=r.z,w[k+X+11]=F.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new me(C,E)},i.set(o,d),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function Gg(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class ad extends Yt{constructor(e,t,i,r,a,s,o,l,c,u=Tr){if(u!==Tr&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Tr&&(i=Ur),i===void 0&&u===Or&&(i=Fr),super(null,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const od=new Yt,sd=new ad(1,1);sd.compareFunction=$h;const ld=new Kh,cd=new Rp,ud=new id,Ru=[],Pu=[],Lu=new Float32Array(16),Iu=new Float32Array(9),Du=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Ru[r];if(a===void 0&&(a=new Float32Array(r),Ru[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $o(n,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function $g(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Du.set(i),n.uniformMatrix2fv(this.addr,!1,Du),bt(t,i)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Iu.set(i),n.uniformMatrix3fv(this.addr,!1,Iu),bt(t,i)}}function Zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Lu.set(i),n.uniformMatrix4fv(this.addr,!1,Lu),bt(t,i)}}function Kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function e1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function t1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function i1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function r1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function a1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?sd:od;t.setTexture2D(e||a,r)}function o1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cd,r)}function s1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ud,r)}function l1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ld,r)}function c1(n){switch(n){case 5126:return Wg;case 35664:return qg;case 35665:return Xg;case 35666:return Yg;case 35674:return $g;case 35675:return jg;case 35676:return Zg;case 5124:case 35670:return Kg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return l1}}function u1(n,e){n.uniform1fv(this.addr,e)}function h1(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function d1(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function f1(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function p1(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function m1(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function g1(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _1(n,e){n.uniform1iv(this.addr,e)}function v1(n,e){n.uniform2iv(this.addr,e)}function x1(n,e){n.uniform3iv(this.addr,e)}function M1(n,e){n.uniform4iv(this.addr,e)}function y1(n,e){n.uniform1uiv(this.addr,e)}function S1(n,e){n.uniform2uiv(this.addr,e)}function b1(n,e){n.uniform3uiv(this.addr,e)}function E1(n,e){n.uniform4uiv(this.addr,e)}function w1(n,e,t){const i=this.cache,r=e.length,a=$o(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||od,a[s])}function A1(n,e,t){const i=this.cache,r=e.length,a=$o(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||cd,a[s])}function T1(n,e,t){const i=this.cache,r=e.length,a=$o(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||ud,a[s])}function C1(n,e,t){const i=this.cache,r=e.length,a=$o(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||ld,a[s])}function R1(n){switch(n){case 5126:return u1;case 35664:return h1;case 35665:return d1;case 35666:return f1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return _1;case 35667:case 35671:return v1;case 35668:case 35672:return x1;case 35669:case 35673:return M1;case 5125:return y1;case 36294:return S1;case 36295:return b1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return C1}}class P1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=c1(t.type)}}class L1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R1(t.type)}}class I1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Hs=/(\w+)(\])?(\[|\.)?/g;function Nu(n,e){n.seq.push(e),n.map[e.id]=e}function D1(n,e,t){const i=n.name,r=i.length;for(Hs.lastIndex=0;;){const a=Hs.exec(i),s=Hs.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Nu(t,c===void 0?new P1(o,n,e):new L1(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new I1(o),Nu(t,h)),t=h}}}class bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);D1(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Uu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const N1=37297;let U1=0;function F1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function O1(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Po&&t===Ro?i="LinearDisplayP3ToLinearSRGB":e===Ro&&t===Po&&(i="LinearSRGBToLinearDisplayP3"),n){case Ci:case qo:return[i,"LinearTransferOETF"];case Ft:case Nl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+F1(n.getShaderSource(e),s)}else return r}function z1(n,e){const t=O1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function B1(n,e){let t;switch(e){case Df:t="Linear";break;case Nf:t="Reinhard";break;case Uf:t="OptimizedCineon";break;case Hr:t="ACESFilmic";break;case Of:t="AgX";break;case zf:t="Neutral";break;case Ff:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function k1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function V1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function H1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function sa(n){return n!==""}function Ou(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(n){return n.replace(G1,q1)}const W1=new Map;function q1(n,e){let t=Ge[e];if(t===void 0){const i=W1.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dl(t)}const X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(n){return n.replace(X1,Y1)}function Y1(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ku(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function $1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===af?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function j1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Dr:case Nr:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function K1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case Lf:e="ENVMAP_BLENDING_MIX";break;case If:e="ENVMAP_BLENDING_ADD";break}return e}function J1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Q1(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=$1(t),c=j1(t),u=Z1(t),h=K1(t),d=J1(t),f=k1(t),_=V1(a),v=r.createProgram();let g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(sa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(sa).join(`
`),m.length>0&&(m+=`
`)):(g=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),m=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==bi?B1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,z1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),s=dl(s),s=Ou(s,t),s=zu(s,t),o=dl(o),o=Ou(o,t),o=zu(o,t),s=Bu(s),o=Bu(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+g+s,y=M+m+o,C=Uu(r,r.VERTEX_SHADER,x),E=Uu(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(v).trim(),I=r.getShaderInfoLog(C).trim(),F=r.getShaderInfoLog(E).trim();let k=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,E);else{const X=Fu(r,C,"vertex"),G=Fu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+X+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(I===""||F==="")&&(V=!1);V&&(L.diagnostics={runnable:k,programLog:N,vertexShader:{log:I,prefix:g},fragmentShader:{log:F,prefix:m}})}r.deleteShader(C),r.deleteShader(E),R=new bo(r,v),b=H1(r,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,N1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}let e_=0;class t_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new n_(e),t.set(e,i)),i}}class n_{constructor(e){this.id=e_++,this.code=e,this.usedTimes=0}}function i_(n,e,t,i,r,a,s){const o=new Ol,l=new t_,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,L,N,I){const F=N.fog,k=I.geometry,V=b.isMeshStandardMaterial?N.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),G=X&&X.mapping===Go?X.image.height:null,ie=_[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=ne!==void 0?ne.length:0;let Q=0;k.morphAttributes.position!==void 0&&(Q=1),k.morphAttributes.normal!==void 0&&(Q=2),k.morphAttributes.color!==void 0&&(Q=3);let pe,W,K,ce;if(ie){const rt=Tn[ie];pe=rt.vertexShader,W=rt.fragmentShader}else pe=b.vertexShader,W=b.fragmentShader,l.update(b),K=l.getVertexShaderID(b),ce=l.getFragmentShaderID(b);const O=n.getRenderTarget(),re=I.isInstancedMesh===!0,ve=I.isBatchedMesh===!0,Se=!!b.map,U=!!b.matcap,Ae=!!X,Oe=!!b.aoMap,Ce=!!b.lightMap,Le=!!b.bumpMap,Xe=!!b.normalMap,Ve=!!b.displacementMap,ze=!!b.emissiveMap,ct=!!b.metalnessMap,D=!!b.roughnessMap,A=b.anisotropy>0,$=b.clearcoat>0,te=b.dispersion>0,j=b.iridescence>0,Z=b.sheen>0,se=b.transmission>0,le=A&&!!b.anisotropyMap,ue=$&&!!b.clearcoatMap,we=$&&!!b.clearcoatNormalMap,ae=$&&!!b.clearcoatRoughnessMap,be=j&&!!b.iridescenceMap,He=j&&!!b.iridescenceThicknessMap,De=Z&&!!b.sheenColorMap,_e=Z&&!!b.sheenRoughnessMap,qe=!!b.specularMap,Ye=!!b.specularColorMap,gt=!!b.specularIntensityMap,z=se&&!!b.transmissionMap,Me=se&&!!b.thicknessMap,J=!!b.gradientMap,ee=!!b.alphaMap,fe=b.alphaTest>0,Be=!!b.alphaHash,Ze=!!b.extensions;let _t=bi;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Et={shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:pe,fragmentShader:W,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ve,batchingColor:ve&&I._colorsTexture!==null,instancing:re,instancingColor:re&&I.instanceColor!==null,instancingMorph:re&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ci,alphaToCoverage:!!b.alphaToCoverage,map:Se,matcap:U,envMap:Ae,envMapMode:Ae&&X.mapping,envMapCubeUVHeight:G,aoMap:Oe,lightMap:Ce,bumpMap:Le,normalMap:Xe,displacementMap:d&&Ve,emissiveMap:ze,normalMapObjectSpace:Xe&&b.normalMapType===Jf,normalMapTangentSpace:Xe&&b.normalMapType===Dl,metalnessMap:ct,roughnessMap:D,anisotropy:A,anisotropyMap:le,clearcoat:$,clearcoatMap:ue,clearcoatNormalMap:we,clearcoatRoughnessMap:ae,dispersion:te,iridescence:j,iridescenceMap:be,iridescenceThicknessMap:He,sheen:Z,sheenColorMap:De,sheenRoughnessMap:_e,specularMap:qe,specularColorMap:Ye,specularIntensityMap:gt,transmission:se,transmissionMap:z,thicknessMap:Me,gradientMap:J,opaque:b.transparent===!1&&b.blending===Ar&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:fe,alphaHash:Be,combine:b.combine,mapUv:Se&&v(b.map.channel),aoMapUv:Oe&&v(b.aoMap.channel),lightMapUv:Ce&&v(b.lightMap.channel),bumpMapUv:Le&&v(b.bumpMap.channel),normalMapUv:Xe&&v(b.normalMap.channel),displacementMapUv:Ve&&v(b.displacementMap.channel),emissiveMapUv:ze&&v(b.emissiveMap.channel),metalnessMapUv:ct&&v(b.metalnessMap.channel),roughnessMapUv:D&&v(b.roughnessMap.channel),anisotropyMapUv:le&&v(b.anisotropyMap.channel),clearcoatMapUv:ue&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(b.sheenRoughnessMap.channel),specularMapUv:qe&&v(b.specularMap.channel),specularColorMapUv:Ye&&v(b.specularColorMap.channel),specularIntensityMapUv:gt&&v(b.specularIntensityMap.channel),transmissionMapUv:z&&v(b.transmissionMap.channel),thicknessMapUv:Me&&v(b.thicknessMap.channel),alphaMapUv:ee&&v(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Xe||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Se||ee),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:Se&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ft,flipSided:b.side===Zt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ze&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(M(S,b),x(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),b.push(o.mask)}function y(b){const S=_[b.type];let L;if(S){const N=Tn[S];L=Vp.clone(N.uniforms)}else L=b.uniforms;return L}function C(b,S){let L;for(let N=0,I=u.length;N<I;N++){const F=u[N];if(F.cacheKey===S){L=F,++L.usedTimes;break}}return L===void 0&&(L=new Q1(n,S,b,a),u.push(L)),L}function E(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:R}}function r_(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function i(a,s,o){n.get(a)[s]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function a_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(h,d,f,_,v,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function o(h,d,f,_,v,g){const m=s(h,d,f,_,v,g);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function l(h,d,f,_,v,g){const m=s(h,d,f,_,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||a_),i.length>1&&i.sort(d||Vu),r.length>1&&r.sort(d||Vu)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function o_(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Hu,n.set(i,[s])):r>=a.length?(s=new Hu,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function s_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new xe};break;case"SpotLight":t={position:new P,direction:new P,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function l_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let c_=0;function u_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function h_(n){const e=new s_,t=l_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,a=new lt,s=new lt;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,_=0,v=0,g=0,m=0,M=0,x=0,y=0,C=0,E=0,w=0;c.sort(u_);for(let b=0,S=c.length;b<S;b++){const L=c[b],N=L.color,I=L.intensity,F=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*I,h+=N.g*I,d+=N.b*I;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],I);w++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,G=t.get(L);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=L.shadow.matrix,M++}i.directional[f]=V,f++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(N).multiplyScalar(I),V.distance=F,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[v]=V;const X=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,X.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[v]=X.matrix,L.castShadow){const G=t.get(L);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=k,y++}v++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(N).multiplyScalar(I),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=V,g++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const X=L.shadow,G=t.get(L);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=L.shadow.matrix,x++}i.point[_]=V,_++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(I),V.groundColor.copy(L.groundColor).multiplyScalar(I),i.hemi[m]=V,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==v||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,R.directionalLength=f,R.pointLength=_,R.spotLength=v,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=w,i.version=c_++)}function l(c,u){let h=0,d=0,f=0,_=0,v=0;const g=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),s.identity(),a.copy(x.matrixWorld),a.premultiply(g),s.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Gu(n){const e=new h_(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function d_(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Gu(n),e.set(r,[o])):a>=s.length?(o=new Gu(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class f_ extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p_ extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
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
}`;function __(n,e,t){let i=new zl;const r=new me,a=new me,s=new Pt,o=new f_({depthPacking:Kf}),l=new p_,c={},u=t.maxTextureSize,h={[wi]:Zt,[Zt]:wi,[ft]:ft},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new je;_.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $e(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let m=this.type;this.render=function(E,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Si),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const I=m!==$n&&this.type===$n,F=m===$n&&this.type!==$n;for(let k=0,V=E.length;k<V;k++){const X=E[k],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ie=G.getFrameExtents();if(r.multiply(ie),a.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ie.x),r.x=a.x*ie.x,G.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ie.y),r.y=a.y*ie.y,G.mapSize.y=a.y)),G.map===null||I===!0||F===!0){const oe=this.type!==$n?{minFilter:un,magFilter:un}:{};G.map!==null&&G.map.dispose(),G.map=new Zi(r.x,r.y,oe),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ne=G.getViewportCount();for(let oe=0;oe<ne;oe++){const Q=G.getViewport(oe);s.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),N.viewport(s),G.updateMatrices(X,oe),i=G.getFrustum(),y(w,R,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===$n&&M(G,R),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,S,L)};function M(E,w){const R=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Zi(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,R,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,R,f,v,null)}function x(E,w,R,b){let S=null;const L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=S.uuid,I=w.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let k=F[I];k===void 0&&(k=S.clone(),F[I]=k,w.addEventListener("dispose",C)),S=k}if(S.visible=w.visible,S.wireframe=w.wireframe,b===$n?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=R}return S}function y(E,w,R,b,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===$n)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const I=e.update(E),F=E.material;if(Array.isArray(F)){const k=I.groups;for(let V=0,X=k.length;V<X;V++){const G=k[V],ie=F[G.materialIndex];if(ie&&ie.visible){const ne=x(E,ie,b,S);E.onBeforeShadow(n,E,w,R,I,ne,G),n.renderBufferDirect(R,null,I,ne,E,G),E.onAfterShadow(n,E,w,R,I,ne,G)}}}else if(F.visible){const k=x(E,F,b,S);E.onBeforeShadow(n,E,w,R,I,k,null),n.renderBufferDirect(R,null,I,k,E,null),E.onAfterShadow(n,E,w,R,I,k,null)}}const N=E.children;for(let I=0,F=N.length;I<F;I++)y(N[I],w,R,b,S)}function C(E){E.target.removeEventListener("dispose",C);for(const R in c){const b=c[R],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function v_(n){function e(){let z=!1;const Me=new Pt;let J=null;const ee=new Pt(0,0,0,0);return{setMask:function(fe){J!==fe&&!z&&(n.colorMask(fe,fe,fe,fe),J=fe)},setLocked:function(fe){z=fe},setClear:function(fe,Be,Ze,_t,Et){Et===!0&&(fe*=_t,Be*=_t,Ze*=_t),Me.set(fe,Be,Ze,_t),ee.equals(Me)===!1&&(n.clearColor(fe,Be,Ze,_t),ee.copy(Me))},reset:function(){z=!1,J=null,ee.set(-1,0,0,0)}}}function t(){let z=!1,Me=null,J=null,ee=null;return{setTest:function(fe){fe?ce(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(fe){Me!==fe&&!z&&(n.depthMask(fe),Me=fe)},setFunc:function(fe){if(J!==fe){switch(fe){case Ef:n.depthFunc(n.NEVER);break;case wf:n.depthFunc(n.ALWAYS);break;case Af:n.depthFunc(n.LESS);break;case Ao:n.depthFunc(n.LEQUAL);break;case Tf:n.depthFunc(n.EQUAL);break;case Cf:n.depthFunc(n.GEQUAL);break;case Rf:n.depthFunc(n.GREATER);break;case Pf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=fe}},setLocked:function(fe){z=fe},setClear:function(fe){ee!==fe&&(n.clearDepth(fe),ee=fe)},reset:function(){z=!1,Me=null,J=null,ee=null}}}function i(){let z=!1,Me=null,J=null,ee=null,fe=null,Be=null,Ze=null,_t=null,Et=null;return{setTest:function(rt){z||(rt?ce(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(rt){Me!==rt&&!z&&(n.stencilMask(rt),Me=rt)},setFunc:function(rt,wn,An){(J!==rt||ee!==wn||fe!==An)&&(n.stencilFunc(rt,wn,An),J=rt,ee=wn,fe=An)},setOp:function(rt,wn,An){(Be!==rt||Ze!==wn||_t!==An)&&(n.stencilOp(rt,wn,An),Be=rt,Ze=wn,_t=An)},setLocked:function(rt){z=rt},setClear:function(rt){Et!==rt&&(n.clearStencil(rt),Et=rt)},reset:function(){z=!1,Me=null,J=null,ee=null,fe=null,Be=null,Ze=null,_t=null,Et=null}}}const r=new e,a=new t,s=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,_=!1,v=null,g=null,m=null,M=null,x=null,y=null,C=null,E=new xe(0,0,0),w=0,R=!1,b=null,S=null,L=null,N=null,I=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=V>=2);let G=null,ie={};const ne=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Q=new Pt().fromArray(ne),pe=new Pt().fromArray(oe);function W(z,Me,J,ee){const fe=new Uint8Array(4),Be=n.createTexture();n.bindTexture(z,Be),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<J;Ze++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(Me+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return Be}const K={};K[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),ce(n.DEPTH_TEST),a.setFunc(Ao),Le(!1),Xe(Ec),ce(n.CULL_FACE),Oe(Si);function ce(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function O(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function re(z,Me){return u[z]!==Me?(n.bindFramebuffer(z,Me),u[z]=Me,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Me),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ve(z,Me){let J=d,ee=!1;if(z){J=h.get(Me),J===void 0&&(J=[],h.set(Me,J));const fe=z.textures;if(J.length!==fe.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Be=0,Ze=fe.length;Be<Ze;Be++)J[Be]=n.COLOR_ATTACHMENT0+Be;J.length=fe.length,ee=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ee=!0);ee&&n.drawBuffers(J)}function Se(z){return f!==z?(n.useProgram(z),f=z,!0):!1}const U={[Gi]:n.FUNC_ADD,[sf]:n.FUNC_SUBTRACT,[lf]:n.FUNC_REVERSE_SUBTRACT};U[cf]=n.MIN,U[uf]=n.MAX;const Ae={[hf]:n.ZERO,[df]:n.ONE,[ff]:n.SRC_COLOR,[al]:n.SRC_ALPHA,[xf]:n.SRC_ALPHA_SATURATE,[_f]:n.DST_COLOR,[mf]:n.DST_ALPHA,[pf]:n.ONE_MINUS_SRC_COLOR,[ol]:n.ONE_MINUS_SRC_ALPHA,[vf]:n.ONE_MINUS_DST_COLOR,[gf]:n.ONE_MINUS_DST_ALPHA,[Mf]:n.CONSTANT_COLOR,[yf]:n.ONE_MINUS_CONSTANT_COLOR,[Sf]:n.CONSTANT_ALPHA,[bf]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(z,Me,J,ee,fe,Be,Ze,_t,Et,rt){if(z===Si){_===!0&&(O(n.BLEND),_=!1);return}if(_===!1&&(ce(n.BLEND),_=!0),z!==of){if(z!==v||rt!==R){if((g!==Gi||x!==Gi)&&(n.blendEquation(n.FUNC_ADD),g=Gi,x=Gi),rt)switch(z){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ir:n.blendFunc(n.ONE,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ac:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ir:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ac:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,M=null,y=null,C=null,E.set(0,0,0),w=0,v=z,R=rt}return}fe=fe||Me,Be=Be||J,Ze=Ze||ee,(Me!==g||fe!==x)&&(n.blendEquationSeparate(U[Me],U[fe]),g=Me,x=fe),(J!==m||ee!==M||Be!==y||Ze!==C)&&(n.blendFuncSeparate(Ae[J],Ae[ee],Ae[Be],Ae[Ze]),m=J,M=ee,y=Be,C=Ze),(_t.equals(E)===!1||Et!==w)&&(n.blendColor(_t.r,_t.g,_t.b,Et),E.copy(_t),w=Et),v=z,R=!1}function Ce(z,Me){z.side===ft?O(n.CULL_FACE):ce(n.CULL_FACE);let J=z.side===Zt;Me&&(J=!J),Le(J),z.blending===Ar&&z.transparent===!1?Oe(Si):Oe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const ee=z.stencilWrite;s.setTest(ee),ee&&(s.setMask(z.stencilWriteMask),s.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),s.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ze(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(z){b!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),b=z)}function Xe(z){z!==nf?(ce(n.CULL_FACE),z!==S&&(z===Ec?n.cullFace(n.BACK):z===rf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),S=z}function Ve(z){z!==L&&(k&&n.lineWidth(z),L=z)}function ze(z,Me,J){z?(ce(n.POLYGON_OFFSET_FILL),(N!==Me||I!==J)&&(n.polygonOffset(Me,J),N=Me,I=J)):O(n.POLYGON_OFFSET_FILL)}function ct(z){z?ce(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function D(z){z===void 0&&(z=n.TEXTURE0+F-1),G!==z&&(n.activeTexture(z),G=z)}function A(z,Me,J){J===void 0&&(G===null?J=n.TEXTURE0+F-1:J=G);let ee=ie[J];ee===void 0&&(ee={type:void 0,texture:void 0},ie[J]=ee),(ee.type!==z||ee.texture!==Me)&&(G!==J&&(n.activeTexture(J),G=J),n.bindTexture(z,Me||K[z]),ee.type=z,ee.texture=Me)}function $(){const z=ie[G];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(z){Q.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Q.copy(z))}function _e(z){pe.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),pe.copy(z))}function qe(z,Me){let J=l.get(Me);J===void 0&&(J=new WeakMap,l.set(Me,J));let ee=J.get(z);ee===void 0&&(ee=n.getUniformBlockIndex(Me,z.name),J.set(z,ee))}function Ye(z,Me){const ee=l.get(Me).get(z);o.get(Me)!==ee&&(n.uniformBlockBinding(Me,ee,z.__bindingPointIndex),o.set(Me,ee))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,ie={},u={},h=new WeakMap,d=[],f=null,_=!1,v=null,g=null,m=null,M=null,x=null,y=null,C=null,E=new xe(0,0,0),w=0,R=!1,b=null,S=null,L=null,N=null,I=null,Q.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:ce,disable:O,bindFramebuffer:re,drawBuffers:ve,useProgram:Se,setBlending:Oe,setMaterial:Ce,setFlipSided:Le,setCullFace:Xe,setLineWidth:Ve,setPolygonOffset:ze,setScissorTest:ct,activeTexture:D,bindTexture:A,unbindTexture:$,compressedTexImage2D:te,compressedTexImage3D:j,texImage2D:be,texImage3D:He,updateUBOMapping:qe,uniformBlockBinding:Ye,texStorage2D:we,texStorage3D:ae,texSubImage2D:Z,texSubImage3D:se,compressedTexSubImage2D:le,compressedTexSubImage3D:ue,scissor:De,viewport:_e,reset:gt}}function x_(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,A){return f?new OffscreenCanvas(D,A):Io("canvas")}function v(D,A,$){let te=1;const j=ct(D);if((j.width>$||j.height>$)&&(te=$/Math.max(j.width,j.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Z=Math.floor(te*j.width),se=Math.floor(te*j.height);h===void 0&&(h=_(Z,se));const le=A?_(Z,se):h;return le.width=Z,le.height=se,le.getContext("2d").drawImage(D,0,0,Z,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+se+")."),le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==un&&D.minFilter!==xn}function m(D){n.generateMipmap(D)}function M(D,A,$,te,j=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=A;if(A===n.RED&&($===n.FLOAT&&(Z=n.R32F),$===n.HALF_FLOAT&&(Z=n.R16F),$===n.UNSIGNED_BYTE&&(Z=n.R8)),A===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(Z=n.R8UI),$===n.UNSIGNED_SHORT&&(Z=n.R16UI),$===n.UNSIGNED_INT&&(Z=n.R32UI),$===n.BYTE&&(Z=n.R8I),$===n.SHORT&&(Z=n.R16I),$===n.INT&&(Z=n.R32I)),A===n.RG&&($===n.FLOAT&&(Z=n.RG32F),$===n.HALF_FLOAT&&(Z=n.RG16F),$===n.UNSIGNED_BYTE&&(Z=n.RG8)),A===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(Z=n.RG8UI),$===n.UNSIGNED_SHORT&&(Z=n.RG16UI),$===n.UNSIGNED_INT&&(Z=n.RG32UI),$===n.BYTE&&(Z=n.RG8I),$===n.SHORT&&(Z=n.RG16I),$===n.INT&&(Z=n.RG32I)),A===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),A===n.RGBA){const se=j?Co:nt.getTransfer(te);$===n.FLOAT&&(Z=n.RGBA32F),$===n.HALF_FLOAT&&(Z=n.RGBA16F),$===n.UNSIGNED_BYTE&&(Z=se===ut?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(D,A){let $;return D?A===null||A===Ur||A===Fr?$=n.DEPTH24_STENCIL8:A===xi?$=n.DEPTH32F_STENCIL8:A===To&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ur||A===Fr?$=n.DEPTH_COMPONENT24:A===xi?$=n.DEPTH_COMPONENT32F:A===To&&($=n.DEPTH_COMPONENT16),$}function y(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==un&&D.minFilter!==xn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function C(D){const A=D.target;A.removeEventListener("dispose",C),w(A),A.isVideoTexture&&u.delete(A)}function E(D){const A=D.target;A.removeEventListener("dispose",E),b(A)}function w(D){const A=i.get(D);if(A.__webglInit===void 0)return;const $=D.source,te=d.get($);if(te){const j=te[A.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(D),Object.keys(te).length===0&&d.delete($)}i.remove(D)}function R(D){const A=i.get(D);n.deleteTexture(A.__webglTexture);const $=D.source,te=d.get($);delete te[A.__cacheKey],s.memory.textures--}function b(D){const A=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(A.__webglFramebuffer[te]))for(let j=0;j<A.__webglFramebuffer[te].length;j++)n.deleteFramebuffer(A.__webglFramebuffer[te][j]);else n.deleteFramebuffer(A.__webglFramebuffer[te]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[te])}else{if(Array.isArray(A.__webglFramebuffer))for(let te=0;te<A.__webglFramebuffer.length;te++)n.deleteFramebuffer(A.__webglFramebuffer[te]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let te=0;te<A.__webglColorRenderbuffer.length;te++)A.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[te]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=D.textures;for(let te=0,j=$.length;te<j;te++){const Z=i.get($[te]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),s.memory.textures--),i.remove($[te])}i.remove(D)}let S=0;function L(){S=0}function N(){const D=S;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),S+=1,D}function I(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function F(D,A){const $=i.get(D);if(D.isVideoTexture&&Ve(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const te=D.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe($,D,A);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+A)}function k(D,A){const $=i.get(D);if(D.version>0&&$.__version!==D.version){pe($,D,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+A)}function V(D,A){const $=i.get(D);if(D.version>0&&$.__version!==D.version){pe($,D,A);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+A)}function X(D,A){const $=i.get(D);if(D.version>0&&$.__version!==D.version){W($,D,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+A)}const G={[cl]:n.REPEAT,[Xi]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},ie={[un]:n.NEAREST,[Bf]:n.NEAREST_MIPMAP_NEAREST,[Fa]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[fs]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},ne={[Qf]:n.NEVER,[ap]:n.ALWAYS,[ep]:n.LESS,[$h]:n.LEQUAL,[tp]:n.EQUAL,[rp]:n.GEQUAL,[np]:n.GREATER,[ip]:n.NOTEQUAL};function oe(D,A){if(A.type===xi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===xn||A.magFilter===fs||A.magFilter===Fa||A.magFilter===Yi||A.minFilter===xn||A.minFilter===fs||A.minFilter===Fa||A.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,G[A.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,G[A.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,G[A.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ie[A.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ie[A.minFilter]),A.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ne[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===un||A.minFilter!==Fa&&A.minFilter!==Yi||A.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Q(D,A){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",C));const te=A.source;let j=d.get(te);j===void 0&&(j={},d.set(te,j));const Z=I(A);if(Z!==D.__cacheKey){j[Z]===void 0&&(j[Z]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,$=!0),j[Z].usedTimes++;const se=j[D.__cacheKey];se!==void 0&&(j[D.__cacheKey].usedTimes--,se.usedTimes===0&&R(A)),D.__cacheKey=Z,D.__webglTexture=j[Z].texture}return $}function pe(D,A,$){let te=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=n.TEXTURE_3D);const j=Q(D,A),Z=A.source;t.bindTexture(te,D.__webglTexture,n.TEXTURE0+$);const se=i.get(Z);if(Z.version!==se.__version||j===!0){t.activeTexture(n.TEXTURE0+$);const le=nt.getPrimaries(nt.workingColorSpace),ue=A.colorSpace===mi?null:nt.getPrimaries(A.colorSpace),we=A.colorSpace===mi||le===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ae=v(A.image,!1,r.maxTextureSize);ae=ze(A,ae);const be=a.convert(A.format,A.colorSpace),He=a.convert(A.type);let De=M(A.internalFormat,be,He,A.colorSpace,A.isVideoTexture);oe(te,A);let _e;const qe=A.mipmaps,Ye=A.isVideoTexture!==!0,gt=se.__version===void 0||j===!0,z=Z.dataReady,Me=y(A,ae);if(A.isDepthTexture)De=x(A.format===Or,A.type),gt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,be,He,null));else if(A.isDataTexture)if(qe.length>0){Ye&&gt&&t.texStorage2D(n.TEXTURE_2D,Me,De,qe[0].width,qe[0].height);for(let J=0,ee=qe.length;J<ee;J++)_e=qe[J],Ye?z&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,be,He,_e.data):t.texImage2D(n.TEXTURE_2D,J,De,_e.width,_e.height,0,be,He,_e.data);A.generateMipmaps=!1}else Ye?(gt&&t.texStorage2D(n.TEXTURE_2D,Me,De,ae.width,ae.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,be,He,ae.data)):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,be,He,ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ye&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,De,qe[0].width,qe[0].height,ae.depth);for(let J=0,ee=qe.length;J<ee;J++)if(_e=qe[J],A.format!==In)if(be!==null)if(Ye){if(z)if(A.layerUpdates.size>0){for(const fe of A.layerUpdates){const Be=_e.width*_e.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,fe,_e.width,_e.height,1,be,_e.data.slice(Be*fe,Be*(fe+1)),0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,ae.depth,be,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,De,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,ae.depth,be,He,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,De,_e.width,_e.height,ae.depth,0,be,He,_e.data)}else{Ye&&gt&&t.texStorage2D(n.TEXTURE_2D,Me,De,qe[0].width,qe[0].height);for(let J=0,ee=qe.length;J<ee;J++)_e=qe[J],A.format!==In?be!==null?Ye?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,be,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,J,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?z&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,be,He,_e.data):t.texImage2D(n.TEXTURE_2D,J,De,_e.width,_e.height,0,be,He,_e.data)}else if(A.isDataArrayTexture)if(Ye){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,De,ae.width,ae.height,ae.depth),z)if(A.layerUpdates.size>0){let J;switch(He){case n.UNSIGNED_BYTE:switch(be){case n.ALPHA:J=1;break;case n.LUMINANCE:J=1;break;case n.LUMINANCE_ALPHA:J=2;break;case n.RGB:J=3;break;case n.RGBA:J=4;break;default:throw new Error(`Unknown texel size for format ${be}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:J=1;break;default:throw new Error(`Unknown texel size for type ${He}.`)}const ee=ae.width*ae.height*J;for(const fe of A.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,ae.width,ae.height,1,be,He,ae.data.slice(ee*fe,ee*(fe+1)));A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,be,He,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,be,He,ae.data);else if(A.isData3DTexture)Ye?(gt&&t.texStorage3D(n.TEXTURE_3D,Me,De,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,be,He,ae.data)):t.texImage3D(n.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,be,He,ae.data);else if(A.isFramebufferTexture){if(gt)if(Ye)t.texStorage2D(n.TEXTURE_2D,Me,De,ae.width,ae.height);else{let J=ae.width,ee=ae.height;for(let fe=0;fe<Me;fe++)t.texImage2D(n.TEXTURE_2D,fe,De,J,ee,0,be,He,null),J>>=1,ee>>=1}}else if(qe.length>0){if(Ye&&gt){const J=ct(qe[0]);t.texStorage2D(n.TEXTURE_2D,Me,De,J.width,J.height)}for(let J=0,ee=qe.length;J<ee;J++)_e=qe[J],Ye?z&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,be,He,_e):t.texImage2D(n.TEXTURE_2D,J,De,be,He,_e);A.generateMipmaps=!1}else if(Ye){if(gt){const J=ct(ae);t.texStorage2D(n.TEXTURE_2D,Me,De,J.width,J.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,He,ae)}else t.texImage2D(n.TEXTURE_2D,0,De,be,He,ae);g(A)&&m(te),se.__version=Z.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function W(D,A,$){if(A.image.length!==6)return;const te=Q(D,A),j=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+$);const Z=i.get(j);if(j.version!==Z.__version||te===!0){t.activeTexture(n.TEXTURE0+$);const se=nt.getPrimaries(nt.workingColorSpace),le=A.colorSpace===mi?null:nt.getPrimaries(A.colorSpace),ue=A.colorSpace===mi||se===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const we=A.isCompressedTexture||A.image[0].isCompressedTexture,ae=A.image[0]&&A.image[0].isDataTexture,be=[];for(let ee=0;ee<6;ee++)!we&&!ae?be[ee]=v(A.image[ee],!0,r.maxCubemapSize):be[ee]=ae?A.image[ee].image:A.image[ee],be[ee]=ze(A,be[ee]);const He=be[0],De=a.convert(A.format,A.colorSpace),_e=a.convert(A.type),qe=M(A.internalFormat,De,_e,A.colorSpace),Ye=A.isVideoTexture!==!0,gt=Z.__version===void 0||te===!0,z=j.dataReady;let Me=y(A,He);oe(n.TEXTURE_CUBE_MAP,A);let J;if(we){Ye&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,qe,He.width,He.height);for(let ee=0;ee<6;ee++){J=be[ee].mipmaps;for(let fe=0;fe<J.length;fe++){const Be=J[fe];A.format!==In?De!==null?Ye?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,Be.width,Be.height,De,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,Be.width,Be.height,De,_e,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,qe,Be.width,Be.height,0,De,_e,Be.data)}}}else{if(J=A.mipmaps,Ye&&gt){J.length>0&&Me++;const ee=ct(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be[ee].width,be[ee].height,De,_e,be[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,be[ee].width,be[ee].height,0,De,_e,be[ee].data);for(let fe=0;fe<J.length;fe++){const Ze=J[fe].image[ee].image;Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ze.width,Ze.height,De,_e,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,qe,Ze.width,Ze.height,0,De,_e,Ze.data)}}else{Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,_e,be[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,De,_e,be[ee]);for(let fe=0;fe<J.length;fe++){const Be=J[fe];Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,De,_e,Be.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,qe,De,_e,Be.image[ee])}}}g(A)&&m(n.TEXTURE_CUBE_MAP),Z.__version=j.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function K(D,A,$,te,j,Z){const se=a.convert($.format,$.colorSpace),le=a.convert($.type),ue=M($.internalFormat,se,le,$.colorSpace);if(!i.get(A).__hasExternalTextures){const ae=Math.max(1,A.width>>Z),be=Math.max(1,A.height>>Z);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,Z,ue,ae,be,A.depth,0,se,le,null):t.texImage2D(j,Z,ue,ae,be,0,se,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Xe(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,j,i.get($).__webglTexture,0,Le(A)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,j,i.get($).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(D,A,$){if(n.bindRenderbuffer(n.RENDERBUFFER,D),A.depthBuffer){const te=A.depthTexture,j=te&&te.isDepthTexture?te.type:null,Z=x(A.stencilBuffer,j),se=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Le(A);Xe(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Z,A.width,A.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Z,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Z,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,D)}else{const te=A.textures;for(let j=0;j<te.length;j++){const Z=te[j],se=a.convert(Z.format,Z.colorSpace),le=a.convert(Z.type),ue=M(Z.internalFormat,se,le,Z.colorSpace),we=Le(A);$&&Xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ue,A.width,A.height):Xe(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,ue,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ue,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);const te=i.get(A.depthTexture).__webglTexture,j=Le(A);if(A.depthTexture.format===Tr)Xe(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(A.depthTexture.format===Or)Xe(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function re(D){const A=i.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");O(A.__webglFramebuffer,D)}else if($){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]=n.createRenderbuffer(),ce(A.__webglDepthbuffer[te],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),ce(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(D,A,$){const te=i.get(D);A!==void 0&&K(te.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&re(D)}function Se(D){const A=D.texture,$=i.get(D),te=i.get(A);D.addEventListener("dispose",E);const j=D.textures,Z=D.isWebGLCubeRenderTarget===!0,se=j.length>1;if(se||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=A.version,s.memory.textures++),Z){$.__webglFramebuffer=[];for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[le]=[];for(let ue=0;ue<A.mipmaps.length;ue++)$.__webglFramebuffer[le][ue]=n.createFramebuffer()}else $.__webglFramebuffer[le]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let le=0;le<A.mipmaps.length;le++)$.__webglFramebuffer[le]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(se)for(let le=0,ue=j.length;le<ue;le++){const we=i.get(j[le]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&Xe(D)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let le=0;le<j.length;le++){const ue=j[le];$.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[le]);const we=a.convert(ue.format,ue.colorSpace),ae=a.convert(ue.type),be=M(ue.internalFormat,we,ae,ue.colorSpace,D.isXRRenderTarget===!0),He=Le(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,be,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,$.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ce($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),oe(n.TEXTURE_CUBE_MAP,A);for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0)for(let ue=0;ue<A.mipmaps.length;ue++)K($.__webglFramebuffer[le][ue],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else K($.__webglFramebuffer[le],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(A)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let le=0,ue=j.length;le<ue;le++){const we=j[le],ae=i.get(we);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),oe(n.TEXTURE_2D,we),K($.__webglFramebuffer,D,we,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),g(we)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(le=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),oe(le,A),A.mipmaps&&A.mipmaps.length>0)for(let ue=0;ue<A.mipmaps.length;ue++)K($.__webglFramebuffer[ue],D,A,n.COLOR_ATTACHMENT0,le,ue);else K($.__webglFramebuffer,D,A,n.COLOR_ATTACHMENT0,le,0);g(A)&&m(le),t.unbindTexture()}D.depthBuffer&&re(D)}function U(D){const A=D.textures;for(let $=0,te=A.length;$<te;$++){const j=A[$];if(g(j)){const Z=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(j).__webglTexture;t.bindTexture(Z,se),m(Z),t.unbindTexture()}}}const Ae=[],Oe=[];function Ce(D){if(D.samples>0){if(Xe(D)===!1){const A=D.textures,$=D.width,te=D.height;let j=n.COLOR_BUFFER_BIT;const Z=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(D),le=A.length>1;if(le)for(let ue=0;ue<A.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ue=0;ue<A.length;ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[ue]);const we=i.get(A[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,$,te,0,0,$,te,j,n.NEAREST),l===!0&&(Ae.length=0,Oe.length=0,Ae.push(n.COLOR_ATTACHMENT0+ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ae.push(Z),Oe.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ue=0;ue<A.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,se.__webglColorRenderbuffer[ue]);const we=i.get(A[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const A=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Le(D){return Math.min(r.maxSamples,D.samples)}function Xe(D){const A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ve(D){const A=s.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function ze(D,A){const $=D.colorSpace,te=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Ci&&$!==mi&&(nt.getTransfer($)===ut?(te!==In||j!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=ve,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Xe}function M_(n,e){function t(i,r=mi){let a;const s=nt.getTransfer(r);if(i===Ai)return n.UNSIGNED_BYTE;if(i===Gh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kf)return n.BYTE;if(i===Vf)return n.SHORT;if(i===To)return n.UNSIGNED_SHORT;if(i===Hh)return n.INT;if(i===Ur)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===Wo)return n.HALF_FLOAT;if(i===Gf)return n.ALPHA;if(i===Wf)return n.RGB;if(i===In)return n.RGBA;if(i===qf)return n.LUMINANCE;if(i===Xf)return n.LUMINANCE_ALPHA;if(i===Tr)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===Yf)return n.RED;if(i===qh)return n.RED_INTEGER;if(i===$f)return n.RG;if(i===Xh)return n.RG_INTEGER;if(i===Yh)return n.RGBA_INTEGER;if(i===ps||i===ms||i===gs||i===_s)if(s===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ps)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ps)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ms)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_s)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tc||i===Cc||i===Rc||i===Pc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Tc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lc||i===Ic||i===Dc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Lc||i===Ic)return s===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Dc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nc||i===Uc||i===Fc||i===Oc||i===zc||i===Bc||i===kc||i===Vc||i===Hc||i===Gc||i===Wc||i===qc||i===Xc||i===Yc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Nc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yc)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vs||i===$c||i===jc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===vs)return s===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$c)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jf||i===Zc||i===Kc||i===Jc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===vs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Zc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class y_ extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S_={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`;class w_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Yt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ti({vertexShader:b_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class A_ extends Ki{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const v=new w_,g=t.getContextAttributes();let m=null,M=null;const x=[],y=[],C=new me;let E=null;const w=new vn;w.layers.enable(1),w.viewport=new Pt;const R=new vn;R.layers.enable(2),R.viewport=new Pt;const b=[w,R],S=new y_;S.layers.enable(1),S.layers.enable(2);let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=x[W];return K===void 0&&(K=new Gs,x[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=x[W];return K===void 0&&(K=new Gs,x[W]=K),K.getGripSpace()},this.getHand=function(W){let K=x[W];return K===void 0&&(K=new Gs,x[W]=K),K.getHandSpace()};function I(W){const K=y.indexOf(W.inputSource);if(K===-1)return;const ce=x[K];ce!==void 0&&(ce.update(W.inputSource,W.frame,c||s),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function F(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",k);for(let W=0;W<x.length;W++){const K=y[W];K!==null&&(y[W]=null,x[W].disconnect(K))}L=null,N=null,v.reset(),e.setRenderTarget(m),f=null,d=null,h=null,r=null,M=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",F),r.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Zi(f.framebufferWidth,f.framebufferHeight,{format:In,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ce=null,O=null;g.depth&&(O=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Or:Tr,ce=g.stencil?Fr:Ur);const re={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:a};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Zi(d.textureWidth,d.textureHeight,{format:In,type:Ai,depthTexture:new ad(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(W){for(let K=0;K<W.removed.length;K++){const ce=W.removed[K],O=y.indexOf(ce);O>=0&&(y[O]=null,x[O].disconnect(ce))}for(let K=0;K<W.added.length;K++){const ce=W.added[K];let O=y.indexOf(ce);if(O===-1){for(let ve=0;ve<x.length;ve++)if(ve>=y.length){y.push(ce),O=ve;break}else if(y[ve]===null){y[ve]=ce,O=ve;break}if(O===-1)break}const re=x[O];re&&re.connect(ce)}}const V=new P,X=new P;function G(W,K,ce){V.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const O=V.distanceTo(X),re=K.projectionMatrix.elements,ve=ce.projectionMatrix.elements,Se=re[14]/(re[10]-1),U=re[14]/(re[10]+1),Ae=(re[9]+1)/re[5],Oe=(re[9]-1)/re[5],Ce=(re[8]-1)/re[0],Le=(ve[8]+1)/ve[0],Xe=Se*Ce,Ve=Se*Le,ze=O/(-Ce+Le),ct=ze*-Ce;K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ct),W.translateZ(ze),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const D=Se+ze,A=U+ze,$=Xe-ct,te=Ve+(O-ct),j=Ae*U/A*D,Z=Oe*U/A*D;W.projectionMatrix.makePerspective($,te,j,Z,D,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ie(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;v.texture!==null&&(W.near=v.depthNear,W.far=v.depthFar),S.near=R.near=w.near=W.near,S.far=R.far=w.far=W.far,(L!==S.near||N!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,N=S.far,w.near=L,w.far=N,R.near=L,R.far=N,w.updateProjectionMatrix(),R.updateProjectionMatrix(),W.updateProjectionMatrix());const K=W.parent,ce=S.cameras;ie(S,K);for(let O=0;O<ce.length;O++)ie(ce[O],K);ce.length===2?G(S,w,R):S.projectionMatrix.copy(w.projectionMatrix),ne(W,S,K)};function ne(W,K,ce){ce===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Sa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let oe=null;function Q(W,K){if(u=K.getViewerPose(c||s),_=K,u!==null){const ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let O=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,O=!0);for(let ve=0;ve<ce.length;ve++){const Se=ce[ve];let U=null;if(f!==null)U=f.getViewport(Se);else{const Oe=h.getViewSubImage(d,Se);U=Oe.viewport,ve===0&&(e.setRenderTargetTextures(M,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(M))}let Ae=b[ve];Ae===void 0&&(Ae=new vn,Ae.layers.enable(ve),Ae.viewport=new Pt,b[ve]=Ae),Ae.matrix.fromArray(Se.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Se.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(U.x,U.y,U.width,U.height),ve===0&&(S.matrix.copy(Ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),O===!0&&S.cameras.push(Ae)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")){const ve=h.getDepthInformation(ce[0]);ve&&ve.isValid&&ve.texture&&v.init(e,ve,r.renderState)}}for(let ce=0;ce<x.length;ce++){const O=y[ce],re=x[ce];O!==null&&re!==void 0&&re.update(O,K,c||s)}oe&&oe(W,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const pe=new rd;pe.setAnimationLoop(Q),this.setAnimationLoop=function(W){oe=W},this.dispose=function(){}}}const Vi=new bn,T_=new lt;function C_(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,td(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(g,m):m.isMeshToonMaterial?(a(g,m),h(g,m)):m.isMeshPhongMaterial?(a(g,m),u(g,m)):m.isMeshStandardMaterial?(a(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(a(g,m),_(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),v(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Zt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Zt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,y=M.envMapRotation;x&&(g.envMap.value=x,Vi.copy(y),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),g.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Vi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R_(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const y=x.program;i.uniformBlockBinding(M,y)}function c(M,x){let y=r[M.id];y===void 0&&(_(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",g));const C=x.program;i.updateUBOMapping(M,C);const E=e.render.frame;a[M.id]!==E&&(d(M),a[M.id]=E)}function u(M){const x=h();M.__bindingPointIndex=x;const y=n.createBuffer(),C=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=r[M.id],y=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,w=y.length;E<w;E++){const R=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,S=R.length;b<S;b++){const L=R[b];if(f(L,E,b,C)===!0){const N=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let k=0;k<I.length;k++){const V=I[k],X=v(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,N+F,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,x,y,C){const E=M.value,w=x+"_"+y;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{const R=C[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(M){const x=M.uniforms;let y=0;const C=16;for(let w=0,R=x.length;w<R;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,L=b.length;S<L;S++){const N=b[S],I=Array.isArray(N.value)?N.value:[N.value];for(let F=0,k=I.length;F<k;F++){const V=I[F],X=v(V),G=y%C;G!==0&&C-G<X.boundary&&(y+=C-G),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=X.storage}}}const E=y%C;return E>0&&(y+=C-E),M.__size=y,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function m(){for(const M in r)n.deleteBuffer(r[M]);s=[],r={},a={}}return{bind:l,update:c,dispose:m}}class ri{constructor(e={}){const{canvas:t=Sp(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,g=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=bi,this.toneMappingExposure=1;const x=this;let y=!1,C=0,E=0,w=null,R=-1,b=null;const S=new Pt,L=new Pt;let N=null;const I=new xe(0);let F=0,k=t.width,V=t.height,X=1,G=null,ie=null;const ne=new Pt(0,0,k,V),oe=new Pt(0,0,k,V);let Q=!1;const pe=new zl;let W=!1,K=!1;const ce=new lt,O=new P,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Se(){return w===null?X:1}let U=i;function Ae(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ee,!1),U===null){const B="webgl2";if(U=Ae(B,T),U===null)throw Ae(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Oe,Ce,Le,Xe,Ve,ze,ct,D,A,$,te,j,Z,se,le,ue,we,ae,be,He,De,_e,qe,Ye;function gt(){Oe=new zg(U),Oe.init(),_e=new M_(U,Oe),Ce=new Ig(U,Oe,e,_e),Le=new v_(U),Xe=new Vg(U),Ve=new r_,ze=new x_(U,Oe,Le,Ve,Ce,_e,Xe),ct=new Ng(x),D=new Og(x),A=new $p(U),qe=new Pg(U,A),$=new Bg(U,A,Xe,qe),te=new Gg(U,$,A,Xe),be=new Hg(U,Ce,ze),ue=new Dg(Ve),j=new i_(x,ct,D,Oe,Ce,qe,ue),Z=new C_(x,Ve),se=new o_,le=new d_(Oe),ae=new Rg(x,ct,D,Le,te,d,l),we=new __(x,te,Ce),Ye=new R_(U,Xe,Ce,Le),He=new Lg(U,Oe,Xe),De=new kg(U,Oe,Xe),Xe.programs=j.programs,x.capabilities=Ce,x.extensions=Oe,x.properties=Ve,x.renderLists=se,x.shadowMap=we,x.state=Le,x.info=Xe}gt();const z=new A_(x,U);this.xr=z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(k,V,!1))},this.getSize=function(T){return T.set(k,V)},this.setSize=function(T,B,q=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,V=B,t.width=Math.floor(T*X),t.height=Math.floor(B*X),q===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(k*X,V*X).floor()},this.setDrawingBufferSize=function(T,B,q){k=T,V=B,X=q,t.width=Math.floor(T*q),t.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(ne)},this.setViewport=function(T,B,q,Y){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,B,q,Y),Le.viewport(S.copy(ne).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,B,q,Y){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,B,q,Y),Le.scissor(L.copy(oe).multiplyScalar(X).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(T){Le.setScissorTest(Q=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){ie=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,B=!0,q=!0){let Y=0;if(T){let H=!1;if(w!==null){const de=w.texture.format;H=de===Yh||de===Xh||de===qh}if(H){const de=w.texture.type,ye=de===Ai||de===Ur||de===To||de===Fr||de===Gh||de===Wh,Ee=ae.getClearColor(),Te=ae.getClearAlpha(),Ue=Ee.r,Fe=Ee.g,Ie=Ee.b;ye?(f[0]=Ue,f[1]=Fe,f[2]=Ie,f[3]=Te,U.clearBufferuiv(U.COLOR,0,f)):(_[0]=Ue,_[1]=Fe,_[2]=Ie,_[3]=Te,U.clearBufferiv(U.COLOR,0,_))}else Y|=U.COLOR_BUFFER_BIT}B&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),se.dispose(),le.dispose(),Ve.dispose(),ct.dispose(),D.dispose(),te.dispose(),qe.dispose(),Ye.dispose(),j.dispose(),z.dispose(),z.removeEventListener("sessionstart",wn),z.removeEventListener("sessionend",An),Ni.stop()};function Me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Xe.autoReset,B=we.enabled,q=we.autoUpdate,Y=we.needsUpdate,H=we.type;gt(),Xe.autoReset=T,we.enabled=B,we.autoUpdate=q,we.needsUpdate=Y,we.type=H}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function fe(T){const B=T.target;B.removeEventListener("dispose",fe),Be(B)}function Be(T){Ze(T),Ve.remove(T)}function Ze(T){const B=Ve.get(T).programs;B!==void 0&&(B.forEach(function(q){j.releaseProgram(q)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,Y,H,de){B===null&&(B=re);const ye=H.isMesh&&H.matrixWorld.determinant()<0,Ee=Jd(T,B,q,Y,H);Le.setMaterial(Y,ye);let Te=q.index,Ue=1;if(Y.wireframe===!0){if(Te=$.getWireframeAttribute(q),Te===void 0)return;Ue=2}const Fe=q.drawRange,Ie=q.attributes.position;let Qe=Fe.start*Ue,pt=(Fe.start+Fe.count)*Ue;de!==null&&(Qe=Math.max(Qe,de.start*Ue),pt=Math.min(pt,(de.start+de.count)*Ue)),Te!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,Te.count)):Ie!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,Ie.count));const mt=pt-Qe;if(mt<0||mt===1/0)return;qe.setup(H,Y,Ee,q,Te);let Jt,et=He;if(Te!==null&&(Jt=A.get(Te),et=De,et.setIndex(Jt)),H.isMesh)Y.wireframe===!0?(Le.setLineWidth(Y.wireframeLinewidth*Se()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(H.isLine){let Pe=Y.linewidth;Pe===void 0&&(Pe=1),Le.setLineWidth(Pe*Se()),H.isLineSegments?et.setMode(U.LINES):H.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else H.isPoints?et.setMode(U.POINTS):H.isSprite&&et.setMode(U.TRIANGLES);if(H.isBatchedMesh)H._multiDrawInstances!==null?et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances):et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)et.renderInstances(Qe,mt,H.count);else if(q.isInstancedBufferGeometry){const Pe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Bt=Math.min(q.instanceCount,Pe);et.renderInstances(Qe,mt,Bt)}else et.render(Qe,mt)};function _t(T,B,q){T.transparent===!0&&T.side===ft&&T.forceSinglePass===!1?(T.side=Zt,T.needsUpdate=!0,Na(T,B,q),T.side=wi,T.needsUpdate=!0,Na(T,B,q),T.side=ft):Na(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),g=le.get(q),g.init(B),M.push(g),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),T!==q&&T.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const Y=new Set;return T.traverse(function(H){const de=H.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const Ee=de[ye];_t(Ee,q,H),Y.add(Ee)}else _t(de,q,H),Y.add(de)}),M.pop(),g=null,Y},this.compileAsync=function(T,B,q=null){const Y=this.compile(T,B,q);return new Promise(H=>{function de(){if(Y.forEach(function(ye){Ve.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){H(T);return}setTimeout(de,10)}Oe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Et=null;function rt(T){Et&&Et(T)}function wn(){Ni.stop()}function An(){Ni.start()}const Ni=new rd;Ni.setAnimationLoop(rt),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(T){Et=T,z.setAnimationLoop(T),T===null?Ni.stop():Ni.start()},z.addEventListener("sessionstart",wn),z.addEventListener("sessionend",An),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(B),B=z.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,w),g=le.get(T,M.length),g.init(B),M.push(g),ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),pe.setFromProjectionMatrix(ce),K=this.localClippingEnabled,W=ue.init(this.clippingPlanes,K),v=se.get(T,m.length),v.init(),m.push(v),z.enabled===!0&&z.isPresenting===!0){const de=x.xr.getDepthSensingMesh();de!==null&&ls(de,B,-1/0,x.sortObjects)}ls(T,B,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,ie),ve=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,ve&&ae.addToRenderList(v,T),this.info.render.frame++,W===!0&&ue.beginShadows();const q=g.state.shadowsArray;we.render(q,T,B),W===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,H=v.transmissive;if(g.setupLights(),B.isArrayCamera){const de=B.cameras;if(H.length>0)for(let ye=0,Ee=de.length;ye<Ee;ye++){const Te=de[ye];xc(Y,H,T,Te)}ve&&ae.render(T);for(let ye=0,Ee=de.length;ye<Ee;ye++){const Te=de[ye];vc(v,T,Te,Te.viewport)}}else H.length>0&&xc(Y,H,T,B),ve&&ae.render(T),vc(v,T,B);w!==null&&(ze.updateMultisampleRenderTarget(w),ze.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,B),qe.resetDefaultState(),R=-1,b=null,M.pop(),M.length>0?(g=M[M.length-1],W===!0&&ue.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function ls(T,B,q,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||pe.intersectsSprite(T)){Y&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const ye=te.update(T),Ee=T.material;Ee.visible&&v.push(T,ye,Ee,q,O.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||pe.intersectsObject(T))){const ye=te.update(T),Ee=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),O.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),O.copy(ye.boundingSphere.center)),O.applyMatrix4(T.matrixWorld).applyMatrix4(ce)),Array.isArray(Ee)){const Te=ye.groups;for(let Ue=0,Fe=Te.length;Ue<Fe;Ue++){const Ie=Te[Ue],Qe=Ee[Ie.materialIndex];Qe&&Qe.visible&&v.push(T,ye,Qe,q,O.z,Ie)}}else Ee.visible&&v.push(T,ye,Ee,q,O.z,null)}}const de=T.children;for(let ye=0,Ee=de.length;ye<Ee;ye++)ls(de[ye],B,q,Y)}function vc(T,B,q,Y){const H=T.opaque,de=T.transmissive,ye=T.transparent;g.setupLightsView(q),W===!0&&ue.setGlobalState(x.clippingPlanes,q),Y&&Le.viewport(S.copy(Y)),H.length>0&&Da(H,B,q),de.length>0&&Da(de,B,q),ye.length>0&&Da(ye,B,q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function xc(T,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new Zi(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Wo:Ai,minFilter:Yi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const de=g.state.transmissionRenderTarget[Y.id],ye=Y.viewport||S;de.setSize(ye.z,ye.w);const Ee=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(I),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),ve?ae.render(q):x.clear();const Te=x.toneMapping;x.toneMapping=bi;const Ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),W===!0&&ue.setGlobalState(x.clippingPlanes,Y),Da(T,q,Y),ze.updateMultisampleRenderTarget(de),ze.updateRenderTargetMipmap(de),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ie=0,Qe=B.length;Ie<Qe;Ie++){const pt=B[Ie],mt=pt.object,Jt=pt.geometry,et=pt.material,Pe=pt.group;if(et.side===ft&&mt.layers.test(Y.layers)){const Bt=et.side;et.side=Zt,et.needsUpdate=!0,Mc(mt,q,Y,Jt,et,Pe),et.side=Bt,et.needsUpdate=!0,Fe=!0}}Fe===!0&&(ze.updateMultisampleRenderTarget(de),ze.updateRenderTargetMipmap(de))}x.setRenderTarget(Ee),x.setClearColor(I,F),Ue!==void 0&&(Y.viewport=Ue),x.toneMapping=Te}function Da(T,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let H=0,de=T.length;H<de;H++){const ye=T[H],Ee=ye.object,Te=ye.geometry,Ue=Y===null?ye.material:Y,Fe=ye.group;Ee.layers.test(q.layers)&&Mc(Ee,B,q,Te,Ue,Fe)}}function Mc(T,B,q,Y,H,de){T.onBeforeRender(x,B,q,Y,H,de),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,B,q,Y,T,de),H.transparent===!0&&H.side===ft&&H.forceSinglePass===!1?(H.side=Zt,H.needsUpdate=!0,x.renderBufferDirect(q,B,Y,H,T,de),H.side=wi,H.needsUpdate=!0,x.renderBufferDirect(q,B,Y,H,T,de),H.side=ft):x.renderBufferDirect(q,B,Y,H,T,de),T.onAfterRender(x,B,q,Y,H,de)}function Na(T,B,q){B.isScene!==!0&&(B=re);const Y=Ve.get(T),H=g.state.lights,de=g.state.shadowsArray,ye=H.state.version,Ee=j.getParameters(T,H.state,de,B,q),Te=j.getProgramCacheKey(Ee);let Ue=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?D:ct).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",fe),Ue=new Map,Y.programs=Ue);let Fe=Ue.get(Te);if(Fe!==void 0){if(Y.currentProgram===Fe&&Y.lightsStateVersion===ye)return Sc(T,Ee),Fe}else Ee.uniforms=j.getUniforms(T),T.onBuild(q,Ee,x),T.onBeforeCompile(Ee,x),Fe=j.acquireProgram(Ee,Te),Ue.set(Te,Fe),Y.uniforms=Ee.uniforms;const Ie=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=ue.uniform),Sc(T,Ee),Y.needsLights=ef(T),Y.lightsStateVersion=ye,Y.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMap.value=H.state.directionalShadowMap,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotShadowMap.value=H.state.spotShadowMap,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMap.value=H.state.pointShadowMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Fe,Y.uniformsList=null,Fe}function yc(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=bo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Sc(T,B){const q=Ve.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Jd(T,B,q,Y,H){B.isScene!==!0&&(B=re),ze.resetTextureUnits();const de=B.fog,ye=Y.isMeshStandardMaterial?B.environment:null,Ee=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ci,Te=(Y.isMeshStandardMaterial?D:ct).get(Y.envMap||ye),Ue=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Fe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,pt=!!q.morphAttributes.color;let mt=bi;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=x.toneMapping);const Jt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,et=Jt!==void 0?Jt.length:0,Pe=Ve.get(Y),Bt=g.state.lights;if(W===!0&&(K===!0||T!==b)){const on=T===b&&Y.id===R;ue.setState(Y,T,on)}let at=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Bt.state.version||Pe.outputColorSpace!==Ee||H.isBatchedMesh&&Pe.batching===!1||!H.isBatchedMesh&&Pe.batching===!0||H.isBatchedMesh&&Pe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Pe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Pe.instancing===!1||!H.isInstancedMesh&&Pe.instancing===!0||H.isSkinnedMesh&&Pe.skinning===!1||!H.isSkinnedMesh&&Pe.skinning===!0||H.isInstancedMesh&&Pe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Pe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Pe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Pe.instancingMorph===!1&&H.morphTexture!==null||Pe.envMap!==Te||Y.fog===!0&&Pe.fog!==de||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ue.numPlanes||Pe.numIntersection!==ue.numIntersection)||Pe.vertexAlphas!==Ue||Pe.vertexTangents!==Fe||Pe.morphTargets!==Ie||Pe.morphNormals!==Qe||Pe.morphColors!==pt||Pe.toneMapping!==mt||Pe.morphTargetsCount!==et)&&(at=!0):(at=!0,Pe.__version=Y.version);let Hn=Pe.currentProgram;at===!0&&(Hn=Na(Y,B,H));let Ua=!1,Ui=!1,cs=!1;const wt=Hn.getUniforms(),oi=Pe.uniforms;if(Le.useProgram(Hn.program)&&(Ua=!0,Ui=!0,cs=!0),Y.id!==R&&(R=Y.id,Ui=!0),Ua||b!==T){wt.setValue(U,"projectionMatrix",T.projectionMatrix),wt.setValue(U,"viewMatrix",T.matrixWorldInverse);const on=wt.map.cameraPosition;on!==void 0&&on.setValue(U,O.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&wt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&wt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Ui=!0,cs=!0)}if(H.isSkinnedMesh){wt.setOptional(U,H,"bindMatrix"),wt.setOptional(U,H,"bindMatrixInverse");const on=H.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),wt.setValue(U,"boneTexture",on.boneTexture,ze))}H.isBatchedMesh&&(wt.setOptional(U,H,"batchingTexture"),wt.setValue(U,"batchingTexture",H._matricesTexture,ze),wt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&wt.setValue(U,"batchingColorTexture",H._colorsTexture,ze));const us=q.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&be.update(H,q,Hn),(Ui||Pe.receiveShadow!==H.receiveShadow)&&(Pe.receiveShadow=H.receiveShadow,wt.setValue(U,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(oi.envMap.value=Te,oi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(oi.envMapIntensity.value=B.environmentIntensity),Ui&&(wt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Qd(oi,cs),de&&Y.fog===!0&&Z.refreshFogUniforms(oi,de),Z.refreshMaterialUniforms(oi,Y,X,V,g.state.transmissionRenderTarget[T.id]),bo.upload(U,yc(Pe),oi,ze)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(bo.upload(U,yc(Pe),oi,ze),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&wt.setValue(U,"center",H.center),wt.setValue(U,"modelViewMatrix",H.modelViewMatrix),wt.setValue(U,"normalMatrix",H.normalMatrix),wt.setValue(U,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const on=Y.uniformsGroups;for(let hs=0,tf=on.length;hs<tf;hs++){const bc=on[hs];Ye.update(bc,Hn),Ye.bind(bc,Hn)}}return Hn}function Qd(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function ef(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,B,q){Ve.get(T.texture).__webglTexture=B,Ve.get(T.depthTexture).__webglTexture=q;const Y=Ve.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const q=Ve.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){w=T,C=B,E=q;let Y=!0,H=null,de=!1,ye=!1;if(T){const Te=Ve.get(T);Te.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1):Te.__webglFramebuffer===void 0?ze.setupRenderTarget(T):Te.__hasExternalTextures&&ze.rebindTextures(T,Ve.get(T.texture).__webglTexture,Ve.get(T.depthTexture).__webglTexture);const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ye=!0);const Fe=Ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?H=Fe[B][q]:H=Fe[B],de=!0):T.samples>0&&ze.useMultisampledRTT(T)===!1?H=Ve.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[q]:H=Fe,S.copy(T.viewport),L.copy(T.scissor),N=T.scissorTest}else S.copy(ne).multiplyScalar(X).floor(),L.copy(oe).multiplyScalar(X).floor(),N=Q;if(Le.bindFramebuffer(U.FRAMEBUFFER,H)&&Y&&Le.drawBuffers(T,H),Le.viewport(S),Le.scissor(L),Le.setScissorTest(N),de){const Te=Ve.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,q)}else if(ye){const Te=Ve.get(T.texture),Ue=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,q||0,Ue)}R=-1},this.readRenderTargetPixels=function(T,B,q,Y,H,de,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){Le.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Te=T.texture,Ue=Te.format,Fe=Te.type;if(!Ce.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&q>=0&&q<=T.height-H&&U.readPixels(B,q,Y,H,_e.convert(Ue),_e.convert(Fe),de)}finally{const Te=w!==null?Ve.get(w).__webglFramebuffer:null;Le.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,Y,H,de,ye){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){Le.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Te=T.texture,Ue=Te.format,Fe=Te.type;if(!Ce.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-Y&&q>=0&&q<=T.height-H){const Ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(B,q,Y,H,_e.convert(Ue),_e.convert(Fe),0),U.flush();const Qe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await bp(U,Qe,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de)}finally{U.deleteBuffer(Ie),U.deleteSync(Qe)}return de}}finally{const Te=w!==null?Ve.get(w).__webglFramebuffer:null;Le.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,B=null,q=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-q),H=Math.floor(T.image.width*Y),de=Math.floor(T.image.height*Y),ye=B!==null?B.x:0,Ee=B!==null?B.y:0;ze.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ye,Ee,H,de),Le.unbindTexture()},this.copyTextureToTexture=function(T,B,q=null,Y=null,H=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],B=arguments[2],H=arguments[3]||0,q=null);let de,ye,Ee,Te,Ue,Fe;q!==null?(de=q.max.x-q.min.x,ye=q.max.y-q.min.y,Ee=q.min.x,Te=q.min.y):(de=T.image.width,ye=T.image.height,Ee=0,Te=0),Y!==null?(Ue=Y.x,Fe=Y.y):(Ue=0,Fe=0);const Ie=_e.convert(B.format),Qe=_e.convert(B.type);ze.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const pt=U.getParameter(U.UNPACK_ROW_LENGTH),mt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Jt=U.getParameter(U.UNPACK_SKIP_PIXELS),et=U.getParameter(U.UNPACK_SKIP_ROWS),Pe=U.getParameter(U.UNPACK_SKIP_IMAGES),Bt=T.isCompressedTexture?T.mipmaps[H]:T.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Bt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Bt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),U.pixelStorei(U.UNPACK_SKIP_ROWS,Te),T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,Ue,Fe,de,ye,Ie,Qe,Bt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,Ue,Fe,Bt.width,Bt.height,Ie,Bt.data):U.texSubImage2D(U.TEXTURE_2D,H,Ue,Fe,Ie,Qe,Bt),U.pixelStorei(U.UNPACK_ROW_LENGTH,pt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Jt),U.pixelStorei(U.UNPACK_SKIP_ROWS,et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pe),H===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q=null,Y=null,H=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],B=arguments[3],H=arguments[4]||0);let de,ye,Ee,Te,Ue,Fe,Ie,Qe,pt;const mt=T.isCompressedTexture?T.mipmaps[H]:T.image;q!==null?(de=q.max.x-q.min.x,ye=q.max.y-q.min.y,Ee=q.max.z-q.min.z,Te=q.min.x,Ue=q.min.y,Fe=q.min.z):(de=mt.width,ye=mt.height,Ee=mt.depth,Te=0,Ue=0,Fe=0),Y!==null?(Ie=Y.x,Qe=Y.y,pt=Y.z):(Ie=0,Qe=0,pt=0);const Jt=_e.convert(B.format),et=_e.convert(B.type);let Pe;if(B.isData3DTexture)ze.setTexture3D(B,0),Pe=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)ze.setTexture2DArray(B,0),Pe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Bt=U.getParameter(U.UNPACK_ROW_LENGTH),at=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Hn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ua=U.getParameter(U.UNPACK_SKIP_ROWS),Ui=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fe),T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Pe,H,Ie,Qe,pt,de,ye,Ee,Jt,et,mt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,H,Ie,Qe,pt,de,ye,Ee,Jt,mt.data):U.texSubImage3D(Pe,H,Ie,Qe,pt,de,ye,Ee,Jt,et,mt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Bt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Hn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ua),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ui),H===0&&B.generateMipmaps&&U.generateMipmap(Pe),Le.unbindTexture()},this.initRenderTarget=function(T){Ve.get(T).__webglFramebuffer===void 0&&ze.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ze.setTextureCube(T,0):T.isData3DTexture?ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ze.setTexture2DArray(T,0):ze.setTexture2D(T,0),Le.unbindTexture()},this.resetState=function(){C=0,E=0,w=null,Le.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Nl?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===qo?"display-p3":"srgb"}}class Pi extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class P_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new P;class Do{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),a=tt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Do(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hd extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mr;const na=new P,yr=new P,Sr=new P,br=new me,ia=new me,dd=new lt,ao=new P,ra=new P,oo=new P,Wu=new me,Ws=new me,qu=new me;class L_ extends vt{constructor(e=new hd){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new P_(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new Do(i,3,0,!1)),Mr.setAttribute("uv",new Do(i,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),dd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-Sr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const s=this.center;so(ao.set(-.5,-.5,0),Sr,s,yr,r,a),so(ra.set(.5,-.5,0),Sr,s,yr,r,a),so(oo.set(.5,.5,0),Sr,s,yr,r,a),Wu.set(0,0),Ws.set(1,0),qu.set(1,1);let o=e.ray.intersectTriangle(ao,ra,oo,!1,na);if(o===null&&(so(ra.set(-.5,.5,0),Sr,s,yr,r,a),Ws.set(0,1),o=e.ray.intersectTriangle(ao,oo,ra,!1,na),o===null))return;const l=e.ray.origin.distanceTo(na);l<e.near||l>e.far||t.push({distance:l,point:na.clone(),uv:cn.getInterpolation(na,ao,ra,oo,Wu,Ws,qu,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function so(n,e,t,i,r,a){br.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ia.x=a*br.x-r*br.y,ia.y=r*br.x+a*br.y):ia.copy(br),n.copy(e),n.x+=ia.x,n.y+=ia.y,n.applyMatrix4(dd)}class Ji extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new P,Uo=new P,Xu=new lt,aa=new Xo,lo=new Ri,qs=new P,Yu=new P;class ba extends vt{constructor(e=new je,t=new Ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)No.fromBufferAttribute(t,r-1),Uo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=No.distanceTo(Uo);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),lo.radius+=a,e.ray.intersectsSphere(lo)===!1)return;Xu.copy(r).invert(),aa.copy(e.ray).applyMatrix4(Xu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let v=f,g=_-1;v<g;v+=c){const m=u.getX(v),M=u.getX(v+1),x=co(this,e,aa,l,m,M);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(f),m=co(this,e,aa,l,v,g);m&&t.push(m)}}else{const f=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let v=f,g=_-1;v<g;v+=c){const m=co(this,e,aa,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=co(this,e,aa,l,_-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function co(n,e,t,i,r,a){const s=n.geometry.attributes.position;if(No.fromBufferAttribute(s,r),Uo.fromBufferAttribute(s,a),t.distanceSqToSegment(No,Uo,qs,Yu)>i)return;qs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(qs);if(!(l<e.near||l>e.far))return{distance:l,point:Yu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const $u=new P,ju=new P;class kl extends ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)$u.fromBufferAttribute(t,r),ju.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$u.distanceTo(ju);e.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class I_ extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zu=new lt,fl=new Xo,uo=new Ri,ho=new P;class D_ extends vt{constructor(e=new je,t=new I_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),uo.radius+=a,e.ray.intersectsSphere(uo)===!1)return;Zu.copy(r).invert(),fl.copy(e.ray).applyMatrix4(Zu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let _=d,v=f;_<v;_++){const g=c.getX(_);ho.fromBufferAttribute(h,g),Ku(ho,g,l,r,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let _=d,v=f;_<v;_++)ho.fromBufferAttribute(h,_),Ku(ho,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ku(n,e,t,i,r,a,s){const o=fl.distanceSqToPoint(n);if(o<t){const l=new P;fl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class N_ extends Yt{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(a-1);const u=i[r],d=i[r+1]-u,f=(s-u)/d;return(r+f)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),l=t||(s.isVector2?new me:new P);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,r=[],a=[],s=[],o=new P,l=new lt;for(let f=0;f<=e;f++){const _=f/e;r[f]=this.getTangentAt(_,new P)}a[0]=new P,s[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Rt(r[f-1].dot(r[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,_))}s[f].crossVectors(r[f],a[f])}if(t===!0){let f=Math.acos(Rt(a[0].dot(a[e]),-1,1));f/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let _=1;_<=e;_++)a[_].applyMatrix4(l.makeRotationAxis(r[_],f*_)),s[_].crossVectors(r[_],a[_])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fd extends ai{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class U_ extends fd{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Vl(){let n=0,e=0,t=0,i=0;function r(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,u,h){let d=(s-a)/c-(o-a)/(c+u)+(o-s)/u,f=(o-s)/u-(l-s)/(u+h)+(l-o)/h;d*=u,f*=u,r(s,o,d,f)},calc:function(a){const s=a*a,o=s*a;return n+e*a+t*s+i*o}}}const fo=new P,Xs=new Vl,Ys=new Vl,$s=new Vl;class pd extends ai{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%a]:(fo.subVectors(r[0],r[1]).add(r[0]),c=fo);const h=r[o%a],d=r[(o+1)%a];if(this.closed||o+2<a?u=r[(o+2)%a]:(fo.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),Xs.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,v,g),Ys.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,v,g),$s.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,v,g)}else this.curveType==="catmullrom"&&(Xs.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ys.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),$s.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Xs.calc(l),Ys.calc(l),$s.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ju(n,e,t,i,r){const a=(i-e)*.5,s=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+a+s)*l+(-3*t+3*i-2*a-s)*o+a*n+t}function F_(n,e){const t=1-n;return t*t*e}function O_(n,e){return 2*(1-n)*n*e}function z_(n,e){return n*n*e}function ha(n,e,t,i){return F_(n,e)+O_(n,t)+z_(n,i)}function B_(n,e){const t=1-n;return t*t*t*e}function k_(n,e){const t=1-n;return 3*t*t*n*e}function V_(n,e){return 3*(1-n)*n*n*e}function H_(n,e){return n*n*n*e}function da(n,e,t,i,r){return B_(n,e)+k_(n,t)+V_(n,i)+H_(n,r)}class G_ extends ai{constructor(e=new me,t=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new me){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(da(e,r.x,a.x,s.x,o.x),da(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class W_ extends ai{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(da(e,r.x,a.x,s.x,o.x),da(e,r.y,a.y,s.y,o.y),da(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class q_ extends ai{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X_ extends ai{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y_ extends ai{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ha(e,r.x,a.x,s.x),ha(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class md extends ai{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ha(e,r.x,a.x,s.x),ha(e,r.y,a.y,s.y),ha(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $_ extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return i.set(Ju(o,l.x,c.x,u.x,h.x),Ju(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new me().fromArray(r))}return this}}var j_=Object.freeze({__proto__:null,ArcCurve:U_,CatmullRomCurve3:pd,CubicBezierCurve:G_,CubicBezierCurve3:W_,EllipseCurve:fd,LineCurve:q_,LineCurve3:X_,QuadraticBezierCurve:Y_,QuadraticBezierCurve3:md,SplineCurve:$_});class Hl extends je{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],s=[],o=[],l=[],c=new P,u=new me;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(s[d]/e+1)/2,u.y=(s[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xr extends je{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],h=[],d=[],f=[];let _=0;const v=[],g=i/2;let m=0;M(),s===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(f,2));function M(){const y=new P,C=new P;let E=0;const w=(t-e)/i;for(let R=0;R<=a;R++){const b=[],S=R/a,L=S*(t-e)+e;for(let N=0;N<=r;N++){const I=N/r,F=I*l+o,k=Math.sin(F),V=Math.cos(F);C.x=L*k,C.y=-S*i+g,C.z=L*V,h.push(C.x,C.y,C.z),y.set(k,w,V).normalize(),d.push(y.x,y.y,y.z),f.push(I,1-S),b.push(_++)}v.push(b)}for(let R=0;R<r;R++)for(let b=0;b<a;b++){const S=v[b][R],L=v[b+1][R],N=v[b+1][R+1],I=v[b][R+1];u.push(S,L,I),u.push(L,N,I),E+=6}c.addGroup(m,E,0),m+=E}function x(y){const C=_,E=new me,w=new P;let R=0;const b=y===!0?e:t,S=y===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),_++;const L=_;for(let N=0;N<=r;N++){const F=N/r*l+o,k=Math.cos(F),V=Math.sin(F);w.x=b*V,w.y=g*S,w.z=b*k,h.push(w.x,w.y,w.z),d.push(0,S,0),E.x=k*.5+.5,E.y=V*.5*S+.5,f.push(E.x,E.y),_++}for(let N=0;N<r;N++){const I=C+N,F=L+N;y===!0?u.push(F,F+1,I):u.push(F+1,F,I),R+=3}c.addGroup(m,R,y===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends Xr{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Gl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const po=new P,mo=new P,js=new P,go=new cn;class Z_ extends je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(Cr*t),s=e.getIndex(),o=e.getAttribute("position"),l=s?s.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let _=0;_<l;_+=3){s?(c[0]=s.getX(_),c[1]=s.getX(_+1),c[2]=s.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:g,c:m}=go;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),go.getNormal(js),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const x=(M+1)%3,y=h[M],C=h[x],E=go[u[M]],w=go[u[x]],R=`${y}_${C}`,b=`${C}_${y}`;b in d&&d[b]?(js.dot(d[b].normal)<=a&&(f.push(E.x,E.y,E.z),f.push(w.x,w.y,w.z)),d[b]=null):R in d||(d[R]={index0:c[M],index1:c[x],normal:js.clone()})}}for(const _ in d)if(d[_]){const{index0:v,index1:g}=d[_];po.fromBufferAttribute(o,v),mo.fromBufferAttribute(o,g),f.push(po.x,po.y,po.z),f.push(mo.x,mo.y,mo.z)}this.setAttribute("position",new ke(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yr extends je{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],_=[],v=[],g=[];for(let m=0;m<=i;m++){const M=[],x=m/i;let y=0;m===0&&s===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const E=C/t;h.x=-e*Math.cos(r+E*a)*Math.sin(s+x*o),h.y=e*Math.cos(s+x*o),h.z=e*Math.sin(r+E*a)*Math.sin(s+x*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(E+y,1-x),M.push(c++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){const x=u[m][M+1],y=u[m][M],C=u[m+1][M],E=u[m+1][M+1];(m!==0||s>0)&&f.push(x,y,E),(m!==i-1||l<Math.PI)&&f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wl extends je{constructor(e=new md(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new P,l=new P,c=new me;let u=new P;const h=[],d=[],f=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(f,2));function v(){for(let x=0;x<t;x++)g(x);g(a===!1?t:0),M(),m()}function g(x){u=e.getPointAt(x/t,u);const y=s.normals[x],C=s.binormals[x];for(let E=0;E<=r;E++){const w=E/r*Math.PI*2,R=Math.sin(w),b=-Math.cos(w);l.x=b*y.x+R*C.x,l.y=b*y.y+R*C.y,l.z=b*y.z+R*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=t;x++)for(let y=1;y<=r;y++){const C=(r+1)*(x-1)+(y-1),E=(r+1)*x+(y-1),w=(r+1)*x+y,R=(r+1)*(x-1)+y;_.push(C,E,R),_.push(E,w,R)}}function M(){for(let x=0;x<=t;x++)for(let y=0;y<=r;y++)c.x=x/t,c.y=y/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wl(new j_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class gd extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K_ extends gd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fa extends ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ql extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class _d extends ql{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zs=new lt,Qu=new P,eh=new P;class J_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eh),t.updateMatrixWorld(),Zs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q_ extends J_{constructor(){super(new En(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dn extends ql{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Q_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Li extends ql{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const th=new lt;class ev{constructor(e,t,i=0,r=1/0){this.ray=new Xo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return th.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(e,t=!0,i=[]){return pl(e,this,i,t),i.sort(nh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)pl(e[r],this,i,t);return i.sort(nh),i}}function nh(n,e){return n.distance-e.distance}function pl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)pl(a[s],e,t,!0)}}const ih=new P;let _o,Ks;class tv extends vt{constructor(e=new P(0,0,1),t=new P(0,0,0),i=1,r=16776960,a=i*.2,s=a*.2){super(),this.type="ArrowHelper",_o===void 0&&(_o=new je,_o.setAttribute("position",new ke([0,0,0,0,1,0],3)),Ks=new Xr(0,.5,1,5,1),Ks.translate(0,-.5,0)),this.position.copy(t),this.line=new ba(_o,new Ji({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $e(Ks,new nn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ih.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ih,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);const Js={type:"change"},Qs={type:"start"},el={type:"end"};class nv extends Ki{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.target=new P;const a=1e-6,s=new P;let o=1,l=r.NONE,c=r.NONE,u=0,h=0,d=0;const f=new P,_=new me,v=new me,g=new P,m=new me,M=new me,x=new me,y=new me,C=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const O=i.domElement.getBoundingClientRect(),re=i.domElement.ownerDocument.documentElement;i.screen.left=O.left+window.pageXOffset-re.clientLeft,i.screen.top=O.top+window.pageYOffset-re.clientTop,i.screen.width=O.width,i.screen.height=O.height};const w=function(){const O=new me;return function(ve,Se){return O.set((ve-i.screen.left)/i.screen.width,(Se-i.screen.top)/i.screen.height),O}}(),R=function(){const O=new me;return function(ve,Se){return O.set((ve-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-Se))/i.screen.width),O}}();this.rotateCamera=function(){const O=new P,re=new Gr,ve=new P,Se=new P,U=new P,Ae=new P;return function(){Ae.set(v.x-_.x,v.y-_.y,0);let Ce=Ae.length();Ce?(f.copy(i.object.position).sub(i.target),ve.copy(f).normalize(),Se.copy(i.object.up).normalize(),U.crossVectors(Se,ve).normalize(),Se.setLength(v.y-_.y),U.setLength(v.x-_.x),Ae.copy(Se.add(U)),O.crossVectors(Ae,f).normalize(),Ce*=i.rotateSpeed,re.setFromAxisAngle(O,Ce),f.applyQuaternion(re),i.object.up.applyQuaternion(re),g.copy(O),d=Ce):!i.staticMoving&&d&&(d*=Math.sqrt(1-i.dynamicDampingFactor),f.copy(i.object.position).sub(i.target),re.setFromAxisAngle(g,d),f.applyQuaternion(re),i.object.up.applyQuaternion(re)),_.copy(v)}}(),this.zoomCamera=function(){let O;l===r.TOUCH_ZOOM_PAN?(O=u/h,u=h,i.object.isPerspectiveCamera?f.multiplyScalar(O):i.object.isOrthographicCamera?(i.object.zoom=nu.clamp(i.object.zoom/O,i.minZoom,i.maxZoom),o!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(O=1+(M.y-m.y)*i.zoomSpeed,O!==1&&O>0&&(i.object.isPerspectiveCamera?f.multiplyScalar(O):i.object.isOrthographicCamera?(i.object.zoom=nu.clamp(i.object.zoom/O,i.minZoom,i.maxZoom),o!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?m.copy(M):m.y+=(M.y-m.y)*this.dynamicDampingFactor)},this.panCamera=function(){const O=new me,re=new P,ve=new P;return function(){if(O.copy(y).sub(x),O.lengthSq()){if(i.object.isOrthographicCamera){const U=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,Ae=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;O.x*=U,O.y*=Ae}O.multiplyScalar(f.length()*i.panSpeed),ve.copy(f).cross(i.object.up).setLength(O.x),ve.add(re.copy(i.object.up).setLength(O.y)),i.object.position.add(ve),i.target.add(ve),i.staticMoving?x.copy(y):x.add(O.subVectors(y,x).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(f.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,f.setLength(i.maxDistance)),m.copy(M)),f.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,f.setLength(i.minDistance)),m.copy(M)))},this.update=function(){f.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,f),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),s.distanceToSquared(i.object.position)>a&&(i.dispatchEvent(Js),s.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(s.distanceToSquared(i.object.position)>a||o!==i.object.zoom)&&(i.dispatchEvent(Js),s.copy(i.object.position),o=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),f.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Js),s.copy(i.object.position),o=i.object.zoom};function b(O){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",L)),pe(O),O.pointerType==="touch"?ie(O):k(O))}function S(O){i.enabled!==!1&&(O.pointerType==="touch"?ne(O):V(O))}function L(O){i.enabled!==!1&&(O.pointerType==="touch"?oe(O):X(),W(O),C.length===0&&(i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",L)))}function N(O){W(O)}function I(O){i.enabled!==!1&&(window.removeEventListener("keydown",I),c===r.NONE&&(O.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:O.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:O.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function F(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",I))}function k(O){if(l===r.NONE)switch(O.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const re=c!==r.NONE?c:l;re===r.ROTATE&&!i.noRotate?(v.copy(R(O.pageX,O.pageY)),_.copy(v)):re===r.ZOOM&&!i.noZoom?(m.copy(w(O.pageX,O.pageY)),M.copy(m)):re===r.PAN&&!i.noPan&&(x.copy(w(O.pageX,O.pageY)),y.copy(x)),i.dispatchEvent(Qs)}function V(O){const re=c!==r.NONE?c:l;re===r.ROTATE&&!i.noRotate?(_.copy(v),v.copy(R(O.pageX,O.pageY))):re===r.ZOOM&&!i.noZoom?M.copy(w(O.pageX,O.pageY)):re===r.PAN&&!i.noPan&&y.copy(w(O.pageX,O.pageY))}function X(){l=r.NONE,i.dispatchEvent(el)}function G(O){if(i.enabled!==!1&&i.noZoom!==!0){switch(O.preventDefault(),O.deltaMode){case 2:m.y-=O.deltaY*.025;break;case 1:m.y-=O.deltaY*.01;break;default:m.y-=O.deltaY*25e-5;break}i.dispatchEvent(Qs),i.dispatchEvent(el)}}function ie(O){switch(K(O),C.length){case 1:l=r.TOUCH_ROTATE,v.copy(R(C[0].pageX,C[0].pageY)),_.copy(v);break;default:l=r.TOUCH_ZOOM_PAN;const re=C[0].pageX-C[1].pageX,ve=C[0].pageY-C[1].pageY;h=u=Math.sqrt(re*re+ve*ve);const Se=(C[0].pageX+C[1].pageX)/2,U=(C[0].pageY+C[1].pageY)/2;x.copy(w(Se,U)),y.copy(x);break}i.dispatchEvent(Qs)}function ne(O){switch(K(O),C.length){case 1:_.copy(v),v.copy(R(O.pageX,O.pageY));break;default:const re=ce(O),ve=O.pageX-re.x,Se=O.pageY-re.y;h=Math.sqrt(ve*ve+Se*Se);const U=(O.pageX+re.x)/2,Ae=(O.pageY+re.y)/2;y.copy(w(U,Ae));break}}function oe(O){switch(C.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,v.copy(R(O.pageX,O.pageY)),_.copy(v);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let re=0;re<C.length;re++)if(C[re].pointerId!==O.pointerId){const ve=E[C[re].pointerId];v.copy(R(ve.x,ve.y)),_.copy(v);break}break}i.dispatchEvent(el)}function Q(O){i.enabled!==!1&&O.preventDefault()}function pe(O){C.push(O)}function W(O){delete E[O.pointerId];for(let re=0;re<C.length;re++)if(C[re].pointerId==O.pointerId){C.splice(re,1);return}}function K(O){let re=E[O.pointerId];re===void 0&&(re=new me,E[O.pointerId]=re),re.set(O.pageX,O.pageY)}function ce(O){const re=O.pointerId===C[0].pointerId?C[1]:C[0];return E[re.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",N),i.domElement.removeEventListener("wheel",G),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",L),window.removeEventListener("keydown",I),window.removeEventListener("keyup",F)},this.domElement.addEventListener("contextmenu",Q),this.domElement.addEventListener("pointerdown",b),this.domElement.addEventListener("pointercancel",N),this.domElement.addEventListener("wheel",G,{passive:!1}),window.addEventListener("keydown",I),window.addEventListener("keyup",F),this.handleResize(),this.update()}}class iv extends $e{constructor(e,t,i=!1,r=!1,a=1e4){const s=new je;super(s,t),this.isMarchingCubes=!0;const o=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(M){this.resolution=M,this.isolation=80,this.size=M,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const x=a*3;this.positionArray=new Float32Array(x*3);const y=new zt(this.positionArray,3);y.setUsage(Oa),s.setAttribute("position",y),this.normalArray=new Float32Array(x*3);const C=new zt(this.normalArray,3);if(C.setUsage(Oa),s.setAttribute("normal",C),this.enableUvs){this.uvArray=new Float32Array(x*2);const E=new zt(this.uvArray,2);E.setUsage(Oa),s.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(x*3);const E=new zt(this.colorArray,3);E.setUsage(Oa),s.setAttribute("color",E)}s.boundingSphere=new Ri(new P,1)};function h(M,x,y){return M+(x-M)*y}function d(M,x,y,C,E,w,R,b,S,L){const N=(y-R)/(b-R),I=o.normal_cache;l[x+0]=C+N*o.delta,l[x+1]=E,l[x+2]=w,c[x+0]=h(I[M+0],I[M+3],N),c[x+1]=h(I[M+1],I[M+4],N),c[x+2]=h(I[M+2],I[M+5],N),u[x+0]=h(o.palette[S*3+0],o.palette[L*3+0],N),u[x+1]=h(o.palette[S*3+1],o.palette[L*3+1],N),u[x+2]=h(o.palette[S*3+2],o.palette[L*3+2],N)}function f(M,x,y,C,E,w,R,b,S,L){const N=(y-R)/(b-R),I=o.normal_cache;l[x+0]=C,l[x+1]=E+N*o.delta,l[x+2]=w;const F=M+o.yd*3;c[x+0]=h(I[M+0],I[F+0],N),c[x+1]=h(I[M+1],I[F+1],N),c[x+2]=h(I[M+2],I[F+2],N),u[x+0]=h(o.palette[S*3+0],o.palette[L*3+0],N),u[x+1]=h(o.palette[S*3+1],o.palette[L*3+1],N),u[x+2]=h(o.palette[S*3+2],o.palette[L*3+2],N)}function _(M,x,y,C,E,w,R,b,S,L){const N=(y-R)/(b-R),I=o.normal_cache;l[x+0]=C,l[x+1]=E,l[x+2]=w+N*o.delta;const F=M+o.zd*3;c[x+0]=h(I[M+0],I[F+0],N),c[x+1]=h(I[M+1],I[F+1],N),c[x+2]=h(I[M+2],I[F+2],N),u[x+0]=h(o.palette[S*3+0],o.palette[L*3+0],N),u[x+1]=h(o.palette[S*3+1],o.palette[L*3+1],N),u[x+2]=h(o.palette[S*3+2],o.palette[L*3+2],N)}function v(M){const x=M*3;o.normal_cache[x]===0&&(o.normal_cache[x+0]=o.field[M-1]-o.field[M+1],o.normal_cache[x+1]=o.field[M-o.yd]-o.field[M+o.yd],o.normal_cache[x+2]=o.field[M-o.zd]-o.field[M+o.zd])}function g(M,x,y,C,E){const w=C+1,R=C+o.yd,b=C+o.zd,S=w+o.yd,L=w+o.zd,N=C+o.yd+o.zd,I=w+o.yd+o.zd;let F=0;const k=o.field[C],V=o.field[w],X=o.field[R],G=o.field[S],ie=o.field[b],ne=o.field[L],oe=o.field[N],Q=o.field[I];k<E&&(F|=1),V<E&&(F|=2),X<E&&(F|=8),G<E&&(F|=4),ie<E&&(F|=16),ne<E&&(F|=32),oe<E&&(F|=128),Q<E&&(F|=64);const pe=rv[F];if(pe===0)return 0;const W=o.delta,K=M+W,ce=x+W,O=y+W;pe&1&&(v(C),v(w),d(C*3,0,E,M,x,y,k,V,C,w)),pe&2&&(v(w),v(S),f(w*3,3,E,K,x,y,V,G,w,S)),pe&4&&(v(R),v(S),d(R*3,6,E,M,ce,y,X,G,R,S)),pe&8&&(v(C),v(R),f(C*3,9,E,M,x,y,k,X,C,R)),pe&16&&(v(b),v(L),d(b*3,12,E,M,x,O,ie,ne,b,L)),pe&32&&(v(L),v(I),f(L*3,15,E,K,x,O,ne,Q,L,I)),pe&64&&(v(N),v(I),d(N*3,18,E,M,ce,O,oe,Q,N,I)),pe&128&&(v(b),v(N),f(b*3,21,E,M,x,O,ie,oe,b,N)),pe&256&&(v(C),v(b),_(C*3,24,E,M,x,y,k,ie,C,b)),pe&512&&(v(w),v(L),_(w*3,27,E,K,x,y,V,ne,w,L)),pe&1024&&(v(S),v(I),_(S*3,30,E,K,ce,y,G,Q,S,I)),pe&2048&&(v(R),v(N),_(R*3,33,E,M,ce,y,X,oe,R,N)),F<<=4;let re,ve,Se,U=0,Ae=0;for(;vo[F+Ae]!=-1;)re=F+Ae,ve=re+1,Se=re+2,m(l,c,u,3*vo[re],3*vo[ve],3*vo[Se]),Ae+=3,U++;return U}function m(M,x,y,C,E,w){const R=o.count*3;if(o.positionArray[R+0]=M[C],o.positionArray[R+1]=M[C+1],o.positionArray[R+2]=M[C+2],o.positionArray[R+3]=M[E],o.positionArray[R+4]=M[E+1],o.positionArray[R+5]=M[E+2],o.positionArray[R+6]=M[w],o.positionArray[R+7]=M[w+1],o.positionArray[R+8]=M[w+2],o.material.flatShading===!0){const b=(x[C+0]+x[E+0]+x[w+0])/3,S=(x[C+1]+x[E+1]+x[w+1])/3,L=(x[C+2]+x[E+2]+x[w+2])/3;o.normalArray[R+0]=b,o.normalArray[R+1]=S,o.normalArray[R+2]=L,o.normalArray[R+3]=b,o.normalArray[R+4]=S,o.normalArray[R+5]=L,o.normalArray[R+6]=b,o.normalArray[R+7]=S,o.normalArray[R+8]=L}else o.normalArray[R+0]=x[C+0],o.normalArray[R+1]=x[C+1],o.normalArray[R+2]=x[C+2],o.normalArray[R+3]=x[E+0],o.normalArray[R+4]=x[E+1],o.normalArray[R+5]=x[E+2],o.normalArray[R+6]=x[w+0],o.normalArray[R+7]=x[w+1],o.normalArray[R+8]=x[w+2];if(o.enableUvs){const b=o.count*2;o.uvArray[b+0]=M[C+0],o.uvArray[b+1]=M[C+2],o.uvArray[b+2]=M[E+0],o.uvArray[b+3]=M[E+2],o.uvArray[b+4]=M[w+0],o.uvArray[b+5]=M[w+2]}o.enableColors&&(o.colorArray[R+0]=y[C+0],o.colorArray[R+1]=y[C+1],o.colorArray[R+2]=y[C+2],o.colorArray[R+3]=y[E+0],o.colorArray[R+4]=y[E+1],o.colorArray[R+5]=y[E+2],o.colorArray[R+6]=y[w+0],o.colorArray[R+7]=y[w+1],o.colorArray[R+8]=y[w+2]),o.count+=3}this.addBall=function(M,x,y,C,E,w){const R=Math.sign(C);C=Math.abs(C);const b=w!=null;let S=new xe(M,x,y);if(b)try{S=w instanceof xe?w:Array.isArray(w)?new xe(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new xe(w)}catch{S=new xe(M,x,y)}const L=this.size*Math.sqrt(C/E),N=y*this.size,I=x*this.size,F=M*this.size;let k=Math.floor(N-L);k<1&&(k=1);let V=Math.floor(N+L);V>this.size-1&&(V=this.size-1);let X=Math.floor(I-L);X<1&&(X=1);let G=Math.floor(I+L);G>this.size-1&&(G=this.size-1);let ie=Math.floor(F-L);ie<1&&(ie=1);let ne=Math.floor(F+L);ne>this.size-1&&(ne=this.size-1);let oe,Q,pe,W,K,ce,O,re,ve,Se,U;for(pe=k;pe<V;pe++)for(K=this.size2*pe,re=pe/this.size-y,ve=re*re,Q=X;Q<G;Q++)for(W=K+this.size*Q,O=Q/this.size-x,Se=O*O,oe=ie;oe<ne;oe++)if(ce=oe/this.size-M,U=C/(1e-6+ce*ce+Se+ve)-E,U>0){this.field[W+oe]+=U*R;const Ae=Math.sqrt((oe-F)*(oe-F)+(Q-I)*(Q-I)+(pe-N)*(pe-N))/L,Oe=1-Ae*Ae*Ae*(Ae*(Ae*6-15)+10);this.palette[(W+oe)*3+0]+=S.r*Oe,this.palette[(W+oe)*3+1]+=S.g*Oe,this.palette[(W+oe)*3+2]+=S.b*Oe}},this.addPlaneX=function(M,x){const y=this.size,C=this.yd,E=this.zd,w=this.field;let R,b,S,L,N,I,F,k=y*Math.sqrt(M/x);for(k>y&&(k=y),R=0;R<k;R++)if(I=R/y,L=I*I,N=M/(1e-4+L)-x,N>0)for(b=0;b<y;b++)for(F=R+b*C,S=0;S<y;S++)w[E*S+F]+=N},this.addPlaneY=function(M,x){const y=this.size,C=this.yd,E=this.zd,w=this.field;let R,b,S,L,N,I,F,k,V=y*Math.sqrt(M/x);for(V>y&&(V=y),b=0;b<V;b++)if(I=b/y,L=I*I,N=M/(1e-4+L)-x,N>0)for(F=b*C,R=0;R<y;R++)for(k=F+R,S=0;S<y;S++)w[E*S+k]+=N},this.addPlaneZ=function(M,x){const y=this.size,C=this.yd,E=this.zd,w=this.field;let R,b,S,L,N,I,F,k,V=y*Math.sqrt(M/x);for(V>y&&(V=y),S=0;S<V;S++)if(I=S/y,L=I*I,N=M/(1e-4+L)-x,N>0)for(F=E*S,b=0;b<y;b++)for(k=F+b*C,R=0;R<y;R++)w[k+R]+=N},this.setCell=function(M,x,y,C){const E=this.size2*y+this.size*x+M;this.field[E]=C},this.getCell=function(M,x,y){const C=this.size2*y+this.size*x+M;return this.field[C]},this.blur=function(M=1){const x=this.field,y=x.slice(),C=this.size,E=this.size2;for(let w=0;w<C;w++)for(let R=0;R<C;R++)for(let b=0;b<C;b++){const S=E*b+C*R+w;let L=y[S],N=1;for(let I=-1;I<=1;I+=2){const F=I+w;if(!(F<0||F>=C))for(let k=-1;k<=1;k+=2){const V=k+R;if(!(V<0||V>=C))for(let X=-1;X<=1;X+=2){const G=X+b;if(G<0||G>=C)continue;const ie=E*G+C*V+F,ne=y[ie];N++,L+=M*(ne-L)/N}}}x[S]=L}},this.reset=function(){for(let M=0;M<this.size3;M++)this.normal_cache[M*3]=0,this.field[M]=0,this.palette[M*3]=this.palette[M*3+1]=this.palette[M*3+2]=0},this.update=function(){this.count=0;const M=this.size-2;for(let x=1;x<M;x++){const y=this.size2*x,C=(x-this.halfsize)/this.halfsize;for(let E=1;E<M;E++){const w=y+this.size*E,R=(E-this.halfsize)/this.halfsize;for(let b=1;b<M;b++){const S=(b-this.halfsize)/this.halfsize,L=w+b;g(S,R,C,L,this.isolation)}}}this.geometry.setDrawRange(0,this.count),s.getAttribute("position").needsUpdate=!0,s.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(s.getAttribute("uv").needsUpdate=!0),this.enableColors&&(s.getAttribute("color").needsUpdate=!0),this.count/3>a&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const rv=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),vo=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),xo=[1];function Mi(n){if(n<0)return NaN;for(let e=xo.length;e<=n;e+=1)xo[e]=xo[e-1]*e;return xo[n]}function vd(n,e,t){const i=Math.max(1,Math.min(6,Math.round(n))),r=Math.max(0,Math.min(i-1,Math.round(e))),a=Math.max(-r,Math.min(r,Math.round(t)));return{n:i,l:r,m:a}}function kn(n,e,t){if(e===0)return`${n}s`;if(e===1)return`${n}${t===0?"Pz":t>0?"Px":"Py"}`;if(e===2){if(t===0)return`${n}Dz2`;if(t===1)return`${n}Dxz`;if(t===-1)return`${n}Dyz`;if(t===2)return`${n}Dx2-y2`;if(t===-2)return`${n}Dxy`}if(e===3){if(t===0)return`${n}Fz3`;if(t===1)return`${n}Fxz2`;if(t===-1)return`${n}Fyz2`;if(t===2)return`${n}Fz(x2-y2)`;if(t===-2)return`${n}Fxyz`;if(t===3)return`${n}Fx(x2-3y2)`;if(t===-3)return`${n}Fy(3x2-y2)`}if(e===4){if(t===0)return`${n}Gz4`;if(t===1)return`${n}Gxz3`;if(t===-1)return`${n}Gyz3`;if(t===2)return`${n}Gz2(x2-y2)`;if(t===-2)return`${n}Gxyz2`;if(t===3)return`${n}Gxz(x2-3y2)`;if(t===-3)return`${n}Gyz(3x2-y2)`;if(t===4)return`${n}Gx4-6x2y2+y4`;if(t===-4)return`${n}Gxy(x2-y2)`}if(e===5){if(t===0)return`${n}Hz5`;if(t===1)return`${n}Hxz4`;if(t===-1)return`${n}Hyz4`;if(t===2)return`${n}Hz3(x2-y2)`;if(t===-2)return`${n}Hxyz3`;if(t===3)return`${n}Hz(x4-6x2y2+y4)`;if(t===-3)return`${n}Hxyz(x2-y2)`;if(t===4)return`${n}Hxz(x2-y2)`;if(t===-4)return`${n}Hyz(x2-y2)`;if(t===5)return`${n}Hx(x4-10x2y2+5y4)`;if(t===-5)return`${n}Hy(5x4-10x2y2+y4)`}return`${n}${["s","P","D","F","G","H"][e]??`L${e}`}${t}`}function av(n,e,t){let i=0;for(let r=0;r<=n;r+=1){const a=(r%2===0?1:-1)*Mi(n+e)/(Mi(n-r)*Mi(e+r)*Mi(r));i+=a*t**r}return i}function ov(n,e,t){const i=Math.abs(e);let r=1;if(i>0){const o=Math.sqrt(Math.max(0,1-t*t));let l=1;for(let c=1;c<=i;c+=1)r*=-l*o,l+=2}if(n===i)return r;let a=t*(2*i+1)*r;if(n===i+1)return a;let s=0;for(let o=i+2;o<=n;o+=1)s=((2*o-1)*t*a-(o+i-1)*r)/(o-i),r=a,a=s;return s}function ml(n,e,t,i){const r=Math.sin(t),a=Math.cos(t),s=Math.cos(i),o=Math.sin(i);if(n===1){const h=Math.sqrt(3/(4*Math.PI));return e===0?h*a:e>0?h*r*s:h*r*o}if(n===2){if(e===0)return Math.sqrt(5/Math.PI)/4*(3*a*a-1);if(e===1)return Math.sqrt(15/Math.PI)/2*r*a*s;if(e===-1)return Math.sqrt(15/Math.PI)/2*r*a*o;if(e===2)return Math.sqrt(15/Math.PI)/4*r*r*Math.cos(2*i);if(e===-2)return Math.sqrt(15/Math.PI)/4*r*r*Math.sin(2*i)}const l=Math.abs(e),c=Math.sqrt((2*n+1)/(4*Math.PI)*(Mi(n-l)/Mi(n+l))),u=ov(n,l,Math.cos(t));return e>0?Math.sqrt(2)*c*u*Math.cos(l*i):e<0?Math.sqrt(2)*c*u*Math.sin(l*i):c*u}function Eo(n,e,t){const i=Math.abs(e);let r=1;for(let c=2;c<=2*i;c+=2)r*=(1-t*t)*((c+1)/c);let a=Math.sqrt(Math.max(0,r/2));if(n===i)return a;let s=Math.sqrt(2*i+3)*t*a;if(n===i+1)return s;let o=0,l=Math.sqrt((4*i*i+8*i+3)/(2*i+1));for(let c=i+2;c<=n;c+=1){const u=Math.sqrt((4*c*c-1)/(c*c-i*i));o=s*t*u-a*u/l,a=s,s=o,l=u}return o}function Fn(n,e,t,i){const r=2*t*i/n;return Math.sqrt((2*t/n)**3*(Mi(n-e-1)/(2*n*Mi(n+e))))*Math.exp(-r/2)*r**e*av(n-e-1,2*e+1,r)}function Mt({n,l:e,m:t,z:i},r,a,s){const o=Math.hypot(r,a,s);if(o<1e-9)return e===0?Fn(n,e,i,0)*ml(e,t,0,0):0;const l=Math.acos(s/o),c=Math.atan2(a,r);return Fn(n,e,i,o)*ml(e,t,l,c)}function tl({n,l:e,m:t,z:i},r,a,s){const o=Math.hypot(r,a),l=Math.hypot(o,s),c=l<.01?0:s/l,u=Fn(n,e,i,l)*Eo(e,t,c);let h=1/Math.sqrt(Math.PI);if(t!==0){const d=o>.001?t*Math.atan2(a,r):Math.PI/2;h*=t>0?Math.cos(d):-Math.sin(d)}return u*h}function sv(n){return n>=7?120:n===6?100:n===5?90:n===4?80:n===3?70:n===2?60:50}const rh=new Map;function Vn(n,e=.8){const t=`${n.n}|${n.l}|${n.z}|${e}`,i=rh.get(t);if(i)return{...i};let r=0;const a=.002;let s=0,o=0;for(;o<2e5;){const _=la(n,s),v=la(n,s+a/2),g=la(n,s+a);if(r+=(_+4*v+g)/6,s+=a,o+=1,a*r>e)break}const l=s*1.5,c=sv(n.n),h=2*Math.ceil(l)/c*c/2,d=Math.sqrt(la(n,s)/(4*Math.PI*s*s))||1e-4,f={radius:h,iso:Math.max(1e-4,d),gridSize:c,leastRadius:l};return rh.set(t,f),{...f}}function la(n,e){return e*e*Fn(n.n,n.l,n.z,e)**2}const ah=new Map;function gl(n){const e=`${n.n}|${n.l}|${n.z}`,t=ah.get(e);if(t!=null)return t;const{leastRadius:i}=Vn(n),r=n.n===1&&n.l===0?2:20;let a=i;for(let o=.1;o<=i+r&&(a=o,!(o>i&&la(n,o)<1e-9));o+=.1);const s=Math.max(1,a);return ah.set(e,s),s}const oh=new Map;function Xl(n){const e=`${n.n}|${n.l}|${n.z}`,t=oh.get(e);if(t)return[...t];const i=Math.max(0,n.n-n.l-1);if(!i)return[];const r=Math.max(gl(n),Vn(n).leastRadius*1.2),a=Math.max(900,n.n*520),s=[];let o=1e-5,l=Fn(n.n,n.l,n.z,o);for(let c=1;c<=a;c+=1){const u=r*c/a,h=Fn(n.n,n.l,n.z,u);if(Number.isFinite(h)){if(Math.abs(l)>1e-14&&Math.abs(h)>1e-14&&l*h<0){let d=o,f=u,_=l;for(let g=0;g<36;g+=1){const m=(d+f)/2,M=Fn(n.n,n.l,n.z,m);_*M<=0?f=m:(d=m,_=M)}const v=(d+f)/2;if(s.some(g=>Math.abs(g-v)<.02)||s.push(v),s.length>=i)break}o=u,l=h}}return s.sort((c,u)=>c-u),oh.set(e,s),[...s]}function Yl(n){const e=Math.abs(n.m),t=Math.max(0,n.l-e),i=[];if(t>0){const a=Math.max(720,n.l*300),s=1e-7,o=d=>{d<=1e-5||d>=Math.PI-1e-5||i.some(f=>Math.abs(f-d)<.01)||i.push(d)};let l=1e-5,c=Eo(n.l,n.m,Math.cos(l)),u=Math.abs(c)>s?l:null,h=Math.abs(c)>s?c:null;for(let d=1;d<a;d+=1){const f=Math.PI*d/a,_=Eo(n.l,n.m,Math.cos(f));if(Math.abs(_)<=s){if(o(f),i.length>=t)break;l=f,c=_;continue}if(h!=null&&h*_<0){let v=u,g=f,m=h;for(let x=0;x<34;x+=1){const y=(v+g)/2,C=Eo(n.l,n.m,Math.cos(y));m*C<=0?g=y:(v=y,m=C)}const M=(v+g)/2;if(o(M),i.length>=t)break}l=f,c=_,u=f,h=_}}const r=[];if(e>0)for(let a=0;a<e;a+=1){const s=n.m>0?(a+.5)*Math.PI/e:a*Math.PI/e;r.push(s)}return{polar:i,azimuthal:r}}function Fo(n,e){return`${n-e-1} radial, ${e} angular`}function lv(n,e){const{radius:t}=e,i=Math.min(42,Math.max(24,Math.round(e.density*.58))),r=[],a=[],s=t*2/(i-1),o=t*t,l=15e4;let c=0;for(let _=0;_<i;_+=1){const v=-t+_*s;for(let g=0;g<i;g+=1){const m=-t+g*s;for(let M=0;M<i;M+=1){const x=-t+M*s;if(v*v+m*m+x*x>o||!_l(e.cutaway,v,m,x))continue;const y=Mt(n,v,m,x);c=Math.max(c,Math.abs(y))}}}const u=c||1;let h=(n.n*73856093^n.l*19349663^(n.m+8)*83492791^Math.round(t*1e3))>>>0;const d=()=>(h=1664525*h+1013904223>>>0,h/4294967296),f=Math.min(26e5,Math.max(72e4,e.density*e.density*430));for(let _=0;_<f;_+=1){const v=(d()*2-1)*t,g=(d()*2-1)*t,m=(d()*2-1)*t;if(v*v+g*g+m*m>o||!_l(e.cutaway,v,g,m))continue;const M=Mt(n,v,g,m),x=Math.min(1,(Math.abs(M)/u)**2);if(d()>x)continue;const y=M>=0?r:a;if(!(y.length/3>=l)&&(y.push(v,g,m),r.length/3>=l&&a.length/3>=l))break}return{positive:r,negative:a}}function xd(n,e){const t=e.thetaSegments??64,i=e.phiSegments??128,r=e.radius??4,a=[];let s=0;for(let l=0;l<=t;l+=1){const c=Math.PI*l/t,u=[];for(let h=0;h<=i;h+=1){const d=Math.PI*2*h/i,f=ml(n.l,n.m,c,d);u.push(f),s=Math.max(s,Math.abs(f))}a.push(u)}function o(l){const c=[],u=[],h=[],d=r/(s||1);for(let f=0;f<=t;f+=1){const _=Math.PI*f/t,v=[],g=Math.sin(_),m=Math.cos(_);for(let M=0;M<=i;M+=1){const x=Math.PI*2*M/i,y=a[f][M];if(l*y<=1e-6){v.push(-1);continue}const C=Math.abs(y)*d;v.push(c.length/3),c.push(C*g*Math.cos(x),C*g*Math.sin(x),C*m)}h.push(v)}for(let f=0;f<t;f+=1)for(let _=0;_<i;_+=1){const v=h[f][_],g=h[f+1][_],m=h[f][_+1],M=h[f+1][_+1];v>=0&&g>=0&&m>=0&&u.push(v,g,m),m>=0&&g>=0&&M>=0&&u.push(m,g,M)}return{vertices:c,indices:u}}return{positive:o(1),negative:o(-1)}}function _l(n,e,t,i){return n==="quarter"?t<=0&&i<=0:n==="eighth"?e<=0&&t<=0&&i<=0:n==="threeQuarter"?!(t>0&&i>0):!0}function cv(n,e,t,i=1){const r=t.density,a=t.radius,s=a*2/r;let o=0,l=0;for(let c=0;c<r;c+=1){const u=-a+c*s;for(let h=0;h<r;h+=1){const d=-a+h*s;for(let f=0;f<r;f+=1){const _=-a+f*s,v=_l(t.cutaway,_,d,u)?i*Mt(e,_,d,u):0;n[o]=v,l=Math.max(l,Math.abs(v)),o+=1}}}return l}function uv(n,e,t,i=180){const r=[],a=e.radius;let s=0;for(let o=0;o<i;o+=1){const l=[],c=a-2*a*o/(i-1);for(let u=0;u<i;u+=1){const h=-a+2*a*u/(i-1);let d=0;t==="xoy"&&(d=Mt(n,h,c,0)),t==="xoz"&&(d=Mt(n,h,0,c)),t==="yoz"&&(d=Mt(n,0,h,c)),s=Math.max(s,Math.abs(d)),l.push(d)}r.push(l)}return{rows:r,maxAbs:s}}function hv(n,e,t,i){const a=t.radius/140;let s=0,o=i*Mt(n,0,0,0)-t.iso,l=null;for(let c=1;c<=140;c+=1){const u=c*a,h=i*Mt(n,e.x*u,e.y*u,e.z*u)-t.iso;if(o<=0&&h>=0){let d=s,f=u;for(let _=0;_<12;_+=1){const v=(d+f)/2;i*Mt(n,e.x*v,e.y*v,e.z*v)-t.iso>=0?f=v:d=v}l=f}if(o>=0&&h<=0&&l!==null){let d=s,f=u;for(let _=0;_<12;_+=1){const v=(d+f)/2;i*Mt(n,e.x*v,e.y*v,e.z*v)-t.iso>=0?d=v:f=v}l=d}s=u,o=h}return l}function dv(n,e){const t=e.thetaSegments??58,i=e.phiSegments??96;function r(a){const s=[],o=[],l=[];for(let c=0;c<=t;c+=1){const u=Math.PI*c/t,h=[],d=Math.sin(u),f=Math.cos(u);for(let _=0;_<=i;_+=1){const v=Math.PI*2*_/i,g={x:d*Math.cos(v),y:d*Math.sin(v),z:f},m=hv(n,g,e,a);m===null||!Number.isFinite(m)?h.push(-1):(h.push(s.length/3),s.push(g.x*m,g.y*m,g.z*m))}l.push(h)}for(let c=0;c<t;c+=1)for(let u=0;u<i;u+=1){const h=l[c][u],d=l[c+1][u],f=l[c+1][u+1],_=l[c][u+1];h>=0&&d>=0&&f>=0&&o.push(h,d,f),h>=0&&f>=0&&_>=0&&o.push(h,f,_)}return{vertices:s,indices:o}}return{positive:r(1),negative:r(-1)}}const p={viewer:document.querySelector("#viewer"),angularViewer:document.querySelector("#angularViewer"),projectionViewer:document.querySelector("#projectionViewer"),radialViewer:document.querySelector("#radialViewer"),viewGrid:document.querySelector(".view-grid"),mainWindow:document.querySelector(".main-window"),menuPopup:document.querySelector("#menuPopup"),menuItems:document.querySelectorAll(".menu-item"),toolRender:document.querySelector("#toolRender"),toolSave:document.querySelector("#toolSave"),toolTile:document.querySelector("#toolTile"),toolOverlap:document.querySelector("#toolOverlap"),toolAxis:document.querySelector("#toolAxis"),toolXOY:document.querySelector("#toolXOY"),toolYOZ:document.querySelector("#toolYOZ"),toolXOZ:document.querySelector("#toolXOZ"),preset:document.querySelector("#presetInput"),cosType:document.querySelector("#cosTypeInput"),sinType:document.querySelector("#sinTypeInput"),cloud:document.querySelector("#cloudInput"),positiveLobe:document.querySelector("#positiveLobeInput"),negativeLobe:document.querySelector("#negativeLobeInput"),wireframe:document.querySelector("#wireframeInput"),smooth:document.querySelector("#smoothInput"),projection:document.querySelector("#projectionInput"),paletteOne:document.querySelector("#paletteOneInput"),paletteTwo:document.querySelector("#paletteTwoInput"),xySlice:document.querySelector("#xySliceInput"),yzSlice:document.querySelector("#yzSliceInput"),xzSlice:document.querySelector("#xzSliceInput"),quarter:document.querySelector("#quarterInput"),eighth:document.querySelector("#eighthInput"),threeQuarter:document.querySelector("#threeQuarterInput"),radialR:document.querySelector("#radialRInput"),radialR2:document.querySelector("#radialR2Input"),radialRdf:document.querySelector("#radialRdfInput"),radialSection:document.querySelector("#radialSectionInput"),radialSide:document.querySelector("#radialSideInput"),radialCurve:document.querySelector("#radialCurveInput"),radialAxis:document.querySelector("#radialAxisInput"),radialNode:document.querySelector("#radialNodeInput"),polarNode:document.querySelector("#polarNodeInput"),relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue"),longitudeNode:document.querySelector("#longitudeNodeInput"),grid3d:document.querySelector("#grid3dInput"),desktopMatch:document.querySelector("#desktopMatchInput"),n:document.querySelector("#nInput"),l:document.querySelector("#lInput"),m:document.querySelector("#mInput"),z:document.querySelector("#zInput"),mode:document.querySelector("#modeInput"),slice:document.querySelector("#sliceInput"),node:document.querySelector("#nodeInput"),axis:document.querySelector("#axisInput"),box:document.querySelector("#boxInput"),positiveColor:document.querySelector("#positiveColorInput"),negativeColor:document.querySelector("#negativeColorInput"),backgroundColor:document.querySelector("#backgroundColorInput"),iso:document.querySelector("#isoInput"),density:document.querySelector("#densityInput"),radius:document.querySelector("#radiusInput"),boxSizeDisplay:document.querySelector("#boxSizeDisplay"),intervalValue:document.querySelector("#intervalValue"),probabilityValue:document.querySelector("#probabilityValue"),opacity:document.querySelector("#opacityInput"),isoValue:document.querySelector("#isoValue"),densityValue:document.querySelector("#densityValue"),radiusValue:document.querySelector("#radiusValue"),opacityValue:document.querySelector("#opacityValue"),renderButton:document.querySelector("#renderButton"),axisProxyButton:document.querySelector("#axisProxyButton"),presetButton:document.querySelector("#presetButton"),redrawProxyButton:document.querySelector("#redrawProxyButton"),resetCameraButton:document.querySelector("#resetCameraButton"),screenshotButton:document.querySelector("#screenshotButton"),orbitalName:document.querySelector("#orbitalName"),viewerTitle:document.querySelector("#viewerTitle"),statusText:document.querySelector("#statusText"),posCount:document.querySelector("#posCount"),negCount:document.querySelector("#negCount"),nodeText:document.querySelector("#nodeText"),sliceText:document.querySelector("#sliceText"),boxText:document.querySelector("#boxText"),isoText:document.querySelector("#isoText"),openActivityButton:document.querySelector("#openActivityButton"),annotationModeButton:document.querySelector("#annotationModeButton"),annotationToolbar:document.querySelector("#annotationToolbar"),annotationClearButton:document.querySelector("#annotationClearButton"),openSketchButton:document.querySelector("#openSketchButton"),openAnimationButton:document.querySelector("#openAnimationButton"),openFormulaButton:document.querySelector("#openFormulaButton"),openPredictButton:document.querySelector("#openPredictButton"),openChallengeButton:document.querySelector("#openChallengeButton"),sketchWindow:document.querySelector("#sketchWindow"),boxWindow:document.querySelector("#boxWindow"),formulaWindow:document.querySelector("#formulaWindow"),formulaOrbitalName:document.querySelector("#formulaOrbitalName"),formulaQuantumText:document.querySelector("#formulaQuantumText"),formulaMain:document.querySelector("#formulaMain"),formulaRadialText:document.querySelector("#formulaRadialText"),formulaAngularText:document.querySelector("#formulaAngularText"),formulaVisualText:document.querySelector("#formulaVisualText"),formulaRadialNodes:document.querySelector("#formulaRadialNodes"),formulaAngularNodes:document.querySelector("#formulaAngularNodes"),formulaPhaseText:document.querySelector("#formulaPhaseText"),animationWindow:document.querySelector("#animationWindow"),animationCanvas:document.querySelector("#animationCanvas"),animationStepBadge:document.querySelector("#animationStepBadge"),animationTitle:document.querySelector("#animationTitle"),animationText:document.querySelector("#animationText"),animationProgressFill:document.querySelector("#animationProgressFill"),animationRestartButton:document.querySelector("#animationRestartButton"),animationPrevButton:document.querySelector("#animationPrevButton"),animationPlayButton:document.querySelector("#animationPlayButton"),animationNextButton:document.querySelector("#animationNextButton"),animationExportButton:document.querySelector("#animationExportButton"),activityWindow:document.querySelector("#activityWindow"),activityTitle:document.querySelector("#activityTitle"),activityModeButtons:document.querySelectorAll("[data-activity-mode]"),activityPanes:document.querySelectorAll(".activity-pane"),predictPane:document.querySelector("#predictPane"),scorePane:document.querySelector("#scorePane"),diagnosisPane:document.querySelector("#diagnosisPane"),nodesPane:document.querySelector("#nodesPane"),comparePane:document.querySelector("#comparePane"),challengePane:document.querySelector("#challengePane"),explainPane:document.querySelector("#explainPane"),tabletPane:document.querySelector("#tabletPane"),predictTarget:document.querySelector("#predictTargetInput"),startPredictButton:document.querySelector("#startPredictButton"),verifyPredictButton:document.querySelector("#verifyPredictButton"),predictPrompt:document.querySelector("#predictPrompt"),scoreCurrentButton:document.querySelector("#scoreCurrentButton"),scoreShowRubricButton:document.querySelector("#scoreShowRubricButton"),scoreResetButton:document.querySelector("#scoreResetButton"),scorePrompt:document.querySelector("#scorePrompt"),diagnoseNodesButton:document.querySelector("#diagnoseNodesButton"),diagnosePhaseButton:document.querySelector("#diagnosePhaseButton"),diagnoseProjectionButton:document.querySelector("#diagnoseProjectionButton"),diagnosisPrompt:document.querySelector("#diagnosisPrompt"),nodeRevealButton:document.querySelector("#nodeRevealButton"),nodeHideButton:document.querySelector("#nodeHideButton"),compareA:document.querySelector("#compareAInput"),compareB:document.querySelector("#compareBInput"),compareApplyButton:document.querySelector("#compareApplyButton"),compareLoadAButton:document.querySelector("#compareLoadAButton"),compareLoadBButton:document.querySelector("#compareLoadBButton"),compareAViewer:document.querySelector("#compareAViewer"),compareBViewer:document.querySelector("#compareBViewer"),compareATitle:document.querySelector("#compareATitle"),compareBTitle:document.querySelector("#compareBTitle"),compareANotes:document.querySelector("#compareANotes"),compareBNotes:document.querySelector("#compareBNotes"),compareSummary:document.querySelector("#compareSummary"),newChallengeButton:document.querySelector("#newChallengeButton"),challengeGuess:document.querySelector("#challengeGuessInput"),revealChallengeButton:document.querySelector("#revealChallengeButton"),challengePrompt:document.querySelector("#challengePrompt"),explainRestartButton:document.querySelector("#explainRestartButton"),explainPrevButton:document.querySelector("#explainPrevButton"),explainPlayButton:document.querySelector("#explainPlayButton"),explainNextButton:document.querySelector("#explainNextButton"),explainProgressFill:document.querySelector("#explainProgressFill"),explainStepBadge:document.querySelector("#explainStepBadge"),explainStepTitle:document.querySelector("#explainStepTitle"),explainStepText:document.querySelector("#explainStepText"),explainFormula:document.querySelector("#explainFormula"),explainObserveText:document.querySelector("#explainObserveText"),explainReasonText:document.querySelector("#explainReasonText"),explainHintText:document.querySelector("#explainHintText"),sketchCanvas:document.querySelector("#sketchCanvas"),sketchColor:document.querySelector("#sketchColorInput"),sketchSize:document.querySelector("#sketchSizeInput"),sketchPen:document.querySelector("#sketchPenButton"),sketchEraser:document.querySelector("#sketchEraserButton"),sketchClear:document.querySelector("#sketchClearButton"),tabletLargeButton:document.querySelector("#tabletLargeButton"),tabletRestoreButton:document.querySelector("#tabletRestoreButton"),tabletScreenshotButton:document.querySelector("#tabletScreenshotButton")},Ot=new Pi;Ot.background=new xe(1120295);function Qi(n,e){const t=new nv(n,e);return t.rotateSpeed=3.2,t.zoomSpeed=1.15,t.panSpeed=.65,t.staticMoving=!1,t.dynamicDampingFactor=.12,t.noRotate=!1,t.noZoom=!1,t.noPan=!1,t}function nl(n){return n.pointerType==="mouse"&&(n.button===2||(n.buttons&2)===2)}function Dn(n){var e;n&&(n.enabled=!0,n.noRotate=!1,n.noZoom=!1,n.noPan=!1,(e=n.handleResize)==null||e.call(n),n.update())}function yi(n){var l,c,u,h,d;if(!n)return;const e=n.object,t=(l=e==null?void 0:e.position)==null?void 0:l.clone(),i=(c=e==null?void 0:e.quaternion)==null?void 0:c.clone(),r=(u=e==null?void 0:e.up)==null?void 0:u.clone(),a=e==null?void 0:e.zoom,s=(h=n.target)==null?void 0:h.clone(),o=n.staticMoving;typeof n.reset=="function"&&t&&s&&(n.staticMoving=!0,n.reset(),e.position.copy(t),i&&e.quaternion.copy(i),r&&e.up.copy(r),typeof a=="number"&&(e.zoom=a),n.target.copy(s),(d=e.updateProjectionMatrix)==null||d.call(e),n.staticMoving=o),Dn(n)}function Ca(n,e){const t=n==null?void 0:n.querySelector("canvas");if(!t||!e)return;const i=()=>typeof e=="function"?e():e;t.addEventListener("pointerdown",r=>{if(nl(r)){r.preventDefault(),r.stopImmediatePropagation(),yi(i());return}Dn(i())},{capture:!0}),t.addEventListener("pointermove",r=>{nl(r)&&(r.preventDefault(),r.stopImmediatePropagation())},{capture:!0}),t.addEventListener("pointerup",r=>{nl(r)&&(r.preventDefault(),r.stopImmediatePropagation()),Dn(i())},{capture:!0}),t.addEventListener("pointercancel",()=>yi(i()),{capture:!0}),t.addEventListener("lostpointercapture",()=>yi(i())),t.addEventListener("mouseenter",()=>Dn(i())),t.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopImmediatePropagation(),yi(i())},{capture:!0})}const Ke=new En(-5,5,5,-5,.1,1e3),fn=new ri({antialias:!0,preserveDrawingBuffer:!0});fn.setPixelRatio(Math.min(window.devicePixelRatio,2));fn.localClippingEnabled=!0;p.viewer.appendChild(fn.domElement);let Re=Qi(Ke,fn.domElement);const rn=new Pi,ot=new En(-5,5,5,-5,.1,1e3),Ii=new ri({antialias:!0,preserveDrawingBuffer:!0});Ii.setPixelRatio(Math.min(window.devicePixelRatio,2));Ii.localClippingEnabled=!0;p.angularViewer.appendChild(Ii.domElement);let Ne=Qi(ot,Ii.domElement);const zn=new Pi,yt=new En(-5,5,5,-5,.1,1e3);yt.up.set(0,0,1);const er=new ri({antialias:!0,preserveDrawingBuffer:!0});er.setPixelRatio(Math.min(window.devicePixelRatio,2));p.projectionViewer.appendChild(er.domElement);const yn=Qi(yt,er.domElement),Bn=new Pi,Lt=new En(-5,5,5,-5,.1,1e3),$r=new ri({antialias:!0,preserveDrawingBuffer:!0});$r.setPixelRatio(Math.min(window.devicePixelRatio,2));p.radialViewer.appendChild($r.domElement);const qt=Qi(Lt,$r.domElement);Ca(p.viewer,()=>Re);Ca(p.angularViewer,()=>Ne);Ca(p.projectionViewer,yn);Ca(p.radialViewer,qt);function Ea(){yi(Re),yi(Ne),yi(yn),yi(qt)}function fv(){Dn(Re),Dn(Ne),Dn(yn),Dn(qt)}function pv(){var t,i,r;const n=((t=Re==null?void 0:Re.target)==null?void 0:t.clone())??new P,e={rotateSpeed:(Re==null?void 0:Re.rotateSpeed)??3.2,zoomSpeed:(Re==null?void 0:Re.zoomSpeed)??1.15,panSpeed:(Re==null?void 0:Re.panSpeed)??.65,staticMoving:(Re==null?void 0:Re.staticMoving)??!1,dynamicDampingFactor:(Re==null?void 0:Re.dynamicDampingFactor)??.12,noRotate:(Re==null?void 0:Re.noRotate)??!1,noZoom:(Re==null?void 0:Re.noZoom)??!1,noPan:(Re==null?void 0:Re.noPan)??!1};(i=Re==null?void 0:Re.dispose)==null||i.call(Re),Re=Qi(Ke,fn.domElement),Object.assign(Re,e),Re.target.copy(n),(r=Re.handleResize)==null||r.call(Re),Re.update()}function mv(){var t,i,r;const n=((t=Ne==null?void 0:Ne.target)==null?void 0:t.clone())??new P,e={rotateSpeed:(Ne==null?void 0:Ne.rotateSpeed)??3.2,zoomSpeed:(Ne==null?void 0:Ne.zoomSpeed)??1.15,panSpeed:(Ne==null?void 0:Ne.panSpeed)??.65,staticMoving:(Ne==null?void 0:Ne.staticMoving)??!1,dynamicDampingFactor:(Ne==null?void 0:Ne.dynamicDampingFactor)??.12,noRotate:!1,noZoom:!1,noPan:!1};(i=Ne==null?void 0:Ne.dispose)==null||i.call(Ne),Ne=Qi(ot,Ii.domElement),Object.assign(Ne,e),Ne.target.copy(n),(r=Ne.handleResize)==null||r.call(Ne),Ne.update()}const $l=new dn(16777215,1.05);$l.position.set(0,0,1);Ke.add($l);Ke.add(new dn(16777215,.16));Ot.add(Ke);Ot.add(new Li(16777215,.66));Ot.add(new _d(16777215,2236962,.28));const jl=new dn(16777215,1.05);jl.position.set(0,0,1);ot.add(jl);ot.add(new dn(16777215,.16));rn.add(ot);rn.add(new Li(16777215,.66));rn.add(new _d(16777215,2236962,.28));const Zl=new dn(16777215,1.7);Zl.position.set(0,0,80);zn.add(Zl);zn.add(new Li(16777215,.65));const Kl=new dn(16777215,1.8);Kl.position.set(0,-40,60);Bn.add(Kl);Bn.add(new Li(16777215,.62));for(const n of[fn,Ii,er,$r])n.outputColorSpace=Ft,n.toneMapping=Hr,n.toneMappingExposure=1.16;$l.intensity=1.05;jl.intensity=1.05;Zl.intensity=1.88;Kl.intensity=1.92;const wa=Zo(4.5,.2,.9);let gi=Zo(4.2,.1,.9);Ot.add(wa);rn.add(gi);let Tt=null,Ct=null,$i=null,ji=null,pa=null,ma=null,Oo=null,vl=null,fi=null,pi=null,ga=null,_a=null,va=null,qi=null,xa=null,Ma=null,ln=null,xl=null,Ml=null,yl=null,Sl=null,bl=null,El=null,jn=null,_n=null,jo=1,ni=5,Kt=4,Jl=3,Aa=4.5;const _i=new Map,gv=6,vi=new Map,_v=4;let Cn=null,Kn=null,Vt=null,Sn=null,sh="",Rn=null,Jn=null,Ht=null,Nn=null,lh="",Pn=null,Ei=null,Gt=null,Un=null,ch="",Ln=null,Ut=null,Pr=!1;const Ta=[],Je={drawing:!1,erasing:!1,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,strokes:[],currentStroke:null};function Ql(n=(e=>(e=p.backgroundColor)==null?void 0:e.value)()||"#000000"){document.documentElement.style.setProperty("--viewer-bg",n);const t=new xe(n);Ot.background=t.clone(),rn.background=t.clone(),zn.background=t.clone(),Bn.background=t.clone();for(const i of Ta)i.scene.background=t.clone()}function vv(){var t;if(document.querySelector("#relationModeInput")){Object.assign(p,{relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue")});return}const n=(t=p.longitudeNode)==null?void 0:t.closest("fieldset");if(!n)return;const e=document.createElement("fieldset");e.className="relation-panel",e.innerHTML=`
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
  `,n.insertAdjacentElement("afterend",e),Object.assign(p,{relationMode:e.querySelector("#relationModeInput"),syncRotation:e.querySelector("#syncRotationInput"),scanRadius:e.querySelector("#scanRadiusInput"),scanRadiusValue:e.querySelector("#scanRadiusValue"),scanTheta:e.querySelector("#scanThetaInput"),scanThetaValue:e.querySelector("#scanThetaValue"),scanPhi:e.querySelector("#scanPhiInput"),scanPhiValue:e.querySelector("#scanPhiValue")})}vv();Ql();const tr=document.createElement("button");tr.type="button";tr.className="fullscreen-exit-button";tr.textContent="退出全屏";tr.hidden=!0;document.body.appendChild(tr);function xv(n,e,t){return kn(n,e,t)}function Md(n,e,t){return`${n},${e},${t}`}function Mv(n){const e=[0];for(let t=1;t<=n;t+=1)e.push(t,-t);return e}function yd(n){const e=Math.max(1,Math.min(6,Math.round(n)||1)),t=[];for(let i=0;i<e;i+=1)for(const r of Mv(i))t.push({value:Md(e,i,r),label:xv(e,i,r)});return t}function yv(n=6){const e=[];for(let t=1;t<=n;t+=1)e.push(...yd(t));return e}const Xt=yv(6);function Mo(n,e,t=null){if(n){n.replaceChildren();for(const i of e){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,n.append(r)}t&&e.some(i=>i.value===t)&&(n.value=t)}}function Sv(){Mo(p.predictTarget,Xt,"2,1,1"),Mo(p.challengeGuess,Xt,"2,1,1"),Mo(p.compareA,Xt,"2,1,1"),Mo(p.compareB,Xt,"3,1,1")}function bv(n=null){if(!p.preset)return;const e=n??vd(Number(p.n.value),Number(p.l.value),Number(p.m.value));if(Number(p.preset.dataset.n)!==e.n){p.preset.replaceChildren();for(const i of yd(e.n)){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,p.preset.append(r)}p.preset.dataset.n=String(e.n)}p.preset.value=Md(e.n,e.l,e.m)}const he={challengeTarget:Xt[0],challengeTotal:0,challengeCorrect:0,dragWindow:null,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,explanationStep:0,explanationPlaying:!1,explanationStartedAt:0,explanationTimer:null,explanationFrame:null,animationStep:0,animationPlaying:!1,animationStartedAt:0,animationTimer:null,animationFrame:null,animationExporting:!1,annotationMode:!1,annotationDrag:null};function ht(){var e,t;const n=vd(Number(p.n.value),Number(p.l.value),Number(p.m.value));return(e=p.sinType)!=null&&e.checked&&n.m>0&&(n.m=-n.m),(t=p.cosType)!=null&&t.checked&&n.m<0&&(n.m=Math.abs(n.m)),p.n.value=n.n,p.l.max=n.n-1,p.l.value=n.l,p.m.min=-n.l,p.m.max=n.l,p.m.value=Math.abs(n.m),bv(n),{...n,z:Math.max(1,Math.min(10,Number(p.z.value)||1))}}function il(n,e){var t;n&&(n.disabled=!e,(t=n.closest("label"))==null||t.classList.toggle("muted",!e),e||(n.checked=!1))}function Ev(n){const e=Xl(n).length,{polar:t,azimuthal:i}=Yl(n);il(p.radialNode,e>0),il(p.polarNode,t.length>0),il(p.longitudeNode,i.length>0)}function $t(){var r,a,s,o,l,c,u,h,d,f,_,v,g,m,M,x,y,C,E,w,R,b,S,L,N,I,F,k;const n=ht();Ev(n);const e=p.desktopMatch.checked?Vn(n):null;let t=p.slice.value;(r=p.xySlice)!=null&&r.checked&&(t="xoy"),(a=p.yzSlice)!=null&&a.checked&&(t="yoz"),(s=p.xzSlice)!=null&&s.checked&&(t="xoz"),!((o=p.xySlice)!=null&&o.checked)&&!((l=p.yzSlice)!=null&&l.checked)&&!((c=p.xzSlice)!=null&&c.checked)&&(t="none");const i={iso:Number(p.iso.value),density:Number(p.density.value),radius:Number(p.radius.value),opacity:Number(p.opacity.value),mode:p.mode.value,showCloud:((u=p.cloud)==null?void 0:u.checked)??!1,slice:t,nodeRadial:!!(p.node.checked||(h=p.radialNode)!=null&&h.checked),nodePolar:!!(p.node.checked||(d=p.polarNode)!=null&&d.checked),nodeAzimuthal:!!(p.node.checked||(f=p.longitudeNode)!=null&&f.checked),showNode:!!(p.node.checked||(_=p.radialNode)!=null&&_.checked||(v=p.polarNode)!=null&&v.checked||(g=p.longitudeNode)!=null&&g.checked),showAxis:p.axis.checked,showBox:p.box.checked,showPositive:((m=p.positiveLobe)==null?void 0:m.checked)??!0,showNegative:((M=p.negativeLobe)==null?void 0:M.checked)??!0,wireframe:((x=p.wireframe)==null?void 0:x.checked)??!1,smooth:((y=p.smooth)==null?void 0:y.checked)??!1,showProjection:((C=p.projection)==null?void 0:C.checked)??!1,grid3d:((E=p.grid3d)==null?void 0:E.checked)??!1,cutaway:(w=p.eighth)!=null&&w.checked?"eighth":(R=p.quarter)!=null&&R.checked?"quarter":(b=p.threeQuarter)!=null&&b.checked?"threeQuarter":"none",radialMode:(S=p.radialR)!=null&&S.checked?"R":(L=p.radialR2)!=null&&L.checked?"R2":"RDF",radialSection:((N=p.radialSection)==null?void 0:N.checked)??!1,radialSide:((I=p.radialSide)==null?void 0:I.checked)??!1,radialCurve:((F=p.radialCurve)==null?void 0:F.checked)??!0,radialAxis:((k=p.radialAxis)==null?void 0:k.checked)??!1,positiveColor:p.positiveColor.value,negativeColor:p.negativeColor.value,backgroundColor:p.backgroundColor.value,desktopMatched:!!e};return p.isoValue.value=i.iso.toFixed(4),p.densityValue.value=i.density,p.radiusValue.value=i.radius.toFixed(1),p.opacityValue.value=i.opacity.toFixed(2),p.boxSizeDisplay&&(p.boxSizeDisplay.value=(i.radius*2.4).toFixed(2)),p.intervalValue&&(p.intervalValue.value=(i.radius*2/i.density).toFixed(3)),p.probabilityValue&&(p.probabilityValue.value="0.800"),p.iso.disabled=!1,p.density.disabled=!1,p.radius.disabled=!1,i}function jr(){if(!p.desktopMatch.checked)return;const n=Vn(ht()),e=Math.min(Number(p.iso.max),Math.max(Number(p.iso.min),n.iso));p.iso.value=e.toFixed(4),p.density.value=Math.min(Number(p.density.max),Math.max(Number(p.density.min),n.gridSize)),p.radius.value=Math.min(Number(p.radius.max),Math.max(Number(p.radius.min),n.radius)),$t()}function wv(){if(!p.boxSizeDisplay)return;const n=Number(p.boxSizeDisplay.value);!Number.isFinite(n)||n<=0||(p.radius.value=Math.min(Number(p.radius.max),Math.max(Number(p.radius.min),n/2.4)),$t())}function zo(n,e){const t=new je;t.setAttribute("position",new ke(n,3));const i=new Float32Array(n.length/3);for(let a=0;a<i.length;a+=1){const s=Math.sin((a+1)*12.9898)*43758.5453;i[a]=s-Math.floor(s)}t.setAttribute("seed",new zt(i,1));const r=new ti({uniforms:{uColor:{value:new xe(e)},uTime:{value:0},uSize:{value:2.7}},transparent:!0,depthWrite:!1,blending:Ir,vertexShader:`
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
    `});return new D_(t,r)}function Av(n){var e,t;for(const i of[Tt,Ct,$i,ji])i!=null&&i.isPoints&&((t=(e=i.material)==null?void 0:e.uniforms)!=null&&t.uTime)&&(i.material.uniforms.uTime.value=n)}function It(n){return Number.parseInt(n.replace("#","0x"),16)}function wl(n,e){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle=e;const r=n.length>2?34:n.length>1?44:58;i.font=`700 ${r}px Segoe UI, Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,64,64);const a=new N_(t);a.colorSpace=Ft;const s=new hd({map:a,transparent:!0,alphaTest:.2,depthTest:!0,depthWrite:!1});s.toneMapped=!1;const o=new L_(s);return o.scale.set(.68,.68,.68),o.renderOrder=20,o}function Al(n,e,t,i){const r=e.clone().sub(n),a=r.length(),s=new nn({color:i});s.toneMapped=!1;const o=new $e(new Xr(t,t,a,48,1,!1),s);return o.position.copy(n).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new P(0,1,0),r.normalize()),o}function Tl(n,e,t,i,r){const a=new nn({color:r});a.toneMapped=!1;const s=new $e(new Gl(i,t,96,1,!1),a);return s.position.copy(e),s.quaternion.setFromUnitVectors(new P(0,1,0),n.clone().normalize()),s}function Zo(n,e=.2,t=.9){const i=new dt,r=n*t,a=n*.02,s=r*.1,o=a*3,l=[{dir:new P(1,0,0),color:16711680,label:"x",labelColor:"#ff0000"},{dir:new P(0,1,0),color:47400,label:"y",labelColor:"#00e63a"},{dir:new P(0,0,1),color:15785216,label:"z",labelColor:"#fff000"}];for(const c of l){const u=c.dir.clone().multiplyScalar(-r),h=c.dir.clone().multiplyScalar(r);i.add(Al(u,h,a,c.color)),i.add(Tl(c.dir,c.dir.clone().multiplyScalar(r*1.01),s,o,c.color));const d=wl(c.label,c.labelColor);d.scale.setScalar(Math.max(.98,Math.min(1.18,n*.23))),c.label==="x"&&d.position.set(r*1.2,-e,0),c.label==="y"&&d.position.set(-e,r*1.2,0),c.label==="z"&&d.position.set(-e,-e,r*1.2),i.add(d)}return i}function Tv(n,e,t,i){const r=new dt,a=Math.max(.018,n*.006),s=n*.08,o=a*3.2,l=new P(0,0,t),c=new P(n,0,t),u=new P(0,0,t+e);r.add(Al(l,c,a,15785216)),r.add(Tl(new P(1,0,0),c,s,o,15785216)),r.add(Al(l,u,a,22527)),r.add(Tl(new P(0,0,1),u,s,o,22527));const h=wl("r","#fff000");h.scale.setScalar(.48),h.position.set(n+s*.85,-n*.045,t),r.add(h);const d=wl(i==="R2"?"R*R":i,"#0057ff");return d.scale.setScalar(.58),d.position.set(-n*.08,0,t+e+s*.9),r.add(d),r}function Ko(n,e,t={}){return new gd({color:n,transparent:e<1,opacity:e,side:ft,emissive:n,emissiveIntensity:.035,roughness:.94,metalness:0,envMapIntensity:.08,...t})}function Br(n,e,t){const i=new je;i.setAttribute("position",new ke(n.vertices,3)),i.setIndex(n.indices),i.computeVertexNormals();const r=Ko(e,t);return new $e(i,r)}function kr(n,e){n!=null&&n.material&&(n.visible=!0,n.material.wireframe=e.wireframe&&!e.smooth,n.material.flatShading=!e.smooth,n.material.clippingPlanes=[],n.material.clipIntersection=!1,n.material.needsUpdate=!0)}function Sd(n){return n.wireframe||n.smooth}function Cv(n){return n==="quarter"?[new it(new P(0,1,0),0),new it(new P(0,0,1),0)]:n==="eighth"?[new it(new P(1,0,0),0),new it(new P(0,1,0),0),new it(new P(0,0,1),0)]:n==="threeQuarter"?[new it(new P(0,0,1),0)]:[]}function ec(n){const e=Cv(n.cutaway),t=Zr(n.slice);return t==="x"&&e.push(new it(new P(1,0,0),0)),t==="y"&&e.push(new it(new P(0,1,0),0)),t==="z"&&e.push(new it(new P(0,0,1),0)),e}function Zr(n){return n==="yoz"?"x":n==="xoz"?"y":n==="xoy"?"z":null}function Rv(n){const e=[];n.cutaway==="quarter"&&e.push("y","z"),n.cutaway==="eighth"&&e.push("x","y","z"),n.cutaway==="threeQuarter"&&e.push("y","z");const t=Zr(n.slice);return t&&e.push(t),[...new Set(e)]}function Bo(n,e,t,i){const r=e._clipPlanes||ec(e);if(!r.length)return n;const a=e._capFilter||(()=>!0);n.updateMatrixWorld(!0);const s=n.geometry.getAttribute("position"),o=n.geometry.index,l=[],c=o?o.count:Math.min(s.count,n.count||s.count);function u(Q){return n.localToWorld(new P(s.getX(Q),s.getY(Q),s.getZ(Q)))}const h=Math.floor(c/3);for(let Q=0;Q<h;Q+=1){const pe=o?o.getX(Q*3):Q*3,W=o?o.getX(Q*3+1):Q*3+1,K=o?o.getX(Q*3+2):Q*3+2;l.push([u(pe),u(W),u(K)])}let d=l;const f=r.map(()=>[]);r.forEach((Q,pe)=>{const W=[];for(const K of d){const{clipped:ce,segments:O}=Gv(K,Q);ce.length>=3&&W.push(ce),f[pe].push(...O)}d=W});const _=[],v=[],g=new xe(It(t));function m(Q){return _.push(Q.x,Q.y,Q.z),_.length/3-1}for(const Q of d){const pe=m(Q[0]);for(let W=1;W<Q.length-1;W+=1){const K=m(Q[W]),ce=m(Q[W+1]);v.push(pe,K,ce)}}const M=!e._skipCaps,x=[],y=[],C=[];function E(Q){return x.push(Q.x,Q.y,Q.z),y.push(Mt(i,Q.x,Q.y,Q.z)),x.length/3-1}function w(Q){const pe=Q.normal.clone().normalize(),W=Math.abs(pe.x)<.9?new P(1,0,0):new P(0,1,0);W.sub(pe.clone().multiplyScalar(W.dot(pe))).normalize();const K=new P().crossVectors(pe,W).normalize(),ce=pe.clone().multiplyScalar(-Q.constant);return{normal:pe,basisA:W,basisB:K,origin:ce}}function R(Q,pe){const{basisA:W,basisB:K,origin:ce}=w(Q),O=e.radius,re=i.n>=6?6.2:i.n>=5?5.4:3.8,ve=i.n>=6?420:i.n>=5?360:280,Se=Math.max(128,Math.min(ve,Math.round(e.density*re))),U=O*2/Se,Ae=e._capSign??1,Oe=e.iso*1.015,Ce=Se+1,Le=new Float32Array(Ce*Ce);function Xe(j,Z){const se=-O+j*U,le=-O+Z*U;return ce.clone().addScaledVector(W,se).addScaledVector(K,le)}function Ve(j,Z){return Z*Ce+j}for(let j=0;j<=Se;j+=1)for(let Z=0;Z<=Se;Z+=1){const se=Xe(Z,j);Le[Ve(Z,j)]=Ae*Mt(i,se.x,se.y,se.z)-Oe}function ze(j,Z){return{point:Xe(j,Z),value:Le[Ve(j,Z)]}}function ct(j,Z,se){return{point:j.point.clone().lerp(Z.point,se),value:j.value+(Z.value-j.value)*se}}function D(j,Z){const se=j-Z;return Math.abs(se)<1e-12?.5:Math.max(0,Math.min(1,j/se))}function A(j,Z){const se=[];for(let le=0;le<j.length;le+=1){const ue=j[le],we=j[(le+1)%j.length],ae=Z.distanceToPoint(ue.point),be=Z.distanceToPoint(we.point),He=ae>=-1e-7,De=be>=-1e-7;if(He&&De)se.push(we);else if(He&&!De){const _e=D(ae,be);se.push(ct(ue,we,_e))}else if(!He&&De){const _e=D(ae,be);se.push(ct(ue,we,_e),we)}}return se}function $(j){const Z=[];for(let se=0;se<j.length;se+=1){const le=j[se],ue=j[(se+1)%j.length],we=le.value>=0,ae=ue.value>=0;if(we&&ae)Z.push(ue);else if(we&&!ae){const be=D(le.value,ue.value);Z.push(ct(le,ue,be))}else if(!we&&ae){const be=D(le.value,ue.value);Z.push(ct(le,ue,be),ue)}}return Z}function te(j){return E(j.point)}for(let j=0;j<Se;j+=1)for(let Z=0;Z<Se;Z+=1){let se=[ze(Z,j),ze(Z+1,j),ze(Z+1,j+1),ze(Z,j+1)];for(let we=0;we<r.length&&!(we!==pe&&(se=A(se,r[we]),se.length<3));we+=1);if(se.length<3||(se=$(se),se.length<3))continue;const le=se.reduce((we,ae)=>we.add(ae.point),new P).multiplyScalar(1/se.length);if(!a(pe,le))continue;const ue=te(se[0]);for(let we=1;we<se.length-1;we+=1)C.push(ue,te(se[we]),te(se[we+1]))}}M&&r.forEach((Q,pe)=>{R(Q,pe)});const b=new je;b.setAttribute("position",new ke(_,3)),b.setIndex(v),e.smooth&&!e.wireframe&&!e._skipSmooth&&Ed(b,e),b.computeVertexNormals();const S=Ko(g,e.opacity,{wireframe:e.wireframe,flatShading:!e.smooth}),L=new $e(b,S);if(L.userData.vertexCount=v.length,!C.length)return L;const N=new je,I=Rd(y,e.iso*1.6),F=[];for(let Q=0;Q<y.length;Q+=1){const pe=y[Q],W=x[Q*3],K=x[Q*3+1],ce=x[Q*3+2],O=Cd(pe,W,K,ce,e,i,I);F.push(O.r,O.g,O.b)}N.setAttribute("position",new ke(x,3)),N.setAttribute("color",new ke(F,3)),N.setIndex(C),N.computeVertexNormals();const V=!!Zr(e.slice)||e.cutaway!=="none",X=new nn({vertexColors:!0,side:ft,transparent:!1,opacity:1,depthWrite:!0});X.toneMapped=!1;const G=new $e(N,X);G.renderOrder=V?3:1;const ie=new nn({vertexColors:!0,side:ft,transparent:!0,opacity:.26,depthWrite:!1,depthTest:!0,blending:Ir});ie.toneMapped=!1;const ne=new $e(N,ie);ne.renderOrder=G.renderOrder+.05;const oe=new dt;return oe.add(L,G,ne),oe.userData.vertexCount=v.length+C.length*2,oe}function tc(n){var t,i;let e=((t=n==null?void 0:n.userData)==null?void 0:t.vertexCount)||0;return(i=n==null?void 0:n.traverse)==null||i.call(n,r=>{var a;r!==n&&(e+=((a=r.userData)==null?void 0:a.vertexCount)||0)}),e}function bd(n){const e=n.clone(!0);return e.traverse(t=>{t.geometry&&(t.geometry=t.geometry.clone()),t.material&&(t.material=Array.isArray(t.material)?t.material.map(i=>i.clone()):t.material.clone()),t.userData={...t.userData}}),e.userData={...n.userData},e}function Pv(n){var e;(e=n==null?void 0:n.traverse)==null||e.call(n,t=>{var i,r,a,s;(r=(i=t.geometry)==null?void 0:i.dispose)==null||r.call(i),Array.isArray(t.material)?t.material.forEach(o=>{var l;return(l=o.dispose)==null?void 0:l.call(o)}):(s=(a=t.material)==null?void 0:a.dispose)==null||s.call(a)})}function Lv(n){var e,t,i,r;(t=(e=n==null?void 0:n.geometry)==null?void 0:e.dispose)==null||t.call(e),(r=(i=n==null?void 0:n.material)==null?void 0:i.dispose)==null||r.call(i)}function Iv(n){const e=new $e(n.geometry.clone(),n.material.clone());return e.position.copy(n.position),e.scale.copy(n.scale),e.count=n.count,e.userData.vertexCount=n.vertexCount,e}function Dv(n,e,t,i){return JSON.stringify({n:n.n,l:n.l,m:n.m,z:n.z,sign:t,color:i,iso:e.iso,density:e.density,radius:e.radius,opacity:e.opacity})}function Nv(n,e){var i;const t={geometry:e.geometry.clone(),material:e.material.clone(),position:e.position.clone(),scale:e.scale.clone(),count:e.count,vertexCount:e.count??((i=e.geometry.getAttribute("position"))==null?void 0:i.count)??0};for(vi.set(n,t);vi.size>_v;){const r=vi.keys().next().value,a=vi.get(r);vi.delete(r),Lv(a)}}function Uv(n,e,t,i){return JSON.stringify({n:n.n,l:n.l,m:n.m,z:n.z,sign:t,color:i,iso:e.iso,density:e.density,radius:e.radius,opacity:e.opacity,mode:e.mode,cutaway:e.cutaway,slice:e.slice,wireframe:e.wireframe,smooth:e.smooth,showPositive:e.showPositive,showNegative:e.showNegative,backgroundColor:e.backgroundColor})}function Fv(n,e){const t=bd(e);for(_i.set(n,t);_i.size>gv;){const i=_i.keys().next().value,r=_i.get(i);_i.delete(i),Pv(r)}}function uh(n,e,t,i){const r=Uv(n,e,t,i),a=_i.get(r);if(a)return _i.delete(r),_i.set(r,a),bd(a);const s=Cl(n,e,t,i);return Fv(r,s),s}function Ov(n,e,t,i,r){const a=new dt;let s=0;for(const o of r){const l=Bo(n,{...e,_clipPlanes:o.planes,_capFilter:o.capFilter,_skipSmooth:!0},t,i);l&&(a.add(l),s+=tc(l))}return a.userData.vertexCount=s,a}function zv(n,e,t){const i=[],r=e.radius,a=Math.max(1800,n.n*620);let s=0,o=t*Mt(n,0,0,0)-e.iso;for(let l=1;l<=a;l+=1){const c=r*l/a,u=t*Mt(n,c,0,0)-e.iso;if(Number.isFinite(u)&&Number.isFinite(o)&&o*u<0){let h=s,d=c,f=o;for(let v=0;v<36;v+=1){const g=(h+d)/2,m=t*Mt(n,g,0,0)-e.iso;f*m<=0?d=g:(h=g,f=m)}const _=(h+d)/2;_>.02&&!i.some(v=>Math.abs(v-_)<.025)&&i.push(_)}s=c,o=u}return i}function Bv(n){const e=(()=>{const i=Zr(n.slice);return i==="x"?new it(new P(1,0,0),0):i==="y"?new it(new P(0,1,0),0):i==="z"?new it(new P(0,0,1),0):null})(),t=i=>e?[...i,e]:i;return n.cutaway==="threeQuarter"?[{planes:t([new it(new P(0,-1,0),0)])},{planes:t([new it(new P(0,0,-1),0)])}]:[{planes:ec(n)}]}function kv(n,e,t,i){const r=zv(n,e,t),a=new dt,s=Bv(e),o=It(i);let l=0;for(const u of r){const h=new Yr(u,n.n>=5?160:128,n.n>=5?96:72);for(const d of s){const f=Ko(o,e.opacity,{wireframe:e.wireframe,flatShading:!e.smooth,clippingPlanes:d.planes,clipIntersection:!1}),_=new $e(h.clone(),f);_.userData.vertexCount=h.getAttribute("position").count,a.add(_),l+=_.userData.vertexCount}h.dispose()}const c=jv(n,e,t);return c&&(a.add(c),l+=tc(c)),a.userData.vertexCount=l,a.children.length?a:null}function Vv(n,e,t,i){return e.cutaway==="quarter"?Bo(n,{...e,_clipPlanes:[new it(new P(0,1,0),0),new it(new P(0,0,1),0)],_skipSmooth:!0},t,i):e.cutaway==="eighth"?Bo(n,{...e,_clipPlanes:[new it(new P(1,0,0),0),new it(new P(0,1,0),0),new it(new P(0,0,1),0)],_skipSmooth:!0},t,i):e.cutaway==="threeQuarter"?Ov(n,e,t,i,[{planes:[new it(new P(0,-1,0),0)],capFilter:(r,a)=>a.z>0},{planes:[new it(new P(0,1,0),0),new it(new P(0,0,-1),0)],capFilter:(r,a)=>r===1&&a.y>0}]):null}function Hv(n,e,t){var x;n.updateMatrixWorld(!0);const i=n.geometry.getAttribute("position"),r=Number.isFinite(n.count)&&n.count>0?n.count:Number.POSITIVE_INFINITY,a=Number.isFinite((x=n.geometry.drawRange)==null?void 0:x.count)&&n.geometry.drawRange.count>0?n.geometry.drawRange.count:Number.POSITIVE_INFINITY,s=Math.min(i.count,r,a),o=[],l=[],c=new Map;function u(y){return Number.isFinite(y.x)&&Number.isFinite(y.y)&&Number.isFinite(y.z)}const h=Zr(e.slice);function d(y){return e.cutaway==="quarter"?(y.y>0&&(y.y=0),y.z>0&&(y.z=0)):e.cutaway==="eighth"?(y.x>0&&(y.x=0),y.y>0&&(y.y=0),y.z>0&&(y.z=0)):e.cutaway==="threeQuarter"&&y.y>0&&y.z>0&&(y.y<y.z?y.y=0:y.z=0),h==="x"&&y.x>0&&(y.x=0),h==="y"&&y.y>0&&(y.y=0),h==="z"&&y.z>0&&(y.z=0),y}function f(y,C){const E=n.localToWorld(new P(i.getX(y),i.getY(y),i.getZ(y)));if(d(E),!u(E))return-1;if(C){const R=`${Math.round(E.x*1e4)},${Math.round(E.y*1e4)},${Math.round(E.z*1e4)}`;if(c.has(R))return c.get(R);const b=o.length/3;return o.push(E.x,E.y,E.z),c.set(R,b),b}return o.push(E.x,E.y,E.z),o.length/3-1}const _=Math.floor(s/3),v=e.smooth&&!e.wireframe;for(let y=0;y<_;y+=1){const C=y*3,E=y*3+1,w=y*3+2,R=f(C,v),b=f(E,v),S=f(w,v);R>=0&&b>=0&&S>=0&&l.push(R,b,S)}const g=new je;g.setAttribute("position",new ke(o,3)),g.setIndex(l),e.smooth&&!e.wireframe&&Ed(g,e),g.computeVertexNormals();const m=n.material.clone();m.color=new xe(It(t)),m.emissive=new xe(It(t)),m.side=ft,m.wireframe=e.wireframe,m.flatShading=!e.smooth,m.clippingPlanes=[],m.needsUpdate=!0;const M=new $e(g,m);return M.userData.vertexCount=s,M}function Ed(n,e){const t=n.getAttribute("position"),i=n.index;if(!t||!i)return;const r=t.count,a=Array.from({length:r},()=>new Set);for(let f=0;f<i.count;f+=3){const _=i.getX(f),v=i.getX(f+1),g=i.getX(f+2);a[_].add(v).add(g),a[v].add(_).add(g),a[g].add(_).add(v)}const s=Math.max(.035,e.radius/Math.max(80,e.density*2)),o=new Uint8Array(r),l=Zr(e.slice);for(let f=0;f<r;f+=1){const _=t.getX(f),v=t.getY(f),g=t.getZ(f);e.cutaway==="quarter"&&(Math.abs(v)<s||Math.abs(g)<s)&&(o[f]=1),e.cutaway==="eighth"&&(Math.abs(_)<s||Math.abs(v)<s||Math.abs(g)<s)&&(o[f]=1),e.cutaway==="threeQuarter"&&(Math.abs(v)<s||Math.abs(g)<s)&&(o[f]=1),l==="x"&&Math.abs(_)<s&&(o[f]=1),l==="y"&&Math.abs(v)<s&&(o[f]=1),l==="z"&&Math.abs(g)<s&&(o[f]=1)}const c=new Float32Array(t.array),u=new Float32Array(c.length),h=e.cutaway==="none"?10:7,d=e.cutaway==="none"?.16:.1;for(let f=0;f<h;f+=1){u.set(c);for(let _=0;_<r;_+=1){if(o[_]||a[_].size<3)continue;let v=0,g=0,m=0;for(const y of a[_]){const C=y*3;v+=c[C],g+=c[C+1],m+=c[C+2]}const M=a[_].size,x=_*3;u[x]=c[x]+(v/M-c[x])*d,u[x+1]=c[x+1]+(g/M-c[x+1])*d,u[x+2]=c[x+2]+(m/M-c[x+2])*d}c.set(u)}t.array.set(c),t.needsUpdate=!0}function Gv(n,e){const t=[],i=[];for(let a=0;a<n.length;a+=1){const s=n[a],o=n[(a+1)%n.length],l=e.distanceToPoint(s)>=-1e-7,c=e.distanceToPoint(o)>=-1e-7;if(l&&c)t.push(o.clone());else if(l&&!c){const u=hh(s,o,e);t.push(u),i.push(u)}else if(!l&&c){const u=hh(s,o,e);t.push(u,o.clone()),i.push(u)}}const r=i.length===2?[[i[0],i[1]]]:[];return{clipped:t,segments:r}}function hh(n,e,t){const i=e.clone().sub(n),r=t.normal.dot(i);if(Math.abs(r)<1e-10)return n.clone();const a=-(t.normal.dot(n)+t.constant)/r;return n.clone().add(i.multiplyScalar(Math.max(0,Math.min(1,a))))}function Wv(n,e,t,i,r){const a=Dv(n,t,i,r),s=vi.get(a);if(s)return vi.delete(a),vi.set(a,s),Iv(s);const o=Ko(It(r),e.opacity),l=n.n>=5?5e5:16e4,c=new iv(t.density,o,!0,!0,l);return c.isolation=t.iso,c.position.set(0,0,0),c.scale.set(t.radius,t.radius,t.radius),cv(c.field,n,{...t,cutaway:"none"},i),c.update(),Nv(a,c),c}function Cl(n,e,t,i){const r=e.cutaway!=="none"||e.slice!=="none";if(n.l===0&&r){const u=kv(n,e,t,i);if(u)return u}const a=e.smooth&&!e.wireframe?Math.round(e.density*(r?3:2)):e.density,s={...e,density:Math.min(r?220:180,Math.max(e.density,a))},o=Wv(n,e,s,t,i),l={...e,_capSign:t,_skipCaps:n.l===0},c=Vv(o,l,i,n);return c||(ec(e).length?Bo(o,l,i,n):Hv(o,e,i))}function qv(n,e){const t=new dt,i=Xv(n,e.radius,e);return i&&t.add(i),t.userData.vertexCount=tc(t),t.children.length?t:null}function ya(n,e=.18){const t=new nn({color:n,transparent:!0,opacity:e,side:ft,depthWrite:!1,depthTest:!0,blending:Ir});return t.toneMapped=!1,t}function wd(n,e,t){const i=new P(Math.cos(n),Math.sin(n),0).multiplyScalar(e),r=new P(0,0,e),a=[-i.x-r.x,-i.y-r.y,-i.z-r.z,i.x-r.x,i.y-r.y,i.z-r.z,i.x+r.x,i.y+r.y,i.z+r.z,-i.x+r.x,-i.y+r.y,-i.z+r.z],s=new je;return s.setAttribute("position",new ke(a,3)),s.setIndex([0,1,2,0,2,3]),s.computeVertexNormals(),new $e(s,t)}function Ad(n,e,t){const i=Math.min(n,Math.PI-n);if(Math.abs(i-Math.PI/2)<.018){const h=new $e(new Hl(e,160),t);return h.renderOrder=3,h}const r=e*Math.sin(i),a=e*Math.cos(i),s=160,o=[],l=[];for(const h of[1,-1]){const d=o.length/3;o.push(0,0,0);for(let f=0;f<=s;f+=1){const _=Math.PI*2*f/s;o.push(r*Math.cos(_),r*Math.sin(_),h*a)}for(let f=1;f<=s;f+=1)l.push(d,d+f,d+f+1)}const c=new je;c.setAttribute("position",new ke(o,3)),c.setIndex(l),c.computeVertexNormals();const u=new $e(c,t);return u.renderOrder=3,u}function Xv(n,e,t={}){const i=new dt;if(t.nodeRadial){const s=ya(16756736,.34);for(const o of Xl(n)){if(o<=.02||o>=e*.99)continue;const l=new $e(new Yr(o,128,64),s.clone());l.renderOrder=3,i.add(l),i.add(Id(o,16769354,.72))}}const{polar:r,azimuthal:a}=Yl(n);if(t.nodePolar){const s=ya(65394,.32);for(const o of r)i.add(Ad(o,e*1.04,s.clone()))}if(t.nodeAzimuthal){const s=ya(47103,.3);for(const o of a){const l=wd(o,e*1.04,s.clone());l.renderOrder=3,i.add(l)}}return i.children.length?i:null}function Yv(n,e,t={}){const i=new dt,{polar:r,azimuthal:a}=Yl(n);if(t.nodePolar){const s=ya(65394,.34);for(const o of r)i.add(Ad(o,e,s.clone()))}if(t.nodeAzimuthal){const s=ya(47103,.32);for(const o of a)i.add(wd(o,e,s.clone()))}return i.children.length?i:null}function $v(n,e){return null}function Td(n){const e=new Wr(n*2,n*2,n*2),t=new Z_(e),i=new Ji({color:13686237,transparent:!0,opacity:.58}),r=new kl(t,i);return e.dispose(),r}function jv(n,e,t=null){const i=Rv(e);if(!i.length)return null;const r=new dt;for(const a of i){const s=Kv(n,e,a,t);s&&r.add(s)}return r.children.length?r:null}function Zv(n,e){const t=Math.max(0,Math.min(1,Math.abs(n)/Math.max(e*.5,1e-12))),i=Math.pow(t,.52);return n>=0?new xe(16711896).lerp(new xe(16716306),i):new xe(60159).lerp(new xe(1054975),i)}function Cd(n,e,t,i,r,a,s){const o=new xe(r.backgroundColor||"#000000"),l=new xe(16711896),c=new xe(60159),u=(S,L,N)=>{const I=Math.max(0,Math.min(1,(N-S)/Math.max(1e-12,L-S)));return I*I*(3-2*I)},h=Math.min(1,Math.hypot(e,t,i)/Math.max(r.radius,1e-9)),d=Math.pow(1-h,1.45),f=Math.max(0,Math.min(1,(a.n-4)/2)),_=Math.abs(n),v=r.iso*(.86-d*.18-f*.04),g=r.iso*(1.62+d*1.05+f*.28),m=r.iso*(1.05+d*.18),M=Math.max(r.iso*(2.1+d*1.05+f*.22),s*(.48+d*.14)),x=u(v,g,_),y=u(m,M,_),C=Zv(n,s),E=n>=0?l:c,w=.38+y*(.62-d*.06),R=E.clone().lerp(C,Math.max(.34,w)),b=Math.max(0,(1-x)*(.16+d*.06));return R.clone().lerp(o,b)}function Rd(n,e){const t=n.map(r=>Math.abs(r)).filter(r=>Number.isFinite(r)&&r>1e-12).sort((r,a)=>r-a);if(!t.length)return Math.max(e,1e-9);const i=Math.min(t.length-1,Math.floor(t.length*.82));return Math.max(e,t[i])}function Kv(n,e,t,i=null){const r=Math.max(160,Math.min(n.n>=5?420:320,Math.round(e.density*(n.n>=5?5.4:4.4)))),a=e.radius;function s(I,F){return t==="x"?[0,I,F]:t==="y"?[I,0,F]:[I,F,0]}function o(I,F,k){return e.cutaway==="quarter"||e.cutaway==="threeQuarter"?t==="y"?k>0:t==="z"?F>0:!1:e.cutaway==="eighth"?t==="x"?F>0&&k>0:t==="y"?I>0&&k>0:t==="z"?I>0&&F>0:!1:!0}const l=r+1,c=e.iso*1.015,u=new Float32Array(l*l),h=[],d=(I,F)=>F*l+I;for(let I=0;I<=r;I+=1){const F=a-2*a*I/r;for(let k=0;k<=r;k+=1){const V=-a+2*a*k/r,[X,G,ie]=s(V,F),ne=Mt(n,X,G,ie);u[d(k,I)]=ne;const oe=i==null||(i>0?ne>=0:ne<0);o(X,G,ie)&&oe&&Math.abs(ne)>=e.iso*.94&&h.push(ne)}}if(!h.length)return null;const f=Rd(h,e.iso*1.6),_=[],v=[],g=[];function m(I){return i==null?Math.abs(I)-c:i*I-c}function M(I,F){const k=-a+2*a*I/r,V=a-2*a*F/r,[X,G,ie]=s(k,V),ne=u[d(I,F)];return{point:new P(X,G,ie),rawValue:ne,value:m(ne)}}function x(I,F,k){return{point:I.point.clone().lerp(F.point,k),rawValue:I.rawValue+(F.rawValue-I.rawValue)*k,value:I.value+(F.value-I.value)*k}}function y(I,F){const k=I-F;return Math.abs(k)<1e-12?.5:Math.max(0,Math.min(1,I/k))}function C(I){const F=[];for(let k=0;k<I.length;k+=1){const V=I[k],X=I[(k+1)%I.length],G=V.value>=0,ie=X.value>=0;G&&ie?F.push(X):G&&!ie?F.push(x(V,X,y(V.value,X.value))):!G&&ie&&F.push(x(V,X,y(V.value,X.value)),X)}return F}function E(I){const{x:F,y:k,z:V}=I.point;_.push(F,k,V);const X=Cd(I.rawValue,F,k,V,e,n,f);return v.push(X.r,X.g,X.b),_.length/3-1}for(let I=0;I<r;I+=1)for(let F=0;F<r;F+=1){const k=-a+2*a*(F+.5)/r,V=a-2*a*(I+.5)/r,[X,G,ie]=s(k,V);if(!o(X,G,ie))continue;let ne=[M(F,I),M(F+1,I),M(F+1,I+1),M(F,I+1)];if(ne=C(ne),ne.length<3)continue;const oe=E(ne[0]);for(let Q=1;Q<ne.length-1;Q+=1)g.push(oe,E(ne[Q]),E(ne[Q+1]))}if(!g.length)return null;const w=new je;w.setAttribute("position",new ke(_,3)),w.setAttribute("color",new ke(v,3)),w.setIndex(g),w.computeVertexNormals();const R=new nn({vertexColors:!0,side:ft,transparent:!1,opacity:1,depthWrite:!0});R.toneMapped=!1;const b=new $e(w,R);b.renderOrder=4,b.userData.vertexCount=g.length;const S=new nn({vertexColors:!0,side:ft,transparent:!0,opacity:.26,depthWrite:!1,depthTest:!0,blending:Ir});S.toneMapped=!1;const L=new $e(w,S);L.renderOrder=4.05,L.userData.vertexCount=g.length;const N=new dt;return N.add(b,L),N.userData.vertexCount=g.length*2,N}function Jv(){for(const n of[Tt,Ct,$i,ji,pa,ma,Oo,vl])n&&nr(Ot,n);Tt=null,Ct=null,$i=null,ji=null,pa=null,ma=null,Oo=null,vl=null}function Qv(){for(const n of[fi,pi,ga])n&&nr(rn,n);fi=null,pi=null,ga=null}function ex(n,e=!0){gi&&nr(rn,gi),gi=Zo(n,Math.max(.08,n*.024),.9),gi.visible=e,rn.add(gi)}function tx(){for(const n of[_a,va,qi])n&&nr(zn,n);_a=null,va=null,qi=null}function nc(){for(const n of[xa,Ma,ln,xl,Ml])n&&nr(Bn,n);xa=null,Ma=null,ln=null,xl=null,Ml=null}function nr(n,e){n.remove(e),e.traverse(t=>{var i,r,a,s;if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const o of t.material)o.dispose();else t.material&&(t.material.map&&t.material.map.dispose(),(s=(a=(r=(i=t.material.uniforms)==null?void 0:i.volumeMap)==null?void 0:r.value)==null?void 0:a.dispose)==null||s.call(a),t.material.dispose())})}function st(){ic();const n=ht(),e=$t(),t=kn(n.n,n.l,n.m);p.statusText.textContent="Calculating",p.renderButton.disabled=!0,requestAnimationFrame(()=>{var o;Jv(),Qv(),tx(),nc();let i=0,r=0;if(Ql(e.backgroundColor),wa.visible=e.showAxis,wa.scale.setScalar(Math.max(1,e.radius/4.5)),(o=p.toolAxis)==null||o.classList.toggle("active",e.showAxis),e.mode==="marching"||e.mode==="points")Tt=uh(n,e,1,e.positiveColor),Ct=uh(n,e,-1,e.negativeColor),i=Tt.userData.vertexCount,r=Ct.userData.vertexCount;else{const{positive:l,negative:c}=dv(n,{...e,thetaSegments:Math.max(30,e.density+18),phiSegments:Math.max(52,e.density*3)});Tt=Br(l,It(e.positiveColor),e.opacity),Ct=Br(c,It(e.negativeColor),e.opacity),kr(Tt,e),kr(Ct,e),i=l.vertices.length/3,r=c.vertices.length/3}const a=Sd(e);if(Tt&&Ct&&(Tt.visible=e.showPositive&&a,Ct.visible=e.showNegative&&a,Ot.add(Tt,Ct)),e.showCloud){const{positive:l,negative:c}=lv(n,e);$i=zo(l,It(e.positiveColor)),ji=zo(c,It(e.negativeColor)),$i.visible=e.showPositive,ji.visible=e.showNegative,Ot.add($i,ji),i=l.length/3,r=c.length/3}e.showNode&&Fo(n.n,n.l)!=="0 radial, 0 angular"&&(pa=qv(n,e),pa&&Ot.add(pa)),ma=$v(),ma&&Ot.add(ma),vl=null,(e.showBox||e.grid3d)&&(Oo=Td(e.radius),Ot.add(Oo)),px(e),p.orbitalName.textContent=t,p.viewerTitle.textContent=`原子轨道  ${t}`,p.nodeText.textContent=Fo(n.n,n.l),p.sliceText.textContent=e.slice.toUpperCase(),p.boxText.textContent=e.radius.toFixed(2),p.isoText.textContent=e.iso.toFixed(5),p.posCount.textContent=String(i),p.negCount.textContent=String(r),p.statusText.textContent="Rendered",zd(),p.animationWindow&&!p.animationWindow.classList.contains("closed")&&Vr(0),ux(n,e),Tx(n,e),uc(n,e);const s=n.n>=5||n.l>=3?1.65:1.22;ox(n,e.radius*s,Math.max(Kt,rx(e))),pv(),mv(),Dn(Re),Dn(Ne),p.renderButton.disabled=!1,tn()})}function nx(){return Array.from(document.querySelectorAll(".view-grid > .qt-window"))}function ic(n={}){for(const e of nx())e.classList.remove("closed"),n.restoreLayout?e.classList.remove("minimized","maximized"):e.classList.remove("minimized"),Di(e)}function Jo(n=ni){const e=p.viewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Ke.left=-n*t,Ke.right=n*t,Ke.top=n,Ke.bottom=-n):(Ke.left=-n,Ke.right=n,Ke.top=n/t,Ke.bottom=-n/t),Ke.near=.1,Ke.far=Math.max(1e3,n*8),Ke.updateProjectionMatrix()}function Ti(n,e=90){return Math.max(e,n*2.8)}function rc(n=ni){var t,i,r;ni=n;const e=Ti(n);Ke.position.set(0,0,e),Ke.lookAt(0,0,0),Jo(n),Re.target.set(0,0,0),Re.update(),(t=p.toolXOY)==null||t.classList.add("active"),(i=p.toolYOZ)==null||i.classList.remove("active"),(r=p.toolXOZ)==null||r.classList.remove("active")}function Qo(n=Math.max(3,ni*.45)){const e=p.angularViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(ot.left=-n*t,ot.right=n*t,ot.top=n,ot.bottom=-n):(ot.left=-n,ot.right=n,ot.top=n/t,ot.bottom=-n/t),ot.near=.1,ot.far=Math.max(1e3,n*8),ot.updateProjectionMatrix()}function ix(n=4){var t;Kt=Math.max(3,n);const e=Ti(Kt,40);ot.position.set(0,0,e),ot.lookAt(0,0,0),Qo(Kt),Ne.target.set(0,0,0),(t=Ne.handleResize)==null||t.call(Ne),Ne.update()}function rx(n){const e=Math.max(4,Math.min(8,n.radius*.55))*.74;return Math.max(5.8,e*1.55)}function ax(...n){var a;const e=new hn,t=new hn;let i=!1;for(const s of n)s&&((a=s.updateWorldMatrix)==null||a.call(s,!0,!1),t.setFromObject(s),!(!Number.isFinite(t.min.x)||!Number.isFinite(t.max.x))&&(i?e.union(t):e.copy(t),i=!0));if(!i)return 4.2;const r=new Ri;return e.getBoundingSphere(r),Math.max(.001,r.radius)}function ox(n,e,t){var s,o,l,c,u;const i=lc(n);ni=e,Kt=Math.max(3,t);const r=Ti(e),a=Ti(Kt,40);i==="yoz"?(Ke.position.set(r,0,0),ot.position.set(a,0,0)):i==="xoz"?(Ke.position.set(0,r,0),ot.position.set(0,a,0)):(Ke.position.set(0,0,r),ot.position.set(0,0,a)),Ke.lookAt(0,0,0),ot.lookAt(0,0,0),Jo(e),Qo(Kt),Re.target.set(0,0,0),Ne.target.set(0,0,0),(s=Re.handleResize)==null||s.call(Re),(o=Ne.handleResize)==null||o.call(Ne),Re.update(),Ne.update(),(l=p.toolXOY)==null||l.classList.toggle("active",i==="xoy"),(c=p.toolYOZ)==null||c.classList.toggle("active",i==="yoz"),(u=p.toolXOZ)==null||u.classList.toggle("active",i==="xoz")}function Pd(n=Math.max(2.5,ni*.6)){const e=p.projectionViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(yt.left=-n*t,yt.right=n*t,yt.top=n,yt.bottom=-n):(yt.left=-n,yt.right=n,yt.top=n/t,yt.bottom=-n/t),yt.near=.1,yt.far=1e3,yt.updateProjectionMatrix()}function sx(n=Math.max(3,ni*.5)){var e;Jl=n,yt.up.set(0,0,1),yt.position.set(n*.78,-n*1.18,n*.68),yt.lookAt(0,0,0),Pd(n),yn.target.set(0,0,0),(e=yn.handleResize)==null||e.call(yn),yn.update()}function ac(n=4.5){const e=p.radialViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Lt.left=-n*t,Lt.right=n*t,Lt.top=n,Lt.bottom=-n):(Lt.left=-n,Lt.right=n,Lt.top=n/t,Lt.bottom=-n/t),Lt.near=.1,Lt.far=1e3,Lt.updateProjectionMatrix()}function lx(n=4.5){var e;Aa=n,Lt.position.set(n*.65,-n*.9,n*.7),Lt.lookAt(0,0,0),ac(n),qt.target.set(0,0,0),(e=qt.handleResize)==null||e.call(qt),qt.update()}function cx(){var i;if(!es()||!((i=p.syncRotation)!=null&&i.checked))return;const n=Ke.position.clone().sub(Re.target).normalize(),e=Ke.up.clone(),t=(r,a,s,o=40)=>{const l=Ti(s,o);r.position.copy(n.clone().multiplyScalar(l)),r.up.copy(e),r.lookAt(0,0,0),a.target.set(0,0,0),r.updateProjectionMatrix()};t(ot,Ne,Kt,40),t(yt,yn,Jl,30)}function ux(n,e){const t={...e,radius:Math.max(4,Math.min(8,e.radius*.55)),thetaSegments:72,phiSegments:144},{positive:i,negative:r}=xd(n,t);fi=Br(i,It(e.positiveColor),1),pi=Br(r,It(e.negativeColor),1),kr(fi,{...e,smooth:!0,wireframe:e.wireframe}),kr(pi,{...e,smooth:!0,wireframe:e.wireframe}),fi.scale.setScalar(.74),pi.scale.setScalar(.74);const a=Sd(e);fi.visible=e.showPositive&&a,pi.visible=e.showNegative&&a,rn.add(fi,pi);const s=ax(fi,pi),o=Math.max(4.2,s*1.45);e.showNode&&(ga=Yv(n,Math.max(s*1.16,2.8),e),ga&&rn.add(ga)),ex(o,e.showAxis),Kt=Math.max(Kt,o*1.12)}const oa=(()=>{const n=[255,0,0],e=[255,0,255],t=[255,255,255],i=[0,255,255],r=[0,0,255],a=[],s=(l,c)=>{for(let u=0;u<c;u+=1)a.push(l)},o=(l,c,u)=>{const h=[(c[0]-l[0])/u,(c[1]-l[1])/u,(c[2]-l[2])/u];for(let d=0;d<u;d+=1)a.push([l[0]+d*h[0],l[1]+d*h[1],l[2]+d*h[2]])};return s(n,20),o(n,e,80),o(e,t,25),s(t,5),o(t,i,25),o(i,r,80),s(r,20),a.reverse().map(([l,c,u])=>new xe(l/255,c/255,u/255))})();function oc(n){const t=(Math.max(-1,Math.min(1,n))+1)/2*(oa.length-1),i=Math.max(0,Math.min(oa.length-1,Math.floor(t))),r=Math.max(0,Math.min(oa.length-1,i+1));return oa[i].clone().lerp(oa[r],t-i)}function hx(n,e,t,i,r,a){const s=e.rows,o=s.length,l=2*t/(o-1),c=Math.max(1,Math.round(.4/l)),u=new Ji({color:16777215,transparent:!0,opacity:.56}),h=(d,f)=>{const _=-t+2*t*d/(o-1),v=-t+2*t*f/(o-1),g=s[f][d]/a;return new P(_,v,i+g*r+.012)};for(let d=0;d<o;d+=c){const f=[];for(let _=0;_<o;_+=1)f.push(h(_,d));n.add(new ba(new je().setFromPoints(f),u))}for(let d=0;d<o;d+=c){const f=[];for(let _=0;_<o;_+=1)f.push(h(d,_));n.add(new ba(new je().setFromPoints(f),u))}}function dx(n,e,t,i,r,a=1){const s=e.rows,o=s.length,l=2*t/(o-1),c=[(h,d,f)=>new P(-t+(h+f)*l,-t+d*l,i),(h,d,f)=>new P(-t+(h+1)*l,-t+(d+f)*l,i),(h,d,f)=>new P(-t+(h+1-f)*l,-t+(d+1)*l,i),(h,d,f)=>new P(-t+h*l,-t+(d+1-f)*l,i)],u=[[0,1],[1,2],[2,3],[3,0]];for(const h of r){const d=new Ji({color:oc(h).getHex(),transparent:!0,opacity:.95}),f=[];for(let _=0;_<o-1;_+=1)for(let v=0;v<o-1;v+=1){const g=[s[_][v],s[_][v+1],s[_+1][v+1],s[_+1][v]].map(M=>M/a),m=[];for(let M=0;M<4;M+=1){const[x,y]=u[M],C=g[x]-h,E=g[y]-h;if(C===0||C*E<0){const w=Math.abs(C)+Math.abs(E);if(w<1e-12)continue;const R=Math.max(0,Math.min(1,Math.abs(C)/w));m.push(c[M](v,_,R))}}m.length>=2&&(f.push(m[0],m[1]),m.length>=4&&f.push(m[2],m[3]))}f.length&&n.add(new kl(new je().setFromPoints(f),d))}}const On={radius:16756736,direction:3538793,point:16776960};function es(){var n;return!!((n=p.relationMode)!=null&&n.checked)}function fx(){const n=[[Ot,yl],[zn,Sl],[Bn,bl],[rn,El]];for(const[e,t]of n)t&&nr(e,t);yl=null,Sl=null,bl=null,El=null}function dh(n){var i,r;let e=0;const t=new P;return(i=n==null?void 0:n.updateMatrixWorld)==null||i.call(n,!0),(r=n==null?void 0:n.traverse)==null||r.call(n,a=>{var o,l;const s=(l=(o=a.geometry)==null?void 0:o.attributes)==null?void 0:l.position;if(s){a.updateMatrixWorld(!0);for(let c=0;c<s.count;c+=1)t.fromBufferAttribute(s,c).applyMatrix4(a.matrixWorld),e=Math.max(e,t.length())}}),e}function px(n){const e=Math.max(dh(Tt),dh(Ct));jo=e>.001?e*1.02:n.radius*.86}function Ld(){var u,h,d;const n=$t(),e=Math.max(0,Math.min(100,Number(((u=p.scanRadius)==null?void 0:u.value)??45))),t=Math.max(0,Math.min(180,Number(((h=p.scanTheta)==null?void 0:h.value)??90))),i=(Number(((d=p.scanPhi)==null?void 0:d.value)??0)%360+360)%360,r=Math.max(.001,jo||n.radius),a=r*e/100,s=t*Math.PI/180,o=i*Math.PI/180,l=new P(Math.sin(s)*Math.cos(o),Math.sin(s)*Math.sin(o),Math.cos(s)).normalize(),c=l.clone().multiplyScalar(a);return{options:n,radiusPercent:e,thetaDegrees:t,phiDegrees:i,r:a,maxRadius:r,direction:l,point:c}}function mx(n=Ld()){p.scanRadiusValue&&(p.scanRadiusValue.value=`${Math.round(n.radiusPercent)}%`),p.scanThetaValue&&(p.scanThetaValue.value=`${Math.round(n.thetaDegrees)}°`),p.scanPhiValue&&(p.scanPhiValue.value=`${Math.round(n.phiDegrees)}°`)}function sc(n,e,t=.95){const i=new Ji({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new ba(new je().setFromPoints(n),i);return r.renderOrder=30,r}function gx(n,e,t=.95){const i=new Ji({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new kl(new je().setFromPoints(n),i);return r.renderOrder=30,r}function _x(n,e=16777215,t=.026,i=1){const r=new pd(n,!1,"centripetal",.18),a=new Wl(r,Math.max(80,n.length*2),t,8,!1),s=new nn({color:e,transparent:i<1,opacity:i,depthTest:!1,depthWrite:!1});s.toneMapped=!1;const o=new $e(a,s);return o.renderOrder=31,o}function Rl(n,e,t,i=.95){const r=[];for(let s=0;s<=160;s+=1){const o=Math.PI*2*s/160;r.push(new P(n*Math.cos(o),n*Math.sin(o),e))}return sc(r,t,i)}function Id(n,e,t=.74){const i=[],s=o=>{for(let l=0;l<160;l+=1){const c=Math.PI*2*l/160,u=Math.PI*2*(l+1)/160;i.push(o(c),o(u))}};for(let o=1;o<12;o+=1){const l=Math.PI*o/12,c=Math.cos(l)*n,u=Math.sin(l)*n;s(h=>new P(u*Math.cos(h),u*Math.sin(h),c))}for(let o=0;o<6;o+=1){const l=Math.PI*o/6;s(c=>new P(n*Math.sin(c)*Math.cos(l),n*Math.sin(c)*Math.sin(l),n*Math.cos(c)))}return gx(i,e,t)}function Ra(n,e,t=1){const i=new nn({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new $e(new Yr(n,24,16),i);return r.renderOrder=32,r}function Dd(n,e,t,i,r){const a=new tv(n,new P(0,0,0),e,t,i,r);return a.traverse(s=>{s.material&&(s.material.depthTest=!1,s.material.depthWrite=!1,s.material.toneMapped=!1,s.renderOrder=31)}),a}function vx(n,e,t){return e==="xoz"?new me(n.x*t,n.z*t):e==="yoz"?new me(n.y*t,n.z*t):new me(n.x*t,n.y*t)}function xx(n,e){const t=n.length();return t>e&&t>1e-9&&n.multiplyScalar(e/t),n}function Mx(n){const e=new dt;n.r>.001&&e.add(Id(n.r,On.radius,.72));const t=Math.max(n.r,n.maxRadius*.22,1);e.add(Dd(n.direction,t,On.direction,t*.11,t*.035));const i=Ra(Math.max(.08,n.maxRadius*.018),On.point);i.position.copy(n.point),e.add(i),Ot.add(e),yl=e}function yx(n){const e=new dt,t=Math.max(2.4,Kt*.55);e.add(Dd(n.direction,t,On.direction,t*.14,t*.045));const i=Ra(.08,On.point);i.position.copy(n.direction.clone().multiplyScalar(t)),e.add(i),rn.add(e),El=e}function Sx(n){if(!jn)return;const e=new dt,t=jn.radius*.92,i=jn.radius/Math.max(1e-4,n.maxRadius),r=Math.max(0,n.r*i),a=r>t?t/r:1,s=i*a,o=Math.min(t,Math.max(0,n.r*s));e.add(Rl(o,jn.bottomZ+.18,On.radius,.95));const l=xx(vx(n.point,jn.plane,s),t),c=Ra(.075,On.point);c.position.set(l.x,l.y,jn.bottomZ+.28),e.add(c),e.add(sc([new P(0,0,jn.bottomZ+.22),new P(l.x,l.y,jn.bottomZ+.22)],On.direction,.82)),zn.add(e),Sl=e}function bx(n){if(!_n)return;const e=new dt,t=Math.min(_n.radiusScale,n.r/Math.max(1e-4,_n.radialExtent)*_n.radiusScale),i=cc(ht(),n.r,n.options.radialMode),r=_n.curveBaseZ+i/_n.maxAbs*_n.heightScale;e.add(sc([new P(t,0,_n.baseZ-.15),new P(t,0,_n.heightTop)],On.radius,.95));const a=Ra(.07,On.point);a.position.set(t,0,r),e.add(a),Bn.add(e),bl=e}function ts(){fx();const n=Ld();mx(n),es()&&(Mx(n),yx(n),Sx(n),bx(n))}function Ex(n){const e=n.length();if(e<1e-6)return;const t=Math.acos(Math.max(-1,Math.min(1,n.z/e))),i=(Math.atan2(n.y,n.x)+Math.PI*2)%(Math.PI*2);p.scanRadius&&(p.scanRadius.value=String(Math.round(Math.max(0,Math.min(100,e/Math.max(1e-4,jo)*100))))),p.scanTheta&&(p.scanTheta.value=String(Math.round(t*180/Math.PI))),p.scanPhi&&(p.scanPhi.value=String(Math.round(i*180/Math.PI))),ts(),Qn(`关联高亮：r=${e.toFixed(2)}, θ=${Math.round(t*180/Math.PI)}°, φ=${Math.round(i*180/Math.PI)}°`)}function wx(n){var s;if(!es())return;const e=fn.domElement.getBoundingClientRect(),t=new me((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),i=new ev;i.params.Points.threshold=Math.max(.12,$t().radius*.025),i.setFromCamera(t,Ke);const r=[Tt,Ct,$i,ji].filter(Boolean),a=i.intersectObjects(r,!0);(s=a[0])!=null&&s.point&&Ex(a[0].point)}function lc(n){const e=kn(n.n,n.l,n.m).replace(/^\d+/,"");return e.startsWith("Dyz")||e.startsWith("Fyz2")||e.startsWith("Gz3y")||e.startsWith("Gzy3")||e.startsWith("Gyz3")||e.startsWith("Hyz4")||e.startsWith("Hyz")?"yoz":e.startsWith("Pz")||e.startsWith("Dz2")||e.startsWith("Dxz")||e.startsWith("Fz3")||e.startsWith("Fxz2")||e.startsWith("Gz4")||e.startsWith("Gz3x")||e.startsWith("Gxz3")||e.startsWith("Gzx3")||e.startsWith("Hxz4")||e.startsWith("Hz5")||e.startsWith("Hxz")?"xoz":"xoy"}function Ax(n,e,t,i){const r=[],a=e.radius;let s=0,o=0,l=0;for(let c=0;c<i;c+=1){const u=[],h=-a+2*a*c/(i-1);for(let d=0;d<i;d+=1){const f=-a+2*a*d/(i-1);let _=0;t==="xoy"&&(_=tl(n,f,h,0)),t==="xoz"&&(_=tl(n,f,0,h)),t==="yoz"&&(_=tl(n,0,f,h)),s=Math.max(s,Math.abs(_)),o=Math.max(o,_),l=Math.min(l,_),u.push(_)}r.push(u)}return{data:{rows:r,maxAbs:s,maxPositive:o,minNegative:l},scale:1}}function Tx(n,e){zn.background=new xe(e.backgroundColor);const t=new dt,r=Vn(n).gridSize*2+1,a=lc(n),{data:s}=Ax(n,e,a,r),o=(s.maxPositive>1e-12?s.maxPositive:s.maxAbs||1)/.9,l=[],c=[],u=[],h=Math.min(4.7,e.radius*.42),d=h*1,f=-h*1,_=h*.9;jn={plane:a,radius:h,surfaceZ:d,bottomZ:f,height:_};for(let C=0;C<r;C+=1)for(let E=0;E<r;E+=1){const w=-h+2*h*E/(r-1),R=-h+2*h*C/(r-1),b=s.rows[C][E]/o,S=b;l.push(w,R,d+S*_);const L=oc(b);c.push(L.r,L.g,L.b)}for(let C=0;C<r-1;C+=1)for(let E=0;E<r-1;E+=1){const w=C*r+E,R=w+1,b=w+r,S=b+1;u.push(w,b,R,R,b,S)}const v=new je;v.setAttribute("position",new ke(l,3)),v.setAttribute("color",new ke(c,3)),v.setIndex(u),v.computeVertexNormals(),_a=new $e(v,new fa({vertexColors:!0,side:ft,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04})),t.add(_a),hx(t,s,h,d,_,o);const g=new dt,m=[];for(let C=0;C<r;C+=1)for(let E=0;E<r;E+=1){const w=-h+2*h*E/(r-1),R=-h+2*h*C/(r-1);m.push(w,R,f+.02)}const M=new je;M.setAttribute("position",new ke(m,3)),M.setAttribute("color",new ke(c,3)),M.setIndex(u),M.computeVertexNormals();const x=new $e(M,new nn({vertexColors:!0,side:ft,transparent:!0,opacity:.78}));g.add(x);const y=(C,E,w)=>Array.from({length:w},(R,b)=>C+(E-C)*b/(w-1));dx(g,s,h,f+.08,[...y(-1,0,20),...y(0,1,20)],o),va=g,t.add(va),qi=Td(h),qi.scale.z=1,qi.position.z=(d+f)/2,t.add(qi),_a=t,va=null,qi=null,zn.add(t),sx(h*1.92),ts()}function cc(n,e,t){const i=Math.max(e,1e-4),r=Fn(n.n,n.l,n.z,i);return t==="R"?r:t==="R2"?r*r:i*i*r*r}function fh(n,e=11974326){const t=Math.abs(n),i=Math.max(0,Math.min(1,(t-.035)/.72)),r=i*i*(3-2*i);return new xe(e).lerp(oc(n),r)}function Cx(n,e,t,i){const r=Xl(e).filter(s=>s>.02&&s<i.radialExtent*.995);if(!r.length)return;const a=i.curveBaseZ??(t.radialSide?i.sideZ:i.diskZ+i.curveLift);for(const s of r){const o=s/i.radialExtent*i.radiusScale;if(t.radialCurve){const l=cc(e,s,t.radialMode),c=a+l/i.maxAbs*i.heightScale;for(const u of[-1,1]){const h=Ra(.065,16761856,.95);h.position.set(u*o,0,c),n.add(h)}}}}function uc(n,e){var E;Bn.background=new xe(e.backgroundColor);const t=n.n>=5?260:190,i=n.n>=5?132:96,r=es()?Math.max(.001,jo||gl(n)):Math.max(5,gl(n)),a=[];for(let w=0;w<=t;w+=1)a.push(cc(n,r*w/t,e.radialMode));const s=Math.max(...a.map(Math.abs),1e-6),o=3.7,l=o*.43,c=-1.25,u=c,h=.08,d=u+o*.72,f=e.radialSide?d:u+h,_=f+a[0]/s*l;_n={radialExtent:r,radiusScale:o,heightScale:l,baseZ:c,diskZ:u,curveLift:h,sideZ:d,curveBaseZ:f,curveOriginZ:_,maxAbs:s,heightTop:f+l+.38};const v=new dt,g=new $e(new Yr(o,128,48,0,Math.PI*2,Math.PI/2,Math.PI/2),new fa({color:12105912,side:ft,transparent:!0,opacity:.88,shininess:1,specular:2236962}));g.rotation.x=Math.PI/2,g.position.z=c,v.add(g);const m=new je,M=[],x=[],y=[];for(let w=0;w<=i;w+=1){const R=w/i*o,b=Math.round(w/i*t),S=a[b]/s;for(let L=0;L<=128;L+=1){const N=Math.PI*2*L/128,I=R*Math.cos(N),F=R*Math.sin(N);M.push(I,F,u);const k=fh(S,12105912);x.push(k.r,k.g,k.b)}}const C=129;for(let w=0;w<i;w+=1)for(let R=0;R<128;R+=1){const b=w*C+R,S=b+1,L=b+C,N=L+1;y.push(b,L,S,S,L,N)}if(m.setAttribute("position",new ke(M,3)),m.setAttribute("color",new ke(x,3)),m.setIndex(y),m.computeVertexNormals(),xa=new $e(m,new fa({vertexColors:!0,side:ft,transparent:!1,opacity:1,shininess:8,specular:2236962})),v.add(xa),e.radialSide){const w=new $e(new Xr(o,o,Math.max(.1,d-u),160,1,!0),new K_({color:14149604,side:ft,transparent:!0,opacity:.24,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.28,ior:1.45,transmission:.08,specularIntensity:.5,specularColor:16777215}));w.rotation.x=Math.PI/2,w.position.z=(d+u)/2,w.renderOrder=2,v.add(w),v.add(Rl(o,d,16777215,.12)),v.add(Rl(o,u,16777215,.08));const R=new je,b=[],S=[],L=[],N=e.radialSection?64:128,I=(e.radialSection,0),F=e.radialSection?Math.PI:Math.PI*2;for(let V=0;V<=i;V+=1){const X=V/i*o,G=Math.round(V/i*t),ie=a[G]/s,ne=d+ie*l;for(let oe=0;oe<=N;oe+=1){const Q=I+F*oe/N,pe=X*Math.cos(Q),W=X*Math.sin(Q);b.push(pe,W,ne);const K=fh(ie,11711154);S.push(K.r,K.g,K.b)}}const k=N+1;for(let V=0;V<i;V+=1)for(let X=0;X<N;X+=1){const G=V*k+X,ie=G+1,ne=G+k,oe=ne+1;L.push(G,ne,ie,ie,ne,oe)}R.setAttribute("position",new ke(b,3)),R.setAttribute("color",new ke(S,3)),R.setIndex(L),R.computeVertexNormals(),v.add(new $e(R,new fa({vertexColors:!0,side:ft,transparent:!1,opacity:1,shininess:10,specular:3355443})))}if(e.radialCurve){const w=[],R=f;for(let S=0;S<=t;S+=1){const L=o*S/t,N=R+a[S]/s*l;w.push(new P(L,0,N))}const b=w.slice(1).map(S=>new P(-S.x,0,S.z)).reverse();Ma=_x([...b,...w],16777215,e.radialSide?.013:.011),v.add(Ma)}if(e.radialAxis){const w=_;ln=Tv(o+.9,o+.45,w,e.radialMode),v.add(ln)}Cx(v,n,e,_n),xl=v,Bn.add(v),xa=null,Ma=null,ln=null,Ml=null,e.radialSide?(Aa=4.9,Lt.position.set(0,-7.2,d+1.25),Lt.lookAt(0,0,0),ac(Aa),qt.target.set(0,0,0),(E=qt.handleResize)==null||E.call(qt),qt.update()):lx(5.3),ts()}function ko(){Rx();const n=(e,t,i,r,a)=>{var o;const s=e.getBoundingClientRect();s.width<2||s.height<2||(t.setSize(s.width,s.height,!1),t.domElement.style.width="100%",t.domElement.style.height="100%",i(a),(o=r.handleResize)==null||o.call(r),r.update())};n(p.viewer,fn,Jo,Re,ni),n(p.angularViewer,Ii,Qo,Ne,Kt),n(p.projectionViewer,er,Pd,yn,Jl),n(p.radialViewer,$r,ac,qt,Aa);for(const e of Ta)dc(e,e.radius);Px()}function Rx(){const n=document.querySelector(".sidebar"),e=n==null?void 0:n.querySelector(".sidebar-fit");if(!n)return;if(window.matchMedia("(max-width: 900px)").matches){document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");return}document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");const t=getComputedStyle(n),i=n.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),r=(e==null?void 0:e.scrollHeight)||n.scrollHeight;if(!i||!r||r<=i+4)return;const a=Math.max(.72,Math.min(1,(i-4)/r));document.documentElement.style.setProperty("--sidebar-zoom",a.toFixed(3)),document.documentElement.style.setProperty("--sidebar-fit-height",`${Math.ceil(r*a)}px`)}function tn(){requestAnimationFrame(()=>{ko(),requestAnimationFrame(()=>{ko(),Ea()})})}function Nd(n){const e=p.sketchCanvas.getBoundingClientRect();return{x:(n.clientX-e.left)/Math.max(1,e.width),y:(n.clientY-e.top)/Math.max(1,e.height)}}function ph(n,e,t,i){if(!e.points.length)return;n.save(),n.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",n.strokeStyle=e.color,n.lineWidth=e.size,n.lineCap="round",n.lineJoin="round",n.beginPath();const r=e.points[0];n.moveTo(r.x*t,r.y*i);for(const a of e.points.slice(1))n.lineTo(a.x*t,a.y*i);e.points.length===1&&n.lineTo(r.x*t+.01,r.y*i+.01),n.stroke(),n.restore()}function Kr(){const n=p.sketchCanvas;if(!n)return;const e=n.getContext("2d");e.clearRect(0,0,n.width,n.height);for(const t of Je.strokes)ph(e,t,n.width,n.height);Je.currentStroke&&ph(e,Je.currentStroke,n.width,n.height)}function Px(){const n=p.sketchCanvas;if(!n)return;const e=n.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,Math.floor(e.width*t)),r=Math.max(220,Math.floor(e.height*t));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r,Kr())}function rl(n){var e,t;Je.erasing=n,(e=p.sketchPen)==null||e.classList.toggle("active",!n),(t=p.sketchEraser)==null||t.classList.toggle("active",n)}function Lx(n){var e,t,i,r;p.sketchCanvas&&(n.preventDefault(),(t=(e=p.sketchCanvas).setPointerCapture)==null||t.call(e,n.pointerId),Je.drawing=!0,Je.currentStroke={color:((i=p.sketchColor)==null?void 0:i.value)||"#ffffff",size:Number(((r=p.sketchSize)==null?void 0:r.value)||5)*Math.min(window.devicePixelRatio||1,2),mode:Je.erasing?"erase":"draw",points:[Nd(n)]},Kr())}function Ix(n){!Je.drawing||!Je.currentStroke||(n.preventDefault(),Je.currentStroke.points.push(Nd(n)),Kr())}function mh(n){!Je.drawing||!Je.currentStroke||(n.preventDefault(),Je.strokes.push(Je.currentStroke),Je.currentStroke=null,Je.drawing=!1,Kr())}function Dx(){var n,e,t,i,r,a,s,o,l,c,u,h,d,f,_,v,g,m,M,x,y,C,E,w,R,b,S,L,N,I,F,k,V,X,G,ie,ne,oe,Q,pe,W,K,ce,O,re,ve,Se,U,Ae,Oe;if(p.sketchCanvas){p.sketchCanvas.addEventListener("pointerdown",Lx),p.sketchCanvas.addEventListener("pointermove",Ix),p.sketchCanvas.addEventListener("pointerup",mh),p.sketchCanvas.addEventListener("pointercancel",mh),(n=p.openActivityButton)==null||n.addEventListener("click",()=>ca("predict")),(e=p.openSketchButton)==null||e.addEventListener("click",hc),(t=p.openPredictButton)==null||t.addEventListener("click",()=>ca("predict")),(i=p.openChallengeButton)==null||i.addEventListener("click",()=>ca("challenge"));for(const Ce of p.activityModeButtons??[])Ce.addEventListener("click",()=>ca(Ce.dataset.activityMode));(r=p.startPredictButton)==null||r.addEventListener("click",VM),(a=p.verifyPredictButton)==null||a.addEventListener("click",HM),(s=p.scoreCurrentButton)==null||s.addEventListener("click",zM),(o=p.scoreShowRubricButton)==null||o.addEventListener("click",BM),(l=p.scoreResetButton)==null||l.addEventListener("click",kM),(c=p.diagnoseNodesButton)==null||c.addEventListener("click",()=>yo("nodes")),(u=p.diagnosePhaseButton)==null||u.addEventListener("click",()=>yo("phase")),(h=p.diagnoseProjectionButton)==null||h.addEventListener("click",()=>yo("projection"));for(const Ce of document.querySelectorAll("[data-diagnosis]"))Ce.addEventListener("click",()=>yo(Ce.dataset.diagnosis));(d=p.nodeRevealButton)==null||d.addEventListener("click",()=>{p.radialNode&&!p.radialNode.disabled&&(p.radialNode.checked=!0),p.polarNode&&!p.polarNode.disabled&&(p.polarNode.checked=!0),p.longitudeNode.checked=!0,p.node.checked=!0,st()}),(f=p.nodeHideButton)==null||f.addEventListener("click",()=>{p.radialNode&&(p.radialNode.checked=!1),p.polarNode&&(p.polarNode.checked=!1),p.longitudeNode.checked=!1,p.node.checked=!1,st()}),(_=p.compareApplyButton)==null||_.addEventListener("click",()=>{Ud()}),(v=p.compareA)==null||v.addEventListener("change",()=>{Pl("a")}),(g=p.compareB)==null||g.addEventListener("change",()=>{Pl("b")}),(m=p.compareLoadAButton)==null||m.addEventListener("click",()=>{var Ce;(Ce=p.compareA)!=null&&Ce.value&&_h(p.compareA.value,"a")}),(M=p.compareLoadBButton)==null||M.addEventListener("click",()=>{var Ce;(Ce=p.compareB)!=null&&Ce.value&&_h(p.compareB.value,"b")}),(x=p.newChallengeButton)==null||x.addEventListener("click",GM),(y=p.revealChallengeButton)==null||y.addEventListener("click",WM),(C=p.explainRestartButton)==null||C.addEventListener("click",FM),(E=p.explainPrevButton)==null||E.addEventListener("click",()=>Eh(-1)),(w=p.explainPlayButton)==null||w.addEventListener("click",UM),(R=p.explainNextButton)==null||R.addEventListener("click",()=>Eh(1)),(b=p.tabletLargeButton)==null||b.addEventListener("click",()=>wh(!0)),(S=p.tabletRestoreButton)==null||S.addEventListener("click",()=>wh(!1)),(L=p.tabletScreenshotButton)==null||L.addEventListener("click",os),(I=(N=p.sketchWindow)==null?void 0:N.querySelector(".window-title"))==null||I.addEventListener("pointerdown",qM),(k=(F=p.boxWindow)==null?void 0:F.querySelector(".window-title"))==null||k.addEventListener("pointerdown",Ce=>So(Ce,p.boxWindow)),(X=(V=p.activityWindow)==null?void 0:V.querySelector(".window-title"))==null||X.addEventListener("pointerdown",Ce=>So(Ce,p.activityWindow)),(ie=(G=p.formulaWindow)==null?void 0:G.querySelector(".window-title"))==null||ie.addEventListener("pointerdown",Ce=>So(Ce,p.formulaWindow)),(oe=(ne=p.animationWindow)==null?void 0:ne.querySelector(".window-title"))==null||oe.addEventListener("pointerdown",Ce=>So(Ce,p.animationWindow)),window.addEventListener("pointermove",XM),window.addEventListener("pointermove",YM),window.addEventListener("pointerup",Ah),window.addEventListener("pointerup",Th),window.addEventListener("pointercancel",Ah),window.addEventListener("pointercancel",Th),window.addEventListener("pointerup",fv),window.addEventListener("pointercancel",Ea),window.addEventListener("blur",Ea),(Q=p.sketchPen)==null||Q.addEventListener("click",()=>rl(!1)),(pe=p.sketchEraser)==null||pe.addEventListener("click",()=>rl(!0)),(W=p.sketchClear)==null||W.addEventListener("click",()=>{Je.strokes=[],Je.currentStroke=null,Kr()}),(K=p.annotationModeButton)==null||K.addEventListener("click",Nx),(ce=p.openAnimationButton)==null||ce.addEventListener("click",DM),(O=p.animationRestartButton)==null||O.addEventListener("click",RM),(re=p.animationPrevButton)==null||re.addEventListener("click",()=>Sh(-1)),(ve=p.animationPlayButton)==null||ve.addEventListener("click",CM),(Se=p.animationNextButton)==null||Se.addEventListener("click",()=>Sh(1)),(U=p.animationExportButton)==null||U.addEventListener("click",IM),(Ae=p.openFormulaButton)==null||Ae.addEventListener("click",Zx),(Oe=p.annotationClearButton)==null||Oe.addEventListener("click",zx);for(const Ce of document.querySelectorAll("[data-annotation-add]"))Ce.addEventListener("click",()=>Ox(Ce.dataset.annotationAdd));for(const Ce of document.querySelectorAll(".annotation-layer"))Ce.addEventListener("pointerdown",Bx);window.addEventListener("pointermove",kx),window.addEventListener("pointerup",gh),window.addEventListener("pointercancel",gh),rl(!1)}}function Nx(){var n;he.annotationMode=!he.annotationMode,document.body.classList.toggle("annotation-mode",he.annotationMode),(n=p.annotationToolbar)==null||n.classList.toggle("closed",!he.annotationMode),he.annotationMode&&ic(),Qn(he.annotationMode?"讲解标注：点击下方按钮添加标签，拖动标签调整位置。":"讲解标注已关闭。")}function Ux(n){const t={正相:"orbital",负相:"orbital",节点:"orbital",投影平面:"projection",径向节点:"radial"}[n]||"orbital";return document.querySelector(`[data-annotation-layer="${t}"]`)}function Fx(n){return n==="正相"?"positive":n==="负相"?"negative":n==="节点"?"node":n==="投影平面"?"projection":n==="径向节点"?"radial":""}function Ox(n){const e=Ux(n);if(!e)return;const t=document.createElement("button");t.type="button",t.className=`annotation-note ${Fx(n)}`.trim(),t.textContent=n;const i=e.querySelectorAll(".annotation-note").length;t.style.left=`${12+i%4*12}%`,t.style.top=`${14+i%3*14}%`,e.appendChild(t)}function zx(){for(const n of document.querySelectorAll(".annotation-layer"))n.replaceChildren()}function Bx(n){var r;const e=n.target.closest(".annotation-note");if(!e||!he.annotationMode)return;n.preventDefault(),n.stopPropagation();const t=e.closest(".annotation-layer"),i=e.getBoundingClientRect();he.annotationDrag={note:e,layer:t,offsetX:n.clientX-i.left,offsetY:n.clientY-i.top},(r=e.setPointerCapture)==null||r.call(e,n.pointerId)}function kx(n){const e=he.annotationDrag;if(!e)return;n.preventDefault();const t=e.layer.getBoundingClientRect(),i=e.note.getBoundingClientRect(),r=Math.max(0,Math.min(t.width-i.width,n.clientX-t.left-e.offsetX)),a=Math.max(0,Math.min(t.height-i.height,n.clientY-t.top-e.offsetY));e.note.style.left=`${r}px`,e.note.style.top=`${a}px`}function gh(){he.annotationDrag=null}function hc(){p.sketchWindow&&(p.sketchWindow.classList.remove("closed","minimized"),p.sketchWindow.style.zIndex="120",Di(p.sketchWindow),tn())}function Vx(){p.boxWindow&&(p.boxWindow.classList.remove("closed","minimized"),p.boxWindow.style.zIndex="126",Di(p.boxWindow),tn())}function ns(n){const[e,t,i]=n.split(",").map(Number);return{n:e,l:t,m:i}}function Hx(n){var o;if(!n)return null;let e=Ta.find(l=>l.container===n);if(e)return n.contains(e.renderer.domElement)||n.appendChild(e.renderer.domElement),e;const t=new Pi;t.background=new xe(((o=p.backgroundColor)==null?void 0:o.value)||"#000000");const i=new En(-5,5,5,-5,.1,2e3),r=new ri({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.appendChild(r.domElement);const a=Qi(i,r.domElement);Ca(n,a),t.add(new Li(16777215,.5));const s=new dn(16777215,1.2);return s.position.set(0,0,80),t.add(s),e={container:n,scene:t,camera:i,renderer:r,controls:a,objects:[],radius:5,target:new P,resizeObserver:null},"ResizeObserver"in window&&(e.resizeObserver=new ResizeObserver(()=>dc(e,e.radius)),e.resizeObserver.observe(n)),Ta.push(e),e}function Gx(n){if(n){for(const e of n.objects)nr(n.scene,e);n.objects=[]}}function dc(n,e){var s,o;if(!n)return;const t=n.container.getBoundingClientRect();if(t.width<2||t.height<2)return;n.renderer.setSize(t.width,t.height,!1);const i=t.width/t.height,r=Math.max(3,e);i>=1?(n.camera.left=-r*i,n.camera.right=r*i,n.camera.top=r,n.camera.bottom=-r):(n.camera.left=-r,n.camera.right=r,n.camera.top=r/i,n.camera.bottom=-r/i),n.camera.near=.1,n.camera.far=Math.max(1e3,r*8);const a=n.target??new P;n.camera.position.set(a.x,a.y,a.z+Ti(r,40)),n.camera.lookAt(a),n.camera.updateProjectionMatrix(),n.controls.target.copy(a),(o=(s=n.controls).handleResize)==null||o.call(s),n.controls.update()}function Wx(n,e,t){const i=new hn;let r=!1;for(const a of e){a.updateMatrixWorld(!0);const s=new hn().setFromObject(a);Number.isFinite(s.min.x)&&Number.isFinite(s.min.y)&&Number.isFinite(s.min.z)&&Number.isFinite(s.max.x)&&Number.isFinite(s.max.y)&&Number.isFinite(s.max.z)&&(i.union(s),r=!0)}if(r){const a=i.getBoundingSphere(new Ri);n.target.copy(a.center),n.radius=Math.max(2.5,t,a.radius*1.2)}else n.target.set(0,0,0),n.radius=Math.max(2.5,t);dc(n,n.radius)}function Vo(n,e,t,i){var v,g;const r=Hx(n);if(!r)return null;const a={...ns(e),z:Number((v=p.z)==null?void 0:v.value)||1},s=Vn(a),o=Math.max(4,Math.min(10,s.radius*.08)),l=Math.min(78,Math.max(42,Math.round(s.gridSize*.72))),c={iso:s.iso,density:l,radius:s.radius,opacity:.96,smooth:!1,wireframe:!0,cutaway:"none",showPositive:!0,showNegative:!0,positiveColor:p.positiveColor.value,negativeColor:p.negativeColor.value,backgroundColor:((g=p.backgroundColor)==null?void 0:g.value)||"#000000"};r.scene.background=new xe(c.backgroundColor),Gx(r);const u=Cl(a,c,1,c.positiveColor),h=Cl(a,c,-1,c.negativeColor),d=o/Math.max(1,s.radius);u.scale.multiplyScalar(d),h.scale.multiplyScalar(d);const f=Zo(Math.max(1.6,o*.5));r.scene.add(u,h,f),r.objects.push(u,h,f),Wx(r,[u,h,f],o*1.45);const _=kn(a.n,a.l,a.m);return t&&(t.textContent=_),i&&(i.textContent=`${Fo(a.n,a.l)}；n=${a.n}, l=${a.l}, |m|=${Math.abs(a.m)}`),{params:a,label:_,nodes:Fo(a.n,a.l)}}function Ud(){var t,i;const n=Vo(p.compareAViewer,(t=p.compareA)==null?void 0:t.value,p.compareATitle,p.compareANotes),e=Vo(p.compareBViewer,(i=p.compareB)==null?void 0:i.value,p.compareBTitle,p.compareBNotes);if(n&&e&&p.compareSummary){const r=n.params.l===e.params.l&&Math.abs(n.params.m)===Math.abs(e.params.m);p.compareSummary.textContent=r?`${n.label} 与 ${e.label} 角向类型相同，重点比较径向节点随 n 增加的变化。`:`${n.label} 与 ${e.label} 角向类型不同，重点比较节点面方向、相位分布和对称性。`}}function Pl(n){var e,t;return n==="a"?Vo(p.compareAViewer,(e=p.compareA)==null?void 0:e.value,p.compareATitle,p.compareANotes):n==="b"?Vo(p.compareBViewer,(t=p.compareB)==null?void 0:t.value,p.compareBTitle,p.compareBNotes):null}function is(n){const e=ns(n);p.n.value=e.n,p.l.value=e.l,p.m.value=Math.abs(e.m),p.cosType.checked=e.m>=0,p.sinType.checked=e.m<0,ht(),jr(),st()}function _h(n,e){var a,s,o,l;const t=ns(n);is(n),p.mainWindow&&(p.mainWindow.classList.remove("closed","minimized","maximized"),Di(p.mainWindow)),p.positiveLobe&&(p.positiveLobe.checked=!0),p.negativeLobe&&(p.negativeLobe.checked=!0),p.wireframe&&p.smooth&&!p.wireframe.checked&&!p.smooth.checked&&(p.wireframe.checked=!0),ht(),st();const i=Pl(e),r=(i==null?void 0:i.label)||kn(t.n,t.l,t.m);p.compareSummary&&(p.compareSummary.textContent=`已载入主视图：${r}`),e==="a"?(s=(a=p.compareAViewer)==null?void 0:a.closest(".compare-view-card"))==null||s.scrollIntoView({block:"nearest",inline:"nearest"}):e==="b"&&((l=(o=p.compareBViewer)==null?void 0:o.closest(".compare-view-card"))==null||l.scrollIntoView({block:"nearest",inline:"nearest"})),tn()}function ca(n){if(!p.activityWindow)return;const e=n||"predict";p.activityWindow.classList.remove("closed","minimized"),p.activityWindow.style.zIndex="125";for(const i of p.activityPanes??[]){const r=i.dataset.activityPane||i.id.replace(/Pane$/,"");i.classList.toggle("active",r===e)}for(const i of p.activityModeButtons??[])i.classList.toggle("active",i.dataset.activityMode===e);const t={predict:"预测-验证模式",score:"预测评分",diagnosis:"错误诊断",nodes:"节点发现",compare:"轨道对比",challenge:"轨道配对挑战",explain:"原理演示",tablet:"平板课堂"};p.activityTitle&&(p.activityTitle.textContent=t[e]||"课堂互动"),Di(p.activityWindow),tn(),e==="compare"&&requestAnimationFrame(()=>{Ud(),tn()}),e==="explain"?requestAnimationFrame(()=>{Ia(he.explanationStep,{render:!1}),tn()}):(as(),La(null))}const Fd=7200;function qx(){const n=ht();return kn(n.n,n.l,n.m)}const Xx=["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"],Yx=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];function Od(n,e){return(n<0?"⁻":"")+String(Math.abs(n)).split("").map(i=>e[Number(i)]??i).join("")}function vh(n){return Od(n,Xx)}function $x(n){return Od(n,Yx)}function jx(n,e){return kn(Math.max(1,n+1),n,e).replace(/^\d+/,"")||`l=${n}, m=${e}`}function fc(n){const e=kn(n.n,n.l,n.m),t=Math.max(0,n.n-n.l-1),i=n.l,r=jx(n.l,n.m),a=vh(n.n),s=vh(n.l),o=$x(n.m);return{label:e,radialNodes:t,angularNodes:i,main:`Ψ(r,θ,φ) = R${a}${s}(r) · Y${s}${o}(θ,φ)`,radial:`R${a}${s}(r) 决定离原子核不同距离处的振幅变化；当前轨道有 ${t} 个径向节点。`,angular:`${r} 对应的 Y${s}${o}(θ,φ) 决定轨道朝向、节面和正负相位；当前有 ${i} 个角向节点。`,visual:"原子轨道窗口显示 Ψ=+c 和 Ψ=-c 的等值面；轨道投影是在选定平面上看 Ψ；径向分布函数看 r²R²；电子云来自 |Ψ|² 的概率分布。"}}function zd(){var t,i;if(!p.formulaWindow)return;const n=ht(),e=fc(n);p.formulaOrbitalName&&(p.formulaOrbitalName.textContent=e.label),p.formulaQuantumText&&(p.formulaQuantumText.textContent=`n=${n.n}, l=${n.l}, m=${n.m}`),p.formulaMain&&(p.formulaMain.textContent=e.main),p.formulaRadialText&&(p.formulaRadialText.textContent=e.radial),p.formulaAngularText&&(p.formulaAngularText.textContent=e.angular),p.formulaVisualText&&(p.formulaVisualText.textContent=e.visual),p.formulaRadialNodes&&(p.formulaRadialNodes.textContent=String(e.radialNodes)),p.formulaAngularNodes&&(p.formulaAngularNodes.textContent=String(e.angularNodes)),p.formulaPhaseText&&(p.formulaPhaseText.textContent=`${((t=p.positiveLobe)==null?void 0:t.checked)===!1?"隐藏正相":"正相"} / ${((i=p.negativeLobe)==null?void 0:i.checked)===!1?"隐藏负相":"负相"}`)}function Zx(){p.formulaWindow&&(zd(),p.formulaWindow.classList.remove("closed","minimized"),p.formulaWindow.style.zIndex="128",Di(p.formulaWindow),tn())}const Kx=5200;function rs(){const n=ht(),e=fc(n);return[{focus:"all",title:"同一个波函数，四种观察方式",text:`${e.label} 的四个窗口都来自同一个 Ψ。动画先给出公式，再依次把它变成轨道、投影、径向图和电子云。`},{focus:"radial",title:"径向函数决定离核距离",text:`Rₙₗ(r) 控制波函数随半径的振荡和衰减；当前轨道有 ${e.radialNodes} 个径向节点。`},{focus:"angular",title:"角向函数决定方向和节面",text:`Yₗᵐ(θ,φ) 给出方向上的正负相位分区；当前轨道有 ${e.angularNodes} 个角向节点。`},{focus:"orbital",title:"径向 × 角向，合成三维波函数",text:"R(r) 提供距离变化，Y(θ,φ) 提供方向变化，两者相乘后形成空间中的正相和负相区域。"},{focus:"orbital",title:"抽取 Ψ=±c，得到原子轨道等值面",text:"等值面不是电子轨迹，而是波函数达到某个正值或负值时形成的边界。"},{focus:"projection",title:"把同一个 Ψ 放到平面上，得到轨道投影",text:"投影窗口把空间波函数在代表性平面上读出来，上方是高度曲面，下方是等高线。"},{focus:"orbital",title:"按 |Ψ|² 随机出现，形成电子云",text:"电子云表示电子出现概率。越亮、越密的区域，表示多次测量中电子更容易出现。"}]}function Jx(){const n=p.animationCanvas;if(!n)return null;const e=n.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,e.width||640),r=Math.max(220,e.height||360);(n.width!==Math.round(i*t)||n.height!==Math.round(r*t))&&(n.width=Math.round(i*t),n.height=Math.round(r*t));const a=n.getContext("2d");return a.setTransform(t,0,0,t,0,0),{ctx:a,width:i,height:r}}function pc(n,e,t,i,r,a){const s=Math.min(a,i/2,r/2);n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function Qx(n,e,t,i){const r=["公式","径向","角向","合成","等值面","投影","电子云"],s=e-42,o=34,l=s-42;n.save(),n.lineWidth=2,n.strokeStyle="rgba(255,255,255,0.45)",n.beginPath(),n.moveTo(42,o),n.lineTo(s,o),n.stroke(),n.strokeStyle="#ffb000",n.beginPath(),n.moveTo(42,o),n.lineTo(42+l*Math.min(1,(t+i)/(r.length-1)),o),n.stroke(),r.forEach((c,u)=>{const h=42+l*u/(r.length-1),d=u===t;n.fillStyle=d?"#ffb000":"rgba(255,255,255,0.82)",n.beginPath(),n.arc(h,o,d?8:5,0,Math.PI*2),n.fill(),n.fillStyle=d?"#fff4bf":"rgba(255,255,255,0.86)",n.font=d?"bold 14px sans-serif":"13px sans-serif",n.textAlign="center",n.fillText(c,h,o+24)}),n.restore()}function eM(n,e,t,i){const r=fc(ht()),a=e/2,s=t*.52;n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.92)",pc(n,a-220,s-68,440,136,12),n.fill(),n.fillStyle="#111827",n.textAlign="center",n.font="bold 30px serif",n.fillText(r.main,a,s-12),n.font="18px sans-serif",n.fillStyle="#175cd3",n.fillText("同一个 Ψ 经过不同读取方式，形成四个窗口的图像",a,s+34),n.restore()}function Bd(n,e,t,i,r=1){n.save(),n.globalAlpha=Math.min(1,r*1.6),n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText(i,e/2,t*.9),n.restore()}function xh(n,e,t,i=1){const r=ht(),a=Math.max(0,r.n-r.l-1),s=Math.min(e*.82,560),o=76,l=(e-s)/2,c=t*.77;n.save(),n.globalAlpha=Math.min(1,i*1.6),n.fillStyle="rgba(255,255,255,0.9)",pc(n,l,c,s,o,10),n.fill(),n.fillStyle="#111827",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText(`径向节点数 = n - l - 1 = ${r.n} - ${r.l} - 1 = ${a}`,e/2,c+29),n.font="15px sans-serif",n.fillStyle=a>0?"#175cd3":"#667085",n.fillText(a>0?"曲线过零处对应三维空间中的球形径向节面":"当前轨道没有径向节点，因此不会出现球形径向节面",e/2,c+55),n.restore()}function tM(n,e,t,i,r,a,s=1,o=""){if(!(e!=null&&e.domElement)||!t||!i)return!1;e.render(t,i);const l=e.domElement;if(!l.width||!l.height)return!1;const c=Math.min(r*.92,l.width),u=Math.min(a*.72,c*(l.height/Math.max(1,l.width))),h=Math.min(c,u*(l.width/Math.max(1,l.height))),d=Math.min(u,h*(l.height/Math.max(1,l.width)));return n.save(),n.globalAlpha=Math.min(1,s*1.4),n.drawImage(l,(r-h)/2,a*.12,h,d),o&&(n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText(o,r/2,a*.1)),n.restore(),!0}function nM(){return Ln||(Ut=new En(-5,5,5,-5,.1,2e3),Ln=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Ln.outputColorSpace=Ft,Ln.toneMapping=Hr,Ln.toneMappingExposure=1.16),!0}function kd(n,e,t,i,r=!1){if(!nM())return!1;const a=r?Math.max(180,Math.min(520,Math.floor(e*.92))):Math.max(260,Math.min(700,Math.floor(e*.58))),s=r?Math.max(130,Math.min(360,Math.floor(t*.78))):Math.max(190,Math.min(560,Math.floor(t*.7)));Ln.setSize(a,s,!1);const o=new xe(getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#000000");Ln.setClearColor(o,1);const l=Math.max(4.5,Aa||4.8),c=a/s,u=l*1.05;c>=1?(Ut.left=-u*c,Ut.right=u*c,Ut.top=u,Ut.bottom=-u):(Ut.left=-u,Ut.right=u,Ut.top=u/c,Ut.bottom=-u/c),Ut.near=.1,Ut.far=2e3;const h=i*Math.PI*.75+performance.now()*18e-5;Ut.up.set(0,0,1),Ut.position.set(Math.cos(h)*l*.55,-l*1.35,l*.46+Math.sin(h)*l*.1),Ut.lookAt(0,0,0),Ut.updateProjectionMatrix();const d=ln==null?void 0:ln.visible;ln&&(ln.visible=!1),Ln.render(Bn,Ut),ln&&d!=null&&(ln.visible=d),n.save(),n.globalAlpha=Math.min(1,i*1.4);const f=r?(e-a)/2:Math.min(e-a-e*.04,Math.max(e*.36,(e-a)/2+e*.16));return n.drawImage(Ln.domElement,f,t*.12,a,s),n.restore(),!0}function iM(n,e,t,i=1){const r=ht(),a=Vn(r),s=Math.max(4,a.leastRadius+1),o=Math.min(300,e*.32),l=150,c=e*.055,u=t*.16,h=22,d=[];for(let m=0;m<=140;m+=1)d.push(Fn(r.n,r.l,r.z,s*m/140));const f=Math.max(...d.map(m=>Math.abs(m)),1e-4),_=Math.max(2,Math.floor(140*Math.min(1,i)));n.save(),n.globalAlpha=Math.min(1,i*1.7),n.fillStyle="rgba(255,255,255,0.9)",pc(n,c,u,o,l,10),n.fill(),n.strokeStyle="rgba(17,24,39,0.28)",n.lineWidth=1,n.beginPath(),n.moveTo(c+h,u+l*.58),n.lineTo(c+o-h,u+l*.58),n.moveTo(c+h,u+h),n.lineTo(c+h,u+l-h),n.stroke(),n.strokeStyle="#175cd3",n.lineWidth=2.4,n.beginPath();for(let m=0;m<=_;m+=1){const M=c+h+(o-h*2)*m/140,x=u+l*.58-d[m]/f*(l*.36);m===0?n.moveTo(M,x):n.lineTo(M,x)}n.stroke();const v=u+l*.58,g=[];for(let m=2;m<=_;m+=1){const M=d[m-1],x=d[m];if(M===0||M*x<0){const y=Math.abs(M)/Math.max(1e-9,Math.abs(M)+Math.abs(x)),C=c+h+(o-h*2)*(m-1+y)/140;g.push(C)}}g.length&&(n.save(),n.fillStyle="#ffb000",g.forEach(m=>{n.beginPath(),n.arc(m,v,4.2,0,Math.PI*2),n.fill()}),n.restore()),n.fillStyle="#111827",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText("Rnl(r) 函数图像",c+o/2,u+18),n.font="12px sans-serif",n.fillText("横轴 r",c+o-38,u+l-8),n.save(),n.translate(c+12,u+l/2),n.rotate(-Math.PI/2),n.fillText("振幅",0,0),n.restore(),n.restore()}function rM(n,e,t,i){if(kd(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.5),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("径向分布函数的 3D 读法",e/2,t*.1),n.restore(),iM(n,e,t,i),xh(n,e,t,i);return}const r=ht(),a=Vn(r),s=Math.max(4,a.leastRadius+1),o=e*.14,l=t*.66,c=e*.72,u=t*.42,h=[];for(let _=0;_<=180;_+=1){const v=s*_/180;h.push(Fn(r.n,r.l,r.z,v))}const d=Math.max(...h.map(_=>Math.abs(_)),1e-4),f=Math.max(2,Math.floor(180*i));n.save(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2,n.beginPath(),n.moveTo(o,l),n.lineTo(o+c,l),n.moveTo(o,l-u/2),n.lineTo(o,l+u/2),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=3,n.beginPath();for(let _=0;_<=f;_+=1){const v=o+c*_/180,g=l-h[_]/d*(u/2);_===0?n.moveTo(v,g):n.lineTo(v,g)}n.stroke(),n.fillStyle="#ffb000";for(let _=1;_<f;_+=1)if(h[_-1]*h[_]<=0){const v=o+c*_/180;n.beginPath(),n.arc(v,l,4,0,Math.PI*2),n.fill()}n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Rnl(r)",o+c/2,l-u/2-18),n.font="14px sans-serif",n.textAlign="left",n.fillText("r = 0 原子核",o-38,l+24),n.textAlign="right",n.fillText("r 增大：离核距离",o+c,l+28),n.save(),n.translate(o-34,l-u/2+12),n.rotate(-Math.PI/2),n.textAlign="center",n.fillText("纵轴：径向波函数振幅 Rnl(r)",0,0),n.restore(),n.fillStyle="#ffb000",n.beginPath(),n.arc(o,l,5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.88)",n.textAlign="center",n.fillText("曲线穿过横轴的位置，对应径向节面",o+c*.55,l+u/2+22),xh(n,e,t,i),n.restore()}function aM(){Nn&&(Nn.traverse(n=>{var e,t;n.geometry&&((t=(e=n.geometry).dispose)==null||t.call(e)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{var a;return(a=r.dispose)==null?void 0:a.call(r)})}),Jn==null||Jn.remove(Nn),Nn=null)}function oM(){if(Rn)return!0;Jn=new Pi,Ht=new En(-5,5,5,-5,.1,2e3),Rn=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Rn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Rn.outputColorSpace=Ft,Rn.toneMapping=Hr,Rn.toneMappingExposure=1.18,Jn.add(new Li(16777215,.58));const n=new dn(16777215,1.72);n.position.set(5,-6,8),Jn.add(n);const e=new dn(16777215,.55);return e.position.set(-4,5,4),Jn.add(e),!0}function sM(){const n=ht(),e=$t(),t=[n.n,n.l,n.m,n.z,e.positiveColor,e.negativeColor].join("|");if(Nn&&lh===t)return!0;aM(),lh=t,Nn=new dt;const i={radius:3.8,thetaSegments:80,phiSegments:160},{positive:r,negative:a}=xd(n,i),s=Br(r,It(e.positiveColor),.96),o=Br(a,It(e.negativeColor),.96);return kr(s,{...e,smooth:!0,wireframe:!1}),kr(o,{...e,smooth:!0,wireframe:!1}),Nn.add(o,s),Jn.add(Nn),!0}function Vd(n,e,t,i){if(!oM()||!sM())return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(620,Math.floor(t*.78)));Rn.setSize(r,a,!1),Rn.setClearColor(0,0);const s=new hn().setFromObject(Nn);if(s.isEmpty())return!1;const o=s.getCenter(new P),l=Math.max(1,s.getSize(new P).length()*.5),c=r/a,u=l*1.08;c>=1?(Ht.left=-u*c,Ht.right=u*c,Ht.top=u,Ht.bottom=-u):(Ht.left=-u,Ht.right=u,Ht.top=u/c,Ht.bottom=-u/c),Ht.near=.1,Ht.far=Math.max(1e3,l*18);const h=i*Math.PI*.7;Ht.position.copy(o).add(new P(Math.cos(h)*l*1.5,-l*1.9,l*.95+Math.sin(h)*l*.35)),Ht.lookAt(o),Ht.updateProjectionMatrix();const d=.16+.84*(1-(1-Math.min(1,i))**3);return Nn.traverse(f=>{var _;((_=f.material)==null?void 0:_.opacity)!=null&&f.isMesh&&(f.material.transparent=!0,f.material.opacity=d,f.material.needsUpdate=!0)}),Rn.render(Jn,Ht),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Rn.domElement,(e-r)/2,t*.08,r,a),n.restore(),!0}function lM(n,e,t,i){var c,u;if(Vd(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)：每一个方向对应一个角向函数值",e/2,t*.12),n.font="14px sans-serif",n.fillStyle=((c=p.positiveColor)==null?void 0:c.value)||"#d83bd8",n.fillText("正相位 Y > 0",e*.32,t*.84),n.fillStyle=((u=p.negativeColor)==null?void 0:u.value)||"#00aeb8",n.fillText("负相位 Y < 0",e*.68,t*.84),n.fillStyle="#ffd15c",n.fillText("两色交界处就是 Y = 0 的角向节面",e/2,t*.9),n.restore();return}const r=ht(),a=e/2,s=t*.56,o=Math.max(2,r.l*2||1),l=Math.min(e,t)*.18*Math.min(1,i*1.7);n.save(),n.translate(a,s),n.rotate(r.m*Math.PI/12);for(let h=0;h<o;h+=1){const d=Math.PI*2*h/o,f=h%2===0,_=l*(r.l===0?1.25:1.55);n.save(),n.rotate(d);const v=n.createRadialGradient(_*.5,0,4,_*.5,0,_);v.addColorStop(0,f?"#ff2bd6":"#00d7ff"),v.addColorStop(1,f?"rgba(255,43,214,0.15)":"rgba(0,215,255,0.15)"),n.fillStyle=v,n.beginPath(),n.ellipse(_*.55,0,_*.62,l*.5,0,0,Math.PI*2),n.fill(),n.restore()}n.strokeStyle="#ffb000",n.lineWidth=2;for(let h=0;h<Math.max(1,r.l);h+=1)n.beginPath(),n.moveTo(-l*2,0),n.lineTo(l*2,0),n.stroke(),n.rotate(Math.PI/Math.max(1,r.l));n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)",0,-l*1.75-20),n.font="14px sans-serif",n.fillStyle="#ff9cff",n.fillText("Y > 0：正相位",l*1.7,-l*.88),n.fillStyle="#72f6ff",n.fillText("Y < 0：负相位",-l*1.7,l*.95),n.fillStyle="#ffd15c",n.fillText("Y = 0：角向节面/节线",0,l*1.9),n.strokeStyle="rgba(255,255,255,0.78)",n.lineWidth=1.1,n.beginPath(),n.moveTo(0,0),n.lineTo(l*1.55,-l*1.15),n.stroke(),n.fillStyle="rgba(255,255,255,0.9)",n.textAlign="left",n.fillText("一个方向由 θ 和 φ 确定",l*1.6,-l*1.18),n.restore()}function cM(n,e,t,i){const r=Math.min(1,i*1.45),a=[e*.2,e*.5,e*.8],s=e*.24,o=t*.32,l=t*.2,c=(h,d,f)=>{n.strokeStyle="#ffb000",n.fillStyle="#ffb000",n.lineWidth=3.2,n.beginPath(),n.moveTo(h,d),n.lineTo(f,d),n.stroke(),n.beginPath(),n.moveTo(f,d),n.lineTo(f-13,d-8),n.lineTo(f-13,d+8),n.closePath(),n.fill()};n.save(),n.globalAlpha=r,n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText("径向",a[0],l-20),n.fillText("角向",a[1],l-20),n.fillText("轨道",a[2],l-20),n.save(),n.translate(a[0]-s/2,l),kd(n,s,o,i,!0),n.restore(),n.save(),n.translate(a[1]-s/2,l),Vd(n,s,o,i),n.restore(),n.save(),n.translate(a[2]-s/2,l),Gd(n,s,o,i),n.restore();const u=l+o*.78;n.fillStyle="#ffb000",n.font="bold 34px serif",n.fillText("×",(a[0]+a[1])/2,u),c(a[1]+s*.46,u,a[2]-s*.48),n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 28px serif",n.fillText("R(r) × Y(θ,φ) = Ψ(x,y,z)",e/2,t*.76),n.restore()}function uM(n,e,t,i){return cM(n,e,t,i)}function hM(n,e,t,i){var l,c;const r=e/2,a=t*.56,s=Math.min(e,t)*.27*Math.min(1,i*1.5),o=ht();n.save(),n.globalAlpha=.96,n.fillStyle=((l=p.negativeColor)==null?void 0:l.value)||"#00a0a0",n.beginPath(),n.ellipse(r-s*.76,a,s*(o.l>2?.9:.78),s*.72,-.12,0,Math.PI*2),n.fill(),n.fillStyle=((c=p.positiveColor)==null?void 0:c.value)||"#b24bb2",n.beginPath(),n.ellipse(r+s*.76,a,s*(o.l>2?.9:.78),s*.72,.12,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2;for(let u=0;u<10;u+=1){const h=a-s*.72+s*1.44*u/9;n.beginPath(),n.moveTo(r-s*1.65,h),n.lineTo(r+s*1.65,h),n.stroke()}n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("抽取 Ψ=+c 与 Ψ=-c",r,a+s+38),n.restore()}function jt(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Hd(n){return{x:n.x*.82+n.y*.34,y:-n.z*.88+n.y*.22}}function dM(n,e=6e4){var r,a;const t=[],i=[new P,new P,new P];for(const s of n)s.object&&((a=(r=s.object).updateWorldMatrix)==null||a.call(r,!0,!0),s.object.traverse(o=>{var d,f;const l=(f=(d=o.geometry)==null?void 0:d.attributes)==null?void 0:f.position;if(!l)return;const c=o.geometry.index,u=Math.floor(c?c.count/3:l.count/3);if(!u)return;o.updateWorldMatrix(!0,!1);const h=Math.max(1,Math.ceil(u/Math.max(1,e/n.length)));for(let _=0;_<u;_+=h){let v=0;const g=[];for(let m=0;m<3;m+=1){const M=c?c.getX(_*3+m):_*3+m;i[m].fromBufferAttribute(l,M).applyMatrix4(o.matrixWorld),v+=i[m].y,g.push(Hd(i[m]))}t.push({points:g,color:s.color,depth:v/3})}}));return t}function fM(n,e){const t=new xe(n);return`rgba(${Math.round(t.r*255)}, ${Math.round(t.g*255)}, ${Math.round(t.b*255)}, ${e})`}function pM(n,e,t,i,r){if(!e.length)return!1;let a=1e-4;for(const u of e)for(const h of u.points)a=Math.max(a,Math.abs(h.x),Math.abs(h.y));const s=Math.min(t,i)*.34/a,o=t/2,l=i*.55,c=.14+.76*(1-(1-Math.min(1,r))**3);return n.save(),e.sort((u,h)=>u.depth-h.depth).forEach(u=>{const[h,d,f]=u.points;n.fillStyle=fM(u.color,c),n.beginPath(),n.moveTo(o+h.x*s,l+h.y*s),n.lineTo(o+d.x*s,l+d.y*s),n.lineTo(o+f.x*s,l+f.y*s),n.closePath(),n.fill()}),n.restore(),!0}function Mh(){Sn&&(Sn.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(t=>{var i;return(i=t.dispose)==null?void 0:i.call(t)})}),Kn==null||Kn.remove(Sn),Sn=null)}function mM(){if(Cn)return!0;Kn=new Pi,Vt=new En(-5,5,5,-5,.1,2e3),Cn=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Cn.outputColorSpace=Ft,Cn.toneMapping=Hr,Cn.toneMappingExposure=1.12,Kn.add(new Li(16777215,.56));const n=new dn(16777215,1.65);n.position.set(5,-7,8),Kn.add(n);const e=new dn(16777215,.55);return e.position.set(-6,4,5),Kn.add(e),!0}function gM(n=1){var r,a,s,o,l,c,u;const e=$t(),t=[(Tt==null?void 0:Tt.uuid)||"",(Ct==null?void 0:Ct.uuid)||"",((r=p.positiveColor)==null?void 0:r.value)||"",((a=p.negativeColor)==null?void 0:a.value)||"",e.opacity].join("|");if(Sn&&sh===t)return!0;Mh(),sh=t,Sn=new dt;const i=[{object:Ct,color:((s=p.negativeColor)==null?void 0:s.value)||"#00a0a0"},{object:Tt,color:((o=p.positiveColor)==null?void 0:o.value)||"#b24bb2"}];for(const h of i)(c=(l=h.object)==null?void 0:l.updateWorldMatrix)==null||c.call(l,!0,!0),(u=h.object)==null||u.traverse(d=>{if(!d.isMesh||!d.geometry)return;const f=new fa({color:It(h.color),emissive:It(h.color),emissiveIntensity:.04,shininess:26,side:ft,transparent:!0,opacity:Math.min(.98,e.opacity)}),_=new $e(d.geometry,f);_.matrix.copy(d.matrixWorld),_.matrixAutoUpdate=!1,Sn.add(_)});return Sn.children.length?(Kn.add(Sn),!0):(Mh(),!1)}function Gd(n,e,t,i){if(!Tt&&!Ct||!mM()||!gM(i))return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(680,Math.floor(t*.82)));Cn.setSize(r,a,!1),Cn.setClearColor(0,0);const s=new hn().setFromObject(Sn);if(s.isEmpty())return!1;const o=s.getCenter(new P),l=Math.max(1,s.getSize(new P).length()*.5),c=r/a,u=l*1.16;c>=1?(Vt.left=-u*c,Vt.right=u*c,Vt.top=u,Vt.bottom=-u):(Vt.left=-u,Vt.right=u,Vt.top=u/c,Vt.bottom=-u/c),Vt.near=.1,Vt.far=Math.max(2e3,l*20);const h=performance.now()*42e-5+i*Math.PI*.28;Vt.position.copy(o).add(new P(Math.cos(h)*l*1.65,Math.sin(h)*l*1.65,l*.92)),Vt.lookAt(o),Vt.updateProjectionMatrix();const d=.08+.9*(1-(1-Math.min(1,i))**3);return Sn.traverse(f=>{f.material&&(f.material.opacity=d)}),Cn.render(Kn,Vt),n.save(),n.globalAlpha=Math.min(1,i*1.4),n.drawImage(Cn.domElement,(e-r)/2,t*.1,r,a),n.restore(),!0}function _M(n,e,t,i){var a,s;if(Gd(n,e,t,i)){n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore();return}const r=dM([{object:Ct,color:((a=p.negativeColor)==null?void 0:a.value)||"#00a0a0"},{object:Tt,color:((s=p.positiveColor)==null?void 0:s.value)||"#b24bb2"}]);if(!pM(n,r,e,t,i)){hM(n,e,t,i);return}n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore()}function vM(n,e){var a,s;const t=Math.min(1,Math.abs(n)/Math.max(e,1e-8)),i=new xe(n>=0?((a=p.positiveColor)==null?void 0:a.value)||"#b24bb2":((s=p.negativeColor)==null?void 0:s.value)||"#00a0a0"),r=new xe(16777215);return i.lerp(r,1-Math.sqrt(t)),`rgba(${Math.round(i.r*255)}, ${Math.round(i.g*255)}, ${Math.round(i.b*255)}, ${.16+.78*t})`}function xM(n,e,t,i,r,a){var h,d;const s=[.18,.32,.48,.64,.8].filter((f,_,v)=>_/v.length<=a+.08),o=e.length,l=i/(o-1),c=r/(o-1),u=(f,_,v)=>Math.abs(_-f)<1e-9?.5:(v-f)/(_-f);for(const f of[1,-1]){n.strokeStyle=f>0?((h=p.positiveColor)==null?void 0:h.value)||"#ff2bd6":((d=p.negativeColor)==null?void 0:d.value)||"#00d7ff",n.lineWidth=1.45;for(const _ of s){const v=f*t*_;n.beginPath();for(let g=0;g<o-1;g+=1)for(let m=0;m<o-1;m+=1){const M=e[g][m],x=e[g][m+1],y=e[g+1][m+1],C=e[g+1][m],E=[];(M-v)*(x-v)<=0&&E.push([m+u(M,x,v),g]),(x-v)*(y-v)<=0&&E.push([m+1,g+u(x,y,v)]),(y-v)*(C-v)<=0&&E.push([m+1-u(y,C,v),g+1]),(C-v)*(M-v)<=0&&E.push([m,g+1-u(C,M,v)]),E.length>=2&&(n.moveTo(-i/2+E[0][0]*l,-r/2+E[0][1]*c),n.lineTo(-i/2+E[1][0]*l,-r/2+E[1][1]*c))}n.stroke()}}}function MM(n,e,t,i){if(tM(n,er,zn,yt,e,t,i,"轨道投影的 3D 视图")){Bd(n,e,t,"同一个 Ψ 在投影平面上显示为高度曲面和等高线",i);return}const r=ht(),a=$t(),s=lc(r),o=uv(r,a,s,78),l=e/2,c=t*.58,u=e*.56,h=t*.34,d=document.createElement("canvas");d.width=o.rows.length,d.height=o.rows.length;const f=d.getContext("2d");for(let _=0;_<o.rows.length;_+=1)for(let v=0;v<o.rows.length;v+=1)f.fillStyle=vM(o.rows[_][v],o.maxAbs),f.fillRect(v,_,1,1);n.save(),n.translate(l,c),n.transform(1,-.22,.35,.82,0,0),n.fillStyle="rgba(238,244,244,0.88)",n.fillRect(-u/2,-h/2,u,h),n.globalAlpha=Math.min(1,i*1.35),n.drawImage(d,-u/2,-h/2,u,h),n.globalAlpha=Math.min(1,i*1.8),xM(n,o.rows,o.maxAbs,u,h,i),n.strokeStyle="rgba(255,255,255,0.9)",n.strokeRect(-u/2,-h/2,u,h),n.restore(),n.save(),n.globalAlpha=i,n.strokeStyle="#ffb000",n.lineWidth=2,n.beginPath(),n.moveTo(l,t*.22),n.lineTo(l,c-h*.22),n.stroke(),n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText(`当前投影平面：${s.toUpperCase()}，颜色来自 Ψ 的正负`,l,t*.2),n.restore()}function yM(){Un&&(Un.traverse(n=>{var e,t,i;n.geometry&&!((e=n.userData)!=null&&e.sharedGeometry)&&((i=(t=n.geometry).dispose)==null||i.call(t)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{var s;return(s=a.dispose)==null?void 0:s.call(a)})}),Ei==null||Ei.remove(Un),Un=null)}function SM(){if(Pn)return!0;Ei=new Pi,Gt=new En(-5,5,5,-5,.1,2e3),Pn=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Pn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Pn.outputColorSpace=Ft,Pn.toneMapping=Hr,Pn.toneMappingExposure=1.18,Ei.add(new Li(16777215,.56));const n=new dn(16777215,1.55);return n.position.set(5,-7,8),Ei.add(n),!0}function yh(n,e,t,i=3200){const r=Math.min(e.radius,Math.max(5,Vn(n).leastRadius+1.2)),a=r*r;let s=0;for(let c=0;c<520;c+=1){const u=(jt(c,51)*2-1)*r,h=(jt(c,52)*2-1)*r,d=(jt(c,53)*2-1)*r;u*u+h*h+d*d>a||(s=Math.max(s,Math.abs(Mt(n,u,h,d))))}const o=[];let l=0;for(;o.length/3<i&&l<i*110;){const c=(jt(l,61+t)*2-1)*r,u=(jt(l,62+t)*2-1)*r,h=(jt(l,63+t)*2-1)*r;if(l+=1,c*c+u*u+h*h>a)continue;const d=Mt(n,c,u,h);if(t*d<=0)continue;const f=(Math.abs(d)/Math.max(s,1e-8))**2;jt(l,71+t)>f*.92||o.push(c,u,h)}return{points:o,radius:r}}function bM(){const n=ht(),e=$t(),t=[n.n,n.l,n.m,n.z,e.radius.toFixed(3),e.iso.toFixed(5),e.positiveColor,e.negativeColor].join("|");if(Un&&ch===t)return!0;yM(),ch=t,Un=new dt;const i=yh(n,e,1),r=yh(n,e,-1),a=zo(i.points,It(e.positiveColor)),s=zo(r.points,It(e.negativeColor));return a.material.uniforms.uSize.value=3.4,s.material.uniforms.uSize.value=3.4,Un.add(s,a),Ei.add(Un),!0}function EM(n,e,t,i,r){if(!SM()||!bM())return!1;const a=Math.max(240,Math.min(900,Math.floor(e))),s=Math.max(180,Math.min(680,Math.floor(t*.82)));Pn.setSize(a,s,!1),Pn.setClearColor(0,0),Un.traverse(f=>{var _,v,g;(v=(_=f.material)==null?void 0:_.uniforms)!=null&&v.uTime?(f.material.uniforms.uTime.value=r,f.material.opacity=Math.min(1,i*1.3)):((g=f.material)==null?void 0:g.opacity)!=null&&f.isMesh&&(f.material.opacity=.28*Math.min(1,i*1.6),f.material.needsUpdate=!0)});const o=new hn().setFromObject(Un);if(o.isEmpty())return!1;const l=o.getCenter(new P),c=Math.max(1,o.getSize(new P).length()*.5),u=a/s,h=c*1.1;u>=1?(Gt.left=-h*u,Gt.right=h*u,Gt.top=h,Gt.bottom=-h):(Gt.left=-h,Gt.right=h,Gt.top=h/u,Gt.bottom=-h/u),Gt.near=.1,Gt.far=Math.max(2e3,c*20);const d=r*.25;return Gt.position.copy(l).add(new P(Math.cos(d)*c*1.55,-c*1.75,c*.95)),Gt.lookAt(l),Gt.updateProjectionMatrix(),Pn.render(Ei,Gt),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Pn.domElement,(e-a)/2,t*.1,a,s),n.restore(),!0}function wM(n,e,t,i,r){if(EM(n,e,t,i,r)){Bd(n,e,t,"|Ψ|² 越大，三维空间中的闪烁点越密集",i);return}const a=ht(),s=$t(),o=Math.min(s.radius,Math.max(5,Vn(a).leastRadius+1.2));let l=0;for(let f=0;f<260;f+=1){const _=(jt(f,11)*2-1)*o,v=(jt(f,12)*2-1)*o,g=(jt(f,13)*2-1)*o;_*_+v*v+g*g>o*o||(l=Math.max(l,Math.abs(Mt(a,_,v,g))))}const c=e/2,u=t*.55,h=Math.min(e,t)*.34/o,d=Math.floor(1500*i);n.save();for(let f=0;f<d;f+=1){const _=(jt(f,21)*2-1)*o,v=(jt(f,22)*2-1)*o,g=(jt(f,23)*2-1)*o;if(_*_+v*v+g*g>o*o)continue;const m=Mt(a,_,v,g),M=(Math.abs(m)/Math.max(l,1e-8))**2;if(jt(f,Math.floor(r*4)+31)>M*.9)continue;const x=Hd(new P(_,v,g));n.fillStyle=m>=0?"rgba(255,43,214,0.82)":"rgba(0,215,255,0.82)",n.fillRect(c+x.x*h,u+x.y*h,1.9,1.9)}n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("|Ψ|² 越大，随机点越密",c,t*.84),n.restore()}function Vr(n=0){var _,v;const e=Jx();if(!e)return;const{ctx:t,width:i,height:r}=e,a=he.animationStep,s=rs();t.clearRect(0,0,i,r),t.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#000000",t.fillRect(0,0,i,r);const o=16/9;let l=i,c=l/o;c>r&&(c=r,l=c*o);const u=(i-l)/2,h=(r-c)/2,d=54;t.save(),t.translate(u,h),Qx(t,l,a,n),t.translate(0,d);const f=c-d;a===0?eM(t,l,f,n):a===1?rM(t,l,f,n):a===2?lM(t,l,f,n):a===3?uM(t,l,f,n):a===4?_M(t,l,f,n):a===5?MM(t,l,f,n):wM(t,l,f,n,performance.now()*.001),t.restore(),p.animationProgressFill&&(p.animationProgressFill.style.width=`${Math.round(n*100)}%`),p.animationStepBadge&&(p.animationStepBadge.textContent=`第 ${a+1} 步 / ${s.length} 步`),p.animationTitle&&(p.animationTitle.textContent=((_=s[a])==null?void 0:_.title)||""),p.animationText&&(p.animationText.textContent=a===3?"径向给出离核距离变化，角向给出方向和相位；共同决定同一个三维波函数。":((v=s[a])==null?void 0:v.text)||"")}function AM(){he.animationTimer&&clearTimeout(he.animationTimer),he.animationFrame&&cancelAnimationFrame(he.animationFrame),he.animationTimer=null,he.animationFrame=null}function Wd(){var t;if(!he.animationPlaying)return;const n=rs(),e=Math.min(1,(performance.now()-he.animationStartedAt)/Kx);if(Vr(e),e>=1){if(he.animationStep>=n.length-1){he.animationPlaying=!1,p.animationPlayButton&&(p.animationPlayButton.textContent="播放");return}he.animationStep+=1,he.animationStartedAt=performance.now(),La((t=n[he.animationStep])==null?void 0:t.focus)}he.animationFrame=requestAnimationFrame(Wd)}function Lr(n,e=0){var i;const t=rs();he.animationStep=Math.max(0,Math.min(t.length-1,n)),La((i=t[he.animationStep])==null?void 0:i.focus),Vr(e)}function TM(){he.animationPlaying=!0,he.animationStartedAt=performance.now(),p.animationPlayButton&&(p.animationPlayButton.textContent="暂停"),Wd()}function Pa(){he.animationPlaying=!1,p.animationPlayButton&&(p.animationPlayButton.textContent="播放"),AM()}function CM(){he.animationPlaying?Pa():TM()}function RM(){Pa(),Lr(0,0)}function Sh(n){Pa(),Lr(he.animationStep+n,0)}function PM(){return typeof MediaRecorder>"u"||!MediaRecorder.isTypeSupported?"":["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(n=>MediaRecorder.isTypeSupported(n))||""}function bh(){return new Promise(n=>requestAnimationFrame(n))}function LM(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),1200)}async function IM(){var d,f;const n=p.animationCanvas;if(!(n!=null&&n.captureStream)||typeof MediaRecorder>"u"){alert("当前浏览器不支持直接导出视频。建议使用新版 Chrome 或 Edge 打开后再导出。");return}if(he.animationExporting)return;Pa(),he.animationExporting=!0;const e=he.animationStep,t=[p.animationRestartButton,p.animationPrevButton,p.animationPlayButton,p.animationNextButton,p.animationExportButton].filter(Boolean),i=t.map(_=>_.disabled),r=((d=p.animationExportButton)==null?void 0:d.textContent)||"导出视频";t.forEach(_=>{_.disabled=!0}),p.animationExportButton&&(p.animationExportButton.textContent="导出中...");const a=rs(),s=[],o=n.captureStream(30),l=PM(),c={videoBitsPerSecond:6e6,...l?{mimeType:l}:{}};let u;try{u=new MediaRecorder(o,c)}catch{o.getTracks().forEach(v=>v.stop()),alert("当前浏览器无法创建视频录制器，请换用新版 Chrome 或 Edge。"),he.animationExporting=!1,t.forEach((v,g)=>{v.disabled=i[g]}),p.animationExportButton&&(p.animationExportButton.textContent=r),Lr(e,0);return}const h=new Promise((_,v)=>{u.ondataavailable=g=>{var m;(m=g.data)!=null&&m.size&&s.push(g.data)},u.onerror=()=>v(u.error||new Error("video export failed")),u.onstop=()=>_(new Blob(s,{type:u.mimeType||"video/webm"}))});try{Lr(0,0),await bh(),u.start(250);const _=2600;for(let M=0;M<a.length;M+=1){he.animationStep=M,La((f=a[M])==null?void 0:f.focus);const x=performance.now();let y=0;for(;y<1;)y=Math.min(1,(performance.now()-x)/_),Vr(y),await bh();Vr(1),await new Promise(C=>setTimeout(C,160))}u.state!=="inactive"&&u.stop();const v=await h,g=ht(),m=`HAO-${kn(g.n,g.l,g.m)}-generation.webm`;LM(v,m)}catch(_){u.state!=="inactive"&&u.stop(),console.error(_),alert("导出视频失败，请刷新页面后再试。")}finally{o.getTracks().forEach(_=>_.stop()),he.animationExporting=!1,t.forEach((_,v)=>{_.disabled=i[v]}),p.animationExportButton&&(p.animationExportButton.textContent=r),Lr(e,0)}}function DM(){p.animationWindow&&(p.animationWindow.classList.remove("closed","minimized"),p.animationWindow.style.zIndex="129",Di(p.animationWindow),tn(),requestAnimationFrame(()=>Lr(he.animationStep,0)))}function qd(){const n=ht(),e=kn(n.n,n.l,n.m),t=n.n-n.l-1,i=n.l;return[{focus:"all",title:`先把 ${e} 看成一个波函数`,formula:"Ψ(r,θ,φ) = Rₙₗ(r) · Yₗᵐ(θ,φ)",text:"四个窗口不是四套不同的计算。它们都来自同一个 Ψ，只是观察方式不同：在空间中取等值面、在平面上取切片、沿半径取曲线，或只看角向部分。",observe:`当前轨道是 ${e}：n=${n.n} 决定尺度和径向层数，l=${n.l} 决定角向节点，m=${n.m} 决定方向和相位分区。`,reason:"先建立“同源”的概念，后面的每张图就不再是孤立图像，而是同一个函数的不同读法。",action:()=>{p.projection&&(p.projection.checked=!0),st()}},{focus:"orbital",title:"原子轨道：找出 Ψ 等于某个值的边界",formula:"Ψ(x,y,z) = +c  和  Ψ(x,y,z) = -c",text:"程序先在三维盒子里布满格点，逐点计算 Ψ。把数值等于正等值和负等值的位置连成曲面，就得到你看到的两个相位区域。",observe:"粉色和蓝色表示波函数符号相反，不表示电荷正负。网格越密，等值面越接近真实边界。",reason:"这一步回答“轨道外形怎么来”：它不是画出来的外壳，而是三维标量场中被等值面算法提取出来的边界。",action:()=>{wo({cloud:!1,wireframe:!0,smooth:!0,projection:!1,node:!1,box:!0})}},{focus:"projection",title:"轨道投影：把同一个 Ψ 放到一个平面上读",formula:"例如：z=0 时，观察 Ψ(x,y,0)",text:"投影窗口先选一个最能显示该轨道对称性的平面，再在平面上逐点计算 Ψ。上方曲面用高度表达数值大小，下方等高线表达相位和节点线。",observe:"看上方曲面的峰、谷，再对照下方等高线：峰对应密集的正相线，谷对应密集的负相线，白色过渡附近就是节点。",reason:"这一步把三维轨道压到二维平面，让学生更容易判断相位分区、节点线和方向。",action:()=>{p.projection&&(p.projection.checked=!0),p.box&&(p.box.checked=!0),p.wireframe&&(p.wireframe.checked=!0),p.smooth&&(p.smooth.checked=!1),st()}},{focus:"radial",title:"径向分布：只问电子离原子核多远",formula:"P(r) = r² · Rₙₗ(r)²",text:"径向分布函数暂时不关心方向，只沿半径统计概率。R 决定波函数随距离怎样振荡，r² 会把球壳体积因素加进去。",observe:`${e} 的径向节点数是 n-l-1 = ${t}。曲线下凹或接近零的位置，通常对应概率分布中的分层。`,reason:"这一步解释“为什么有的轨道外面还有一层”：那通常来自径向部分，而不是角向形状突然改变。",action:()=>{p.radialR&&(p.radialR.checked=!1),p.radialR2&&(p.radialR2.checked=!1),p.radialRdf&&(p.radialRdf.checked=!0),p.radialSection&&(p.radialSection.checked=!0),p.radialSide&&(p.radialSide.checked=!0),p.radialCurve&&(p.radialCurve.checked=!0),st()}},{focus:"angular",title:"角向函数：只看方向怎样分成正负相",formula:"Yₗᵐ(θ,φ) 决定方向、节面和相位",text:"角向函数把半径影响先拿掉，只保留方向上的变化。这样可以直接看到轨道为什么沿某些轴伸展，为什么中间会出现节面。",observe:`${e} 的角向节点数是 l = ${i}。这些节点决定了轨道方向上的分瓣方式。`,reason:"最后再回到原子轨道时，学生就能把外形拆开理解：径向部分决定层数，角向部分决定方向和分瓣。",action:()=>{p.projection&&(p.projection.checked=!1),p.node&&(p.node.checked=!0),p.longitudeNode&&(p.longitudeNode.checked=!0),p.wireframe&&(p.wireframe.checked=!0),st()}}]}function La(n){var t;for(const i of document.querySelectorAll(".qt-window.teaching-focus"))i.classList.remove("teaching-focus");const e=n==="all"?["orbital","projection","radial","angular"]:[n];for(const i of e)(t=document.querySelector(`[data-window-name="${i}"]`))==null||t.classList.add("teaching-focus")}function mc(n){p.explainProgressFill&&(p.explainProgressFill.style.width=`${Math.max(0,Math.min(1,n))*100}%`)}function Xd(){he.explanationTimer&&clearTimeout(he.explanationTimer),he.explanationFrame&&cancelAnimationFrame(he.explanationFrame),he.explanationTimer=null,he.explanationFrame=null}function Yd(){if(!he.explanationPlaying)return;const n=(performance.now()-he.explanationStartedAt)/Fd;mc(n),he.explanationFrame=requestAnimationFrame(Yd)}function $d(){Xd(),he.explanationStartedAt=performance.now(),Yd(),he.explanationTimer=setTimeout(()=>{const n=qd();if(he.explanationStep>=n.length-1){he.explanationPlaying=!1,p.explainPlayButton&&(p.explainPlayButton.textContent="播放"),mc(1);return}Ia(he.explanationStep+1),he.explanationPlaying&&$d()},Fd)}function Ia(n,e={}){const t=qd(),i=Math.max(0,Math.min(t.length-1,n)),r=t[i];he.explanationStep=i,p.explainStepBadge&&(p.explainStepBadge.textContent=`第 ${i+1} 步 / ${t.length} 步`),p.explainStepTitle&&(p.explainStepTitle.textContent=r.title),p.explainStepText&&(p.explainStepText.textContent=r.text),p.explainFormula&&(p.explainFormula.textContent=r.formula),p.explainObserveText&&(p.explainObserveText.textContent=r.observe),p.explainReasonText&&(p.explainReasonText.textContent=r.reason),p.explainHintText&&(p.explainHintText.textContent=`正在讲解 ${qx()}。你可以暂停后旋转任意一个窗口，再继续播放。`),La(r.focus),mc(0),e.render!==!1&&r.action()}function NM(){he.explanationPlaying=!0,p.explainPlayButton&&(p.explainPlayButton.textContent="暂停"),Ia(he.explanationStep),$d()}function as(){he.explanationPlaying=!1,p.explainPlayButton&&(p.explainPlayButton.textContent="播放"),Xd()}function UM(){he.explanationPlaying?as():NM()}function FM(){as(),he.explanationStep=0,Ia(0)}function Eh(n){as(),Ia(he.explanationStep+n)}function wo(n){n.cloud!=null&&p.cloud&&(p.cloud.checked=n.cloud),n.wireframe!=null&&p.wireframe&&(p.wireframe.checked=n.wireframe),n.smooth!=null&&p.smooth&&(p.smooth.checked=n.smooth),n.projection!=null&&p.projection&&(p.projection.checked=n.projection),n.node!=null&&(p.node&&(p.node.checked=n.node),p.radialNode&&(p.radialNode.checked=n.node),p.polarNode&&(p.polarNode.checked=n.node),p.longitudeNode&&(p.longitudeNode.checked=n.node)),n.box!=null&&p.box&&(p.box.checked=n.box),n.grid3d!=null&&p.grid3d&&(p.grid3d.checked=n.grid3d),st()}function OM(){return Xt.find(n=>{var e;return n.value===((e=p.predictTarget)==null?void 0:e.value)})||he.challengeTarget||Xt[0]}function zM(){const n=OM(),e=ns(n.value),t=e.n-e.l-1,i=e.l,r=Math.max(60,100-t*4-i*3);p.scorePrompt&&(p.scorePrompt.textContent=`${n.label} 参考评分：${r} 分。检查点：径向节点 ${t} 个，角向节点 ${i} 个，相位正负分区清楚，方向与坐标轴一致。`),is(n.value)}function BM(){p.scorePrompt&&(p.scorePrompt.textContent="评分标准：节点数 30 分，相位颜色 25 分，空间方向 25 分，投影/截面对应关系 20 分。")}function kM(){p.scorePrompt&&(p.scorePrompt.textContent="评分会根据当前目标轨道给出节点数、相位、方向和投影四项课堂反馈。")}function yo(n){n==="nodes"?(wo({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!0}),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="节点诊断：观察径向节点数 n-l-1 与角向节点数 l 是否匹配。")):n==="phase"?(wo({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!1}),p.positiveLobe&&(p.positiveLobe.checked=!0),p.negativeLobe&&(p.negativeLobe.checked=!0),st(),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="相位诊断：紫色/青色两相表示波函数符号相反，不代表电荷正负。")):(wo({cloud:!1,wireframe:!0,smooth:!1,projection:!0,node:!1,box:!0}),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="投影诊断：对照上方波函数曲面与底部等高线，判断节点线和相位区。"))}function wh(n){document.body.classList.toggle("tablet-mode",n),n?(ss("tile"),ca("tablet"),Qn("平板课堂：已放大按钮和触控区域。")):Qn("已恢复普通课堂布局。"),tn()}function VM(){const n=Xt.find(e=>e.value===p.predictTarget.value)??Xt[0];hc(),Je.strokes=[],Je.currentStroke=null,Kr(),p.predictPrompt&&(p.predictPrompt.textContent=`请先在画板中预测 ${n.label} 的形状、相位和节面，再点击“显示验证”。`)}function HM(){const n=Xt.find(e=>e.value===p.predictTarget.value)??Xt[0];is(n.value),p.predictPrompt&&(p.predictPrompt.textContent=`已显示 ${n.label}。请对照画板预测与四个窗口中的真实结果。`)}function GM(){const n=Math.floor(Math.random()*Xt.length);he.challengeTarget=Xt[n],is(he.challengeTarget.value),setTimeout(()=>{p.viewerTitle&&(p.viewerTitle.textContent="原子轨道  ?")},120),p.challengePrompt&&(p.challengePrompt.textContent="观察当前四个窗口中的图像，选择你认为对应的轨道名称。")}function WM(){const n=he.challengeTarget||Xt[0],e=Xt.find(r=>r.value===p.challengeGuess.value),t=(e==null?void 0:e.value)===n.value;he.challengeTotal+=1,t&&(he.challengeCorrect+=1);const i=`（累计 ${he.challengeCorrect}/${he.challengeTotal}）`;p.viewerTitle&&(p.viewerTitle.textContent=`原子轨道  ${n.label}`),p.challengePrompt&&(p.challengePrompt.textContent=t?`回答正确：这是 ${n.label}。`:`还不对。你的答案是 ${(e==null?void 0:e.label)??""}，正确答案是 ${n.label}。`),Qn(`轨道配对 ${i}`)}function qM(n){var i,r;const e=p.sketchWindow;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();Je.dragging=!0,Je.dragPointerId=n.pointerId,Je.dragOffsetX=n.clientX-t.left,Je.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function XM(n){const e=p.sketchWindow;if(!e||!Je.dragging||Je.dragPointerId!==null&&n.pointerId!==Je.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-Je.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-Je.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function Ah(){Je.dragging=!1,Je.dragPointerId=null,Ea()}function So(n,e){var i,r;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();he.dragging=!0,he.dragPointerId=n.pointerId,he.dragWindow=e,he.dragOffsetX=n.clientX-t.left,he.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function YM(n){const e=he.dragWindow;if(!he.dragging||!e||he.dragPointerId!==null&&n.pointerId!==he.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-he.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-he.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function Th(){he.dragging=!1,he.dragPointerId=null,he.dragWindow=null,Ea()}function jd(){Av(performance.now()*.001),Re.update(),Ne.update(),yn.update(),qt.update(),cx(),fn.render(Ot,Ke),Ii.render(rn,ot),er.render(zn,yt),$r.render(Bn,Lt);for(const n of Ta)n.controls.update(),n.renderer.render(n.scene,n.camera);requestAnimationFrame(jd)}function $M(){const[n,e,t]=p.preset.value.split(",").map(Number);p.n.value=n,p.l.value=e,p.m.value=Math.abs(t),p.cosType.checked=t>=0,p.sinType.checked=t<0,ht(),jr(),st()}function Er(n,e){if(n.checked)for(const t of e)t&&t!==n&&(t.checked=!1)}function Zd(n){n==="one"?(p.positiveColor.value="#ff7a00",p.negativeColor.value="#008fb8"):(p.positiveColor.value="#d83bd8",p.negativeColor.value="#00aeb8"),st()}function jM(){for(const n of[p.cosType,p.sinType])n==null||n.addEventListener("change",()=>{Er(n,[p.cosType,p.sinType]),!p.cosType.checked&&!p.sinType.checked&&(p.cosType.checked=!0),st()});for(const n of[p.wireframe,p.smooth])n==null||n.addEventListener("change",()=>{Er(n,[p.wireframe,p.smooth]),st()});for(const n of[p.paletteOne,p.paletteTwo])n==null||n.addEventListener("change",()=>{Er(n,[p.paletteOne,p.paletteTwo]),!p.paletteOne.checked&&!p.paletteTwo.checked&&(p.paletteTwo.checked=!0),Zd(p.paletteOne.checked?"one":"two")});for(const n of[p.xySlice,p.yzSlice,p.xzSlice])n==null||n.addEventListener("change",()=>{Er(n,[p.xySlice,p.yzSlice,p.xzSlice]),st()});for(const n of[p.quarter,p.eighth,p.threeQuarter])n==null||n.addEventListener("change",()=>{Er(n,[p.quarter,p.eighth,p.threeQuarter]),st()});for(const n of[p.radialR,p.radialR2,p.radialRdf])n==null||n.addEventListener("change",()=>{Er(n,[p.radialR,p.radialR2,p.radialRdf]),!p.radialR.checked&&!p.radialR2.checked&&!p.radialRdf.checked&&(p.radialRdf.checked=!0),nc(),uc(ht(),$t())})}function os(){fn.render(Ot,Ke);const n=document.createElement("a");n.download=`${p.orbitalName.textContent||"hao-orbital"}.png`,n.href=fn.domElement.toDataURL("image/png"),n.click()}function Qn(n){p.statusText.textContent=n}function ZM(){if(p.backgroundColor){(!document.body.contains(p.backgroundColor)||p.backgroundColor.closest(".hidden-control"))&&(document.body.appendChild(p.backgroundColor),Object.assign(p.backgroundColor.style,{position:"fixed",left:"-120px",top:"0",width:"1px",height:"1px",opacity:"0",pointerEvents:"none"}));try{typeof p.backgroundColor.showPicker=="function"?p.backgroundColor.showPicker():p.backgroundColor.click()}catch{p.backgroundColor.click()}}}function Ho(n){document.body.classList.toggle("app-fullscreen",n),tr.hidden=!n,tn()}async function KM(){var e;an(),Ho(!0);const n=(e=document.documentElement.requestFullscreen)==null?void 0:e.bind(document.documentElement);if(n)try{await n(),Pr=!0}catch{Pr=!1}}async function Kd(){if(an(),Ho(!1),document.fullscreenElement&&document.exitFullscreen)try{await document.exitFullscreen()}catch{}Pr=!1}function JM(){document.body.classList.contains("app-fullscreen")||document.fullscreenElement?Kd():KM()}function an(){p.menuPopup.hidden=!0,p.menuPopup.innerHTML="";for(const n of p.menuItems)n.classList.remove("active")}function QM(n){const e=n.dataset.menu,t={file:[["重新显示",st],["导出图片",os],["恢复预设值",()=>{jr(),st()}]],window:[["全屏/退出全屏",JM],["画板",hc],["盒子设置",Vx],["背景颜色",ZM],["显示/隐藏盒子",ey],["显示/隐藏坐标轴",gc],["重置视角",()=>{rc(),ix(Kt)}]],help:[["当前说明",()=>Qn("顶部按钮已连接到 Web 端功能")],["项目路径",()=>Qn("web/index.html")]],language:[["中文",()=>Qn("语言: 中文")],["English",()=>Qn("Language: English labels are partly available")]]}[e];an(),n.classList.add("active");const i=n.getBoundingClientRect();p.menuPopup.style.left=`${i.left}px`,p.menuPopup.hidden=!1;for(const[r,a]of t){const s=document.createElement("button");s.type="button",s.textContent=r,s.addEventListener("click",()=>{an(),a()}),p.menuPopup.appendChild(s)}}function gc(){var e;p.axis.checked=!p.axis.checked;const n=$t();wa.visible=n.showAxis,wa.scale.setScalar(Math.max(1,n.radius/4.5)),gi&&(gi.visible=n.showAxis),(e=p.toolAxis)==null||e.classList.toggle("active",n.showAxis),render()}function ey(){p.box.checked=!p.box.checked,$t(),st()}function ss(n){var t,i;ic({restoreLayout:!0});const e=n==="overlap";p.viewGrid.classList.toggle("overlap-layout",e),(t=p.toolTile)==null||t.classList.toggle("active",!e),(i=p.toolOverlap)==null||i.classList.toggle("active",e),tn()}function Di(n){const e=n.querySelector('[data-window-action="minimize"]'),t=n.querySelector('[data-window-action="maximize"]');e&&(e.textContent=n.classList.contains("minimized")?"□":"－"),t&&(t.textContent=n.classList.contains("maximized")?"❐":"□")}function ty(n){const e=n.closest(".qt-window");if(!e)return;const t=n.dataset.windowAction;t==="minimize"?(e.classList.toggle("minimized"),e.classList.contains("minimized")&&e.classList.remove("maximized")):t==="maximize"?(e.classList.remove("minimized"),e.classList.toggle("maximized")):t==="close"&&(e.classList.add("closed"),e.classList.remove("minimized","maximized"),e===p.animationWindow&&Pa()),Di(e),tn(),e===p.animationWindow&&!e.classList.contains("closed")&&requestAnimationFrame(()=>Vr(0))}function _c(n){var a,s,o;const e=ni,t=Math.max(3,Kt),i=Ti(e),r=Ti(t,40);n==="xoy"?(Ke.position.set(0,0,i),ot.position.set(0,0,r)):n==="yoz"?(Ke.position.set(i,0,0),ot.position.set(r,0,0)):n==="xoz"&&(Ke.position.set(0,i,0),ot.position.set(0,r,0)),Ke.lookAt(0,0,0),ot.lookAt(0,0,0),Jo(e),Qo(t),Re.target.set(0,0,0),Ne.target.set(0,0,0),Re.update(),Ne.update(),(a=p.toolXOY)==null||a.classList.toggle("active",n==="xoy"),(s=p.toolYOZ)==null||s.classList.toggle("active",n==="yoz"),(o=p.toolXOZ)==null||o.classList.toggle("active",n==="xoz")}for(const n of[p.n,p.l,p.m,p.z,p.iso,p.density,p.radius,p.opacity,p.mode,p.slice,p.node,p.axis,p.box,p.positiveColor,p.negativeColor,p.backgroundColor,p.desktopMatch,p.boxSizeDisplay,p.cloud,p.positiveLobe,p.negativeLobe,p.wireframe,p.smooth,p.projection,p.radialSection,p.radialSide,p.radialCurve,p.radialAxis,p.radialNode,p.polarNode,p.longitudeNode,p.grid3d,p.relationMode,p.syncRotation,p.scanRadius,p.scanTheta,p.scanPhi])n&&n.addEventListener("input",()=>{if(n===p.boxSizeDisplay&&wv(),ht(),$t(),n===p.backgroundColor){Ql(p.backgroundColor.value);return}if(n===p.relationMode){nc(),uc(ht(),$t());return}if([p.syncRotation,p.scanRadius,p.scanTheta,p.scanPhi].includes(n)){ts();return}[p.wireframe,p.smooth].includes(n)||(n.type==="checkbox"||n.type==="color")&&st()});for(const n of[p.n,p.l,p.m,p.z,p.desktopMatch])n.addEventListener("change",()=>{jr(),st()});p.preset.addEventListener("input",$M);p.renderButton.addEventListener("click",st);var Ch;(Ch=p.redrawProxyButton)==null||Ch.addEventListener("click",st);var Rh;(Rh=p.presetButton)==null||Rh.addEventListener("click",()=>{jr(),st()});var Ph;(Ph=p.axisProxyButton)==null||Ph.addEventListener("click",()=>{gc()});var Lh;(Lh=document.querySelector("#colorProxyButton"))==null||Lh.addEventListener("click",()=>{p.paletteOne.checked=!p.paletteOne.checked,p.paletteTwo.checked=!p.paletteOne.checked,Zd(p.paletteOne.checked?"one":"two")});p.resetCameraButton.addEventListener("click",()=>rc());p.screenshotButton.addEventListener("click",os);for(const n of document.querySelectorAll("[data-window-action]"))n.addEventListener("click",e=>{e.stopPropagation(),ty(n)});for(const n of p.menuItems)n.addEventListener("click",e=>{e.stopPropagation(),QM(n)});document.addEventListener("click",an);p.menuPopup.addEventListener("click",n=>n.stopPropagation());tr.addEventListener("click",Kd);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(Pr=!0,Ho(!0)):Pr&&(Pr=!1,Ho(!1))});var Ih;(Ih=p.toolRender)==null||Ih.addEventListener("click",()=>{an(),st()});var Dh;(Dh=p.toolSave)==null||Dh.addEventListener("click",()=>{an(),os()});var Nh;(Nh=p.toolTile)==null||Nh.addEventListener("click",()=>{an(),ss("tile")});var Uh;(Uh=p.toolOverlap)==null||Uh.addEventListener("click",()=>{an(),ss("overlap")});var Fh;(Fh=p.toolAxis)==null||Fh.addEventListener("click",()=>{an(),gc()});var Oh;(Oh=p.toolXOY)==null||Oh.addEventListener("click",()=>{an(),_c("xoy")});var zh;(zh=p.toolYOZ)==null||zh.addEventListener("click",()=>{an(),_c("yoz")});var Bh;(Bh=p.toolXOZ)==null||Bh.addEventListener("click",()=>{an(),_c("xoz")});fn.domElement.addEventListener("click",wx);window.addEventListener("resize",ko);jM();Dx();Sv();ko();ss("tile");jr();rc();st();jd();
