(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="165",Jo={ROTATE:0,DOLLY:1,PAN:2},_h=0,Xl=1,xh=2,id=1,vh=2,qn=3,xi=0,$t=1,mt=2,mi=0,yr=1,Hs=2,Yl=3,$l=4,Mh=5,Oi=100,yh=101,Sh=102,Eh=103,bh=104,Th=200,wh=201,Ah=202,Rh=203,Gs=204,Ws=205,Ch=206,Ph=207,Lh=208,Ih=209,Dh=210,Uh=211,Nh=212,Fh=213,Oh=214,Bh=0,zh=1,kh=2,uo=3,Vh=4,Hh=5,Gh=6,Wh=7,Co=0,qh=1,Xh=2,gi=0,Yh=1,$h=2,jh=3,Br=4,Zh=5,Kh=6,Jh=7,rd=300,Rr=301,Cr=302,qs=303,Xs=304,Po=306,Ys=1e3,ki=1001,$s=1002,on=1003,Qh=1004,Ea=1005,xn=1006,Qo=1007,Vi=1008,vi=1009,ef=1010,tf=1011,ho=1012,ad=1013,Pr=1014,fi=1015,Lo=1016,od=1017,sd=1018,Lr=1020,nf=35902,rf=1021,af=1022,Ln=1023,of=1024,sf=1025,Sr=1026,Ir=1027,lf=1028,ld=1029,cf=1030,cd=1031,ud=1033,es=33776,ts=33777,ns=33778,is=33779,jl=35840,Zl=35841,Kl=35842,Jl=35843,Ql=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,ac=37811,oc=37812,sc=37813,lc=37814,cc=37815,uc=37816,dc=37817,hc=37818,fc=37819,pc=37820,mc=37821,rs=36492,gc=36494,_c=36495,uf=36283,xc=36284,vc=36285,Mc=36286,df=3200,hf=3201,Io=0,ff=1,di="",Tt="srgb",yi="srgb-linear",hl="display-p3",Do="display-p3-linear",fo="linear",at="srgb",po="rec709",mo="p3",Ji=7680,yc=519,pf=512,mf=513,gf=514,dd=515,_f=516,xf=517,vf=518,Mf=519,js=35044,ba=35048,Sc="300 es",Yn=2e3,go=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ec=1234567;const Er=Math.PI/180,ua=180/Math.PI;function Kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function fl(n,e){return(n%e+e)%e}function yf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Sf(n,e,t){return n!==e?(t-n)/(e-n):0}function ia(n,e,t){return(1-t)*n+t*e}function Ef(n,e,t,i){return ia(n,e,1-Math.exp(-t*i))}function bf(n,e=1){return e-Math.abs(fl(n,e*2)-e)}function Tf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Af(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Rf(n,e){return n+Math.random()*(e-n)}function Cf(n){return n*(.5-Math.random())}function Pf(n){n!==void 0&&(Ec=n);let e=Ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lf(n){return n*Er}function If(n){return n*ua}function Df(n){return(n&n-1)===0&&n!==0}function Uf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ff(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),u=s((e+i)/2),d=a((e-i)/2),h=s((e-i)/2),f=a((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bc={DEG2RAD:Er,RAD2DEG:ua,generateUUID:Kn,clamp:It,euclideanModulo:fl,mapLinear:yf,inverseLerp:Sf,lerp:ia,damp:Ef,pingpong:bf,smoothstep:Tf,smootherstep:wf,randInt:Af,randFloat:Rf,randFloatSpread:Cf,seededRandom:Pf,degToRad:Lf,radToDeg:If,isPowerOfTwo:Df,ceilPowerOfTwo:Uf,floorPowerOfTwo:Nf,setQuaternionFromProperEuler:Ff,normalize:Ze,denormalize:vn};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,a,s,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],_=i[8],x=r[0],g=r[3],m=r[6],M=r[1],v=r[4],E=r[7],w=r[2],b=r[5],A=r[8];return a[0]=s*x+o*M+l*w,a[3]=s*g+o*v+l*b,a[6]=s*m+o*E+l*A,a[1]=c*x+u*M+d*w,a[4]=c*g+u*v+d*b,a[7]=c*m+u*E+d*A,a[2]=h*x+f*M+_*w,a[5]=h*g+f*v+_*b,a[8]=h*m+f*E+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*a,f=c*a-s*l,_=t*d+i*h+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*s)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*a-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(s*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(as.makeScale(e,t)),this}rotate(e){return this.premultiply(as.makeRotation(-e)),this}translate(e,t){return this.premultiply(as.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const as=new Be;function hd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Of(){const n=_o("canvas");return n.style.display="block",n}const Tc={};function pl(n){n in Tc||(Tc[n]=!0,console.warn(n))}function Bf(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const wc=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ac=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[yi]:{transfer:fo,primaries:po,toReference:n=>n,fromReference:n=>n},[Tt]:{transfer:at,primaries:po,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Do]:{transfer:fo,primaries:mo,toReference:n=>n.applyMatrix3(Ac),fromReference:n=>n.applyMatrix3(wc)},[hl]:{transfer:at,primaries:mo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ac),fromReference:n=>n.applyMatrix3(wc).convertLinearToSRGB()}},zf=new Set([yi,Do]),Ke={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ta[e].toReference,r=Ta[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ta[n].primaries},getTransfer:function(n){return n===di?fo:Ta[n].transfer}};function br(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qi;class kf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=_o("canvas")),Qi.width=e.width,Qi.height=e.height;const i=Qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_o("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=br(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(br(t[i]/255)*255):t[i]=br(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vf=0;class fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ss(r[s].image)):a.push(ss(r[s]))}else a=ss(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function ss(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hf=0;class Wt extends Xi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=ki,r=ki,a=xn,s=Vi,o=Ln,l=vi,c=Wt.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Kn(),this.name="",this.source=new fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case $s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case $s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=rd;Wt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(f+1)/2,w=(m+1)/2,b=(u+h)/4,A=(d+x)/4,C=(_+g)/4;return v>E&&v>w?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=b/i,a=A/i):E>w?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=b/r,a=C/r):w<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),i=A/a,r=C/a),this.set(i,r,a,t),this}let M=Math.sqrt((g-_)*(g-_)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(d-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gf extends Xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends Gf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wf extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=a[s+0],f=a[s+1],_=a[s+2],x=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=_,e[t+3]=x;return}if(d!==x||l!==h||c!==f||u!==_){let g=1-o;const m=l*h+c*f+u*_+d*x,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const w=Math.sqrt(v),b=Math.atan2(w,m*M);g=Math.sin(g*b)/w,o=Math.sin(o*b)/w}const E=o*M;if(l=l*g+h*E,c=c*g+f*E,u=u*g+_*E,d=d*g+x*E,g===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=a[s],h=a[s+1],f=a[s+2],_=a[s+3];return e[t]=o*_+u*d+l*f-c*h,e[t+1]=l*_+u*h+c*d-o*f,e[t+2]=c*_+u*f+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(a/2),h=l(i/2),f=l(r/2),_=l(a/2);switch(s){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(s-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(a+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(a-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(s-r)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),u=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*u,this.y=i+l*u+o*c-a*d,this.z=r+l*d+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ls.copy(this).projectOnVector(e),this.sub(ls)}reflect(e){return this.sub(ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ls=new I,Rc=new zr;class ln{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,hn):hn.fromBufferAttribute(a,s),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Aa.subVectors(this.max,Xr),er.subVectors(e.a,Xr),tr.subVectors(e.b,Xr),nr.subVectors(e.c,Xr),ii.subVectors(tr,er),ri.subVectors(nr,tr),Ci.subVectors(er,nr);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Ci.z,Ci.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Ci.z,0,-Ci.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Ci.y,Ci.x,0];return!cs(t,er,tr,nr,Aa)||(t=[1,0,0,0,1,0,0,0,1],!cs(t,er,tr,nr,Aa))?!1:(Ra.crossVectors(ii,ri),t=[Ra.x,Ra.y,Ra.z],cs(t,er,tr,nr,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new I,new I,new I,new I,new I,new I,new I,new I],hn=new I,wa=new ln,er=new I,tr=new I,nr=new I,ii=new I,ri=new I,Ci=new I,Xr=new I,Aa=new I,Ra=new I,Pi=new I;function cs(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Pi.fromArray(n,a);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qf=new ln,Yr=new I,us=new I;class Si{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qf.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Yr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(us)),this.expandByPoint(Yr.copy(e.center).sub(us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new I,ds=new I,Ca=new I,ai=new I,hs=new I,Pa=new I,fs=new I;class Uo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ds.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ds);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ca),o=ai.dot(this.direction),l=-ai.dot(Ca),c=ai.lengthSq(),u=Math.abs(1-s*s);let d,h,f,_;if(u>0)if(d=s*l-o,h=s*o-l,_=a*u,d>=0)if(h>=-_)if(h<=_){const x=1/u;d*=x,h*=x,f=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=a,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-s*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-a,-l),a),f=h*(h+2*l)+c):(d=Math.max(0,-(s*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+h*(h+2*l)+c);else h=s>0?-a:a,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ds).addScaledVector(Ca,h),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,r,a){hs.subVectors(t,e),Pa.subVectors(i,e),fs.crossVectors(hs,Pa);let s=this.direction.dot(fs),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ai.subVectors(this.origin,e);const l=o*this.direction.dot(Pa.crossVectors(ai,Pa));if(l<0)return null;const c=o*this.direction.dot(hs.cross(ai));if(c<0||l+c>s)return null;const u=-o*ai.dot(fs);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,a,s,o,l,c,u,d,h,f,_,x,g){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,u,d,h,f,_,x,g)}set(e,t,i,r,a,s,o,l,c,u,d,h,f,_,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),a=1/ir.setFromMatrixColumn(e,1).length(),s=1/ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=s*u,f=s*d,_=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=_+f*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,_=c*u,x=c*d;t[0]=h+x*o,t[4]=_*o-f,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=f*o-_,t[6]=x+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,_=c*u,x=c*d;t[0]=h-x*o,t[4]=-s*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=s*u,t[9]=x-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,f=s*d,_=o*u,x=o*d;t[0]=l*u,t[4]=_*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,f=s*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-h*d,t[8]=_*d+f,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+_,t[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,f=s*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=s*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,Yf)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),oi.crossVectors(i,Jt),oi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),oi.crossVectors(i,Jt)),oi.normalize(),La.crossVectors(Jt,oi),r[0]=oi.x,r[4]=La.x,r[8]=Jt.x,r[1]=oi.y,r[5]=La.y,r[9]=Jt.y,r[2]=oi.z,r[6]=La.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],_=i[2],x=i[6],g=i[10],m=i[14],M=i[3],v=i[7],E=i[11],w=i[15],b=r[0],A=r[4],C=r[8],S=r[12],y=r[1],P=r[5],F=r[9],U=r[13],z=r[2],G=r[6],V=r[10],$=r[14],W=r[3],ae=r[7],le=r[11],se=r[15];return a[0]=s*b+o*y+l*z+c*W,a[4]=s*A+o*P+l*G+c*ae,a[8]=s*C+o*F+l*V+c*le,a[12]=s*S+o*U+l*$+c*se,a[1]=u*b+d*y+h*z+f*W,a[5]=u*A+d*P+h*G+f*ae,a[9]=u*C+d*F+h*V+f*le,a[13]=u*S+d*U+h*$+f*se,a[2]=_*b+x*y+g*z+m*W,a[6]=_*A+x*P+g*G+m*ae,a[10]=_*C+x*F+g*V+m*le,a[14]=_*S+x*U+g*$+m*se,a[3]=M*b+v*y+E*z+w*W,a[7]=M*A+v*P+E*G+w*ae,a[11]=M*C+v*F+E*V+w*le,a[15]=M*S+v*U+E*$+w*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],x=e[7],g=e[11],m=e[15];return _*(+a*l*d-r*c*d-a*o*h+i*c*h+r*o*f-i*l*f)+x*(+t*l*f-t*c*h+a*s*h-r*s*f+r*c*u-a*l*u)+g*(+t*c*d-t*o*f-a*s*d+i*s*f+a*o*u-i*c*u)+m*(-r*o*u-t*l*d+t*o*h+r*s*d-i*s*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],x=e[13],g=e[14],m=e[15],M=d*g*c-x*h*c+x*l*f-o*g*f-d*l*m+o*h*m,v=_*h*c-u*g*c-_*l*f+s*g*f+u*l*m-s*h*m,E=u*x*c-_*d*c+_*o*f-s*x*f-u*o*m+s*d*m,w=_*d*l-u*x*l-_*o*h+s*x*h+u*o*g-s*d*g,b=t*M+i*v+r*E+a*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=M*A,e[1]=(x*h*a-d*g*a-x*r*f+i*g*f+d*r*m-i*h*m)*A,e[2]=(o*g*a-x*l*a+x*r*c-i*g*c-o*r*m+i*l*m)*A,e[3]=(d*l*a-o*h*a-d*r*c+i*h*c+o*r*f-i*l*f)*A,e[4]=v*A,e[5]=(u*g*a-_*h*a+_*r*f-t*g*f-u*r*m+t*h*m)*A,e[6]=(_*l*a-s*g*a-_*r*c+t*g*c+s*r*m-t*l*m)*A,e[7]=(s*h*a-u*l*a+u*r*c-t*h*c-s*r*f+t*l*f)*A,e[8]=E*A,e[9]=(_*d*a-u*x*a-_*i*f+t*x*f+u*i*m-t*d*m)*A,e[10]=(s*x*a-_*o*a+_*i*c-t*x*c-s*i*m+t*o*m)*A,e[11]=(u*o*a-s*d*a-u*i*c+t*d*c+s*i*f-t*o*f)*A,e[12]=w*A,e[13]=(u*x*r-_*d*r+_*i*h-t*x*h-u*i*g+t*d*g)*A,e[14]=(_*o*r-s*x*r-_*i*l+t*x*l+s*i*g-t*o*g)*A,e[15]=(s*d*r-u*o*r+u*i*l-t*d*l-s*i*h+t*o*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,d=o+o,h=a*c,f=a*u,_=a*d,x=s*u,g=s*d,m=o*d,M=l*c,v=l*u,E=l*d,w=i.x,b=i.y,A=i.z;return r[0]=(1-(x+m))*w,r[1]=(f+E)*w,r[2]=(_-v)*w,r[3]=0,r[4]=(f-E)*b,r[5]=(1-(h+m))*b,r[6]=(g+M)*b,r[7]=0,r[8]=(_+v)*A,r[9]=(g-M)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=ir.set(r[0],r[1],r[2]).length();const s=ir.set(r[4],r[5],r[6]).length(),o=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const c=1/a,u=1/s,d=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=Yn){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let f,_;if(o===Yn)f=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===go)f=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=Yn){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(s-a),h=(t+e)*c,f=(i+r)*u;let _,x;if(o===Yn)_=(s+a)*d,x=-2*d;else if(o===go)_=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ir=new I,fn=new ot,Xf=new I(0,0,0),Yf=new I(1,1,1),oi=new I,La=new I,Jt=new I,Cc=new ot,Pc=new zr;class cn{constructor(e=0,t=0,i=0,r=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-It(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $f=0;const Lc=new I,rr=new zr,Hn=new ot,Ia=new I,$r=new I,jf=new I,Zf=new zr,Ic=new I(1,0,0),Dc=new I(0,1,0),Uc=new I(0,0,1),Nc={type:"added"},Kf={type:"removed"},ar={type:"childadded",child:null},ps={type:"childremoved",child:null};class gt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new I,t=new cn,i=new zr,r=new I(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Be}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ia.copy(e):Ia.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt($r,Ia,this.up):Hn.lookAt(Ia,$r,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Hn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nc),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kf),ps.child=e,this.dispatchEvent(ps),ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nc),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),f=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new I(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new I,Gn=new I,ms=new I,Wn=new I,or=new I,sr=new I,Fc=new I,gs=new I,_s=new I,xs=new I;class an{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pn.subVectors(e,t),r.cross(pn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){pn.subVectors(r,t),Gn.subVectors(i,t),ms.subVectors(e,t);const s=pn.dot(pn),o=pn.dot(Gn),l=pn.dot(ms),c=Gn.dot(Gn),u=Gn.dot(ms),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,_=(s*u-o*l)*h;return a.set(1-f-_,_,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Wn.x),l.addScaledVector(s,Wn.y),l.addScaledVector(o,Wn.z),l)}static isFrontFacing(e,t,i,r){return pn.subVectors(i,t),Gn.subVectors(e,t),pn.cross(Gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),pn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return an.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;or.subVectors(r,i),sr.subVectors(a,i),gs.subVectors(e,i);const l=or.dot(gs),c=sr.dot(gs);if(l<=0&&c<=0)return t.copy(i);_s.subVectors(e,r);const u=or.dot(_s),d=sr.dot(_s);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(or,s);xs.subVectors(e,a);const f=or.dot(xs),_=sr.dot(xs);if(_>=0&&f<=_)return t.copy(a);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(sr,o);const g=u*_-f*d;if(g<=0&&d-u>=0&&f-_>=0)return Fc.subVectors(a,r),o=(d-u)/(d-u+(f-_)),t.copy(r).addScaledVector(Fc,o);const m=1/(g+x+h);return s=x*m,o=h*m,t.copy(i).addScaledVector(or,s).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Da={h:0,s:0,l:0};function vs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=fl(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=vs(s,a,e+1/3),this.g=vs(s,a,e),this.b=vs(s,a,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Tt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=md[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ke.fromWorkingColorSpace(Pt.copy(this),e),Math.round(It(Pt.r*255,0,255))*65536+Math.round(It(Pt.g*255,0,255))*256+Math.round(It(Pt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,a=Pt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Tt){Ke.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Da);const i=ia(si.h,Da.h,t),r=ia(si.s,Da.s,t),a=ia(si.l,Da.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new xe;xe.NAMES=md;let Jf=0;class On extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=yr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Ws,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gs&&(i.blendSrc=this.blendSrc),this.blendDst!==Ws&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ei extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new I,Ua=new Se;class Dt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==js&&(e.usage=this.usage),e}}class gd extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _d extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tt extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qf=0;const nn=new ot,Ms=new gt,lr=new I,Qt=new ln,jr=new ln,St=new I;class nt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hd(e)?_d:gd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Be().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return Ms.lookAt(e),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Qt.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Qt.min,jr.min),Qt.expandByPoint(St),St.addVectors(Qt.max,jr.max),Qt.expandByPoint(St)):(Qt.expandByPoint(jr.min),Qt.expandByPoint(jr.max))}Qt.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)St.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(St));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)St.fromBufferAttribute(o,c),l&&(lr.fromBufferAttribute(e,c),St.add(lr)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new I,l[C]=new I;const c=new I,u=new I,d=new I,h=new Se,f=new Se,_=new Se,x=new I,g=new I;function m(C,S,y){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,y),h.fromBufferAttribute(a,C),f.fromBufferAttribute(a,S),_.fromBufferAttribute(a,y),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[C].add(x),o[S].add(x),o[y].add(x),l[C].add(g),l[S].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,S=M.length;C<S;++C){const y=M[C],P=y.start,F=y.count;for(let U=P,z=P+F;U<z;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new I,E=new I,w=new I,b=new I;function A(C){w.fromBufferAttribute(r,C),b.copy(w);const S=o[C];v.copy(S),v.sub(w.multiplyScalar(w.dot(S))).normalize(),E.crossVectors(b,S);const P=E.dot(l[C])<0?-1:1;s.setXYZW(C,v.x,v.y,v.z,P)}for(let C=0,S=M.length;C<S;++C){const y=M[C],P=y.start,F=y.count;for(let U=P,z=P+F;U<z;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new I,a=new I,s=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let m=0;m<u;m++)h[_++]=c[f++]}return new Dt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oc=new ot,Li=new Uo,Na=new Si,Bc=new I,cr=new I,ur=new I,dr=new I,ys=new I,Fa=new I,Oa=new Se,Ba=new Se,za=new Se,zc=new I,kc=new I,Vc=new I,ka=new I,Va=new I;class lt extends gt{constructor(e=new nt,t=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Fa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],d=a[l];u!==0&&(ys.fromBufferAttribute(d,e),s?Fa.addScaledVector(ys,u):Fa.addScaledVector(ys.sub(t),u))}t.add(Fa)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(a),Li.copy(e.ray).recast(e.near),!(Na.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Na,Bc)===null||Li.origin.distanceToSquared(Bc)>(e.far-e.near)**2))&&(Oc.copy(a).invert(),Li.copy(e.ray).applyMatrix4(Oc),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const g=h[_],m=s[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let E=M,w=v;E<w;E+=3){const b=o.getX(E),A=o.getX(E+1),C=o.getX(E+2);r=Ha(this,m,e,i,c,u,d,b,A,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=_,m=x;g<m;g+=3){const M=o.getX(g),v=o.getX(g+1),E=o.getX(g+2);r=Ha(this,s,e,i,c,u,d,M,v,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const g=h[_],m=s[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let E=M,w=v;E<w;E+=3){const b=E,A=E+1,C=E+2;r=Ha(this,m,e,i,c,u,d,b,A,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=_,m=x;g<m;g+=3){const M=g,v=g+1,E=g+2;r=Ha(this,s,e,i,c,u,d,M,v,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function ep(n,e,t,i,r,a,s,o){let l;if(e.side===$t?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===xi,o),l===null)return null;Va.copy(o),Va.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Va);return c<t.near||c>t.far?null:{distance:c,point:Va.clone(),object:n}}function Ha(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,cr),n.getVertexPosition(l,ur),n.getVertexPosition(c,dr);const u=ep(n,e,t,i,cr,ur,dr,ka);if(u){r&&(Oa.fromBufferAttribute(r,o),Ba.fromBufferAttribute(r,l),za.fromBufferAttribute(r,c),u.uv=an.getInterpolation(ka,cr,ur,dr,Oa,Ba,za,new Se)),a&&(Oa.fromBufferAttribute(a,o),Ba.fromBufferAttribute(a,l),za.fromBufferAttribute(a,c),u.uv1=an.getInterpolation(ka,cr,ur,dr,Oa,Ba,za,new Se)),s&&(zc.fromBufferAttribute(s,o),kc.fromBufferAttribute(s,l),Vc.fromBufferAttribute(s,c),u.normal=an.getInterpolation(ka,cr,ur,dr,zc,kc,Vc,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};an.getNormal(cr,ur,dr,d.normal),u.face=d}return u}class kr extends nt{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,i,t,e,s,a,0),_("z","y","x",1,-1,i,t,-e,s,a,1),_("x","z","y",1,1,e,i,t,r,s,2),_("x","z","y",1,-1,e,i,-t,r,s,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(d,2));function _(x,g,m,M,v,E,w,b,A,C,S){const y=E/A,P=w/C,F=E/2,U=w/2,z=b/2,G=A+1,V=C+1;let $=0,W=0;const ae=new I;for(let le=0;le<V;le++){const se=le*P-U;for(let Me=0;Me<G;Me++){const Te=Me*y-F;ae[x]=Te*M,ae[g]=se*v,ae[m]=z,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[g]=0,ae[m]=b>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(Me/A),d.push(1-le/C),$+=1}}for(let le=0;le<C;le++)for(let se=0;se<A;se++){const Me=h+se+G*le,Te=h+se+G*(le+1),Y=h+(se+1)+G*(le+1),K=h+(se+1)+G*le;l.push(Me,Te,K),l.push(Te,Y,K),W+=6}o.addGroup(f,W,S),f+=W,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=Dr(n[t]);for(const r in i)e[r]=i[r]}return e}function tp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const np={clone:Dr,merge:Vt};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vd extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new I,Hc=new Se,Gc=new Se;class _n extends vd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Hc,Gc),t.subVectors(Gc,Hc)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,fr=1;class ap extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(hr,fr,e,t);r.layers=this.layers,this.add(r);const a=new _n(hr,fr,e,t);a.layers=this.layers,this.add(a);const s=new _n(hr,fr,e,t);s.layers=this.layers,this.add(s);const o=new _n(hr,fr,e,t);o.layers=this.layers,this.add(o);const l=new _n(hr,fr,e,t);l.layers=this.layers,this.add(l);const c=new _n(hr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Md extends Wt{constructor(e,t,i,r,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class op extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Md(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kr(5,5,5),a=new Jn({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:mi});a.uniforms.tEquirect.value=t;const s=new lt(r,a),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=xn),new ap(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const Ss=new I,sp=new I,lp=new Be;class Ni{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ss.subVectors(i,t).cross(sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ss),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lp.getNormalMatrix(e),r=this.coplanarPoint(Ss).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Si,Ga=new I;class gl{constructor(e=new Ni,t=new Ni,i=new Ni,r=new Ni,a=new Ni,s=new Ni){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],_=r[9],x=r[10],g=r[11],m=r[12],M=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-a,h-c,g-f,E-m).normalize(),i[1].setComponents(l+a,h+c,g+f,E+m).normalize(),i[2].setComponents(l+s,h+u,g+_,E+M).normalize(),i[3].setComponents(l-s,h-u,g-_,E-M).normalize(),i[4].setComponents(l-o,h-d,g-x,E-v).normalize(),t===Yn)i[5].setComponents(l+o,h+d,g+x,E+v).normalize();else if(t===go)i[5].setComponents(o,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yd(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function cp(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,o),d.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let f=0,_=h.length;f<_;f++){const x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class pa extends nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,f=[],_=[],x=[],g=[];for(let m=0;m<u;m++){const M=m*h-s;for(let v=0;v<c;v++){const E=v*d-a;_.push(E,-M,0),x.push(0,0,1),g.push(v/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const v=M+c*m,E=M+c*(m+1),w=M+1+c*(m+1),b=M+1+c*m;f.push(v,E,b),f.push(E,w,b)}this.setIndex(f),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dp=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
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
#endif`,_p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xp=`#ifdef USE_BATCHING
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
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ep=`#ifdef USE_IRIDESCENCE
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
#endif`,bp=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dp=`#define PI 3.141592653589793
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
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Np=`vec3 transformedNormal = objectNormal;
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
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`
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
}`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
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
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
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
#endif`,lm=`struct PhysicalMaterial {
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
}`,cm=`
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
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
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vm=`#if defined( USE_POINTS_UV )
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
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Im=`#ifdef USE_NORMALMAP
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
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$m=`float getShadowMask() {
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
}`,jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u0=`uniform sampler2D t2D;
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
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
}`,g0=`#if DEPTH_PACKING == 3200
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
}`,_0=`#define DISTANCE
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
}`,x0=`#define DISTANCE
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
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
}`,S0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,T0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,A0=`#define MATCAP
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
}`,R0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,P0=`#define NORMAL
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
}`,L0=`#define PHONG
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
}`,I0=`#define PHONG
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
}`,D0=`#define STANDARD
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
}`,U0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,F0=`#define TOON
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
}`,O0=`uniform float size;
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,k0=`uniform vec3 color;
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
}`,V0=`uniform float rotation;
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
}`,H0=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:up,alphahash_pars_fragment:dp,alphamap_fragment:hp,alphamap_pars_fragment:fp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:_p,batching_pars_vertex:xp,batching_vertex:vp,begin_vertex:Mp,beginnormal_vertex:yp,bsdfs:Sp,iridescence_fragment:Ep,bumpmap_pars_fragment:bp,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Rp,color_fragment:Cp,color_pars_fragment:Pp,color_pars_vertex:Lp,color_vertex:Ip,common:Dp,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Np,displacementmap_pars_vertex:Fp,displacementmap_vertex:Op,emissivemap_fragment:Bp,emissivemap_pars_fragment:zp,colorspace_fragment:kp,colorspace_pars_fragment:Vp,envmap_fragment:Hp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Wp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:nm,envmap_vertex:Xp,fog_vertex:Yp,fog_pars_vertex:$p,fog_fragment:jp,fog_pars_fragment:Zp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:Jp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:em,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:rm,lights_phong_fragment:am,lights_phong_pars_fragment:om,lights_physical_fragment:sm,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:um,lights_fragment_end:dm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:_m,map_particle_fragment:xm,map_particle_pars_fragment:vm,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:ym,morphinstance_vertex:Sm,morphcolor_vertex:Em,morphnormal_vertex:bm,morphtarget_pars_vertex:Tm,morphtarget_vertex:wm,normal_fragment_begin:Am,normal_fragment_maps:Rm,normal_pars_fragment:Cm,normal_pars_vertex:Pm,normal_vertex:Lm,normalmap_pars_fragment:Im,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Fm,opaque_fragment:Om,packing:Bm,premultiplied_alpha_fragment:zm,project_vertex:km,dithering_fragment:Vm,dithering_pars_fragment:Hm,roughnessmap_fragment:Gm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:qm,shadowmap_pars_vertex:Xm,shadowmap_vertex:Ym,shadowmask_pars_fragment:$m,skinbase_vertex:jm,skinning_pars_vertex:Zm,skinning_vertex:Km,skinnormal_vertex:Jm,specularmap_fragment:Qm,specularmap_pars_fragment:e0,tonemapping_fragment:t0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:r0,uv_pars_fragment:a0,uv_pars_vertex:o0,uv_vertex:s0,worldpos_vertex:l0,background_vert:c0,background_frag:u0,backgroundCube_vert:d0,backgroundCube_frag:h0,cube_vert:f0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:_0,distanceRGBA_frag:x0,equirect_vert:v0,equirect_frag:M0,linedashed_vert:y0,linedashed_frag:S0,meshbasic_vert:E0,meshbasic_frag:b0,meshlambert_vert:T0,meshlambert_frag:w0,meshmatcap_vert:A0,meshmatcap_frag:R0,meshnormal_vert:C0,meshnormal_frag:P0,meshphong_vert:L0,meshphong_frag:I0,meshphysical_vert:D0,meshphysical_frag:U0,meshtoon_vert:N0,meshtoon_frag:F0,points_vert:O0,points_frag:B0,shadow_vert:z0,shadow_frag:k0,sprite_vert:V0,sprite_frag:H0},de={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Tn={basic:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new xe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Vt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Vt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Vt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Vt([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Vt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Vt([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Vt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Vt([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Vt([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Vt([de.lights,de.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Tn.physical={uniforms:Vt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Wa={r:0,b:0,g:0},Di=new cn,G0=new ot;function W0(n,e,t,i,r,a,s){const o=new xe(0);let l=a===!0?0:1,c,u,d=null,h=0,f=null;function _(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function x(M){let v=!1;const E=_(M);E===null?m(o,l):E&&E.isColor&&(m(E,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===Po)?(u===void 0&&(u=new lt(new kr(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Dr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Di.copy(v.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(Di)),u.material.toneMapped=Ke.getTransfer(E.colorSpace)!==at,(d!==E||h!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new lt(new pa(2,2),new Jn({name:"BackgroundMaterial",uniforms:Dr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(Wa,xd(n)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,v,s)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:x,addToRenderList:g}}function q0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let a=r,s=!1;function o(y,P,F,U,z){let G=!1;const V=d(U,F,P);a!==V&&(a=V,c(a.object)),G=f(y,U,F,z),G&&_(y,U,F,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,E(y,P,F,U),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,P,F){const U=F.wireframe===!0;let z=i[y.id];z===void 0&&(z={},i[y.id]=z);let G=z[P.id];G===void 0&&(G={},z[P.id]=G);let V=G[U];return V===void 0&&(V=h(l()),G[U]=V),V}function h(y){const P=[],F=[],U=[];for(let z=0;z<t;z++)P[z]=0,F[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,P,F,U){const z=a.attributes,G=P.attributes;let V=0;const $=F.getAttributes();for(const W in $)if($[W].location>=0){const le=z[W];let se=G[W];if(se===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),le===void 0||le.attribute!==se||se&&le.data!==se.data)return!0;V++}return a.attributesNum!==V||a.index!==U}function _(y,P,F,U){const z={},G=P.attributes;let V=0;const $=F.getAttributes();for(const W in $)if($[W].location>=0){let le=G[W];le===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(le=y.instanceColor));const se={};se.attribute=le,le&&le.data&&(se.data=le.data),z[W]=se,V++}a.attributes=z,a.attributesNum=V,a.index=U}function x(){const y=a.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function g(y){m(y,0)}function m(y,P){const F=a.newAttributes,U=a.enabledAttributes,z=a.attributeDivisors;F[y]=1,U[y]===0&&(n.enableVertexAttribArray(y),U[y]=1),z[y]!==P&&(n.vertexAttribDivisor(y,P),z[y]=P)}function M(){const y=a.newAttributes,P=a.enabledAttributes;for(let F=0,U=P.length;F<U;F++)P[F]!==y[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function v(y,P,F,U,z,G,V){V===!0?n.vertexAttribIPointer(y,P,F,z,G):n.vertexAttribPointer(y,P,F,U,z,G)}function E(y,P,F,U){x();const z=U.attributes,G=F.getAttributes(),V=P.defaultAttributeValues;for(const $ in G){const W=G[$];if(W.location>=0){let ae=z[$];if(ae===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){const le=ae.normalized,se=ae.itemSize,Me=e.get(ae);if(Me===void 0)continue;const Te=Me.buffer,Y=Me.type,K=Me.bytesPerElement,ue=Y===n.INT||Y===n.UNSIGNED_INT||ae.gpuType===ad;if(ae.isInterleavedBufferAttribute){const O=ae.data,Q=O.stride,me=ae.offset;if(O.isInstancedInterleavedBuffer){for(let Ee=0;Ee<W.locationSize;Ee++)m(W.location+Ee,O.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)g(W.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Ee=0;Ee<W.locationSize;Ee++)v(W.location+Ee,se/W.locationSize,Y,le,Q*K,(me+se/W.locationSize*Ee)*K,ue)}else{if(ae.isInstancedBufferAttribute){for(let O=0;O<W.locationSize;O++)m(W.location+O,ae.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let O=0;O<W.locationSize;O++)g(W.location+O);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let O=0;O<W.locationSize;O++)v(W.location+O,se/W.locationSize,Y,le,se*K,se/W.locationSize*O*K,ue)}}else if(V!==void 0){const le=V[$];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(W.location,le);break;case 3:n.vertexAttrib3fv(W.location,le);break;case 4:n.vertexAttrib4fv(W.location,le);break;default:n.vertexAttrib1fv(W.location,le)}}}}M()}function w(){C();for(const y in i){const P=i[y];for(const F in P){const U=P[F];for(const z in U)u(U[z].object),delete U[z];delete P[F]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const F in P){const U=P[F];for(const z in U)u(U[z].object),delete U[z];delete P[F]}delete i[y.id]}function A(y){for(const P in i){const F=i[P];if(F[y.id]===void 0)continue;const U=F[y.id];for(const z in U)u(U[z].object),delete U[z];delete F[y.id]}}function C(){S(),s=!0,a!==r&&(a=r,c(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function X0(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d;f++)this.render(c[f],u[f]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];t.update(f,i,1)}}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)s(c[_],u[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x];for(let x=0;x<h.length;x++)t.update(_,i,h[x])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Y0(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(b){return!(b!==Ln&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const A=b===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==vi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==fi&&!A)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function $0(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Ni,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!r||_===null||_.length===0||a&&!g)a?u(null):c();else{const M=a?0:i,v=M*4;let E=m.clippingState||null;l.value=E,E=u(_,h,v,f);for(let w=0;w!==v;++w)E[w]=t[w];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,_){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const m=f+x*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,E=f;v!==x;++v,E+=4)s.copy(d[v]).applyMatrix4(M,o),s.normal.toArray(g,E),g[E+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function j0(n){let e=new WeakMap;function t(s,o){return o===qs?s.mapping=Rr:o===Xs&&(s.mapping=Cr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===qs||o===Xs)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new op(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Sn extends vd{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mr=4,Wc=[.125,.215,.35,.446,.526,.582],Bi=20,Es=new Sn,qc=new xe;let bs=null,Ts=0,ws=0,As=!1;const Fi=(1+Math.sqrt(5))/2,pr=1/Fi,Xc=[new I(-Fi,pr,0),new I(Fi,pr,0),new I(-pr,0,Fi),new I(pr,0,Fi),new I(0,Fi,-pr),new I(0,Fi,pr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){bs=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bs,Ts,ws),this._renderer.xr.enabled=As,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bs=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Lo,format:Ln,colorSpace:yi,depthBuffer:!1},r=$c(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z0(a)),this._blurMaterial=K0(a,e,t)}return r}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,i,r){const o=new _n(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(qc),u.toneMapping=gi,u.autoClear=!1;const f=new Ei({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new lt(new kr,f);let x=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(qc),x=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const v=this._cubeSize;qa(r,M*v,m>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Rr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new lt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;qa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Es)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Xc[(r-a-1)%Xc.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new lt(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),x=a/_,g=isFinite(a)?1+Math.floor(u*x):Bi;g>Bi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const m=[];let M=0;for(let A=0;A<Bi;++A){const C=A/x,S=Math.exp(-C*C/2);m.push(S),A===0?M+=S:A<g&&(M+=2*S)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],w=3*E*(r>v-Mr?r-v+Mr:0),b=4*(this._cubeSize-E);qa(t,w,b,3*E,2*E),l.setRenderTarget(t),l.render(d,Es)}}function Z0(n){const e=[],t=[],i=[];let r=n;const a=n-Mr+1+Wc.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-Mr?l=Wc[s-n+Mr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,x=3,g=2,m=1,M=new Float32Array(x*_*f),v=new Float32Array(g*_*f),E=new Float32Array(m*_*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,C=b>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];M.set(S,x*_*b),v.set(h,g*_*b);const y=[b,b,b,b,b,b];E.set(y,m*_*b)}const w=new nt;w.setAttribute("position",new Dt(M,x)),w.setAttribute("uv",new Dt(v,g)),w.setAttribute("faceIndex",new Dt(E,m)),e.push(w),r>Mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $c(n,e,t){const i=new Wi(n,e,t);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function K0(n,e,t){const i=new Float32Array(Bi),r=new I(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_l(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function jc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Zc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function J0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===qs||l===Xs,u=l===Rr||l===Cr;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Yc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Yc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Q0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&pl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function eg(n,e,t,i){const r={},a=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}h.removeEventListener("dispose",s),delete r[h.id];const f=a.get(h);f&&(e.remove(f),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const x=f[_];for(let g=0,m=x.length;g<m;g++)e.update(x[g],n.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,_=d.attributes.position;let x=0;if(f!==null){const M=f.array;x=f.version;for(let v=0,E=M.length;v<E;v+=3){const w=M[v+0],b=M[v+1],A=M[v+2];h.push(w,b,b,A,A,w)}}else if(_!==void 0){const M=_.array;x=_.version;for(let v=0,E=M.length/3-1;v<E;v+=3){const w=v+0,b=v+1,A=v+2;h.push(w,b,b,A,A,w)}}else return;const g=new(hd(h)?_d:gd)(h,1);g.version=x;const m=a.get(d);m&&e.remove(m),a.set(d,g)}function u(d){const h=a.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function tg(n,e,t){let i;function r(h){i=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function l(h,f){n.drawElements(i,f,a,h*s),t.update(f,i,1)}function c(h,f,_){_!==0&&(n.drawElementsInstanced(i,f,a,h*s,_),t.update(f,i,_))}function u(h,f,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<_;g++)this.render(h[g]/s,f[g]);else{x.multiDrawElementsWEBGL(i,f,0,a,h,0,_);let g=0;for(let m=0;m<_;m++)g+=f[m];t.update(g,i,1)}}function d(h,f,_,x){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/s,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,a,h,0,x,0,_);let m=0;for(let M=0;M<_;M++)m+=f[M];for(let M=0;M<x.length;M++)t.update(m,i,x[M])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ng(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ig(n,e,t){const i=new WeakMap,r=new Et;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var f=y;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),g===!0&&(E=3);let w=o.attributes.position.count*E,b=1;w>e.maxTextureSize&&(b=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*b*4*d),C=new pd(A,w,b,d);C.type=fi,C.needsUpdate=!0;const S=E*4;for(let P=0;P<d;P++){const F=m[P],U=M[P],z=v[P],G=w*b*4*P;for(let V=0;V<F.count;V++){const $=V*S;_===!0&&(r.fromBufferAttribute(F,V),A[G+$+0]=r.x,A[G+$+1]=r.y,A[G+$+2]=r.z,A[G+$+3]=0),x===!0&&(r.fromBufferAttribute(U,V),A[G+$+4]=r.x,A[G+$+5]=r.y,A[G+$+6]=r.z,A[G+$+7]=0),g===!0&&(r.fromBufferAttribute(z,V),A[G+$+8]=r.x,A[G+$+9]=r.y,A[G+$+10]=r.z,A[G+$+11]=z.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Se(w,b)},i.set(o,h),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function rg(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Sd extends Wt{constructor(e,t,i,r,a,s,o,l,c,u=Sr){if(u!==Sr&&u!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Sr&&(i=Pr),i===void 0&&u===Ir&&(i=Lr),super(null,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ed=new Wt,bd=new Sd(1,1);bd.compareFunction=dd;const Td=new pd,wd=new Wf,Ad=new Md,Kc=[],Jc=[],Qc=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function Vr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Kc[r];if(a===void 0&&(a=new Float32Array(r),Kc[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function No(n,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function cg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),vt(t,i)}}function ug(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;eu.set(i),n.uniformMatrix3fv(this.addr,!1,eu),vt(t,i)}}function dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),vt(t,i)}}function hg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function gg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function Mg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?bd:Ed;t.setTexture2D(e||a,r)}function yg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wd,r)}function Sg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ad,r)}function Eg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Td,r)}function bg(n){switch(n){case 5126:return ag;case 35664:return og;case 35665:return sg;case 35666:return lg;case 35674:return cg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Eg}}function Tg(n,e){n.uniform1fv(this.addr,e)}function wg(n,e){const t=Vr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ag(n,e){const t=Vr(e,this.size,3);n.uniform3fv(this.addr,t)}function Rg(n,e){const t=Vr(e,this.size,4);n.uniform4fv(this.addr,t)}function Cg(n,e){const t=Vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Pg(n,e){const t=Vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Lg(n,e){const t=Vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ig(n,e){n.uniform1iv(this.addr,e)}function Dg(n,e){n.uniform2iv(this.addr,e)}function Ug(n,e){n.uniform3iv(this.addr,e)}function Ng(n,e){n.uniform4iv(this.addr,e)}function Fg(n,e){n.uniform1uiv(this.addr,e)}function Og(n,e){n.uniform2uiv(this.addr,e)}function Bg(n,e){n.uniform3uiv(this.addr,e)}function zg(n,e){n.uniform4uiv(this.addr,e)}function kg(n,e,t){const i=this.cache,r=e.length,a=No(t,r);xt(i,a)||(n.uniform1iv(this.addr,a),vt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Ed,a[s])}function Vg(n,e,t){const i=this.cache,r=e.length,a=No(t,r);xt(i,a)||(n.uniform1iv(this.addr,a),vt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||wd,a[s])}function Hg(n,e,t){const i=this.cache,r=e.length,a=No(t,r);xt(i,a)||(n.uniform1iv(this.addr,a),vt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Ad,a[s])}function Gg(n,e,t){const i=this.cache,r=e.length,a=No(t,r);xt(i,a)||(n.uniform1iv(this.addr,a),vt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Td,a[s])}function Wg(n){switch(n){case 5126:return Tg;case 35664:return wg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Ig;case 35667:case 35671:return Dg;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return Fg;case 36294:return Og;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}class qg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bg(t.type)}}class Xg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wg(t.type)}}class Yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function nu(n,e){n.seq.push(e),n.map[e.id]=e}function $g(n,e,t){const i=n.name,r=i.length;for(Rs.lastIndex=0;;){const a=Rs.exec(i),s=Rs.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){nu(t,c===void 0?new qg(o,n,e):new Xg(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Yg(o),nu(t,d)),t=d}}}class lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);$g(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function iu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jg=37297;let Zg=0;function Kg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function Jg(n){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(n);let i;switch(e===t?i="":e===mo&&t===po?i="LinearDisplayP3ToLinearSRGB":e===po&&t===mo&&(i="LinearSRGBToLinearDisplayP3"),n){case yi:case Do:return[i,"LinearTransferOETF"];case Tt:case hl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ru(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Kg(n.getShaderSource(e),s)}else return r}function Qg(n,e){const t=Jg(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function e1(n,e){let t;switch(e){case Yh:t="Linear";break;case $h:t="Reinhard";break;case jh:t="OptimizedCineon";break;case Br:t="ACESFilmic";break;case Kh:t="AgX";break;case Jh:t="Neutral";break;case Zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function t1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function n1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function i1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function ta(n){return n!==""}function au(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(n){return n.replace(r1,o1)}const a1=new Map;function o1(n,e){let t=Oe[e];if(t===void 0){const i=a1.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zs(t)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(n){return n.replace(s1,l1)}function l1(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function lu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function c1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===id?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function u1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function h1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Co:e="ENVMAP_BLENDING_MULTIPLY";break;case qh:e="ENVMAP_BLENDING_MIX";break;case Xh:e="ENVMAP_BLENDING_ADD";break}return e}function f1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function p1(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=c1(t),c=u1(t),u=d1(t),d=h1(t),h=f1(t),f=t1(t),_=n1(a),x=r.createProgram();let g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ta).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ta).join(`
`),m.length>0&&(m+=`
`)):(g=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),m=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==gi?e1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Qg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),s=Zs(s),s=au(s,t),s=ou(s,t),o=Zs(o),o=au(o,t),o=ou(o,t),s=su(s),o=su(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+g+s,E=M+m+o,w=iu(r,r.VERTEX_SHADER,v),b=iu(r,r.FRAGMENT_SHADER,E);r.attachShader(x,w),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(x).trim(),U=r.getShaderInfoLog(w).trim(),z=r.getShaderInfoLog(b).trim();let G=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,w,b);else{const $=ru(r,w,"vertex"),W=ru(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+$+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||z==="")&&(V=!1);V&&(P.diagnostics={runnable:G,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:z,prefix:m}})}r.deleteShader(w),r.deleteShader(b),C=new lo(r,x),S=i1(r,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,jg)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=b,this}let m1=0;class g1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _1(e),t.set(e,i)),i}}class _1{constructor(e){this.id=m1++,this.code=e,this.usedTimes=0}}function x1(n,e,t,i,r,a,s){const o=new ml,l=new g1,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,y,P,F,U){const z=F.fog,G=U.geometry,V=S.isMeshStandardMaterial?F.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),W=$&&$.mapping===Po?$.image.height:null,ae=_[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=le!==void 0?le.length:0;let Me=0;G.morphAttributes.position!==void 0&&(Me=1),G.morphAttributes.normal!==void 0&&(Me=2),G.morphAttributes.color!==void 0&&(Me=3);let Te,Y,K,ue;if(ae){const Qe=Tn[ae];Te=Qe.vertexShader,Y=Qe.fragmentShader}else Te=S.vertexShader,Y=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const O=n.getRenderTarget(),Q=U.isInstancedMesh===!0,me=U.isBatchedMesh===!0,Ee=!!S.map,D=!!S.matcap,ce=!!$,Ne=!!S.aoMap,Je=!!S.lightMap,Pe=!!S.bumpMap,We=!!S.normalMap,Ve=!!S.displacementMap,Fe=!!S.emissiveMap,ft=!!S.metalnessMap,L=!!S.roughnessMap,T=S.anisotropy>0,X=S.clearcoat>0,J=S.dispersion>0,ee=S.iridescence>0,te=S.sheen>0,Re=S.transmission>0,he=T&&!!S.anisotropyMap,fe=X&&!!S.clearcoatMap,ze=X&&!!S.clearcoatNormalMap,ne=X&&!!S.clearcoatRoughnessMap,be=ee&&!!S.iridescenceMap,He=ee&&!!S.iridescenceThicknessMap,De=te&&!!S.sheenColorMap,pe=te&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Ge=!!S.specularColorMap,dt=!!S.specularIntensityMap,N=Re&&!!S.transmissionMap,ge=Re&&!!S.thicknessMap,j=!!S.gradientMap,Z=!!S.alphaMap,oe=S.alphaTest>0,Ue=!!S.alphaHash,qe=!!S.extensions;let ht=gi;S.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ht=n.toneMapping);const Mt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Te,fragmentShader:Y,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:me,batchingColor:me&&U._colorsTexture!==null,instancing:Q,instancingColor:Q&&U.instanceColor!==null,instancingMorph:Q&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:yi,alphaToCoverage:!!S.alphaToCoverage,map:Ee,matcap:D,envMap:ce,envMapMode:ce&&$.mapping,envMapCubeUVHeight:W,aoMap:Ne,lightMap:Je,bumpMap:Pe,normalMap:We,displacementMap:h&&Ve,emissiveMap:Fe,normalMapObjectSpace:We&&S.normalMapType===ff,normalMapTangentSpace:We&&S.normalMapType===Io,metalnessMap:ft,roughnessMap:L,anisotropy:T,anisotropyMap:he,clearcoat:X,clearcoatMap:fe,clearcoatNormalMap:ze,clearcoatRoughnessMap:ne,dispersion:J,iridescence:ee,iridescenceMap:be,iridescenceThicknessMap:He,sheen:te,sheenColorMap:De,sheenRoughnessMap:pe,specularMap:ke,specularColorMap:Ge,specularIntensityMap:dt,transmission:Re,transmissionMap:N,thicknessMap:ge,gradientMap:j,opaque:S.transparent===!1&&S.blending===yr&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:oe,alphaHash:Ue,combine:S.combine,mapUv:Ee&&x(S.map.channel),aoMapUv:Ne&&x(S.aoMap.channel),lightMapUv:Je&&x(S.lightMap.channel),bumpMapUv:Pe&&x(S.bumpMap.channel),normalMapUv:We&&x(S.normalMap.channel),displacementMapUv:Ve&&x(S.displacementMap.channel),emissiveMapUv:Fe&&x(S.emissiveMap.channel),metalnessMapUv:ft&&x(S.metalnessMap.channel),roughnessMapUv:L&&x(S.roughnessMap.channel),anisotropyMapUv:he&&x(S.anisotropyMap.channel),clearcoatMapUv:fe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ze&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:pe&&x(S.sheenRoughnessMap.channel),specularMapUv:ke&&x(S.specularMap.channel),specularColorMapUv:Ge&&x(S.specularColorMap.channel),specularIntensityMapUv:dt&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:ge&&x(S.thicknessMap.channel),alphaMapUv:Z&&x(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(We||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Ee||Z),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ee&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mt,flipSided:S.side===$t,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qe&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(y,S),v(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),S.push(o.mask)}function E(S){const y=_[S.type];let P;if(y){const F=Tn[y];P=np.clone(F.uniforms)}else P=S.uniforms;return P}function w(S,y){let P;for(let F=0,U=u.length;F<U;F++){const z=u[F];if(z.cacheKey===y){P=z,++P.usedTimes;break}}return P===void 0&&(P=new p1(n,y,S,a),u.push(P)),P}function b(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:C}}function v1(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function i(a,s,o){n.get(a)[s]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function M1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d,h,f,_,x,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:x,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=x,m.group=g),e++,m}function o(d,h,f,_,x,g){const m=s(d,h,f,_,x,g);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function l(d,h,f,_,x,g){const m=s(d,h,f,_,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||M1),i.length>1&&i.sort(h||cu),r.length>1&&r.sort(h||cu)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function y1(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new uu,n.set(i,[s])):r>=a.length?(s=new uu,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function S1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new xe};break;case"SpotLight":t={position:new I,direction:new I,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function E1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let b1=0;function T1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function w1(n){const e=new S1,t=E1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,a=new ot,s=new ot;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,_=0,x=0,g=0,m=0,M=0,v=0,E=0,w=0,b=0,A=0;c.sort(T1);for(let S=0,y=c.length;S<y;S++){const P=c[S],F=P.color,U=P.intensity,z=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*U,d+=F.g*U,h+=F.b*U;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],U);A++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,W=t.get(P);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=P.shadow.matrix,M++}i.directional[f]=V,f++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(F).multiplyScalar(U),V.distance=z,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[x]=V;const $=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,$.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[x]=$.matrix,P.castShadow){const W=t.get(P);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=G,E++}x++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(F).multiplyScalar(U),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=V,g++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const $=P.shadow,W=t.get(P);W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=V,_++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(U),V.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[m]=V,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==M||C.numPointShadows!==v||C.numSpotShadows!==E||C.numSpotMaps!==w||C.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,C.directionalLength=f,C.pointLength=_,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=M,C.numPointShadows=v,C.numSpotShadows=E,C.numSpotMaps=w,C.numLightProbes=A,i.version=b1++)}function l(c,u){let d=0,h=0,f=0,_=0,x=0;const g=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),d++}else if(v.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),s.identity(),a.copy(v.matrixWorld),a.premultiply(g),s.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),_++}else if(v.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function du(n){const e=new w1(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function A1(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new du(n),e.set(r,[o])):a>=s.length?(o=new du(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class R1 extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C1 extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const P1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L1=`uniform sampler2D shadow_pass;
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
}`;function I1(n,e,t){let i=new gl;const r=new Se,a=new Se,s=new Et,o=new R1({depthPacking:hf}),l=new C1,c={},u=t.maxTextureSize,d={[xi]:$t,[$t]:xi,[mt]:mt},h=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:P1,fragmentShader:L1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new nt;_.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new lt(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let m=this.type;this.render=function(b,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(mi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=m!==qn&&this.type===qn,z=m===qn&&this.type!==qn;for(let G=0,V=b.length;G<V;G++){const $=b[G],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ae=W.getFrameExtents();if(r.multiply(ae),a.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ae.x),r.x=a.x*ae.x,W.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ae.y),r.y=a.y*ae.y,W.mapSize.y=a.y)),W.map===null||U===!0||z===!0){const se=this.type!==qn?{minFilter:on,magFilter:on}:{};W.map!==null&&W.map.dispose(),W.map=new Wi(r.x,r.y,se),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const le=W.getViewportCount();for(let se=0;se<le;se++){const Me=W.getViewport(se);s.set(a.x*Me.x,a.y*Me.y,a.x*Me.z,a.y*Me.w),F.viewport(s),W.updateMatrices($,se),i=W.getFrustum(),E(A,C,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===qn&&M(W,C),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,y,P)};function M(b,A){const C=e.update(x);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Wi(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,C,h,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,C,f,x,null)}function v(b,A,C,S){let y=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=y.uuid,U=A.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let G=z[U];G===void 0&&(G=y.clone(),z[U]=G,A.addEventListener("dispose",w)),y=G}if(y.visible=A.visible,y.wireframe=A.wireframe,S===qn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=n.properties.get(y);F.light=C}return y}function E(b,A,C,S,y){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===qn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const U=e.update(b),z=b.material;if(Array.isArray(z)){const G=U.groups;for(let V=0,$=G.length;V<$;V++){const W=G[V],ae=z[W.materialIndex];if(ae&&ae.visible){const le=v(b,ae,S,y);b.onBeforeShadow(n,b,A,C,U,le,W),n.renderBufferDirect(C,null,U,le,b,W),b.onAfterShadow(n,b,A,C,U,le,W)}}}else if(z.visible){const G=v(b,z,S,y);b.onBeforeShadow(n,b,A,C,U,G,null),n.renderBufferDirect(C,null,U,G,b,null),b.onAfterShadow(n,b,A,C,U,G,null)}}const F=b.children;for(let U=0,z=F.length;U<z;U++)E(F[U],A,C,S,y)}function w(b){b.target.removeEventListener("dispose",w);for(const C in c){const S=c[C],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function D1(n){function e(){let N=!1;const ge=new Et;let j=null;const Z=new Et(0,0,0,0);return{setMask:function(oe){j!==oe&&!N&&(n.colorMask(oe,oe,oe,oe),j=oe)},setLocked:function(oe){N=oe},setClear:function(oe,Ue,qe,ht,Mt){Mt===!0&&(oe*=ht,Ue*=ht,qe*=ht),ge.set(oe,Ue,qe,ht),Z.equals(ge)===!1&&(n.clearColor(oe,Ue,qe,ht),Z.copy(ge))},reset:function(){N=!1,j=null,Z.set(-1,0,0,0)}}}function t(){let N=!1,ge=null,j=null,Z=null;return{setTest:function(oe){oe?ue(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(oe){ge!==oe&&!N&&(n.depthMask(oe),ge=oe)},setFunc:function(oe){if(j!==oe){switch(oe){case Bh:n.depthFunc(n.NEVER);break;case zh:n.depthFunc(n.ALWAYS);break;case kh:n.depthFunc(n.LESS);break;case uo:n.depthFunc(n.LEQUAL);break;case Vh:n.depthFunc(n.EQUAL);break;case Hh:n.depthFunc(n.GEQUAL);break;case Gh:n.depthFunc(n.GREATER);break;case Wh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=oe}},setLocked:function(oe){N=oe},setClear:function(oe){Z!==oe&&(n.clearDepth(oe),Z=oe)},reset:function(){N=!1,ge=null,j=null,Z=null}}}function i(){let N=!1,ge=null,j=null,Z=null,oe=null,Ue=null,qe=null,ht=null,Mt=null;return{setTest:function(Qe){N||(Qe?ue(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(Qe){ge!==Qe&&!N&&(n.stencilMask(Qe),ge=Qe)},setFunc:function(Qe,En,bn){(j!==Qe||Z!==En||oe!==bn)&&(n.stencilFunc(Qe,En,bn),j=Qe,Z=En,oe=bn)},setOp:function(Qe,En,bn){(Ue!==Qe||qe!==En||ht!==bn)&&(n.stencilOp(Qe,En,bn),Ue=Qe,qe=En,ht=bn)},setLocked:function(Qe){N=Qe},setClear:function(Qe){Mt!==Qe&&(n.clearStencil(Qe),Mt=Qe)},reset:function(){N=!1,ge=null,j=null,Z=null,oe=null,Ue=null,qe=null,ht=null,Mt=null}}}const r=new e,a=new t,s=new i,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,_=!1,x=null,g=null,m=null,M=null,v=null,E=null,w=null,b=new xe(0,0,0),A=0,C=!1,S=null,y=null,P=null,F=null,U=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,V=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),G=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=V>=2);let W=null,ae={};const le=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Me=new Et().fromArray(le),Te=new Et().fromArray(se);function Y(N,ge,j,Z){const oe=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(N,Ue),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<j;qe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(ge+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return Ue}const K={};K[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),ue(n.DEPTH_TEST),a.setFunc(uo),Pe(!1),We(Xl),ue(n.CULL_FACE),Ne(mi);function ue(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function O(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Q(N,ge){return u[N]!==ge?(n.bindFramebuffer(N,ge),u[N]=ge,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function me(N,ge){let j=h,Z=!1;if(N){j=d.get(ge),j===void 0&&(j=[],d.set(ge,j));const oe=N.textures;if(j.length!==oe.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,qe=oe.length;Ue<qe;Ue++)j[Ue]=n.COLOR_ATTACHMENT0+Ue;j.length=oe.length,Z=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,Z=!0);Z&&n.drawBuffers(j)}function Ee(N){return f!==N?(n.useProgram(N),f=N,!0):!1}const D={[Oi]:n.FUNC_ADD,[yh]:n.FUNC_SUBTRACT,[Sh]:n.FUNC_REVERSE_SUBTRACT};D[Eh]=n.MIN,D[bh]=n.MAX;const ce={[Th]:n.ZERO,[wh]:n.ONE,[Ah]:n.SRC_COLOR,[Gs]:n.SRC_ALPHA,[Dh]:n.SRC_ALPHA_SATURATE,[Lh]:n.DST_COLOR,[Ch]:n.DST_ALPHA,[Rh]:n.ONE_MINUS_SRC_COLOR,[Ws]:n.ONE_MINUS_SRC_ALPHA,[Ih]:n.ONE_MINUS_DST_COLOR,[Ph]:n.ONE_MINUS_DST_ALPHA,[Uh]:n.CONSTANT_COLOR,[Nh]:n.ONE_MINUS_CONSTANT_COLOR,[Fh]:n.CONSTANT_ALPHA,[Oh]:n.ONE_MINUS_CONSTANT_ALPHA};function Ne(N,ge,j,Z,oe,Ue,qe,ht,Mt,Qe){if(N===mi){_===!0&&(O(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),N!==Mh){if(N!==x||Qe!==C){if((g!==Oi||v!==Oi)&&(n.blendEquation(n.FUNC_ADD),g=Oi,v=Oi),Qe)switch(N){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hs:n.blendFunc(n.ONE,n.ONE);break;case Yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $l:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,M=null,E=null,w=null,b.set(0,0,0),A=0,x=N,C=Qe}return}oe=oe||ge,Ue=Ue||j,qe=qe||Z,(ge!==g||oe!==v)&&(n.blendEquationSeparate(D[ge],D[oe]),g=ge,v=oe),(j!==m||Z!==M||Ue!==E||qe!==w)&&(n.blendFuncSeparate(ce[j],ce[Z],ce[Ue],ce[qe]),m=j,M=Z,E=Ue,w=qe),(ht.equals(b)===!1||Mt!==A)&&(n.blendColor(ht.r,ht.g,ht.b,Mt),b.copy(ht),A=Mt),x=N,C=!1}function Je(N,ge){N.side===mt?O(n.CULL_FACE):ue(n.CULL_FACE);let j=N.side===$t;ge&&(j=!j),Pe(j),N.blending===yr&&N.transparent===!1?Ne(mi):Ne(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Z=N.stencilWrite;s.setTest(Z),Z&&(s.setMask(N.stencilWriteMask),s.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),s.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function We(N){N!==_h?(ue(n.CULL_FACE),N!==y&&(N===Xl?n.cullFace(n.BACK):N===xh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),y=N}function Ve(N){N!==P&&(G&&n.lineWidth(N),P=N)}function Fe(N,ge,j){N?(ue(n.POLYGON_OFFSET_FILL),(F!==ge||U!==j)&&(n.polygonOffset(ge,j),F=ge,U=j)):O(n.POLYGON_OFFSET_FILL)}function ft(N){N?ue(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function L(N){N===void 0&&(N=n.TEXTURE0+z-1),W!==N&&(n.activeTexture(N),W=N)}function T(N,ge,j){j===void 0&&(W===null?j=n.TEXTURE0+z-1:j=W);let Z=ae[j];Z===void 0&&(Z={type:void 0,texture:void 0},ae[j]=Z),(Z.type!==N||Z.texture!==ge)&&(W!==j&&(n.activeTexture(j),W=j),n.bindTexture(N,ge||K[N]),Z.type=N,Z.texture=ge)}function X(){const N=ae[W];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(N){Me.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Me.copy(N))}function pe(N){Te.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Te.copy(N))}function ke(N,ge){let j=l.get(ge);j===void 0&&(j=new WeakMap,l.set(ge,j));let Z=j.get(N);Z===void 0&&(Z=n.getUniformBlockIndex(ge,N.name),j.set(N,Z))}function Ge(N,ge){const Z=l.get(ge).get(N);o.get(ge)!==Z&&(n.uniformBlockBinding(ge,Z,N.__bindingPointIndex),o.set(ge,Z))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,ae={},u={},d=new WeakMap,h=[],f=null,_=!1,x=null,g=null,m=null,M=null,v=null,E=null,w=null,b=new xe(0,0,0),A=0,C=!1,S=null,y=null,P=null,F=null,U=null,Me.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:ue,disable:O,bindFramebuffer:Q,drawBuffers:me,useProgram:Ee,setBlending:Ne,setMaterial:Je,setFlipSided:Pe,setCullFace:We,setLineWidth:Ve,setPolygonOffset:Fe,setScissorTest:ft,activeTexture:L,bindTexture:T,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:be,texImage3D:He,updateUBOMapping:ke,uniformBlockBinding:Ge,texStorage2D:ze,texStorage3D:ne,texSubImage2D:te,texSubImage3D:Re,compressedTexSubImage2D:he,compressedTexSubImage3D:fe,scissor:De,viewport:pe,reset:dt}}function U1(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return f?new OffscreenCanvas(L,T):_o("canvas")}function x(L,T,X){let J=1;const ee=ft(L);if((ee.width>X||ee.height>X)&&(J=X/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const te=Math.floor(J*ee.width),Re=Math.floor(J*ee.height);d===void 0&&(d=_(te,Re));const he=T?_(te,Re):d;return he.width=te,he.height=Re,he.getContext("2d").drawImage(L,0,0,te,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+Re+")."),he}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==on&&L.minFilter!==xn}function m(L){n.generateMipmap(L)}function M(L,T,X,J,ee=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=T;if(T===n.RED&&(X===n.FLOAT&&(te=n.R32F),X===n.HALF_FLOAT&&(te=n.R16F),X===n.UNSIGNED_BYTE&&(te=n.R8)),T===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(te=n.R8UI),X===n.UNSIGNED_SHORT&&(te=n.R16UI),X===n.UNSIGNED_INT&&(te=n.R32UI),X===n.BYTE&&(te=n.R8I),X===n.SHORT&&(te=n.R16I),X===n.INT&&(te=n.R32I)),T===n.RG&&(X===n.FLOAT&&(te=n.RG32F),X===n.HALF_FLOAT&&(te=n.RG16F),X===n.UNSIGNED_BYTE&&(te=n.RG8)),T===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(te=n.RG8UI),X===n.UNSIGNED_SHORT&&(te=n.RG16UI),X===n.UNSIGNED_INT&&(te=n.RG32UI),X===n.BYTE&&(te=n.RG8I),X===n.SHORT&&(te=n.RG16I),X===n.INT&&(te=n.RG32I)),T===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),T===n.RGBA){const Re=ee?fo:Ke.getTransfer(J);X===n.FLOAT&&(te=n.RGBA32F),X===n.HALF_FLOAT&&(te=n.RGBA16F),X===n.UNSIGNED_BYTE&&(te=Re===at?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(L,T){let X;return L?T===null||T===Pr||T===Lr?X=n.DEPTH24_STENCIL8:T===fi?X=n.DEPTH32F_STENCIL8:T===ho&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pr||T===Lr?X=n.DEPTH_COMPONENT24:T===fi?X=n.DEPTH_COMPONENT32F:T===ho&&(X=n.DEPTH_COMPONENT16),X}function E(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==on&&L.minFilter!==xn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function w(L){const T=L.target;T.removeEventListener("dispose",w),A(T),T.isVideoTexture&&u.delete(T)}function b(L){const T=L.target;T.removeEventListener("dispose",b),S(T)}function A(L){const T=i.get(L);if(T.__webglInit===void 0)return;const X=L.source,J=h.get(X);if(J){const ee=J[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(L),Object.keys(J).length===0&&h.delete(X)}i.remove(L)}function C(L){const T=i.get(L);n.deleteTexture(T.__webglTexture);const X=L.source,J=h.get(X);delete J[T.__cacheKey],s.memory.textures--}function S(L){const T=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let ee=0;ee<T.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)n.deleteFramebuffer(T.__webglFramebuffer[J]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=L.textures;for(let J=0,ee=X.length;J<ee;J++){const te=i.get(X[J]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),s.memory.textures--),i.remove(X[J])}i.remove(L)}let y=0;function P(){y=0}function F(){const L=y;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),y+=1,L}function U(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function z(L,T){const X=i.get(L);if(L.isVideoTexture&&Ve(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(X,L,T);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+T)}function G(L,T){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Te(X,L,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+T)}function V(L,T){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Te(X,L,T);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+T)}function $(L,T){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Y(X,L,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+T)}const W={[Ys]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[$s]:n.MIRRORED_REPEAT},ae={[on]:n.NEAREST,[Qh]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Qo]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},le={[pf]:n.NEVER,[Mf]:n.ALWAYS,[mf]:n.LESS,[dd]:n.LEQUAL,[gf]:n.EQUAL,[vf]:n.GEQUAL,[_f]:n.GREATER,[xf]:n.NOTEQUAL};function se(L,T){if(T.type===fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===xn||T.magFilter===Qo||T.magFilter===Ea||T.magFilter===Vi||T.minFilter===xn||T.minFilter===Qo||T.minFilter===Ea||T.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,W[T.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,W[T.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,W[T.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ae[T.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ae[T.minFilter]),T.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,le[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===on||T.minFilter!==Ea&&T.minFilter!==Vi||T.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Me(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",w));const J=T.source;let ee=h.get(J);ee===void 0&&(ee={},h.set(J,ee));const te=U(T);if(te!==L.__cacheKey){ee[te]===void 0&&(ee[te]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,X=!0),ee[te].usedTimes++;const Re=ee[L.__cacheKey];Re!==void 0&&(ee[L.__cacheKey].usedTimes--,Re.usedTimes===0&&C(T)),L.__cacheKey=te,L.__webglTexture=ee[te].texture}return X}function Te(L,T,X){let J=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=n.TEXTURE_3D);const ee=Me(L,T),te=T.source;t.bindTexture(J,L.__webglTexture,n.TEXTURE0+X);const Re=i.get(te);if(te.version!==Re.__version||ee===!0){t.activeTexture(n.TEXTURE0+X);const he=Ke.getPrimaries(Ke.workingColorSpace),fe=T.colorSpace===di?null:Ke.getPrimaries(T.colorSpace),ze=T.colorSpace===di||he===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ne=x(T.image,!1,r.maxTextureSize);ne=Fe(T,ne);const be=a.convert(T.format,T.colorSpace),He=a.convert(T.type);let De=M(T.internalFormat,be,He,T.colorSpace,T.isVideoTexture);se(J,T);let pe;const ke=T.mipmaps,Ge=T.isVideoTexture!==!0,dt=Re.__version===void 0||ee===!0,N=te.dataReady,ge=E(T,ne);if(T.isDepthTexture)De=v(T.format===Ir,T.type),dt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,De,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,De,ne.width,ne.height,0,be,He,null));else if(T.isDataTexture)if(ke.length>0){Ge&&dt&&t.texStorage2D(n.TEXTURE_2D,ge,De,ke[0].width,ke[0].height);for(let j=0,Z=ke.length;j<Z;j++)pe=ke[j],Ge?N&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,be,He,pe.data):t.texImage2D(n.TEXTURE_2D,j,De,pe.width,pe.height,0,be,He,pe.data);T.generateMipmaps=!1}else Ge?(dt&&t.texStorage2D(n.TEXTURE_2D,ge,De,ne.width,ne.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,be,He,ne.data)):t.texImage2D(n.TEXTURE_2D,0,De,ne.width,ne.height,0,be,He,ne.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,De,ke[0].width,ke[0].height,ne.depth);for(let j=0,Z=ke.length;j<Z;j++)if(pe=ke[j],T.format!==Ln)if(be!==null)if(Ge){if(N)if(T.layerUpdates.size>0){for(const oe of T.layerUpdates){const Ue=pe.width*pe.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,oe,pe.width,pe.height,1,be,pe.data.slice(Ue*oe,Ue*(oe+1)),0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,ne.depth,be,pe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,De,pe.width,pe.height,ne.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,ne.depth,be,He,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,De,pe.width,pe.height,ne.depth,0,be,He,pe.data)}else{Ge&&dt&&t.texStorage2D(n.TEXTURE_2D,ge,De,ke[0].width,ke[0].height);for(let j=0,Z=ke.length;j<Z;j++)pe=ke[j],T.format!==Ln?be!==null?Ge?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,be,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,j,De,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?N&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,be,He,pe.data):t.texImage2D(n.TEXTURE_2D,j,De,pe.width,pe.height,0,be,He,pe.data)}else if(T.isDataArrayTexture)if(Ge){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,De,ne.width,ne.height,ne.depth),N)if(T.layerUpdates.size>0){let j;switch(He){case n.UNSIGNED_BYTE:switch(be){case n.ALPHA:j=1;break;case n.LUMINANCE:j=1;break;case n.LUMINANCE_ALPHA:j=2;break;case n.RGB:j=3;break;case n.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${be}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${He}.`)}const Z=ne.width*ne.height*j;for(const oe of T.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ne.width,ne.height,1,be,He,ne.data.slice(Z*oe,Z*(oe+1)));T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,be,He,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,be,He,ne.data);else if(T.isData3DTexture)Ge?(dt&&t.texStorage3D(n.TEXTURE_3D,ge,De,ne.width,ne.height,ne.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,be,He,ne.data)):t.texImage3D(n.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,be,He,ne.data);else if(T.isFramebufferTexture){if(dt)if(Ge)t.texStorage2D(n.TEXTURE_2D,ge,De,ne.width,ne.height);else{let j=ne.width,Z=ne.height;for(let oe=0;oe<ge;oe++)t.texImage2D(n.TEXTURE_2D,oe,De,j,Z,0,be,He,null),j>>=1,Z>>=1}}else if(ke.length>0){if(Ge&&dt){const j=ft(ke[0]);t.texStorage2D(n.TEXTURE_2D,ge,De,j.width,j.height)}for(let j=0,Z=ke.length;j<Z;j++)pe=ke[j],Ge?N&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,be,He,pe):t.texImage2D(n.TEXTURE_2D,j,De,be,He,pe);T.generateMipmaps=!1}else if(Ge){if(dt){const j=ft(ne);t.texStorage2D(n.TEXTURE_2D,ge,De,j.width,j.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,He,ne)}else t.texImage2D(n.TEXTURE_2D,0,De,be,He,ne);g(T)&&m(J),Re.__version=te.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Y(L,T,X){if(T.image.length!==6)return;const J=Me(L,T),ee=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+X);const te=i.get(ee);if(ee.version!==te.__version||J===!0){t.activeTexture(n.TEXTURE0+X);const Re=Ke.getPrimaries(Ke.workingColorSpace),he=T.colorSpace===di?null:Ke.getPrimaries(T.colorSpace),fe=T.colorSpace===di||Re===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ze=T.isCompressedTexture||T.image[0].isCompressedTexture,ne=T.image[0]&&T.image[0].isDataTexture,be=[];for(let Z=0;Z<6;Z++)!ze&&!ne?be[Z]=x(T.image[Z],!0,r.maxCubemapSize):be[Z]=ne?T.image[Z].image:T.image[Z],be[Z]=Fe(T,be[Z]);const He=be[0],De=a.convert(T.format,T.colorSpace),pe=a.convert(T.type),ke=M(T.internalFormat,De,pe,T.colorSpace),Ge=T.isVideoTexture!==!0,dt=te.__version===void 0||J===!0,N=ee.dataReady;let ge=E(T,He);se(n.TEXTURE_CUBE_MAP,T);let j;if(ze){Ge&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ke,He.width,He.height);for(let Z=0;Z<6;Z++){j=be[Z].mipmaps;for(let oe=0;oe<j.length;oe++){const Ue=j[oe];T.format!==Ln?De!==null?Ge?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Ue.width,Ue.height,De,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Ue.width,Ue.height,De,pe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,ke,Ue.width,Ue.height,0,De,pe,Ue.data)}}}else{if(j=T.mipmaps,Ge&&dt){j.length>0&&ge++;const Z=ft(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){Ge?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be[Z].width,be[Z].height,De,pe,be[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,be[Z].width,be[Z].height,0,De,pe,be[Z].data);for(let oe=0;oe<j.length;oe++){const qe=j[oe].image[Z].image;Ge?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,qe.width,qe.height,De,pe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,ke,qe.width,qe.height,0,De,pe,qe.data)}}else{Ge?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,pe,be[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,De,pe,be[Z]);for(let oe=0;oe<j.length;oe++){const Ue=j[oe];Ge?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,De,pe,Ue.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,ke,De,pe,Ue.image[Z])}}}g(T)&&m(n.TEXTURE_CUBE_MAP),te.__version=ee.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function K(L,T,X,J,ee,te){const Re=a.convert(X.format,X.colorSpace),he=a.convert(X.type),fe=M(X.internalFormat,Re,he,X.colorSpace);if(!i.get(T).__hasExternalTextures){const ne=Math.max(1,T.width>>te),be=Math.max(1,T.height>>te);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,fe,ne,be,T.depth,0,Re,he,null):t.texImage2D(ee,te,fe,ne,be,0,Re,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),We(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,i.get(X).__webglTexture,0,Pe(T)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,i.get(X).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(L,T,X){if(n.bindRenderbuffer(n.RENDERBUFFER,L),T.depthBuffer){const J=T.depthTexture,ee=J&&J.isDepthTexture?J.type:null,te=v(T.stencilBuffer,ee),Re=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Pe(T);We(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,te,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,te,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,te,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,L)}else{const J=T.textures;for(let ee=0;ee<J.length;ee++){const te=J[ee],Re=a.convert(te.format,te.colorSpace),he=a.convert(te.type),fe=M(te.internalFormat,Re,he,te.colorSpace),ze=Pe(T);X&&We(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,fe,T.width,T.height):We(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,fe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,fe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const J=i.get(T.depthTexture).__webglTexture,ee=Pe(T);if(T.depthTexture.format===Sr)We(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(T.depthTexture.format===Ir)We(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Q(L){const T=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");O(T.__webglFramebuffer,L)}else if(X){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]=n.createRenderbuffer(),ue(T.__webglDepthbuffer[J],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),ue(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(L,T,X){const J=i.get(L);T!==void 0&&K(J.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Q(L)}function Ee(L){const T=L.texture,X=i.get(L),J=i.get(T);L.addEventListener("dispose",b);const ee=L.textures,te=L.isWebGLCubeRenderTarget===!0,Re=ee.length>1;if(Re||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=T.version,s.memory.textures++),te){X.__webglFramebuffer=[];for(let he=0;he<6;he++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[he]=[];for(let fe=0;fe<T.mipmaps.length;fe++)X.__webglFramebuffer[he][fe]=n.createFramebuffer()}else X.__webglFramebuffer[he]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let he=0;he<T.mipmaps.length;he++)X.__webglFramebuffer[he]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Re)for(let he=0,fe=ee.length;he<fe;he++){const ze=i.get(ee[he]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),s.memory.textures++)}if(L.samples>0&&We(L)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){const fe=ee[he];X.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[he]);const ze=a.convert(fe.format,fe.colorSpace),ne=a.convert(fe.type),be=M(fe.internalFormat,ze,ne,fe.colorSpace,L.isXRRenderTarget===!0),He=Pe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,be,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,X.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),se(n.TEXTURE_CUBE_MAP,T);for(let he=0;he<6;he++)if(T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)K(X.__webglFramebuffer[he][fe],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else K(X.__webglFramebuffer[he],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(T)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let he=0,fe=ee.length;he<fe;he++){const ze=ee[he],ne=i.get(ze);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),se(n.TEXTURE_2D,ze),K(X.__webglFramebuffer,L,ze,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),g(ze)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,J.__webglTexture),se(he,T),T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)K(X.__webglFramebuffer[fe],L,T,n.COLOR_ATTACHMENT0,he,fe);else K(X.__webglFramebuffer,L,T,n.COLOR_ATTACHMENT0,he,0);g(T)&&m(he),t.unbindTexture()}L.depthBuffer&&Q(L)}function D(L){const T=L.textures;for(let X=0,J=T.length;X<J;X++){const ee=T[X];if(g(ee)){const te=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=i.get(ee).__webglTexture;t.bindTexture(te,Re),m(te),t.unbindTexture()}}}const ce=[],Ne=[];function Je(L){if(L.samples>0){if(We(L)===!1){const T=L.textures,X=L.width,J=L.height;let ee=n.COLOR_BUFFER_BIT;const te=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(L),he=T.length>1;if(he)for(let fe=0;fe<T.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let fe=0;fe<T.length;fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[fe]);const ze=i.get(T[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,X,J,0,0,X,J,ee,n.NEAREST),l===!0&&(ce.length=0,Ne.length=0,ce.push(n.COLOR_ATTACHMENT0+fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ce.push(te),Ne.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let fe=0;fe<T.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Re.__webglColorRenderbuffer[fe]);const ze=i.get(T[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Pe(L){return Math.min(r.maxSamples,L.samples)}function We(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ve(L){const T=s.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Fe(L,T){const X=L.colorSpace,J=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==yi&&X!==di&&(Ke.getTransfer(X)===at?(J!==Ln||ee!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function ft(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=me,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=K,this.useMultisampledRTT=We}function N1(n,e){function t(i,r=di){let a;const s=Ke.getTransfer(r);if(i===vi)return n.UNSIGNED_BYTE;if(i===od)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ef)return n.BYTE;if(i===tf)return n.SHORT;if(i===ho)return n.UNSIGNED_SHORT;if(i===ad)return n.INT;if(i===Pr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Lo)return n.HALF_FLOAT;if(i===rf)return n.ALPHA;if(i===af)return n.RGB;if(i===Ln)return n.RGBA;if(i===of)return n.LUMINANCE;if(i===sf)return n.LUMINANCE_ALPHA;if(i===Sr)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===lf)return n.RED;if(i===ld)return n.RED_INTEGER;if(i===cf)return n.RG;if(i===cd)return n.RG_INTEGER;if(i===ud)return n.RGBA_INTEGER;if(i===es||i===ts||i===ns||i===is)if(s===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===es)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===es)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ts)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ns)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Zl||i===Kl||i===Jl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===jl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===ec||i===tc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ql||i===ec)return s===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===tc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nc||i===ic||i===rc||i===ac||i===oc||i===sc||i===lc||i===cc||i===uc||i===dc||i===hc||i===fc||i===pc||i===mc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===nc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mc)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rs||i===gc||i===_c)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===rs)return s===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uf||i===xc||i===vc||i===Mc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===rs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class F1 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ut extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O1={type:"move"};class Cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const B1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z1=`
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

}`;class k1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Wt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jn({vertexShader:B1,fragmentShader:z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class V1 extends Xi{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const x=new k1,g=t.getContextAttributes();let m=null,M=null;const v=[],E=[],w=new Se;let b=null;const A=new _n;A.layers.enable(1),A.viewport=new Et;const C=new _n;C.layers.enable(2),C.viewport=new Et;const S=[A,C],y=new F1;y.layers.enable(1),y.layers.enable(2);let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=v[Y];return K===void 0&&(K=new Cs,v[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=v[Y];return K===void 0&&(K=new Cs,v[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=v[Y];return K===void 0&&(K=new Cs,v[Y]=K),K.getHandSpace()};function U(Y){const K=E.indexOf(Y.inputSource);if(K===-1)return;const ue=v[K];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||s),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",G);for(let Y=0;Y<v.length;Y++){const K=E[Y];K!==null&&(E[Y]=null,v[Y].disconnect(K))}P=null,F=null,x.reset(),e.setRenderTarget(m),f=null,h=null,d=null,r=null,M=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",z),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Wi(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ue=null,O=null;g.depth&&(O=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Ir:Sr,ue=g.stencil?Lr:Pr);const Q={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:a};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Q),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Wi(h.textureWidth,h.textureHeight,{format:Ln,type:vi,depthTexture:new Sd(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(Y){for(let K=0;K<Y.removed.length;K++){const ue=Y.removed[K],O=E.indexOf(ue);O>=0&&(E[O]=null,v[O].disconnect(ue))}for(let K=0;K<Y.added.length;K++){const ue=Y.added[K];let O=E.indexOf(ue);if(O===-1){for(let me=0;me<v.length;me++)if(me>=E.length){E.push(ue),O=me;break}else if(E[me]===null){E[me]=ue,O=me;break}if(O===-1)break}const Q=v[O];Q&&Q.connect(ue)}}const V=new I,$=new I;function W(Y,K,ue){V.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);const O=V.distanceTo($),Q=K.projectionMatrix.elements,me=ue.projectionMatrix.elements,Ee=Q[14]/(Q[10]-1),D=Q[14]/(Q[10]+1),ce=(Q[9]+1)/Q[5],Ne=(Q[9]-1)/Q[5],Je=(Q[8]-1)/Q[0],Pe=(me[8]+1)/me[0],We=Ee*Je,Ve=Ee*Pe,Fe=O/(-Je+Pe),ft=Fe*-Je;K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ft),Y.translateZ(Fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const L=Ee+Fe,T=D+Fe,X=We-ft,J=Ve+(O-ft),ee=ce*D/T*L,te=Ne*D/T*L;Y.projectionMatrix.makePerspective(X,J,ee,te,L,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ae(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;x.texture!==null&&(Y.near=x.depthNear,Y.far=x.depthFar),y.near=C.near=A.near=Y.near,y.far=C.far=A.far=Y.far,(P!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,F=y.far,A.near=P,A.far=F,C.near=P,C.far=F,A.updateProjectionMatrix(),C.updateProjectionMatrix(),Y.updateProjectionMatrix());const K=Y.parent,ue=y.cameras;ae(y,K);for(let O=0;O<ue.length;O++)ae(ue[O],K);ue.length===2?W(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),le(Y,y,K)};function le(Y,K,ue){ue===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ua*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let se=null;function Me(Y,K){if(u=K.getViewerPose(c||s),_=K,u!==null){const ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let O=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,O=!0);for(let me=0;me<ue.length;me++){const Ee=ue[me];let D=null;if(f!==null)D=f.getViewport(Ee);else{const Ne=d.getViewSubImage(h,Ee);D=Ne.viewport,me===0&&(e.setRenderTargetTextures(M,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(M))}let ce=S[me];ce===void 0&&(ce=new _n,ce.layers.enable(me),ce.viewport=new Et,S[me]=ce),ce.matrix.fromArray(Ee.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ee.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(D.x,D.y,D.width,D.height),me===0&&(y.matrix.copy(ce.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),O===!0&&y.cameras.push(ce)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const me=d.getDepthInformation(ue[0]);me&&me.isValid&&me.texture&&x.init(e,me,r.renderState)}}for(let ue=0;ue<v.length;ue++){const O=E[ue],Q=v[ue];O!==null&&Q!==void 0&&Q.update(O,K,c||s)}se&&se(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Te=new yd;Te.setAnimationLoop(Me),this.setAnimationLoop=function(Y){se=Y},this.dispose=function(){}}}const Ui=new cn,H1=new ot;function G1(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,xd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,M,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(g,m):m.isMeshToonMaterial?(a(g,m),d(g,m)):m.isMeshPhongMaterial?(a(g,m),u(g,m)):m.isMeshStandardMaterial?(a(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,E)):m.isMeshMatcapMaterial?(a(g,m),_(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),x(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===$t&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===$t&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=e.get(m),v=M.envMap,E=M.envMapRotation;v&&(g.envMap.value=v,Ui.copy(E),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),g.envMapRotation.value.setFromMatrix4(H1.makeRotationFromEuler(Ui)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$t&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W1(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const E=v.program;i.uniformBlockBinding(M,E)}function c(M,v){let E=r[M.id];E===void 0&&(_(M),E=u(M),r[M.id]=E,M.addEventListener("dispose",g));const w=v.program;i.updateUBOMapping(M,w);const b=e.render.frame;a[M.id]!==b&&(h(M),a[M.id]=b)}function u(M){const v=d();M.__bindingPointIndex=v;const E=n.createBuffer(),w=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,w,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function d(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const v=r[M.id],E=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,A=E.length;b<A;b++){const C=Array.isArray(E[b])?E[b]:[E[b]];for(let S=0,y=C.length;S<y;S++){const P=C[S];if(f(P,b,S,w)===!0){const F=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let G=0;G<U.length;G++){const V=U[G],$=x(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,F+z,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,v,E,w){const b=M.value,A=v+"_"+E;if(w[A]===void 0)return typeof b=="number"||typeof b=="boolean"?w[A]=b:w[A]=b.clone(),!0;{const C=w[A];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return w[A]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(M){const v=M.uniforms;let E=0;const w=16;for(let A=0,C=v.length;A<C;A++){const S=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,P=S.length;y<P;y++){const F=S[y],U=Array.isArray(F.value)?F.value:[F.value];for(let z=0,G=U.length;z<G;z++){const V=U[z],$=x(V),W=E%w;W!==0&&w-W<$.boundary&&(E+=w-W),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=$.storage}}}const b=E%w;return b>0&&(E+=w-b),M.__size=E,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){const v=M.target;v.removeEventListener("dispose",g);const E=s.indexOf(v.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function m(){for(const M in r)n.deleteBuffer(r[M]);s=[],r={},a={}}return{bind:l,update:c,dispose:m}}class ei{constructor(e={}){const{canvas:t=Of(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const f=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=gi,this.toneMappingExposure=1;const v=this;let E=!1,w=0,b=0,A=null,C=-1,S=null;const y=new Et,P=new Et;let F=null;const U=new xe(0);let z=0,G=t.width,V=t.height,$=1,W=null,ae=null;const le=new Et(0,0,G,V),se=new Et(0,0,G,V);let Me=!1;const Te=new gl;let Y=!1,K=!1;const ue=new ot,O=new I,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function Ee(){return A===null?$:1}let D=i;function ce(R,B){return t.getContext(R,B)}try{const R={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dl}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",Z,!1),D===null){const B="webgl2";if(D=ce(B,R),D===null)throw ce(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ne,Je,Pe,We,Ve,Fe,ft,L,T,X,J,ee,te,Re,he,fe,ze,ne,be,He,De,pe,ke,Ge;function dt(){Ne=new Q0(D),Ne.init(),pe=new N1(D,Ne),Je=new Y0(D,Ne,e,pe),Pe=new D1(D),We=new ng(D),Ve=new v1,Fe=new U1(D,Ne,Pe,Ve,Je,pe,We),ft=new j0(v),L=new J0(v),T=new cp(D),ke=new q0(D,T),X=new eg(D,T,We,ke),J=new rg(D,X,T,We),be=new ig(D,Je,Fe),fe=new $0(Ve),ee=new x1(v,ft,L,Ne,Je,ke,fe),te=new G1(v,Ve),Re=new y1,he=new A1(Ne),ne=new W0(v,ft,L,Pe,J,h,l),ze=new I1(v,J,Je),Ge=new W1(D,We,Je,Pe),He=new X0(D,Ne,We),De=new tg(D,Ne,We),We.programs=ee.programs,v.capabilities=Je,v.extensions=Ne,v.properties=Ve,v.renderLists=Re,v.shadowMap=ze,v.state=Pe,v.info=We}dt();const N=new V1(v,D);this.xr=N,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(G,V,!1))},this.getSize=function(R){return R.set(G,V)},this.setSize=function(R,B,H=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,V=B,t.width=Math.floor(R*$),t.height=Math.floor(B*$),H===!0&&(t.style.width=R+"px",t.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(G*$,V*$).floor()},this.setDrawingBufferSize=function(R,B,H){G=R,V=B,$=H,t.width=Math.floor(R*H),t.height=Math.floor(B*H),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(le)},this.setViewport=function(R,B,H,q){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,B,H,q),Pe.viewport(y.copy(le).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,B,H,q){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,B,H,q),Pe.scissor(P.copy(se).multiplyScalar($).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){Pe.setScissorTest(Me=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){ae=R},this.getClearColor=function(R){return R.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(R=!0,B=!0,H=!0){let q=0;if(R){let k=!1;if(A!==null){const re=A.texture.format;k=re===ud||re===cd||re===ld}if(k){const re=A.texture.type,_e=re===vi||re===Pr||re===ho||re===Lr||re===od||re===sd,ve=ne.getClearColor(),ye=ne.getClearAlpha(),Le=ve.r,Ie=ve.g,Ce=ve.b;_e?(f[0]=Le,f[1]=Ie,f[2]=Ce,f[3]=ye,D.clearBufferuiv(D.COLOR,0,f)):(_[0]=Le,_[1]=Ie,_[2]=Ce,_[3]=ye,D.clearBufferiv(D.COLOR,0,_))}else q|=D.COLOR_BUFFER_BIT}B&&(q|=D.DEPTH_BUFFER_BIT),H&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Re.dispose(),he.dispose(),Ve.dispose(),ft.dispose(),L.dispose(),J.dispose(),ke.dispose(),Ge.dispose(),ee.dispose(),N.dispose(),N.removeEventListener("sessionstart",En),N.removeEventListener("sessionend",bn),Ai.stop()};function ge(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=We.autoReset,B=ze.enabled,H=ze.autoUpdate,q=ze.needsUpdate,k=ze.type;dt(),We.autoReset=R,ze.enabled=B,ze.autoUpdate=H,ze.needsUpdate=q,ze.type=k}function Z(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function oe(R){const B=R.target;B.removeEventListener("dispose",oe),Ue(B)}function Ue(R){qe(R),Ve.remove(R)}function qe(R){const B=Ve.get(R).programs;B!==void 0&&(B.forEach(function(H){ee.releaseProgram(H)}),R.isShaderMaterial&&ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,H,q,k,re){B===null&&(B=Q);const _e=k.isMesh&&k.matrixWorld.determinant()<0,ve=fh(R,B,H,q,k);Pe.setMaterial(q,_e);let ye=H.index,Le=1;if(q.wireframe===!0){if(ye=X.getWireframeAttribute(H),ye===void 0)return;Le=2}const Ie=H.drawRange,Ce=H.attributes.position;let $e=Ie.start*Le,ct=(Ie.start+Ie.count)*Le;re!==null&&($e=Math.max($e,re.start*Le),ct=Math.min(ct,(re.start+re.count)*Le)),ye!==null?($e=Math.max($e,0),ct=Math.min(ct,ye.count)):Ce!=null&&($e=Math.max($e,0),ct=Math.min(ct,Ce.count));const ut=ct-$e;if(ut<0||ut===1/0)return;ke.setup(k,q,ve,H,ye);let Kt,je=He;if(ye!==null&&(Kt=T.get(ye),je=De,je.setIndex(Kt)),k.isMesh)q.wireframe===!0?(Pe.setLineWidth(q.wireframeLinewidth*Ee()),je.setMode(D.LINES)):je.setMode(D.TRIANGLES);else if(k.isLine){let we=q.linewidth;we===void 0&&(we=1),Pe.setLineWidth(we*Ee()),k.isLineSegments?je.setMode(D.LINES):k.isLineLoop?je.setMode(D.LINE_LOOP):je.setMode(D.LINE_STRIP)}else k.isPoints?je.setMode(D.POINTS):k.isSprite&&je.setMode(D.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?je.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)je.renderInstances($e,ut,k.count);else if(H.isInstancedBufferGeometry){const we=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ft=Math.min(H.instanceCount,we);je.renderInstances($e,ut,Ft)}else je.render($e,ut)};function ht(R,B,H){R.transparent===!0&&R.side===mt&&R.forceSinglePass===!1?(R.side=$t,R.needsUpdate=!0,ya(R,B,H),R.side=xi,R.needsUpdate=!0,ya(R,B,H),R.side=mt):ya(R,B,H)}this.compile=function(R,B,H=null){H===null&&(H=R),g=he.get(H),g.init(B),M.push(g),H.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),R!==H&&R.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights();const q=new Set;return R.traverse(function(k){const re=k.material;if(re)if(Array.isArray(re))for(let _e=0;_e<re.length;_e++){const ve=re[_e];ht(ve,H,k),q.add(ve)}else ht(re,H,k),q.add(re)}),M.pop(),g=null,q},this.compileAsync=function(R,B,H=null){const q=this.compile(R,B,H);return new Promise(k=>{function re(){if(q.forEach(function(_e){Ve.get(_e).currentProgram.isReady()&&q.delete(_e)}),q.size===0){k(R);return}setTimeout(re,10)}Ne.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Mt=null;function Qe(R){Mt&&Mt(R)}function En(){Ai.stop()}function bn(){Ai.start()}const Ai=new yd;Ai.setAnimationLoop(Qe),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){Mt=R,N.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},N.addEventListener("sessionstart",En),N.addEventListener("sessionend",bn),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(B),B=N.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,B,A),g=he.get(R,M.length),g.init(B),M.push(g),ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Te.setFromProjectionMatrix(ue),K=this.localClippingEnabled,Y=fe.init(this.clippingPlanes,K),x=Re.get(R,m.length),x.init(),m.push(x),N.enabled===!0&&N.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&$o(re,B,-1/0,v.sortObjects)}$o(R,B,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,ae),me=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,me&&ne.addToRenderList(x,R),this.info.render.frame++,Y===!0&&fe.beginShadows();const H=g.state.shadowsArray;ze.render(H,R,B),Y===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,k=x.transmissive;if(g.setupLights(),B.isArrayCamera){const re=B.cameras;if(k.length>0)for(let _e=0,ve=re.length;_e<ve;_e++){const ye=re[_e];Vl(q,k,R,ye)}me&&ne.render(R);for(let _e=0,ve=re.length;_e<ve;_e++){const ye=re[_e];kl(x,R,ye,ye.viewport)}}else k.length>0&&Vl(q,k,R,B),me&&ne.render(R),kl(x,R,B);A!==null&&(Fe.updateMultisampleRenderTarget(A),Fe.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,B),ke.resetDefaultState(),C=-1,S=null,M.pop(),M.length>0?(g=M[M.length-1],Y===!0&&fe.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function $o(R,B,H,q){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)H=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Te.intersectsSprite(R)){q&&O.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ue);const _e=J.update(R),ve=R.material;ve.visible&&x.push(R,_e,ve,H,O.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Te.intersectsObject(R))){const _e=J.update(R),ve=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),O.copy(R.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),O.copy(_e.boundingSphere.center)),O.applyMatrix4(R.matrixWorld).applyMatrix4(ue)),Array.isArray(ve)){const ye=_e.groups;for(let Le=0,Ie=ye.length;Le<Ie;Le++){const Ce=ye[Le],$e=ve[Ce.materialIndex];$e&&$e.visible&&x.push(R,_e,$e,H,O.z,Ce)}}else ve.visible&&x.push(R,_e,ve,H,O.z,null)}}const re=R.children;for(let _e=0,ve=re.length;_e<ve;_e++)$o(re[_e],B,H,q)}function kl(R,B,H,q){const k=R.opaque,re=R.transmissive,_e=R.transparent;g.setupLightsView(H),Y===!0&&fe.setGlobalState(v.clippingPlanes,H),q&&Pe.viewport(y.copy(q)),k.length>0&&Ma(k,B,H),re.length>0&&Ma(re,B,H),_e.length>0&&Ma(_e,B,H),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Vl(R,B,H,q){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Wi(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Lo:vi,minFilter:Vi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const re=g.state.transmissionRenderTarget[q.id],_e=q.viewport||y;re.setSize(_e.z,_e.w);const ve=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(U),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),me?ne.render(H):v.clear();const ye=v.toneMapping;v.toneMapping=gi;const Le=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),Y===!0&&fe.setGlobalState(v.clippingPlanes,q),Ma(R,H,q),Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ce=0,$e=B.length;Ce<$e;Ce++){const ct=B[Ce],ut=ct.object,Kt=ct.geometry,je=ct.material,we=ct.group;if(je.side===mt&&ut.layers.test(q.layers)){const Ft=je.side;je.side=$t,je.needsUpdate=!0,Hl(ut,H,q,Kt,je,we),je.side=Ft,je.needsUpdate=!0,Ie=!0}}Ie===!0&&(Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re))}v.setRenderTarget(ve),v.setClearColor(U,z),Le!==void 0&&(q.viewport=Le),v.toneMapping=ye}function Ma(R,B,H){const q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,re=R.length;k<re;k++){const _e=R[k],ve=_e.object,ye=_e.geometry,Le=q===null?_e.material:q,Ie=_e.group;ve.layers.test(H.layers)&&Hl(ve,B,H,ye,Le,Ie)}}function Hl(R,B,H,q,k,re){R.onBeforeRender(v,B,H,q,k,re),R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(v,B,H,q,R,re),k.transparent===!0&&k.side===mt&&k.forceSinglePass===!1?(k.side=$t,k.needsUpdate=!0,v.renderBufferDirect(H,B,q,k,R,re),k.side=xi,k.needsUpdate=!0,v.renderBufferDirect(H,B,q,k,R,re),k.side=mt):v.renderBufferDirect(H,B,q,k,R,re),R.onAfterRender(v,B,H,q,k,re)}function ya(R,B,H){B.isScene!==!0&&(B=Q);const q=Ve.get(R),k=g.state.lights,re=g.state.shadowsArray,_e=k.state.version,ve=ee.getParameters(R,k.state,re,B,H),ye=ee.getProgramCacheKey(ve);let Le=q.programs;q.environment=R.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(R.isMeshStandardMaterial?L:ft).get(R.envMap||q.environment),q.envMapRotation=q.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Le===void 0&&(R.addEventListener("dispose",oe),Le=new Map,q.programs=Le);let Ie=Le.get(ye);if(Ie!==void 0){if(q.currentProgram===Ie&&q.lightsStateVersion===_e)return Wl(R,ve),Ie}else ve.uniforms=ee.getUniforms(R),R.onBuild(H,ve,v),R.onBeforeCompile(ve,v),Ie=ee.acquireProgram(ve,ye),Le.set(ye,Ie),q.uniforms=ve.uniforms;const Ce=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ce.clippingPlanes=fe.uniform),Wl(R,ve),q.needsLights=mh(R),q.lightsStateVersion=_e,q.needsLights&&(Ce.ambientLightColor.value=k.state.ambient,Ce.lightProbe.value=k.state.probe,Ce.directionalLights.value=k.state.directional,Ce.directionalLightShadows.value=k.state.directionalShadow,Ce.spotLights.value=k.state.spot,Ce.spotLightShadows.value=k.state.spotShadow,Ce.rectAreaLights.value=k.state.rectArea,Ce.ltc_1.value=k.state.rectAreaLTC1,Ce.ltc_2.value=k.state.rectAreaLTC2,Ce.pointLights.value=k.state.point,Ce.pointLightShadows.value=k.state.pointShadow,Ce.hemisphereLights.value=k.state.hemi,Ce.directionalShadowMap.value=k.state.directionalShadowMap,Ce.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ce.spotShadowMap.value=k.state.spotShadowMap,Ce.spotLightMatrix.value=k.state.spotLightMatrix,Ce.spotLightMap.value=k.state.spotLightMap,Ce.pointShadowMap.value=k.state.pointShadowMap,Ce.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Ie,q.uniformsList=null,Ie}function Gl(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=lo.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Wl(R,B){const H=Ve.get(R);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.batchingColor=B.batchingColor,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.instancingMorph=B.instancingMorph,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function fh(R,B,H,q,k){B.isScene!==!0&&(B=Q),Fe.resetTextureUnits();const re=B.fog,_e=q.isMeshStandardMaterial?B.environment:null,ve=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:yi,ye=(q.isMeshStandardMaterial?L:ft).get(q.envMap||_e),Le=q.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!H.morphAttributes.position,$e=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let ut=gi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ut=v.toneMapping);const Kt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,je=Kt!==void 0?Kt.length:0,we=Ve.get(q),Ft=g.state.lights;if(Y===!0&&(K===!0||R!==S)){const tn=R===S&&q.id===C;fe.setState(q,R,tn)}let et=!1;q.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ft.state.version||we.outputColorSpace!==ve||k.isBatchedMesh&&we.batching===!1||!k.isBatchedMesh&&we.batching===!0||k.isBatchedMesh&&we.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&we.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&we.instancing===!1||!k.isInstancedMesh&&we.instancing===!0||k.isSkinnedMesh&&we.skinning===!1||!k.isSkinnedMesh&&we.skinning===!0||k.isInstancedMesh&&we.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&we.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&we.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&we.instancingMorph===!1&&k.morphTexture!==null||we.envMap!==ye||q.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==fe.numPlanes||we.numIntersection!==fe.numIntersection)||we.vertexAlphas!==Le||we.vertexTangents!==Ie||we.morphTargets!==Ce||we.morphNormals!==$e||we.morphColors!==ct||we.toneMapping!==ut||we.morphTargetsCount!==je)&&(et=!0):(et=!0,we.__version=q.version);let zn=we.currentProgram;et===!0&&(zn=ya(q,B,k));let Sa=!1,Ri=!1,jo=!1;const yt=zn.getUniforms(),ni=we.uniforms;if(Pe.useProgram(zn.program)&&(Sa=!0,Ri=!0,jo=!0),q.id!==C&&(C=q.id,Ri=!0),Sa||S!==R){yt.setValue(D,"projectionMatrix",R.projectionMatrix),yt.setValue(D,"viewMatrix",R.matrixWorldInverse);const tn=yt.map.cameraPosition;tn!==void 0&&tn.setValue(D,O.setFromMatrixPosition(R.matrixWorld)),Je.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ri=!0,jo=!0)}if(k.isSkinnedMesh){yt.setOptional(D,k,"bindMatrix"),yt.setOptional(D,k,"bindMatrixInverse");const tn=k.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),yt.setValue(D,"boneTexture",tn.boneTexture,Fe))}k.isBatchedMesh&&(yt.setOptional(D,k,"batchingTexture"),yt.setValue(D,"batchingTexture",k._matricesTexture,Fe),yt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",k._colorsTexture,Fe));const Zo=H.morphAttributes;if((Zo.position!==void 0||Zo.normal!==void 0||Zo.color!==void 0)&&be.update(k,H,zn),(Ri||we.receiveShadow!==k.receiveShadow)&&(we.receiveShadow=k.receiveShadow,yt.setValue(D,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ni.envMap.value=ye,ni.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(ni.envMapIntensity.value=B.environmentIntensity),Ri&&(yt.setValue(D,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&ph(ni,jo),re&&q.fog===!0&&te.refreshFogUniforms(ni,re),te.refreshMaterialUniforms(ni,q,$,V,g.state.transmissionRenderTarget[R.id]),lo.upload(D,Gl(we),ni,Fe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(lo.upload(D,Gl(we),ni,Fe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(D,"center",k.center),yt.setValue(D,"modelViewMatrix",k.modelViewMatrix),yt.setValue(D,"normalMatrix",k.normalMatrix),yt.setValue(D,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const tn=q.uniformsGroups;for(let Ko=0,gh=tn.length;Ko<gh;Ko++){const ql=tn[Ko];Ge.update(ql,zn),Ge.bind(ql,zn)}}return zn}function ph(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function mh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,B,H){Ve.get(R.texture).__webglTexture=B,Ve.get(R.depthTexture).__webglTexture=H;const q=Ve.get(R);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=H===void 0,q.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){const H=Ve.get(R);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,H=0){A=R,w=B,b=H;let q=!0,k=null,re=!1,_e=!1;if(R){const ye=Ve.get(R);ye.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(D.FRAMEBUFFER,null),q=!1):ye.__webglFramebuffer===void 0?Fe.setupRenderTarget(R):ye.__hasExternalTextures&&Fe.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);const Le=R.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(_e=!0);const Ie=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ie[B])?k=Ie[B][H]:k=Ie[B],re=!0):R.samples>0&&Fe.useMultisampledRTT(R)===!1?k=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[H]:k=Ie,y.copy(R.viewport),P.copy(R.scissor),F=R.scissorTest}else y.copy(le).multiplyScalar($).floor(),P.copy(se).multiplyScalar($).floor(),F=Me;if(Pe.bindFramebuffer(D.FRAMEBUFFER,k)&&q&&Pe.drawBuffers(R,k),Pe.viewport(y),Pe.scissor(P),Pe.setScissorTest(F),re){const ye=Ve.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,ye.__webglTexture,H)}else if(_e){const ye=Ve.get(R.texture),Le=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,H||0,Le)}C=-1},this.readRenderTargetPixels=function(R,B,H,q,k,re,_e){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){Pe.bindFramebuffer(D.FRAMEBUFFER,ve);try{const ye=R.texture,Le=ye.format,Ie=ye.type;if(!Je.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-q&&H>=0&&H<=R.height-k&&D.readPixels(B,H,q,k,pe.convert(Le),pe.convert(Ie),re)}finally{const ye=A!==null?Ve.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(R,B,H,q,k,re,_e){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){Pe.bindFramebuffer(D.FRAMEBUFFER,ve);try{const ye=R.texture,Le=ye.format,Ie=ye.type;if(!Je.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=R.width-q&&H>=0&&H<=R.height-k){const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),D.readPixels(B,H,q,k,pe.convert(Le),pe.convert(Ie),0),D.flush();const $e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await Bf(D,$e,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re)}finally{D.deleteBuffer(Ce),D.deleteSync($e)}return re}}finally{const ye=A!==null?Ve.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(R,B=null,H=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,R=arguments[1]);const q=Math.pow(2,-H),k=Math.floor(R.image.width*q),re=Math.floor(R.image.height*q),_e=B!==null?B.x:0,ve=B!==null?B.y:0;Fe.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,_e,ve,k,re),Pe.unbindTexture()},this.copyTextureToTexture=function(R,B,H=null,q=null,k=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1],B=arguments[2],k=arguments[3]||0,H=null);let re,_e,ve,ye,Le,Ie;H!==null?(re=H.max.x-H.min.x,_e=H.max.y-H.min.y,ve=H.min.x,ye=H.min.y):(re=R.image.width,_e=R.image.height,ve=0,ye=0),q!==null?(Le=q.x,Ie=q.y):(Le=0,Ie=0);const Ce=pe.convert(B.format),$e=pe.convert(B.type);Fe.setTexture2D(B,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const ct=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Kt=D.getParameter(D.UNPACK_SKIP_PIXELS),je=D.getParameter(D.UNPACK_SKIP_ROWS),we=D.getParameter(D.UNPACK_SKIP_IMAGES),Ft=R.isCompressedTexture?R.mipmaps[k]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Le,Ie,re,_e,Ce,$e,Ft.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Le,Ie,Ft.width,Ft.height,Ce,Ft.data):D.texSubImage2D(D.TEXTURE_2D,k,Le,Ie,Ce,$e,Ft),D.pixelStorei(D.UNPACK_ROW_LENGTH,ct),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we),k===0&&B.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(R,B,H=null,q=null,k=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,q=arguments[1]||null,R=arguments[2],B=arguments[3],k=arguments[4]||0);let re,_e,ve,ye,Le,Ie,Ce,$e,ct;const ut=R.isCompressedTexture?R.mipmaps[k]:R.image;H!==null?(re=H.max.x-H.min.x,_e=H.max.y-H.min.y,ve=H.max.z-H.min.z,ye=H.min.x,Le=H.min.y,Ie=H.min.z):(re=ut.width,_e=ut.height,ve=ut.depth,ye=0,Le=0,Ie=0),q!==null?(Ce=q.x,$e=q.y,ct=q.z):(Ce=0,$e=0,ct=0);const Kt=pe.convert(B.format),je=pe.convert(B.type);let we;if(B.isData3DTexture)Fe.setTexture3D(B,0),we=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Fe.setTexture2DArray(B,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const Ft=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),zn=D.getParameter(D.UNPACK_SKIP_PIXELS),Sa=D.getParameter(D.UNPACK_SKIP_ROWS),Ri=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(we,k,Ce,$e,ct,re,_e,ve,Kt,je,ut.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(we,k,Ce,$e,ct,re,_e,ve,Kt,ut.data):D.texSubImage3D(we,k,Ce,$e,ct,re,_e,ve,Kt,je,ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Sa),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ri),k===0&&B.generateMipmaps&&D.generateMipmap(we),Pe.unbindTexture()},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&Fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Fe.setTextureCube(R,0):R.isData3DTexture?Fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Fe.setTexture2DArray(R,0):Fe.setTexture2D(R,0),Pe.unbindTexture()},this.resetState=function(){w=0,b=0,A=null,Pe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hl?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Do?"display-p3":"srgb"}}class bi extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class q1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new I;class xo{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rd extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let mr;const Zr=new I,gr=new I,_r=new I,xr=new Se,Kr=new Se,Cd=new ot,Xa=new I,Jr=new I,Ya=new I,hu=new Se,Ps=new Se,fu=new Se;class X1 extends gt{constructor(e=new Rd){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new q1(t,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new xo(i,3,0,!1)),mr.setAttribute("uv",new xo(i,2,3,!1))}this.geometry=mr,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),Cd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-_r.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const s=this.center;$a(Xa.set(-.5,-.5,0),_r,s,gr,r,a),$a(Jr.set(.5,-.5,0),_r,s,gr,r,a),$a(Ya.set(.5,.5,0),_r,s,gr,r,a),hu.set(0,0),Ps.set(1,0),fu.set(1,1);let o=e.ray.intersectTriangle(Xa,Jr,Ya,!1,Zr);if(o===null&&($a(Jr.set(-.5,.5,0),_r,s,gr,r,a),Ps.set(0,1),o=e.ray.intersectTriangle(Xa,Ya,Jr,!1,Zr),o===null))return;const l=e.ray.origin.distanceTo(Zr);l<e.near||l>e.far||t.push({distance:l,point:Zr.clone(),uv:an.getInterpolation(Zr,Xa,Jr,Ya,hu,Ps,fu,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $a(n,e,t,i,r,a){xr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Kr.x=a*xr.x-r*xr.y,Kr.y=r*xr.x+a*xr.y):Kr.copy(xr),n.copy(e),n.x+=Kr.x,n.y+=Kr.y,n.applyMatrix4(Cd)}class Ti extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vo=new I,Mo=new I,pu=new ot,Qr=new Uo,ja=new Si,Ls=new I,mu=new I;class Ur extends gt{constructor(e=new nt,t=new Ti){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)vo.fromBufferAttribute(t,r-1),Mo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=vo.distanceTo(Mo);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),ja.radius+=a,e.ray.intersectsSphere(ja)===!1)return;pu.copy(r).invert(),Qr.copy(e.ray).applyMatrix4(pu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let x=f,g=_-1;x<g;x+=c){const m=u.getX(x),M=u.getX(x+1),v=Za(this,e,Qr,l,m,M);v&&t.push(v)}if(this.isLineLoop){const x=u.getX(_-1),g=u.getX(f),m=Za(this,e,Qr,l,x,g);m&&t.push(m)}}else{const f=Math.max(0,s.start),_=Math.min(h.count,s.start+s.count);for(let x=f,g=_-1;x<g;x+=c){const m=Za(this,e,Qr,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){const x=Za(this,e,Qr,l,_-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Za(n,e,t,i,r,a){const s=n.geometry.attributes.position;if(vo.fromBufferAttribute(s,r),Mo.fromBufferAttribute(s,a),t.distanceSqToSegment(vo,Mo,Ls,mu)>i)return;Ls.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ls);if(!(l<e.near||l>e.far))return{distance:l,point:mu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const gu=new I,_u=new I;class xl extends Ur{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)gu.fromBufferAttribute(t,r),_u.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gu.distanceTo(_u);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y1 extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xu=new ot,Ks=new Uo,Ka=new Si,Ja=new I;class $1 extends gt{constructor(e=new nt,t=new Y1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(r),Ka.radius+=a,e.ray.intersectsSphere(Ka)===!1)return;xu.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(xu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let _=h,x=f;_<x;_++){const g=c.getX(_);Ja.fromBufferAttribute(d,g),vu(Ja,g,l,r,e,t,this)}}else{const h=Math.max(0,s.start),f=Math.min(d.count,s.start+s.count);for(let _=h,x=f;_<x;_++)Ja.fromBufferAttribute(d,_),vu(Ja,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function vu(n,e,t,i,r,a,s){const o=Ks.distanceSqToPoint(n);if(o<t){const l=new I;Ks.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class Pd extends Wt{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ma extends nt{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],d=[],h=[],f=[];let _=0;const x=[],g=i/2;let m=0;M(),s===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function M(){const E=new I,w=new I;let b=0;const A=(t-e)/i;for(let C=0;C<=a;C++){const S=[],y=C/a,P=y*(t-e)+e;for(let F=0;F<=r;F++){const U=F/r,z=U*l+o,G=Math.sin(z),V=Math.cos(z);w.x=P*G,w.y=-y*i+g,w.z=P*V,d.push(w.x,w.y,w.z),E.set(G,A,V).normalize(),h.push(E.x,E.y,E.z),f.push(U,1-y),S.push(_++)}x.push(S)}for(let C=0;C<r;C++)for(let S=0;S<a;S++){const y=x[S][C],P=x[S+1][C],F=x[S+1][C+1],U=x[S][C+1];u.push(y,P,U),u.push(P,F,U),b+=6}c.addGroup(m,b,0),m+=b}function v(E){const w=_,b=new Se,A=new I;let C=0;const S=E===!0?e:t,y=E===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,g*y,0),h.push(0,y,0),f.push(.5,.5),_++;const P=_;for(let F=0;F<=r;F++){const z=F/r*l+o,G=Math.cos(z),V=Math.sin(z);A.x=S*V,A.y=g*y,A.z=S*G,d.push(A.x,A.y,A.z),h.push(0,y,0),b.x=G*.5+.5,b.y=V*.5*y+.5,f.push(b.x,b.y),_++}for(let F=0;F<r;F++){const U=w+F,z=P+F;E===!0?u.push(z,z+1,U):u.push(z+1,z,U),C+=3}c.addGroup(m,C,E===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vl extends ma{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new vl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Qa=new I,eo=new I,Is=new I,to=new an;class j1 extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(Er*t),s=e.getIndex(),o=e.getAttribute("position"),l=s?s.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let _=0;_<l;_+=3){s?(c[0]=s.getX(_),c[1]=s.getX(_+1),c[2]=s.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:g,c:m}=to;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),to.getNormal(Is),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){const v=(M+1)%3,E=d[M],w=d[v],b=to[u[M]],A=to[u[v]],C=`${E}_${w}`,S=`${w}_${E}`;S in h&&h[S]?(Is.dot(h[S].normal)<=a&&(f.push(b.x,b.y,b.z),f.push(A.x,A.y,A.z)),h[S]=null):C in h||(h[C]={index0:c[M],index1:c[v],normal:Is.clone()})}}for(const _ in h)if(h[_]){const{index0:x,index1:g}=h[_];Qa.fromBufferAttribute(o,x),eo.fromBufferAttribute(o,g),f.push(Qa.x,Qa.y,Qa.z),f.push(eo.x,eo.y,eo.z)}this.setAttribute("position",new tt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fo extends nt{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const u=[],d=new I,h=new I,f=[],_=[],x=[],g=[];for(let m=0;m<=i;m++){const M=[],v=m/i;let E=0;m===0&&s===0?E=.5/t:m===i&&l===Math.PI&&(E=-.5/t);for(let w=0;w<=t;w++){const b=w/t;d.x=-e*Math.cos(r+b*a)*Math.sin(s+v*o),d.y=e*Math.cos(s+v*o),d.z=e*Math.sin(r+b*a)*Math.sin(s+v*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),g.push(b+E,1-v),M.push(c++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){const v=u[m][M+1],E=u[m][M],w=u[m+1][M],b=u[m+1][M+1];(m!==0||s>0)&&f.push(v,E,b),(m!==i-1||l<Math.PI)&&f.push(E,w,b)}this.setIndex(f),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Z1 extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K1 extends Z1{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ld extends On{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ra extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Id extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ds=new ot,Mu=new I,yu=new I;class J1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mu),yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yu),t.updateMatrixWorld(),Ds.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ds),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q1 extends J1{constructor(){super(new Sn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class un extends Id{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Q1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wi extends Id{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Su=new ot;class e_{constructor(e,t,i=0,r=1/0){this.ray=new Uo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Su.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Su),this}intersectObject(e,t=!0,i=[]){return Js(e,this,i,t),i.sort(Eu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Js(e[r],this,i,t);return i.sort(Eu),i}}function Eu(n,e){return n.distance-e.distance}function Js(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)Js(a[s],e,t,!0)}}const bu=new I;let no,Us;class t_ extends gt{constructor(e=new I(0,0,1),t=new I(0,0,0),i=1,r=16776960,a=i*.2,s=a*.2){super(),this.type="ArrowHelper",no===void 0&&(no=new nt,no.setAttribute("position",new tt([0,0,0,0,1,0],3)),Us=new ma(0,.5,1,5,1),Us.translate(0,-.5,0)),this.position.copy(t),this.line=new Ur(no,new Ti({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new lt(Us,new Ei({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{bu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(bu,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);const Ns={type:"change"},Fs={type:"start"},Os={type:"end"};class n_ extends Xi{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Jo.ROTATE,MIDDLE:Jo.DOLLY,RIGHT:Jo.PAN},this.target=new I;const a=1e-6,s=new I;let o=1,l=r.NONE,c=r.NONE,u=0,d=0,h=0;const f=new I,_=new Se,x=new Se,g=new I,m=new Se,M=new Se,v=new Se,E=new Se,w=[],b={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const O=i.domElement.getBoundingClientRect(),Q=i.domElement.ownerDocument.documentElement;i.screen.left=O.left+window.pageXOffset-Q.clientLeft,i.screen.top=O.top+window.pageYOffset-Q.clientTop,i.screen.width=O.width,i.screen.height=O.height};const A=function(){const O=new Se;return function(me,Ee){return O.set((me-i.screen.left)/i.screen.width,(Ee-i.screen.top)/i.screen.height),O}}(),C=function(){const O=new Se;return function(me,Ee){return O.set((me-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-Ee))/i.screen.width),O}}();this.rotateCamera=function(){const O=new I,Q=new zr,me=new I,Ee=new I,D=new I,ce=new I;return function(){ce.set(x.x-_.x,x.y-_.y,0);let Je=ce.length();Je?(f.copy(i.object.position).sub(i.target),me.copy(f).normalize(),Ee.copy(i.object.up).normalize(),D.crossVectors(Ee,me).normalize(),Ee.setLength(x.y-_.y),D.setLength(x.x-_.x),ce.copy(Ee.add(D)),O.crossVectors(ce,f).normalize(),Je*=i.rotateSpeed,Q.setFromAxisAngle(O,Je),f.applyQuaternion(Q),i.object.up.applyQuaternion(Q),g.copy(O),h=Je):!i.staticMoving&&h&&(h*=Math.sqrt(1-i.dynamicDampingFactor),f.copy(i.object.position).sub(i.target),Q.setFromAxisAngle(g,h),f.applyQuaternion(Q),i.object.up.applyQuaternion(Q)),_.copy(x)}}(),this.zoomCamera=function(){let O;l===r.TOUCH_ZOOM_PAN?(O=u/d,u=d,i.object.isPerspectiveCamera?f.multiplyScalar(O):i.object.isOrthographicCamera?(i.object.zoom=bc.clamp(i.object.zoom/O,i.minZoom,i.maxZoom),o!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(O=1+(M.y-m.y)*i.zoomSpeed,O!==1&&O>0&&(i.object.isPerspectiveCamera?f.multiplyScalar(O):i.object.isOrthographicCamera?(i.object.zoom=bc.clamp(i.object.zoom/O,i.minZoom,i.maxZoom),o!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?m.copy(M):m.y+=(M.y-m.y)*this.dynamicDampingFactor)},this.panCamera=function(){const O=new Se,Q=new I,me=new I;return function(){if(O.copy(E).sub(v),O.lengthSq()){if(i.object.isOrthographicCamera){const D=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,ce=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;O.x*=D,O.y*=ce}O.multiplyScalar(f.length()*i.panSpeed),me.copy(f).cross(i.object.up).setLength(O.x),me.add(Q.copy(i.object.up).setLength(O.y)),i.object.position.add(me),i.target.add(me),i.staticMoving?v.copy(E):v.add(O.subVectors(E,v).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(f.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,f.setLength(i.maxDistance)),m.copy(M)),f.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,f.setLength(i.minDistance)),m.copy(M)))},this.update=function(){f.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,f),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),s.distanceToSquared(i.object.position)>a&&(i.dispatchEvent(Ns),s.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(s.distanceToSquared(i.object.position)>a||o!==i.object.zoom)&&(i.dispatchEvent(Ns),s.copy(i.object.position),o=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),f.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Ns),s.copy(i.object.position),o=i.object.zoom};function S(O){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",y),i.domElement.addEventListener("pointerup",P)),Te(O),O.pointerType==="touch"?ae(O):G(O))}function y(O){i.enabled!==!1&&(O.pointerType==="touch"?le(O):V(O))}function P(O){i.enabled!==!1&&(O.pointerType==="touch"?se(O):$(),Y(O),w.length===0&&(i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",P)))}function F(O){Y(O)}function U(O){i.enabled!==!1&&(window.removeEventListener("keydown",U),c===r.NONE&&(O.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:O.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:O.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function z(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",U))}function G(O){if(l===r.NONE)switch(O.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(x.copy(C(O.pageX,O.pageY)),_.copy(x)):Q===r.ZOOM&&!i.noZoom?(m.copy(A(O.pageX,O.pageY)),M.copy(m)):Q===r.PAN&&!i.noPan&&(v.copy(A(O.pageX,O.pageY)),E.copy(v)),i.dispatchEvent(Fs)}function V(O){const Q=c!==r.NONE?c:l;Q===r.ROTATE&&!i.noRotate?(_.copy(x),x.copy(C(O.pageX,O.pageY))):Q===r.ZOOM&&!i.noZoom?M.copy(A(O.pageX,O.pageY)):Q===r.PAN&&!i.noPan&&E.copy(A(O.pageX,O.pageY))}function $(){l=r.NONE,i.dispatchEvent(Os)}function W(O){if(i.enabled!==!1&&i.noZoom!==!0){switch(O.preventDefault(),O.deltaMode){case 2:m.y-=O.deltaY*.025;break;case 1:m.y-=O.deltaY*.01;break;default:m.y-=O.deltaY*25e-5;break}i.dispatchEvent(Fs),i.dispatchEvent(Os)}}function ae(O){switch(K(O),w.length){case 1:l=r.TOUCH_ROTATE,x.copy(C(w[0].pageX,w[0].pageY)),_.copy(x);break;default:l=r.TOUCH_ZOOM_PAN;const Q=w[0].pageX-w[1].pageX,me=w[0].pageY-w[1].pageY;d=u=Math.sqrt(Q*Q+me*me);const Ee=(w[0].pageX+w[1].pageX)/2,D=(w[0].pageY+w[1].pageY)/2;v.copy(A(Ee,D)),E.copy(v);break}i.dispatchEvent(Fs)}function le(O){switch(K(O),w.length){case 1:_.copy(x),x.copy(C(O.pageX,O.pageY));break;default:const Q=ue(O),me=O.pageX-Q.x,Ee=O.pageY-Q.y;d=Math.sqrt(me*me+Ee*Ee);const D=(O.pageX+Q.x)/2,ce=(O.pageY+Q.y)/2;E.copy(A(D,ce));break}}function se(O){switch(w.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,x.copy(C(O.pageX,O.pageY)),_.copy(x);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let Q=0;Q<w.length;Q++)if(w[Q].pointerId!==O.pointerId){const me=b[w[Q].pointerId];x.copy(C(me.x,me.y)),_.copy(x);break}break}i.dispatchEvent(Os)}function Me(O){i.enabled!==!1&&O.preventDefault()}function Te(O){w.push(O)}function Y(O){delete b[O.pointerId];for(let Q=0;Q<w.length;Q++)if(w[Q].pointerId==O.pointerId){w.splice(Q,1);return}}function K(O){let Q=b[O.pointerId];Q===void 0&&(Q=new Se,b[O.pointerId]=Q),Q.set(O.pageX,O.pageY)}function ue(O){const Q=O.pointerId===w[0].pointerId?w[1]:w[0];return b[Q.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",Me),i.domElement.removeEventListener("pointerdown",S),i.domElement.removeEventListener("pointercancel",F),i.domElement.removeEventListener("wheel",W),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",P),window.removeEventListener("keydown",U),window.removeEventListener("keyup",z)},this.domElement.addEventListener("contextmenu",Me),this.domElement.addEventListener("pointerdown",S),this.domElement.addEventListener("pointercancel",F),this.domElement.addEventListener("wheel",W,{passive:!1}),window.addEventListener("keydown",U),window.addEventListener("keyup",z),this.handleResize(),this.update()}}class Dd extends lt{constructor(e,t,i=!1,r=!1,a=1e4){const s=new nt;super(s,t),this.isMarchingCubes=!0;const o=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(M){this.resolution=M,this.isolation=80,this.size=M,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const v=a*3;this.positionArray=new Float32Array(v*3);const E=new Dt(this.positionArray,3);E.setUsage(ba),s.setAttribute("position",E),this.normalArray=new Float32Array(v*3);const w=new Dt(this.normalArray,3);if(w.setUsage(ba),s.setAttribute("normal",w),this.enableUvs){this.uvArray=new Float32Array(v*2);const b=new Dt(this.uvArray,2);b.setUsage(ba),s.setAttribute("uv",b)}if(this.enableColors){this.colorArray=new Float32Array(v*3);const b=new Dt(this.colorArray,3);b.setUsage(ba),s.setAttribute("color",b)}s.boundingSphere=new Si(new I,1)};function d(M,v,E){return M+(v-M)*E}function h(M,v,E,w,b,A,C,S,y,P){const F=(E-C)/(S-C),U=o.normal_cache;l[v+0]=w+F*o.delta,l[v+1]=b,l[v+2]=A,c[v+0]=d(U[M+0],U[M+3],F),c[v+1]=d(U[M+1],U[M+4],F),c[v+2]=d(U[M+2],U[M+5],F),u[v+0]=d(o.palette[y*3+0],o.palette[P*3+0],F),u[v+1]=d(o.palette[y*3+1],o.palette[P*3+1],F),u[v+2]=d(o.palette[y*3+2],o.palette[P*3+2],F)}function f(M,v,E,w,b,A,C,S,y,P){const F=(E-C)/(S-C),U=o.normal_cache;l[v+0]=w,l[v+1]=b+F*o.delta,l[v+2]=A;const z=M+o.yd*3;c[v+0]=d(U[M+0],U[z+0],F),c[v+1]=d(U[M+1],U[z+1],F),c[v+2]=d(U[M+2],U[z+2],F),u[v+0]=d(o.palette[y*3+0],o.palette[P*3+0],F),u[v+1]=d(o.palette[y*3+1],o.palette[P*3+1],F),u[v+2]=d(o.palette[y*3+2],o.palette[P*3+2],F)}function _(M,v,E,w,b,A,C,S,y,P){const F=(E-C)/(S-C),U=o.normal_cache;l[v+0]=w,l[v+1]=b,l[v+2]=A+F*o.delta;const z=M+o.zd*3;c[v+0]=d(U[M+0],U[z+0],F),c[v+1]=d(U[M+1],U[z+1],F),c[v+2]=d(U[M+2],U[z+2],F),u[v+0]=d(o.palette[y*3+0],o.palette[P*3+0],F),u[v+1]=d(o.palette[y*3+1],o.palette[P*3+1],F),u[v+2]=d(o.palette[y*3+2],o.palette[P*3+2],F)}function x(M){const v=M*3;o.normal_cache[v]===0&&(o.normal_cache[v+0]=o.field[M-1]-o.field[M+1],o.normal_cache[v+1]=o.field[M-o.yd]-o.field[M+o.yd],o.normal_cache[v+2]=o.field[M-o.zd]-o.field[M+o.zd])}function g(M,v,E,w,b){const A=w+1,C=w+o.yd,S=w+o.zd,y=A+o.yd,P=A+o.zd,F=w+o.yd+o.zd,U=A+o.yd+o.zd;let z=0;const G=o.field[w],V=o.field[A],$=o.field[C],W=o.field[y],ae=o.field[S],le=o.field[P],se=o.field[F],Me=o.field[U];G<b&&(z|=1),V<b&&(z|=2),$<b&&(z|=8),W<b&&(z|=4),ae<b&&(z|=16),le<b&&(z|=32),se<b&&(z|=128),Me<b&&(z|=64);const Te=i_[z];if(Te===0)return 0;const Y=o.delta,K=M+Y,ue=v+Y,O=E+Y;Te&1&&(x(w),x(A),h(w*3,0,b,M,v,E,G,V,w,A)),Te&2&&(x(A),x(y),f(A*3,3,b,K,v,E,V,W,A,y)),Te&4&&(x(C),x(y),h(C*3,6,b,M,ue,E,$,W,C,y)),Te&8&&(x(w),x(C),f(w*3,9,b,M,v,E,G,$,w,C)),Te&16&&(x(S),x(P),h(S*3,12,b,M,v,O,ae,le,S,P)),Te&32&&(x(P),x(U),f(P*3,15,b,K,v,O,le,Me,P,U)),Te&64&&(x(F),x(U),h(F*3,18,b,M,ue,O,se,Me,F,U)),Te&128&&(x(S),x(F),f(S*3,21,b,M,v,O,ae,se,S,F)),Te&256&&(x(w),x(S),_(w*3,24,b,M,v,E,G,ae,w,S)),Te&512&&(x(A),x(P),_(A*3,27,b,K,v,E,V,le,A,P)),Te&1024&&(x(y),x(U),_(y*3,30,b,K,ue,E,W,Me,y,U)),Te&2048&&(x(C),x(F),_(C*3,33,b,M,ue,E,$,se,C,F)),z<<=4;let Q,me,Ee,D=0,ce=0;for(;io[z+ce]!=-1;)Q=z+ce,me=Q+1,Ee=Q+2,m(l,c,u,3*io[Q],3*io[me],3*io[Ee]),ce+=3,D++;return D}function m(M,v,E,w,b,A){const C=o.count*3;if(o.positionArray[C+0]=M[w],o.positionArray[C+1]=M[w+1],o.positionArray[C+2]=M[w+2],o.positionArray[C+3]=M[b],o.positionArray[C+4]=M[b+1],o.positionArray[C+5]=M[b+2],o.positionArray[C+6]=M[A],o.positionArray[C+7]=M[A+1],o.positionArray[C+8]=M[A+2],o.material.flatShading===!0){const S=(v[w+0]+v[b+0]+v[A+0])/3,y=(v[w+1]+v[b+1]+v[A+1])/3,P=(v[w+2]+v[b+2]+v[A+2])/3;o.normalArray[C+0]=S,o.normalArray[C+1]=y,o.normalArray[C+2]=P,o.normalArray[C+3]=S,o.normalArray[C+4]=y,o.normalArray[C+5]=P,o.normalArray[C+6]=S,o.normalArray[C+7]=y,o.normalArray[C+8]=P}else o.normalArray[C+0]=v[w+0],o.normalArray[C+1]=v[w+1],o.normalArray[C+2]=v[w+2],o.normalArray[C+3]=v[b+0],o.normalArray[C+4]=v[b+1],o.normalArray[C+5]=v[b+2],o.normalArray[C+6]=v[A+0],o.normalArray[C+7]=v[A+1],o.normalArray[C+8]=v[A+2];if(o.enableUvs){const S=o.count*2;o.uvArray[S+0]=M[w+0],o.uvArray[S+1]=M[w+2],o.uvArray[S+2]=M[b+0],o.uvArray[S+3]=M[b+2],o.uvArray[S+4]=M[A+0],o.uvArray[S+5]=M[A+2]}o.enableColors&&(o.colorArray[C+0]=E[w+0],o.colorArray[C+1]=E[w+1],o.colorArray[C+2]=E[w+2],o.colorArray[C+3]=E[b+0],o.colorArray[C+4]=E[b+1],o.colorArray[C+5]=E[b+2],o.colorArray[C+6]=E[A+0],o.colorArray[C+7]=E[A+1],o.colorArray[C+8]=E[A+2]),o.count+=3}this.addBall=function(M,v,E,w,b,A){const C=Math.sign(w);w=Math.abs(w);const S=A!=null;let y=new xe(M,v,E);if(S)try{y=A instanceof xe?A:Array.isArray(A)?new xe(Math.min(Math.abs(A[0]),1),Math.min(Math.abs(A[1]),1),Math.min(Math.abs(A[2]),1)):new xe(A)}catch{y=new xe(M,v,E)}const P=this.size*Math.sqrt(w/b),F=E*this.size,U=v*this.size,z=M*this.size;let G=Math.floor(F-P);G<1&&(G=1);let V=Math.floor(F+P);V>this.size-1&&(V=this.size-1);let $=Math.floor(U-P);$<1&&($=1);let W=Math.floor(U+P);W>this.size-1&&(W=this.size-1);let ae=Math.floor(z-P);ae<1&&(ae=1);let le=Math.floor(z+P);le>this.size-1&&(le=this.size-1);let se,Me,Te,Y,K,ue,O,Q,me,Ee,D;for(Te=G;Te<V;Te++)for(K=this.size2*Te,Q=Te/this.size-E,me=Q*Q,Me=$;Me<W;Me++)for(Y=K+this.size*Me,O=Me/this.size-v,Ee=O*O,se=ae;se<le;se++)if(ue=se/this.size-M,D=w/(1e-6+ue*ue+Ee+me)-b,D>0){this.field[Y+se]+=D*C;const ce=Math.sqrt((se-z)*(se-z)+(Me-U)*(Me-U)+(Te-F)*(Te-F))/P,Ne=1-ce*ce*ce*(ce*(ce*6-15)+10);this.palette[(Y+se)*3+0]+=y.r*Ne,this.palette[(Y+se)*3+1]+=y.g*Ne,this.palette[(Y+se)*3+2]+=y.b*Ne}},this.addPlaneX=function(M,v){const E=this.size,w=this.yd,b=this.zd,A=this.field;let C,S,y,P,F,U,z,G=E*Math.sqrt(M/v);for(G>E&&(G=E),C=0;C<G;C++)if(U=C/E,P=U*U,F=M/(1e-4+P)-v,F>0)for(S=0;S<E;S++)for(z=C+S*w,y=0;y<E;y++)A[b*y+z]+=F},this.addPlaneY=function(M,v){const E=this.size,w=this.yd,b=this.zd,A=this.field;let C,S,y,P,F,U,z,G,V=E*Math.sqrt(M/v);for(V>E&&(V=E),S=0;S<V;S++)if(U=S/E,P=U*U,F=M/(1e-4+P)-v,F>0)for(z=S*w,C=0;C<E;C++)for(G=z+C,y=0;y<E;y++)A[b*y+G]+=F},this.addPlaneZ=function(M,v){const E=this.size,w=this.yd,b=this.zd,A=this.field;let C,S,y,P,F,U,z,G,V=E*Math.sqrt(M/v);for(V>E&&(V=E),y=0;y<V;y++)if(U=y/E,P=U*U,F=M/(1e-4+P)-v,F>0)for(z=b*y,S=0;S<E;S++)for(G=z+S*w,C=0;C<E;C++)A[G+C]+=F},this.setCell=function(M,v,E,w){const b=this.size2*E+this.size*v+M;this.field[b]=w},this.getCell=function(M,v,E){const w=this.size2*E+this.size*v+M;return this.field[w]},this.blur=function(M=1){const v=this.field,E=v.slice(),w=this.size,b=this.size2;for(let A=0;A<w;A++)for(let C=0;C<w;C++)for(let S=0;S<w;S++){const y=b*S+w*C+A;let P=E[y],F=1;for(let U=-1;U<=1;U+=2){const z=U+A;if(!(z<0||z>=w))for(let G=-1;G<=1;G+=2){const V=G+C;if(!(V<0||V>=w))for(let $=-1;$<=1;$+=2){const W=$+S;if(W<0||W>=w)continue;const ae=b*W+w*V+z,le=E[ae];F++,P+=M*(le-P)/F}}}v[y]=P}},this.reset=function(){for(let M=0;M<this.size3;M++)this.normal_cache[M*3]=0,this.field[M]=0,this.palette[M*3]=this.palette[M*3+1]=this.palette[M*3+2]=0},this.update=function(){this.count=0;const M=this.size-2;for(let v=1;v<M;v++){const E=this.size2*v,w=(v-this.halfsize)/this.halfsize;for(let b=1;b<M;b++){const A=E+this.size*b,C=(b-this.halfsize)/this.halfsize;for(let S=1;S<M;S++){const y=(S-this.halfsize)/this.halfsize,P=A+S;g(y,C,w,P,this.isolation)}}}this.geometry.setDrawRange(0,this.count),s.getAttribute("position").needsUpdate=!0,s.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(s.getAttribute("uv").needsUpdate=!0),this.enableColors&&(s.getAttribute("color").needsUpdate=!0),this.count/3>a&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const i_=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),io=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),ro=[1];function pi(n){if(n<0)return NaN;for(let e=ro.length;e<=n;e+=1)ro[e]=ro[e-1]*e;return ro[n]}function Ud(n,e,t){const i=Math.max(1,Math.min(6,Math.round(n))),r=Math.max(0,Math.min(i-1,Math.round(e))),a=Math.max(-r,Math.min(r,Math.round(t)));return{n:i,l:r,m:a}}function Bn(n,e,t){if(e===0)return`${n}s`;if(e===1)return`${n}${t===0?"Pz":t>0?"Px":"Py"}`;if(e===2){if(t===0)return`${n}Dz2`;if(t===1)return`${n}Dxz`;if(t===-1)return`${n}Dyz`;if(t===2)return`${n}Dx2-y2`;if(t===-2)return`${n}Dxy`}if(e===3){if(t===0)return`${n}Fz3`;if(t===1)return`${n}Fxz2`;if(t===-1)return`${n}Fyz2`;if(t===2)return`${n}Fz(x2-y2)`;if(t===-2)return`${n}Fxyz`;if(t===3)return`${n}Fx(x2-3y2)`;if(t===-3)return`${n}Fy(3x2-y2)`}if(e===4){if(t===0)return`${n}Gz4`;if(t===1)return`${n}Gxz3`;if(t===-1)return`${n}Gyz3`;if(t===2)return`${n}Gz2(x2-y2)`;if(t===-2)return`${n}Gxyz2`;if(t===3)return`${n}Gxz(x2-3y2)`;if(t===-3)return`${n}Gyz(3x2-y2)`;if(t===4)return`${n}Gx4-6x2y2+y4`;if(t===-4)return`${n}Gxy(x2-y2)`}if(e===5){if(t===0)return`${n}Hz5`;if(t===1)return`${n}Hxz4`;if(t===-1)return`${n}Hyz4`;if(t===2)return`${n}Hz3(x2-y2)`;if(t===-2)return`${n}Hxyz3`;if(t===3)return`${n}Hz(x4-6x2y2+y4)`;if(t===-3)return`${n}Hxyz(x2-y2)`;if(t===4)return`${n}Hxz(x2-y2)`;if(t===-4)return`${n}Hyz(x2-y2)`;if(t===5)return`${n}Hx(x4-10x2y2+5y4)`;if(t===-5)return`${n}Hy(5x4-10x2y2+y4)`}return`${n}${["s","P","D","F","G","H"][e]??`L${e}`}${t}`}function r_(n,e,t){let i=0;for(let r=0;r<=n;r+=1){const a=(r%2===0?1:-1)*pi(n+e)/(pi(n-r)*pi(e+r)*pi(r));i+=a*t**r}return i}function a_(n,e,t){const i=Math.abs(e);let r=1;if(i>0){const o=Math.sqrt(Math.max(0,1-t*t));let l=1;for(let c=1;c<=i;c+=1)r*=-l*o,l+=2}if(n===i)return r;let a=t*(2*i+1)*r;if(n===i+1)return a;let s=0;for(let o=i+2;o<=n;o+=1)s=((2*o-1)*t*a-(o+i-1)*r)/(o-i),r=a,a=s;return s}function Qs(n,e,t,i){const r=Math.sin(t),a=Math.cos(t),s=Math.cos(i),o=Math.sin(i);if(n===1){const d=Math.sqrt(3/(4*Math.PI));return e===0?d*a:e>0?d*r*s:d*r*o}if(n===2){if(e===0)return Math.sqrt(5/Math.PI)/4*(3*a*a-1);if(e===1)return Math.sqrt(15/Math.PI)/2*r*a*s;if(e===-1)return Math.sqrt(15/Math.PI)/2*r*a*o;if(e===2)return Math.sqrt(15/Math.PI)/4*r*r*Math.cos(2*i);if(e===-2)return Math.sqrt(15/Math.PI)/4*r*r*Math.sin(2*i)}const l=Math.abs(e),c=Math.sqrt((2*n+1)/(4*Math.PI)*(pi(n-l)/pi(n+l))),u=a_(n,l,Math.cos(t));return e>0?Math.sqrt(2)*c*u*Math.cos(l*i):e<0?Math.sqrt(2)*c*u*Math.sin(l*i):c*u}function o_(n,e,t){const i=Math.abs(e);let r=1;for(let c=2;c<=2*i;c+=2)r*=(1-t*t)*((c+1)/c);let a=Math.sqrt(Math.max(0,r/2));if(n===i)return a;let s=Math.sqrt(2*i+3)*t*a;if(n===i+1)return s;let o=0,l=Math.sqrt((4*i*i+8*i+3)/(2*i+1));for(let c=i+2;c<=n;c+=1){const u=Math.sqrt((4*c*c-1)/(c*c-i*i));o=s*t*u-a*u/l,a=s,s=o,l=u}return o}function qi(n,e,t,i){const r=2*t*i/n;return Math.sqrt((2*t/n)**3*(pi(n-e-1)/(2*n*pi(n+e))))*Math.exp(-r/2)*r**e*r_(n-e-1,2*e+1,r)}function Yt({n,l:e,m:t,z:i},r,a,s){const o=Math.hypot(r,a,s);if(o<1e-9)return e===0?qi(n,e,i,0)*Qs(e,t,0,0):0;const l=Math.acos(s/o),c=Math.atan2(a,r);return qi(n,e,i,o)*Qs(e,t,l,c)}function Bs({n,l:e,m:t,z:i},r,a,s){const o=Math.hypot(r,a),l=Math.hypot(o,s),c=l<.01?0:s/l,u=qi(n,e,i,l)*o_(e,t,c);let d=1/Math.sqrt(Math.PI);if(t!==0){const h=o>.001?t*Math.atan2(a,r):Math.PI/2;d*=t>0?Math.cos(h):-Math.sin(h)}return u*d}function s_(n){return n>=7?120:n===6?100:n===5?90:n===4?80:n===3?70:n===2?60:50}function ti(n,e=.8){let t=0;const i=.002;let r=0,a=0;for(;a<2e5;){const d=ao(n,r),h=ao(n,r+i/2),f=ao(n,r+i);if(t+=(d+4*h+f)/6,r+=i,a+=1,i*t>e)break}const s=r*1.5,o=s_(n.n),c=2*Math.ceil(s)/o*o/2,u=Math.sqrt(ao(n,r)/(4*Math.PI*r*r))||1e-4;return{radius:c,iso:Math.max(1e-4,u),gridSize:o,leastRadius:s}}function ao(n,e){return e*e*qi(n.n,n.l,n.z,e)**2}function yo(n,e){return`${n-e-1} radial, ${e} angular`}function l_(n,e){const{radius:t}=e,i=Math.min(42,Math.max(24,Math.round(e.density*.58))),r=[],a=[],s=t*2/(i-1),o=t*t,l=15e4;let c=0;for(let _=0;_<i;_+=1){const x=-t+_*s;for(let g=0;g<i;g+=1){const m=-t+g*s;for(let M=0;M<i;M+=1){const v=-t+M*s;if(x*x+m*m+v*v>o||!el(e.cutaway,x,m,v))continue;const E=Yt(n,x,m,v);c=Math.max(c,Math.abs(E))}}}const u=c||1;let d=(n.n*73856093^n.l*19349663^(n.m+8)*83492791^Math.round(t*1e3))>>>0;const h=()=>(d=1664525*d+1013904223>>>0,d/4294967296),f=Math.min(26e5,Math.max(72e4,e.density*e.density*430));for(let _=0;_<f;_+=1){const x=(h()*2-1)*t,g=(h()*2-1)*t,m=(h()*2-1)*t;if(x*x+g*g+m*m>o||!el(e.cutaway,x,g,m))continue;const M=Yt(n,x,g,m),v=Math.min(1,(Math.abs(M)/u)**2);if(h()>v)continue;const E=M>=0?r:a;if(!(E.length/3>=l)&&(E.push(x,g,m),r.length/3>=l&&a.length/3>=l))break}return{positive:r,negative:a}}function Nd(n,e){const t=e.thetaSegments??64,i=e.phiSegments??128,r=e.radius??4,a=[];let s=0;for(let l=0;l<=t;l+=1){const c=Math.PI*l/t,u=[];for(let d=0;d<=i;d+=1){const h=Math.PI*2*d/i,f=Qs(n.l,n.m,c,h);u.push(f),s=Math.max(s,Math.abs(f))}a.push(u)}function o(l){const c=[],u=[],d=[],h=r/(s||1);for(let f=0;f<=t;f+=1){const _=Math.PI*f/t,x=[],g=Math.sin(_),m=Math.cos(_);for(let M=0;M<=i;M+=1){const v=Math.PI*2*M/i,E=a[f][M];if(l*E<=1e-6){x.push(-1);continue}const w=Math.abs(E)*h;x.push(c.length/3),c.push(w*g*Math.cos(v),w*g*Math.sin(v),w*m)}d.push(x)}for(let f=0;f<t;f+=1)for(let _=0;_<i;_+=1){const x=d[f][_],g=d[f+1][_],m=d[f][_+1],M=d[f+1][_+1];x>=0&&g>=0&&m>=0&&u.push(x,g,m),m>=0&&g>=0&&M>=0&&u.push(m,g,M)}return{vertices:c,indices:u}}return{positive:o(1),negative:o(-1)}}function el(n,e,t,i){return n==="quarter"?t<=0&&i<=0:n==="eighth"?e<=0&&t<=0&&i<=0:n==="threeQuarter"?!(t>0&&i>0):!0}function Fd(n,e,t,i=1){const r=t.density,a=t.radius,s=a*2/r;let o=0,l=0;for(let c=0;c<r;c+=1){const u=-a+c*s;for(let d=0;d<r;d+=1){const h=-a+d*s;for(let f=0;f<r;f+=1){const _=-a+f*s,x=el(t.cutaway,_,h,u)?i*Yt(e,_,h,u):0;n[o]=x,l=Math.max(l,Math.abs(x)),o+=1}}}return l}function c_(n,e,t){return Fd(n,e,t,1)}function Od(n,e,t,i=180){const r=[],a=e.radius;let s=0;for(let o=0;o<i;o+=1){const l=[],c=a-2*a*o/(i-1);for(let u=0;u<i;u+=1){const d=-a+2*a*u/(i-1);let h=0;t==="xoy"&&(h=Yt(n,d,c,0)),t==="xoz"&&(h=Yt(n,d,0,c)),t==="yoz"&&(h=Yt(n,0,d,c)),s=Math.max(s,Math.abs(h)),l.push(h)}r.push(l)}return{rows:r,maxAbs:s}}function u_(n,e,t,i){const a=t.radius/140;let s=0,o=i*Yt(n,0,0,0)-t.iso,l=null;for(let c=1;c<=140;c+=1){const u=c*a,d=i*Yt(n,e.x*u,e.y*u,e.z*u)-t.iso;if(o<=0&&d>=0){let h=s,f=u;for(let _=0;_<12;_+=1){const x=(h+f)/2;i*Yt(n,e.x*x,e.y*x,e.z*x)-t.iso>=0?f=x:h=x}l=f}if(o>=0&&d<=0&&l!==null){let h=s,f=u;for(let _=0;_<12;_+=1){const x=(h+f)/2;i*Yt(n,e.x*x,e.y*x,e.z*x)-t.iso>=0?h=x:f=x}l=h}s=u,o=d}return l}function d_(n,e){const t=e.thetaSegments??58,i=e.phiSegments??96;function r(a){const s=[],o=[],l=[];for(let c=0;c<=t;c+=1){const u=Math.PI*c/t,d=[],h=Math.sin(u),f=Math.cos(u);for(let _=0;_<=i;_+=1){const x=Math.PI*2*_/i,g={x:h*Math.cos(x),y:h*Math.sin(x),z:f},m=u_(n,g,e,a);m===null||!Number.isFinite(m)?d.push(-1):(d.push(s.length/3),s.push(g.x*m,g.y*m,g.z*m))}l.push(d)}for(let c=0;c<t;c+=1)for(let u=0;u<i;u+=1){const d=l[c][u],h=l[c+1][u],f=l[c+1][u+1],_=l[c][u+1];d>=0&&h>=0&&f>=0&&o.push(d,h,f),d>=0&&f>=0&&_>=0&&o.push(d,f,_)}return{vertices:s,indices:o}}return{positive:r(1),negative:r(-1)}}const p={viewer:document.querySelector("#viewer"),angularViewer:document.querySelector("#angularViewer"),projectionViewer:document.querySelector("#projectionViewer"),radialViewer:document.querySelector("#radialViewer"),viewGrid:document.querySelector(".view-grid"),mainWindow:document.querySelector(".main-window"),menuPopup:document.querySelector("#menuPopup"),menuItems:document.querySelectorAll(".menu-item"),toolRender:document.querySelector("#toolRender"),toolSave:document.querySelector("#toolSave"),toolTile:document.querySelector("#toolTile"),toolOverlap:document.querySelector("#toolOverlap"),toolAxis:document.querySelector("#toolAxis"),toolXOY:document.querySelector("#toolXOY"),toolYOZ:document.querySelector("#toolYOZ"),toolXOZ:document.querySelector("#toolXOZ"),preset:document.querySelector("#presetInput"),cosType:document.querySelector("#cosTypeInput"),sinType:document.querySelector("#sinTypeInput"),cloud:document.querySelector("#cloudInput"),positiveLobe:document.querySelector("#positiveLobeInput"),negativeLobe:document.querySelector("#negativeLobeInput"),wireframe:document.querySelector("#wireframeInput"),smooth:document.querySelector("#smoothInput"),projection:document.querySelector("#projectionInput"),paletteOne:document.querySelector("#paletteOneInput"),paletteTwo:document.querySelector("#paletteTwoInput"),xySlice:document.querySelector("#xySliceInput"),yzSlice:document.querySelector("#yzSliceInput"),xzSlice:document.querySelector("#xzSliceInput"),quarter:document.querySelector("#quarterInput"),eighth:document.querySelector("#eighthInput"),threeQuarter:document.querySelector("#threeQuarterInput"),radialR:document.querySelector("#radialRInput"),radialR2:document.querySelector("#radialR2Input"),radialRdf:document.querySelector("#radialRdfInput"),radialSection:document.querySelector("#radialSectionInput"),radialSide:document.querySelector("#radialSideInput"),radialCurve:document.querySelector("#radialCurveInput"),radialAxis:document.querySelector("#radialAxisInput"),relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue"),longitudeNode:document.querySelector("#longitudeNodeInput"),grid3d:document.querySelector("#grid3dInput"),desktopMatch:document.querySelector("#desktopMatchInput"),n:document.querySelector("#nInput"),l:document.querySelector("#lInput"),m:document.querySelector("#mInput"),z:document.querySelector("#zInput"),mode:document.querySelector("#modeInput"),slice:document.querySelector("#sliceInput"),node:document.querySelector("#nodeInput"),axis:document.querySelector("#axisInput"),box:document.querySelector("#boxInput"),positiveColor:document.querySelector("#positiveColorInput"),negativeColor:document.querySelector("#negativeColorInput"),backgroundColor:document.querySelector("#backgroundColorInput"),iso:document.querySelector("#isoInput"),density:document.querySelector("#densityInput"),radius:document.querySelector("#radiusInput"),boxSizeDisplay:document.querySelector("#boxSizeDisplay"),intervalValue:document.querySelector("#intervalValue"),probabilityValue:document.querySelector("#probabilityValue"),opacity:document.querySelector("#opacityInput"),isoValue:document.querySelector("#isoValue"),densityValue:document.querySelector("#densityValue"),radiusValue:document.querySelector("#radiusValue"),opacityValue:document.querySelector("#opacityValue"),renderButton:document.querySelector("#renderButton"),axisProxyButton:document.querySelector("#axisProxyButton"),presetButton:document.querySelector("#presetButton"),redrawProxyButton:document.querySelector("#redrawProxyButton"),resetCameraButton:document.querySelector("#resetCameraButton"),screenshotButton:document.querySelector("#screenshotButton"),orbitalName:document.querySelector("#orbitalName"),viewerTitle:document.querySelector("#viewerTitle"),statusText:document.querySelector("#statusText"),posCount:document.querySelector("#posCount"),negCount:document.querySelector("#negCount"),nodeText:document.querySelector("#nodeText"),sliceText:document.querySelector("#sliceText"),boxText:document.querySelector("#boxText"),isoText:document.querySelector("#isoText"),openActivityButton:document.querySelector("#openActivityButton"),annotationModeButton:document.querySelector("#annotationModeButton"),annotationToolbar:document.querySelector("#annotationToolbar"),annotationClearButton:document.querySelector("#annotationClearButton"),openSketchButton:document.querySelector("#openSketchButton"),openAnimationButton:document.querySelector("#openAnimationButton"),openFormulaButton:document.querySelector("#openFormulaButton"),openPredictButton:document.querySelector("#openPredictButton"),openChallengeButton:document.querySelector("#openChallengeButton"),sketchWindow:document.querySelector("#sketchWindow"),formulaWindow:document.querySelector("#formulaWindow"),formulaOrbitalName:document.querySelector("#formulaOrbitalName"),formulaQuantumText:document.querySelector("#formulaQuantumText"),formulaMain:document.querySelector("#formulaMain"),formulaRadialText:document.querySelector("#formulaRadialText"),formulaAngularText:document.querySelector("#formulaAngularText"),formulaVisualText:document.querySelector("#formulaVisualText"),formulaRadialNodes:document.querySelector("#formulaRadialNodes"),formulaAngularNodes:document.querySelector("#formulaAngularNodes"),formulaPhaseText:document.querySelector("#formulaPhaseText"),animationWindow:document.querySelector("#animationWindow"),animationCanvas:document.querySelector("#animationCanvas"),animationStepBadge:document.querySelector("#animationStepBadge"),animationTitle:document.querySelector("#animationTitle"),animationText:document.querySelector("#animationText"),animationProgressFill:document.querySelector("#animationProgressFill"),animationRestartButton:document.querySelector("#animationRestartButton"),animationPrevButton:document.querySelector("#animationPrevButton"),animationPlayButton:document.querySelector("#animationPlayButton"),animationNextButton:document.querySelector("#animationNextButton"),animationExportButton:document.querySelector("#animationExportButton"),activityWindow:document.querySelector("#activityWindow"),activityTitle:document.querySelector("#activityTitle"),activityModeButtons:document.querySelectorAll("[data-activity-mode]"),activityPanes:document.querySelectorAll(".activity-pane"),predictPane:document.querySelector("#predictPane"),scorePane:document.querySelector("#scorePane"),diagnosisPane:document.querySelector("#diagnosisPane"),nodesPane:document.querySelector("#nodesPane"),comparePane:document.querySelector("#comparePane"),challengePane:document.querySelector("#challengePane"),explainPane:document.querySelector("#explainPane"),tabletPane:document.querySelector("#tabletPane"),predictTarget:document.querySelector("#predictTargetInput"),startPredictButton:document.querySelector("#startPredictButton"),verifyPredictButton:document.querySelector("#verifyPredictButton"),predictPrompt:document.querySelector("#predictPrompt"),scoreCurrentButton:document.querySelector("#scoreCurrentButton"),scoreShowRubricButton:document.querySelector("#scoreShowRubricButton"),scoreResetButton:document.querySelector("#scoreResetButton"),scorePrompt:document.querySelector("#scorePrompt"),diagnoseNodesButton:document.querySelector("#diagnoseNodesButton"),diagnosePhaseButton:document.querySelector("#diagnosePhaseButton"),diagnoseProjectionButton:document.querySelector("#diagnoseProjectionButton"),diagnosisPrompt:document.querySelector("#diagnosisPrompt"),nodeRevealButton:document.querySelector("#nodeRevealButton"),nodeHideButton:document.querySelector("#nodeHideButton"),compareA:document.querySelector("#compareAInput"),compareB:document.querySelector("#compareBInput"),compareApplyButton:document.querySelector("#compareApplyButton"),compareLoadAButton:document.querySelector("#compareLoadAButton"),compareLoadBButton:document.querySelector("#compareLoadBButton"),compareAViewer:document.querySelector("#compareAViewer"),compareBViewer:document.querySelector("#compareBViewer"),compareATitle:document.querySelector("#compareATitle"),compareBTitle:document.querySelector("#compareBTitle"),compareANotes:document.querySelector("#compareANotes"),compareBNotes:document.querySelector("#compareBNotes"),compareSummary:document.querySelector("#compareSummary"),newChallengeButton:document.querySelector("#newChallengeButton"),challengeGuess:document.querySelector("#challengeGuessInput"),revealChallengeButton:document.querySelector("#revealChallengeButton"),challengePrompt:document.querySelector("#challengePrompt"),explainRestartButton:document.querySelector("#explainRestartButton"),explainPrevButton:document.querySelector("#explainPrevButton"),explainPlayButton:document.querySelector("#explainPlayButton"),explainNextButton:document.querySelector("#explainNextButton"),explainProgressFill:document.querySelector("#explainProgressFill"),explainStepBadge:document.querySelector("#explainStepBadge"),explainStepTitle:document.querySelector("#explainStepTitle"),explainStepText:document.querySelector("#explainStepText"),explainFormula:document.querySelector("#explainFormula"),explainObserveText:document.querySelector("#explainObserveText"),explainReasonText:document.querySelector("#explainReasonText"),explainHintText:document.querySelector("#explainHintText"),sketchCanvas:document.querySelector("#sketchCanvas"),sketchColor:document.querySelector("#sketchColorInput"),sketchSize:document.querySelector("#sketchSizeInput"),sketchPen:document.querySelector("#sketchPenButton"),sketchEraser:document.querySelector("#sketchEraserButton"),sketchClear:document.querySelector("#sketchClearButton"),tabletLargeButton:document.querySelector("#tabletLargeButton"),tabletRestoreButton:document.querySelector("#tabletRestoreButton"),tabletScreenshotButton:document.querySelector("#tabletScreenshotButton")},Ht=new bi;Ht.background=new xe(1120295);function Hr(n,e){const t=new n_(n,e);return t.rotateSpeed=3.2,t.zoomSpeed=1.15,t.panSpeed=.65,t.staticMoving=!1,t.dynamicDampingFactor=.12,t.noRotate=!1,t.noZoom=!1,t.noPan=!1,t}function zs(n){return n.pointerType==="mouse"&&(n.button===2||(n.buttons&2)===2)}function gn(n){var l,c,u,d,h,f;if(!n)return;const e=n.object,t=(l=e==null?void 0:e.position)==null?void 0:l.clone(),i=(c=e==null?void 0:e.quaternion)==null?void 0:c.clone(),r=(u=e==null?void 0:e.up)==null?void 0:u.clone(),a=e==null?void 0:e.zoom,s=(d=n.target)==null?void 0:d.clone(),o=n.staticMoving;typeof n.reset=="function"&&t&&s&&(n.staticMoving=!0,n.reset(),e.position.copy(t),i&&e.quaternion.copy(i),r&&e.up.copy(r),typeof a=="number"&&(e.zoom=a),n.target.copy(s),(h=e.updateProjectionMatrix)==null||h.call(e),n.staticMoving=o),n.enabled=!0,n.noRotate=!1,n.noZoom=!1,n.noPan=!1,(f=n.handleResize)==null||f.call(n),n.update()}function ga(n,e){const t=n==null?void 0:n.querySelector("canvas");if(!t||!e)return;const i=()=>typeof e=="function"?e():e;t.addEventListener("pointerdown",r=>{if(zs(r)){r.preventDefault(),r.stopImmediatePropagation(),gn(i());return}gn(i())},{capture:!0}),t.addEventListener("pointermove",r=>{zs(r)&&(r.preventDefault(),r.stopImmediatePropagation())},{capture:!0}),t.addEventListener("pointerup",r=>{zs(r)&&(r.preventDefault(),r.stopImmediatePropagation()),gn(i())},{capture:!0}),t.addEventListener("pointercancel",()=>gn(i()),{capture:!0}),t.addEventListener("lostpointercapture",()=>gn(i())),t.addEventListener("mouseenter",()=>gn(i())),t.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopImmediatePropagation(),gn(i())},{capture:!0})}const Xe=new Sn(-5,5,5,-5,.1,1e3),dn=new ei({antialias:!0,preserveDrawingBuffer:!0});dn.setPixelRatio(Math.min(window.devicePixelRatio,2));dn.localClippingEnabled=!0;p.viewer.appendChild(dn.domElement);let Ae=Hr(Xe,dn.domElement);const yn=new bi,it=new Sn(-5,5,5,-5,.1,1e3),Yi=new ei({antialias:!0,preserveDrawingBuffer:!0});Yi.setPixelRatio(Math.min(window.devicePixelRatio,2));Yi.localClippingEnabled=!0;p.angularViewer.appendChild(Yi.domElement);const Rt=Hr(it,Yi.domElement),Nn=new bi,_t=new Sn(-5,5,5,-5,.1,1e3);_t.up.set(0,0,1);const $i=new ei({antialias:!0,preserveDrawingBuffer:!0});$i.setPixelRatio(Math.min(window.devicePixelRatio,2));p.projectionViewer.appendChild($i.domElement);const Pn=Hr(_t,$i.domElement),Fn=new bi,bt=new Sn(-5,5,5,-5,.1,1e3),Gr=new ei({antialias:!0,preserveDrawingBuffer:!0});Gr.setPixelRatio(Math.min(window.devicePixelRatio,2));p.radialViewer.appendChild(Gr.domElement);const Xt=Hr(bt,Gr.domElement);ga(p.viewer,()=>Ae);ga(p.angularViewer,Rt);ga(p.projectionViewer,Pn);ga(p.radialViewer,Xt);function Tr(){gn(Ae),gn(Rt),gn(Pn),gn(Xt)}function h_(){var t,i,r;const n=((t=Ae==null?void 0:Ae.target)==null?void 0:t.clone())??new I,e={rotateSpeed:(Ae==null?void 0:Ae.rotateSpeed)??3.2,zoomSpeed:(Ae==null?void 0:Ae.zoomSpeed)??1.15,panSpeed:(Ae==null?void 0:Ae.panSpeed)??.65,staticMoving:(Ae==null?void 0:Ae.staticMoving)??!1,dynamicDampingFactor:(Ae==null?void 0:Ae.dynamicDampingFactor)??.12,noRotate:(Ae==null?void 0:Ae.noRotate)??!1,noZoom:(Ae==null?void 0:Ae.noZoom)??!1,noPan:(Ae==null?void 0:Ae.noPan)??!1};(i=Ae==null?void 0:Ae.dispose)==null||i.call(Ae),Ae=Hr(Xe,dn.domElement),Object.assign(Ae,e),Ae.target.copy(n),(r=Ae.handleResize)==null||r.call(Ae),Ae.update()}const Ml=new un(16777215,1.45);Ml.position.set(0,0,1);Xe.add(Ml);Xe.add(new un(16777215,.28));Ht.add(Xe);Ht.add(new wi(16777215,.42));const yl=new un(16777215,1.45);yl.position.set(0,0,1);it.add(yl);it.add(new un(16777215,.28));yn.add(it);yn.add(new wi(16777215,.42));const Sl=new un(16777215,1.7);Sl.position.set(0,0,80);Nn.add(Sl);Nn.add(new wi(16777215,.65));const El=new un(16777215,1.8);El.position.set(0,-40,60);Fn.add(El);Fn.add(new wi(16777215,.62));for(const n of[dn,Yi,$i,Gr])n.outputColorSpace=Tt,n.toneMapping=Br,n.toneMappingExposure=1.16;Ml.intensity=1.72;yl.intensity=1.72;Sl.intensity=1.88;El.intensity=1.92;const da=Oo(4.5,.2,.9);let hi=Oo(4.2,.1,.9);Ht.add(da);yn.add(hi);let wt=null,At=null,Hi=null,Gi=null,So=null,aa=null,Eo=null,Tu=null,ci=null,ui=null,oa=null,sa=null,zi=null,la=null,ca=null,rn=null,tl=null,nl=null,il=null,rl=null,al=null,ol=null,Xn=null,mn=null,bl=1,Qn=5,jt=4,Tl=3,ha=4.5,wn=null,$n=null,Bt=null,Mn=null,wu="",An=null,jn=null,zt=null,In=null,Au="",Rn=null,_i=null,kt=null,Dn=null,Ru="",Cn=null,Lt=null,wr=!1;const fa=[],Ye={drawing:!1,erasing:!1,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,strokes:[],currentStroke:null};function wl(n=(e=>(e=p.backgroundColor)==null?void 0:e.value)()||"#668080"){document.documentElement.style.setProperty("--viewer-bg",n);const t=new xe(n);Ht.background=t.clone(),yn.background=t.clone(),Nn.background=t.clone(),Fn.background=t.clone();for(const i of fa)i.scene.background=t.clone()}function f_(){var t;if(document.querySelector("#relationModeInput")){Object.assign(p,{relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue")});return}const n=(t=p.longitudeNode)==null?void 0:t.closest("fieldset");if(!n)return;const e=document.createElement("fieldset");e.className="relation-panel",e.innerHTML=`
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
  `,n.insertAdjacentElement("afterend",e),Object.assign(p,{relationMode:e.querySelector("#relationModeInput"),syncRotation:e.querySelector("#syncRotationInput"),scanRadius:e.querySelector("#scanRadiusInput"),scanRadiusValue:e.querySelector("#scanRadiusValue"),scanTheta:e.querySelector("#scanThetaInput"),scanThetaValue:e.querySelector("#scanThetaValue"),scanPhi:e.querySelector("#scanPhiInput"),scanPhiValue:e.querySelector("#scanPhiValue")})}f_();wl();const ji=document.createElement("button");ji.type="button";ji.className="fullscreen-exit-button";ji.textContent="退出全屏";ji.hidden=!0;document.body.appendChild(ji);function p_(n,e,t){return Bn(n,e,t)}function Bd(n,e,t){return`${n},${e},${t}`}function m_(n){const e=[0];for(let t=1;t<=n;t+=1)e.push(t,-t);return e}function zd(n){const e=Math.max(1,Math.min(6,Math.round(n)||1)),t=[];for(let i=0;i<e;i+=1)for(const r of m_(i))t.push({value:Bd(e,i,r),label:p_(e,i,r)});return t}function g_(n=6){const e=[];for(let t=1;t<=n;t+=1)e.push(...zd(t));return e}const Gt=g_(6);function oo(n,e,t=null){if(n){n.replaceChildren();for(const i of e){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,n.append(r)}t&&e.some(i=>i.value===t)&&(n.value=t)}}function __(){oo(p.predictTarget,Gt,"2,1,1"),oo(p.challengeGuess,Gt,"2,1,1"),oo(p.compareA,Gt,"2,1,1"),oo(p.compareB,Gt,"3,1,1")}function x_(n=null){if(!p.preset)return;const e=n??Ud(Number(p.n.value),Number(p.l.value),Number(p.m.value));if(Number(p.preset.dataset.n)!==e.n){p.preset.replaceChildren();for(const i of zd(e.n)){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,p.preset.append(r)}p.preset.dataset.n=String(e.n)}p.preset.value=Bd(e.n,e.l,e.m)}const ie={challengeTarget:Gt[0],challengeTotal:0,challengeCorrect:0,dragWindow:null,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,explanationStep:0,explanationPlaying:!1,explanationStartedAt:0,explanationTimer:null,explanationFrame:null,animationStep:0,animationPlaying:!1,animationStartedAt:0,animationTimer:null,animationFrame:null,animationExporting:!1,annotationMode:!1,annotationDrag:null};function st(){var e,t;const n=Ud(Number(p.n.value),Number(p.l.value),Number(p.m.value));return(e=p.sinType)!=null&&e.checked&&n.m>0&&(n.m=-n.m),(t=p.cosType)!=null&&t.checked&&n.m<0&&(n.m=Math.abs(n.m)),p.n.value=n.n,p.l.max=n.n-1,p.l.value=n.l,p.m.min=-n.l,p.m.max=n.l,p.m.value=Math.abs(n.m),x_(n),{...n,z:Math.max(1,Math.min(10,Number(p.z.value)||1))}}function Zt(){var r,a,s,o,l,c,u,d,h,f,_,x,g,m,M,v,E,w,b,A,C,S,y,P;const n=st(),e=p.desktopMatch.checked?ti(n):null;let t=p.slice.value;(r=p.xySlice)!=null&&r.checked&&(t="xoy"),(a=p.yzSlice)!=null&&a.checked&&(t="yoz"),(s=p.xzSlice)!=null&&s.checked&&(t="xoz"),!((o=p.xySlice)!=null&&o.checked)&&!((l=p.yzSlice)!=null&&l.checked)&&!((c=p.xzSlice)!=null&&c.checked)&&(t="none"),(u=p.projection)!=null&&u.checked&&t==="none"&&(t="xoy");const i={iso:Number(p.iso.value),density:Number(p.density.value),radius:Number(p.radius.value),opacity:Number(p.opacity.value),mode:p.mode.value,showCloud:((d=p.cloud)==null?void 0:d.checked)??!1,slice:t,showNode:p.node.checked||((h=p.longitudeNode)==null?void 0:h.checked),showAxis:p.axis.checked,showBox:p.box.checked,showPositive:((f=p.positiveLobe)==null?void 0:f.checked)??!0,showNegative:((_=p.negativeLobe)==null?void 0:_.checked)??!0,wireframe:((x=p.wireframe)==null?void 0:x.checked)??!1,smooth:((g=p.smooth)==null?void 0:g.checked)??!1,showProjection:((m=p.projection)==null?void 0:m.checked)??!1,grid3d:((M=p.grid3d)==null?void 0:M.checked)??!1,cutaway:(v=p.eighth)!=null&&v.checked?"eighth":(E=p.quarter)!=null&&E.checked?"quarter":(w=p.threeQuarter)!=null&&w.checked?"threeQuarter":"none",radialMode:(b=p.radialR)!=null&&b.checked?"R":(A=p.radialR2)!=null&&A.checked?"R2":"RDF",radialSection:((C=p.radialSection)==null?void 0:C.checked)??!1,radialSide:((S=p.radialSide)==null?void 0:S.checked)??!1,radialCurve:((y=p.radialCurve)==null?void 0:y.checked)??!0,radialAxis:((P=p.radialAxis)==null?void 0:P.checked)??!1,positiveColor:p.positiveColor.value,negativeColor:p.negativeColor.value,backgroundColor:p.backgroundColor.value,desktopMatched:!!e};return p.isoValue.value=i.iso.toFixed(4),p.densityValue.value=i.density,p.radiusValue.value=i.radius.toFixed(1),p.opacityValue.value=i.opacity.toFixed(2),p.boxSizeDisplay&&(p.boxSizeDisplay.value=(i.radius*2.4).toFixed(2)),p.intervalValue&&(p.intervalValue.value=(i.radius*2/i.density).toFixed(3)),p.probabilityValue&&(p.probabilityValue.value="0.800"),p.iso.disabled=!1,p.density.disabled=!1,p.radius.disabled=!1,i}function Wr(){if(!p.desktopMatch.checked)return;const n=ti(st()),e=Math.min(Number(p.iso.max),Math.max(Number(p.iso.min),n.iso));p.iso.value=e.toFixed(4),p.density.value=Math.min(Number(p.density.max),Math.max(Number(p.density.min),n.gridSize)),p.radius.value=Math.min(Number(p.radius.max),Math.max(Number(p.radius.min),n.radius)),Zt()}function v_(){if(!p.boxSizeDisplay)return;const n=Number(p.boxSizeDisplay.value);!Number.isFinite(n)||n<=0||(p.radius.value=Math.min(Number(p.radius.max),Math.max(Number(p.radius.min),n/2.4)),Zt())}function bo(n,e){const t=new nt;t.setAttribute("position",new tt(n,3));const i=new Float32Array(n.length/3);for(let a=0;a<i.length;a+=1){const s=Math.sin((a+1)*12.9898)*43758.5453;i[a]=s-Math.floor(s)}t.setAttribute("seed",new Dt(i,1));const r=new Jn({uniforms:{uColor:{value:new xe(e)},uTime:{value:0},uSize:{value:2.7}},transparent:!0,depthWrite:!1,blending:Hs,vertexShader:`
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
    `});return new $1(t,r)}function M_(n){var e,t;for(const i of[wt,At,Hi,Gi])i!=null&&i.isPoints&&((t=(e=i.material)==null?void 0:e.uniforms)!=null&&t.uTime)&&(i.material.uniforms.uTime.value=n)}function Nt(n){return Number.parseInt(n.replace("#","0x"),16)}function sl(n,e){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle=e;const r=n.length>2?34:n.length>1?44:58;i.font=`700 ${r}px Segoe UI, Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,64,64);const a=new Pd(t);a.colorSpace=Tt;const s=new Rd({map:a,transparent:!0,alphaTest:.2,depthTest:!0,depthWrite:!1});s.toneMapped=!1;const o=new X1(s);return o.scale.set(.68,.68,.68),o.renderOrder=20,o}function ll(n,e,t,i){const r=e.clone().sub(n),a=r.length(),s=new Ei({color:i});s.toneMapped=!1;const o=new lt(new ma(t,t,a,48,1,!1),s);return o.position.copy(n).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new I(0,1,0),r.normalize()),o}function cl(n,e,t,i,r){const a=new Ei({color:r});a.toneMapped=!1;const s=new lt(new vl(i,t,96,1,!1),a);return s.position.copy(e),s.quaternion.setFromUnitVectors(new I(0,1,0),n.clone().normalize()),s}function Oo(n,e=.2,t=.9){const i=new Ut,r=n*t,a=n*.02,s=r*.1,o=a*3,l=[{dir:new I(1,0,0),color:16711680,label:"x",labelColor:"#ff0000"},{dir:new I(0,1,0),color:47400,label:"y",labelColor:"#00e63a"},{dir:new I(0,0,1),color:15785216,label:"z",labelColor:"#fff000"}];for(const c of l){const u=c.dir.clone().multiplyScalar(-r),d=c.dir.clone().multiplyScalar(r);i.add(ll(u,d,a,c.color)),i.add(cl(c.dir,c.dir.clone().multiplyScalar(r*1.01),s,o,c.color));const h=sl(c.label,c.labelColor);c.label==="x"&&h.position.set(r*1.2,-e,0),c.label==="y"&&h.position.set(-e,r*1.2,0),c.label==="z"&&h.position.set(-e,-e,r*1.2),i.add(h)}return i}function y_(n,e,t,i){const r=new Ut,a=Math.max(.018,n*.006),s=n*.08,o=a*3.2,l=new I(0,0,t),c=new I(n,0,t),u=new I(0,0,t+e);r.add(ll(l,c,a,15785216)),r.add(cl(new I(1,0,0),c,s,o,15785216)),r.add(ll(l,u,a,22527)),r.add(cl(new I(0,0,1),u,s,o,22527));const d=sl("r","#fff000");d.scale.setScalar(.48),d.position.set(n+s*.85,-n*.045,t),r.add(d);const h=sl(i==="R2"?"R*R":i,"#0057ff");return h.scale.setScalar(.58),h.position.set(-n*.08,0,t+e+s*.9),r.add(h),r}function Nr(n,e,t){const i=new nt;i.setAttribute("position",new tt(n.vertices,3)),i.setIndex(n.indices),i.computeVertexNormals();const r=new ra({color:e,transparent:t<1,opacity:t,side:mt,emissive:e,emissiveIntensity:.055});return new lt(i,r)}function Fr(n,e){n!=null&&n.material&&(n.visible=!0,n.material.wireframe=e.wireframe&&!e.smooth,n.material.flatShading=!e.smooth,n.material.clippingPlanes=[],n.material.clipIntersection=!1,n.material.needsUpdate=!0)}function kd(n){return n.wireframe||n.smooth}function S_(n,e,t){var M;n.updateMatrixWorld(!0);const i=n.geometry.getAttribute("position"),r=Number.isFinite(n.count)&&n.count>0?n.count:Number.POSITIVE_INFINITY,a=Number.isFinite((M=n.geometry.drawRange)==null?void 0:M.count)&&n.geometry.drawRange.count>0?n.geometry.drawRange.count:Number.POSITIVE_INFINITY,s=Math.min(i.count,r,a),o=[],l=[],c=new Map;function u(v){return Number.isFinite(v.x)&&Number.isFinite(v.y)&&Number.isFinite(v.z)}function d(v){return e.cutaway==="quarter"?(v.y>0&&(v.y=0),v.z>0&&(v.z=0)):e.cutaway==="eighth"?(v.x>0&&(v.x=0),v.y>0&&(v.y=0),v.z>0&&(v.z=0)):e.cutaway==="threeQuarter"&&v.y>0&&v.z>0&&(v.y<v.z?v.y=0:v.z=0),v}function h(v,E){const w=n.localToWorld(new I(i.getX(v),i.getY(v),i.getZ(v)));if(d(w),!u(w))return-1;if(E){const A=`${Math.round(w.x*1e4)},${Math.round(w.y*1e4)},${Math.round(w.z*1e4)}`;if(c.has(A))return c.get(A);const C=o.length/3;return o.push(w.x,w.y,w.z),c.set(A,C),C}return o.push(w.x,w.y,w.z),o.length/3-1}const f=Math.floor(s/3),_=e.smooth&&!e.wireframe;for(let v=0;v<f;v+=1){const E=v*3,w=v*3+1,b=v*3+2,A=h(E,_),C=h(w,_),S=h(b,_);A>=0&&C>=0&&S>=0&&l.push(A,C,S)}const x=new nt;x.setAttribute("position",new tt(o,3)),x.setIndex(l),e.smooth&&!e.wireframe&&E_(x,e),x.computeVertexNormals();const g=n.material.clone();g.color=new xe(Nt(t)),g.emissive=new xe(Nt(t)),g.side=mt,g.wireframe=e.wireframe,g.flatShading=!e.smooth,g.clippingPlanes=[],g.needsUpdate=!0;const m=new lt(x,g);return m.userData.vertexCount=s,m}function E_(n,e){const t=n.getAttribute("position"),i=n.index;if(!t||!i)return;const r=t.count,a=Array.from({length:r},()=>new Set);for(let h=0;h<i.count;h+=3){const f=i.getX(h),_=i.getX(h+1),x=i.getX(h+2);a[f].add(_).add(x),a[_].add(f).add(x),a[x].add(f).add(_)}const s=Math.max(.035,e.radius/Math.max(80,e.density*2)),o=new Uint8Array(r);for(let h=0;h<r;h+=1){const f=t.getX(h),_=t.getY(h),x=t.getZ(h);e.cutaway==="quarter"&&(Math.abs(_)<s||Math.abs(x)<s)&&(o[h]=1),e.cutaway==="eighth"&&(Math.abs(f)<s||Math.abs(_)<s||Math.abs(x)<s)&&(o[h]=1),e.cutaway==="threeQuarter"&&(Math.abs(_)<s||Math.abs(x)<s)&&(o[h]=1)}const l=new Float32Array(t.array),c=new Float32Array(l.length),u=e.cutaway==="none"?10:7,d=e.cutaway==="none"?.16:.1;for(let h=0;h<u;h+=1){c.set(l);for(let f=0;f<r;f+=1){if(o[f]||a[f].size<3)continue;let _=0,x=0,g=0;for(const v of a[f]){const E=v*3;_+=l[E],x+=l[E+1],g+=l[E+2]}const m=a[f].size,M=f*3;c[M]=l[M]+(_/m-l[M])*d,c[M+1]=l[M+1]+(x/m-l[M+1])*d,c[M+2]=l[M+2]+(g/m-l[M+2])*d}l.set(c)}t.array.set(l),t.needsUpdate=!0}function To(n,e,t,i){const r={...e,density:e.smooth&&!e.wireframe?Math.min(180,Math.max(e.density,Math.round(e.density*2))):e.density},a=new ra({color:Nt(i),transparent:e.opacity<1,opacity:e.opacity,side:mt,emissive:Nt(i),emissiveIntensity:.055}),s=n.n>=5?5e5:16e4,o=new Dd(r.density,a,!0,!0,s);return o.isolation=r.iso,o.position.set(0,0,0),o.scale.set(r.radius,r.radius,r.radius),Fd(o.field,n,r,t),o.update(),S_(o,e,i)}function b_(n,e){const t=new K1({color:15922423,roughness:.65,transparent:!0,opacity:.26,side:mt}),i=new Dd(e.density,t,!0,!0,1e5);return i.isolation=0,i.scale.set(e.radius,e.radius,e.radius),c_(i.field,n,e),i.update(),i.userData.vertexCount=i.count??0,i}function T_(n,e){if(e.slice==="none")return null;const t=document.createElement("canvas");t.width=180,t.height=180;const i=t.getContext("2d"),r=i.createImageData(t.width,t.height),a=Od(n,e,e.slice,t.width),s=a.maxAbs||1;for(let d=0;d<t.height;d+=1)for(let h=0;h<t.width;h+=1){const f=a.rows[d][h]/s,_=(d*t.width+h)*4;f>=0?(r.data[_]=255,r.data[_+1]=Math.round(245-Math.abs(f)*140),r.data[_+2]=Math.round(245-Math.abs(f)*115)):(r.data[_]=Math.round(235-Math.abs(f)*130),r.data[_+1]=Math.round(242-Math.abs(f)*95),r.data[_+2]=255),r.data[_+3]=Math.round(55+Math.min(1,Math.abs(f))*160)}i.putImageData(r,0,0);const o=new Pd(t);o.colorSpace=Tt;const l=new Ei({map:o,side:mt,transparent:!0,opacity:.68,depthWrite:!1}),c=new pa(e.radius*2,e.radius*2,1,1),u=new lt(c,l);return e.slice==="xoy"?u.rotation.set(0,0,0):e.slice==="xoz"?u.rotation.set(Math.PI/2,0,0):e.slice==="yoz"&&u.rotation.set(0,Math.PI/2,0),u}function Vd(n){const e=new kr(n*2,n*2,n*2),t=new j1(e),i=new Ti({color:13686237,transparent:!0,opacity:.58}),r=new xl(t,i);return e.dispose(),r}function w_(){for(const n of[wt,At,Hi,Gi,So,aa,Eo,Tu])n&&Zi(Ht,n);wt=null,At=null,Hi=null,Gi=null,So=null,aa=null,Eo=null,Tu=null}function A_(){for(const n of[ci,ui])n&&Zi(yn,n);ci=null,ui=null}function R_(n,e=!0){hi&&Zi(yn,hi),hi=Oo(n,Math.max(.08,n*.024),.9),hi.visible=e,yn.add(hi)}function C_(){for(const n of[oa,sa,zi])n&&Zi(Nn,n);oa=null,sa=null,zi=null}function Hd(){for(const n of[la,ca,rn,tl,nl])n&&Zi(Fn,n);la=null,ca=null,rn=null,tl=null,nl=null}function Zi(n,e){n.remove(e),e.traverse(t=>{if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const i of t.material)i.dispose();else t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())})}function rt(){Al();const n=st(),e=Zt(),t=Bn(n.n,n.l,n.m);p.statusText.textContent="Calculating",p.renderButton.disabled=!0,requestAnimationFrame(()=>{var o;w_(),A_(),C_(),Hd();let i=0,r=0;if(wl(e.backgroundColor),da.visible=e.showAxis,da.scale.setScalar(Math.max(1,e.radius/4.5)),(o=p.toolAxis)==null||o.classList.toggle("active",e.showAxis),e.mode==="marching"||e.mode==="points")wt=To(n,e,1,e.positiveColor),At=To(n,e,-1,e.negativeColor),i=wt.userData.vertexCount,r=At.userData.vertexCount;else{const{positive:l,negative:c}=d_(n,{...e,thetaSegments:Math.max(30,e.density+18),phiSegments:Math.max(52,e.density*3)});wt=Nr(l,Nt(e.positiveColor),e.opacity),At=Nr(c,Nt(e.negativeColor),e.opacity),Fr(wt,e),Fr(At,e),i=l.vertices.length/3,r=c.vertices.length/3}const a=kd(e);if(wt.visible=e.showPositive&&a,At.visible=e.showNegative&&a,Ht.add(wt,At),e.showCloud){const{positive:l,negative:c}=l_(n,e);Hi=bo(l,Nt(e.positiveColor)),Gi=bo(c,Nt(e.negativeColor)),Hi.visible=e.showPositive,Gi.visible=e.showNegative,Ht.add(Hi,Gi),i=l.length/3,r=c.length/3}e.showNode&&yo(n.n,n.l)!=="0 radial, 0 angular"&&(So=b_(n,e),Ht.add(So)),aa=T_(n,e),aa&&Ht.add(aa),(e.showBox||e.grid3d)&&(Eo=Vd(e.radius),Ht.add(Eo)),G_(e),p.orbitalName.textContent=t,p.viewerTitle.textContent=`原子轨道  ${t}`,p.nodeText.textContent=yo(n.n,n.l),p.sliceText.textContent=e.slice.toUpperCase(),p.boxText.textContent=e.radius.toFixed(2),p.isoText.textContent=e.iso.toFixed(5),p.posCount.textContent=String(i),p.negCount.textContent=String(r),p.statusText.textContent="Rendered",Qd(),p.animationWindow&&!p.animationWindow.classList.contains("closed")&&Or(0),B_(n,e),ix(n,e),$d(n,e);const s=n.n>=5||n.l>=3?1.65:1.22;U_(n,e.radius*s,Math.max(jt,I_(e))),h_(),p.renderButton.disabled=!1,sn()})}function P_(){return Array.from(document.querySelectorAll(".view-grid > .qt-window"))}function Al(n={}){for(const e of P_())e.classList.remove("closed"),n.restoreLayout?e.classList.remove("minimized","maximized"):e.classList.remove("minimized"),Ki(e)}function Bo(n=Qn){const e=p.viewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Xe.left=-n*t,Xe.right=n*t,Xe.top=n,Xe.bottom=-n):(Xe.left=-n,Xe.right=n,Xe.top=n/t,Xe.bottom=-n/t),Xe.near=.1,Xe.far=Math.max(1e3,n*8),Xe.updateProjectionMatrix()}function Mi(n,e=90){return Math.max(e,n*2.8)}function Rl(n=Qn){var t,i,r;Qn=n;const e=Mi(n);Xe.position.set(0,0,e),Xe.lookAt(0,0,0),Bo(n),Ae.target.set(0,0,0),Ae.update(),(t=p.toolXOY)==null||t.classList.add("active"),(i=p.toolYOZ)==null||i.classList.remove("active"),(r=p.toolXOZ)==null||r.classList.remove("active")}function zo(n=Math.max(3,Qn*.45)){const e=p.angularViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(it.left=-n*t,it.right=n*t,it.top=n,it.bottom=-n):(it.left=-n,it.right=n,it.top=n/t,it.bottom=-n/t),it.near=.1,it.far=Math.max(1e3,n*8),it.updateProjectionMatrix()}function L_(n=4){var t;jt=Math.max(3,n);const e=Mi(jt,40);it.position.set(0,0,e),it.lookAt(0,0,0),zo(jt),Rt.target.set(0,0,0),(t=Rt.handleResize)==null||t.call(Rt),Rt.update()}function I_(n){const e=Math.max(4,Math.min(8,n.radius*.55))*.74;return Math.max(5.8,e*1.55)}function D_(...n){var a;const e=new ln,t=new ln;let i=!1;for(const s of n)s&&((a=s.updateWorldMatrix)==null||a.call(s,!0,!1),t.setFromObject(s),!(!Number.isFinite(t.min.x)||!Number.isFinite(t.max.x))&&(i?e.union(t):e.copy(t),i=!0));if(!i)return 4.2;const r=new Si;return e.getBoundingSphere(r),Math.max(.001,r.radius)}function U_(n,e,t){var s,o,l,c,u;const i=Il(n);Qn=e,jt=Math.max(3,t);const r=Mi(e),a=Mi(jt,40);i==="yoz"?(Xe.position.set(r,0,0),it.position.set(a,0,0)):i==="xoz"?(Xe.position.set(0,r,0),it.position.set(0,a,0)):(Xe.position.set(0,0,r),it.position.set(0,0,a)),Xe.lookAt(0,0,0),it.lookAt(0,0,0),Bo(e),zo(jt),Ae.target.set(0,0,0),Rt.target.set(0,0,0),(s=Ae.handleResize)==null||s.call(Ae),(o=Rt.handleResize)==null||o.call(Rt),Ae.update(),Rt.update(),(l=p.toolXOY)==null||l.classList.toggle("active",i==="xoy"),(c=p.toolYOZ)==null||c.classList.toggle("active",i==="yoz"),(u=p.toolXOZ)==null||u.classList.toggle("active",i==="xoz")}function Gd(n=Math.max(2.5,Qn*.6)){const e=p.projectionViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(_t.left=-n*t,_t.right=n*t,_t.top=n,_t.bottom=-n):(_t.left=-n,_t.right=n,_t.top=n/t,_t.bottom=-n/t),_t.near=.1,_t.far=1e3,_t.updateProjectionMatrix()}function N_(n=Math.max(3,Qn*.5)){var e;Tl=n,_t.up.set(0,0,1),_t.position.set(n*.78,-n*1.18,n*.68),_t.lookAt(0,0,0),Gd(n),Pn.target.set(0,0,0),(e=Pn.handleResize)==null||e.call(Pn),Pn.update()}function Cl(n=4.5){const e=p.radialViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(bt.left=-n*t,bt.right=n*t,bt.top=n,bt.bottom=-n):(bt.left=-n,bt.right=n,bt.top=n/t,bt.bottom=-n/t),bt.near=.1,bt.far=1e3,bt.updateProjectionMatrix()}function F_(n=4.5){var e;ha=n,bt.position.set(n*.65,-n*.9,n*.7),bt.lookAt(0,0,0),Cl(n),Xt.target.set(0,0,0),(e=Xt.handleResize)==null||e.call(Xt),Xt.update()}function O_(){var i;if(!Pl()||!((i=p.syncRotation)!=null&&i.checked))return;const n=Xe.position.clone().sub(Ae.target).normalize(),e=Xe.up.clone(),t=(r,a,s,o=40)=>{const l=Mi(s,o);r.position.copy(n.clone().multiplyScalar(l)),r.up.copy(e),r.lookAt(0,0,0),a.target.set(0,0,0),r.updateProjectionMatrix()};t(it,Rt,jt,40),t(_t,Pn,Tl,30)}function B_(n,e){const t={...e,radius:Math.max(4,Math.min(8,e.radius*.55)),thetaSegments:72,phiSegments:144},{positive:i,negative:r}=Nd(n,t);ci=Nr(i,Nt(e.positiveColor),1),ui=Nr(r,Nt(e.negativeColor),1),Fr(ci,{...e,smooth:!0,wireframe:e.wireframe}),Fr(ui,{...e,smooth:!0,wireframe:e.wireframe}),ci.scale.setScalar(.74),ui.scale.setScalar(.74);const a=kd(e);ci.visible=e.showPositive&&a,ui.visible=e.showNegative&&a,yn.add(ci,ui);const s=D_(ci,ui),o=Math.max(4.2,s*1.45);R_(o,e.showAxis),jt=Math.max(jt,o*1.12)}function z_(n){var e,t;return new xe(n>=0?((e=p.positiveColor)==null?void 0:e.value)||"#ab57ab":((t=p.negativeColor)==null?void 0:t.value)||"#219e9e")}function Cu(n){const e=Math.min(1,Math.abs(n));return z_(n).lerp(new xe(16777215),Math.max(0,1-e)*.88)}const ea=(()=>{const n=[255,0,0],e=[255,0,255],t=[255,255,255],i=[0,255,255],r=[0,0,255],a=[],s=(l,c)=>{for(let u=0;u<c;u+=1)a.push(l)},o=(l,c,u)=>{const d=[(c[0]-l[0])/u,(c[1]-l[1])/u,(c[2]-l[2])/u];for(let h=0;h<u;h+=1)a.push([l[0]+h*d[0],l[1]+h*d[1],l[2]+h*d[2]])};return s(n,20),o(n,e,80),o(e,t,25),s(t,5),o(t,i,25),o(i,r,80),s(r,20),a.reverse().map(([l,c,u])=>new xe(l/255,c/255,u/255))})();function Wd(n){const t=(Math.max(-1,Math.min(1,n))+1)/2*(ea.length-1),i=Math.max(0,Math.min(ea.length-1,Math.floor(t))),r=Math.max(0,Math.min(ea.length-1,i+1));return ea[i].clone().lerp(ea[r],t-i)}function k_(n,e,t,i,r,a){const s=e.rows,o=s.length,l=2*t/(o-1),c=Math.max(1,Math.round(.4/l)),u=new Ti({color:16777215,transparent:!0,opacity:.56}),d=(h,f)=>{const _=-t+2*t*h/(o-1),x=-t+2*t*f/(o-1),g=s[f][h]/a;return new I(_,x,i+g*r+.012)};for(let h=0;h<o;h+=c){const f=[];for(let _=0;_<o;_+=1)f.push(d(_,h));n.add(new Ur(new nt().setFromPoints(f),u))}for(let h=0;h<o;h+=c){const f=[];for(let _=0;_<o;_+=1)f.push(d(h,_));n.add(new Ur(new nt().setFromPoints(f),u))}}function V_(n,e,t,i,r,a=1){const s=e.rows,o=s.length,l=2*t/(o-1),c=[(d,h,f)=>new I(-t+(d+f)*l,-t+h*l,i),(d,h,f)=>new I(-t+(d+1)*l,-t+(h+f)*l,i),(d,h,f)=>new I(-t+(d+1-f)*l,-t+(h+1)*l,i),(d,h,f)=>new I(-t+d*l,-t+(h+1-f)*l,i)],u=[[0,1],[1,2],[2,3],[3,0]];for(const d of r){const h=new Ti({color:Wd(d).getHex(),transparent:!0,opacity:.95}),f=[];for(let _=0;_<o-1;_+=1)for(let x=0;x<o-1;x+=1){const g=[s[_][x],s[_][x+1],s[_+1][x+1],s[_+1][x]].map(M=>M/a),m=[];for(let M=0;M<4;M+=1){const[v,E]=u[M],w=g[v]-d,b=g[E]-d;if(w===0||w*b<0){const A=Math.abs(w)+Math.abs(b);if(A<1e-12)continue;const C=Math.max(0,Math.min(1,Math.abs(w)/A));m.push(c[M](x,_,C))}}m.length>=2&&(f.push(m[0],m[1]),m.length>=4&&f.push(m[2],m[3]))}f.length&&n.add(new xl(new nt().setFromPoints(f),h))}}const Un={radius:16756736,direction:3538793,point:16776960};function Pl(){var n;return!!((n=p.relationMode)!=null&&n.checked)}function H_(){const n=[[Ht,il],[Nn,rl],[Fn,al],[yn,ol]];for(const[e,t]of n)t&&Zi(e,t);il=null,rl=null,al=null,ol=null}function Pu(n){var i,r;let e=0;const t=new I;return(i=n==null?void 0:n.updateMatrixWorld)==null||i.call(n,!0),(r=n==null?void 0:n.traverse)==null||r.call(n,a=>{var o,l;const s=(l=(o=a.geometry)==null?void 0:o.attributes)==null?void 0:l.position;if(s){a.updateMatrixWorld(!0);for(let c=0;c<s.count;c+=1)t.fromBufferAttribute(s,c).applyMatrix4(a.matrixWorld),e=Math.max(e,t.length())}}),e}function G_(n){const e=Math.max(Pu(wt),Pu(At));bl=e>.001?e*1.02:n.radius*.86}function qd(){var u,d,h;const n=Zt(),e=Math.max(0,Math.min(100,Number(((u=p.scanRadius)==null?void 0:u.value)??45))),t=Math.max(0,Math.min(180,Number(((d=p.scanTheta)==null?void 0:d.value)??90))),i=(Number(((h=p.scanPhi)==null?void 0:h.value)??0)%360+360)%360,r=Math.max(.001,bl||n.radius),a=r*e/100,s=t*Math.PI/180,o=i*Math.PI/180,l=new I(Math.sin(s)*Math.cos(o),Math.sin(s)*Math.sin(o),Math.cos(s)).normalize(),c=l.clone().multiplyScalar(a);return{options:n,radiusPercent:e,thetaDegrees:t,phiDegrees:i,r:a,maxRadius:r,direction:l,point:c}}function W_(n=qd()){p.scanRadiusValue&&(p.scanRadiusValue.value=`${Math.round(n.radiusPercent)}%`),p.scanThetaValue&&(p.scanThetaValue.value=`${Math.round(n.thetaDegrees)}°`),p.scanPhiValue&&(p.scanPhiValue.value=`${Math.round(n.phiDegrees)}°`)}function Ll(n,e,t=.95){const i=new Ti({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new Ur(new nt().setFromPoints(n),i);return r.renderOrder=30,r}function q_(n,e,t=.95){const i=new Ti({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new xl(new nt().setFromPoints(n),i);return r.renderOrder=30,r}function X_(n,e,t,i=.95){const r=[];for(let s=0;s<=160;s+=1){const o=Math.PI*2*s/160;r.push(new I(n*Math.cos(o),n*Math.sin(o),e))}return Ll(r,t,i)}function Y_(n,e,t=.74){const i=[],s=o=>{for(let l=0;l<160;l+=1){const c=Math.PI*2*l/160,u=Math.PI*2*(l+1)/160;i.push(o(c),o(u))}};for(let o=1;o<12;o+=1){const l=Math.PI*o/12,c=Math.cos(l)*n,u=Math.sin(l)*n;s(d=>new I(u*Math.cos(d),u*Math.sin(d),c))}for(let o=0;o<6;o+=1){const l=Math.PI*o/6;s(c=>new I(n*Math.sin(c)*Math.cos(l),n*Math.sin(c)*Math.sin(l),n*Math.cos(c)))}return q_(i,e,t)}function ko(n,e,t=1){const i=new Ei({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new lt(new Fo(n,24,16),i);return r.renderOrder=32,r}function Xd(n,e,t,i,r){const a=new t_(n,new I(0,0,0),e,t,i,r);return a.traverse(s=>{s.material&&(s.material.depthTest=!1,s.material.depthWrite=!1,s.material.toneMapped=!1,s.renderOrder=31)}),a}function $_(n,e,t){return e==="xoz"?new Se(n.x*t,n.z*t):e==="yoz"?new Se(n.y*t,n.z*t):new Se(n.x*t,n.y*t)}function j_(n,e){const t=n.length();return t>e&&t>1e-9&&n.multiplyScalar(e/t),n}function Z_(n){const e=new Ut;n.r>.001&&e.add(Y_(n.r,Un.radius,.72));const t=Math.max(n.r,n.maxRadius*.22,1);e.add(Xd(n.direction,t,Un.direction,t*.11,t*.035));const i=ko(Math.max(.08,n.maxRadius*.018),Un.point);i.position.copy(n.point),e.add(i),Ht.add(e),il=e}function K_(n){const e=new Ut,t=Math.max(2.4,jt*.55);e.add(Xd(n.direction,t,Un.direction,t*.14,t*.045));const i=ko(.08,Un.point);i.position.copy(n.direction.clone().multiplyScalar(t)),e.add(i),yn.add(e),ol=e}function J_(n){if(!Xn)return;const e=new Ut,t=Xn.radius*.92,i=Xn.radius/Math.max(1e-4,n.maxRadius),r=Math.max(0,n.r*i),a=r>t?t/r:1,s=i*a,o=Math.min(t,Math.max(0,n.r*s));e.add(X_(o,Xn.bottomZ+.18,Un.radius,.95));const l=j_($_(n.point,Xn.plane,s),t),c=ko(.075,Un.point);c.position.set(l.x,l.y,Xn.bottomZ+.28),e.add(c),e.add(Ll([new I(0,0,Xn.bottomZ+.22),new I(l.x,l.y,Xn.bottomZ+.22)],Un.direction,.82)),Nn.add(e),rl=e}function Q_(n){if(!mn)return;const e=new Ut,t=Math.min(mn.radiusScale,n.r/Math.max(1e-4,mn.radialExtent)*mn.radiusScale),i=Yd(st(),n.r,n.options.radialMode),r=mn.diskZ+mn.curveLift+i/mn.maxAbs*mn.heightScale;e.add(Ll([new I(t,0,mn.baseZ-.15),new I(t,0,mn.heightTop)],Un.radius,.95));const a=ko(.07,Un.point);a.position.set(t,0,r),e.add(a),Fn.add(e),al=e}function Vo(){H_();const n=qd();W_(n),Pl()&&(Z_(n),K_(n),J_(n),Q_(n))}function ex(n){const e=n.length();if(e<1e-6)return;const t=Math.acos(Math.max(-1,Math.min(1,n.z/e))),i=(Math.atan2(n.y,n.x)+Math.PI*2)%(Math.PI*2);p.scanRadius&&(p.scanRadius.value=String(Math.round(Math.max(0,Math.min(100,e/Math.max(1e-4,bl)*100))))),p.scanTheta&&(p.scanTheta.value=String(Math.round(t*180/Math.PI))),p.scanPhi&&(p.scanPhi.value=String(Math.round(i*180/Math.PI))),Vo(),Zn(`关联高亮：r=${e.toFixed(2)}, θ=${Math.round(t*180/Math.PI)}°, φ=${Math.round(i*180/Math.PI)}°`)}function tx(n){var s;if(!Pl())return;const e=dn.domElement.getBoundingClientRect(),t=new Se((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),i=new e_;i.params.Points.threshold=Math.max(.12,Zt().radius*.025),i.setFromCamera(t,Xe);const r=[wt,At,Hi,Gi].filter(Boolean),a=i.intersectObjects(r,!0);(s=a[0])!=null&&s.point&&ex(a[0].point)}function Il(n){const e=Bn(n.n,n.l,n.m).replace(/^\d+/,"");return e.startsWith("Dyz")||e.startsWith("Fyz2")||e.startsWith("Gz3y")||e.startsWith("Gzy3")||e.startsWith("Gyz3")||e.startsWith("Hyz4")||e.startsWith("Hyz")?"yoz":e.startsWith("Pz")||e.startsWith("Dz2")||e.startsWith("Dxz")||e.startsWith("Fz3")||e.startsWith("Fxz2")||e.startsWith("Gz4")||e.startsWith("Gz3x")||e.startsWith("Gxz3")||e.startsWith("Gzx3")||e.startsWith("Hxz4")||e.startsWith("Hz5")||e.startsWith("Hxz")?"xoz":"xoy"}function nx(n,e,t,i){const r=[],a=e.radius;let s=0,o=0,l=0;for(let c=0;c<i;c+=1){const u=[],d=-a+2*a*c/(i-1);for(let h=0;h<i;h+=1){const f=-a+2*a*h/(i-1);let _=0;t==="xoy"&&(_=Bs(n,f,d,0)),t==="xoz"&&(_=Bs(n,f,0,d)),t==="yoz"&&(_=Bs(n,0,f,d)),s=Math.max(s,Math.abs(_)),o=Math.max(o,_),l=Math.min(l,_),u.push(_)}r.push(u)}return{data:{rows:r,maxAbs:s,maxPositive:o,minNegative:l},scale:1}}function ix(n,e){Nn.background=new xe(e.backgroundColor);const t=new Ut,r=ti(n).gridSize*2+1,a=Il(n),{data:s}=nx(n,e,a,r),o=(s.maxPositive>1e-12?s.maxPositive:s.maxAbs||1)/.9,l=[],c=[],u=[],d=Math.min(4.7,e.radius*.42),h=d*1,f=-d*1,_=d*.9;Xn={plane:a,radius:d,surfaceZ:h,bottomZ:f,height:_};for(let w=0;w<r;w+=1)for(let b=0;b<r;b+=1){const A=-d+2*d*b/(r-1),C=-d+2*d*w/(r-1),S=s.rows[w][b]/o,y=S;l.push(A,C,h+y*_);const P=Wd(S);c.push(P.r,P.g,P.b)}for(let w=0;w<r-1;w+=1)for(let b=0;b<r-1;b+=1){const A=w*r+b,C=A+1,S=A+r,y=S+1;u.push(A,S,C,C,S,y)}const x=new nt;x.setAttribute("position",new tt(l,3)),x.setAttribute("color",new tt(c,3)),x.setIndex(u),x.computeVertexNormals(),oa=new lt(x,new Ld({vertexColors:!0,side:mt,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04})),t.add(oa),k_(t,s,d,h,_,o);const g=new Ut,m=[];for(let w=0;w<r;w+=1)for(let b=0;b<r;b+=1){const A=-d+2*d*b/(r-1),C=-d+2*d*w/(r-1);m.push(A,C,f+.02)}const M=new nt;M.setAttribute("position",new tt(m,3)),M.setAttribute("color",new tt(c,3)),M.setIndex(u),M.computeVertexNormals();const v=new lt(M,new Ei({vertexColors:!0,side:mt,transparent:!0,opacity:.78}));g.add(v);const E=(w,b,A)=>Array.from({length:A},(C,S)=>w+(b-w)*S/(A-1));V_(g,s,d,f+.08,[...E(-1,0,20),...E(0,1,20)],o),sa=g,t.add(sa),zi=Vd(d),zi.scale.z=1,zi.position.z=(h+f)/2,t.add(zi),oa=t,sa=null,zi=null,Nn.add(t),N_(d*1.92),Vo()}function Yd(n,e,t){const i=Math.max(e,1e-4),r=qi(n.n,n.l,n.z,i);return t==="R"?r:t==="R2"?r*r:i*i*r*r}function $d(n,e){var E;Fn.background=new xe(e.backgroundColor);const t=150,i=80,r=Math.min(e.radius,Math.max(5,ti(n).leastRadius+1.2)),a=[];for(let w=0;w<=t;w+=1)a.push(Yd(n,r*w/t,e.radialMode));const s=Math.max(...a.map(Math.abs),1e-6),o=3.7,l=2.3,c=-1.25,u=0,d=.08,h=o*.9;mn={radialExtent:r,radiusScale:o,heightScale:l,baseZ:c,diskZ:u,curveLift:d,maxAbs:s,heightTop:(e.radialSide?h:u+d)+l+.38};const f=new Ut,_=new lt(new Fo(o,128,48,0,Math.PI*2,Math.PI/2,Math.PI/2),new ra({color:10921638,side:mt,transparent:!0,opacity:.82}));_.rotation.x=Math.PI/2,_.position.z=c,f.add(_);const x=new nt,g=[],m=[],M=[];for(let w=0;w<=i;w+=1){const b=w/i*o,A=Math.round(w/i*t),C=a[A]/s;for(let S=0;S<=128;S+=1){const y=Math.PI*2*S/128,P=b*Math.cos(y),F=b*Math.sin(y);g.push(P,F,u);const U=Cu(C);U.lerp(new xe(11053224),Math.max(0,1-Math.abs(C))*.72),m.push(U.r,U.g,U.b)}}const v=129;for(let w=0;w<i;w+=1)for(let b=0;b<128;b+=1){const A=w*v+b,C=A+1,S=A+v,y=S+1;M.push(A,S,C,C,S,y)}if(x.setAttribute("position",new tt(g,3)),x.setAttribute("color",new tt(m,3)),x.setIndex(M),x.computeVertexNormals(),la=new lt(x,new ra({vertexColors:!0,side:mt,transparent:!0,opacity:.96})),f.add(la),e.radialSide){const w=new nt,b=[],A=[],C=[],S=e.radialSection?64:128,y=(e.radialSection,0),P=e.radialSection?Math.PI:Math.PI*2;for(let U=0;U<=i;U+=1){const z=U/i*o,G=Math.round(U/i*t),V=a[G]/s,$=h+V*l;for(let W=0;W<=S;W+=1){const ae=y+P*W/S,le=z*Math.cos(ae),se=z*Math.sin(ae);b.push(le,se,$);const Me=Cu(V);Me.lerp(new xe(16777215),.2),A.push(Me.r,Me.g,Me.b)}}const F=S+1;for(let U=0;U<i;U+=1)for(let z=0;z<S;z+=1){const G=U*F+z,V=G+1,$=G+F,W=$+1;C.push(G,$,V,V,$,W)}w.setAttribute("position",new tt(b,3)),w.setAttribute("color",new tt(A,3)),w.setIndex(C),w.computeVertexNormals(),f.add(new lt(w,new ra({vertexColors:!0,side:mt,transparent:!0,opacity:.95})))}if(e.radialCurve){const w=[],b=e.radialSide?h:u+d;for(let C=0;C<=t;C+=1){const S=o*C/t,y=b+a[C]/s*l;w.push(new I(S,0,y))}const A=w.slice(1).map(C=>new I(-C.x,0,C.z)).reverse();ca=new Ur(new nt().setFromPoints([...A,...w]),new Ti({color:16777215,linewidth:2})),f.add(ca)}if(e.radialAxis){const w=e.radialSide?h:.1;rn=y_(o+.9,o+.45,w,e.radialMode),f.add(rn)}tl=f,Fn.add(f),la=null,ca=null,rn=null,nl=null,e.radialSide?(ha=5.2,bt.position.set(0,-7.8,h+1.65),bt.lookAt(0,0,0),Cl(ha),Xt.target.set(0,0,0),(E=Xt.handleResize)==null||E.call(Xt),Xt.update()):F_(5.3),Vo()}function wo(){rx();const n=(e,t,i,r,a)=>{var o;const s=e.getBoundingClientRect();s.width<2||s.height<2||(t.setSize(s.width,s.height,!1),t.domElement.style.width="100%",t.domElement.style.height="100%",i(a),(o=r.handleResize)==null||o.call(r),r.update())};n(p.viewer,dn,Bo,Ae,Qn),n(p.angularViewer,Yi,zo,Rt,jt),n(p.projectionViewer,$i,Gd,Pn,Tl),n(p.radialViewer,Gr,Cl,Xt,ha);for(const e of fa)Ul(e,e.radius);ax()}function rx(){const n=document.querySelector(".sidebar"),e=n==null?void 0:n.querySelector(".sidebar-fit");if(!n)return;if(window.matchMedia("(max-width: 900px)").matches){document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");return}document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");const t=getComputedStyle(n),i=n.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),r=(e==null?void 0:e.scrollHeight)||n.scrollHeight;if(!i||!r||r<=i+4)return;const a=Math.max(.72,Math.min(1,(i-4)/r));document.documentElement.style.setProperty("--sidebar-zoom",a.toFixed(3)),document.documentElement.style.setProperty("--sidebar-fit-height",`${Math.ceil(r*a)}px`)}function sn(){requestAnimationFrame(()=>{wo(),requestAnimationFrame(()=>{wo(),Tr()})})}function jd(n){const e=p.sketchCanvas.getBoundingClientRect();return{x:(n.clientX-e.left)/Math.max(1,e.width),y:(n.clientY-e.top)/Math.max(1,e.height)}}function Lu(n,e,t,i){if(!e.points.length)return;n.save(),n.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",n.strokeStyle=e.color,n.lineWidth=e.size,n.lineCap="round",n.lineJoin="round",n.beginPath();const r=e.points[0];n.moveTo(r.x*t,r.y*i);for(const a of e.points.slice(1))n.lineTo(a.x*t,a.y*i);e.points.length===1&&n.lineTo(r.x*t+.01,r.y*i+.01),n.stroke(),n.restore()}function qr(){const n=p.sketchCanvas;if(!n)return;const e=n.getContext("2d");e.clearRect(0,0,n.width,n.height);for(const t of Ye.strokes)Lu(e,t,n.width,n.height);Ye.currentStroke&&Lu(e,Ye.currentStroke,n.width,n.height)}function ax(){const n=p.sketchCanvas;if(!n)return;const e=n.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,Math.floor(e.width*t)),r=Math.max(220,Math.floor(e.height*t));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r,qr())}function ks(n){var e,t;Ye.erasing=n,(e=p.sketchPen)==null||e.classList.toggle("active",!n),(t=p.sketchEraser)==null||t.classList.toggle("active",n)}function ox(n){var e,t,i,r;p.sketchCanvas&&(n.preventDefault(),(t=(e=p.sketchCanvas).setPointerCapture)==null||t.call(e,n.pointerId),Ye.drawing=!0,Ye.currentStroke={color:((i=p.sketchColor)==null?void 0:i.value)||"#ffffff",size:Number(((r=p.sketchSize)==null?void 0:r.value)||5)*Math.min(window.devicePixelRatio||1,2),mode:Ye.erasing?"erase":"draw",points:[jd(n)]},qr())}function sx(n){!Ye.drawing||!Ye.currentStroke||(n.preventDefault(),Ye.currentStroke.points.push(jd(n)),qr())}function Iu(n){!Ye.drawing||!Ye.currentStroke||(n.preventDefault(),Ye.strokes.push(Ye.currentStroke),Ye.currentStroke=null,Ye.drawing=!1,qr())}function lx(){var n,e,t,i,r,a,s,o,l,c,u,d,h,f,_,x,g,m,M,v,E,w,b,A,C,S,y,P,F,U,z,G,V,$,W,ae,le,se,Me,Te,Y,K,ue,O,Q,me,Ee,D;if(p.sketchCanvas){p.sketchCanvas.addEventListener("pointerdown",ox),p.sketchCanvas.addEventListener("pointermove",sx),p.sketchCanvas.addEventListener("pointerup",Iu),p.sketchCanvas.addEventListener("pointercancel",Iu),(n=p.openActivityButton)==null||n.addEventListener("click",()=>na("predict")),(e=p.openSketchButton)==null||e.addEventListener("click",Dl),(t=p.openPredictButton)==null||t.addEventListener("click",()=>na("predict")),(i=p.openChallengeButton)==null||i.addEventListener("click",()=>na("challenge"));for(const ce of p.activityModeButtons??[])ce.addEventListener("click",()=>na(ce.dataset.activityMode));(r=p.startPredictButton)==null||r.addEventListener("click",mv),(a=p.verifyPredictButton)==null||a.addEventListener("click",gv),(s=p.scoreCurrentButton)==null||s.addEventListener("click",hv),(o=p.scoreShowRubricButton)==null||o.addEventListener("click",fv),(l=p.scoreResetButton)==null||l.addEventListener("click",pv),(c=p.diagnoseNodesButton)==null||c.addEventListener("click",()=>so("nodes")),(u=p.diagnosePhaseButton)==null||u.addEventListener("click",()=>so("phase")),(d=p.diagnoseProjectionButton)==null||d.addEventListener("click",()=>so("projection"));for(const ce of document.querySelectorAll("[data-diagnosis]"))ce.addEventListener("click",()=>so(ce.dataset.diagnosis));(h=p.nodeRevealButton)==null||h.addEventListener("click",()=>{p.longitudeNode.checked=!0,p.node.checked=!0,rt()}),(f=p.nodeHideButton)==null||f.addEventListener("click",()=>{p.longitudeNode.checked=!1,p.node.checked=!1,rt()}),(_=p.compareApplyButton)==null||_.addEventListener("click",()=>{Zd()}),(x=p.compareA)==null||x.addEventListener("change",()=>{ul("a")}),(g=p.compareB)==null||g.addEventListener("change",()=>{ul("b")}),(m=p.compareLoadAButton)==null||m.addEventListener("click",()=>{var ce;(ce=p.compareA)!=null&&ce.value&&Uu(p.compareA.value,"a")}),(M=p.compareLoadBButton)==null||M.addEventListener("click",()=>{var ce;(ce=p.compareB)!=null&&ce.value&&Uu(p.compareB.value,"b")}),(v=p.newChallengeButton)==null||v.addEventListener("click",_v),(E=p.revealChallengeButton)==null||E.addEventListener("click",xv),(w=p.explainRestartButton)==null||w.addEventListener("click",uv),(b=p.explainPrevButton)==null||b.addEventListener("click",()=>Vu(-1)),(A=p.explainPlayButton)==null||A.addEventListener("click",cv),(C=p.explainNextButton)==null||C.addEventListener("click",()=>Vu(1)),(S=p.tabletLargeButton)==null||S.addEventListener("click",()=>Hu(!0)),(y=p.tabletRestoreButton)==null||y.addEventListener("click",()=>Hu(!1)),(P=p.tabletScreenshotButton)==null||P.addEventListener("click",Xo),(U=(F=p.sketchWindow)==null?void 0:F.querySelector(".window-title"))==null||U.addEventListener("pointerdown",vv),(G=(z=p.activityWindow)==null?void 0:z.querySelector(".window-title"))==null||G.addEventListener("pointerdown",ce=>Vs(ce,p.activityWindow)),($=(V=p.formulaWindow)==null?void 0:V.querySelector(".window-title"))==null||$.addEventListener("pointerdown",ce=>Vs(ce,p.formulaWindow)),(ae=(W=p.animationWindow)==null?void 0:W.querySelector(".window-title"))==null||ae.addEventListener("pointerdown",ce=>Vs(ce,p.animationWindow)),window.addEventListener("pointermove",Mv),window.addEventListener("pointermove",yv),window.addEventListener("pointerup",Gu),window.addEventListener("pointerup",Wu),window.addEventListener("pointercancel",Gu),window.addEventListener("pointercancel",Wu),window.addEventListener("pointerup",Tr),window.addEventListener("pointercancel",Tr),window.addEventListener("blur",Tr),(le=p.sketchPen)==null||le.addEventListener("click",()=>ks(!1)),(se=p.sketchEraser)==null||se.addEventListener("click",()=>ks(!0)),(Me=p.sketchClear)==null||Me.addEventListener("click",()=>{Ye.strokes=[],Ye.currentStroke=null,qr()}),(Te=p.annotationModeButton)==null||Te.addEventListener("click",cx),(Y=p.openAnimationButton)==null||Y.addEventListener("click",sv),(K=p.animationRestartButton)==null||K.addEventListener("click",iv),(ue=p.animationPrevButton)==null||ue.addEventListener("click",()=>zu(-1)),(O=p.animationPlayButton)==null||O.addEventListener("click",nv),(Q=p.animationNextButton)==null||Q.addEventListener("click",()=>zu(1)),(me=p.animationExportButton)==null||me.addEventListener("click",ov),(Ee=p.openFormulaButton)==null||Ee.addEventListener("click",bx),(D=p.annotationClearButton)==null||D.addEventListener("click",fx);for(const ce of document.querySelectorAll("[data-annotation-add]"))ce.addEventListener("click",()=>hx(ce.dataset.annotationAdd));for(const ce of document.querySelectorAll(".annotation-layer"))ce.addEventListener("pointerdown",px);window.addEventListener("pointermove",mx),window.addEventListener("pointerup",Du),window.addEventListener("pointercancel",Du),ks(!1)}}function cx(){var n;ie.annotationMode=!ie.annotationMode,document.body.classList.toggle("annotation-mode",ie.annotationMode),(n=p.annotationToolbar)==null||n.classList.toggle("closed",!ie.annotationMode),ie.annotationMode&&Al(),Zn(ie.annotationMode?"讲解标注：点击下方按钮添加标签，拖动标签调整位置。":"讲解标注已关闭。")}function ux(n){const t={正相:"orbital",负相:"orbital",节点:"orbital",投影平面:"projection",径向节点:"radial"}[n]||"orbital";return document.querySelector(`[data-annotation-layer="${t}"]`)}function dx(n){return n==="正相"?"positive":n==="负相"?"negative":n==="节点"?"node":n==="投影平面"?"projection":n==="径向节点"?"radial":""}function hx(n){const e=ux(n);if(!e)return;const t=document.createElement("button");t.type="button",t.className=`annotation-note ${dx(n)}`.trim(),t.textContent=n;const i=e.querySelectorAll(".annotation-note").length;t.style.left=`${12+i%4*12}%`,t.style.top=`${14+i%3*14}%`,e.appendChild(t)}function fx(){for(const n of document.querySelectorAll(".annotation-layer"))n.replaceChildren()}function px(n){var r;const e=n.target.closest(".annotation-note");if(!e||!ie.annotationMode)return;n.preventDefault(),n.stopPropagation();const t=e.closest(".annotation-layer"),i=e.getBoundingClientRect();ie.annotationDrag={note:e,layer:t,offsetX:n.clientX-i.left,offsetY:n.clientY-i.top},(r=e.setPointerCapture)==null||r.call(e,n.pointerId)}function mx(n){const e=ie.annotationDrag;if(!e)return;n.preventDefault();const t=e.layer.getBoundingClientRect(),i=e.note.getBoundingClientRect(),r=Math.max(0,Math.min(t.width-i.width,n.clientX-t.left-e.offsetX)),a=Math.max(0,Math.min(t.height-i.height,n.clientY-t.top-e.offsetY));e.note.style.left=`${r}px`,e.note.style.top=`${a}px`}function Du(){ie.annotationDrag=null}function Dl(){p.sketchWindow&&(p.sketchWindow.classList.remove("closed","minimized"),p.sketchWindow.style.zIndex="120",Ki(p.sketchWindow),sn())}function Ho(n){const[e,t,i]=n.split(",").map(Number);return{n:e,l:t,m:i}}function gx(n){var o;if(!n)return null;let e=fa.find(l=>l.container===n);if(e)return n.contains(e.renderer.domElement)||n.appendChild(e.renderer.domElement),e;const t=new bi;t.background=new xe(((o=p.backgroundColor)==null?void 0:o.value)||"#668080");const i=new Sn(-5,5,5,-5,.1,2e3),r=new ei({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.appendChild(r.domElement);const a=Hr(i,r.domElement);ga(n,a),t.add(new wi(16777215,.5));const s=new un(16777215,1.2);return s.position.set(0,0,80),t.add(s),e={container:n,scene:t,camera:i,renderer:r,controls:a,objects:[],radius:5,target:new I,resizeObserver:null},"ResizeObserver"in window&&(e.resizeObserver=new ResizeObserver(()=>Ul(e,e.radius)),e.resizeObserver.observe(n)),fa.push(e),e}function _x(n){if(n){for(const e of n.objects)Zi(n.scene,e);n.objects=[]}}function Ul(n,e){var s,o;if(!n)return;const t=n.container.getBoundingClientRect();if(t.width<2||t.height<2)return;n.renderer.setSize(t.width,t.height,!1);const i=t.width/t.height,r=Math.max(3,e);i>=1?(n.camera.left=-r*i,n.camera.right=r*i,n.camera.top=r,n.camera.bottom=-r):(n.camera.left=-r,n.camera.right=r,n.camera.top=r/i,n.camera.bottom=-r/i),n.camera.near=.1,n.camera.far=Math.max(1e3,r*8);const a=n.target??new I;n.camera.position.set(a.x,a.y,a.z+Mi(r,40)),n.camera.lookAt(a),n.camera.updateProjectionMatrix(),n.controls.target.copy(a),(o=(s=n.controls).handleResize)==null||o.call(s),n.controls.update()}function xx(n,e,t){const i=new ln;let r=!1;for(const a of e){a.updateMatrixWorld(!0);const s=new ln().setFromObject(a);Number.isFinite(s.min.x)&&Number.isFinite(s.min.y)&&Number.isFinite(s.min.z)&&Number.isFinite(s.max.x)&&Number.isFinite(s.max.y)&&Number.isFinite(s.max.z)&&(i.union(s),r=!0)}if(r){const a=i.getBoundingSphere(new Si);n.target.copy(a.center),n.radius=Math.max(2.5,t,a.radius*1.2)}else n.target.set(0,0,0),n.radius=Math.max(2.5,t);Ul(n,n.radius)}function Ao(n,e,t,i){var x,g;const r=gx(n);if(!r)return null;const a={...Ho(e),z:Number((x=p.z)==null?void 0:x.value)||1},s=ti(a),o=Math.max(4,Math.min(10,s.radius*.08)),l=Math.min(78,Math.max(42,Math.round(s.gridSize*.72))),c={iso:s.iso,density:l,radius:s.radius,opacity:.96,smooth:!1,wireframe:!0,cutaway:"none",showPositive:!0,showNegative:!0,positiveColor:p.positiveColor.value,negativeColor:p.negativeColor.value,backgroundColor:((g=p.backgroundColor)==null?void 0:g.value)||"#668080"};r.scene.background=new xe(c.backgroundColor),_x(r);const u=To(a,c,1,c.positiveColor),d=To(a,c,-1,c.negativeColor),h=o/Math.max(1,s.radius);u.scale.multiplyScalar(h),d.scale.multiplyScalar(h);const f=Oo(Math.max(1.6,o*.5));r.scene.add(u,d,f),r.objects.push(u,d,f),xx(r,[u,d,f],o*1.45);const _=Bn(a.n,a.l,a.m);return t&&(t.textContent=_),i&&(i.textContent=`${yo(a.n,a.l)}；n=${a.n}, l=${a.l}, |m|=${Math.abs(a.m)}`),{params:a,label:_,nodes:yo(a.n,a.l)}}function Zd(){var t,i;const n=Ao(p.compareAViewer,(t=p.compareA)==null?void 0:t.value,p.compareATitle,p.compareANotes),e=Ao(p.compareBViewer,(i=p.compareB)==null?void 0:i.value,p.compareBTitle,p.compareBNotes);if(n&&e&&p.compareSummary){const r=n.params.l===e.params.l&&Math.abs(n.params.m)===Math.abs(e.params.m);p.compareSummary.textContent=r?`${n.label} 与 ${e.label} 角向类型相同，重点比较径向节点随 n 增加的变化。`:`${n.label} 与 ${e.label} 角向类型不同，重点比较节点面方向、相位分布和对称性。`}}function ul(n){var e,t;return n==="a"?Ao(p.compareAViewer,(e=p.compareA)==null?void 0:e.value,p.compareATitle,p.compareANotes):n==="b"?Ao(p.compareBViewer,(t=p.compareB)==null?void 0:t.value,p.compareBTitle,p.compareBNotes):null}function Go(n){const e=Ho(n);p.n.value=e.n,p.l.value=e.l,p.m.value=Math.abs(e.m),p.cosType.checked=e.m>=0,p.sinType.checked=e.m<0,st(),Wr(),rt()}function Uu(n,e){var a,s,o,l;const t=Ho(n);Go(n),p.mainWindow&&(p.mainWindow.classList.remove("closed","minimized","maximized"),Ki(p.mainWindow)),p.positiveLobe&&(p.positiveLobe.checked=!0),p.negativeLobe&&(p.negativeLobe.checked=!0),p.wireframe&&p.smooth&&!p.wireframe.checked&&!p.smooth.checked&&(p.wireframe.checked=!0),st(),rt();const i=ul(e),r=(i==null?void 0:i.label)||Bn(t.n,t.l,t.m);p.compareSummary&&(p.compareSummary.textContent=`已载入主视图：${r}`),e==="a"?(s=(a=p.compareAViewer)==null?void 0:a.closest(".compare-view-card"))==null||s.scrollIntoView({block:"nearest",inline:"nearest"}):e==="b"&&((l=(o=p.compareBViewer)==null?void 0:o.closest(".compare-view-card"))==null||l.scrollIntoView({block:"nearest",inline:"nearest"})),sn()}function na(n){if(!p.activityWindow)return;const e=n||"predict";p.activityWindow.classList.remove("closed","minimized"),p.activityWindow.style.zIndex="125";for(const i of p.activityPanes??[]){const r=i.dataset.activityPane||i.id.replace(/Pane$/,"");i.classList.toggle("active",r===e)}for(const i of p.activityModeButtons??[])i.classList.toggle("active",i.dataset.activityMode===e);const t={predict:"预测-验证模式",score:"预测评分",diagnosis:"错误诊断",nodes:"节点发现",compare:"轨道对比",challenge:"轨道配对挑战",explain:"原理演示",tablet:"平板课堂"};p.activityTitle&&(p.activityTitle.textContent=t[e]||"课堂互动"),Ki(p.activityWindow),sn(),e==="compare"&&requestAnimationFrame(()=>{Zd(),sn()}),e==="explain"?requestAnimationFrame(()=>{va(ie.explanationStep,{render:!1}),sn()}):(qo(),xa(null))}const Kd=7200;function vx(){const n=st();return Bn(n.n,n.l,n.m)}const Mx=["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"],yx=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];function Jd(n,e){return(n<0?"⁻":"")+String(Math.abs(n)).split("").map(i=>e[Number(i)]??i).join("")}function Nu(n){return Jd(n,Mx)}function Sx(n){return Jd(n,yx)}function Ex(n,e){return Bn(Math.max(1,n+1),n,e).replace(/^\d+/,"")||`l=${n}, m=${e}`}function Nl(n){const e=Bn(n.n,n.l,n.m),t=Math.max(0,n.n-n.l-1),i=n.l,r=Ex(n.l,n.m),a=Nu(n.n),s=Nu(n.l),o=Sx(n.m);return{label:e,radialNodes:t,angularNodes:i,main:`Ψ(r,θ,φ) = R${a}${s}(r) · Y${s}${o}(θ,φ)`,radial:`R${a}${s}(r) 决定离原子核不同距离处的振幅变化；当前轨道有 ${t} 个径向节点。`,angular:`${r} 对应的 Y${s}${o}(θ,φ) 决定轨道朝向、节面和正负相位；当前有 ${i} 个角向节点。`,visual:"原子轨道窗口显示 Ψ=+c 和 Ψ=-c 的等值面；轨道投影是在选定平面上看 Ψ；径向分布函数看 r²R²；电子云来自 |Ψ|² 的概率分布。"}}function Qd(){var t,i;if(!p.formulaWindow)return;const n=st(),e=Nl(n);p.formulaOrbitalName&&(p.formulaOrbitalName.textContent=e.label),p.formulaQuantumText&&(p.formulaQuantumText.textContent=`n=${n.n}, l=${n.l}, m=${n.m}`),p.formulaMain&&(p.formulaMain.textContent=e.main),p.formulaRadialText&&(p.formulaRadialText.textContent=e.radial),p.formulaAngularText&&(p.formulaAngularText.textContent=e.angular),p.formulaVisualText&&(p.formulaVisualText.textContent=e.visual),p.formulaRadialNodes&&(p.formulaRadialNodes.textContent=String(e.radialNodes)),p.formulaAngularNodes&&(p.formulaAngularNodes.textContent=String(e.angularNodes)),p.formulaPhaseText&&(p.formulaPhaseText.textContent=`${((t=p.positiveLobe)==null?void 0:t.checked)===!1?"隐藏正相":"正相"} / ${((i=p.negativeLobe)==null?void 0:i.checked)===!1?"隐藏负相":"负相"}`)}function bx(){p.formulaWindow&&(Qd(),p.formulaWindow.classList.remove("closed","minimized"),p.formulaWindow.style.zIndex="128",Ki(p.formulaWindow),sn())}const Tx=5200;function Wo(){const n=st(),e=Nl(n);return[{focus:"all",title:"同一个波函数，四种观察方式",text:`${e.label} 的四个窗口都来自同一个 Ψ。动画先给出公式，再依次把它变成轨道、投影、径向图和电子云。`},{focus:"radial",title:"径向函数决定离核距离",text:`Rₙₗ(r) 控制波函数随半径的振荡和衰减；当前轨道有 ${e.radialNodes} 个径向节点。`},{focus:"angular",title:"角向函数决定方向和节面",text:`Yₗᵐ(θ,φ) 给出方向上的正负相位分区；当前轨道有 ${e.angularNodes} 个角向节点。`},{focus:"orbital",title:"径向 × 角向，合成三维波函数",text:"R(r) 提供距离变化，Y(θ,φ) 提供方向变化，两者相乘后形成空间中的正相和负相区域。"},{focus:"orbital",title:"抽取 Ψ=±c，得到原子轨道等值面",text:"等值面不是电子轨迹，而是波函数达到某个正值或负值时形成的边界。"},{focus:"projection",title:"把同一个 Ψ 放到平面上，得到轨道投影",text:"投影窗口把空间波函数在代表性平面上读出来，上方是高度曲面，下方是等高线。"},{focus:"orbital",title:"按 |Ψ|² 随机出现，形成电子云",text:"电子云表示电子出现概率。越亮、越密的区域，表示多次测量中电子更容易出现。"}]}function wx(){const n=p.animationCanvas;if(!n)return null;const e=n.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,e.width||640),r=Math.max(220,e.height||360);(n.width!==Math.round(i*t)||n.height!==Math.round(r*t))&&(n.width=Math.round(i*t),n.height=Math.round(r*t));const a=n.getContext("2d");return a.setTransform(t,0,0,t,0,0),{ctx:a,width:i,height:r}}function Fl(n,e,t,i,r,a){const s=Math.min(a,i/2,r/2);n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function Ax(n,e,t,i){const r=["公式","径向","角向","合成","等值面","投影","电子云"],s=e-42,o=34,l=s-42;n.save(),n.lineWidth=2,n.strokeStyle="rgba(255,255,255,0.45)",n.beginPath(),n.moveTo(42,o),n.lineTo(s,o),n.stroke(),n.strokeStyle="#ffb000",n.beginPath(),n.moveTo(42,o),n.lineTo(42+l*Math.min(1,(t+i)/(r.length-1)),o),n.stroke(),r.forEach((c,u)=>{const d=42+l*u/(r.length-1),h=u===t;n.fillStyle=h?"#ffb000":"rgba(255,255,255,0.82)",n.beginPath(),n.arc(d,o,h?8:5,0,Math.PI*2),n.fill(),n.fillStyle=h?"#fff4bf":"rgba(255,255,255,0.86)",n.font=h?"bold 14px sans-serif":"13px sans-serif",n.textAlign="center",n.fillText(c,d,o+24)}),n.restore()}function Rx(n,e,t,i){const r=Nl(st()),a=e/2,s=t*.52;n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.92)",Fl(n,a-220,s-68,440,136,12),n.fill(),n.fillStyle="#111827",n.textAlign="center",n.font="bold 30px serif",n.fillText(r.main,a,s-12),n.font="18px sans-serif",n.fillStyle="#175cd3",n.fillText("同一个 Ψ 经过不同读取方式，形成四个窗口的图像",a,s+34),n.restore()}function eh(n,e,t,i,r=1){n.save(),n.globalAlpha=Math.min(1,r*1.6),n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText(i,e/2,t*.9),n.restore()}function Fu(n,e,t,i=1){const r=st(),a=Math.max(0,r.n-r.l-1),s=Math.min(e*.82,560),o=76,l=(e-s)/2,c=t*.77;n.save(),n.globalAlpha=Math.min(1,i*1.6),n.fillStyle="rgba(255,255,255,0.9)",Fl(n,l,c,s,o,10),n.fill(),n.fillStyle="#111827",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText(`径向节点数 = n - l - 1 = ${r.n} - ${r.l} - 1 = ${a}`,e/2,c+29),n.font="15px sans-serif",n.fillStyle=a>0?"#175cd3":"#667085",n.fillText(a>0?"曲线过零处对应三维空间中的球形径向节面":"当前轨道没有径向节点，因此不会出现球形径向节面",e/2,c+55),n.restore()}function Cx(n,e,t,i,r,a,s=1,o=""){if(!(e!=null&&e.domElement)||!t||!i)return!1;e.render(t,i);const l=e.domElement;if(!l.width||!l.height)return!1;const c=Math.min(r*.92,l.width),u=Math.min(a*.72,c*(l.height/Math.max(1,l.width))),d=Math.min(c,u*(l.width/Math.max(1,l.height))),h=Math.min(u,d*(l.height/Math.max(1,l.width)));return n.save(),n.globalAlpha=Math.min(1,s*1.4),n.drawImage(l,(r-d)/2,a*.12,d,h),o&&(n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText(o,r/2,a*.1)),n.restore(),!0}function Px(){return Cn||(Lt=new Sn(-5,5,5,-5,.1,2e3),Cn=new ei({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Cn.outputColorSpace=Tt,Cn.toneMapping=Br,Cn.toneMappingExposure=1.16),!0}function th(n,e,t,i,r=!1){if(!Px())return!1;const a=r?Math.max(180,Math.min(520,Math.floor(e*.92))):Math.max(260,Math.min(700,Math.floor(e*.58))),s=r?Math.max(130,Math.min(360,Math.floor(t*.78))):Math.max(190,Math.min(560,Math.floor(t*.7)));Cn.setSize(a,s,!1);const o=new xe(getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#668080");Cn.setClearColor(o,1);const l=Math.max(4.5,ha||4.8),c=a/s,u=l*1.05;c>=1?(Lt.left=-u*c,Lt.right=u*c,Lt.top=u,Lt.bottom=-u):(Lt.left=-u,Lt.right=u,Lt.top=u/c,Lt.bottom=-u/c),Lt.near=.1,Lt.far=2e3;const d=i*Math.PI*.75+performance.now()*18e-5;Lt.up.set(0,0,1),Lt.position.set(Math.cos(d)*l*.55,-l*1.35,l*.46+Math.sin(d)*l*.1),Lt.lookAt(0,0,0),Lt.updateProjectionMatrix();const h=rn==null?void 0:rn.visible;rn&&(rn.visible=!1),Cn.render(Fn,Lt),rn&&h!=null&&(rn.visible=h),n.save(),n.globalAlpha=Math.min(1,i*1.4);const f=r?(e-a)/2:Math.min(e-a-e*.04,Math.max(e*.36,(e-a)/2+e*.16));return n.drawImage(Cn.domElement,f,t*.12,a,s),n.restore(),!0}function Lx(n,e,t,i=1){const r=st(),a=ti(r),s=Math.max(4,a.leastRadius+1),o=Math.min(300,e*.32),l=150,c=e*.055,u=t*.16,d=22,h=[];for(let x=0;x<=140;x+=1)h.push(qi(r.n,r.l,r.z,s*x/140));const f=Math.max(...h.map(x=>Math.abs(x)),1e-4),_=Math.max(2,Math.floor(140*Math.min(1,i)));n.save(),n.globalAlpha=Math.min(1,i*1.7),n.fillStyle="rgba(255,255,255,0.9)",Fl(n,c,u,o,l,10),n.fill(),n.strokeStyle="rgba(17,24,39,0.28)",n.lineWidth=1,n.beginPath(),n.moveTo(c+d,u+l*.58),n.lineTo(c+o-d,u+l*.58),n.moveTo(c+d,u+d),n.lineTo(c+d,u+l-d),n.stroke(),n.strokeStyle="#175cd3",n.lineWidth=2.4,n.beginPath();for(let x=0;x<=_;x+=1){const g=c+d+(o-d*2)*x/140,m=u+l*.58-h[x]/f*(l*.36);x===0?n.moveTo(g,m):n.lineTo(g,m)}n.stroke(),n.fillStyle="#111827",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText("Rnl(r) 函数图像",c+o/2,u+18),n.font="12px sans-serif",n.fillText("横轴 r",c+o-38,u+l-8),n.save(),n.translate(c+12,u+l/2),n.rotate(-Math.PI/2),n.fillText("振幅",0,0),n.restore(),n.restore()}function Ix(n,e,t,i){if(th(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.5),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("径向分布函数的 3D 读法",e/2,t*.1),n.restore(),Lx(n,e,t,i),Fu(n,e,t,i);return}const r=st(),a=ti(r),s=Math.max(4,a.leastRadius+1),o=e*.14,l=t*.66,c=e*.72,u=t*.42,d=[];for(let _=0;_<=180;_+=1){const x=s*_/180;d.push(qi(r.n,r.l,r.z,x))}const h=Math.max(...d.map(_=>Math.abs(_)),1e-4),f=Math.max(2,Math.floor(180*i));n.save(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2,n.beginPath(),n.moveTo(o,l),n.lineTo(o+c,l),n.moveTo(o,l-u/2),n.lineTo(o,l+u/2),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=3,n.beginPath();for(let _=0;_<=f;_+=1){const x=o+c*_/180,g=l-d[_]/h*(u/2);_===0?n.moveTo(x,g):n.lineTo(x,g)}n.stroke(),n.fillStyle="#ffb000";for(let _=1;_<f;_+=1)if(d[_-1]*d[_]<=0){const x=o+c*_/180;n.beginPath(),n.arc(x,l,4,0,Math.PI*2),n.fill()}n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Rnl(r)",o+c/2,l-u/2-18),n.font="14px sans-serif",n.textAlign="left",n.fillText("r = 0 原子核",o-38,l+24),n.textAlign="right",n.fillText("r 增大：离核距离",o+c,l+28),n.save(),n.translate(o-34,l-u/2+12),n.rotate(-Math.PI/2),n.textAlign="center",n.fillText("纵轴：径向波函数振幅 Rnl(r)",0,0),n.restore(),n.fillStyle="#ffb000",n.beginPath(),n.arc(o,l,5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.88)",n.textAlign="center",n.fillText("曲线穿过横轴的位置，对应径向节面",o+c*.55,l+u/2+22),Fu(n,e,t,i),n.restore()}function Dx(){In&&(In.traverse(n=>{var e,t;n.geometry&&((t=(e=n.geometry).dispose)==null||t.call(e)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{var a;return(a=r.dispose)==null?void 0:a.call(r)})}),jn==null||jn.remove(In),In=null)}function Ux(){if(An)return!0;jn=new bi,zt=new Sn(-5,5,5,-5,.1,2e3),An=new ei({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),An.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),An.outputColorSpace=Tt,An.toneMapping=Br,An.toneMappingExposure=1.18,jn.add(new wi(16777215,.58));const n=new un(16777215,1.72);n.position.set(5,-6,8),jn.add(n);const e=new un(16777215,.55);return e.position.set(-4,5,4),jn.add(e),!0}function Nx(){const n=st(),e=Zt(),t=[n.n,n.l,n.m,n.z,e.positiveColor,e.negativeColor].join("|");if(In&&Au===t)return!0;Dx(),Au=t,In=new Ut;const i={radius:3.8,thetaSegments:80,phiSegments:160},{positive:r,negative:a}=Nd(n,i),s=Nr(r,Nt(e.positiveColor),.96),o=Nr(a,Nt(e.negativeColor),.96);return Fr(s,{...e,smooth:!0,wireframe:!1}),Fr(o,{...e,smooth:!0,wireframe:!1}),In.add(o,s),jn.add(In),!0}function nh(n,e,t,i){if(!Ux()||!Nx())return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(620,Math.floor(t*.78)));An.setSize(r,a,!1),An.setClearColor(0,0);const s=new ln().setFromObject(In);if(s.isEmpty())return!1;const o=s.getCenter(new I),l=Math.max(1,s.getSize(new I).length()*.5),c=r/a,u=l*1.08;c>=1?(zt.left=-u*c,zt.right=u*c,zt.top=u,zt.bottom=-u):(zt.left=-u,zt.right=u,zt.top=u/c,zt.bottom=-u/c),zt.near=.1,zt.far=Math.max(1e3,l*18);const d=i*Math.PI*.7;zt.position.copy(o).add(new I(Math.cos(d)*l*1.5,-l*1.9,l*.95+Math.sin(d)*l*.35)),zt.lookAt(o),zt.updateProjectionMatrix();const h=.16+.84*(1-(1-Math.min(1,i))**3);return In.traverse(f=>{var _;((_=f.material)==null?void 0:_.opacity)!=null&&f.isMesh&&(f.material.transparent=!0,f.material.opacity=h,f.material.needsUpdate=!0)}),An.render(jn,zt),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(An.domElement,(e-r)/2,t*.08,r,a),n.restore(),!0}function Fx(n,e,t,i){var c,u;if(nh(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)：每一个方向对应一个角向函数值",e/2,t*.12),n.font="14px sans-serif",n.fillStyle=((c=p.positiveColor)==null?void 0:c.value)||"#d83bd8",n.fillText("正相位 Y > 0",e*.32,t*.84),n.fillStyle=((u=p.negativeColor)==null?void 0:u.value)||"#00aeb8",n.fillText("负相位 Y < 0",e*.68,t*.84),n.fillStyle="#ffd15c",n.fillText("两色交界处就是 Y = 0 的角向节面",e/2,t*.9),n.restore();return}const r=st(),a=e/2,s=t*.56,o=Math.max(2,r.l*2||1),l=Math.min(e,t)*.18*Math.min(1,i*1.7);n.save(),n.translate(a,s),n.rotate(r.m*Math.PI/12);for(let d=0;d<o;d+=1){const h=Math.PI*2*d/o,f=d%2===0,_=l*(r.l===0?1.25:1.55);n.save(),n.rotate(h);const x=n.createRadialGradient(_*.5,0,4,_*.5,0,_);x.addColorStop(0,f?"#ff2bd6":"#00d7ff"),x.addColorStop(1,f?"rgba(255,43,214,0.15)":"rgba(0,215,255,0.15)"),n.fillStyle=x,n.beginPath(),n.ellipse(_*.55,0,_*.62,l*.5,0,0,Math.PI*2),n.fill(),n.restore()}n.strokeStyle="#ffb000",n.lineWidth=2;for(let d=0;d<Math.max(1,r.l);d+=1)n.beginPath(),n.moveTo(-l*2,0),n.lineTo(l*2,0),n.stroke(),n.rotate(Math.PI/Math.max(1,r.l));n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)",0,-l*1.75-20),n.font="14px sans-serif",n.fillStyle="#ff9cff",n.fillText("Y > 0：正相位",l*1.7,-l*.88),n.fillStyle="#72f6ff",n.fillText("Y < 0：负相位",-l*1.7,l*.95),n.fillStyle="#ffd15c",n.fillText("Y = 0：角向节面/节线",0,l*1.9),n.strokeStyle="rgba(255,255,255,0.78)",n.lineWidth=1.1,n.beginPath(),n.moveTo(0,0),n.lineTo(l*1.55,-l*1.15),n.stroke(),n.fillStyle="rgba(255,255,255,0.9)",n.textAlign="left",n.fillText("一个方向由 θ 和 φ 确定",l*1.6,-l*1.18),n.restore()}function Ox(n,e,t,i){const r=Math.min(1,i*1.45),a=[e*.2,e*.5,e*.8],s=e*.24,o=t*.32,l=t*.2,c=(d,h,f)=>{n.strokeStyle="#ffb000",n.fillStyle="#ffb000",n.lineWidth=3.2,n.beginPath(),n.moveTo(d,h),n.lineTo(f,h),n.stroke(),n.beginPath(),n.moveTo(f,h),n.lineTo(f-13,h-8),n.lineTo(f-13,h+8),n.closePath(),n.fill()};n.save(),n.globalAlpha=r,n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText("径向",a[0],l-20),n.fillText("角向",a[1],l-20),n.fillText("轨道",a[2],l-20),n.save(),n.translate(a[0]-s/2,l),th(n,s,o,i,!0),n.restore(),n.save(),n.translate(a[1]-s/2,l),nh(n,s,o,i),n.restore(),n.save(),n.translate(a[2]-s/2,l),rh(n,s,o,i),n.restore();const u=l+o*.78;n.fillStyle="#ffb000",n.font="bold 34px serif",n.fillText("×",(a[0]+a[1])/2,u),c(a[1]+s*.46,u,a[2]-s*.48),n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 28px serif",n.fillText("R(r) × Y(θ,φ) = Ψ(x,y,z)",e/2,t*.76),n.restore()}function Bx(n,e,t,i){return Ox(n,e,t,i)}function zx(n,e,t,i){var l,c;const r=e/2,a=t*.56,s=Math.min(e,t)*.27*Math.min(1,i*1.5),o=st();n.save(),n.globalAlpha=.96,n.fillStyle=((l=p.negativeColor)==null?void 0:l.value)||"#00a0a0",n.beginPath(),n.ellipse(r-s*.76,a,s*(o.l>2?.9:.78),s*.72,-.12,0,Math.PI*2),n.fill(),n.fillStyle=((c=p.positiveColor)==null?void 0:c.value)||"#b24bb2",n.beginPath(),n.ellipse(r+s*.76,a,s*(o.l>2?.9:.78),s*.72,.12,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2;for(let u=0;u<10;u+=1){const d=a-s*.72+s*1.44*u/9;n.beginPath(),n.moveTo(r-s*1.65,d),n.lineTo(r+s*1.65,d),n.stroke()}n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("抽取 Ψ=+c 与 Ψ=-c",r,a+s+38),n.restore()}function qt(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function ih(n){return{x:n.x*.82+n.y*.34,y:-n.z*.88+n.y*.22}}function kx(n,e=6e4){var r,a;const t=[],i=[new I,new I,new I];for(const s of n)s.object&&((a=(r=s.object).updateWorldMatrix)==null||a.call(r,!0,!0),s.object.traverse(o=>{var h,f;const l=(f=(h=o.geometry)==null?void 0:h.attributes)==null?void 0:f.position;if(!l)return;const c=o.geometry.index,u=Math.floor(c?c.count/3:l.count/3);if(!u)return;o.updateWorldMatrix(!0,!1);const d=Math.max(1,Math.ceil(u/Math.max(1,e/n.length)));for(let _=0;_<u;_+=d){let x=0;const g=[];for(let m=0;m<3;m+=1){const M=c?c.getX(_*3+m):_*3+m;i[m].fromBufferAttribute(l,M).applyMatrix4(o.matrixWorld),x+=i[m].y,g.push(ih(i[m]))}t.push({points:g,color:s.color,depth:x/3})}}));return t}function Vx(n,e){const t=new xe(n);return`rgba(${Math.round(t.r*255)}, ${Math.round(t.g*255)}, ${Math.round(t.b*255)}, ${e})`}function Hx(n,e,t,i,r){if(!e.length)return!1;let a=1e-4;for(const u of e)for(const d of u.points)a=Math.max(a,Math.abs(d.x),Math.abs(d.y));const s=Math.min(t,i)*.34/a,o=t/2,l=i*.55,c=.14+.76*(1-(1-Math.min(1,r))**3);return n.save(),e.sort((u,d)=>u.depth-d.depth).forEach(u=>{const[d,h,f]=u.points;n.fillStyle=Vx(u.color,c),n.beginPath(),n.moveTo(o+d.x*s,l+d.y*s),n.lineTo(o+h.x*s,l+h.y*s),n.lineTo(o+f.x*s,l+f.y*s),n.closePath(),n.fill()}),n.restore(),!0}function Ou(){Mn&&(Mn.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(t=>{var i;return(i=t.dispose)==null?void 0:i.call(t)})}),$n==null||$n.remove(Mn),Mn=null)}function Gx(){if(wn)return!0;$n=new bi,Bt=new Sn(-5,5,5,-5,.1,2e3),wn=new ei({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),wn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),wn.outputColorSpace=Tt,wn.toneMapping=Br,wn.toneMappingExposure=1.12,$n.add(new wi(16777215,.56));const n=new un(16777215,1.65);n.position.set(5,-7,8),$n.add(n);const e=new un(16777215,.55);return e.position.set(-6,4,5),$n.add(e),!0}function Wx(n=1){var r,a,s,o,l,c,u;const e=Zt(),t=[(wt==null?void 0:wt.uuid)||"",(At==null?void 0:At.uuid)||"",((r=p.positiveColor)==null?void 0:r.value)||"",((a=p.negativeColor)==null?void 0:a.value)||"",e.opacity].join("|");if(Mn&&wu===t)return!0;Ou(),wu=t,Mn=new Ut;const i=[{object:At,color:((s=p.negativeColor)==null?void 0:s.value)||"#00a0a0"},{object:wt,color:((o=p.positiveColor)==null?void 0:o.value)||"#b24bb2"}];for(const d of i)(c=(l=d.object)==null?void 0:l.updateWorldMatrix)==null||c.call(l,!0,!0),(u=d.object)==null||u.traverse(h=>{if(!h.isMesh||!h.geometry)return;const f=new Ld({color:Nt(d.color),emissive:Nt(d.color),emissiveIntensity:.04,shininess:26,side:mt,transparent:!0,opacity:Math.min(.98,e.opacity)}),_=new lt(h.geometry,f);_.matrix.copy(h.matrixWorld),_.matrixAutoUpdate=!1,Mn.add(_)});return Mn.children.length?($n.add(Mn),!0):(Ou(),!1)}function rh(n,e,t,i){if(!wt&&!At||!Gx()||!Wx(i))return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(680,Math.floor(t*.82)));wn.setSize(r,a,!1),wn.setClearColor(0,0);const s=new ln().setFromObject(Mn);if(s.isEmpty())return!1;const o=s.getCenter(new I),l=Math.max(1,s.getSize(new I).length()*.5),c=r/a,u=l*1.16;c>=1?(Bt.left=-u*c,Bt.right=u*c,Bt.top=u,Bt.bottom=-u):(Bt.left=-u,Bt.right=u,Bt.top=u/c,Bt.bottom=-u/c),Bt.near=.1,Bt.far=Math.max(2e3,l*20);const d=performance.now()*42e-5+i*Math.PI*.28;Bt.position.copy(o).add(new I(Math.cos(d)*l*1.65,Math.sin(d)*l*1.65,l*.92)),Bt.lookAt(o),Bt.updateProjectionMatrix();const h=.08+.9*(1-(1-Math.min(1,i))**3);return Mn.traverse(f=>{f.material&&(f.material.opacity=h)}),wn.render($n,Bt),n.save(),n.globalAlpha=Math.min(1,i*1.4),n.drawImage(wn.domElement,(e-r)/2,t*.1,r,a),n.restore(),!0}function qx(n,e,t,i){var a,s;if(rh(n,e,t,i)){n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore();return}const r=kx([{object:At,color:((a=p.negativeColor)==null?void 0:a.value)||"#00a0a0"},{object:wt,color:((s=p.positiveColor)==null?void 0:s.value)||"#b24bb2"}]);if(!Hx(n,r,e,t,i)){zx(n,e,t,i);return}n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore()}function Xx(n,e){var a,s;const t=Math.min(1,Math.abs(n)/Math.max(e,1e-8)),i=new xe(n>=0?((a=p.positiveColor)==null?void 0:a.value)||"#b24bb2":((s=p.negativeColor)==null?void 0:s.value)||"#00a0a0"),r=new xe(16777215);return i.lerp(r,1-Math.sqrt(t)),`rgba(${Math.round(i.r*255)}, ${Math.round(i.g*255)}, ${Math.round(i.b*255)}, ${.16+.78*t})`}function Yx(n,e,t,i,r,a){var d,h;const s=[.18,.32,.48,.64,.8].filter((f,_,x)=>_/x.length<=a+.08),o=e.length,l=i/(o-1),c=r/(o-1),u=(f,_,x)=>Math.abs(_-f)<1e-9?.5:(x-f)/(_-f);for(const f of[1,-1]){n.strokeStyle=f>0?((d=p.positiveColor)==null?void 0:d.value)||"#ff2bd6":((h=p.negativeColor)==null?void 0:h.value)||"#00d7ff",n.lineWidth=1.45;for(const _ of s){const x=f*t*_;n.beginPath();for(let g=0;g<o-1;g+=1)for(let m=0;m<o-1;m+=1){const M=e[g][m],v=e[g][m+1],E=e[g+1][m+1],w=e[g+1][m],b=[];(M-x)*(v-x)<=0&&b.push([m+u(M,v,x),g]),(v-x)*(E-x)<=0&&b.push([m+1,g+u(v,E,x)]),(E-x)*(w-x)<=0&&b.push([m+1-u(E,w,x),g+1]),(w-x)*(M-x)<=0&&b.push([m,g+1-u(w,M,x)]),b.length>=2&&(n.moveTo(-i/2+b[0][0]*l,-r/2+b[0][1]*c),n.lineTo(-i/2+b[1][0]*l,-r/2+b[1][1]*c))}n.stroke()}}}function $x(n,e,t,i){if(Cx(n,$i,Nn,_t,e,t,i,"轨道投影的 3D 视图")){eh(n,e,t,"同一个 Ψ 在投影平面上显示为高度曲面和等高线",i);return}const r=st(),a=Zt(),s=Il(r),o=Od(r,a,s,78),l=e/2,c=t*.58,u=e*.56,d=t*.34,h=document.createElement("canvas");h.width=o.rows.length,h.height=o.rows.length;const f=h.getContext("2d");for(let _=0;_<o.rows.length;_+=1)for(let x=0;x<o.rows.length;x+=1)f.fillStyle=Xx(o.rows[_][x],o.maxAbs),f.fillRect(x,_,1,1);n.save(),n.translate(l,c),n.transform(1,-.22,.35,.82,0,0),n.fillStyle="rgba(238,244,244,0.88)",n.fillRect(-u/2,-d/2,u,d),n.globalAlpha=Math.min(1,i*1.35),n.drawImage(h,-u/2,-d/2,u,d),n.globalAlpha=Math.min(1,i*1.8),Yx(n,o.rows,o.maxAbs,u,d,i),n.strokeStyle="rgba(255,255,255,0.9)",n.strokeRect(-u/2,-d/2,u,d),n.restore(),n.save(),n.globalAlpha=i,n.strokeStyle="#ffb000",n.lineWidth=2,n.beginPath(),n.moveTo(l,t*.22),n.lineTo(l,c-d*.22),n.stroke(),n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText(`当前投影平面：${s.toUpperCase()}，颜色来自 Ψ 的正负`,l,t*.2),n.restore()}function jx(){Dn&&(Dn.traverse(n=>{var e,t,i;n.geometry&&!((e=n.userData)!=null&&e.sharedGeometry)&&((i=(t=n.geometry).dispose)==null||i.call(t)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{var s;return(s=a.dispose)==null?void 0:s.call(a)})}),_i==null||_i.remove(Dn),Dn=null)}function Zx(){if(Rn)return!0;_i=new bi,kt=new Sn(-5,5,5,-5,.1,2e3),Rn=new ei({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Rn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Rn.outputColorSpace=Tt,Rn.toneMapping=Br,Rn.toneMappingExposure=1.18,_i.add(new wi(16777215,.56));const n=new un(16777215,1.55);return n.position.set(5,-7,8),_i.add(n),!0}function Bu(n,e,t,i=3200){const r=Math.min(e.radius,Math.max(5,ti(n).leastRadius+1.2)),a=r*r;let s=0;for(let c=0;c<520;c+=1){const u=(qt(c,51)*2-1)*r,d=(qt(c,52)*2-1)*r,h=(qt(c,53)*2-1)*r;u*u+d*d+h*h>a||(s=Math.max(s,Math.abs(Yt(n,u,d,h))))}const o=[];let l=0;for(;o.length/3<i&&l<i*110;){const c=(qt(l,61+t)*2-1)*r,u=(qt(l,62+t)*2-1)*r,d=(qt(l,63+t)*2-1)*r;if(l+=1,c*c+u*u+d*d>a)continue;const h=Yt(n,c,u,d);if(t*h<=0)continue;const f=(Math.abs(h)/Math.max(s,1e-8))**2;qt(l,71+t)>f*.92||o.push(c,u,d)}return{points:o,radius:r}}function Kx(){const n=st(),e=Zt(),t=[n.n,n.l,n.m,n.z,e.radius.toFixed(3),e.iso.toFixed(5),e.positiveColor,e.negativeColor].join("|");if(Dn&&Ru===t)return!0;jx(),Ru=t,Dn=new Ut;const i=Bu(n,e,1),r=Bu(n,e,-1),a=bo(i.points,Nt(e.positiveColor)),s=bo(r.points,Nt(e.negativeColor));return a.material.uniforms.uSize.value=3.4,s.material.uniforms.uSize.value=3.4,Dn.add(s,a),_i.add(Dn),!0}function Jx(n,e,t,i,r){if(!Zx()||!Kx())return!1;const a=Math.max(240,Math.min(900,Math.floor(e))),s=Math.max(180,Math.min(680,Math.floor(t*.82)));Rn.setSize(a,s,!1),Rn.setClearColor(0,0),Dn.traverse(f=>{var _,x,g;(x=(_=f.material)==null?void 0:_.uniforms)!=null&&x.uTime?(f.material.uniforms.uTime.value=r,f.material.opacity=Math.min(1,i*1.3)):((g=f.material)==null?void 0:g.opacity)!=null&&f.isMesh&&(f.material.opacity=.28*Math.min(1,i*1.6),f.material.needsUpdate=!0)});const o=new ln().setFromObject(Dn);if(o.isEmpty())return!1;const l=o.getCenter(new I),c=Math.max(1,o.getSize(new I).length()*.5),u=a/s,d=c*1.1;u>=1?(kt.left=-d*u,kt.right=d*u,kt.top=d,kt.bottom=-d):(kt.left=-d,kt.right=d,kt.top=d/u,kt.bottom=-d/u),kt.near=.1,kt.far=Math.max(2e3,c*20);const h=r*.25;return kt.position.copy(l).add(new I(Math.cos(h)*c*1.55,-c*1.75,c*.95)),kt.lookAt(l),kt.updateProjectionMatrix(),Rn.render(_i,kt),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Rn.domElement,(e-a)/2,t*.1,a,s),n.restore(),!0}function Qx(n,e,t,i,r){if(Jx(n,e,t,i,r)){eh(n,e,t,"|Ψ|² 越大，三维空间中的闪烁点越密集",i);return}const a=st(),s=Zt(),o=Math.min(s.radius,Math.max(5,ti(a).leastRadius+1.2));let l=0;for(let f=0;f<260;f+=1){const _=(qt(f,11)*2-1)*o,x=(qt(f,12)*2-1)*o,g=(qt(f,13)*2-1)*o;_*_+x*x+g*g>o*o||(l=Math.max(l,Math.abs(Yt(a,_,x,g))))}const c=e/2,u=t*.55,d=Math.min(e,t)*.34/o,h=Math.floor(1500*i);n.save();for(let f=0;f<h;f+=1){const _=(qt(f,21)*2-1)*o,x=(qt(f,22)*2-1)*o,g=(qt(f,23)*2-1)*o;if(_*_+x*x+g*g>o*o)continue;const m=Yt(a,_,x,g),M=(Math.abs(m)/Math.max(l,1e-8))**2;if(qt(f,Math.floor(r*4)+31)>M*.9)continue;const v=ih(new I(_,x,g));n.fillStyle=m>=0?"rgba(255,43,214,0.82)":"rgba(0,215,255,0.82)",n.fillRect(c+v.x*d,u+v.y*d,1.9,1.9)}n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("|Ψ|² 越大，随机点越密",c,t*.84),n.restore()}function Or(n=0){var _,x;const e=wx();if(!e)return;const{ctx:t,width:i,height:r}=e,a=ie.animationStep,s=Wo();t.clearRect(0,0,i,r),t.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#668080",t.fillRect(0,0,i,r);const o=16/9;let l=i,c=l/o;c>r&&(c=r,l=c*o);const u=(i-l)/2,d=(r-c)/2,h=54;t.save(),t.translate(u,d),Ax(t,l,a,n),t.translate(0,h);const f=c-h;a===0?Rx(t,l,f,n):a===1?Ix(t,l,f,n):a===2?Fx(t,l,f,n):a===3?Bx(t,l,f,n):a===4?qx(t,l,f,n):a===5?$x(t,l,f,n):Qx(t,l,f,n,performance.now()*.001),t.restore(),p.animationProgressFill&&(p.animationProgressFill.style.width=`${Math.round(n*100)}%`),p.animationStepBadge&&(p.animationStepBadge.textContent=`第 ${a+1} 步 / ${s.length} 步`),p.animationTitle&&(p.animationTitle.textContent=((_=s[a])==null?void 0:_.title)||""),p.animationText&&(p.animationText.textContent=a===3?"径向给出离核距离变化，角向给出方向和相位；共同决定同一个三维波函数。":((x=s[a])==null?void 0:x.text)||"")}function ev(){ie.animationTimer&&clearTimeout(ie.animationTimer),ie.animationFrame&&cancelAnimationFrame(ie.animationFrame),ie.animationTimer=null,ie.animationFrame=null}function ah(){var t;if(!ie.animationPlaying)return;const n=Wo(),e=Math.min(1,(performance.now()-ie.animationStartedAt)/Tx);if(Or(e),e>=1){if(ie.animationStep>=n.length-1){ie.animationPlaying=!1,p.animationPlayButton&&(p.animationPlayButton.textContent="播放");return}ie.animationStep+=1,ie.animationStartedAt=performance.now(),xa((t=n[ie.animationStep])==null?void 0:t.focus)}ie.animationFrame=requestAnimationFrame(ah)}function Ar(n,e=0){var i;const t=Wo();ie.animationStep=Math.max(0,Math.min(t.length-1,n)),xa((i=t[ie.animationStep])==null?void 0:i.focus),Or(e)}function tv(){ie.animationPlaying=!0,ie.animationStartedAt=performance.now(),p.animationPlayButton&&(p.animationPlayButton.textContent="暂停"),ah()}function _a(){ie.animationPlaying=!1,p.animationPlayButton&&(p.animationPlayButton.textContent="播放"),ev()}function nv(){ie.animationPlaying?_a():tv()}function iv(){_a(),Ar(0,0)}function zu(n){_a(),Ar(ie.animationStep+n,0)}function rv(){return typeof MediaRecorder>"u"||!MediaRecorder.isTypeSupported?"":["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(n=>MediaRecorder.isTypeSupported(n))||""}function ku(){return new Promise(n=>requestAnimationFrame(n))}function av(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),1200)}async function ov(){var h,f;const n=p.animationCanvas;if(!(n!=null&&n.captureStream)||typeof MediaRecorder>"u"){alert("当前浏览器不支持直接导出视频。建议使用新版 Chrome 或 Edge 打开后再导出。");return}if(ie.animationExporting)return;_a(),ie.animationExporting=!0;const e=ie.animationStep,t=[p.animationRestartButton,p.animationPrevButton,p.animationPlayButton,p.animationNextButton,p.animationExportButton].filter(Boolean),i=t.map(_=>_.disabled),r=((h=p.animationExportButton)==null?void 0:h.textContent)||"导出视频";t.forEach(_=>{_.disabled=!0}),p.animationExportButton&&(p.animationExportButton.textContent="导出中...");const a=Wo(),s=[],o=n.captureStream(30),l=rv(),c={videoBitsPerSecond:6e6,...l?{mimeType:l}:{}};let u;try{u=new MediaRecorder(o,c)}catch{o.getTracks().forEach(x=>x.stop()),alert("当前浏览器无法创建视频录制器，请换用新版 Chrome 或 Edge。"),ie.animationExporting=!1,t.forEach((x,g)=>{x.disabled=i[g]}),p.animationExportButton&&(p.animationExportButton.textContent=r),Ar(e,0);return}const d=new Promise((_,x)=>{u.ondataavailable=g=>{var m;(m=g.data)!=null&&m.size&&s.push(g.data)},u.onerror=()=>x(u.error||new Error("video export failed")),u.onstop=()=>_(new Blob(s,{type:u.mimeType||"video/webm"}))});try{Ar(0,0),await ku(),u.start(250);const _=2600;for(let M=0;M<a.length;M+=1){ie.animationStep=M,xa((f=a[M])==null?void 0:f.focus);const v=performance.now();let E=0;for(;E<1;)E=Math.min(1,(performance.now()-v)/_),Or(E),await ku();Or(1),await new Promise(w=>setTimeout(w,160))}u.state!=="inactive"&&u.stop();const x=await d,g=st(),m=`HAO-${Bn(g.n,g.l,g.m)}-generation.webm`;av(x,m)}catch(_){u.state!=="inactive"&&u.stop(),console.error(_),alert("导出视频失败，请刷新页面后再试。")}finally{o.getTracks().forEach(_=>_.stop()),ie.animationExporting=!1,t.forEach((_,x)=>{_.disabled=i[x]}),p.animationExportButton&&(p.animationExportButton.textContent=r),Ar(e,0)}}function sv(){p.animationWindow&&(p.animationWindow.classList.remove("closed","minimized"),p.animationWindow.style.zIndex="129",Ki(p.animationWindow),sn(),requestAnimationFrame(()=>Ar(ie.animationStep,0)))}function oh(){const n=st(),e=Bn(n.n,n.l,n.m),t=n.n-n.l-1,i=n.l;return[{focus:"all",title:`先把 ${e} 看成一个波函数`,formula:"Ψ(r,θ,φ) = Rₙₗ(r) · Yₗᵐ(θ,φ)",text:"四个窗口不是四套不同的计算。它们都来自同一个 Ψ，只是观察方式不同：在空间中取等值面、在平面上取切片、沿半径取曲线，或只看角向部分。",observe:`当前轨道是 ${e}：n=${n.n} 决定尺度和径向层数，l=${n.l} 决定角向节点，m=${n.m} 决定方向和相位分区。`,reason:"先建立“同源”的概念，后面的每张图就不再是孤立图像，而是同一个函数的不同读法。",action:()=>{p.projection&&(p.projection.checked=!0),rt()}},{focus:"orbital",title:"原子轨道：找出 Ψ 等于某个值的边界",formula:"Ψ(x,y,z) = +c  和  Ψ(x,y,z) = -c",text:"程序先在三维盒子里布满格点，逐点计算 Ψ。把数值等于正等值和负等值的位置连成曲面，就得到你看到的两个相位区域。",observe:"粉色和蓝色表示波函数符号相反，不表示电荷正负。网格越密，等值面越接近真实边界。",reason:"这一步回答“轨道外形怎么来”：它不是画出来的外壳，而是三维标量场中被等值面算法提取出来的边界。",action:()=>{co({cloud:!1,wireframe:!0,smooth:!0,projection:!1,node:!1,box:!0})}},{focus:"projection",title:"轨道投影：把同一个 Ψ 放到一个平面上读",formula:"例如：z=0 时，观察 Ψ(x,y,0)",text:"投影窗口先选一个最能显示该轨道对称性的平面，再在平面上逐点计算 Ψ。上方曲面用高度表达数值大小，下方等高线表达相位和节点线。",observe:"看上方曲面的峰、谷，再对照下方等高线：峰对应密集的正相线，谷对应密集的负相线，白色过渡附近就是节点。",reason:"这一步把三维轨道压到二维平面，让学生更容易判断相位分区、节点线和方向。",action:()=>{p.projection&&(p.projection.checked=!0),p.box&&(p.box.checked=!0),p.wireframe&&(p.wireframe.checked=!0),p.smooth&&(p.smooth.checked=!1),rt()}},{focus:"radial",title:"径向分布：只问电子离原子核多远",formula:"P(r) = r² · Rₙₗ(r)²",text:"径向分布函数暂时不关心方向，只沿半径统计概率。R 决定波函数随距离怎样振荡，r² 会把球壳体积因素加进去。",observe:`${e} 的径向节点数是 n-l-1 = ${t}。曲线下凹或接近零的位置，通常对应概率分布中的分层。`,reason:"这一步解释“为什么有的轨道外面还有一层”：那通常来自径向部分，而不是角向形状突然改变。",action:()=>{p.radialR&&(p.radialR.checked=!1),p.radialR2&&(p.radialR2.checked=!1),p.radialRdf&&(p.radialRdf.checked=!0),p.radialSection&&(p.radialSection.checked=!0),p.radialSide&&(p.radialSide.checked=!0),p.radialCurve&&(p.radialCurve.checked=!0),rt()}},{focus:"angular",title:"角向函数：只看方向怎样分成正负相",formula:"Yₗᵐ(θ,φ) 决定方向、节面和相位",text:"角向函数把半径影响先拿掉，只保留方向上的变化。这样可以直接看到轨道为什么沿某些轴伸展，为什么中间会出现节面。",observe:`${e} 的角向节点数是 l = ${i}。这些节点决定了轨道方向上的分瓣方式。`,reason:"最后再回到原子轨道时，学生就能把外形拆开理解：径向部分决定层数，角向部分决定方向和分瓣。",action:()=>{p.projection&&(p.projection.checked=!1),p.node&&(p.node.checked=!0),p.longitudeNode&&(p.longitudeNode.checked=!0),p.wireframe&&(p.wireframe.checked=!0),rt()}}]}function xa(n){var t;for(const i of document.querySelectorAll(".qt-window.teaching-focus"))i.classList.remove("teaching-focus");const e=n==="all"?["orbital","projection","radial","angular"]:[n];for(const i of e)(t=document.querySelector(`[data-window-name="${i}"]`))==null||t.classList.add("teaching-focus")}function Ol(n){p.explainProgressFill&&(p.explainProgressFill.style.width=`${Math.max(0,Math.min(1,n))*100}%`)}function sh(){ie.explanationTimer&&clearTimeout(ie.explanationTimer),ie.explanationFrame&&cancelAnimationFrame(ie.explanationFrame),ie.explanationTimer=null,ie.explanationFrame=null}function lh(){if(!ie.explanationPlaying)return;const n=(performance.now()-ie.explanationStartedAt)/Kd;Ol(n),ie.explanationFrame=requestAnimationFrame(lh)}function ch(){sh(),ie.explanationStartedAt=performance.now(),lh(),ie.explanationTimer=setTimeout(()=>{const n=oh();if(ie.explanationStep>=n.length-1){ie.explanationPlaying=!1,p.explainPlayButton&&(p.explainPlayButton.textContent="播放"),Ol(1);return}va(ie.explanationStep+1),ie.explanationPlaying&&ch()},Kd)}function va(n,e={}){const t=oh(),i=Math.max(0,Math.min(t.length-1,n)),r=t[i];ie.explanationStep=i,p.explainStepBadge&&(p.explainStepBadge.textContent=`第 ${i+1} 步 / ${t.length} 步`),p.explainStepTitle&&(p.explainStepTitle.textContent=r.title),p.explainStepText&&(p.explainStepText.textContent=r.text),p.explainFormula&&(p.explainFormula.textContent=r.formula),p.explainObserveText&&(p.explainObserveText.textContent=r.observe),p.explainReasonText&&(p.explainReasonText.textContent=r.reason),p.explainHintText&&(p.explainHintText.textContent=`正在讲解 ${vx()}。你可以暂停后旋转任意一个窗口，再继续播放。`),xa(r.focus),Ol(0),e.render!==!1&&r.action()}function lv(){ie.explanationPlaying=!0,p.explainPlayButton&&(p.explainPlayButton.textContent="暂停"),va(ie.explanationStep),ch()}function qo(){ie.explanationPlaying=!1,p.explainPlayButton&&(p.explainPlayButton.textContent="播放"),sh()}function cv(){ie.explanationPlaying?qo():lv()}function uv(){qo(),ie.explanationStep=0,va(0)}function Vu(n){qo(),va(ie.explanationStep+n)}function co(n){n.cloud!=null&&p.cloud&&(p.cloud.checked=n.cloud),n.wireframe!=null&&p.wireframe&&(p.wireframe.checked=n.wireframe),n.smooth!=null&&p.smooth&&(p.smooth.checked=n.smooth),n.projection!=null&&p.projection&&(p.projection.checked=n.projection),n.node!=null&&(p.node&&(p.node.checked=n.node),p.longitudeNode&&(p.longitudeNode.checked=n.node)),n.box!=null&&p.box&&(p.box.checked=n.box),n.grid3d!=null&&p.grid3d&&(p.grid3d.checked=n.grid3d),rt()}function dv(){return Gt.find(n=>{var e;return n.value===((e=p.predictTarget)==null?void 0:e.value)})||ie.challengeTarget||Gt[0]}function hv(){const n=dv(),e=Ho(n.value),t=e.n-e.l-1,i=e.l,r=Math.max(60,100-t*4-i*3);p.scorePrompt&&(p.scorePrompt.textContent=`${n.label} 参考评分：${r} 分。检查点：径向节点 ${t} 个，角向节点 ${i} 个，相位正负分区清楚，方向与坐标轴一致。`),Go(n.value)}function fv(){p.scorePrompt&&(p.scorePrompt.textContent="评分标准：节点数 30 分，相位颜色 25 分，空间方向 25 分，投影/截面对应关系 20 分。")}function pv(){p.scorePrompt&&(p.scorePrompt.textContent="评分会根据当前目标轨道给出节点数、相位、方向和投影四项课堂反馈。")}function so(n){n==="nodes"?(co({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!0}),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="节点诊断：观察径向节点数 n-l-1 与角向节点数 l 是否匹配。")):n==="phase"?(co({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!1}),p.positiveLobe&&(p.positiveLobe.checked=!0),p.negativeLobe&&(p.negativeLobe.checked=!0),rt(),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="相位诊断：紫色/青色两相表示波函数符号相反，不代表电荷正负。")):(co({cloud:!1,wireframe:!0,smooth:!1,projection:!0,node:!1,box:!0}),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="投影诊断：对照上方波函数曲面与底部等高线，判断节点线和相位区。"))}function Hu(n){document.body.classList.toggle("tablet-mode",n),n?(Yo("tile"),na("tablet"),Zn("平板课堂：已放大按钮和触控区域。")):Zn("已恢复普通课堂布局。"),sn()}function mv(){const n=Gt.find(e=>e.value===p.predictTarget.value)??Gt[0];Dl(),Ye.strokes=[],Ye.currentStroke=null,qr(),p.predictPrompt&&(p.predictPrompt.textContent=`请先在画板中预测 ${n.label} 的形状、相位和节面，再点击“显示验证”。`)}function gv(){const n=Gt.find(e=>e.value===p.predictTarget.value)??Gt[0];Go(n.value),p.predictPrompt&&(p.predictPrompt.textContent=`已显示 ${n.label}。请对照画板预测与四个窗口中的真实结果。`)}function _v(){const n=Math.floor(Math.random()*Gt.length);ie.challengeTarget=Gt[n],Go(ie.challengeTarget.value),setTimeout(()=>{p.viewerTitle&&(p.viewerTitle.textContent="原子轨道  ?")},120),p.challengePrompt&&(p.challengePrompt.textContent="观察当前四个窗口中的图像，选择你认为对应的轨道名称。")}function xv(){const n=ie.challengeTarget||Gt[0],e=Gt.find(r=>r.value===p.challengeGuess.value),t=(e==null?void 0:e.value)===n.value;ie.challengeTotal+=1,t&&(ie.challengeCorrect+=1);const i=`（累计 ${ie.challengeCorrect}/${ie.challengeTotal}）`;p.viewerTitle&&(p.viewerTitle.textContent=`原子轨道  ${n.label}`),p.challengePrompt&&(p.challengePrompt.textContent=t?`回答正确：这是 ${n.label}。`:`还不对。你的答案是 ${(e==null?void 0:e.label)??""}，正确答案是 ${n.label}。`),Zn(`轨道配对 ${i}`)}function vv(n){var i,r;const e=p.sketchWindow;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();Ye.dragging=!0,Ye.dragPointerId=n.pointerId,Ye.dragOffsetX=n.clientX-t.left,Ye.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function Mv(n){const e=p.sketchWindow;if(!e||!Ye.dragging||Ye.dragPointerId!==null&&n.pointerId!==Ye.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-Ye.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-Ye.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function Gu(){Ye.dragging=!1,Ye.dragPointerId=null,Tr()}function Vs(n,e){var i,r;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();ie.dragging=!0,ie.dragPointerId=n.pointerId,ie.dragWindow=e,ie.dragOffsetX=n.clientX-t.left,ie.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function yv(n){const e=ie.dragWindow;if(!ie.dragging||!e||ie.dragPointerId!==null&&n.pointerId!==ie.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-ie.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-ie.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function Wu(){ie.dragging=!1,ie.dragPointerId=null,ie.dragWindow=null,Tr()}function uh(){M_(performance.now()*.001),Ae.update(),Rt.update(),Pn.update(),Xt.update(),O_(),dn.render(Ht,Xe),Yi.render(yn,it),$i.render(Nn,_t),Gr.render(Fn,bt);for(const n of fa)n.controls.update(),n.renderer.render(n.scene,n.camera);requestAnimationFrame(uh)}function Sv(){const[n,e,t]=p.preset.value.split(",").map(Number);p.n.value=n,p.l.value=e,p.m.value=Math.abs(t),p.cosType.checked=t>=0,p.sinType.checked=t<0,st(),Wr(),rt()}function vr(n,e){if(n.checked)for(const t of e)t&&t!==n&&(t.checked=!1)}function dh(n){n==="one"?(p.positiveColor.value="#ff7a00",p.negativeColor.value="#008fb8"):(p.positiveColor.value="#d83bd8",p.negativeColor.value="#00aeb8"),rt()}function Ev(){for(const n of[p.cosType,p.sinType])n==null||n.addEventListener("change",()=>{vr(n,[p.cosType,p.sinType]),!p.cosType.checked&&!p.sinType.checked&&(p.cosType.checked=!0),rt()});for(const n of[p.wireframe,p.smooth])n==null||n.addEventListener("change",()=>{vr(n,[p.wireframe,p.smooth]),rt()});for(const n of[p.paletteOne,p.paletteTwo])n==null||n.addEventListener("change",()=>{vr(n,[p.paletteOne,p.paletteTwo]),!p.paletteOne.checked&&!p.paletteTwo.checked&&(p.paletteTwo.checked=!0),dh(p.paletteOne.checked?"one":"two")});for(const n of[p.xySlice,p.yzSlice,p.xzSlice])n==null||n.addEventListener("change",()=>{vr(n,[p.xySlice,p.yzSlice,p.xzSlice]),rt()});for(const n of[p.quarter,p.eighth,p.threeQuarter])n==null||n.addEventListener("change",()=>{vr(n,[p.quarter,p.eighth,p.threeQuarter]),rt()});for(const n of[p.radialR,p.radialR2,p.radialRdf])n==null||n.addEventListener("change",()=>{vr(n,[p.radialR,p.radialR2,p.radialRdf]),!p.radialR.checked&&!p.radialR2.checked&&!p.radialRdf.checked&&(p.radialRdf.checked=!0),Hd(),$d(st(),Zt())})}function Xo(){dn.render(Ht,Xe);const n=document.createElement("a");n.download=`${p.orbitalName.textContent||"hao-orbital"}.png`,n.href=dn.domElement.toDataURL("image/png"),n.click()}function Zn(n){p.statusText.textContent=n}function bv(){if(p.backgroundColor){(!document.body.contains(p.backgroundColor)||p.backgroundColor.closest(".hidden-control"))&&(document.body.appendChild(p.backgroundColor),Object.assign(p.backgroundColor.style,{position:"fixed",left:"-120px",top:"0",width:"1px",height:"1px",opacity:"0",pointerEvents:"none"}));try{typeof p.backgroundColor.showPicker=="function"?p.backgroundColor.showPicker():p.backgroundColor.click()}catch{p.backgroundColor.click()}}}function Ro(n){document.body.classList.toggle("app-fullscreen",n),ji.hidden=!n,sn()}async function Tv(){var e;en(),Ro(!0);const n=(e=document.documentElement.requestFullscreen)==null?void 0:e.bind(document.documentElement);if(n)try{await n(),wr=!0}catch{wr=!1}}async function hh(){if(en(),Ro(!1),document.fullscreenElement&&document.exitFullscreen)try{await document.exitFullscreen()}catch{}wr=!1}function wv(){document.body.classList.contains("app-fullscreen")||document.fullscreenElement?hh():Tv()}function en(){p.menuPopup.hidden=!0,p.menuPopup.innerHTML="";for(const n of p.menuItems)n.classList.remove("active")}function Av(n){const e=n.dataset.menu,t={file:[["重新显示",rt],["导出图片",Xo],["恢复预设值",()=>{Wr(),rt()}]],window:[["全屏/退出全屏",wv],["画板",Dl],["背景颜色",bv],["显示/隐藏盒子",Rv],["显示/隐藏坐标轴",Bl],["重置视角",()=>{Rl(),L_(jt)}]],help:[["当前说明",()=>Zn("顶部按钮已连接到 Web 端功能")],["项目路径",()=>Zn("web/index.html")]],language:[["中文",()=>Zn("语言: 中文")],["English",()=>Zn("Language: English labels are partly available")]]}[e];en(),n.classList.add("active");const i=n.getBoundingClientRect();p.menuPopup.style.left=`${i.left}px`,p.menuPopup.hidden=!1;for(const[r,a]of t){const s=document.createElement("button");s.type="button",s.textContent=r,s.addEventListener("click",()=>{en(),a()}),p.menuPopup.appendChild(s)}}function Bl(){var e;p.axis.checked=!p.axis.checked;const n=Zt();da.visible=n.showAxis,da.scale.setScalar(Math.max(1,n.radius/4.5)),hi&&(hi.visible=n.showAxis),(e=p.toolAxis)==null||e.classList.toggle("active",n.showAxis),render()}function Rv(){p.box.checked=!p.box.checked,Zt(),rt()}function Yo(n){var t,i;Al({restoreLayout:!0});const e=n==="overlap";p.viewGrid.classList.toggle("overlap-layout",e),(t=p.toolTile)==null||t.classList.toggle("active",!e),(i=p.toolOverlap)==null||i.classList.toggle("active",e),sn()}function Ki(n){const e=n.querySelector('[data-window-action="minimize"]'),t=n.querySelector('[data-window-action="maximize"]');e&&(e.textContent=n.classList.contains("minimized")?"□":"－"),t&&(t.textContent=n.classList.contains("maximized")?"❐":"□")}function Cv(n){const e=n.closest(".qt-window");if(!e)return;const t=n.dataset.windowAction;t==="minimize"?(e.classList.toggle("minimized"),e.classList.contains("minimized")&&e.classList.remove("maximized")):t==="maximize"?(e.classList.remove("minimized"),e.classList.toggle("maximized")):t==="close"&&(e.classList.add("closed"),e.classList.remove("minimized","maximized"),e===p.animationWindow&&_a()),Ki(e),sn(),e===p.animationWindow&&!e.classList.contains("closed")&&requestAnimationFrame(()=>Or(0))}function zl(n){var a,s,o;const e=Qn,t=Math.max(3,jt),i=Mi(e),r=Mi(t,40);n==="xoy"?(Xe.position.set(0,0,i),it.position.set(0,0,r)):n==="yoz"?(Xe.position.set(i,0,0),it.position.set(r,0,0)):n==="xoz"&&(Xe.position.set(0,i,0),it.position.set(0,r,0)),Xe.lookAt(0,0,0),it.lookAt(0,0,0),Bo(e),zo(t),Ae.target.set(0,0,0),Rt.target.set(0,0,0),Ae.update(),Rt.update(),(a=p.toolXOY)==null||a.classList.toggle("active",n==="xoy"),(s=p.toolYOZ)==null||s.classList.toggle("active",n==="yoz"),(o=p.toolXOZ)==null||o.classList.toggle("active",n==="xoz")}for(const n of[p.n,p.l,p.m,p.z,p.iso,p.density,p.radius,p.opacity,p.mode,p.slice,p.node,p.axis,p.box,p.positiveColor,p.negativeColor,p.backgroundColor,p.desktopMatch,p.boxSizeDisplay,p.cloud,p.positiveLobe,p.negativeLobe,p.wireframe,p.smooth,p.projection,p.radialSection,p.radialSide,p.radialCurve,p.radialAxis,p.longitudeNode,p.grid3d,p.relationMode,p.syncRotation,p.scanRadius,p.scanTheta,p.scanPhi])n&&n.addEventListener("input",()=>{if(n===p.boxSizeDisplay&&v_(),st(),Zt(),n===p.backgroundColor){wl(p.backgroundColor.value);return}if([p.relationMode,p.syncRotation,p.scanRadius,p.scanTheta,p.scanPhi].includes(n)){Vo();return}[p.wireframe,p.smooth].includes(n)||(n.type==="checkbox"||n.type==="color")&&rt()});for(const n of[p.n,p.l,p.m,p.z,p.desktopMatch])n.addEventListener("change",()=>{Wr(),rt()});p.preset.addEventListener("input",Sv);p.renderButton.addEventListener("click",rt);var qu;(qu=p.redrawProxyButton)==null||qu.addEventListener("click",rt);var Xu;(Xu=p.presetButton)==null||Xu.addEventListener("click",()=>{Wr(),rt()});var Yu;(Yu=p.axisProxyButton)==null||Yu.addEventListener("click",()=>{Bl()});var $u;($u=document.querySelector("#colorProxyButton"))==null||$u.addEventListener("click",()=>{p.paletteOne.checked=!p.paletteOne.checked,p.paletteTwo.checked=!p.paletteOne.checked,dh(p.paletteOne.checked?"one":"two")});p.resetCameraButton.addEventListener("click",()=>Rl());p.screenshotButton.addEventListener("click",Xo);for(const n of document.querySelectorAll("[data-window-action]"))n.addEventListener("click",e=>{e.stopPropagation(),Cv(n)});for(const n of p.menuItems)n.addEventListener("click",e=>{e.stopPropagation(),Av(n)});document.addEventListener("click",en);p.menuPopup.addEventListener("click",n=>n.stopPropagation());ji.addEventListener("click",hh);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(wr=!0,Ro(!0)):wr&&(wr=!1,Ro(!1))});var ju;(ju=p.toolRender)==null||ju.addEventListener("click",()=>{en(),rt()});var Zu;(Zu=p.toolSave)==null||Zu.addEventListener("click",()=>{en(),Xo()});var Ku;(Ku=p.toolTile)==null||Ku.addEventListener("click",()=>{en(),Yo("tile")});var Ju;(Ju=p.toolOverlap)==null||Ju.addEventListener("click",()=>{en(),Yo("overlap")});var Qu;(Qu=p.toolAxis)==null||Qu.addEventListener("click",()=>{en(),Bl()});var ed;(ed=p.toolXOY)==null||ed.addEventListener("click",()=>{en(),zl("xoy")});var td;(td=p.toolYOZ)==null||td.addEventListener("click",()=>{en(),zl("yoz")});var nd;(nd=p.toolXOZ)==null||nd.addEventListener("click",()=>{en(),zl("xoz")});dn.domElement.addEventListener("click",tx);window.addEventListener("resize",wo);Ev();lx();__();wo();Yo("tile");Wr();Rl();rt();uh();
