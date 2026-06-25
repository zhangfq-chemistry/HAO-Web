(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="165",ao={ROTATE:0,DOLLY:1,PAN:2},Vd=0,lc=1,Hd=2,xh=1,Gd=2,$n=3,bi=0,Yt=1,ut=2,Mi=0,Er=1,el=2,cc=3,uc=4,Wd=5,Bi=100,qd=101,Xd=102,Yd=103,$d=104,jd=200,Zd=201,Kd=202,Jd=203,tl=204,nl=205,Qd=206,ef=207,tf=208,nf=209,rf=210,af=211,sf=212,of=213,lf=214,cf=0,uf=1,hf=2,vs=3,df=4,ff=5,pf=6,mf=7,Ns=0,gf=1,vf=2,yi=0,_f=1,xf=2,Mf=3,Vr=4,yf=5,Sf=6,bf=7,Mh=300,Ir=301,Dr=302,il=303,rl=304,Fs=306,al=1e3,Vi=1001,sl=1002,ln=1003,Ef=1004,Ra=1005,qt=1006,so=1007,Hi=1008,ni=1009,wf=1010,Tf=1011,_s=1012,yh=1013,Ur=1014,_i=1015,Os=1016,Sh=1017,bh=1018,Nr=1020,Af=35902,Cf=1021,Rf=1022,Sn=1023,Pf=1024,Lf=1025,wr=1026,Fr=1027,If=1028,Eh=1029,Df=1030,wh=1031,Th=1033,oo=33776,lo=33777,co=33778,uo=33779,hc=35840,dc=35841,fc=35842,pc=35843,mc=36196,gc=37492,vc=37496,_c=37808,xc=37809,Mc=37810,yc=37811,Sc=37812,bc=37813,Ec=37814,wc=37815,Tc=37816,Ac=37817,Cc=37818,Rc=37819,Pc=37820,Lc=37821,ho=36492,Ic=36494,Dc=36495,Uf=36283,Uc=36284,Nc=36285,Fc=36286,Nf=3200,Ff=3201,Bs=0,Of=1,gi="",wt="srgb",wi="srgb-linear",Tl="display-p3",zs="display-p3-linear",xs="linear",ot="srgb",Ms="rec709",ys="p3",tr=7680,Oc=519,Bf=512,zf=513,kf=514,Ah=515,Vf=516,Hf=517,Gf=518,Wf=519,ol=35044,Pa=35048,ll="300 es",Zn=2e3,Ss=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const Tr=Math.PI/180,ma=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Al(n,e){return(n%e+e)%e}function qf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Xf(n,e,t){return n!==e?(t-n)/(e-n):0}function sa(n,e,t){return(1-t)*n+t*e}function Yf(n,e,t,i){return sa(n,e,1-Math.exp(-t*i))}function $f(n,e=1){return e-Math.abs(Al(n,e*2)-e)}function jf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Zf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Jf(n,e){return n+Math.random()*(e-n)}function Qf(n){return n*(.5-Math.random())}function ep(n){n!==void 0&&(Bc=n);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tp(n){return n*Tr}function np(n){return n*ma}function ip(n){return(n&n-1)===0&&n!==0}function rp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ap(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sp(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+i)/2),u=o((e+i)/2),h=a((e-i)/2),d=o((e-i)/2),f=a((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(s*u,l*h,l*d,s*c);break;case"YZY":n.set(l*d,s*u,l*h,s*c);break;case"ZXZ":n.set(l*h,l*d,s*u,s*c);break;case"XZX":n.set(s*u,l*v,l*f,s*c);break;case"YXY":n.set(l*f,s*u,l*v,s*c);break;case"ZYZ":n.set(l*v,l*f,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const zc={DEG2RAD:Tr,RAD2DEG:ma,generateUUID:ti,clamp:Ct,euclideanModulo:Al,mapLinear:qf,inverseLerp:Xf,lerp:sa,damp:Yf,pingpong:$f,smoothstep:jf,smootherstep:Zf,randInt:Kf,randFloat:Jf,randFloatSpread:Qf,seededRandom:ep,degToRad:tp,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:rp,floorPowerOfTwo:ap,setQuaternionFromProperEuler:sp,normalize:Je,denormalize:Mn};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,a,o,s,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],v=i[8],_=r[0],g=r[3],p=r[6],y=r[1],x=r[4],M=r[7],w=r[2],E=r[5],T=r[8];return a[0]=o*_+s*y+l*w,a[3]=o*g+s*x+l*E,a[6]=o*p+s*M+l*T,a[1]=c*_+u*y+h*w,a[4]=c*g+u*x+h*E,a[7]=c*p+u*M+h*T,a[2]=d*_+f*y+v*w,a[5]=d*g+f*x+v*E,a[8]=d*p+f*M+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*o-s*c,d=s*l-u*a,f=c*a-o*l,v=t*h+i*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(s*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*a-s*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new Be;function Ch(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function op(){const n=bs("canvas");return n.style.display="block",n}const kc={};function Cl(n){n in kc||(kc[n]=!0,console.warn(n))}function lp(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Vc=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hc=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),La={[wi]:{transfer:xs,primaries:Ms,toReference:n=>n,fromReference:n=>n},[wt]:{transfer:ot,primaries:Ms,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[zs]:{transfer:xs,primaries:ys,toReference:n=>n.applyMatrix3(Hc),fromReference:n=>n.applyMatrix3(Vc)},[Tl]:{transfer:ot,primaries:ys,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Hc),fromReference:n=>n.applyMatrix3(Vc).convertLinearToSRGB()}},cp=new Set([wi,zs]),Qe={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=La[e].toReference,r=La[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return La[n].primaries},getTransfer:function(n){return n===gi?xs:La[n].transfer}};function Ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let nr;class up{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=bs("canvas")),nr.width=e.width,nr.height=e.height;const i=nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Ar(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ar(t[i]/255)*255):t[i]=Ar(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hp=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(mo(r[o].image)):a.push(mo(r[o]))}else a=mo(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?up.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dp=0;class $t extends Yi{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Vi,r=Vi,a=qt,o=Hi,s=Sn,l=ni,c=$t.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ti(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case al:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case al:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Mh;$t.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],v=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(f+1)/2,w=(p+1)/2,E=(u+d)/4,T=(h+_)/4,C=(v+g)/4;return x>M&&x>w?x<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(x),r=E/i,a=T/i):M>w?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=E/r,a=C/r):w<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),i=T/a,r=C/a),this.set(i,r,a,t),this}let y=Math.sqrt((g-v)*(g-v)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-v)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fp extends Yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends fp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ph extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lh extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=a[o+0],f=a[o+1],v=a[o+2],_=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==v){let g=1-s;const p=l*d+c*f+u*v+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),E=Math.atan2(w,p*y);g=Math.sin(g*E)/w,s=Math.sin(s*E)/w}const M=s*y;if(l=l*g+d*M,c=c*g+f*M,u=u*g+v*M,h=h*g+_*M,g===1-s){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=a[o],d=a[o+1],f=a[o+2],v=a[o+3];return e[t]=s*v+u*h+l*f-c*d,e[t+1]=l*v+u*d+c*h-s*f,e[t+2]=c*v+u*f+s*d-l*h,e[t+3]=u*v-s*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),h=s(a/2),d=l(i/2),f=l(r/2),v=l(a/2);switch(o){case"XYZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"YXZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"ZXY":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"ZYX":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"YZX":this._x=d*u*h+c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h-d*f*v;break;case"XZY":this._x=d*u*h-c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+s+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(o-r)*f}else if(i>s&&i>h){const f=2*Math.sqrt(1+i-s-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(a+c)/f}else if(s>h){const f=2*Math.sqrt(1+s-i-h);this._w=(a-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-s);this._w=(o-r)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),u=2*(s*t-a*r),h=2*(a*i-o*t);return this.x=t+l*c+o*h-s*u,this.y=i+l*u+s*c-a*h,this.z=r+l*h+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const go=new L,Gc=new Hr;class un{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(a,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Da.subVectors(this.max,jr),ir.subVectors(e.a,jr),rr.subVectors(e.b,jr),ar.subVectors(e.c,jr),li.subVectors(rr,ir),ci.subVectors(ar,rr),Li.subVectors(ir,ar);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Li.z,Li.y,li.z,0,-li.x,ci.z,0,-ci.x,Li.z,0,-Li.x,-li.y,li.x,0,-ci.y,ci.x,0,-Li.y,Li.x,0];return!vo(t,ir,rr,ar,Da)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,ir,rr,ar,Da))?!1:(Ua.crossVectors(li,ci),t=[Ua.x,Ua.y,Ua.z],vo(t,ir,rr,ar,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new L,new L,new L,new L,new L,new L,new L,new L],pn=new L,Ia=new un,ir=new L,rr=new L,ar=new L,li=new L,ci=new L,Li=new L,jr=new L,Da=new L,Ua=new L,Ii=new L;function vo(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Ii.fromArray(n,a);const s=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const pp=new un,Zr=new L,_o=new L;class Ti{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(_o)),this.expandByPoint(Zr.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new L,xo=new L,Na=new L,ui=new L,Mo=new L,Fa=new L,yo=new L;class ks{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xo.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(xo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Na),s=ui.dot(this.direction),l=-ui.dot(Na),c=ui.lengthSq(),u=Math.abs(1-o*o);let h,d,f,v;if(u>0)if(h=o*l-s,d=o*s-l,v=a*u,h>=0)if(d>=-v)if(d<=v){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*s)+d*(o*h+d+2*l)+c}else d=a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;else d=-a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*a+s)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(h=Math.max(0,-(o*a+s)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c);else d=o>0?-a:a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xo).addScaledVector(Na,d),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,r,a){Mo.subVectors(t,e),Fa.subVectors(i,e),yo.crossVectors(Mo,Fa);let o=this.direction.dot(yo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ui.subVectors(this.origin,e);const l=s*this.direction.dot(Fa.crossVectors(ui,Fa));if(l<0)return null;const c=s*this.direction.dot(Mo.cross(ui));if(c<0||l+c>o)return null;const u=-s*ui.dot(yo);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,r,a,o,s,l,c,u,h,d,f,v,_,g){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,u,h,d,f,v,_,g)}set(e,t,i,r,a,o,s,l,c,u,h,d,f,v,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=v,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),a=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=o*u,f=o*h,v=s*u,_=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+v*c,t[5]=d-_*c,t[9]=-s*l,t[2]=_-d*c,t[6]=v+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,v=c*u,_=c*h;t[0]=d+_*s,t[4]=v*s-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=f*s-v,t[6]=_+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,v=c*u,_=c*h;t[0]=d-_*s,t[4]=-o*h,t[8]=v+f*s,t[1]=f+v*s,t[5]=o*u,t[9]=_-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,v=s*u,_=s*h;t[0]=l*u,t[4]=v*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-v,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,v=s*l,_=s*c;t[0]=l*u,t[4]=_-d*h,t[8]=v*h+f,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=f*h+v,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,v=s*l,_=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=s*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mp,e,gp)}lookAt(e,t,i){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),hi.crossVectors(i,en),hi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),hi.crossVectors(i,en)),hi.normalize(),Oa.crossVectors(en,hi),r[0]=hi.x,r[4]=Oa.x,r[8]=en.x,r[1]=hi.y,r[5]=Oa.y,r[9]=en.y,r[2]=hi.z,r[6]=Oa.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],v=i[2],_=i[6],g=i[10],p=i[14],y=i[3],x=i[7],M=i[11],w=i[15],E=r[0],T=r[4],C=r[8],b=r[12],S=r[1],P=r[5],D=r[9],N=r[13],k=r[2],z=r[6],V=r[10],Y=r[14],G=r[3],ne=r[7],oe=r[11],le=r[15];return a[0]=o*E+s*S+l*k+c*G,a[4]=o*T+s*P+l*z+c*ne,a[8]=o*C+s*D+l*V+c*oe,a[12]=o*b+s*N+l*Y+c*le,a[1]=u*E+h*S+d*k+f*G,a[5]=u*T+h*P+d*z+f*ne,a[9]=u*C+h*D+d*V+f*oe,a[13]=u*b+h*N+d*Y+f*le,a[2]=v*E+_*S+g*k+p*G,a[6]=v*T+_*P+g*z+p*ne,a[10]=v*C+_*D+g*V+p*oe,a[14]=v*b+_*N+g*Y+p*le,a[3]=y*E+x*S+M*k+w*G,a[7]=y*T+x*P+M*z+w*ne,a[11]=y*C+x*D+M*V+w*oe,a[15]=y*b+x*N+M*Y+w*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],v=e[3],_=e[7],g=e[11],p=e[15];return v*(+a*l*h-r*c*h-a*s*d+i*c*d+r*s*f-i*l*f)+_*(+t*l*f-t*c*d+a*o*d-r*o*f+r*c*u-a*l*u)+g*(+t*c*h-t*s*f-a*o*h+i*o*f+a*s*u-i*c*u)+p*(-r*s*u-t*l*h+t*s*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],v=e[12],_=e[13],g=e[14],p=e[15],y=h*g*c-_*d*c+_*l*f-s*g*f-h*l*p+s*d*p,x=v*d*c-u*g*c-v*l*f+o*g*f+u*l*p-o*d*p,M=u*_*c-v*h*c+v*s*f-o*_*f-u*s*p+o*h*p,w=v*h*l-u*_*l-v*s*d+o*_*d+u*s*g-o*h*g,E=t*y+i*x+r*M+a*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(_*d*a-h*g*a-_*r*f+i*g*f+h*r*p-i*d*p)*T,e[2]=(s*g*a-_*l*a+_*r*c-i*g*c-s*r*p+i*l*p)*T,e[3]=(h*l*a-s*d*a-h*r*c+i*d*c+s*r*f-i*l*f)*T,e[4]=x*T,e[5]=(u*g*a-v*d*a+v*r*f-t*g*f-u*r*p+t*d*p)*T,e[6]=(v*l*a-o*g*a-v*r*c+t*g*c+o*r*p-t*l*p)*T,e[7]=(o*d*a-u*l*a+u*r*c-t*d*c-o*r*f+t*l*f)*T,e[8]=M*T,e[9]=(v*h*a-u*_*a-v*i*f+t*_*f+u*i*p-t*h*p)*T,e[10]=(o*_*a-v*s*a+v*i*c-t*_*c-o*i*p+t*s*p)*T,e[11]=(u*s*a-o*h*a-u*i*c+t*h*c+o*i*f-t*s*f)*T,e[12]=w*T,e[13]=(u*_*r-v*h*r+v*i*d-t*_*d-u*i*g+t*h*g)*T,e[14]=(v*s*r-o*_*r-v*i*l+t*_*l+o*i*g-t*s*g)*T,e[15]=(o*h*r-u*s*r+u*i*l-t*h*l-o*i*d+t*s*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,h=s+s,d=a*c,f=a*u,v=a*h,_=o*u,g=o*h,p=s*h,y=l*c,x=l*u,M=l*h,w=i.x,E=i.y,T=i.z;return r[0]=(1-(_+p))*w,r[1]=(f+M)*w,r[2]=(v-x)*w,r[3]=0,r[4]=(f-M)*E,r[5]=(1-(d+p))*E,r[6]=(g+y)*E,r[7]=0,r[8]=(v+x)*T,r[9]=(g-y)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),s=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/a,u=1/o,h=1/s;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Zn){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,v;if(s===Zn)f=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(s===Ss)f=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Zn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-a),d=(t+e)*c,f=(i+r)*u;let v,_;if(s===Zn)v=(o+a)*h,_=-2*h;else if(s===Ss)v=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const sr=new L,mn=new st,mp=new L(0,0,0),gp=new L(1,1,1),hi=new L,Oa=new L,en=new L,Wc=new st,qc=new Hr;class hn{constructor(e=0,t=0,i=0,r=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vp=0;const Xc=new L,or=new Hr,qn=new st,Ba=new L,Kr=new L,_p=new L,xp=new Hr,Yc=new L(1,0,0),$c=new L(0,1,0),jc=new L(0,0,1),Zc={type:"added"},Mp={type:"removed"},lr={type:"childadded",child:null},So={type:"childremoved",child:null};class vt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new L,t=new hn,i=new Hr,r=new L(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Be}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Yc,e)}rotateY(e){return this.rotateOnAxis($c,e)}rotateZ(e){return this.rotateOnAxis(jc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yc,e)}translateY(e){return this.translateOnAxis($c,e)}translateZ(e){return this.translateOnAxis(jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Kr,Ba,this.up):qn.lookAt(Ba,Kr,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(qn),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zc),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zc),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),v=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new L(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new L,Xn=new L,bo=new L,Yn=new L,cr=new L,ur=new L,Kc=new L,Eo=new L,wo=new L,To=new L;class on{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){gn.subVectors(r,t),Xn.subVectors(i,t),bo.subVectors(e,t);const o=gn.dot(gn),s=gn.dot(Xn),l=gn.dot(bo),c=Xn.dot(Xn),u=Xn.dot(bo),h=o*c-s*s;if(h===0)return a.set(0,0,0),null;const d=1/h,f=(c*l-s*u)*d,v=(o*u-s*l)*d;return a.set(1-f-v,v,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(s,Yn.z),l)}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),Xn.subVectors(e,t),gn.cross(Xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),gn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;cr.subVectors(r,i),ur.subVectors(a,i),Eo.subVectors(e,i);const l=cr.dot(Eo),c=ur.dot(Eo);if(l<=0&&c<=0)return t.copy(i);wo.subVectors(e,r);const u=cr.dot(wo),h=ur.dot(wo);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(cr,o);To.subVectors(e,a);const f=cr.dot(To),v=ur.dot(To);if(v>=0&&f<=v)return t.copy(a);const _=f*c-l*v;if(_<=0&&c>=0&&v<=0)return s=c/(c-v),t.copy(i).addScaledVector(ur,s);const g=u*v-f*h;if(g<=0&&h-u>=0&&f-v>=0)return Kc.subVectors(a,r),s=(h-u)/(h-u+(f-v)),t.copy(r).addScaledVector(Kc,s);const p=1/(g+_+d);return o=_*p,s=d*p,t.copy(i).addScaledVector(cr,o).addScaledVector(ur,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},za={h:0,s:0,l:0};function Ao(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=Al(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Ao(o,a,e+1/3),this.g=Ao(o,a,e),this.b=Ao(o,a,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=wt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const i=Ih[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Qe.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Ct(Nt.r*255,0,255))*65536+Math.round(Ct(Nt.g*255,0,255))*256+Math.round(Ct(Nt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,a=Nt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=u<=.5?h/(o+s):h/(2-o-s),o){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=wt){Qe.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(za);const i=sa(di.h,za.h,t),r=sa(di.s,za.s,t),a=sa(di.l,za.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new xe;xe.NAMES=Ih;let yp=0;class zn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Er,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=nl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tl&&(i.blendSrc=this.blendSrc),this.blendDst!==nl&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kn extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Ns,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new L,ka=new ue;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ol,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),a=Je(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),e}}class Dh extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uh extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class We extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Sp=0;const an=new st,Co=new vt,hr=new L,tn=new un,Jr=new un,Et=new L;class Ze extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?Uh:Dh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Be().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return Co.lookAt(e),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new We(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];tn.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Jr.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(tn.min,Jr.min),tn.expandByPoint(Et),Et.addVectors(tn.max,Jr.max),tn.expandByPoint(Et)):(tn.expandByPoint(Jr.min),tn.expandByPoint(Jr.max))}tn.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Et.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Et.fromBufferAttribute(s,c),l&&(hr.fromBufferAttribute(e,c),Et.add(hr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let C=0;C<i.count;C++)s[C]=new L,l[C]=new L;const c=new L,u=new L,h=new L,d=new ue,f=new ue,v=new ue,_=new L,g=new L;function p(C,b,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(a,C),f.fromBufferAttribute(a,b),v.fromBufferAttribute(a,S),u.sub(c),h.sub(c),f.sub(d),v.sub(d);const P=1/(f.x*v.y-v.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(P),s[C].add(_),s[b].add(_),s[S].add(_),l[C].add(g),l[b].add(g),l[S].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,b=y.length;C<b;++C){const S=y[C],P=S.start,D=S.count;for(let N=P,k=P+D;N<k;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new L,M=new L,w=new L,E=new L;function T(C){w.fromBufferAttribute(r,C),E.copy(w);const b=s[C];x.copy(b),x.sub(w.multiplyScalar(w.dot(b))).normalize(),M.crossVectors(E,b);const P=M.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,b=y.length;C<b;++C){const S=y[C],P=S.start,D=S.count;for(let N=P,k=P+D;N<k;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new L,a=new L,o=new L,s=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),s.add(u),l.add(u),c.add(u),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,d=new c.constructor(l.length*u);let f=0,v=0;for(let _=0,g=l.length;_<g;_++){s.isInterleavedBufferAttribute?f=l[_]*s.data.stride+s.offset:f=l[_]*u;for(let p=0;p<u;p++)d[v++]=c[f++]}return new Ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ze,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new st,Di=new ks,Va=new Ti,Qc=new L,dr=new L,fr=new L,pr=new L,Ro=new L,Ha=new L,Ga=new ue,Wa=new ue,qa=new ue,eu=new L,tu=new L,nu=new L,Xa=new L,Ya=new L;class it extends vt{constructor(e=new Ze,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Ha.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],h=a[l];u!==0&&(Ro.fromBufferAttribute(h,e),o?Ha.addScaledVector(Ro,u):Ha.addScaledVector(Ro.sub(t),u))}t.add(Ha)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(a),Di.copy(e.ray).recast(e.near),!(Va.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Va,Qc)===null||Di.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(Jc.copy(a).invert(),Di.copy(e.ray).applyMatrix4(Jc),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const g=d[v],p=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(s.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,w=x;M<w;M+=3){const E=s.getX(M),T=s.getX(M+1),C=s.getX(M+2);r=$a(this,p,e,i,c,u,h,E,T,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),_=Math.min(s.count,f.start+f.count);for(let g=v,p=_;g<p;g+=3){const y=s.getX(g),x=s.getX(g+1),M=s.getX(g+2);r=$a(this,o,e,i,c,u,h,y,x,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const g=d[v],p=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,w=x;M<w;M+=3){const E=M,T=M+1,C=M+2;r=$a(this,p,e,i,c,u,h,E,T,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=v,p=_;g<p;g+=3){const y=g,x=g+1,M=g+2;r=$a(this,o,e,i,c,u,h,y,x,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function bp(n,e,t,i,r,a,o,s){let l;if(e.side===Yt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===bi,s),l===null)return null;Ya.copy(s),Ya.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:n}}function $a(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,dr),n.getVertexPosition(l,fr),n.getVertexPosition(c,pr);const u=bp(n,e,t,i,dr,fr,pr,Xa);if(u){r&&(Ga.fromBufferAttribute(r,s),Wa.fromBufferAttribute(r,l),qa.fromBufferAttribute(r,c),u.uv=on.getInterpolation(Xa,dr,fr,pr,Ga,Wa,qa,new ue)),a&&(Ga.fromBufferAttribute(a,s),Wa.fromBufferAttribute(a,l),qa.fromBufferAttribute(a,c),u.uv1=on.getInterpolation(Xa,dr,fr,pr,Ga,Wa,qa,new ue)),o&&(eu.fromBufferAttribute(o,s),tu.fromBufferAttribute(o,l),nu.fromBufferAttribute(o,c),u.normal=on.getInterpolation(Xa,dr,fr,pr,eu,tu,nu,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new L,materialIndex:0};on.getNormal(dr,fr,pr,h.normal),u.face=h}return u}class $i extends Ze{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;v("z","y","x",-1,-1,i,t,e,o,a,0),v("z","y","x",1,-1,i,t,-e,o,a,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2));function v(_,g,p,y,x,M,w,E,T,C,b){const S=M/T,P=w/C,D=M/2,N=w/2,k=E/2,z=T+1,V=C+1;let Y=0,G=0;const ne=new L;for(let oe=0;oe<V;oe++){const le=oe*P-N;for(let we=0;we<z;we++){const ye=we*S-D;ne[_]=ye*y,ne[g]=le*x,ne[p]=k,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[g]=0,ne[p]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(we/T),h.push(1-oe/C),Y+=1}}for(let oe=0;oe<C;oe++)for(let le=0;le<T;le++){const we=d+le+z*oe,ye=d+le+z*(oe+1),$=d+(le+1)+z*(oe+1),K=d+(le+1)+z*oe;l.push(we,ye,K),l.push(ye,$,K),G+=6}s.addGroup(f,G,b),f+=G,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Or(n[t]);for(const r in i)e[r]=i[r]}return e}function Ep(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const wp={clone:Or,merge:Wt};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=Ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fh extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new L,iu=new ue,ru=new ue;class xn extends Fh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,iu,ru),t.subVectors(ru,iu)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,gr=1;class Cp extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(mr,gr,e,t);r.layers=this.layers,this.add(r);const a=new xn(mr,gr,e,t);a.layers=this.layers,this.add(a);const o=new xn(mr,gr,e,t);o.layers=this.layers,this.add(o);const s=new xn(mr,gr,e,t);s.layers=this.layers,this.add(s);const l=new xn(mr,gr,e,t);l.layers=this.layers,this.add(l);const c=new xn(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Oh extends $t{constructor(e,t,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rp extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Oh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $i(5,5,5),a=new Fn({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Mi});a.uniforms.tEquirect.value=t;const o=new it(r,a),s=t.minFilter;return t.minFilter===Hi&&(t.minFilter=qt),new Cp(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const Po=new L,Pp=new L,Lp=new Be;class lt{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Po.subVectors(i,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lp.getNormalMatrix(e),r=this.coplanarPoint(Po).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Ti,ja=new L;class Pl{constructor(e=new lt,t=new lt,i=new lt,r=new lt,a=new lt,o=new lt){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],v=r[9],_=r[10],g=r[11],p=r[12],y=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-a,d-c,g-f,M-p).normalize(),i[1].setComponents(l+a,d+c,g+f,M+p).normalize(),i[2].setComponents(l+o,d+u,g+v,M+y).normalize(),i[3].setComponents(l-o,d-u,g-v,M-y).normalize(),i[4].setComponents(l-s,d-h,g-_,M-x).normalize(),t===Zn)i[5].setComponents(l+s,d+h,g+_,M+x).normalize();else if(t===Ss)i[5].setComponents(s,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bh(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Ip(n){const e=new WeakMap;function t(s,l){const c=s.array,u=s.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),s.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:h}}function i(s,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,s),h.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let f=0,v=d.length;f<v;f++){const _=d[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(n.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:r,remove:a,update:o}}class Ma extends Ze{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,h=e/s,d=t/l,f=[],v=[],_=[],g=[];for(let p=0;p<u;p++){const y=p*d-o;for(let x=0;x<c;x++){const M=x*h-a;v.push(M,-y,0),_.push(0,0,1),g.push(x/s),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<s;y++){const x=y+c*p,M=y+c*(p+1),w=y+1+c*(p+1),E=y+1+c*p;f.push(x,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new We(v,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
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
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rm=`vec3 transformedNormal = objectNormal;
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
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`
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
}`,hm=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
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
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
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
#endif`,Lm=`struct PhysicalMaterial {
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
}`,Im=`
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hm=`#if defined( USE_POINTS_UV )
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
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
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
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v0=`float getShadowMask() {
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
}`,_0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
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
}`,z0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,V0=`#define DISTANCE
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
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
}`,q0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,Y0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
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
}`,Z0=`#define MATCAP
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
}`,K0=`#define MATCAP
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
}`,J0=`#define NORMAL
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
}`,Q0=`#define NORMAL
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
}`,eg=`#define PHONG
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
}`,tg=`#define PHONG
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
}`,ng=`#define STANDARD
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
}`,ig=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,ag=`#define TOON
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
}`,sg=`uniform float size;
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,hg=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Dp,alphahash_pars_fragment:Up,alphamap_fragment:Np,alphamap_pars_fragment:Fp,alphatest_fragment:Op,alphatest_pars_fragment:Bp,aomap_fragment:zp,aomap_pars_fragment:kp,batching_pars_vertex:Vp,batching_vertex:Hp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:qp,iridescence_fragment:Xp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Kp,color_fragment:Jp,color_pars_fragment:Qp,color_pars_vertex:em,color_vertex:tm,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:rm,displacementmap_pars_vertex:am,displacementmap_vertex:sm,emissivemap_fragment:om,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:um,envmap_fragment:hm,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:wm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:vm,fog_fragment:_m,fog_pars_fragment:xm,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:ym,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:bm,lights_pars_begin:Em,lights_toon_fragment:Tm,lights_toon_pars_fragment:Am,lights_phong_fragment:Cm,lights_phong_pars_fragment:Rm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Im,lights_fragment_maps:Dm,lights_fragment_end:Um,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Om,logdepthbuf_vertex:Bm,map_fragment:zm,map_pars_fragment:km,map_particle_fragment:Vm,map_particle_pars_fragment:Hm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:qm,morphcolor_vertex:Xm,morphnormal_vertex:Ym,morphtarget_pars_vertex:$m,morphtarget_vertex:jm,normal_fragment_begin:Zm,normal_fragment_maps:Km,normal_pars_fragment:Jm,normal_pars_vertex:Qm,normal_vertex:e0,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:a0,opaque_fragment:s0,packing:o0,premultiplied_alpha_fragment:l0,project_vertex:c0,dithering_fragment:u0,dithering_pars_fragment:h0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:v0,skinbase_vertex:_0,skinning_pars_vertex:x0,skinning_vertex:M0,skinnormal_vertex:y0,specularmap_fragment:S0,specularmap_pars_fragment:b0,tonemapping_fragment:E0,tonemapping_pars_fragment:w0,transmission_fragment:T0,transmission_pars_fragment:A0,uv_pars_fragment:C0,uv_pars_vertex:R0,uv_vertex:P0,worldpos_vertex:L0,background_vert:I0,background_frag:D0,backgroundCube_vert:U0,backgroundCube_frag:N0,cube_vert:F0,cube_frag:O0,depth_vert:B0,depth_frag:z0,distanceRGBA_vert:k0,distanceRGBA_frag:V0,equirect_vert:H0,equirect_frag:G0,linedashed_vert:W0,linedashed_frag:q0,meshbasic_vert:X0,meshbasic_frag:Y0,meshlambert_vert:$0,meshlambert_frag:j0,meshmatcap_vert:Z0,meshmatcap_frag:K0,meshnormal_vert:J0,meshnormal_frag:Q0,meshphong_vert:eg,meshphong_frag:tg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:rg,meshtoon_frag:ag,points_vert:sg,points_frag:og,shadow_vert:lg,shadow_frag:cg,sprite_vert:ug,sprite_frag:hg},de={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},An={basic:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new xe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Wt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Wt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Wt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Wt([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Wt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Wt([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Wt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Wt([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Wt([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Wt([de.lights,de.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};An.physical={uniforms:Wt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Za={r:0,b:0,g:0},Ni=new hn,dg=new st;function fg(n,e,t,i,r,a,o){const s=new xe(0);let l=a===!0?0:1,c,u,h=null,d=0,f=null;function v(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const M=v(y);M===null?p(s,l):M&&M.isColor&&(p(M,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,x){const M=v(x);M&&(M.isCubeTexture||M.mapping===Fs)?(u===void 0&&(u=new it(new $i(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Or(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ni.copy(x.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(Ni)),u.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ot,(h!==M||d!==M.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new it(new Ma(2,2),new Fn({name:"BackgroundMaterial",uniforms:Or(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Za,Nh(n)),i.buffers.color.setClear(Za.r,Za.g,Za.b,x,o)}return{getClearColor:function(){return s},setClearColor:function(y,x=1){s.set(y),l=x,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(s,l)},render:_,addToRenderList:g}}function pg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let a=r,o=!1;function s(S,P,D,N,k){let z=!1;const V=h(N,D,P);a!==V&&(a=V,c(a.object)),z=f(S,N,D,k),z&&v(S,N,D,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(S,P,D,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,P,D){const N=D.wireframe===!0;let k=i[S.id];k===void 0&&(k={},i[S.id]=k);let z=k[P.id];z===void 0&&(z={},k[P.id]=z);let V=z[N];return V===void 0&&(V=d(l()),z[N]=V),V}function d(S){const P=[],D=[],N=[];for(let k=0;k<t;k++)P[k]=0,D[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,P,D,N){const k=a.attributes,z=P.attributes;let V=0;const Y=D.getAttributes();for(const G in Y)if(Y[G].location>=0){const oe=k[G];let le=z[G];if(le===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),oe===void 0||oe.attribute!==le||le&&oe.data!==le.data)return!0;V++}return a.attributesNum!==V||a.index!==N}function v(S,P,D,N){const k={},z=P.attributes;let V=0;const Y=D.getAttributes();for(const G in Y)if(Y[G].location>=0){let oe=z[G];oe===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor));const le={};le.attribute=oe,oe&&oe.data&&(le.data=oe.data),k[G]=le,V++}a.attributes=k,a.attributesNum=V,a.index=N}function _(){const S=a.newAttributes;for(let P=0,D=S.length;P<D;P++)S[P]=0}function g(S){p(S,0)}function p(S,P){const D=a.newAttributes,N=a.enabledAttributes,k=a.attributeDivisors;D[S]=1,N[S]===0&&(n.enableVertexAttribArray(S),N[S]=1),k[S]!==P&&(n.vertexAttribDivisor(S,P),k[S]=P)}function y(){const S=a.newAttributes,P=a.enabledAttributes;for(let D=0,N=P.length;D<N;D++)P[D]!==S[D]&&(n.disableVertexAttribArray(D),P[D]=0)}function x(S,P,D,N,k,z,V){V===!0?n.vertexAttribIPointer(S,P,D,k,z):n.vertexAttribPointer(S,P,D,N,k,z)}function M(S,P,D,N){_();const k=N.attributes,z=D.getAttributes(),V=P.defaultAttributeValues;for(const Y in z){const G=z[Y];if(G.location>=0){let ne=k[Y];if(ne===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const oe=ne.normalized,le=ne.itemSize,we=e.get(ne);if(we===void 0)continue;const ye=we.buffer,$=we.type,K=we.bytesPerElement,he=$===n.INT||$===n.UNSIGNED_INT||ne.gpuType===yh;if(ne.isInterleavedBufferAttribute){const O=ne.data,Q=O.stride,ge=ne.offset;if(O.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)p(G.location+be,O.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let be=0;be<G.locationSize;be++)g(G.location+be);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let be=0;be<G.locationSize;be++)x(G.location+be,le/G.locationSize,$,oe,Q*K,(ge+le/G.locationSize*be)*K,he)}else{if(ne.isInstancedBufferAttribute){for(let O=0;O<G.locationSize;O++)p(G.location+O,ne.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let O=0;O<G.locationSize;O++)g(G.location+O);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let O=0;O<G.locationSize;O++)x(G.location+O,le/G.locationSize,$,oe,le*K,le/G.locationSize*O*K,he)}}else if(V!==void 0){const oe=V[Y];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(G.location,oe);break;case 3:n.vertexAttrib3fv(G.location,oe);break;case 4:n.vertexAttrib4fv(G.location,oe);break;default:n.vertexAttrib1fv(G.location,oe)}}}}y()}function w(){C();for(const S in i){const P=i[S];for(const D in P){const N=P[D];for(const k in N)u(N[k].object),delete N[k];delete P[D]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const D in P){const N=P[D];for(const k in N)u(N[k].object),delete N[k];delete P[D]}delete i[S.id]}function T(S){for(const P in i){const D=i[P];if(D[S.id]===void 0)continue;const N=D[S.id];for(const k in N)u(N[k].object),delete N[k];delete D[S.id]}}function C(){b(),o=!0,a!==r&&(a=r,c(a.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:C,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function mg(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function s(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(c[f],u[f]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let v=0;v<h;v++)f+=u[v];t.update(f,i,1)}}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let v=0;for(let _=0;_<h;_++)v+=u[_];for(let _=0;_<d.length;_++)t.update(v,i,d[_])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function gg(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Sn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(E){const T=E===Os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ni&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==_i&&!T)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:M,maxSamples:w}}function vg(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new lt,s=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const v=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||v===null||v.length===0||a&&!g)a?u(null):c();else{const y=a?0:i,x=y*4;let M=p.clippingState||null;l.value=M,M=u(v,d,x,f);for(let w=0;w!==x;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,v){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const p=f+_*4,y=d.matrixWorldInverse;s.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(h[x]).applyMatrix4(y,s),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function _g(n){let e=new WeakMap;function t(o,s){return s===il?o.mapping=Ir:s===rl&&(o.mapping=Dr),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===il||s===rl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class En extends Fh{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const br=4,au=[.125,.215,.35,.446,.526,.582],zi=20,Lo=new En,su=new xe;let Io=null,Do=0,Uo=0,No=!1;const Oi=(1+Math.sqrt(5))/2,vr=1/Oi,ou=[new L(-Oi,vr,0),new L(Oi,vr,0),new L(-vr,0,Oi),new L(vr,0,Oi),new L(0,Oi,-vr),new L(0,Oi,vr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Do,Uo),this._renderer.xr.enabled=No,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Os,format:Sn,colorSpace:wi,depthBuffer:!1},r=cu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(a)),this._blurMaterial=Mg(a,e,t)}return r}_compileMaterial(e){const t=new it(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,r){const s=new xn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(su),u.toneMapping=yi,u.autoClear=!1;const f=new kn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new it(new $i,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(su),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(s.up.set(0,l[p],0),s.lookAt(c[p],0,0)):y===1?(s.up.set(0,0,l[p]),s.lookAt(0,c[p],0)):(s.up.set(0,l[p],0),s.lookAt(0,0,c[p]));const x=this._cubeSize;Ka(r,y*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(v,s),u.render(e,s)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ir||e.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ka(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=ou[(r-a-1)%ou.length];this._blur(e,a-1,a,o,s)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new it(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=a/v,g=isFinite(a)?1+Math.floor(u*_):zi;g>zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const p=[];let y=0;for(let T=0;T<zi;++T){const C=T/_,b=Math.exp(-C*C/2);p.push(b),T===0?y+=b:T<g&&(y+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const M=this._sizeLods[r],w=3*M*(r>x-br?r-x+br:0),E=4*(this._cubeSize-M);Ka(t,w,E,3*M,2*M),l.setRenderTarget(t),l.render(h,Lo)}}function xg(n){const e=[],t=[],i=[];let r=n;const a=n-br+1+au.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-br?l=au[o-n+br-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,_=3,g=2,p=1,y=new Float32Array(_*v*f),x=new Float32Array(g*v*f),M=new Float32Array(p*v*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,C=E>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(b,_*v*E),x.set(d,g*v*E);const S=[E,E,E,E,E,E];M.set(S,p*v*E)}const w=new Ze;w.setAttribute("position",new Ot(y,_)),w.setAttribute("uv",new Ot(x,g)),w.setAttribute("faceIndex",new Ot(M,p)),e.push(w),r>br&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cu(n,e,t){const i=new qi(n,e,t);return i.texture.mapping=Fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ka(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Mg(n,e,t){const i=new Float32Array(zi),r=new L(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function uu(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function hu(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ll(){return`

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
	`}function yg(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===il||l===rl,u=l===Ir||l===Dr;if(c||u){let h=e.get(s);const d=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return t===null&&(t=new lu(n)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),h.texture;if(h!==void 0)return h.texture;{const f=s.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new lu(n)),h=c?t.fromEquirectangular(s):t.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),s.addEventListener("dispose",a),h.texture):null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Sg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Cl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bg(n,e,t,i){const r={},a=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",o),delete r[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const v in f){const _=f[v];for(let g=0,p=_.length;g<p;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,v=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){const w=y[x+0],E=y[x+1],T=y[x+2];d.push(w,E,E,T,T,w)}}else if(v!==void 0){const y=v.array;_=v.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const w=x+0,E=x+1,T=x+2;d.push(w,E,E,T,T,w)}}else return;const g=new(Ch(d)?Uh:Dh)(d,1);g.version=_;const p=a.get(h);p&&e.remove(p),a.set(h,g)}function u(h){const d=a.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function Eg(n,e,t){let i;function r(d){i=d}let a,o;function s(d){a=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,a,d*o),t.update(f,i,1)}function c(d,f,v){v!==0&&(n.drawElementsInstanced(i,f,a,d*o,v),t.update(f,i,v))}function u(d,f,v){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<v;g++)this.render(d[g]/o,f[g]);else{_.multiDrawElementsWEBGL(i,f,0,a,d,0,v);let g=0;for(let p=0;p<v;p++)g+=f[p];t.update(g,i,1)}}function h(d,f,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,a,d,0,_,0,v);let p=0;for(let y=0;y<v;y++)p+=f[y];for(let y=0;y<_.length;y++)t.update(p,i,_[y])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Tg(n,e,t){const i=new WeakMap,r=new Rt;function a(o,s,l){const c=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(s);if(d===void 0||d.count!==h){let S=function(){C.dispose(),i.delete(s),s.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const v=s.morphAttributes.position!==void 0,_=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,p=s.morphAttributes.position||[],y=s.morphAttributes.normal||[],x=s.morphAttributes.color||[];let M=0;v===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let w=s.attributes.position.count*M,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*E*4*h),C=new Ph(T,w,E,h);C.type=_i,C.needsUpdate=!0;const b=M*4;for(let P=0;P<h;P++){const D=p[P],N=y[P],k=x[P],z=w*E*4*P;for(let V=0;V<D.count;V++){const Y=V*b;v===!0&&(r.fromBufferAttribute(D,V),T[z+Y+0]=r.x,T[z+Y+1]=r.y,T[z+Y+2]=r.z,T[z+Y+3]=0),_===!0&&(r.fromBufferAttribute(N,V),T[z+Y+4]=r.x,T[z+Y+5]=r.y,T[z+Y+6]=r.z,T[z+Y+7]=0),g===!0&&(r.fromBufferAttribute(k,V),T[z+Y+8]=r.x,T[z+Y+9]=r.y,T[z+Y+10]=r.z,T[z+Y+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new ue(w,E)},i.set(s,d),s.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const _=s.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function Ag(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class zh extends $t{constructor(e,t,i,r,a,o,s,l,c,u=wr){if(u!==wr&&u!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===wr&&(i=Ur),i===void 0&&u===Fr&&(i=Nr),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kh=new $t,Vh=new zh(1,1);Vh.compareFunction=Ah;const Hh=new Ph,Gh=new Lh,Wh=new Oh,du=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function Gr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=du[r];if(a===void 0&&(a=new Float32Array(r),du[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vs(n,e){let t=fu[e];t===void 0&&(t=new Int32Array(e),fu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function Ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;gu.set(i),n.uniformMatrix2fv(this.addr,!1,gu),yt(t,i)}}function Dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;mu.set(i),n.uniformMatrix3fv(this.addr,!1,mu),yt(t,i)}}function Ug(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;pu.set(i),n.uniformMatrix4fv(this.addr,!1,pu),yt(t,i)}}function Ng(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function Gg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?Vh:kh;t.setTexture2D(e||a,r)}function Wg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gh,r)}function qg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Wh,r)}function Xg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Hh,r)}function Yg(n){switch(n){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Lg;case 35674:return Ig;case 35675:return Dg;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Xg}}function $g(n,e){n.uniform1fv(this.addr,e)}function jg(n,e){const t=Gr(e,this.size,2);n.uniform2fv(this.addr,t)}function Zg(n,e){const t=Gr(e,this.size,3);n.uniform3fv(this.addr,t)}function Kg(n,e){const t=Gr(e,this.size,4);n.uniform4fv(this.addr,t)}function Jg(n,e){const t=Gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qg(n,e){const t=Gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function e1(n,e){const t=Gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function t1(n,e){n.uniform1iv(this.addr,e)}function n1(n,e){n.uniform2iv(this.addr,e)}function i1(n,e){n.uniform3iv(this.addr,e)}function r1(n,e){n.uniform4iv(this.addr,e)}function a1(n,e){n.uniform1uiv(this.addr,e)}function s1(n,e){n.uniform2uiv(this.addr,e)}function o1(n,e){n.uniform3uiv(this.addr,e)}function l1(n,e){n.uniform4uiv(this.addr,e)}function c1(n,e,t){const i=this.cache,r=e.length,a=Vs(t,r);Mt(i,a)||(n.uniform1iv(this.addr,a),yt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||kh,a[o])}function u1(n,e,t){const i=this.cache,r=e.length,a=Vs(t,r);Mt(i,a)||(n.uniform1iv(this.addr,a),yt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gh,a[o])}function h1(n,e,t){const i=this.cache,r=e.length,a=Vs(t,r);Mt(i,a)||(n.uniform1iv(this.addr,a),yt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wh,a[o])}function d1(n,e,t){const i=this.cache,r=e.length,a=Vs(t,r);Mt(i,a)||(n.uniform1iv(this.addr,a),yt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hh,a[o])}function f1(n){switch(n){case 5126:return $g;case 35664:return jg;case 35665:return Zg;case 35666:return Kg;case 35674:return Jg;case 35675:return Qg;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return r1;case 5125:return a1;case 36294:return s1;case 36295:return o1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return d1}}class p1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yg(t.type)}}class m1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f1(t.type)}}class g1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function vu(n,e){n.seq.push(e),n.map[e.id]=e}function v1(n,e,t){const i=n.name,r=i.length;for(Fo.lastIndex=0;;){const a=Fo.exec(i),o=Fo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){vu(t,c===void 0?new p1(s,n,e):new m1(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new g1(s),vu(t,h)),t=h}}}class ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);v1(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function _u(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _1=37297;let x1=0;function M1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function y1(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===ys&&t===Ms?i="LinearDisplayP3ToLinearSRGB":e===Ms&&t===ys&&(i="LinearSRGBToLinearDisplayP3"),n){case wi:case zs:return[i,"LinearTransferOETF"];case wt:case Tl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function xu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+M1(n.getShaderSource(e),o)}else return r}function S1(n,e){const t=y1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function b1(n,e){let t;switch(e){case _f:t="Linear";break;case xf:t="Reinhard";break;case Mf:t="OptimizedCineon";break;case Vr:t="ACESFilmic";break;case Sf:t="AgX";break;case bf:t="Neutral";break;case yf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function E1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function w1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function ra(n){return n!==""}function Mu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A1=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(n){return n.replace(A1,R1)}const C1=new Map;function R1(n,e){let t=Oe[e];if(t===void 0){const i=C1.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}const P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(n){return n.replace(P1,L1)}function L1(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function bu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function I1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function D1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ir:case Dr:e="ENVMAP_TYPE_CUBE";break;case Fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function N1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ns:e="ENVMAP_BLENDING_MULTIPLY";break;case gf:e="ENVMAP_BLENDING_MIX";break;case vf:e="ENVMAP_BLENDING_ADD";break}return e}function F1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function O1(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=I1(t),c=D1(t),u=U1(t),h=N1(t),d=F1(t),f=E1(t),v=w1(a),_=r.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ra).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(g=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==yi?b1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,S1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),o=cl(o),o=Mu(o,t),o=yu(o,t),s=cl(s),s=Mu(s,t),s=yu(s,t),o=Su(o),s=Su(s),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+g+o,M=y+p+s,w=_u(r,r.VERTEX_SHADER,x),E=_u(r,r.FRAGMENT_SHADER,M);r.attachShader(_,w),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(_).trim(),N=r.getShaderInfoLog(w).trim(),k=r.getShaderInfoLog(E).trim();let z=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,E);else{const Y=xu(r,w,"vertex"),G=xu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Y+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||k==="")&&(V=!1);V&&(P.diagnostics={runnable:z,programLog:D,vertexShader:{log:N,prefix:g},fragmentShader:{log:k,prefix:p}})}r.deleteShader(w),r.deleteShader(E),C=new ms(r,_),b=T1(r,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,_1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let B1=0;class z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new k1(e),t.set(e,i)),i}}class k1{constructor(e){this.id=B1++,this.code=e,this.usedTimes=0}}function V1(n,e,t,i,r,a,o){const s=new Rl,l=new z1,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,P,D,N){const k=D.fog,z=N.geometry,V=b.isMeshStandardMaterial?D.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),G=Y&&Y.mapping===Fs?Y.image.height:null,ne=v[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const oe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=oe!==void 0?oe.length:0;let we=0;z.morphAttributes.position!==void 0&&(we=1),z.morphAttributes.normal!==void 0&&(we=2),z.morphAttributes.color!==void 0&&(we=3);let ye,$,K,he;if(ne){const tt=An[ne];ye=tt.vertexShader,$=tt.fragmentShader}else ye=b.vertexShader,$=b.fragmentShader,l.update(b),K=l.getVertexShaderID(b),he=l.getFragmentShaderID(b);const O=n.getRenderTarget(),Q=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,be=!!b.map,U=!!b.matcap,ce=!!Y,Ne=!!b.aoMap,et=!!b.lightMap,Pe=!!b.bumpMap,Xe=!!b.normalMap,Ve=!!b.displacementMap,Fe=!!b.emissiveMap,mt=!!b.metalnessMap,I=!!b.roughnessMap,A=b.anisotropy>0,X=b.clearcoat>0,J=b.dispersion>0,ee=b.iridescence>0,te=b.sheen>0,Ce=b.transmission>0,fe=A&&!!b.anisotropyMap,pe=X&&!!b.clearcoatMap,ze=X&&!!b.clearcoatNormalMap,ie=X&&!!b.clearcoatRoughnessMap,Ee=ee&&!!b.iridescenceMap,He=ee&&!!b.iridescenceThicknessMap,De=te&&!!b.sheenColorMap,me=te&&!!b.sheenRoughnessMap,ke=!!b.specularMap,Ge=!!b.specularColorMap,ft=!!b.specularIntensityMap,F=Ce&&!!b.transmissionMap,ve=Ce&&!!b.thicknessMap,j=!!b.gradientMap,Z=!!b.alphaMap,se=b.alphaTest>0,Ue=!!b.alphaHash,Ye=!!b.extensions;let pt=yi;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(pt=n.toneMapping);const St={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:ye,fragmentShader:$,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ge,batchingColor:ge&&N._colorsTexture!==null,instancing:Q,instancingColor:Q&&N.instanceColor!==null,instancingMorph:Q&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wi,alphaToCoverage:!!b.alphaToCoverage,map:be,matcap:U,envMap:ce,envMapMode:ce&&Y.mapping,envMapCubeUVHeight:G,aoMap:Ne,lightMap:et,bumpMap:Pe,normalMap:Xe,displacementMap:d&&Ve,emissiveMap:Fe,normalMapObjectSpace:Xe&&b.normalMapType===Of,normalMapTangentSpace:Xe&&b.normalMapType===Bs,metalnessMap:mt,roughnessMap:I,anisotropy:A,anisotropyMap:fe,clearcoat:X,clearcoatMap:pe,clearcoatNormalMap:ze,clearcoatRoughnessMap:ie,dispersion:J,iridescence:ee,iridescenceMap:Ee,iridescenceThicknessMap:He,sheen:te,sheenColorMap:De,sheenRoughnessMap:me,specularMap:ke,specularColorMap:Ge,specularIntensityMap:ft,transmission:Ce,transmissionMap:F,thicknessMap:ve,gradientMap:j,opaque:b.transparent===!1&&b.blending===Er&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:se,alphaHash:Ue,combine:b.combine,mapUv:be&&_(b.map.channel),aoMapUv:Ne&&_(b.aoMap.channel),lightMapUv:et&&_(b.lightMap.channel),bumpMapUv:Pe&&_(b.bumpMap.channel),normalMapUv:Xe&&_(b.normalMap.channel),displacementMapUv:Ve&&_(b.displacementMap.channel),emissiveMapUv:Fe&&_(b.emissiveMap.channel),metalnessMapUv:mt&&_(b.metalnessMap.channel),roughnessMapUv:I&&_(b.roughnessMap.channel),anisotropyMapUv:fe&&_(b.anisotropyMap.channel),clearcoatMapUv:pe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ze&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(b.sheenRoughnessMap.channel),specularMapUv:ke&&_(b.specularMap.channel),specularColorMapUv:Ge&&_(b.specularColorMap.channel),specularIntensityMapUv:ft&&_(b.specularIntensityMap.channel),transmissionMapUv:F&&_(b.transmissionMap.channel),thicknessMapUv:ve&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Xe||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(be||Z),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:we,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:be&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ut,flipSided:b.side===Yt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ye&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(S,b),x(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),b.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.doubleSided&&s.enable(10),S.flipSided&&s.enable(11),S.useDepthPacking&&s.enable(12),S.dithering&&s.enable(13),S.transmission&&s.enable(14),S.sheen&&s.enable(15),S.opaque&&s.enable(16),S.pointsUvs&&s.enable(17),S.decodeVideoTexture&&s.enable(18),S.alphaToCoverage&&s.enable(19),b.push(s.mask)}function M(b){const S=v[b.type];let P;if(S){const D=An[S];P=wp.clone(D.uniforms)}else P=b.uniforms;return P}function w(b,S){let P;for(let D=0,N=u.length;D<N;D++){const k=u[D];if(k.cacheKey===S){P=k,++P.usedTimes;break}}return P===void 0&&(P=new O1(n,S,b,a),u.push(P)),P}function E(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function T(b){l.remove(b)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:C}}function H1(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function G1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Eu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,v,_,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:v,renderOrder:h.renderOrder,z:_,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function s(h,d,f,v,_,g){const p=o(h,d,f,v,_,g);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,v,_,g){const p=o(h,d,f,v,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||G1),i.length>1&&i.sort(d||Eu),r.length>1&&r.sort(d||Eu)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function W1(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new wu,n.set(i,[o])):r>=a.length?(o=new wu,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function q1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new xe};break;case"SpotLight":t={position:new L,direction:new L,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function X1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Y1=0;function $1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j1(n){const e=new q1,t=X1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,a=new st,o=new st;function s(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,v=0,_=0,g=0,p=0,y=0,x=0,M=0,w=0,E=0,T=0;c.sort($1);for(let b=0,S=c.length;b<S;b++){const P=c[b],D=P.color,N=P.intensity,k=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*N,h+=D.g*N,d+=D.b*N;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],N);T++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,G=t.get(P);G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=V,f++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(D).multiplyScalar(N),V.distance=k,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[_]=V;const Y=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,Y.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[_]=Y.matrix,P.castShadow){const G=t.get(P);G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=z,M++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(D).multiplyScalar(N),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=V,g++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Y=P.shadow,G=t.get(P);G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=z,i.pointShadowMatrix[v]=P.shadow.matrix,x++}i.point[v]=V,v++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(N),V.groundColor.copy(P.groundColor).multiplyScalar(N),i.hemi[p]=V,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==f||C.pointLength!==v||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==w||C.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,C.directionalLength=f,C.pointLength=v,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=w,C.numLightProbes=T,i.version=Y1++)}function l(c,u){let h=0,d=0,f=0,v=0,_=0;const g=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(x.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),a.copy(x.matrixWorld),a.premultiply(g),o.extractRotation(a),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:s,setupView:l,state:i}}function Tu(n){const e=new j1(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function s(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function Z1(n){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new Tu(n),e.set(r,[s])):a>=o.length?(s=new Tu(n),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}class K1 extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J1 extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
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
}`;function tv(n,e,t){let i=new Pl;const r=new ue,a=new ue,o=new Rt,s=new K1({depthPacking:Ff}),l=new J1,c={},u=t.maxTextureSize,h={[bi]:Yt,[Yt]:bi,[ut]:ut},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Q1,fragmentShader:ev}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Ze;v.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let p=this.type;this.render=function(E,T,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Mi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=p!==$n&&this.type===$n,k=p===$n&&this.type!==$n;for(let z=0,V=E.length;z<V;z++){const Y=E[z],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ne=G.getFrameExtents();if(r.multiply(ne),a.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ne.x),r.x=a.x*ne.x,G.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ne.y),r.y=a.y*ne.y,G.mapSize.y=a.y)),G.map===null||N===!0||k===!0){const le=this.type!==$n?{minFilter:ln,magFilter:ln}:{};G.map!==null&&G.map.dispose(),G.map=new qi(r.x,r.y,le),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const oe=G.getViewportCount();for(let le=0;le<oe;le++){const we=G.getViewport(le);o.set(a.x*we.x,a.y*we.y,a.x*we.z,a.y*we.w),D.viewport(o),G.updateMatrices(Y,le),i=G.getFrustum(),M(T,C,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===$n&&y(G,C),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,S,P)};function y(E,T){const C=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qi(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,C,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,C,f,_,null)}function x(E,T,C,b){let S=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:s,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=S.uuid,N=T.uuid;let k=c[D];k===void 0&&(k={},c[D]=k);let z=k[N];z===void 0&&(z=S.clone(),k[N]=z,T.addEventListener("dispose",w)),S=z}if(S.visible=T.visible,S.wireframe=T.wireframe,b===$n?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=n.properties.get(S);D.light=C}return S}function M(E,T,C,b,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===$n)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const N=e.update(E),k=E.material;if(Array.isArray(k)){const z=N.groups;for(let V=0,Y=z.length;V<Y;V++){const G=z[V],ne=k[G.materialIndex];if(ne&&ne.visible){const oe=x(E,ne,b,S);E.onBeforeShadow(n,E,T,C,N,oe,G),n.renderBufferDirect(C,null,N,oe,E,G),E.onAfterShadow(n,E,T,C,N,oe,G)}}}else if(k.visible){const z=x(E,k,b,S);E.onBeforeShadow(n,E,T,C,N,z,null),n.renderBufferDirect(C,null,N,z,E,null),E.onAfterShadow(n,E,T,C,N,z,null)}}const D=E.children;for(let N=0,k=D.length;N<k;N++)M(D[N],T,C,b,S)}function w(E){E.target.removeEventListener("dispose",w);for(const C in c){const b=c[C],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function nv(n){function e(){let F=!1;const ve=new Rt;let j=null;const Z=new Rt(0,0,0,0);return{setMask:function(se){j!==se&&!F&&(n.colorMask(se,se,se,se),j=se)},setLocked:function(se){F=se},setClear:function(se,Ue,Ye,pt,St){St===!0&&(se*=pt,Ue*=pt,Ye*=pt),ve.set(se,Ue,Ye,pt),Z.equals(ve)===!1&&(n.clearColor(se,Ue,Ye,pt),Z.copy(ve))},reset:function(){F=!1,j=null,Z.set(-1,0,0,0)}}}function t(){let F=!1,ve=null,j=null,Z=null;return{setTest:function(se){se?he(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(se){ve!==se&&!F&&(n.depthMask(se),ve=se)},setFunc:function(se){if(j!==se){switch(se){case cf:n.depthFunc(n.NEVER);break;case uf:n.depthFunc(n.ALWAYS);break;case hf:n.depthFunc(n.LESS);break;case vs:n.depthFunc(n.LEQUAL);break;case df:n.depthFunc(n.EQUAL);break;case ff:n.depthFunc(n.GEQUAL);break;case pf:n.depthFunc(n.GREATER);break;case mf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=se}},setLocked:function(se){F=se},setClear:function(se){Z!==se&&(n.clearDepth(se),Z=se)},reset:function(){F=!1,ve=null,j=null,Z=null}}}function i(){let F=!1,ve=null,j=null,Z=null,se=null,Ue=null,Ye=null,pt=null,St=null;return{setTest:function(tt){F||(tt?he(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(tt){ve!==tt&&!F&&(n.stencilMask(tt),ve=tt)},setFunc:function(tt,wn,Tn){(j!==tt||Z!==wn||se!==Tn)&&(n.stencilFunc(tt,wn,Tn),j=tt,Z=wn,se=Tn)},setOp:function(tt,wn,Tn){(Ue!==tt||Ye!==wn||pt!==Tn)&&(n.stencilOp(tt,wn,Tn),Ue=tt,Ye=wn,pt=Tn)},setLocked:function(tt){F=tt},setClear:function(tt){St!==tt&&(n.clearStencil(tt),St=tt)},reset:function(){F=!1,ve=null,j=null,Z=null,se=null,Ue=null,Ye=null,pt=null,St=null}}}const r=new e,a=new t,o=new i,s=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,v=!1,_=null,g=null,p=null,y=null,x=null,M=null,w=null,E=new xe(0,0,0),T=0,C=!1,b=null,S=null,P=null,D=null,N=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=V>=2);let G=null,ne={};const oe=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),we=new Rt().fromArray(oe),ye=new Rt().fromArray(le);function $(F,ve,j,Z){const se=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(F,Ue),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<j;Ye++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ve+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return Ue}const K={};K[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(n.DEPTH_TEST),a.setFunc(vs),Pe(!1),Xe(lc),he(n.CULL_FACE),Ne(Mi);function he(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function O(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function Q(F,ve){return u[F]!==ve?(n.bindFramebuffer(F,ve),u[F]=ve,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ve),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function ge(F,ve){let j=d,Z=!1;if(F){j=h.get(ve),j===void 0&&(j=[],h.set(ve,j));const se=F.textures;if(j.length!==se.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,Ye=se.length;Ue<Ye;Ue++)j[Ue]=n.COLOR_ATTACHMENT0+Ue;j.length=se.length,Z=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,Z=!0);Z&&n.drawBuffers(j)}function be(F){return f!==F?(n.useProgram(F),f=F,!0):!1}const U={[Bi]:n.FUNC_ADD,[qd]:n.FUNC_SUBTRACT,[Xd]:n.FUNC_REVERSE_SUBTRACT};U[Yd]=n.MIN,U[$d]=n.MAX;const ce={[jd]:n.ZERO,[Zd]:n.ONE,[Kd]:n.SRC_COLOR,[tl]:n.SRC_ALPHA,[rf]:n.SRC_ALPHA_SATURATE,[tf]:n.DST_COLOR,[Qd]:n.DST_ALPHA,[Jd]:n.ONE_MINUS_SRC_COLOR,[nl]:n.ONE_MINUS_SRC_ALPHA,[nf]:n.ONE_MINUS_DST_COLOR,[ef]:n.ONE_MINUS_DST_ALPHA,[af]:n.CONSTANT_COLOR,[sf]:n.ONE_MINUS_CONSTANT_COLOR,[of]:n.CONSTANT_ALPHA,[lf]:n.ONE_MINUS_CONSTANT_ALPHA};function Ne(F,ve,j,Z,se,Ue,Ye,pt,St,tt){if(F===Mi){v===!0&&(O(n.BLEND),v=!1);return}if(v===!1&&(he(n.BLEND),v=!0),F!==Wd){if(F!==_||tt!==C){if((g!==Bi||x!==Bi)&&(n.blendEquation(n.FUNC_ADD),g=Bi,x=Bi),tt)switch(F){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case el:n.blendFunc(n.ONE,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case el:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,y=null,M=null,w=null,E.set(0,0,0),T=0,_=F,C=tt}return}se=se||ve,Ue=Ue||j,Ye=Ye||Z,(ve!==g||se!==x)&&(n.blendEquationSeparate(U[ve],U[se]),g=ve,x=se),(j!==p||Z!==y||Ue!==M||Ye!==w)&&(n.blendFuncSeparate(ce[j],ce[Z],ce[Ue],ce[Ye]),p=j,y=Z,M=Ue,w=Ye),(pt.equals(E)===!1||St!==T)&&(n.blendColor(pt.r,pt.g,pt.b,St),E.copy(pt),T=St),_=F,C=!1}function et(F,ve){F.side===ut?O(n.CULL_FACE):he(n.CULL_FACE);let j=F.side===Yt;ve&&(j=!j),Pe(j),F.blending===Er&&F.transparent===!1?Ne(Mi):Ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const Z=F.stencilWrite;o.setTest(Z),Z&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(F){b!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),b=F)}function Xe(F){F!==Vd?(he(n.CULL_FACE),F!==S&&(F===lc?n.cullFace(n.BACK):F===Hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),S=F}function Ve(F){F!==P&&(z&&n.lineWidth(F),P=F)}function Fe(F,ve,j){F?(he(n.POLYGON_OFFSET_FILL),(D!==ve||N!==j)&&(n.polygonOffset(ve,j),D=ve,N=j)):O(n.POLYGON_OFFSET_FILL)}function mt(F){F?he(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function I(F){F===void 0&&(F=n.TEXTURE0+k-1),G!==F&&(n.activeTexture(F),G=F)}function A(F,ve,j){j===void 0&&(G===null?j=n.TEXTURE0+k-1:j=G);let Z=ne[j];Z===void 0&&(Z={type:void 0,texture:void 0},ne[j]=Z),(Z.type!==F||Z.texture!==ve)&&(G!==j&&(n.activeTexture(j),G=j),n.bindTexture(F,ve||K[F]),Z.type=F,Z.texture=ve)}function X(){const F=ne[G];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(F){we.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),we.copy(F))}function me(F){ye.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ye.copy(F))}function ke(F,ve){let j=l.get(ve);j===void 0&&(j=new WeakMap,l.set(ve,j));let Z=j.get(F);Z===void 0&&(Z=n.getUniformBlockIndex(ve,F.name),j.set(F,Z))}function Ge(F,ve){const Z=l.get(ve).get(F);s.get(ve)!==Z&&(n.uniformBlockBinding(ve,Z,F.__bindingPointIndex),s.set(ve,Z))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,ne={},u={},h=new WeakMap,d=[],f=null,v=!1,_=null,g=null,p=null,y=null,x=null,M=null,w=null,E=new xe(0,0,0),T=0,C=!1,b=null,S=null,P=null,D=null,N=null,we.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:O,bindFramebuffer:Q,drawBuffers:ge,useProgram:be,setBlending:Ne,setMaterial:et,setFlipSided:Pe,setCullFace:Xe,setLineWidth:Ve,setPolygonOffset:Fe,setScissorTest:mt,activeTexture:I,bindTexture:A,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:Ee,texImage3D:He,updateUBOMapping:ke,uniformBlockBinding:Ge,texStorage2D:ze,texStorage3D:ie,texSubImage2D:te,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:pe,scissor:De,viewport:me,reset:ft}}function iv(n,e,t,i,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,A){return f?new OffscreenCanvas(I,A):bs("canvas")}function _(I,A,X){let J=1;const ee=mt(I);if((ee.width>X||ee.height>X)&&(J=X/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const te=Math.floor(J*ee.width),Ce=Math.floor(J*ee.height);h===void 0&&(h=v(te,Ce));const fe=A?v(te,Ce):h;return fe.width=te,fe.height=Ce,fe.getContext("2d").drawImage(I,0,0,te,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+Ce+")."),fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==ln&&I.minFilter!==qt}function p(I){n.generateMipmap(I)}function y(I,A,X,J,ee=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=A;if(A===n.RED&&(X===n.FLOAT&&(te=n.R32F),X===n.HALF_FLOAT&&(te=n.R16F),X===n.UNSIGNED_BYTE&&(te=n.R8)),A===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(te=n.R8UI),X===n.UNSIGNED_SHORT&&(te=n.R16UI),X===n.UNSIGNED_INT&&(te=n.R32UI),X===n.BYTE&&(te=n.R8I),X===n.SHORT&&(te=n.R16I),X===n.INT&&(te=n.R32I)),A===n.RG&&(X===n.FLOAT&&(te=n.RG32F),X===n.HALF_FLOAT&&(te=n.RG16F),X===n.UNSIGNED_BYTE&&(te=n.RG8)),A===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(te=n.RG8UI),X===n.UNSIGNED_SHORT&&(te=n.RG16UI),X===n.UNSIGNED_INT&&(te=n.RG32UI),X===n.BYTE&&(te=n.RG8I),X===n.SHORT&&(te=n.RG16I),X===n.INT&&(te=n.RG32I)),A===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),A===n.RGBA){const Ce=ee?xs:Qe.getTransfer(J);X===n.FLOAT&&(te=n.RGBA32F),X===n.HALF_FLOAT&&(te=n.RGBA16F),X===n.UNSIGNED_BYTE&&(te=Ce===ot?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(I,A){let X;return I?A===null||A===Ur||A===Nr?X=n.DEPTH24_STENCIL8:A===_i?X=n.DEPTH32F_STENCIL8:A===_s&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ur||A===Nr?X=n.DEPTH_COMPONENT24:A===_i?X=n.DEPTH_COMPONENT32F:A===_s&&(X=n.DEPTH_COMPONENT16),X}function M(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==ln&&I.minFilter!==qt?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function w(I){const A=I.target;A.removeEventListener("dispose",w),T(A),A.isVideoTexture&&u.delete(A)}function E(I){const A=I.target;A.removeEventListener("dispose",E),b(A)}function T(I){const A=i.get(I);if(A.__webglInit===void 0)return;const X=I.source,J=d.get(X);if(J){const ee=J[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(I),Object.keys(J).length===0&&d.delete(X)}i.remove(I)}function C(I){const A=i.get(I);n.deleteTexture(A.__webglTexture);const X=I.source,J=d.get(X);delete J[A.__cacheKey],o.memory.textures--}function b(I){const A=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let ee=0;ee<A.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(A.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)n.deleteFramebuffer(A.__webglFramebuffer[J]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const X=I.textures;for(let J=0,ee=X.length;J<ee;J++){const te=i.get(X[J]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(X[J])}i.remove(I)}let S=0;function P(){S=0}function D(){const I=S;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),S+=1,I}function N(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function k(I,A){const X=i.get(I);if(I.isVideoTexture&&Ve(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){const J=I.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(X,I,A);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+A)}function z(I,A){const X=i.get(I);if(I.version>0&&X.__version!==I.version){ye(X,I,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+A)}function V(I,A){const X=i.get(I);if(I.version>0&&X.__version!==I.version){ye(X,I,A);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+A)}function Y(I,A){const X=i.get(I);if(I.version>0&&X.__version!==I.version){$(X,I,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+A)}const G={[al]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[sl]:n.MIRRORED_REPEAT},ne={[ln]:n.NEAREST,[Ef]:n.NEAREST_MIPMAP_NEAREST,[Ra]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[so]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},oe={[Bf]:n.NEVER,[Wf]:n.ALWAYS,[zf]:n.LESS,[Ah]:n.LEQUAL,[kf]:n.EQUAL,[Gf]:n.GEQUAL,[Vf]:n.GREATER,[Hf]:n.NOTEQUAL};function le(I,A){if(A.type===_i&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===qt||A.magFilter===so||A.magFilter===Ra||A.magFilter===Hi||A.minFilter===qt||A.minFilter===so||A.minFilter===Ra||A.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,G[A.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,G[A.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,G[A.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ne[A.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ne[A.minFilter]),A.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ln||A.minFilter!==Ra&&A.minFilter!==Hi||A.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function we(I,A){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",w));const J=A.source;let ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));const te=N(A);if(te!==I.__cacheKey){ee[te]===void 0&&(ee[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[te].usedTimes++;const Ce=ee[I.__cacheKey];Ce!==void 0&&(ee[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&C(A)),I.__cacheKey=te,I.__webglTexture=ee[te].texture}return X}function ye(I,A,X){let J=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=n.TEXTURE_3D);const ee=we(I,A),te=A.source;t.bindTexture(J,I.__webglTexture,n.TEXTURE0+X);const Ce=i.get(te);if(te.version!==Ce.__version||ee===!0){t.activeTexture(n.TEXTURE0+X);const fe=Qe.getPrimaries(Qe.workingColorSpace),pe=A.colorSpace===gi?null:Qe.getPrimaries(A.colorSpace),ze=A.colorSpace===gi||fe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ie=_(A.image,!1,r.maxTextureSize);ie=Fe(A,ie);const Ee=a.convert(A.format,A.colorSpace),He=a.convert(A.type);let De=y(A.internalFormat,Ee,He,A.colorSpace,A.isVideoTexture);le(J,A);let me;const ke=A.mipmaps,Ge=A.isVideoTexture!==!0,ft=Ce.__version===void 0||ee===!0,F=te.dataReady,ve=M(A,ie);if(A.isDepthTexture)De=x(A.format===Fr,A.type),ft&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,De,ie.width,ie.height,0,Ee,He,null));else if(A.isDataTexture)if(ke.length>0){Ge&&ft&&t.texStorage2D(n.TEXTURE_2D,ve,De,ke[0].width,ke[0].height);for(let j=0,Z=ke.length;j<Z;j++)me=ke[j],Ge?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,Ee,He,me.data):t.texImage2D(n.TEXTURE_2D,j,De,me.width,me.height,0,Ee,He,me.data);A.generateMipmaps=!1}else Ge?(ft&&t.texStorage2D(n.TEXTURE_2D,ve,De,ie.width,ie.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Ee,He,ie.data)):t.texImage2D(n.TEXTURE_2D,0,De,ie.width,ie.height,0,Ee,He,ie.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ge&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,De,ke[0].width,ke[0].height,ie.depth);for(let j=0,Z=ke.length;j<Z;j++)if(me=ke[j],A.format!==Sn)if(Ee!==null)if(Ge){if(F)if(A.layerUpdates.size>0){for(const se of A.layerUpdates){const Ue=me.width*me.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,se,me.width,me.height,1,Ee,me.data.slice(Ue*se,Ue*(se+1)),0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ie.depth,Ee,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,De,me.width,me.height,ie.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ie.depth,Ee,He,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,De,me.width,me.height,ie.depth,0,Ee,He,me.data)}else{Ge&&ft&&t.texStorage2D(n.TEXTURE_2D,ve,De,ke[0].width,ke[0].height);for(let j=0,Z=ke.length;j<Z;j++)me=ke[j],A.format!==Sn?Ee!==null?Ge?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,Ee,me.data):t.compressedTexImage2D(n.TEXTURE_2D,j,De,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,Ee,He,me.data):t.texImage2D(n.TEXTURE_2D,j,De,me.width,me.height,0,Ee,He,me.data)}else if(A.isDataArrayTexture)if(Ge){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,De,ie.width,ie.height,ie.depth),F)if(A.layerUpdates.size>0){let j;switch(He){case n.UNSIGNED_BYTE:switch(Ee){case n.ALPHA:j=1;break;case n.LUMINANCE:j=1;break;case n.LUMINANCE_ALPHA:j=2;break;case n.RGB:j=3;break;case n.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${Ee}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${He}.`)}const Z=ie.width*ie.height*j;for(const se of A.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ie.width,ie.height,1,Ee,He,ie.data.slice(Z*se,Z*(se+1)));A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ee,He,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,Ee,He,ie.data);else if(A.isData3DTexture)Ge?(ft&&t.texStorage3D(n.TEXTURE_3D,ve,De,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ee,He,ie.data)):t.texImage3D(n.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,Ee,He,ie.data);else if(A.isFramebufferTexture){if(ft)if(Ge)t.texStorage2D(n.TEXTURE_2D,ve,De,ie.width,ie.height);else{let j=ie.width,Z=ie.height;for(let se=0;se<ve;se++)t.texImage2D(n.TEXTURE_2D,se,De,j,Z,0,Ee,He,null),j>>=1,Z>>=1}}else if(ke.length>0){if(Ge&&ft){const j=mt(ke[0]);t.texStorage2D(n.TEXTURE_2D,ve,De,j.width,j.height)}for(let j=0,Z=ke.length;j<Z;j++)me=ke[j],Ge?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ee,He,me):t.texImage2D(n.TEXTURE_2D,j,De,Ee,He,me);A.generateMipmaps=!1}else if(Ge){if(ft){const j=mt(ie);t.texStorage2D(n.TEXTURE_2D,ve,De,j.width,j.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,He,ie)}else t.texImage2D(n.TEXTURE_2D,0,De,Ee,He,ie);g(A)&&p(J),Ce.__version=te.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function $(I,A,X){if(A.image.length!==6)return;const J=we(I,A),ee=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+X);const te=i.get(ee);if(ee.version!==te.__version||J===!0){t.activeTexture(n.TEXTURE0+X);const Ce=Qe.getPrimaries(Qe.workingColorSpace),fe=A.colorSpace===gi?null:Qe.getPrimaries(A.colorSpace),pe=A.colorSpace===gi||Ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ze=A.isCompressedTexture||A.image[0].isCompressedTexture,ie=A.image[0]&&A.image[0].isDataTexture,Ee=[];for(let Z=0;Z<6;Z++)!ze&&!ie?Ee[Z]=_(A.image[Z],!0,r.maxCubemapSize):Ee[Z]=ie?A.image[Z].image:A.image[Z],Ee[Z]=Fe(A,Ee[Z]);const He=Ee[0],De=a.convert(A.format,A.colorSpace),me=a.convert(A.type),ke=y(A.internalFormat,De,me,A.colorSpace),Ge=A.isVideoTexture!==!0,ft=te.__version===void 0||J===!0,F=ee.dataReady;let ve=M(A,He);le(n.TEXTURE_CUBE_MAP,A);let j;if(ze){Ge&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,ke,He.width,He.height);for(let Z=0;Z<6;Z++){j=Ee[Z].mipmaps;for(let se=0;se<j.length;se++){const Ue=j[se];A.format!==Sn?De!==null?Ge?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,Ue.width,Ue.height,De,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,Ue.width,Ue.height,De,me,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,ke,Ue.width,Ue.height,0,De,me,Ue.data)}}}else{if(j=A.mipmaps,Ge&&ft){j.length>0&&ve++;const Z=mt(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee[Z].width,Ee[Z].height,De,me,Ee[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,Ee[Z].width,Ee[Z].height,0,De,me,Ee[Z].data);for(let se=0;se<j.length;se++){const Ye=j[se].image[Z].image;Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,Ye.width,Ye.height,De,me,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,ke,Ye.width,Ye.height,0,De,me,Ye.data)}}else{Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,me,Ee[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,De,me,Ee[Z]);for(let se=0;se<j.length;se++){const Ue=j[se];Ge?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,De,me,Ue.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,ke,De,me,Ue.image[Z])}}}g(A)&&p(n.TEXTURE_CUBE_MAP),te.__version=ee.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function K(I,A,X,J,ee,te){const Ce=a.convert(X.format,X.colorSpace),fe=a.convert(X.type),pe=y(X.internalFormat,Ce,fe,X.colorSpace);if(!i.get(A).__hasExternalTextures){const ie=Math.max(1,A.width>>te),Ee=Math.max(1,A.height>>te);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,pe,ie,Ee,A.depth,0,Ce,fe,null):t.texImage2D(ee,te,pe,ie,Ee,0,Ce,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Xe(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,i.get(X).__webglTexture,0,Pe(A)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,i.get(X).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(I,A,X){if(n.bindRenderbuffer(n.RENDERBUFFER,I),A.depthBuffer){const J=A.depthTexture,ee=J&&J.isDepthTexture?J.type:null,te=x(A.stencilBuffer,ee),Ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Pe(A);Xe(A)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,te,A.width,A.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,te,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,te,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,I)}else{const J=A.textures;for(let ee=0;ee<J.length;ee++){const te=J[ee],Ce=a.convert(te.format,te.colorSpace),fe=a.convert(te.type),pe=y(te.internalFormat,Ce,fe,te.colorSpace),ze=Pe(A);X&&Xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,pe,A.width,A.height):Xe(A)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,pe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,pe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const J=i.get(A.depthTexture).__webglTexture,ee=Pe(A);if(A.depthTexture.format===wr)Xe(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(A.depthTexture.format===Fr)Xe(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Q(I){const A=i.get(I),X=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");O(A.__webglFramebuffer,I)}else if(X){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]=n.createRenderbuffer(),he(A.__webglDepthbuffer[J],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),he(A.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(I,A,X){const J=i.get(I);A!==void 0&&K(J.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Q(I)}function be(I){const A=I.texture,X=i.get(I),J=i.get(A);I.addEventListener("dispose",E);const ee=I.textures,te=I.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=A.version,o.memory.textures++),te){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let pe=0;pe<A.mipmaps.length;pe++)X.__webglFramebuffer[fe][pe]=n.createFramebuffer()}else X.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)X.__webglFramebuffer[fe]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let fe=0,pe=ee.length;fe<pe;fe++){const ze=i.get(ee[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Xe(I)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const pe=ee[fe];X.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const ze=a.convert(pe.format,pe.colorSpace),ie=a.convert(pe.type),Ee=y(pe.internalFormat,ze,ie,pe.colorSpace,I.isXRRenderTarget===!0),He=Pe(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Ee,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),he(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),le(n.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)K(X.__webglFramebuffer[fe][pe],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else K(X.__webglFramebuffer[fe],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(A)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,pe=ee.length;fe<pe;fe++){const ze=ee[fe],ie=i.get(ze);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),le(n.TEXTURE_2D,ze),K(X.__webglFramebuffer,I,ze,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(ze)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,J.__webglTexture),le(fe,A),A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)K(X.__webglFramebuffer[pe],I,A,n.COLOR_ATTACHMENT0,fe,pe);else K(X.__webglFramebuffer,I,A,n.COLOR_ATTACHMENT0,fe,0);g(A)&&p(fe),t.unbindTexture()}I.depthBuffer&&Q(I)}function U(I){const A=I.textures;for(let X=0,J=A.length;X<J;X++){const ee=A[X];if(g(ee)){const te=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(ee).__webglTexture;t.bindTexture(te,Ce),p(te),t.unbindTexture()}}}const ce=[],Ne=[];function et(I){if(I.samples>0){if(Xe(I)===!1){const A=I.textures,X=I.width,J=I.height;let ee=n.COLOR_BUFFER_BIT;const te=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(I),fe=A.length>1;if(fe)for(let pe=0;pe<A.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let pe=0;pe<A.length;pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[pe]);const ze=i.get(A[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,X,J,0,0,X,J,ee,n.NEAREST),l===!0&&(ce.length=0,Ne.length=0,ce.push(n.COLOR_ATTACHMENT0+pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ce.push(te),Ne.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let pe=0;pe<A.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[pe]);const ze=i.get(A[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const A=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Pe(I){return Math.min(r.maxSamples,I.samples)}function Xe(I){const A=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ve(I){const A=o.render.frame;u.get(I)!==A&&(u.set(I,A),I.update())}function Fe(I,A){const X=I.colorSpace,J=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==wi&&X!==gi&&(Qe.getTransfer(X)===ot?(J!==Sn||ee!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}function mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=ge,this.setupRenderTarget=be,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Xe}function rv(n,e){function t(i,r=gi){let a;const o=Qe.getTransfer(r);if(i===ni)return n.UNSIGNED_BYTE;if(i===Sh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Af)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wf)return n.BYTE;if(i===Tf)return n.SHORT;if(i===_s)return n.UNSIGNED_SHORT;if(i===yh)return n.INT;if(i===Ur)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===Os)return n.HALF_FLOAT;if(i===Cf)return n.ALPHA;if(i===Rf)return n.RGB;if(i===Sn)return n.RGBA;if(i===Pf)return n.LUMINANCE;if(i===Lf)return n.LUMINANCE_ALPHA;if(i===wr)return n.DEPTH_COMPONENT;if(i===Fr)return n.DEPTH_STENCIL;if(i===If)return n.RED;if(i===Eh)return n.RED_INTEGER;if(i===Df)return n.RG;if(i===wh)return n.RG_INTEGER;if(i===Th)return n.RGBA_INTEGER;if(i===oo||i===lo||i===co||i===uo)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===oo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===oo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===co)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hc||i===dc||i===fc||i===pc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===hc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===gc||i===vc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===mc||i===gc)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===vc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_c||i===xc||i===Mc||i===yc||i===Sc||i===bc||i===Ec||i===wc||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Lc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===_c)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ec)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ac)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ho||i===Ic||i===Dc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ho)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ic)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uf||i===Uc||i===Nc||i===Fc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ho)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class av extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xt extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sv={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lv=`
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

}`;class cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new $t,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fn({vertexShader:ov,fragmentShader:lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new Ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class uv extends Yi{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,v=null;const _=new cv,g=t.getContextAttributes();let p=null,y=null;const x=[],M=[],w=new ue;let E=null;const T=new xn;T.layers.enable(1),T.viewport=new Rt;const C=new xn;C.layers.enable(2),C.viewport=new Rt;const b=[T,C],S=new av;S.layers.enable(1),S.layers.enable(2);let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=x[$];return K===void 0&&(K=new Oo,x[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=x[$];return K===void 0&&(K=new Oo,x[$]=K),K.getGripSpace()},this.getHand=function($){let K=x[$];return K===void 0&&(K=new Oo,x[$]=K),K.getHandSpace()};function N($){const K=M.indexOf($.inputSource);if(K===-1)return;const he=x[K];he!==void 0&&(he.update($.inputSource,$.frame,c||o),he.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",z);for(let $=0;$<x.length;$++){const K=M[$];K!==null&&(M[$]=null,x[$].disconnect(K))}P=null,D=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,y=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",k),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new qi(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,he=null,O=null;g.depth&&(O=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Fr:wr,he=g.stencil?Nr:Ur);const Q={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:a};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Q),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new qi(d.textureWidth,d.textureHeight,{format:Sn,type:ni,depthTexture:new zh(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),ye.setContext(r),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z($){for(let K=0;K<$.removed.length;K++){const he=$.removed[K],O=M.indexOf(he);O>=0&&(M[O]=null,x[O].disconnect(he))}for(let K=0;K<$.added.length;K++){const he=$.added[K];let O=M.indexOf(he);if(O===-1){for(let ge=0;ge<x.length;ge++)if(ge>=M.length){M.push(he),O=ge;break}else if(M[ge]===null){M[ge]=he,O=ge;break}if(O===-1)break}const Q=x[O];Q&&Q.connect(he)}}const V=new L,Y=new L;function G($,K,he){V.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(he.matrixWorld);const O=V.distanceTo(Y),Q=K.projectionMatrix.elements,ge=he.projectionMatrix.elements,be=Q[14]/(Q[10]-1),U=Q[14]/(Q[10]+1),ce=(Q[9]+1)/Q[5],Ne=(Q[9]-1)/Q[5],et=(Q[8]-1)/Q[0],Pe=(ge[8]+1)/ge[0],Xe=be*et,Ve=be*Pe,Fe=O/(-et+Pe),mt=Fe*-et;K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(mt),$.translateZ(Fe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const I=be+Fe,A=U+Fe,X=Xe-mt,J=Ve+(O-mt),ee=ce*U/A*I,te=Ne*U/A*I;$.projectionMatrix.makePerspective(X,J,ee,te,I,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ne($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;_.texture!==null&&($.near=_.depthNear,$.far=_.depthFar),S.near=C.near=T.near=$.near,S.far=C.far=T.far=$.far,(P!==S.near||D!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,D=S.far,T.near=P,T.far=D,C.near=P,C.far=D,T.updateProjectionMatrix(),C.updateProjectionMatrix(),$.updateProjectionMatrix());const K=$.parent,he=S.cameras;ne(S,K);for(let O=0;O<he.length;O++)ne(he[O],K);he.length===2?G(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),oe($,S,K)};function oe($,K,he){he===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ma*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let le=null;function we($,K){if(u=K.getViewerPose(c||o),v=K,u!==null){const he=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let O=!1;he.length!==S.cameras.length&&(S.cameras.length=0,O=!0);for(let ge=0;ge<he.length;ge++){const be=he[ge];let U=null;if(f!==null)U=f.getViewport(be);else{const Ne=h.getViewSubImage(d,be);U=Ne.viewport,ge===0&&(e.setRenderTargetTextures(y,Ne.colorTexture,d.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(y))}let ce=b[ge];ce===void 0&&(ce=new xn,ce.layers.enable(ge),ce.viewport=new Rt,b[ge]=ce),ce.matrix.fromArray(be.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(be.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(U.x,U.y,U.width,U.height),ge===0&&(S.matrix.copy(ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),O===!0&&S.cameras.push(ce)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const ge=h.getDepthInformation(he[0]);ge&&ge.isValid&&ge.texture&&_.init(e,ge,r.renderState)}}for(let he=0;he<x.length;he++){const O=M[he],Q=x[he];O!==null&&Q!==void 0&&Q.update(O,K,c||o)}le&&le($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const ye=new Bh;ye.setAnimationLoop(we),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}}const Fi=new hn,hv=new st;function dv(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Nh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(g,p):p.isMeshToonMaterial?(a(g,p),h(g,p)):p.isMeshPhongMaterial?(a(g,p),u(g,p)):p.isMeshStandardMaterial?(a(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(a(g,p),v(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),_(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,M=y.envMapRotation;x&&(g.envMap.value=x,Fi.copy(M),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),g.envMapRotation.value.setFromMatrix4(hv.makeRotationFromEuler(Fi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fv(n,e,t,i){let r={},a={},o=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;i.uniformBlockBinding(y,M)}function c(y,x){let M=r[y.id];M===void 0&&(v(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",g));const w=x.program;i.updateUBOMapping(y,w);const E=e.render.frame;a[y.id]!==E&&(d(y),a[y.id]=E)}function u(y){const x=h();y.__bindingPointIndex=x;const M=n.createBuffer(),w=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function h(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],M=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,T=M.length;E<T;E++){const C=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,S=C.length;b<S;b++){const P=C[b];if(f(P,E,b,w)===!0){const D=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let z=0;z<N.length;z++){const V=N[z],Y=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,D+k,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,x,M,w){const E=y.value,T=x+"_"+M;if(w[T]===void 0)return typeof E=="number"||typeof E=="boolean"?w[T]=E:w[T]=E.clone(),!0;{const C=w[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return w[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function v(y){const x=y.uniforms;let M=0;const w=16;for(let T=0,C=x.length;T<C;T++){const b=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,P=b.length;S<P;S++){const D=b[S],N=Array.isArray(D.value)?D.value:[D.value];for(let k=0,z=N.length;k<z;k++){const V=N[k],Y=_(V),G=M%w;G!==0&&w-G<Y.boundary&&(M+=w-G),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=Y.storage}}}const E=M%w;return E>0&&(M+=w-E),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},a={}}return{bind:l,update:c,dispose:p}}class ri{constructor(e={}){const{canvas:t=op(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),v=new Int32Array(4);let _=null,g=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=yi,this.toneMappingExposure=1;const x=this;let M=!1,w=0,E=0,T=null,C=-1,b=null;const S=new Rt,P=new Rt;let D=null;const N=new xe(0);let k=0,z=t.width,V=t.height,Y=1,G=null,ne=null;const oe=new Rt(0,0,z,V),le=new Rt(0,0,z,V);let we=!1;const ye=new Pl;let $=!1,K=!1;const he=new st,O=new L,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function be(){return T===null?Y:1}let U=i;function ce(R,B){return t.getContext(R,B)}try{const R={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",Z,!1),U===null){const B="webgl2";if(U=ce(B,R),U===null)throw ce(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ne,et,Pe,Xe,Ve,Fe,mt,I,A,X,J,ee,te,Ce,fe,pe,ze,ie,Ee,He,De,me,ke,Ge;function ft(){Ne=new Sg(U),Ne.init(),me=new rv(U,Ne),et=new gg(U,Ne,e,me),Pe=new nv(U),Xe=new wg(U),Ve=new H1,Fe=new iv(U,Ne,Pe,Ve,et,me,Xe),mt=new _g(x),I=new yg(x),A=new Ip(U),ke=new pg(U,A),X=new bg(U,A,Xe,ke),J=new Ag(U,X,A,Xe),Ee=new Tg(U,et,Fe),pe=new vg(Ve),ee=new V1(x,mt,I,Ne,et,ke,pe),te=new dv(x,Ve),Ce=new W1,fe=new Z1(Ne),ie=new fg(x,mt,I,Pe,J,d,l),ze=new tv(x,J,et),Ge=new fv(U,Xe,et,Pe),He=new mg(U,Ne,Xe),De=new Eg(U,Ne,Xe),Xe.programs=ee.programs,x.capabilities=et,x.extensions=Ne,x.properties=Ve,x.renderLists=Ce,x.shadowMap=ze,x.state=Pe,x.info=Xe}ft();const F=new uv(x,U);this.xr=F,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(z,V,!1))},this.getSize=function(R){return R.set(z,V)},this.setSize=function(R,B,W=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,V=B,t.width=Math.floor(R*Y),t.height=Math.floor(B*Y),W===!0&&(t.style.width=R+"px",t.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(z*Y,V*Y).floor()},this.setDrawingBufferSize=function(R,B,W){z=R,V=B,Y=W,t.width=Math.floor(R*W),t.height=Math.floor(B*W),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,B,W,q){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,B,W,q),Pe.viewport(S.copy(oe).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(le)},this.setScissor=function(R,B,W,q){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,B,W,q),Pe.scissor(P.copy(le).multiplyScalar(Y).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(R){Pe.setScissorTest(we=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){ne=R},this.getClearColor=function(R){return R.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(R=!0,B=!0,W=!0){let q=0;if(R){let H=!1;if(T!==null){const ae=T.texture.format;H=ae===Th||ae===wh||ae===Eh}if(H){const ae=T.texture.type,_e=ae===ni||ae===Ur||ae===_s||ae===Nr||ae===Sh||ae===bh,Me=ie.getClearColor(),Se=ie.getClearAlpha(),Le=Me.r,Ie=Me.g,Re=Me.b;_e?(f[0]=Le,f[1]=Ie,f[2]=Re,f[3]=Se,U.clearBufferuiv(U.COLOR,0,f)):(v[0]=Le,v[1]=Ie,v[2]=Re,v[3]=Se,U.clearBufferiv(U.COLOR,0,v))}else q|=U.COLOR_BUFFER_BIT}B&&(q|=U.DEPTH_BUFFER_BIT),W&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Ce.dispose(),fe.dispose(),Ve.dispose(),mt.dispose(),I.dispose(),J.dispose(),ke.dispose(),Ge.dispose(),ee.dispose(),F.dispose(),F.removeEventListener("sessionstart",wn),F.removeEventListener("sessionend",Tn),Ri.stop()};function ve(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Xe.autoReset,B=ze.enabled,W=ze.autoUpdate,q=ze.needsUpdate,H=ze.type;ft(),Xe.autoReset=R,ze.enabled=B,ze.autoUpdate=W,ze.needsUpdate=q,ze.type=H}function Z(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function se(R){const B=R.target;B.removeEventListener("dispose",se),Ue(B)}function Ue(R){Ye(R),Ve.remove(R)}function Ye(R){const B=Ve.get(R).programs;B!==void 0&&(B.forEach(function(W){ee.releaseProgram(W)}),R.isShaderMaterial&&ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,W,q,H,ae){B===null&&(B=Q);const _e=H.isMesh&&H.matrixWorld.determinant()<0,Me=Od(R,B,W,q,H);Pe.setMaterial(q,_e);let Se=W.index,Le=1;if(q.wireframe===!0){if(Se=X.getWireframeAttribute(W),Se===void 0)return;Le=2}const Ie=W.drawRange,Re=W.attributes.position;let je=Ie.start*Le,ht=(Ie.start+Ie.count)*Le;ae!==null&&(je=Math.max(je,ae.start*Le),ht=Math.min(ht,(ae.start+ae.count)*Le)),Se!==null?(je=Math.max(je,0),ht=Math.min(ht,Se.count)):Re!=null&&(je=Math.max(je,0),ht=Math.min(ht,Re.count));const dt=ht-je;if(dt<0||dt===1/0)return;ke.setup(H,q,Me,W,Se);let Qt,Ke=He;if(Se!==null&&(Qt=A.get(Se),Ke=De,Ke.setIndex(Qt)),H.isMesh)q.wireframe===!0?(Pe.setLineWidth(q.wireframeLinewidth*be()),Ke.setMode(U.LINES)):Ke.setMode(U.TRIANGLES);else if(H.isLine){let Te=q.linewidth;Te===void 0&&(Te=1),Pe.setLineWidth(Te*be()),H.isLineSegments?Ke.setMode(U.LINES):H.isLineLoop?Ke.setMode(U.LINE_LOOP):Ke.setMode(U.LINE_STRIP)}else H.isPoints?Ke.setMode(U.POINTS):H.isSprite&&Ke.setMode(U.TRIANGLES);if(H.isBatchedMesh)H._multiDrawInstances!==null?Ke.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances):Ke.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Ke.renderInstances(je,dt,H.count);else if(W.isInstancedBufferGeometry){const Te=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,zt=Math.min(W.instanceCount,Te);Ke.renderInstances(je,dt,zt)}else Ke.render(je,dt)};function pt(R,B,W){R.transparent===!0&&R.side===ut&&R.forceSinglePass===!1?(R.side=Yt,R.needsUpdate=!0,Aa(R,B,W),R.side=bi,R.needsUpdate=!0,Aa(R,B,W),R.side=ut):Aa(R,B,W)}this.compile=function(R,B,W=null){W===null&&(W=R),g=fe.get(W),g.init(B),y.push(g),W.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),R!==W&&R.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const q=new Set;return R.traverse(function(H){const ae=H.material;if(ae)if(Array.isArray(ae))for(let _e=0;_e<ae.length;_e++){const Me=ae[_e];pt(Me,W,H),q.add(Me)}else pt(ae,W,H),q.add(ae)}),y.pop(),g=null,q},this.compileAsync=function(R,B,W=null){const q=this.compile(R,B,W);return new Promise(H=>{function ae(){if(q.forEach(function(_e){Ve.get(_e).currentProgram.isReady()&&q.delete(_e)}),q.size===0){H(R);return}setTimeout(ae,10)}Ne.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let St=null;function tt(R){St&&St(R)}function wn(){Ri.stop()}function Tn(){Ri.start()}const Ri=new Bh;Ri.setAnimationLoop(tt),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(R){St=R,F.setAnimationLoop(R),R===null?Ri.stop():Ri.start()},F.addEventListener("sessionstart",wn),F.addEventListener("sessionend",Tn),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(B),B=F.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,B,T),g=fe.get(R,y.length),g.init(B),y.push(g),he.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ye.setFromProjectionMatrix(he),K=this.localClippingEnabled,$=pe.init(this.clippingPlanes,K),_=Ce.get(R,p.length),_.init(),p.push(_),F.enabled===!0&&F.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&to(ae,B,-1/0,x.sortObjects)}to(R,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,ne),ge=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,ge&&ie.addToRenderList(_,R),this.info.render.frame++,$===!0&&pe.beginShadows();const W=g.state.shadowsArray;ze.render(W,R,B),$===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=_.opaque,H=_.transmissive;if(g.setupLights(),B.isArrayCamera){const ae=B.cameras;if(H.length>0)for(let _e=0,Me=ae.length;_e<Me;_e++){const Se=ae[_e];ic(q,H,R,Se)}ge&&ie.render(R);for(let _e=0,Me=ae.length;_e<Me;_e++){const Se=ae[_e];nc(_,R,Se,Se.viewport)}}else H.length>0&&ic(q,H,R,B),ge&&ie.render(R),nc(_,R,B);T!==null&&(Fe.updateMultisampleRenderTarget(T),Fe.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(x,R,B),ke.resetDefaultState(),C=-1,b=null,y.pop(),y.length>0?(g=y[y.length-1],$===!0&&pe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function to(R,B,W,q){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ye.intersectsSprite(R)){q&&O.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const _e=J.update(R),Me=R.material;Me.visible&&_.push(R,_e,Me,W,O.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ye.intersectsObject(R))){const _e=J.update(R),Me=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),O.copy(R.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),O.copy(_e.boundingSphere.center)),O.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(Me)){const Se=_e.groups;for(let Le=0,Ie=Se.length;Le<Ie;Le++){const Re=Se[Le],je=Me[Re.materialIndex];je&&je.visible&&_.push(R,_e,je,W,O.z,Re)}}else Me.visible&&_.push(R,_e,Me,W,O.z,null)}}const ae=R.children;for(let _e=0,Me=ae.length;_e<Me;_e++)to(ae[_e],B,W,q)}function nc(R,B,W,q){const H=R.opaque,ae=R.transmissive,_e=R.transparent;g.setupLightsView(W),$===!0&&pe.setGlobalState(x.clippingPlanes,W),q&&Pe.viewport(S.copy(q)),H.length>0&&Ta(H,B,W),ae.length>0&&Ta(ae,B,W),_e.length>0&&Ta(_e,B,W),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function ic(R,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new qi(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Os:ni,minFilter:Hi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ae=g.state.transmissionRenderTarget[q.id],_e=q.viewport||S;ae.setSize(_e.z,_e.w);const Me=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(N),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),ge?ie.render(W):x.clear();const Se=x.toneMapping;x.toneMapping=yi;const Le=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),$===!0&&pe.setGlobalState(x.clippingPlanes,q),Ta(R,W,q),Fe.updateMultisampleRenderTarget(ae),Fe.updateRenderTargetMipmap(ae),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Re=0,je=B.length;Re<je;Re++){const ht=B[Re],dt=ht.object,Qt=ht.geometry,Ke=ht.material,Te=ht.group;if(Ke.side===ut&&dt.layers.test(q.layers)){const zt=Ke.side;Ke.side=Yt,Ke.needsUpdate=!0,rc(dt,W,q,Qt,Ke,Te),Ke.side=zt,Ke.needsUpdate=!0,Ie=!0}}Ie===!0&&(Fe.updateMultisampleRenderTarget(ae),Fe.updateRenderTargetMipmap(ae))}x.setRenderTarget(Me),x.setClearColor(N,k),Le!==void 0&&(q.viewport=Le),x.toneMapping=Se}function Ta(R,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ae=R.length;H<ae;H++){const _e=R[H],Me=_e.object,Se=_e.geometry,Le=q===null?_e.material:q,Ie=_e.group;Me.layers.test(W.layers)&&rc(Me,B,W,Se,Le,Ie)}}function rc(R,B,W,q,H,ae){R.onBeforeRender(x,B,W,q,H,ae),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(x,B,W,q,R,ae),H.transparent===!0&&H.side===ut&&H.forceSinglePass===!1?(H.side=Yt,H.needsUpdate=!0,x.renderBufferDirect(W,B,q,H,R,ae),H.side=bi,H.needsUpdate=!0,x.renderBufferDirect(W,B,q,H,R,ae),H.side=ut):x.renderBufferDirect(W,B,q,H,R,ae),R.onAfterRender(x,B,W,q,H,ae)}function Aa(R,B,W){B.isScene!==!0&&(B=Q);const q=Ve.get(R),H=g.state.lights,ae=g.state.shadowsArray,_e=H.state.version,Me=ee.getParameters(R,H.state,ae,B,W),Se=ee.getProgramCacheKey(Me);let Le=q.programs;q.environment=R.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(R.isMeshStandardMaterial?I:mt).get(R.envMap||q.environment),q.envMapRotation=q.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Le===void 0&&(R.addEventListener("dispose",se),Le=new Map,q.programs=Le);let Ie=Le.get(Se);if(Ie!==void 0){if(q.currentProgram===Ie&&q.lightsStateVersion===_e)return sc(R,Me),Ie}else Me.uniforms=ee.getUniforms(R),R.onBuild(W,Me,x),R.onBeforeCompile(Me,x),Ie=ee.acquireProgram(Me,Se),Le.set(Se,Ie),q.uniforms=Me.uniforms;const Re=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Re.clippingPlanes=pe.uniform),sc(R,Me),q.needsLights=zd(R),q.lightsStateVersion=_e,q.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Ie,q.uniformsList=null,Ie}function ac(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=ms.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function sc(R,B){const W=Ve.get(R);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Od(R,B,W,q,H){B.isScene!==!0&&(B=Q),Fe.resetTextureUnits();const ae=B.fog,_e=q.isMeshStandardMaterial?B.environment:null,Me=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:wi,Se=(q.isMeshStandardMaterial?I:mt).get(q.envMap||_e),Le=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color;let dt=yi;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(dt=x.toneMapping);const Qt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ke=Qt!==void 0?Qt.length:0,Te=Ve.get(q),zt=g.state.lights;if($===!0&&(K===!0||R!==b)){const rn=R===b&&q.id===C;pe.setState(q,R,rn)}let nt=!1;q.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==zt.state.version||Te.outputColorSpace!==Me||H.isBatchedMesh&&Te.batching===!1||!H.isBatchedMesh&&Te.batching===!0||H.isBatchedMesh&&Te.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Te.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||H.isInstancedMesh&&Te.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Te.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Te.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Te.instancingMorph===!1&&H.morphTexture!==null||Te.envMap!==Se||q.fog===!0&&Te.fog!==ae||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==pe.numPlanes||Te.numIntersection!==pe.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==Ie||Te.morphTargets!==Re||Te.morphNormals!==je||Te.morphColors!==ht||Te.toneMapping!==dt||Te.morphTargetsCount!==Ke)&&(nt=!0):(nt=!0,Te.__version=q.version);let Hn=Te.currentProgram;nt===!0&&(Hn=Aa(q,B,H));let Ca=!1,Pi=!1,no=!1;const bt=Hn.getUniforms(),oi=Te.uniforms;if(Pe.useProgram(Hn.program)&&(Ca=!0,Pi=!0,no=!0),q.id!==C&&(C=q.id,Pi=!0),Ca||b!==R){bt.setValue(U,"projectionMatrix",R.projectionMatrix),bt.setValue(U,"viewMatrix",R.matrixWorldInverse);const rn=bt.map.cameraPosition;rn!==void 0&&rn.setValue(U,O.setFromMatrixPosition(R.matrixWorld)),et.logarithmicDepthBuffer&&bt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&bt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Pi=!0,no=!0)}if(H.isSkinnedMesh){bt.setOptional(U,H,"bindMatrix"),bt.setOptional(U,H,"bindMatrixInverse");const rn=H.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),bt.setValue(U,"boneTexture",rn.boneTexture,Fe))}H.isBatchedMesh&&(bt.setOptional(U,H,"batchingTexture"),bt.setValue(U,"batchingTexture",H._matricesTexture,Fe),bt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(U,"batchingColorTexture",H._colorsTexture,Fe));const io=W.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&Ee.update(H,W,Hn),(Pi||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,bt.setValue(U,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(oi.envMap.value=Se,oi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(oi.envMapIntensity.value=B.environmentIntensity),Pi&&(bt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&Bd(oi,no),ae&&q.fog===!0&&te.refreshFogUniforms(oi,ae),te.refreshMaterialUniforms(oi,q,Y,V,g.state.transmissionRenderTarget[R.id]),ms.upload(U,ac(Te),oi,Fe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ms.upload(U,ac(Te),oi,Fe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&bt.setValue(U,"center",H.center),bt.setValue(U,"modelViewMatrix",H.modelViewMatrix),bt.setValue(U,"normalMatrix",H.normalMatrix),bt.setValue(U,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const rn=q.uniformsGroups;for(let ro=0,kd=rn.length;ro<kd;ro++){const oc=rn[ro];Ge.update(oc,Hn),Ge.bind(oc,Hn)}}return Hn}function Bd(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function zd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,B,W){Ve.get(R.texture).__webglTexture=B,Ve.get(R.depthTexture).__webglTexture=W;const q=Ve.get(R);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){const W=Ve.get(R);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,W=0){T=R,w=B,E=W;let q=!0,H=null,ae=!1,_e=!1;if(R){const Se=Ve.get(R);Se.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(U.FRAMEBUFFER,null),q=!1):Se.__webglFramebuffer===void 0?Fe.setupRenderTarget(R):Se.__hasExternalTextures&&Fe.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);const Le=R.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(_e=!0);const Ie=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ie[B])?H=Ie[B][W]:H=Ie[B],ae=!0):R.samples>0&&Fe.useMultisampledRTT(R)===!1?H=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(Ie)?H=Ie[W]:H=Ie,S.copy(R.viewport),P.copy(R.scissor),D=R.scissorTest}else S.copy(oe).multiplyScalar(Y).floor(),P.copy(le).multiplyScalar(Y).floor(),D=we;if(Pe.bindFramebuffer(U.FRAMEBUFFER,H)&&q&&Pe.drawBuffers(R,H),Pe.viewport(S),Pe.scissor(P),Pe.setScissorTest(D),ae){const Se=Ve.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,W)}else if(_e){const Se=Ve.get(R.texture),Le=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,W||0,Le)}C=-1},this.readRenderTargetPixels=function(R,B,W,q,H,ae,_e){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){Pe.bindFramebuffer(U.FRAMEBUFFER,Me);try{const Se=R.texture,Le=Se.format,Ie=Se.type;if(!et.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-q&&W>=0&&W<=R.height-H&&U.readPixels(B,W,q,H,me.convert(Le),me.convert(Ie),ae)}finally{const Se=T!==null?Ve.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(R,B,W,q,H,ae,_e){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){Pe.bindFramebuffer(U.FRAMEBUFFER,Me);try{const Se=R.texture,Le=Se.format,Ie=Se.type;if(!et.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=R.width-q&&W>=0&&W<=R.height-H){const Re=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.bufferData(U.PIXEL_PACK_BUFFER,ae.byteLength,U.STREAM_READ),U.readPixels(B,W,q,H,me.convert(Le),me.convert(Ie),0),U.flush();const je=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await lp(U,je,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ae)}finally{U.deleteBuffer(Re),U.deleteSync(je)}return ae}}finally{const Se=T!==null?Ve.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(R,B=null,W=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,R=arguments[1]);const q=Math.pow(2,-W),H=Math.floor(R.image.width*q),ae=Math.floor(R.image.height*q),_e=B!==null?B.x:0,Me=B!==null?B.y:0;Fe.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,_e,Me,H,ae),Pe.unbindTexture()},this.copyTextureToTexture=function(R,B,W=null,q=null,H=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1],B=arguments[2],H=arguments[3]||0,W=null);let ae,_e,Me,Se,Le,Ie;W!==null?(ae=W.max.x-W.min.x,_e=W.max.y-W.min.y,Me=W.min.x,Se=W.min.y):(ae=R.image.width,_e=R.image.height,Me=0,Se=0),q!==null?(Le=q.x,Ie=q.y):(Le=0,Ie=0);const Re=me.convert(B.format),je=me.convert(B.type);Fe.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ht=U.getParameter(U.UNPACK_ROW_LENGTH),dt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Qt=U.getParameter(U.UNPACK_SKIP_PIXELS),Ke=U.getParameter(U.UNPACK_SKIP_ROWS),Te=U.getParameter(U.UNPACK_SKIP_IMAGES),zt=R.isCompressedTexture?R.mipmaps[H]:R.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,zt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,zt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Me),U.pixelStorei(U.UNPACK_SKIP_ROWS,Se),R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,Le,Ie,ae,_e,Re,je,zt.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,Le,Ie,zt.width,zt.height,Re,zt.data):U.texSubImage2D(U.TEXTURE_2D,H,Le,Ie,Re,je,zt),U.pixelStorei(U.UNPACK_ROW_LENGTH,ht),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Qt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Te),H===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(R,B,W=null,q=null,H=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,R=arguments[2],B=arguments[3],H=arguments[4]||0);let ae,_e,Me,Se,Le,Ie,Re,je,ht;const dt=R.isCompressedTexture?R.mipmaps[H]:R.image;W!==null?(ae=W.max.x-W.min.x,_e=W.max.y-W.min.y,Me=W.max.z-W.min.z,Se=W.min.x,Le=W.min.y,Ie=W.min.z):(ae=dt.width,_e=dt.height,Me=dt.depth,Se=0,Le=0,Ie=0),q!==null?(Re=q.x,je=q.y,ht=q.z):(Re=0,je=0,ht=0);const Qt=me.convert(B.format),Ke=me.convert(B.type);let Te;if(B.isData3DTexture)Fe.setTexture3D(B,0),Te=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Fe.setTexture2DArray(B,0),Te=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const zt=U.getParameter(U.UNPACK_ROW_LENGTH),nt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Hn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ca=U.getParameter(U.UNPACK_SKIP_ROWS),Pi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,dt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,Le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie),R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Te,H,Re,je,ht,ae,_e,Me,Qt,Ke,dt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,H,Re,je,ht,ae,_e,Me,Qt,dt.data):U.texSubImage3D(Te,H,Re,je,ht,ae,_e,Me,Qt,Ke,dt),U.pixelStorei(U.UNPACK_ROW_LENGTH,zt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Hn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ca),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pi),H===0&&B.generateMipmaps&&U.generateMipmap(Te),Pe.unbindTexture()},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&Fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Fe.setTextureCube(R,0):R.isData3DTexture?Fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Fe.setTexture2DArray(R,0):Fe.setTexture2D(R,0),Pe.unbindTexture()},this.resetState=function(){w=0,E=0,T=null,Pe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Tl?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===zs?"display-p3":"srgb"}}class Ai extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ol,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new L;class Es{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),a=Je(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Es(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qh extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _r;const Qr=new L,xr=new L,Mr=new L,yr=new ue,ea=new ue,Xh=new st,Ja=new L,ta=new L,Qa=new L,Au=new ue,Bo=new ue,Cu=new ue;class mv extends vt{constructor(e=new qh){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new Ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pv(t,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new Es(i,3,0,!1)),_r.setAttribute("uv",new Es(i,2,3,!1))}this.geometry=_r,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),Xh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-Mr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;es(Ja.set(-.5,-.5,0),Mr,o,xr,r,a),es(ta.set(.5,-.5,0),Mr,o,xr,r,a),es(Qa.set(.5,.5,0),Mr,o,xr,r,a),Au.set(0,0),Bo.set(1,0),Cu.set(1,1);let s=e.ray.intersectTriangle(Ja,ta,Qa,!1,Qr);if(s===null&&(es(ta.set(-.5,.5,0),Mr,o,xr,r,a),Bo.set(0,1),s=e.ray.intersectTriangle(Ja,Qa,ta,!1,Qr),s===null))return;const l=e.ray.origin.distanceTo(Qr);l<e.near||l>e.far||t.push({distance:l,point:Qr.clone(),uv:on.getInterpolation(Qr,Ja,ta,Qa,Au,Bo,Cu,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function es(n,e,t,i,r,a){yr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ea.x=a*yr.x-r*yr.y,ea.y=r*yr.x+a*yr.y):ea.copy(yr),n.copy(e),n.x+=ea.x,n.y+=ea.y,n.applyMatrix4(Xh)}class ji extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ws=new L,Ts=new L,Ru=new st,na=new ks,ts=new Ti,zo=new L,Pu=new L;class ga extends vt{constructor(e=new Ze,t=new ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)ws.fromBufferAttribute(t,r-1),Ts.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ws.distanceTo(Ts);e.setAttribute("lineDistance",new We(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere),ts.applyMatrix4(r),ts.radius+=a,e.ray.intersectsSphere(ts)===!1)return;Ru.copy(r).invert(),na.copy(e.ray).applyMatrix4(Ru);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=f,g=v-1;_<g;_+=c){const p=u.getX(_),y=u.getX(_+1),x=ns(this,e,na,l,p,y);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(v-1),g=u.getX(f),p=ns(this,e,na,l,_,g);p&&t.push(p)}}else{const f=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let _=f,g=v-1;_<g;_+=c){const p=ns(this,e,na,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ns(this,e,na,l,v-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function ns(n,e,t,i,r,a){const o=n.geometry.attributes.position;if(ws.fromBufferAttribute(o,r),Ts.fromBufferAttribute(o,a),t.distanceSqToSegment(ws,Ts,zo,Pu)>i)return;zo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(zo);if(!(l<e.near||l>e.far))return{distance:l,point:Pu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Lu=new L,Iu=new L;class Il extends ga{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Lu.fromBufferAttribute(t,r),Iu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Lu.distanceTo(Iu);e.setAttribute("lineDistance",new We(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gv extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Du=new st,ul=new ks,is=new Ti,rs=new L;class vv extends vt{constructor(e=new Ze,t=new gv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(r),is.radius+=a,e.ray.intersectsSphere(is)===!1)return;Du.copy(r).invert(),ul.copy(e.ray).applyMatrix4(Du);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=d,_=f;v<_;v++){const g=c.getX(v);rs.fromBufferAttribute(h,g),Uu(rs,g,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let v=d,_=f;v<_;v++)rs.fromBufferAttribute(h,v),Uu(rs,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function Uu(n,e,t,i,r,a,o){const s=ul.distanceSqToPoint(n);if(s<t){const l=new L;ul.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class Yh extends $t{constructor(e,t,i,r,a,o,s,l,c){super(e,t,i,r,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let o;t?o=t:o=e*i[a-1];let s=0,l=a-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=i[r]-o,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(a-1);const u=i[r],d=i[r+1]-u,f=(o-u)/d;return(r+f)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),l=t||(o.isVector2?new ue:new L);return l.copy(s).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,r=[],a=[],o=[],s=new L,l=new st;for(let f=0;f<=e;f++){const v=f/e;r[f]=this.getTangentAt(v,new L)}a[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),o[f]=o[f-1].clone(),s.crossVectors(r[f-1],r[f]),s.length()>Number.EPSILON){s.normalize();const v=Math.acos(Ct(r[f-1].dot(r[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(s,v))}o[f].crossVectors(r[f],a[f])}if(t===!0){let f=Math.acos(Ct(a[0].dot(a[e]),-1,1));f/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(f=-f);for(let v=1;v<=e;v++)a[v].applyMatrix4(l.makeRotationAxis(r[v],f*v)),o[v].crossVectors(r[v],a[v])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $h extends ai{constructor(e=0,t=0,i=1,r=1,a=0,o=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=l}getPoint(e,t=new ue){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);const s=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _v extends $h{constructor(e,t,i,r,a,o){super(e,t,i,i,r,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dl(){let n=0,e=0,t=0,i=0;function r(a,o,s,l){n=a,e=s,t=-3*a+3*o-2*s-l,i=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,c){r(o,s,c*(s-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,c,u,h){let d=(o-a)/c-(s-a)/(c+u)+(s-o)/u,f=(s-o)/u-(l-o)/(u+h)+(l-s)/h;d*=u,f*=u,r(o,s,d,f)},calc:function(a){const o=a*a,s=o*a;return n+e*a+t*o+i*s}}}const as=new L,ko=new Dl,Vo=new Dl,Ho=new Dl;class jh extends ai{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){const i=t,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let s=Math.floor(o),l=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:l===0&&s===a-1&&(s=a-2,l=1);let c,u;this.closed||s>0?c=r[(s-1)%a]:(as.subVectors(r[0],r[1]).add(r[0]),c=as);const h=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(as.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=as),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),v<1e-4&&(v=_),g<1e-4&&(g=_),ko.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,_,g),Vo.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,_,g),Ho.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,_,g)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Vo.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ho.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(ko.calc(l),Vo.calc(l),Ho.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nu(n,e,t,i,r){const a=(i-e)*.5,o=(r-t)*.5,s=n*n,l=n*s;return(2*t-2*i+a+o)*l+(-3*t+3*i-2*a-o)*s+a*n+t}function xv(n,e){const t=1-n;return t*t*e}function Mv(n,e){return 2*(1-n)*n*e}function yv(n,e){return n*n*e}function oa(n,e,t,i){return xv(n,e)+Mv(n,t)+yv(n,i)}function Sv(n,e){const t=1-n;return t*t*t*e}function bv(n,e){const t=1-n;return 3*t*t*n*e}function Ev(n,e){return 3*(1-n)*n*n*e}function wv(n,e){return n*n*n*e}function la(n,e,t,i,r){return Sv(n,e)+bv(n,t)+Ev(n,i)+wv(n,r)}class Tv extends ai{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(la(e,r.x,a.x,o.x,s.x),la(e,r.y,a.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Av extends ai{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(la(e,r.x,a.x,o.x,s.x),la(e,r.y,a.y,o.y,s.y),la(e,r.z,a.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cv extends ai{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rv extends ai{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pv extends ai{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(oa(e,r.x,a.x,o.x),oa(e,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zh extends ai{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(oa(e,r.x,a.x,o.x),oa(e,r.y,a.y,o.y),oa(e,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lv extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,r=this.points,a=(r.length-1)*e,o=Math.floor(a),s=a-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Nu(s,l.x,c.x,u.x,h.x),Nu(s,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var Iv=Object.freeze({__proto__:null,ArcCurve:_v,CatmullRomCurve3:jh,CubicBezierCurve:Tv,CubicBezierCurve3:Av,EllipseCurve:$h,LineCurve:Cv,LineCurve3:Rv,QuadraticBezierCurve:Pv,QuadraticBezierCurve3:Zh,SplineCurve:Lv});class Wr extends Ze{constructor(e=1,t=1,i=1,r=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],h=[],d=[],f=[];let v=0;const _=[],g=i/2;let p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function y(){const M=new L,w=new L;let E=0;const T=(t-e)/i;for(let C=0;C<=a;C++){const b=[],S=C/a,P=S*(t-e)+e;for(let D=0;D<=r;D++){const N=D/r,k=N*l+s,z=Math.sin(k),V=Math.cos(k);w.x=P*z,w.y=-S*i+g,w.z=P*V,h.push(w.x,w.y,w.z),M.set(z,T,V).normalize(),d.push(M.x,M.y,M.z),f.push(N,1-S),b.push(v++)}_.push(b)}for(let C=0;C<r;C++)for(let b=0;b<a;b++){const S=_[b][C],P=_[b+1][C],D=_[b+1][C+1],N=_[b][C+1];u.push(S,P,N),u.push(P,D,N),E+=6}c.addGroup(p,E,0),p+=E}function x(M){const w=v,E=new ue,T=new L;let C=0;const b=M===!0?e:t,S=M===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),v++;const P=v;for(let D=0;D<=r;D++){const k=D/r*l+s,z=Math.cos(k),V=Math.sin(k);T.x=b*V,T.y=g*S,T.z=b*z,h.push(T.x,T.y,T.z),d.push(0,S,0),E.x=z*.5+.5,E.y=V*.5*S+.5,f.push(E.x,E.y),v++}for(let D=0;D<r;D++){const N=w+D,k=P+D;M===!0?u.push(k,k+1,N):u.push(k+1,k,N),C+=3}c.addGroup(p,C,M===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ul extends Wr{constructor(e=1,t=1,i=32,r=1,a=!1,o=0,s=Math.PI*2){super(0,e,t,i,r,a,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(e){return new Ul(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ss=new L,os=new L,Go=new L,ls=new on;class Dv extends Ze{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(Tr*t),o=e.getIndex(),s=e.getAttribute("position"),l=o?o.count:s.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:g,c:p}=ls;if(_.fromBufferAttribute(s,c[0]),g.fromBufferAttribute(s,c[1]),p.fromBufferAttribute(s,c[2]),ls.getNormal(Go),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const x=(y+1)%3,M=h[y],w=h[x],E=ls[u[y]],T=ls[u[x]],C=`${M}_${w}`,b=`${w}_${M}`;b in d&&d[b]?(Go.dot(d[b].normal)<=a&&(f.push(E.x,E.y,E.z),f.push(T.x,T.y,T.z)),d[b]=null):C in d||(d[C]={index0:c[y],index1:c[x],normal:Go.clone()})}}for(const v in d)if(d[v]){const{index0:_,index1:g}=d[v];ss.fromBufferAttribute(s,_),os.fromBufferAttribute(s,g),f.push(ss.x,ss.y,ss.z),f.push(os.x,os.y,os.z)}this.setAttribute("position",new We(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Hs extends Ze{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const u=[],h=new L,d=new L,f=[],v=[],_=[],g=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const E=w/t;h.x=-e*Math.cos(r+E*a)*Math.sin(o+x*s),h.y=e*Math.cos(o+x*s),h.z=e*Math.sin(r+E*a)*Math.sin(o+x*s),v.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(E+M,1-x),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const x=u[p][y+1],M=u[p][y],w=u[p+1][y],E=u[p+1][y+1];(p!==0||o>0)&&f.push(x,M,E),(p!==i-1||l<Math.PI)&&f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new We(v,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nl extends Ze{constructor(e=new Zh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};const o=e.computeFrenetFrames(t,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const s=new L,l=new L,c=new ue;let u=new L;const h=[],d=[],f=[],v=[];_(),this.setIndex(v),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function _(){for(let x=0;x<t;x++)g(x);g(a===!1?t:0),y(),p()}function g(x){u=e.getPointAt(x/t,u);const M=o.normals[x],w=o.binormals[x];for(let E=0;E<=r;E++){const T=E/r*Math.PI*2,C=Math.sin(T),b=-Math.cos(T);l.x=b*M.x+C*w.x,l.y=b*M.y+C*w.y,l.z=b*M.z+C*w.z,l.normalize(),d.push(l.x,l.y,l.z),s.x=u.x+i*l.x,s.y=u.y+i*l.y,s.z=u.z+i*l.z,h.push(s.x,s.y,s.z)}}function p(){for(let x=1;x<=t;x++)for(let M=1;M<=r;M++){const w=(r+1)*(x-1)+(M-1),E=(r+1)*x+(M-1),T=(r+1)*x+M,C=(r+1)*(x-1)+M;v.push(w,E,C),v.push(E,T,C)}}function y(){for(let x=0;x<=t;x++)for(let M=0;M<=r;M++)c.x=x/t,c.y=M/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Nl(new Iv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Uv extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bs,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kh extends Uv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cr extends zn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bs,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Ns,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jh extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bs,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Ns,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qh extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wo=new st,Fu=new L,Ou=new L;class Nv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pl,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fu),Ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ou),t.updateMatrixWorld(),Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fv extends Nv{constructor(){super(new En(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dn extends Qh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Fv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ci extends Qh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Bu=new st;class Ov{constructor(e,t,i=0,r=1/0){this.ray=new ks(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bu),this}intersectObject(e,t=!0,i=[]){return hl(e,this,i,t),i.sort(zu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)hl(e[r],this,i,t);return i.sort(zu),i}}function zu(n,e){return n.distance-e.distance}function hl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let o=0,s=a.length;o<s;o++)hl(a[o],e,t,!0)}}const ku=new L;let cs,qo;class Bv extends vt{constructor(e=new L(0,0,1),t=new L(0,0,0),i=1,r=16776960,a=i*.2,o=a*.2){super(),this.type="ArrowHelper",cs===void 0&&(cs=new Ze,cs.setAttribute("position",new We([0,0,0,0,1,0],3)),qo=new Wr(0,.5,1,5,1),qo.translate(0,-.5,0)),this.position.copy(t),this.line=new ga(cs,new ji({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new it(qo,new kn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ku.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ku,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);const Xo={type:"change"},Yo={type:"start"},$o={type:"end"};class zv extends Yi{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.target=new L;const a=1e-6,o=new L;let s=1,l=r.NONE,c=r.NONE,u=0,h=0,d=0;const f=new L,v=new ue,_=new ue,g=new L,p=new ue,y=new ue,x=new ue,M=new ue,w=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const O=i.domElement.getBoundingClientRect(),Q=i.domElement.ownerDocument.documentElement;i.screen.left=O.left+window.pageXOffset-Q.clientLeft,i.screen.top=O.top+window.pageYOffset-Q.clientTop,i.screen.width=O.width,i.screen.height=O.height};const T=function(){const O=new ue;return function(ge,be){return O.set((ge-i.screen.left)/i.screen.width,(be-i.screen.top)/i.screen.height),O}}(),C=function(){const O=new ue;return function(ge,be){return O.set((ge-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-be))/i.screen.width),O}}();this.rotateCamera=function(){const O=new L,Q=new Hr,ge=new L,be=new L,U=new L,ce=new L;return function(){ce.set(_.x-v.x,_.y-v.y,0);let et=ce.length();et?(f.copy(i.object.position).sub(i.target),ge.copy(f).normalize(),be.copy(i.object.up).normalize(),U.crossVectors(be,ge).normalize(),be.setLength(_.y-v.y),U.setLength(_.x-v.x),ce.copy(be.add(U)),O.crossVectors(ce,f).normalize(),et*=i.rotateSpeed,Q.setFromAxisAngle(O,et),f.applyQuaternion(Q),i.object.up.applyQuaternion(Q),g.copy(O),d=et):!i.staticMoving&&d&&(d*=Math.sqrt(1-i.dynamicDampingFactor),f.copy(i.object.position).sub(i.target),Q.setFromAxisAngle(g,d),f.applyQuaternion(Q),i.object.up.applyQuaternion(Q)),v.copy(_)}}(),this.zoomCamera=function(){let O;l===r.TOUCH_ZOOM_PAN?(O=u/h,u=h,i.object.isPerspectiveCamera?f.multiplyScalar(O):i.object.isOrthographicCamera?(i.object.zoom=zc.clamp(i.object.zoom/O,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(O=1+(y.y-p.y)*i.zoomSpeed,O!==1&&O>0&&(i.object.isPerspectiveCamera?f.multiplyScalar(O):i.object.isOrthographicCamera?(i.object.zoom=zc.clamp(i.object.zoom/O,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?p.copy(y):p.y+=(y.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const O=new ue,Q=new L,ge=new L;return function(){if(O.copy(M).sub(x),O.lengthSq()){if(i.object.isOrthographicCamera){const U=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,ce=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;O.x*=U,O.y*=ce}O.multiplyScalar(f.length()*i.panSpeed),ge.copy(f).cross(i.object.up).setLength(O.x),ge.add(Q.copy(i.object.up).setLength(O.y)),i.object.position.add(ge),i.target.add(ge),i.staticMoving?x.copy(M):x.add(O.subVectors(M,x).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(f.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,f.setLength(i.maxDistance)),p.copy(y)),f.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,f.setLength(i.minDistance)),p.copy(y)))},this.update=function(){f.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,f),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>a&&(i.dispatchEvent(Xo),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>a||s!==i.object.zoom)&&(i.dispatchEvent(Xo),o.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),f.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Xo),o.copy(i.object.position),s=i.object.zoom};function b(O){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",P)),ye(O),O.pointerType==="touch"?ne(O):z(O))}function S(O){i.enabled!==!1&&(O.pointerType==="touch"?oe(O):V(O))}function P(O){i.enabled!==!1&&(O.pointerType==="touch"?le(O):Y(),$(O),w.length===0&&(i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",P)))}function D(O){$(O)}function N(O){i.enabled!==!1&&(window.removeEventListener("keydown",N),c===r.NONE&&(O.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:O.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:O.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function k(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",N))}function z(O){if(l===r.NONE)switch(O.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(_.copy(C(O.pageX,O.pageY)),v.copy(_)):Q===r.ZOOM&&!i.noZoom?(p.copy(T(O.pageX,O.pageY)),y.copy(p)):Q===r.PAN&&!i.noPan&&(x.copy(T(O.pageX,O.pageY)),M.copy(x)),i.dispatchEvent(Yo)}function V(O){const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(v.copy(_),_.copy(C(O.pageX,O.pageY))):Q===r.ZOOM&&!i.noZoom?y.copy(T(O.pageX,O.pageY)):Q===r.PAN&&!i.noPan&&M.copy(T(O.pageX,O.pageY))}function Y(){l=r.NONE,i.dispatchEvent($o)}function G(O){if(i.enabled!==!1&&i.noZoom!==!0){switch(O.preventDefault(),O.deltaMode){case 2:p.y-=O.deltaY*.025;break;case 1:p.y-=O.deltaY*.01;break;default:p.y-=O.deltaY*25e-5;break}i.dispatchEvent(Yo),i.dispatchEvent($o)}}function ne(O){switch(K(O),w.length){case 1:l=r.TOUCH_ROTATE,_.copy(C(w[0].pageX,w[0].pageY)),v.copy(_);break;default:l=r.TOUCH_ZOOM_PAN;const Q=w[0].pageX-w[1].pageX,ge=w[0].pageY-w[1].pageY;h=u=Math.sqrt(Q*Q+ge*ge);const be=(w[0].pageX+w[1].pageX)/2,U=(w[0].pageY+w[1].pageY)/2;x.copy(T(be,U)),M.copy(x);break}i.dispatchEvent(Yo)}function oe(O){switch(K(O),w.length){case 1:v.copy(_),_.copy(C(O.pageX,O.pageY));break;default:const Q=he(O),ge=O.pageX-Q.x,be=O.pageY-Q.y;h=Math.sqrt(ge*ge+be*be);const U=(O.pageX+Q.x)/2,ce=(O.pageY+Q.y)/2;M.copy(T(U,ce));break}}function le(O){switch(w.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,_.copy(C(O.pageX,O.pageY)),v.copy(_);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let Q=0;Q<w.length;Q++)if(w[Q].pointerId!==O.pointerId){const ge=E[w[Q].pointerId];_.copy(C(ge.x,ge.y)),v.copy(_);break}break}i.dispatchEvent($o)}function we(O){i.enabled!==!1&&O.preventDefault()}function ye(O){w.push(O)}function $(O){delete E[O.pointerId];for(let Q=0;Q<w.length;Q++)if(w[Q].pointerId==O.pointerId){w.splice(Q,1);return}}function K(O){let Q=E[O.pointerId];Q===void 0&&(Q=new ue,E[O.pointerId]=Q),Q.set(O.pageX,O.pageY)}function he(O){const Q=O.pointerId===w[0].pointerId?w[1]:w[0];return E[Q.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",we),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",D),i.domElement.removeEventListener("wheel",G),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",P),window.removeEventListener("keydown",N),window.removeEventListener("keyup",k)},this.domElement.addEventListener("contextmenu",we),this.domElement.addEventListener("pointerdown",b),this.domElement.addEventListener("pointercancel",D),this.domElement.addEventListener("wheel",G,{passive:!1}),window.addEventListener("keydown",N),window.addEventListener("keyup",k),this.handleResize(),this.update()}}class ed extends it{constructor(e,t,i=!1,r=!1,a=1e4){const o=new Ze;super(o,t),this.isMarchingCubes=!0;const s=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(y){this.resolution=y,this.isolation=80,this.size=y,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const x=a*3;this.positionArray=new Float32Array(x*3);const M=new Ot(this.positionArray,3);M.setUsage(Pa),o.setAttribute("position",M),this.normalArray=new Float32Array(x*3);const w=new Ot(this.normalArray,3);if(w.setUsage(Pa),o.setAttribute("normal",w),this.enableUvs){this.uvArray=new Float32Array(x*2);const E=new Ot(this.uvArray,2);E.setUsage(Pa),o.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(x*3);const E=new Ot(this.colorArray,3);E.setUsage(Pa),o.setAttribute("color",E)}o.boundingSphere=new Ti(new L,1)};function h(y,x,M){return y+(x-y)*M}function d(y,x,M,w,E,T,C,b,S,P){const D=(M-C)/(b-C),N=s.normal_cache;l[x+0]=w+D*s.delta,l[x+1]=E,l[x+2]=T,c[x+0]=h(N[y+0],N[y+3],D),c[x+1]=h(N[y+1],N[y+4],D),c[x+2]=h(N[y+2],N[y+5],D),u[x+0]=h(s.palette[S*3+0],s.palette[P*3+0],D),u[x+1]=h(s.palette[S*3+1],s.palette[P*3+1],D),u[x+2]=h(s.palette[S*3+2],s.palette[P*3+2],D)}function f(y,x,M,w,E,T,C,b,S,P){const D=(M-C)/(b-C),N=s.normal_cache;l[x+0]=w,l[x+1]=E+D*s.delta,l[x+2]=T;const k=y+s.yd*3;c[x+0]=h(N[y+0],N[k+0],D),c[x+1]=h(N[y+1],N[k+1],D),c[x+2]=h(N[y+2],N[k+2],D),u[x+0]=h(s.palette[S*3+0],s.palette[P*3+0],D),u[x+1]=h(s.palette[S*3+1],s.palette[P*3+1],D),u[x+2]=h(s.palette[S*3+2],s.palette[P*3+2],D)}function v(y,x,M,w,E,T,C,b,S,P){const D=(M-C)/(b-C),N=s.normal_cache;l[x+0]=w,l[x+1]=E,l[x+2]=T+D*s.delta;const k=y+s.zd*3;c[x+0]=h(N[y+0],N[k+0],D),c[x+1]=h(N[y+1],N[k+1],D),c[x+2]=h(N[y+2],N[k+2],D),u[x+0]=h(s.palette[S*3+0],s.palette[P*3+0],D),u[x+1]=h(s.palette[S*3+1],s.palette[P*3+1],D),u[x+2]=h(s.palette[S*3+2],s.palette[P*3+2],D)}function _(y){const x=y*3;s.normal_cache[x]===0&&(s.normal_cache[x+0]=s.field[y-1]-s.field[y+1],s.normal_cache[x+1]=s.field[y-s.yd]-s.field[y+s.yd],s.normal_cache[x+2]=s.field[y-s.zd]-s.field[y+s.zd])}function g(y,x,M,w,E){const T=w+1,C=w+s.yd,b=w+s.zd,S=T+s.yd,P=T+s.zd,D=w+s.yd+s.zd,N=T+s.yd+s.zd;let k=0;const z=s.field[w],V=s.field[T],Y=s.field[C],G=s.field[S],ne=s.field[b],oe=s.field[P],le=s.field[D],we=s.field[N];z<E&&(k|=1),V<E&&(k|=2),Y<E&&(k|=8),G<E&&(k|=4),ne<E&&(k|=16),oe<E&&(k|=32),le<E&&(k|=128),we<E&&(k|=64);const ye=kv[k];if(ye===0)return 0;const $=s.delta,K=y+$,he=x+$,O=M+$;ye&1&&(_(w),_(T),d(w*3,0,E,y,x,M,z,V,w,T)),ye&2&&(_(T),_(S),f(T*3,3,E,K,x,M,V,G,T,S)),ye&4&&(_(C),_(S),d(C*3,6,E,y,he,M,Y,G,C,S)),ye&8&&(_(w),_(C),f(w*3,9,E,y,x,M,z,Y,w,C)),ye&16&&(_(b),_(P),d(b*3,12,E,y,x,O,ne,oe,b,P)),ye&32&&(_(P),_(N),f(P*3,15,E,K,x,O,oe,we,P,N)),ye&64&&(_(D),_(N),d(D*3,18,E,y,he,O,le,we,D,N)),ye&128&&(_(b),_(D),f(b*3,21,E,y,x,O,ne,le,b,D)),ye&256&&(_(w),_(b),v(w*3,24,E,y,x,M,z,ne,w,b)),ye&512&&(_(T),_(P),v(T*3,27,E,K,x,M,V,oe,T,P)),ye&1024&&(_(S),_(N),v(S*3,30,E,K,he,M,G,we,S,N)),ye&2048&&(_(C),_(D),v(C*3,33,E,y,he,M,Y,le,C,D)),k<<=4;let Q,ge,be,U=0,ce=0;for(;us[k+ce]!=-1;)Q=k+ce,ge=Q+1,be=Q+2,p(l,c,u,3*us[Q],3*us[ge],3*us[be]),ce+=3,U++;return U}function p(y,x,M,w,E,T){const C=s.count*3;if(s.positionArray[C+0]=y[w],s.positionArray[C+1]=y[w+1],s.positionArray[C+2]=y[w+2],s.positionArray[C+3]=y[E],s.positionArray[C+4]=y[E+1],s.positionArray[C+5]=y[E+2],s.positionArray[C+6]=y[T],s.positionArray[C+7]=y[T+1],s.positionArray[C+8]=y[T+2],s.material.flatShading===!0){const b=(x[w+0]+x[E+0]+x[T+0])/3,S=(x[w+1]+x[E+1]+x[T+1])/3,P=(x[w+2]+x[E+2]+x[T+2])/3;s.normalArray[C+0]=b,s.normalArray[C+1]=S,s.normalArray[C+2]=P,s.normalArray[C+3]=b,s.normalArray[C+4]=S,s.normalArray[C+5]=P,s.normalArray[C+6]=b,s.normalArray[C+7]=S,s.normalArray[C+8]=P}else s.normalArray[C+0]=x[w+0],s.normalArray[C+1]=x[w+1],s.normalArray[C+2]=x[w+2],s.normalArray[C+3]=x[E+0],s.normalArray[C+4]=x[E+1],s.normalArray[C+5]=x[E+2],s.normalArray[C+6]=x[T+0],s.normalArray[C+7]=x[T+1],s.normalArray[C+8]=x[T+2];if(s.enableUvs){const b=s.count*2;s.uvArray[b+0]=y[w+0],s.uvArray[b+1]=y[w+2],s.uvArray[b+2]=y[E+0],s.uvArray[b+3]=y[E+2],s.uvArray[b+4]=y[T+0],s.uvArray[b+5]=y[T+2]}s.enableColors&&(s.colorArray[C+0]=M[w+0],s.colorArray[C+1]=M[w+1],s.colorArray[C+2]=M[w+2],s.colorArray[C+3]=M[E+0],s.colorArray[C+4]=M[E+1],s.colorArray[C+5]=M[E+2],s.colorArray[C+6]=M[T+0],s.colorArray[C+7]=M[T+1],s.colorArray[C+8]=M[T+2]),s.count+=3}this.addBall=function(y,x,M,w,E,T){const C=Math.sign(w);w=Math.abs(w);const b=T!=null;let S=new xe(y,x,M);if(b)try{S=T instanceof xe?T:Array.isArray(T)?new xe(Math.min(Math.abs(T[0]),1),Math.min(Math.abs(T[1]),1),Math.min(Math.abs(T[2]),1)):new xe(T)}catch{S=new xe(y,x,M)}const P=this.size*Math.sqrt(w/E),D=M*this.size,N=x*this.size,k=y*this.size;let z=Math.floor(D-P);z<1&&(z=1);let V=Math.floor(D+P);V>this.size-1&&(V=this.size-1);let Y=Math.floor(N-P);Y<1&&(Y=1);let G=Math.floor(N+P);G>this.size-1&&(G=this.size-1);let ne=Math.floor(k-P);ne<1&&(ne=1);let oe=Math.floor(k+P);oe>this.size-1&&(oe=this.size-1);let le,we,ye,$,K,he,O,Q,ge,be,U;for(ye=z;ye<V;ye++)for(K=this.size2*ye,Q=ye/this.size-M,ge=Q*Q,we=Y;we<G;we++)for($=K+this.size*we,O=we/this.size-x,be=O*O,le=ne;le<oe;le++)if(he=le/this.size-y,U=w/(1e-6+he*he+be+ge)-E,U>0){this.field[$+le]+=U*C;const ce=Math.sqrt((le-k)*(le-k)+(we-N)*(we-N)+(ye-D)*(ye-D))/P,Ne=1-ce*ce*ce*(ce*(ce*6-15)+10);this.palette[($+le)*3+0]+=S.r*Ne,this.palette[($+le)*3+1]+=S.g*Ne,this.palette[($+le)*3+2]+=S.b*Ne}},this.addPlaneX=function(y,x){const M=this.size,w=this.yd,E=this.zd,T=this.field;let C,b,S,P,D,N,k,z=M*Math.sqrt(y/x);for(z>M&&(z=M),C=0;C<z;C++)if(N=C/M,P=N*N,D=y/(1e-4+P)-x,D>0)for(b=0;b<M;b++)for(k=C+b*w,S=0;S<M;S++)T[E*S+k]+=D},this.addPlaneY=function(y,x){const M=this.size,w=this.yd,E=this.zd,T=this.field;let C,b,S,P,D,N,k,z,V=M*Math.sqrt(y/x);for(V>M&&(V=M),b=0;b<V;b++)if(N=b/M,P=N*N,D=y/(1e-4+P)-x,D>0)for(k=b*w,C=0;C<M;C++)for(z=k+C,S=0;S<M;S++)T[E*S+z]+=D},this.addPlaneZ=function(y,x){const M=this.size,w=this.yd,E=this.zd,T=this.field;let C,b,S,P,D,N,k,z,V=M*Math.sqrt(y/x);for(V>M&&(V=M),S=0;S<V;S++)if(N=S/M,P=N*N,D=y/(1e-4+P)-x,D>0)for(k=E*S,b=0;b<M;b++)for(z=k+b*w,C=0;C<M;C++)T[z+C]+=D},this.setCell=function(y,x,M,w){const E=this.size2*M+this.size*x+y;this.field[E]=w},this.getCell=function(y,x,M){const w=this.size2*M+this.size*x+y;return this.field[w]},this.blur=function(y=1){const x=this.field,M=x.slice(),w=this.size,E=this.size2;for(let T=0;T<w;T++)for(let C=0;C<w;C++)for(let b=0;b<w;b++){const S=E*b+w*C+T;let P=M[S],D=1;for(let N=-1;N<=1;N+=2){const k=N+T;if(!(k<0||k>=w))for(let z=-1;z<=1;z+=2){const V=z+C;if(!(V<0||V>=w))for(let Y=-1;Y<=1;Y+=2){const G=Y+b;if(G<0||G>=w)continue;const ne=E*G+w*V+k,oe=M[ne];D++,P+=y*(oe-P)/D}}}x[S]=P}},this.reset=function(){for(let y=0;y<this.size3;y++)this.normal_cache[y*3]=0,this.field[y]=0,this.palette[y*3]=this.palette[y*3+1]=this.palette[y*3+2]=0},this.update=function(){this.count=0;const y=this.size-2;for(let x=1;x<y;x++){const M=this.size2*x,w=(x-this.halfsize)/this.halfsize;for(let E=1;E<y;E++){const T=M+this.size*E,C=(E-this.halfsize)/this.halfsize;for(let b=1;b<y;b++){const S=(b-this.halfsize)/this.halfsize,P=T+b;g(S,C,w,P,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>a&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const kv=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),us=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),hs=[1];function xi(n){if(n<0)return NaN;for(let e=hs.length;e<=n;e+=1)hs[e]=hs[e-1]*e;return hs[n]}function td(n,e,t){const i=Math.max(1,Math.min(6,Math.round(n))),r=Math.max(0,Math.min(i-1,Math.round(e))),a=Math.max(-r,Math.min(r,Math.round(t)));return{n:i,l:r,m:a}}function Vn(n,e,t){if(e===0)return`${n}s`;if(e===1)return`${n}${t===0?"Pz":t>0?"Px":"Py"}`;if(e===2){if(t===0)return`${n}Dz2`;if(t===1)return`${n}Dxz`;if(t===-1)return`${n}Dyz`;if(t===2)return`${n}Dx2-y2`;if(t===-2)return`${n}Dxy`}if(e===3){if(t===0)return`${n}Fz3`;if(t===1)return`${n}Fxz2`;if(t===-1)return`${n}Fyz2`;if(t===2)return`${n}Fz(x2-y2)`;if(t===-2)return`${n}Fxyz`;if(t===3)return`${n}Fx(x2-3y2)`;if(t===-3)return`${n}Fy(3x2-y2)`}if(e===4){if(t===0)return`${n}Gz4`;if(t===1)return`${n}Gxz3`;if(t===-1)return`${n}Gyz3`;if(t===2)return`${n}Gz2(x2-y2)`;if(t===-2)return`${n}Gxyz2`;if(t===3)return`${n}Gxz(x2-3y2)`;if(t===-3)return`${n}Gyz(3x2-y2)`;if(t===4)return`${n}Gx4-6x2y2+y4`;if(t===-4)return`${n}Gxy(x2-y2)`}if(e===5){if(t===0)return`${n}Hz5`;if(t===1)return`${n}Hxz4`;if(t===-1)return`${n}Hyz4`;if(t===2)return`${n}Hz3(x2-y2)`;if(t===-2)return`${n}Hxyz3`;if(t===3)return`${n}Hz(x4-6x2y2+y4)`;if(t===-3)return`${n}Hxyz(x2-y2)`;if(t===4)return`${n}Hxz(x2-y2)`;if(t===-4)return`${n}Hyz(x2-y2)`;if(t===5)return`${n}Hx(x4-10x2y2+5y4)`;if(t===-5)return`${n}Hy(5x4-10x2y2+y4)`}return`${n}${["s","P","D","F","G","H"][e]??`L${e}`}${t}`}function Vv(n,e,t){let i=0;for(let r=0;r<=n;r+=1){const a=(r%2===0?1:-1)*xi(n+e)/(xi(n-r)*xi(e+r)*xi(r));i+=a*t**r}return i}function Hv(n,e,t){const i=Math.abs(e);let r=1;if(i>0){const s=Math.sqrt(Math.max(0,1-t*t));let l=1;for(let c=1;c<=i;c+=1)r*=-l*s,l+=2}if(n===i)return r;let a=t*(2*i+1)*r;if(n===i+1)return a;let o=0;for(let s=i+2;s<=n;s+=1)o=((2*s-1)*t*a-(s+i-1)*r)/(s-i),r=a,a=o;return o}function dl(n,e,t,i){const r=Math.sin(t),a=Math.cos(t),o=Math.cos(i),s=Math.sin(i);if(n===1){const h=Math.sqrt(3/(4*Math.PI));return e===0?h*a:e>0?h*r*o:h*r*s}if(n===2){if(e===0)return Math.sqrt(5/Math.PI)/4*(3*a*a-1);if(e===1)return Math.sqrt(15/Math.PI)/2*r*a*o;if(e===-1)return Math.sqrt(15/Math.PI)/2*r*a*s;if(e===2)return Math.sqrt(15/Math.PI)/4*r*r*Math.cos(2*i);if(e===-2)return Math.sqrt(15/Math.PI)/4*r*r*Math.sin(2*i)}const l=Math.abs(e),c=Math.sqrt((2*n+1)/(4*Math.PI)*(xi(n-l)/xi(n+l))),u=Hv(n,l,Math.cos(t));return e>0?Math.sqrt(2)*c*u*Math.cos(l*i):e<0?Math.sqrt(2)*c*u*Math.sin(l*i):c*u}function Gv(n,e,t){const i=Math.abs(e);let r=1;for(let c=2;c<=2*i;c+=2)r*=(1-t*t)*((c+1)/c);let a=Math.sqrt(Math.max(0,r/2));if(n===i)return a;let o=Math.sqrt(2*i+3)*t*a;if(n===i+1)return o;let s=0,l=Math.sqrt((4*i*i+8*i+3)/(2*i+1));for(let c=i+2;c<=n;c+=1){const u=Math.sqrt((4*c*c-1)/(c*c-i*i));s=o*t*u-a*u/l,a=o,o=s,l=u}return s}function Xi(n,e,t,i){const r=2*t*i/n;return Math.sqrt((2*t/n)**3*(xi(n-e-1)/(2*n*xi(n+e))))*Math.exp(-r/2)*r**e*Vv(n-e-1,2*e+1,r)}function Bt({n,l:e,m:t,z:i},r,a,o){const s=Math.hypot(r,a,o);if(s<1e-9)return e===0?Xi(n,e,i,0)*dl(e,t,0,0):0;const l=Math.acos(o/s),c=Math.atan2(a,r);return Xi(n,e,i,s)*dl(e,t,l,c)}function jo({n,l:e,m:t,z:i},r,a,o){const s=Math.hypot(r,a),l=Math.hypot(s,o),c=l<.01?0:o/l,u=Xi(n,e,i,l)*Gv(e,t,c);let h=1/Math.sqrt(Math.PI);if(t!==0){const d=s>.001?t*Math.atan2(a,r):Math.PI/2;h*=t>0?Math.cos(d):-Math.sin(d)}return u*h}function Wv(n){return n>=7?120:n===6?100:n===5?90:n===4?80:n===3?70:n===2?60:50}function si(n,e=.8){let t=0;const i=.002;let r=0,a=0;for(;a<2e5;){const h=ds(n,r),d=ds(n,r+i/2),f=ds(n,r+i);if(t+=(h+4*d+f)/6,r+=i,a+=1,i*t>e)break}const o=r*1.5,s=Wv(n.n),c=2*Math.ceil(o)/s*s/2,u=Math.sqrt(ds(n,r)/(4*Math.PI*r*r))||1e-4;return{radius:c,iso:Math.max(1e-4,u),gridSize:s,leastRadius:o}}function ds(n,e){return e*e*Xi(n.n,n.l,n.z,e)**2}function As(n,e){return`${n-e-1} radial, ${e} angular`}function qv(n,e){const{radius:t}=e,i=Math.min(42,Math.max(24,Math.round(e.density*.58))),r=[],a=[],o=t*2/(i-1),s=t*t,l=15e4;let c=0;for(let v=0;v<i;v+=1){const _=-t+v*o;for(let g=0;g<i;g+=1){const p=-t+g*o;for(let y=0;y<i;y+=1){const x=-t+y*o;if(_*_+p*p+x*x>s||!fl(e.cutaway,_,p,x))continue;const M=Bt(n,_,p,x);c=Math.max(c,Math.abs(M))}}}const u=c||1;let h=(n.n*73856093^n.l*19349663^(n.m+8)*83492791^Math.round(t*1e3))>>>0;const d=()=>(h=1664525*h+1013904223>>>0,h/4294967296),f=Math.min(26e5,Math.max(72e4,e.density*e.density*430));for(let v=0;v<f;v+=1){const _=(d()*2-1)*t,g=(d()*2-1)*t,p=(d()*2-1)*t;if(_*_+g*g+p*p>s||!fl(e.cutaway,_,g,p))continue;const y=Bt(n,_,g,p),x=Math.min(1,(Math.abs(y)/u)**2);if(d()>x)continue;const M=y>=0?r:a;if(!(M.length/3>=l)&&(M.push(_,g,p),r.length/3>=l&&a.length/3>=l))break}return{positive:r,negative:a}}function nd(n,e){const t=e.thetaSegments??64,i=e.phiSegments??128,r=e.radius??4,a=[];let o=0;for(let l=0;l<=t;l+=1){const c=Math.PI*l/t,u=[];for(let h=0;h<=i;h+=1){const d=Math.PI*2*h/i,f=dl(n.l,n.m,c,d);u.push(f),o=Math.max(o,Math.abs(f))}a.push(u)}function s(l){const c=[],u=[],h=[],d=r/(o||1);for(let f=0;f<=t;f+=1){const v=Math.PI*f/t,_=[],g=Math.sin(v),p=Math.cos(v);for(let y=0;y<=i;y+=1){const x=Math.PI*2*y/i,M=a[f][y];if(l*M<=1e-6){_.push(-1);continue}const w=Math.abs(M)*d;_.push(c.length/3),c.push(w*g*Math.cos(x),w*g*Math.sin(x),w*p)}h.push(_)}for(let f=0;f<t;f+=1)for(let v=0;v<i;v+=1){const _=h[f][v],g=h[f+1][v],p=h[f][v+1],y=h[f+1][v+1];_>=0&&g>=0&&p>=0&&u.push(_,g,p),p>=0&&g>=0&&y>=0&&u.push(p,g,y)}return{vertices:c,indices:u}}return{positive:s(1),negative:s(-1)}}function fl(n,e,t,i){return n==="quarter"?t<=0&&i<=0:n==="eighth"?e<=0&&t<=0&&i<=0:n==="threeQuarter"?!(t>0&&i>0):!0}function id(n,e,t,i=1){const r=t.density,a=t.radius,o=a*2/r;let s=0,l=0;for(let c=0;c<r;c+=1){const u=-a+c*o;for(let h=0;h<r;h+=1){const d=-a+h*o;for(let f=0;f<r;f+=1){const v=-a+f*o,_=fl(t.cutaway,v,d,u)?i*Bt(e,v,d,u):0;n[s]=_,l=Math.max(l,Math.abs(_)),s+=1}}}return l}function Xv(n,e,t){return id(n,e,t,1)}function Yv(n,e,t,i=180){const r=[],a=e.radius;let o=0;for(let s=0;s<i;s+=1){const l=[],c=a-2*a*s/(i-1);for(let u=0;u<i;u+=1){const h=-a+2*a*u/(i-1);let d=0;t==="xoy"&&(d=Bt(n,h,c,0)),t==="xoz"&&(d=Bt(n,h,0,c)),t==="yoz"&&(d=Bt(n,0,h,c)),o=Math.max(o,Math.abs(d)),l.push(d)}r.push(l)}return{rows:r,maxAbs:o}}function $v(n,e,t,i){const a=t.radius/140;let o=0,s=i*Bt(n,0,0,0)-t.iso,l=null;for(let c=1;c<=140;c+=1){const u=c*a,h=i*Bt(n,e.x*u,e.y*u,e.z*u)-t.iso;if(s<=0&&h>=0){let d=o,f=u;for(let v=0;v<12;v+=1){const _=(d+f)/2;i*Bt(n,e.x*_,e.y*_,e.z*_)-t.iso>=0?f=_:d=_}l=f}if(s>=0&&h<=0&&l!==null){let d=o,f=u;for(let v=0;v<12;v+=1){const _=(d+f)/2;i*Bt(n,e.x*_,e.y*_,e.z*_)-t.iso>=0?d=_:f=_}l=d}o=u,s=h}return l}function jv(n,e){const t=e.thetaSegments??58,i=e.phiSegments??96;function r(a){const o=[],s=[],l=[];for(let c=0;c<=t;c+=1){const u=Math.PI*c/t,h=[],d=Math.sin(u),f=Math.cos(u);for(let v=0;v<=i;v+=1){const _=Math.PI*2*v/i,g={x:d*Math.cos(_),y:d*Math.sin(_),z:f},p=$v(n,g,e,a);p===null||!Number.isFinite(p)?h.push(-1):(h.push(o.length/3),o.push(g.x*p,g.y*p,g.z*p))}l.push(h)}for(let c=0;c<t;c+=1)for(let u=0;u<i;u+=1){const h=l[c][u],d=l[c+1][u],f=l[c+1][u+1],v=l[c][u+1];h>=0&&d>=0&&f>=0&&s.push(h,d,f),h>=0&&f>=0&&v>=0&&s.push(h,f,v)}return{vertices:o,indices:s}}return{positive:r(1),negative:r(-1)}}const m={viewer:document.querySelector("#viewer"),angularViewer:document.querySelector("#angularViewer"),projectionViewer:document.querySelector("#projectionViewer"),radialViewer:document.querySelector("#radialViewer"),viewGrid:document.querySelector(".view-grid"),mainWindow:document.querySelector(".main-window"),menuPopup:document.querySelector("#menuPopup"),menuItems:document.querySelectorAll(".menu-item"),toolRender:document.querySelector("#toolRender"),toolSave:document.querySelector("#toolSave"),toolTile:document.querySelector("#toolTile"),toolOverlap:document.querySelector("#toolOverlap"),toolAxis:document.querySelector("#toolAxis"),toolXOY:document.querySelector("#toolXOY"),toolYOZ:document.querySelector("#toolYOZ"),toolXOZ:document.querySelector("#toolXOZ"),preset:document.querySelector("#presetInput"),cosType:document.querySelector("#cosTypeInput"),sinType:document.querySelector("#sinTypeInput"),cloud:document.querySelector("#cloudInput"),positiveLobe:document.querySelector("#positiveLobeInput"),negativeLobe:document.querySelector("#negativeLobeInput"),wireframe:document.querySelector("#wireframeInput"),smooth:document.querySelector("#smoothInput"),volume:document.querySelector("#volumeInput"),projection:document.querySelector("#projectionInput"),paletteOne:document.querySelector("#paletteOneInput"),paletteTwo:document.querySelector("#paletteTwoInput"),xySlice:document.querySelector("#xySliceInput"),yzSlice:document.querySelector("#yzSliceInput"),xzSlice:document.querySelector("#xzSliceInput"),quarter:document.querySelector("#quarterInput"),eighth:document.querySelector("#eighthInput"),threeQuarter:document.querySelector("#threeQuarterInput"),radialR:document.querySelector("#radialRInput"),radialR2:document.querySelector("#radialR2Input"),radialRdf:document.querySelector("#radialRdfInput"),radialSection:document.querySelector("#radialSectionInput"),radialSide:document.querySelector("#radialSideInput"),radialCurve:document.querySelector("#radialCurveInput"),radialAxis:document.querySelector("#radialAxisInput"),relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue"),longitudeNode:document.querySelector("#longitudeNodeInput"),grid3d:document.querySelector("#grid3dInput"),desktopMatch:document.querySelector("#desktopMatchInput"),n:document.querySelector("#nInput"),l:document.querySelector("#lInput"),m:document.querySelector("#mInput"),z:document.querySelector("#zInput"),mode:document.querySelector("#modeInput"),slice:document.querySelector("#sliceInput"),node:document.querySelector("#nodeInput"),axis:document.querySelector("#axisInput"),box:document.querySelector("#boxInput"),positiveColor:document.querySelector("#positiveColorInput"),negativeColor:document.querySelector("#negativeColorInput"),backgroundColor:document.querySelector("#backgroundColorInput"),iso:document.querySelector("#isoInput"),density:document.querySelector("#densityInput"),radius:document.querySelector("#radiusInput"),boxSizeDisplay:document.querySelector("#boxSizeDisplay"),intervalValue:document.querySelector("#intervalValue"),probabilityValue:document.querySelector("#probabilityValue"),opacity:document.querySelector("#opacityInput"),isoValue:document.querySelector("#isoValue"),densityValue:document.querySelector("#densityValue"),radiusValue:document.querySelector("#radiusValue"),opacityValue:document.querySelector("#opacityValue"),renderButton:document.querySelector("#renderButton"),axisProxyButton:document.querySelector("#axisProxyButton"),presetButton:document.querySelector("#presetButton"),redrawProxyButton:document.querySelector("#redrawProxyButton"),resetCameraButton:document.querySelector("#resetCameraButton"),screenshotButton:document.querySelector("#screenshotButton"),orbitalName:document.querySelector("#orbitalName"),viewerTitle:document.querySelector("#viewerTitle"),statusText:document.querySelector("#statusText"),posCount:document.querySelector("#posCount"),negCount:document.querySelector("#negCount"),nodeText:document.querySelector("#nodeText"),sliceText:document.querySelector("#sliceText"),boxText:document.querySelector("#boxText"),isoText:document.querySelector("#isoText"),openActivityButton:document.querySelector("#openActivityButton"),annotationModeButton:document.querySelector("#annotationModeButton"),annotationToolbar:document.querySelector("#annotationToolbar"),annotationClearButton:document.querySelector("#annotationClearButton"),openSketchButton:document.querySelector("#openSketchButton"),openAnimationButton:document.querySelector("#openAnimationButton"),openFormulaButton:document.querySelector("#openFormulaButton"),openPredictButton:document.querySelector("#openPredictButton"),openChallengeButton:document.querySelector("#openChallengeButton"),sketchWindow:document.querySelector("#sketchWindow"),formulaWindow:document.querySelector("#formulaWindow"),formulaOrbitalName:document.querySelector("#formulaOrbitalName"),formulaQuantumText:document.querySelector("#formulaQuantumText"),formulaMain:document.querySelector("#formulaMain"),formulaRadialText:document.querySelector("#formulaRadialText"),formulaAngularText:document.querySelector("#formulaAngularText"),formulaVisualText:document.querySelector("#formulaVisualText"),formulaRadialNodes:document.querySelector("#formulaRadialNodes"),formulaAngularNodes:document.querySelector("#formulaAngularNodes"),formulaPhaseText:document.querySelector("#formulaPhaseText"),animationWindow:document.querySelector("#animationWindow"),animationCanvas:document.querySelector("#animationCanvas"),animationStepBadge:document.querySelector("#animationStepBadge"),animationTitle:document.querySelector("#animationTitle"),animationText:document.querySelector("#animationText"),animationProgressFill:document.querySelector("#animationProgressFill"),animationRestartButton:document.querySelector("#animationRestartButton"),animationPrevButton:document.querySelector("#animationPrevButton"),animationPlayButton:document.querySelector("#animationPlayButton"),animationNextButton:document.querySelector("#animationNextButton"),animationExportButton:document.querySelector("#animationExportButton"),activityWindow:document.querySelector("#activityWindow"),activityTitle:document.querySelector("#activityTitle"),activityModeButtons:document.querySelectorAll("[data-activity-mode]"),activityPanes:document.querySelectorAll(".activity-pane"),predictPane:document.querySelector("#predictPane"),scorePane:document.querySelector("#scorePane"),diagnosisPane:document.querySelector("#diagnosisPane"),nodesPane:document.querySelector("#nodesPane"),comparePane:document.querySelector("#comparePane"),challengePane:document.querySelector("#challengePane"),explainPane:document.querySelector("#explainPane"),tabletPane:document.querySelector("#tabletPane"),predictTarget:document.querySelector("#predictTargetInput"),startPredictButton:document.querySelector("#startPredictButton"),verifyPredictButton:document.querySelector("#verifyPredictButton"),predictPrompt:document.querySelector("#predictPrompt"),scoreCurrentButton:document.querySelector("#scoreCurrentButton"),scoreShowRubricButton:document.querySelector("#scoreShowRubricButton"),scoreResetButton:document.querySelector("#scoreResetButton"),scorePrompt:document.querySelector("#scorePrompt"),diagnoseNodesButton:document.querySelector("#diagnoseNodesButton"),diagnosePhaseButton:document.querySelector("#diagnosePhaseButton"),diagnoseProjectionButton:document.querySelector("#diagnoseProjectionButton"),diagnosisPrompt:document.querySelector("#diagnosisPrompt"),nodeRevealButton:document.querySelector("#nodeRevealButton"),nodeHideButton:document.querySelector("#nodeHideButton"),compareA:document.querySelector("#compareAInput"),compareB:document.querySelector("#compareBInput"),compareApplyButton:document.querySelector("#compareApplyButton"),compareLoadAButton:document.querySelector("#compareLoadAButton"),compareLoadBButton:document.querySelector("#compareLoadBButton"),compareAViewer:document.querySelector("#compareAViewer"),compareBViewer:document.querySelector("#compareBViewer"),compareATitle:document.querySelector("#compareATitle"),compareBTitle:document.querySelector("#compareBTitle"),compareANotes:document.querySelector("#compareANotes"),compareBNotes:document.querySelector("#compareBNotes"),compareSummary:document.querySelector("#compareSummary"),newChallengeButton:document.querySelector("#newChallengeButton"),challengeGuess:document.querySelector("#challengeGuessInput"),revealChallengeButton:document.querySelector("#revealChallengeButton"),challengePrompt:document.querySelector("#challengePrompt"),explainRestartButton:document.querySelector("#explainRestartButton"),explainPrevButton:document.querySelector("#explainPrevButton"),explainPlayButton:document.querySelector("#explainPlayButton"),explainNextButton:document.querySelector("#explainNextButton"),explainProgressFill:document.querySelector("#explainProgressFill"),explainStepBadge:document.querySelector("#explainStepBadge"),explainStepTitle:document.querySelector("#explainStepTitle"),explainStepText:document.querySelector("#explainStepText"),explainFormula:document.querySelector("#explainFormula"),explainObserveText:document.querySelector("#explainObserveText"),explainReasonText:document.querySelector("#explainReasonText"),explainHintText:document.querySelector("#explainHintText"),sketchCanvas:document.querySelector("#sketchCanvas"),sketchColor:document.querySelector("#sketchColorInput"),sketchSize:document.querySelector("#sketchSizeInput"),sketchPen:document.querySelector("#sketchPenButton"),sketchEraser:document.querySelector("#sketchEraserButton"),sketchClear:document.querySelector("#sketchClearButton"),tabletLargeButton:document.querySelector("#tabletLargeButton"),tabletRestoreButton:document.querySelector("#tabletRestoreButton"),tabletScreenshotButton:document.querySelector("#tabletScreenshotButton")},Lt=new Ai;Lt.background=new xe(1120295);function qr(n,e){const t=new zv(n,e);return t.rotateSpeed=3.2,t.zoomSpeed=1.15,t.panSpeed=.65,t.staticMoving=!1,t.dynamicDampingFactor=.12,t.noRotate=!1,t.noZoom=!1,t.noPan=!1,t}function Zo(n){return n.pointerType==="mouse"&&(n.button===2||(n.buttons&2)===2)}function _n(n){var l,c,u,h,d,f;if(!n)return;const e=n.object,t=(l=e==null?void 0:e.position)==null?void 0:l.clone(),i=(c=e==null?void 0:e.quaternion)==null?void 0:c.clone(),r=(u=e==null?void 0:e.up)==null?void 0:u.clone(),a=e==null?void 0:e.zoom,o=(h=n.target)==null?void 0:h.clone(),s=n.staticMoving;typeof n.reset=="function"&&t&&o&&(n.staticMoving=!0,n.reset(),e.position.copy(t),i&&e.quaternion.copy(i),r&&e.up.copy(r),typeof a=="number"&&(e.zoom=a),n.target.copy(o),(d=e.updateProjectionMatrix)==null||d.call(e),n.staticMoving=s),n.enabled=!0,n.noRotate=!1,n.noZoom=!1,n.noPan=!1,(f=n.handleResize)==null||f.call(n),n.update()}function ya(n,e){const t=n==null?void 0:n.querySelector("canvas");if(!t||!e)return;const i=()=>typeof e=="function"?e():e;t.addEventListener("pointerdown",r=>{if(Zo(r)){r.preventDefault(),r.stopImmediatePropagation(),_n(i());return}_n(i())},{capture:!0}),t.addEventListener("pointermove",r=>{Zo(r)&&(r.preventDefault(),r.stopImmediatePropagation())},{capture:!0}),t.addEventListener("pointerup",r=>{Zo(r)&&(r.preventDefault(),r.stopImmediatePropagation()),_n(i())},{capture:!0}),t.addEventListener("pointercancel",()=>_n(i()),{capture:!0}),t.addEventListener("lostpointercapture",()=>_n(i())),t.addEventListener("mouseenter",()=>_n(i())),t.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopImmediatePropagation(),_n(i())},{capture:!0})}const qe=new En(-5,5,5,-5,.1,1e3),fn=new ri({antialias:!0,preserveDrawingBuffer:!0});fn.setPixelRatio(Math.min(window.devicePixelRatio,2));fn.localClippingEnabled=!0;m.viewer.appendChild(fn.domElement);let Ae=qr(qe,fn.domElement);const bn=new Ai,rt=new En(-5,5,5,-5,.1,1e3),Zi=new ri({antialias:!0,preserveDrawingBuffer:!0});Zi.setPixelRatio(Math.min(window.devicePixelRatio,2));Zi.localClippingEnabled=!0;m.angularViewer.appendChild(Zi.domElement);const It=qr(rt,Zi.domElement),On=new Ai,_t=new En(-5,5,5,-5,.1,1e3);_t.up.set(0,0,1);const Ki=new ri({antialias:!0,preserveDrawingBuffer:!0});Ki.setPixelRatio(Math.min(window.devicePixelRatio,2));m.projectionViewer.appendChild(Ki.domElement);const In=qr(_t,Ki.domElement),Bn=new Ai,Pt=new En(-5,5,5,-5,.1,1e3),Xr=new ri({antialias:!0,preserveDrawingBuffer:!0});Xr.setPixelRatio(Math.min(window.devicePixelRatio,2));m.radialViewer.appendChild(Xr.domElement);const Zt=qr(Pt,Xr.domElement);ya(m.viewer,()=>Ae);ya(m.angularViewer,It);ya(m.projectionViewer,In);ya(m.radialViewer,Zt);function Rr(){_n(Ae),_n(It),_n(In),_n(Zt)}function Zv(){var t,i,r;const n=((t=Ae==null?void 0:Ae.target)==null?void 0:t.clone())??new L,e={rotateSpeed:(Ae==null?void 0:Ae.rotateSpeed)??3.2,zoomSpeed:(Ae==null?void 0:Ae.zoomSpeed)??1.15,panSpeed:(Ae==null?void 0:Ae.panSpeed)??.65,staticMoving:(Ae==null?void 0:Ae.staticMoving)??!1,dynamicDampingFactor:(Ae==null?void 0:Ae.dynamicDampingFactor)??.12,noRotate:(Ae==null?void 0:Ae.noRotate)??!1,noZoom:(Ae==null?void 0:Ae.noZoom)??!1,noPan:(Ae==null?void 0:Ae.noPan)??!1};(i=Ae==null?void 0:Ae.dispose)==null||i.call(Ae),Ae=qr(qe,fn.domElement),Object.assign(Ae,e),Ae.target.copy(n),(r=Ae.handleResize)==null||r.call(Ae),Ae.update()}const Fl=new dn(16777215,1.45);Fl.position.set(0,0,1);qe.add(Fl);qe.add(new dn(16777215,.28));Lt.add(qe);Lt.add(new Ci(16777215,.42));const Ol=new dn(16777215,1.45);Ol.position.set(0,0,1);rt.add(Ol);rt.add(new dn(16777215,.28));bn.add(rt);bn.add(new Ci(16777215,.42));const Bl=new dn(16777215,1.7);Bl.position.set(0,0,80);On.add(Bl);On.add(new Ci(16777215,.65));const zl=new dn(16777215,1.8);zl.position.set(0,-40,60);Bn.add(zl);Bn.add(new Ci(16777215,.62));for(const n of[fn,Zi,Ki,Xr])n.outputColorSpace=wt,n.toneMapping=Vr,n.toneMappingExposure=1.16;Fl.intensity=1.72;Ol.intensity=1.72;Bl.intensity=1.88;zl.intensity=1.92;const va=Gs(4.5,.2,.9);let vi=Gs(4.2,.1,.9);Lt.add(va);bn.add(vi);let Tt=null,At=null,Kn=null,Gi=null,Wi=null,Cs=null,ca=null,Rs=null,ua=null,pi=null,mi=null,ha=null,da=null,ki=null,fa=null,pa=null,sn=null,pl=null,ml=null,gl=null,vl=null,_l=null,xl=null,jn=null,vn=null,kl=1,ii=5,Kt=4,Vl=3,_a=4.5,Cn=null,Jn=null,Vt=null,yn=null,Vu="",Rn=null,Qn=null,Ht=null,Dn=null,Hu="",Pn=null,Si=null,Gt=null,Un=null,Gu="",Ln=null,Ft=null,Pr=!1;const xa=[],$e={drawing:!1,erasing:!1,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,strokes:[],currentStroke:null};function Hl(n=(e=>(e=m.backgroundColor)==null?void 0:e.value)()||"#668080"){document.documentElement.style.setProperty("--viewer-bg",n);const t=new xe(n);Lt.background=t.clone(),bn.background=t.clone(),On.background=t.clone(),Bn.background=t.clone();for(const i of xa)i.scene.background=t.clone()}function Kv(){var t;if(document.querySelector("#relationModeInput")){Object.assign(m,{relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue")});return}const n=(t=m.longitudeNode)==null?void 0:t.closest("fieldset");if(!n)return;const e=document.createElement("fieldset");e.className="relation-panel",e.innerHTML=`
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
  `,n.insertAdjacentElement("afterend",e),Object.assign(m,{relationMode:e.querySelector("#relationModeInput"),syncRotation:e.querySelector("#syncRotationInput"),scanRadius:e.querySelector("#scanRadiusInput"),scanRadiusValue:e.querySelector("#scanRadiusValue"),scanTheta:e.querySelector("#scanThetaInput"),scanThetaValue:e.querySelector("#scanThetaValue"),scanPhi:e.querySelector("#scanPhiInput"),scanPhiValue:e.querySelector("#scanPhiValue")})}Kv();Hl();const Ji=document.createElement("button");Ji.type="button";Ji.className="fullscreen-exit-button";Ji.textContent="退出全屏";Ji.hidden=!0;document.body.appendChild(Ji);function Jv(n,e,t){return Vn(n,e,t)}function rd(n,e,t){return`${n},${e},${t}`}function Qv(n){const e=[0];for(let t=1;t<=n;t+=1)e.push(t,-t);return e}function ad(n){const e=Math.max(1,Math.min(6,Math.round(n)||1)),t=[];for(let i=0;i<e;i+=1)for(const r of Qv(i))t.push({value:rd(e,i,r),label:Jv(e,i,r)});return t}function e_(n=6){const e=[];for(let t=1;t<=n;t+=1)e.push(...ad(t));return e}const Xt=e_(6);function fs(n,e,t=null){if(n){n.replaceChildren();for(const i of e){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,n.append(r)}t&&e.some(i=>i.value===t)&&(n.value=t)}}function t_(){fs(m.predictTarget,Xt,"2,1,1"),fs(m.challengeGuess,Xt,"2,1,1"),fs(m.compareA,Xt,"2,1,1"),fs(m.compareB,Xt,"3,1,1")}function n_(n=null){if(!m.preset)return;const e=n??td(Number(m.n.value),Number(m.l.value),Number(m.m.value));if(Number(m.preset.dataset.n)!==e.n){m.preset.replaceChildren();for(const i of ad(e.n)){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,m.preset.append(r)}m.preset.dataset.n=String(e.n)}m.preset.value=rd(e.n,e.l,e.m)}const re={challengeTarget:Xt[0],challengeTotal:0,challengeCorrect:0,dragWindow:null,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,explanationStep:0,explanationPlaying:!1,explanationStartedAt:0,explanationTimer:null,explanationFrame:null,animationStep:0,animationPlaying:!1,animationStartedAt:0,animationTimer:null,animationFrame:null,animationExporting:!1,annotationMode:!1,annotationDrag:null};function ct(){var e,t;const n=td(Number(m.n.value),Number(m.l.value),Number(m.m.value));return(e=m.sinType)!=null&&e.checked&&n.m>0&&(n.m=-n.m),(t=m.cosType)!=null&&t.checked&&n.m<0&&(n.m=Math.abs(n.m)),m.n.value=n.n,m.l.max=n.n-1,m.l.value=n.l,m.m.min=-n.l,m.m.max=n.l,m.m.value=Math.abs(n.m),n_(n),{...n,z:Math.max(1,Math.min(10,Number(m.z.value)||1))}}function Jt(){var r,a,o,s,l,c,u,h,d,f,v,_,g,p,y,x,M,w,E,T,C,b,S,P;const n=ct(),e=m.desktopMatch.checked?si(n):null;let t=m.slice.value;(r=m.xySlice)!=null&&r.checked&&(t="xoy"),(a=m.yzSlice)!=null&&a.checked&&(t="yoz"),(o=m.xzSlice)!=null&&o.checked&&(t="xoz"),!((s=m.xySlice)!=null&&s.checked)&&!((l=m.yzSlice)!=null&&l.checked)&&!((c=m.xzSlice)!=null&&c.checked)&&(t="none");const i={iso:Number(m.iso.value),density:Number(m.density.value),radius:Number(m.radius.value),opacity:Number(m.opacity.value),mode:(u=m.volume)!=null&&u.checked?"volume":m.mode.value,showCloud:((h=m.cloud)==null?void 0:h.checked)??!1,slice:t,showNode:m.node.checked||((d=m.longitudeNode)==null?void 0:d.checked),showAxis:m.axis.checked,showBox:m.box.checked,showPositive:((f=m.positiveLobe)==null?void 0:f.checked)??!0,showNegative:((v=m.negativeLobe)==null?void 0:v.checked)??!0,wireframe:((_=m.wireframe)==null?void 0:_.checked)??!1,smooth:((g=m.smooth)==null?void 0:g.checked)??!1,showProjection:((p=m.projection)==null?void 0:p.checked)??!1,grid3d:((y=m.grid3d)==null?void 0:y.checked)??!1,cutaway:(x=m.eighth)!=null&&x.checked?"eighth":(M=m.quarter)!=null&&M.checked?"quarter":(w=m.threeQuarter)!=null&&w.checked?"threeQuarter":"none",radialMode:(E=m.radialR)!=null&&E.checked?"R":(T=m.radialR2)!=null&&T.checked?"R2":"RDF",radialSection:((C=m.radialSection)==null?void 0:C.checked)??!1,radialSide:((b=m.radialSide)==null?void 0:b.checked)??!1,radialCurve:((S=m.radialCurve)==null?void 0:S.checked)??!0,radialAxis:((P=m.radialAxis)==null?void 0:P.checked)??!1,positiveColor:m.positiveColor.value,negativeColor:m.negativeColor.value,backgroundColor:m.backgroundColor.value,desktopMatched:!!e};return m.isoValue.value=i.iso.toFixed(4),m.densityValue.value=i.density,m.radiusValue.value=i.radius.toFixed(1),m.opacityValue.value=i.opacity.toFixed(2),m.boxSizeDisplay&&(m.boxSizeDisplay.value=(i.radius*2.4).toFixed(2)),m.intervalValue&&(m.intervalValue.value=(i.radius*2/i.density).toFixed(3)),m.probabilityValue&&(m.probabilityValue.value="0.800"),m.iso.disabled=!1,m.density.disabled=!1,m.radius.disabled=!1,i}function Yr(){if(!m.desktopMatch.checked)return;const n=si(ct()),e=Math.min(Number(m.iso.max),Math.max(Number(m.iso.min),n.iso));m.iso.value=e.toFixed(4),m.density.value=Math.min(Number(m.density.max),Math.max(Number(m.density.min),n.gridSize)),m.radius.value=Math.min(Number(m.radius.max),Math.max(Number(m.radius.min),n.radius)),Jt()}function i_(){if(!m.boxSizeDisplay)return;const n=Number(m.boxSizeDisplay.value);!Number.isFinite(n)||n<=0||(m.radius.value=Math.min(Number(m.radius.max),Math.max(Number(m.radius.min),n/2.4)),Jt())}function Ps(n,e){const t=new Ze;t.setAttribute("position",new We(n,3));const i=new Float32Array(n.length/3);for(let a=0;a<i.length;a+=1){const o=Math.sin((a+1)*12.9898)*43758.5453;i[a]=o-Math.floor(o)}t.setAttribute("seed",new Ot(i,1));const r=new Fn({uniforms:{uColor:{value:new xe(e)},uTime:{value:0},uSize:{value:2.7}},transparent:!0,depthWrite:!1,blending:el,vertexShader:`
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
    `});return new vv(t,r)}function r_(n,e,t,i){return!(n.cutaway==="quarter"&&!(t>=0&&i>=0)||n.cutaway==="eighth"&&!(e>=0&&t>=0&&i>=0)||n.cutaway==="threeQuarter"&&t>0&&i>0||n.slice==="yoz"&&e<0||n.slice==="xoz"&&t<0||n.slice==="xoy"&&i<0)}function a_(n,e){const t=Math.max(48,Math.min(96,Math.round(e.density*1.15))),i=e.radius,r=i*i,a=new Float32Array(t*t*t);let o=0,s=0;for(let w=0;w<t;w+=1){const E=-i+2*i*w/(t-1);for(let T=0;T<t;T+=1){const C=-i+2*i*T/(t-1);for(let b=0;b<t;b+=1){const S=-i+2*i*b/(t-1),P=b+t*(T+t*w);if(S*S+C*C+E*E>r||!r_(e,S,C,E))continue;const D=Bt(n,S,C,E);a[P]=D,o=Math.max(o,Math.abs(D))}}}const l=Math.max(o*.72,e.iso*2.5,1e-8),c=Math.min(.72,Math.max(.035,e.iso/l)),u=c*.82,h=c*2.6,d=new Uint8Array(t*t*t*4),f=new xe(e.positiveColor),v=new xe(e.negativeColor),_=new xe(16777215),g=(w,E,T)=>{const C=Math.max(0,Math.min(1,(T-w)/Math.max(1e-9,E-w)));return C*C*(3-2*C)};for(let w=0;w<a.length;w+=1){const E=a[w],T=E>=0?e.showPositive:e.showNegative,C=Math.min(1,Math.abs(E)/l),b=g(u,h,C),S=T?Math.pow(b,1.15)*Math.pow(C,.62)*.12:0;S>.01&&(s+=1);const P=(E>=0?f:v).clone().lerp(_,Math.max(0,1-Math.pow(C,.48))*.34),D=w*4;d[D]=Math.round(P.r*255),d[D+1]=Math.round(P.g*255),d[D+2]=Math.round(P.b*255),d[D+3]=Math.round(Math.min(1,S)*255)}const p=new Lh(d,t,t,t);p.format=Sn,p.type=ni,p.colorSpace=wt,p.minFilter=qt,p.magFilter=qt,p.unpackAlignment=1,p.needsUpdate=!0;const y=new Fn({glslVersion:ll,uniforms:{volumeMap:{value:p},cameraPos:{value:qe.position.clone()},radius:{value:i},opacityScale:{value:.7+Math.min(.45,e.opacity*.25)},steps:{value:n.n>=5?144:120}},vertexShader:`
      out vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      precision highp sampler3D;

      uniform sampler3D volumeMap;
      uniform vec3 cameraPos;
      uniform float radius;
      uniform float opacityScale;
      uniform int steps;
      in vec3 vPosition;
      out vec4 outColor;

      vec2 hitBox(vec3 origin, vec3 direction) {
        vec3 boxMin = vec3(-radius);
        vec3 boxMax = vec3(radius);
        vec3 invDir = 1.0 / direction;
        vec3 t0 = (boxMin - origin) * invDir;
        vec3 t1 = (boxMax - origin) * invDir;
        vec3 tsmaller = min(t0, t1);
        vec3 tbigger = max(t0, t1);
        float nearT = max(max(tsmaller.x, tsmaller.y), tsmaller.z);
        float farT = min(min(tbigger.x, tbigger.y), tbigger.z);
        return vec2(nearT, farT);
      }

      void main() {
        vec3 rayDir = normalize(vPosition - cameraPos);
        vec2 bounds = hitBox(cameraPos, rayDir);
        if (bounds.x > bounds.y || bounds.y < 0.0) discard;
        float startT = max(bounds.x, 0.0);
        float travel = bounds.y - startT;
        vec3 stepVec = rayDir * (travel / float(steps));
        vec3 samplePos = cameraPos + rayDir * startT;
        vec4 accum = vec4(0.0);

        for (int i = 0; i < 160; i += 1) {
          if (i >= steps) break;
          vec3 uvw = samplePos / (radius * 2.0) + vec3(0.5);
          vec4 sampleColor = texture(volumeMap, uvw);
          float alpha = sampleColor.a * opacityScale;
          sampleColor.rgb *= 1.16;
          accum.rgb += (1.0 - accum.a) * alpha * sampleColor.rgb;
          accum.a += (1.0 - accum.a) * alpha;
          if (accum.a > 0.965) break;
          samplePos += stepVec;
        }

        if (accum.a < 0.01) discard;
        outColor = accum;
      }
    `,transparent:!0,depthWrite:!1,side:Yt});y.toneMapped=!1;const x=new $i(i*2,i*2,i*2),M=new it(x,y);return M.userData.vertexCount=s,M.userData.isVolume=!0,M}function s_(n){var e,t,i,r;for(const a of[Tt,At,Gi,Wi])a!=null&&a.isPoints&&((t=(e=a.material)==null?void 0:e.uniforms)!=null&&t.uTime)&&(a.material.uniforms.uTime.value=n);(r=(i=Kn==null?void 0:Kn.material)==null?void 0:i.uniforms)!=null&&r.cameraPos&&Kn.material.uniforms.cameraPos.value.copy(qe.position)}function Dt(n){return Number.parseInt(n.replace("#","0x"),16)}function Ml(n,e){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle=e;const r=n.length>2?34:n.length>1?44:58;i.font=`700 ${r}px Segoe UI, Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,64,64);const a=new Yh(t);a.colorSpace=wt;const o=new qh({map:a,transparent:!0,alphaTest:.2,depthTest:!0,depthWrite:!1});o.toneMapped=!1;const s=new mv(o);return s.scale.set(.68,.68,.68),s.renderOrder=20,s}function yl(n,e,t,i){const r=e.clone().sub(n),a=r.length(),o=new kn({color:i});o.toneMapped=!1;const s=new it(new Wr(t,t,a,48,1,!1),o);return s.position.copy(n).add(e).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new L(0,1,0),r.normalize()),s}function Sl(n,e,t,i,r){const a=new kn({color:r});a.toneMapped=!1;const o=new it(new Ul(i,t,96,1,!1),a);return o.position.copy(e),o.quaternion.setFromUnitVectors(new L(0,1,0),n.clone().normalize()),o}function Gs(n,e=.2,t=.9){const i=new xt,r=n*t,a=n*.02,o=r*.1,s=a*3,l=[{dir:new L(1,0,0),color:16711680,label:"x",labelColor:"#ff0000"},{dir:new L(0,1,0),color:47400,label:"y",labelColor:"#00e63a"},{dir:new L(0,0,1),color:15785216,label:"z",labelColor:"#fff000"}];for(const c of l){const u=c.dir.clone().multiplyScalar(-r),h=c.dir.clone().multiplyScalar(r);i.add(yl(u,h,a,c.color)),i.add(Sl(c.dir,c.dir.clone().multiplyScalar(r*1.01),o,s,c.color));const d=Ml(c.label,c.labelColor);c.label==="x"&&d.position.set(r*1.2,-e,0),c.label==="y"&&d.position.set(-e,r*1.2,0),c.label==="z"&&d.position.set(-e,-e,r*1.2),i.add(d)}return i}function o_(n,e,t,i){const r=new xt,a=Math.max(.018,n*.006),o=n*.08,s=a*3.2,l=new L(0,0,t),c=new L(n,0,t),u=new L(0,0,t+e);r.add(yl(l,c,a,15785216)),r.add(Sl(new L(1,0,0),c,o,s,15785216)),r.add(yl(l,u,a,22527)),r.add(Sl(new L(0,0,1),u,o,s,22527));const h=Ml("r","#fff000");h.scale.setScalar(.48),h.position.set(n+o*.85,-n*.045,t),r.add(h);const d=Ml(i==="R2"?"R*R":i,"#0057ff");return d.scale.setScalar(.58),d.position.set(-n*.08,0,t+e+o*.9),r.add(d),r}function Br(n,e,t){const i=new Ze;i.setAttribute("position",new We(n.vertices,3)),i.setIndex(n.indices),i.computeVertexNormals();const r=new Jh({color:e,transparent:t<1,opacity:t,side:ut,emissive:e,emissiveIntensity:.055});return new it(i,r)}function zr(n,e){n!=null&&n.material&&(n.visible=!0,n.material.wireframe=e.wireframe&&!e.smooth,n.material.flatShading=!e.smooth,n.material.clippingPlanes=[],n.material.clipIntersection=!1,n.material.needsUpdate=!0)}function sd(n){return n.wireframe||n.smooth}function l_(n){return n==="quarter"?[new lt(new L(0,1,0),0),new lt(new L(0,0,1),0)]:n==="eighth"?[new lt(new L(1,0,0),0),new lt(new L(0,1,0),0),new lt(new L(0,0,1),0)]:n==="threeQuarter"?[new lt(new L(0,0,1),0)]:[]}function od(n){const e=l_(n.cutaway),t=Sa(n.slice);return t==="x"&&e.push(new lt(new L(1,0,0),0)),t==="y"&&e.push(new lt(new L(0,1,0),0)),t==="z"&&e.push(new lt(new L(0,0,1),0)),e}function Sa(n){return n==="yoz"?"x":n==="xoz"?"y":n==="xoy"?"z":null}function c_(n){const e=[];n.cutaway==="quarter"&&e.push("y","z"),n.cutaway==="eighth"&&e.push("x","y","z"),n.cutaway==="threeQuarter"&&e.push("y","z");const t=Sa(n.slice);return t&&e.push(t),[...new Set(e)]}function u_(n,e,t,i){const r=e._clipPlanes||od(e);if(!r.length)return n;e._capFilter,n.updateMatrixWorld(!0);const a=n.geometry.getAttribute("position"),o=n.geometry.index,s=[],l=o?o.count:Math.min(a.count,n.count||a.count);function c(z){return n.localToWorld(new L(a.getX(z),a.getY(z),a.getZ(z)))}const u=Math.floor(l/3);for(let z=0;z<u;z+=1){const V=o?o.getX(z*3):z*3,Y=o?o.getX(z*3+1):z*3+1,G=o?o.getX(z*3+2):z*3+2;s.push([c(V),c(Y),c(G)])}let h=s;const d=r.map(()=>[]);r.forEach((z,V)=>{const Y=[];for(const G of h){const{clipped:ne,segments:oe}=p_(G,z);ne.length>=3&&Y.push(ne),d[V].push(...oe)}h=Y});const f=[],v=[],_=new xe(Dt(t));function g(z){return f.push(z.x,z.y,z.z),f.length/3-1}for(const z of h){const V=g(z[0]);for(let Y=1;Y<z.length-1;Y+=1){const G=g(z[Y]),ne=g(z[Y+1]);v.push(V,G,ne)}}const p=[],y=[],x=[],M=new Ze;M.setAttribute("position",new We(f,3)),M.setIndex(v),e.smooth&&!e.wireframe&&!e._skipSmooth&&cd(M,e),M.computeVertexNormals();const w=new Cr({color:_,emissive:_,emissiveIntensity:.08,shininess:28,specular:3355443,transparent:e.opacity<1,opacity:e.opacity,side:ut,wireframe:e.wireframe,flatShading:!e.smooth}),E=new it(M,w);if(E.userData.vertexCount=v.length,!x.length||e.wireframe)return E;const T=new Ze,C=dd(y,e.iso*1.6),b=[];for(const z of y){const V=hd(z,C);b.push(V.r,V.g,V.b)}T.setAttribute("position",new We(p,3)),T.setAttribute("color",new We(b,3)),T.setIndex(x),T.computeVertexNormals();const P=!!Sa(e.slice)||e.cutaway!=="none",D=new kn({vertexColors:!0,side:ut,transparent:!0,opacity:P?.9:.26,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});D.toneMapped=!1;const N=new it(T,D);N.renderOrder=P?3:1;const k=new xt;return k.add(E,N),k.userData.vertexCount=v.length+x.length,k}function h_(n){var t,i;let e=((t=n==null?void 0:n.userData)==null?void 0:t.vertexCount)||0;return(i=n==null?void 0:n.traverse)==null||i.call(n,r=>{var a;r!==n&&(e+=((a=r.userData)==null?void 0:a.vertexCount)||0)}),e}function d_(n,e,t,i){const r=ld(n,{...e,cutaway:"none",slice:"none"},t);return r.material&&(r.material.clippingPlanes=i,r.material.clipIntersection=!1,r.material.needsUpdate=!0),r}function Ko(n,e,t,i){const r=new xt;let a=0;for(const o of i){const s=d_(n,e,t,o.planes);s&&(r.add(s),a+=h_(s))}return r.userData.vertexCount=a,r}function f_(n,e,t,i){return e.cutaway==="quarter"?Ko(n,e,t,[{planes:[new lt(new L(0,1,0),0),new lt(new L(0,0,1),0)]}]):e.cutaway==="eighth"?Ko(n,e,t,[{planes:[new lt(new L(1,0,0),0),new lt(new L(0,1,0),0),new lt(new L(0,0,1),0)]}]):e.cutaway==="threeQuarter"?Ko(n,e,t,[{planes:[new lt(new L(0,-1,0),0)]},{planes:[new lt(new L(0,1,0),0),new lt(new L(0,0,-1),0)]}]):null}function ld(n,e,t){var x;n.updateMatrixWorld(!0);const i=n.geometry.getAttribute("position"),r=Number.isFinite(n.count)&&n.count>0?n.count:Number.POSITIVE_INFINITY,a=Number.isFinite((x=n.geometry.drawRange)==null?void 0:x.count)&&n.geometry.drawRange.count>0?n.geometry.drawRange.count:Number.POSITIVE_INFINITY,o=Math.min(i.count,r,a),s=[],l=[],c=new Map;function u(M){return Number.isFinite(M.x)&&Number.isFinite(M.y)&&Number.isFinite(M.z)}const h=Sa(e.slice);function d(M){return e.cutaway==="quarter"?(M.y>0&&(M.y=0),M.z>0&&(M.z=0)):e.cutaway==="eighth"?(M.x>0&&(M.x=0),M.y>0&&(M.y=0),M.z>0&&(M.z=0)):e.cutaway==="threeQuarter"&&M.y>0&&M.z>0&&(M.y<M.z?M.y=0:M.z=0),h==="x"&&M.x>0&&(M.x=0),h==="y"&&M.y>0&&(M.y=0),h==="z"&&M.z>0&&(M.z=0),M}function f(M,w){const E=n.localToWorld(new L(i.getX(M),i.getY(M),i.getZ(M)));if(d(E),!u(E))return-1;if(w){const C=`${Math.round(E.x*1e4)},${Math.round(E.y*1e4)},${Math.round(E.z*1e4)}`;if(c.has(C))return c.get(C);const b=s.length/3;return s.push(E.x,E.y,E.z),c.set(C,b),b}return s.push(E.x,E.y,E.z),s.length/3-1}const v=Math.floor(o/3),_=e.smooth&&!e.wireframe;for(let M=0;M<v;M+=1){const w=M*3,E=M*3+1,T=M*3+2,C=f(w,_),b=f(E,_),S=f(T,_);C>=0&&b>=0&&S>=0&&l.push(C,b,S)}const g=new Ze;g.setAttribute("position",new We(s,3)),g.setIndex(l),e.smooth&&!e.wireframe&&cd(g,e),g.computeVertexNormals();const p=n.material.clone();p.color=new xe(Dt(t)),p.emissive=new xe(Dt(t)),p.side=ut,p.wireframe=e.wireframe,p.flatShading=!e.smooth,p.clippingPlanes=[],p.needsUpdate=!0;const y=new it(g,p);return y.userData.vertexCount=o,y}function cd(n,e){const t=n.getAttribute("position"),i=n.index;if(!t||!i)return;const r=t.count,a=Array.from({length:r},()=>new Set);for(let f=0;f<i.count;f+=3){const v=i.getX(f),_=i.getX(f+1),g=i.getX(f+2);a[v].add(_).add(g),a[_].add(v).add(g),a[g].add(v).add(_)}const o=Math.max(.035,e.radius/Math.max(80,e.density*2)),s=new Uint8Array(r),l=Sa(e.slice);for(let f=0;f<r;f+=1){const v=t.getX(f),_=t.getY(f),g=t.getZ(f);e.cutaway==="quarter"&&(Math.abs(_)<o||Math.abs(g)<o)&&(s[f]=1),e.cutaway==="eighth"&&(Math.abs(v)<o||Math.abs(_)<o||Math.abs(g)<o)&&(s[f]=1),e.cutaway==="threeQuarter"&&(Math.abs(_)<o||Math.abs(g)<o)&&(s[f]=1),l==="x"&&Math.abs(v)<o&&(s[f]=1),l==="y"&&Math.abs(_)<o&&(s[f]=1),l==="z"&&Math.abs(g)<o&&(s[f]=1)}const c=new Float32Array(t.array),u=new Float32Array(c.length),h=e.cutaway==="none"?10:7,d=e.cutaway==="none"?.16:.1;for(let f=0;f<h;f+=1){u.set(c);for(let v=0;v<r;v+=1){if(s[v]||a[v].size<3)continue;let _=0,g=0,p=0;for(const M of a[v]){const w=M*3;_+=c[w],g+=c[w+1],p+=c[w+2]}const y=a[v].size,x=v*3;u[x]=c[x]+(_/y-c[x])*d,u[x+1]=c[x+1]+(g/y-c[x+1])*d,u[x+2]=c[x+2]+(p/y-c[x+2])*d}c.set(u)}t.array.set(c),t.needsUpdate=!0}function p_(n,e){const t=[],i=[];for(let a=0;a<n.length;a+=1){const o=n[a],s=n[(a+1)%n.length],l=e.distanceToPoint(o)>=-1e-7,c=e.distanceToPoint(s)>=-1e-7;if(l&&c)t.push(s.clone());else if(l&&!c){const u=Wu(o,s,e);t.push(u),i.push(u)}else if(!l&&c){const u=Wu(o,s,e);t.push(u,s.clone()),i.push(u)}}const r=i.length===2?[[i[0],i[1]]]:[];return{clipped:t,segments:r}}function Wu(n,e,t){const i=e.clone().sub(n),r=t.normal.dot(i);if(Math.abs(r)<1e-10)return n.clone();const a=-(t.normal.dot(n)+t.constant)/r;return n.clone().add(i.multiplyScalar(Math.max(0,Math.min(1,a))))}function Ls(n,e,t,i){const r=e.cutaway!=="none"||e.slice!=="none",a=e.smooth&&!e.wireframe?Math.round(e.density*(r?3:2)):e.density,o={...e,density:Math.min(r?220:180,Math.max(e.density,a))},s=new Jh({color:Dt(i),transparent:e.opacity<1,opacity:e.opacity,side:ut,emissive:Dt(i),emissiveIntensity:.055}),l=n.n>=5?5e5:16e4,c=new ed(o.density,s,!0,!0,l);c.isolation=o.iso,c.position.set(0,0,0),c.scale.set(o.radius,o.radius,o.radius),id(c.field,n,{...o,cutaway:"none"},t),c.update();const u=f_(c,e,i);return u||(od(e).length?u_(c,e,i):ld(c,e,i))}function m_(n,e){const t=new Kh({color:15922423,roughness:.65,transparent:!0,opacity:.26,side:ut}),i=new ed(e.density,t,!0,!0,1e5);return i.isolation=0,i.scale.set(e.radius,e.radius,e.radius),Xv(i.field,n,e),i.update(),i.userData.vertexCount=i.count??0,i}function g_(n,e){return null}function ud(n){const e=new $i(n*2,n*2,n*2),t=new Dv(e),i=new ji({color:13686237,transparent:!0,opacity:.58}),r=new Il(t,i);return e.dispose(),r}function v_(n,e){const t=c_(e);if(!t.length)return null;const i=new xt;for(const r of t){const a=__(n,e,r);a&&i.add(a)}return i.children.length?i:null}function hd(n,e){const t=Math.max(0,Math.min(1,Math.abs(n)/Math.max(e,1e-12))),i=Math.pow(t,.82),r=(n>=0?1:-1)*i,a=i*i*(3-2*i),o=Xs(r);return new xe(16777215).lerp(o,a*.92)}function dd(n,e){const t=n.map(r=>Math.abs(r)).filter(r=>Number.isFinite(r)&&r>1e-12).sort((r,a)=>r-a);if(!t.length)return Math.max(e,1e-9);const i=Math.min(t.length-1,Math.floor(t.length*.82));return Math.max(e,t[i])}function __(n,e,t){const i=Math.max(512,Math.min(1024,e.density*12)),r=e.radius;function a(w,E){return t==="x"?[0,w,E]:t==="y"?[w,0,E]:[w,E,0]}function o(w,E,T){return e.cutaway==="quarter"||e.cutaway==="threeQuarter"?t==="y"?T>0:t==="z"?E>0:!1:e.cutaway==="eighth"?t==="x"?E>0&&T>0:t==="y"?w>0&&T>0:t==="z"?w>0&&E>0:!1:!0}const s=new Float32Array(i*i),l=[];for(let w=0;w<i;w+=1){const E=r-2*r*(w+.5)/i;for(let T=0;T<i;T+=1){const C=-r+2*r*(T+.5)/i,[b,S,P]=a(C,E),D=Bt(n,b,S,P);s[w*i+T]=D,o(b,S,P)&&Math.abs(D)>=e.iso*.94&&l.push(D)}}if(!l.length)return null;const c=dd(l,e.iso*2.8),u=document.createElement("canvas");u.width=i,u.height=i;const h=u.getContext("2d"),d=h.createImageData(i,i),f=e.iso*.9,v=e.iso*1.18,_=(w,E,T)=>{const C=Math.max(0,Math.min(1,(T-w)/Math.max(1e-12,E-w)));return C*C*(3-2*C)};for(let w=0;w<i;w+=1){const E=r-2*r*(w+.5)/i;for(let T=0;T<i;T+=1){const C=-r+2*r*(T+.5)/i,[b,S,P]=a(C,E),D=s[w*i+T],N=D>=0?e.showPositive:e.showNegative,k=o(b,S,P)&&N?_(f,v,Math.abs(D)):0,z=hd(D,c),V=(w*i+T)*4;d.data[V]=Math.round(z.r*255),d.data[V+1]=Math.round(z.g*255),d.data[V+2]=Math.round(z.b*255),d.data[V+3]=Math.round(k*235)}}h.putImageData(d,0,0);const g=new Yh(u);g.colorSpace=wt,g.minFilter=qt,g.magFilter=qt,g.generateMipmaps=!1;const p=new kn({map:g,side:ut,transparent:!0,opacity:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});p.toneMapped=!1;const y=new Ma(r*2,r*2,1,1),x=new it(y,p),M=r*.0015;return t==="x"?(x.rotation.set(0,Math.PI/2,0),x.position.x=-M):t==="y"?(x.rotation.set(Math.PI/2,0,0),x.position.y=-M):x.position.z=-M,x.renderOrder=4,x}function x_(){for(const n of[Tt,At,Kn,Gi,Wi,Cs,ca,Rs,ua])n&&Qi(Lt,n);Tt=null,At=null,Kn=null,Gi=null,Wi=null,Cs=null,ca=null,Rs=null,ua=null}function M_(){for(const n of[pi,mi])n&&Qi(bn,n);pi=null,mi=null}function y_(n,e=!0){vi&&Qi(bn,vi),vi=Gs(n,Math.max(.08,n*.024),.9),vi.visible=e,bn.add(vi)}function S_(){for(const n of[ha,da,ki])n&&Qi(On,n);ha=null,da=null,ki=null}function fd(){for(const n of[fa,pa,sn,pl,ml])n&&Qi(Bn,n);fa=null,pa=null,sn=null,pl=null,ml=null}function Qi(n,e){n.remove(e),e.traverse(t=>{var i,r,a,o;if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const s of t.material)s.dispose();else t.material&&(t.material.map&&t.material.map.dispose(),(o=(a=(r=(i=t.material.uniforms)==null?void 0:i.volumeMap)==null?void 0:r.value)==null?void 0:a.dispose)==null||o.call(a),t.material.dispose())})}function at(){Gl();const n=ct(),e=Jt(),t=Vn(n.n,n.l,n.m);m.statusText.textContent="Calculating",m.renderButton.disabled=!0,requestAnimationFrame(()=>{var s;x_(),M_(),S_(),fd();let i=0,r=0;if(Hl(e.backgroundColor),va.visible=e.showAxis,va.scale.setScalar(Math.max(1,e.radius/4.5)),(s=m.toolAxis)==null||s.classList.toggle("active",e.showAxis),e.mode==="volume")Kn=a_(n,e),Lt.add(Kn),i=Kn.userData.vertexCount,r=0;else if(e.mode==="marching"||e.mode==="points")Tt=Ls(n,e,1,e.positiveColor),At=Ls(n,e,-1,e.negativeColor),i=Tt.userData.vertexCount,r=At.userData.vertexCount;else{const{positive:l,negative:c}=jv(n,{...e,thetaSegments:Math.max(30,e.density+18),phiSegments:Math.max(52,e.density*3)});Tt=Br(l,Dt(e.positiveColor),e.opacity),At=Br(c,Dt(e.negativeColor),e.opacity),zr(Tt,e),zr(At,e),i=l.vertices.length/3,r=c.vertices.length/3}const a=e.mode!=="volume"&&sd(e);if(Tt&&At&&(Tt.visible=e.showPositive&&a,At.visible=e.showNegative&&a,Lt.add(Tt,At)),e.showCloud){const{positive:l,negative:c}=qv(n,e);Gi=Ps(l,Dt(e.positiveColor)),Wi=Ps(c,Dt(e.negativeColor)),Gi.visible=e.showPositive,Wi.visible=e.showNegative,Lt.add(Gi,Wi),i=l.length/3,r=c.length/3}e.showNode&&As(n.n,n.l)!=="0 radial, 0 angular"&&(Cs=m_(n,e),Lt.add(Cs)),e.mode!=="volume"&&(ca=g_(),ca&&Lt.add(ca),ua=v_(n,e),ua&&Lt.add(ua)),(e.showBox||e.grid3d)&&(Rs=ud(e.radius),Lt.add(Rs)),N_(e),m.orbitalName.textContent=t,m.viewerTitle.textContent=`原子轨道  ${t}`,m.nodeText.textContent=As(n.n,n.l),m.sliceText.textContent=e.slice.toUpperCase(),m.boxText.textContent=e.radius.toFixed(2),m.isoText.textContent=e.iso.toFixed(5),m.posCount.textContent=String(i),m.negCount.textContent=String(r),m.statusText.textContent="Rendered",bd(),m.animationWindow&&!m.animationWindow.classList.contains("closed")&&kr(0),L_(n,e),j_(n,e),_d(n,e);const o=n.n>=5||n.l>=3?1.65:1.22;A_(n,e.radius*o,Math.max(Kt,w_(e))),Zv(),m.renderButton.disabled=!1,cn()})}function b_(){return Array.from(document.querySelectorAll(".view-grid > .qt-window"))}function Gl(n={}){for(const e of b_())e.classList.remove("closed"),n.restoreLayout?e.classList.remove("minimized","maximized"):e.classList.remove("minimized"),er(e)}function Ws(n=ii){const e=m.viewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(qe.left=-n*t,qe.right=n*t,qe.top=n,qe.bottom=-n):(qe.left=-n,qe.right=n,qe.top=n/t,qe.bottom=-n/t),qe.near=.1,qe.far=Math.max(1e3,n*8),qe.updateProjectionMatrix()}function Ei(n,e=90){return Math.max(e,n*2.8)}function Wl(n=ii){var t,i,r;ii=n;const e=Ei(n);qe.position.set(0,0,e),qe.lookAt(0,0,0),Ws(n),Ae.target.set(0,0,0),Ae.update(),(t=m.toolXOY)==null||t.classList.add("active"),(i=m.toolYOZ)==null||i.classList.remove("active"),(r=m.toolXOZ)==null||r.classList.remove("active")}function qs(n=Math.max(3,ii*.45)){const e=m.angularViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(rt.left=-n*t,rt.right=n*t,rt.top=n,rt.bottom=-n):(rt.left=-n,rt.right=n,rt.top=n/t,rt.bottom=-n/t),rt.near=.1,rt.far=Math.max(1e3,n*8),rt.updateProjectionMatrix()}function E_(n=4){var t;Kt=Math.max(3,n);const e=Ei(Kt,40);rt.position.set(0,0,e),rt.lookAt(0,0,0),qs(Kt),It.target.set(0,0,0),(t=It.handleResize)==null||t.call(It),It.update()}function w_(n){const e=Math.max(4,Math.min(8,n.radius*.55))*.74;return Math.max(5.8,e*1.55)}function T_(...n){var a;const e=new un,t=new un;let i=!1;for(const o of n)o&&((a=o.updateWorldMatrix)==null||a.call(o,!0,!1),t.setFromObject(o),!(!Number.isFinite(t.min.x)||!Number.isFinite(t.max.x))&&(i?e.union(t):e.copy(t),i=!0));if(!i)return 4.2;const r=new Ti;return e.getBoundingSphere(r),Math.max(.001,r.radius)}function A_(n,e,t){var o,s,l,c,u;const i=$l(n);ii=e,Kt=Math.max(3,t);const r=Ei(e),a=Ei(Kt,40);i==="yoz"?(qe.position.set(r,0,0),rt.position.set(a,0,0)):i==="xoz"?(qe.position.set(0,r,0),rt.position.set(0,a,0)):(qe.position.set(0,0,r),rt.position.set(0,0,a)),qe.lookAt(0,0,0),rt.lookAt(0,0,0),Ws(e),qs(Kt),Ae.target.set(0,0,0),It.target.set(0,0,0),(o=Ae.handleResize)==null||o.call(Ae),(s=It.handleResize)==null||s.call(It),Ae.update(),It.update(),(l=m.toolXOY)==null||l.classList.toggle("active",i==="xoy"),(c=m.toolYOZ)==null||c.classList.toggle("active",i==="yoz"),(u=m.toolXOZ)==null||u.classList.toggle("active",i==="xoz")}function pd(n=Math.max(2.5,ii*.6)){const e=m.projectionViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(_t.left=-n*t,_t.right=n*t,_t.top=n,_t.bottom=-n):(_t.left=-n,_t.right=n,_t.top=n/t,_t.bottom=-n/t),_t.near=.1,_t.far=1e3,_t.updateProjectionMatrix()}function C_(n=Math.max(3,ii*.5)){var e;Vl=n,_t.up.set(0,0,1),_t.position.set(n*.78,-n*1.18,n*.68),_t.lookAt(0,0,0),pd(n),In.target.set(0,0,0),(e=In.handleResize)==null||e.call(In),In.update()}function ql(n=4.5){const e=m.radialViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Pt.left=-n*t,Pt.right=n*t,Pt.top=n,Pt.bottom=-n):(Pt.left=-n,Pt.right=n,Pt.top=n/t,Pt.bottom=-n/t),Pt.near=.1,Pt.far=1e3,Pt.updateProjectionMatrix()}function R_(n=4.5){var e;_a=n,Pt.position.set(n*.65,-n*.9,n*.7),Pt.lookAt(0,0,0),ql(n),Zt.target.set(0,0,0),(e=Zt.handleResize)==null||e.call(Zt),Zt.update()}function P_(){var i;if(!Xl()||!((i=m.syncRotation)!=null&&i.checked))return;const n=qe.position.clone().sub(Ae.target).normalize(),e=qe.up.clone(),t=(r,a,o,s=40)=>{const l=Ei(o,s);r.position.copy(n.clone().multiplyScalar(l)),r.up.copy(e),r.lookAt(0,0,0),a.target.set(0,0,0),r.updateProjectionMatrix()};t(rt,It,Kt,40),t(_t,In,Vl,30)}function L_(n,e){const t={...e,radius:Math.max(4,Math.min(8,e.radius*.55)),thetaSegments:72,phiSegments:144},{positive:i,negative:r}=nd(n,t);pi=Br(i,Dt(e.positiveColor),1),mi=Br(r,Dt(e.negativeColor),1),zr(pi,{...e,smooth:!0,wireframe:e.wireframe}),zr(mi,{...e,smooth:!0,wireframe:e.wireframe}),pi.scale.setScalar(.74),mi.scale.setScalar(.74);const a=sd(e);pi.visible=e.showPositive&&a,mi.visible=e.showNegative&&a,bn.add(pi,mi);const o=T_(pi,mi),s=Math.max(4.2,o*1.45);y_(s,e.showAxis),Kt=Math.max(Kt,s*1.12)}const ia=(()=>{const n=[255,0,0],e=[255,0,255],t=[255,255,255],i=[0,255,255],r=[0,0,255],a=[],o=(l,c)=>{for(let u=0;u<c;u+=1)a.push(l)},s=(l,c,u)=>{const h=[(c[0]-l[0])/u,(c[1]-l[1])/u,(c[2]-l[2])/u];for(let d=0;d<u;d+=1)a.push([l[0]+d*h[0],l[1]+d*h[1],l[2]+d*h[2]])};return o(n,20),s(n,e,80),s(e,t,25),o(t,5),s(t,i,25),s(i,r,80),o(r,20),a.reverse().map(([l,c,u])=>new xe(l/255,c/255,u/255))})();function Xs(n){const t=(Math.max(-1,Math.min(1,n))+1)/2*(ia.length-1),i=Math.max(0,Math.min(ia.length-1,Math.floor(t))),r=Math.max(0,Math.min(ia.length-1,i+1));return ia[i].clone().lerp(ia[r],t-i)}function I_(n,e,t,i,r,a){const o=e.rows,s=o.length,l=2*t/(s-1),c=Math.max(1,Math.round(.4/l)),u=new ji({color:16777215,transparent:!0,opacity:.56}),h=(d,f)=>{const v=-t+2*t*d/(s-1),_=-t+2*t*f/(s-1),g=o[f][d]/a;return new L(v,_,i+g*r+.012)};for(let d=0;d<s;d+=c){const f=[];for(let v=0;v<s;v+=1)f.push(h(v,d));n.add(new ga(new Ze().setFromPoints(f),u))}for(let d=0;d<s;d+=c){const f=[];for(let v=0;v<s;v+=1)f.push(h(d,v));n.add(new ga(new Ze().setFromPoints(f),u))}}function D_(n,e,t,i,r,a=1){const o=e.rows,s=o.length,l=2*t/(s-1),c=[(h,d,f)=>new L(-t+(h+f)*l,-t+d*l,i),(h,d,f)=>new L(-t+(h+1)*l,-t+(d+f)*l,i),(h,d,f)=>new L(-t+(h+1-f)*l,-t+(d+1)*l,i),(h,d,f)=>new L(-t+h*l,-t+(d+1-f)*l,i)],u=[[0,1],[1,2],[2,3],[3,0]];for(const h of r){const d=new ji({color:Xs(h).getHex(),transparent:!0,opacity:.95}),f=[];for(let v=0;v<s-1;v+=1)for(let _=0;_<s-1;_+=1){const g=[o[v][_],o[v][_+1],o[v+1][_+1],o[v+1][_]].map(y=>y/a),p=[];for(let y=0;y<4;y+=1){const[x,M]=u[y],w=g[x]-h,E=g[M]-h;if(w===0||w*E<0){const T=Math.abs(w)+Math.abs(E);if(T<1e-12)continue;const C=Math.max(0,Math.min(1,Math.abs(w)/T));p.push(c[y](_,v,C))}}p.length>=2&&(f.push(p[0],p[1]),p.length>=4&&f.push(p[2],p[3]))}f.length&&n.add(new Il(new Ze().setFromPoints(f),d))}}const Nn={radius:16756736,direction:3538793,point:16776960};function Xl(){var n;return!!((n=m.relationMode)!=null&&n.checked)}function U_(){const n=[[Lt,gl],[On,vl],[Bn,_l],[bn,xl]];for(const[e,t]of n)t&&Qi(e,t);gl=null,vl=null,_l=null,xl=null}function qu(n){var i,r;let e=0;const t=new L;return(i=n==null?void 0:n.updateMatrixWorld)==null||i.call(n,!0),(r=n==null?void 0:n.traverse)==null||r.call(n,a=>{var s,l;const o=(l=(s=a.geometry)==null?void 0:s.attributes)==null?void 0:l.position;if(o){a.updateMatrixWorld(!0);for(let c=0;c<o.count;c+=1)t.fromBufferAttribute(o,c).applyMatrix4(a.matrixWorld),e=Math.max(e,t.length())}}),e}function N_(n){const e=Math.max(qu(Tt),qu(At));kl=e>.001?e*1.02:n.radius*.86}function md(){var u,h,d;const n=Jt(),e=Math.max(0,Math.min(100,Number(((u=m.scanRadius)==null?void 0:u.value)??45))),t=Math.max(0,Math.min(180,Number(((h=m.scanTheta)==null?void 0:h.value)??90))),i=(Number(((d=m.scanPhi)==null?void 0:d.value)??0)%360+360)%360,r=Math.max(.001,kl||n.radius),a=r*e/100,o=t*Math.PI/180,s=i*Math.PI/180,l=new L(Math.sin(o)*Math.cos(s),Math.sin(o)*Math.sin(s),Math.cos(o)).normalize(),c=l.clone().multiplyScalar(a);return{options:n,radiusPercent:e,thetaDegrees:t,phiDegrees:i,r:a,maxRadius:r,direction:l,point:c}}function F_(n=md()){m.scanRadiusValue&&(m.scanRadiusValue.value=`${Math.round(n.radiusPercent)}%`),m.scanThetaValue&&(m.scanThetaValue.value=`${Math.round(n.thetaDegrees)}°`),m.scanPhiValue&&(m.scanPhiValue.value=`${Math.round(n.phiDegrees)}°`)}function Yl(n,e,t=.95){const i=new ji({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new ga(new Ze().setFromPoints(n),i);return r.renderOrder=30,r}function O_(n,e,t=.95){const i=new ji({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new Il(new Ze().setFromPoints(n),i);return r.renderOrder=30,r}function B_(n,e=16777215,t=.026,i=1){const r=new jh(n,!1,"centripetal",.18),a=new Nl(r,Math.max(80,n.length*2),t,8,!1),o=new kn({color:e,transparent:i<1,opacity:i,depthTest:!1,depthWrite:!1});o.toneMapped=!1;const s=new it(a,o);return s.renderOrder=31,s}function bl(n,e,t,i=.95){const r=[];for(let o=0;o<=160;o+=1){const s=Math.PI*2*o/160;r.push(new L(n*Math.cos(s),n*Math.sin(s),e))}return Yl(r,t,i)}function z_(n,e,t=.74){const i=[],o=s=>{for(let l=0;l<160;l+=1){const c=Math.PI*2*l/160,u=Math.PI*2*(l+1)/160;i.push(s(c),s(u))}};for(let s=1;s<12;s+=1){const l=Math.PI*s/12,c=Math.cos(l)*n,u=Math.sin(l)*n;o(h=>new L(u*Math.cos(h),u*Math.sin(h),c))}for(let s=0;s<6;s+=1){const l=Math.PI*s/6;o(c=>new L(n*Math.sin(c)*Math.cos(l),n*Math.sin(c)*Math.sin(l),n*Math.cos(c)))}return O_(i,e,t)}function Ys(n,e,t=1){const i=new kn({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new it(new Hs(n,24,16),i);return r.renderOrder=32,r}function gd(n,e,t,i,r){const a=new Bv(n,new L(0,0,0),e,t,i,r);return a.traverse(o=>{o.material&&(o.material.depthTest=!1,o.material.depthWrite=!1,o.material.toneMapped=!1,o.renderOrder=31)}),a}function k_(n,e,t){return e==="xoz"?new ue(n.x*t,n.z*t):e==="yoz"?new ue(n.y*t,n.z*t):new ue(n.x*t,n.y*t)}function V_(n,e){const t=n.length();return t>e&&t>1e-9&&n.multiplyScalar(e/t),n}function H_(n){const e=new xt;n.r>.001&&e.add(z_(n.r,Nn.radius,.72));const t=Math.max(n.r,n.maxRadius*.22,1);e.add(gd(n.direction,t,Nn.direction,t*.11,t*.035));const i=Ys(Math.max(.08,n.maxRadius*.018),Nn.point);i.position.copy(n.point),e.add(i),Lt.add(e),gl=e}function G_(n){const e=new xt,t=Math.max(2.4,Kt*.55);e.add(gd(n.direction,t,Nn.direction,t*.14,t*.045));const i=Ys(.08,Nn.point);i.position.copy(n.direction.clone().multiplyScalar(t)),e.add(i),bn.add(e),xl=e}function W_(n){if(!jn)return;const e=new xt,t=jn.radius*.92,i=jn.radius/Math.max(1e-4,n.maxRadius),r=Math.max(0,n.r*i),a=r>t?t/r:1,o=i*a,s=Math.min(t,Math.max(0,n.r*o));e.add(bl(s,jn.bottomZ+.18,Nn.radius,.95));const l=V_(k_(n.point,jn.plane,o),t),c=Ys(.075,Nn.point);c.position.set(l.x,l.y,jn.bottomZ+.28),e.add(c),e.add(Yl([new L(0,0,jn.bottomZ+.22),new L(l.x,l.y,jn.bottomZ+.22)],Nn.direction,.82)),On.add(e),vl=e}function q_(n){if(!vn)return;const e=new xt,t=Math.min(vn.radiusScale,n.r/Math.max(1e-4,vn.radialExtent)*vn.radiusScale),i=vd(ct(),n.r,n.options.radialMode),r=vn.diskZ+vn.curveLift+i/vn.maxAbs*vn.heightScale;e.add(Yl([new L(t,0,vn.baseZ-.15),new L(t,0,vn.heightTop)],Nn.radius,.95));const a=Ys(.07,Nn.point);a.position.set(t,0,r),e.add(a),Bn.add(e),_l=e}function $s(){U_();const n=md();F_(n),Xl()&&(H_(n),G_(n),W_(n),q_(n))}function X_(n){const e=n.length();if(e<1e-6)return;const t=Math.acos(Math.max(-1,Math.min(1,n.z/e))),i=(Math.atan2(n.y,n.x)+Math.PI*2)%(Math.PI*2);m.scanRadius&&(m.scanRadius.value=String(Math.round(Math.max(0,Math.min(100,e/Math.max(1e-4,kl)*100))))),m.scanTheta&&(m.scanTheta.value=String(Math.round(t*180/Math.PI))),m.scanPhi&&(m.scanPhi.value=String(Math.round(i*180/Math.PI))),$s(),ei(`关联高亮：r=${e.toFixed(2)}, θ=${Math.round(t*180/Math.PI)}°, φ=${Math.round(i*180/Math.PI)}°`)}function Y_(n){var o;if(!Xl())return;const e=fn.domElement.getBoundingClientRect(),t=new ue((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),i=new Ov;i.params.Points.threshold=Math.max(.12,Jt().radius*.025),i.setFromCamera(t,qe);const r=[Tt,At,Gi,Wi].filter(Boolean),a=i.intersectObjects(r,!0);(o=a[0])!=null&&o.point&&X_(a[0].point)}function $l(n){const e=Vn(n.n,n.l,n.m).replace(/^\d+/,"");return e.startsWith("Dyz")||e.startsWith("Fyz2")||e.startsWith("Gz3y")||e.startsWith("Gzy3")||e.startsWith("Gyz3")||e.startsWith("Hyz4")||e.startsWith("Hyz")?"yoz":e.startsWith("Pz")||e.startsWith("Dz2")||e.startsWith("Dxz")||e.startsWith("Fz3")||e.startsWith("Fxz2")||e.startsWith("Gz4")||e.startsWith("Gz3x")||e.startsWith("Gxz3")||e.startsWith("Gzx3")||e.startsWith("Hxz4")||e.startsWith("Hz5")||e.startsWith("Hxz")?"xoz":"xoy"}function $_(n,e,t,i){const r=[],a=e.radius;let o=0,s=0,l=0;for(let c=0;c<i;c+=1){const u=[],h=-a+2*a*c/(i-1);for(let d=0;d<i;d+=1){const f=-a+2*a*d/(i-1);let v=0;t==="xoy"&&(v=jo(n,f,h,0)),t==="xoz"&&(v=jo(n,f,0,h)),t==="yoz"&&(v=jo(n,0,f,h)),o=Math.max(o,Math.abs(v)),s=Math.max(s,v),l=Math.min(l,v),u.push(v)}r.push(u)}return{data:{rows:r,maxAbs:o,maxPositive:s,minNegative:l},scale:1}}function j_(n,e){On.background=new xe(e.backgroundColor);const t=new xt,r=si(n).gridSize*2+1,a=$l(n),{data:o}=$_(n,e,a,r),s=(o.maxPositive>1e-12?o.maxPositive:o.maxAbs||1)/.9,l=[],c=[],u=[],h=Math.min(4.7,e.radius*.42),d=h*1,f=-h*1,v=h*.9;jn={plane:a,radius:h,surfaceZ:d,bottomZ:f,height:v};for(let w=0;w<r;w+=1)for(let E=0;E<r;E+=1){const T=-h+2*h*E/(r-1),C=-h+2*h*w/(r-1),b=o.rows[w][E]/s,S=b;l.push(T,C,d+S*v);const P=Xs(b);c.push(P.r,P.g,P.b)}for(let w=0;w<r-1;w+=1)for(let E=0;E<r-1;E+=1){const T=w*r+E,C=T+1,b=T+r,S=b+1;u.push(T,b,C,C,b,S)}const _=new Ze;_.setAttribute("position",new We(l,3)),_.setAttribute("color",new We(c,3)),_.setIndex(u),_.computeVertexNormals(),ha=new it(_,new Cr({vertexColors:!0,side:ut,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04})),t.add(ha),I_(t,o,h,d,v,s);const g=new xt,p=[];for(let w=0;w<r;w+=1)for(let E=0;E<r;E+=1){const T=-h+2*h*E/(r-1),C=-h+2*h*w/(r-1);p.push(T,C,f+.02)}const y=new Ze;y.setAttribute("position",new We(p,3)),y.setAttribute("color",new We(c,3)),y.setIndex(u),y.computeVertexNormals();const x=new it(y,new kn({vertexColors:!0,side:ut,transparent:!0,opacity:.78}));g.add(x);const M=(w,E,T)=>Array.from({length:T},(C,b)=>w+(E-w)*b/(T-1));D_(g,o,h,f+.08,[...M(-1,0,20),...M(0,1,20)],s),da=g,t.add(da),ki=ud(h),ki.scale.z=1,ki.position.z=(d+f)/2,t.add(ki),ha=t,da=null,ki=null,On.add(t),C_(h*1.92),$s()}function vd(n,e,t){const i=Math.max(e,1e-4),r=Xi(n.n,n.l,n.z,i);return t==="R"?r:t==="R2"?r*r:i*i*r*r}function Xu(n,e=11974326){const t=Math.abs(n),i=Math.max(0,Math.min(1,(t-.035)/.72)),r=i*i*(3-2*i);return new xe(e).lerp(Xs(n),r)}function _d(n,e){var M;Bn.background=new xe(e.backgroundColor);const t=150,i=80,r=Math.min(e.radius,Math.max(5,si(n).leastRadius+1.2)),a=[];for(let w=0;w<=t;w+=1)a.push(vd(n,r*w/t,e.radialMode));const o=Math.max(...a.map(Math.abs),1e-6),s=3.7,l=s*.43,c=-1.25,u=c,h=.08,d=u+s*.72;vn={radialExtent:r,radiusScale:s,heightScale:l,baseZ:c,diskZ:u,curveLift:h,maxAbs:o,heightTop:(e.radialSide?d:u+h)+l+.38};const f=new xt,v=new it(new Hs(s,128,48,0,Math.PI*2,Math.PI/2,Math.PI/2),new Cr({color:12105912,side:ut,transparent:!0,opacity:.88,shininess:1,specular:2236962}));v.rotation.x=Math.PI/2,v.position.z=c,f.add(v);const _=new Ze,g=[],p=[],y=[];for(let w=0;w<=i;w+=1){const E=w/i*s,T=Math.round(w/i*t),C=a[T]/o;for(let b=0;b<=128;b+=1){const S=Math.PI*2*b/128,P=E*Math.cos(S),D=E*Math.sin(S);g.push(P,D,u);const N=Xu(C,12105912);p.push(N.r,N.g,N.b)}}const x=129;for(let w=0;w<i;w+=1)for(let E=0;E<128;E+=1){const T=w*x+E,C=T+1,b=T+x,S=b+1;y.push(T,b,C,C,b,S)}if(_.setAttribute("position",new We(g,3)),_.setAttribute("color",new We(p,3)),_.setIndex(y),_.computeVertexNormals(),fa=new it(_,new Cr({vertexColors:!0,side:ut,transparent:!1,opacity:1,shininess:8,specular:2236962})),f.add(fa),e.radialSide){const w=new it(new Wr(s,s,Math.max(.1,d-u),160,1,!0),new Kh({color:14149604,side:ut,transparent:!0,opacity:.24,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.28,ior:1.45,transmission:.08,specularIntensity:.5,specularColor:16777215}));w.rotation.x=Math.PI/2,w.position.z=(d+u)/2,w.renderOrder=2,f.add(w),f.add(bl(s,d,16777215,.12)),f.add(bl(s,u,16777215,.08));const E=new Ze,T=[],C=[],b=[],S=e.radialSection?64:128,P=(e.radialSection,0),D=e.radialSection?Math.PI:Math.PI*2;for(let k=0;k<=i;k+=1){const z=k/i*s,V=Math.round(k/i*t),Y=a[V]/o,G=d+Y*l;for(let ne=0;ne<=S;ne+=1){const oe=P+D*ne/S,le=z*Math.cos(oe),we=z*Math.sin(oe);T.push(le,we,G);const ye=Xu(Y,11711154);C.push(ye.r,ye.g,ye.b)}}const N=S+1;for(let k=0;k<i;k+=1)for(let z=0;z<S;z+=1){const V=k*N+z,Y=V+1,G=V+N,ne=G+1;b.push(V,G,Y,Y,G,ne)}E.setAttribute("position",new We(T,3)),E.setAttribute("color",new We(C,3)),E.setIndex(b),E.computeVertexNormals(),f.add(new it(E,new Cr({vertexColors:!0,side:ut,transparent:!1,opacity:1,shininess:10,specular:3355443})))}if(e.radialCurve){const w=[],E=e.radialSide?d:u+h;for(let C=0;C<=t;C+=1){const b=s*C/t,S=E+a[C]/o*l;w.push(new L(b,0,S))}const T=w.slice(1).map(C=>new L(-C.x,0,C.z)).reverse();pa=B_([...T,...w],16777215,e.radialSide?.013:.011),f.add(pa)}if(e.radialAxis){const w=e.radialSide?d:.1;sn=o_(s+.9,s+.45,w,e.radialMode),f.add(sn)}pl=f,Bn.add(f),fa=null,pa=null,sn=null,ml=null,e.radialSide?(_a=4.9,Pt.position.set(0,-7.2,d+1.25),Pt.lookAt(0,0,0),ql(_a),Zt.target.set(0,0,0),(M=Zt.handleResize)==null||M.call(Zt),Zt.update()):R_(5.3),$s()}function Is(){Z_();const n=(e,t,i,r,a)=>{var s;const o=e.getBoundingClientRect();o.width<2||o.height<2||(t.setSize(o.width,o.height,!1),t.domElement.style.width="100%",t.domElement.style.height="100%",i(a),(s=r.handleResize)==null||s.call(r),r.update())};n(m.viewer,fn,Ws,Ae,ii),n(m.angularViewer,Zi,qs,It,Kt),n(m.projectionViewer,Ki,pd,In,Vl),n(m.radialViewer,Xr,ql,Zt,_a);for(const e of xa)Zl(e,e.radius);K_()}function Z_(){const n=document.querySelector(".sidebar"),e=n==null?void 0:n.querySelector(".sidebar-fit");if(!n)return;if(window.matchMedia("(max-width: 900px)").matches){document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");return}document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");const t=getComputedStyle(n),i=n.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),r=(e==null?void 0:e.scrollHeight)||n.scrollHeight;if(!i||!r||r<=i+4)return;const a=Math.max(.72,Math.min(1,(i-4)/r));document.documentElement.style.setProperty("--sidebar-zoom",a.toFixed(3)),document.documentElement.style.setProperty("--sidebar-fit-height",`${Math.ceil(r*a)}px`)}function cn(){requestAnimationFrame(()=>{Is(),requestAnimationFrame(()=>{Is(),Rr()})})}function xd(n){const e=m.sketchCanvas.getBoundingClientRect();return{x:(n.clientX-e.left)/Math.max(1,e.width),y:(n.clientY-e.top)/Math.max(1,e.height)}}function Yu(n,e,t,i){if(!e.points.length)return;n.save(),n.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",n.strokeStyle=e.color,n.lineWidth=e.size,n.lineCap="round",n.lineJoin="round",n.beginPath();const r=e.points[0];n.moveTo(r.x*t,r.y*i);for(const a of e.points.slice(1))n.lineTo(a.x*t,a.y*i);e.points.length===1&&n.lineTo(r.x*t+.01,r.y*i+.01),n.stroke(),n.restore()}function $r(){const n=m.sketchCanvas;if(!n)return;const e=n.getContext("2d");e.clearRect(0,0,n.width,n.height);for(const t of $e.strokes)Yu(e,t,n.width,n.height);$e.currentStroke&&Yu(e,$e.currentStroke,n.width,n.height)}function K_(){const n=m.sketchCanvas;if(!n)return;const e=n.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,Math.floor(e.width*t)),r=Math.max(220,Math.floor(e.height*t));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r,$r())}function Jo(n){var e,t;$e.erasing=n,(e=m.sketchPen)==null||e.classList.toggle("active",!n),(t=m.sketchEraser)==null||t.classList.toggle("active",n)}function J_(n){var e,t,i,r;m.sketchCanvas&&(n.preventDefault(),(t=(e=m.sketchCanvas).setPointerCapture)==null||t.call(e,n.pointerId),$e.drawing=!0,$e.currentStroke={color:((i=m.sketchColor)==null?void 0:i.value)||"#ffffff",size:Number(((r=m.sketchSize)==null?void 0:r.value)||5)*Math.min(window.devicePixelRatio||1,2),mode:$e.erasing?"erase":"draw",points:[xd(n)]},$r())}function Q_(n){!$e.drawing||!$e.currentStroke||(n.preventDefault(),$e.currentStroke.points.push(xd(n)),$r())}function $u(n){!$e.drawing||!$e.currentStroke||(n.preventDefault(),$e.strokes.push($e.currentStroke),$e.currentStroke=null,$e.drawing=!1,$r())}function ex(){var n,e,t,i,r,a,o,s,l,c,u,h,d,f,v,_,g,p,y,x,M,w,E,T,C,b,S,P,D,N,k,z,V,Y,G,ne,oe,le,we,ye,$,K,he,O,Q,ge,be,U;if(m.sketchCanvas){m.sketchCanvas.addEventListener("pointerdown",J_),m.sketchCanvas.addEventListener("pointermove",Q_),m.sketchCanvas.addEventListener("pointerup",$u),m.sketchCanvas.addEventListener("pointercancel",$u),(n=m.openActivityButton)==null||n.addEventListener("click",()=>aa("predict")),(e=m.openSketchButton)==null||e.addEventListener("click",jl),(t=m.openPredictButton)==null||t.addEventListener("click",()=>aa("predict")),(i=m.openChallengeButton)==null||i.addEventListener("click",()=>aa("challenge"));for(const ce of m.activityModeButtons??[])ce.addEventListener("click",()=>aa(ce.dataset.activityMode));(r=m.startPredictButton)==null||r.addEventListener("click",oM),(a=m.verifyPredictButton)==null||a.addEventListener("click",lM),(o=m.scoreCurrentButton)==null||o.addEventListener("click",rM),(s=m.scoreShowRubricButton)==null||s.addEventListener("click",aM),(l=m.scoreResetButton)==null||l.addEventListener("click",sM),(c=m.diagnoseNodesButton)==null||c.addEventListener("click",()=>ps("nodes")),(u=m.diagnosePhaseButton)==null||u.addEventListener("click",()=>ps("phase")),(h=m.diagnoseProjectionButton)==null||h.addEventListener("click",()=>ps("projection"));for(const ce of document.querySelectorAll("[data-diagnosis]"))ce.addEventListener("click",()=>ps(ce.dataset.diagnosis));(d=m.nodeRevealButton)==null||d.addEventListener("click",()=>{m.longitudeNode.checked=!0,m.node.checked=!0,at()}),(f=m.nodeHideButton)==null||f.addEventListener("click",()=>{m.longitudeNode.checked=!1,m.node.checked=!1,at()}),(v=m.compareApplyButton)==null||v.addEventListener("click",()=>{Md()}),(_=m.compareA)==null||_.addEventListener("change",()=>{El("a")}),(g=m.compareB)==null||g.addEventListener("change",()=>{El("b")}),(p=m.compareLoadAButton)==null||p.addEventListener("click",()=>{var ce;(ce=m.compareA)!=null&&ce.value&&Zu(m.compareA.value,"a")}),(y=m.compareLoadBButton)==null||y.addEventListener("click",()=>{var ce;(ce=m.compareB)!=null&&ce.value&&Zu(m.compareB.value,"b")}),(x=m.newChallengeButton)==null||x.addEventListener("click",cM),(M=m.revealChallengeButton)==null||M.addEventListener("click",uM),(w=m.explainRestartButton)==null||w.addEventListener("click",nM),(E=m.explainPrevButton)==null||E.addEventListener("click",()=>ih(-1)),(T=m.explainPlayButton)==null||T.addEventListener("click",tM),(C=m.explainNextButton)==null||C.addEventListener("click",()=>ih(1)),(b=m.tabletLargeButton)==null||b.addEventListener("click",()=>rh(!0)),(S=m.tabletRestoreButton)==null||S.addEventListener("click",()=>rh(!1)),(P=m.tabletScreenshotButton)==null||P.addEventListener("click",Qs),(N=(D=m.sketchWindow)==null?void 0:D.querySelector(".window-title"))==null||N.addEventListener("pointerdown",hM),(z=(k=m.activityWindow)==null?void 0:k.querySelector(".window-title"))==null||z.addEventListener("pointerdown",ce=>Qo(ce,m.activityWindow)),(Y=(V=m.formulaWindow)==null?void 0:V.querySelector(".window-title"))==null||Y.addEventListener("pointerdown",ce=>Qo(ce,m.formulaWindow)),(ne=(G=m.animationWindow)==null?void 0:G.querySelector(".window-title"))==null||ne.addEventListener("pointerdown",ce=>Qo(ce,m.animationWindow)),window.addEventListener("pointermove",dM),window.addEventListener("pointermove",fM),window.addEventListener("pointerup",ah),window.addEventListener("pointerup",sh),window.addEventListener("pointercancel",ah),window.addEventListener("pointercancel",sh),window.addEventListener("pointerup",Rr),window.addEventListener("pointercancel",Rr),window.addEventListener("blur",Rr),(oe=m.sketchPen)==null||oe.addEventListener("click",()=>Jo(!1)),(le=m.sketchEraser)==null||le.addEventListener("click",()=>Jo(!0)),(we=m.sketchClear)==null||we.addEventListener("click",()=>{$e.strokes=[],$e.currentStroke=null,$r()}),(ye=m.annotationModeButton)==null||ye.addEventListener("click",tx),($=m.openAnimationButton)==null||$.addEventListener("click",Qx),(K=m.animationRestartButton)==null||K.addEventListener("click",jx),(he=m.animationPrevButton)==null||he.addEventListener("click",()=>th(-1)),(O=m.animationPlayButton)==null||O.addEventListener("click",$x),(Q=m.animationNextButton)==null||Q.addEventListener("click",()=>th(1)),(ge=m.animationExportButton)==null||ge.addEventListener("click",Jx),(be=m.openFormulaButton)==null||be.addEventListener("click",gx),(U=m.annotationClearButton)==null||U.addEventListener("click",ax);for(const ce of document.querySelectorAll("[data-annotation-add]"))ce.addEventListener("click",()=>rx(ce.dataset.annotationAdd));for(const ce of document.querySelectorAll(".annotation-layer"))ce.addEventListener("pointerdown",sx);window.addEventListener("pointermove",ox),window.addEventListener("pointerup",ju),window.addEventListener("pointercancel",ju),Jo(!1)}}function tx(){var n;re.annotationMode=!re.annotationMode,document.body.classList.toggle("annotation-mode",re.annotationMode),(n=m.annotationToolbar)==null||n.classList.toggle("closed",!re.annotationMode),re.annotationMode&&Gl(),ei(re.annotationMode?"讲解标注：点击下方按钮添加标签，拖动标签调整位置。":"讲解标注已关闭。")}function nx(n){const t={正相:"orbital",负相:"orbital",节点:"orbital",投影平面:"projection",径向节点:"radial"}[n]||"orbital";return document.querySelector(`[data-annotation-layer="${t}"]`)}function ix(n){return n==="正相"?"positive":n==="负相"?"negative":n==="节点"?"node":n==="投影平面"?"projection":n==="径向节点"?"radial":""}function rx(n){const e=nx(n);if(!e)return;const t=document.createElement("button");t.type="button",t.className=`annotation-note ${ix(n)}`.trim(),t.textContent=n;const i=e.querySelectorAll(".annotation-note").length;t.style.left=`${12+i%4*12}%`,t.style.top=`${14+i%3*14}%`,e.appendChild(t)}function ax(){for(const n of document.querySelectorAll(".annotation-layer"))n.replaceChildren()}function sx(n){var r;const e=n.target.closest(".annotation-note");if(!e||!re.annotationMode)return;n.preventDefault(),n.stopPropagation();const t=e.closest(".annotation-layer"),i=e.getBoundingClientRect();re.annotationDrag={note:e,layer:t,offsetX:n.clientX-i.left,offsetY:n.clientY-i.top},(r=e.setPointerCapture)==null||r.call(e,n.pointerId)}function ox(n){const e=re.annotationDrag;if(!e)return;n.preventDefault();const t=e.layer.getBoundingClientRect(),i=e.note.getBoundingClientRect(),r=Math.max(0,Math.min(t.width-i.width,n.clientX-t.left-e.offsetX)),a=Math.max(0,Math.min(t.height-i.height,n.clientY-t.top-e.offsetY));e.note.style.left=`${r}px`,e.note.style.top=`${a}px`}function ju(){re.annotationDrag=null}function jl(){m.sketchWindow&&(m.sketchWindow.classList.remove("closed","minimized"),m.sketchWindow.style.zIndex="120",er(m.sketchWindow),cn())}function js(n){const[e,t,i]=n.split(",").map(Number);return{n:e,l:t,m:i}}function lx(n){var s;if(!n)return null;let e=xa.find(l=>l.container===n);if(e)return n.contains(e.renderer.domElement)||n.appendChild(e.renderer.domElement),e;const t=new Ai;t.background=new xe(((s=m.backgroundColor)==null?void 0:s.value)||"#668080");const i=new En(-5,5,5,-5,.1,2e3),r=new ri({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.appendChild(r.domElement);const a=qr(i,r.domElement);ya(n,a),t.add(new Ci(16777215,.5));const o=new dn(16777215,1.2);return o.position.set(0,0,80),t.add(o),e={container:n,scene:t,camera:i,renderer:r,controls:a,objects:[],radius:5,target:new L,resizeObserver:null},"ResizeObserver"in window&&(e.resizeObserver=new ResizeObserver(()=>Zl(e,e.radius)),e.resizeObserver.observe(n)),xa.push(e),e}function cx(n){if(n){for(const e of n.objects)Qi(n.scene,e);n.objects=[]}}function Zl(n,e){var o,s;if(!n)return;const t=n.container.getBoundingClientRect();if(t.width<2||t.height<2)return;n.renderer.setSize(t.width,t.height,!1);const i=t.width/t.height,r=Math.max(3,e);i>=1?(n.camera.left=-r*i,n.camera.right=r*i,n.camera.top=r,n.camera.bottom=-r):(n.camera.left=-r,n.camera.right=r,n.camera.top=r/i,n.camera.bottom=-r/i),n.camera.near=.1,n.camera.far=Math.max(1e3,r*8);const a=n.target??new L;n.camera.position.set(a.x,a.y,a.z+Ei(r,40)),n.camera.lookAt(a),n.camera.updateProjectionMatrix(),n.controls.target.copy(a),(s=(o=n.controls).handleResize)==null||s.call(o),n.controls.update()}function ux(n,e,t){const i=new un;let r=!1;for(const a of e){a.updateMatrixWorld(!0);const o=new un().setFromObject(a);Number.isFinite(o.min.x)&&Number.isFinite(o.min.y)&&Number.isFinite(o.min.z)&&Number.isFinite(o.max.x)&&Number.isFinite(o.max.y)&&Number.isFinite(o.max.z)&&(i.union(o),r=!0)}if(r){const a=i.getBoundingSphere(new Ti);n.target.copy(a.center),n.radius=Math.max(2.5,t,a.radius*1.2)}else n.target.set(0,0,0),n.radius=Math.max(2.5,t);Zl(n,n.radius)}function Ds(n,e,t,i){var _,g;const r=lx(n);if(!r)return null;const a={...js(e),z:Number((_=m.z)==null?void 0:_.value)||1},o=si(a),s=Math.max(4,Math.min(10,o.radius*.08)),l=Math.min(78,Math.max(42,Math.round(o.gridSize*.72))),c={iso:o.iso,density:l,radius:o.radius,opacity:.96,smooth:!1,wireframe:!0,cutaway:"none",showPositive:!0,showNegative:!0,positiveColor:m.positiveColor.value,negativeColor:m.negativeColor.value,backgroundColor:((g=m.backgroundColor)==null?void 0:g.value)||"#668080"};r.scene.background=new xe(c.backgroundColor),cx(r);const u=Ls(a,c,1,c.positiveColor),h=Ls(a,c,-1,c.negativeColor),d=s/Math.max(1,o.radius);u.scale.multiplyScalar(d),h.scale.multiplyScalar(d);const f=Gs(Math.max(1.6,s*.5));r.scene.add(u,h,f),r.objects.push(u,h,f),ux(r,[u,h,f],s*1.45);const v=Vn(a.n,a.l,a.m);return t&&(t.textContent=v),i&&(i.textContent=`${As(a.n,a.l)}；n=${a.n}, l=${a.l}, |m|=${Math.abs(a.m)}`),{params:a,label:v,nodes:As(a.n,a.l)}}function Md(){var t,i;const n=Ds(m.compareAViewer,(t=m.compareA)==null?void 0:t.value,m.compareATitle,m.compareANotes),e=Ds(m.compareBViewer,(i=m.compareB)==null?void 0:i.value,m.compareBTitle,m.compareBNotes);if(n&&e&&m.compareSummary){const r=n.params.l===e.params.l&&Math.abs(n.params.m)===Math.abs(e.params.m);m.compareSummary.textContent=r?`${n.label} 与 ${e.label} 角向类型相同，重点比较径向节点随 n 增加的变化。`:`${n.label} 与 ${e.label} 角向类型不同，重点比较节点面方向、相位分布和对称性。`}}function El(n){var e,t;return n==="a"?Ds(m.compareAViewer,(e=m.compareA)==null?void 0:e.value,m.compareATitle,m.compareANotes):n==="b"?Ds(m.compareBViewer,(t=m.compareB)==null?void 0:t.value,m.compareBTitle,m.compareBNotes):null}function Zs(n){const e=js(n);m.n.value=e.n,m.l.value=e.l,m.m.value=Math.abs(e.m),m.cosType.checked=e.m>=0,m.sinType.checked=e.m<0,ct(),Yr(),at()}function Zu(n,e){var a,o,s,l;const t=js(n);Zs(n),m.mainWindow&&(m.mainWindow.classList.remove("closed","minimized","maximized"),er(m.mainWindow)),m.positiveLobe&&(m.positiveLobe.checked=!0),m.negativeLobe&&(m.negativeLobe.checked=!0),m.wireframe&&m.smooth&&!m.wireframe.checked&&!m.smooth.checked&&(m.wireframe.checked=!0),ct(),at();const i=El(e),r=(i==null?void 0:i.label)||Vn(t.n,t.l,t.m);m.compareSummary&&(m.compareSummary.textContent=`已载入主视图：${r}`),e==="a"?(o=(a=m.compareAViewer)==null?void 0:a.closest(".compare-view-card"))==null||o.scrollIntoView({block:"nearest",inline:"nearest"}):e==="b"&&((l=(s=m.compareBViewer)==null?void 0:s.closest(".compare-view-card"))==null||l.scrollIntoView({block:"nearest",inline:"nearest"})),cn()}function aa(n){if(!m.activityWindow)return;const e=n||"predict";m.activityWindow.classList.remove("closed","minimized"),m.activityWindow.style.zIndex="125";for(const i of m.activityPanes??[]){const r=i.dataset.activityPane||i.id.replace(/Pane$/,"");i.classList.toggle("active",r===e)}for(const i of m.activityModeButtons??[])i.classList.toggle("active",i.dataset.activityMode===e);const t={predict:"预测-验证模式",score:"预测评分",diagnosis:"错误诊断",nodes:"节点发现",compare:"轨道对比",challenge:"轨道配对挑战",explain:"原理演示",tablet:"平板课堂"};m.activityTitle&&(m.activityTitle.textContent=t[e]||"课堂互动"),er(m.activityWindow),cn(),e==="compare"&&requestAnimationFrame(()=>{Md(),cn()}),e==="explain"?requestAnimationFrame(()=>{wa(re.explanationStep,{render:!1}),cn()}):(Js(),Ea(null))}const yd=7200;function hx(){const n=ct();return Vn(n.n,n.l,n.m)}const dx=["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"],fx=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];function Sd(n,e){return(n<0?"⁻":"")+String(Math.abs(n)).split("").map(i=>e[Number(i)]??i).join("")}function Ku(n){return Sd(n,dx)}function px(n){return Sd(n,fx)}function mx(n,e){return Vn(Math.max(1,n+1),n,e).replace(/^\d+/,"")||`l=${n}, m=${e}`}function Kl(n){const e=Vn(n.n,n.l,n.m),t=Math.max(0,n.n-n.l-1),i=n.l,r=mx(n.l,n.m),a=Ku(n.n),o=Ku(n.l),s=px(n.m);return{label:e,radialNodes:t,angularNodes:i,main:`Ψ(r,θ,φ) = R${a}${o}(r) · Y${o}${s}(θ,φ)`,radial:`R${a}${o}(r) 决定离原子核不同距离处的振幅变化；当前轨道有 ${t} 个径向节点。`,angular:`${r} 对应的 Y${o}${s}(θ,φ) 决定轨道朝向、节面和正负相位；当前有 ${i} 个角向节点。`,visual:"原子轨道窗口显示 Ψ=+c 和 Ψ=-c 的等值面；轨道投影是在选定平面上看 Ψ；径向分布函数看 r²R²；电子云来自 |Ψ|² 的概率分布。"}}function bd(){var t,i;if(!m.formulaWindow)return;const n=ct(),e=Kl(n);m.formulaOrbitalName&&(m.formulaOrbitalName.textContent=e.label),m.formulaQuantumText&&(m.formulaQuantumText.textContent=`n=${n.n}, l=${n.l}, m=${n.m}`),m.formulaMain&&(m.formulaMain.textContent=e.main),m.formulaRadialText&&(m.formulaRadialText.textContent=e.radial),m.formulaAngularText&&(m.formulaAngularText.textContent=e.angular),m.formulaVisualText&&(m.formulaVisualText.textContent=e.visual),m.formulaRadialNodes&&(m.formulaRadialNodes.textContent=String(e.radialNodes)),m.formulaAngularNodes&&(m.formulaAngularNodes.textContent=String(e.angularNodes)),m.formulaPhaseText&&(m.formulaPhaseText.textContent=`${((t=m.positiveLobe)==null?void 0:t.checked)===!1?"隐藏正相":"正相"} / ${((i=m.negativeLobe)==null?void 0:i.checked)===!1?"隐藏负相":"负相"}`)}function gx(){m.formulaWindow&&(bd(),m.formulaWindow.classList.remove("closed","minimized"),m.formulaWindow.style.zIndex="128",er(m.formulaWindow),cn())}const vx=5200;function Ks(){const n=ct(),e=Kl(n);return[{focus:"all",title:"同一个波函数，四种观察方式",text:`${e.label} 的四个窗口都来自同一个 Ψ。动画先给出公式，再依次把它变成轨道、投影、径向图和电子云。`},{focus:"radial",title:"径向函数决定离核距离",text:`Rₙₗ(r) 控制波函数随半径的振荡和衰减；当前轨道有 ${e.radialNodes} 个径向节点。`},{focus:"angular",title:"角向函数决定方向和节面",text:`Yₗᵐ(θ,φ) 给出方向上的正负相位分区；当前轨道有 ${e.angularNodes} 个角向节点。`},{focus:"orbital",title:"径向 × 角向，合成三维波函数",text:"R(r) 提供距离变化，Y(θ,φ) 提供方向变化，两者相乘后形成空间中的正相和负相区域。"},{focus:"orbital",title:"抽取 Ψ=±c，得到原子轨道等值面",text:"等值面不是电子轨迹，而是波函数达到某个正值或负值时形成的边界。"},{focus:"projection",title:"把同一个 Ψ 放到平面上，得到轨道投影",text:"投影窗口把空间波函数在代表性平面上读出来，上方是高度曲面，下方是等高线。"},{focus:"orbital",title:"按 |Ψ|² 随机出现，形成电子云",text:"电子云表示电子出现概率。越亮、越密的区域，表示多次测量中电子更容易出现。"}]}function _x(){const n=m.animationCanvas;if(!n)return null;const e=n.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,e.width||640),r=Math.max(220,e.height||360);(n.width!==Math.round(i*t)||n.height!==Math.round(r*t))&&(n.width=Math.round(i*t),n.height=Math.round(r*t));const a=n.getContext("2d");return a.setTransform(t,0,0,t,0,0),{ctx:a,width:i,height:r}}function Jl(n,e,t,i,r,a){const o=Math.min(a,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function xx(n,e,t,i){const r=["公式","径向","角向","合成","等值面","投影","电子云"],o=e-42,s=34,l=o-42;n.save(),n.lineWidth=2,n.strokeStyle="rgba(255,255,255,0.45)",n.beginPath(),n.moveTo(42,s),n.lineTo(o,s),n.stroke(),n.strokeStyle="#ffb000",n.beginPath(),n.moveTo(42,s),n.lineTo(42+l*Math.min(1,(t+i)/(r.length-1)),s),n.stroke(),r.forEach((c,u)=>{const h=42+l*u/(r.length-1),d=u===t;n.fillStyle=d?"#ffb000":"rgba(255,255,255,0.82)",n.beginPath(),n.arc(h,s,d?8:5,0,Math.PI*2),n.fill(),n.fillStyle=d?"#fff4bf":"rgba(255,255,255,0.86)",n.font=d?"bold 14px sans-serif":"13px sans-serif",n.textAlign="center",n.fillText(c,h,s+24)}),n.restore()}function Mx(n,e,t,i){const r=Kl(ct()),a=e/2,o=t*.52;n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.92)",Jl(n,a-220,o-68,440,136,12),n.fill(),n.fillStyle="#111827",n.textAlign="center",n.font="bold 30px serif",n.fillText(r.main,a,o-12),n.font="18px sans-serif",n.fillStyle="#175cd3",n.fillText("同一个 Ψ 经过不同读取方式，形成四个窗口的图像",a,o+34),n.restore()}function Ed(n,e,t,i,r=1){n.save(),n.globalAlpha=Math.min(1,r*1.6),n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText(i,e/2,t*.9),n.restore()}function Ju(n,e,t,i=1){const r=ct(),a=Math.max(0,r.n-r.l-1),o=Math.min(e*.82,560),s=76,l=(e-o)/2,c=t*.77;n.save(),n.globalAlpha=Math.min(1,i*1.6),n.fillStyle="rgba(255,255,255,0.9)",Jl(n,l,c,o,s,10),n.fill(),n.fillStyle="#111827",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText(`径向节点数 = n - l - 1 = ${r.n} - ${r.l} - 1 = ${a}`,e/2,c+29),n.font="15px sans-serif",n.fillStyle=a>0?"#175cd3":"#667085",n.fillText(a>0?"曲线过零处对应三维空间中的球形径向节面":"当前轨道没有径向节点，因此不会出现球形径向节面",e/2,c+55),n.restore()}function yx(n,e,t,i,r,a,o=1,s=""){if(!(e!=null&&e.domElement)||!t||!i)return!1;e.render(t,i);const l=e.domElement;if(!l.width||!l.height)return!1;const c=Math.min(r*.92,l.width),u=Math.min(a*.72,c*(l.height/Math.max(1,l.width))),h=Math.min(c,u*(l.width/Math.max(1,l.height))),d=Math.min(u,h*(l.height/Math.max(1,l.width)));return n.save(),n.globalAlpha=Math.min(1,o*1.4),n.drawImage(l,(r-h)/2,a*.12,h,d),s&&(n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText(s,r/2,a*.1)),n.restore(),!0}function Sx(){return Ln||(Ft=new En(-5,5,5,-5,.1,2e3),Ln=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Ln.outputColorSpace=wt,Ln.toneMapping=Vr,Ln.toneMappingExposure=1.16),!0}function wd(n,e,t,i,r=!1){if(!Sx())return!1;const a=r?Math.max(180,Math.min(520,Math.floor(e*.92))):Math.max(260,Math.min(700,Math.floor(e*.58))),o=r?Math.max(130,Math.min(360,Math.floor(t*.78))):Math.max(190,Math.min(560,Math.floor(t*.7)));Ln.setSize(a,o,!1);const s=new xe(getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#668080");Ln.setClearColor(s,1);const l=Math.max(4.5,_a||4.8),c=a/o,u=l*1.05;c>=1?(Ft.left=-u*c,Ft.right=u*c,Ft.top=u,Ft.bottom=-u):(Ft.left=-u,Ft.right=u,Ft.top=u/c,Ft.bottom=-u/c),Ft.near=.1,Ft.far=2e3;const h=i*Math.PI*.75+performance.now()*18e-5;Ft.up.set(0,0,1),Ft.position.set(Math.cos(h)*l*.55,-l*1.35,l*.46+Math.sin(h)*l*.1),Ft.lookAt(0,0,0),Ft.updateProjectionMatrix();const d=sn==null?void 0:sn.visible;sn&&(sn.visible=!1),Ln.render(Bn,Ft),sn&&d!=null&&(sn.visible=d),n.save(),n.globalAlpha=Math.min(1,i*1.4);const f=r?(e-a)/2:Math.min(e-a-e*.04,Math.max(e*.36,(e-a)/2+e*.16));return n.drawImage(Ln.domElement,f,t*.12,a,o),n.restore(),!0}function bx(n,e,t,i=1){const r=ct(),a=si(r),o=Math.max(4,a.leastRadius+1),s=Math.min(300,e*.32),l=150,c=e*.055,u=t*.16,h=22,d=[];for(let p=0;p<=140;p+=1)d.push(Xi(r.n,r.l,r.z,o*p/140));const f=Math.max(...d.map(p=>Math.abs(p)),1e-4),v=Math.max(2,Math.floor(140*Math.min(1,i)));n.save(),n.globalAlpha=Math.min(1,i*1.7),n.fillStyle="rgba(255,255,255,0.9)",Jl(n,c,u,s,l,10),n.fill(),n.strokeStyle="rgba(17,24,39,0.28)",n.lineWidth=1,n.beginPath(),n.moveTo(c+h,u+l*.58),n.lineTo(c+s-h,u+l*.58),n.moveTo(c+h,u+h),n.lineTo(c+h,u+l-h),n.stroke(),n.strokeStyle="#175cd3",n.lineWidth=2.4,n.beginPath();for(let p=0;p<=v;p+=1){const y=c+h+(s-h*2)*p/140,x=u+l*.58-d[p]/f*(l*.36);p===0?n.moveTo(y,x):n.lineTo(y,x)}n.stroke();const _=u+l*.58,g=[];for(let p=2;p<=v;p+=1){const y=d[p-1],x=d[p];if(y===0||y*x<0){const M=Math.abs(y)/Math.max(1e-9,Math.abs(y)+Math.abs(x)),w=c+h+(s-h*2)*(p-1+M)/140;g.push(w)}}g.length&&(n.save(),n.fillStyle="#ffb000",g.forEach(p=>{n.beginPath(),n.arc(p,_,4.2,0,Math.PI*2),n.fill()}),n.restore()),n.fillStyle="#111827",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText("Rnl(r) 函数图像",c+s/2,u+18),n.font="12px sans-serif",n.fillText("横轴 r",c+s-38,u+l-8),n.save(),n.translate(c+12,u+l/2),n.rotate(-Math.PI/2),n.fillText("振幅",0,0),n.restore(),n.restore()}function Ex(n,e,t,i){if(wd(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.5),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("径向分布函数的 3D 读法",e/2,t*.1),n.restore(),bx(n,e,t,i),Ju(n,e,t,i);return}const r=ct(),a=si(r),o=Math.max(4,a.leastRadius+1),s=e*.14,l=t*.66,c=e*.72,u=t*.42,h=[];for(let v=0;v<=180;v+=1){const _=o*v/180;h.push(Xi(r.n,r.l,r.z,_))}const d=Math.max(...h.map(v=>Math.abs(v)),1e-4),f=Math.max(2,Math.floor(180*i));n.save(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2,n.beginPath(),n.moveTo(s,l),n.lineTo(s+c,l),n.moveTo(s,l-u/2),n.lineTo(s,l+u/2),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=3,n.beginPath();for(let v=0;v<=f;v+=1){const _=s+c*v/180,g=l-h[v]/d*(u/2);v===0?n.moveTo(_,g):n.lineTo(_,g)}n.stroke(),n.fillStyle="#ffb000";for(let v=1;v<f;v+=1)if(h[v-1]*h[v]<=0){const _=s+c*v/180;n.beginPath(),n.arc(_,l,4,0,Math.PI*2),n.fill()}n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Rnl(r)",s+c/2,l-u/2-18),n.font="14px sans-serif",n.textAlign="left",n.fillText("r = 0 原子核",s-38,l+24),n.textAlign="right",n.fillText("r 增大：离核距离",s+c,l+28),n.save(),n.translate(s-34,l-u/2+12),n.rotate(-Math.PI/2),n.textAlign="center",n.fillText("纵轴：径向波函数振幅 Rnl(r)",0,0),n.restore(),n.fillStyle="#ffb000",n.beginPath(),n.arc(s,l,5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.88)",n.textAlign="center",n.fillText("曲线穿过横轴的位置，对应径向节面",s+c*.55,l+u/2+22),Ju(n,e,t,i),n.restore()}function wx(){Dn&&(Dn.traverse(n=>{var e,t;n.geometry&&((t=(e=n.geometry).dispose)==null||t.call(e)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{var a;return(a=r.dispose)==null?void 0:a.call(r)})}),Qn==null||Qn.remove(Dn),Dn=null)}function Tx(){if(Rn)return!0;Qn=new Ai,Ht=new En(-5,5,5,-5,.1,2e3),Rn=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Rn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Rn.outputColorSpace=wt,Rn.toneMapping=Vr,Rn.toneMappingExposure=1.18,Qn.add(new Ci(16777215,.58));const n=new dn(16777215,1.72);n.position.set(5,-6,8),Qn.add(n);const e=new dn(16777215,.55);return e.position.set(-4,5,4),Qn.add(e),!0}function Ax(){const n=ct(),e=Jt(),t=[n.n,n.l,n.m,n.z,e.positiveColor,e.negativeColor].join("|");if(Dn&&Hu===t)return!0;wx(),Hu=t,Dn=new xt;const i={radius:3.8,thetaSegments:80,phiSegments:160},{positive:r,negative:a}=nd(n,i),o=Br(r,Dt(e.positiveColor),.96),s=Br(a,Dt(e.negativeColor),.96);return zr(o,{...e,smooth:!0,wireframe:!1}),zr(s,{...e,smooth:!0,wireframe:!1}),Dn.add(s,o),Qn.add(Dn),!0}function Td(n,e,t,i){if(!Tx()||!Ax())return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(620,Math.floor(t*.78)));Rn.setSize(r,a,!1),Rn.setClearColor(0,0);const o=new un().setFromObject(Dn);if(o.isEmpty())return!1;const s=o.getCenter(new L),l=Math.max(1,o.getSize(new L).length()*.5),c=r/a,u=l*1.08;c>=1?(Ht.left=-u*c,Ht.right=u*c,Ht.top=u,Ht.bottom=-u):(Ht.left=-u,Ht.right=u,Ht.top=u/c,Ht.bottom=-u/c),Ht.near=.1,Ht.far=Math.max(1e3,l*18);const h=i*Math.PI*.7;Ht.position.copy(s).add(new L(Math.cos(h)*l*1.5,-l*1.9,l*.95+Math.sin(h)*l*.35)),Ht.lookAt(s),Ht.updateProjectionMatrix();const d=.16+.84*(1-(1-Math.min(1,i))**3);return Dn.traverse(f=>{var v;((v=f.material)==null?void 0:v.opacity)!=null&&f.isMesh&&(f.material.transparent=!0,f.material.opacity=d,f.material.needsUpdate=!0)}),Rn.render(Qn,Ht),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Rn.domElement,(e-r)/2,t*.08,r,a),n.restore(),!0}function Cx(n,e,t,i){var c,u;if(Td(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)：每一个方向对应一个角向函数值",e/2,t*.12),n.font="14px sans-serif",n.fillStyle=((c=m.positiveColor)==null?void 0:c.value)||"#d83bd8",n.fillText("正相位 Y > 0",e*.32,t*.84),n.fillStyle=((u=m.negativeColor)==null?void 0:u.value)||"#00aeb8",n.fillText("负相位 Y < 0",e*.68,t*.84),n.fillStyle="#ffd15c",n.fillText("两色交界处就是 Y = 0 的角向节面",e/2,t*.9),n.restore();return}const r=ct(),a=e/2,o=t*.56,s=Math.max(2,r.l*2||1),l=Math.min(e,t)*.18*Math.min(1,i*1.7);n.save(),n.translate(a,o),n.rotate(r.m*Math.PI/12);for(let h=0;h<s;h+=1){const d=Math.PI*2*h/s,f=h%2===0,v=l*(r.l===0?1.25:1.55);n.save(),n.rotate(d);const _=n.createRadialGradient(v*.5,0,4,v*.5,0,v);_.addColorStop(0,f?"#ff2bd6":"#00d7ff"),_.addColorStop(1,f?"rgba(255,43,214,0.15)":"rgba(0,215,255,0.15)"),n.fillStyle=_,n.beginPath(),n.ellipse(v*.55,0,v*.62,l*.5,0,0,Math.PI*2),n.fill(),n.restore()}n.strokeStyle="#ffb000",n.lineWidth=2;for(let h=0;h<Math.max(1,r.l);h+=1)n.beginPath(),n.moveTo(-l*2,0),n.lineTo(l*2,0),n.stroke(),n.rotate(Math.PI/Math.max(1,r.l));n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)",0,-l*1.75-20),n.font="14px sans-serif",n.fillStyle="#ff9cff",n.fillText("Y > 0：正相位",l*1.7,-l*.88),n.fillStyle="#72f6ff",n.fillText("Y < 0：负相位",-l*1.7,l*.95),n.fillStyle="#ffd15c",n.fillText("Y = 0：角向节面/节线",0,l*1.9),n.strokeStyle="rgba(255,255,255,0.78)",n.lineWidth=1.1,n.beginPath(),n.moveTo(0,0),n.lineTo(l*1.55,-l*1.15),n.stroke(),n.fillStyle="rgba(255,255,255,0.9)",n.textAlign="left",n.fillText("一个方向由 θ 和 φ 确定",l*1.6,-l*1.18),n.restore()}function Rx(n,e,t,i){const r=Math.min(1,i*1.45),a=[e*.2,e*.5,e*.8],o=e*.24,s=t*.32,l=t*.2,c=(h,d,f)=>{n.strokeStyle="#ffb000",n.fillStyle="#ffb000",n.lineWidth=3.2,n.beginPath(),n.moveTo(h,d),n.lineTo(f,d),n.stroke(),n.beginPath(),n.moveTo(f,d),n.lineTo(f-13,d-8),n.lineTo(f-13,d+8),n.closePath(),n.fill()};n.save(),n.globalAlpha=r,n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText("径向",a[0],l-20),n.fillText("角向",a[1],l-20),n.fillText("轨道",a[2],l-20),n.save(),n.translate(a[0]-o/2,l),wd(n,o,s,i,!0),n.restore(),n.save(),n.translate(a[1]-o/2,l),Td(n,o,s,i),n.restore(),n.save(),n.translate(a[2]-o/2,l),Cd(n,o,s,i),n.restore();const u=l+s*.78;n.fillStyle="#ffb000",n.font="bold 34px serif",n.fillText("×",(a[0]+a[1])/2,u),c(a[1]+o*.46,u,a[2]-o*.48),n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 28px serif",n.fillText("R(r) × Y(θ,φ) = Ψ(x,y,z)",e/2,t*.76),n.restore()}function Px(n,e,t,i){return Rx(n,e,t,i)}function Lx(n,e,t,i){var l,c;const r=e/2,a=t*.56,o=Math.min(e,t)*.27*Math.min(1,i*1.5),s=ct();n.save(),n.globalAlpha=.96,n.fillStyle=((l=m.negativeColor)==null?void 0:l.value)||"#00a0a0",n.beginPath(),n.ellipse(r-o*.76,a,o*(s.l>2?.9:.78),o*.72,-.12,0,Math.PI*2),n.fill(),n.fillStyle=((c=m.positiveColor)==null?void 0:c.value)||"#b24bb2",n.beginPath(),n.ellipse(r+o*.76,a,o*(s.l>2?.9:.78),o*.72,.12,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2;for(let u=0;u<10;u+=1){const h=a-o*.72+o*1.44*u/9;n.beginPath(),n.moveTo(r-o*1.65,h),n.lineTo(r+o*1.65,h),n.stroke()}n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("抽取 Ψ=+c 与 Ψ=-c",r,a+o+38),n.restore()}function jt(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Ad(n){return{x:n.x*.82+n.y*.34,y:-n.z*.88+n.y*.22}}function Ix(n,e=6e4){var r,a;const t=[],i=[new L,new L,new L];for(const o of n)o.object&&((a=(r=o.object).updateWorldMatrix)==null||a.call(r,!0,!0),o.object.traverse(s=>{var d,f;const l=(f=(d=s.geometry)==null?void 0:d.attributes)==null?void 0:f.position;if(!l)return;const c=s.geometry.index,u=Math.floor(c?c.count/3:l.count/3);if(!u)return;s.updateWorldMatrix(!0,!1);const h=Math.max(1,Math.ceil(u/Math.max(1,e/n.length)));for(let v=0;v<u;v+=h){let _=0;const g=[];for(let p=0;p<3;p+=1){const y=c?c.getX(v*3+p):v*3+p;i[p].fromBufferAttribute(l,y).applyMatrix4(s.matrixWorld),_+=i[p].y,g.push(Ad(i[p]))}t.push({points:g,color:o.color,depth:_/3})}}));return t}function Dx(n,e){const t=new xe(n);return`rgba(${Math.round(t.r*255)}, ${Math.round(t.g*255)}, ${Math.round(t.b*255)}, ${e})`}function Ux(n,e,t,i,r){if(!e.length)return!1;let a=1e-4;for(const u of e)for(const h of u.points)a=Math.max(a,Math.abs(h.x),Math.abs(h.y));const o=Math.min(t,i)*.34/a,s=t/2,l=i*.55,c=.14+.76*(1-(1-Math.min(1,r))**3);return n.save(),e.sort((u,h)=>u.depth-h.depth).forEach(u=>{const[h,d,f]=u.points;n.fillStyle=Dx(u.color,c),n.beginPath(),n.moveTo(s+h.x*o,l+h.y*o),n.lineTo(s+d.x*o,l+d.y*o),n.lineTo(s+f.x*o,l+f.y*o),n.closePath(),n.fill()}),n.restore(),!0}function Qu(){yn&&(yn.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(t=>{var i;return(i=t.dispose)==null?void 0:i.call(t)})}),Jn==null||Jn.remove(yn),yn=null)}function Nx(){if(Cn)return!0;Jn=new Ai,Vt=new En(-5,5,5,-5,.1,2e3),Cn=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Cn.outputColorSpace=wt,Cn.toneMapping=Vr,Cn.toneMappingExposure=1.12,Jn.add(new Ci(16777215,.56));const n=new dn(16777215,1.65);n.position.set(5,-7,8),Jn.add(n);const e=new dn(16777215,.55);return e.position.set(-6,4,5),Jn.add(e),!0}function Fx(n=1){var r,a,o,s,l,c,u;const e=Jt(),t=[(Tt==null?void 0:Tt.uuid)||"",(At==null?void 0:At.uuid)||"",((r=m.positiveColor)==null?void 0:r.value)||"",((a=m.negativeColor)==null?void 0:a.value)||"",e.opacity].join("|");if(yn&&Vu===t)return!0;Qu(),Vu=t,yn=new xt;const i=[{object:At,color:((o=m.negativeColor)==null?void 0:o.value)||"#00a0a0"},{object:Tt,color:((s=m.positiveColor)==null?void 0:s.value)||"#b24bb2"}];for(const h of i)(c=(l=h.object)==null?void 0:l.updateWorldMatrix)==null||c.call(l,!0,!0),(u=h.object)==null||u.traverse(d=>{if(!d.isMesh||!d.geometry)return;const f=new Cr({color:Dt(h.color),emissive:Dt(h.color),emissiveIntensity:.04,shininess:26,side:ut,transparent:!0,opacity:Math.min(.98,e.opacity)}),v=new it(d.geometry,f);v.matrix.copy(d.matrixWorld),v.matrixAutoUpdate=!1,yn.add(v)});return yn.children.length?(Jn.add(yn),!0):(Qu(),!1)}function Cd(n,e,t,i){if(!Tt&&!At||!Nx()||!Fx(i))return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(680,Math.floor(t*.82)));Cn.setSize(r,a,!1),Cn.setClearColor(0,0);const o=new un().setFromObject(yn);if(o.isEmpty())return!1;const s=o.getCenter(new L),l=Math.max(1,o.getSize(new L).length()*.5),c=r/a,u=l*1.16;c>=1?(Vt.left=-u*c,Vt.right=u*c,Vt.top=u,Vt.bottom=-u):(Vt.left=-u,Vt.right=u,Vt.top=u/c,Vt.bottom=-u/c),Vt.near=.1,Vt.far=Math.max(2e3,l*20);const h=performance.now()*42e-5+i*Math.PI*.28;Vt.position.copy(s).add(new L(Math.cos(h)*l*1.65,Math.sin(h)*l*1.65,l*.92)),Vt.lookAt(s),Vt.updateProjectionMatrix();const d=.08+.9*(1-(1-Math.min(1,i))**3);return yn.traverse(f=>{f.material&&(f.material.opacity=d)}),Cn.render(Jn,Vt),n.save(),n.globalAlpha=Math.min(1,i*1.4),n.drawImage(Cn.domElement,(e-r)/2,t*.1,r,a),n.restore(),!0}function Ox(n,e,t,i){var a,o;if(Cd(n,e,t,i)){n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore();return}const r=Ix([{object:At,color:((a=m.negativeColor)==null?void 0:a.value)||"#00a0a0"},{object:Tt,color:((o=m.positiveColor)==null?void 0:o.value)||"#b24bb2"}]);if(!Ux(n,r,e,t,i)){Lx(n,e,t,i);return}n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore()}function Bx(n,e){var a,o;const t=Math.min(1,Math.abs(n)/Math.max(e,1e-8)),i=new xe(n>=0?((a=m.positiveColor)==null?void 0:a.value)||"#b24bb2":((o=m.negativeColor)==null?void 0:o.value)||"#00a0a0"),r=new xe(16777215);return i.lerp(r,1-Math.sqrt(t)),`rgba(${Math.round(i.r*255)}, ${Math.round(i.g*255)}, ${Math.round(i.b*255)}, ${.16+.78*t})`}function zx(n,e,t,i,r,a){var h,d;const o=[.18,.32,.48,.64,.8].filter((f,v,_)=>v/_.length<=a+.08),s=e.length,l=i/(s-1),c=r/(s-1),u=(f,v,_)=>Math.abs(v-f)<1e-9?.5:(_-f)/(v-f);for(const f of[1,-1]){n.strokeStyle=f>0?((h=m.positiveColor)==null?void 0:h.value)||"#ff2bd6":((d=m.negativeColor)==null?void 0:d.value)||"#00d7ff",n.lineWidth=1.45;for(const v of o){const _=f*t*v;n.beginPath();for(let g=0;g<s-1;g+=1)for(let p=0;p<s-1;p+=1){const y=e[g][p],x=e[g][p+1],M=e[g+1][p+1],w=e[g+1][p],E=[];(y-_)*(x-_)<=0&&E.push([p+u(y,x,_),g]),(x-_)*(M-_)<=0&&E.push([p+1,g+u(x,M,_)]),(M-_)*(w-_)<=0&&E.push([p+1-u(M,w,_),g+1]),(w-_)*(y-_)<=0&&E.push([p,g+1-u(w,y,_)]),E.length>=2&&(n.moveTo(-i/2+E[0][0]*l,-r/2+E[0][1]*c),n.lineTo(-i/2+E[1][0]*l,-r/2+E[1][1]*c))}n.stroke()}}}function kx(n,e,t,i){if(yx(n,Ki,On,_t,e,t,i,"轨道投影的 3D 视图")){Ed(n,e,t,"同一个 Ψ 在投影平面上显示为高度曲面和等高线",i);return}const r=ct(),a=Jt(),o=$l(r),s=Yv(r,a,o,78),l=e/2,c=t*.58,u=e*.56,h=t*.34,d=document.createElement("canvas");d.width=s.rows.length,d.height=s.rows.length;const f=d.getContext("2d");for(let v=0;v<s.rows.length;v+=1)for(let _=0;_<s.rows.length;_+=1)f.fillStyle=Bx(s.rows[v][_],s.maxAbs),f.fillRect(_,v,1,1);n.save(),n.translate(l,c),n.transform(1,-.22,.35,.82,0,0),n.fillStyle="rgba(238,244,244,0.88)",n.fillRect(-u/2,-h/2,u,h),n.globalAlpha=Math.min(1,i*1.35),n.drawImage(d,-u/2,-h/2,u,h),n.globalAlpha=Math.min(1,i*1.8),zx(n,s.rows,s.maxAbs,u,h,i),n.strokeStyle="rgba(255,255,255,0.9)",n.strokeRect(-u/2,-h/2,u,h),n.restore(),n.save(),n.globalAlpha=i,n.strokeStyle="#ffb000",n.lineWidth=2,n.beginPath(),n.moveTo(l,t*.22),n.lineTo(l,c-h*.22),n.stroke(),n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText(`当前投影平面：${o.toUpperCase()}，颜色来自 Ψ 的正负`,l,t*.2),n.restore()}function Vx(){Un&&(Un.traverse(n=>{var e,t,i;n.geometry&&!((e=n.userData)!=null&&e.sharedGeometry)&&((i=(t=n.geometry).dispose)==null||i.call(t)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{var o;return(o=a.dispose)==null?void 0:o.call(a)})}),Si==null||Si.remove(Un),Un=null)}function Hx(){if(Pn)return!0;Si=new Ai,Gt=new En(-5,5,5,-5,.1,2e3),Pn=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Pn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Pn.outputColorSpace=wt,Pn.toneMapping=Vr,Pn.toneMappingExposure=1.18,Si.add(new Ci(16777215,.56));const n=new dn(16777215,1.55);return n.position.set(5,-7,8),Si.add(n),!0}function eh(n,e,t,i=3200){const r=Math.min(e.radius,Math.max(5,si(n).leastRadius+1.2)),a=r*r;let o=0;for(let c=0;c<520;c+=1){const u=(jt(c,51)*2-1)*r,h=(jt(c,52)*2-1)*r,d=(jt(c,53)*2-1)*r;u*u+h*h+d*d>a||(o=Math.max(o,Math.abs(Bt(n,u,h,d))))}const s=[];let l=0;for(;s.length/3<i&&l<i*110;){const c=(jt(l,61+t)*2-1)*r,u=(jt(l,62+t)*2-1)*r,h=(jt(l,63+t)*2-1)*r;if(l+=1,c*c+u*u+h*h>a)continue;const d=Bt(n,c,u,h);if(t*d<=0)continue;const f=(Math.abs(d)/Math.max(o,1e-8))**2;jt(l,71+t)>f*.92||s.push(c,u,h)}return{points:s,radius:r}}function Gx(){const n=ct(),e=Jt(),t=[n.n,n.l,n.m,n.z,e.radius.toFixed(3),e.iso.toFixed(5),e.positiveColor,e.negativeColor].join("|");if(Un&&Gu===t)return!0;Vx(),Gu=t,Un=new xt;const i=eh(n,e,1),r=eh(n,e,-1),a=Ps(i.points,Dt(e.positiveColor)),o=Ps(r.points,Dt(e.negativeColor));return a.material.uniforms.uSize.value=3.4,o.material.uniforms.uSize.value=3.4,Un.add(o,a),Si.add(Un),!0}function Wx(n,e,t,i,r){if(!Hx()||!Gx())return!1;const a=Math.max(240,Math.min(900,Math.floor(e))),o=Math.max(180,Math.min(680,Math.floor(t*.82)));Pn.setSize(a,o,!1),Pn.setClearColor(0,0),Un.traverse(f=>{var v,_,g;(_=(v=f.material)==null?void 0:v.uniforms)!=null&&_.uTime?(f.material.uniforms.uTime.value=r,f.material.opacity=Math.min(1,i*1.3)):((g=f.material)==null?void 0:g.opacity)!=null&&f.isMesh&&(f.material.opacity=.28*Math.min(1,i*1.6),f.material.needsUpdate=!0)});const s=new un().setFromObject(Un);if(s.isEmpty())return!1;const l=s.getCenter(new L),c=Math.max(1,s.getSize(new L).length()*.5),u=a/o,h=c*1.1;u>=1?(Gt.left=-h*u,Gt.right=h*u,Gt.top=h,Gt.bottom=-h):(Gt.left=-h,Gt.right=h,Gt.top=h/u,Gt.bottom=-h/u),Gt.near=.1,Gt.far=Math.max(2e3,c*20);const d=r*.25;return Gt.position.copy(l).add(new L(Math.cos(d)*c*1.55,-c*1.75,c*.95)),Gt.lookAt(l),Gt.updateProjectionMatrix(),Pn.render(Si,Gt),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Pn.domElement,(e-a)/2,t*.1,a,o),n.restore(),!0}function qx(n,e,t,i,r){if(Wx(n,e,t,i,r)){Ed(n,e,t,"|Ψ|² 越大，三维空间中的闪烁点越密集",i);return}const a=ct(),o=Jt(),s=Math.min(o.radius,Math.max(5,si(a).leastRadius+1.2));let l=0;for(let f=0;f<260;f+=1){const v=(jt(f,11)*2-1)*s,_=(jt(f,12)*2-1)*s,g=(jt(f,13)*2-1)*s;v*v+_*_+g*g>s*s||(l=Math.max(l,Math.abs(Bt(a,v,_,g))))}const c=e/2,u=t*.55,h=Math.min(e,t)*.34/s,d=Math.floor(1500*i);n.save();for(let f=0;f<d;f+=1){const v=(jt(f,21)*2-1)*s,_=(jt(f,22)*2-1)*s,g=(jt(f,23)*2-1)*s;if(v*v+_*_+g*g>s*s)continue;const p=Bt(a,v,_,g),y=(Math.abs(p)/Math.max(l,1e-8))**2;if(jt(f,Math.floor(r*4)+31)>y*.9)continue;const x=Ad(new L(v,_,g));n.fillStyle=p>=0?"rgba(255,43,214,0.82)":"rgba(0,215,255,0.82)",n.fillRect(c+x.x*h,u+x.y*h,1.9,1.9)}n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("|Ψ|² 越大，随机点越密",c,t*.84),n.restore()}function kr(n=0){var v,_;const e=_x();if(!e)return;const{ctx:t,width:i,height:r}=e,a=re.animationStep,o=Ks();t.clearRect(0,0,i,r),t.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#668080",t.fillRect(0,0,i,r);const s=16/9;let l=i,c=l/s;c>r&&(c=r,l=c*s);const u=(i-l)/2,h=(r-c)/2,d=54;t.save(),t.translate(u,h),xx(t,l,a,n),t.translate(0,d);const f=c-d;a===0?Mx(t,l,f,n):a===1?Ex(t,l,f,n):a===2?Cx(t,l,f,n):a===3?Px(t,l,f,n):a===4?Ox(t,l,f,n):a===5?kx(t,l,f,n):qx(t,l,f,n,performance.now()*.001),t.restore(),m.animationProgressFill&&(m.animationProgressFill.style.width=`${Math.round(n*100)}%`),m.animationStepBadge&&(m.animationStepBadge.textContent=`第 ${a+1} 步 / ${o.length} 步`),m.animationTitle&&(m.animationTitle.textContent=((v=o[a])==null?void 0:v.title)||""),m.animationText&&(m.animationText.textContent=a===3?"径向给出离核距离变化，角向给出方向和相位；共同决定同一个三维波函数。":((_=o[a])==null?void 0:_.text)||"")}function Xx(){re.animationTimer&&clearTimeout(re.animationTimer),re.animationFrame&&cancelAnimationFrame(re.animationFrame),re.animationTimer=null,re.animationFrame=null}function Rd(){var t;if(!re.animationPlaying)return;const n=Ks(),e=Math.min(1,(performance.now()-re.animationStartedAt)/vx);if(kr(e),e>=1){if(re.animationStep>=n.length-1){re.animationPlaying=!1,m.animationPlayButton&&(m.animationPlayButton.textContent="播放");return}re.animationStep+=1,re.animationStartedAt=performance.now(),Ea((t=n[re.animationStep])==null?void 0:t.focus)}re.animationFrame=requestAnimationFrame(Rd)}function Lr(n,e=0){var i;const t=Ks();re.animationStep=Math.max(0,Math.min(t.length-1,n)),Ea((i=t[re.animationStep])==null?void 0:i.focus),kr(e)}function Yx(){re.animationPlaying=!0,re.animationStartedAt=performance.now(),m.animationPlayButton&&(m.animationPlayButton.textContent="暂停"),Rd()}function ba(){re.animationPlaying=!1,m.animationPlayButton&&(m.animationPlayButton.textContent="播放"),Xx()}function $x(){re.animationPlaying?ba():Yx()}function jx(){ba(),Lr(0,0)}function th(n){ba(),Lr(re.animationStep+n,0)}function Zx(){return typeof MediaRecorder>"u"||!MediaRecorder.isTypeSupported?"":["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(n=>MediaRecorder.isTypeSupported(n))||""}function nh(){return new Promise(n=>requestAnimationFrame(n))}function Kx(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),1200)}async function Jx(){var d,f;const n=m.animationCanvas;if(!(n!=null&&n.captureStream)||typeof MediaRecorder>"u"){alert("当前浏览器不支持直接导出视频。建议使用新版 Chrome 或 Edge 打开后再导出。");return}if(re.animationExporting)return;ba(),re.animationExporting=!0;const e=re.animationStep,t=[m.animationRestartButton,m.animationPrevButton,m.animationPlayButton,m.animationNextButton,m.animationExportButton].filter(Boolean),i=t.map(v=>v.disabled),r=((d=m.animationExportButton)==null?void 0:d.textContent)||"导出视频";t.forEach(v=>{v.disabled=!0}),m.animationExportButton&&(m.animationExportButton.textContent="导出中...");const a=Ks(),o=[],s=n.captureStream(30),l=Zx(),c={videoBitsPerSecond:6e6,...l?{mimeType:l}:{}};let u;try{u=new MediaRecorder(s,c)}catch{s.getTracks().forEach(_=>_.stop()),alert("当前浏览器无法创建视频录制器，请换用新版 Chrome 或 Edge。"),re.animationExporting=!1,t.forEach((_,g)=>{_.disabled=i[g]}),m.animationExportButton&&(m.animationExportButton.textContent=r),Lr(e,0);return}const h=new Promise((v,_)=>{u.ondataavailable=g=>{var p;(p=g.data)!=null&&p.size&&o.push(g.data)},u.onerror=()=>_(u.error||new Error("video export failed")),u.onstop=()=>v(new Blob(o,{type:u.mimeType||"video/webm"}))});try{Lr(0,0),await nh(),u.start(250);const v=2600;for(let y=0;y<a.length;y+=1){re.animationStep=y,Ea((f=a[y])==null?void 0:f.focus);const x=performance.now();let M=0;for(;M<1;)M=Math.min(1,(performance.now()-x)/v),kr(M),await nh();kr(1),await new Promise(w=>setTimeout(w,160))}u.state!=="inactive"&&u.stop();const _=await h,g=ct(),p=`HAO-${Vn(g.n,g.l,g.m)}-generation.webm`;Kx(_,p)}catch(v){u.state!=="inactive"&&u.stop(),console.error(v),alert("导出视频失败，请刷新页面后再试。")}finally{s.getTracks().forEach(v=>v.stop()),re.animationExporting=!1,t.forEach((v,_)=>{v.disabled=i[_]}),m.animationExportButton&&(m.animationExportButton.textContent=r),Lr(e,0)}}function Qx(){m.animationWindow&&(m.animationWindow.classList.remove("closed","minimized"),m.animationWindow.style.zIndex="129",er(m.animationWindow),cn(),requestAnimationFrame(()=>Lr(re.animationStep,0)))}function Pd(){const n=ct(),e=Vn(n.n,n.l,n.m),t=n.n-n.l-1,i=n.l;return[{focus:"all",title:`先把 ${e} 看成一个波函数`,formula:"Ψ(r,θ,φ) = Rₙₗ(r) · Yₗᵐ(θ,φ)",text:"四个窗口不是四套不同的计算。它们都来自同一个 Ψ，只是观察方式不同：在空间中取等值面、在平面上取切片、沿半径取曲线，或只看角向部分。",observe:`当前轨道是 ${e}：n=${n.n} 决定尺度和径向层数，l=${n.l} 决定角向节点，m=${n.m} 决定方向和相位分区。`,reason:"先建立“同源”的概念，后面的每张图就不再是孤立图像，而是同一个函数的不同读法。",action:()=>{m.projection&&(m.projection.checked=!0),at()}},{focus:"orbital",title:"原子轨道：找出 Ψ 等于某个值的边界",formula:"Ψ(x,y,z) = +c  和  Ψ(x,y,z) = -c",text:"程序先在三维盒子里布满格点，逐点计算 Ψ。把数值等于正等值和负等值的位置连成曲面，就得到你看到的两个相位区域。",observe:"粉色和蓝色表示波函数符号相反，不表示电荷正负。网格越密，等值面越接近真实边界。",reason:"这一步回答“轨道外形怎么来”：它不是画出来的外壳，而是三维标量场中被等值面算法提取出来的边界。",action:()=>{gs({cloud:!1,wireframe:!0,smooth:!0,projection:!1,node:!1,box:!0})}},{focus:"projection",title:"轨道投影：把同一个 Ψ 放到一个平面上读",formula:"例如：z=0 时，观察 Ψ(x,y,0)",text:"投影窗口先选一个最能显示该轨道对称性的平面，再在平面上逐点计算 Ψ。上方曲面用高度表达数值大小，下方等高线表达相位和节点线。",observe:"看上方曲面的峰、谷，再对照下方等高线：峰对应密集的正相线，谷对应密集的负相线，白色过渡附近就是节点。",reason:"这一步把三维轨道压到二维平面，让学生更容易判断相位分区、节点线和方向。",action:()=>{m.projection&&(m.projection.checked=!0),m.box&&(m.box.checked=!0),m.wireframe&&(m.wireframe.checked=!0),m.smooth&&(m.smooth.checked=!1),at()}},{focus:"radial",title:"径向分布：只问电子离原子核多远",formula:"P(r) = r² · Rₙₗ(r)²",text:"径向分布函数暂时不关心方向，只沿半径统计概率。R 决定波函数随距离怎样振荡，r² 会把球壳体积因素加进去。",observe:`${e} 的径向节点数是 n-l-1 = ${t}。曲线下凹或接近零的位置，通常对应概率分布中的分层。`,reason:"这一步解释“为什么有的轨道外面还有一层”：那通常来自径向部分，而不是角向形状突然改变。",action:()=>{m.radialR&&(m.radialR.checked=!1),m.radialR2&&(m.radialR2.checked=!1),m.radialRdf&&(m.radialRdf.checked=!0),m.radialSection&&(m.radialSection.checked=!0),m.radialSide&&(m.radialSide.checked=!0),m.radialCurve&&(m.radialCurve.checked=!0),at()}},{focus:"angular",title:"角向函数：只看方向怎样分成正负相",formula:"Yₗᵐ(θ,φ) 决定方向、节面和相位",text:"角向函数把半径影响先拿掉，只保留方向上的变化。这样可以直接看到轨道为什么沿某些轴伸展，为什么中间会出现节面。",observe:`${e} 的角向节点数是 l = ${i}。这些节点决定了轨道方向上的分瓣方式。`,reason:"最后再回到原子轨道时，学生就能把外形拆开理解：径向部分决定层数，角向部分决定方向和分瓣。",action:()=>{m.projection&&(m.projection.checked=!1),m.node&&(m.node.checked=!0),m.longitudeNode&&(m.longitudeNode.checked=!0),m.wireframe&&(m.wireframe.checked=!0),at()}}]}function Ea(n){var t;for(const i of document.querySelectorAll(".qt-window.teaching-focus"))i.classList.remove("teaching-focus");const e=n==="all"?["orbital","projection","radial","angular"]:[n];for(const i of e)(t=document.querySelector(`[data-window-name="${i}"]`))==null||t.classList.add("teaching-focus")}function Ql(n){m.explainProgressFill&&(m.explainProgressFill.style.width=`${Math.max(0,Math.min(1,n))*100}%`)}function Ld(){re.explanationTimer&&clearTimeout(re.explanationTimer),re.explanationFrame&&cancelAnimationFrame(re.explanationFrame),re.explanationTimer=null,re.explanationFrame=null}function Id(){if(!re.explanationPlaying)return;const n=(performance.now()-re.explanationStartedAt)/yd;Ql(n),re.explanationFrame=requestAnimationFrame(Id)}function Dd(){Ld(),re.explanationStartedAt=performance.now(),Id(),re.explanationTimer=setTimeout(()=>{const n=Pd();if(re.explanationStep>=n.length-1){re.explanationPlaying=!1,m.explainPlayButton&&(m.explainPlayButton.textContent="播放"),Ql(1);return}wa(re.explanationStep+1),re.explanationPlaying&&Dd()},yd)}function wa(n,e={}){const t=Pd(),i=Math.max(0,Math.min(t.length-1,n)),r=t[i];re.explanationStep=i,m.explainStepBadge&&(m.explainStepBadge.textContent=`第 ${i+1} 步 / ${t.length} 步`),m.explainStepTitle&&(m.explainStepTitle.textContent=r.title),m.explainStepText&&(m.explainStepText.textContent=r.text),m.explainFormula&&(m.explainFormula.textContent=r.formula),m.explainObserveText&&(m.explainObserveText.textContent=r.observe),m.explainReasonText&&(m.explainReasonText.textContent=r.reason),m.explainHintText&&(m.explainHintText.textContent=`正在讲解 ${hx()}。你可以暂停后旋转任意一个窗口，再继续播放。`),Ea(r.focus),Ql(0),e.render!==!1&&r.action()}function eM(){re.explanationPlaying=!0,m.explainPlayButton&&(m.explainPlayButton.textContent="暂停"),wa(re.explanationStep),Dd()}function Js(){re.explanationPlaying=!1,m.explainPlayButton&&(m.explainPlayButton.textContent="播放"),Ld()}function tM(){re.explanationPlaying?Js():eM()}function nM(){Js(),re.explanationStep=0,wa(0)}function ih(n){Js(),wa(re.explanationStep+n)}function gs(n){n.cloud!=null&&m.cloud&&(m.cloud.checked=n.cloud),n.wireframe!=null&&m.wireframe&&(m.wireframe.checked=n.wireframe),n.smooth!=null&&m.smooth&&(m.smooth.checked=n.smooth),n.projection!=null&&m.projection&&(m.projection.checked=n.projection),n.node!=null&&(m.node&&(m.node.checked=n.node),m.longitudeNode&&(m.longitudeNode.checked=n.node)),n.box!=null&&m.box&&(m.box.checked=n.box),n.grid3d!=null&&m.grid3d&&(m.grid3d.checked=n.grid3d),at()}function iM(){return Xt.find(n=>{var e;return n.value===((e=m.predictTarget)==null?void 0:e.value)})||re.challengeTarget||Xt[0]}function rM(){const n=iM(),e=js(n.value),t=e.n-e.l-1,i=e.l,r=Math.max(60,100-t*4-i*3);m.scorePrompt&&(m.scorePrompt.textContent=`${n.label} 参考评分：${r} 分。检查点：径向节点 ${t} 个，角向节点 ${i} 个，相位正负分区清楚，方向与坐标轴一致。`),Zs(n.value)}function aM(){m.scorePrompt&&(m.scorePrompt.textContent="评分标准：节点数 30 分，相位颜色 25 分，空间方向 25 分，投影/截面对应关系 20 分。")}function sM(){m.scorePrompt&&(m.scorePrompt.textContent="评分会根据当前目标轨道给出节点数、相位、方向和投影四项课堂反馈。")}function ps(n){n==="nodes"?(gs({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!0}),m.diagnosisPrompt&&(m.diagnosisPrompt.textContent="节点诊断：观察径向节点数 n-l-1 与角向节点数 l 是否匹配。")):n==="phase"?(gs({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!1}),m.positiveLobe&&(m.positiveLobe.checked=!0),m.negativeLobe&&(m.negativeLobe.checked=!0),at(),m.diagnosisPrompt&&(m.diagnosisPrompt.textContent="相位诊断：紫色/青色两相表示波函数符号相反，不代表电荷正负。")):(gs({cloud:!1,wireframe:!0,smooth:!1,projection:!0,node:!1,box:!0}),m.diagnosisPrompt&&(m.diagnosisPrompt.textContent="投影诊断：对照上方波函数曲面与底部等高线，判断节点线和相位区。"))}function rh(n){document.body.classList.toggle("tablet-mode",n),n?(eo("tile"),aa("tablet"),ei("平板课堂：已放大按钮和触控区域。")):ei("已恢复普通课堂布局。"),cn()}function oM(){const n=Xt.find(e=>e.value===m.predictTarget.value)??Xt[0];jl(),$e.strokes=[],$e.currentStroke=null,$r(),m.predictPrompt&&(m.predictPrompt.textContent=`请先在画板中预测 ${n.label} 的形状、相位和节面，再点击“显示验证”。`)}function lM(){const n=Xt.find(e=>e.value===m.predictTarget.value)??Xt[0];Zs(n.value),m.predictPrompt&&(m.predictPrompt.textContent=`已显示 ${n.label}。请对照画板预测与四个窗口中的真实结果。`)}function cM(){const n=Math.floor(Math.random()*Xt.length);re.challengeTarget=Xt[n],Zs(re.challengeTarget.value),setTimeout(()=>{m.viewerTitle&&(m.viewerTitle.textContent="原子轨道  ?")},120),m.challengePrompt&&(m.challengePrompt.textContent="观察当前四个窗口中的图像，选择你认为对应的轨道名称。")}function uM(){const n=re.challengeTarget||Xt[0],e=Xt.find(r=>r.value===m.challengeGuess.value),t=(e==null?void 0:e.value)===n.value;re.challengeTotal+=1,t&&(re.challengeCorrect+=1);const i=`（累计 ${re.challengeCorrect}/${re.challengeTotal}）`;m.viewerTitle&&(m.viewerTitle.textContent=`原子轨道  ${n.label}`),m.challengePrompt&&(m.challengePrompt.textContent=t?`回答正确：这是 ${n.label}。`:`还不对。你的答案是 ${(e==null?void 0:e.label)??""}，正确答案是 ${n.label}。`),ei(`轨道配对 ${i}`)}function hM(n){var i,r;const e=m.sketchWindow;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();$e.dragging=!0,$e.dragPointerId=n.pointerId,$e.dragOffsetX=n.clientX-t.left,$e.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function dM(n){const e=m.sketchWindow;if(!e||!$e.dragging||$e.dragPointerId!==null&&n.pointerId!==$e.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-$e.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-$e.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function ah(){$e.dragging=!1,$e.dragPointerId=null,Rr()}function Qo(n,e){var i,r;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();re.dragging=!0,re.dragPointerId=n.pointerId,re.dragWindow=e,re.dragOffsetX=n.clientX-t.left,re.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function fM(n){const e=re.dragWindow;if(!re.dragging||!e||re.dragPointerId!==null&&n.pointerId!==re.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-re.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-re.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function sh(){re.dragging=!1,re.dragPointerId=null,re.dragWindow=null,Rr()}function Ud(){s_(performance.now()*.001),Ae.update(),It.update(),In.update(),Zt.update(),P_(),fn.render(Lt,qe),Zi.render(bn,rt),Ki.render(On,_t),Xr.render(Bn,Pt);for(const n of xa)n.controls.update(),n.renderer.render(n.scene,n.camera);requestAnimationFrame(Ud)}function pM(){const[n,e,t]=m.preset.value.split(",").map(Number);m.n.value=n,m.l.value=e,m.m.value=Math.abs(t),m.cosType.checked=t>=0,m.sinType.checked=t<0,ct(),Yr(),at()}function Sr(n,e){if(n.checked)for(const t of e)t&&t!==n&&(t.checked=!1)}function Nd(n){n==="one"?(m.positiveColor.value="#ff7a00",m.negativeColor.value="#008fb8"):(m.positiveColor.value="#d83bd8",m.negativeColor.value="#00aeb8"),at()}function mM(){for(const n of[m.cosType,m.sinType])n==null||n.addEventListener("change",()=>{Sr(n,[m.cosType,m.sinType]),!m.cosType.checked&&!m.sinType.checked&&(m.cosType.checked=!0),at()});for(const n of[m.wireframe,m.smooth])n==null||n.addEventListener("change",()=>{Sr(n,[m.wireframe,m.smooth]),at()});for(const n of[m.paletteOne,m.paletteTwo])n==null||n.addEventListener("change",()=>{Sr(n,[m.paletteOne,m.paletteTwo]),!m.paletteOne.checked&&!m.paletteTwo.checked&&(m.paletteTwo.checked=!0),Nd(m.paletteOne.checked?"one":"two")});for(const n of[m.xySlice,m.yzSlice,m.xzSlice])n==null||n.addEventListener("change",()=>{Sr(n,[m.xySlice,m.yzSlice,m.xzSlice]),at()});for(const n of[m.quarter,m.eighth,m.threeQuarter])n==null||n.addEventListener("change",()=>{Sr(n,[m.quarter,m.eighth,m.threeQuarter]),at()});for(const n of[m.radialR,m.radialR2,m.radialRdf])n==null||n.addEventListener("change",()=>{Sr(n,[m.radialR,m.radialR2,m.radialRdf]),!m.radialR.checked&&!m.radialR2.checked&&!m.radialRdf.checked&&(m.radialRdf.checked=!0),fd(),_d(ct(),Jt())})}function Qs(){fn.render(Lt,qe);const n=document.createElement("a");n.download=`${m.orbitalName.textContent||"hao-orbital"}.png`,n.href=fn.domElement.toDataURL("image/png"),n.click()}function ei(n){m.statusText.textContent=n}function gM(){if(m.backgroundColor){(!document.body.contains(m.backgroundColor)||m.backgroundColor.closest(".hidden-control"))&&(document.body.appendChild(m.backgroundColor),Object.assign(m.backgroundColor.style,{position:"fixed",left:"-120px",top:"0",width:"1px",height:"1px",opacity:"0",pointerEvents:"none"}));try{typeof m.backgroundColor.showPicker=="function"?m.backgroundColor.showPicker():m.backgroundColor.click()}catch{m.backgroundColor.click()}}}function Us(n){document.body.classList.toggle("app-fullscreen",n),Ji.hidden=!n,cn()}async function vM(){var e;nn(),Us(!0);const n=(e=document.documentElement.requestFullscreen)==null?void 0:e.bind(document.documentElement);if(n)try{await n(),Pr=!0}catch{Pr=!1}}async function Fd(){if(nn(),Us(!1),document.fullscreenElement&&document.exitFullscreen)try{await document.exitFullscreen()}catch{}Pr=!1}function _M(){document.body.classList.contains("app-fullscreen")||document.fullscreenElement?Fd():vM()}function nn(){m.menuPopup.hidden=!0,m.menuPopup.innerHTML="";for(const n of m.menuItems)n.classList.remove("active")}function xM(n){const e=n.dataset.menu,t={file:[["重新显示",at],["导出图片",Qs],["恢复预设值",()=>{Yr(),at()}]],window:[["全屏/退出全屏",_M],["画板",jl],["背景颜色",gM],["显示/隐藏盒子",MM],["显示/隐藏坐标轴",ec],["重置视角",()=>{Wl(),E_(Kt)}]],help:[["当前说明",()=>ei("顶部按钮已连接到 Web 端功能")],["项目路径",()=>ei("web/index.html")]],language:[["中文",()=>ei("语言: 中文")],["English",()=>ei("Language: English labels are partly available")]]}[e];nn(),n.classList.add("active");const i=n.getBoundingClientRect();m.menuPopup.style.left=`${i.left}px`,m.menuPopup.hidden=!1;for(const[r,a]of t){const o=document.createElement("button");o.type="button",o.textContent=r,o.addEventListener("click",()=>{nn(),a()}),m.menuPopup.appendChild(o)}}function ec(){var e;m.axis.checked=!m.axis.checked;const n=Jt();va.visible=n.showAxis,va.scale.setScalar(Math.max(1,n.radius/4.5)),vi&&(vi.visible=n.showAxis),(e=m.toolAxis)==null||e.classList.toggle("active",n.showAxis),render()}function MM(){m.box.checked=!m.box.checked,Jt(),at()}function eo(n){var t,i;Gl({restoreLayout:!0});const e=n==="overlap";m.viewGrid.classList.toggle("overlap-layout",e),(t=m.toolTile)==null||t.classList.toggle("active",!e),(i=m.toolOverlap)==null||i.classList.toggle("active",e),cn()}function er(n){const e=n.querySelector('[data-window-action="minimize"]'),t=n.querySelector('[data-window-action="maximize"]');e&&(e.textContent=n.classList.contains("minimized")?"□":"－"),t&&(t.textContent=n.classList.contains("maximized")?"❐":"□")}function yM(n){const e=n.closest(".qt-window");if(!e)return;const t=n.dataset.windowAction;t==="minimize"?(e.classList.toggle("minimized"),e.classList.contains("minimized")&&e.classList.remove("maximized")):t==="maximize"?(e.classList.remove("minimized"),e.classList.toggle("maximized")):t==="close"&&(e.classList.add("closed"),e.classList.remove("minimized","maximized"),e===m.animationWindow&&ba()),er(e),cn(),e===m.animationWindow&&!e.classList.contains("closed")&&requestAnimationFrame(()=>kr(0))}function tc(n){var a,o,s;const e=ii,t=Math.max(3,Kt),i=Ei(e),r=Ei(t,40);n==="xoy"?(qe.position.set(0,0,i),rt.position.set(0,0,r)):n==="yoz"?(qe.position.set(i,0,0),rt.position.set(r,0,0)):n==="xoz"&&(qe.position.set(0,i,0),rt.position.set(0,r,0)),qe.lookAt(0,0,0),rt.lookAt(0,0,0),Ws(e),qs(t),Ae.target.set(0,0,0),It.target.set(0,0,0),Ae.update(),It.update(),(a=m.toolXOY)==null||a.classList.toggle("active",n==="xoy"),(o=m.toolYOZ)==null||o.classList.toggle("active",n==="yoz"),(s=m.toolXOZ)==null||s.classList.toggle("active",n==="xoz")}for(const n of[m.n,m.l,m.m,m.z,m.iso,m.density,m.radius,m.opacity,m.mode,m.slice,m.node,m.axis,m.box,m.positiveColor,m.negativeColor,m.backgroundColor,m.desktopMatch,m.boxSizeDisplay,m.cloud,m.positiveLobe,m.negativeLobe,m.wireframe,m.smooth,m.volume,m.projection,m.radialSection,m.radialSide,m.radialCurve,m.radialAxis,m.longitudeNode,m.grid3d,m.relationMode,m.syncRotation,m.scanRadius,m.scanTheta,m.scanPhi])n&&n.addEventListener("input",()=>{if(n===m.boxSizeDisplay&&i_(),ct(),Jt(),n===m.backgroundColor){Hl(m.backgroundColor.value);return}if([m.relationMode,m.syncRotation,m.scanRadius,m.scanTheta,m.scanPhi].includes(n)){$s();return}[m.wireframe,m.smooth].includes(n)||(n.type==="checkbox"||n.type==="color")&&at()});for(const n of[m.n,m.l,m.m,m.z,m.desktopMatch])n.addEventListener("change",()=>{Yr(),at()});m.preset.addEventListener("input",pM);m.renderButton.addEventListener("click",at);var oh;(oh=m.redrawProxyButton)==null||oh.addEventListener("click",at);var lh;(lh=m.presetButton)==null||lh.addEventListener("click",()=>{Yr(),at()});var ch;(ch=m.axisProxyButton)==null||ch.addEventListener("click",()=>{ec()});var uh;(uh=document.querySelector("#colorProxyButton"))==null||uh.addEventListener("click",()=>{m.paletteOne.checked=!m.paletteOne.checked,m.paletteTwo.checked=!m.paletteOne.checked,Nd(m.paletteOne.checked?"one":"two")});m.resetCameraButton.addEventListener("click",()=>Wl());m.screenshotButton.addEventListener("click",Qs);for(const n of document.querySelectorAll("[data-window-action]"))n.addEventListener("click",e=>{e.stopPropagation(),yM(n)});for(const n of m.menuItems)n.addEventListener("click",e=>{e.stopPropagation(),xM(n)});document.addEventListener("click",nn);m.menuPopup.addEventListener("click",n=>n.stopPropagation());Ji.addEventListener("click",Fd);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(Pr=!0,Us(!0)):Pr&&(Pr=!1,Us(!1))});var hh;(hh=m.toolRender)==null||hh.addEventListener("click",()=>{nn(),at()});var dh;(dh=m.toolSave)==null||dh.addEventListener("click",()=>{nn(),Qs()});var fh;(fh=m.toolTile)==null||fh.addEventListener("click",()=>{nn(),eo("tile")});var ph;(ph=m.toolOverlap)==null||ph.addEventListener("click",()=>{nn(),eo("overlap")});var mh;(mh=m.toolAxis)==null||mh.addEventListener("click",()=>{nn(),ec()});var gh;(gh=m.toolXOY)==null||gh.addEventListener("click",()=>{nn(),tc("xoy")});var vh;(vh=m.toolYOZ)==null||vh.addEventListener("click",()=>{nn(),tc("yoz")});var _h;(_h=m.toolXOZ)==null||_h.addEventListener("click",()=>{nn(),tc("xoz")});fn.domElement.addEventListener("click",Y_);window.addEventListener("resize",Is);mM();ex();t_();Is();eo("tile");Yr();Wl();at();Ud();
