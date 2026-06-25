(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="165",ro={ROTATE:0,DOLLY:1,PAN:2},Nd=0,sc=1,Fd=2,vh=1,Od=2,Xn=3,yi=0,jt=1,ht=2,vi=0,Sr=1,Qo=2,oc=3,lc=4,Bd=5,Oi=100,zd=101,kd=102,Vd=103,Hd=104,Gd=200,Wd=201,qd=202,Xd=203,el=204,tl=205,Yd=206,$d=207,jd=208,Zd=209,Kd=210,Jd=211,Qd=212,ef=213,tf=214,nf=0,rf=1,af=2,ps=3,sf=4,of=5,lf=6,cf=7,Is=0,uf=1,hf=2,xi=0,df=1,ff=2,pf=3,zr=4,mf=5,gf=6,_f=7,xh=300,Pr=301,Lr=302,nl=303,il=304,Ds=306,rl=1e3,ki=1001,al=1002,on=1003,vf=1004,Ta=1005,xn=1006,ao=1007,Vi=1008,Si=1009,xf=1010,Mf=1011,ms=1012,Mh=1013,Ir=1014,gi=1015,Us=1016,yh=1017,Sh=1018,Dr=1020,yf=35902,Sf=1021,bf=1022,In=1023,Ef=1024,wf=1025,br=1026,Ur=1027,Tf=1028,bh=1029,Af=1030,Eh=1031,wh=1033,so=33776,oo=33777,lo=33778,co=33779,cc=35840,uc=35841,hc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37808,_c=37809,vc=37810,xc=37811,Mc=37812,yc=37813,Sc=37814,bc=37815,Ec=37816,wc=37817,Tc=37818,Ac=37819,Cc=37820,Rc=37821,uo=36492,Pc=36494,Lc=36495,Cf=36283,Ic=36284,Dc=36285,Uc=36286,Rf=3200,Pf=3201,Ns=0,Lf=1,pi="",Nt="srgb",Ei="srgb-linear",El="display-p3",Fs="display-p3-linear",gs="linear",ot="srgb",_s="rec709",vs="p3",Qi=7680,Nc=519,If=512,Df=513,Uf=514,Th=515,Nf=516,Ff=517,Of=518,Bf=519,sl=35044,Aa=35048,Fc="300 es",$n=2e3,xs=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oc=1234567;const Er=Math.PI/180,pa=180/Math.PI;function Jn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function wl(n,e){return(n%e+e)%e}function zf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function kf(n,e,t){return n!==e?(t-n)/(e-n):0}function aa(n,e,t){return(1-t)*n+t*e}function Vf(n,e,t,i){return aa(n,e,1-Math.exp(-t*i))}function Hf(n,e=1){return e-Math.abs(wl(n,e*2)-e)}function Gf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xf(n,e){return n+Math.random()*(e-n)}function Yf(n){return n*(.5-Math.random())}function $f(n){n!==void 0&&(Oc=n);let e=Oc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jf(n){return n*Er}function Zf(n){return n*pa}function Kf(n){return(n&n-1)===0&&n!==0}function Jf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ep(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+i)/2),u=o((e+i)/2),h=a((e-i)/2),f=o((e-i)/2),d=a((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(s*u,l*h,l*f,s*c);break;case"YZY":n.set(l*f,s*u,l*h,s*c);break;case"ZXZ":n.set(l*h,l*f,s*u,s*c);break;case"XZX":n.set(s*u,l*_,l*d,s*c);break;case"YXY":n.set(l*d,s*u,l*_,s*c);break;case"ZYZ":n.set(l*_,l*d,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Bc={DEG2RAD:Er,RAD2DEG:pa,generateUUID:Jn,clamp:bt,euclideanModulo:wl,mapLinear:zf,inverseLerp:kf,lerp:aa,damp:Vf,pingpong:Hf,smoothstep:Gf,smootherstep:Wf,randInt:qf,randFloat:Xf,randFloatSpread:Yf,seededRandom:$f,degToRad:jf,radToDeg:Zf,isPowerOfTwo:Kf,ceilPowerOfTwo:Jf,floorPowerOfTwo:Qf,setQuaternionFromProperEuler:ep,normalize:Je,denormalize:Mn};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,a,o,s,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],v=r[0],g=r[3],p=r[6],M=r[1],x=r[4],y=r[7],T=r[2],E=r[5],A=r[8];return a[0]=o*v+s*M+l*T,a[3]=o*g+s*x+l*E,a[6]=o*p+s*y+l*A,a[1]=c*v+u*M+h*T,a[4]=c*g+u*x+h*E,a[7]=c*p+u*y+h*A,a[2]=f*v+d*M+_*T,a[5]=f*g+d*x+_*E,a[8]=f*p+d*y+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*o-s*c,f=s*l-u*a,d=c*a-o*l,_=t*h+i*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(s*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*a-s*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ho.makeScale(e,t)),this}rotate(e){return this.premultiply(ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ho=new Be;function Ah(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tp(){const n=Ms("canvas");return n.style.display="block",n}const zc={};function Tl(n){n in zc||(zc[n]=!0,console.warn(n))}function np(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const kc=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vc=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ca={[Ei]:{transfer:gs,primaries:_s,toReference:n=>n,fromReference:n=>n},[Nt]:{transfer:ot,primaries:_s,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Fs]:{transfer:gs,primaries:vs,toReference:n=>n.applyMatrix3(Vc),fromReference:n=>n.applyMatrix3(kc)},[El]:{transfer:ot,primaries:vs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Vc),fromReference:n=>n.applyMatrix3(kc).convertLinearToSRGB()}},ip=new Set([Ei,Fs]),Qe={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ip.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ca[e].toReference,r=Ca[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ca[n].primaries},getTransfer:function(n){return n===pi?gs:Ca[n].transfer}};function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let er;class rp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=Ms("canvas")),er.width=e.width,er.height=e.height;const i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=wr(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ap=0;class Ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(po(r[o].image)):a.push(po(r[o]))}else a=po(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sp=0;class Xt extends Xi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=ki,r=ki,a=xn,o=Vi,s=In,l=Si,c=Xt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Jn(),this.name="",this.source=new Ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rl:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rl:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=xh;Xt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,T=(p+1)/2,E=(u+f)/4,A=(h+v)/4,R=(_+g)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(x),r=E/i,a=A/i):y>T?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=E/r,a=R/r):T<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(T),i=A/a,r=R/a),this.set(i,r,a,t),this}let M=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(h-v)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class op extends Xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ch(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends op{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rh extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lp extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=a[o+0],d=a[o+1],_=a[o+2],v=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==_){let g=1-s;const p=l*f+c*d+u*_+h*v,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),E=Math.atan2(T,p*M);g=Math.sin(g*E)/T,s=Math.sin(s*E)/T}const y=s*M;if(l=l*g+f*y,c=c*g+d*y,u=u*g+_*y,h=h*g+v*y,g===1-s){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=a[o],f=a[o+1],d=a[o+2],_=a[o+3];return e[t]=s*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-s*d,e[t+2]=c*_+u*d+s*f-l*h,e[t+3]=u*_-s*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),h=s(a/2),f=l(i/2),d=l(r/2),_=l(a/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+s+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(a-c)*d,this._z=(o-r)*d}else if(i>s&&i>h){const d=2*Math.sqrt(1+i-s-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(a+c)/d}else if(s>h){const d=2*Math.sqrt(1+s-i-h);this._w=(a-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-s);this._w=(o-r)/d,this._x=(a+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),u=2*(s*t-a*r),h=2*(a*i-o*t);return this.x=t+l*c+o*h-s*u,this.y=i+l*u+s*c-a*h,this.z=r+l*h+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new P,Hc=new kr;class cn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(a,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Pa.subVectors(this.max,$r),tr.subVectors(e.a,$r),nr.subVectors(e.b,$r),ir.subVectors(e.c,$r),si.subVectors(nr,tr),oi.subVectors(ir,nr),Pi.subVectors(tr,ir);let t=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Pi.z,Pi.y,si.z,0,-si.x,oi.z,0,-oi.x,Pi.z,0,-Pi.x,-si.y,si.x,0,-oi.y,oi.x,0,-Pi.y,Pi.x,0];return!go(t,tr,nr,ir,Pa)||(t=[1,0,0,0,1,0,0,0,1],!go(t,tr,nr,ir,Pa))?!1:(La.crossVectors(si,oi),t=[La.x,La.y,La.z],go(t,tr,nr,ir,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new P,new P,new P,new P,new P,new P,new P,new P],fn=new P,Ra=new cn,tr=new P,nr=new P,ir=new P,si=new P,oi=new P,Pi=new P,$r=new P,Pa=new P,La=new P,Li=new P;function go(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Li.fromArray(n,a);const s=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=i.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const cp=new cn,jr=new P,_o=new P;class wi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const t=jr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(_o)),this.expandByPoint(jr.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new P,vo=new P,Ia=new P,li=new P,xo=new P,Da=new P,Mo=new P;class Os{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vo.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),li.copy(this.origin).sub(vo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Ia),s=li.dot(this.direction),l=-li.dot(Ia),c=li.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-s,f=o*s-l,_=a*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*s)+f*(o*h+f+2*l)+c}else f=a,h=Math.max(0,-(o*f+s)),d=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(o*f+s)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*a+s)),f=h>0?-a:Math.min(Math.max(-a,-l),a),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-a,-l),a),d=f*(f+2*l)+c):(h=Math.max(0,-(o*a+s)),f=h>0?a:Math.min(Math.max(-a,-l),a),d=-h*h+f*(f+2*l)+c);else f=o>0?-a:a,h=Math.max(0,-(o*f+s)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vo).addScaledVector(Ia,f),d}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),r=Hn.dot(Hn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(a=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,r,a){xo.subVectors(t,e),Da.subVectors(i,e),Mo.crossVectors(xo,Da);let o=this.direction.dot(Mo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=s*this.direction.dot(Da.crossVectors(li,Da));if(l<0)return null;const c=s*this.direction.dot(xo.cross(li));if(c<0||l+c>o)return null;const u=-s*li.dot(Mo);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,r,a,o,s,l,c,u,h,f,d,_,v,g){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,u,h,f,d,_,v,g)}set(e,t,i,r,a,o,s,l,c,u,h,f,d,_,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),a=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=o*u,d=o*h,_=s*u,v=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-v*c,t[9]=-s*l,t[2]=v-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,v=c*h;t[0]=f+v*s,t[4]=_*s-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=d*s-_,t[6]=v+f*s,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,v=c*h;t[0]=f-v*s,t[4]=-o*h,t[8]=_+d*s,t[1]=d+_*s,t[5]=o*u,t[9]=v-f*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=s*u,v=s*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=s*l,v=s*c;t[0]=l*u,t[4]=v-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=s*l,v=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=s*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,hp)}lookAt(e,t,i){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ci.crossVectors(i,Qt),ci.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ci.crossVectors(i,Qt)),ci.normalize(),Ua.crossVectors(Qt,ci),r[0]=ci.x,r[4]=Ua.x,r[8]=Qt.x,r[1]=ci.y,r[5]=Ua.y,r[9]=Qt.y,r[2]=ci.z,r[6]=Ua.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],v=i[6],g=i[10],p=i[14],M=i[3],x=i[7],y=i[11],T=i[15],E=r[0],A=r[4],R=r[8],b=r[12],S=r[1],L=r[5],F=r[9],U=r[13],N=r[2],H=r[6],V=r[10],$=r[14],G=r[3],ne=r[7],le=r[11],ie=r[15];return a[0]=o*E+s*S+l*N+c*G,a[4]=o*A+s*L+l*H+c*ne,a[8]=o*R+s*F+l*V+c*le,a[12]=o*b+s*U+l*$+c*ie,a[1]=u*E+h*S+f*N+d*G,a[5]=u*A+h*L+f*H+d*ne,a[9]=u*R+h*F+f*V+d*le,a[13]=u*b+h*U+f*$+d*ie,a[2]=_*E+v*S+g*N+p*G,a[6]=_*A+v*L+g*H+p*ne,a[10]=_*R+v*F+g*V+p*le,a[14]=_*b+v*U+g*$+p*ie,a[3]=M*E+x*S+y*N+T*G,a[7]=M*A+x*L+y*H+T*ne,a[11]=M*R+x*F+y*V+T*le,a[15]=M*b+x*U+y*$+T*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+a*l*h-r*c*h-a*s*f+i*c*f+r*s*d-i*l*d)+v*(+t*l*d-t*c*f+a*o*f-r*o*d+r*c*u-a*l*u)+g*(+t*c*h-t*s*d-a*o*h+i*o*d+a*s*u-i*c*u)+p*(-r*s*u-t*l*h+t*s*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],v=e[13],g=e[14],p=e[15],M=h*g*c-v*f*c+v*l*d-s*g*d-h*l*p+s*f*p,x=_*f*c-u*g*c-_*l*d+o*g*d+u*l*p-o*f*p,y=u*v*c-_*h*c+_*s*d-o*v*d-u*s*p+o*h*p,T=_*h*l-u*v*l-_*s*f+o*v*f+u*s*g-o*h*g,E=t*M+i*x+r*y+a*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=M*A,e[1]=(v*f*a-h*g*a-v*r*d+i*g*d+h*r*p-i*f*p)*A,e[2]=(s*g*a-v*l*a+v*r*c-i*g*c-s*r*p+i*l*p)*A,e[3]=(h*l*a-s*f*a-h*r*c+i*f*c+s*r*d-i*l*d)*A,e[4]=x*A,e[5]=(u*g*a-_*f*a+_*r*d-t*g*d-u*r*p+t*f*p)*A,e[6]=(_*l*a-o*g*a-_*r*c+t*g*c+o*r*p-t*l*p)*A,e[7]=(o*f*a-u*l*a+u*r*c-t*f*c-o*r*d+t*l*d)*A,e[8]=y*A,e[9]=(_*h*a-u*v*a-_*i*d+t*v*d+u*i*p-t*h*p)*A,e[10]=(o*v*a-_*s*a+_*i*c-t*v*c-o*i*p+t*s*p)*A,e[11]=(u*s*a-o*h*a-u*i*c+t*h*c+o*i*d-t*s*d)*A,e[12]=T*A,e[13]=(u*v*r-_*h*r+_*i*f-t*v*f-u*i*g+t*h*g)*A,e[14]=(_*s*r-o*v*r-_*i*l+t*v*l+o*i*g-t*s*g)*A,e[15]=(o*h*r-u*s*r+u*i*l-t*h*l-o*i*f+t*s*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,h=s+s,f=a*c,d=a*u,_=a*h,v=o*u,g=o*h,p=s*h,M=l*c,x=l*u,y=l*h,T=i.x,E=i.y,A=i.z;return r[0]=(1-(v+p))*T,r[1]=(d+y)*T,r[2]=(_-x)*T,r[3]=0,r[4]=(d-y)*E,r[5]=(1-(f+p))*E,r[6]=(g+M)*E,r[7]=0,r[8]=(_+x)*A,r[9]=(g-M)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=rr.set(r[0],r[1],r[2]).length();const o=rr.set(r[4],r[5],r[6]).length(),s=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const c=1/a,u=1/o,h=1/s;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=$n){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,_;if(s===$n)d=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===xs)d=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=$n){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-a),f=(t+e)*c,d=(i+r)*u;let _,v;if(s===$n)_=(o+a)*h,v=-2*h;else if(s===xs)_=a*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rr=new P,pn=new st,up=new P(0,0,0),hp=new P(1,1,1),ci=new P,Ua=new P,Qt=new P,Gc=new st,Wc=new kr;class un{constructor(e=0,t=0,i=0,r=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dp=0;const qc=new P,ar=new kr,Gn=new st,Na=new P,Zr=new P,fp=new P,pp=new kr,Xc=new P(1,0,0),Yc=new P(0,1,0),$c=new P(0,0,1),jc={type:"added"},mp={type:"removed"},sr={type:"childadded",child:null},yo={type:"childremoved",child:null};class gt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new P,t=new un,i=new kr,r=new P(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Be}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis($c,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis($c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Na.copy(e):Na.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Zr,Na,this.up):Gn.lookAt(Na,Zr,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Gn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jc),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mp),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jc),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new P(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new P,Wn=new P,So=new P,qn=new P,or=new P,lr=new P,Zc=new P,bo=new P,Eo=new P,wo=new P;class sn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),mn.subVectors(e,t),r.cross(mn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){mn.subVectors(r,t),Wn.subVectors(i,t),So.subVectors(e,t);const o=mn.dot(mn),s=mn.dot(Wn),l=mn.dot(So),c=Wn.dot(Wn),u=Wn.dot(So),h=o*c-s*s;if(h===0)return a.set(0,0,0),null;const f=1/h,d=(c*l-s*u)*f,_=(o*u-s*l)*f;return a.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(s,qn.z),l)}static isFrontFacing(e,t,i,r){return mn.subVectors(i,t),Wn.subVectors(e,t),mn.cross(Wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),mn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;or.subVectors(r,i),lr.subVectors(a,i),bo.subVectors(e,i);const l=or.dot(bo),c=lr.dot(bo);if(l<=0&&c<=0)return t.copy(i);Eo.subVectors(e,r);const u=or.dot(Eo),h=lr.dot(Eo);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(or,o);wo.subVectors(e,a);const d=or.dot(wo),_=lr.dot(wo);if(_>=0&&d<=_)return t.copy(a);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(i).addScaledVector(lr,s);const g=u*_-d*h;if(g<=0&&h-u>=0&&d-_>=0)return Zc.subVectors(a,r),s=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(Zc,s);const p=1/(g+v+f);return o=v*p,s=f*p,t.copy(i).addScaledVector(or,o).addScaledVector(lr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function To(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=wl(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=To(o,a,e+1/3),this.g=To(o,a,e),this.b=To(o,a,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=Ph[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Qe.fromWorkingColorSpace(Dt.copy(this),e),Math.round(bt(Dt.r*255,0,255))*65536+Math.round(bt(Dt.g*255,0,255))*256+Math.round(bt(Dt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,a=Dt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=u<=.5?h/(o+s):h/(2-o-s),o){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Nt){Qe.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Fa);const i=aa(ui.h,Fa.h,t),r=aa(ui.s,Fa.s,t),a=aa(ui.l,Fa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new xe;xe.NAMES=Ph;let gp=0;class Bn extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Sr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==el&&(i.blendSrc=this.blendSrc),this.blendDst!==tl&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ti extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new P,Oa=new ue;class Bt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Tl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),a=Je(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class Lh extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ih extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class We extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _p=0;const rn=new st,Ao=new gt,cr=new P,en=new cn,Kr=new cn,St=new P;class Ze extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ah(e)?Ih:Lh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Be().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new We(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];en.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Kr.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(en.min,Kr.min),en.expandByPoint(St),St.addVectors(en.max,Kr.max),en.expandByPoint(St)):(en.expandByPoint(Kr.min),en.expandByPoint(Kr.max))}en.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)St.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(St));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)St.fromBufferAttribute(s,c),l&&(cr.fromBufferAttribute(e,c),St.add(cr)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let R=0;R<i.count;R++)s[R]=new P,l[R]=new P;const c=new P,u=new P,h=new P,f=new ue,d=new ue,_=new ue,v=new P,g=new P;function p(R,b,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),f.fromBufferAttribute(a,R),d.fromBufferAttribute(a,b),_.fromBufferAttribute(a,S),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(L),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),s[R].add(v),s[b].add(v),s[S].add(v),l[R].add(g),l[b].add(g),l[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,b=M.length;R<b;++R){const S=M[R],L=S.start,F=S.count;for(let U=L,N=L+F;U<N;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new P,y=new P,T=new P,E=new P;function A(R){T.fromBufferAttribute(r,R),E.copy(T);const b=s[R];x.copy(b),x.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(E,b);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,b=M.length;R<b;++R){const S=M[R],L=S.start,F=S.count;for(let U=L,N=L+F;U<N;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new P,a=new P,o=new P,s=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),s.add(u),l.add(u),c.add(u),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let v=0,g=l.length;v<g;v++){s.isInterleavedBufferAttribute?d=l[v]*s.data.stride+s.offset:d=l[v]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Bt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ze,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new st,Ii=new Os,Ba=new wi,Jc=new P,ur=new P,hr=new P,dr=new P,Co=new P,za=new P,ka=new ue,Va=new ue,Ha=new ue,Qc=new P,eu=new P,tu=new P,Ga=new P,Wa=new P;class rt extends gt{constructor(e=new Ze,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){za.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],h=a[l];u!==0&&(Co.fromBufferAttribute(h,e),o?za.addScaledVector(Co,u):za.addScaledVector(Co.sub(t),u))}t.add(za)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(a),Ii.copy(e.ray).recast(e.near),!(Ba.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Ba,Jc)===null||Ii.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Kc.copy(a).invert(),Ii.copy(e.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,f=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=o[g.materialIndex],M=Math.max(g.start,d.start),x=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,T=x;y<T;y+=3){const E=s.getX(y),A=s.getX(y+1),R=s.getX(y+2);r=qa(this,p,e,i,c,u,h,E,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(s.count,d.start+d.count);for(let g=_,p=v;g<p;g+=3){const M=s.getX(g),x=s.getX(g+1),y=s.getX(g+2);r=qa(this,o,e,i,c,u,h,M,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],p=o[g.materialIndex],M=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,T=x;y<T;y+=3){const E=y,A=y+1,R=y+2;r=qa(this,p,e,i,c,u,h,E,A,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=_,p=v;g<p;g+=3){const M=g,x=g+1,y=g+2;r=qa(this,o,e,i,c,u,h,M,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function vp(n,e,t,i,r,a,o,s){let l;if(e.side===jt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===yi,s),l===null)return null;Wa.copy(s),Wa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:n}}function qa(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,ur),n.getVertexPosition(l,hr),n.getVertexPosition(c,dr);const u=vp(n,e,t,i,ur,hr,dr,Ga);if(u){r&&(ka.fromBufferAttribute(r,s),Va.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,c),u.uv=sn.getInterpolation(Ga,ur,hr,dr,ka,Va,Ha,new ue)),a&&(ka.fromBufferAttribute(a,s),Va.fromBufferAttribute(a,l),Ha.fromBufferAttribute(a,c),u.uv1=sn.getInterpolation(Ga,ur,hr,dr,ka,Va,Ha,new ue)),o&&(Qc.fromBufferAttribute(o,s),eu.fromBufferAttribute(o,l),tu.fromBufferAttribute(o,c),u.normal=sn.getInterpolation(Ga,ur,hr,dr,Qc,eu,tu,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new P,materialIndex:0};sn.getNormal(ur,hr,dr,h.normal),u.face=h}return u}class Vr extends Ze{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,a,0),_("z","y","x",1,-1,i,t,-e,o,a,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2));function _(v,g,p,M,x,y,T,E,A,R,b){const S=y/A,L=T/R,F=y/2,U=T/2,N=E/2,H=A+1,V=R+1;let $=0,G=0;const ne=new P;for(let le=0;le<V;le++){const ie=le*L-U;for(let ye=0;ye<H;ye++){const Me=ye*S-F;ne[v]=Me*M,ne[g]=ie*x,ne[p]=N,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[g]=0,ne[p]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(ye/A),h.push(1-le/R),$+=1}}for(let le=0;le<R;le++)for(let ie=0;ie<A;ie++){const ye=f+ie+H*le,Me=f+ie+H*(le+1),Y=f+(ie+1)+H*(le+1),K=f+(ie+1)+H*le;l.push(ye,Me,K),l.push(Me,Y,K),G+=6}s.addGroup(d,G,b),d+=G,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Nr(n[t]);for(const r in i)e[r]=i[r]}return e}function xp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Mp={clone:Nr,merge:Wt};var yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Uh extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new P,nu=new ue,iu=new ue;class vn extends Uh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,pr=1;class bp extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(fr,pr,e,t);r.layers=this.layers,this.add(r);const a=new vn(fr,pr,e,t);a.layers=this.layers,this.add(a);const o=new vn(fr,pr,e,t);o.layers=this.layers,this.add(o);const s=new vn(fr,pr,e,t);s.layers=this.layers,this.add(s);const l=new vn(fr,pr,e,t);l.layers=this.layers,this.add(l);const c=new vn(fr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Nh extends Xt{constructor(e,t,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vr(5,5,5),a=new Qn({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:vi});a.uniforms.tEquirect.value=t;const o=new rt(r,a),s=t.minFilter;return t.minFilter===Vi&&(t.minFilter=xn),new bp(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const Ro=new P,wp=new P,Tp=new Be;class Ft{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ro.subVectors(i,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Tp.getNormalMatrix(e),r=this.coplanarPoint(Ro).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new wi,Xa=new P;class Cl{constructor(e=new Ft,t=new Ft,i=new Ft,r=new Ft,a=new Ft,o=new Ft){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],v=r[10],g=r[11],p=r[12],M=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-a,f-c,g-d,y-p).normalize(),i[1].setComponents(l+a,f+c,g+d,y+p).normalize(),i[2].setComponents(l+o,f+u,g+_,y+M).normalize(),i[3].setComponents(l-o,f-u,g-_,y-M).normalize(),i[4].setComponents(l-s,f-h,g-v,y-x).normalize(),t===$n)i[5].setComponents(l+s,f+h,g+v,y+x).normalize();else if(t===xs)i[5].setComponents(s,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fh(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Ap(n){const e=new WeakMap;function t(s,l){const c=s.array,u=s.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),s.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:h}}function i(s,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,s),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(n.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:r,remove:a,update:o}}class Bs extends Ze{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,h=e/s,f=t/l,d=[],_=[],v=[],g=[];for(let p=0;p<u;p++){const M=p*f-o;for(let x=0;x<c;x++){const y=x*h-a;_.push(y,-M,0),v.push(0,0,1),g.push(x/s),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<s;M++){const x=M+c*p,y=M+c*(p+1),T=M+1+c*(p+1),E=M+1+c*p;d.push(x,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new We(_,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`
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
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Tm=`struct PhysicalMaterial {
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
}`,Am=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Om=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
}`,N0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,X0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,j0=`#define PHONG
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
}`,Z0=`#define PHONG
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
}`,K0=`#define STANDARD
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
}`,J0=`#define STANDARD
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
}`,Q0=`#define TOON
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
}`,eg=`#define TOON
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
}`,tg=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,ag=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Cp,alphahash_pars_fragment:Rp,alphamap_fragment:Pp,alphamap_pars_fragment:Lp,alphatest_fragment:Ip,alphatest_pars_fragment:Dp,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:Fp,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:kp,iridescence_fragment:Vp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Xp,color_fragment:Yp,color_pars_fragment:$p,color_pars_vertex:jp,color_vertex:Zp,common:Kp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:em,displacementmap_vertex:tm,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:rm,colorspace_pars_fragment:am,envmap_fragment:sm,envmap_common_pars_fragment:om,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:Mm,envmap_vertex:um,fog_vertex:hm,fog_pars_vertex:dm,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:vm,lights_pars_begin:xm,lights_toon_fragment:ym,lights_toon_pars_fragment:Sm,lights_phong_fragment:bm,lights_phong_pars_fragment:Em,lights_physical_fragment:wm,lights_physical_pars_fragment:Tm,lights_fragment_begin:Am,lights_fragment_maps:Cm,lights_fragment_end:Rm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Dm,map_fragment:Um,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:km,morphcolor_vertex:Vm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Wm,normal_fragment_begin:qm,normal_fragment_maps:Xm,normal_pars_fragment:Ym,normal_pars_vertex:$m,normal_vertex:jm,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:r0,dithering_fragment:a0,dithering_pars_fragment:s0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:u0,shadowmap_vertex:h0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:v0,tonemapping_fragment:x0,tonemapping_pars_fragment:M0,transmission_fragment:y0,transmission_pars_fragment:S0,uv_pars_fragment:b0,uv_pars_vertex:E0,uv_vertex:w0,worldpos_vertex:T0,background_vert:A0,background_frag:C0,backgroundCube_vert:R0,backgroundCube_frag:P0,cube_vert:L0,cube_frag:I0,depth_vert:D0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:F0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:k0,meshbasic_vert:V0,meshbasic_frag:H0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:q0,meshmatcap_frag:X0,meshnormal_vert:Y0,meshnormal_frag:$0,meshphong_vert:j0,meshphong_frag:Z0,meshphysical_vert:K0,meshphysical_frag:J0,meshtoon_vert:Q0,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:rg,sprite_vert:ag,sprite_frag:sg},de={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Tn={basic:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new xe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Wt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Wt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Wt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Wt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Wt([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Wt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Wt([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Wt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Wt([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Wt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Wt([de.lights,de.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Tn.physical={uniforms:Wt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ya={r:0,b:0,g:0},Ui=new un,og=new st;function lg(n,e,t,i,r,a,o){const s=new xe(0);let l=a===!0?0:1,c,u,h=null,f=0,d=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const y=_(M);y===null?p(s,l):y&&y.isColor&&(p(y,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===Ds)?(u===void 0&&(u=new rt(new Vr(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Nr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ui.copy(x.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(Ui)),u.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,(h!==y||f!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new rt(new Bs(2,2),new Qn({name:"BackgroundMaterial",uniforms:Nr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Ya,Dh(n)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,x,o)}return{getClearColor:function(){return s},setClearColor:function(M,x=1){s.set(M),l=x,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(s,l)},render:v,addToRenderList:g}}function cg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let a=r,o=!1;function s(S,L,F,U,N){let H=!1;const V=h(U,F,L);a!==V&&(a=V,c(a.object)),H=d(S,U,F,N),H&&_(S,U,F,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(S,L,F,U),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,L,F){const U=F.wireframe===!0;let N=i[S.id];N===void 0&&(N={},i[S.id]=N);let H=N[L.id];H===void 0&&(H={},N[L.id]=H);let V=H[U];return V===void 0&&(V=f(l()),H[U]=V),V}function f(S){const L=[],F=[],U=[];for(let N=0;N<t;N++)L[N]=0,F[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:U,object:S,attributes:{},index:null}}function d(S,L,F,U){const N=a.attributes,H=L.attributes;let V=0;const $=F.getAttributes();for(const G in $)if($[G].location>=0){const le=N[G];let ie=H[G];if(ie===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),le===void 0||le.attribute!==ie||ie&&le.data!==ie.data)return!0;V++}return a.attributesNum!==V||a.index!==U}function _(S,L,F,U){const N={},H=L.attributes;let V=0;const $=F.getAttributes();for(const G in $)if($[G].location>=0){let le=H[G];le===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const ie={};ie.attribute=le,le&&le.data&&(ie.data=le.data),N[G]=ie,V++}a.attributes=N,a.attributesNum=V,a.index=U}function v(){const S=a.newAttributes;for(let L=0,F=S.length;L<F;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){const F=a.newAttributes,U=a.enabledAttributes,N=a.attributeDivisors;F[S]=1,U[S]===0&&(n.enableVertexAttribArray(S),U[S]=1),N[S]!==L&&(n.vertexAttribDivisor(S,L),N[S]=L)}function M(){const S=a.newAttributes,L=a.enabledAttributes;for(let F=0,U=L.length;F<U;F++)L[F]!==S[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function x(S,L,F,U,N,H,V){V===!0?n.vertexAttribIPointer(S,L,F,N,H):n.vertexAttribPointer(S,L,F,U,N,H)}function y(S,L,F,U){v();const N=U.attributes,H=F.getAttributes(),V=L.defaultAttributeValues;for(const $ in H){const G=H[$];if(G.location>=0){let ne=N[$];if(ne===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const le=ne.normalized,ie=ne.itemSize,ye=e.get(ne);if(ye===void 0)continue;const Me=ye.buffer,Y=ye.type,K=ye.bytesPerElement,he=Y===n.INT||Y===n.UNSIGNED_INT||ne.gpuType===Mh;if(ne.isInterleavedBufferAttribute){const B=ne.data,Q=B.stride,ge=ne.offset;if(B.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee,B.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)g(G.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Ee=0;Ee<G.locationSize;Ee++)x(G.location+Ee,ie/G.locationSize,Y,le,Q*K,(ge+ie/G.locationSize*Ee)*K,he)}else{if(ne.isInstancedBufferAttribute){for(let B=0;B<G.locationSize;B++)p(G.location+B,ne.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let B=0;B<G.locationSize;B++)g(G.location+B);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let B=0;B<G.locationSize;B++)x(G.location+B,ie/G.locationSize,Y,le,ie*K,ie/G.locationSize*B*K,he)}}else if(V!==void 0){const le=V[$];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(G.location,le);break;case 3:n.vertexAttrib3fv(G.location,le);break;case 4:n.vertexAttrib4fv(G.location,le);break;default:n.vertexAttrib1fv(G.location,le)}}}}M()}function T(){R();for(const S in i){const L=i[S];for(const F in L){const U=L[F];for(const N in U)u(U[N].object),delete U[N];delete L[F]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const F in L){const U=L[F];for(const N in U)u(U[N].object),delete U[N];delete L[F]}delete i[S.id]}function A(S){for(const L in i){const F=i[L];if(F[S.id]===void 0)continue;const U=F[S.id];for(const N in U)u(U[N].object),delete U[N];delete F[S.id]}}function R(){b(),o=!0,a!==r&&(a=r,c(a.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:R,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function ug(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function s(c,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h;d++)this.render(c[d],u[d]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v];for(let v=0;v<f.length;v++)t.update(_,i,f[v])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function hg(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==In&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(E){const A=E===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Si&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==gi&&!A)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:y,maxSamples:T}}function dg(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new Ft,s=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||a&&!g)a?u(null):c();else{const M=a?0:i,x=M*4;let y=p.clippingState||null;l.value=y,y=u(_,f,x,d);for(let T=0;T!==x;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const p=d+v*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=d;x!==v;++x,y+=4)o.copy(h[x]).applyMatrix4(M,s),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function fg(n){let e=new WeakMap;function t(o,s){return s===nl?o.mapping=Pr:s===il&&(o.mapping=Lr),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===nl||s===il)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ep(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class bn extends Uh{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yr=4,ru=[.125,.215,.35,.446,.526,.582],Bi=20,Po=new bn,au=new xe;let Lo=null,Io=0,Do=0,Uo=!1;const Fi=(1+Math.sqrt(5))/2,mr=1/Fi,su=[new P(-Fi,mr,0),new P(Fi,mr,0),new P(-mr,0,Fi),new P(mr,0,Fi),new P(0,Fi,-mr),new P(0,Fi,mr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Lo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lo,Io,Do),this._renderer.xr.enabled=Uo,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Us,format:In,colorSpace:Ei,depthBuffer:!1},r=lu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pg(a)),this._blurMaterial=mg(a,e,t)}return r}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,i,r){const s=new vn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(au),u.toneMapping=xi,u.autoClear=!1;const d=new ti({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),_=new rt(new Vr,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(au),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(s.up.set(0,l[p],0),s.lookAt(c[p],0,0)):M===1?(s.up.set(0,0,l[p]),s.lookAt(0,c[p],0)):(s.up.set(0,l[p],0),s.lookAt(0,0,c[p]));const x=this._cubeSize;$a(r,M*x,p>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pr||e.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;$a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Po)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=su[(r-a-1)%su.length];this._blur(e,a-1,a,o,s)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Bi-1),v=a/_,g=isFinite(a)?1+Math.floor(u*v):Bi;g>Bi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const p=[];let M=0;for(let A=0;A<Bi;++A){const R=A/v,b=Math.exp(-R*R/2);p.push(b),A===0?M+=b:A<g&&(M+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-yr?r-x+yr:0),E=4*(this._cubeSize-y);$a(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(h,Po)}}function pg(n){const e=[],t=[],i=[];let r=n;const a=n-yr+1+ru.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-yr?l=ru[o-n+yr-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,v=3,g=2,p=1,M=new Float32Array(v*_*d),x=new Float32Array(g*_*d),y=new Float32Array(p*_*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,R=E>2?0:-1,b=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];M.set(b,v*_*E),x.set(f,g*_*E);const S=[E,E,E,E,E,E];y.set(S,p*_*E)}const T=new Ze;T.setAttribute("position",new Bt(M,v)),T.setAttribute("uv",new Bt(x,g)),T.setAttribute("faceIndex",new Bt(y,p)),e.push(T),r>yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lu(n,e,t){const i=new Wi(n,e,t);return i.texture.mapping=Ds,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mg(n,e,t){const i=new Float32Array(Bi),r=new P(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function cu(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function uu(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function gg(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===nl||l===il,u=l===Pr||l===Lr;if(c||u){let h=e.get(s);const f=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==f)return t===null&&(t=new ou(n)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),h.texture;if(h!==void 0)return h.texture;{const d=s.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new ou(n)),h=c?t.fromEquirectangular(s):t.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),s.addEventListener("dispose",a),h.texture):null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _g(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Tl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vg(n,e,t,i){const r={},a=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete r[f.id];const d=a.get(f);d&&(e.remove(d),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const v=d[_];for(let g=0,p=v.length;g<p;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let x=0,y=M.length;x<y;x+=3){const T=M[x+0],E=M[x+1],A=M[x+2];f.push(T,E,E,A,A,T)}}else if(_!==void 0){const M=_.array;v=_.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const T=x+0,E=x+1,A=x+2;f.push(T,E,E,A,A,T)}}else return;const g=new(Ah(f)?Ih:Lh)(f,1);g.version=v;const p=a.get(h);p&&e.remove(p),a.set(h,g)}function u(h){const f=a.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function xg(n,e,t){let i;function r(f){i=f}let a,o;function s(f){a=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,a,f*o),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,a,f*o,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<_;g++)this.render(f[g]/o,d[g]);else{v.multiDrawElementsWEBGL(i,d,0,a,f,0,_);let g=0;for(let p=0;p<_;p++)g+=d[p];t.update(g,i,1)}}function h(f,d,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,a,f,0,v,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M];for(let M=0;M<v.length;M++)t.update(p,i,v[M])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Mg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yg(n,e,t){const i=new WeakMap,r=new Et;function a(o,s,l){const c=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(s);if(f===void 0||f.count!==h){let S=function(){R.dispose(),i.delete(s),s.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const _=s.morphAttributes.position!==void 0,v=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,p=s.morphAttributes.position||[],M=s.morphAttributes.normal||[],x=s.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let T=s.attributes.position.count*y,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*E*4*h),R=new Rh(A,T,E,h);R.type=gi,R.needsUpdate=!0;const b=y*4;for(let L=0;L<h;L++){const F=p[L],U=M[L],N=x[L],H=T*E*4*L;for(let V=0;V<F.count;V++){const $=V*b;_===!0&&(r.fromBufferAttribute(F,V),A[H+$+0]=r.x,A[H+$+1]=r.y,A[H+$+2]=r.z,A[H+$+3]=0),v===!0&&(r.fromBufferAttribute(U,V),A[H+$+4]=r.x,A[H+$+5]=r.y,A[H+$+6]=r.z,A[H+$+7]=0),g===!0&&(r.fromBufferAttribute(N,V),A[H+$+8]=r.x,A[H+$+9]=r.y,A[H+$+10]=r.z,A[H+$+11]=N.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new ue(T,E)},i.set(s,f),s.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function Sg(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class Oh extends Xt{constructor(e,t,i,r,a,o,s,l,c,u=br){if(u!==br&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===br&&(i=Ir),i===void 0&&u===Ur&&(i=Dr),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bh=new Xt,zh=new Oh(1,1);zh.compareFunction=Th;const kh=new Rh,Vh=new lp,Hh=new Nh,hu=[],du=[],fu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=hu[r];if(a===void 0&&(a=new Float32Array(r),hu[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zs(n,e){let t=du[e];t===void 0&&(t=new Int32Array(e),du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function Ag(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;mu.set(i),n.uniformMatrix2fv(this.addr,!1,mu),xt(t,i)}}function Cg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;pu.set(i),n.uniformMatrix3fv(this.addr,!1,pu),xt(t,i)}}function Rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;fu.set(i),n.uniformMatrix4fv(this.addr,!1,fu),xt(t,i)}}function Pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function Ug(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function Bg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?zh:Bh;t.setTexture2D(e||a,r)}function zg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Vh,r)}function kg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hh,r)}function Vg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kh,r)}function Hg(n){switch(n){case 5126:return bg;case 35664:return Eg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Cg;case 35676:return Rg;case 5124:case 35670:return Pg;case 35667:case 35671:return Lg;case 35668:case 35672:return Ig;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ng;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Gg(n,e){n.uniform1fv(this.addr,e)}function Wg(n,e){const t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function qg(n,e){const t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function Xg(n,e){const t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function Yg(n,e){const t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $g(n,e){const t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jg(n,e){const t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zg(n,e){n.uniform1iv(this.addr,e)}function Kg(n,e){n.uniform2iv(this.addr,e)}function Jg(n,e){n.uniform3iv(this.addr,e)}function Qg(n,e){n.uniform4iv(this.addr,e)}function e1(n,e){n.uniform1uiv(this.addr,e)}function t1(n,e){n.uniform2uiv(this.addr,e)}function n1(n,e){n.uniform3uiv(this.addr,e)}function i1(n,e){n.uniform4uiv(this.addr,e)}function r1(n,e,t){const i=this.cache,r=e.length,a=zs(t,r);vt(i,a)||(n.uniform1iv(this.addr,a),xt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bh,a[o])}function a1(n,e,t){const i=this.cache,r=e.length,a=zs(t,r);vt(i,a)||(n.uniform1iv(this.addr,a),xt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Vh,a[o])}function s1(n,e,t){const i=this.cache,r=e.length,a=zs(t,r);vt(i,a)||(n.uniform1iv(this.addr,a),xt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hh,a[o])}function o1(n,e,t){const i=this.cache,r=e.length,a=zs(t,r);vt(i,a)||(n.uniform1iv(this.addr,a),xt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kh,a[o])}function l1(n){switch(n){case 5126:return Gg;case 35664:return Wg;case 35665:return qg;case 35666:return Xg;case 35674:return Yg;case 35675:return $g;case 35676:return jg;case 5124:case 35670:return Zg;case 35667:case 35671:return Kg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}class c1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hg(t.type)}}class u1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l1(t.type)}}class h1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const No=/(\w+)(\])?(\[|\.)?/g;function gu(n,e){n.seq.push(e),n.map[e.id]=e}function d1(n,e,t){const i=n.name,r=i.length;for(No.lastIndex=0;;){const a=No.exec(i),o=No.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){gu(t,c===void 0?new c1(s,n,e):new u1(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new h1(s),gu(t,h)),t=h}}}class ds{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);d1(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function _u(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const f1=37297;let p1=0;function m1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function g1(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===vs&&t===_s?i="LinearDisplayP3ToLinearSRGB":e===_s&&t===vs&&(i="LinearSRGBToLinearDisplayP3"),n){case Ei:case Fs:return[i,"LinearTransferOETF"];case Nt:case El:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function vu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+m1(n.getShaderSource(e),o)}else return r}function _1(n,e){const t=g1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function v1(n,e){let t;switch(e){case df:t="Linear";break;case ff:t="Reinhard";break;case pf:t="OptimizedCineon";break;case zr:t="ACESFilmic";break;case gf:t="AgX";break;case _f:t="Neutral";break;case mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function x1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function M1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function ia(n){return n!==""}function xu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(n){return n.replace(S1,E1)}const b1=new Map;function E1(n,e){let t=Oe[e];if(t===void 0){const i=b1.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ol(t)}const w1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(n){return n.replace(w1,T1)}function T1(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Su(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function A1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Od?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function C1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pr:case Lr:e="ENVMAP_TYPE_CUBE";break;case Ds:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function P1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Is:e="ENVMAP_BLENDING_MULTIPLY";break;case uf:e="ENVMAP_BLENDING_MIX";break;case hf:e="ENVMAP_BLENDING_ADD";break}return e}function L1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function I1(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=A1(t),c=C1(t),u=R1(t),h=P1(t),f=L1(t),d=x1(t),_=M1(a),v=r.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ia).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ia).join(`
`),p.length>0&&(p+=`
`)):(g=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),p=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==xi?v1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,_1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),o=ol(o),o=xu(o,t),o=Mu(o,t),s=ol(s),s=xu(s,t),s=Mu(s,t),o=yu(o),s=yu(s),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+g+o,y=M+p+s,T=_u(r,r.VERTEX_SHADER,x),E=_u(r,r.FRAGMENT_SHADER,y);r.attachShader(v,T),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(T).trim(),N=r.getShaderInfoLog(E).trim();let H=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,E);else{const $=vu(r,T,"vertex"),G=vu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+$+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||N==="")&&(V=!1);V&&(L.diagnostics={runnable:H,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:N,prefix:p}})}r.deleteShader(T),r.deleteShader(E),R=new ds(r,v),b=y1(r,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,f1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let D1=0;class U1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new N1(e),t.set(e,i)),i}}class N1{constructor(e){this.id=D1++,this.code=e,this.usedTimes=0}}function F1(n,e,t,i,r,a,o){const s=new Al,l=new U1,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,L,F,U){const N=F.fog,H=U.geometry,V=b.isMeshStandardMaterial?F.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),G=$&&$.mapping===Ds?$.image.height:null,ne=_[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=le!==void 0?le.length:0;let ye=0;H.morphAttributes.position!==void 0&&(ye=1),H.morphAttributes.normal!==void 0&&(ye=2),H.morphAttributes.color!==void 0&&(ye=3);let Me,Y,K,he;if(ne){const tt=Tn[ne];Me=tt.vertexShader,Y=tt.fragmentShader}else Me=b.vertexShader,Y=b.fragmentShader,l.update(b),K=l.getVertexShaderID(b),he=l.getFragmentShaderID(b);const B=n.getRenderTarget(),Q=U.isInstancedMesh===!0,ge=U.isBatchedMesh===!0,Ee=!!b.map,D=!!b.matcap,ce=!!$,Ne=!!b.aoMap,et=!!b.lightMap,Pe=!!b.bumpMap,qe=!!b.normalMap,Ve=!!b.displacementMap,Fe=!!b.emissiveMap,pt=!!b.metalnessMap,I=!!b.roughnessMap,w=b.anisotropy>0,X=b.clearcoat>0,J=b.dispersion>0,ee=b.iridescence>0,te=b.sheen>0,Ce=b.transmission>0,fe=w&&!!b.anisotropyMap,pe=X&&!!b.clearcoatMap,ze=X&&!!b.clearcoatNormalMap,re=X&&!!b.clearcoatRoughnessMap,we=ee&&!!b.iridescenceMap,He=ee&&!!b.iridescenceThicknessMap,De=te&&!!b.sheenColorMap,me=te&&!!b.sheenRoughnessMap,ke=!!b.specularMap,Ge=!!b.specularColorMap,dt=!!b.specularIntensityMap,O=Ce&&!!b.transmissionMap,_e=Ce&&!!b.thicknessMap,j=!!b.gradientMap,Z=!!b.alphaMap,oe=b.alphaTest>0,Ue=!!b.alphaHash,Xe=!!b.extensions;let ft=xi;b.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ft=n.toneMapping);const Mt={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:Me,fragmentShader:Y,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ge,batchingColor:ge&&U._colorsTexture!==null,instancing:Q,instancingColor:Q&&U.instanceColor!==null,instancingMorph:Q&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ei,alphaToCoverage:!!b.alphaToCoverage,map:Ee,matcap:D,envMap:ce,envMapMode:ce&&$.mapping,envMapCubeUVHeight:G,aoMap:Ne,lightMap:et,bumpMap:Pe,normalMap:qe,displacementMap:f&&Ve,emissiveMap:Fe,normalMapObjectSpace:qe&&b.normalMapType===Lf,normalMapTangentSpace:qe&&b.normalMapType===Ns,metalnessMap:pt,roughnessMap:I,anisotropy:w,anisotropyMap:fe,clearcoat:X,clearcoatMap:pe,clearcoatNormalMap:ze,clearcoatRoughnessMap:re,dispersion:J,iridescence:ee,iridescenceMap:we,iridescenceThicknessMap:He,sheen:te,sheenColorMap:De,sheenRoughnessMap:me,specularMap:ke,specularColorMap:Ge,specularIntensityMap:dt,transmission:Ce,transmissionMap:O,thicknessMap:_e,gradientMap:j,opaque:b.transparent===!1&&b.blending===Sr&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:oe,alphaHash:Ue,combine:b.combine,mapUv:Ee&&v(b.map.channel),aoMapUv:Ne&&v(b.aoMap.channel),lightMapUv:et&&v(b.lightMap.channel),bumpMapUv:Pe&&v(b.bumpMap.channel),normalMapUv:qe&&v(b.normalMap.channel),displacementMapUv:Ve&&v(b.displacementMap.channel),emissiveMapUv:Fe&&v(b.emissiveMap.channel),metalnessMapUv:pt&&v(b.metalnessMap.channel),roughnessMapUv:I&&v(b.roughnessMap.channel),anisotropyMapUv:fe&&v(b.anisotropyMap.channel),clearcoatMapUv:pe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ze&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(b.sheenRoughnessMap.channel),specularMapUv:ke&&v(b.specularMap.channel),specularColorMapUv:Ge&&v(b.specularColorMap.channel),specularIntensityMapUv:dt&&v(b.specularIntensityMap.channel),transmissionMapUv:O&&v(b.transmissionMap.channel),thicknessMapUv:_e&&v(b.thicknessMap.channel),alphaMapUv:Z&&v(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(qe||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Ee||Z),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ht,flipSided:b.side===jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Xe&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(M(S,b),x(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),b.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.doubleSided&&s.enable(10),S.flipSided&&s.enable(11),S.useDepthPacking&&s.enable(12),S.dithering&&s.enable(13),S.transmission&&s.enable(14),S.sheen&&s.enable(15),S.opaque&&s.enable(16),S.pointsUvs&&s.enable(17),S.decodeVideoTexture&&s.enable(18),S.alphaToCoverage&&s.enable(19),b.push(s.mask)}function y(b){const S=_[b.type];let L;if(S){const F=Tn[S];L=Mp.clone(F.uniforms)}else L=b.uniforms;return L}function T(b,S){let L;for(let F=0,U=u.length;F<U;F++){const N=u[F];if(N.cacheKey===S){L=N,++L.usedTimes;break}}return L===void 0&&(L=new I1(n,S,b,a),u.push(L)),L}function E(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:R}}function O1(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function B1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Eu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,_,v,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function s(h,f,d,_,v,g){const p=o(h,f,d,_,v,g);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,_,v,g){const p=o(h,f,d,_,v,g);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||B1),i.length>1&&i.sort(f||bu),r.length>1&&r.sort(f||bu)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function z1(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Eu,n.set(i,[o])):r>=a.length?(o=new Eu,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function k1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new xe};break;case"SpotLight":t={position:new P,direction:new P,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function V1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let H1=0;function G1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W1(n){const e=new k1,t=V1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,a=new st,o=new st;function s(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,_=0,v=0,g=0,p=0,M=0,x=0,y=0,T=0,E=0,A=0;c.sort(G1);for(let b=0,S=c.length;b<S;b++){const L=c[b],F=L.color,U=L.intensity,N=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*U,h+=F.g*U,f+=F.b*U;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],U);A++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,G=t.get(L);G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=L.shadow.matrix,M++}i.directional[d]=V,d++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(U),V.distance=N,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[v]=V;const $=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,$.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[v]=$.matrix,L.castShadow){const G=t.get(L);G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=H,y++}v++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(F).multiplyScalar(U),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=V,g++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const $=L.shadow,G=t.get(L);G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=L.shadow.matrix,x++}i.point[_]=V,_++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(U),V.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[p]=V,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==v||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==T||R.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,R.directionalLength=d,R.pointLength=_,R.spotLength=v,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=T,R.numLightProbes=A,i.version=H1++)}function l(c,u){let h=0,f=0,d=0,_=0,v=0;const g=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),a.copy(x.matrixWorld),a.premultiply(g),o.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:s,setupView:l,state:i}}function wu(n){const e=new W1(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function s(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function q1(n){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new wu(n),e.set(r,[s])):a>=o.length?(s=new wu(n),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}class X1 extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y1 extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
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
}`;function Z1(n,e,t){let i=new Cl;const r=new ue,a=new ue,o=new Et,s=new X1({depthPacking:Pf}),l=new Y1,c={},u=t.maxTextureSize,h={[yi]:jt,[jt]:yi,[ht]:ht},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:$1,fragmentShader:j1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ze;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new rt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let p=this.type;this.render=function(E,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(vi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==Xn&&this.type===Xn,N=p===Xn&&this.type!==Xn;for(let H=0,V=E.length;H<V;H++){const $=E[H],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ne=G.getFrameExtents();if(r.multiply(ne),a.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ne.x),r.x=a.x*ne.x,G.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ne.y),r.y=a.y*ne.y,G.mapSize.y=a.y)),G.map===null||U===!0||N===!0){const ie=this.type!==Xn?{minFilter:on,magFilter:on}:{};G.map!==null&&G.map.dispose(),G.map=new Wi(r.x,r.y,ie),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const le=G.getViewportCount();for(let ie=0;ie<le;ie++){const ye=G.getViewport(ie);o.set(a.x*ye.x,a.y*ye.y,a.x*ye.z,a.y*ye.w),F.viewport(o),G.updateMatrices($,ie),i=G.getFrustum(),y(A,R,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Xn&&M(G,R),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,S,L)};function M(E,A){const R=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wi(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,R,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,R,d,v,null)}function x(E,A,R,b){let S=null;const L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:s,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=S.uuid,U=A.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let H=N[U];H===void 0&&(H=S.clone(),N[U]=H,A.addEventListener("dispose",T)),S=H}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Xn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=R}return S}function y(E,A,R,b,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Xn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const U=e.update(E),N=E.material;if(Array.isArray(N)){const H=U.groups;for(let V=0,$=H.length;V<$;V++){const G=H[V],ne=N[G.materialIndex];if(ne&&ne.visible){const le=x(E,ne,b,S);E.onBeforeShadow(n,E,A,R,U,le,G),n.renderBufferDirect(R,null,U,le,E,G),E.onAfterShadow(n,E,A,R,U,le,G)}}}else if(N.visible){const H=x(E,N,b,S);E.onBeforeShadow(n,E,A,R,U,H,null),n.renderBufferDirect(R,null,U,H,E,null),E.onAfterShadow(n,E,A,R,U,H,null)}}const F=E.children;for(let U=0,N=F.length;U<N;U++)y(F[U],A,R,b,S)}function T(E){E.target.removeEventListener("dispose",T);for(const R in c){const b=c[R],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function K1(n){function e(){let O=!1;const _e=new Et;let j=null;const Z=new Et(0,0,0,0);return{setMask:function(oe){j!==oe&&!O&&(n.colorMask(oe,oe,oe,oe),j=oe)},setLocked:function(oe){O=oe},setClear:function(oe,Ue,Xe,ft,Mt){Mt===!0&&(oe*=ft,Ue*=ft,Xe*=ft),_e.set(oe,Ue,Xe,ft),Z.equals(_e)===!1&&(n.clearColor(oe,Ue,Xe,ft),Z.copy(_e))},reset:function(){O=!1,j=null,Z.set(-1,0,0,0)}}}function t(){let O=!1,_e=null,j=null,Z=null;return{setTest:function(oe){oe?he(n.DEPTH_TEST):B(n.DEPTH_TEST)},setMask:function(oe){_e!==oe&&!O&&(n.depthMask(oe),_e=oe)},setFunc:function(oe){if(j!==oe){switch(oe){case nf:n.depthFunc(n.NEVER);break;case rf:n.depthFunc(n.ALWAYS);break;case af:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case sf:n.depthFunc(n.EQUAL);break;case of:n.depthFunc(n.GEQUAL);break;case lf:n.depthFunc(n.GREATER);break;case cf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=oe}},setLocked:function(oe){O=oe},setClear:function(oe){Z!==oe&&(n.clearDepth(oe),Z=oe)},reset:function(){O=!1,_e=null,j=null,Z=null}}}function i(){let O=!1,_e=null,j=null,Z=null,oe=null,Ue=null,Xe=null,ft=null,Mt=null;return{setTest:function(tt){O||(tt?he(n.STENCIL_TEST):B(n.STENCIL_TEST))},setMask:function(tt){_e!==tt&&!O&&(n.stencilMask(tt),_e=tt)},setFunc:function(tt,En,wn){(j!==tt||Z!==En||oe!==wn)&&(n.stencilFunc(tt,En,wn),j=tt,Z=En,oe=wn)},setOp:function(tt,En,wn){(Ue!==tt||Xe!==En||ft!==wn)&&(n.stencilOp(tt,En,wn),Ue=tt,Xe=En,ft=wn)},setLocked:function(tt){O=tt},setClear:function(tt){Mt!==tt&&(n.clearStencil(tt),Mt=tt)},reset:function(){O=!1,_e=null,j=null,Z=null,oe=null,Ue=null,Xe=null,ft=null,Mt=null}}}const r=new e,a=new t,o=new i,s=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,v=null,g=null,p=null,M=null,x=null,y=null,T=null,E=new xe(0,0,0),A=0,R=!1,b=null,S=null,L=null,F=null,U=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),H=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=V>=2);let G=null,ne={};const le=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),ye=new Et().fromArray(le),Me=new Et().fromArray(ie);function Y(O,_e,j,Z){const oe=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(O,Ue),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<j;Xe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(_e+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return Ue}const K={};K[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(n.DEPTH_TEST),a.setFunc(ps),Pe(!1),qe(sc),he(n.CULL_FACE),Ne(vi);function he(O){c[O]!==!0&&(n.enable(O),c[O]=!0)}function B(O){c[O]!==!1&&(n.disable(O),c[O]=!1)}function Q(O,_e){return u[O]!==_e?(n.bindFramebuffer(O,_e),u[O]=_e,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_e),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function ge(O,_e){let j=f,Z=!1;if(O){j=h.get(_e),j===void 0&&(j=[],h.set(_e,j));const oe=O.textures;if(j.length!==oe.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,Xe=oe.length;Ue<Xe;Ue++)j[Ue]=n.COLOR_ATTACHMENT0+Ue;j.length=oe.length,Z=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,Z=!0);Z&&n.drawBuffers(j)}function Ee(O){return d!==O?(n.useProgram(O),d=O,!0):!1}const D={[Oi]:n.FUNC_ADD,[zd]:n.FUNC_SUBTRACT,[kd]:n.FUNC_REVERSE_SUBTRACT};D[Vd]=n.MIN,D[Hd]=n.MAX;const ce={[Gd]:n.ZERO,[Wd]:n.ONE,[qd]:n.SRC_COLOR,[el]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[jd]:n.DST_COLOR,[Yd]:n.DST_ALPHA,[Xd]:n.ONE_MINUS_SRC_COLOR,[tl]:n.ONE_MINUS_SRC_ALPHA,[Zd]:n.ONE_MINUS_DST_COLOR,[$d]:n.ONE_MINUS_DST_ALPHA,[Jd]:n.CONSTANT_COLOR,[Qd]:n.ONE_MINUS_CONSTANT_COLOR,[ef]:n.CONSTANT_ALPHA,[tf]:n.ONE_MINUS_CONSTANT_ALPHA};function Ne(O,_e,j,Z,oe,Ue,Xe,ft,Mt,tt){if(O===vi){_===!0&&(B(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),O!==Bd){if(O!==v||tt!==R){if((g!==Oi||x!==Oi)&&(n.blendEquation(n.FUNC_ADD),g=Oi,x=Oi),tt)switch(O){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFunc(n.ONE,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}p=null,M=null,y=null,T=null,E.set(0,0,0),A=0,v=O,R=tt}return}oe=oe||_e,Ue=Ue||j,Xe=Xe||Z,(_e!==g||oe!==x)&&(n.blendEquationSeparate(D[_e],D[oe]),g=_e,x=oe),(j!==p||Z!==M||Ue!==y||Xe!==T)&&(n.blendFuncSeparate(ce[j],ce[Z],ce[Ue],ce[Xe]),p=j,M=Z,y=Ue,T=Xe),(ft.equals(E)===!1||Mt!==A)&&(n.blendColor(ft.r,ft.g,ft.b,Mt),E.copy(ft),A=Mt),v=O,R=!1}function et(O,_e){O.side===ht?B(n.CULL_FACE):he(n.CULL_FACE);let j=O.side===jt;_e&&(j=!j),Pe(j),O.blending===Sr&&O.transparent===!1?Ne(vi):Ne(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Z=O.stencilWrite;o.setTest(Z),Z&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):B(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(O){b!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),b=O)}function qe(O){O!==Nd?(he(n.CULL_FACE),O!==S&&(O===sc?n.cullFace(n.BACK):O===Fd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):B(n.CULL_FACE),S=O}function Ve(O){O!==L&&(H&&n.lineWidth(O),L=O)}function Fe(O,_e,j){O?(he(n.POLYGON_OFFSET_FILL),(F!==_e||U!==j)&&(n.polygonOffset(_e,j),F=_e,U=j)):B(n.POLYGON_OFFSET_FILL)}function pt(O){O?he(n.SCISSOR_TEST):B(n.SCISSOR_TEST)}function I(O){O===void 0&&(O=n.TEXTURE0+N-1),G!==O&&(n.activeTexture(O),G=O)}function w(O,_e,j){j===void 0&&(G===null?j=n.TEXTURE0+N-1:j=G);let Z=ne[j];Z===void 0&&(Z={type:void 0,texture:void 0},ne[j]=Z),(Z.type!==O||Z.texture!==_e)&&(G!==j&&(n.activeTexture(j),G=j),n.bindTexture(O,_e||K[O]),Z.type=O,Z.texture=_e)}function X(){const O=ne[G];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(O){ye.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ye.copy(O))}function me(O){Me.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Me.copy(O))}function ke(O,_e){let j=l.get(_e);j===void 0&&(j=new WeakMap,l.set(_e,j));let Z=j.get(O);Z===void 0&&(Z=n.getUniformBlockIndex(_e,O.name),j.set(O,Z))}function Ge(O,_e){const Z=l.get(_e).get(O);s.get(_e)!==Z&&(n.uniformBlockBinding(_e,Z,O.__bindingPointIndex),s.set(_e,Z))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,ne={},u={},h=new WeakMap,f=[],d=null,_=!1,v=null,g=null,p=null,M=null,x=null,y=null,T=null,E=new xe(0,0,0),A=0,R=!1,b=null,S=null,L=null,F=null,U=null,ye.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:B,bindFramebuffer:Q,drawBuffers:ge,useProgram:Ee,setBlending:Ne,setMaterial:et,setFlipSided:Pe,setCullFace:qe,setLineWidth:Ve,setPolygonOffset:Fe,setScissorTest:pt,activeTexture:I,bindTexture:w,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:we,texImage3D:He,updateUBOMapping:ke,uniformBlockBinding:Ge,texStorage2D:ze,texStorage3D:re,texSubImage2D:te,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:pe,scissor:De,viewport:me,reset:dt}}function J1(n,e,t,i,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,w){return d?new OffscreenCanvas(I,w):Ms("canvas")}function v(I,w,X){let J=1;const ee=pt(I);if((ee.width>X||ee.height>X)&&(J=X/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const te=Math.floor(J*ee.width),Ce=Math.floor(J*ee.height);h===void 0&&(h=_(te,Ce));const fe=w?_(te,Ce):h;return fe.width=te,fe.height=Ce,fe.getContext("2d").drawImage(I,0,0,te,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+Ce+")."),fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==on&&I.minFilter!==xn}function p(I){n.generateMipmap(I)}function M(I,w,X,J,ee=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=w;if(w===n.RED&&(X===n.FLOAT&&(te=n.R32F),X===n.HALF_FLOAT&&(te=n.R16F),X===n.UNSIGNED_BYTE&&(te=n.R8)),w===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(te=n.R8UI),X===n.UNSIGNED_SHORT&&(te=n.R16UI),X===n.UNSIGNED_INT&&(te=n.R32UI),X===n.BYTE&&(te=n.R8I),X===n.SHORT&&(te=n.R16I),X===n.INT&&(te=n.R32I)),w===n.RG&&(X===n.FLOAT&&(te=n.RG32F),X===n.HALF_FLOAT&&(te=n.RG16F),X===n.UNSIGNED_BYTE&&(te=n.RG8)),w===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(te=n.RG8UI),X===n.UNSIGNED_SHORT&&(te=n.RG16UI),X===n.UNSIGNED_INT&&(te=n.RG32UI),X===n.BYTE&&(te=n.RG8I),X===n.SHORT&&(te=n.RG16I),X===n.INT&&(te=n.RG32I)),w===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),w===n.RGBA){const Ce=ee?gs:Qe.getTransfer(J);X===n.FLOAT&&(te=n.RGBA32F),X===n.HALF_FLOAT&&(te=n.RGBA16F),X===n.UNSIGNED_BYTE&&(te=Ce===ot?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(I,w){let X;return I?w===null||w===Ir||w===Dr?X=n.DEPTH24_STENCIL8:w===gi?X=n.DEPTH32F_STENCIL8:w===ms&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ir||w===Dr?X=n.DEPTH_COMPONENT24:w===gi?X=n.DEPTH_COMPONENT32F:w===ms&&(X=n.DEPTH_COMPONENT16),X}function y(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==xn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){const w=I.target;w.removeEventListener("dispose",T),A(w),w.isVideoTexture&&u.delete(w)}function E(I){const w=I.target;w.removeEventListener("dispose",E),b(w)}function A(I){const w=i.get(I);if(w.__webglInit===void 0)return;const X=I.source,J=f.get(X);if(J){const ee=J[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(I),Object.keys(J).length===0&&f.delete(X)}i.remove(I)}function R(I){const w=i.get(I);n.deleteTexture(w.__webglTexture);const X=I.source,J=f.get(X);delete J[w.__cacheKey],o.memory.textures--}function b(I){const w=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ee=0;ee<w.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)n.deleteFramebuffer(w.__webglFramebuffer[J]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=I.textures;for(let J=0,ee=X.length;J<ee;J++){const te=i.get(X[J]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(X[J])}i.remove(I)}let S=0;function L(){S=0}function F(){const I=S;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),S+=1,I}function U(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function N(I,w){const X=i.get(I);if(I.isVideoTexture&&Ve(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){const J=I.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(X,I,w);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+w)}function H(I,w){const X=i.get(I);if(I.version>0&&X.__version!==I.version){Me(X,I,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+w)}function V(I,w){const X=i.get(I);if(I.version>0&&X.__version!==I.version){Me(X,I,w);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+w)}function $(I,w){const X=i.get(I);if(I.version>0&&X.__version!==I.version){Y(X,I,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+w)}const G={[rl]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[al]:n.MIRRORED_REPEAT},ne={[on]:n.NEAREST,[vf]:n.NEAREST_MIPMAP_NEAREST,[Ta]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[ao]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},le={[If]:n.NEVER,[Bf]:n.ALWAYS,[Df]:n.LESS,[Th]:n.LEQUAL,[Uf]:n.EQUAL,[Of]:n.GEQUAL,[Nf]:n.GREATER,[Ff]:n.NOTEQUAL};function ie(I,w){if(w.type===gi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xn||w.magFilter===ao||w.magFilter===Ta||w.magFilter===Vi||w.minFilter===xn||w.minFilter===ao||w.minFilter===Ta||w.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,G[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,G[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,G[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ne[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ne[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===on||w.minFilter!==Ta&&w.minFilter!==Vi||w.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ye(I,w){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",T));const J=w.source;let ee=f.get(J);ee===void 0&&(ee={},f.set(J,ee));const te=U(w);if(te!==I.__cacheKey){ee[te]===void 0&&(ee[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[te].usedTimes++;const Ce=ee[I.__cacheKey];Ce!==void 0&&(ee[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&R(w)),I.__cacheKey=te,I.__webglTexture=ee[te].texture}return X}function Me(I,w,X){let J=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=n.TEXTURE_3D);const ee=ye(I,w),te=w.source;t.bindTexture(J,I.__webglTexture,n.TEXTURE0+X);const Ce=i.get(te);if(te.version!==Ce.__version||ee===!0){t.activeTexture(n.TEXTURE0+X);const fe=Qe.getPrimaries(Qe.workingColorSpace),pe=w.colorSpace===pi?null:Qe.getPrimaries(w.colorSpace),ze=w.colorSpace===pi||fe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let re=v(w.image,!1,r.maxTextureSize);re=Fe(w,re);const we=a.convert(w.format,w.colorSpace),He=a.convert(w.type);let De=M(w.internalFormat,we,He,w.colorSpace,w.isVideoTexture);ie(J,w);let me;const ke=w.mipmaps,Ge=w.isVideoTexture!==!0,dt=Ce.__version===void 0||ee===!0,O=te.dataReady,_e=y(w,re);if(w.isDepthTexture)De=x(w.format===Ur,w.type),dt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,De,re.width,re.height,0,we,He,null));else if(w.isDataTexture)if(ke.length>0){Ge&&dt&&t.texStorage2D(n.TEXTURE_2D,_e,De,ke[0].width,ke[0].height);for(let j=0,Z=ke.length;j<Z;j++)me=ke[j],Ge?O&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,we,He,me.data):t.texImage2D(n.TEXTURE_2D,j,De,me.width,me.height,0,we,He,me.data);w.generateMipmaps=!1}else Ge?(dt&&t.texStorage2D(n.TEXTURE_2D,_e,De,re.width,re.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,we,He,re.data)):t.texImage2D(n.TEXTURE_2D,0,De,re.width,re.height,0,we,He,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,De,ke[0].width,ke[0].height,re.depth);for(let j=0,Z=ke.length;j<Z;j++)if(me=ke[j],w.format!==In)if(we!==null)if(Ge){if(O)if(w.layerUpdates.size>0){for(const oe of w.layerUpdates){const Ue=me.width*me.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,oe,me.width,me.height,1,we,me.data.slice(Ue*oe,Ue*(oe+1)),0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,re.depth,we,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,De,me.width,me.height,re.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,re.depth,we,He,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,De,me.width,me.height,re.depth,0,we,He,me.data)}else{Ge&&dt&&t.texStorage2D(n.TEXTURE_2D,_e,De,ke[0].width,ke[0].height);for(let j=0,Z=ke.length;j<Z;j++)me=ke[j],w.format!==In?we!==null?Ge?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,we,me.data):t.compressedTexImage2D(n.TEXTURE_2D,j,De,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?O&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,me.width,me.height,we,He,me.data):t.texImage2D(n.TEXTURE_2D,j,De,me.width,me.height,0,we,He,me.data)}else if(w.isDataArrayTexture)if(Ge){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,De,re.width,re.height,re.depth),O)if(w.layerUpdates.size>0){let j;switch(He){case n.UNSIGNED_BYTE:switch(we){case n.ALPHA:j=1;break;case n.LUMINANCE:j=1;break;case n.LUMINANCE_ALPHA:j=2;break;case n.RGB:j=3;break;case n.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${we}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${He}.`)}const Z=re.width*re.height*j;for(const oe of w.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,re.width,re.height,1,we,He,re.data.slice(Z*oe,Z*(oe+1)));w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,we,He,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,we,He,re.data);else if(w.isData3DTexture)Ge?(dt&&t.texStorage3D(n.TEXTURE_3D,_e,De,re.width,re.height,re.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,we,He,re.data)):t.texImage3D(n.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,we,He,re.data);else if(w.isFramebufferTexture){if(dt)if(Ge)t.texStorage2D(n.TEXTURE_2D,_e,De,re.width,re.height);else{let j=re.width,Z=re.height;for(let oe=0;oe<_e;oe++)t.texImage2D(n.TEXTURE_2D,oe,De,j,Z,0,we,He,null),j>>=1,Z>>=1}}else if(ke.length>0){if(Ge&&dt){const j=pt(ke[0]);t.texStorage2D(n.TEXTURE_2D,_e,De,j.width,j.height)}for(let j=0,Z=ke.length;j<Z;j++)me=ke[j],Ge?O&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,we,He,me):t.texImage2D(n.TEXTURE_2D,j,De,we,He,me);w.generateMipmaps=!1}else if(Ge){if(dt){const j=pt(re);t.texStorage2D(n.TEXTURE_2D,_e,De,j.width,j.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,He,re)}else t.texImage2D(n.TEXTURE_2D,0,De,we,He,re);g(w)&&p(J),Ce.__version=te.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Y(I,w,X){if(w.image.length!==6)return;const J=ye(I,w),ee=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+X);const te=i.get(ee);if(ee.version!==te.__version||J===!0){t.activeTexture(n.TEXTURE0+X);const Ce=Qe.getPrimaries(Qe.workingColorSpace),fe=w.colorSpace===pi?null:Qe.getPrimaries(w.colorSpace),pe=w.colorSpace===pi||Ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ze=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,we=[];for(let Z=0;Z<6;Z++)!ze&&!re?we[Z]=v(w.image[Z],!0,r.maxCubemapSize):we[Z]=re?w.image[Z].image:w.image[Z],we[Z]=Fe(w,we[Z]);const He=we[0],De=a.convert(w.format,w.colorSpace),me=a.convert(w.type),ke=M(w.internalFormat,De,me,w.colorSpace),Ge=w.isVideoTexture!==!0,dt=te.__version===void 0||J===!0,O=ee.dataReady;let _e=y(w,He);ie(n.TEXTURE_CUBE_MAP,w);let j;if(ze){Ge&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,ke,He.width,He.height);for(let Z=0;Z<6;Z++){j=we[Z].mipmaps;for(let oe=0;oe<j.length;oe++){const Ue=j[oe];w.format!==In?De!==null?Ge?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Ue.width,Ue.height,De,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Ue.width,Ue.height,De,me,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,ke,Ue.width,Ue.height,0,De,me,Ue.data)}}}else{if(j=w.mipmaps,Ge&&dt){j.length>0&&_e++;const Z=pt(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){Ge?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we[Z].width,we[Z].height,De,me,we[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,we[Z].width,we[Z].height,0,De,me,we[Z].data);for(let oe=0;oe<j.length;oe++){const Xe=j[oe].image[Z].image;Ge?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Xe.width,Xe.height,De,me,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,ke,Xe.width,Xe.height,0,De,me,Xe.data)}}else{Ge?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,me,we[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,De,me,we[Z]);for(let oe=0;oe<j.length;oe++){const Ue=j[oe];Ge?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,De,me,Ue.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,ke,De,me,Ue.image[Z])}}}g(w)&&p(n.TEXTURE_CUBE_MAP),te.__version=ee.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function K(I,w,X,J,ee,te){const Ce=a.convert(X.format,X.colorSpace),fe=a.convert(X.type),pe=M(X.internalFormat,Ce,fe,X.colorSpace);if(!i.get(w).__hasExternalTextures){const re=Math.max(1,w.width>>te),we=Math.max(1,w.height>>te);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,pe,re,we,w.depth,0,Ce,fe,null):t.texImage2D(ee,te,pe,re,we,0,Ce,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),qe(w)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,i.get(X).__webglTexture,0,Pe(w)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,i.get(X).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(I,w,X){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){const J=w.depthTexture,ee=J&&J.isDepthTexture?J.type:null,te=x(w.stencilBuffer,ee),Ce=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Pe(w);qe(w)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,te,w.width,w.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,te,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,te,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,I)}else{const J=w.textures;for(let ee=0;ee<J.length;ee++){const te=J[ee],Ce=a.convert(te.format,te.colorSpace),fe=a.convert(te.type),pe=M(te.internalFormat,Ce,fe,te.colorSpace),ze=Pe(w);X&&qe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,pe,w.width,w.height):qe(w)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,pe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,pe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function B(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,ee=Pe(w);if(w.depthTexture.format===br)qe(w)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(w.depthTexture.format===Ur)qe(w)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Q(I){const w=i.get(I),X=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");B(w.__webglFramebuffer,I)}else if(X){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=n.createRenderbuffer(),he(w.__webglDepthbuffer[J],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),he(w.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(I,w,X){const J=i.get(I);w!==void 0&&K(J.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Q(I)}function Ee(I){const w=I.texture,X=i.get(I),J=i.get(w);I.addEventListener("dispose",E);const ee=I.textures,te=I.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=w.version,o.memory.textures++),te){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let pe=0;pe<w.mipmaps.length;pe++)X.__webglFramebuffer[fe][pe]=n.createFramebuffer()}else X.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)X.__webglFramebuffer[fe]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let fe=0,pe=ee.length;fe<pe;fe++){const ze=i.get(ee[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&qe(I)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const pe=ee[fe];X.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const ze=a.convert(pe.format,pe.colorSpace),re=a.convert(pe.type),we=M(pe.internalFormat,ze,re,pe.colorSpace,I.isXRRenderTarget===!0),He=Pe(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,we,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),he(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ie(n.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)K(X.__webglFramebuffer[fe][pe],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else K(X.__webglFramebuffer[fe],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(w)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,pe=ee.length;fe<pe;fe++){const ze=ee[fe],re=i.get(ze);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),ie(n.TEXTURE_2D,ze),K(X.__webglFramebuffer,I,ze,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(ze)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,J.__webglTexture),ie(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)K(X.__webglFramebuffer[pe],I,w,n.COLOR_ATTACHMENT0,fe,pe);else K(X.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,fe,0);g(w)&&p(fe),t.unbindTexture()}I.depthBuffer&&Q(I)}function D(I){const w=I.textures;for(let X=0,J=w.length;X<J;X++){const ee=w[X];if(g(ee)){const te=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(ee).__webglTexture;t.bindTexture(te,Ce),p(te),t.unbindTexture()}}}const ce=[],Ne=[];function et(I){if(I.samples>0){if(qe(I)===!1){const w=I.textures,X=I.width,J=I.height;let ee=n.COLOR_BUFFER_BIT;const te=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(I),fe=w.length>1;if(fe)for(let pe=0;pe<w.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[pe]);const ze=i.get(w[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,X,J,0,0,X,J,ee,n.NEAREST),l===!0&&(ce.length=0,Ne.length=0,ce.push(n.COLOR_ATTACHMENT0+pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ce.push(te),Ne.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let pe=0;pe<w.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[pe]);const ze=i.get(w[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Pe(I){return Math.min(r.maxSamples,I.samples)}function qe(I){const w=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ve(I){const w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function Fe(I,w){const X=I.colorSpace,J=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Ei&&X!==pi&&(Qe.getTransfer(X)===ot?(J!==In||ee!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function pt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=ge,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=K,this.useMultisampledRTT=qe}function Q1(n,e){function t(i,r=pi){let a;const o=Qe.getTransfer(r);if(i===Si)return n.UNSIGNED_BYTE;if(i===yh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xf)return n.BYTE;if(i===Mf)return n.SHORT;if(i===ms)return n.UNSIGNED_SHORT;if(i===Mh)return n.INT;if(i===Ir)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===Us)return n.HALF_FLOAT;if(i===Sf)return n.ALPHA;if(i===bf)return n.RGB;if(i===In)return n.RGBA;if(i===Ef)return n.LUMINANCE;if(i===wf)return n.LUMINANCE_ALPHA;if(i===br)return n.DEPTH_COMPONENT;if(i===Ur)return n.DEPTH_STENCIL;if(i===Tf)return n.RED;if(i===bh)return n.RED_INTEGER;if(i===Af)return n.RG;if(i===Eh)return n.RG_INTEGER;if(i===wh)return n.RGBA_INTEGER;if(i===so||i===oo||i===lo||i===co)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===so)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===so)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===hc||i===dc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===cc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===pc||i===mc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===fc||i===pc)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===mc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gc||i===_c||i===vc||i===xc||i===Mc||i===yc||i===Sc||i===bc||i===Ec||i===wc||i===Tc||i===Ac||i===Cc||i===Rc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===gc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ac)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uo||i===Pc||i===Lc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===uo)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cf||i===Ic||i===Dc||i===Uc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===uo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ic)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class e_ extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t_={type:"move"};class Fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(t_)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`;class r_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Xt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Qn({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Bs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class a_ extends Xi{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const v=new r_,g=t.getContextAttributes();let p=null,M=null;const x=[],y=[],T=new ue;let E=null;const A=new vn;A.layers.enable(1),A.viewport=new Et;const R=new vn;R.layers.enable(2),R.viewport=new Et;const b=[A,R],S=new e_;S.layers.enable(1),S.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=x[Y];return K===void 0&&(K=new Fo,x[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=x[Y];return K===void 0&&(K=new Fo,x[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=x[Y];return K===void 0&&(K=new Fo,x[Y]=K),K.getHandSpace()};function U(Y){const K=y.indexOf(Y.inputSource);if(K===-1)return;const he=x[K];he!==void 0&&(he.update(Y.inputSource,Y.frame,c||o),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",H);for(let Y=0;Y<x.length;Y++){const K=y[Y];K!==null&&(y[Y]=null,x[Y].disconnect(K))}L=null,F=null,v.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,M=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",N),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Wi(d.framebufferWidth,d.framebufferHeight,{format:In,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,he=null,B=null;g.depth&&(B=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Ur:br,he=g.stencil?Dr:Ir);const Q={colorFormat:t.RGBA8,depthFormat:B,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Q),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Wi(f.textureWidth,f.textureHeight,{format:In,type:Si,depthTexture:new Oh(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(Y){for(let K=0;K<Y.removed.length;K++){const he=Y.removed[K],B=y.indexOf(he);B>=0&&(y[B]=null,x[B].disconnect(he))}for(let K=0;K<Y.added.length;K++){const he=Y.added[K];let B=y.indexOf(he);if(B===-1){for(let ge=0;ge<x.length;ge++)if(ge>=y.length){y.push(he),B=ge;break}else if(y[ge]===null){y[ge]=he,B=ge;break}if(B===-1)break}const Q=x[B];Q&&Q.connect(he)}}const V=new P,$=new P;function G(Y,K,he){V.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(he.matrixWorld);const B=V.distanceTo($),Q=K.projectionMatrix.elements,ge=he.projectionMatrix.elements,Ee=Q[14]/(Q[10]-1),D=Q[14]/(Q[10]+1),ce=(Q[9]+1)/Q[5],Ne=(Q[9]-1)/Q[5],et=(Q[8]-1)/Q[0],Pe=(ge[8]+1)/ge[0],qe=Ee*et,Ve=Ee*Pe,Fe=B/(-et+Pe),pt=Fe*-et;K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pt),Y.translateZ(Fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const I=Ee+Fe,w=D+Fe,X=qe-pt,J=Ve+(B-pt),ee=ce*D/w*I,te=Ne*D/w*I;Y.projectionMatrix.makePerspective(X,J,ee,te,I,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ne(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),S.near=R.near=A.near=Y.near,S.far=R.far=A.far=Y.far,(L!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,F=S.far,A.near=L,A.far=F,R.near=L,R.far=F,A.updateProjectionMatrix(),R.updateProjectionMatrix(),Y.updateProjectionMatrix());const K=Y.parent,he=S.cameras;ne(S,K);for(let B=0;B<he.length;B++)ne(he[B],K);he.length===2?G(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),le(Y,S,K)};function le(Y,K,he){he===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=pa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ie=null;function ye(Y,K){if(u=K.getViewerPose(c||o),_=K,u!==null){const he=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let B=!1;he.length!==S.cameras.length&&(S.cameras.length=0,B=!0);for(let ge=0;ge<he.length;ge++){const Ee=he[ge];let D=null;if(d!==null)D=d.getViewport(Ee);else{const Ne=h.getViewSubImage(f,Ee);D=Ne.viewport,ge===0&&(e.setRenderTargetTextures(M,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(M))}let ce=b[ge];ce===void 0&&(ce=new vn,ce.layers.enable(ge),ce.viewport=new Et,b[ge]=ce),ce.matrix.fromArray(Ee.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ee.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(D.x,D.y,D.width,D.height),ge===0&&(S.matrix.copy(ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),B===!0&&S.cameras.push(ce)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const ge=h.getDepthInformation(he[0]);ge&&ge.isValid&&ge.texture&&v.init(e,ge,r.renderState)}}for(let he=0;he<x.length;he++){const B=y[he],Q=x[he];B!==null&&Q!==void 0&&Q.update(B,K,c||o)}ie&&ie(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Me=new Fh;Me.setAnimationLoop(ye),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}}const Ni=new un,s_=new st;function o_(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Dh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,M,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(g,p):p.isMeshToonMaterial?(a(g,p),h(g,p)):p.isMeshPhongMaterial?(a(g,p),u(g,p)):p.isMeshStandardMaterial?(a(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(a(g,p),_(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),v(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?l(g,p,M,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,y=M.envMapRotation;x&&(g.envMap.value=x,Ni.copy(y),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),g.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(Ni)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function l_(n,e,t,i){let r={},a={},o=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const y=x.program;i.uniformBlockBinding(M,y)}function c(M,x){let y=r[M.id];y===void 0&&(_(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",g));const T=x.program;i.updateUBOMapping(M,T);const E=e.render.frame;a[M.id]!==E&&(f(M),a[M.id]=E)}function u(M){const x=h();M.__bindingPointIndex=x;const y=n.createBuffer(),T=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let M=0;M<s;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=r[M.id],y=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,A=y.length;E<A;E++){const R=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,S=R.length;b<S;b++){const L=R[b];if(d(L,E,b,T)===!0){const F=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let H=0;H<U.length;H++){const V=U[H],$=v(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,F+N,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,x,y,T){const E=M.value,A=x+"_"+y;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const R=T[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(M){const x=M.uniforms;let y=0;const T=16;for(let A=0,R=x.length;A<R;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,L=b.length;S<L;S++){const F=b[S],U=Array.isArray(F.value)?F.value:[F.value];for(let N=0,H=U.length;N<H;N++){const V=U[N],$=v(V),G=y%T;G!==0&&T-G<$.boundary&&(y+=T-G),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=$.storage}}}const E=y%T;return E>0&&(y+=T-E),M.__size=y,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},a={}}return{bind:l,update:c,dispose:p}}class ni{constructor(e={}){const{canvas:t=tp(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let v=null,g=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=xi,this.toneMappingExposure=1;const x=this;let y=!1,T=0,E=0,A=null,R=-1,b=null;const S=new Et,L=new Et;let F=null;const U=new xe(0);let N=0,H=t.width,V=t.height,$=1,G=null,ne=null;const le=new Et(0,0,H,V),ie=new Et(0,0,H,V);let ye=!1;const Me=new Cl;let Y=!1,K=!1;const he=new st,B=new P,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Ee(){return A===null?$:1}let D=i;function ce(C,z){return t.getContext(C,z)}try{const C={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",Z,!1),D===null){const z="webgl2";if(D=ce(z,C),D===null)throw ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ne,et,Pe,qe,Ve,Fe,pt,I,w,X,J,ee,te,Ce,fe,pe,ze,re,we,He,De,me,ke,Ge;function dt(){Ne=new _g(D),Ne.init(),me=new Q1(D,Ne),et=new hg(D,Ne,e,me),Pe=new K1(D),qe=new Mg(D),Ve=new O1,Fe=new J1(D,Ne,Pe,Ve,et,me,qe),pt=new fg(x),I=new gg(x),w=new Ap(D),ke=new cg(D,w),X=new vg(D,w,qe,ke),J=new Sg(D,X,w,qe),we=new yg(D,et,Fe),pe=new dg(Ve),ee=new F1(x,pt,I,Ne,et,ke,pe),te=new o_(x,Ve),Ce=new z1,fe=new q1(Ne),re=new lg(x,pt,I,Pe,J,f,l),ze=new Z1(x,J,et),Ge=new l_(D,qe,et,Pe),He=new ug(D,Ne,qe),De=new xg(D,Ne,qe),qe.programs=ee.programs,x.capabilities=et,x.extensions=Ne,x.properties=Ve,x.renderLists=Ce,x.shadowMap=ze,x.state=Pe,x.info=qe}dt();const O=new a_(x,D);this.xr=O,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(H,V,!1))},this.getSize=function(C){return C.set(H,V)},this.setSize=function(C,z,W=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,V=z,t.width=Math.floor(C*$),t.height=Math.floor(z*$),W===!0&&(t.style.width=C+"px",t.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(H*$,V*$).floor()},this.setDrawingBufferSize=function(C,z,W){H=C,V=z,$=W,t.width=Math.floor(C*W),t.height=Math.floor(z*W),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(le)},this.setViewport=function(C,z,W,q){C.isVector4?le.set(C.x,C.y,C.z,C.w):le.set(C,z,W,q),Pe.viewport(S.copy(le).multiplyScalar($).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,z,W,q){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,z,W,q),Pe.scissor(L.copy(ie).multiplyScalar($).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){Pe.setScissorTest(ye=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){ne=C},this.getClearColor=function(C){return C.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(C=!0,z=!0,W=!0){let q=0;if(C){let k=!1;if(A!==null){const se=A.texture.format;k=se===wh||se===Eh||se===bh}if(k){const se=A.texture.type,ve=se===Si||se===Ir||se===ms||se===Dr||se===yh||se===Sh,Se=re.getClearColor(),be=re.getClearAlpha(),Le=Se.r,Ie=Se.g,Re=Se.b;ve?(d[0]=Le,d[1]=Ie,d[2]=Re,d[3]=be,D.clearBufferuiv(D.COLOR,0,d)):(_[0]=Le,_[1]=Ie,_[2]=Re,_[3]=be,D.clearBufferiv(D.COLOR,0,_))}else q|=D.COLOR_BUFFER_BIT}z&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Ce.dispose(),fe.dispose(),Ve.dispose(),pt.dispose(),I.dispose(),J.dispose(),ke.dispose(),Ge.dispose(),ee.dispose(),O.dispose(),O.removeEventListener("sessionstart",En),O.removeEventListener("sessionend",wn),Ci.stop()};function _e(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=qe.autoReset,z=ze.enabled,W=ze.autoUpdate,q=ze.needsUpdate,k=ze.type;dt(),qe.autoReset=C,ze.enabled=z,ze.autoUpdate=W,ze.needsUpdate=q,ze.type=k}function Z(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oe(C){const z=C.target;z.removeEventListener("dispose",oe),Ue(z)}function Ue(C){Xe(C),Ve.remove(C)}function Xe(C){const z=Ve.get(C).programs;z!==void 0&&(z.forEach(function(W){ee.releaseProgram(W)}),C.isShaderMaterial&&ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,W,q,k,se){z===null&&(z=Q);const ve=k.isMesh&&k.matrixWorld.determinant()<0,Se=Ld(C,z,W,q,k);Pe.setMaterial(q,ve);let be=W.index,Le=1;if(q.wireframe===!0){if(be=X.getWireframeAttribute(W),be===void 0)return;Le=2}const Ie=W.drawRange,Re=W.attributes.position;let je=Ie.start*Le,ct=(Ie.start+Ie.count)*Le;se!==null&&(je=Math.max(je,se.start*Le),ct=Math.min(ct,(se.start+se.count)*Le)),be!==null?(je=Math.max(je,0),ct=Math.min(ct,be.count)):Re!=null&&(je=Math.max(je,0),ct=Math.min(ct,Re.count));const ut=ct-je;if(ut<0||ut===1/0)return;ke.setup(k,q,Se,W,be);let Jt,Ke=He;if(be!==null&&(Jt=w.get(be),Ke=De,Ke.setIndex(Jt)),k.isMesh)q.wireframe===!0?(Pe.setLineWidth(q.wireframeLinewidth*Ee()),Ke.setMode(D.LINES)):Ke.setMode(D.TRIANGLES);else if(k.isLine){let Te=q.linewidth;Te===void 0&&(Te=1),Pe.setLineWidth(Te*Ee()),k.isLineSegments?Ke.setMode(D.LINES):k.isLineLoop?Ke.setMode(D.LINE_LOOP):Ke.setMode(D.LINE_STRIP)}else k.isPoints?Ke.setMode(D.POINTS):k.isSprite&&Ke.setMode(D.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?Ke.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):Ke.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Ke.renderInstances(je,ut,k.count);else if(W.isInstancedBufferGeometry){const Te=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,zt=Math.min(W.instanceCount,Te);Ke.renderInstances(je,ut,zt)}else Ke.render(je,ut)};function ft(C,z,W){C.transparent===!0&&C.side===ht&&C.forceSinglePass===!1?(C.side=jt,C.needsUpdate=!0,Ea(C,z,W),C.side=yi,C.needsUpdate=!0,Ea(C,z,W),C.side=ht):Ea(C,z,W)}this.compile=function(C,z,W=null){W===null&&(W=C),g=fe.get(W),g.init(z),M.push(g),W.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),C!==W&&C.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights();const q=new Set;return C.traverse(function(k){const se=k.material;if(se)if(Array.isArray(se))for(let ve=0;ve<se.length;ve++){const Se=se[ve];ft(Se,W,k),q.add(Se)}else ft(se,W,k),q.add(se)}),M.pop(),g=null,q},this.compileAsync=function(C,z,W=null){const q=this.compile(C,z,W);return new Promise(k=>{function se(){if(q.forEach(function(ve){Ve.get(ve).currentProgram.isReady()&&q.delete(ve)}),q.size===0){k(C);return}setTimeout(se,10)}Ne.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Mt=null;function tt(C){Mt&&Mt(C)}function En(){Ci.stop()}function wn(){Ci.start()}const Ci=new Fh;Ci.setAnimationLoop(tt),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(C){Mt=C,O.setAnimationLoop(C),C===null?Ci.stop():Ci.start()},O.addEventListener("sessionstart",En),O.addEventListener("sessionend",wn),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(z),z=O.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,z,A),g=fe.get(C,M.length),g.init(z),M.push(g),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Me.setFromProjectionMatrix(he),K=this.localClippingEnabled,Y=pe.init(this.clippingPlanes,K),v=Ce.get(C,p.length),v.init(),p.push(v),O.enabled===!0&&O.isPresenting===!0){const se=x.xr.getDepthSensingMesh();se!==null&&eo(se,z,-1/0,x.sortObjects)}eo(C,z,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,ne),ge=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,ge&&re.addToRenderList(v,C),this.info.render.frame++,Y===!0&&pe.beginShadows();const W=g.state.shadowsArray;ze.render(W,C,z),Y===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,k=v.transmissive;if(g.setupLights(),z.isArrayCamera){const se=z.cameras;if(k.length>0)for(let ve=0,Se=se.length;ve<Se;ve++){const be=se[ve];tc(q,k,C,be)}ge&&re.render(C);for(let ve=0,Se=se.length;ve<Se;ve++){const be=se[ve];ec(v,C,be,be.viewport)}}else k.length>0&&tc(q,k,C,z),ge&&re.render(C),ec(v,C,z);A!==null&&(Fe.updateMultisampleRenderTarget(A),Fe.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(x,C,z),ke.resetDefaultState(),R=-1,b=null,M.pop(),M.length>0?(g=M[M.length-1],Y===!0&&pe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function eo(C,z,W,q){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Me.intersectsSprite(C)){q&&B.setFromMatrixPosition(C.matrixWorld).applyMatrix4(he);const ve=J.update(C),Se=C.material;Se.visible&&v.push(C,ve,Se,W,B.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Me.intersectsObject(C))){const ve=J.update(C),Se=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),B.copy(C.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),B.copy(ve.boundingSphere.center)),B.applyMatrix4(C.matrixWorld).applyMatrix4(he)),Array.isArray(Se)){const be=ve.groups;for(let Le=0,Ie=be.length;Le<Ie;Le++){const Re=be[Le],je=Se[Re.materialIndex];je&&je.visible&&v.push(C,ve,je,W,B.z,Re)}}else Se.visible&&v.push(C,ve,Se,W,B.z,null)}}const se=C.children;for(let ve=0,Se=se.length;ve<Se;ve++)eo(se[ve],z,W,q)}function ec(C,z,W,q){const k=C.opaque,se=C.transmissive,ve=C.transparent;g.setupLightsView(W),Y===!0&&pe.setGlobalState(x.clippingPlanes,W),q&&Pe.viewport(S.copy(q)),k.length>0&&ba(k,z,W),se.length>0&&ba(se,z,W),ve.length>0&&ba(ve,z,W),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function tc(C,z,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Wi(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Us:Si,minFilter:Vi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=g.state.transmissionRenderTarget[q.id],ve=q.viewport||S;se.setSize(ve.z,ve.w);const Se=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(U),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),ge?re.render(W):x.clear();const be=x.toneMapping;x.toneMapping=xi;const Le=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),Y===!0&&pe.setGlobalState(x.clippingPlanes,q),ba(C,W,q),Fe.updateMultisampleRenderTarget(se),Fe.updateRenderTargetMipmap(se),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Re=0,je=z.length;Re<je;Re++){const ct=z[Re],ut=ct.object,Jt=ct.geometry,Ke=ct.material,Te=ct.group;if(Ke.side===ht&&ut.layers.test(q.layers)){const zt=Ke.side;Ke.side=jt,Ke.needsUpdate=!0,nc(ut,W,q,Jt,Ke,Te),Ke.side=zt,Ke.needsUpdate=!0,Ie=!0}}Ie===!0&&(Fe.updateMultisampleRenderTarget(se),Fe.updateRenderTargetMipmap(se))}x.setRenderTarget(Se),x.setClearColor(U,N),Le!==void 0&&(q.viewport=Le),x.toneMapping=be}function ba(C,z,W){const q=z.isScene===!0?z.overrideMaterial:null;for(let k=0,se=C.length;k<se;k++){const ve=C[k],Se=ve.object,be=ve.geometry,Le=q===null?ve.material:q,Ie=ve.group;Se.layers.test(W.layers)&&nc(Se,z,W,be,Le,Ie)}}function nc(C,z,W,q,k,se){C.onBeforeRender(x,z,W,q,k,se),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(x,z,W,q,C,se),k.transparent===!0&&k.side===ht&&k.forceSinglePass===!1?(k.side=jt,k.needsUpdate=!0,x.renderBufferDirect(W,z,q,k,C,se),k.side=yi,k.needsUpdate=!0,x.renderBufferDirect(W,z,q,k,C,se),k.side=ht):x.renderBufferDirect(W,z,q,k,C,se),C.onAfterRender(x,z,W,q,k,se)}function Ea(C,z,W){z.isScene!==!0&&(z=Q);const q=Ve.get(C),k=g.state.lights,se=g.state.shadowsArray,ve=k.state.version,Se=ee.getParameters(C,k.state,se,z,W),be=ee.getProgramCacheKey(Se);let Le=q.programs;q.environment=C.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(C.isMeshStandardMaterial?I:pt).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Le===void 0&&(C.addEventListener("dispose",oe),Le=new Map,q.programs=Le);let Ie=Le.get(be);if(Ie!==void 0){if(q.currentProgram===Ie&&q.lightsStateVersion===ve)return rc(C,Se),Ie}else Se.uniforms=ee.getUniforms(C),C.onBuild(W,Se,x),C.onBeforeCompile(Se,x),Ie=ee.acquireProgram(Se,be),Le.set(be,Ie),q.uniforms=Se.uniforms;const Re=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Re.clippingPlanes=pe.uniform),rc(C,Se),q.needsLights=Dd(C),q.lightsStateVersion=ve,q.needsLights&&(Re.ambientLightColor.value=k.state.ambient,Re.lightProbe.value=k.state.probe,Re.directionalLights.value=k.state.directional,Re.directionalLightShadows.value=k.state.directionalShadow,Re.spotLights.value=k.state.spot,Re.spotLightShadows.value=k.state.spotShadow,Re.rectAreaLights.value=k.state.rectArea,Re.ltc_1.value=k.state.rectAreaLTC1,Re.ltc_2.value=k.state.rectAreaLTC2,Re.pointLights.value=k.state.point,Re.pointLightShadows.value=k.state.pointShadow,Re.hemisphereLights.value=k.state.hemi,Re.directionalShadowMap.value=k.state.directionalShadowMap,Re.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Re.spotShadowMap.value=k.state.spotShadowMap,Re.spotLightMatrix.value=k.state.spotLightMatrix,Re.spotLightMap.value=k.state.spotLightMap,Re.pointShadowMap.value=k.state.pointShadowMap,Re.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Ie,q.uniformsList=null,Ie}function ic(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=ds.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function rc(C,z){const W=Ve.get(C);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Ld(C,z,W,q,k){z.isScene!==!0&&(z=Q),Fe.resetTextureUnits();const se=z.fog,ve=q.isMeshStandardMaterial?z.environment:null,Se=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ei,be=(q.isMeshStandardMaterial?I:pt).get(q.envMap||ve),Le=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,ct=!!W.morphAttributes.color;let ut=xi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ut=x.toneMapping);const Jt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ke=Jt!==void 0?Jt.length:0,Te=Ve.get(q),zt=g.state.lights;if(Y===!0&&(K===!0||C!==b)){const nn=C===b&&q.id===R;pe.setState(q,C,nn)}let nt=!1;q.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==zt.state.version||Te.outputColorSpace!==Se||k.isBatchedMesh&&Te.batching===!1||!k.isBatchedMesh&&Te.batching===!0||k.isBatchedMesh&&Te.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Te.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||k.isInstancedMesh&&Te.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Te.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Te.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Te.instancingMorph===!1&&k.morphTexture!==null||Te.envMap!==be||q.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==pe.numPlanes||Te.numIntersection!==pe.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==Ie||Te.morphTargets!==Re||Te.morphNormals!==je||Te.morphColors!==ct||Te.toneMapping!==ut||Te.morphTargetsCount!==Ke)&&(nt=!0):(nt=!0,Te.__version=q.version);let kn=Te.currentProgram;nt===!0&&(kn=Ea(q,z,k));let wa=!1,Ri=!1,to=!1;const yt=kn.getUniforms(),ai=Te.uniforms;if(Pe.useProgram(kn.program)&&(wa=!0,Ri=!0,to=!0),q.id!==R&&(R=q.id,Ri=!0),wa||b!==C){yt.setValue(D,"projectionMatrix",C.projectionMatrix),yt.setValue(D,"viewMatrix",C.matrixWorldInverse);const nn=yt.map.cameraPosition;nn!==void 0&&nn.setValue(D,B.setFromMatrixPosition(C.matrixWorld)),et.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Ri=!0,to=!0)}if(k.isSkinnedMesh){yt.setOptional(D,k,"bindMatrix"),yt.setOptional(D,k,"bindMatrixInverse");const nn=k.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),yt.setValue(D,"boneTexture",nn.boneTexture,Fe))}k.isBatchedMesh&&(yt.setOptional(D,k,"batchingTexture"),yt.setValue(D,"batchingTexture",k._matricesTexture,Fe),yt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",k._colorsTexture,Fe));const no=W.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0)&&we.update(k,W,kn),(Ri||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,yt.setValue(D,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ai.envMap.value=be,ai.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(ai.envMapIntensity.value=z.environmentIntensity),Ri&&(yt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&Id(ai,to),se&&q.fog===!0&&te.refreshFogUniforms(ai,se),te.refreshMaterialUniforms(ai,q,$,V,g.state.transmissionRenderTarget[C.id]),ds.upload(D,ic(Te),ai,Fe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ds.upload(D,ic(Te),ai,Fe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(D,"center",k.center),yt.setValue(D,"modelViewMatrix",k.modelViewMatrix),yt.setValue(D,"normalMatrix",k.normalMatrix),yt.setValue(D,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const nn=q.uniformsGroups;for(let io=0,Ud=nn.length;io<Ud;io++){const ac=nn[io];Ge.update(ac,kn),Ge.bind(ac,kn)}}return kn}function Id(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Dd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,z,W){Ve.get(C.texture).__webglTexture=z,Ve.get(C.depthTexture).__webglTexture=W;const q=Ve.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,z){const W=Ve.get(C);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,W=0){A=C,T=z,E=W;let q=!0,k=null,se=!1,ve=!1;if(C){const be=Ve.get(C);be.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(D.FRAMEBUFFER,null),q=!1):be.__webglFramebuffer===void 0?Fe.setupRenderTarget(C):be.__hasExternalTextures&&Fe.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);const Le=C.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ve=!0);const Ie=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ie[z])?k=Ie[z][W]:k=Ie[z],se=!0):C.samples>0&&Fe.useMultisampledRTT(C)===!1?k=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[W]:k=Ie,S.copy(C.viewport),L.copy(C.scissor),F=C.scissorTest}else S.copy(le).multiplyScalar($).floor(),L.copy(ie).multiplyScalar($).floor(),F=ye;if(Pe.bindFramebuffer(D.FRAMEBUFFER,k)&&q&&Pe.drawBuffers(C,k),Pe.viewport(S),Pe.scissor(L),Pe.setScissorTest(F),se){const be=Ve.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,W)}else if(ve){const be=Ve.get(C.texture),Le=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,W||0,Le)}R=-1},this.readRenderTargetPixels=function(C,z,W,q,k,se,ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Pe.bindFramebuffer(D.FRAMEBUFFER,Se);try{const be=C.texture,Le=be.format,Ie=be.type;if(!et.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-q&&W>=0&&W<=C.height-k&&D.readPixels(z,W,q,k,me.convert(Le),me.convert(Ie),se)}finally{const be=A!==null?Ve.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(C,z,W,q,k,se,ve){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Pe.bindFramebuffer(D.FRAMEBUFFER,Se);try{const be=C.texture,Le=be.format,Ie=be.type;if(!et.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=C.width-q&&W>=0&&W<=C.height-k){const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(z,W,q,k,me.convert(Le),me.convert(Ie),0),D.flush();const je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await np(D,je,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se)}finally{D.deleteBuffer(Re),D.deleteSync(je)}return se}}finally{const be=A!==null?Ve.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(C,z=null,W=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,C=arguments[1]);const q=Math.pow(2,-W),k=Math.floor(C.image.width*q),se=Math.floor(C.image.height*q),ve=z!==null?z.x:0,Se=z!==null?z.y:0;Fe.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ve,Se,k,se),Pe.unbindTexture()},this.copyTextureToTexture=function(C,z,W=null,q=null,k=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1],z=arguments[2],k=arguments[3]||0,W=null);let se,ve,Se,be,Le,Ie;W!==null?(se=W.max.x-W.min.x,ve=W.max.y-W.min.y,Se=W.min.x,be=W.min.y):(se=C.image.width,ve=C.image.height,Se=0,be=0),q!==null?(Le=q.x,Ie=q.y):(Le=0,Ie=0);const Re=me.convert(z.format),je=me.convert(z.type);Fe.setTexture2D(z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const ct=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Jt=D.getParameter(D.UNPACK_SKIP_PIXELS),Ke=D.getParameter(D.UNPACK_SKIP_ROWS),Te=D.getParameter(D.UNPACK_SKIP_IMAGES),zt=C.isCompressedTexture?C.mipmaps[k]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,zt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,be),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Le,Ie,se,ve,Re,je,zt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Le,Ie,zt.width,zt.height,Re,zt.data):D.texSubImage2D(D.TEXTURE_2D,k,Le,Ie,Re,je,zt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ct),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Jt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te),k===0&&z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(C,z,W=null,q=null,k=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,C=arguments[2],z=arguments[3],k=arguments[4]||0);let se,ve,Se,be,Le,Ie,Re,je,ct;const ut=C.isCompressedTexture?C.mipmaps[k]:C.image;W!==null?(se=W.max.x-W.min.x,ve=W.max.y-W.min.y,Se=W.max.z-W.min.z,be=W.min.x,Le=W.min.y,Ie=W.min.z):(se=ut.width,ve=ut.height,Se=ut.depth,be=0,Le=0,Ie=0),q!==null?(Re=q.x,je=q.y,ct=q.z):(Re=0,je=0,ct=0);const Jt=me.convert(z.format),Ke=me.convert(z.type);let Te;if(z.isData3DTexture)Fe.setTexture3D(z,0),Te=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Fe.setTexture2DArray(z,0),Te=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const zt=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),kn=D.getParameter(D.UNPACK_SKIP_PIXELS),wa=D.getParameter(D.UNPACK_SKIP_ROWS),Ri=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Te,k,Re,je,ct,se,ve,Se,Jt,Ke,ut.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,k,Re,je,ct,se,ve,Se,Jt,ut.data):D.texSubImage3D(Te,k,Re,je,ct,se,ve,Se,Jt,Ke,ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,zt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kn),D.pixelStorei(D.UNPACK_SKIP_ROWS,wa),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ri),k===0&&z.generateMipmaps&&D.generateMipmap(Te),Pe.unbindTexture()},this.initRenderTarget=function(C){Ve.get(C).__webglFramebuffer===void 0&&Fe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Fe.setTextureCube(C,0):C.isData3DTexture?Fe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Fe.setTexture2DArray(C,0):Fe.setTexture2D(C,0),Pe.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,Pe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===El?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Fs?"display-p3":"srgb"}}class Ti extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class c_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Tl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new P;class ys{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),a=Je(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ys(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gh extends Bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gr;const Jr=new P,_r=new P,vr=new P,xr=new ue,Qr=new ue,Wh=new st,ja=new P,ea=new P,Za=new P,Tu=new ue,Oo=new ue,Au=new ue;class u_ extends gt{constructor(e=new Gh){if(super(),this.isSprite=!0,this.type="Sprite",gr===void 0){gr=new Ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new c_(t,5);gr.setIndex([0,1,2,0,2,3]),gr.setAttribute("position",new ys(i,3,0,!1)),gr.setAttribute("uv",new ys(i,2,3,!1))}this.geometry=gr,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),Wh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-vr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;Ka(ja.set(-.5,-.5,0),vr,o,_r,r,a),Ka(ea.set(.5,-.5,0),vr,o,_r,r,a),Ka(Za.set(.5,.5,0),vr,o,_r,r,a),Tu.set(0,0),Oo.set(1,0),Au.set(1,1);let s=e.ray.intersectTriangle(ja,ea,Za,!1,Jr);if(s===null&&(Ka(ea.set(-.5,.5,0),vr,o,_r,r,a),Oo.set(0,1),s=e.ray.intersectTriangle(ja,Za,ea,!1,Jr),s===null))return;const l=e.ray.origin.distanceTo(Jr);l<e.near||l>e.far||t.push({distance:l,point:Jr.clone(),uv:sn.getInterpolation(Jr,ja,ea,Za,Tu,Oo,Au,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ka(n,e,t,i,r,a){xr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Qr.x=a*xr.x-r*xr.y,Qr.y=r*xr.x+a*xr.y):Qr.copy(xr),n.copy(e),n.x+=Qr.x,n.y+=Qr.y,n.applyMatrix4(Wh)}class Yi extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ss=new P,bs=new P,Cu=new st,ta=new Os,Ja=new wi,Bo=new P,Ru=new P;class ma extends gt{constructor(e=new Ze,t=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Ss.fromBufferAttribute(t,r-1),bs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ss.distanceTo(bs);e.setAttribute("lineDistance",new We(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=a,e.ray.intersectsSphere(Ja)===!1)return;Cu.copy(r).invert(),ta.copy(e.ray).applyMatrix4(Cu);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=d,g=_-1;v<g;v+=c){const p=u.getX(v),M=u.getX(v+1),x=Qa(this,e,ta,l,p,M);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(d),p=Qa(this,e,ta,l,v,g);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=d,g=_-1;v<g;v+=c){const p=Qa(this,e,ta,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Qa(this,e,ta,l,_-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function Qa(n,e,t,i,r,a){const o=n.geometry.attributes.position;if(Ss.fromBufferAttribute(o,r),bs.fromBufferAttribute(o,a),t.distanceSqToSegment(Ss,bs,Bo,Ru)>i)return;Bo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Bo);if(!(l<e.near||l>e.far))return{distance:l,point:Ru.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Pu=new P,Lu=new P;class Pl extends ma{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Pu.fromBufferAttribute(t,r),Lu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Pu.distanceTo(Lu);e.setAttribute("lineDistance",new We(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h_ extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Iu=new st,ll=new Os,es=new wi,ts=new P;class d_ extends gt{constructor(e=new Ze,t=new h_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(r),es.radius+=a,e.ray.intersectsSphere(es)===!1)return;Iu.copy(r).invert(),ll.copy(e.ray).applyMatrix4(Iu);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,v=d;_<v;_++){const g=c.getX(_);ts.fromBufferAttribute(h,g),Du(ts,g,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,v=d;_<v;_++)ts.fromBufferAttribute(h,_),Du(ts,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function Du(n,e,t,i,r,a,o){const s=ll.distanceSqToPoint(n);if(s<t){const l=new P;ll.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class f_ extends Xt{constructor(e,t,i,r,a,o,s,l,c){super(e,t,i,r,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let o;t?o=t:o=e*i[a-1];let s=0,l=a-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=i[r]-o,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(a-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),l=t||(o.isVector2?new ue:new P);return l.copy(s).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,r=[],a=[],o=[],s=new P,l=new st;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new P)}a[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),o[d]=o[d-1].clone(),s.crossVectors(r[d-1],r[d]),s.length()>Number.EPSILON){s.normalize();const _=Math.acos(bt(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(s,_))}o[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(bt(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(d=-d);for(let _=1;_<=e;_++)a[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],a[_])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qh extends ii{constructor(e=0,t=0,i=1,r=1,a=0,o=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=l}getPoint(e,t=new ue){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);const s=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class p_ extends qh{constructor(e,t,i,r,a,o){super(e,t,i,i,r,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let n=0,e=0,t=0,i=0;function r(a,o,s,l){n=a,e=s,t=-3*a+3*o-2*s-l,i=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,c){r(o,s,c*(s-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,c,u,h){let f=(o-a)/c-(s-a)/(c+u)+(s-o)/u,d=(s-o)/u-(l-o)/(u+h)+(l-s)/h;f*=u,d*=u,r(o,s,f,d)},calc:function(a){const o=a*a,s=o*a;return n+e*a+t*o+i*s}}}const ns=new P,zo=new Ll,ko=new Ll,Vo=new Ll;class Xh extends ii{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let s=Math.floor(o),l=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:l===0&&s===a-1&&(s=a-2,l=1);let c,u;this.closed||s>0?c=r[(s-1)%a]:(ns.subVectors(r[0],r[1]).add(r[0]),c=ns);const h=r[s%a],f=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(ns.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=ns),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),zo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,v,g),ko.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,v,g),Vo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,v,g)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ko.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Vo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(zo.calc(l),ko.calc(l),Vo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uu(n,e,t,i,r){const a=(i-e)*.5,o=(r-t)*.5,s=n*n,l=n*s;return(2*t-2*i+a+o)*l+(-3*t+3*i-2*a-o)*s+a*n+t}function m_(n,e){const t=1-n;return t*t*e}function g_(n,e){return 2*(1-n)*n*e}function __(n,e){return n*n*e}function sa(n,e,t,i){return m_(n,e)+g_(n,t)+__(n,i)}function v_(n,e){const t=1-n;return t*t*t*e}function x_(n,e){const t=1-n;return 3*t*t*n*e}function M_(n,e){return 3*(1-n)*n*n*e}function y_(n,e){return n*n*n*e}function oa(n,e,t,i,r){return v_(n,e)+x_(n,t)+M_(n,i)+y_(n,r)}class S_ extends ii{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(oa(e,r.x,a.x,o.x,s.x),oa(e,r.y,a.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b_ extends ii{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(oa(e,r.x,a.x,o.x,s.x),oa(e,r.y,a.y,o.y,s.y),oa(e,r.z,a.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class E_ extends ii{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w_ extends ii{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T_ extends ii{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(sa(e,r.x,a.x,o.x),sa(e,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yh extends ii{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(sa(e,r.x,a.x,o.x),sa(e,r.y,a.y,o.y),sa(e,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A_ extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,r=this.points,a=(r.length-1)*e,o=Math.floor(a),s=a-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Uu(s,l.x,c.x,u.x,h.x),Uu(s,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var C_=Object.freeze({__proto__:null,ArcCurve:p_,CatmullRomCurve3:Xh,CubicBezierCurve:S_,CubicBezierCurve3:b_,EllipseCurve:qh,LineCurve:E_,LineCurve3:w_,QuadraticBezierCurve:T_,QuadraticBezierCurve3:Yh,SplineCurve:A_});class Gr extends Ze{constructor(e=1,t=1,i=1,r=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],h=[],f=[],d=[];let _=0;const v=[],g=i/2;let p=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(f,3)),this.setAttribute("uv",new We(d,2));function M(){const y=new P,T=new P;let E=0;const A=(t-e)/i;for(let R=0;R<=a;R++){const b=[],S=R/a,L=S*(t-e)+e;for(let F=0;F<=r;F++){const U=F/r,N=U*l+s,H=Math.sin(N),V=Math.cos(N);T.x=L*H,T.y=-S*i+g,T.z=L*V,h.push(T.x,T.y,T.z),y.set(H,A,V).normalize(),f.push(y.x,y.y,y.z),d.push(U,1-S),b.push(_++)}v.push(b)}for(let R=0;R<r;R++)for(let b=0;b<a;b++){const S=v[b][R],L=v[b+1][R],F=v[b+1][R+1],U=v[b][R+1];u.push(S,L,U),u.push(L,F,U),E+=6}c.addGroup(p,E,0),p+=E}function x(y){const T=_,E=new ue,A=new P;let R=0;const b=y===!0?e:t,S=y===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),_++;const L=_;for(let F=0;F<=r;F++){const N=F/r*l+s,H=Math.cos(N),V=Math.sin(N);A.x=b*V,A.y=g*S,A.z=b*H,h.push(A.x,A.y,A.z),f.push(0,S,0),E.x=H*.5+.5,E.y=V*.5*S+.5,d.push(E.x,E.y),_++}for(let F=0;F<r;F++){const U=T+F,N=L+F;y===!0?u.push(N,N+1,U):u.push(N+1,N,U),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Il extends Gr{constructor(e=1,t=1,i=32,r=1,a=!1,o=0,s=Math.PI*2){super(0,e,t,i,r,a,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(e){return new Il(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const is=new P,rs=new P,Ho=new P,as=new sn;class R_ extends Ze{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(Er*t),o=e.getIndex(),s=e.getAttribute("position"),l=o?o.count:s.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:g,c:p}=as;if(v.fromBufferAttribute(s,c[0]),g.fromBufferAttribute(s,c[1]),p.fromBufferAttribute(s,c[2]),as.getNormal(Ho),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const x=(M+1)%3,y=h[M],T=h[x],E=as[u[M]],A=as[u[x]],R=`${y}_${T}`,b=`${T}_${y}`;b in f&&f[b]?(Ho.dot(f[b].normal)<=a&&(d.push(E.x,E.y,E.z),d.push(A.x,A.y,A.z)),f[b]=null):R in f||(f[R]={index0:c[M],index1:c[x],normal:Ho.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:g}=f[_];is.fromBufferAttribute(s,v),rs.fromBufferAttribute(s,g),d.push(is.x,is.y,is.z),d.push(rs.x,rs.y,rs.z)}this.setAttribute("position",new We(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ks extends Ze{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const u=[],h=new P,f=new P,d=[],_=[],v=[],g=[];for(let p=0;p<=i;p++){const M=[],x=p/i;let y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const E=T/t;h.x=-e*Math.cos(r+E*a)*Math.sin(o+x*s),h.y=e*Math.cos(o+x*s),h.z=e*Math.sin(r+E*a)*Math.sin(o+x*s),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),g.push(E+y,1-x),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const x=u[p][M+1],y=u[p][M],T=u[p+1][M],E=u[p+1][M+1];(p!==0||o>0)&&d.push(x,y,E),(p!==i-1||l<Math.PI)&&d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new We(_,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dl extends Ze{constructor(e=new Yh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};const o=e.computeFrenetFrames(t,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const s=new P,l=new P,c=new ue;let u=new P;const h=[],f=[],d=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(f,3)),this.setAttribute("uv",new We(d,2));function v(){for(let x=0;x<t;x++)g(x);g(a===!1?t:0),M(),p()}function g(x){u=e.getPointAt(x/t,u);const y=o.normals[x],T=o.binormals[x];for(let E=0;E<=r;E++){const A=E/r*Math.PI*2,R=Math.sin(A),b=-Math.cos(A);l.x=b*y.x+R*T.x,l.y=b*y.y+R*T.y,l.z=b*y.z+R*T.z,l.normalize(),f.push(l.x,l.y,l.z),s.x=u.x+i*l.x,s.y=u.y+i*l.y,s.z=u.z+i*l.z,h.push(s.x,s.y,s.z)}}function p(){for(let x=1;x<=t;x++)for(let y=1;y<=r;y++){const T=(r+1)*(x-1)+(y-1),E=(r+1)*x+(y-1),A=(r+1)*x+y,R=(r+1)*(x-1)+y;_.push(T,E,R),_.push(E,A,R)}}function M(){for(let x=0;x<=t;x++)for(let y=0;y<=r;y++)c.x=x/t,c.y=y/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Dl(new C_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class P_ extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $h extends P_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tr extends Bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jh extends Bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zh extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Go=new st,Nu=new P,Fu=new P;class L_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fu),t.updateMatrixWorld(),Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class I_ extends L_{constructor(){super(new bn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hn extends Zh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new I_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ai extends Zh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ou=new st;class D_{constructor(e,t,i=0,r=1/0){this.ray=new Os(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ou.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ou),this}intersectObject(e,t=!0,i=[]){return cl(e,this,i,t),i.sort(Bu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)cl(e[r],this,i,t);return i.sort(Bu),i}}function Bu(n,e){return n.distance-e.distance}function cl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let o=0,s=a.length;o<s;o++)cl(a[o],e,t,!0)}}const zu=new P;let ss,Wo;class U_ extends gt{constructor(e=new P(0,0,1),t=new P(0,0,0),i=1,r=16776960,a=i*.2,o=a*.2){super(),this.type="ArrowHelper",ss===void 0&&(ss=new Ze,ss.setAttribute("position",new We([0,0,0,0,1,0],3)),Wo=new Gr(0,.5,1,5,1),Wo.translate(0,-.5,0)),this.position.copy(t),this.line=new ma(ss,new Yi({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new rt(Wo,new ti({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{zu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(zu,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);const qo={type:"change"},Xo={type:"start"},Yo={type:"end"};class N_ extends Xi{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:ro.ROTATE,MIDDLE:ro.DOLLY,RIGHT:ro.PAN},this.target=new P;const a=1e-6,o=new P;let s=1,l=r.NONE,c=r.NONE,u=0,h=0,f=0;const d=new P,_=new ue,v=new ue,g=new P,p=new ue,M=new ue,x=new ue,y=new ue,T=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const B=i.domElement.getBoundingClientRect(),Q=i.domElement.ownerDocument.documentElement;i.screen.left=B.left+window.pageXOffset-Q.clientLeft,i.screen.top=B.top+window.pageYOffset-Q.clientTop,i.screen.width=B.width,i.screen.height=B.height};const A=function(){const B=new ue;return function(ge,Ee){return B.set((ge-i.screen.left)/i.screen.width,(Ee-i.screen.top)/i.screen.height),B}}(),R=function(){const B=new ue;return function(ge,Ee){return B.set((ge-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-Ee))/i.screen.width),B}}();this.rotateCamera=function(){const B=new P,Q=new kr,ge=new P,Ee=new P,D=new P,ce=new P;return function(){ce.set(v.x-_.x,v.y-_.y,0);let et=ce.length();et?(d.copy(i.object.position).sub(i.target),ge.copy(d).normalize(),Ee.copy(i.object.up).normalize(),D.crossVectors(Ee,ge).normalize(),Ee.setLength(v.y-_.y),D.setLength(v.x-_.x),ce.copy(Ee.add(D)),B.crossVectors(ce,d).normalize(),et*=i.rotateSpeed,Q.setFromAxisAngle(B,et),d.applyQuaternion(Q),i.object.up.applyQuaternion(Q),g.copy(B),f=et):!i.staticMoving&&f&&(f*=Math.sqrt(1-i.dynamicDampingFactor),d.copy(i.object.position).sub(i.target),Q.setFromAxisAngle(g,f),d.applyQuaternion(Q),i.object.up.applyQuaternion(Q)),_.copy(v)}}(),this.zoomCamera=function(){let B;l===r.TOUCH_ZOOM_PAN?(B=u/h,u=h,i.object.isPerspectiveCamera?d.multiplyScalar(B):i.object.isOrthographicCamera?(i.object.zoom=Bc.clamp(i.object.zoom/B,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(B=1+(M.y-p.y)*i.zoomSpeed,B!==1&&B>0&&(i.object.isPerspectiveCamera?d.multiplyScalar(B):i.object.isOrthographicCamera?(i.object.zoom=Bc.clamp(i.object.zoom/B,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?p.copy(M):p.y+=(M.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const B=new ue,Q=new P,ge=new P;return function(){if(B.copy(y).sub(x),B.lengthSq()){if(i.object.isOrthographicCamera){const D=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,ce=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;B.x*=D,B.y*=ce}B.multiplyScalar(d.length()*i.panSpeed),ge.copy(d).cross(i.object.up).setLength(B.x),ge.add(Q.copy(i.object.up).setLength(B.y)),i.object.position.add(ge),i.target.add(ge),i.staticMoving?x.copy(y):x.add(B.subVectors(y,x).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(d.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,d.setLength(i.maxDistance)),p.copy(M)),d.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,d.setLength(i.minDistance)),p.copy(M)))},this.update=function(){d.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,d),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>a&&(i.dispatchEvent(qo),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>a||s!==i.object.zoom)&&(i.dispatchEvent(qo),o.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),d.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(qo),o.copy(i.object.position),s=i.object.zoom};function b(B){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(B.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",L)),Me(B),B.pointerType==="touch"?ne(B):H(B))}function S(B){i.enabled!==!1&&(B.pointerType==="touch"?le(B):V(B))}function L(B){i.enabled!==!1&&(B.pointerType==="touch"?ie(B):$(),Y(B),T.length===0&&(i.domElement.releasePointerCapture(B.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",L)))}function F(B){Y(B)}function U(B){i.enabled!==!1&&(window.removeEventListener("keydown",U),c===r.NONE&&(B.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:B.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:B.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function N(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",U))}function H(B){if(l===r.NONE)switch(B.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(v.copy(R(B.pageX,B.pageY)),_.copy(v)):Q===r.ZOOM&&!i.noZoom?(p.copy(A(B.pageX,B.pageY)),M.copy(p)):Q===r.PAN&&!i.noPan&&(x.copy(A(B.pageX,B.pageY)),y.copy(x)),i.dispatchEvent(Xo)}function V(B){const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(_.copy(v),v.copy(R(B.pageX,B.pageY))):Q===r.ZOOM&&!i.noZoom?M.copy(A(B.pageX,B.pageY)):Q===r.PAN&&!i.noPan&&y.copy(A(B.pageX,B.pageY))}function $(){l=r.NONE,i.dispatchEvent(Yo)}function G(B){if(i.enabled!==!1&&i.noZoom!==!0){switch(B.preventDefault(),B.deltaMode){case 2:p.y-=B.deltaY*.025;break;case 1:p.y-=B.deltaY*.01;break;default:p.y-=B.deltaY*25e-5;break}i.dispatchEvent(Xo),i.dispatchEvent(Yo)}}function ne(B){switch(K(B),T.length){case 1:l=r.TOUCH_ROTATE,v.copy(R(T[0].pageX,T[0].pageY)),_.copy(v);break;default:l=r.TOUCH_ZOOM_PAN;const Q=T[0].pageX-T[1].pageX,ge=T[0].pageY-T[1].pageY;h=u=Math.sqrt(Q*Q+ge*ge);const Ee=(T[0].pageX+T[1].pageX)/2,D=(T[0].pageY+T[1].pageY)/2;x.copy(A(Ee,D)),y.copy(x);break}i.dispatchEvent(Xo)}function le(B){switch(K(B),T.length){case 1:_.copy(v),v.copy(R(B.pageX,B.pageY));break;default:const Q=he(B),ge=B.pageX-Q.x,Ee=B.pageY-Q.y;h=Math.sqrt(ge*ge+Ee*Ee);const D=(B.pageX+Q.x)/2,ce=(B.pageY+Q.y)/2;y.copy(A(D,ce));break}}function ie(B){switch(T.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,v.copy(R(B.pageX,B.pageY)),_.copy(v);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let Q=0;Q<T.length;Q++)if(T[Q].pointerId!==B.pointerId){const ge=E[T[Q].pointerId];v.copy(R(ge.x,ge.y)),_.copy(v);break}break}i.dispatchEvent(Yo)}function ye(B){i.enabled!==!1&&B.preventDefault()}function Me(B){T.push(B)}function Y(B){delete E[B.pointerId];for(let Q=0;Q<T.length;Q++)if(T[Q].pointerId==B.pointerId){T.splice(Q,1);return}}function K(B){let Q=E[B.pointerId];Q===void 0&&(Q=new ue,E[B.pointerId]=Q),Q.set(B.pageX,B.pageY)}function he(B){const Q=B.pointerId===T[0].pointerId?T[1]:T[0];return E[Q.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",ye),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",F),i.domElement.removeEventListener("wheel",G),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",L),window.removeEventListener("keydown",U),window.removeEventListener("keyup",N)},this.domElement.addEventListener("contextmenu",ye),this.domElement.addEventListener("pointerdown",b),this.domElement.addEventListener("pointercancel",F),this.domElement.addEventListener("wheel",G,{passive:!1}),window.addEventListener("keydown",U),window.addEventListener("keyup",N),this.handleResize(),this.update()}}class Kh extends rt{constructor(e,t,i=!1,r=!1,a=1e4){const o=new Ze;super(o,t),this.isMarchingCubes=!0;const s=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(M){this.resolution=M,this.isolation=80,this.size=M,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const x=a*3;this.positionArray=new Float32Array(x*3);const y=new Bt(this.positionArray,3);y.setUsage(Aa),o.setAttribute("position",y),this.normalArray=new Float32Array(x*3);const T=new Bt(this.normalArray,3);if(T.setUsage(Aa),o.setAttribute("normal",T),this.enableUvs){this.uvArray=new Float32Array(x*2);const E=new Bt(this.uvArray,2);E.setUsage(Aa),o.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(x*3);const E=new Bt(this.colorArray,3);E.setUsage(Aa),o.setAttribute("color",E)}o.boundingSphere=new wi(new P,1)};function h(M,x,y){return M+(x-M)*y}function f(M,x,y,T,E,A,R,b,S,L){const F=(y-R)/(b-R),U=s.normal_cache;l[x+0]=T+F*s.delta,l[x+1]=E,l[x+2]=A,c[x+0]=h(U[M+0],U[M+3],F),c[x+1]=h(U[M+1],U[M+4],F),c[x+2]=h(U[M+2],U[M+5],F),u[x+0]=h(s.palette[S*3+0],s.palette[L*3+0],F),u[x+1]=h(s.palette[S*3+1],s.palette[L*3+1],F),u[x+2]=h(s.palette[S*3+2],s.palette[L*3+2],F)}function d(M,x,y,T,E,A,R,b,S,L){const F=(y-R)/(b-R),U=s.normal_cache;l[x+0]=T,l[x+1]=E+F*s.delta,l[x+2]=A;const N=M+s.yd*3;c[x+0]=h(U[M+0],U[N+0],F),c[x+1]=h(U[M+1],U[N+1],F),c[x+2]=h(U[M+2],U[N+2],F),u[x+0]=h(s.palette[S*3+0],s.palette[L*3+0],F),u[x+1]=h(s.palette[S*3+1],s.palette[L*3+1],F),u[x+2]=h(s.palette[S*3+2],s.palette[L*3+2],F)}function _(M,x,y,T,E,A,R,b,S,L){const F=(y-R)/(b-R),U=s.normal_cache;l[x+0]=T,l[x+1]=E,l[x+2]=A+F*s.delta;const N=M+s.zd*3;c[x+0]=h(U[M+0],U[N+0],F),c[x+1]=h(U[M+1],U[N+1],F),c[x+2]=h(U[M+2],U[N+2],F),u[x+0]=h(s.palette[S*3+0],s.palette[L*3+0],F),u[x+1]=h(s.palette[S*3+1],s.palette[L*3+1],F),u[x+2]=h(s.palette[S*3+2],s.palette[L*3+2],F)}function v(M){const x=M*3;s.normal_cache[x]===0&&(s.normal_cache[x+0]=s.field[M-1]-s.field[M+1],s.normal_cache[x+1]=s.field[M-s.yd]-s.field[M+s.yd],s.normal_cache[x+2]=s.field[M-s.zd]-s.field[M+s.zd])}function g(M,x,y,T,E){const A=T+1,R=T+s.yd,b=T+s.zd,S=A+s.yd,L=A+s.zd,F=T+s.yd+s.zd,U=A+s.yd+s.zd;let N=0;const H=s.field[T],V=s.field[A],$=s.field[R],G=s.field[S],ne=s.field[b],le=s.field[L],ie=s.field[F],ye=s.field[U];H<E&&(N|=1),V<E&&(N|=2),$<E&&(N|=8),G<E&&(N|=4),ne<E&&(N|=16),le<E&&(N|=32),ie<E&&(N|=128),ye<E&&(N|=64);const Me=F_[N];if(Me===0)return 0;const Y=s.delta,K=M+Y,he=x+Y,B=y+Y;Me&1&&(v(T),v(A),f(T*3,0,E,M,x,y,H,V,T,A)),Me&2&&(v(A),v(S),d(A*3,3,E,K,x,y,V,G,A,S)),Me&4&&(v(R),v(S),f(R*3,6,E,M,he,y,$,G,R,S)),Me&8&&(v(T),v(R),d(T*3,9,E,M,x,y,H,$,T,R)),Me&16&&(v(b),v(L),f(b*3,12,E,M,x,B,ne,le,b,L)),Me&32&&(v(L),v(U),d(L*3,15,E,K,x,B,le,ye,L,U)),Me&64&&(v(F),v(U),f(F*3,18,E,M,he,B,ie,ye,F,U)),Me&128&&(v(b),v(F),d(b*3,21,E,M,x,B,ne,ie,b,F)),Me&256&&(v(T),v(b),_(T*3,24,E,M,x,y,H,ne,T,b)),Me&512&&(v(A),v(L),_(A*3,27,E,K,x,y,V,le,A,L)),Me&1024&&(v(S),v(U),_(S*3,30,E,K,he,y,G,ye,S,U)),Me&2048&&(v(R),v(F),_(R*3,33,E,M,he,y,$,ie,R,F)),N<<=4;let Q,ge,Ee,D=0,ce=0;for(;os[N+ce]!=-1;)Q=N+ce,ge=Q+1,Ee=Q+2,p(l,c,u,3*os[Q],3*os[ge],3*os[Ee]),ce+=3,D++;return D}function p(M,x,y,T,E,A){const R=s.count*3;if(s.positionArray[R+0]=M[T],s.positionArray[R+1]=M[T+1],s.positionArray[R+2]=M[T+2],s.positionArray[R+3]=M[E],s.positionArray[R+4]=M[E+1],s.positionArray[R+5]=M[E+2],s.positionArray[R+6]=M[A],s.positionArray[R+7]=M[A+1],s.positionArray[R+8]=M[A+2],s.material.flatShading===!0){const b=(x[T+0]+x[E+0]+x[A+0])/3,S=(x[T+1]+x[E+1]+x[A+1])/3,L=(x[T+2]+x[E+2]+x[A+2])/3;s.normalArray[R+0]=b,s.normalArray[R+1]=S,s.normalArray[R+2]=L,s.normalArray[R+3]=b,s.normalArray[R+4]=S,s.normalArray[R+5]=L,s.normalArray[R+6]=b,s.normalArray[R+7]=S,s.normalArray[R+8]=L}else s.normalArray[R+0]=x[T+0],s.normalArray[R+1]=x[T+1],s.normalArray[R+2]=x[T+2],s.normalArray[R+3]=x[E+0],s.normalArray[R+4]=x[E+1],s.normalArray[R+5]=x[E+2],s.normalArray[R+6]=x[A+0],s.normalArray[R+7]=x[A+1],s.normalArray[R+8]=x[A+2];if(s.enableUvs){const b=s.count*2;s.uvArray[b+0]=M[T+0],s.uvArray[b+1]=M[T+2],s.uvArray[b+2]=M[E+0],s.uvArray[b+3]=M[E+2],s.uvArray[b+4]=M[A+0],s.uvArray[b+5]=M[A+2]}s.enableColors&&(s.colorArray[R+0]=y[T+0],s.colorArray[R+1]=y[T+1],s.colorArray[R+2]=y[T+2],s.colorArray[R+3]=y[E+0],s.colorArray[R+4]=y[E+1],s.colorArray[R+5]=y[E+2],s.colorArray[R+6]=y[A+0],s.colorArray[R+7]=y[A+1],s.colorArray[R+8]=y[A+2]),s.count+=3}this.addBall=function(M,x,y,T,E,A){const R=Math.sign(T);T=Math.abs(T);const b=A!=null;let S=new xe(M,x,y);if(b)try{S=A instanceof xe?A:Array.isArray(A)?new xe(Math.min(Math.abs(A[0]),1),Math.min(Math.abs(A[1]),1),Math.min(Math.abs(A[2]),1)):new xe(A)}catch{S=new xe(M,x,y)}const L=this.size*Math.sqrt(T/E),F=y*this.size,U=x*this.size,N=M*this.size;let H=Math.floor(F-L);H<1&&(H=1);let V=Math.floor(F+L);V>this.size-1&&(V=this.size-1);let $=Math.floor(U-L);$<1&&($=1);let G=Math.floor(U+L);G>this.size-1&&(G=this.size-1);let ne=Math.floor(N-L);ne<1&&(ne=1);let le=Math.floor(N+L);le>this.size-1&&(le=this.size-1);let ie,ye,Me,Y,K,he,B,Q,ge,Ee,D;for(Me=H;Me<V;Me++)for(K=this.size2*Me,Q=Me/this.size-y,ge=Q*Q,ye=$;ye<G;ye++)for(Y=K+this.size*ye,B=ye/this.size-x,Ee=B*B,ie=ne;ie<le;ie++)if(he=ie/this.size-M,D=T/(1e-6+he*he+Ee+ge)-E,D>0){this.field[Y+ie]+=D*R;const ce=Math.sqrt((ie-N)*(ie-N)+(ye-U)*(ye-U)+(Me-F)*(Me-F))/L,Ne=1-ce*ce*ce*(ce*(ce*6-15)+10);this.palette[(Y+ie)*3+0]+=S.r*Ne,this.palette[(Y+ie)*3+1]+=S.g*Ne,this.palette[(Y+ie)*3+2]+=S.b*Ne}},this.addPlaneX=function(M,x){const y=this.size,T=this.yd,E=this.zd,A=this.field;let R,b,S,L,F,U,N,H=y*Math.sqrt(M/x);for(H>y&&(H=y),R=0;R<H;R++)if(U=R/y,L=U*U,F=M/(1e-4+L)-x,F>0)for(b=0;b<y;b++)for(N=R+b*T,S=0;S<y;S++)A[E*S+N]+=F},this.addPlaneY=function(M,x){const y=this.size,T=this.yd,E=this.zd,A=this.field;let R,b,S,L,F,U,N,H,V=y*Math.sqrt(M/x);for(V>y&&(V=y),b=0;b<V;b++)if(U=b/y,L=U*U,F=M/(1e-4+L)-x,F>0)for(N=b*T,R=0;R<y;R++)for(H=N+R,S=0;S<y;S++)A[E*S+H]+=F},this.addPlaneZ=function(M,x){const y=this.size,T=this.yd,E=this.zd,A=this.field;let R,b,S,L,F,U,N,H,V=y*Math.sqrt(M/x);for(V>y&&(V=y),S=0;S<V;S++)if(U=S/y,L=U*U,F=M/(1e-4+L)-x,F>0)for(N=E*S,b=0;b<y;b++)for(H=N+b*T,R=0;R<y;R++)A[H+R]+=F},this.setCell=function(M,x,y,T){const E=this.size2*y+this.size*x+M;this.field[E]=T},this.getCell=function(M,x,y){const T=this.size2*y+this.size*x+M;return this.field[T]},this.blur=function(M=1){const x=this.field,y=x.slice(),T=this.size,E=this.size2;for(let A=0;A<T;A++)for(let R=0;R<T;R++)for(let b=0;b<T;b++){const S=E*b+T*R+A;let L=y[S],F=1;for(let U=-1;U<=1;U+=2){const N=U+A;if(!(N<0||N>=T))for(let H=-1;H<=1;H+=2){const V=H+R;if(!(V<0||V>=T))for(let $=-1;$<=1;$+=2){const G=$+b;if(G<0||G>=T)continue;const ne=E*G+T*V+N,le=y[ne];F++,L+=M*(le-L)/F}}}x[S]=L}},this.reset=function(){for(let M=0;M<this.size3;M++)this.normal_cache[M*3]=0,this.field[M]=0,this.palette[M*3]=this.palette[M*3+1]=this.palette[M*3+2]=0},this.update=function(){this.count=0;const M=this.size-2;for(let x=1;x<M;x++){const y=this.size2*x,T=(x-this.halfsize)/this.halfsize;for(let E=1;E<M;E++){const A=y+this.size*E,R=(E-this.halfsize)/this.halfsize;for(let b=1;b<M;b++){const S=(b-this.halfsize)/this.halfsize,L=A+b;g(S,R,T,L,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>a&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const F_=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),os=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),ls=[1];function _i(n){if(n<0)return NaN;for(let e=ls.length;e<=n;e+=1)ls[e]=ls[e-1]*e;return ls[n]}function Jh(n,e,t){const i=Math.max(1,Math.min(6,Math.round(n))),r=Math.max(0,Math.min(i-1,Math.round(e))),a=Math.max(-r,Math.min(r,Math.round(t)));return{n:i,l:r,m:a}}function zn(n,e,t){if(e===0)return`${n}s`;if(e===1)return`${n}${t===0?"Pz":t>0?"Px":"Py"}`;if(e===2){if(t===0)return`${n}Dz2`;if(t===1)return`${n}Dxz`;if(t===-1)return`${n}Dyz`;if(t===2)return`${n}Dx2-y2`;if(t===-2)return`${n}Dxy`}if(e===3){if(t===0)return`${n}Fz3`;if(t===1)return`${n}Fxz2`;if(t===-1)return`${n}Fyz2`;if(t===2)return`${n}Fz(x2-y2)`;if(t===-2)return`${n}Fxyz`;if(t===3)return`${n}Fx(x2-3y2)`;if(t===-3)return`${n}Fy(3x2-y2)`}if(e===4){if(t===0)return`${n}Gz4`;if(t===1)return`${n}Gxz3`;if(t===-1)return`${n}Gyz3`;if(t===2)return`${n}Gz2(x2-y2)`;if(t===-2)return`${n}Gxyz2`;if(t===3)return`${n}Gxz(x2-3y2)`;if(t===-3)return`${n}Gyz(3x2-y2)`;if(t===4)return`${n}Gx4-6x2y2+y4`;if(t===-4)return`${n}Gxy(x2-y2)`}if(e===5){if(t===0)return`${n}Hz5`;if(t===1)return`${n}Hxz4`;if(t===-1)return`${n}Hyz4`;if(t===2)return`${n}Hz3(x2-y2)`;if(t===-2)return`${n}Hxyz3`;if(t===3)return`${n}Hz(x4-6x2y2+y4)`;if(t===-3)return`${n}Hxyz(x2-y2)`;if(t===4)return`${n}Hxz(x2-y2)`;if(t===-4)return`${n}Hyz(x2-y2)`;if(t===5)return`${n}Hx(x4-10x2y2+5y4)`;if(t===-5)return`${n}Hy(5x4-10x2y2+y4)`}return`${n}${["s","P","D","F","G","H"][e]??`L${e}`}${t}`}function O_(n,e,t){let i=0;for(let r=0;r<=n;r+=1){const a=(r%2===0?1:-1)*_i(n+e)/(_i(n-r)*_i(e+r)*_i(r));i+=a*t**r}return i}function B_(n,e,t){const i=Math.abs(e);let r=1;if(i>0){const s=Math.sqrt(Math.max(0,1-t*t));let l=1;for(let c=1;c<=i;c+=1)r*=-l*s,l+=2}if(n===i)return r;let a=t*(2*i+1)*r;if(n===i+1)return a;let o=0;for(let s=i+2;s<=n;s+=1)o=((2*s-1)*t*a-(s+i-1)*r)/(s-i),r=a,a=o;return o}function ul(n,e,t,i){const r=Math.sin(t),a=Math.cos(t),o=Math.cos(i),s=Math.sin(i);if(n===1){const h=Math.sqrt(3/(4*Math.PI));return e===0?h*a:e>0?h*r*o:h*r*s}if(n===2){if(e===0)return Math.sqrt(5/Math.PI)/4*(3*a*a-1);if(e===1)return Math.sqrt(15/Math.PI)/2*r*a*o;if(e===-1)return Math.sqrt(15/Math.PI)/2*r*a*s;if(e===2)return Math.sqrt(15/Math.PI)/4*r*r*Math.cos(2*i);if(e===-2)return Math.sqrt(15/Math.PI)/4*r*r*Math.sin(2*i)}const l=Math.abs(e),c=Math.sqrt((2*n+1)/(4*Math.PI)*(_i(n-l)/_i(n+l))),u=B_(n,l,Math.cos(t));return e>0?Math.sqrt(2)*c*u*Math.cos(l*i):e<0?Math.sqrt(2)*c*u*Math.sin(l*i):c*u}function z_(n,e,t){const i=Math.abs(e);let r=1;for(let c=2;c<=2*i;c+=2)r*=(1-t*t)*((c+1)/c);let a=Math.sqrt(Math.max(0,r/2));if(n===i)return a;let o=Math.sqrt(2*i+3)*t*a;if(n===i+1)return o;let s=0,l=Math.sqrt((4*i*i+8*i+3)/(2*i+1));for(let c=i+2;c<=n;c+=1){const u=Math.sqrt((4*c*c-1)/(c*c-i*i));s=o*t*u-a*u/l,a=o,o=s,l=u}return s}function qi(n,e,t,i){const r=2*t*i/n;return Math.sqrt((2*t/n)**3*(_i(n-e-1)/(2*n*_i(n+e))))*Math.exp(-r/2)*r**e*O_(n-e-1,2*e+1,r)}function Pt({n,l:e,m:t,z:i},r,a,o){const s=Math.hypot(r,a,o);if(s<1e-9)return e===0?qi(n,e,i,0)*ul(e,t,0,0):0;const l=Math.acos(o/s),c=Math.atan2(a,r);return qi(n,e,i,s)*ul(e,t,l,c)}function $o({n,l:e,m:t,z:i},r,a,o){const s=Math.hypot(r,a),l=Math.hypot(s,o),c=l<.01?0:o/l,u=qi(n,e,i,l)*z_(e,t,c);let h=1/Math.sqrt(Math.PI);if(t!==0){const f=s>.001?t*Math.atan2(a,r):Math.PI/2;h*=t>0?Math.cos(f):-Math.sin(f)}return u*h}function k_(n){return n>=7?120:n===6?100:n===5?90:n===4?80:n===3?70:n===2?60:50}function ri(n,e=.8){let t=0;const i=.002;let r=0,a=0;for(;a<2e5;){const h=cs(n,r),f=cs(n,r+i/2),d=cs(n,r+i);if(t+=(h+4*f+d)/6,r+=i,a+=1,i*t>e)break}const o=r*1.5,s=k_(n.n),c=2*Math.ceil(o)/s*s/2,u=Math.sqrt(cs(n,r)/(4*Math.PI*r*r))||1e-4;return{radius:c,iso:Math.max(1e-4,u),gridSize:s,leastRadius:o}}function cs(n,e){return e*e*qi(n.n,n.l,n.z,e)**2}function Es(n,e){return`${n-e-1} radial, ${e} angular`}function V_(n,e){const{radius:t}=e,i=Math.min(42,Math.max(24,Math.round(e.density*.58))),r=[],a=[],o=t*2/(i-1),s=t*t,l=15e4;let c=0;for(let _=0;_<i;_+=1){const v=-t+_*o;for(let g=0;g<i;g+=1){const p=-t+g*o;for(let M=0;M<i;M+=1){const x=-t+M*o;if(v*v+p*p+x*x>s||!hl(e.cutaway,v,p,x))continue;const y=Pt(n,v,p,x);c=Math.max(c,Math.abs(y))}}}const u=c||1;let h=(n.n*73856093^n.l*19349663^(n.m+8)*83492791^Math.round(t*1e3))>>>0;const f=()=>(h=1664525*h+1013904223>>>0,h/4294967296),d=Math.min(26e5,Math.max(72e4,e.density*e.density*430));for(let _=0;_<d;_+=1){const v=(f()*2-1)*t,g=(f()*2-1)*t,p=(f()*2-1)*t;if(v*v+g*g+p*p>s||!hl(e.cutaway,v,g,p))continue;const M=Pt(n,v,g,p),x=Math.min(1,(Math.abs(M)/u)**2);if(f()>x)continue;const y=M>=0?r:a;if(!(y.length/3>=l)&&(y.push(v,g,p),r.length/3>=l&&a.length/3>=l))break}return{positive:r,negative:a}}function Qh(n,e){const t=e.thetaSegments??64,i=e.phiSegments??128,r=e.radius??4,a=[];let o=0;for(let l=0;l<=t;l+=1){const c=Math.PI*l/t,u=[];for(let h=0;h<=i;h+=1){const f=Math.PI*2*h/i,d=ul(n.l,n.m,c,f);u.push(d),o=Math.max(o,Math.abs(d))}a.push(u)}function s(l){const c=[],u=[],h=[],f=r/(o||1);for(let d=0;d<=t;d+=1){const _=Math.PI*d/t,v=[],g=Math.sin(_),p=Math.cos(_);for(let M=0;M<=i;M+=1){const x=Math.PI*2*M/i,y=a[d][M];if(l*y<=1e-6){v.push(-1);continue}const T=Math.abs(y)*f;v.push(c.length/3),c.push(T*g*Math.cos(x),T*g*Math.sin(x),T*p)}h.push(v)}for(let d=0;d<t;d+=1)for(let _=0;_<i;_+=1){const v=h[d][_],g=h[d+1][_],p=h[d][_+1],M=h[d+1][_+1];v>=0&&g>=0&&p>=0&&u.push(v,g,p),p>=0&&g>=0&&M>=0&&u.push(p,g,M)}return{vertices:c,indices:u}}return{positive:s(1),negative:s(-1)}}function hl(n,e,t,i){return n==="quarter"?t<=0&&i<=0:n==="eighth"?e<=0&&t<=0&&i<=0:n==="threeQuarter"?!(t>0&&i>0):!0}function ed(n,e,t,i=1){const r=t.density,a=t.radius,o=a*2/r;let s=0,l=0;for(let c=0;c<r;c+=1){const u=-a+c*o;for(let h=0;h<r;h+=1){const f=-a+h*o;for(let d=0;d<r;d+=1){const _=-a+d*o,v=hl(t.cutaway,_,f,u)?i*Pt(e,_,f,u):0;n[s]=v,l=Math.max(l,Math.abs(v)),s+=1}}}return l}function H_(n,e,t){return ed(n,e,t,1)}function G_(n,e,t,i=180){const r=[],a=e.radius;let o=0;for(let s=0;s<i;s+=1){const l=[],c=a-2*a*s/(i-1);for(let u=0;u<i;u+=1){const h=-a+2*a*u/(i-1);let f=0;t==="xoy"&&(f=Pt(n,h,c,0)),t==="xoz"&&(f=Pt(n,h,0,c)),t==="yoz"&&(f=Pt(n,0,h,c)),o=Math.max(o,Math.abs(f)),l.push(f)}r.push(l)}return{rows:r,maxAbs:o}}function W_(n,e,t,i){const a=t.radius/140;let o=0,s=i*Pt(n,0,0,0)-t.iso,l=null;for(let c=1;c<=140;c+=1){const u=c*a,h=i*Pt(n,e.x*u,e.y*u,e.z*u)-t.iso;if(s<=0&&h>=0){let f=o,d=u;for(let _=0;_<12;_+=1){const v=(f+d)/2;i*Pt(n,e.x*v,e.y*v,e.z*v)-t.iso>=0?d=v:f=v}l=d}if(s>=0&&h<=0&&l!==null){let f=o,d=u;for(let _=0;_<12;_+=1){const v=(f+d)/2;i*Pt(n,e.x*v,e.y*v,e.z*v)-t.iso>=0?f=v:d=v}l=f}o=u,s=h}return l}function q_(n,e){const t=e.thetaSegments??58,i=e.phiSegments??96;function r(a){const o=[],s=[],l=[];for(let c=0;c<=t;c+=1){const u=Math.PI*c/t,h=[],f=Math.sin(u),d=Math.cos(u);for(let _=0;_<=i;_+=1){const v=Math.PI*2*_/i,g={x:f*Math.cos(v),y:f*Math.sin(v),z:d},p=W_(n,g,e,a);p===null||!Number.isFinite(p)?h.push(-1):(h.push(o.length/3),o.push(g.x*p,g.y*p,g.z*p))}l.push(h)}for(let c=0;c<t;c+=1)for(let u=0;u<i;u+=1){const h=l[c][u],f=l[c+1][u],d=l[c+1][u+1],_=l[c][u+1];h>=0&&f>=0&&d>=0&&s.push(h,f,d),h>=0&&d>=0&&_>=0&&s.push(h,d,_)}return{vertices:o,indices:s}}return{positive:r(1),negative:r(-1)}}const m={viewer:document.querySelector("#viewer"),angularViewer:document.querySelector("#angularViewer"),projectionViewer:document.querySelector("#projectionViewer"),radialViewer:document.querySelector("#radialViewer"),viewGrid:document.querySelector(".view-grid"),mainWindow:document.querySelector(".main-window"),menuPopup:document.querySelector("#menuPopup"),menuItems:document.querySelectorAll(".menu-item"),toolRender:document.querySelector("#toolRender"),toolSave:document.querySelector("#toolSave"),toolTile:document.querySelector("#toolTile"),toolOverlap:document.querySelector("#toolOverlap"),toolAxis:document.querySelector("#toolAxis"),toolXOY:document.querySelector("#toolXOY"),toolYOZ:document.querySelector("#toolYOZ"),toolXOZ:document.querySelector("#toolXOZ"),preset:document.querySelector("#presetInput"),cosType:document.querySelector("#cosTypeInput"),sinType:document.querySelector("#sinTypeInput"),cloud:document.querySelector("#cloudInput"),positiveLobe:document.querySelector("#positiveLobeInput"),negativeLobe:document.querySelector("#negativeLobeInput"),wireframe:document.querySelector("#wireframeInput"),smooth:document.querySelector("#smoothInput"),projection:document.querySelector("#projectionInput"),paletteOne:document.querySelector("#paletteOneInput"),paletteTwo:document.querySelector("#paletteTwoInput"),xySlice:document.querySelector("#xySliceInput"),yzSlice:document.querySelector("#yzSliceInput"),xzSlice:document.querySelector("#xzSliceInput"),quarter:document.querySelector("#quarterInput"),eighth:document.querySelector("#eighthInput"),threeQuarter:document.querySelector("#threeQuarterInput"),radialR:document.querySelector("#radialRInput"),radialR2:document.querySelector("#radialR2Input"),radialRdf:document.querySelector("#radialRdfInput"),radialSection:document.querySelector("#radialSectionInput"),radialSide:document.querySelector("#radialSideInput"),radialCurve:document.querySelector("#radialCurveInput"),radialAxis:document.querySelector("#radialAxisInput"),relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue"),longitudeNode:document.querySelector("#longitudeNodeInput"),grid3d:document.querySelector("#grid3dInput"),desktopMatch:document.querySelector("#desktopMatchInput"),n:document.querySelector("#nInput"),l:document.querySelector("#lInput"),m:document.querySelector("#mInput"),z:document.querySelector("#zInput"),mode:document.querySelector("#modeInput"),slice:document.querySelector("#sliceInput"),node:document.querySelector("#nodeInput"),axis:document.querySelector("#axisInput"),box:document.querySelector("#boxInput"),positiveColor:document.querySelector("#positiveColorInput"),negativeColor:document.querySelector("#negativeColorInput"),backgroundColor:document.querySelector("#backgroundColorInput"),iso:document.querySelector("#isoInput"),density:document.querySelector("#densityInput"),radius:document.querySelector("#radiusInput"),boxSizeDisplay:document.querySelector("#boxSizeDisplay"),intervalValue:document.querySelector("#intervalValue"),probabilityValue:document.querySelector("#probabilityValue"),opacity:document.querySelector("#opacityInput"),isoValue:document.querySelector("#isoValue"),densityValue:document.querySelector("#densityValue"),radiusValue:document.querySelector("#radiusValue"),opacityValue:document.querySelector("#opacityValue"),renderButton:document.querySelector("#renderButton"),axisProxyButton:document.querySelector("#axisProxyButton"),presetButton:document.querySelector("#presetButton"),redrawProxyButton:document.querySelector("#redrawProxyButton"),resetCameraButton:document.querySelector("#resetCameraButton"),screenshotButton:document.querySelector("#screenshotButton"),orbitalName:document.querySelector("#orbitalName"),viewerTitle:document.querySelector("#viewerTitle"),statusText:document.querySelector("#statusText"),posCount:document.querySelector("#posCount"),negCount:document.querySelector("#negCount"),nodeText:document.querySelector("#nodeText"),sliceText:document.querySelector("#sliceText"),boxText:document.querySelector("#boxText"),isoText:document.querySelector("#isoText"),openActivityButton:document.querySelector("#openActivityButton"),annotationModeButton:document.querySelector("#annotationModeButton"),annotationToolbar:document.querySelector("#annotationToolbar"),annotationClearButton:document.querySelector("#annotationClearButton"),openSketchButton:document.querySelector("#openSketchButton"),openAnimationButton:document.querySelector("#openAnimationButton"),openFormulaButton:document.querySelector("#openFormulaButton"),openPredictButton:document.querySelector("#openPredictButton"),openChallengeButton:document.querySelector("#openChallengeButton"),sketchWindow:document.querySelector("#sketchWindow"),formulaWindow:document.querySelector("#formulaWindow"),formulaOrbitalName:document.querySelector("#formulaOrbitalName"),formulaQuantumText:document.querySelector("#formulaQuantumText"),formulaMain:document.querySelector("#formulaMain"),formulaRadialText:document.querySelector("#formulaRadialText"),formulaAngularText:document.querySelector("#formulaAngularText"),formulaVisualText:document.querySelector("#formulaVisualText"),formulaRadialNodes:document.querySelector("#formulaRadialNodes"),formulaAngularNodes:document.querySelector("#formulaAngularNodes"),formulaPhaseText:document.querySelector("#formulaPhaseText"),animationWindow:document.querySelector("#animationWindow"),animationCanvas:document.querySelector("#animationCanvas"),animationStepBadge:document.querySelector("#animationStepBadge"),animationTitle:document.querySelector("#animationTitle"),animationText:document.querySelector("#animationText"),animationProgressFill:document.querySelector("#animationProgressFill"),animationRestartButton:document.querySelector("#animationRestartButton"),animationPrevButton:document.querySelector("#animationPrevButton"),animationPlayButton:document.querySelector("#animationPlayButton"),animationNextButton:document.querySelector("#animationNextButton"),animationExportButton:document.querySelector("#animationExportButton"),activityWindow:document.querySelector("#activityWindow"),activityTitle:document.querySelector("#activityTitle"),activityModeButtons:document.querySelectorAll("[data-activity-mode]"),activityPanes:document.querySelectorAll(".activity-pane"),predictPane:document.querySelector("#predictPane"),scorePane:document.querySelector("#scorePane"),diagnosisPane:document.querySelector("#diagnosisPane"),nodesPane:document.querySelector("#nodesPane"),comparePane:document.querySelector("#comparePane"),challengePane:document.querySelector("#challengePane"),explainPane:document.querySelector("#explainPane"),tabletPane:document.querySelector("#tabletPane"),predictTarget:document.querySelector("#predictTargetInput"),startPredictButton:document.querySelector("#startPredictButton"),verifyPredictButton:document.querySelector("#verifyPredictButton"),predictPrompt:document.querySelector("#predictPrompt"),scoreCurrentButton:document.querySelector("#scoreCurrentButton"),scoreShowRubricButton:document.querySelector("#scoreShowRubricButton"),scoreResetButton:document.querySelector("#scoreResetButton"),scorePrompt:document.querySelector("#scorePrompt"),diagnoseNodesButton:document.querySelector("#diagnoseNodesButton"),diagnosePhaseButton:document.querySelector("#diagnosePhaseButton"),diagnoseProjectionButton:document.querySelector("#diagnoseProjectionButton"),diagnosisPrompt:document.querySelector("#diagnosisPrompt"),nodeRevealButton:document.querySelector("#nodeRevealButton"),nodeHideButton:document.querySelector("#nodeHideButton"),compareA:document.querySelector("#compareAInput"),compareB:document.querySelector("#compareBInput"),compareApplyButton:document.querySelector("#compareApplyButton"),compareLoadAButton:document.querySelector("#compareLoadAButton"),compareLoadBButton:document.querySelector("#compareLoadBButton"),compareAViewer:document.querySelector("#compareAViewer"),compareBViewer:document.querySelector("#compareBViewer"),compareATitle:document.querySelector("#compareATitle"),compareBTitle:document.querySelector("#compareBTitle"),compareANotes:document.querySelector("#compareANotes"),compareBNotes:document.querySelector("#compareBNotes"),compareSummary:document.querySelector("#compareSummary"),newChallengeButton:document.querySelector("#newChallengeButton"),challengeGuess:document.querySelector("#challengeGuessInput"),revealChallengeButton:document.querySelector("#revealChallengeButton"),challengePrompt:document.querySelector("#challengePrompt"),explainRestartButton:document.querySelector("#explainRestartButton"),explainPrevButton:document.querySelector("#explainPrevButton"),explainPlayButton:document.querySelector("#explainPlayButton"),explainNextButton:document.querySelector("#explainNextButton"),explainProgressFill:document.querySelector("#explainProgressFill"),explainStepBadge:document.querySelector("#explainStepBadge"),explainStepTitle:document.querySelector("#explainStepTitle"),explainStepText:document.querySelector("#explainStepText"),explainFormula:document.querySelector("#explainFormula"),explainObserveText:document.querySelector("#explainObserveText"),explainReasonText:document.querySelector("#explainReasonText"),explainHintText:document.querySelector("#explainHintText"),sketchCanvas:document.querySelector("#sketchCanvas"),sketchColor:document.querySelector("#sketchColorInput"),sketchSize:document.querySelector("#sketchSizeInput"),sketchPen:document.querySelector("#sketchPenButton"),sketchEraser:document.querySelector("#sketchEraserButton"),sketchClear:document.querySelector("#sketchClearButton"),tabletLargeButton:document.querySelector("#tabletLargeButton"),tabletRestoreButton:document.querySelector("#tabletRestoreButton"),tabletScreenshotButton:document.querySelector("#tabletScreenshotButton")},Ot=new Ti;Ot.background=new xe(1120295);function Wr(n,e){const t=new N_(n,e);return t.rotateSpeed=3.2,t.zoomSpeed=1.15,t.panSpeed=.65,t.staticMoving=!1,t.dynamicDampingFactor=.12,t.noRotate=!1,t.noZoom=!1,t.noPan=!1,t}function jo(n){return n.pointerType==="mouse"&&(n.button===2||(n.buttons&2)===2)}function _n(n){var l,c,u,h,f,d;if(!n)return;const e=n.object,t=(l=e==null?void 0:e.position)==null?void 0:l.clone(),i=(c=e==null?void 0:e.quaternion)==null?void 0:c.clone(),r=(u=e==null?void 0:e.up)==null?void 0:u.clone(),a=e==null?void 0:e.zoom,o=(h=n.target)==null?void 0:h.clone(),s=n.staticMoving;typeof n.reset=="function"&&t&&o&&(n.staticMoving=!0,n.reset(),e.position.copy(t),i&&e.quaternion.copy(i),r&&e.up.copy(r),typeof a=="number"&&(e.zoom=a),n.target.copy(o),(f=e.updateProjectionMatrix)==null||f.call(e),n.staticMoving=s),n.enabled=!0,n.noRotate=!1,n.noZoom=!1,n.noPan=!1,(d=n.handleResize)==null||d.call(n),n.update()}function xa(n,e){const t=n==null?void 0:n.querySelector("canvas");if(!t||!e)return;const i=()=>typeof e=="function"?e():e;t.addEventListener("pointerdown",r=>{if(jo(r)){r.preventDefault(),r.stopImmediatePropagation(),_n(i());return}_n(i())},{capture:!0}),t.addEventListener("pointermove",r=>{jo(r)&&(r.preventDefault(),r.stopImmediatePropagation())},{capture:!0}),t.addEventListener("pointerup",r=>{jo(r)&&(r.preventDefault(),r.stopImmediatePropagation()),_n(i())},{capture:!0}),t.addEventListener("pointercancel",()=>_n(i()),{capture:!0}),t.addEventListener("lostpointercapture",()=>_n(i())),t.addEventListener("mouseenter",()=>_n(i())),t.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopImmediatePropagation(),_n(i())},{capture:!0})}const Ye=new bn(-5,5,5,-5,.1,1e3),dn=new ni({antialias:!0,preserveDrawingBuffer:!0});dn.setPixelRatio(Math.min(window.devicePixelRatio,2));dn.localClippingEnabled=!0;m.viewer.appendChild(dn.domElement);let Ae=Wr(Ye,dn.domElement);const Sn=new Ti,it=new bn(-5,5,5,-5,.1,1e3),$i=new ni({antialias:!0,preserveDrawingBuffer:!0});$i.setPixelRatio(Math.min(window.devicePixelRatio,2));$i.localClippingEnabled=!0;m.angularViewer.appendChild($i.domElement);const Ct=Wr(it,$i.domElement),Fn=new Ti,_t=new bn(-5,5,5,-5,.1,1e3);_t.up.set(0,0,1);const ji=new ni({antialias:!0,preserveDrawingBuffer:!0});ji.setPixelRatio(Math.min(window.devicePixelRatio,2));m.projectionViewer.appendChild(ji.domElement);const Ln=Wr(_t,ji.domElement),On=new Ti,wt=new bn(-5,5,5,-5,.1,1e3),qr=new ni({antialias:!0,preserveDrawingBuffer:!0});qr.setPixelRatio(Math.min(window.devicePixelRatio,2));m.radialViewer.appendChild(qr.domElement);const $t=Wr(wt,qr.domElement);xa(m.viewer,()=>Ae);xa(m.angularViewer,Ct);xa(m.projectionViewer,Ln);xa(m.radialViewer,$t);function Ar(){_n(Ae),_n(Ct),_n(Ln),_n($t)}function X_(){var t,i,r;const n=((t=Ae==null?void 0:Ae.target)==null?void 0:t.clone())??new P,e={rotateSpeed:(Ae==null?void 0:Ae.rotateSpeed)??3.2,zoomSpeed:(Ae==null?void 0:Ae.zoomSpeed)??1.15,panSpeed:(Ae==null?void 0:Ae.panSpeed)??.65,staticMoving:(Ae==null?void 0:Ae.staticMoving)??!1,dynamicDampingFactor:(Ae==null?void 0:Ae.dynamicDampingFactor)??.12,noRotate:(Ae==null?void 0:Ae.noRotate)??!1,noZoom:(Ae==null?void 0:Ae.noZoom)??!1,noPan:(Ae==null?void 0:Ae.noPan)??!1};(i=Ae==null?void 0:Ae.dispose)==null||i.call(Ae),Ae=Wr(Ye,dn.domElement),Object.assign(Ae,e),Ae.target.copy(n),(r=Ae.handleResize)==null||r.call(Ae),Ae.update()}const Ul=new hn(16777215,1.45);Ul.position.set(0,0,1);Ye.add(Ul);Ye.add(new hn(16777215,.28));Ot.add(Ye);Ot.add(new Ai(16777215,.42));const Nl=new hn(16777215,1.45);Nl.position.set(0,0,1);it.add(Nl);it.add(new hn(16777215,.28));Sn.add(it);Sn.add(new Ai(16777215,.42));const Fl=new hn(16777215,1.7);Fl.position.set(0,0,80);Fn.add(Fl);Fn.add(new Ai(16777215,.65));const Ol=new hn(16777215,1.8);Ol.position.set(0,-40,60);On.add(Ol);On.add(new Ai(16777215,.62));for(const n of[dn,$i,ji,qr])n.outputColorSpace=Nt,n.toneMapping=zr,n.toneMappingExposure=1.16;Ul.intensity=1.72;Nl.intensity=1.72;Fl.intensity=1.88;Ol.intensity=1.92;const ga=Vs(4.5,.2,.9);let mi=Vs(4.2,.1,.9);Ot.add(ga);Sn.add(mi);let Tt=null,At=null,Hi=null,Gi=null,ws=null,la=null,Ts=null,ca=null,di=null,fi=null,ua=null,ha=null,zi=null,da=null,fa=null,an=null,dl=null,fl=null,pl=null,ml=null,gl=null,_l=null,Yn=null,gn=null,Bl=1,ei=5,Zt=4,zl=3,_a=4.5,An=null,jn=null,Vt=null,yn=null,ku="",Cn=null,Zn=null,Ht=null,Dn=null,Vu="",Rn=null,Mi=null,Gt=null,Un=null,Hu="",Pn=null,Ut=null,Cr=!1;const va=[],$e={drawing:!1,erasing:!1,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,strokes:[],currentStroke:null};function kl(n=(e=>(e=m.backgroundColor)==null?void 0:e.value)()||"#668080"){document.documentElement.style.setProperty("--viewer-bg",n);const t=new xe(n);Ot.background=t.clone(),Sn.background=t.clone(),Fn.background=t.clone(),On.background=t.clone();for(const i of va)i.scene.background=t.clone()}function Y_(){var t;if(document.querySelector("#relationModeInput")){Object.assign(m,{relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue")});return}const n=(t=m.longitudeNode)==null?void 0:t.closest("fieldset");if(!n)return;const e=document.createElement("fieldset");e.className="relation-panel",e.innerHTML=`
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
  `,n.insertAdjacentElement("afterend",e),Object.assign(m,{relationMode:e.querySelector("#relationModeInput"),syncRotation:e.querySelector("#syncRotationInput"),scanRadius:e.querySelector("#scanRadiusInput"),scanRadiusValue:e.querySelector("#scanRadiusValue"),scanTheta:e.querySelector("#scanThetaInput"),scanThetaValue:e.querySelector("#scanThetaValue"),scanPhi:e.querySelector("#scanPhiInput"),scanPhiValue:e.querySelector("#scanPhiValue")})}Y_();kl();const Zi=document.createElement("button");Zi.type="button";Zi.className="fullscreen-exit-button";Zi.textContent="退出全屏";Zi.hidden=!0;document.body.appendChild(Zi);function $_(n,e,t){return zn(n,e,t)}function td(n,e,t){return`${n},${e},${t}`}function j_(n){const e=[0];for(let t=1;t<=n;t+=1)e.push(t,-t);return e}function nd(n){const e=Math.max(1,Math.min(6,Math.round(n)||1)),t=[];for(let i=0;i<e;i+=1)for(const r of j_(i))t.push({value:td(e,i,r),label:$_(e,i,r)});return t}function Z_(n=6){const e=[];for(let t=1;t<=n;t+=1)e.push(...nd(t));return e}const qt=Z_(6);function us(n,e,t=null){if(n){n.replaceChildren();for(const i of e){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,n.append(r)}t&&e.some(i=>i.value===t)&&(n.value=t)}}function K_(){us(m.predictTarget,qt,"2,1,1"),us(m.challengeGuess,qt,"2,1,1"),us(m.compareA,qt,"2,1,1"),us(m.compareB,qt,"3,1,1")}function J_(n=null){if(!m.preset)return;const e=n??Jh(Number(m.n.value),Number(m.l.value),Number(m.m.value));if(Number(m.preset.dataset.n)!==e.n){m.preset.replaceChildren();for(const i of nd(e.n)){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,m.preset.append(r)}m.preset.dataset.n=String(e.n)}m.preset.value=td(e.n,e.l,e.m)}const ae={challengeTarget:qt[0],challengeTotal:0,challengeCorrect:0,dragWindow:null,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,explanationStep:0,explanationPlaying:!1,explanationStartedAt:0,explanationTimer:null,explanationFrame:null,animationStep:0,animationPlaying:!1,animationStartedAt:0,animationTimer:null,animationFrame:null,animationExporting:!1,annotationMode:!1,annotationDrag:null};function lt(){var e,t;const n=Jh(Number(m.n.value),Number(m.l.value),Number(m.m.value));return(e=m.sinType)!=null&&e.checked&&n.m>0&&(n.m=-n.m),(t=m.cosType)!=null&&t.checked&&n.m<0&&(n.m=Math.abs(n.m)),m.n.value=n.n,m.l.max=n.n-1,m.l.value=n.l,m.m.min=-n.l,m.m.max=n.l,m.m.value=Math.abs(n.m),J_(n),{...n,z:Math.max(1,Math.min(10,Number(m.z.value)||1))}}function Kt(){var r,a,o,s,l,c,u,h,f,d,_,v,g,p,M,x,y,T,E,A,R,b,S;const n=lt(),e=m.desktopMatch.checked?ri(n):null;let t=m.slice.value;(r=m.xySlice)!=null&&r.checked&&(t="xoy"),(a=m.yzSlice)!=null&&a.checked&&(t="yoz"),(o=m.xzSlice)!=null&&o.checked&&(t="xoz"),!((s=m.xySlice)!=null&&s.checked)&&!((l=m.yzSlice)!=null&&l.checked)&&!((c=m.xzSlice)!=null&&c.checked)&&(t="none");const i={iso:Number(m.iso.value),density:Number(m.density.value),radius:Number(m.radius.value),opacity:Number(m.opacity.value),mode:m.mode.value,showCloud:((u=m.cloud)==null?void 0:u.checked)??!1,slice:t,showNode:m.node.checked||((h=m.longitudeNode)==null?void 0:h.checked),showAxis:m.axis.checked,showBox:m.box.checked,showPositive:((f=m.positiveLobe)==null?void 0:f.checked)??!0,showNegative:((d=m.negativeLobe)==null?void 0:d.checked)??!0,wireframe:((_=m.wireframe)==null?void 0:_.checked)??!1,smooth:((v=m.smooth)==null?void 0:v.checked)??!1,showProjection:((g=m.projection)==null?void 0:g.checked)??!1,grid3d:((p=m.grid3d)==null?void 0:p.checked)??!1,cutaway:(M=m.eighth)!=null&&M.checked?"eighth":(x=m.quarter)!=null&&x.checked?"quarter":(y=m.threeQuarter)!=null&&y.checked?"threeQuarter":"none",radialMode:(T=m.radialR)!=null&&T.checked?"R":(E=m.radialR2)!=null&&E.checked?"R2":"RDF",radialSection:((A=m.radialSection)==null?void 0:A.checked)??!1,radialSide:((R=m.radialSide)==null?void 0:R.checked)??!1,radialCurve:((b=m.radialCurve)==null?void 0:b.checked)??!0,radialAxis:((S=m.radialAxis)==null?void 0:S.checked)??!1,positiveColor:m.positiveColor.value,negativeColor:m.negativeColor.value,backgroundColor:m.backgroundColor.value,desktopMatched:!!e};return m.isoValue.value=i.iso.toFixed(4),m.densityValue.value=i.density,m.radiusValue.value=i.radius.toFixed(1),m.opacityValue.value=i.opacity.toFixed(2),m.boxSizeDisplay&&(m.boxSizeDisplay.value=(i.radius*2.4).toFixed(2)),m.intervalValue&&(m.intervalValue.value=(i.radius*2/i.density).toFixed(3)),m.probabilityValue&&(m.probabilityValue.value="0.800"),m.iso.disabled=!1,m.density.disabled=!1,m.radius.disabled=!1,i}function Xr(){if(!m.desktopMatch.checked)return;const n=ri(lt()),e=Math.min(Number(m.iso.max),Math.max(Number(m.iso.min),n.iso));m.iso.value=e.toFixed(4),m.density.value=Math.min(Number(m.density.max),Math.max(Number(m.density.min),n.gridSize)),m.radius.value=Math.min(Number(m.radius.max),Math.max(Number(m.radius.min),n.radius)),Kt()}function Q_(){if(!m.boxSizeDisplay)return;const n=Number(m.boxSizeDisplay.value);!Number.isFinite(n)||n<=0||(m.radius.value=Math.min(Number(m.radius.max),Math.max(Number(m.radius.min),n/2.4)),Kt())}function As(n,e){const t=new Ze;t.setAttribute("position",new We(n,3));const i=new Float32Array(n.length/3);for(let a=0;a<i.length;a+=1){const o=Math.sin((a+1)*12.9898)*43758.5453;i[a]=o-Math.floor(o)}t.setAttribute("seed",new Bt(i,1));const r=new Qn({uniforms:{uColor:{value:new xe(e)},uTime:{value:0},uSize:{value:2.7}},transparent:!0,depthWrite:!1,blending:Qo,vertexShader:`
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
    `});return new d_(t,r)}function ev(n){var e,t;for(const i of[Tt,At,Hi,Gi])i!=null&&i.isPoints&&((t=(e=i.material)==null?void 0:e.uniforms)!=null&&t.uTime)&&(i.material.uniforms.uTime.value=n)}function Lt(n){return Number.parseInt(n.replace("#","0x"),16)}function vl(n,e){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle=e;const r=n.length>2?34:n.length>1?44:58;i.font=`700 ${r}px Segoe UI, Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,64,64);const a=new f_(t);a.colorSpace=Nt;const o=new Gh({map:a,transparent:!0,alphaTest:.2,depthTest:!0,depthWrite:!1});o.toneMapped=!1;const s=new u_(o);return s.scale.set(.68,.68,.68),s.renderOrder=20,s}function xl(n,e,t,i){const r=e.clone().sub(n),a=r.length(),o=new ti({color:i});o.toneMapped=!1;const s=new rt(new Gr(t,t,a,48,1,!1),o);return s.position.copy(n).add(e).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new P(0,1,0),r.normalize()),s}function Ml(n,e,t,i,r){const a=new ti({color:r});a.toneMapped=!1;const o=new rt(new Il(i,t,96,1,!1),a);return o.position.copy(e),o.quaternion.setFromUnitVectors(new P(0,1,0),n.clone().normalize()),o}function Vs(n,e=.2,t=.9){const i=new Rt,r=n*t,a=n*.02,o=r*.1,s=a*3,l=[{dir:new P(1,0,0),color:16711680,label:"x",labelColor:"#ff0000"},{dir:new P(0,1,0),color:47400,label:"y",labelColor:"#00e63a"},{dir:new P(0,0,1),color:15785216,label:"z",labelColor:"#fff000"}];for(const c of l){const u=c.dir.clone().multiplyScalar(-r),h=c.dir.clone().multiplyScalar(r);i.add(xl(u,h,a,c.color)),i.add(Ml(c.dir,c.dir.clone().multiplyScalar(r*1.01),o,s,c.color));const f=vl(c.label,c.labelColor);c.label==="x"&&f.position.set(r*1.2,-e,0),c.label==="y"&&f.position.set(-e,r*1.2,0),c.label==="z"&&f.position.set(-e,-e,r*1.2),i.add(f)}return i}function tv(n,e,t,i){const r=new Rt,a=Math.max(.018,n*.006),o=n*.08,s=a*3.2,l=new P(0,0,t),c=new P(n,0,t),u=new P(0,0,t+e);r.add(xl(l,c,a,15785216)),r.add(Ml(new P(1,0,0),c,o,s,15785216)),r.add(xl(l,u,a,22527)),r.add(Ml(new P(0,0,1),u,o,s,22527));const h=vl("r","#fff000");h.scale.setScalar(.48),h.position.set(n+o*.85,-n*.045,t),r.add(h);const f=vl(i==="R2"?"R*R":i,"#0057ff");return f.scale.setScalar(.58),f.position.set(-n*.08,0,t+e+o*.9),r.add(f),r}function Fr(n,e,t){const i=new Ze;i.setAttribute("position",new We(n.vertices,3)),i.setIndex(n.indices),i.computeVertexNormals();const r=new jh({color:e,transparent:t<1,opacity:t,side:ht,emissive:e,emissiveIntensity:.055});return new rt(i,r)}function Or(n,e){n!=null&&n.material&&(n.visible=!0,n.material.wireframe=e.wireframe&&!e.smooth,n.material.flatShading=!e.smooth,n.material.clippingPlanes=[],n.material.clipIntersection=!1,n.material.needsUpdate=!0)}function id(n){return n.wireframe||n.smooth}function nv(n){return n==="quarter"?[new Ft(new P(0,1,0),0),new Ft(new P(0,0,1),0)]:n==="eighth"?[new Ft(new P(1,0,0),0),new Ft(new P(0,1,0),0),new Ft(new P(0,0,1),0)]:n==="threeQuarter"?[new Ft(new P(0,0,1),0)]:[]}function rd(n){const e=nv(n.cutaway),t=Hs(n.slice);return t==="x"&&e.push(new Ft(new P(1,0,0),0)),t==="y"&&e.push(new Ft(new P(0,1,0),0)),t==="z"&&e.push(new Ft(new P(0,0,1),0)),e}function Hs(n){return n==="yoz"?"x":n==="xoz"?"y":n==="xoy"?"z":null}function iv(n,e,t,i){const r=rd(e);if(!r.length)return n;n.updateMatrixWorld(!0);const a=n.geometry.getAttribute("position"),o=n.geometry.index,s=[],l=o?o.count:Math.min(a.count,n.count||a.count);function c(N){return n.localToWorld(new P(a.getX(N),a.getY(N),a.getZ(N)))}const u=Math.floor(l/3);for(let N=0;N<u;N+=1){const H=o?o.getX(N*3):N*3,V=o?o.getX(N*3+1):N*3+1,$=o?o.getX(N*3+2):N*3+2;s.push([c(H),c(V),c($)])}let h=s;const f=r.map(()=>[]);r.forEach((N,H)=>{const V=[];for(const $ of h){const{clipped:G,segments:ne}=av($,N);G.length>=3&&V.push(G),f[H].push(...ne)}h=V});const d=[],_=[],v=[],g=[],p=[],M=new xe(Lt(t)),x=Math.max(e.iso*4,1e-9);function y(N){return d.push(N.x,N.y,N.z),d.length/3-1}function T(N,H){return v.push(N.x,N.y,N.z),g.push(H.r,H.g,H.b),v.length/3-1}for(const N of h){const H=y(N[0]);for(let V=1;V<N.length-1;V+=1){const $=y(N[V]),G=y(N[V+1]);_.push(H,$,G)}}r.forEach((N,H)=>{const V=ov(f[H]);for(const $ of V){if($.length<3)continue;const G=lv($,N),ne=G.reduce((ie,ye)=>ie.add(ye),new P).multiplyScalar(1/G.length),le=T(ne,Zo(Pt(i,ne.x,ne.y,ne.z),x));for(let ie=0;ie<G.length;ie+=1){const ye=G[ie],Me=G[(ie+1)%G.length],Y=T(ye,Zo(Pt(i,ye.x,ye.y,ye.z),x)),K=T(Me,Zo(Pt(i,Me.x,Me.y,Me.z),x));p.push(le,K,Y)}}});const E=new Ze;E.setAttribute("position",new We(d,3)),E.setIndex(_),e.smooth&&!e.wireframe&&ad(E,e),E.computeVertexNormals();const A=new Tr({color:M,emissive:M,emissiveIntensity:.08,shininess:28,specular:3355443,transparent:e.opacity<1,opacity:e.opacity,side:ht,wireframe:e.wireframe,flatShading:!e.smooth}),R=new rt(E,A);if(R.userData.vertexCount=_.length,!p.length||e.wireframe)return R;const b=new Ze;b.setAttribute("position",new We(v,3)),b.setAttribute("color",new We(g,3)),b.setIndex(p),b.computeVertexNormals();const S=!!Hs(e.slice),L=new ti({vertexColors:!0,side:ht,transparent:!0,opacity:S?.62:.26,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),F=new rt(b,L);F.renderOrder=S?3:1;const U=new Rt;return U.add(R,F),U.userData.vertexCount=_.length+p.length,U}function rv(n,e,t){var x;n.updateMatrixWorld(!0);const i=n.geometry.getAttribute("position"),r=Number.isFinite(n.count)&&n.count>0?n.count:Number.POSITIVE_INFINITY,a=Number.isFinite((x=n.geometry.drawRange)==null?void 0:x.count)&&n.geometry.drawRange.count>0?n.geometry.drawRange.count:Number.POSITIVE_INFINITY,o=Math.min(i.count,r,a),s=[],l=[],c=new Map;function u(y){return Number.isFinite(y.x)&&Number.isFinite(y.y)&&Number.isFinite(y.z)}const h=Hs(e.slice);function f(y){return e.cutaway==="quarter"?(y.y>0&&(y.y=0),y.z>0&&(y.z=0)):e.cutaway==="eighth"?(y.x>0&&(y.x=0),y.y>0&&(y.y=0),y.z>0&&(y.z=0)):e.cutaway==="threeQuarter"&&y.y>0&&y.z>0&&(y.y<y.z?y.y=0:y.z=0),h==="x"&&y.x>0&&(y.x=0),h==="y"&&y.y>0&&(y.y=0),h==="z"&&y.z>0&&(y.z=0),y}function d(y,T){const E=n.localToWorld(new P(i.getX(y),i.getY(y),i.getZ(y)));if(f(E),!u(E))return-1;if(T){const R=`${Math.round(E.x*1e4)},${Math.round(E.y*1e4)},${Math.round(E.z*1e4)}`;if(c.has(R))return c.get(R);const b=s.length/3;return s.push(E.x,E.y,E.z),c.set(R,b),b}return s.push(E.x,E.y,E.z),s.length/3-1}const _=Math.floor(o/3),v=e.smooth&&!e.wireframe;for(let y=0;y<_;y+=1){const T=y*3,E=y*3+1,A=y*3+2,R=d(T,v),b=d(E,v),S=d(A,v);R>=0&&b>=0&&S>=0&&l.push(R,b,S)}const g=new Ze;g.setAttribute("position",new We(s,3)),g.setIndex(l),e.smooth&&!e.wireframe&&ad(g,e),g.computeVertexNormals();const p=n.material.clone();p.color=new xe(Lt(t)),p.emissive=new xe(Lt(t)),p.side=ht,p.wireframe=e.wireframe,p.flatShading=!e.smooth,p.clippingPlanes=[],p.needsUpdate=!0;const M=new rt(g,p);return M.userData.vertexCount=o,M}function ad(n,e){const t=n.getAttribute("position"),i=n.index;if(!t||!i)return;const r=t.count,a=Array.from({length:r},()=>new Set);for(let d=0;d<i.count;d+=3){const _=i.getX(d),v=i.getX(d+1),g=i.getX(d+2);a[_].add(v).add(g),a[v].add(_).add(g),a[g].add(_).add(v)}const o=Math.max(.035,e.radius/Math.max(80,e.density*2)),s=new Uint8Array(r),l=Hs(e.slice);for(let d=0;d<r;d+=1){const _=t.getX(d),v=t.getY(d),g=t.getZ(d);e.cutaway==="quarter"&&(Math.abs(v)<o||Math.abs(g)<o)&&(s[d]=1),e.cutaway==="eighth"&&(Math.abs(_)<o||Math.abs(v)<o||Math.abs(g)<o)&&(s[d]=1),e.cutaway==="threeQuarter"&&(Math.abs(v)<o||Math.abs(g)<o)&&(s[d]=1),l==="x"&&Math.abs(_)<o&&(s[d]=1),l==="y"&&Math.abs(v)<o&&(s[d]=1),l==="z"&&Math.abs(g)<o&&(s[d]=1)}const c=new Float32Array(t.array),u=new Float32Array(c.length),h=e.cutaway==="none"?10:7,f=e.cutaway==="none"?.16:.1;for(let d=0;d<h;d+=1){u.set(c);for(let _=0;_<r;_+=1){if(s[_]||a[_].size<3)continue;let v=0,g=0,p=0;for(const y of a[_]){const T=y*3;v+=c[T],g+=c[T+1],p+=c[T+2]}const M=a[_].size,x=_*3;u[x]=c[x]+(v/M-c[x])*f,u[x+1]=c[x+1]+(g/M-c[x+1])*f,u[x+2]=c[x+2]+(p/M-c[x+2])*f}c.set(u)}t.array.set(c),t.needsUpdate=!0}function av(n,e){const t=[],i=[];for(let a=0;a<n.length;a+=1){const o=n[a],s=n[(a+1)%n.length],l=e.distanceToPoint(o)>=-1e-7,c=e.distanceToPoint(s)>=-1e-7;if(l&&c)t.push(s.clone());else if(l&&!c){const u=Gu(o,s,e);t.push(u),i.push(u)}else if(!l&&c){const u=Gu(o,s,e);t.push(u,s.clone()),i.push(u)}}const r=i.length===2?[[i[0],i[1]]]:[];return{clipped:t,segments:r}}function Gu(n,e,t){const i=e.clone().sub(n),r=t.normal.dot(i);if(Math.abs(r)<1e-10)return n.clone();const a=-(t.normal.dot(n)+t.constant)/r;return n.clone().add(i.multiplyScalar(Math.max(0,Math.min(1,a))))}function sv(n){return`${Math.round(n.x*1e4)},${Math.round(n.y*1e4)},${Math.round(n.z*1e4)}`}function ov(n){const e=new Map,t=new Map;function i(s){const l=sv(s);return e.has(l)||e.set(l,s.clone()),t.has(l)||t.set(l,new Set),l}for(const[s,l]of n){const c=i(s),u=i(l);c!==u&&(t.get(c).add(u),t.get(u).add(c))}const r=[],a=new Set;function o(s,l){return s<l?`${s}|${l}`:`${l}|${s}`}for(const s of t.keys())for(const l of t.get(s)){const c=o(s,l);if(a.has(c))continue;const u=[s];let h=s,f=l;a.add(c);let d=0;for(;d<2e4;){u.push(f);const v=[...t.get(f)],g=v.find(p=>p!==h&&!a.has(o(f,p)))??v.find(p=>p!==h);if(!g||g===s)break;a.add(o(f,g)),h=f,f=g,d+=1}const _=u.map(v=>e.get(v));_.length>=3&&r.push(_)}return r}function lv(n,e){const t=n.reduce((o,s)=>o.add(s),new P).multiplyScalar(1/n.length),i=e.normal.clone().normalize(),r=Math.abs(i.x)<.9?new P(1,0,0):new P(0,1,0);r.sub(i.clone().multiplyScalar(r.dot(i))).normalize();const a=new P().crossVectors(i,r).normalize();return[...n].sort((o,s)=>{const l=o.clone().sub(t),c=s.clone().sub(t),u=Math.atan2(l.dot(a),l.dot(r)),h=Math.atan2(c.dot(a),c.dot(r));return u-h})}function Cs(n,e,t,i){const r={...e,density:e.smooth&&!e.wireframe?Math.min(180,Math.max(e.density,Math.round(e.density*2))):e.density},a=new jh({color:Lt(i),transparent:e.opacity<1,opacity:e.opacity,side:ht,emissive:Lt(i),emissiveIntensity:.055}),o=n.n>=5?5e5:16e4,s=new Kh(r.density,a,!0,!0,o);return s.isolation=r.iso,s.position.set(0,0,0),s.scale.set(r.radius,r.radius,r.radius),ed(s.field,n,r,t),s.update(),rd(e).length?iv(s,e,i,n):rv(s,e,i)}function cv(n,e){const t=new $h({color:15922423,roughness:.65,transparent:!0,opacity:.26,side:ht}),i=new Kh(e.density,t,!0,!0,1e5);return i.isolation=0,i.scale.set(e.radius,e.radius,e.radius),H_(i.field,n,e),i.update(),i.userData.vertexCount=i.count??0,i}function uv(n,e){return null}function sd(n){const e=new Vr(n*2,n*2,n*2),t=new R_(e),i=new Yi({color:13686237,transparent:!0,opacity:.58}),r=new Pl(t,i);return e.dispose(),r}function hv(n,e){return null}function Zo(n,e){const t=Math.max(-1,Math.min(1,n/Math.max(e,1e-12))),i=Math.abs(t),r=Math.max(0,Math.min(1,(i-.08)/.68)),a=r*r*(3-2*r),o=qs(t),s=new xe(9279124),l=new xe(14081501);return s.clone().lerp(l,Math.min(.5,a*.35)).lerp(o,a)}function dv(){for(const n of[Tt,At,Hi,Gi,ws,la,Ts,ca])n&&Ki(Ot,n);Tt=null,At=null,Hi=null,Gi=null,ws=null,la=null,Ts=null,ca=null}function fv(){for(const n of[di,fi])n&&Ki(Sn,n);di=null,fi=null}function pv(n,e=!0){mi&&Ki(Sn,mi),mi=Vs(n,Math.max(.08,n*.024),.9),mi.visible=e,Sn.add(mi)}function mv(){for(const n of[ua,ha,zi])n&&Ki(Fn,n);ua=null,ha=null,zi=null}function od(){for(const n of[da,fa,an,dl,fl])n&&Ki(On,n);da=null,fa=null,an=null,dl=null,fl=null}function Ki(n,e){n.remove(e),e.traverse(t=>{if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const i of t.material)i.dispose();else t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())})}function at(){Vl();const n=lt(),e=Kt(),t=zn(n.n,n.l,n.m);m.statusText.textContent="Calculating",m.renderButton.disabled=!0,requestAnimationFrame(()=>{var s;dv(),fv(),mv(),od();let i=0,r=0;if(kl(e.backgroundColor),ga.visible=e.showAxis,ga.scale.setScalar(Math.max(1,e.radius/4.5)),(s=m.toolAxis)==null||s.classList.toggle("active",e.showAxis),e.mode==="marching"||e.mode==="points")Tt=Cs(n,e,1,e.positiveColor),At=Cs(n,e,-1,e.negativeColor),i=Tt.userData.vertexCount,r=At.userData.vertexCount;else{const{positive:l,negative:c}=q_(n,{...e,thetaSegments:Math.max(30,e.density+18),phiSegments:Math.max(52,e.density*3)});Tt=Fr(l,Lt(e.positiveColor),e.opacity),At=Fr(c,Lt(e.negativeColor),e.opacity),Or(Tt,e),Or(At,e),i=l.vertices.length/3,r=c.vertices.length/3}const a=id(e);if(Tt.visible=e.showPositive&&a,At.visible=e.showNegative&&a,Ot.add(Tt,At),e.showCloud){const{positive:l,negative:c}=V_(n,e);Hi=As(l,Lt(e.positiveColor)),Gi=As(c,Lt(e.negativeColor)),Hi.visible=e.showPositive,Gi.visible=e.showNegative,Ot.add(Hi,Gi),i=l.length/3,r=c.length/3}e.showNode&&Es(n.n,n.l)!=="0 radial, 0 angular"&&(ws=cv(n,e),Ot.add(ws)),la=uv(),la&&Ot.add(la),ca=hv(),ca&&Ot.add(ca),(e.showBox||e.grid3d)&&(Ts=sd(e.radius),Ot.add(Ts)),Cv(e),m.orbitalName.textContent=t,m.viewerTitle.textContent=`原子轨道  ${t}`,m.nodeText.textContent=Es(n.n,n.l),m.sliceText.textContent=e.slice.toUpperCase(),m.boxText.textContent=e.radius.toFixed(2),m.isoText.textContent=e.iso.toFixed(5),m.posCount.textContent=String(i),m.negCount.textContent=String(r),m.statusText.textContent="Rendered",_d(),m.animationWindow&&!m.animationWindow.classList.contains("closed")&&Br(0),Ev(n,e),Hv(n,e),dd(n,e);const o=n.n>=5||n.l>=3?1.65:1.22;Mv(n,e.radius*o,Math.max(Zt,vv(e))),X_(),m.renderButton.disabled=!1,ln()})}function gv(){return Array.from(document.querySelectorAll(".view-grid > .qt-window"))}function Vl(n={}){for(const e of gv())e.classList.remove("closed"),n.restoreLayout?e.classList.remove("minimized","maximized"):e.classList.remove("minimized"),Ji(e)}function Gs(n=ei){const e=m.viewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Ye.left=-n*t,Ye.right=n*t,Ye.top=n,Ye.bottom=-n):(Ye.left=-n,Ye.right=n,Ye.top=n/t,Ye.bottom=-n/t),Ye.near=.1,Ye.far=Math.max(1e3,n*8),Ye.updateProjectionMatrix()}function bi(n,e=90){return Math.max(e,n*2.8)}function Hl(n=ei){var t,i,r;ei=n;const e=bi(n);Ye.position.set(0,0,e),Ye.lookAt(0,0,0),Gs(n),Ae.target.set(0,0,0),Ae.update(),(t=m.toolXOY)==null||t.classList.add("active"),(i=m.toolYOZ)==null||i.classList.remove("active"),(r=m.toolXOZ)==null||r.classList.remove("active")}function Ws(n=Math.max(3,ei*.45)){const e=m.angularViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(it.left=-n*t,it.right=n*t,it.top=n,it.bottom=-n):(it.left=-n,it.right=n,it.top=n/t,it.bottom=-n/t),it.near=.1,it.far=Math.max(1e3,n*8),it.updateProjectionMatrix()}function _v(n=4){var t;Zt=Math.max(3,n);const e=bi(Zt,40);it.position.set(0,0,e),it.lookAt(0,0,0),Ws(Zt),Ct.target.set(0,0,0),(t=Ct.handleResize)==null||t.call(Ct),Ct.update()}function vv(n){const e=Math.max(4,Math.min(8,n.radius*.55))*.74;return Math.max(5.8,e*1.55)}function xv(...n){var a;const e=new cn,t=new cn;let i=!1;for(const o of n)o&&((a=o.updateWorldMatrix)==null||a.call(o,!0,!1),t.setFromObject(o),!(!Number.isFinite(t.min.x)||!Number.isFinite(t.max.x))&&(i?e.union(t):e.copy(t),i=!0));if(!i)return 4.2;const r=new wi;return e.getBoundingSphere(r),Math.max(.001,r.radius)}function Mv(n,e,t){var o,s,l,c,u;const i=Xl(n);ei=e,Zt=Math.max(3,t);const r=bi(e),a=bi(Zt,40);i==="yoz"?(Ye.position.set(r,0,0),it.position.set(a,0,0)):i==="xoz"?(Ye.position.set(0,r,0),it.position.set(0,a,0)):(Ye.position.set(0,0,r),it.position.set(0,0,a)),Ye.lookAt(0,0,0),it.lookAt(0,0,0),Gs(e),Ws(Zt),Ae.target.set(0,0,0),Ct.target.set(0,0,0),(o=Ae.handleResize)==null||o.call(Ae),(s=Ct.handleResize)==null||s.call(Ct),Ae.update(),Ct.update(),(l=m.toolXOY)==null||l.classList.toggle("active",i==="xoy"),(c=m.toolYOZ)==null||c.classList.toggle("active",i==="yoz"),(u=m.toolXOZ)==null||u.classList.toggle("active",i==="xoz")}function ld(n=Math.max(2.5,ei*.6)){const e=m.projectionViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(_t.left=-n*t,_t.right=n*t,_t.top=n,_t.bottom=-n):(_t.left=-n,_t.right=n,_t.top=n/t,_t.bottom=-n/t),_t.near=.1,_t.far=1e3,_t.updateProjectionMatrix()}function yv(n=Math.max(3,ei*.5)){var e;zl=n,_t.up.set(0,0,1),_t.position.set(n*.78,-n*1.18,n*.68),_t.lookAt(0,0,0),ld(n),Ln.target.set(0,0,0),(e=Ln.handleResize)==null||e.call(Ln),Ln.update()}function Gl(n=4.5){const e=m.radialViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(wt.left=-n*t,wt.right=n*t,wt.top=n,wt.bottom=-n):(wt.left=-n,wt.right=n,wt.top=n/t,wt.bottom=-n/t),wt.near=.1,wt.far=1e3,wt.updateProjectionMatrix()}function Sv(n=4.5){var e;_a=n,wt.position.set(n*.65,-n*.9,n*.7),wt.lookAt(0,0,0),Gl(n),$t.target.set(0,0,0),(e=$t.handleResize)==null||e.call($t),$t.update()}function bv(){var i;if(!Wl()||!((i=m.syncRotation)!=null&&i.checked))return;const n=Ye.position.clone().sub(Ae.target).normalize(),e=Ye.up.clone(),t=(r,a,o,s=40)=>{const l=bi(o,s);r.position.copy(n.clone().multiplyScalar(l)),r.up.copy(e),r.lookAt(0,0,0),a.target.set(0,0,0),r.updateProjectionMatrix()};t(it,Ct,Zt,40),t(_t,Ln,zl,30)}function Ev(n,e){const t={...e,radius:Math.max(4,Math.min(8,e.radius*.55)),thetaSegments:72,phiSegments:144},{positive:i,negative:r}=Qh(n,t);di=Fr(i,Lt(e.positiveColor),1),fi=Fr(r,Lt(e.negativeColor),1),Or(di,{...e,smooth:!0,wireframe:e.wireframe}),Or(fi,{...e,smooth:!0,wireframe:e.wireframe}),di.scale.setScalar(.74),fi.scale.setScalar(.74);const a=id(e);di.visible=e.showPositive&&a,fi.visible=e.showNegative&&a,Sn.add(di,fi);const o=xv(di,fi),s=Math.max(4.2,o*1.45);pv(s,e.showAxis),Zt=Math.max(Zt,s*1.12)}const na=(()=>{const n=[255,0,0],e=[255,0,255],t=[255,255,255],i=[0,255,255],r=[0,0,255],a=[],o=(l,c)=>{for(let u=0;u<c;u+=1)a.push(l)},s=(l,c,u)=>{const h=[(c[0]-l[0])/u,(c[1]-l[1])/u,(c[2]-l[2])/u];for(let f=0;f<u;f+=1)a.push([l[0]+f*h[0],l[1]+f*h[1],l[2]+f*h[2]])};return o(n,20),s(n,e,80),s(e,t,25),o(t,5),s(t,i,25),s(i,r,80),o(r,20),a.reverse().map(([l,c,u])=>new xe(l/255,c/255,u/255))})();function qs(n){const t=(Math.max(-1,Math.min(1,n))+1)/2*(na.length-1),i=Math.max(0,Math.min(na.length-1,Math.floor(t))),r=Math.max(0,Math.min(na.length-1,i+1));return na[i].clone().lerp(na[r],t-i)}function wv(n,e,t,i,r,a){const o=e.rows,s=o.length,l=2*t/(s-1),c=Math.max(1,Math.round(.4/l)),u=new Yi({color:16777215,transparent:!0,opacity:.56}),h=(f,d)=>{const _=-t+2*t*f/(s-1),v=-t+2*t*d/(s-1),g=o[d][f]/a;return new P(_,v,i+g*r+.012)};for(let f=0;f<s;f+=c){const d=[];for(let _=0;_<s;_+=1)d.push(h(_,f));n.add(new ma(new Ze().setFromPoints(d),u))}for(let f=0;f<s;f+=c){const d=[];for(let _=0;_<s;_+=1)d.push(h(f,_));n.add(new ma(new Ze().setFromPoints(d),u))}}function Tv(n,e,t,i,r,a=1){const o=e.rows,s=o.length,l=2*t/(s-1),c=[(h,f,d)=>new P(-t+(h+d)*l,-t+f*l,i),(h,f,d)=>new P(-t+(h+1)*l,-t+(f+d)*l,i),(h,f,d)=>new P(-t+(h+1-d)*l,-t+(f+1)*l,i),(h,f,d)=>new P(-t+h*l,-t+(f+1-d)*l,i)],u=[[0,1],[1,2],[2,3],[3,0]];for(const h of r){const f=new Yi({color:qs(h).getHex(),transparent:!0,opacity:.95}),d=[];for(let _=0;_<s-1;_+=1)for(let v=0;v<s-1;v+=1){const g=[o[_][v],o[_][v+1],o[_+1][v+1],o[_+1][v]].map(M=>M/a),p=[];for(let M=0;M<4;M+=1){const[x,y]=u[M],T=g[x]-h,E=g[y]-h;if(T===0||T*E<0){const A=Math.abs(T)+Math.abs(E);if(A<1e-12)continue;const R=Math.max(0,Math.min(1,Math.abs(T)/A));p.push(c[M](v,_,R))}}p.length>=2&&(d.push(p[0],p[1]),p.length>=4&&d.push(p[2],p[3]))}d.length&&n.add(new Pl(new Ze().setFromPoints(d),f))}}const Nn={radius:16756736,direction:3538793,point:16776960};function Wl(){var n;return!!((n=m.relationMode)!=null&&n.checked)}function Av(){const n=[[Ot,pl],[Fn,ml],[On,gl],[Sn,_l]];for(const[e,t]of n)t&&Ki(e,t);pl=null,ml=null,gl=null,_l=null}function Wu(n){var i,r;let e=0;const t=new P;return(i=n==null?void 0:n.updateMatrixWorld)==null||i.call(n,!0),(r=n==null?void 0:n.traverse)==null||r.call(n,a=>{var s,l;const o=(l=(s=a.geometry)==null?void 0:s.attributes)==null?void 0:l.position;if(o){a.updateMatrixWorld(!0);for(let c=0;c<o.count;c+=1)t.fromBufferAttribute(o,c).applyMatrix4(a.matrixWorld),e=Math.max(e,t.length())}}),e}function Cv(n){const e=Math.max(Wu(Tt),Wu(At));Bl=e>.001?e*1.02:n.radius*.86}function cd(){var u,h,f;const n=Kt(),e=Math.max(0,Math.min(100,Number(((u=m.scanRadius)==null?void 0:u.value)??45))),t=Math.max(0,Math.min(180,Number(((h=m.scanTheta)==null?void 0:h.value)??90))),i=(Number(((f=m.scanPhi)==null?void 0:f.value)??0)%360+360)%360,r=Math.max(.001,Bl||n.radius),a=r*e/100,o=t*Math.PI/180,s=i*Math.PI/180,l=new P(Math.sin(o)*Math.cos(s),Math.sin(o)*Math.sin(s),Math.cos(o)).normalize(),c=l.clone().multiplyScalar(a);return{options:n,radiusPercent:e,thetaDegrees:t,phiDegrees:i,r:a,maxRadius:r,direction:l,point:c}}function Rv(n=cd()){m.scanRadiusValue&&(m.scanRadiusValue.value=`${Math.round(n.radiusPercent)}%`),m.scanThetaValue&&(m.scanThetaValue.value=`${Math.round(n.thetaDegrees)}°`),m.scanPhiValue&&(m.scanPhiValue.value=`${Math.round(n.phiDegrees)}°`)}function ql(n,e,t=.95){const i=new Yi({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new ma(new Ze().setFromPoints(n),i);return r.renderOrder=30,r}function Pv(n,e,t=.95){const i=new Yi({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new Pl(new Ze().setFromPoints(n),i);return r.renderOrder=30,r}function Lv(n,e=16777215,t=.026,i=1){const r=new Xh(n,!1,"centripetal",.18),a=new Dl(r,Math.max(80,n.length*2),t,8,!1),o=new ti({color:e,transparent:i<1,opacity:i,depthTest:!1,depthWrite:!1});o.toneMapped=!1;const s=new rt(a,o);return s.renderOrder=31,s}function yl(n,e,t,i=.95){const r=[];for(let o=0;o<=160;o+=1){const s=Math.PI*2*o/160;r.push(new P(n*Math.cos(s),n*Math.sin(s),e))}return ql(r,t,i)}function Iv(n,e,t=.74){const i=[],o=s=>{for(let l=0;l<160;l+=1){const c=Math.PI*2*l/160,u=Math.PI*2*(l+1)/160;i.push(s(c),s(u))}};for(let s=1;s<12;s+=1){const l=Math.PI*s/12,c=Math.cos(l)*n,u=Math.sin(l)*n;o(h=>new P(u*Math.cos(h),u*Math.sin(h),c))}for(let s=0;s<6;s+=1){const l=Math.PI*s/6;o(c=>new P(n*Math.sin(c)*Math.cos(l),n*Math.sin(c)*Math.sin(l),n*Math.cos(c)))}return Pv(i,e,t)}function Xs(n,e,t=1){const i=new ti({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new rt(new ks(n,24,16),i);return r.renderOrder=32,r}function ud(n,e,t,i,r){const a=new U_(n,new P(0,0,0),e,t,i,r);return a.traverse(o=>{o.material&&(o.material.depthTest=!1,o.material.depthWrite=!1,o.material.toneMapped=!1,o.renderOrder=31)}),a}function Dv(n,e,t){return e==="xoz"?new ue(n.x*t,n.z*t):e==="yoz"?new ue(n.y*t,n.z*t):new ue(n.x*t,n.y*t)}function Uv(n,e){const t=n.length();return t>e&&t>1e-9&&n.multiplyScalar(e/t),n}function Nv(n){const e=new Rt;n.r>.001&&e.add(Iv(n.r,Nn.radius,.72));const t=Math.max(n.r,n.maxRadius*.22,1);e.add(ud(n.direction,t,Nn.direction,t*.11,t*.035));const i=Xs(Math.max(.08,n.maxRadius*.018),Nn.point);i.position.copy(n.point),e.add(i),Ot.add(e),pl=e}function Fv(n){const e=new Rt,t=Math.max(2.4,Zt*.55);e.add(ud(n.direction,t,Nn.direction,t*.14,t*.045));const i=Xs(.08,Nn.point);i.position.copy(n.direction.clone().multiplyScalar(t)),e.add(i),Sn.add(e),_l=e}function Ov(n){if(!Yn)return;const e=new Rt,t=Yn.radius*.92,i=Yn.radius/Math.max(1e-4,n.maxRadius),r=Math.max(0,n.r*i),a=r>t?t/r:1,o=i*a,s=Math.min(t,Math.max(0,n.r*o));e.add(yl(s,Yn.bottomZ+.18,Nn.radius,.95));const l=Uv(Dv(n.point,Yn.plane,o),t),c=Xs(.075,Nn.point);c.position.set(l.x,l.y,Yn.bottomZ+.28),e.add(c),e.add(ql([new P(0,0,Yn.bottomZ+.22),new P(l.x,l.y,Yn.bottomZ+.22)],Nn.direction,.82)),Fn.add(e),ml=e}function Bv(n){if(!gn)return;const e=new Rt,t=Math.min(gn.radiusScale,n.r/Math.max(1e-4,gn.radialExtent)*gn.radiusScale),i=hd(lt(),n.r,n.options.radialMode),r=gn.diskZ+gn.curveLift+i/gn.maxAbs*gn.heightScale;e.add(ql([new P(t,0,gn.baseZ-.15),new P(t,0,gn.heightTop)],Nn.radius,.95));const a=Xs(.07,Nn.point);a.position.set(t,0,r),e.add(a),On.add(e),gl=e}function Ys(){Av();const n=cd();Rv(n),Wl()&&(Nv(n),Fv(n),Ov(n),Bv(n))}function zv(n){const e=n.length();if(e<1e-6)return;const t=Math.acos(Math.max(-1,Math.min(1,n.z/e))),i=(Math.atan2(n.y,n.x)+Math.PI*2)%(Math.PI*2);m.scanRadius&&(m.scanRadius.value=String(Math.round(Math.max(0,Math.min(100,e/Math.max(1e-4,Bl)*100))))),m.scanTheta&&(m.scanTheta.value=String(Math.round(t*180/Math.PI))),m.scanPhi&&(m.scanPhi.value=String(Math.round(i*180/Math.PI))),Ys(),Kn(`关联高亮：r=${e.toFixed(2)}, θ=${Math.round(t*180/Math.PI)}°, φ=${Math.round(i*180/Math.PI)}°`)}function kv(n){var o;if(!Wl())return;const e=dn.domElement.getBoundingClientRect(),t=new ue((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),i=new D_;i.params.Points.threshold=Math.max(.12,Kt().radius*.025),i.setFromCamera(t,Ye);const r=[Tt,At,Hi,Gi].filter(Boolean),a=i.intersectObjects(r,!0);(o=a[0])!=null&&o.point&&zv(a[0].point)}function Xl(n){const e=zn(n.n,n.l,n.m).replace(/^\d+/,"");return e.startsWith("Dyz")||e.startsWith("Fyz2")||e.startsWith("Gz3y")||e.startsWith("Gzy3")||e.startsWith("Gyz3")||e.startsWith("Hyz4")||e.startsWith("Hyz")?"yoz":e.startsWith("Pz")||e.startsWith("Dz2")||e.startsWith("Dxz")||e.startsWith("Fz3")||e.startsWith("Fxz2")||e.startsWith("Gz4")||e.startsWith("Gz3x")||e.startsWith("Gxz3")||e.startsWith("Gzx3")||e.startsWith("Hxz4")||e.startsWith("Hz5")||e.startsWith("Hxz")?"xoz":"xoy"}function Vv(n,e,t,i){const r=[],a=e.radius;let o=0,s=0,l=0;for(let c=0;c<i;c+=1){const u=[],h=-a+2*a*c/(i-1);for(let f=0;f<i;f+=1){const d=-a+2*a*f/(i-1);let _=0;t==="xoy"&&(_=$o(n,d,h,0)),t==="xoz"&&(_=$o(n,d,0,h)),t==="yoz"&&(_=$o(n,0,d,h)),o=Math.max(o,Math.abs(_)),s=Math.max(s,_),l=Math.min(l,_),u.push(_)}r.push(u)}return{data:{rows:r,maxAbs:o,maxPositive:s,minNegative:l},scale:1}}function Hv(n,e){Fn.background=new xe(e.backgroundColor);const t=new Rt,r=ri(n).gridSize*2+1,a=Xl(n),{data:o}=Vv(n,e,a,r),s=(o.maxPositive>1e-12?o.maxPositive:o.maxAbs||1)/.9,l=[],c=[],u=[],h=Math.min(4.7,e.radius*.42),f=h*1,d=-h*1,_=h*.9;Yn={plane:a,radius:h,surfaceZ:f,bottomZ:d,height:_};for(let T=0;T<r;T+=1)for(let E=0;E<r;E+=1){const A=-h+2*h*E/(r-1),R=-h+2*h*T/(r-1),b=o.rows[T][E]/s,S=b;l.push(A,R,f+S*_);const L=qs(b);c.push(L.r,L.g,L.b)}for(let T=0;T<r-1;T+=1)for(let E=0;E<r-1;E+=1){const A=T*r+E,R=A+1,b=A+r,S=b+1;u.push(A,b,R,R,b,S)}const v=new Ze;v.setAttribute("position",new We(l,3)),v.setAttribute("color",new We(c,3)),v.setIndex(u),v.computeVertexNormals(),ua=new rt(v,new Tr({vertexColors:!0,side:ht,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04})),t.add(ua),wv(t,o,h,f,_,s);const g=new Rt,p=[];for(let T=0;T<r;T+=1)for(let E=0;E<r;E+=1){const A=-h+2*h*E/(r-1),R=-h+2*h*T/(r-1);p.push(A,R,d+.02)}const M=new Ze;M.setAttribute("position",new We(p,3)),M.setAttribute("color",new We(c,3)),M.setIndex(u),M.computeVertexNormals();const x=new rt(M,new ti({vertexColors:!0,side:ht,transparent:!0,opacity:.78}));g.add(x);const y=(T,E,A)=>Array.from({length:A},(R,b)=>T+(E-T)*b/(A-1));Tv(g,o,h,d+.08,[...y(-1,0,20),...y(0,1,20)],s),ha=g,t.add(ha),zi=sd(h),zi.scale.z=1,zi.position.z=(f+d)/2,t.add(zi),ua=t,ha=null,zi=null,Fn.add(t),yv(h*1.92),Ys()}function hd(n,e,t){const i=Math.max(e,1e-4),r=qi(n.n,n.l,n.z,i);return t==="R"?r:t==="R2"?r*r:i*i*r*r}function qu(n,e=11974326){const t=Math.abs(n),i=Math.max(0,Math.min(1,(t-.035)/.72)),r=i*i*(3-2*i);return new xe(e).lerp(qs(n),r)}function dd(n,e){var y;On.background=new xe(e.backgroundColor);const t=150,i=80,r=Math.min(e.radius,Math.max(5,ri(n).leastRadius+1.2)),a=[];for(let T=0;T<=t;T+=1)a.push(hd(n,r*T/t,e.radialMode));const o=Math.max(...a.map(Math.abs),1e-6),s=3.7,l=s*.43,c=-1.25,u=c,h=.08,f=u+s*.72;gn={radialExtent:r,radiusScale:s,heightScale:l,baseZ:c,diskZ:u,curveLift:h,maxAbs:o,heightTop:(e.radialSide?f:u+h)+l+.38};const d=new Rt,_=new rt(new ks(s,128,48,0,Math.PI*2,Math.PI/2,Math.PI/2),new Tr({color:12105912,side:ht,transparent:!0,opacity:.88,shininess:1,specular:2236962}));_.rotation.x=Math.PI/2,_.position.z=c,d.add(_);const v=new Ze,g=[],p=[],M=[];for(let T=0;T<=i;T+=1){const E=T/i*s,A=Math.round(T/i*t),R=a[A]/o;for(let b=0;b<=128;b+=1){const S=Math.PI*2*b/128,L=E*Math.cos(S),F=E*Math.sin(S);g.push(L,F,u);const U=qu(R,12105912);p.push(U.r,U.g,U.b)}}const x=129;for(let T=0;T<i;T+=1)for(let E=0;E<128;E+=1){const A=T*x+E,R=A+1,b=A+x,S=b+1;M.push(A,b,R,R,b,S)}if(v.setAttribute("position",new We(g,3)),v.setAttribute("color",new We(p,3)),v.setIndex(M),v.computeVertexNormals(),da=new rt(v,new Tr({vertexColors:!0,side:ht,transparent:!1,opacity:1,shininess:8,specular:2236962})),d.add(da),e.radialSide){const T=new rt(new Gr(s,s,Math.max(.1,f-u),160,1,!0),new $h({color:14149604,side:ht,transparent:!0,opacity:.24,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.28,ior:1.45,transmission:.08,specularIntensity:.5,specularColor:16777215}));T.rotation.x=Math.PI/2,T.position.z=(f+u)/2,T.renderOrder=2,d.add(T),d.add(yl(s,f,16777215,.12)),d.add(yl(s,u,16777215,.08));const E=new Ze,A=[],R=[],b=[],S=e.radialSection?64:128,L=(e.radialSection,0),F=e.radialSection?Math.PI:Math.PI*2;for(let N=0;N<=i;N+=1){const H=N/i*s,V=Math.round(N/i*t),$=a[V]/o,G=f+$*l;for(let ne=0;ne<=S;ne+=1){const le=L+F*ne/S,ie=H*Math.cos(le),ye=H*Math.sin(le);A.push(ie,ye,G);const Me=qu($,11711154);R.push(Me.r,Me.g,Me.b)}}const U=S+1;for(let N=0;N<i;N+=1)for(let H=0;H<S;H+=1){const V=N*U+H,$=V+1,G=V+U,ne=G+1;b.push(V,G,$,$,G,ne)}E.setAttribute("position",new We(A,3)),E.setAttribute("color",new We(R,3)),E.setIndex(b),E.computeVertexNormals(),d.add(new rt(E,new Tr({vertexColors:!0,side:ht,transparent:!1,opacity:1,shininess:10,specular:3355443})))}if(e.radialCurve){const T=[],E=e.radialSide?f:u+h;for(let R=0;R<=t;R+=1){const b=s*R/t,S=E+a[R]/o*l;T.push(new P(b,0,S))}const A=T.slice(1).map(R=>new P(-R.x,0,R.z)).reverse();fa=Lv([...A,...T],16777215,e.radialSide?.013:.011),d.add(fa)}if(e.radialAxis){const T=e.radialSide?f:.1;an=tv(s+.9,s+.45,T,e.radialMode),d.add(an)}dl=d,On.add(d),da=null,fa=null,an=null,fl=null,e.radialSide?(_a=4.9,wt.position.set(0,-7.2,f+1.25),wt.lookAt(0,0,0),Gl(_a),$t.target.set(0,0,0),(y=$t.handleResize)==null||y.call($t),$t.update()):Sv(5.3),Ys()}function Rs(){Gv();const n=(e,t,i,r,a)=>{var s;const o=e.getBoundingClientRect();o.width<2||o.height<2||(t.setSize(o.width,o.height,!1),t.domElement.style.width="100%",t.domElement.style.height="100%",i(a),(s=r.handleResize)==null||s.call(r),r.update())};n(m.viewer,dn,Gs,Ae,ei),n(m.angularViewer,$i,Ws,Ct,Zt),n(m.projectionViewer,ji,ld,Ln,zl),n(m.radialViewer,qr,Gl,$t,_a);for(const e of va)$l(e,e.radius);Wv()}function Gv(){const n=document.querySelector(".sidebar"),e=n==null?void 0:n.querySelector(".sidebar-fit");if(!n)return;if(window.matchMedia("(max-width: 900px)").matches){document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");return}document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");const t=getComputedStyle(n),i=n.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),r=(e==null?void 0:e.scrollHeight)||n.scrollHeight;if(!i||!r||r<=i+4)return;const a=Math.max(.72,Math.min(1,(i-4)/r));document.documentElement.style.setProperty("--sidebar-zoom",a.toFixed(3)),document.documentElement.style.setProperty("--sidebar-fit-height",`${Math.ceil(r*a)}px`)}function ln(){requestAnimationFrame(()=>{Rs(),requestAnimationFrame(()=>{Rs(),Ar()})})}function fd(n){const e=m.sketchCanvas.getBoundingClientRect();return{x:(n.clientX-e.left)/Math.max(1,e.width),y:(n.clientY-e.top)/Math.max(1,e.height)}}function Xu(n,e,t,i){if(!e.points.length)return;n.save(),n.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",n.strokeStyle=e.color,n.lineWidth=e.size,n.lineCap="round",n.lineJoin="round",n.beginPath();const r=e.points[0];n.moveTo(r.x*t,r.y*i);for(const a of e.points.slice(1))n.lineTo(a.x*t,a.y*i);e.points.length===1&&n.lineTo(r.x*t+.01,r.y*i+.01),n.stroke(),n.restore()}function Yr(){const n=m.sketchCanvas;if(!n)return;const e=n.getContext("2d");e.clearRect(0,0,n.width,n.height);for(const t of $e.strokes)Xu(e,t,n.width,n.height);$e.currentStroke&&Xu(e,$e.currentStroke,n.width,n.height)}function Wv(){const n=m.sketchCanvas;if(!n)return;const e=n.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,Math.floor(e.width*t)),r=Math.max(220,Math.floor(e.height*t));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r,Yr())}function Ko(n){var e,t;$e.erasing=n,(e=m.sketchPen)==null||e.classList.toggle("active",!n),(t=m.sketchEraser)==null||t.classList.toggle("active",n)}function qv(n){var e,t,i,r;m.sketchCanvas&&(n.preventDefault(),(t=(e=m.sketchCanvas).setPointerCapture)==null||t.call(e,n.pointerId),$e.drawing=!0,$e.currentStroke={color:((i=m.sketchColor)==null?void 0:i.value)||"#ffffff",size:Number(((r=m.sketchSize)==null?void 0:r.value)||5)*Math.min(window.devicePixelRatio||1,2),mode:$e.erasing?"erase":"draw",points:[fd(n)]},Yr())}function Xv(n){!$e.drawing||!$e.currentStroke||(n.preventDefault(),$e.currentStroke.points.push(fd(n)),Yr())}function Yu(n){!$e.drawing||!$e.currentStroke||(n.preventDefault(),$e.strokes.push($e.currentStroke),$e.currentStroke=null,$e.drawing=!1,Yr())}function Yv(){var n,e,t,i,r,a,o,s,l,c,u,h,f,d,_,v,g,p,M,x,y,T,E,A,R,b,S,L,F,U,N,H,V,$,G,ne,le,ie,ye,Me,Y,K,he,B,Q,ge,Ee,D;if(m.sketchCanvas){m.sketchCanvas.addEventListener("pointerdown",qv),m.sketchCanvas.addEventListener("pointermove",Xv),m.sketchCanvas.addEventListener("pointerup",Yu),m.sketchCanvas.addEventListener("pointercancel",Yu),(n=m.openActivityButton)==null||n.addEventListener("click",()=>ra("predict")),(e=m.openSketchButton)==null||e.addEventListener("click",Yl),(t=m.openPredictButton)==null||t.addEventListener("click",()=>ra("predict")),(i=m.openChallengeButton)==null||i.addEventListener("click",()=>ra("challenge"));for(const ce of m.activityModeButtons??[])ce.addEventListener("click",()=>ra(ce.dataset.activityMode));(r=m.startPredictButton)==null||r.addEventListener("click",eM),(a=m.verifyPredictButton)==null||a.addEventListener("click",tM),(o=m.scoreCurrentButton)==null||o.addEventListener("click",Kx),(s=m.scoreShowRubricButton)==null||s.addEventListener("click",Jx),(l=m.scoreResetButton)==null||l.addEventListener("click",Qx),(c=m.diagnoseNodesButton)==null||c.addEventListener("click",()=>hs("nodes")),(u=m.diagnosePhaseButton)==null||u.addEventListener("click",()=>hs("phase")),(h=m.diagnoseProjectionButton)==null||h.addEventListener("click",()=>hs("projection"));for(const ce of document.querySelectorAll("[data-diagnosis]"))ce.addEventListener("click",()=>hs(ce.dataset.diagnosis));(f=m.nodeRevealButton)==null||f.addEventListener("click",()=>{m.longitudeNode.checked=!0,m.node.checked=!0,at()}),(d=m.nodeHideButton)==null||d.addEventListener("click",()=>{m.longitudeNode.checked=!1,m.node.checked=!1,at()}),(_=m.compareApplyButton)==null||_.addEventListener("click",()=>{pd()}),(v=m.compareA)==null||v.addEventListener("change",()=>{Sl("a")}),(g=m.compareB)==null||g.addEventListener("change",()=>{Sl("b")}),(p=m.compareLoadAButton)==null||p.addEventListener("click",()=>{var ce;(ce=m.compareA)!=null&&ce.value&&ju(m.compareA.value,"a")}),(M=m.compareLoadBButton)==null||M.addEventListener("click",()=>{var ce;(ce=m.compareB)!=null&&ce.value&&ju(m.compareB.value,"b")}),(x=m.newChallengeButton)==null||x.addEventListener("click",nM),(y=m.revealChallengeButton)==null||y.addEventListener("click",iM),(T=m.explainRestartButton)==null||T.addEventListener("click",jx),(E=m.explainPrevButton)==null||E.addEventListener("click",()=>nh(-1)),(A=m.explainPlayButton)==null||A.addEventListener("click",$x),(R=m.explainNextButton)==null||R.addEventListener("click",()=>nh(1)),(b=m.tabletLargeButton)==null||b.addEventListener("click",()=>ih(!0)),(S=m.tabletRestoreButton)==null||S.addEventListener("click",()=>ih(!1)),(L=m.tabletScreenshotButton)==null||L.addEventListener("click",Js),(U=(F=m.sketchWindow)==null?void 0:F.querySelector(".window-title"))==null||U.addEventListener("pointerdown",rM),(H=(N=m.activityWindow)==null?void 0:N.querySelector(".window-title"))==null||H.addEventListener("pointerdown",ce=>Jo(ce,m.activityWindow)),($=(V=m.formulaWindow)==null?void 0:V.querySelector(".window-title"))==null||$.addEventListener("pointerdown",ce=>Jo(ce,m.formulaWindow)),(ne=(G=m.animationWindow)==null?void 0:G.querySelector(".window-title"))==null||ne.addEventListener("pointerdown",ce=>Jo(ce,m.animationWindow)),window.addEventListener("pointermove",aM),window.addEventListener("pointermove",sM),window.addEventListener("pointerup",rh),window.addEventListener("pointerup",ah),window.addEventListener("pointercancel",rh),window.addEventListener("pointercancel",ah),window.addEventListener("pointerup",Ar),window.addEventListener("pointercancel",Ar),window.addEventListener("blur",Ar),(le=m.sketchPen)==null||le.addEventListener("click",()=>Ko(!1)),(ie=m.sketchEraser)==null||ie.addEventListener("click",()=>Ko(!0)),(ye=m.sketchClear)==null||ye.addEventListener("click",()=>{$e.strokes=[],$e.currentStroke=null,Yr()}),(Me=m.annotationModeButton)==null||Me.addEventListener("click",$v),(Y=m.openAnimationButton)==null||Y.addEventListener("click",Xx),(K=m.animationRestartButton)==null||K.addEventListener("click",Hx),(he=m.animationPrevButton)==null||he.addEventListener("click",()=>eh(-1)),(B=m.animationPlayButton)==null||B.addEventListener("click",Vx),(Q=m.animationNextButton)==null||Q.addEventListener("click",()=>eh(1)),(ge=m.animationExportButton)==null||ge.addEventListener("click",qx),(Ee=m.openFormulaButton)==null||Ee.addEventListener("click",cx),(D=m.annotationClearButton)==null||D.addEventListener("click",Jv);for(const ce of document.querySelectorAll("[data-annotation-add]"))ce.addEventListener("click",()=>Kv(ce.dataset.annotationAdd));for(const ce of document.querySelectorAll(".annotation-layer"))ce.addEventListener("pointerdown",Qv);window.addEventListener("pointermove",ex),window.addEventListener("pointerup",$u),window.addEventListener("pointercancel",$u),Ko(!1)}}function $v(){var n;ae.annotationMode=!ae.annotationMode,document.body.classList.toggle("annotation-mode",ae.annotationMode),(n=m.annotationToolbar)==null||n.classList.toggle("closed",!ae.annotationMode),ae.annotationMode&&Vl(),Kn(ae.annotationMode?"讲解标注：点击下方按钮添加标签，拖动标签调整位置。":"讲解标注已关闭。")}function jv(n){const t={正相:"orbital",负相:"orbital",节点:"orbital",投影平面:"projection",径向节点:"radial"}[n]||"orbital";return document.querySelector(`[data-annotation-layer="${t}"]`)}function Zv(n){return n==="正相"?"positive":n==="负相"?"negative":n==="节点"?"node":n==="投影平面"?"projection":n==="径向节点"?"radial":""}function Kv(n){const e=jv(n);if(!e)return;const t=document.createElement("button");t.type="button",t.className=`annotation-note ${Zv(n)}`.trim(),t.textContent=n;const i=e.querySelectorAll(".annotation-note").length;t.style.left=`${12+i%4*12}%`,t.style.top=`${14+i%3*14}%`,e.appendChild(t)}function Jv(){for(const n of document.querySelectorAll(".annotation-layer"))n.replaceChildren()}function Qv(n){var r;const e=n.target.closest(".annotation-note");if(!e||!ae.annotationMode)return;n.preventDefault(),n.stopPropagation();const t=e.closest(".annotation-layer"),i=e.getBoundingClientRect();ae.annotationDrag={note:e,layer:t,offsetX:n.clientX-i.left,offsetY:n.clientY-i.top},(r=e.setPointerCapture)==null||r.call(e,n.pointerId)}function ex(n){const e=ae.annotationDrag;if(!e)return;n.preventDefault();const t=e.layer.getBoundingClientRect(),i=e.note.getBoundingClientRect(),r=Math.max(0,Math.min(t.width-i.width,n.clientX-t.left-e.offsetX)),a=Math.max(0,Math.min(t.height-i.height,n.clientY-t.top-e.offsetY));e.note.style.left=`${r}px`,e.note.style.top=`${a}px`}function $u(){ae.annotationDrag=null}function Yl(){m.sketchWindow&&(m.sketchWindow.classList.remove("closed","minimized"),m.sketchWindow.style.zIndex="120",Ji(m.sketchWindow),ln())}function $s(n){const[e,t,i]=n.split(",").map(Number);return{n:e,l:t,m:i}}function tx(n){var s;if(!n)return null;let e=va.find(l=>l.container===n);if(e)return n.contains(e.renderer.domElement)||n.appendChild(e.renderer.domElement),e;const t=new Ti;t.background=new xe(((s=m.backgroundColor)==null?void 0:s.value)||"#668080");const i=new bn(-5,5,5,-5,.1,2e3),r=new ni({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.appendChild(r.domElement);const a=Wr(i,r.domElement);xa(n,a),t.add(new Ai(16777215,.5));const o=new hn(16777215,1.2);return o.position.set(0,0,80),t.add(o),e={container:n,scene:t,camera:i,renderer:r,controls:a,objects:[],radius:5,target:new P,resizeObserver:null},"ResizeObserver"in window&&(e.resizeObserver=new ResizeObserver(()=>$l(e,e.radius)),e.resizeObserver.observe(n)),va.push(e),e}function nx(n){if(n){for(const e of n.objects)Ki(n.scene,e);n.objects=[]}}function $l(n,e){var o,s;if(!n)return;const t=n.container.getBoundingClientRect();if(t.width<2||t.height<2)return;n.renderer.setSize(t.width,t.height,!1);const i=t.width/t.height,r=Math.max(3,e);i>=1?(n.camera.left=-r*i,n.camera.right=r*i,n.camera.top=r,n.camera.bottom=-r):(n.camera.left=-r,n.camera.right=r,n.camera.top=r/i,n.camera.bottom=-r/i),n.camera.near=.1,n.camera.far=Math.max(1e3,r*8);const a=n.target??new P;n.camera.position.set(a.x,a.y,a.z+bi(r,40)),n.camera.lookAt(a),n.camera.updateProjectionMatrix(),n.controls.target.copy(a),(s=(o=n.controls).handleResize)==null||s.call(o),n.controls.update()}function ix(n,e,t){const i=new cn;let r=!1;for(const a of e){a.updateMatrixWorld(!0);const o=new cn().setFromObject(a);Number.isFinite(o.min.x)&&Number.isFinite(o.min.y)&&Number.isFinite(o.min.z)&&Number.isFinite(o.max.x)&&Number.isFinite(o.max.y)&&Number.isFinite(o.max.z)&&(i.union(o),r=!0)}if(r){const a=i.getBoundingSphere(new wi);n.target.copy(a.center),n.radius=Math.max(2.5,t,a.radius*1.2)}else n.target.set(0,0,0),n.radius=Math.max(2.5,t);$l(n,n.radius)}function Ps(n,e,t,i){var v,g;const r=tx(n);if(!r)return null;const a={...$s(e),z:Number((v=m.z)==null?void 0:v.value)||1},o=ri(a),s=Math.max(4,Math.min(10,o.radius*.08)),l=Math.min(78,Math.max(42,Math.round(o.gridSize*.72))),c={iso:o.iso,density:l,radius:o.radius,opacity:.96,smooth:!1,wireframe:!0,cutaway:"none",showPositive:!0,showNegative:!0,positiveColor:m.positiveColor.value,negativeColor:m.negativeColor.value,backgroundColor:((g=m.backgroundColor)==null?void 0:g.value)||"#668080"};r.scene.background=new xe(c.backgroundColor),nx(r);const u=Cs(a,c,1,c.positiveColor),h=Cs(a,c,-1,c.negativeColor),f=s/Math.max(1,o.radius);u.scale.multiplyScalar(f),h.scale.multiplyScalar(f);const d=Vs(Math.max(1.6,s*.5));r.scene.add(u,h,d),r.objects.push(u,h,d),ix(r,[u,h,d],s*1.45);const _=zn(a.n,a.l,a.m);return t&&(t.textContent=_),i&&(i.textContent=`${Es(a.n,a.l)}；n=${a.n}, l=${a.l}, |m|=${Math.abs(a.m)}`),{params:a,label:_,nodes:Es(a.n,a.l)}}function pd(){var t,i;const n=Ps(m.compareAViewer,(t=m.compareA)==null?void 0:t.value,m.compareATitle,m.compareANotes),e=Ps(m.compareBViewer,(i=m.compareB)==null?void 0:i.value,m.compareBTitle,m.compareBNotes);if(n&&e&&m.compareSummary){const r=n.params.l===e.params.l&&Math.abs(n.params.m)===Math.abs(e.params.m);m.compareSummary.textContent=r?`${n.label} 与 ${e.label} 角向类型相同，重点比较径向节点随 n 增加的变化。`:`${n.label} 与 ${e.label} 角向类型不同，重点比较节点面方向、相位分布和对称性。`}}function Sl(n){var e,t;return n==="a"?Ps(m.compareAViewer,(e=m.compareA)==null?void 0:e.value,m.compareATitle,m.compareANotes):n==="b"?Ps(m.compareBViewer,(t=m.compareB)==null?void 0:t.value,m.compareBTitle,m.compareBNotes):null}function js(n){const e=$s(n);m.n.value=e.n,m.l.value=e.l,m.m.value=Math.abs(e.m),m.cosType.checked=e.m>=0,m.sinType.checked=e.m<0,lt(),Xr(),at()}function ju(n,e){var a,o,s,l;const t=$s(n);js(n),m.mainWindow&&(m.mainWindow.classList.remove("closed","minimized","maximized"),Ji(m.mainWindow)),m.positiveLobe&&(m.positiveLobe.checked=!0),m.negativeLobe&&(m.negativeLobe.checked=!0),m.wireframe&&m.smooth&&!m.wireframe.checked&&!m.smooth.checked&&(m.wireframe.checked=!0),lt(),at();const i=Sl(e),r=(i==null?void 0:i.label)||zn(t.n,t.l,t.m);m.compareSummary&&(m.compareSummary.textContent=`已载入主视图：${r}`),e==="a"?(o=(a=m.compareAViewer)==null?void 0:a.closest(".compare-view-card"))==null||o.scrollIntoView({block:"nearest",inline:"nearest"}):e==="b"&&((l=(s=m.compareBViewer)==null?void 0:s.closest(".compare-view-card"))==null||l.scrollIntoView({block:"nearest",inline:"nearest"})),ln()}function ra(n){if(!m.activityWindow)return;const e=n||"predict";m.activityWindow.classList.remove("closed","minimized"),m.activityWindow.style.zIndex="125";for(const i of m.activityPanes??[]){const r=i.dataset.activityPane||i.id.replace(/Pane$/,"");i.classList.toggle("active",r===e)}for(const i of m.activityModeButtons??[])i.classList.toggle("active",i.dataset.activityMode===e);const t={predict:"预测-验证模式",score:"预测评分",diagnosis:"错误诊断",nodes:"节点发现",compare:"轨道对比",challenge:"轨道配对挑战",explain:"原理演示",tablet:"平板课堂"};m.activityTitle&&(m.activityTitle.textContent=t[e]||"课堂互动"),Ji(m.activityWindow),ln(),e==="compare"&&requestAnimationFrame(()=>{pd(),ln()}),e==="explain"?requestAnimationFrame(()=>{Sa(ae.explanationStep,{render:!1}),ln()}):(Ks(),ya(null))}const md=7200;function rx(){const n=lt();return zn(n.n,n.l,n.m)}const ax=["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"],sx=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];function gd(n,e){return(n<0?"⁻":"")+String(Math.abs(n)).split("").map(i=>e[Number(i)]??i).join("")}function Zu(n){return gd(n,ax)}function ox(n){return gd(n,sx)}function lx(n,e){return zn(Math.max(1,n+1),n,e).replace(/^\d+/,"")||`l=${n}, m=${e}`}function jl(n){const e=zn(n.n,n.l,n.m),t=Math.max(0,n.n-n.l-1),i=n.l,r=lx(n.l,n.m),a=Zu(n.n),o=Zu(n.l),s=ox(n.m);return{label:e,radialNodes:t,angularNodes:i,main:`Ψ(r,θ,φ) = R${a}${o}(r) · Y${o}${s}(θ,φ)`,radial:`R${a}${o}(r) 决定离原子核不同距离处的振幅变化；当前轨道有 ${t} 个径向节点。`,angular:`${r} 对应的 Y${o}${s}(θ,φ) 决定轨道朝向、节面和正负相位；当前有 ${i} 个角向节点。`,visual:"原子轨道窗口显示 Ψ=+c 和 Ψ=-c 的等值面；轨道投影是在选定平面上看 Ψ；径向分布函数看 r²R²；电子云来自 |Ψ|² 的概率分布。"}}function _d(){var t,i;if(!m.formulaWindow)return;const n=lt(),e=jl(n);m.formulaOrbitalName&&(m.formulaOrbitalName.textContent=e.label),m.formulaQuantumText&&(m.formulaQuantumText.textContent=`n=${n.n}, l=${n.l}, m=${n.m}`),m.formulaMain&&(m.formulaMain.textContent=e.main),m.formulaRadialText&&(m.formulaRadialText.textContent=e.radial),m.formulaAngularText&&(m.formulaAngularText.textContent=e.angular),m.formulaVisualText&&(m.formulaVisualText.textContent=e.visual),m.formulaRadialNodes&&(m.formulaRadialNodes.textContent=String(e.radialNodes)),m.formulaAngularNodes&&(m.formulaAngularNodes.textContent=String(e.angularNodes)),m.formulaPhaseText&&(m.formulaPhaseText.textContent=`${((t=m.positiveLobe)==null?void 0:t.checked)===!1?"隐藏正相":"正相"} / ${((i=m.negativeLobe)==null?void 0:i.checked)===!1?"隐藏负相":"负相"}`)}function cx(){m.formulaWindow&&(_d(),m.formulaWindow.classList.remove("closed","minimized"),m.formulaWindow.style.zIndex="128",Ji(m.formulaWindow),ln())}const ux=5200;function Zs(){const n=lt(),e=jl(n);return[{focus:"all",title:"同一个波函数，四种观察方式",text:`${e.label} 的四个窗口都来自同一个 Ψ。动画先给出公式，再依次把它变成轨道、投影、径向图和电子云。`},{focus:"radial",title:"径向函数决定离核距离",text:`Rₙₗ(r) 控制波函数随半径的振荡和衰减；当前轨道有 ${e.radialNodes} 个径向节点。`},{focus:"angular",title:"角向函数决定方向和节面",text:`Yₗᵐ(θ,φ) 给出方向上的正负相位分区；当前轨道有 ${e.angularNodes} 个角向节点。`},{focus:"orbital",title:"径向 × 角向，合成三维波函数",text:"R(r) 提供距离变化，Y(θ,φ) 提供方向变化，两者相乘后形成空间中的正相和负相区域。"},{focus:"orbital",title:"抽取 Ψ=±c，得到原子轨道等值面",text:"等值面不是电子轨迹，而是波函数达到某个正值或负值时形成的边界。"},{focus:"projection",title:"把同一个 Ψ 放到平面上，得到轨道投影",text:"投影窗口把空间波函数在代表性平面上读出来，上方是高度曲面，下方是等高线。"},{focus:"orbital",title:"按 |Ψ|² 随机出现，形成电子云",text:"电子云表示电子出现概率。越亮、越密的区域，表示多次测量中电子更容易出现。"}]}function hx(){const n=m.animationCanvas;if(!n)return null;const e=n.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,e.width||640),r=Math.max(220,e.height||360);(n.width!==Math.round(i*t)||n.height!==Math.round(r*t))&&(n.width=Math.round(i*t),n.height=Math.round(r*t));const a=n.getContext("2d");return a.setTransform(t,0,0,t,0,0),{ctx:a,width:i,height:r}}function Zl(n,e,t,i,r,a){const o=Math.min(a,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function dx(n,e,t,i){const r=["公式","径向","角向","合成","等值面","投影","电子云"],o=e-42,s=34,l=o-42;n.save(),n.lineWidth=2,n.strokeStyle="rgba(255,255,255,0.45)",n.beginPath(),n.moveTo(42,s),n.lineTo(o,s),n.stroke(),n.strokeStyle="#ffb000",n.beginPath(),n.moveTo(42,s),n.lineTo(42+l*Math.min(1,(t+i)/(r.length-1)),s),n.stroke(),r.forEach((c,u)=>{const h=42+l*u/(r.length-1),f=u===t;n.fillStyle=f?"#ffb000":"rgba(255,255,255,0.82)",n.beginPath(),n.arc(h,s,f?8:5,0,Math.PI*2),n.fill(),n.fillStyle=f?"#fff4bf":"rgba(255,255,255,0.86)",n.font=f?"bold 14px sans-serif":"13px sans-serif",n.textAlign="center",n.fillText(c,h,s+24)}),n.restore()}function fx(n,e,t,i){const r=jl(lt()),a=e/2,o=t*.52;n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.92)",Zl(n,a-220,o-68,440,136,12),n.fill(),n.fillStyle="#111827",n.textAlign="center",n.font="bold 30px serif",n.fillText(r.main,a,o-12),n.font="18px sans-serif",n.fillStyle="#175cd3",n.fillText("同一个 Ψ 经过不同读取方式，形成四个窗口的图像",a,o+34),n.restore()}function vd(n,e,t,i,r=1){n.save(),n.globalAlpha=Math.min(1,r*1.6),n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText(i,e/2,t*.9),n.restore()}function Ku(n,e,t,i=1){const r=lt(),a=Math.max(0,r.n-r.l-1),o=Math.min(e*.82,560),s=76,l=(e-o)/2,c=t*.77;n.save(),n.globalAlpha=Math.min(1,i*1.6),n.fillStyle="rgba(255,255,255,0.9)",Zl(n,l,c,o,s,10),n.fill(),n.fillStyle="#111827",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText(`径向节点数 = n - l - 1 = ${r.n} - ${r.l} - 1 = ${a}`,e/2,c+29),n.font="15px sans-serif",n.fillStyle=a>0?"#175cd3":"#667085",n.fillText(a>0?"曲线过零处对应三维空间中的球形径向节面":"当前轨道没有径向节点，因此不会出现球形径向节面",e/2,c+55),n.restore()}function px(n,e,t,i,r,a,o=1,s=""){if(!(e!=null&&e.domElement)||!t||!i)return!1;e.render(t,i);const l=e.domElement;if(!l.width||!l.height)return!1;const c=Math.min(r*.92,l.width),u=Math.min(a*.72,c*(l.height/Math.max(1,l.width))),h=Math.min(c,u*(l.width/Math.max(1,l.height))),f=Math.min(u,h*(l.height/Math.max(1,l.width)));return n.save(),n.globalAlpha=Math.min(1,o*1.4),n.drawImage(l,(r-h)/2,a*.12,h,f),s&&(n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText(s,r/2,a*.1)),n.restore(),!0}function mx(){return Pn||(Ut=new bn(-5,5,5,-5,.1,2e3),Pn=new ni({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Pn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Pn.outputColorSpace=Nt,Pn.toneMapping=zr,Pn.toneMappingExposure=1.16),!0}function xd(n,e,t,i,r=!1){if(!mx())return!1;const a=r?Math.max(180,Math.min(520,Math.floor(e*.92))):Math.max(260,Math.min(700,Math.floor(e*.58))),o=r?Math.max(130,Math.min(360,Math.floor(t*.78))):Math.max(190,Math.min(560,Math.floor(t*.7)));Pn.setSize(a,o,!1);const s=new xe(getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#668080");Pn.setClearColor(s,1);const l=Math.max(4.5,_a||4.8),c=a/o,u=l*1.05;c>=1?(Ut.left=-u*c,Ut.right=u*c,Ut.top=u,Ut.bottom=-u):(Ut.left=-u,Ut.right=u,Ut.top=u/c,Ut.bottom=-u/c),Ut.near=.1,Ut.far=2e3;const h=i*Math.PI*.75+performance.now()*18e-5;Ut.up.set(0,0,1),Ut.position.set(Math.cos(h)*l*.55,-l*1.35,l*.46+Math.sin(h)*l*.1),Ut.lookAt(0,0,0),Ut.updateProjectionMatrix();const f=an==null?void 0:an.visible;an&&(an.visible=!1),Pn.render(On,Ut),an&&f!=null&&(an.visible=f),n.save(),n.globalAlpha=Math.min(1,i*1.4);const d=r?(e-a)/2:Math.min(e-a-e*.04,Math.max(e*.36,(e-a)/2+e*.16));return n.drawImage(Pn.domElement,d,t*.12,a,o),n.restore(),!0}function gx(n,e,t,i=1){const r=lt(),a=ri(r),o=Math.max(4,a.leastRadius+1),s=Math.min(300,e*.32),l=150,c=e*.055,u=t*.16,h=22,f=[];for(let p=0;p<=140;p+=1)f.push(qi(r.n,r.l,r.z,o*p/140));const d=Math.max(...f.map(p=>Math.abs(p)),1e-4),_=Math.max(2,Math.floor(140*Math.min(1,i)));n.save(),n.globalAlpha=Math.min(1,i*1.7),n.fillStyle="rgba(255,255,255,0.9)",Zl(n,c,u,s,l,10),n.fill(),n.strokeStyle="rgba(17,24,39,0.28)",n.lineWidth=1,n.beginPath(),n.moveTo(c+h,u+l*.58),n.lineTo(c+s-h,u+l*.58),n.moveTo(c+h,u+h),n.lineTo(c+h,u+l-h),n.stroke(),n.strokeStyle="#175cd3",n.lineWidth=2.4,n.beginPath();for(let p=0;p<=_;p+=1){const M=c+h+(s-h*2)*p/140,x=u+l*.58-f[p]/d*(l*.36);p===0?n.moveTo(M,x):n.lineTo(M,x)}n.stroke();const v=u+l*.58,g=[];for(let p=2;p<=_;p+=1){const M=f[p-1],x=f[p];if(M===0||M*x<0){const y=Math.abs(M)/Math.max(1e-9,Math.abs(M)+Math.abs(x)),T=c+h+(s-h*2)*(p-1+y)/140;g.push(T)}}g.length&&(n.save(),n.fillStyle="#ffb000",g.forEach(p=>{n.beginPath(),n.arc(p,v,4.2,0,Math.PI*2),n.fill()}),n.restore()),n.fillStyle="#111827",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText("Rnl(r) 函数图像",c+s/2,u+18),n.font="12px sans-serif",n.fillText("横轴 r",c+s-38,u+l-8),n.save(),n.translate(c+12,u+l/2),n.rotate(-Math.PI/2),n.fillText("振幅",0,0),n.restore(),n.restore()}function _x(n,e,t,i){if(xd(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.5),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("径向分布函数的 3D 读法",e/2,t*.1),n.restore(),gx(n,e,t,i),Ku(n,e,t,i);return}const r=lt(),a=ri(r),o=Math.max(4,a.leastRadius+1),s=e*.14,l=t*.66,c=e*.72,u=t*.42,h=[];for(let _=0;_<=180;_+=1){const v=o*_/180;h.push(qi(r.n,r.l,r.z,v))}const f=Math.max(...h.map(_=>Math.abs(_)),1e-4),d=Math.max(2,Math.floor(180*i));n.save(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2,n.beginPath(),n.moveTo(s,l),n.lineTo(s+c,l),n.moveTo(s,l-u/2),n.lineTo(s,l+u/2),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=3,n.beginPath();for(let _=0;_<=d;_+=1){const v=s+c*_/180,g=l-h[_]/f*(u/2);_===0?n.moveTo(v,g):n.lineTo(v,g)}n.stroke(),n.fillStyle="#ffb000";for(let _=1;_<d;_+=1)if(h[_-1]*h[_]<=0){const v=s+c*_/180;n.beginPath(),n.arc(v,l,4,0,Math.PI*2),n.fill()}n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Rnl(r)",s+c/2,l-u/2-18),n.font="14px sans-serif",n.textAlign="left",n.fillText("r = 0 原子核",s-38,l+24),n.textAlign="right",n.fillText("r 增大：离核距离",s+c,l+28),n.save(),n.translate(s-34,l-u/2+12),n.rotate(-Math.PI/2),n.textAlign="center",n.fillText("纵轴：径向波函数振幅 Rnl(r)",0,0),n.restore(),n.fillStyle="#ffb000",n.beginPath(),n.arc(s,l,5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.88)",n.textAlign="center",n.fillText("曲线穿过横轴的位置，对应径向节面",s+c*.55,l+u/2+22),Ku(n,e,t,i),n.restore()}function vx(){Dn&&(Dn.traverse(n=>{var e,t;n.geometry&&((t=(e=n.geometry).dispose)==null||t.call(e)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{var a;return(a=r.dispose)==null?void 0:a.call(r)})}),Zn==null||Zn.remove(Dn),Dn=null)}function xx(){if(Cn)return!0;Zn=new Ti,Ht=new bn(-5,5,5,-5,.1,2e3),Cn=new ni({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Cn.outputColorSpace=Nt,Cn.toneMapping=zr,Cn.toneMappingExposure=1.18,Zn.add(new Ai(16777215,.58));const n=new hn(16777215,1.72);n.position.set(5,-6,8),Zn.add(n);const e=new hn(16777215,.55);return e.position.set(-4,5,4),Zn.add(e),!0}function Mx(){const n=lt(),e=Kt(),t=[n.n,n.l,n.m,n.z,e.positiveColor,e.negativeColor].join("|");if(Dn&&Vu===t)return!0;vx(),Vu=t,Dn=new Rt;const i={radius:3.8,thetaSegments:80,phiSegments:160},{positive:r,negative:a}=Qh(n,i),o=Fr(r,Lt(e.positiveColor),.96),s=Fr(a,Lt(e.negativeColor),.96);return Or(o,{...e,smooth:!0,wireframe:!1}),Or(s,{...e,smooth:!0,wireframe:!1}),Dn.add(s,o),Zn.add(Dn),!0}function Md(n,e,t,i){if(!xx()||!Mx())return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(620,Math.floor(t*.78)));Cn.setSize(r,a,!1),Cn.setClearColor(0,0);const o=new cn().setFromObject(Dn);if(o.isEmpty())return!1;const s=o.getCenter(new P),l=Math.max(1,o.getSize(new P).length()*.5),c=r/a,u=l*1.08;c>=1?(Ht.left=-u*c,Ht.right=u*c,Ht.top=u,Ht.bottom=-u):(Ht.left=-u,Ht.right=u,Ht.top=u/c,Ht.bottom=-u/c),Ht.near=.1,Ht.far=Math.max(1e3,l*18);const h=i*Math.PI*.7;Ht.position.copy(s).add(new P(Math.cos(h)*l*1.5,-l*1.9,l*.95+Math.sin(h)*l*.35)),Ht.lookAt(s),Ht.updateProjectionMatrix();const f=.16+.84*(1-(1-Math.min(1,i))**3);return Dn.traverse(d=>{var _;((_=d.material)==null?void 0:_.opacity)!=null&&d.isMesh&&(d.material.transparent=!0,d.material.opacity=f,d.material.needsUpdate=!0)}),Cn.render(Zn,Ht),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Cn.domElement,(e-r)/2,t*.08,r,a),n.restore(),!0}function yx(n,e,t,i){var c,u;if(Md(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)：每一个方向对应一个角向函数值",e/2,t*.12),n.font="14px sans-serif",n.fillStyle=((c=m.positiveColor)==null?void 0:c.value)||"#d83bd8",n.fillText("正相位 Y > 0",e*.32,t*.84),n.fillStyle=((u=m.negativeColor)==null?void 0:u.value)||"#00aeb8",n.fillText("负相位 Y < 0",e*.68,t*.84),n.fillStyle="#ffd15c",n.fillText("两色交界处就是 Y = 0 的角向节面",e/2,t*.9),n.restore();return}const r=lt(),a=e/2,o=t*.56,s=Math.max(2,r.l*2||1),l=Math.min(e,t)*.18*Math.min(1,i*1.7);n.save(),n.translate(a,o),n.rotate(r.m*Math.PI/12);for(let h=0;h<s;h+=1){const f=Math.PI*2*h/s,d=h%2===0,_=l*(r.l===0?1.25:1.55);n.save(),n.rotate(f);const v=n.createRadialGradient(_*.5,0,4,_*.5,0,_);v.addColorStop(0,d?"#ff2bd6":"#00d7ff"),v.addColorStop(1,d?"rgba(255,43,214,0.15)":"rgba(0,215,255,0.15)"),n.fillStyle=v,n.beginPath(),n.ellipse(_*.55,0,_*.62,l*.5,0,0,Math.PI*2),n.fill(),n.restore()}n.strokeStyle="#ffb000",n.lineWidth=2;for(let h=0;h<Math.max(1,r.l);h+=1)n.beginPath(),n.moveTo(-l*2,0),n.lineTo(l*2,0),n.stroke(),n.rotate(Math.PI/Math.max(1,r.l));n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)",0,-l*1.75-20),n.font="14px sans-serif",n.fillStyle="#ff9cff",n.fillText("Y > 0：正相位",l*1.7,-l*.88),n.fillStyle="#72f6ff",n.fillText("Y < 0：负相位",-l*1.7,l*.95),n.fillStyle="#ffd15c",n.fillText("Y = 0：角向节面/节线",0,l*1.9),n.strokeStyle="rgba(255,255,255,0.78)",n.lineWidth=1.1,n.beginPath(),n.moveTo(0,0),n.lineTo(l*1.55,-l*1.15),n.stroke(),n.fillStyle="rgba(255,255,255,0.9)",n.textAlign="left",n.fillText("一个方向由 θ 和 φ 确定",l*1.6,-l*1.18),n.restore()}function Sx(n,e,t,i){const r=Math.min(1,i*1.45),a=[e*.2,e*.5,e*.8],o=e*.24,s=t*.32,l=t*.2,c=(h,f,d)=>{n.strokeStyle="#ffb000",n.fillStyle="#ffb000",n.lineWidth=3.2,n.beginPath(),n.moveTo(h,f),n.lineTo(d,f),n.stroke(),n.beginPath(),n.moveTo(d,f),n.lineTo(d-13,f-8),n.lineTo(d-13,f+8),n.closePath(),n.fill()};n.save(),n.globalAlpha=r,n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText("径向",a[0],l-20),n.fillText("角向",a[1],l-20),n.fillText("轨道",a[2],l-20),n.save(),n.translate(a[0]-o/2,l),xd(n,o,s,i,!0),n.restore(),n.save(),n.translate(a[1]-o/2,l),Md(n,o,s,i),n.restore(),n.save(),n.translate(a[2]-o/2,l),Sd(n,o,s,i),n.restore();const u=l+s*.78;n.fillStyle="#ffb000",n.font="bold 34px serif",n.fillText("×",(a[0]+a[1])/2,u),c(a[1]+o*.46,u,a[2]-o*.48),n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 28px serif",n.fillText("R(r) × Y(θ,φ) = Ψ(x,y,z)",e/2,t*.76),n.restore()}function bx(n,e,t,i){return Sx(n,e,t,i)}function Ex(n,e,t,i){var l,c;const r=e/2,a=t*.56,o=Math.min(e,t)*.27*Math.min(1,i*1.5),s=lt();n.save(),n.globalAlpha=.96,n.fillStyle=((l=m.negativeColor)==null?void 0:l.value)||"#00a0a0",n.beginPath(),n.ellipse(r-o*.76,a,o*(s.l>2?.9:.78),o*.72,-.12,0,Math.PI*2),n.fill(),n.fillStyle=((c=m.positiveColor)==null?void 0:c.value)||"#b24bb2",n.beginPath(),n.ellipse(r+o*.76,a,o*(s.l>2?.9:.78),o*.72,.12,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2;for(let u=0;u<10;u+=1){const h=a-o*.72+o*1.44*u/9;n.beginPath(),n.moveTo(r-o*1.65,h),n.lineTo(r+o*1.65,h),n.stroke()}n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("抽取 Ψ=+c 与 Ψ=-c",r,a+o+38),n.restore()}function Yt(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function yd(n){return{x:n.x*.82+n.y*.34,y:-n.z*.88+n.y*.22}}function wx(n,e=6e4){var r,a;const t=[],i=[new P,new P,new P];for(const o of n)o.object&&((a=(r=o.object).updateWorldMatrix)==null||a.call(r,!0,!0),o.object.traverse(s=>{var f,d;const l=(d=(f=s.geometry)==null?void 0:f.attributes)==null?void 0:d.position;if(!l)return;const c=s.geometry.index,u=Math.floor(c?c.count/3:l.count/3);if(!u)return;s.updateWorldMatrix(!0,!1);const h=Math.max(1,Math.ceil(u/Math.max(1,e/n.length)));for(let _=0;_<u;_+=h){let v=0;const g=[];for(let p=0;p<3;p+=1){const M=c?c.getX(_*3+p):_*3+p;i[p].fromBufferAttribute(l,M).applyMatrix4(s.matrixWorld),v+=i[p].y,g.push(yd(i[p]))}t.push({points:g,color:o.color,depth:v/3})}}));return t}function Tx(n,e){const t=new xe(n);return`rgba(${Math.round(t.r*255)}, ${Math.round(t.g*255)}, ${Math.round(t.b*255)}, ${e})`}function Ax(n,e,t,i,r){if(!e.length)return!1;let a=1e-4;for(const u of e)for(const h of u.points)a=Math.max(a,Math.abs(h.x),Math.abs(h.y));const o=Math.min(t,i)*.34/a,s=t/2,l=i*.55,c=.14+.76*(1-(1-Math.min(1,r))**3);return n.save(),e.sort((u,h)=>u.depth-h.depth).forEach(u=>{const[h,f,d]=u.points;n.fillStyle=Tx(u.color,c),n.beginPath(),n.moveTo(s+h.x*o,l+h.y*o),n.lineTo(s+f.x*o,l+f.y*o),n.lineTo(s+d.x*o,l+d.y*o),n.closePath(),n.fill()}),n.restore(),!0}function Ju(){yn&&(yn.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(t=>{var i;return(i=t.dispose)==null?void 0:i.call(t)})}),jn==null||jn.remove(yn),yn=null)}function Cx(){if(An)return!0;jn=new Ti,Vt=new bn(-5,5,5,-5,.1,2e3),An=new ni({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),An.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),An.outputColorSpace=Nt,An.toneMapping=zr,An.toneMappingExposure=1.12,jn.add(new Ai(16777215,.56));const n=new hn(16777215,1.65);n.position.set(5,-7,8),jn.add(n);const e=new hn(16777215,.55);return e.position.set(-6,4,5),jn.add(e),!0}function Rx(n=1){var r,a,o,s,l,c,u;const e=Kt(),t=[(Tt==null?void 0:Tt.uuid)||"",(At==null?void 0:At.uuid)||"",((r=m.positiveColor)==null?void 0:r.value)||"",((a=m.negativeColor)==null?void 0:a.value)||"",e.opacity].join("|");if(yn&&ku===t)return!0;Ju(),ku=t,yn=new Rt;const i=[{object:At,color:((o=m.negativeColor)==null?void 0:o.value)||"#00a0a0"},{object:Tt,color:((s=m.positiveColor)==null?void 0:s.value)||"#b24bb2"}];for(const h of i)(c=(l=h.object)==null?void 0:l.updateWorldMatrix)==null||c.call(l,!0,!0),(u=h.object)==null||u.traverse(f=>{if(!f.isMesh||!f.geometry)return;const d=new Tr({color:Lt(h.color),emissive:Lt(h.color),emissiveIntensity:.04,shininess:26,side:ht,transparent:!0,opacity:Math.min(.98,e.opacity)}),_=new rt(f.geometry,d);_.matrix.copy(f.matrixWorld),_.matrixAutoUpdate=!1,yn.add(_)});return yn.children.length?(jn.add(yn),!0):(Ju(),!1)}function Sd(n,e,t,i){if(!Tt&&!At||!Cx()||!Rx(i))return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(680,Math.floor(t*.82)));An.setSize(r,a,!1),An.setClearColor(0,0);const o=new cn().setFromObject(yn);if(o.isEmpty())return!1;const s=o.getCenter(new P),l=Math.max(1,o.getSize(new P).length()*.5),c=r/a,u=l*1.16;c>=1?(Vt.left=-u*c,Vt.right=u*c,Vt.top=u,Vt.bottom=-u):(Vt.left=-u,Vt.right=u,Vt.top=u/c,Vt.bottom=-u/c),Vt.near=.1,Vt.far=Math.max(2e3,l*20);const h=performance.now()*42e-5+i*Math.PI*.28;Vt.position.copy(s).add(new P(Math.cos(h)*l*1.65,Math.sin(h)*l*1.65,l*.92)),Vt.lookAt(s),Vt.updateProjectionMatrix();const f=.08+.9*(1-(1-Math.min(1,i))**3);return yn.traverse(d=>{d.material&&(d.material.opacity=f)}),An.render(jn,Vt),n.save(),n.globalAlpha=Math.min(1,i*1.4),n.drawImage(An.domElement,(e-r)/2,t*.1,r,a),n.restore(),!0}function Px(n,e,t,i){var a,o;if(Sd(n,e,t,i)){n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore();return}const r=wx([{object:At,color:((a=m.negativeColor)==null?void 0:a.value)||"#00a0a0"},{object:Tt,color:((o=m.positiveColor)==null?void 0:o.value)||"#b24bb2"}]);if(!Ax(n,r,e,t,i)){Ex(n,e,t,i);return}n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore()}function Lx(n,e){var a,o;const t=Math.min(1,Math.abs(n)/Math.max(e,1e-8)),i=new xe(n>=0?((a=m.positiveColor)==null?void 0:a.value)||"#b24bb2":((o=m.negativeColor)==null?void 0:o.value)||"#00a0a0"),r=new xe(16777215);return i.lerp(r,1-Math.sqrt(t)),`rgba(${Math.round(i.r*255)}, ${Math.round(i.g*255)}, ${Math.round(i.b*255)}, ${.16+.78*t})`}function Ix(n,e,t,i,r,a){var h,f;const o=[.18,.32,.48,.64,.8].filter((d,_,v)=>_/v.length<=a+.08),s=e.length,l=i/(s-1),c=r/(s-1),u=(d,_,v)=>Math.abs(_-d)<1e-9?.5:(v-d)/(_-d);for(const d of[1,-1]){n.strokeStyle=d>0?((h=m.positiveColor)==null?void 0:h.value)||"#ff2bd6":((f=m.negativeColor)==null?void 0:f.value)||"#00d7ff",n.lineWidth=1.45;for(const _ of o){const v=d*t*_;n.beginPath();for(let g=0;g<s-1;g+=1)for(let p=0;p<s-1;p+=1){const M=e[g][p],x=e[g][p+1],y=e[g+1][p+1],T=e[g+1][p],E=[];(M-v)*(x-v)<=0&&E.push([p+u(M,x,v),g]),(x-v)*(y-v)<=0&&E.push([p+1,g+u(x,y,v)]),(y-v)*(T-v)<=0&&E.push([p+1-u(y,T,v),g+1]),(T-v)*(M-v)<=0&&E.push([p,g+1-u(T,M,v)]),E.length>=2&&(n.moveTo(-i/2+E[0][0]*l,-r/2+E[0][1]*c),n.lineTo(-i/2+E[1][0]*l,-r/2+E[1][1]*c))}n.stroke()}}}function Dx(n,e,t,i){if(px(n,ji,Fn,_t,e,t,i,"轨道投影的 3D 视图")){vd(n,e,t,"同一个 Ψ 在投影平面上显示为高度曲面和等高线",i);return}const r=lt(),a=Kt(),o=Xl(r),s=G_(r,a,o,78),l=e/2,c=t*.58,u=e*.56,h=t*.34,f=document.createElement("canvas");f.width=s.rows.length,f.height=s.rows.length;const d=f.getContext("2d");for(let _=0;_<s.rows.length;_+=1)for(let v=0;v<s.rows.length;v+=1)d.fillStyle=Lx(s.rows[_][v],s.maxAbs),d.fillRect(v,_,1,1);n.save(),n.translate(l,c),n.transform(1,-.22,.35,.82,0,0),n.fillStyle="rgba(238,244,244,0.88)",n.fillRect(-u/2,-h/2,u,h),n.globalAlpha=Math.min(1,i*1.35),n.drawImage(f,-u/2,-h/2,u,h),n.globalAlpha=Math.min(1,i*1.8),Ix(n,s.rows,s.maxAbs,u,h,i),n.strokeStyle="rgba(255,255,255,0.9)",n.strokeRect(-u/2,-h/2,u,h),n.restore(),n.save(),n.globalAlpha=i,n.strokeStyle="#ffb000",n.lineWidth=2,n.beginPath(),n.moveTo(l,t*.22),n.lineTo(l,c-h*.22),n.stroke(),n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText(`当前投影平面：${o.toUpperCase()}，颜色来自 Ψ 的正负`,l,t*.2),n.restore()}function Ux(){Un&&(Un.traverse(n=>{var e,t,i;n.geometry&&!((e=n.userData)!=null&&e.sharedGeometry)&&((i=(t=n.geometry).dispose)==null||i.call(t)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{var o;return(o=a.dispose)==null?void 0:o.call(a)})}),Mi==null||Mi.remove(Un),Un=null)}function Nx(){if(Rn)return!0;Mi=new Ti,Gt=new bn(-5,5,5,-5,.1,2e3),Rn=new ni({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Rn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Rn.outputColorSpace=Nt,Rn.toneMapping=zr,Rn.toneMappingExposure=1.18,Mi.add(new Ai(16777215,.56));const n=new hn(16777215,1.55);return n.position.set(5,-7,8),Mi.add(n),!0}function Qu(n,e,t,i=3200){const r=Math.min(e.radius,Math.max(5,ri(n).leastRadius+1.2)),a=r*r;let o=0;for(let c=0;c<520;c+=1){const u=(Yt(c,51)*2-1)*r,h=(Yt(c,52)*2-1)*r,f=(Yt(c,53)*2-1)*r;u*u+h*h+f*f>a||(o=Math.max(o,Math.abs(Pt(n,u,h,f))))}const s=[];let l=0;for(;s.length/3<i&&l<i*110;){const c=(Yt(l,61+t)*2-1)*r,u=(Yt(l,62+t)*2-1)*r,h=(Yt(l,63+t)*2-1)*r;if(l+=1,c*c+u*u+h*h>a)continue;const f=Pt(n,c,u,h);if(t*f<=0)continue;const d=(Math.abs(f)/Math.max(o,1e-8))**2;Yt(l,71+t)>d*.92||s.push(c,u,h)}return{points:s,radius:r}}function Fx(){const n=lt(),e=Kt(),t=[n.n,n.l,n.m,n.z,e.radius.toFixed(3),e.iso.toFixed(5),e.positiveColor,e.negativeColor].join("|");if(Un&&Hu===t)return!0;Ux(),Hu=t,Un=new Rt;const i=Qu(n,e,1),r=Qu(n,e,-1),a=As(i.points,Lt(e.positiveColor)),o=As(r.points,Lt(e.negativeColor));return a.material.uniforms.uSize.value=3.4,o.material.uniforms.uSize.value=3.4,Un.add(o,a),Mi.add(Un),!0}function Ox(n,e,t,i,r){if(!Nx()||!Fx())return!1;const a=Math.max(240,Math.min(900,Math.floor(e))),o=Math.max(180,Math.min(680,Math.floor(t*.82)));Rn.setSize(a,o,!1),Rn.setClearColor(0,0),Un.traverse(d=>{var _,v,g;(v=(_=d.material)==null?void 0:_.uniforms)!=null&&v.uTime?(d.material.uniforms.uTime.value=r,d.material.opacity=Math.min(1,i*1.3)):((g=d.material)==null?void 0:g.opacity)!=null&&d.isMesh&&(d.material.opacity=.28*Math.min(1,i*1.6),d.material.needsUpdate=!0)});const s=new cn().setFromObject(Un);if(s.isEmpty())return!1;const l=s.getCenter(new P),c=Math.max(1,s.getSize(new P).length()*.5),u=a/o,h=c*1.1;u>=1?(Gt.left=-h*u,Gt.right=h*u,Gt.top=h,Gt.bottom=-h):(Gt.left=-h,Gt.right=h,Gt.top=h/u,Gt.bottom=-h/u),Gt.near=.1,Gt.far=Math.max(2e3,c*20);const f=r*.25;return Gt.position.copy(l).add(new P(Math.cos(f)*c*1.55,-c*1.75,c*.95)),Gt.lookAt(l),Gt.updateProjectionMatrix(),Rn.render(Mi,Gt),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Rn.domElement,(e-a)/2,t*.1,a,o),n.restore(),!0}function Bx(n,e,t,i,r){if(Ox(n,e,t,i,r)){vd(n,e,t,"|Ψ|² 越大，三维空间中的闪烁点越密集",i);return}const a=lt(),o=Kt(),s=Math.min(o.radius,Math.max(5,ri(a).leastRadius+1.2));let l=0;for(let d=0;d<260;d+=1){const _=(Yt(d,11)*2-1)*s,v=(Yt(d,12)*2-1)*s,g=(Yt(d,13)*2-1)*s;_*_+v*v+g*g>s*s||(l=Math.max(l,Math.abs(Pt(a,_,v,g))))}const c=e/2,u=t*.55,h=Math.min(e,t)*.34/s,f=Math.floor(1500*i);n.save();for(let d=0;d<f;d+=1){const _=(Yt(d,21)*2-1)*s,v=(Yt(d,22)*2-1)*s,g=(Yt(d,23)*2-1)*s;if(_*_+v*v+g*g>s*s)continue;const p=Pt(a,_,v,g),M=(Math.abs(p)/Math.max(l,1e-8))**2;if(Yt(d,Math.floor(r*4)+31)>M*.9)continue;const x=yd(new P(_,v,g));n.fillStyle=p>=0?"rgba(255,43,214,0.82)":"rgba(0,215,255,0.82)",n.fillRect(c+x.x*h,u+x.y*h,1.9,1.9)}n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("|Ψ|² 越大，随机点越密",c,t*.84),n.restore()}function Br(n=0){var _,v;const e=hx();if(!e)return;const{ctx:t,width:i,height:r}=e,a=ae.animationStep,o=Zs();t.clearRect(0,0,i,r),t.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#668080",t.fillRect(0,0,i,r);const s=16/9;let l=i,c=l/s;c>r&&(c=r,l=c*s);const u=(i-l)/2,h=(r-c)/2,f=54;t.save(),t.translate(u,h),dx(t,l,a,n),t.translate(0,f);const d=c-f;a===0?fx(t,l,d,n):a===1?_x(t,l,d,n):a===2?yx(t,l,d,n):a===3?bx(t,l,d,n):a===4?Px(t,l,d,n):a===5?Dx(t,l,d,n):Bx(t,l,d,n,performance.now()*.001),t.restore(),m.animationProgressFill&&(m.animationProgressFill.style.width=`${Math.round(n*100)}%`),m.animationStepBadge&&(m.animationStepBadge.textContent=`第 ${a+1} 步 / ${o.length} 步`),m.animationTitle&&(m.animationTitle.textContent=((_=o[a])==null?void 0:_.title)||""),m.animationText&&(m.animationText.textContent=a===3?"径向给出离核距离变化，角向给出方向和相位；共同决定同一个三维波函数。":((v=o[a])==null?void 0:v.text)||"")}function zx(){ae.animationTimer&&clearTimeout(ae.animationTimer),ae.animationFrame&&cancelAnimationFrame(ae.animationFrame),ae.animationTimer=null,ae.animationFrame=null}function bd(){var t;if(!ae.animationPlaying)return;const n=Zs(),e=Math.min(1,(performance.now()-ae.animationStartedAt)/ux);if(Br(e),e>=1){if(ae.animationStep>=n.length-1){ae.animationPlaying=!1,m.animationPlayButton&&(m.animationPlayButton.textContent="播放");return}ae.animationStep+=1,ae.animationStartedAt=performance.now(),ya((t=n[ae.animationStep])==null?void 0:t.focus)}ae.animationFrame=requestAnimationFrame(bd)}function Rr(n,e=0){var i;const t=Zs();ae.animationStep=Math.max(0,Math.min(t.length-1,n)),ya((i=t[ae.animationStep])==null?void 0:i.focus),Br(e)}function kx(){ae.animationPlaying=!0,ae.animationStartedAt=performance.now(),m.animationPlayButton&&(m.animationPlayButton.textContent="暂停"),bd()}function Ma(){ae.animationPlaying=!1,m.animationPlayButton&&(m.animationPlayButton.textContent="播放"),zx()}function Vx(){ae.animationPlaying?Ma():kx()}function Hx(){Ma(),Rr(0,0)}function eh(n){Ma(),Rr(ae.animationStep+n,0)}function Gx(){return typeof MediaRecorder>"u"||!MediaRecorder.isTypeSupported?"":["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(n=>MediaRecorder.isTypeSupported(n))||""}function th(){return new Promise(n=>requestAnimationFrame(n))}function Wx(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),1200)}async function qx(){var f,d;const n=m.animationCanvas;if(!(n!=null&&n.captureStream)||typeof MediaRecorder>"u"){alert("当前浏览器不支持直接导出视频。建议使用新版 Chrome 或 Edge 打开后再导出。");return}if(ae.animationExporting)return;Ma(),ae.animationExporting=!0;const e=ae.animationStep,t=[m.animationRestartButton,m.animationPrevButton,m.animationPlayButton,m.animationNextButton,m.animationExportButton].filter(Boolean),i=t.map(_=>_.disabled),r=((f=m.animationExportButton)==null?void 0:f.textContent)||"导出视频";t.forEach(_=>{_.disabled=!0}),m.animationExportButton&&(m.animationExportButton.textContent="导出中...");const a=Zs(),o=[],s=n.captureStream(30),l=Gx(),c={videoBitsPerSecond:6e6,...l?{mimeType:l}:{}};let u;try{u=new MediaRecorder(s,c)}catch{s.getTracks().forEach(v=>v.stop()),alert("当前浏览器无法创建视频录制器，请换用新版 Chrome 或 Edge。"),ae.animationExporting=!1,t.forEach((v,g)=>{v.disabled=i[g]}),m.animationExportButton&&(m.animationExportButton.textContent=r),Rr(e,0);return}const h=new Promise((_,v)=>{u.ondataavailable=g=>{var p;(p=g.data)!=null&&p.size&&o.push(g.data)},u.onerror=()=>v(u.error||new Error("video export failed")),u.onstop=()=>_(new Blob(o,{type:u.mimeType||"video/webm"}))});try{Rr(0,0),await th(),u.start(250);const _=2600;for(let M=0;M<a.length;M+=1){ae.animationStep=M,ya((d=a[M])==null?void 0:d.focus);const x=performance.now();let y=0;for(;y<1;)y=Math.min(1,(performance.now()-x)/_),Br(y),await th();Br(1),await new Promise(T=>setTimeout(T,160))}u.state!=="inactive"&&u.stop();const v=await h,g=lt(),p=`HAO-${zn(g.n,g.l,g.m)}-generation.webm`;Wx(v,p)}catch(_){u.state!=="inactive"&&u.stop(),console.error(_),alert("导出视频失败，请刷新页面后再试。")}finally{s.getTracks().forEach(_=>_.stop()),ae.animationExporting=!1,t.forEach((_,v)=>{_.disabled=i[v]}),m.animationExportButton&&(m.animationExportButton.textContent=r),Rr(e,0)}}function Xx(){m.animationWindow&&(m.animationWindow.classList.remove("closed","minimized"),m.animationWindow.style.zIndex="129",Ji(m.animationWindow),ln(),requestAnimationFrame(()=>Rr(ae.animationStep,0)))}function Ed(){const n=lt(),e=zn(n.n,n.l,n.m),t=n.n-n.l-1,i=n.l;return[{focus:"all",title:`先把 ${e} 看成一个波函数`,formula:"Ψ(r,θ,φ) = Rₙₗ(r) · Yₗᵐ(θ,φ)",text:"四个窗口不是四套不同的计算。它们都来自同一个 Ψ，只是观察方式不同：在空间中取等值面、在平面上取切片、沿半径取曲线，或只看角向部分。",observe:`当前轨道是 ${e}：n=${n.n} 决定尺度和径向层数，l=${n.l} 决定角向节点，m=${n.m} 决定方向和相位分区。`,reason:"先建立“同源”的概念，后面的每张图就不再是孤立图像，而是同一个函数的不同读法。",action:()=>{m.projection&&(m.projection.checked=!0),at()}},{focus:"orbital",title:"原子轨道：找出 Ψ 等于某个值的边界",formula:"Ψ(x,y,z) = +c  和  Ψ(x,y,z) = -c",text:"程序先在三维盒子里布满格点，逐点计算 Ψ。把数值等于正等值和负等值的位置连成曲面，就得到你看到的两个相位区域。",observe:"粉色和蓝色表示波函数符号相反，不表示电荷正负。网格越密，等值面越接近真实边界。",reason:"这一步回答“轨道外形怎么来”：它不是画出来的外壳，而是三维标量场中被等值面算法提取出来的边界。",action:()=>{fs({cloud:!1,wireframe:!0,smooth:!0,projection:!1,node:!1,box:!0})}},{focus:"projection",title:"轨道投影：把同一个 Ψ 放到一个平面上读",formula:"例如：z=0 时，观察 Ψ(x,y,0)",text:"投影窗口先选一个最能显示该轨道对称性的平面，再在平面上逐点计算 Ψ。上方曲面用高度表达数值大小，下方等高线表达相位和节点线。",observe:"看上方曲面的峰、谷，再对照下方等高线：峰对应密集的正相线，谷对应密集的负相线，白色过渡附近就是节点。",reason:"这一步把三维轨道压到二维平面，让学生更容易判断相位分区、节点线和方向。",action:()=>{m.projection&&(m.projection.checked=!0),m.box&&(m.box.checked=!0),m.wireframe&&(m.wireframe.checked=!0),m.smooth&&(m.smooth.checked=!1),at()}},{focus:"radial",title:"径向分布：只问电子离原子核多远",formula:"P(r) = r² · Rₙₗ(r)²",text:"径向分布函数暂时不关心方向，只沿半径统计概率。R 决定波函数随距离怎样振荡，r² 会把球壳体积因素加进去。",observe:`${e} 的径向节点数是 n-l-1 = ${t}。曲线下凹或接近零的位置，通常对应概率分布中的分层。`,reason:"这一步解释“为什么有的轨道外面还有一层”：那通常来自径向部分，而不是角向形状突然改变。",action:()=>{m.radialR&&(m.radialR.checked=!1),m.radialR2&&(m.radialR2.checked=!1),m.radialRdf&&(m.radialRdf.checked=!0),m.radialSection&&(m.radialSection.checked=!0),m.radialSide&&(m.radialSide.checked=!0),m.radialCurve&&(m.radialCurve.checked=!0),at()}},{focus:"angular",title:"角向函数：只看方向怎样分成正负相",formula:"Yₗᵐ(θ,φ) 决定方向、节面和相位",text:"角向函数把半径影响先拿掉，只保留方向上的变化。这样可以直接看到轨道为什么沿某些轴伸展，为什么中间会出现节面。",observe:`${e} 的角向节点数是 l = ${i}。这些节点决定了轨道方向上的分瓣方式。`,reason:"最后再回到原子轨道时，学生就能把外形拆开理解：径向部分决定层数，角向部分决定方向和分瓣。",action:()=>{m.projection&&(m.projection.checked=!1),m.node&&(m.node.checked=!0),m.longitudeNode&&(m.longitudeNode.checked=!0),m.wireframe&&(m.wireframe.checked=!0),at()}}]}function ya(n){var t;for(const i of document.querySelectorAll(".qt-window.teaching-focus"))i.classList.remove("teaching-focus");const e=n==="all"?["orbital","projection","radial","angular"]:[n];for(const i of e)(t=document.querySelector(`[data-window-name="${i}"]`))==null||t.classList.add("teaching-focus")}function Kl(n){m.explainProgressFill&&(m.explainProgressFill.style.width=`${Math.max(0,Math.min(1,n))*100}%`)}function wd(){ae.explanationTimer&&clearTimeout(ae.explanationTimer),ae.explanationFrame&&cancelAnimationFrame(ae.explanationFrame),ae.explanationTimer=null,ae.explanationFrame=null}function Td(){if(!ae.explanationPlaying)return;const n=(performance.now()-ae.explanationStartedAt)/md;Kl(n),ae.explanationFrame=requestAnimationFrame(Td)}function Ad(){wd(),ae.explanationStartedAt=performance.now(),Td(),ae.explanationTimer=setTimeout(()=>{const n=Ed();if(ae.explanationStep>=n.length-1){ae.explanationPlaying=!1,m.explainPlayButton&&(m.explainPlayButton.textContent="播放"),Kl(1);return}Sa(ae.explanationStep+1),ae.explanationPlaying&&Ad()},md)}function Sa(n,e={}){const t=Ed(),i=Math.max(0,Math.min(t.length-1,n)),r=t[i];ae.explanationStep=i,m.explainStepBadge&&(m.explainStepBadge.textContent=`第 ${i+1} 步 / ${t.length} 步`),m.explainStepTitle&&(m.explainStepTitle.textContent=r.title),m.explainStepText&&(m.explainStepText.textContent=r.text),m.explainFormula&&(m.explainFormula.textContent=r.formula),m.explainObserveText&&(m.explainObserveText.textContent=r.observe),m.explainReasonText&&(m.explainReasonText.textContent=r.reason),m.explainHintText&&(m.explainHintText.textContent=`正在讲解 ${rx()}。你可以暂停后旋转任意一个窗口，再继续播放。`),ya(r.focus),Kl(0),e.render!==!1&&r.action()}function Yx(){ae.explanationPlaying=!0,m.explainPlayButton&&(m.explainPlayButton.textContent="暂停"),Sa(ae.explanationStep),Ad()}function Ks(){ae.explanationPlaying=!1,m.explainPlayButton&&(m.explainPlayButton.textContent="播放"),wd()}function $x(){ae.explanationPlaying?Ks():Yx()}function jx(){Ks(),ae.explanationStep=0,Sa(0)}function nh(n){Ks(),Sa(ae.explanationStep+n)}function fs(n){n.cloud!=null&&m.cloud&&(m.cloud.checked=n.cloud),n.wireframe!=null&&m.wireframe&&(m.wireframe.checked=n.wireframe),n.smooth!=null&&m.smooth&&(m.smooth.checked=n.smooth),n.projection!=null&&m.projection&&(m.projection.checked=n.projection),n.node!=null&&(m.node&&(m.node.checked=n.node),m.longitudeNode&&(m.longitudeNode.checked=n.node)),n.box!=null&&m.box&&(m.box.checked=n.box),n.grid3d!=null&&m.grid3d&&(m.grid3d.checked=n.grid3d),at()}function Zx(){return qt.find(n=>{var e;return n.value===((e=m.predictTarget)==null?void 0:e.value)})||ae.challengeTarget||qt[0]}function Kx(){const n=Zx(),e=$s(n.value),t=e.n-e.l-1,i=e.l,r=Math.max(60,100-t*4-i*3);m.scorePrompt&&(m.scorePrompt.textContent=`${n.label} 参考评分：${r} 分。检查点：径向节点 ${t} 个，角向节点 ${i} 个，相位正负分区清楚，方向与坐标轴一致。`),js(n.value)}function Jx(){m.scorePrompt&&(m.scorePrompt.textContent="评分标准：节点数 30 分，相位颜色 25 分，空间方向 25 分，投影/截面对应关系 20 分。")}function Qx(){m.scorePrompt&&(m.scorePrompt.textContent="评分会根据当前目标轨道给出节点数、相位、方向和投影四项课堂反馈。")}function hs(n){n==="nodes"?(fs({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!0}),m.diagnosisPrompt&&(m.diagnosisPrompt.textContent="节点诊断：观察径向节点数 n-l-1 与角向节点数 l 是否匹配。")):n==="phase"?(fs({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!1}),m.positiveLobe&&(m.positiveLobe.checked=!0),m.negativeLobe&&(m.negativeLobe.checked=!0),at(),m.diagnosisPrompt&&(m.diagnosisPrompt.textContent="相位诊断：紫色/青色两相表示波函数符号相反，不代表电荷正负。")):(fs({cloud:!1,wireframe:!0,smooth:!1,projection:!0,node:!1,box:!0}),m.diagnosisPrompt&&(m.diagnosisPrompt.textContent="投影诊断：对照上方波函数曲面与底部等高线，判断节点线和相位区。"))}function ih(n){document.body.classList.toggle("tablet-mode",n),n?(Qs("tile"),ra("tablet"),Kn("平板课堂：已放大按钮和触控区域。")):Kn("已恢复普通课堂布局。"),ln()}function eM(){const n=qt.find(e=>e.value===m.predictTarget.value)??qt[0];Yl(),$e.strokes=[],$e.currentStroke=null,Yr(),m.predictPrompt&&(m.predictPrompt.textContent=`请先在画板中预测 ${n.label} 的形状、相位和节面，再点击“显示验证”。`)}function tM(){const n=qt.find(e=>e.value===m.predictTarget.value)??qt[0];js(n.value),m.predictPrompt&&(m.predictPrompt.textContent=`已显示 ${n.label}。请对照画板预测与四个窗口中的真实结果。`)}function nM(){const n=Math.floor(Math.random()*qt.length);ae.challengeTarget=qt[n],js(ae.challengeTarget.value),setTimeout(()=>{m.viewerTitle&&(m.viewerTitle.textContent="原子轨道  ?")},120),m.challengePrompt&&(m.challengePrompt.textContent="观察当前四个窗口中的图像，选择你认为对应的轨道名称。")}function iM(){const n=ae.challengeTarget||qt[0],e=qt.find(r=>r.value===m.challengeGuess.value),t=(e==null?void 0:e.value)===n.value;ae.challengeTotal+=1,t&&(ae.challengeCorrect+=1);const i=`（累计 ${ae.challengeCorrect}/${ae.challengeTotal}）`;m.viewerTitle&&(m.viewerTitle.textContent=`原子轨道  ${n.label}`),m.challengePrompt&&(m.challengePrompt.textContent=t?`回答正确：这是 ${n.label}。`:`还不对。你的答案是 ${(e==null?void 0:e.label)??""}，正确答案是 ${n.label}。`),Kn(`轨道配对 ${i}`)}function rM(n){var i,r;const e=m.sketchWindow;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();$e.dragging=!0,$e.dragPointerId=n.pointerId,$e.dragOffsetX=n.clientX-t.left,$e.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function aM(n){const e=m.sketchWindow;if(!e||!$e.dragging||$e.dragPointerId!==null&&n.pointerId!==$e.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-$e.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-$e.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function rh(){$e.dragging=!1,$e.dragPointerId=null,Ar()}function Jo(n,e){var i,r;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();ae.dragging=!0,ae.dragPointerId=n.pointerId,ae.dragWindow=e,ae.dragOffsetX=n.clientX-t.left,ae.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function sM(n){const e=ae.dragWindow;if(!ae.dragging||!e||ae.dragPointerId!==null&&n.pointerId!==ae.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-ae.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-ae.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function ah(){ae.dragging=!1,ae.dragPointerId=null,ae.dragWindow=null,Ar()}function Cd(){ev(performance.now()*.001),Ae.update(),Ct.update(),Ln.update(),$t.update(),bv(),dn.render(Ot,Ye),$i.render(Sn,it),ji.render(Fn,_t),qr.render(On,wt);for(const n of va)n.controls.update(),n.renderer.render(n.scene,n.camera);requestAnimationFrame(Cd)}function oM(){const[n,e,t]=m.preset.value.split(",").map(Number);m.n.value=n,m.l.value=e,m.m.value=Math.abs(t),m.cosType.checked=t>=0,m.sinType.checked=t<0,lt(),Xr(),at()}function Mr(n,e){if(n.checked)for(const t of e)t&&t!==n&&(t.checked=!1)}function Rd(n){n==="one"?(m.positiveColor.value="#ff7a00",m.negativeColor.value="#008fb8"):(m.positiveColor.value="#d83bd8",m.negativeColor.value="#00aeb8"),at()}function lM(){for(const n of[m.cosType,m.sinType])n==null||n.addEventListener("change",()=>{Mr(n,[m.cosType,m.sinType]),!m.cosType.checked&&!m.sinType.checked&&(m.cosType.checked=!0),at()});for(const n of[m.wireframe,m.smooth])n==null||n.addEventListener("change",()=>{Mr(n,[m.wireframe,m.smooth]),at()});for(const n of[m.paletteOne,m.paletteTwo])n==null||n.addEventListener("change",()=>{Mr(n,[m.paletteOne,m.paletteTwo]),!m.paletteOne.checked&&!m.paletteTwo.checked&&(m.paletteTwo.checked=!0),Rd(m.paletteOne.checked?"one":"two")});for(const n of[m.xySlice,m.yzSlice,m.xzSlice])n==null||n.addEventListener("change",()=>{Mr(n,[m.xySlice,m.yzSlice,m.xzSlice]),at()});for(const n of[m.quarter,m.eighth,m.threeQuarter])n==null||n.addEventListener("change",()=>{Mr(n,[m.quarter,m.eighth,m.threeQuarter]),at()});for(const n of[m.radialR,m.radialR2,m.radialRdf])n==null||n.addEventListener("change",()=>{Mr(n,[m.radialR,m.radialR2,m.radialRdf]),!m.radialR.checked&&!m.radialR2.checked&&!m.radialRdf.checked&&(m.radialRdf.checked=!0),od(),dd(lt(),Kt())})}function Js(){dn.render(Ot,Ye);const n=document.createElement("a");n.download=`${m.orbitalName.textContent||"hao-orbital"}.png`,n.href=dn.domElement.toDataURL("image/png"),n.click()}function Kn(n){m.statusText.textContent=n}function cM(){if(m.backgroundColor){(!document.body.contains(m.backgroundColor)||m.backgroundColor.closest(".hidden-control"))&&(document.body.appendChild(m.backgroundColor),Object.assign(m.backgroundColor.style,{position:"fixed",left:"-120px",top:"0",width:"1px",height:"1px",opacity:"0",pointerEvents:"none"}));try{typeof m.backgroundColor.showPicker=="function"?m.backgroundColor.showPicker():m.backgroundColor.click()}catch{m.backgroundColor.click()}}}function Ls(n){document.body.classList.toggle("app-fullscreen",n),Zi.hidden=!n,ln()}async function uM(){var e;tn(),Ls(!0);const n=(e=document.documentElement.requestFullscreen)==null?void 0:e.bind(document.documentElement);if(n)try{await n(),Cr=!0}catch{Cr=!1}}async function Pd(){if(tn(),Ls(!1),document.fullscreenElement&&document.exitFullscreen)try{await document.exitFullscreen()}catch{}Cr=!1}function hM(){document.body.classList.contains("app-fullscreen")||document.fullscreenElement?Pd():uM()}function tn(){m.menuPopup.hidden=!0,m.menuPopup.innerHTML="";for(const n of m.menuItems)n.classList.remove("active")}function dM(n){const e=n.dataset.menu,t={file:[["重新显示",at],["导出图片",Js],["恢复预设值",()=>{Xr(),at()}]],window:[["全屏/退出全屏",hM],["画板",Yl],["背景颜色",cM],["显示/隐藏盒子",fM],["显示/隐藏坐标轴",Jl],["重置视角",()=>{Hl(),_v(Zt)}]],help:[["当前说明",()=>Kn("顶部按钮已连接到 Web 端功能")],["项目路径",()=>Kn("web/index.html")]],language:[["中文",()=>Kn("语言: 中文")],["English",()=>Kn("Language: English labels are partly available")]]}[e];tn(),n.classList.add("active");const i=n.getBoundingClientRect();m.menuPopup.style.left=`${i.left}px`,m.menuPopup.hidden=!1;for(const[r,a]of t){const o=document.createElement("button");o.type="button",o.textContent=r,o.addEventListener("click",()=>{tn(),a()}),m.menuPopup.appendChild(o)}}function Jl(){var e;m.axis.checked=!m.axis.checked;const n=Kt();ga.visible=n.showAxis,ga.scale.setScalar(Math.max(1,n.radius/4.5)),mi&&(mi.visible=n.showAxis),(e=m.toolAxis)==null||e.classList.toggle("active",n.showAxis),render()}function fM(){m.box.checked=!m.box.checked,Kt(),at()}function Qs(n){var t,i;Vl({restoreLayout:!0});const e=n==="overlap";m.viewGrid.classList.toggle("overlap-layout",e),(t=m.toolTile)==null||t.classList.toggle("active",!e),(i=m.toolOverlap)==null||i.classList.toggle("active",e),ln()}function Ji(n){const e=n.querySelector('[data-window-action="minimize"]'),t=n.querySelector('[data-window-action="maximize"]');e&&(e.textContent=n.classList.contains("minimized")?"□":"－"),t&&(t.textContent=n.classList.contains("maximized")?"❐":"□")}function pM(n){const e=n.closest(".qt-window");if(!e)return;const t=n.dataset.windowAction;t==="minimize"?(e.classList.toggle("minimized"),e.classList.contains("minimized")&&e.classList.remove("maximized")):t==="maximize"?(e.classList.remove("minimized"),e.classList.toggle("maximized")):t==="close"&&(e.classList.add("closed"),e.classList.remove("minimized","maximized"),e===m.animationWindow&&Ma()),Ji(e),ln(),e===m.animationWindow&&!e.classList.contains("closed")&&requestAnimationFrame(()=>Br(0))}function Ql(n){var a,o,s;const e=ei,t=Math.max(3,Zt),i=bi(e),r=bi(t,40);n==="xoy"?(Ye.position.set(0,0,i),it.position.set(0,0,r)):n==="yoz"?(Ye.position.set(i,0,0),it.position.set(r,0,0)):n==="xoz"&&(Ye.position.set(0,i,0),it.position.set(0,r,0)),Ye.lookAt(0,0,0),it.lookAt(0,0,0),Gs(e),Ws(t),Ae.target.set(0,0,0),Ct.target.set(0,0,0),Ae.update(),Ct.update(),(a=m.toolXOY)==null||a.classList.toggle("active",n==="xoy"),(o=m.toolYOZ)==null||o.classList.toggle("active",n==="yoz"),(s=m.toolXOZ)==null||s.classList.toggle("active",n==="xoz")}for(const n of[m.n,m.l,m.m,m.z,m.iso,m.density,m.radius,m.opacity,m.mode,m.slice,m.node,m.axis,m.box,m.positiveColor,m.negativeColor,m.backgroundColor,m.desktopMatch,m.boxSizeDisplay,m.cloud,m.positiveLobe,m.negativeLobe,m.wireframe,m.smooth,m.projection,m.radialSection,m.radialSide,m.radialCurve,m.radialAxis,m.longitudeNode,m.grid3d,m.relationMode,m.syncRotation,m.scanRadius,m.scanTheta,m.scanPhi])n&&n.addEventListener("input",()=>{if(n===m.boxSizeDisplay&&Q_(),lt(),Kt(),n===m.backgroundColor){kl(m.backgroundColor.value);return}if([m.relationMode,m.syncRotation,m.scanRadius,m.scanTheta,m.scanPhi].includes(n)){Ys();return}[m.wireframe,m.smooth].includes(n)||(n.type==="checkbox"||n.type==="color")&&at()});for(const n of[m.n,m.l,m.m,m.z,m.desktopMatch])n.addEventListener("change",()=>{Xr(),at()});m.preset.addEventListener("input",oM);m.renderButton.addEventListener("click",at);var sh;(sh=m.redrawProxyButton)==null||sh.addEventListener("click",at);var oh;(oh=m.presetButton)==null||oh.addEventListener("click",()=>{Xr(),at()});var lh;(lh=m.axisProxyButton)==null||lh.addEventListener("click",()=>{Jl()});var ch;(ch=document.querySelector("#colorProxyButton"))==null||ch.addEventListener("click",()=>{m.paletteOne.checked=!m.paletteOne.checked,m.paletteTwo.checked=!m.paletteOne.checked,Rd(m.paletteOne.checked?"one":"two")});m.resetCameraButton.addEventListener("click",()=>Hl());m.screenshotButton.addEventListener("click",Js);for(const n of document.querySelectorAll("[data-window-action]"))n.addEventListener("click",e=>{e.stopPropagation(),pM(n)});for(const n of m.menuItems)n.addEventListener("click",e=>{e.stopPropagation(),dM(n)});document.addEventListener("click",tn);m.menuPopup.addEventListener("click",n=>n.stopPropagation());Zi.addEventListener("click",Pd);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(Cr=!0,Ls(!0)):Cr&&(Cr=!1,Ls(!1))});var uh;(uh=m.toolRender)==null||uh.addEventListener("click",()=>{tn(),at()});var hh;(hh=m.toolSave)==null||hh.addEventListener("click",()=>{tn(),Js()});var dh;(dh=m.toolTile)==null||dh.addEventListener("click",()=>{tn(),Qs("tile")});var fh;(fh=m.toolOverlap)==null||fh.addEventListener("click",()=>{tn(),Qs("overlap")});var ph;(ph=m.toolAxis)==null||ph.addEventListener("click",()=>{tn(),Jl()});var mh;(mh=m.toolXOY)==null||mh.addEventListener("click",()=>{tn(),Ql("xoy")});var gh;(gh=m.toolYOZ)==null||gh.addEventListener("click",()=>{tn(),Ql("yoz")});var _h;(_h=m.toolXOZ)==null||_h.addEventListener("click",()=>{tn(),Ql("xoz")});dn.domElement.addEventListener("click",kv);window.addEventListener("resize",Rs);lM();Yv();K_();Rs();Qs("tile");Xr();Hl();at();Cd();
