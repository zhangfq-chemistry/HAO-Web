(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="165",eo={ROTATE:0,DOLLY:1,PAN:2},Xh=0,xl=1,Yh=2,Cd=1,$h=2,In=3,wn=0,Gt=1,ht=2,ui=0,pr=1,yr=2,_l=3,vl=4,jh=5,Ci=100,Zh=101,Kh=102,Jh=103,Qh=104,ef=200,tf=201,nf=202,rf=203,Zo=204,Ko=205,sf=206,af=207,of=208,cf=209,lf=210,uf=211,df=212,hf=213,ff=214,pf=0,mf=1,gf=2,ha=3,xf=4,_f=5,vf=6,yf=7,wc=0,Mf=1,Sf=2,di=0,wf=1,Ef=2,bf=3,Rd=4,Af=5,Tf=6,Cf=7,Pd=300,Mr=301,Sr=302,Jo=303,Qo=304,Da=306,ec=1e3,Li=1001,tc=1002,en=1003,Rf=1004,Ss=1005,hn=1006,to=1007,Ii=1008,pi=1009,Pf=1010,Lf=1011,fa=1012,Ld=1013,wr=1014,oi=1015,Na=1016,Id=1017,Dd=1018,Er=1020,If=35902,Df=1021,Nf=1022,yn=1023,Uf=1024,Of=1025,mr=1026,br=1027,Ff=1028,Nd=1029,zf=1030,Ud=1031,Od=1033,no=33776,io=33777,ro=33778,so=33779,yl=35840,Ml=35841,Sl=35842,wl=35843,El=36196,bl=37492,Al=37496,Tl=37808,Cl=37809,Rl=37810,Pl=37811,Ll=37812,Il=37813,Dl=37814,Nl=37815,Ul=37816,Ol=37817,Fl=37818,zl=37819,Bl=37820,kl=37821,ao=36492,Vl=36494,Hl=36495,Bf=36283,Gl=36284,Wl=36285,ql=36286,kf=3200,Vf=3201,Ec=0,Hf=1,ai="",Kt="srgb",gi="srgb-linear",bc="display-p3",Ua="display-p3-linear",pa="linear",ut="srgb",ma="rec709",ga="p3",qi=7680,Xl=519,Gf=512,Wf=513,qf=514,Fd=515,Xf=516,Yf=517,$f=518,jf=519,nc=35044,ws=35048,Yl="300 es",Un=2e3,xa=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const gr=Math.PI/180,cs=180/Math.PI;function Hn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function Ac(n,e){return(n%e+e)%e}function Zf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Kf(n,e,t){return n!==e?(t-n)/(e-n):0}function Jr(n,e,t){return(1-t)*n+t*e}function Jf(n,e,t,i){return Jr(n,e,1-Math.exp(-t*i))}function Qf(n,e=1){return e-Math.abs(Ac(n,e*2)-e)}function ep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function np(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ip(n,e){return n+Math.random()*(e-n)}function rp(n){return n*(.5-Math.random())}function sp(n){n!==void 0&&($l=n);let e=$l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ap(n){return n*gr}function op(n){return n*cs}function cp(n){return(n&n-1)===0&&n!==0}function lp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function up(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dp(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*x,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*x,a*l);break;case"ZYZ":n.set(c*x,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jl={DEG2RAD:gr,RAD2DEG:cs,generateUUID:Hn,clamp:At,euclideanModulo:Ac,mapLinear:Zf,inverseLerp:Kf,lerp:Jr,damp:Jf,pingpong:Qf,smoothstep:ep,smootherstep:tp,randInt:np,randFloat:ip,randFloatSpread:rp,seededRandom:sp,degToRad:ap,radToDeg:op,isPowerOfTwo:cp,ceilPowerOfTwo:lp,floorPowerOfTwo:up,setQuaternionFromProperEuler:dp,normalize:it,denormalize:fn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],x=i[8],v=r[0],g=r[3],m=r[6],y=r[1],_=r[4],w=r[7],A=r[2],E=r[5],b=r[8];return s[0]=o*v+a*y+c*A,s[3]=o*g+a*_+c*E,s[6]=o*m+a*w+c*b,s[1]=l*v+u*y+h*A,s[4]=l*g+u*_+h*E,s[7]=l*m+u*w+h*b,s[2]=d*v+f*y+x*A,s[5]=d*g+f*_+x*E,s[8]=d*m+f*w+x*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,x=t*h+i*d+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oo.makeScale(e,t)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new Ge;function zd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hp(){const n=_a("canvas");return n.style.display="block",n}const Zl={};function Tc(n){n in Zl||(Zl[n]=!0,console.warn(n))}function fp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Kl=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jl=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Es={[gi]:{transfer:pa,primaries:ma,toReference:n=>n,fromReference:n=>n},[Kt]:{transfer:ut,primaries:ma,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ua]:{transfer:pa,primaries:ga,toReference:n=>n.applyMatrix3(Jl),fromReference:n=>n.applyMatrix3(Kl)},[bc]:{transfer:ut,primaries:ga,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Jl),fromReference:n=>n.applyMatrix3(Kl).convertLinearToSRGB()}},pp=new Set([gi,Ua]),rt={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Es[e].toReference,r=Es[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Es[n].primaries},getTransfer:function(n){return n===ai?pa:Es[n].transfer}};function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class mp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=_a("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gp=0;class Bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lo(r[o].image)):s.push(lo(r[o]))}else s=lo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function lo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xp=0;class Bt extends zi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Li,r=Li,s=hn,o=Ii,a=yn,c=pi,l=Bt.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Hn(),this.name="",this.source=new Bd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ec:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ec:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Pd;Bt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],x=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,w=(f+1)/2,A=(m+1)/2,E=(u+d)/4,b=(h+v)/4,T=(x+g)/4;return _>w&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=b/i):w>A?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=E/r,s=T/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=b/s,r=T/s),this.set(i,r,s,t),this}let y=Math.sqrt((g-x)*(g-x)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-x)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _p extends zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends _p{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kd extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vp extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==x){let g=1-a;const m=c*d+l*f+u*x+h*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,m*y);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}const w=a*y;if(c=c*g+d*w,l=l*g+f*w,u=u*g+x*w,h=h*g+v*w,g===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],x=s[o+3];return e[t]=a*x+u*h+c*f-l*d,e[t+1]=c*x+u*d+l*h-a*f,e[t+2]=l*x+u*f+a*d-c*h,e[t+3]=u*x-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),f=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*x,this._y=l*f*h-d*u*x,this._z=l*u*x+d*f*h,this._w=l*u*h-d*f*x;break;case"YXZ":this._x=d*u*h+l*f*x,this._y=l*f*h-d*u*x,this._z=l*u*x-d*f*h,this._w=l*u*h+d*f*x;break;case"ZXY":this._x=d*u*h-l*f*x,this._y=l*f*h+d*u*x,this._z=l*u*x+d*f*h,this._w=l*u*h-d*f*x;break;case"ZYX":this._x=d*u*h-l*f*x,this._y=l*f*h+d*u*x,this._z=l*u*x-d*f*h,this._w=l*u*h+d*f*x;break;case"YZX":this._x=d*u*h+l*f*x,this._y=l*f*h+d*u*x,this._z=l*u*x-d*f*h,this._w=l*u*h-d*f*x;break;case"XZY":this._x=d*u*h-l*f*x,this._y=l*f*h-d*u*x,this._z=l*u*x+d*f*h,this._w=l*u*h+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uo.copy(this).projectOnVector(e),this.sub(uo)}reflect(e){return this.sub(uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new L,Ql=new Cr;class Wn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bs.copy(i.boundingBox)),bs.applyMatrix4(e.matrixWorld),this.union(bs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),As.subVectors(this.max,Br),Yi.subVectors(e.a,Br),$i.subVectors(e.b,Br),ji.subVectors(e.c,Br),Jn.subVectors($i,Yi),Qn.subVectors(ji,$i),Mi.subVectors(Yi,ji);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-Mi.z,Mi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,Mi.z,0,-Mi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-Mi.y,Mi.x,0];return!ho(t,Yi,$i,ji,As)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,Yi,$i,ji,As))?!1:(Ts.crossVectors(Jn,Qn),t=[Ts.x,Ts.y,Ts.z],ho(t,Yi,$i,ji,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new L,new L,new L,new L,new L,new L,new L,new L],on=new L,bs=new Wn,Yi=new L,$i=new L,ji=new L,Jn=new L,Qn=new L,Mi=new L,Br=new L,As=new L,Ts=new L,Si=new L;function ho(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Si.fromArray(n,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const yp=new Wn,kr=new L,fo=new L;class xi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const t=kr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(kr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(fo)),this.expandByPoint(kr.copy(e.center).sub(fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new L,po=new L,Cs=new L,ei=new L,mo=new L,Rs=new L,go=new L;class Oa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){po.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(po);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Cs),a=ei.dot(this.direction),c=-ei.dot(Cs),l=ei.lengthSq(),u=Math.abs(1-o*o);let h,d,f,x;if(u>0)if(h=o*c-a,d=o*a-c,x=s*u,h>=0)if(d>=-x)if(d<=x){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=x?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(po).addScaledVector(Cs,d),f}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){mo.subVectors(t,e),Rs.subVectors(i,e),go.crossVectors(mo,Rs);let o=this.direction.dot(go),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const c=a*this.direction.dot(Rs.crossVectors(ei,Rs));if(c<0)return null;const l=a*this.direction.dot(mo.cross(ei));if(l<0||c+l>o)return null;const u=-a*ei.dot(go);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,o,a,c,l,u,h,d,f,x,v,g){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,d,f,x,v,g)}set(e,t,i,r,s,o,a,c,l,u,h,d,f,x,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=x,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,x=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+x*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=x+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,x=l*u,v=l*h;t[0]=d+v*a,t[4]=x*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-x,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,x=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,x=a*u,v=a*h;t[0]=c*u,t[4]=x*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,x=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=x*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+x,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*c,f=o*l,x=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-x,t[2]=x*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mp,e,Sp)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),ti.crossVectors(i,Xt),ti.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),ti.crossVectors(i,Xt)),ti.normalize(),Ps.crossVectors(Xt,ti),r[0]=ti.x,r[4]=Ps.x,r[8]=Xt.x,r[1]=ti.y,r[5]=Ps.y,r[9]=Xt.y,r[2]=ti.z,r[6]=Ps.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],x=i[2],v=i[6],g=i[10],m=i[14],y=i[3],_=i[7],w=i[11],A=i[15],E=r[0],b=r[4],T=r[8],S=r[12],M=r[1],P=r[5],D=r[9],U=r[13],k=r[2],B=r[6],F=r[10],X=r[14],H=r[3],ee=r[7],re=r[11],ie=r[15];return s[0]=o*E+a*M+c*k+l*H,s[4]=o*b+a*P+c*B+l*ee,s[8]=o*T+a*D+c*F+l*re,s[12]=o*S+a*U+c*X+l*ie,s[1]=u*E+h*M+d*k+f*H,s[5]=u*b+h*P+d*B+f*ee,s[9]=u*T+h*D+d*F+f*re,s[13]=u*S+h*U+d*X+f*ie,s[2]=x*E+v*M+g*k+m*H,s[6]=x*b+v*P+g*B+m*ee,s[10]=x*T+v*D+g*F+m*re,s[14]=x*S+v*U+g*X+m*ie,s[3]=y*E+_*M+w*k+A*H,s[7]=y*b+_*P+w*B+A*ee,s[11]=y*T+_*D+w*F+A*re,s[15]=y*S+_*U+w*X+A*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],x=e[3],v=e[7],g=e[11],m=e[15];return x*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*f-i*c*f)+v*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+g*(+t*l*h-t*a*f-s*o*h+i*o*f+s*a*u-i*l*u)+m*(-r*a*u-t*c*h+t*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],x=e[12],v=e[13],g=e[14],m=e[15],y=h*g*l-v*d*l+v*c*f-a*g*f-h*c*m+a*d*m,_=x*d*l-u*g*l-x*c*f+o*g*f+u*c*m-o*d*m,w=u*v*l-x*h*l+x*a*f-o*v*f-u*a*m+o*h*m,A=x*h*c-u*v*c-x*a*d+o*v*d+u*a*g-o*h*g,E=t*y+i*_+r*w+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=y*b,e[1]=(v*d*s-h*g*s-v*r*f+i*g*f+h*r*m-i*d*m)*b,e[2]=(a*g*s-v*c*s+v*r*l-i*g*l-a*r*m+i*c*m)*b,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*f-i*c*f)*b,e[4]=_*b,e[5]=(u*g*s-x*d*s+x*r*f-t*g*f-u*r*m+t*d*m)*b,e[6]=(x*c*s-o*g*s-x*r*l+t*g*l+o*r*m-t*c*m)*b,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*b,e[8]=w*b,e[9]=(x*h*s-u*v*s-x*i*f+t*v*f+u*i*m-t*h*m)*b,e[10]=(o*v*s-x*a*s+x*i*l-t*v*l-o*i*m+t*a*m)*b,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*f-t*a*f)*b,e[12]=A*b,e[13]=(u*v*r-x*h*r+x*i*d-t*v*d-u*i*g+t*h*g)*b,e[14]=(x*a*r-o*v*r-x*i*c+t*v*c+o*i*g-t*a*g)*b,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*d+t*a*d)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,x=s*h,v=o*u,g=o*h,m=a*h,y=c*l,_=c*u,w=c*h,A=i.x,E=i.y,b=i.z;return r[0]=(1-(v+m))*A,r[1]=(f+w)*A,r[2]=(x-_)*A,r[3]=0,r[4]=(f-w)*E,r[5]=(1-(d+m))*E,r[6]=(g+y)*E,r[7]=0,r[8]=(x+_)*b,r[9]=(g-y)*b,r[10]=(1-(d+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const l=1/s,u=1/o,h=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Un){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,x;if(a===Un)f=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===xa)f=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Un){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*l,f=(i+r)*u;let x,v;if(a===Un)x=(o+s)*h,v=-2*h;else if(a===xa)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zi=new L,cn=new ct,Mp=new L(0,0,0),Sp=new L(1,1,1),ti=new L,Ps=new L,Xt=new L,eu=new ct,tu=new Cr;class gn{constructor(e=0,t=0,i=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wp=0;const nu=new L,Ki=new Cr,Rn=new ct,Ls=new L,Vr=new L,Ep=new L,bp=new Cr,iu=new L(1,0,0),ru=new L(0,1,0),su=new L(0,0,1),au={type:"added"},Ap={type:"removed"},Ji={type:"childadded",child:null},xo={type:"childremoved",child:null};class _t extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new L,t=new gn,i=new Cr,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ge}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ls.copy(e):Ls.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Vr,Ls,this.up):Rn.lookAt(Ls,Vr,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(au),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ap),xo.child=e,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(au),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new L(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new L,Pn=new L,_o=new L,Ln=new L,Qi=new L,er=new L,ou=new L,vo=new L,yo=new L,Mo=new L;class Qt{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),Pn.subVectors(i,t),_o.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(Pn),c=ln.dot(_o),l=Pn.dot(Pn),u=Pn.dot(_o),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,x=(o*u-a*c)*d;return s.set(1-f-x,x,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(a,Ln.z),c)}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Pn.subVectors(e,t),ln.cross(Pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qi.subVectors(r,i),er.subVectors(s,i),vo.subVectors(e,i);const c=Qi.dot(vo),l=er.dot(vo);if(c<=0&&l<=0)return t.copy(i);yo.subVectors(e,r);const u=Qi.dot(yo),h=er.dot(yo);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Qi,o);Mo.subVectors(e,s);const f=Qi.dot(Mo),x=er.dot(Mo);if(x>=0&&f<=x)return t.copy(s);const v=f*l-c*x;if(v<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(i).addScaledVector(er,a);const g=u*x-f*h;if(g<=0&&h-u>=0&&f-x>=0)return ou.subVectors(s,r),a=(h-u)/(h-u+(f-x)),t.copy(r).addScaledVector(ou,a);const m=1/(g+v+d);return o=v*m,a=d*m,t.copy(i).addScaledVector(Qi,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Is={h:0,s:0,l:0};function So(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Ac(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=So(o,s,e+1/3),this.g=So(o,s,e),this.b=So(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=Vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return rt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(At(Lt.r*255,0,255))*65536+Math.round(At(Lt.g*255,0,255))*256+Math.round(At(Lt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Kt){rt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Is);const i=Jr(ni.h,Is.h,t),r=Jr(ni.s,Is.s,t),s=Jr(ni.l,Is.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ye;ye.NAMES=Vd;let Tp=0;class jn extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=pr,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Ko,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zo&&(i.blendSrc=this.blendSrc),this.blendDst!==Ko&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kt extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new L,Ds=new pe;class It{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Tc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nc&&(e.usage=this.usage),e}}class Hd extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gd extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ne extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cp=0;const Zt=new ct,wo=new _t,tr=new L,Yt=new Wn,Hr=new Wn,Et=new L;class qe extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?Gd:Hd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return wo.lookAt(e),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ne(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Yt.min,Hr.min),Yt.expandByPoint(Et),Et.addVectors(Yt.max,Hr.max),Yt.expandByPoint(Et)):(Yt.expandByPoint(Hr.min),Yt.expandByPoint(Hr.max))}Yt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Et.fromBufferAttribute(a,l),c&&(tr.fromBufferAttribute(e,l),Et.add(tr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<i.count;T++)a[T]=new L,c[T]=new L;const l=new L,u=new L,h=new L,d=new pe,f=new pe,x=new pe,v=new L,g=new L;function m(T,S,M){l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,T),f.fromBufferAttribute(s,S),x.fromBufferAttribute(s,M),u.sub(l),h.sub(l),f.sub(d),x.sub(d);const P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(P),a[T].add(v),a[S].add(v),a[M].add(v),c[T].add(g),c[S].add(g),c[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let T=0,S=y.length;T<S;++T){const M=y[T],P=M.start,D=M.count;for(let U=P,k=P+D;U<k;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new L,w=new L,A=new L,E=new L;function b(T){A.fromBufferAttribute(r,T),E.copy(A);const S=a[T];_.copy(S),_.sub(A.multiplyScalar(A.dot(S))).normalize(),w.crossVectors(E,S);const P=w.dot(c[T])<0?-1:1;o.setXYZW(T,_.x,_.y,_.z,P)}for(let T=0,S=y.length;T<S;++T){const M=y[T],P=M.start,D=M.count;for(let U=P,k=P+D;U<k;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const x=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,x=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let m=0;m<u;m++)d[x++]=l[f++]}return new It(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qe,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new ct,wi=new Oa,Ns=new xi,lu=new L,nr=new L,ir=new L,rr=new L,Eo=new L,Us=new L,Os=new pe,Fs=new pe,zs=new pe,uu=new L,du=new L,hu=new L,Bs=new L,ks=new L;class $e extends _t{constructor(e=new qe,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Us.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Eo.fromBufferAttribute(h,e),o?Us.addScaledVector(Eo,u):Us.addScaledVector(Eo.sub(t),u))}t.add(Us)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(s),wi.copy(e.ray).recast(e.near),!(Ns.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Ns,lu)===null||wi.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(cu.copy(s).invert(),wi.copy(e.ray).applyMatrix4(cu),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const g=d[x],m=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let w=y,A=_;w<A;w+=3){const E=a.getX(w),b=a.getX(w+1),T=a.getX(w+2);r=Vs(this,m,e,i,l,u,h,E,b,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=x,m=v;g<m;g+=3){const y=a.getX(g),_=a.getX(g+1),w=a.getX(g+2);r=Vs(this,o,e,i,l,u,h,y,_,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const g=d[x],m=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let w=y,A=_;w<A;w+=3){const E=w,b=w+1,T=w+2;r=Vs(this,m,e,i,l,u,h,E,b,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=x,m=v;g<m;g+=3){const y=g,_=g+1,w=g+2;r=Vs(this,o,e,i,l,u,h,y,_,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Rp(n,e,t,i,r,s,o,a){let c;if(e.side===Gt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===wn,a),c===null)return null;ks.copy(a),ks.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ks);return l<t.near||l>t.far?null:{distance:l,point:ks.clone(),object:n}}function Vs(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,nr),n.getVertexPosition(c,ir),n.getVertexPosition(l,rr);const u=Rp(n,e,t,i,nr,ir,rr,Bs);if(u){r&&(Os.fromBufferAttribute(r,a),Fs.fromBufferAttribute(r,c),zs.fromBufferAttribute(r,l),u.uv=Qt.getInterpolation(Bs,nr,ir,rr,Os,Fs,zs,new pe)),s&&(Os.fromBufferAttribute(s,a),Fs.fromBufferAttribute(s,c),zs.fromBufferAttribute(s,l),u.uv1=Qt.getInterpolation(Bs,nr,ir,rr,Os,Fs,zs,new pe)),o&&(uu.fromBufferAttribute(o,a),du.fromBufferAttribute(o,c),hu.fromBufferAttribute(o,l),u.normal=Qt.getInterpolation(Bs,nr,ir,rr,uu,du,hu,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};Qt.getNormal(nr,ir,rr,h.normal),u.face=h}return u}class Rr extends qe{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(h,2));function x(v,g,m,y,_,w,A,E,b,T,S){const M=w/b,P=A/T,D=w/2,U=A/2,k=E/2,B=b+1,F=T+1;let X=0,H=0;const ee=new L;for(let re=0;re<F;re++){const ie=re*P-U;for(let K=0;K<B;K++){const fe=K*M-D;ee[v]=fe*y,ee[g]=ie*_,ee[m]=k,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[g]=0,ee[m]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(K/b),h.push(1-re/T),X+=1}}for(let re=0;re<T;re++)for(let ie=0;ie<b;ie++){const K=d+ie+B*re,fe=d+ie+B*(re+1),W=d+(ie+1)+B*(re+1),J=d+(ie+1)+B*re;c.push(K,fe,J),c.push(fe,W,J),H+=6}a.addGroup(f,H,S),f+=H,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=Ar(n[t]);for(const r in i)e[r]=i[r]}return e}function Pp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const qd={clone:Ar,merge:Ot};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xd extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new L,fu=new pe,pu=new pe;class dn extends Xd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,fu,pu),t.subVectors(pu,fu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sr=-90,ar=1;class Dp extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(sr,ar,e,t);r.layers=this.layers,this.add(r);const s=new dn(sr,ar,e,t);s.layers=this.layers,this.add(s);const o=new dn(sr,ar,e,t);o.layers=this.layers,this.add(o);const a=new dn(sr,ar,e,t);a.layers=this.layers,this.add(a);const c=new dn(sr,ar,e,t);c.layers=this.layers,this.add(c);const l=new dn(sr,ar,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Yd extends Bt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Np extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rr(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:ui});s.uniforms.tEquirect.value=t;const o=new $e(r,s),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=hn),new Dp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const bo=new L,Up=new L,Op=new Ge;class tt{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=bo.subVectors(i,t).cross(Up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(bo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Op.getNormalMatrix(e),r=this.coplanarPoint(bo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new xi,Hs=new L;class Rc{constructor(e=new tt,t=new tt,i=new tt,r=new tt,s=new tt,o=new tt){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],x=r[9],v=r[10],g=r[11],m=r[12],y=r[13],_=r[14],w=r[15];if(i[0].setComponents(c-s,d-l,g-f,w-m).normalize(),i[1].setComponents(c+s,d+l,g+f,w+m).normalize(),i[2].setComponents(c+o,d+u,g+x,w+y).normalize(),i[3].setComponents(c-o,d-u,g-x,w-y).normalize(),i[4].setComponents(c-a,d-h,g-v,w-_).normalize(),t===Un)i[5].setComponents(c+a,d+h,g+v,w+_).normalize();else if(t===xa)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Hs.x=r.normal.x>0?e.max.x:e.min.x,Hs.y=r.normal.y>0?e.max.y:e.min.y,Hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $d(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Fp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(n.bindBuffer(l,a),h.count===-1&&d.length===0&&n.bufferSubData(l,0,u),d.length!==0){for(let f=0,x=d.length;f<x;f++){const v=d[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Fa extends qe{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],x=[],v=[],g=[];for(let m=0;m<u;m++){const y=m*d-o;for(let _=0;_<l;_++){const w=_*h-s;x.push(w,-y,0),v.push(0,0,1),g.push(_/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const _=y+l*m,w=y+l*(m+1),A=y+1+l*(m+1),E=y+1+l*m;f.push(_,w,E),f.push(w,A,E)}this.setIndex(f),this.setAttribute("position",new Ne(x,3)),this.setAttribute("normal",new Ne(v,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.widthSegments,e.heightSegments)}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
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
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,om=`#define PI 3.141592653589793
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
} // validated`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",mm=`
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
}`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
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
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Um=`PhysicalMaterial material;
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
#endif`,Om=`struct PhysicalMaterial {
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
}`,Fm=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,q0=`#define DISTANCE
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
}`,X0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,Q0=`#define LAMBERT
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
}`,eg=`#define LAMBERT
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
}`,tg=`#define MATCAP
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
}`,ng=`#define MATCAP
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
}`,ig=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,sg=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,lg=`#define TOON
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
}`,ug=`#define TOON
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
}`,dg=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 color;
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
}`,mg=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:zp,alphahash_pars_fragment:Bp,alphamap_fragment:kp,alphamap_pars_fragment:Vp,alphatest_fragment:Hp,alphatest_pars_fragment:Gp,aomap_fragment:Wp,aomap_pars_fragment:qp,batching_pars_vertex:Xp,batching_vertex:Yp,begin_vertex:$p,beginnormal_vertex:jp,bsdfs:Zp,iridescence_fragment:Kp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Qp,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:tm,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:rm,color_pars_vertex:sm,color_vertex:am,common:om,cube_uv_reflection_fragment:cm,defaultnormal_vertex:lm,displacementmap_pars_vertex:um,displacementmap_vertex:dm,emissivemap_fragment:hm,emissivemap_pars_fragment:fm,colorspace_fragment:pm,colorspace_pars_fragment:mm,envmap_fragment:gm,envmap_common_pars_fragment:xm,envmap_pars_fragment:_m,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Pm,envmap_vertex:ym,fog_vertex:Mm,fog_pars_vertex:Sm,fog_fragment:wm,fog_pars_fragment:Em,gradientmap_pars_fragment:bm,lightmap_pars_fragment:Am,lights_lambert_fragment:Tm,lights_lambert_pars_fragment:Cm,lights_pars_begin:Rm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Im,lights_phong_fragment:Dm,lights_phong_pars_fragment:Nm,lights_physical_fragment:Um,lights_physical_pars_fragment:Om,lights_fragment_begin:Fm,lights_fragment_maps:zm,lights_fragment_end:Bm,logdepthbuf_fragment:km,logdepthbuf_pars_fragment:Vm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Gm,map_fragment:Wm,map_pars_fragment:qm,map_particle_fragment:Xm,map_particle_pars_fragment:Ym,metalnessmap_fragment:$m,metalnessmap_pars_fragment:jm,morphinstance_vertex:Zm,morphcolor_vertex:Km,morphnormal_vertex:Jm,morphtarget_pars_vertex:Qm,morphtarget_vertex:e0,normal_fragment_begin:t0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:r0,normal_vertex:s0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:u0,opaque_fragment:d0,packing:h0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:x0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:y0,shadowmap_vertex:M0,shadowmask_pars_fragment:S0,skinbase_vertex:w0,skinning_pars_vertex:E0,skinning_vertex:b0,skinnormal_vertex:A0,specularmap_fragment:T0,specularmap_pars_fragment:C0,tonemapping_fragment:R0,tonemapping_pars_fragment:P0,transmission_fragment:L0,transmission_pars_fragment:I0,uv_pars_fragment:D0,uv_pars_vertex:N0,uv_vertex:U0,worldpos_vertex:O0,background_vert:F0,background_frag:z0,backgroundCube_vert:B0,backgroundCube_frag:k0,cube_vert:V0,cube_frag:H0,depth_vert:G0,depth_frag:W0,distanceRGBA_vert:q0,distanceRGBA_frag:X0,equirect_vert:Y0,equirect_frag:$0,linedashed_vert:j0,linedashed_frag:Z0,meshbasic_vert:K0,meshbasic_frag:J0,meshlambert_vert:Q0,meshlambert_frag:eg,meshmatcap_vert:tg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:rg,meshphong_vert:sg,meshphong_frag:ag,meshphysical_vert:og,meshphysical_frag:cg,meshtoon_vert:lg,meshtoon_frag:ug,points_vert:dg,points_frag:hg,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},me={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},vn={basic:{uniforms:Ot([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ot([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ye(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ot([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ot([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ot([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ye(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ot([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ot([me.points,me.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ot([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ot([me.common,me.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ot([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ot([me.sprite,me.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ot([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ot([me.lights,me.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};vn.physical={uniforms:Ot([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Gs={r:0,b:0,g:0},bi=new gn,xg=new ct;function _g(n,e,t,i,r,s,o){const a=new ye(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function x(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const w=x(y);w===null?m(a,c):w&&w.isColor&&(m(w,1),_=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,_){const w=x(_);w&&(w.isCubeTexture||w.mapping===Da)?(u===void 0&&(u=new $e(new Rr(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ar(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bi.copy(_.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(bi)),u.material.toneMapped=rt.getTransfer(w.colorSpace)!==ut,(h!==w||d!==w.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new $e(new Fa(2,2),new qn({name:"BackgroundMaterial",uniforms:Ar(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=rt.getTransfer(w.colorSpace)!==ut,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,_){y.getRGB(Gs,Wd(n)),i.buffers.color.setClear(Gs.r,Gs.g,Gs.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:v,addToRenderList:g}}function vg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,P,D,U,k){let B=!1;const F=h(U,D,P);s!==F&&(s=F,l(s.object)),B=f(M,U,D,k),B&&x(M,U,D,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,w(M,P,D,U),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,P,D){const U=D.wireframe===!0;let k=i[M.id];k===void 0&&(k={},i[M.id]=k);let B=k[P.id];B===void 0&&(B={},k[P.id]=B);let F=B[U];return F===void 0&&(F=d(c()),B[U]=F),F}function d(M){const P=[],D=[],U=[];for(let k=0;k<t;k++)P[k]=0,D[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,P,D,U){const k=s.attributes,B=P.attributes;let F=0;const X=D.getAttributes();for(const H in X)if(X[H].location>=0){const re=k[H];let ie=B[H];if(ie===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),re===void 0||re.attribute!==ie||ie&&re.data!==ie.data)return!0;F++}return s.attributesNum!==F||s.index!==U}function x(M,P,D,U){const k={},B=P.attributes;let F=0;const X=D.getAttributes();for(const H in X)if(X[H].location>=0){let re=B[H];re===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));const ie={};ie.attribute=re,re&&re.data&&(ie.data=re.data),k[H]=ie,F++}s.attributes=k,s.attributesNum=F,s.index=U}function v(){const M=s.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function g(M){m(M,0)}function m(M,P){const D=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;D[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),k[M]!==P&&(n.vertexAttribDivisor(M,P),k[M]=P)}function y(){const M=s.newAttributes,P=s.enabledAttributes;for(let D=0,U=P.length;D<U;D++)P[D]!==M[D]&&(n.disableVertexAttribArray(D),P[D]=0)}function _(M,P,D,U,k,B,F){F===!0?n.vertexAttribIPointer(M,P,D,k,B):n.vertexAttribPointer(M,P,D,U,k,B)}function w(M,P,D,U){v();const k=U.attributes,B=D.getAttributes(),F=P.defaultAttributeValues;for(const X in B){const H=B[X];if(H.location>=0){let ee=k[X];if(ee===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const re=ee.normalized,ie=ee.itemSize,K=e.get(ee);if(K===void 0)continue;const fe=K.buffer,W=K.type,J=K.bytesPerElement,le=W===n.INT||W===n.UNSIGNED_INT||ee.gpuType===Ld;if(ee.isInterleavedBufferAttribute){const N=ee.data,se=N.stride,xe=ee.offset;if(N.isInstancedInterleavedBuffer){for(let we=0;we<H.locationSize;we++)m(H.location+we,N.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let we=0;we<H.locationSize;we++)g(H.location+we);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let we=0;we<H.locationSize;we++)_(H.location+we,ie/H.locationSize,W,re,se*J,(xe+ie/H.locationSize*we)*J,le)}else{if(ee.isInstancedBufferAttribute){for(let N=0;N<H.locationSize;N++)m(H.location+N,ee.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let N=0;N<H.locationSize;N++)g(H.location+N);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let N=0;N<H.locationSize;N++)_(H.location+N,ie/H.locationSize,W,re,ie*J,ie/H.locationSize*N*J,le)}}else if(F!==void 0){const re=F[X];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(H.location,re);break;case 3:n.vertexAttrib3fv(H.location,re);break;case 4:n.vertexAttrib4fv(H.location,re);break;default:n.vertexAttrib1fv(H.location,re)}}}}y()}function A(){T();for(const M in i){const P=i[M];for(const D in P){const U=P[D];for(const k in U)u(U[k].object),delete U[k];delete P[D]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const D in P){const U=P[D];for(const k in U)u(U[k].object),delete U[k];delete P[D]}delete i[M.id]}function b(M){for(const P in i){const D=i[P];if(D[M.id]===void 0)continue;const U=D[M.id];for(const k in U)u(U[k].object),delete U[k];delete D[M.id]}}function T(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function yg(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(l[f],u[f]);else{d.multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let x=0;x<h;x++)f+=u[x];t.update(f,i,1)}}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)o(l[x],u[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let x=0;for(let v=0;v<h;v++)x+=u[v];for(let v=0;v<d.length;v++)t.update(x,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==yn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const b=E===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==pi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==oi&&!b)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:w,maxSamples:A}}function Sg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new tt,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const x=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!r||x===null||x.length===0||s&&!g)s?u(null):l();else{const y=s?0:i,_=y*4;let w=m.clippingState||null;c.value=w,w=u(x,d,_,f);for(let A=0;A!==_;++A)w[A]=t[A];m.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,x){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,x!==!0||g===null){const m=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,w=f;_!==v;++_,w+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(g,w),g[w+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function wg(n){let e=new WeakMap;function t(o,a){return a===Jo?o.mapping=Mr:a===Qo&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jo||a===Qo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Np(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Bi extends Xd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fr=4,mu=[.125,.215,.35,.446,.526,.582],Ri=20,Ao=new Bi,gu=new ye;let To=null,Co=0,Ro=0,Po=!1;const Ti=(1+Math.sqrt(5))/2,or=1/Ti,xu=[new L(-Ti,or,0),new L(Ti,or,0),new L(-or,0,Ti),new L(or,0,Ti),new L(0,Ti,-or),new L(0,Ti,or),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class _u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){To=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(To,Co,Ro),this._renderer.xr.enabled=Po,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Na,format:yn,colorSpace:gi,depthBuffer:!1},r=vu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(s)),this._blurMaterial=bg(s,e,t)}return r}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,i,r){const a=new dn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(gu),u.toneMapping=di,u.autoClear=!1;const f=new kt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),x=new $e(new Rr,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(gu),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const _=this._cubeSize;Ws(r,y*_,m>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mr||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ws(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ao)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xu[(r-s-1)%xu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $e(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),v=s/x,g=isFinite(s)?1+Math.floor(u*v):Ri;g>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ri}`);const m=[];let y=0;for(let b=0;b<Ri;++b){const T=b/v,S=Math.exp(-T*T/2);m.push(S),b===0?y+=S:b<g&&(y+=2*S)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const w=this._sizeLods[r],A=3*w*(r>_-fr?r-_+fr:0),E=4*(this._cubeSize-w);Ws(t,A,E,3*w,2*w),c.setRenderTarget(t),c.render(h,Ao)}}function Eg(n){const e=[],t=[],i=[];let r=n;const s=n-fr+1+mu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-fr?c=mu[o-n+fr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,x=6,v=3,g=2,m=1,y=new Float32Array(v*x*f),_=new Float32Array(g*x*f),w=new Float32Array(m*x*f);for(let E=0;E<f;E++){const b=E%3*2/3-1,T=E>2?0:-1,S=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];y.set(S,v*x*E),_.set(d,g*x*E);const M=[E,E,E,E,E,E];w.set(M,m*x*E)}const A=new qe;A.setAttribute("position",new It(y,v)),A.setAttribute("uv",new It(_,g)),A.setAttribute("faceIndex",new It(w,m)),e.push(A),r>fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vu(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bg(n,e,t){const i=new Float32Array(Ri),r=new L(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function yu(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Mu(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function Ag(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Jo||c===Qo,u=c===Mr||c===Sr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new _u(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new _u(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Tg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Tc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Cg(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const x in f){const v=f[x];for(let g=0,m=v.length;g<m;g++)e.update(v[g],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,x=h.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,w=y.length;_<w;_+=3){const A=y[_+0],E=y[_+1],b=y[_+2];d.push(A,E,E,b,b,A)}}else if(x!==void 0){const y=x.array;v=x.version;for(let _=0,w=y.length/3-1;_<w;_+=3){const A=_+0,E=_+1,b=_+2;d.push(A,E,E,b,b,A)}}else return;const g=new(zd(d)?Gd:Hd)(d,1);g.version=v;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Rg(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function l(d,f,x){x!==0&&(n.drawElementsInstanced(i,f,s,d*o,x),t.update(f,i,x))}function u(d,f,x){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<x;g++)this.render(d[g]/o,f[g]);else{v.multiDrawElementsWEBGL(i,f,0,s,d,0,x);let g=0;for(let m=0;m<x;m++)g+=f[m];t.update(g,i,1)}}function h(d,f,x,v){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,x);let m=0;for(let y=0;y<x;y++)m+=f[y];for(let y=0;y<v.length;y++)t.update(m,i,v[y])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Pg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Lg(n,e,t){const i=new WeakMap,r=new Tt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),x===!0&&(_=2),v===!0&&(_=3);let w=a.attributes.position.count*_,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*A*4*h),b=new kd(E,w,A,h);b.type=oi,b.needsUpdate=!0;const T=_*4;for(let M=0;M<h;M++){const P=g[M],D=m[M],U=y[M],k=w*A*4*M;for(let B=0;B<P.count;B++){const F=B*T;f===!0&&(r.fromBufferAttribute(P,B),E[k+F+0]=r.x,E[k+F+1]=r.y,E[k+F+2]=r.z,E[k+F+3]=0),x===!0&&(r.fromBufferAttribute(D,B),E[k+F+4]=r.x,E[k+F+5]=r.y,E[k+F+6]=r.z,E[k+F+7]=0),v===!0&&(r.fromBufferAttribute(U,B),E[k+F+8]=r.x,E[k+F+9]=r.y,E[k+F+10]=r.z,E[k+F+11]=U.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new pe(w,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const x=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Ig(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class jd extends Bt{constructor(e,t,i,r,s,o,a,c,l,u=mr){if(u!==mr&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===mr&&(i=wr),i===void 0&&u===br&&(i=Er),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zd=new Bt,Kd=new jd(1,1);Kd.compareFunction=Fd;const Jd=new kd,Qd=new vp,eh=new Yd,Su=[],wu=[],Eu=new Float32Array(16),bu=new Float32Array(9),Au=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Su[r];if(s===void 0&&(s=new Float32Array(r),Su[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function za(n,e){let t=wu[e];t===void 0&&(t=new Int32Array(e),wu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Fg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;Au.set(i),n.uniformMatrix2fv(this.addr,!1,Au),Mt(t,i)}}function zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;bu.set(i),n.uniformMatrix3fv(this.addr,!1,bu),Mt(t,i)}}function Bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,i))return;Eu.set(i),n.uniformMatrix4fv(this.addr,!1,Eu),Mt(t,i)}}function kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function $g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Kd:Zd;t.setTexture2D(e||s,r)}function jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qd,r)}function Zg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||eh,r)}function Kg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jd,r)}function Jg(n){switch(n){case 5126:return Dg;case 35664:return Ng;case 35665:return Ug;case 35666:return Og;case 35674:return Fg;case 35675:return zg;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return Vg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return qg;case 36295:return Xg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Kg}}function Qg(n,e){n.uniform1fv(this.addr,e)}function e1(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function t1(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function n1(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function i1(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function r1(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function s1(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function a1(n,e){n.uniform1iv(this.addr,e)}function o1(n,e){n.uniform2iv(this.addr,e)}function c1(n,e){n.uniform3iv(this.addr,e)}function l1(n,e){n.uniform4iv(this.addr,e)}function u1(n,e){n.uniform1uiv(this.addr,e)}function d1(n,e){n.uniform2uiv(this.addr,e)}function h1(n,e){n.uniform3uiv(this.addr,e)}function f1(n,e){n.uniform4uiv(this.addr,e)}function p1(n,e,t){const i=this.cache,r=e.length,s=za(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zd,s[o])}function m1(n,e,t){const i=this.cache,r=e.length,s=za(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qd,s[o])}function g1(n,e,t){const i=this.cache,r=e.length,s=za(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||eh,s[o])}function x1(n,e,t){const i=this.cache,r=e.length,s=za(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jd,s[o])}function _1(n){switch(n){case 5126:return Qg;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return a1;case 35667:case 35671:return o1;case 35668:case 35672:return c1;case 35669:case 35673:return l1;case 5125:return u1;case 36294:return d1;case 36295:return h1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return x1}}class v1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jg(t.type)}}class y1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_1(t.type)}}class M1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function Tu(n,e){n.seq.push(e),n.map[e.id]=e}function S1(n,e,t){const i=n.name,r=i.length;for(Lo.lastIndex=0;;){const s=Lo.exec(i),o=Lo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Tu(t,l===void 0?new v1(a,n,e):new y1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new M1(a),Tu(t,h)),t=h}}}class ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);S1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Cu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const w1=37297;let E1=0;function b1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function A1(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===ga&&t===ma?i="LinearDisplayP3ToLinearSRGB":e===ma&&t===ga&&(i="LinearSRGBToLinearDisplayP3"),n){case gi:case Ua:return[i,"LinearTransferOETF"];case Kt:case bc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ru(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+b1(n.getShaderSource(e),o)}else return r}function T1(n,e){const t=A1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function C1(n,e){let t;switch(e){case wf:t="Linear";break;case Ef:t="Reinhard";break;case bf:t="OptimizedCineon";break;case Rd:t="ACESFilmic";break;case Tf:t="AgX";break;case Cf:t="Neutral";break;case Af:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function R1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function P1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function L1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $r(n){return n!==""}function Pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(I1,N1)}const D1=new Map;function N1(n,e){let t=He[e];if(t===void 0){const i=D1.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ic(t)}const U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(n){return n.replace(U1,O1)}function O1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Du(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function F1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function z1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mr:case Sr:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function k1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wc:e="ENVMAP_BLENDING_MULTIPLY";break;case Mf:e="ENVMAP_BLENDING_MIX";break;case Sf:e="ENVMAP_BLENDING_ADD";break}return e}function V1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function H1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=F1(t),l=z1(t),u=B1(t),h=k1(t),d=V1(t),f=R1(t),x=P1(s),v=r.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($r).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($r).join(`
`),m.length>0&&(m+=`
`)):(g=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),m=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?He.tonemapping_pars_fragment:"",t.toneMapping!==di?C1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,T1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=ic(o),o=Pu(o,t),o=Lu(o,t),a=ic(a),a=Pu(a,t),a=Lu(a,t),o=Iu(o),a=Iu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+g+o,w=y+m+a,A=Cu(r,r.VERTEX_SHADER,_),E=Cu(r,r.FRAGMENT_SHADER,w);r.attachShader(v,A),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(P){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(A).trim(),k=r.getShaderInfoLog(E).trim();let B=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,E);else{const X=Ru(r,A,"vertex"),H=Ru(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+X+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||k==="")&&(F=!1);F&&(P.diagnostics={runnable:B,programLog:D,vertexShader:{log:U,prefix:g},fragmentShader:{log:k,prefix:m}})}r.deleteShader(A),r.deleteShader(E),T=new ca(r,v),S=L1(r,v)}let T;this.getUniforms=function(){return T===void 0&&b(this),T};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,w1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}let G1=0;class W1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new q1(e),t.set(e,i)),i}}class q1{constructor(e){this.id=G1++,this.code=e,this.usedTimes=0}}function X1(n,e,t,i,r,s,o){const a=new Cc,c=new W1,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,P,D,U){const k=D.fog,B=U.geometry,F=S.isMeshStandardMaterial?D.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),H=X&&X.mapping===Da?X.image.height:null,ee=x[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ie=re!==void 0?re.length:0;let K=0;B.morphAttributes.position!==void 0&&(K=1),B.morphAttributes.normal!==void 0&&(K=2),B.morphAttributes.color!==void 0&&(K=3);let fe,W,J,le;if(ee){const st=vn[ee];fe=st.vertexShader,W=st.fragmentShader}else fe=S.vertexShader,W=S.fragmentShader,c.update(S),J=c.getVertexShaderID(S),le=c.getFragmentShaderID(S);const N=n.getRenderTarget(),se=U.isInstancedMesh===!0,xe=U.isBatchedMesh===!0,we=!!S.map,O=!!S.matcap,Te=!!X,Be=!!S.aoMap,Ze=!!S.lightMap,Pe=!!S.bumpMap,Xe=!!S.normalMap,ke=!!S.displacementMap,Fe=!!S.emissiveMap,lt=!!S.metalnessMap,I=!!S.roughnessMap,C=S.anisotropy>0,$=S.clearcoat>0,ne=S.dispersion>0,j=S.iridescence>0,Z=S.sheen>0,oe=S.transmission>0,ce=C&&!!S.anisotropyMap,ue=$&&!!S.clearcoatMap,Ee=$&&!!S.clearcoatNormalMap,ae=$&&!!S.clearcoatRoughnessMap,Me=j&&!!S.iridescenceMap,Ve=j&&!!S.iridescenceThicknessMap,Ie=Z&&!!S.sheenColorMap,ge=Z&&!!S.sheenRoughnessMap,We=!!S.specularMap,Ye=!!S.specularColorMap,gt=!!S.specularIntensityMap,z=oe&&!!S.transmissionMap,_e=oe&&!!S.thicknessMap,Q=!!S.gradientMap,te=!!S.alphaMap,he=S.alphaTest>0,ze=!!S.alphaHash,Ke=!!S.extensions;let xt=di;S.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xt=n.toneMapping);const St={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:fe,fragmentShader:W,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:xe,batchingColor:xe&&U._colorsTexture!==null,instancing:se,instancingColor:se&&U.instanceColor!==null,instancingMorph:se&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:gi,alphaToCoverage:!!S.alphaToCoverage,map:we,matcap:O,envMap:Te,envMapMode:Te&&X.mapping,envMapCubeUVHeight:H,aoMap:Be,lightMap:Ze,bumpMap:Pe,normalMap:Xe,displacementMap:d&&ke,emissiveMap:Fe,normalMapObjectSpace:Xe&&S.normalMapType===Hf,normalMapTangentSpace:Xe&&S.normalMapType===Ec,metalnessMap:lt,roughnessMap:I,anisotropy:C,anisotropyMap:ce,clearcoat:$,clearcoatMap:ue,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ae,dispersion:ne,iridescence:j,iridescenceMap:Me,iridescenceThicknessMap:Ve,sheen:Z,sheenColorMap:Ie,sheenRoughnessMap:ge,specularMap:We,specularColorMap:Ye,specularIntensityMap:gt,transmission:oe,transmissionMap:z,thicknessMap:_e,gradientMap:Q,opaque:S.transparent===!1&&S.blending===pr&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:he,alphaHash:ze,combine:S.combine,mapUv:we&&v(S.map.channel),aoMapUv:Be&&v(S.aoMap.channel),lightMapUv:Ze&&v(S.lightMap.channel),bumpMapUv:Pe&&v(S.bumpMap.channel),normalMapUv:Xe&&v(S.normalMap.channel),displacementMapUv:ke&&v(S.displacementMap.channel),emissiveMapUv:Fe&&v(S.emissiveMap.channel),metalnessMapUv:lt&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:ce&&v(S.anisotropyMap.channel),clearcoatMapUv:ue&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(S.sheenRoughnessMap.channel),specularMapUv:We&&v(S.specularMap.channel),specularColorMapUv:Ye&&v(S.specularColorMap.channel),specularIntensityMapUv:gt&&v(S.specularIntensityMap.channel),transmissionMapUv:z&&v(S.transmissionMap.channel),thicknessMapUv:_e&&v(S.thicknessMap.channel),alphaMapUv:te&&v(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Xe||C),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(we||te),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:K,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:we&&S.map.isVideoTexture===!0&&rt.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ht,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ke&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(M,S),_(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),S.push(a.mask)}function w(S){const M=x[S.type];let P;if(M){const D=vn[M];P=qd.clone(D.uniforms)}else P=S.uniforms;return P}function A(S,M){let P;for(let D=0,U=u.length;D<U;D++){const k=u[D];if(k.cacheKey===M){P=k,++P.usedTimes;break}}return P===void 0&&(P=new H1(n,M,S,s),u.push(P)),P}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function b(S){c.remove(S)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:T}}function Y1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function $1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,x,v,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:x,renderOrder:h.renderOrder,z:v,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=x,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function a(h,d,f,x,v,g){const m=o(h,d,f,x,v,g);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(h,d,f,x,v,g){const m=o(h,d,f,x,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||$1),i.length>1&&i.sort(d||Nu),r.length>1&&r.sort(d||Nu)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function j1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Uu,n.set(i,[o])):r>=s.length?(o=new Uu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Z1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ye};break;case"SpotLight":t={position:new L,direction:new L,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function K1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let J1=0;function Q1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ex(n){const e=new Z1,t=K1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const r=new L,s=new ct,o=new ct;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,x=0,v=0,g=0,m=0,y=0,_=0,w=0,A=0,E=0,b=0;l.sort(Q1);for(let S=0,M=l.length;S<M;S++){const P=l[S],D=P.color,U=P.intensity,k=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*U,h+=D.g*U,d+=D.b*U;else if(P.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(P.sh.coefficients[F],U);b++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,H=t.get(P);H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=F,f++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(D).multiplyScalar(U),F.distance=k,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,i.spot[v]=F;const X=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,X.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[v]=X.matrix,P.castShadow){const H=t.get(P);H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=B,w++}v++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(D).multiplyScalar(U),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=F,g++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const X=P.shadow,H=t.get(P);H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,i.pointShadow[x]=H,i.pointShadowMap[x]=B,i.pointShadowMatrix[x]=P.shadow.matrix,_++}i.point[x]=F,x++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(U),F.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[m]=F,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==f||T.pointLength!==x||T.spotLength!==v||T.rectAreaLength!==g||T.hemiLength!==m||T.numDirectionalShadows!==y||T.numPointShadows!==_||T.numSpotShadows!==w||T.numSpotMaps!==A||T.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=x,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=w+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=b,T.directionalLength=f,T.pointLength=x,T.spotLength=v,T.rectAreaLength=g,T.hemiLength=m,T.numDirectionalShadows=y,T.numPointShadows=_,T.numSpotShadows=w,T.numSpotMaps=A,T.numLightProbes=b,i.version=J1++)}function c(l,u){let h=0,d=0,f=0,x=0,v=0;const g=u.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const _=l[m];if(_.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),h++}else if(_.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function Ou(n){const e=new ex(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function tx(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ou(n),e.set(r,[a])):s>=o.length?(a=new Ou(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class nx extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ix extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`;function ax(n,e,t){let i=new Rc;const r=new pe,s=new pe,o=new Tt,a=new nx({depthPacking:Vf}),c=new ix,l={},u=t.maxTextureSize,h={[wn]:Gt,[Gt]:wn,[ht]:ht},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:rx,fragmentShader:sx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new qe;x.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $e(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let m=this.type;this.render=function(E,b,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ui),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=m!==In&&this.type===In,k=m===In&&this.type!==In;for(let B=0,F=E.length;B<F;B++){const X=E[B],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||U===!0||k===!0){const ie=this.type!==In?{minFilter:en,magFilter:en}:{};H.map!==null&&H.map.dispose(),H.map=new Fi(r.x,r.y,ie),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const re=H.getViewportCount();for(let ie=0;ie<re;ie++){const K=H.getViewport(ie);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),D.viewport(o),H.updateMatrices(X,ie),i=H.getFrustum(),w(b,T,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===In&&y(H,T),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,M,P)};function y(E,b){const T=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fi(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(b,null,T,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(b,null,T,f,v,null)}function _(E,b,T,S){let M=null;const P=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=T.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=M.uuid,U=b.uuid;let k=l[D];k===void 0&&(k={},l[D]=k);let B=k[U];B===void 0&&(B=M.clone(),k[U]=B,b.addEventListener("dispose",A)),M=B}if(M.visible=b.visible,M.wireframe=b.wireframe,S===In?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=n.properties.get(M);D.light=T}return M}function w(E,b,T,S,M){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===In)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const U=e.update(E),k=E.material;if(Array.isArray(k)){const B=U.groups;for(let F=0,X=B.length;F<X;F++){const H=B[F],ee=k[H.materialIndex];if(ee&&ee.visible){const re=_(E,ee,S,M);E.onBeforeShadow(n,E,b,T,U,re,H),n.renderBufferDirect(T,null,U,re,E,H),E.onAfterShadow(n,E,b,T,U,re,H)}}}else if(k.visible){const B=_(E,k,S,M);E.onBeforeShadow(n,E,b,T,U,B,null),n.renderBufferDirect(T,null,U,B,E,null),E.onAfterShadow(n,E,b,T,U,B,null)}}const D=E.children;for(let U=0,k=D.length;U<k;U++)w(D[U],b,T,S,M)}function A(E){E.target.removeEventListener("dispose",A);for(const T in l){const S=l[T],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function ox(n){function e(){let z=!1;const _e=new Tt;let Q=null;const te=new Tt(0,0,0,0);return{setMask:function(he){Q!==he&&!z&&(n.colorMask(he,he,he,he),Q=he)},setLocked:function(he){z=he},setClear:function(he,ze,Ke,xt,St){St===!0&&(he*=xt,ze*=xt,Ke*=xt),_e.set(he,ze,Ke,xt),te.equals(_e)===!1&&(n.clearColor(he,ze,Ke,xt),te.copy(_e))},reset:function(){z=!1,Q=null,te.set(-1,0,0,0)}}}function t(){let z=!1,_e=null,Q=null,te=null;return{setTest:function(he){he?le(n.DEPTH_TEST):N(n.DEPTH_TEST)},setMask:function(he){_e!==he&&!z&&(n.depthMask(he),_e=he)},setFunc:function(he){if(Q!==he){switch(he){case pf:n.depthFunc(n.NEVER);break;case mf:n.depthFunc(n.ALWAYS);break;case gf:n.depthFunc(n.LESS);break;case ha:n.depthFunc(n.LEQUAL);break;case xf:n.depthFunc(n.EQUAL);break;case _f:n.depthFunc(n.GEQUAL);break;case vf:n.depthFunc(n.GREATER);break;case yf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=he}},setLocked:function(he){z=he},setClear:function(he){te!==he&&(n.clearDepth(he),te=he)},reset:function(){z=!1,_e=null,Q=null,te=null}}}function i(){let z=!1,_e=null,Q=null,te=null,he=null,ze=null,Ke=null,xt=null,St=null;return{setTest:function(st){z||(st?le(n.STENCIL_TEST):N(n.STENCIL_TEST))},setMask:function(st){_e!==st&&!z&&(n.stencilMask(st),_e=st)},setFunc:function(st,xn,_n){(Q!==st||te!==xn||he!==_n)&&(n.stencilFunc(st,xn,_n),Q=st,te=xn,he=_n)},setOp:function(st,xn,_n){(ze!==st||Ke!==xn||xt!==_n)&&(n.stencilOp(st,xn,_n),ze=st,Ke=xn,xt=_n)},setLocked:function(st){z=st},setClear:function(st){St!==st&&(n.clearStencil(st),St=st)},reset:function(){z=!1,_e=null,Q=null,te=null,he=null,ze=null,Ke=null,xt=null,St=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,x=!1,v=null,g=null,m=null,y=null,_=null,w=null,A=null,E=new ye(0,0,0),b=0,T=!1,S=null,M=null,P=null,D=null,U=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,F=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=F>=2);let H=null,ee={};const re=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),K=new Tt().fromArray(re),fe=new Tt().fromArray(ie);function W(z,_e,Q,te){const he=new Uint8Array(4),ze=n.createTexture();n.bindTexture(z,ze),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<Q;Ke++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(_e+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ze}const J={};J[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(n.DEPTH_TEST),s.setFunc(ha),Pe(!1),Xe(xl),le(n.CULL_FACE),Be(ui);function le(z){l[z]!==!0&&(n.enable(z),l[z]=!0)}function N(z){l[z]!==!1&&(n.disable(z),l[z]=!1)}function se(z,_e){return u[z]!==_e?(n.bindFramebuffer(z,_e),u[z]=_e,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_e),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function xe(z,_e){let Q=d,te=!1;if(z){Q=h.get(_e),Q===void 0&&(Q=[],h.set(_e,Q));const he=z.textures;if(Q.length!==he.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ze=0,Ke=he.length;ze<Ke;ze++)Q[ze]=n.COLOR_ATTACHMENT0+ze;Q.length=he.length,te=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,te=!0);te&&n.drawBuffers(Q)}function we(z){return f!==z?(n.useProgram(z),f=z,!0):!1}const O={[Ci]:n.FUNC_ADD,[Zh]:n.FUNC_SUBTRACT,[Kh]:n.FUNC_REVERSE_SUBTRACT};O[Jh]=n.MIN,O[Qh]=n.MAX;const Te={[ef]:n.ZERO,[tf]:n.ONE,[nf]:n.SRC_COLOR,[Zo]:n.SRC_ALPHA,[lf]:n.SRC_ALPHA_SATURATE,[of]:n.DST_COLOR,[sf]:n.DST_ALPHA,[rf]:n.ONE_MINUS_SRC_COLOR,[Ko]:n.ONE_MINUS_SRC_ALPHA,[cf]:n.ONE_MINUS_DST_COLOR,[af]:n.ONE_MINUS_DST_ALPHA,[uf]:n.CONSTANT_COLOR,[df]:n.ONE_MINUS_CONSTANT_COLOR,[hf]:n.CONSTANT_ALPHA,[ff]:n.ONE_MINUS_CONSTANT_ALPHA};function Be(z,_e,Q,te,he,ze,Ke,xt,St,st){if(z===ui){x===!0&&(N(n.BLEND),x=!1);return}if(x===!1&&(le(n.BLEND),x=!0),z!==jh){if(z!==v||st!==T){if((g!==Ci||_!==Ci)&&(n.blendEquation(n.FUNC_ADD),g=Ci,_=Ci),st)switch(z){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yr:n.blendFunc(n.ONE,n.ONE);break;case _l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,y=null,w=null,A=null,E.set(0,0,0),b=0,v=z,T=st}return}he=he||_e,ze=ze||Q,Ke=Ke||te,(_e!==g||he!==_)&&(n.blendEquationSeparate(O[_e],O[he]),g=_e,_=he),(Q!==m||te!==y||ze!==w||Ke!==A)&&(n.blendFuncSeparate(Te[Q],Te[te],Te[ze],Te[Ke]),m=Q,y=te,w=ze,A=Ke),(xt.equals(E)===!1||St!==b)&&(n.blendColor(xt.r,xt.g,xt.b,St),E.copy(xt),b=St),v=z,T=!1}function Ze(z,_e){z.side===ht?N(n.CULL_FACE):le(n.CULL_FACE);let Q=z.side===Gt;_e&&(Q=!Q),Pe(Q),z.blending===pr&&z.transparent===!1?Be(ui):Be(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const te=z.stencilWrite;o.setTest(te),te&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):N(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(z){S!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),S=z)}function Xe(z){z!==Xh?(le(n.CULL_FACE),z!==M&&(z===xl?n.cullFace(n.BACK):z===Yh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):N(n.CULL_FACE),M=z}function ke(z){z!==P&&(B&&n.lineWidth(z),P=z)}function Fe(z,_e,Q){z?(le(n.POLYGON_OFFSET_FILL),(D!==_e||U!==Q)&&(n.polygonOffset(_e,Q),D=_e,U=Q)):N(n.POLYGON_OFFSET_FILL)}function lt(z){z?le(n.SCISSOR_TEST):N(n.SCISSOR_TEST)}function I(z){z===void 0&&(z=n.TEXTURE0+k-1),H!==z&&(n.activeTexture(z),H=z)}function C(z,_e,Q){Q===void 0&&(H===null?Q=n.TEXTURE0+k-1:Q=H);let te=ee[Q];te===void 0&&(te={type:void 0,texture:void 0},ee[Q]=te),(te.type!==z||te.texture!==_e)&&(H!==Q&&(n.activeTexture(Q),H=Q),n.bindTexture(z,_e||J[z]),te.type=z,te.texture=_e)}function $(){const z=ee[H];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ve(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(z){K.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),K.copy(z))}function ge(z){fe.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),fe.copy(z))}function We(z,_e){let Q=c.get(_e);Q===void 0&&(Q=new WeakMap,c.set(_e,Q));let te=Q.get(z);te===void 0&&(te=n.getUniformBlockIndex(_e,z.name),Q.set(z,te))}function Ye(z,_e){const te=c.get(_e).get(z);a.get(_e)!==te&&(n.uniformBlockBinding(_e,te,z.__bindingPointIndex),a.set(_e,te))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},H=null,ee={},u={},h=new WeakMap,d=[],f=null,x=!1,v=null,g=null,m=null,y=null,_=null,w=null,A=null,E=new ye(0,0,0),b=0,T=!1,S=null,M=null,P=null,D=null,U=null,K.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:N,bindFramebuffer:se,drawBuffers:xe,useProgram:we,setBlending:Be,setMaterial:Ze,setFlipSided:Pe,setCullFace:Xe,setLineWidth:ke,setPolygonOffset:Fe,setScissorTest:lt,activeTexture:I,bindTexture:C,unbindTexture:$,compressedTexImage2D:ne,compressedTexImage3D:j,texImage2D:Me,texImage3D:Ve,updateUBOMapping:We,uniformBlockBinding:Ye,texStorage2D:Ee,texStorage3D:ae,texSubImage2D:Z,texSubImage3D:oe,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:Ie,viewport:ge,reset:gt}}function cx(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,C){return f?new OffscreenCanvas(I,C):_a("canvas")}function v(I,C,$){let ne=1;const j=lt(I);if((j.width>$||j.height>$)&&(ne=$/Math.max(j.width,j.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Z=Math.floor(ne*j.width),oe=Math.floor(ne*j.height);h===void 0&&(h=x(Z,oe));const ce=C?x(Z,oe):h;return ce.width=Z,ce.height=oe,ce.getContext("2d").drawImage(I,0,0,Z,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+oe+")."),ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==en&&I.minFilter!==hn}function m(I){n.generateMipmap(I)}function y(I,C,$,ne,j=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=C;if(C===n.RED&&($===n.FLOAT&&(Z=n.R32F),$===n.HALF_FLOAT&&(Z=n.R16F),$===n.UNSIGNED_BYTE&&(Z=n.R8)),C===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(Z=n.R8UI),$===n.UNSIGNED_SHORT&&(Z=n.R16UI),$===n.UNSIGNED_INT&&(Z=n.R32UI),$===n.BYTE&&(Z=n.R8I),$===n.SHORT&&(Z=n.R16I),$===n.INT&&(Z=n.R32I)),C===n.RG&&($===n.FLOAT&&(Z=n.RG32F),$===n.HALF_FLOAT&&(Z=n.RG16F),$===n.UNSIGNED_BYTE&&(Z=n.RG8)),C===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(Z=n.RG8UI),$===n.UNSIGNED_SHORT&&(Z=n.RG16UI),$===n.UNSIGNED_INT&&(Z=n.RG32UI),$===n.BYTE&&(Z=n.RG8I),$===n.SHORT&&(Z=n.RG16I),$===n.INT&&(Z=n.RG32I)),C===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),C===n.RGBA){const oe=j?pa:rt.getTransfer(ne);$===n.FLOAT&&(Z=n.RGBA32F),$===n.HALF_FLOAT&&(Z=n.RGBA16F),$===n.UNSIGNED_BYTE&&(Z=oe===ut?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(I,C){let $;return I?C===null||C===wr||C===Er?$=n.DEPTH24_STENCIL8:C===oi?$=n.DEPTH32F_STENCIL8:C===fa&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===wr||C===Er?$=n.DEPTH_COMPONENT24:C===oi?$=n.DEPTH_COMPONENT32F:C===fa&&($=n.DEPTH_COMPONENT16),$}function w(I,C){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==en&&I.minFilter!==hn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function A(I){const C=I.target;C.removeEventListener("dispose",A),b(C),C.isVideoTexture&&u.delete(C)}function E(I){const C=I.target;C.removeEventListener("dispose",E),S(C)}function b(I){const C=i.get(I);if(C.__webglInit===void 0)return;const $=I.source,ne=d.get($);if(ne){const j=ne[C.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(I),Object.keys(ne).length===0&&d.delete($)}i.remove(I)}function T(I){const C=i.get(I);n.deleteTexture(C.__webglTexture);const $=I.source,ne=d.get($);delete ne[C.__cacheKey],o.memory.textures--}function S(I){const C=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(C.__webglFramebuffer[ne]))for(let j=0;j<C.__webglFramebuffer[ne].length;j++)n.deleteFramebuffer(C.__webglFramebuffer[ne][j]);else n.deleteFramebuffer(C.__webglFramebuffer[ne]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[ne])}else{if(Array.isArray(C.__webglFramebuffer))for(let ne=0;ne<C.__webglFramebuffer.length;ne++)n.deleteFramebuffer(C.__webglFramebuffer[ne]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ne=0;ne<C.__webglColorRenderbuffer.length;ne++)C.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[ne]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const $=I.textures;for(let ne=0,j=$.length;ne<j;ne++){const Z=i.get($[ne]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove($[ne])}i.remove(I)}let M=0;function P(){M=0}function D(){const I=M;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),M+=1,I}function U(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function k(I,C){const $=i.get(I);if(I.isVideoTexture&&ke(I),I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){const ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe($,I,C);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+C)}function B(I,C){const $=i.get(I);if(I.version>0&&$.__version!==I.version){fe($,I,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+C)}function F(I,C){const $=i.get(I);if(I.version>0&&$.__version!==I.version){fe($,I,C);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+C)}function X(I,C){const $=i.get(I);if(I.version>0&&$.__version!==I.version){W($,I,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+C)}const H={[ec]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[tc]:n.MIRRORED_REPEAT},ee={[en]:n.NEAREST,[Rf]:n.NEAREST_MIPMAP_NEAREST,[Ss]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[to]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},re={[Gf]:n.NEVER,[jf]:n.ALWAYS,[Wf]:n.LESS,[Fd]:n.LEQUAL,[qf]:n.EQUAL,[$f]:n.GEQUAL,[Xf]:n.GREATER,[Yf]:n.NOTEQUAL};function ie(I,C){if(C.type===oi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===hn||C.magFilter===to||C.magFilter===Ss||C.magFilter===Ii||C.minFilter===hn||C.minFilter===to||C.minFilter===Ss||C.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,H[C.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,H[C.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,H[C.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ee[C.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ee[C.minFilter]),C.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,re[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===en||C.minFilter!==Ss&&C.minFilter!==Ii||C.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function K(I,C){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",A));const ne=C.source;let j=d.get(ne);j===void 0&&(j={},d.set(ne,j));const Z=U(C);if(Z!==I.__cacheKey){j[Z]===void 0&&(j[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),j[Z].usedTimes++;const oe=j[I.__cacheKey];oe!==void 0&&(j[I.__cacheKey].usedTimes--,oe.usedTimes===0&&T(C)),I.__cacheKey=Z,I.__webglTexture=j[Z].texture}return $}function fe(I,C,$){let ne=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ne=n.TEXTURE_3D);const j=K(I,C),Z=C.source;t.bindTexture(ne,I.__webglTexture,n.TEXTURE0+$);const oe=i.get(Z);if(Z.version!==oe.__version||j===!0){t.activeTexture(n.TEXTURE0+$);const ce=rt.getPrimaries(rt.workingColorSpace),ue=C.colorSpace===ai?null:rt.getPrimaries(C.colorSpace),Ee=C.colorSpace===ai||ce===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ae=v(C.image,!1,r.maxTextureSize);ae=Fe(C,ae);const Me=s.convert(C.format,C.colorSpace),Ve=s.convert(C.type);let Ie=y(C.internalFormat,Me,Ve,C.colorSpace,C.isVideoTexture);ie(ne,C);let ge;const We=C.mipmaps,Ye=C.isVideoTexture!==!0,gt=oe.__version===void 0||j===!0,z=Z.dataReady,_e=w(C,ae);if(C.isDepthTexture)Ie=_(C.format===br,C.type),gt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Ie,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ae.width,ae.height,0,Me,Ve,null));else if(C.isDataTexture)if(We.length>0){Ye&&gt&&t.texStorage2D(n.TEXTURE_2D,_e,Ie,We[0].width,We[0].height);for(let Q=0,te=We.length;Q<te;Q++)ge=We[Q],Ye?z&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ge.width,ge.height,Me,Ve,ge.data):t.texImage2D(n.TEXTURE_2D,Q,Ie,ge.width,ge.height,0,Me,Ve,ge.data);C.generateMipmaps=!1}else Ye?(gt&&t.texStorage2D(n.TEXTURE_2D,_e,Ie,ae.width,ae.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Ve,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ae.width,ae.height,0,Me,Ve,ae.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ye&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ie,We[0].width,We[0].height,ae.depth);for(let Q=0,te=We.length;Q<te;Q++)if(ge=We[Q],C.format!==yn)if(Me!==null)if(Ye){if(z)if(C.layerUpdates.size>0){for(const he of C.layerUpdates){const ze=ge.width*ge.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,he,ge.width,ge.height,1,Me,ge.data.slice(ze*he,ze*(he+1)),0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,ae.depth,Me,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ie,ge.width,ge.height,ae.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,ae.depth,Me,Ve,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ie,ge.width,ge.height,ae.depth,0,Me,Ve,ge.data)}else{Ye&&gt&&t.texStorage2D(n.TEXTURE_2D,_e,Ie,We[0].width,We[0].height);for(let Q=0,te=We.length;Q<te;Q++)ge=We[Q],C.format!==yn?Me!==null?Ye?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ge.width,ge.height,Me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ie,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?z&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ge.width,ge.height,Me,Ve,ge.data):t.texImage2D(n.TEXTURE_2D,Q,Ie,ge.width,ge.height,0,Me,Ve,ge.data)}else if(C.isDataArrayTexture)if(Ye){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ie,ae.width,ae.height,ae.depth),z)if(C.layerUpdates.size>0){let Q;switch(Ve){case n.UNSIGNED_BYTE:switch(Me){case n.ALPHA:Q=1;break;case n.LUMINANCE:Q=1;break;case n.LUMINANCE_ALPHA:Q=2;break;case n.RGB:Q=3;break;case n.RGBA:Q=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:Q=1;break;default:throw new Error(`Unknown texel size for type ${Ve}.`)}const te=ae.width*ae.height*Q;for(const he of C.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,ae.width,ae.height,1,Me,Ve,ae.data.slice(te*he,te*(he+1)));C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ve,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,Me,Ve,ae.data);else if(C.isData3DTexture)Ye?(gt&&t.texStorage3D(n.TEXTURE_3D,_e,Ie,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ve,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,Me,Ve,ae.data);else if(C.isFramebufferTexture){if(gt)if(Ye)t.texStorage2D(n.TEXTURE_2D,_e,Ie,ae.width,ae.height);else{let Q=ae.width,te=ae.height;for(let he=0;he<_e;he++)t.texImage2D(n.TEXTURE_2D,he,Ie,Q,te,0,Me,Ve,null),Q>>=1,te>>=1}}else if(We.length>0){if(Ye&&gt){const Q=lt(We[0]);t.texStorage2D(n.TEXTURE_2D,_e,Ie,Q.width,Q.height)}for(let Q=0,te=We.length;Q<te;Q++)ge=We[Q],Ye?z&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Me,Ve,ge):t.texImage2D(n.TEXTURE_2D,Q,Ie,Me,Ve,ge);C.generateMipmaps=!1}else if(Ye){if(gt){const Q=lt(ae);t.texStorage2D(n.TEXTURE_2D,_e,Ie,Q.width,Q.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ve,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Me,Ve,ae);g(C)&&m(ne),oe.__version=Z.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function W(I,C,$){if(C.image.length!==6)return;const ne=K(I,C),j=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+$);const Z=i.get(j);if(j.version!==Z.__version||ne===!0){t.activeTexture(n.TEXTURE0+$);const oe=rt.getPrimaries(rt.workingColorSpace),ce=C.colorSpace===ai?null:rt.getPrimaries(C.colorSpace),ue=C.colorSpace===ai||oe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ee=C.isCompressedTexture||C.image[0].isCompressedTexture,ae=C.image[0]&&C.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!Ee&&!ae?Me[te]=v(C.image[te],!0,r.maxCubemapSize):Me[te]=ae?C.image[te].image:C.image[te],Me[te]=Fe(C,Me[te]);const Ve=Me[0],Ie=s.convert(C.format,C.colorSpace),ge=s.convert(C.type),We=y(C.internalFormat,Ie,ge,C.colorSpace),Ye=C.isVideoTexture!==!0,gt=Z.__version===void 0||ne===!0,z=j.dataReady;let _e=w(C,Ve);ie(n.TEXTURE_CUBE_MAP,C);let Q;if(Ee){Ye&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,We,Ve.width,Ve.height);for(let te=0;te<6;te++){Q=Me[te].mipmaps;for(let he=0;he<Q.length;he++){const ze=Q[he];C.format!==yn?Ie!==null?Ye?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ze.width,ze.height,Ie,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,We,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ze.width,ze.height,Ie,ge,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,We,ze.width,ze.height,0,Ie,ge,ze.data)}}}else{if(Q=C.mipmaps,Ye&&gt){Q.length>0&&_e++;const te=lt(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,We,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,Ie,ge,Me[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,Me[te].width,Me[te].height,0,Ie,ge,Me[te].data);for(let he=0;he<Q.length;he++){const Ke=Q[he].image[te].image;Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Ke.width,Ke.height,Ie,ge,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,We,Ke.width,Ke.height,0,Ie,ge,Ke.data)}}else{Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,ge,Me[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,Ie,ge,Me[te]);for(let he=0;he<Q.length;he++){const ze=Q[he];Ye?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Ie,ge,ze.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,We,Ie,ge,ze.image[te])}}}g(C)&&m(n.TEXTURE_CUBE_MAP),Z.__version=j.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function J(I,C,$,ne,j,Z){const oe=s.convert($.format,$.colorSpace),ce=s.convert($.type),ue=y($.internalFormat,oe,ce,$.colorSpace);if(!i.get(C).__hasExternalTextures){const ae=Math.max(1,C.width>>Z),Me=Math.max(1,C.height>>Z);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,Z,ue,ae,Me,C.depth,0,oe,ce,null):t.texImage2D(j,Z,ue,ae,Me,0,oe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Xe(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,j,i.get($).__webglTexture,0,Pe(C)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,j,i.get($).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(I,C,$){if(n.bindRenderbuffer(n.RENDERBUFFER,I),C.depthBuffer){const ne=C.depthTexture,j=ne&&ne.isDepthTexture?ne.type:null,Z=_(C.stencilBuffer,j),oe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Pe(C);Xe(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Z,C.width,C.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Z,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Z,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,I)}else{const ne=C.textures;for(let j=0;j<ne.length;j++){const Z=ne[j],oe=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),ue=y(Z.internalFormat,oe,ce,Z.colorSpace),Ee=Pe(C);$&&Xe(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ue,C.width,C.height):Xe(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ue,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,ue,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),k(C.depthTexture,0);const ne=i.get(C.depthTexture).__webglTexture,j=Pe(C);if(C.depthTexture.format===mr)Xe(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(C.depthTexture.format===br)Xe(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function se(I){const C=i.get(I),$=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");N(C.__webglFramebuffer,I)}else if($){C.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[ne]),C.__webglDepthbuffer[ne]=n.createRenderbuffer(),le(C.__webglDepthbuffer[ne],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=n.createRenderbuffer(),le(C.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(I,C,$){const ne=i.get(I);C!==void 0&&J(ne.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&se(I)}function we(I){const C=I.texture,$=i.get(I),ne=i.get(C);I.addEventListener("dispose",E);const j=I.textures,Z=I.isWebGLCubeRenderTarget===!0,oe=j.length>1;if(oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=C.version,o.memory.textures++),Z){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[ce]=[];for(let ue=0;ue<C.mipmaps.length;ue++)$.__webglFramebuffer[ce][ue]=n.createFramebuffer()}else $.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let ce=0;ce<C.mipmaps.length;ce++)$.__webglFramebuffer[ce]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(oe)for(let ce=0,ue=j.length;ce<ue;ce++){const Ee=i.get(j[ce]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Xe(I)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){const ue=j[ce];$.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ce]);const Ee=s.convert(ue.format,ue.colorSpace),ae=s.convert(ue.type),Me=y(ue.internalFormat,Ee,ae,ue.colorSpace,I.isXRRenderTarget===!0),Ve=Pe(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Me,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,$.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),le($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),ie(n.TEXTURE_CUBE_MAP,C);for(let ce=0;ce<6;ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let ue=0;ue<C.mipmaps.length;ue++)J($.__webglFramebuffer[ce][ue],I,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else J($.__webglFramebuffer[ce],I,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(C)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let ce=0,ue=j.length;ce<ue;ce++){const Ee=j[ce],ae=i.get(Ee);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ie(n.TEXTURE_2D,Ee),J($.__webglFramebuffer,I,Ee,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),g(Ee)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ne.__webglTexture),ie(ce,C),C.mipmaps&&C.mipmaps.length>0)for(let ue=0;ue<C.mipmaps.length;ue++)J($.__webglFramebuffer[ue],I,C,n.COLOR_ATTACHMENT0,ce,ue);else J($.__webglFramebuffer,I,C,n.COLOR_ATTACHMENT0,ce,0);g(C)&&m(ce),t.unbindTexture()}I.depthBuffer&&se(I)}function O(I){const C=I.textures;for(let $=0,ne=C.length;$<ne;$++){const j=C[$];if(g(j)){const Z=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(j).__webglTexture;t.bindTexture(Z,oe),m(Z),t.unbindTexture()}}}const Te=[],Be=[];function Ze(I){if(I.samples>0){if(Xe(I)===!1){const C=I.textures,$=I.width,ne=I.height;let j=n.COLOR_BUFFER_BIT;const Z=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(I),ce=C.length>1;if(ce)for(let ue=0;ue<C.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ue=0;ue<C.length;ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const Ee=i.get(C[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,$,ne,0,0,$,ne,j,n.NEAREST),c===!0&&(Te.length=0,Be.length=0,Te.push(n.COLOR_ATTACHMENT0+ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Te.push(Z),Be.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<C.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const Ee=i.get(C[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const C=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function Pe(I){return Math.min(r.maxSamples,I.samples)}function Xe(I){const C=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ke(I){const C=o.render.frame;u.get(I)!==C&&(u.set(I,C),I.update())}function Fe(I,C){const $=I.colorSpace,ne=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==gi&&$!==ai&&(rt.getTransfer($)===ut?(ne!==yn||j!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}function lt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=xe,this.setupRenderTarget=we,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Xe}function lx(n,e){function t(i,r=ai){let s;const o=rt.getTransfer(r);if(i===pi)return n.UNSIGNED_BYTE;if(i===Id)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===If)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pf)return n.BYTE;if(i===Lf)return n.SHORT;if(i===fa)return n.UNSIGNED_SHORT;if(i===Ld)return n.INT;if(i===wr)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===Na)return n.HALF_FLOAT;if(i===Df)return n.ALPHA;if(i===Nf)return n.RGB;if(i===yn)return n.RGBA;if(i===Uf)return n.LUMINANCE;if(i===Of)return n.LUMINANCE_ALPHA;if(i===mr)return n.DEPTH_COMPONENT;if(i===br)return n.DEPTH_STENCIL;if(i===Ff)return n.RED;if(i===Nd)return n.RED_INTEGER;if(i===zf)return n.RG;if(i===Ud)return n.RG_INTEGER;if(i===Od)return n.RGBA_INTEGER;if(i===no||i===io||i===ro||i===so)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===Ml||i===Sl||i===wl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===El||i===bl||i===Al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===El||i===bl)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Al)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tl||i===Cl||i===Rl||i===Pl||i===Ll||i===Il||i===Dl||i===Nl||i===Ul||i===Ol||i===Fl||i===zl||i===Bl||i===kl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ll)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ao||i===Vl||i===Hl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ao)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bf||i===Gl||i===Wl||i===ql)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ao)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ux extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dx={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,x=.005;l.inputState.pinching&&d>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
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

}`;class px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qn({vertexShader:hx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class mx extends zi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,x=null;const v=new px,g=t.getContextAttributes();let m=null,y=null;const _=[],w=[],A=new pe;let E=null;const b=new dn;b.layers.enable(1),b.viewport=new Tt;const T=new dn;T.layers.enable(2),T.viewport=new Tt;const S=[b,T],M=new ux;M.layers.enable(1),M.layers.enable(2);let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=_[W];return J===void 0&&(J=new Io,_[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=_[W];return J===void 0&&(J=new Io,_[W]=J),J.getGripSpace()},this.getHand=function(W){let J=_[W];return J===void 0&&(J=new Io,_[W]=J),J.getHandSpace()};function U(W){const J=w.indexOf(W.inputSource);if(J===-1)return;const le=_[J];le!==void 0&&(le.update(W.inputSource,W.frame,l||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",B);for(let W=0;W<_.length;W++){const J=w[W];J!==null&&(w[W]=null,_[W].disconnect(J))}P=null,D=null,v.reset(),e.setRenderTarget(m),f=null,d=null,h=null,r=null,y=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",k),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Fi(f.framebufferWidth,f.framebufferHeight,{format:yn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,le=null,N=null;g.depth&&(N=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?br:mr,le=g.stencil?Er:wr);const se={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Fi(d.textureWidth,d.textureHeight,{format:yn,type:pi,depthTexture:new jd(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(W){for(let J=0;J<W.removed.length;J++){const le=W.removed[J],N=w.indexOf(le);N>=0&&(w[N]=null,_[N].disconnect(le))}for(let J=0;J<W.added.length;J++){const le=W.added[J];let N=w.indexOf(le);if(N===-1){for(let xe=0;xe<_.length;xe++)if(xe>=w.length){w.push(le),N=xe;break}else if(w[xe]===null){w[xe]=le,N=xe;break}if(N===-1)break}const se=_[N];se&&se.connect(le)}}const F=new L,X=new L;function H(W,J,le){F.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const N=F.distanceTo(X),se=J.projectionMatrix.elements,xe=le.projectionMatrix.elements,we=se[14]/(se[10]-1),O=se[14]/(se[10]+1),Te=(se[9]+1)/se[5],Be=(se[9]-1)/se[5],Ze=(se[8]-1)/se[0],Pe=(xe[8]+1)/xe[0],Xe=we*Ze,ke=we*Pe,Fe=N/(-Ze+Pe),lt=Fe*-Ze;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(lt),W.translateZ(Fe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const I=we+Fe,C=O+Fe,$=Xe-lt,ne=ke+(N-lt),j=Te*O/C*I,Z=Be*O/C*I;W.projectionMatrix.makePerspective($,ne,j,Z,I,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ee(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;v.texture!==null&&(W.near=v.depthNear,W.far=v.depthFar),M.near=T.near=b.near=W.near,M.far=T.far=b.far=W.far,(P!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,D=M.far,b.near=P,b.far=D,T.near=P,T.far=D,b.updateProjectionMatrix(),T.updateProjectionMatrix(),W.updateProjectionMatrix());const J=W.parent,le=M.cameras;ee(M,J);for(let N=0;N<le.length;N++)ee(le[N],J);le.length===2?H(M,b,T):M.projectionMatrix.copy(b.projectionMatrix),re(W,M,J)};function re(W,J,le){le===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=cs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ie=null;function K(W,J){if(u=J.getViewerPose(l||o),x=J,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let N=!1;le.length!==M.cameras.length&&(M.cameras.length=0,N=!0);for(let xe=0;xe<le.length;xe++){const we=le[xe];let O=null;if(f!==null)O=f.getViewport(we);else{const Be=h.getViewSubImage(d,we);O=Be.viewport,xe===0&&(e.setRenderTargetTextures(y,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(y))}let Te=S[xe];Te===void 0&&(Te=new dn,Te.layers.enable(xe),Te.viewport=new Tt,S[xe]=Te),Te.matrix.fromArray(we.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(we.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(O.x,O.y,O.width,O.height),xe===0&&(M.matrix.copy(Te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),N===!0&&M.cameras.push(Te)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const xe=h.getDepthInformation(le[0]);xe&&xe.isValid&&xe.texture&&v.init(e,xe,r.renderState)}}for(let le=0;le<_.length;le++){const N=w[le],se=_[le];N!==null&&se!==void 0&&se.update(N,J,l||o)}ie&&ie(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const fe=new $d;fe.setAnimationLoop(K),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}}const Ai=new gn,gx=new ct;function xx(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Wd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,_,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,w)):m.isMeshMatcapMaterial?(s(g,m),x(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,y,_):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Gt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Gt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),_=y.envMap,w=y.envMapRotation;_&&(g.envMap.value=_,Ai.copy(w),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),g.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(Ai)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _x(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const w=_.program;i.uniformBlockBinding(y,w)}function l(y,_){let w=r[y.id];w===void 0&&(x(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",g));const A=_.program;i.updateUBOMapping(y,A);const E=e.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function u(y){const _=h();y.__bindingPointIndex=_;const w=n.createBuffer(),A=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,w),w}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=r[y.id],w=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,b=w.length;E<b;E++){const T=Array.isArray(w[E])?w[E]:[w[E]];for(let S=0,M=T.length;S<M;S++){const P=T[S];if(f(P,E,S,A)===!0){const D=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let B=0;B<U.length;B++){const F=U[B],X=v(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,D+k,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,_,w,A){const E=y.value,b=_+"_"+w;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const T=A[b];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return A[b]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function x(y){const _=y.uniforms;let w=0;const A=16;for(let b=0,T=_.length;b<T;b++){const S=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,P=S.length;M<P;M++){const D=S[M],U=Array.isArray(D.value)?D.value:[D.value];for(let k=0,B=U.length;k<B;k++){const F=U[k],X=v(F),H=w%A;H!==0&&A-H<X.boundary&&(w+=A-H),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=X.storage}}}const E=w%A;return E>0&&(w+=A-E),y.__size=w,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){const _=y.target;_.removeEventListener("dispose",g);const w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class hs{constructor(e={}){const{canvas:t=hp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),x=new Int32Array(4);let v=null,g=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=di,this.toneMappingExposure=1;const _=this;let w=!1,A=0,E=0,b=null,T=-1,S=null;const M=new Tt,P=new Tt;let D=null;const U=new ye(0);let k=0,B=t.width,F=t.height,X=1,H=null,ee=null;const re=new Tt(0,0,B,F),ie=new Tt(0,0,B,F);let K=!1;const fe=new Rc;let W=!1,J=!1;const le=new ct,N=new L,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function we(){return b===null?X:1}let O=i;function Te(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",te,!1),O===null){const V="webgl2";if(O=Te(V,R),O===null)throw Te(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Be,Ze,Pe,Xe,ke,Fe,lt,I,C,$,ne,j,Z,oe,ce,ue,Ee,ae,Me,Ve,Ie,ge,We,Ye;function gt(){Be=new Tg(O),Be.init(),ge=new lx(O,Be),Ze=new Mg(O,Be,e,ge),Pe=new ox(O),Xe=new Pg(O),ke=new Y1,Fe=new cx(O,Be,Pe,ke,Ze,ge,Xe),lt=new wg(_),I=new Ag(_),C=new Fp(O),We=new vg(O,C),$=new Cg(O,C,Xe,We),ne=new Ig(O,$,C,Xe),Me=new Lg(O,Ze,Fe),ue=new Sg(ke),j=new X1(_,lt,I,Be,Ze,We,ue),Z=new xx(_,ke),oe=new j1,ce=new tx(Be),ae=new _g(_,lt,I,Pe,ne,d,c),Ee=new ax(_,ne,Ze),Ye=new _x(O,Xe,Ze,Pe),Ve=new yg(O,Be,Xe),Ie=new Rg(O,Be,Xe),Xe.programs=j.programs,_.capabilities=Ze,_.extensions=Be,_.properties=ke,_.renderLists=oe,_.shadowMap=Ee,_.state=Pe,_.info=Xe}gt();const z=new mx(_,O);this.xr=z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(B,F,!1))},this.getSize=function(R){return R.set(B,F)},this.setSize=function(R,V,q=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,F=V,t.width=Math.floor(R*X),t.height=Math.floor(V*X),q===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(B*X,F*X).floor()},this.setDrawingBufferSize=function(R,V,q){B=R,F=V,X=q,t.width=Math.floor(R*q),t.height=Math.floor(V*q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(re)},this.setViewport=function(R,V,q,Y){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,V,q,Y),Pe.viewport(M.copy(re).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,V,q,Y){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,V,q,Y),Pe.scissor(P.copy(ie).multiplyScalar(X).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(R){Pe.setScissorTest(K=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){ee=R},this.getClearColor=function(R){return R.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(R=!0,V=!0,q=!0){let Y=0;if(R){let G=!1;if(b!==null){const de=b.texture.format;G=de===Od||de===Ud||de===Nd}if(G){const de=b.texture.type,ve=de===pi||de===wr||de===fa||de===Er||de===Id||de===Dd,Se=ae.getClearColor(),be=ae.getClearAlpha(),Ue=Se.r,Oe=Se.g,Le=Se.b;ve?(f[0]=Ue,f[1]=Oe,f[2]=Le,f[3]=be,O.clearBufferuiv(O.COLOR,0,f)):(x[0]=Ue,x[1]=Oe,x[2]=Le,x[3]=be,O.clearBufferiv(O.COLOR,0,x))}else Y|=O.COLOR_BUFFER_BIT}V&&(Y|=O.DEPTH_BUFFER_BIT),q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",te,!1),oe.dispose(),ce.dispose(),ke.dispose(),lt.dispose(),I.dispose(),ne.dispose(),We.dispose(),Ye.dispose(),j.dispose(),z.dispose(),z.removeEventListener("sessionstart",xn),z.removeEventListener("sessionend",_n),vi.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=Xe.autoReset,V=Ee.enabled,q=Ee.autoUpdate,Y=Ee.needsUpdate,G=Ee.type;gt(),Xe.autoReset=R,Ee.enabled=V,Ee.autoUpdate=q,Ee.needsUpdate=Y,Ee.type=G}function te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function he(R){const V=R.target;V.removeEventListener("dispose",he),ze(V)}function ze(R){Ke(R),ke.remove(R)}function Ke(R){const V=ke.get(R).programs;V!==void 0&&(V.forEach(function(q){j.releaseProgram(q)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,q,Y,G,de){V===null&&(V=se);const ve=G.isMesh&&G.matrixWorld.determinant()<0,Se=Hh(R,V,q,Y,G);Pe.setMaterial(Y,ve);let be=q.index,Ue=1;if(Y.wireframe===!0){if(be=$.getWireframeAttribute(q),be===void 0)return;Ue=2}const Oe=q.drawRange,Le=q.attributes.position;let et=Oe.start*Ue,ft=(Oe.start+Oe.count)*Ue;de!==null&&(et=Math.max(et,de.start*Ue),ft=Math.min(ft,(de.start+de.count)*Ue)),be!==null?(et=Math.max(et,0),ft=Math.min(ft,be.count)):Le!=null&&(et=Math.max(et,0),ft=Math.min(ft,Le.count));const pt=ft-et;if(pt<0||pt===1/0)return;We.setup(G,Y,Se,q,be);let qt,nt=Ve;if(be!==null&&(qt=C.get(be),nt=Ie,nt.setIndex(qt)),G.isMesh)Y.wireframe===!0?(Pe.setLineWidth(Y.wireframeLinewidth*we()),nt.setMode(O.LINES)):nt.setMode(O.TRIANGLES);else if(G.isLine){let Re=Y.linewidth;Re===void 0&&(Re=1),Pe.setLineWidth(Re*we()),G.isLineSegments?nt.setMode(O.LINES):G.isLineLoop?nt.setMode(O.LINE_LOOP):nt.setMode(O.LINE_STRIP)}else G.isPoints?nt.setMode(O.POINTS):G.isSprite&&nt.setMode(O.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?nt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)nt.renderInstances(et,pt,G.count);else if(q.isInstancedBufferGeometry){const Re=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Nt=Math.min(q.instanceCount,Re);nt.renderInstances(et,pt,Nt)}else nt.render(et,pt)};function xt(R,V,q){R.transparent===!0&&R.side===ht&&R.forceSinglePass===!1?(R.side=Gt,R.needsUpdate=!0,ys(R,V,q),R.side=wn,R.needsUpdate=!0,ys(R,V,q),R.side=ht):ys(R,V,q)}this.compile=function(R,V,q=null){q===null&&(q=R),g=ce.get(q),g.init(V),y.push(g),q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),R!==q&&R.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const Y=new Set;return R.traverse(function(G){const de=G.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const Se=de[ve];xt(Se,q,G),Y.add(Se)}else xt(de,q,G),Y.add(de)}),y.pop(),g=null,Y},this.compileAsync=function(R,V,q=null){const Y=this.compile(R,V,q);return new Promise(G=>{function de(){if(Y.forEach(function(ve){ke.get(ve).currentProgram.isReady()&&Y.delete(ve)}),Y.size===0){G(R);return}setTimeout(de,10)}Be.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let St=null;function st(R){St&&St(R)}function xn(){vi.stop()}function _n(){vi.start()}const vi=new $d;vi.setAnimationLoop(st),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(R){St=R,z.setAnimationLoop(R),R===null?vi.stop():vi.start()},z.addEventListener("sessionstart",xn),z.addEventListener("sessionend",_n),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(V),V=z.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,V,b),g=ce.get(R,y.length),g.init(V),y.push(g),le.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),fe.setFromProjectionMatrix(le),J=this.localClippingEnabled,W=ue.init(this.clippingPlanes,J),v=oe.get(R,m.length),v.init(),m.push(v),z.enabled===!0&&z.isPresenting===!0){const de=_.xr.getDepthSensingMesh();de!==null&&Za(de,V,-1/0,_.sortObjects)}Za(R,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,ee),xe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,xe&&ae.addToRenderList(v,R),this.info.render.frame++,W===!0&&ue.beginShadows();const q=g.state.shadowsArray;Ee.render(q,R,V),W===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,G=v.transmissive;if(g.setupLights(),V.isArrayCamera){const de=V.cameras;if(G.length>0)for(let ve=0,Se=de.length;ve<Se;ve++){const be=de[ve];hl(Y,G,R,be)}xe&&ae.render(R);for(let ve=0,Se=de.length;ve<Se;ve++){const be=de[ve];dl(v,R,be,be.viewport)}}else G.length>0&&hl(Y,G,R,V),xe&&ae.render(R),dl(v,R,V);b!==null&&(Fe.updateMultisampleRenderTarget(b),Fe.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(_,R,V),We.resetDefaultState(),T=-1,S=null,y.pop(),y.length>0?(g=y[y.length-1],W===!0&&ue.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Za(R,V,q,Y){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||fe.intersectsSprite(R)){Y&&N.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);const ve=ne.update(R),Se=R.material;Se.visible&&v.push(R,ve,Se,q,N.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||fe.intersectsObject(R))){const ve=ne.update(R),Se=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),N.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),N.copy(ve.boundingSphere.center)),N.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){const be=ve.groups;for(let Ue=0,Oe=be.length;Ue<Oe;Ue++){const Le=be[Ue],et=Se[Le.materialIndex];et&&et.visible&&v.push(R,ve,et,q,N.z,Le)}}else Se.visible&&v.push(R,ve,Se,q,N.z,null)}}const de=R.children;for(let ve=0,Se=de.length;ve<Se;ve++)Za(de[ve],V,q,Y)}function dl(R,V,q,Y){const G=R.opaque,de=R.transmissive,ve=R.transparent;g.setupLightsView(q),W===!0&&ue.setGlobalState(_.clippingPlanes,q),Y&&Pe.viewport(M.copy(Y)),G.length>0&&vs(G,V,q),de.length>0&&vs(de,V,q),ve.length>0&&vs(ve,V,q),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function hl(R,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new Fi(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Na:pi,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const de=g.state.transmissionRenderTarget[Y.id],ve=Y.viewport||M;de.setSize(ve.z,ve.w);const Se=_.getRenderTarget();_.setRenderTarget(de),_.getClearColor(U),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),xe?ae.render(q):_.clear();const be=_.toneMapping;_.toneMapping=di;const Ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),W===!0&&ue.setGlobalState(_.clippingPlanes,Y),vs(R,q,Y),Fe.updateMultisampleRenderTarget(de),Fe.updateRenderTargetMipmap(de),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Le=0,et=V.length;Le<et;Le++){const ft=V[Le],pt=ft.object,qt=ft.geometry,nt=ft.material,Re=ft.group;if(nt.side===ht&&pt.layers.test(Y.layers)){const Nt=nt.side;nt.side=Gt,nt.needsUpdate=!0,fl(pt,q,Y,qt,nt,Re),nt.side=Nt,nt.needsUpdate=!0,Oe=!0}}Oe===!0&&(Fe.updateMultisampleRenderTarget(de),Fe.updateRenderTargetMipmap(de))}_.setRenderTarget(Se),_.setClearColor(U,k),Ue!==void 0&&(Y.viewport=Ue),_.toneMapping=be}function vs(R,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,de=R.length;G<de;G++){const ve=R[G],Se=ve.object,be=ve.geometry,Ue=Y===null?ve.material:Y,Oe=ve.group;Se.layers.test(q.layers)&&fl(Se,V,q,be,Ue,Oe)}}function fl(R,V,q,Y,G,de){R.onBeforeRender(_,V,q,Y,G,de),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(_,V,q,Y,R,de),G.transparent===!0&&G.side===ht&&G.forceSinglePass===!1?(G.side=Gt,G.needsUpdate=!0,_.renderBufferDirect(q,V,Y,G,R,de),G.side=wn,G.needsUpdate=!0,_.renderBufferDirect(q,V,Y,G,R,de),G.side=ht):_.renderBufferDirect(q,V,Y,G,R,de),R.onAfterRender(_,V,q,Y,G,de)}function ys(R,V,q){V.isScene!==!0&&(V=se);const Y=ke.get(R),G=g.state.lights,de=g.state.shadowsArray,ve=G.state.version,Se=j.getParameters(R,G.state,de,V,q),be=j.getProgramCacheKey(Se);let Ue=Y.programs;Y.environment=R.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(R.isMeshStandardMaterial?I:lt).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ue===void 0&&(R.addEventListener("dispose",he),Ue=new Map,Y.programs=Ue);let Oe=Ue.get(be);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===ve)return ml(R,Se),Oe}else Se.uniforms=j.getUniforms(R),R.onBuild(q,Se,_),R.onBeforeCompile(Se,_),Oe=j.acquireProgram(Se,be),Ue.set(be,Oe),Y.uniforms=Se.uniforms;const Le=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Le.clippingPlanes=ue.uniform),ml(R,Se),Y.needsLights=Wh(R),Y.lightsStateVersion=ve,Y.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.directionalShadowMap.value=G.state.directionalShadowMap,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotShadowMap.value=G.state.spotShadowMap,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMap.value=G.state.pointShadowMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function pl(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=ca.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function ml(R,V){const q=ke.get(R);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Hh(R,V,q,Y,G){V.isScene!==!0&&(V=se),Fe.resetTextureUnits();const de=V.fog,ve=Y.isMeshStandardMaterial?V.environment:null,Se=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:gi,be=(Y.isMeshStandardMaterial?I:lt).get(Y.envMap||ve),Ue=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color;let pt=di;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(pt=_.toneMapping);const qt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nt=qt!==void 0?qt.length:0,Re=ke.get(Y),Nt=g.state.lights;if(W===!0&&(J===!0||R!==S)){const jt=R===S&&Y.id===T;ue.setState(Y,R,jt)}let at=!1;Y.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Nt.state.version||Re.outputColorSpace!==Se||G.isBatchedMesh&&Re.batching===!1||!G.isBatchedMesh&&Re.batching===!0||G.isBatchedMesh&&Re.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Re.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Re.instancing===!1||!G.isInstancedMesh&&Re.instancing===!0||G.isSkinnedMesh&&Re.skinning===!1||!G.isSkinnedMesh&&Re.skinning===!0||G.isInstancedMesh&&Re.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Re.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Re.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Re.instancingMorph===!1&&G.morphTexture!==null||Re.envMap!==be||Y.fog===!0&&Re.fog!==de||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ue.numPlanes||Re.numIntersection!==ue.numIntersection)||Re.vertexAlphas!==Ue||Re.vertexTangents!==Oe||Re.morphTargets!==Le||Re.morphNormals!==et||Re.morphColors!==ft||Re.toneMapping!==pt||Re.morphTargetsCount!==nt)&&(at=!0):(at=!0,Re.__version=Y.version);let An=Re.currentProgram;at===!0&&(An=ys(Y,V,G));let Ms=!1,yi=!1,Ka=!1;const wt=An.getUniforms(),Kn=Re.uniforms;if(Pe.useProgram(An.program)&&(Ms=!0,yi=!0,Ka=!0),Y.id!==T&&(T=Y.id,yi=!0),Ms||S!==R){wt.setValue(O,"projectionMatrix",R.projectionMatrix),wt.setValue(O,"viewMatrix",R.matrixWorldInverse);const jt=wt.map.cameraPosition;jt!==void 0&&jt.setValue(O,N.setFromMatrixPosition(R.matrixWorld)),Ze.logarithmicDepthBuffer&&wt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&wt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,yi=!0,Ka=!0)}if(G.isSkinnedMesh){wt.setOptional(O,G,"bindMatrix"),wt.setOptional(O,G,"bindMatrixInverse");const jt=G.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),wt.setValue(O,"boneTexture",jt.boneTexture,Fe))}G.isBatchedMesh&&(wt.setOptional(O,G,"batchingTexture"),wt.setValue(O,"batchingTexture",G._matricesTexture,Fe),wt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&wt.setValue(O,"batchingColorTexture",G._colorsTexture,Fe));const Ja=q.morphAttributes;if((Ja.position!==void 0||Ja.normal!==void 0||Ja.color!==void 0)&&Me.update(G,q,An),(yi||Re.receiveShadow!==G.receiveShadow)&&(Re.receiveShadow=G.receiveShadow,wt.setValue(O,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Kn.envMap.value=be,Kn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(Kn.envMapIntensity.value=V.environmentIntensity),yi&&(wt.setValue(O,"toneMappingExposure",_.toneMappingExposure),Re.needsLights&&Gh(Kn,Ka),de&&Y.fog===!0&&Z.refreshFogUniforms(Kn,de),Z.refreshMaterialUniforms(Kn,Y,X,F,g.state.transmissionRenderTarget[R.id]),ca.upload(O,pl(Re),Kn,Fe)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ca.upload(O,pl(Re),Kn,Fe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&wt.setValue(O,"center",G.center),wt.setValue(O,"modelViewMatrix",G.modelViewMatrix),wt.setValue(O,"normalMatrix",G.normalMatrix),wt.setValue(O,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const jt=Y.uniformsGroups;for(let Qa=0,qh=jt.length;Qa<qh;Qa++){const gl=jt[Qa];Ye.update(gl,An),Ye.bind(gl,An)}}return An}function Gh(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Wh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,V,q){ke.get(R.texture).__webglTexture=V,ke.get(R.depthTexture).__webglTexture=q;const Y=ke.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const q=ke.get(R);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,q=0){b=R,A=V,E=q;let Y=!0,G=null,de=!1,ve=!1;if(R){const be=ke.get(R);be.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1):be.__webglFramebuffer===void 0?Fe.setupRenderTarget(R):be.__hasExternalTextures&&Fe.rebindTextures(R,ke.get(R.texture).__webglTexture,ke.get(R.depthTexture).__webglTexture);const Ue=R.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ve=!0);const Oe=ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Oe[V])?G=Oe[V][q]:G=Oe[V],de=!0):R.samples>0&&Fe.useMultisampledRTT(R)===!1?G=ke.get(R).__webglMultisampledFramebuffer:Array.isArray(Oe)?G=Oe[q]:G=Oe,M.copy(R.viewport),P.copy(R.scissor),D=R.scissorTest}else M.copy(re).multiplyScalar(X).floor(),P.copy(ie).multiplyScalar(X).floor(),D=K;if(Pe.bindFramebuffer(O.FRAMEBUFFER,G)&&Y&&Pe.drawBuffers(R,G),Pe.viewport(M),Pe.scissor(P),Pe.setScissorTest(D),de){const be=ke.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,be.__webglTexture,q)}else if(ve){const be=ke.get(R.texture),Ue=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,q||0,Ue)}T=-1},this.readRenderTargetPixels=function(R,V,q,Y,G,de,ve){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Pe.bindFramebuffer(O.FRAMEBUFFER,Se);try{const be=R.texture,Ue=be.format,Oe=be.type;if(!Ze.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-G&&O.readPixels(V,q,Y,G,ge.convert(Ue),ge.convert(Oe),de)}finally{const be=b!==null?ke.get(b).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(R,V,q,Y,G,de,ve){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Pe.bindFramebuffer(O.FRAMEBUFFER,Se);try{const be=R.texture,Ue=be.format,Oe=be.type;if(!Ze.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-Y&&q>=0&&q<=R.height-G){const Le=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Le),O.bufferData(O.PIXEL_PACK_BUFFER,de.byteLength,O.STREAM_READ),O.readPixels(V,q,Y,G,ge.convert(Ue),ge.convert(Oe),0),O.flush();const et=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await fp(O,et,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Le),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,de)}finally{O.deleteBuffer(Le),O.deleteSync(et)}return de}}finally{const be=b!==null?ke.get(b).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(R,V=null,q=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const Y=Math.pow(2,-q),G=Math.floor(R.image.width*Y),de=Math.floor(R.image.height*Y),ve=V!==null?V.x:0,Se=V!==null?V.y:0;Fe.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,ve,Se,G,de),Pe.unbindTexture()},this.copyTextureToTexture=function(R,V,q=null,Y=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],V=arguments[2],G=arguments[3]||0,q=null);let de,ve,Se,be,Ue,Oe;q!==null?(de=q.max.x-q.min.x,ve=q.max.y-q.min.y,Se=q.min.x,be=q.min.y):(de=R.image.width,ve=R.image.height,Se=0,be=0),Y!==null?(Ue=Y.x,Oe=Y.y):(Ue=0,Oe=0);const Le=ge.convert(V.format),et=ge.convert(V.type);Fe.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const ft=O.getParameter(O.UNPACK_ROW_LENGTH),pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),qt=O.getParameter(O.UNPACK_SKIP_PIXELS),nt=O.getParameter(O.UNPACK_SKIP_ROWS),Re=O.getParameter(O.UNPACK_SKIP_IMAGES),Nt=R.isCompressedTexture?R.mipmaps[G]:R.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Se),O.pixelStorei(O.UNPACK_SKIP_ROWS,be),R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,Ue,Oe,de,ve,Le,et,Nt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,Ue,Oe,Nt.width,Nt.height,Le,Nt.data):O.texSubImage2D(O.TEXTURE_2D,G,Ue,Oe,Le,et,Nt),O.pixelStorei(O.UNPACK_ROW_LENGTH,ft),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qt),O.pixelStorei(O.UNPACK_SKIP_ROWS,nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Re),G===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(R,V,q=null,Y=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],V=arguments[3],G=arguments[4]||0);let de,ve,Se,be,Ue,Oe,Le,et,ft;const pt=R.isCompressedTexture?R.mipmaps[G]:R.image;q!==null?(de=q.max.x-q.min.x,ve=q.max.y-q.min.y,Se=q.max.z-q.min.z,be=q.min.x,Ue=q.min.y,Oe=q.min.z):(de=pt.width,ve=pt.height,Se=pt.depth,be=0,Ue=0,Oe=0),Y!==null?(Le=Y.x,et=Y.y,ft=Y.z):(Le=0,et=0,ft=0);const qt=ge.convert(V.format),nt=ge.convert(V.type);let Re;if(V.isData3DTexture)Fe.setTexture3D(V,0),Re=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Fe.setTexture2DArray(V,0),Re=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Nt=O.getParameter(O.UNPACK_ROW_LENGTH),at=O.getParameter(O.UNPACK_IMAGE_HEIGHT),An=O.getParameter(O.UNPACK_SKIP_PIXELS),Ms=O.getParameter(O.UNPACK_SKIP_ROWS),yi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ue),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Oe),R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Re,G,Le,et,ft,de,ve,Se,qt,nt,pt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Re,G,Le,et,ft,de,ve,Se,qt,pt.data):O.texSubImage3D(Re,G,Le,et,ft,de,ve,Se,qt,nt,pt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Nt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),O.pixelStorei(O.UNPACK_SKIP_PIXELS,An),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ms),O.pixelStorei(O.UNPACK_SKIP_IMAGES,yi),G===0&&V.generateMipmaps&&O.generateMipmap(Re),Pe.unbindTexture()},this.initRenderTarget=function(R){ke.get(R).__webglFramebuffer===void 0&&Fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Fe.setTextureCube(R,0):R.isData3DTexture?Fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Fe.setTexture2DArray(R,0):Fe.setTexture2D(R,0),Pe.unbindTexture()},this.resetState=function(){A=0,E=0,b=null,Pe.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bc?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Ua?"display-p3":"srgb"}}class fs extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Tc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new L;class va{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new va(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class th extends jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cr;const Gr=new L,lr=new L,ur=new L,dr=new pe,Wr=new pe,nh=new ct,qs=new L,qr=new L,Xs=new L,Fu=new pe,Do=new pe,zu=new pe;class yx extends _t{constructor(e=new th){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new qe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vx(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new va(i,3,0,!1)),cr.setAttribute("uv",new va(i,2,3,!1))}this.geometry=cr,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),nh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-ur.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ys(qs.set(-.5,-.5,0),ur,o,lr,r,s),Ys(qr.set(.5,-.5,0),ur,o,lr,r,s),Ys(Xs.set(.5,.5,0),ur,o,lr,r,s),Fu.set(0,0),Do.set(1,0),zu.set(1,1);let a=e.ray.intersectTriangle(qs,qr,Xs,!1,Gr);if(a===null&&(Ys(qr.set(-.5,.5,0),ur,o,lr,r,s),Do.set(0,1),a=e.ray.intersectTriangle(qs,Xs,qr,!1,Gr),a===null))return;const c=e.ray.origin.distanceTo(Gr);c<e.near||c>e.far||t.push({distance:c,point:Gr.clone(),uv:Qt.getInterpolation(Gr,qs,qr,Xs,Fu,Do,zu,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ys(n,e,t,i,r,s){dr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Wr.x=s*dr.x-r*dr.y,Wr.y=r*dr.x+s*dr.y):Wr.copy(dr),n.copy(e),n.x+=Wr.x,n.y+=Wr.y,n.applyMatrix4(nh)}class ki extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new L,Ma=new L,Bu=new ct,Xr=new Oa,$s=new xi,No=new L,ku=new L;class ls extends _t{constructor(e=new qe,t=new ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ya.fromBufferAttribute(t,r-1),Ma.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ya.distanceTo(Ma);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(r),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;Bu.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(Bu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let v=f,g=x-1;v<g;v+=l){const m=u.getX(v),y=u.getX(v+1),_=js(this,e,Xr,c,m,y);_&&t.push(_)}if(this.isLineLoop){const v=u.getX(x-1),g=u.getX(f),m=js(this,e,Xr,c,v,g);m&&t.push(m)}}else{const f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let v=f,g=x-1;v<g;v+=l){const m=js(this,e,Xr,c,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=js(this,e,Xr,c,x-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function js(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(ya.fromBufferAttribute(o,r),Ma.fromBufferAttribute(o,s),t.distanceSqToSegment(ya,Ma,No,ku)>i)return;No.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(No);if(!(c<e.near||c>e.far))return{distance:c,point:ku.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Vu=new L,Hu=new L;class Lc extends ls{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Vu.fromBufferAttribute(t,r),Hu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vu.distanceTo(Hu);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mx extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gu=new ct,rc=new Oa,Zs=new xi,Ks=new L;class Sx extends _t{constructor(e=new qe,t=new Mx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(r),Zs.radius+=s,e.ray.intersectsSphere(Zs)===!1)return;Gu.copy(r).invert(),rc.copy(e.ray).applyMatrix4(Gu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let x=d,v=f;x<v;x++){const g=l.getX(x);Ks.fromBufferAttribute(h,g),Wu(Ks,g,c,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=d,v=f;x<v;x++)Ks.fromBufferAttribute(h,x),Wu(Ks,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wu(n,e,t,i,r,s,o){const a=rc.distanceSqToPoint(n);if(a<t){const c=new L;rc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class wx extends Bt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new pe:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,r=[],s=[],o=[],a=new L,c=new ct;for(let f=0;f<=e;f++){const x=f/e;r[f]=this.getTangentAt(x,new L)}s[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(At(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,x))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(At(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let x=1;x<=e;x++)s[x].applyMatrix4(c.makeRotationAxis(r[x],f*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ih extends Zn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new pe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ex extends ih{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ic(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Js=new L,Uo=new Ic,Oo=new Ic,Fo=new Ic;class rh extends Zn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Js.subVectors(r[0],r[1]).add(r[0]),l=Js);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Js.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),x<1e-4&&(x=v),g<1e-4&&(g=v),Uo.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,x,v,g),Oo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,x,v,g),Fo.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,x,v,g)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Oo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Fo.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Uo.calc(c),Oo.calc(c),Fo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qu(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function bx(n,e){const t=1-n;return t*t*e}function Ax(n,e){return 2*(1-n)*n*e}function Tx(n,e){return n*n*e}function Qr(n,e,t,i){return bx(n,e)+Ax(n,t)+Tx(n,i)}function Cx(n,e){const t=1-n;return t*t*t*e}function Rx(n,e){const t=1-n;return 3*t*t*n*e}function Px(n,e){return 3*(1-n)*n*n*e}function Lx(n,e){return n*n*n*e}function es(n,e,t,i,r){return Cx(n,e)+Rx(n,t)+Px(n,i)+Lx(n,r)}class Ix extends Zn{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(es(e,r.x,s.x,o.x,a.x),es(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dx extends Zn{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(es(e,r.x,s.x,o.x,a.x),es(e,r.y,s.y,o.y,a.y),es(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nx extends Zn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ux extends Zn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ox extends Zn{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Qr(e,r.x,s.x,o.x),Qr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sh extends Zn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Qr(e,r.x,s.x,o.x),Qr(e,r.y,s.y,o.y),Qr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fx extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(qu(a,c.x,l.x,u.x,h.x),qu(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var zx=Object.freeze({__proto__:null,ArcCurve:Ex,CatmullRomCurve3:rh,CubicBezierCurve:Ix,CubicBezierCurve3:Dx,EllipseCurve:ih,LineCurve:Nx,LineCurve3:Ux,QuadraticBezierCurve:Ox,QuadraticBezierCurve3:sh,SplineCurve:Fx});class Dc extends qe{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new L,u=new pe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Lr extends qe{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let x=0;const v=[],g=i/2;let m=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Ne(h,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(f,2));function y(){const w=new L,A=new L;let E=0;const b=(t-e)/i;for(let T=0;T<=s;T++){const S=[],M=T/s,P=M*(t-e)+e;for(let D=0;D<=r;D++){const U=D/r,k=U*c+a,B=Math.sin(k),F=Math.cos(k);A.x=P*B,A.y=-M*i+g,A.z=P*F,h.push(A.x,A.y,A.z),w.set(B,b,F).normalize(),d.push(w.x,w.y,w.z),f.push(U,1-M),S.push(x++)}v.push(S)}for(let T=0;T<r;T++)for(let S=0;S<s;S++){const M=v[S][T],P=v[S+1][T],D=v[S+1][T+1],U=v[S][T+1];u.push(M,P,U),u.push(P,D,U),E+=6}l.addGroup(m,E,0),m+=E}function _(w){const A=x,E=new pe,b=new L;let T=0;const S=w===!0?e:t,M=w===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),x++;const P=x;for(let D=0;D<=r;D++){const k=D/r*c+a,B=Math.cos(k),F=Math.sin(k);b.x=S*F,b.y=g*M,b.z=S*B,h.push(b.x,b.y,b.z),d.push(0,M,0),E.x=B*.5+.5,E.y=F*.5*M+.5,f.push(E.x,E.y),x++}for(let D=0;D<r;D++){const U=A+D,k=P+D;w===!0?u.push(k,k+1,U):u.push(k+1,k,U),T+=3}l.addGroup(m,T,w===!0?1:2),m+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nc extends Lr{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uc extends qe{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(s.slice(),3)),this.setAttribute("uv",new Ne(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new L,w=new L,A=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],w),f(t[E+2],A),c(_,w,A,y)}function c(y,_,w,A){const E=A+1,b=[];for(let T=0;T<=E;T++){b[T]=[];const S=y.clone().lerp(w,T/E),M=_.clone().lerp(w,T/E),P=E-T;for(let D=0;D<=P;D++)D===0&&T===E?b[T][D]=S:b[T][D]=S.clone().lerp(M,D/P)}for(let T=0;T<E;T++)for(let S=0;S<2*(E-T)-1;S++){const M=Math.floor(S/2);S%2===0?(d(b[T][M+1]),d(b[T+1][M]),d(b[T][M])):(d(b[T][M+1]),d(b[T+1][M+1]),d(b[T+1][M]))}}function l(y){const _=new L;for(let w=0;w<s.length;w+=3)_.x=s[w+0],_.y=s[w+1],_.z=s[w+2],_.normalize().multiplyScalar(y),s[w+0]=_.x,s[w+1]=_.y,s[w+2]=_.z}function u(){const y=new L;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const w=g(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;o.push(w,1-A)}x(),h()}function h(){for(let y=0;y<o.length;y+=6){const _=o[y+0],w=o[y+2],A=o[y+4],E=Math.max(_,w,A),b=Math.min(_,w,A);E>.9&&b<.1&&(_<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,_){const w=y*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function x(){const y=new L,_=new L,w=new L,A=new L,E=new pe,b=new pe,T=new pe;for(let S=0,M=0;S<s.length;S+=9,M+=6){y.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),w.set(s[S+6],s[S+7],s[S+8]),E.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),T.set(o[M+4],o[M+5]),A.copy(y).add(_).add(w).divideScalar(3);const P=g(A);v(E,M+0,y,P),v(b,M+2,_,P),v(T,M+4,w,P)}}function v(y,_,w,A){A<0&&y.x===1&&(o[_]=y.x-1),w.x===0&&w.z===0&&(o[_]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.vertices,e.indices,e.radius,e.details)}}const Qs=new L,ea=new L,zo=new L,ta=new Qt;class Bx extends qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(gr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let x=0;x<c;x+=3){o?(l[0]=o.getX(x),l[1]=o.getX(x+1),l[2]=o.getX(x+2)):(l[0]=x,l[1]=x+1,l[2]=x+2);const{a:v,b:g,c:m}=ta;if(v.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),ta.getNormal(zo),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const _=(y+1)%3,w=h[y],A=h[_],E=ta[u[y]],b=ta[u[_]],T=`${w}_${A}`,S=`${A}_${w}`;S in d&&d[S]?(zo.dot(d[S].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(b.x,b.y,b.z)),d[S]=null):T in d||(d[T]={index0:l[y],index1:l[_],normal:zo.clone()})}}for(const x in d)if(d[x]){const{index0:v,index1:g}=d[x];Qs.fromBufferAttribute(a,v),ea.fromBufferAttribute(a,g),f.push(Qs.x,Qs.y,Qs.z),f.push(ea.x,ea.y,ea.z)}this.setAttribute("position",new Ne(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Oc extends Uc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oc(e.radius,e.detail)}}class Ir extends qe{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,d=new L,f=[],x=[],v=[],g=[];for(let m=0;m<=i;m++){const y=[],_=m/i;let w=0;m===0&&o===0?w=.5/t:m===i&&c===Math.PI&&(w=-.5/t);for(let A=0;A<=t;A++){const E=A/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+_*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(E+w,1-_),y.push(l++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){const _=u[m][y+1],w=u[m][y],A=u[m+1][y],E=u[m+1][y+1];(m!==0||o>0)&&f.push(_,w,E),(m!==i-1||c<Math.PI)&&f.push(w,A,E)}this.setIndex(f),this.setAttribute("position",new Ne(x,3)),this.setAttribute("normal",new Ne(v,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fc extends qe{constructor(e=new sh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new pe;let u=new L;const h=[],d=[],f=[],x=[];v(),this.setIndex(x),this.setAttribute("position",new Ne(h,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(f,2));function v(){for(let _=0;_<t;_++)g(_);g(s===!1?t:0),y(),m()}function g(_){u=e.getPointAt(_/t,u);const w=o.normals[_],A=o.binormals[_];for(let E=0;E<=r;E++){const b=E/r*Math.PI*2,T=Math.sin(b),S=-Math.cos(b);c.x=S*w.x+T*A.x,c.y=S*w.y+T*A.y,c.z=S*w.z+T*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=t;_++)for(let w=1;w<=r;w++){const A=(r+1)*(_-1)+(w-1),E=(r+1)*_+(w-1),b=(r+1)*_+w,T=(r+1)*(_-1)+w;x.push(A,E,T),x.push(E,b,T)}}function y(){for(let _=0;_<=t;_++)for(let w=0;w<=r;w++)l.x=_/t,l.y=w/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Fc(new zx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ah extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kx extends ah{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _r extends jn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zc extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class oh extends zc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bo=new ct,Xu=new L,Yu=new L;class Vx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),Yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yu),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hx extends Vx{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vi extends zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Hx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ps extends zc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const $u=new ct;class Gx{constructor(e,t,i=0,r=1/0){this.ray=new Oa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(e,t=!0,i=[]){return sc(e,this,i,t),i.sort(ju),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)sc(e[r],this,i,t);return i.sort(ju),i}}function ju(n,e){return n.distance-e.distance}function sc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)sc(s[o],e,t,!0)}}const Zu=new L;let na,ko;class Wx extends _t{constructor(e=new L(0,0,1),t=new L(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",na===void 0&&(na=new qe,na.setAttribute("position",new Ne([0,0,0,0,1,0],3)),ko=new Lr(0,.5,1,5,1),ko.translate(0,-.5,0)),this.position.copy(t),this.line=new ls(na,new ki({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $e(ko,new kt({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Zu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Zu,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const Vo={type:"change"},Ho={type:"start"},Go={type:"end"};class qx extends zi{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:eo.ROTATE,MIDDLE:eo.DOLLY,RIGHT:eo.PAN},this.target=new L;const s=1e-6,o=new L;let a=1,c=r.NONE,l=r.NONE,u=0,h=0,d=0;const f=new L,x=new pe,v=new pe,g=new L,m=new pe,y=new pe,_=new pe,w=new pe,A=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const N=i.domElement.getBoundingClientRect(),se=i.domElement.ownerDocument.documentElement;i.screen.left=N.left+window.pageXOffset-se.clientLeft,i.screen.top=N.top+window.pageYOffset-se.clientTop,i.screen.width=N.width,i.screen.height=N.height};const b=function(){const N=new pe;return function(xe,we){return N.set((xe-i.screen.left)/i.screen.width,(we-i.screen.top)/i.screen.height),N}}(),T=function(){const N=new pe;return function(xe,we){return N.set((xe-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-we))/i.screen.width),N}}();this.rotateCamera=function(){const N=new L,se=new Cr,xe=new L,we=new L,O=new L,Te=new L;return function(){Te.set(v.x-x.x,v.y-x.y,0);let Ze=Te.length();Ze?(f.copy(i.object.position).sub(i.target),xe.copy(f).normalize(),we.copy(i.object.up).normalize(),O.crossVectors(we,xe).normalize(),we.setLength(v.y-x.y),O.setLength(v.x-x.x),Te.copy(we.add(O)),N.crossVectors(Te,f).normalize(),Ze*=i.rotateSpeed,se.setFromAxisAngle(N,Ze),f.applyQuaternion(se),i.object.up.applyQuaternion(se),g.copy(N),d=Ze):!i.staticMoving&&d&&(d*=Math.sqrt(1-i.dynamicDampingFactor),f.copy(i.object.position).sub(i.target),se.setFromAxisAngle(g,d),f.applyQuaternion(se),i.object.up.applyQuaternion(se)),x.copy(v)}}(),this.zoomCamera=function(){let N;c===r.TOUCH_ZOOM_PAN?(N=u/h,u=h,i.object.isPerspectiveCamera?f.multiplyScalar(N):i.object.isOrthographicCamera?(i.object.zoom=jl.clamp(i.object.zoom/N,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(N=1+(y.y-m.y)*i.zoomSpeed,N!==1&&N>0&&(i.object.isPerspectiveCamera?f.multiplyScalar(N):i.object.isOrthographicCamera?(i.object.zoom=jl.clamp(i.object.zoom/N,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?m.copy(y):m.y+=(y.y-m.y)*this.dynamicDampingFactor)},this.panCamera=function(){const N=new pe,se=new L,xe=new L;return function(){if(N.copy(w).sub(_),N.lengthSq()){if(i.object.isOrthographicCamera){const O=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,Te=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;N.x*=O,N.y*=Te}N.multiplyScalar(f.length()*i.panSpeed),xe.copy(f).cross(i.object.up).setLength(N.x),xe.add(se.copy(i.object.up).setLength(N.y)),i.object.position.add(xe),i.target.add(xe),i.staticMoving?_.copy(w):_.add(N.subVectors(w,_).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(f.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,f.setLength(i.maxDistance)),m.copy(y)),f.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,f.setLength(i.minDistance)),m.copy(y)))},this.update=function(){f.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,f),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>s&&(i.dispatchEvent(Vo),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>s||a!==i.object.zoom)&&(i.dispatchEvent(Vo),o.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,l=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),f.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Vo),o.copy(i.object.position),a=i.object.zoom};function S(N){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",P)),fe(N),N.pointerType==="touch"?ee(N):B(N))}function M(N){i.enabled!==!1&&(N.pointerType==="touch"?re(N):F(N))}function P(N){i.enabled!==!1&&(N.pointerType==="touch"?ie(N):X(),W(N),A.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",P)))}function D(N){W(N)}function U(N){i.enabled!==!1&&(window.removeEventListener("keydown",U),l===r.NONE&&(N.code===i.keys[r.ROTATE]&&!i.noRotate?l=r.ROTATE:N.code===i.keys[r.ZOOM]&&!i.noZoom?l=r.ZOOM:N.code===i.keys[r.PAN]&&!i.noPan&&(l=r.PAN)))}function k(){i.enabled!==!1&&(l=r.NONE,window.addEventListener("keydown",U))}function B(N){if(c===r.NONE)switch(N.button){case i.mouseButtons.LEFT:c=r.ROTATE;break;case i.mouseButtons.MIDDLE:c=r.ZOOM;break;case i.mouseButtons.RIGHT:c=r.PAN;break}const se=l!==r.NONE?l:c;se===r.ROTATE&&!i.noRotate?(v.copy(T(N.pageX,N.pageY)),x.copy(v)):se===r.ZOOM&&!i.noZoom?(m.copy(b(N.pageX,N.pageY)),y.copy(m)):se===r.PAN&&!i.noPan&&(_.copy(b(N.pageX,N.pageY)),w.copy(_)),i.dispatchEvent(Ho)}function F(N){const se=l!==r.NONE?l:c;se===r.ROTATE&&!i.noRotate?(x.copy(v),v.copy(T(N.pageX,N.pageY))):se===r.ZOOM&&!i.noZoom?y.copy(b(N.pageX,N.pageY)):se===r.PAN&&!i.noPan&&w.copy(b(N.pageX,N.pageY))}function X(){c=r.NONE,i.dispatchEvent(Go)}function H(N){if(i.enabled!==!1&&i.noZoom!==!0){switch(N.preventDefault(),N.deltaMode){case 2:m.y-=N.deltaY*.025;break;case 1:m.y-=N.deltaY*.01;break;default:m.y-=N.deltaY*25e-5;break}i.dispatchEvent(Ho),i.dispatchEvent(Go)}}function ee(N){switch(J(N),A.length){case 1:c=r.TOUCH_ROTATE,v.copy(T(A[0].pageX,A[0].pageY)),x.copy(v);break;default:c=r.TOUCH_ZOOM_PAN;const se=A[0].pageX-A[1].pageX,xe=A[0].pageY-A[1].pageY;h=u=Math.sqrt(se*se+xe*xe);const we=(A[0].pageX+A[1].pageX)/2,O=(A[0].pageY+A[1].pageY)/2;_.copy(b(we,O)),w.copy(_);break}i.dispatchEvent(Ho)}function re(N){switch(J(N),A.length){case 1:x.copy(v),v.copy(T(N.pageX,N.pageY));break;default:const se=le(N),xe=N.pageX-se.x,we=N.pageY-se.y;h=Math.sqrt(xe*xe+we*we);const O=(N.pageX+se.x)/2,Te=(N.pageY+se.y)/2;w.copy(b(O,Te));break}}function ie(N){switch(A.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,v.copy(T(N.pageX,N.pageY)),x.copy(v);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let se=0;se<A.length;se++)if(A[se].pointerId!==N.pointerId){const xe=E[A[se].pointerId];v.copy(T(xe.x,xe.y)),x.copy(v);break}break}i.dispatchEvent(Go)}function K(N){i.enabled!==!1&&N.preventDefault()}function fe(N){A.push(N)}function W(N){delete E[N.pointerId];for(let se=0;se<A.length;se++)if(A[se].pointerId==N.pointerId){A.splice(se,1);return}}function J(N){let se=E[N.pointerId];se===void 0&&(se=new pe,E[N.pointerId]=se),se.set(N.pageX,N.pageY)}function le(N){const se=N.pointerId===A[0].pointerId?A[1]:A[0];return E[se.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",K),i.domElement.removeEventListener("pointerdown",S),i.domElement.removeEventListener("pointercancel",D),i.domElement.removeEventListener("wheel",H),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",P),window.removeEventListener("keydown",U),window.removeEventListener("keyup",k)},this.domElement.addEventListener("contextmenu",K),this.domElement.addEventListener("pointerdown",S),this.domElement.addEventListener("pointercancel",D),this.domElement.addEventListener("wheel",H,{passive:!1}),window.addEventListener("keydown",U),window.addEventListener("keyup",k),this.handleResize(),this.update()}}class Xx extends $e{constructor(e,t,i=!1,r=!1,s=1e4){const o=new qe;super(o,t),this.isMarchingCubes=!0;const a=this,c=new Float32Array(12*3),l=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(y){this.resolution=y,this.isolation=80,this.size=y,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const _=s*3;this.positionArray=new Float32Array(_*3);const w=new It(this.positionArray,3);w.setUsage(ws),o.setAttribute("position",w),this.normalArray=new Float32Array(_*3);const A=new It(this.normalArray,3);if(A.setUsage(ws),o.setAttribute("normal",A),this.enableUvs){this.uvArray=new Float32Array(_*2);const E=new It(this.uvArray,2);E.setUsage(ws),o.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(_*3);const E=new It(this.colorArray,3);E.setUsage(ws),o.setAttribute("color",E)}o.boundingSphere=new xi(new L,1)};function h(y,_,w){return y+(_-y)*w}function d(y,_,w,A,E,b,T,S,M,P){const D=(w-T)/(S-T),U=a.normal_cache;c[_+0]=A+D*a.delta,c[_+1]=E,c[_+2]=b,l[_+0]=h(U[y+0],U[y+3],D),l[_+1]=h(U[y+1],U[y+4],D),l[_+2]=h(U[y+2],U[y+5],D),u[_+0]=h(a.palette[M*3+0],a.palette[P*3+0],D),u[_+1]=h(a.palette[M*3+1],a.palette[P*3+1],D),u[_+2]=h(a.palette[M*3+2],a.palette[P*3+2],D)}function f(y,_,w,A,E,b,T,S,M,P){const D=(w-T)/(S-T),U=a.normal_cache;c[_+0]=A,c[_+1]=E+D*a.delta,c[_+2]=b;const k=y+a.yd*3;l[_+0]=h(U[y+0],U[k+0],D),l[_+1]=h(U[y+1],U[k+1],D),l[_+2]=h(U[y+2],U[k+2],D),u[_+0]=h(a.palette[M*3+0],a.palette[P*3+0],D),u[_+1]=h(a.palette[M*3+1],a.palette[P*3+1],D),u[_+2]=h(a.palette[M*3+2],a.palette[P*3+2],D)}function x(y,_,w,A,E,b,T,S,M,P){const D=(w-T)/(S-T),U=a.normal_cache;c[_+0]=A,c[_+1]=E,c[_+2]=b+D*a.delta;const k=y+a.zd*3;l[_+0]=h(U[y+0],U[k+0],D),l[_+1]=h(U[y+1],U[k+1],D),l[_+2]=h(U[y+2],U[k+2],D),u[_+0]=h(a.palette[M*3+0],a.palette[P*3+0],D),u[_+1]=h(a.palette[M*3+1],a.palette[P*3+1],D),u[_+2]=h(a.palette[M*3+2],a.palette[P*3+2],D)}function v(y){const _=y*3;a.normal_cache[_]===0&&(a.normal_cache[_+0]=a.field[y-1]-a.field[y+1],a.normal_cache[_+1]=a.field[y-a.yd]-a.field[y+a.yd],a.normal_cache[_+2]=a.field[y-a.zd]-a.field[y+a.zd])}function g(y,_,w,A,E){const b=A+1,T=A+a.yd,S=A+a.zd,M=b+a.yd,P=b+a.zd,D=A+a.yd+a.zd,U=b+a.yd+a.zd;let k=0;const B=a.field[A],F=a.field[b],X=a.field[T],H=a.field[M],ee=a.field[S],re=a.field[P],ie=a.field[D],K=a.field[U];B<E&&(k|=1),F<E&&(k|=2),X<E&&(k|=8),H<E&&(k|=4),ee<E&&(k|=16),re<E&&(k|=32),ie<E&&(k|=128),K<E&&(k|=64);const fe=Yx[k];if(fe===0)return 0;const W=a.delta,J=y+W,le=_+W,N=w+W;fe&1&&(v(A),v(b),d(A*3,0,E,y,_,w,B,F,A,b)),fe&2&&(v(b),v(M),f(b*3,3,E,J,_,w,F,H,b,M)),fe&4&&(v(T),v(M),d(T*3,6,E,y,le,w,X,H,T,M)),fe&8&&(v(A),v(T),f(A*3,9,E,y,_,w,B,X,A,T)),fe&16&&(v(S),v(P),d(S*3,12,E,y,_,N,ee,re,S,P)),fe&32&&(v(P),v(U),f(P*3,15,E,J,_,N,re,K,P,U)),fe&64&&(v(D),v(U),d(D*3,18,E,y,le,N,ie,K,D,U)),fe&128&&(v(S),v(D),f(S*3,21,E,y,_,N,ee,ie,S,D)),fe&256&&(v(A),v(S),x(A*3,24,E,y,_,w,B,ee,A,S)),fe&512&&(v(b),v(P),x(b*3,27,E,J,_,w,F,re,b,P)),fe&1024&&(v(M),v(U),x(M*3,30,E,J,le,w,H,K,M,U)),fe&2048&&(v(T),v(D),x(T*3,33,E,y,le,w,X,ie,T,D)),k<<=4;let se,xe,we,O=0,Te=0;for(;ia[k+Te]!=-1;)se=k+Te,xe=se+1,we=se+2,m(c,l,u,3*ia[se],3*ia[xe],3*ia[we]),Te+=3,O++;return O}function m(y,_,w,A,E,b){const T=a.count*3;if(a.positionArray[T+0]=y[A],a.positionArray[T+1]=y[A+1],a.positionArray[T+2]=y[A+2],a.positionArray[T+3]=y[E],a.positionArray[T+4]=y[E+1],a.positionArray[T+5]=y[E+2],a.positionArray[T+6]=y[b],a.positionArray[T+7]=y[b+1],a.positionArray[T+8]=y[b+2],a.material.flatShading===!0){const S=(_[A+0]+_[E+0]+_[b+0])/3,M=(_[A+1]+_[E+1]+_[b+1])/3,P=(_[A+2]+_[E+2]+_[b+2])/3;a.normalArray[T+0]=S,a.normalArray[T+1]=M,a.normalArray[T+2]=P,a.normalArray[T+3]=S,a.normalArray[T+4]=M,a.normalArray[T+5]=P,a.normalArray[T+6]=S,a.normalArray[T+7]=M,a.normalArray[T+8]=P}else a.normalArray[T+0]=_[A+0],a.normalArray[T+1]=_[A+1],a.normalArray[T+2]=_[A+2],a.normalArray[T+3]=_[E+0],a.normalArray[T+4]=_[E+1],a.normalArray[T+5]=_[E+2],a.normalArray[T+6]=_[b+0],a.normalArray[T+7]=_[b+1],a.normalArray[T+8]=_[b+2];if(a.enableUvs){const S=a.count*2;a.uvArray[S+0]=y[A+0],a.uvArray[S+1]=y[A+2],a.uvArray[S+2]=y[E+0],a.uvArray[S+3]=y[E+2],a.uvArray[S+4]=y[b+0],a.uvArray[S+5]=y[b+2]}a.enableColors&&(a.colorArray[T+0]=w[A+0],a.colorArray[T+1]=w[A+1],a.colorArray[T+2]=w[A+2],a.colorArray[T+3]=w[E+0],a.colorArray[T+4]=w[E+1],a.colorArray[T+5]=w[E+2],a.colorArray[T+6]=w[b+0],a.colorArray[T+7]=w[b+1],a.colorArray[T+8]=w[b+2]),a.count+=3}this.addBall=function(y,_,w,A,E,b){const T=Math.sign(A);A=Math.abs(A);const S=b!=null;let M=new ye(y,_,w);if(S)try{M=b instanceof ye?b:Array.isArray(b)?new ye(Math.min(Math.abs(b[0]),1),Math.min(Math.abs(b[1]),1),Math.min(Math.abs(b[2]),1)):new ye(b)}catch{M=new ye(y,_,w)}const P=this.size*Math.sqrt(A/E),D=w*this.size,U=_*this.size,k=y*this.size;let B=Math.floor(D-P);B<1&&(B=1);let F=Math.floor(D+P);F>this.size-1&&(F=this.size-1);let X=Math.floor(U-P);X<1&&(X=1);let H=Math.floor(U+P);H>this.size-1&&(H=this.size-1);let ee=Math.floor(k-P);ee<1&&(ee=1);let re=Math.floor(k+P);re>this.size-1&&(re=this.size-1);let ie,K,fe,W,J,le,N,se,xe,we,O;for(fe=B;fe<F;fe++)for(J=this.size2*fe,se=fe/this.size-w,xe=se*se,K=X;K<H;K++)for(W=J+this.size*K,N=K/this.size-_,we=N*N,ie=ee;ie<re;ie++)if(le=ie/this.size-y,O=A/(1e-6+le*le+we+xe)-E,O>0){this.field[W+ie]+=O*T;const Te=Math.sqrt((ie-k)*(ie-k)+(K-U)*(K-U)+(fe-D)*(fe-D))/P,Be=1-Te*Te*Te*(Te*(Te*6-15)+10);this.palette[(W+ie)*3+0]+=M.r*Be,this.palette[(W+ie)*3+1]+=M.g*Be,this.palette[(W+ie)*3+2]+=M.b*Be}},this.addPlaneX=function(y,_){const w=this.size,A=this.yd,E=this.zd,b=this.field;let T,S,M,P,D,U,k,B=w*Math.sqrt(y/_);for(B>w&&(B=w),T=0;T<B;T++)if(U=T/w,P=U*U,D=y/(1e-4+P)-_,D>0)for(S=0;S<w;S++)for(k=T+S*A,M=0;M<w;M++)b[E*M+k]+=D},this.addPlaneY=function(y,_){const w=this.size,A=this.yd,E=this.zd,b=this.field;let T,S,M,P,D,U,k,B,F=w*Math.sqrt(y/_);for(F>w&&(F=w),S=0;S<F;S++)if(U=S/w,P=U*U,D=y/(1e-4+P)-_,D>0)for(k=S*A,T=0;T<w;T++)for(B=k+T,M=0;M<w;M++)b[E*M+B]+=D},this.addPlaneZ=function(y,_){const w=this.size,A=this.yd,E=this.zd,b=this.field;let T,S,M,P,D,U,k,B,F=w*Math.sqrt(y/_);for(F>w&&(F=w),M=0;M<F;M++)if(U=M/w,P=U*U,D=y/(1e-4+P)-_,D>0)for(k=E*M,S=0;S<w;S++)for(B=k+S*A,T=0;T<w;T++)b[B+T]+=D},this.setCell=function(y,_,w,A){const E=this.size2*w+this.size*_+y;this.field[E]=A},this.getCell=function(y,_,w){const A=this.size2*w+this.size*_+y;return this.field[A]},this.blur=function(y=1){const _=this.field,w=_.slice(),A=this.size,E=this.size2;for(let b=0;b<A;b++)for(let T=0;T<A;T++)for(let S=0;S<A;S++){const M=E*S+A*T+b;let P=w[M],D=1;for(let U=-1;U<=1;U+=2){const k=U+b;if(!(k<0||k>=A))for(let B=-1;B<=1;B+=2){const F=B+T;if(!(F<0||F>=A))for(let X=-1;X<=1;X+=2){const H=X+S;if(H<0||H>=A)continue;const ee=E*H+A*F+k,re=w[ee];D++,P+=y*(re-P)/D}}}_[M]=P}},this.reset=function(){for(let y=0;y<this.size3;y++)this.normal_cache[y*3]=0,this.field[y]=0,this.palette[y*3]=this.palette[y*3+1]=this.palette[y*3+2]=0},this.update=function(){this.count=0;const y=this.size-2;for(let _=1;_<y;_++){const w=this.size2*_,A=(_-this.halfsize)/this.halfsize;for(let E=1;E<y;E++){const b=w+this.size*E,T=(E-this.halfsize)/this.halfsize;for(let S=1;S<y;S++){const M=(S-this.halfsize)/this.halfsize,P=b+S;g(M,T,A,P,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>s&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const Yx=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),ia=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),p={viewer:document.querySelector("#viewer"),angularViewer:document.querySelector("#angularViewer"),projectionViewer:document.querySelector("#projectionViewer"),radialViewer:document.querySelector("#radialViewer"),viewGrid:document.querySelector(".view-grid"),mainWindow:document.querySelector(".main-window"),menuPopup:document.querySelector("#menuPopup"),menuItems:document.querySelectorAll(".menu-item"),toolRender:document.querySelector("#toolRender"),toolSave:document.querySelector("#toolSave"),toolTile:document.querySelector("#toolTile"),toolOverlap:document.querySelector("#toolOverlap"),toolAxis:document.querySelector("#toolAxis"),toolXOY:document.querySelector("#toolXOY"),toolYOZ:document.querySelector("#toolYOZ"),toolXOZ:document.querySelector("#toolXOZ"),preset:document.querySelector("#presetInput"),cosType:document.querySelector("#cosTypeInput"),sinType:document.querySelector("#sinTypeInput"),cloud:document.querySelector("#cloudInput"),positiveLobe:document.querySelector("#positiveLobeInput"),negativeLobe:document.querySelector("#negativeLobeInput"),wireframe:document.querySelector("#wireframeInput"),smooth:document.querySelector("#smoothInput"),projection:document.querySelector("#projectionInput"),projection3d:document.querySelector("#projection3dInput"),paletteOne:document.querySelector("#paletteOneInput"),paletteTwo:document.querySelector("#paletteTwoInput"),xySlice:document.querySelector("#xySliceInput"),yzSlice:document.querySelector("#yzSliceInput"),xzSlice:document.querySelector("#xzSliceInput"),quarter:document.querySelector("#quarterInput"),eighth:document.querySelector("#eighthInput"),threeQuarter:document.querySelector("#threeQuarterInput"),radialR:document.querySelector("#radialRInput"),radialR2:document.querySelector("#radialR2Input"),radialRdf:document.querySelector("#radialRdfInput"),radialSection:document.querySelector("#radialSectionInput"),radialSide:document.querySelector("#radialSideInput"),radialCurve:document.querySelector("#radialCurveInput"),radialAxis:document.querySelector("#radialAxisInput"),radialNode:document.querySelector("#radialNodeInput"),polarNode:document.querySelector("#polarNodeInput"),relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue"),longitudeNode:document.querySelector("#longitudeNodeInput"),grid3d:document.querySelector("#grid3dInput"),desktopMatch:document.querySelector("#desktopMatchInput"),n:document.querySelector("#nInput"),l:document.querySelector("#lInput"),m:document.querySelector("#mInput"),z:document.querySelector("#zInput"),mode:document.querySelector("#modeInput"),slice:document.querySelector("#sliceInput"),node:document.querySelector("#nodeInput"),axis:document.querySelector("#axisInput"),box:document.querySelector("#boxInput"),positiveColor:document.querySelector("#positiveColorInput"),negativeColor:document.querySelector("#negativeColorInput"),backgroundColor:document.querySelector("#backgroundColorInput"),iso:document.querySelector("#isoInput"),density:document.querySelector("#densityInput"),radius:document.querySelector("#radiusInput"),boxSizeDisplay:document.querySelector("#boxSizeDisplay"),intervalValue:document.querySelector("#intervalValue"),probabilityValue:document.querySelector("#probabilityValue"),opacity:document.querySelector("#opacityInput"),isoValue:document.querySelector("#isoValue"),densityValue:document.querySelector("#densityValue"),radiusValue:document.querySelector("#radiusValue"),opacityValue:document.querySelector("#opacityValue"),renderButton:document.querySelector("#renderButton"),axisProxyButton:document.querySelector("#axisProxyButton"),presetButton:document.querySelector("#presetButton"),redrawProxyButton:document.querySelector("#redrawProxyButton"),resetCameraButton:document.querySelector("#resetCameraButton"),screenshotButton:document.querySelector("#screenshotButton"),orbitalName:document.querySelector("#orbitalName"),viewerTitle:document.querySelector("#viewerTitle"),statusText:document.querySelector("#statusText"),posCount:document.querySelector("#posCount"),negCount:document.querySelector("#negCount"),nodeText:document.querySelector("#nodeText"),sliceText:document.querySelector("#sliceText"),boxText:document.querySelector("#boxText"),isoText:document.querySelector("#isoText"),openActivityButton:document.querySelector("#openActivityButton"),annotationModeButton:document.querySelector("#annotationModeButton"),annotationToolbar:document.querySelector("#annotationToolbar"),annotationClearButton:document.querySelector("#annotationClearButton"),openSketchButton:document.querySelector("#openSketchButton"),openAnimationButton:document.querySelector("#openAnimationButton"),openPredictButton:document.querySelector("#openPredictButton"),openChallengeButton:document.querySelector("#openChallengeButton"),sketchWindow:document.querySelector("#sketchWindow"),boxWindow:document.querySelector("#boxWindow"),paletteWindow:document.querySelector("#paletteWindow"),animationWindow:document.querySelector("#animationWindow"),animationCanvas:document.querySelector("#animationCanvas"),animationStepBadge:document.querySelector("#animationStepBadge"),animationTitle:document.querySelector("#animationTitle"),animationText:document.querySelector("#animationText"),animationProgressFill:document.querySelector("#animationProgressFill"),animationRestartButton:document.querySelector("#animationRestartButton"),animationPrevButton:document.querySelector("#animationPrevButton"),animationPlayButton:document.querySelector("#animationPlayButton"),animationNextButton:document.querySelector("#animationNextButton"),animationExportButton:document.querySelector("#animationExportButton"),animationExportOverlay:document.querySelector("#animationExportOverlay"),confirmExportButton:document.querySelector("#confirmExportButton"),cancelExportButton:document.querySelector("#cancelExportButton"),activityWindow:document.querySelector("#activityWindow"),activityTitle:document.querySelector("#activityTitle"),activityModeButtons:document.querySelectorAll("[data-activity-mode]"),activityPanes:document.querySelectorAll(".activity-pane"),predictPane:document.querySelector("#predictPane"),scorePane:document.querySelector("#scorePane"),diagnosisPane:document.querySelector("#diagnosisPane"),nodesPane:document.querySelector("#nodesPane"),comparePane:document.querySelector("#comparePane"),challengePane:document.querySelector("#challengePane"),tabletPane:document.querySelector("#tabletPane"),predictTarget:document.querySelector("#predictTargetInput"),startPredictButton:document.querySelector("#startPredictButton"),verifyPredictButton:document.querySelector("#verifyPredictButton"),clearPredictButton:document.querySelector("#clearPredictButton"),predictCanvas:document.querySelector("#predictCanvas"),predictResultImage:document.querySelector("#predictResultImage"),predictPenButton:document.querySelector("#predictPenButton"),predictEraserButton:document.querySelector("#predictEraserButton"),predictColorInput:document.querySelector("#predictColorInput"),predictSizeInput:document.querySelector("#predictSizeInput"),predictPrompt:document.querySelector("#predictPrompt"),quizRadialInput:document.querySelector("#quizRadialInput"),quizAngularInput:document.querySelector("#quizAngularInput"),scoreCurrentButton:document.querySelector("#scoreCurrentButton"),scorePrompt:document.querySelector("#scorePrompt"),diagnoseNodesButton:document.querySelector("#diagnoseNodesButton"),diagnosePhaseButton:document.querySelector("#diagnosePhaseButton"),diagnoseProjectionButton:document.querySelector("#diagnoseProjectionButton"),diagnosisPrompt:document.querySelector("#diagnosisPrompt"),nodeRevealButton:document.querySelector("#nodeRevealButton"),nodeHideButton:document.querySelector("#nodeHideButton"),compareA:document.querySelector("#compareAInput"),compareB:document.querySelector("#compareBInput"),compareApplyButton:document.querySelector("#compareApplyButton"),compareLoadAButton:document.querySelector("#compareLoadAButton"),compareLoadBButton:document.querySelector("#compareLoadBButton"),compareAViewer:document.querySelector("#compareAViewer"),compareBViewer:document.querySelector("#compareBViewer"),compareATitle:document.querySelector("#compareATitle"),compareBTitle:document.querySelector("#compareBTitle"),compareANotes:document.querySelector("#compareANotes"),compareBNotes:document.querySelector("#compareBNotes"),compareSummary:document.querySelector("#compareSummary"),newChallengeButton:document.querySelector("#newChallengeButton"),challengeGuess:document.querySelector("#challengeGuessInput"),revealChallengeButton:document.querySelector("#revealChallengeButton"),challengePrompt:document.querySelector("#challengePrompt"),explainFormula:document.querySelector("#explainFormula"),sketchCanvas:document.querySelector("#sketchCanvas"),sketchColor:document.querySelector("#sketchColorInput"),sketchSize:document.querySelector("#sketchSizeInput"),sketchPen:document.querySelector("#sketchPenButton"),sketchEraser:document.querySelector("#sketchEraserButton"),sketchClear:document.querySelector("#sketchClearButton"),tabletLargeButton:document.querySelector("#tabletLargeButton"),tabletRestoreButton:document.querySelector("#tabletRestoreButton"),tabletScreenshotButton:document.querySelector("#tabletScreenshotButton")};function ac(n,e){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle=e;const r=n.length>2?34:n.length>1?44:58;i.font=`700 ${r}px Segoe UI, Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,64,64);const s=new wx(t);s.colorSpace=Kt;const o=new th({map:s,transparent:!0,alphaTest:.2,depthTest:!0,depthWrite:!1});o.toneMapped=!1;const a=new yx(o);return a.scale.set(.68,.68,.68),a.renderOrder=20,a}function oc(n,e,t,i){const r=e.clone().sub(n),s=r.length(),o=new kt({color:i});o.toneMapped=!1;const a=new $e(new Lr(t,t,s,48,1,!1),o);return a.position.copy(n).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new L(0,1,0),r.normalize()),a}function cc(n,e,t,i,r){const s=new kt({color:r});s.toneMapped=!1;const o=new $e(new Nc(i,t,96,1,!1),s);return o.position.copy(e),o.quaternion.setFromUnitVectors(new L(0,1,0),n.clone().normalize()),o}function Sa(n,e=.2,t=.9){const i=new mt;i.userData.isAxis=!0,i.name="axis_group_auto";const r=n*t,s=n*.02,o=r*.1,a=s*3,c=[{dir:new L(1,0,0),color:16711680,label:"x",labelColor:"#ff0000"},{dir:new L(0,1,0),color:47400,label:"y",labelColor:"#00e63a"},{dir:new L(0,0,1),color:15785216,label:"z",labelColor:"#fff000"}];for(const l of c){const u=l.dir.clone().multiplyScalar(-r),h=l.dir.clone().multiplyScalar(r);i.add(oc(u,h,s,l.color)),i.add(cc(l.dir,l.dir.clone().multiplyScalar(r*1.01),o,a,l.color));const d=ac(l.label,l.labelColor);d.scale.setScalar(Math.max(.98,Math.min(1.18,n*.23))),l.label==="x"&&d.position.set(r*1.2,-e,0),l.label==="y"&&d.position.set(-e,r*1.2,0),l.label==="z"&&d.position.set(-e,-e,r*1.2),i.add(d)}return i}function $x(n,e,t,i){const r=new mt,s=Math.max(.018,n*.006),o=n*.08,a=s*3.2,c=new L(0,0,t),l=new L(n,0,t),u=new L(0,0,t+e);r.add(oc(c,l,s,15785216)),r.add(cc(new L(1,0,0),l,o,a,15785216)),r.add(oc(c,u,s,22527)),r.add(cc(new L(0,0,1),u,o,a,22527));const h=ac("r","#fff000");h.scale.setScalar(.48),h.position.set(n+o*.85,-n*.045,t),r.add(h);const d=ac(i==="R2"?"R*R":i,"#0057ff");return d.scale.setScalar(.58),d.position.set(-n*.08,0,t+e+o*.9),r.add(d),r}const dt=new fs;dt.background=new ye(1120295);function Hi(n,e){const t=new qx(n,e);return t.rotateSpeed=3.2,t.zoomSpeed=1.15,t.panSpeed=.65,t.staticMoving=!1,t.dynamicDampingFactor=.12,t.noRotate=!1,t.noZoom=!1,t.noPan=!1,t}function Wo(n){return n.pointerType==="mouse"&&(n.button===2||(n.buttons&2)===2)}function Mn(n){var e;n&&(n.enabled=!0,n.noRotate=!1,n.noZoom=!1,n.noPan=!1,(e=n.handleResize)==null||e.call(n),n.update())}function ci(n){var c,l,u,h,d;if(!n)return;const e=n.object,t=(c=e==null?void 0:e.position)==null?void 0:c.clone(),i=(l=e==null?void 0:e.quaternion)==null?void 0:l.clone(),r=(u=e==null?void 0:e.up)==null?void 0:u.clone(),s=e==null?void 0:e.zoom,o=(h=n.target)==null?void 0:h.clone(),a=n.staticMoving;typeof n.reset=="function"&&t&&o&&(n.staticMoving=!0,n.reset(),e.position.copy(t),i&&e.quaternion.copy(i),r&&e.up.copy(r),typeof s=="number"&&(e.zoom=s),n.target.copy(o),(d=e.updateProjectionMatrix)==null||d.call(e),n.staticMoving=a),Mn(n)}function ms(n,e){const t=n==null?void 0:n.querySelector("canvas");if(!t||!e)return;const i=()=>typeof e=="function"?e():e;t.addEventListener("pointerdown",r=>{if(Wo(r)){r.preventDefault(),r.stopImmediatePropagation(),ci(i());return}Mn(i())},{capture:!0}),t.addEventListener("pointermove",r=>{Wo(r)&&(r.preventDefault(),r.stopImmediatePropagation())},{capture:!0}),t.addEventListener("pointerup",r=>{Wo(r)&&(r.preventDefault(),r.stopImmediatePropagation()),Mn(i())},{capture:!0}),t.addEventListener("pointercancel",()=>ci(i()),{capture:!0}),t.addEventListener("lostpointercapture",()=>ci(i())),t.addEventListener("mouseenter",()=>Mn(i())),t.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopImmediatePropagation(),ci(i())},{capture:!0})}const je=new Bi(-5,5,5,-5,.1,1e3),an=new hs({antialias:!0,preserveDrawingBuffer:!0});an.setPixelRatio(Math.min(window.devicePixelRatio,2));an.localClippingEnabled=!0;p.viewer.appendChild(an.domElement);let Ae=Hi(je,an.domElement);const Dt=new fs,Je=new Bi(-5,5,5,-5,.1,1e3),_i=new hs({antialias:!0,preserveDrawingBuffer:!0});_i.setPixelRatio(Math.min(window.devicePixelRatio,2));_i.localClippingEnabled=!0;p.angularViewer.appendChild(_i.domElement);let De=Hi(Je,_i.domElement);const Xn=new fs,bt=new Bi(-5,5,5,-5,.1,1e3);bt.up.set(0,0,1);const Dr=new hs({antialias:!0,preserveDrawingBuffer:!0});Dr.setPixelRatio(Math.min(window.devicePixelRatio,2));p.projectionViewer.appendChild(Dr.domElement);const pn=Hi(bt,Dr.domElement),Yn=new fs,Ct=new Bi(-5,5,5,-5,.1,1e3),Nr=new hs({antialias:!0,preserveDrawingBuffer:!0});Nr.setPixelRatio(Math.min(window.devicePixelRatio,2));p.radialViewer.appendChild(Nr.domElement);const Ft=Hi(Ct,Nr.domElement);ms(p.viewer,()=>Ae);ms(p.angularViewer,()=>De);ms(p.projectionViewer,pn);ms(p.radialViewer,Ft);function us(){ci(Ae),ci(De),ci(pn),ci(Ft)}function jx(){Mn(Ae),Mn(De),Mn(pn),Mn(Ft)}function Zx(){var t,i,r;const n=((t=Ae==null?void 0:Ae.target)==null?void 0:t.clone())??new L,e={rotateSpeed:(Ae==null?void 0:Ae.rotateSpeed)??3.2,zoomSpeed:(Ae==null?void 0:Ae.zoomSpeed)??1.15,panSpeed:(Ae==null?void 0:Ae.panSpeed)??.65,staticMoving:(Ae==null?void 0:Ae.staticMoving)??!1,dynamicDampingFactor:(Ae==null?void 0:Ae.dynamicDampingFactor)??.12,noRotate:(Ae==null?void 0:Ae.noRotate)??!1,noZoom:(Ae==null?void 0:Ae.noZoom)??!1,noPan:(Ae==null?void 0:Ae.noPan)??!1};(i=Ae==null?void 0:Ae.dispose)==null||i.call(Ae),Ae=Hi(je,an.domElement),Object.assign(Ae,e),Ae.target.copy(n),(r=Ae.handleResize)==null||r.call(Ae),Ae.update()}function Kx(){var t,i,r;const n=((t=De==null?void 0:De.target)==null?void 0:t.clone())??new L,e={rotateSpeed:(De==null?void 0:De.rotateSpeed)??3.2,zoomSpeed:(De==null?void 0:De.zoomSpeed)??1.15,panSpeed:(De==null?void 0:De.panSpeed)??.65,staticMoving:(De==null?void 0:De.staticMoving)??!1,dynamicDampingFactor:(De==null?void 0:De.dynamicDampingFactor)??.12,noRotate:!1,noZoom:!1,noPan:!1};(i=De==null?void 0:De.dispose)==null||i.call(De),De=Hi(Je,_i.domElement),Object.assign(De,e),De.target.copy(n),(r=De.handleResize)==null||r.call(De),De.update()}const Bc=new Vi(16777215,1.45);Bc.position.set(0,0,1);je.add(Bc);je.add(new Vi(16777215,.22));dt.add(je);dt.add(new ps(16777215,.55));dt.add(new oh(16777215,1447446,.45));const kc=new Vi(16777215,1.45);kc.position.set(0,0,1);Je.add(kc);Je.add(new Vi(16777215,.22));Dt.add(Je);Dt.add(new ps(16777215,.55));Dt.add(new oh(16777215,1447446,.45));const Vc=new Vi(16777215,1.7);Vc.position.set(0,0,80);Xn.add(Vc);Xn.add(new ps(16777215,.65));const Hc=new Vi(16777215,1.8);Hc.position.set(0,-40,60);Yn.add(Hc);Yn.add(new ps(16777215,.62));for(const n of[an,_i,Dr,Nr])n.outputColorSpace=Kt,n.toneMapping=Rd,n.toneMappingExposure=1.16;Bc.intensity=1.45;kc.intensity=1.45;Vc.intensity=1.88;Hc.intensity=1.92;let Di=null,Ui=null;function Jx(){const n=dt.getObjectByName("mainAxesGroup");n&&dt.remove(n);const e=Dt.getObjectByName("angularAxesGroup");e&&Dt.remove(e),Di=Sa(4.5,.2,.9),Di.name="mainAxesGroup",Ui=Sa(4.2,.1,.9),Ui.name="angularAxesGroup",dt.add(Di),Dt.add(Ui)}function Qx(n){Ui=n}function e_(){return Ui}function ch(n,e){Di&&(Di.visible=n,e!==void 0&&Di.scale.setScalar(e)),Ui&&(Ui.visible=n),dt.traverse(t=>{t.userData&&t.userData.isAxis&&(t.visible=n,e!==void 0&&t===Di&&t.scale.setScalar(e))}),Dt.traverse(t=>{t.userData&&t.userData.isAxis&&(t.visible=n)})}const Qe={drawing:!1,erasing:!1,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,strokes:[],currentStroke:null};function lh(n){const e=p.sketchCanvas.getBoundingClientRect();return{x:(n.clientX-e.left)/Math.max(1,e.width),y:(n.clientY-e.top)/Math.max(1,e.height)}}function Ku(n,e,t,i){if(!e.points.length)return;n.save(),n.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",n.strokeStyle=e.color,n.lineWidth=e.size,n.lineCap="round",n.lineJoin="round",n.beginPath();const r=e.points[0];n.moveTo(r.x*t,r.y*i);for(const s of e.points.slice(1))n.lineTo(s.x*t,s.y*i);e.points.length===1&&n.lineTo(r.x*t+.01,r.y*i+.01),n.stroke(),n.restore()}function Ur(){const n=p.sketchCanvas;if(!n)return;const e=n.getContext("2d");e.clearRect(0,0,n.width,n.height);for(const t of Qe.strokes)Ku(e,t,n.width,n.height);Qe.currentStroke&&Ku(e,Qe.currentStroke,n.width,n.height)}function t_(){const n=p.sketchCanvas;if(!n)return;const e=n.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,Math.floor(e.width*t)),r=Math.max(220,Math.floor(e.height*t));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r,Ur())}function qo(n){var e,t;Qe.erasing=n,(e=p.sketchPen)==null||e.classList.toggle("active",!n),(t=p.sketchEraser)==null||t.classList.toggle("active",n)}function n_(n){var e,t,i,r;p.sketchCanvas&&(n.preventDefault(),(t=(e=p.sketchCanvas).setPointerCapture)==null||t.call(e,n.pointerId),Qe.drawing=!0,Qe.currentStroke={color:((i=p.sketchColor)==null?void 0:i.value)||"#ffffff",size:Number(((r=p.sketchSize)==null?void 0:r.value)||5)*Math.min(window.devicePixelRatio||1,2),mode:Qe.erasing?"erase":"draw",points:[lh(n)]},Ur())}function i_(n){!Qe.drawing||!Qe.currentStroke||(n.preventDefault(),Qe.currentStroke.points.push(lh(n)),Ur())}function Ju(n){!Qe.drawing||!Qe.currentStroke||(n.preventDefault(),Qe.strokes.push(Qe.currentStroke),Qe.currentStroke=null,Qe.drawing=!1,Ur())}function r_(){var n,e,t,i,r;p.sketchCanvas&&(p.sketchCanvas.addEventListener("pointerdown",n_),p.sketchCanvas.addEventListener("pointermove",i_),p.sketchCanvas.addEventListener("pointerup",Ju),p.sketchCanvas.addEventListener("pointercancel",Ju),(n=p.sketchPen)==null||n.addEventListener("click",()=>qo(!1)),(e=p.sketchEraser)==null||e.addEventListener("click",()=>qo(!0)),(t=p.sketchClear)==null||t.addEventListener("click",()=>{Qe.strokes=[],Qe.currentStroke=null,Ur()}),(r=(i=p.sketchWindow)==null?void 0:i.querySelector(".window-title"))==null||r.addEventListener("pointerdown",a_),window.addEventListener("pointermove",o_),window.addEventListener("pointerup",Qu),window.addEventListener("pointercancel",Qu),qo(!1))}let jr={};function s_(n){jr=n}function Gc(){p.sketchWindow&&(p.sketchWindow.classList.remove("closed","minimized"),p.sketchWindow.style.zIndex="120",jr.updateWindowControlLabels&&jr.updateWindowControlLabels(p.sketchWindow),jr.resizeAfterLayoutChange&&jr.resizeAfterLayoutChange())}function a_(n){var i,r;const e=p.sketchWindow;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();Qe.dragging=!0,Qe.dragPointerId=n.pointerId,Qe.dragOffsetX=n.clientX-t.left,Qe.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function o_(n){const e=p.sketchWindow;if(!e||!Qe.dragging||Qe.dragPointerId!==null&&n.pointerId!==Qe.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-Qe.dragOffsetX)),s=Math.max(0,Math.min(i,n.clientY-Qe.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${s}px`,e.style.right="auto",e.style.bottom="auto"}function Qu(){Qe.dragging=!1,Qe.dragPointerId=null,us()}const c_={strokes:[]};function l_(n,e,t,i){if(!e.points.length)return;n.save(),n.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",n.strokeStyle=e.color,n.lineWidth=e.size,n.lineCap="round",n.lineJoin="round",n.beginPath();const r=e.points[0];n.moveTo(r.x*t,r.y*i);for(const s of e.points.slice(1))n.lineTo(s.x*t,s.y*i);e.points.length===1&&n.lineTo(r.x*t+.01,r.y*i+.01),n.stroke(),n.restore()}function u_(){const n=p.predictCanvas;if(!n)return;const e=n.getContext("2d");e.clearRect(0,0,n.width,n.height);for(const t of c_.strokes)l_(e,t,n.width,n.height)}function d_(){const n=p.predictCanvas;if(!n)return;const e=n.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),i=Math.max(10,Math.floor(e.width*t)),r=Math.max(10,Math.floor(e.height*t));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r,u_())}const ra=[1];function li(n){if(n<0)return NaN;for(let e=ra.length;e<=n;e+=1)ra[e]=ra[e-1]*e;return ra[n]}function uh(n,e,t){const i=Math.max(1,Math.min(6,Math.round(n))),r=Math.max(0,Math.min(i-1,Math.round(e))),s=Math.max(-r,Math.min(r,Math.round(t)));return{n:i,l:r,m:s}}function bn(n,e,t){if(e===0)return`${n}s`;if(e===1)return`${n}${t===0?"Pz":t>0?"Px":"Py"}`;if(e===2){if(t===0)return`${n}Dz2`;if(t===1)return`${n}Dxz`;if(t===-1)return`${n}Dyz`;if(t===2)return`${n}Dx2-y2`;if(t===-2)return`${n}Dxy`}if(e===3){if(t===0)return`${n}Fz3`;if(t===1)return`${n}Fxz2`;if(t===-1)return`${n}Fyz2`;if(t===2)return`${n}Fz(x2-y2)`;if(t===-2)return`${n}Fxyz`;if(t===3)return`${n}Fx(x2-3y2)`;if(t===-3)return`${n}Fy(3x2-y2)`}if(e===4){if(t===0)return`${n}Gz4`;if(t===1)return`${n}Gxz3`;if(t===-1)return`${n}Gyz3`;if(t===2)return`${n}Gz2(x2-y2)`;if(t===-2)return`${n}Gxyz2`;if(t===3)return`${n}Gxz(x2-3y2)`;if(t===-3)return`${n}Gyz(3x2-y2)`;if(t===4)return`${n}Gx4-6x2y2+y4`;if(t===-4)return`${n}Gxy(x2-y2)`}if(e===5){if(t===0)return`${n}Hz5`;if(t===1)return`${n}Hxz4`;if(t===-1)return`${n}Hyz4`;if(t===2)return`${n}Hz3(x2-y2)`;if(t===-2)return`${n}Hxyz3`;if(t===3)return`${n}Hz(x4-6x2y2+y4)`;if(t===-3)return`${n}Hxyz(x2-y2)`;if(t===4)return`${n}Hxz(x2-y2)`;if(t===-4)return`${n}Hyz(x2-y2)`;if(t===5)return`${n}Hx(x4-10x2y2+5y4)`;if(t===-5)return`${n}Hy(5x4-10x2y2+y4)`}return`${n}${["s","P","D","F","G","H"][e]??`L${e}`}${t}`}function h_(n,e,t){let i=0;for(let r=0;r<=n;r+=1){const s=(r%2===0?1:-1)*li(n+e)/(li(n-r)*li(e+r)*li(r));i+=s*t**r}return i}function f_(n,e,t){const i=Math.abs(e);let r=1;if(i>0){const a=Math.sqrt(Math.max(0,1-t*t));let c=1;for(let l=1;l<=i;l+=1)r*=-c*a,c+=2}if(n===i)return r;let s=t*(2*i+1)*r;if(n===i+1)return s;let o=0;for(let a=i+2;a<=n;a+=1)o=((2*a-1)*t*s-(a+i-1)*r)/(a-i),r=s,s=o;return o}function lc(n,e,t,i){const r=Math.sin(t),s=Math.cos(t),o=Math.cos(i),a=Math.sin(i);if(n===1){const h=Math.sqrt(3/(4*Math.PI));return e===0?h*s:e>0?h*r*o:h*r*a}if(n===2){if(e===0)return Math.sqrt(5/Math.PI)/4*(3*s*s-1);if(e===1)return Math.sqrt(15/Math.PI)/2*r*s*o;if(e===-1)return Math.sqrt(15/Math.PI)/2*r*s*a;if(e===2)return Math.sqrt(15/Math.PI)/4*r*r*Math.cos(2*i);if(e===-2)return Math.sqrt(15/Math.PI)/4*r*r*Math.sin(2*i)}const c=Math.abs(e),l=Math.sqrt((2*n+1)/(4*Math.PI)*(li(n-c)/li(n+c))),u=f_(n,c,Math.cos(t));return e>0?Math.sqrt(2)*l*u*Math.cos(c*i):e<0?Math.sqrt(2)*l*u*Math.sin(c*i):l*u}function la(n,e,t){const i=Math.abs(e);let r=1;for(let l=2;l<=2*i;l+=2)r*=(1-t*t)*((l+1)/l);let s=Math.sqrt(Math.max(0,r/2));if(n===i)return s;let o=Math.sqrt(2*i+3)*t*s;if(n===i+1)return o;let a=0,c=Math.sqrt((4*i*i+8*i+3)/(2*i+1));for(let l=i+2;l<=n;l+=1){const u=Math.sqrt((4*l*l-1)/(l*l-i*i));a=o*t*u-s*u/c,s=o,o=a,c=u}return a}function hi(n,e,t,i){const r=2*t*i/n;return Math.sqrt((2*t/n)**3*(li(n-e-1)/(2*n*li(n+e))))*Math.exp(-r/2)*r**e*h_(n-e-1,2*e+1,r)}function tn({n,l:e,m:t,z:i},r,s,o){const a=Math.hypot(r,s,o);if(a<1e-9)return e===0?hi(n,e,i,0)*lc(e,t,0,0):0;const c=Math.acos(o/a),l=Math.atan2(s,r);return hi(n,e,i,a)*lc(e,t,c,l)}function ua({n,l:e,m:t,z:i},r,s,o){const a=Math.hypot(r,s),c=Math.hypot(a,o),l=c<.01?0:o/c,u=hi(n,e,i,c)*la(e,t,l);let h=1/Math.sqrt(Math.PI);if(t!==0){const d=a>.001?t*Math.atan2(s,r):Math.PI/2;h*=t>0?Math.cos(d):-Math.sin(d)}return u*h}function p_(n){return n>=7?120:n===6?100:n===5?90:n===4?80:n===3?70:n===2?60:50}const ed=new Map;function Gi(n,e=.8){const t=`${n.n}|${n.l}|${n.z}|${e}`,i=ed.get(t);if(i)return{...i};let r=0;const s=.002;let o=0,a=0;for(;a<2e5;){const x=Zr(n,o),v=Zr(n,o+s/2),g=Zr(n,o+s);if(r+=(x+4*v+g)/6,o+=s,a+=1,s*r>e)break}const c=o*1.5,l=p_(n.n),h=2*Math.ceil(c)/l*l/2,d=Math.sqrt(Zr(n,o)/(4*Math.PI*o*o))||1e-4,f={radius:h,iso:Math.max(1e-4,d),gridSize:l,leastRadius:c};return ed.set(t,f),{...f}}function Zr(n,e){return e*e*hi(n.n,n.l,n.z,e)**2}const td=new Map;function uc(n){const e=`${n.n}|${n.l}|${n.z}`,t=td.get(e);if(t!=null)return t;const{leastRadius:i}=Gi(n),r=n.n===1&&n.l===0?2:20;let s=i;for(let a=.1;a<=i+r&&(s=a,!(a>i&&Zr(n,a)<1e-9));a+=.1);const o=Math.max(1,s);return td.set(e,o),o}const nd=new Map;function Wc(n){const e=`${n.n}|${n.l}|${n.z}`,t=nd.get(e);if(t)return[...t];const i=Math.max(0,n.n-n.l-1);if(!i)return[];const r=Math.max(uc(n),Gi(n).leastRadius*1.2),s=Math.max(900,n.n*520),o=[];let a=1e-5,c=hi(n.n,n.l,n.z,a);for(let l=1;l<=s;l+=1){const u=r*l/s,h=hi(n.n,n.l,n.z,u);if(Number.isFinite(h)){if(Math.abs(c)>1e-14&&Math.abs(h)>1e-14&&c*h<0){let d=a,f=u,x=c;for(let g=0;g<36;g+=1){const m=(d+f)/2,y=hi(n.n,n.l,n.z,m);x*y<=0?f=m:(d=m,x=y)}const v=(d+f)/2;if(o.some(g=>Math.abs(g-v)<.02)||o.push(v),o.length>=i)break}a=u,c=h}}return o.sort((l,u)=>l-u),nd.set(e,o),[...o]}function qc(n){const e=Math.abs(n.m),t=Math.max(0,n.l-e),i=[];if(t>0){const s=Math.max(720,n.l*300),o=1e-7,a=d=>{d<=1e-5||d>=Math.PI-1e-5||i.some(f=>Math.abs(f-d)<.01)||i.push(d)};let c=1e-5,l=la(n.l,n.m,Math.cos(c)),u=Math.abs(l)>o?c:null,h=Math.abs(l)>o?l:null;for(let d=1;d<s;d+=1){const f=Math.PI*d/s,x=la(n.l,n.m,Math.cos(f));if(Math.abs(x)<=o){if(a(f),i.length>=t)break;c=f,l=x;continue}if(h!=null&&h*x<0){let v=u,g=f,m=h;for(let _=0;_<34;_+=1){const w=(v+g)/2,A=la(n.l,n.m,Math.cos(w));m*A<=0?g=w:(v=w,m=A)}const y=(v+g)/2;if(a(y),i.length>=t)break}c=f,l=x,u=f,h=x}}const r=[];if(e>0)for(let s=0;s<e;s+=1){const o=n.m>0?(s+.5)*Math.PI/e:s*Math.PI/e;r.push(o)}return{polar:i,azimuthal:r}}function wa(n,e){return`${n-e-1} radial, ${e} angular`}function m_(n,e){const{radius:t}=e,i=Math.min(42,Math.max(24,Math.round(e.density*.58))),r=[],s=[],o=t*2/(i-1),a=t*t,c=35e4;let l=0;for(let x=0;x<i;x+=1){const v=-t+x*o;for(let g=0;g<i;g+=1){const m=-t+g*o;for(let y=0;y<i;y+=1){const _=-t+y*o;if(v*v+m*m+_*_>a||!id(e.cutaway,v,m,_))continue;const w=tn(n,v,m,_);l=Math.max(l,Math.abs(w))}}}const u=l||1;let h=(n.n*73856093^n.l*19349663^(n.m+8)*83492791^Math.round(t*1e3))>>>0;const d=()=>(h=1664525*h+1013904223>>>0,h/4294967296),f=Math.min(6e6,Math.max(72e4,e.density*e.density*600));for(let x=0;x<f;x+=1){const v=(d()*2-1)*t,g=(d()*2-1)*t,m=(d()*2-1)*t;if(v*v+g*g+m*m>a||!id(e.cutaway,v,g,m))continue;const y=tn(n,v,g,m),_=Math.min(1,(Math.abs(y)/u)**2);if(d()>_)continue;const w=y>=0?r:s;if(!(w.length/3>=c)&&(w.push(v,g,m),r.length/3>=c&&s.length/3>=c))break}return{positive:r,negative:s}}function id(n,e,t,i){return n==="quarter"?t<=0&&i<=0:n==="eighth"?e<=0&&t<=0&&i<=0:n==="threeQuarter"?!(t>0&&i>0):!0}function g_(n,e,t,i){const s=t.radius/140;let o=0,a=i*tn(n,0,0,0)-t.iso,c=null;for(let l=1;l<=140;l+=1){const u=l*s,h=i*tn(n,e.x*u,e.y*u,e.z*u)-t.iso;if(a<=0&&h>=0){let d=o,f=u;for(let x=0;x<12;x+=1){const v=(d+f)/2;i*tn(n,e.x*v,e.y*v,e.z*v)-t.iso>=0?f=v:d=v}c=f}if(a>=0&&h<=0&&c!==null){let d=o,f=u;for(let x=0;x<12;x+=1){const v=(d+f)/2;i*tn(n,e.x*v,e.y*v,e.z*v)-t.iso>=0?d=v:f=v}c=d}o=u,a=h}return c}function x_(n,e){const t=e.thetaSegments??58,i=e.phiSegments??96;function r(s){const o=[],a=[],c=[];for(let l=0;l<=t;l+=1){const u=Math.PI*l/t,h=[],d=Math.sin(u),f=Math.cos(u);for(let x=0;x<=i;x+=1){const v=Math.PI*2*x/i,g={x:d*Math.cos(v),y:d*Math.sin(v),z:f},m=g_(n,g,e,s);m===null||!Number.isFinite(m)?h.push(-1):(h.push(o.length/3),o.push(g.x*m,g.y*m,g.z*m))}c.push(h)}for(let l=0;l<t;l+=1)for(let u=0;u<i;u+=1){const h=c[l][u],d=c[l+1][u],f=c[l+1][u+1],x=c[l][u+1];h>=0&&d>=0&&f>=0&&a.push(h,d,f),h>=0&&f>=0&&x>=0&&a.push(h,f,x)}return{vertices:o,indices:a}}return{positive:r(1),negative:r(-1)}}function __(n){const e=bn(n.n,n.l,n.m),t=Math.max(0,n.n-n.l-1),i=n.l,r=Gv(n.l,n.m),s=hd(n.n),o=hd(n.l),a=Hv(n.m);return{label:e,radialNodes:t,angularNodes:i,main:`Ψ(r,θ,φ) = R${s}${o}(r) · Y${o}${a}(θ,φ)`,radial:`R${s}${o}(r) 决定离原子核不同距离处的振幅变化；当前轨道有 ${t} 个径向节点。`,angular:`${r} 对应的 Y${o}${a}(θ,φ) 决定轨道朝向、节面和正负相位；当前有 ${i} 个角向节点。`,visual:"原子轨道窗口显示 Ψ=+c 和 Ψ=-c 的等值面；轨道投影是在选定平面上看 Ψ；径向分布函数看 r²R²；电子云来自 |Ψ|² 的概率分布。"}}let Vt={resizeAfterLayoutChange:()=>{},renderOrbital:()=>{},applyPreset:()=>{},readParams:()=>({n:1,l:0,m:0}),downloadBlob:(n,e)=>{},getCloudPositiveObject:()=>null,getCloudNegativeObject:()=>null,getIsoMeshes:()=>[]};function v_(n){Object.assign(Vt,n)}function Xc(){return[{focus:"cloud",title:"第一步：电子云的形成",text:"根据概率密度分布，电子在原子核周围逐渐显现，形成浓密的电子云。"},{focus:"isosurface",title:"第二步：原子轨道实体化",text:"从电子云中提取特定概率的等势面，形成光滑的三维原子轨道轮廓。"},{focus:"slice_projection",title:"第三步：动态切片与投影",text:"对原子轨道进行切片，并将其截面映射为 2D 与 3D 的概率密度投影图。"},{focus:"formula",title:"第四步：径向与角向推导",text:"结合波函数公式，揭示轨道的径向分布函数与角向球面谐和函数构成。"}]}let Gn=!1,ts=!1,ds=0,fi=6e3,Jt={step:0,localProgress:0},Xo=[];function y_(){ts||(Gn=!Gn,Gn&&(ds=performance.now()-(Jt.step*fi+Jt.localProgress*fi)))}function dh(){var s;if(Gn)return;document.body.classList.add("cinematic-mode"),p.mainWindow&&(p.mainWindow.style.setProperty("position","fixed","important"),p.mainWindow.style.setProperty("top","0","important"),p.mainWindow.style.setProperty("left","0","important"),p.mainWindow.style.setProperty("width","100vw","important"),p.mainWindow.style.setProperty("height","100vh","important"),p.mainWindow.style.setProperty("z-index","1000","important")),p.viewer&&(p.viewer.style.setProperty("position","absolute","important"),p.viewer.style.setProperty("top","0","important"),p.viewer.style.setProperty("left","0","important"),p.viewer.style.setProperty("width","100%","important"),p.viewer.style.setProperty("height","100%","important"),p.viewer.style.setProperty("background","#000000","important"));const n=(s=p.viewer)==null?void 0:s.querySelector("canvas");n&&(n.style.setProperty("width","100%","important"),n.style.setProperty("height","100%","important")),Vt.resizeAfterLayoutChange();const e=document.getElementById("cinematicOverlay");e&&e.classList.add("visible"),Ae.autoRotate=!0,Ae.autoRotateSpeed=.8,p.cloud.checked=!0,p.wireframe.checked=!0,p.smooth.checked=!0,p.projection3d.checked=!0,Vt.renderOrbital();const t=Vt.getCloudPositiveObject(),i=Vt.getCloudNegativeObject(),r=Vt.getIsoMeshes();t&&(t.visible=!1),i&&(i.visible=!1),r.forEach(o=>o.traverse(a=>{a.isMesh&&(a.material.opacity=0)})),Gn=!0,fi=6e3,ds=performance.now(),Jt.step=0,fh()}function hh(){Gn=!1,document.body.classList.remove("cinematic-mode"),p.mainWindow&&(p.mainWindow.style.removeProperty("position"),p.mainWindow.style.removeProperty("top"),p.mainWindow.style.removeProperty("left"),p.mainWindow.style.removeProperty("width"),p.mainWindow.style.removeProperty("height"),p.mainWindow.style.removeProperty("z-index")),p.viewer&&(p.viewer.style.removeProperty("position"),p.viewer.style.removeProperty("top"),p.viewer.style.removeProperty("left"),p.viewer.style.removeProperty("width"),p.viewer.style.removeProperty("height"),p.viewer.style.removeProperty("background")),Vt.resizeAfterLayoutChange();const n=document.getElementById("cinematicOverlay");n&&n.classList.remove("visible"),Ae.autoRotate=!1,Vt.applyPreset()}function fh(){const e=Xc()[Jt.step];if(!e)return;document.getElementById("cinematicTitle").textContent=e.title,document.getElementById("cinematicText").textContent=e.text;const t=document.getElementById("cinematicFormula");if(Jt.step===3){t.classList.add("visible");const i=Vt.readParams(),r=__(i);document.getElementById("cinematicFormulaEq").innerHTML=r.main,document.getElementById("cinematicFormulaRadial").innerHTML="R(r): 径向部分",document.getElementById("cinematicFormulaAngular").innerHTML="Y(θ,φ): 角向部分"}else t.classList.remove("visible")}function M_(n){var u,h;if(!Gn)return;const e=Xc().length,t=n-ds;let i=Math.floor(t/fi);i>=e?ts?(i=e-1,Jt.localProgress=1):(ds=n,i=0):Jt.localProgress=t%fi/fi,i!==Jt.step&&(Jt.step=i,fh());const r=Jt.localProgress,s=Jt.step,o=r*r*(3-2*r),a=Vt.getCloudPositiveObject(),c=Vt.getCloudNegativeObject(),l=Vt.getIsoMeshes();if(s===0){if(a){a.visible=!0;const d=((u=a.userData.probs)==null?void 0:u.length)||0;a.geometry.setDrawRange(0,Math.floor(d*o)),a.material.opacity=Math.min(1,o*2)}if(c){c.visible=!0;const d=((h=c.userData.probs)==null?void 0:h.length)||0;c.geometry.setDrawRange(0,Math.floor(d*o)),c.material.opacity=Math.min(1,o*2)}l.forEach(d=>d.traverse(f=>{f.isMesh&&(f.material.opacity=0)}))}else s===1?(a&&(a.visible=!0,a.geometry.setDrawRange(0,1/0),a.material.opacity=1-o),c&&(c.visible=!0,c.geometry.setDrawRange(0,1/0),c.material.opacity=1-o),l.forEach(d=>d.traverse(f=>{f.name==="integratedProjectionMountain"?f.material.opacity=0:f.isMesh&&(f.material.opacity=o)}))):s===2?(a&&(a.visible=!1),c&&(c.visible=!1),l.forEach(d=>d.traverse(f=>{if(f.name==="integratedProjectionMountain"){f.material.opacity=o;const x=f.userData.plane||"xoy";x==="xoy"?f.scale.set(1,1,.01+o*.99):x==="xoz"?f.scale.set(1,.01+o*.99,1):x==="yoz"&&f.scale.set(.01+o*.99,1,1)}else f.isMesh&&(f.material.opacity=1)}))):s===3&&(a&&(a.visible=!1),c&&(c.visible=!1),l.forEach(d=>d.traverse(f=>{f.name==="integratedProjectionMountain"?(f.material.opacity=1,f.scale.set(1,1,1)):f.isMesh&&(f.material.opacity=1)})))}async function S_(){const n=p.viewer.querySelector("canvas");if(!(n!=null&&n.captureStream)||typeof MediaRecorder>"u"){alert("当前浏览器不支持直接导出视频。");return}if(ts)return;Gn||dh(),ts=!0,fi=4e3,ds=performance.now(),Jt.step=0,Xo=[];const e=n.captureStream(30),t=new MediaRecorder(e,{videoBitsPerSecond:6e6});document.getElementById("cinematicExportBtn").textContent="录制中...",document.getElementById("cinematicPlayBtn").disabled=!0,document.getElementById("cinematicExitBtn").disabled=!0;const i=new Promise((c,l)=>{t.ondataavailable=u=>{var h;(h=u.data)!=null&&h.size&&Xo.push(u.data)},t.onerror=()=>l(t.error),t.onstop=()=>c(new Blob(Xo,{type:t.mimeType||"video/webm"}))});t.start(250);const r=fi*Xc().length;await new Promise(c=>setTimeout(c,r+500)),t.state!=="inactive"&&t.stop();const s=await i,o=Vt.readParams(),a=`HAO-Cinematic-${bn(o.n,o.l,o.m)}.webm`;Vt.downloadBlob(s,a),document.getElementById("cinematicExportBtn").textContent="导出视频",document.getElementById("cinematicPlayBtn").disabled=!1,document.getElementById("cinematicExitBtn").disabled=!1,ts=!1,hh()}s_({updateWindowControlLabels:zr,resizeAfterLayoutChange:sn});const Yc=[new Worker(new URL(""+new URL("worker-wu770f7w.js",import.meta.url).href,import.meta.url),{type:"module"}),new Worker(new URL(""+new URL("worker-wu770f7w.js",import.meta.url).href,import.meta.url),{type:"module"})];let w_=1;const dc=new Map;function ph(n){const{jobId:e,fieldBuffer:t,error:i}=n.data,r=dc.get(e);r&&(dc.delete(e),i?r.reject(new Error(i)):r.resolve(t))}Yc[0].onmessage=ph;Yc[1].onmessage=ph;function E_(n,e,t,i,r){return new Promise((s,o)=>{const a=w_++;dc.set(a,{resolve:s,reject:o}),Yc[n].postMessage({jobId:a,fieldBuffer:e,params:t,options:i,sign:r},[e])})}let Yo=0;const mn=new tt(new L(0,0,-1),100);window.addEventListener("error",n=>{const e=document.querySelector("#statusText");e&&(e.textContent="Err: "+n.message)});window.addEventListener("unhandledrejection",n=>{var t;const e=document.querySelector("#statusText");e&&(e.textContent="Rej: "+(((t=n.reason)==null?void 0:t.message)||n.reason))});let Ht=null,On=null,Fn=null,zn=null,ns=null,is=null,Tr=null,hc=null,ri=null,si=null,rs=null,ss=null,as=null,Pi=null,Bn=null,Nn=null,kn=null,Oi=null,fc=null,pc=null,mc=null,gc=null,xc=null,_c=null,Dn=null,un=null,Ba=1,$n=5,Wt=4,$c=3,Ea=4.5,vr=!1;const Ni=[];function jc(n=(e=>(e=p.backgroundColor)==null?void 0:e.value)()||"#000000"){document.documentElement.style.setProperty("--viewer-bg",n);const t=new ye(n);dt.background=t.clone(),Dt.background=t.clone(),Xn.background=t.clone(),Yn.background=t.clone();for(const i of Ni)i.scene.background=t.clone()}function b_(){var t;if(document.querySelector("#relationModeInput")){Object.assign(p,{relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue")});return}const n=(t=p.longitudeNode)==null?void 0:t.closest("fieldset");if(!n)return;const e=document.createElement("fieldset");e.className="relation-panel",e.innerHTML=`
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
  `,n.insertAdjacentElement("afterend",e),Object.assign(p,{relationMode:e.querySelector("#relationModeInput"),syncRotation:e.querySelector("#syncRotationInput"),scanRadius:e.querySelector("#scanRadiusInput"),scanRadiusValue:e.querySelector("#scanRadiusValue"),scanTheta:e.querySelector("#scanThetaInput"),scanThetaValue:e.querySelector("#scanThetaValue"),scanPhi:e.querySelector("#scanPhiInput"),scanPhiValue:e.querySelector("#scanPhiValue"),scanSliceZ:e.querySelector("#scanSliceZInput"),scanSliceZValue:e.querySelector("#scanSliceZValue")}),p.scanSliceZ&&p.scanSliceZ.addEventListener("input",()=>{const i=Rt(),r=nn();xs(),Jc(),rl(i,r)})}const Wi=document.createElement("button");Wi.type="button";Wi.className="fullscreen-exit-button";Wi.textContent="退出全屏";Wi.hidden=!0;document.body.appendChild(Wi);function A_(n,e,t){return bn(n,e,t)}function mh(n,e,t){return`${n},${e},${t}`}function T_(n){const e=[0];for(let t=1;t<=n;t+=1)e.push(t,-t);return e}function gh(n){const e=Math.max(1,Math.min(6,Math.round(n)||1)),t=[];for(let i=0;i<e;i+=1)for(const r of T_(i))t.push({value:mh(e,i,r),label:A_(e,i,r)});return t}function C_(n=6){const e=[];for(let t=1;t<=n;t+=1)e.push(...gh(t));return e}const zt=C_(6);function sa(n,e,t=null){if(n){n.replaceChildren();for(const i of e){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,n.append(r)}t&&e.some(i=>i.value===t)&&(n.value=t)}}function R_(){sa(p.predictTarget,zt,"2,1,1"),sa(p.challengeGuess,zt,"2,1,1"),sa(p.compareA,zt,"2,1,1"),sa(p.compareB,zt,"3,1,1")}function P_(n=null){if(!p.preset)return;const e=n??uh(Number(p.n.value),Number(p.l.value),Number(p.m.value));if(Number(p.preset.dataset.n)!==e.n){p.preset.replaceChildren();for(const i of gh(e.n)){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,p.preset.append(r)}p.preset.dataset.n=String(e.n)}p.preset.value=mh(e.n,e.l,e.m)}const Ce={challengeTarget:zt[0],challengeTotal:0,challengeCorrect:0,dragWindow:null,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,explanationStep:0,explanationPlaying:!1,explanationStartedAt:0,explanationTimer:null,explanationFrame:null,annotationMode:!1,annotationDrag:null};function Rt(){var e,t;const n=uh(Number(p.n.value),Number(p.l.value),Number(p.m.value));return(e=p.sinType)!=null&&e.checked&&n.m>0&&(n.m=-n.m),(t=p.cosType)!=null&&t.checked&&n.m<0&&(n.m=Math.abs(n.m)),p.n.value=n.n,p.l.max=n.n-1,p.l.value=n.l,p.m.min=-n.l,p.m.max=n.l,p.m.value=Math.abs(n.m),P_(n),{...n,z:Math.max(1,Math.min(10,Number(p.z.value)||1))}}function $o(n,e){var t;n&&(n.disabled=!e,(t=n.closest("label"))==null||t.classList.toggle("muted",!e),e||(n.checked=!1))}function L_(n){const e=Wc(n).length,{polar:t,azimuthal:i}=qc(n);$o(p.radialNode,e>0),$o(p.polarNode,t.length>0),$o(p.longitudeNode,i.length>0)}function nn(){var s,o,a,c,l,u,h,d,f,x,v,g,m,y,_,w,A,E,b,T,S,M,P,D,U,k,B,F,X,H;const n=Rt();L_(n);const e=p.desktopMatch.checked?Gi(n):null;let t=p.slice.value;(s=p.xySlice)!=null&&s.checked&&(t="xoy"),(o=p.yzSlice)!=null&&o.checked&&(t="yoz"),(a=p.xzSlice)!=null&&a.checked&&(t="xoz"),!((c=p.xySlice)!=null&&c.checked)&&!((l=p.yzSlice)!=null&&l.checked)&&!((u=p.xzSlice)!=null&&u.checked)&&(t="none");const i=Number(((h=p.scanSliceZ)==null?void 0:h.value)??0),r={iso:Number(p.iso.value),density:Number(p.density.value),radius:Number(p.radius.value),opacity:Number(p.opacity.value),mode:p.mode.value,showCloud:((d=p.cloud)==null?void 0:d.checked)??!1,slice:t,sliceOffset:i/100*Number(p.radius.value),nodeRadial:!!(p.node.checked||(f=p.radialNode)!=null&&f.checked),nodePolar:!!(p.node.checked||(x=p.polarNode)!=null&&x.checked),nodeAzimuthal:!!(p.node.checked||(v=p.longitudeNode)!=null&&v.checked),showNode:!!(p.node.checked||(g=p.radialNode)!=null&&g.checked||(m=p.polarNode)!=null&&m.checked||(y=p.longitudeNode)!=null&&y.checked),showAxis:p.axis.checked,showBox:p.box.checked,showPositive:((_=p.positiveLobe)==null?void 0:_.checked)??!0,showNegative:((w=p.negativeLobe)==null?void 0:w.checked)??!0,wireframe:((A=p.wireframe)==null?void 0:A.checked)??!1,smooth:((E=p.smooth)==null?void 0:E.checked)??!1,showProjection:((b=p.projection)==null?void 0:b.checked)??!1,showProjection3d:((T=p.projection3d)==null?void 0:T.checked)??!1,grid3d:((S=p.grid3d)==null?void 0:S.checked)??!1,cutaway:(M=p.eighth)!=null&&M.checked?"eighth":(P=p.quarter)!=null&&P.checked?"quarter":(D=p.threeQuarter)!=null&&D.checked?"threeQuarter":"none",radialMode:(U=p.radialR)!=null&&U.checked?"R":(k=p.radialR2)!=null&&k.checked?"R2":"RDF",radialSection:((B=p.radialSection)==null?void 0:B.checked)??!1,radialSide:((F=p.radialSide)==null?void 0:F.checked)??!1,radialCurve:((X=p.radialCurve)==null?void 0:X.checked)??!0,radialAxis:((H=p.radialAxis)==null?void 0:H.checked)??!1,positiveColor:p.positiveColor.value,negativeColor:p.negativeColor.value,backgroundColor:p.backgroundColor.value,desktopMatched:!!e};return p.isoValue.value=r.iso.toFixed(4),p.densityValue.value=r.density,p.radiusValue.value=r.radius.toFixed(1),p.opacityValue.value=r.opacity.toFixed(2),p.boxSizeDisplay&&(p.boxSizeDisplay.value=(r.radius*2.4).toFixed(2)),p.intervalValue&&(p.intervalValue.value=(r.radius*2/r.density).toFixed(3)),p.probabilityValue&&(p.probabilityValue.value="0.800"),p.iso.disabled=!1,p.density.disabled=!1,p.radius.disabled=!1,r}function Or(){if(!p.desktopMatch.checked)return;const n=Gi(Rt()),e=Math.min(Number(p.iso.max),Math.max(Number(p.iso.min),n.iso));p.iso.value=e.toFixed(4),p.density.value=Math.min(Number(p.density.max),Math.max(Number(p.density.min),n.gridSize)),p.radius.value=Math.min(Number(p.radius.max),Math.max(Number(p.radius.min),n.radius)),nn()}function I_(){if(!p.boxSizeDisplay)return;const n=Number(p.boxSizeDisplay.value);!Number.isFinite(n)||n<=0||(p.radius.value=Math.min(Number(p.radius.max),Math.max(Number(p.radius.min),n/2.4)),nn())}function rd(n,e){const t=new qe;t.setAttribute("position",new Ne(n,3));const i=new Float32Array(n.length/3);for(let s=0;s<i.length;s+=1){const o=Math.sin((s+1)*12.9898)*43758.5453;i[s]=o-Math.floor(o)}t.setAttribute("seed",new It(i,1));const r=new qn({clipping:!0,uniforms:qd.merge([me.clipping,{uColor:{value:new ye(e)},uTime:{value:0},uSize:{value:3.5}}]),transparent:!0,depthWrite:!1,blending:yr,vertexShader:`
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
    `});return new Sx(t,r)}function D_(n){var e,t;for(const i of[Ht,On,Fn,zn])i!=null&&i.isPoints&&((t=(e=i.material)==null?void 0:e.uniforms)!=null&&t.uTime)&&(i.material.uniforms.uTime.value=n)}function rn(n){return Number.parseInt(n.replace("#","0x"),16)}const jo=new Map;function ka(n,e,t={}){if(t.clippingPlanes||t._clipPlanes)return sd(n,e,t);const i=JSON.stringify({color:n,opacity:e,...t});if(jo.has(i))return jo.get(i);const r=sd(n,e,t);return r.userData={...r.userData,pooled:!0},jo.set(i,r),r}function sd(n,e,t={}){return new ah({color:n,transparent:e<1,opacity:e,side:ht,emissive:n,emissiveIntensity:.025,roughness:.22,metalness:.05,envMapIntensity:.18,...t})}function ba(n,e,t){const i=new qe;i.setAttribute("position",new Ne(n.vertices,3)),i.setIndex(n.indices),i.computeVertexNormals();const r=ka(e,t);return new $e(i,r)}function Aa(n,e,t=!1){if(!(n!=null&&n.material))return;n.visible=!0,e.wireframe&&!e.smooth?(n.userData.originalMaterial||(n.userData.originalMaterial=n.material),n.material=new kt({color:n.userData.originalMaterial.color,wireframe:!0,transparent:!0,opacity:.8,side:wn,clippingPlanes:t?[]:[mn]})):(n.userData.originalMaterial&&(n.material=n.userData.originalMaterial),n.material.wireframe=!1,n.material.side=ht,n.material.flatShading=!e.smooth,t?n.material.clippingPlanes=null:(n.material.clippingPlanes=[mn],n.material.clipIntersection=!1),n.material.needsUpdate=!0)}function N_(n){return n.wireframe||n.smooth||n.showProjection3d}function U_(n){return n==="quarter"?[new tt(new L(0,1,0),0),new tt(new L(0,0,1),0)]:n==="eighth"?[new tt(new L(1,0,0),0),new tt(new L(0,1,0),0),new tt(new L(0,0,1),0)]:n==="threeQuarter"?[new tt(new L(0,0,1),0)]:[]}function Zc(n){const e=U_(n.cutaway),t=Fr(n.slice);return t==="x"&&e.push(new tt(new L(1,0,0),0)),t==="y"&&e.push(new tt(new L(0,1,0),0)),t==="z"&&e.push(new tt(new L(0,0,1),0)),e}function Fr(n){return n==="yoz"?"x":n==="xoz"?"y":n==="xoy"?"z":null}function O_(n){const e=[];n.cutaway==="quarter"&&e.push("y","z"),n.cutaway==="eighth"&&e.push("x","y","z"),n.cutaway==="threeQuarter"&&e.push("y","z");const t=Fr(n.slice);return t&&e.push(t),[...new Set(e)]}function Ta(n,e,t,i){const r=e._clipPlanes||Zc(e);if(!r.length)return n;const s=e._capFilter||(()=>!0);n.updateMatrixWorld(!0);const o=n.geometry.getAttribute("position"),a=n.geometry.index,c=[],l=a?a.count:Math.min(o.count,n.count||o.count);function u(K){return n.localToWorld(new L(o.getX(K),o.getY(K),o.getZ(K)))}const h=Math.floor(l/3);for(let K=0;K<h;K+=1){const fe=a?a.getX(K*3):K*3,W=a?a.getX(K*3+1):K*3+1,J=a?a.getX(K*3+2):K*3+2;c.push([u(fe),u(W),u(J)])}let d=c;const f=r.map(()=>[]);r.forEach((K,fe)=>{const W=[];for(const J of d){const{clipped:le,segments:N}=G_(J,K);le.length>=3&&W.push(le),f[fe].push(...N)}d=W});const x=[],v=[],g=new ye(rn(t));function m(K){return x.push(K.x,K.y,K.z),x.length/3-1}for(const K of d){const fe=m(K[0]);for(let W=1;W<K.length-1;W+=1){const J=m(K[W]),le=m(K[W+1]);v.push(fe,J,le)}}const y=!e._skipCaps,_=[],w=[],A=[];function E(K){return _.push(K.x,K.y,K.z),w.push(tn(i,K.x,K.y,K.z)),_.length/3-1}function b(K){const fe=K.normal.clone().normalize(),W=Math.abs(fe.x)<.9?new L(1,0,0):new L(0,1,0);W.sub(fe.clone().multiplyScalar(W.dot(fe))).normalize();const J=new L().crossVectors(fe,W).normalize(),le=fe.clone().multiplyScalar(-K.constant);return{normal:fe,basisA:W,basisB:J,origin:le}}function T(K,fe){const{basisA:W,basisB:J,origin:le}=b(K),N=e.radius,se=i.n>=6?6.2:i.n>=5?5.4:3.8,xe=i.n>=6?420:i.n>=5?360:280,we=Math.max(128,Math.min(xe,Math.round(e.density*se))),O=N*2/we,Te=e._capSign??1,Be=e.iso*1.015,Ze=we+1,Pe=new Float32Array(Ze*Ze);function Xe(j,Z){const oe=-N+j*O,ce=-N+Z*O;return le.clone().addScaledVector(W,oe).addScaledVector(J,ce)}function ke(j,Z){return Z*Ze+j}for(let j=0;j<=we;j+=1)for(let Z=0;Z<=we;Z+=1){const oe=Xe(Z,j);Pe[ke(Z,j)]=Te*tn(i,oe.x,oe.y,oe.z)-Be}function Fe(j,Z){return{point:Xe(j,Z),value:Pe[ke(j,Z)]}}function lt(j,Z,oe){return{point:j.point.clone().lerp(Z.point,oe),value:j.value+(Z.value-j.value)*oe}}function I(j,Z){const oe=j-Z;return Math.abs(oe)<1e-12?.5:Math.max(0,Math.min(1,j/oe))}function C(j,Z){const oe=[];for(let ce=0;ce<j.length;ce+=1){const ue=j[ce],Ee=j[(ce+1)%j.length],ae=Z.distanceToPoint(ue.point),Me=Z.distanceToPoint(Ee.point),Ve=ae>=-1e-7,Ie=Me>=-1e-7;if(Ve&&Ie)oe.push(Ee);else if(Ve&&!Ie){const ge=I(ae,Me);oe.push(lt(ue,Ee,ge))}else if(!Ve&&Ie){const ge=I(ae,Me);oe.push(lt(ue,Ee,ge),Ee)}}return oe}function $(j){const Z=[];for(let oe=0;oe<j.length;oe+=1){const ce=j[oe],ue=j[(oe+1)%j.length],Ee=ce.value>=0,ae=ue.value>=0;if(Ee&&ae)Z.push(ue);else if(Ee&&!ae){const Me=I(ce.value,ue.value);Z.push(lt(ce,ue,Me))}else if(!Ee&&ae){const Me=I(ce.value,ue.value);Z.push(lt(ce,ue,Me),ue)}}return Z}function ne(j){return E(j.point)}for(let j=0;j<we;j+=1)for(let Z=0;Z<we;Z+=1){let oe=[Fe(Z,j),Fe(Z+1,j),Fe(Z+1,j+1),Fe(Z,j+1)];for(let Ee=0;Ee<r.length&&!(Ee!==fe&&(oe=C(oe,r[Ee]),oe.length<3));Ee+=1);if(oe.length<3||(oe=$(oe),oe.length<3))continue;const ce=oe.reduce((Ee,ae)=>Ee.add(ae.point),new L).multiplyScalar(1/oe.length);if(!s(fe,ce))continue;const ue=ne(oe[0]);for(let Ee=1;Ee<oe.length-1;Ee+=1)A.push(ue,ne(oe[Ee]),ne(oe[Ee+1]))}}y&&r.forEach((K,fe)=>{T(K,fe)});const S=new qe;S.setAttribute("position",new Ne(x,3)),S.setIndex(v),e.smooth&&!e.wireframe&&!e._skipSmooth&&xh(S,e),S.computeVertexNormals();const M=ka(g,e.opacity,{wireframe:e.wireframe,flatShading:!e.smooth}),P=new $e(S,M);if(P.userData.vertexCount=v.length,!A.length)return P;const D=new qe,U=Sh(w,e.iso*1.6),k=[];for(let K=0;K<w.length;K+=1){const fe=w[K],W=_[K*3],J=_[K*3+1],le=_[K*3+2],N=Mh(fe,W,J,le,e,i,U);k.push(N.r,N.g,N.b)}D.setAttribute("position",new Ne(_,3)),D.setAttribute("color",new Ne(k,3)),D.setIndex(A),D.computeVertexNormals();const F=!!Fr(e.slice)||e.cutaway!=="none",X=new _r({vertexColors:!0,side:ht,shininess:50,transparent:!1,opacity:1,depthWrite:!0,clippingPlanes:[mn]});X.toneMapped=!1;const H=new $e(D,X);H.renderOrder=F?3:1;const ee=new kt({vertexColors:!0,side:ht,transparent:!0,opacity:.26,depthWrite:!1,depthTest:!0,blending:yr,clippingPlanes:[mn]});ee.toneMapped=!1;const re=new $e(D,ee);re.renderOrder=H.renderOrder+.05;const ie=new mt;return ie.add(P,H,re),ie.userData.vertexCount=v.length+A.length*2,ie}function Kc(n){var t,i;let e=((t=n==null?void 0:n.userData)==null?void 0:t.vertexCount)||0;return(i=n==null?void 0:n.traverse)==null||i.call(n,r=>{var s;r!==n&&(e+=((s=r.userData)==null?void 0:s.vertexCount)||0)}),e}async function ad(n,e,t,i,r){return await vc(n,e,t,i,r)}function F_(n,e,t,i,r){const s=new mt;let o=0;for(const a of r){const c=Ta(n,{...e,_clipPlanes:a.planes,_capFilter:a.capFilter,_skipSmooth:!0},t,i);c&&(s.add(c),o+=Kc(c))}return s.userData.vertexCount=o,s}function z_(n,e,t){const i=[],r=e.radius,s=Math.max(1800,n.n*620);let o=0,a=t*tn(n,0,0,0)-e.iso;for(let c=1;c<=s;c+=1){const l=r*c/s,u=t*tn(n,l,0,0)-e.iso;if(Number.isFinite(u)&&Number.isFinite(a)&&a*u<0){let h=o,d=l,f=a;for(let v=0;v<36;v+=1){const g=(h+d)/2,m=t*tn(n,g,0,0)-e.iso;f*m<=0?d=g:(h=g,f=m)}const x=(h+d)/2;x>.02&&!i.some(v=>Math.abs(v-x)<.025)&&i.push(x)}o=l,a=u}return i}function B_(n){const e=(()=>{const i=Fr(n.slice);return i==="x"?new tt(new L(1,0,0),0):i==="y"?new tt(new L(0,1,0),0):i==="z"?new tt(new L(0,0,1),0):null})(),t=i=>e?[...i,e]:i;return n.cutaway==="threeQuarter"?[{planes:t([new tt(new L(0,-1,0),0)])},{planes:t([new tt(new L(0,0,-1),0)])}]:[{planes:Zc(n)}]}function k_(n,e,t,i){const r=z_(n,e,t),s=new mt,o=B_(e),a=rn(i);let c=0;for(const u of r){const h=new Ir(u,n.n>=5?160:128,n.n>=5?96:72);for(const d of o){const f=ka(a,e.opacity,{wireframe:e.wireframe,flatShading:!e.smooth,clippingPlanes:d.planes,clipIntersection:!1}),x=new $e(h.clone(),f);x.userData.vertexCount=h.getAttribute("position").count,s.add(x),c+=x.userData.vertexCount}h.dispose()}const l=j_(n,e,t);return l&&(s.add(l),c+=Kc(l)),s.userData.vertexCount=c,s.children.length?s:null}function V_(n,e,t,i){return e.cutaway==="quarter"?Ta(n,{...e,_clipPlanes:[new tt(new L(0,1,0),0),new tt(new L(0,0,1),0)],_skipSmooth:!0},t,i):e.cutaway==="eighth"?Ta(n,{...e,_clipPlanes:[new tt(new L(1,0,0),0),new tt(new L(0,1,0),0),new tt(new L(0,0,1),0)],_skipSmooth:!0},t,i):e.cutaway==="threeQuarter"?F_(n,e,t,i,[{planes:[new tt(new L(0,-1,0),0)],capFilter:(r,s)=>s.z>0},{planes:[new tt(new L(0,1,0),0),new tt(new L(0,0,-1),0)],capFilter:(r,s)=>r===1&&s.y>0}]):null}function H_(n,e,t){var w;n.updateMatrixWorld(!0);const i=n.geometry.getAttribute("position"),r=Number.isFinite(n.count)&&n.count>0?n.count:Number.POSITIVE_INFINITY,s=Number.isFinite((w=n.geometry.drawRange)==null?void 0:w.count)&&n.geometry.drawRange.count>0?n.geometry.drawRange.count:Number.POSITIVE_INFINITY,o=Math.min(i.count,r,s),a=[],c=[],l=new Map;function u(A){return Number.isFinite(A.x)&&Number.isFinite(A.y)&&Number.isFinite(A.z)}const h=Fr(e.slice);function d(A){return e.cutaway==="quarter"?(A.y>0&&(A.y=0),A.z>0&&(A.z=0)):e.cutaway==="eighth"?(A.x>0&&(A.x=0),A.y>0&&(A.y=0),A.z>0&&(A.z=0)):e.cutaway==="threeQuarter"&&A.y>0&&A.z>0&&(A.y<A.z?A.y=0:A.z=0),h==="x"&&A.x>0&&(A.x=0),h==="y"&&A.y>0&&(A.y=0),h==="z"&&A.z>0&&(A.z=0),A}function f(A,E){const b=n.localToWorld(new L(i.getX(A),i.getY(A),i.getZ(A)));if(d(b),!u(b))return-1;if(E){const S=`${Math.round(b.x*1e4)},${Math.round(b.y*1e4)},${Math.round(b.z*1e4)}`;if(l.has(S))return l.get(S);const M=a.length/3;return a.push(b.x,b.y,b.z),l.set(S,M),M}return a.push(b.x,b.y,b.z),a.length/3-1}const x=Math.floor(o/3),v=e.smooth||e.wireframe;for(let A=0;A<x;A+=1){const E=A*3,b=A*3+1,T=A*3+2,S=f(E,v),M=f(b,v),P=f(T,v);S>=0&&M>=0&&P>=0&&c.push(S,M,P)}const g=new qe;g.setAttribute("position",new Ne(a,3)),g.setIndex(c),e.smooth&&!e.wireframe&&xh(g,e),g.computeVertexNormals();const m=e.wireframe&&!e.smooth;let y;m?y=new kt({color:rn(t),wireframe:!0,transparent:!0,opacity:.8,side:wn,clippingPlanes:[mn]}):(y=n.material.clone(),y.color=new ye(rn(t)),y.emissive=new ye(rn(t)),y.wireframe=!1,y.side=ht,y.flatShading=!e.smooth,y.clippingPlanes=[mn],y.needsUpdate=!0);const _=new $e(g,y);return _.userData.vertexCount=o,_}function xh(n,e){const t=n.getAttribute("position"),i=n.index;if(!t||!i)return;const r=t.count,s=Array.from({length:r},()=>new Set);for(let f=0;f<i.count;f+=3){const x=i.getX(f),v=i.getX(f+1),g=i.getX(f+2);s[x].add(v).add(g),s[v].add(x).add(g),s[g].add(x).add(v)}const o=Math.max(.035,e.radius/Math.max(80,e.density*2)),a=new Uint8Array(r),c=Fr(e.slice);for(let f=0;f<r;f+=1){const x=t.getX(f),v=t.getY(f),g=t.getZ(f);e.cutaway==="quarter"&&(Math.abs(v)<o||Math.abs(g)<o)&&(a[f]=1),e.cutaway==="eighth"&&(Math.abs(x)<o||Math.abs(v)<o||Math.abs(g)<o)&&(a[f]=1),e.cutaway==="threeQuarter"&&(Math.abs(v)<o||Math.abs(g)<o)&&(a[f]=1),c==="x"&&Math.abs(x)<o&&(a[f]=1),c==="y"&&Math.abs(v)<o&&(a[f]=1),c==="z"&&Math.abs(g)<o&&(a[f]=1)}const l=new Float32Array(t.array),u=new Float32Array(l.length),h=e.cutaway==="none"?10:7,d=e.cutaway==="none"?.16:.1;for(let f=0;f<h;f+=1){u.set(l);for(let x=0;x<r;x+=1){if(a[x]||s[x].size<3)continue;let v=0,g=0,m=0;for(const w of s[x]){const A=w*3;v+=l[A],g+=l[A+1],m+=l[A+2]}const y=s[x].size,_=x*3;u[_]=l[_]+(v/y-l[_])*d,u[_+1]=l[_+1]+(g/y-l[_+1])*d,u[_+2]=l[_+2]+(m/y-l[_+2])*d}l.set(u)}t.array.set(l),t.needsUpdate=!0}function G_(n,e){const t=[],i=[];for(let s=0;s<n.length;s+=1){const o=n[s],a=n[(s+1)%n.length],c=e.distanceToPoint(o)>=-1e-7,l=e.distanceToPoint(a)>=-1e-7;if(c&&l)t.push(a.clone());else if(c&&!l){const u=od(o,a,e);t.push(u),i.push(u)}else if(!c&&l){const u=od(o,a,e);t.push(u,a.clone()),i.push(u)}}const r=i.length===2?[[i[0],i[1]]]:[];return{clipped:t,segments:r}}function od(n,e,t){const i=e.clone().sub(n),r=t.normal.dot(i);if(Math.abs(r)<1e-10)return n.clone();const s=-(t.normal.dot(n)+t.constant)/r;return n.clone().add(i.multiplyScalar(Math.max(0,Math.min(1,s))))}async function W_(n,e,t,i,r,s){const o=ka(rn(s),t.opacity),a=e.n>=5?5e5:16e4,c=new Xx(i.density,o,!0,!0,a);c.isolation=i.iso,c.position.set(0,0,0),c.scale.set(i.radius,i.radius,i.radius);const l=await E_(n,c.field.buffer,e,{...i,cutaway:"none"},r);return c.field=new Float32Array(l),c.update(),c}async function vc(n,e,t,i,r){const s=t.cutaway!=="none"||t.slice!=="none";if(e.l===0&&s){const h=k_(e,t,i,r);if(h)return h}const o=t.smooth&&!t.wireframe?Math.round(t.density*(s?3:2)):t.density,a={...t,density:Math.min(s?220:180,Math.max(t.density,o))},c=await W_(n,e,t,a,i,r),l={...t,_capSign:i,_skipCaps:e.l===0},u=V_(c,l,r,e);return u||(Zc(t).length?Ta(c,l,r,e):H_(c,t,r))}function q_(n,e){const t=new mt,i=X_(n,e.radius,e);return i&&t.add(i),t.userData.vertexCount=Kc(t),t.children.length?t:null}function os(n,e=.18){const t=new kt({color:n,transparent:!0,opacity:e,side:ht,depthWrite:!1,depthTest:!0,blending:yr});return t.toneMapped=!1,t}function _h(n,e,t){const i=new L(Math.cos(n),Math.sin(n),0).multiplyScalar(e),r=new L(0,0,e),s=[-i.x-r.x,-i.y-r.y,-i.z-r.z,i.x-r.x,i.y-r.y,i.z-r.z,i.x+r.x,i.y+r.y,i.z+r.z,-i.x+r.x,-i.y+r.y,-i.z+r.z],o=new qe;return o.setAttribute("position",new Ne(s,3)),o.setIndex([0,1,2,0,2,3]),o.computeVertexNormals(),new $e(o,t)}function vh(n,e,t){const i=Math.min(n,Math.PI-n);if(Math.abs(i-Math.PI/2)<.018){const h=new $e(new Dc(e,160),t);return h.renderOrder=3,h}const r=e*Math.sin(i),s=e*Math.cos(i),o=160,a=[],c=[];for(const h of[1,-1]){const d=a.length/3;a.push(0,0,0);for(let f=0;f<=o;f+=1){const x=Math.PI*2*f/o;a.push(r*Math.cos(x),r*Math.sin(x),h*s)}for(let f=1;f<=o;f+=1)c.push(d,d+f,d+f+1)}const l=new qe;l.setAttribute("position",new Ne(a,3)),l.setIndex(c),l.computeVertexNormals();const u=new $e(l,t);return u.renderOrder=3,u}function X_(n,e,t={}){const i=new mt;if(t.nodeRadial){const o=os(16756736,.34);for(const a of Wc(n)){if(a<=.02||a>=e*.99)continue;const c=new $e(new Ir(a,128,64),o.clone());c.renderOrder=3,i.add(c),i.add(Ah(a,16769354,.72))}}const{polar:r,azimuthal:s}=qc(n);if(t.nodePolar){const o=os(65394,.32);for(const a of r)i.add(vh(a,e*1.04,o.clone()))}if(t.nodeAzimuthal){const o=os(47103,.3);for(const a of s){const c=_h(a,e*1.04,o.clone());c.renderOrder=3,i.add(c)}}return i.children.length?i:null}function Y_(n,e,t={}){const i=new mt,{polar:r,azimuthal:s}=qc(n);if(t.nodePolar){const o=os(65394,.34);for(const a of r)i.add(vh(a,e,o.clone()))}if(t.nodeAzimuthal){const o=os(47103,.32);for(const a of s)i.add(_h(a,e,o.clone()))}return i.children.length?i:null}function $_(n,e){return null}function yh(n){const e=new Rr(n*2,n*2,n*2),t=new Bx(e),i=new ki({color:13686237,transparent:!0,opacity:.58}),r=new Lc(t,i);return e.dispose(),r}function j_(n,e,t=null){const i=O_(e);if(!i.length)return null;const r=new mt;for(const s of i){const o=wh(n,e,s,t);o&&r.add(o)}return r.children.length?r:null}function Z_(n,e){const t=Math.max(0,Math.min(1,Math.abs(n)/Math.max(e*.5,1e-12))),i=Math.pow(t,.52);return n>=0?new ye(16711896).lerp(new ye(16716306),i):new ye(60159).lerp(new ye(1054975),i)}function Mh(n,e,t,i,r,s,o){const a=new ye(r.backgroundColor||"#000000"),c=new ye(16711896),l=new ye(60159),u=(M,P,D)=>{const U=Math.max(0,Math.min(1,(D-M)/Math.max(1e-12,P-M)));return U*U*(3-2*U)},h=Math.min(1,Math.hypot(e,t,i)/Math.max(r.radius,1e-9)),d=Math.pow(1-h,1.45),f=Math.max(0,Math.min(1,(s.n-4)/2)),x=Math.abs(n),v=r.iso*(.86-d*.18-f*.04),g=r.iso*(1.62+d*1.05+f*.28),m=r.iso*(1.05+d*.18),y=Math.max(r.iso*(2.1+d*1.05+f*.22),o*(.48+d*.14)),_=u(v,g,x),w=u(m,y,x),A=Z_(n,o),E=n>=0?c:l,b=.38+w*(.62-d*.06),T=E.clone().lerp(A,Math.max(.34,b)),S=Math.max(0,(1-_)*(.16+d*.06));return T.clone().lerp(a,S)}function Sh(n,e){const t=n.map(r=>Math.abs(r)).filter(r=>Number.isFinite(r)&&r>1e-12).sort((r,s)=>r-s);if(!t.length)return Math.max(e,1e-9);const i=Math.min(t.length-1,Math.floor(t.length*.82));return Math.max(e,t[i])}function wh(n,e,t,i=null,r=0,s=1){const o=Math.max(160,Math.min(n.n>=5?420:320,Math.round(e.density*(n.n>=5?5.4:4.4)))),a=e.radius;function c(B,F){return t==="x"?[r,B,F]:t==="y"?[B,r,F]:[B,F,r]}function l(B,F,X){return e.cutaway==="quarter"||e.cutaway==="threeQuarter"?t==="y"?X>0:t==="z"?F>0:!1:e.cutaway==="eighth"?t==="x"?F>0&&X>0:t==="y"?B>0&&X>0:t==="z"?B>0&&F>0:!1:!0}const u=o+1,h=e.iso*1.015,d=new Float32Array(u*u),f=[],x=(B,F)=>F*u+B;for(let B=0;B<=o;B+=1){const F=a-2*a*B/o;for(let X=0;X<=o;X+=1){const H=-a+2*a*X/o,[ee,re,ie]=c(H,F),K=tn(n,ee,re,ie);d[x(X,B)]=K;const fe=i==null||(i>0?K>=0:K<0);l(ee,re,ie)&&fe&&Math.abs(K)>=e.iso*.94&&f.push(K)}}if(!f.length)return null;const v=Sh(f,e.iso*1.6),g=[],m=[],y=[];function _(B){return i==null?Math.abs(B)-h:i*B-h}function w(B,F){const X=-a+2*a*B/o,H=a-2*a*F/o,[ee,re,ie]=c(X,H),K=d[x(B,F)];return{point:new L(ee,re,ie),rawValue:K,value:_(K)}}function A(B,F,X){return{point:B.point.clone().lerp(F.point,X),rawValue:B.rawValue+(F.rawValue-B.rawValue)*X,value:B.value+(F.value-B.value)*X}}function E(B,F){const X=B-F;return Math.abs(X)<1e-12?.5:Math.max(0,Math.min(1,B/X))}function b(B){const F=[];for(let X=0;X<B.length;X+=1){const H=B[X],ee=B[(X+1)%B.length],re=H.value>=0,ie=ee.value>=0;re&&ie?F.push(ee):re&&!ie?F.push(A(H,ee,E(H.value,ee.value))):!re&&ie&&F.push(A(H,ee,E(H.value,ee.value)),ee)}return F}function T(B){const{x:F,y:X,z:H}=B.point;g.push(F,X,H);const ee=Mh(B.rawValue,F,X,H,e,n,v);return m.push(ee.r,ee.g,ee.b),g.length/3-1}for(let B=0;B<o;B+=1)for(let F=0;F<o;F+=1){const X=-a+2*a*(F+.5)/o,H=a-2*a*(B+.5)/o,[ee,re,ie]=c(X,H);if(!l(ee,re,ie))continue;let K=[w(F,B),w(F+1,B),w(F+1,B+1),w(F,B+1)];if(K=b(K),K.length<3)continue;const fe=T(K[0]);for(let W=1;W<K.length-1;W+=1)y.push(fe,T(K[W]),T(K[W+1]))}if(!y.length)return null;const S=new qe;S.setAttribute("position",new Ne(g,3)),S.setAttribute("color",new Ne(m,3)),S.setIndex(y),S.computeVertexNormals();const M=new kt({vertexColors:!0,side:ht,transparent:!1,opacity:1,depthWrite:!0,color:new ye().setScalar(s)});M.toneMapped=!1;const P=new $e(S,M);P.renderOrder=4,P.userData.vertexCount=y.length;const D=new kt({vertexColors:!0,side:ht,transparent:!0,opacity:.26*s,depthWrite:!1,depthTest:!0,blending:yr,color:new ye().setScalar(s)});D.toneMapped=!1;const U=new $e(S,D);U.renderOrder=4.05,U.userData.vertexCount=y.length;const k=new mt;return k.add(P,U),k.userData.vertexCount=y.length*2,k}function K_(){for(const n of[Ht,On,Fn,zn,ns,is,Tr,hc])n&&En(dt,n);Ht=null,On=null,Fn=null,zn=null,ns=null,is=null,Tr=null,hc=null}function J_(){for(const n of[ri,si,rs])n&&En(Dt,n);ri=null,si=null,rs=null}function Q_(n,e=!0){const t=e_();t&&En(Dt,t);const i=Sa(n,Math.max(.08,n*.024),.9);Qx(i),i.visible=e,Dt.add(i)}function Jc(){for(const n of[ss,as,Pi])n&&En(Xn,n);ss=null,as=null,Pi=null}function Ca(){for(const n of[Bn,kn,Oi,fc,pc])n&&En(Yn,n);Bn=null,kn=null,Oi=null,fc=null,pc=null}function En(n,e){n.remove(e),e.traverse(t=>{var i,r,s,o,a,c;if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const l of t.material)(i=l.userData)!=null&&i.pooled||l.dispose();else t.material&&((r=t.material.userData)!=null&&r.pooled||(t.material.map&&t.material.map.dispose(),(c=(a=(o=(s=t.material.uniforms)==null?void 0:s.volumeMap)==null?void 0:o.value)==null?void 0:a.dispose)==null||c.call(a),t.material.dispose()))})}function ev(n,e){const t=Math.max(36,Math.floor(e.thetaSegments*.6)),r=new Oc(1,t).getAttribute("position"),s=[],o=[],a=new Map,c=[];let l=0;for(let d=0;d<r.count;d++){const f=r.getX(d),x=r.getY(d),v=r.getZ(d),g=1e5,m=`${Math.round(f*g)},${Math.round(x*g)},${Math.round(v*g)}`;let y=a.get(m);if(y===void 0){y=s.length/3,s.push(f,x,v),a.set(m,y);const _=Math.acos(v),w=Math.atan2(x,f),A=lc(n.l,n.m,_,w);c.push(A),Math.abs(A)>l&&(l=Math.abs(A))}o.push(y)}const u=(e.radius??4)/(l||1);function h(d){const f=[],x=[],v=new Int32Array(s.length/3).fill(-1);for(let g=0;g<o.length;g+=3){const m=o[g],y=o[g+1],_=o[g+2],w=c[m]*d,A=c[y]*d,E=c[_]*d;if(w<=1e-6&&A<=1e-6&&E<=1e-6)continue;const b=(T,S)=>{if(v[T]===-1){const M=S>1e-6?S*u:0;v[T]=f.length/3,f.push(s[T*3]*M,s[T*3+1]*M,s[T*3+2]*M)}return v[T]};x.push(b(m,w),b(y,A),b(_,E))}return{vertices:f,indices:x}}return{positive:h(1),negative:h(-1)}}async function ot(n=!1){n instanceof Event&&(n=!1);const e=++Yo;Qc();const t=Rt(),i=nn(),r=bn(t.n,t.l,t.m);p.statusText.textContent="Calculating...",p.renderButton.disabled=!0;let s=null,o=null,a=0,c=0;if(i.mode==="marching"||i.mode==="points"){const[l,u]=await Promise.all([ad(0,t,i,1,i.positiveColor),ad(1,t,i,-1,i.negativeColor)]);if(e!==Yo)return;s=l,o=u,a=s.userData.vertexCount,c=o.userData.vertexCount}else{const{positive:l,negative:u}=x_(t,{...i,thetaSegments:Math.max(30,i.density+18),phiSegments:Math.max(52,i.density*3)});s=ba(l,rn(i.positiveColor),i.opacity),o=ba(u,rn(i.negativeColor),i.opacity),Aa(s,i),Aa(o,i),a=l.vertices.length/3,c=u.vertices.length/3}if(i.showProjection3d||i.showProjection){const l=Rh(t,i);l.name="integratedProjection3DGroup",l.visible=!!i.showProjection3d,s&&s.add(l)}requestAnimationFrame(()=>{if(e!==Yo)return;i.showAxis=p.axis.checked,i.showBox=p.box.checked,K_(),J_(),Jc(),Ca(),jc(i.backgroundColor),ch(i.showAxis,Math.max(1,i.radius/4.5)),p.toolAxis&&p.toolAxis.classList.toggle("active",i.showAxis),Ht=s,On=o;const l=N_(i);if(Ht&&(Ht.visible=i.showPositive&&l,dt.add(Ht)),On&&(On.visible=i.showNegative&&l,dt.add(On)),i.showCloud){const{positive:u,negative:h}=m_(t,i);Fn=rd(u,rn(i.positiveColor)),zn=rd(h,rn(i.negativeColor)),Fn.material.clippingPlanes=[mn],zn.material.clippingPlanes=[mn],Fn.visible=i.showPositive,zn.visible=i.showNegative,dt.add(Fn,zn),a=u.length/3,c=h.length/3}if(i.showNode&&wa(t.n,t.l)!=="0 radial, 0 angular"&&(ns=q_(t,i),ns&&dt.add(ns)),is=$_(),is&&dt.add(is),hc=null,(i.showBox||i.grid3d)&&(Tr=yh(i.radius),dt.add(Tr)),fv(i),p.orbitalName.textContent=r,p.viewerTitle.textContent=`原子轨道  ${r}`,p.nodeText.textContent=wa(t.n,t.l),p.sliceText.textContent=i.slice.toUpperCase(),p.boxText.textContent=i.radius.toFixed(2),p.isoText.textContent=i.iso.toFixed(5),p.posCount.textContent=String(a),p.negCount.textContent=String(c),p.statusText.textContent="Rendered",p.animationWindow&&!p.animationWindow.classList.contains("closed")&&drawGenerationAnimation(0),lv(t,i),rl(t,i),Ra(t,i),n){const u=t.n>=5||t.l>=3?1.65:1.22;sv(t,i.radius*u,Math.max(Wt,iv(i))),Zx(),Kx()}Mn(Ae),Mn(De),p.renderButton.disabled=!1,sn()})}function tv(){return Array.from(document.querySelectorAll(".view-grid > .qt-window"))}function Qc(n={}){for(const e of tv())e.classList.remove("closed"),n.restoreLayout?e.classList.remove("minimized","maximized"):e.classList.remove("minimized"),zr(e)}function Va(n=$n){const e=p.viewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(je.left=-n*t,je.right=n*t,je.top=n,je.bottom=-n):(je.left=-n,je.right=n,je.top=n/t,je.bottom=-n/t),je.near=.1,je.far=Math.max(1e3,n*8),je.updateProjectionMatrix()}function mi(n,e=90){return Math.max(e,n*2.8)}function el(n=$n){var t,i,r;$n=n;const e=mi(n);je.position.set(0,0,e),je.lookAt(0,0,0),Va(n),Ae.target.set(0,0,0),Ae.update(),(t=p.toolXOY)==null||t.classList.add("active"),(i=p.toolYOZ)==null||i.classList.remove("active"),(r=p.toolXOZ)==null||r.classList.remove("active")}function Ha(n=Math.max(3,$n*.45)){const e=p.angularViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Je.left=-n*t,Je.right=n*t,Je.top=n,Je.bottom=-n):(Je.left=-n,Je.right=n,Je.top=n/t,Je.bottom=-n/t),Je.near=.1,Je.far=Math.max(1e3,n*8),Je.updateProjectionMatrix()}function nv(n=4){var t;Wt=Math.max(3,n);const e=mi(Wt,40);Je.position.set(0,0,e),Je.lookAt(0,0,0),Ha(Wt),De.target.set(0,0,0),(t=De.handleResize)==null||t.call(De),De.update()}function iv(n){const e=Math.max(4,Math.min(8,n.radius*.55))*.74;return Math.max(5.8,e*1.55)}function rv(...n){var s;const e=new Wn,t=new Wn;let i=!1;for(const o of n)o&&((s=o.updateWorldMatrix)==null||s.call(o,!0,!1),t.setFromObject(o),!(!Number.isFinite(t.min.x)||!Number.isFinite(t.max.x))&&(i?e.union(t):e.copy(t),i=!0));if(!i)return 4.2;const r=new xi;return e.getBoundingSphere(r),Math.max(.001,r.radius)}function sv(n,e,t){var o,a,c,l,u;const i=il(n);$n=e,Wt=Math.max(3,t);const r=mi(e),s=mi(Wt,40);i==="yoz"?(je.position.set(r,0,0),Je.position.set(s,0,0)):i==="xoz"?(je.position.set(0,r,0),Je.position.set(0,s,0)):(je.position.set(0,0,r),Je.position.set(0,0,s)),je.lookAt(0,0,0),Je.lookAt(0,0,0),Va(e),Ha(Wt),Ae.target.set(0,0,0),De.target.set(0,0,0),(o=Ae.handleResize)==null||o.call(Ae),(a=De.handleResize)==null||a.call(De),Ae.update(),De.update(),(c=p.toolXOY)==null||c.classList.toggle("active",i==="xoy"),(l=p.toolYOZ)==null||l.classList.toggle("active",i==="yoz"),(u=p.toolXOZ)==null||u.classList.toggle("active",i==="xoz")}function Eh(n=Math.max(2.5,$n*.6)){const e=p.projectionViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(bt.left=-n*t,bt.right=n*t,bt.top=n,bt.bottom=-n):(bt.left=-n,bt.right=n,bt.top=n/t,bt.bottom=-n/t),bt.near=.1,bt.far=1e3,bt.updateProjectionMatrix()}function av(n=Math.max(3,$n*.5)){var e;$c=n,bt.up.set(0,0,1),bt.position.set(n*.78,-n*1.18,n*.68),bt.lookAt(0,0,0),Eh(n),pn.target.set(0,0,0),(e=pn.handleResize)==null||e.call(pn),pn.update()}function tl(n=4.5){const e=p.radialViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Ct.left=-n*t,Ct.right=n*t,Ct.top=n,Ct.bottom=-n):(Ct.left=-n,Ct.right=n,Ct.top=n/t,Ct.bottom=-n/t),Ct.near=.1,Ct.far=1e3,Ct.updateProjectionMatrix()}function ov(n=4.5){var e;Ea=n,Ct.position.set(n*.65,-n*.9,n*.7),Ct.lookAt(0,0,0),tl(n),Ft.target.set(0,0,0),(e=Ft.handleResize)==null||e.call(Ft),Ft.update()}function cv(){var i;if(!Wa()||!((i=p.syncRotation)!=null&&i.checked))return;const n=je.position.clone().sub(Ae.target).normalize(),e=je.up.clone(),t=(r,s,o,a=40)=>{const c=mi(o,a);r.position.copy(n.clone().multiplyScalar(c)),r.up.copy(e),r.lookAt(0,0,0),s.target.set(0,0,0),r.updateProjectionMatrix()};t(Je,De,Wt,40),t(bt,pn,$c,30)}function lv(n,e){const t={...e,radius:Math.max(4,Math.min(8,e.radius*.55)),thetaSegments:72},{positive:i,negative:r}=ev(n,t);ri=ba(i,rn(e.positiveColor),1),si=ba(r,rn(e.negativeColor),1),Aa(ri,{...e,smooth:e.smooth||!e.wireframe,wireframe:e.wireframe},!0),Aa(si,{...e,smooth:e.smooth||!e.wireframe,wireframe:e.wireframe},!0),ri.scale.setScalar(.74),si.scale.setScalar(.74),ri.visible=e.showPositive,si.visible=e.showNegative,Dt.add(ri,si);const s=rv(ri,si),o=Math.max(4.2,s*1.45);e.showNode&&(rs=Y_(n,Math.max(s*1.16,2.8),e),rs&&Dt.add(rs)),Q_(o,e.showAxis),Wt=Math.max(Wt,o*1.12)}const Yr=(()=>{const n=[255,0,0],e=[255,0,255],t=[255,255,255],i=[0,255,255],r=[0,0,255],s=[],o=(c,l)=>{for(let u=0;u<l;u+=1)s.push(c)},a=(c,l,u)=>{const h=[(l[0]-c[0])/u,(l[1]-c[1])/u,(l[2]-c[2])/u];for(let d=0;d<u;d+=1)s.push([c[0]+d*h[0],c[1]+d*h[1],c[2]+d*h[2]])};return o(n,20),a(n,e,80),a(e,t,25),o(t,5),a(t,i,25),a(i,r,80),o(r,20),s.reverse().map(([c,l,u])=>new ye(c/255,l/255,u/255))})();function Ga(n){const t=(Math.max(-1,Math.min(1,n))+1)/2*(Yr.length-1),i=Math.max(0,Math.min(Yr.length-1,Math.floor(t))),r=Math.max(0,Math.min(Yr.length-1,i+1));return Yr[i].clone().lerp(Yr[r],t-i)}function uv(n,e,t,i,r,s){const o=e.rows,a=o.length,c=2*t/(a-1),l=Math.max(1,Math.round(.4/c)),u=new ki({color:16777215,transparent:!0,opacity:.56}),h=(d,f)=>{const x=-t+2*t*d/(a-1),v=-t+2*t*f/(a-1),g=o[f][d]/s;return new L(x,v,i+g*r+.012)};for(let d=0;d<a;d+=l){const f=[];for(let x=0;x<a;x+=1)f.push(h(x,d));n.add(new ls(new qe().setFromPoints(f),u))}for(let d=0;d<a;d+=l){const f=[];for(let x=0;x<a;x+=1)f.push(h(d,x));n.add(new ls(new qe().setFromPoints(f),u))}}function dv(n,e,t,i,r,s=1){const o=e.rows,a=o.length,c=2*t/(a-1),l=[(h,d,f)=>new L(-t+(h+f)*c,-t+d*c,i),(h,d,f)=>new L(-t+(h+1)*c,-t+(d+f)*c,i),(h,d,f)=>new L(-t+(h+1-f)*c,-t+(d+1)*c,i),(h,d,f)=>new L(-t+h*c,-t+(d+1-f)*c,i)],u=[[0,1],[1,2],[2,3],[3,0]];for(const h of r){const d=new ki({color:Ga(h).getHex(),transparent:!0,opacity:.95}),f=[];for(let x=0;x<a-1;x+=1)for(let v=0;v<a-1;v+=1){const g=[o[x][v],o[x][v+1],o[x+1][v+1],o[x+1][v]].map(y=>y/s),m=[];for(let y=0;y<4;y+=1){const[_,w]=u[y],A=g[_]-h,E=g[w]-h;if(A===0||A*E<0){const b=Math.abs(A)+Math.abs(E);if(b<1e-12)continue;const T=Math.max(0,Math.min(1,Math.abs(A)/b));m.push(l[y](v,x,T))}}m.length>=2&&(f.push(m[0],m[1]),m.length>=4&&f.push(m[2],m[3]))}f.length&&n.add(new Lc(new qe().setFromPoints(f),d))}}const Sn={radius:16756736,direction:3538793,point:16776960};function Wa(){var n;return!!((n=p.relationMode)!=null&&n.checked)}function hv(){const n=[[dt,mc],[Xn,gc],[Yn,xc],[Dt,_c]];for(const[e,t]of n)t&&En(e,t);mc=null,gc=null,xc=null,_c=null}function cd(n){var i,r;let e=0;const t=new L;return(i=n==null?void 0:n.updateMatrixWorld)==null||i.call(n,!0),(r=n==null?void 0:n.traverse)==null||r.call(n,s=>{var a,c;const o=(c=(a=s.geometry)==null?void 0:a.attributes)==null?void 0:c.position;if(o){s.updateMatrixWorld(!0);for(let l=0;l<o.count;l+=1)t.fromBufferAttribute(o,l).applyMatrix4(s.matrixWorld),e=Math.max(e,t.length())}}),e}function fv(n){const e=Math.max(cd(Ht),cd(On));Ba=e>.001?e*1.02:n.radius*.86}function bh(){var h,d,f,x;const n=nn(),e=Math.max(0,Math.min(100,Number(((h=p.scanRadius)==null?void 0:h.value)??45))),t=Math.max(0,Math.min(180,Number(((d=p.scanTheta)==null?void 0:d.value)??90))),i=(Number(((f=p.scanPhi)==null?void 0:f.value)??0)%360+360)%360,r=Math.max(.001,Ba||n.radius),s=r*e/100,o=t*Math.PI/180,a=i*Math.PI/180,c=new L(Math.sin(o)*Math.cos(a),Math.sin(o)*Math.sin(a),Math.cos(o)).normalize(),l=c.clone().multiplyScalar(s),u=Number(((x=p.scanSliceZ)==null?void 0:x.value)??0);return{options:n,radiusPercent:e,thetaDegrees:t,phiDegrees:i,r:s,maxRadius:r,direction:c,point:l,sliceZ:u}}function pv(n=bh()){p.scanRadiusValue&&(p.scanRadiusValue.value=`${Math.round(n.radiusPercent)}%`),p.scanThetaValue&&(p.scanThetaValue.value=`${Math.round(n.thetaDegrees)}°`),p.scanPhiValue&&(p.scanPhiValue.value=`${Math.round(n.phiDegrees)}°`),p.scanSliceZValue&&(p.scanSliceZValue.value=`${Math.round(n.sliceZ)}`)}function nl(n,e,t=.95){const i=new ki({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new ls(new qe().setFromPoints(n),i);return r.renderOrder=30,r}function mv(n,e,t=.95){const i=new ki({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new Lc(new qe().setFromPoints(n),i);return r.renderOrder=30,r}function gv(n,e=16777215,t=.026,i=1){const r=new rh(n,!1,"centripetal",.18),s=new Fc(r,Math.max(80,n.length*2),t,8,!1),o=new kt({color:e,transparent:i<1,opacity:i,depthTest:!1,depthWrite:!1});o.toneMapped=!1;const a=new $e(s,o);return a.renderOrder=31,a}function yc(n,e,t,i=.95){const r=[];for(let o=0;o<=160;o+=1){const a=Math.PI*2*o/160;r.push(new L(n*Math.cos(a),n*Math.sin(a),e))}return nl(r,t,i)}function Ah(n,e,t=.74){const i=[],o=a=>{for(let c=0;c<160;c+=1){const l=Math.PI*2*c/160,u=Math.PI*2*(c+1)/160;i.push(a(l),a(u))}};for(let a=1;a<12;a+=1){const c=Math.PI*a/12,l=Math.cos(c)*n,u=Math.sin(c)*n;o(h=>new L(u*Math.cos(h),u*Math.sin(h),l))}for(let a=0;a<6;a+=1){const c=Math.PI*a/6;o(l=>new L(n*Math.sin(l)*Math.cos(c),n*Math.sin(l)*Math.sin(c),n*Math.cos(l)))}return mv(i,e,t)}function gs(n,e,t=1){const i=new kt({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new $e(new Ir(n,24,16),i);return r.renderOrder=32,r}function Th(n,e,t,i,r){const s=new Wx(n,new L(0,0,0),e,t,i,r);return s.traverse(o=>{o.material&&(o.material.depthTest=!1,o.material.depthWrite=!1,o.material.toneMapped=!1,o.renderOrder=31)}),s}function xv(n,e,t){return e==="xoz"?new pe(n.x*t,n.z*t):e==="yoz"?new pe(n.y*t,n.z*t):new pe(n.x*t,n.y*t)}function _v(n,e){const t=n.length();return t>e&&t>1e-9&&n.multiplyScalar(e/t),n}function vv(n){const e=new mt;n.r>.001&&e.add(Ah(n.r,Sn.radius,.72));const t=Math.max(n.r,n.maxRadius*.22,1);e.add(Th(n.direction,t,Sn.direction,t*.11,t*.035));const i=gs(Math.max(.08,n.maxRadius*.018),Sn.point);i.position.copy(n.point),e.add(i),dt.add(e),mc=e}function yv(n){const e=new mt,t=Math.max(2.4,Wt*.55);e.add(Th(n.direction,t,Sn.direction,t*.14,t*.045));const i=gs(.08,Sn.point);i.position.copy(n.direction.clone().multiplyScalar(t)),e.add(i),Dt.add(e),_c=e}function Mv(n){if(!Dn)return;const e=new mt,t=Dn.radius*.92,i=Dn.radius/Math.max(1e-4,n.maxRadius),r=Math.max(0,n.r*i),s=r>t?t/r:1,o=i*s,a=Math.min(t,Math.max(0,n.r*o));e.add(yc(a,Dn.bottomZ+.18,Sn.radius,.95));const c=_v(xv(n.point,Dn.plane,o),t),l=gs(.075,Sn.point);l.position.set(c.x,c.y,Dn.bottomZ+.28),e.add(l),e.add(nl([new L(0,0,Dn.bottomZ+.22),new L(c.x,c.y,Dn.bottomZ+.22)],Sn.direction,.82)),Xn.add(e),gc=e}function Sv(n){if(!un)return;const e=n.r/Math.max(1e-4,un.radialExtent);if(Bn){const a=Bn.userData.rings,c=Math.max(1,Math.round(e*a));Bn.geometry.setDrawRange(0,c*128*6)}if(Nn){const a=Nn.userData.rings,c=Math.max(1,Math.round(e*a)),l=Nn.userData.sideAngles;Nn.geometry.setDrawRange(0,c*l*6)}if(kn){const a=kn.userData.samples,c=a*2+1,l=Math.max(1,Math.round(e*a)),u=kn.geometry.parameters.tubularSegments,h=u/c,d=u/2,f=l*h,x=l*h,v=Math.max(0,Math.floor(d-x)),g=Math.ceil(f+x);kn.geometry.setDrawRange(v*8*6,g*8*6)}const t=new mt,i=Math.min(un.radiusScale,e*un.radiusScale),r=sl(Rt(),n.r,n.options.radialMode),s=un.curveBaseZ+r/un.maxAbs*un.heightScale;t.add(nl([new L(i,0,un.baseZ-.15),new L(i,0,un.heightTop)],Sn.radius,.95));const o=gs(.07,Sn.point);o.position.set(i,0,s),t.add(o),Yn.add(t),xc=t}function xs(){hv();const n=bh();pv(n),mn.constant;const e=n.sliceZ/100*n.maxRadius;mn.constant=e;let t=dt.getObjectByName("relationSliceCap");if(t&&(En(dt,t),t=null),!Wa()){mn.constant=100;return}Math.abs(e)<n.maxRadius&&(t=wh(Rt(),n.options,"z",null,e,.75),t&&(t.name="relationSliceCap",dt.add(t))),vv(n),yv(n),Mv(n),Sv(n)}function wv(n){const e=n.length();if(e<1e-6)return;const t=Math.acos(Math.max(-1,Math.min(1,n.z/e))),i=(Math.atan2(n.y,n.x)+Math.PI*2)%(Math.PI*2);p.scanRadius&&(p.scanRadius.value=String(Math.round(Math.max(0,Math.min(100,e/Math.max(1e-4,Ba)*100))))),p.scanTheta&&(p.scanTheta.value=String(Math.round(t*180/Math.PI))),p.scanPhi&&(p.scanPhi.value=String(Math.round(i*180/Math.PI))),xs(),Vn(`关联高亮：r=${e.toFixed(2)}, θ=${Math.round(t*180/Math.PI)}°, φ=${Math.round(i*180/Math.PI)}°`)}function Ev(n){var o;if(!Wa())return;const e=an.domElement.getBoundingClientRect(),t=new pe((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),i=new Gx;i.params.Points.threshold=Math.max(.12,nn().radius*.025),i.setFromCamera(t,je);const r=[Ht,On,Fn,zn].filter(Boolean),s=i.intersectObjects(r,!0);(o=s[0])!=null&&o.point&&wv(s[0].point)}function il(n){const e=bn(n.n,n.l,n.m).replace(/^\d+/,"");return e.startsWith("Dyz")||e.startsWith("Fyz2")||e.startsWith("Gz3y")||e.startsWith("Gzy3")||e.startsWith("Gyz3")||e.startsWith("Hyz4")||e.startsWith("Hyz")?"yoz":e.startsWith("Pz")||e.startsWith("Dz2")||e.startsWith("Dxz")||e.startsWith("Fz3")||e.startsWith("Fxz2")||e.startsWith("Gz4")||e.startsWith("Gz3x")||e.startsWith("Gxz3")||e.startsWith("Gzx3")||e.startsWith("Hxz4")||e.startsWith("Hz5")||e.startsWith("Hxz")?"xoz":"xoy"}function Ch(n,e,t,i){const r=[],s=e.radius;let o=0,a=0,c=0;for(let l=0;l<i;l+=1){const u=[],h=-s+2*s*l/(i-1);for(let d=0;d<i;d+=1){const f=-s+2*s*d/(i-1);let x=0;const v=e.sliceOffset||0;t==="xoy"&&(x=ua(n,f,h,v)),t==="xoz"&&(x=ua(n,f,v,h)),t==="yoz"&&(x=ua(n,v,f,h)),o=Math.max(o,Math.abs(x)),a=Math.max(a,x),c=Math.min(c,x),u.push(x)}r.push(u)}return{data:{rows:r,maxAbs:o,maxPositive:a,minNegative:c},scale:1}}function Rh(n,e){const t=new mt,r=Gi(n).gridSize*2+1,s=e.slice!=="none"?e.slice:il(n),{data:o}=Ch(n,e,s,r),a=(o.maxPositive>1e-12?o.maxPositive:o.maxAbs||1)/.9,c=[],l=[],u=[],h=e.radius,d=h*.9;for(let y=0;y<r;y+=1)for(let _=0;_<r;_+=1){const w=-h+2*h*_/(r-1),A=-h+2*h*y/(r-1),E=o.rows[y][_]/a,T=E*d;let S,M,P;s==="xoy"?(S=w,M=A,P=T):s==="xoz"?(S=w,M=T,P=A):s==="yoz"&&(S=T,M=w,P=A),c.push(S,M,P);const D=Ga(E);l.push(D.r,D.g,D.b)}for(let y=0;y<r-1;y+=1)for(let _=0;_<r-1;_+=1){const w=y*r+_,A=w+1,E=w+r,b=E+1;u.push(w,E,A,A,E,b)}const f=new qe;f.setAttribute("position",new Ne(c,3)),f.setAttribute("color",new Ne(l,3)),f.setIndex(u),f.computeVertexNormals();const x=new $e(f,new _r({vertexColors:!0,side:ht,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04}));x.name="integratedProjectionMountain",t.add(x);const v=[];for(let y=0;y<r;y+=1)for(let _=0;_<r;_+=1){const w=-h+2*h*_/(r-1),A=-h+2*h*y/(r-1);s==="xoy"?v.push(w,A,0):s==="xoz"?v.push(w,0,A):s==="yoz"&&v.push(0,w,A)}const g=new qe;g.setAttribute("position",new Ne(v,3)),g.setAttribute("color",new Ne(l,3)),g.setIndex(u),g.computeVertexNormals();const m=new $e(g,new kt({vertexColors:!0,side:ht,transparent:!0,opacity:.85}));return m.name="integratedProjectionSlice",t.add(m),t.userData.vertexCount=r*r,t.userData.slicePlane=s,t.userData.radius=h,t.userData.size=r,t.userData.projectionScale=a,t}function bv(n,e){const t=`${n.n}|${n.l}|${n.z}`;if(window._maxPsiCache&&window._maxPsiCache[t])return window._maxPsiCache[t];let i=0,r=0;const s=20,o=Math.min(4.7,e.radius*.42);for(let c=0;c<=s;c++){const l=-o+2*o*c/s;for(let u=0;u<=s;u++){const h=-o+2*o*u/s;for(let d=0;d<=s;d++){const f=-o+2*o*d/s,x=ua(n,f*2.38,h*2.38,l*2.38);Math.abs(x)>i&&(i=Math.abs(x)),x>r&&(r=x)}}}const a={maxAbs:i,maxPos:r};return window._maxPsiCache||(window._maxPsiCache={}),window._maxPsiCache[t]=a,a}function rl(n,e){Xn.background=new ye(e.backgroundColor);const t=new mt,r=Gi(n).gridSize*2+1,s=e.slice!=="none"?e.slice:il(n),{data:o}=Ch(n,e,s,r),a=bv(n,e),c=(a.maxPos>1e-12?a.maxPos:a.maxAbs||1)/.9,l=[],u=[],h=[],d=Math.min(4.7,e.radius*.42),f=d*1,x=-d*1,v=d*.9;Dn={plane:s,radius:d,surfaceZ:f,bottomZ:x,height:v};for(let E=0;E<r;E+=1)for(let b=0;b<r;b+=1){const T=-d+2*d*b/(r-1),S=-d+2*d*E/(r-1),M=o.rows[E][b]/c,P=M;l.push(T,S,f+P*v);const D=Ga(M);u.push(D.r,D.g,D.b)}for(let E=0;E<r-1;E+=1)for(let b=0;b<r-1;b+=1){const T=E*r+b,S=T+1,M=T+r,P=M+1;h.push(T,M,S,S,M,P)}const g=new qe;g.setAttribute("position",new Ne(l,3)),g.setAttribute("color",new Ne(u,3)),g.setIndex(h),g.computeVertexNormals(),ss=new $e(g,new _r({vertexColors:!0,side:ht,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04})),t.add(ss),uv(t,o,d,f,v,c);const m=new mt,y=[];for(let E=0;E<r;E+=1)for(let b=0;b<r;b+=1){const T=-d+2*d*b/(r-1),S=-d+2*d*E/(r-1);y.push(T,S,x+.02)}const _=new qe;_.setAttribute("position",new Ne(y,3)),_.setAttribute("color",new Ne(u,3)),_.setIndex(h),_.computeVertexNormals();const w=new $e(_,new kt({vertexColors:!0,side:ht,transparent:!0,opacity:.78}));m.add(w);const A=(E,b,T)=>Array.from({length:T},(S,M)=>E+(b-E)*M/(T-1));dv(m,o,d,x+.08,[...A(-1,0,20),...A(0,1,20)],c),as=m,t.add(as),Pi=yh(d),Pi.scale.z=1,Pi.position.z=(f+x)/2,t.add(Pi),ss=t,as=null,Pi=null,Xn.add(t),av(d*1.92),xs()}function sl(n,e,t){const i=Math.max(e,1e-4),r=hi(n.n,n.l,n.z,i);return t==="R"?r:t==="R2"?r*r:i*i*r*r}function ld(n,e=11974326){const t=Math.abs(n),i=Math.max(0,Math.min(1,(t-.035)/.72)),r=i*i*(3-2*i);return new ye(e).lerp(Ga(n),r)}function Av(n,e,t,i){const r=Wc(e).filter(o=>o>.02&&o<i.radialExtent*.995);if(!r.length)return;const s=i.curveBaseZ??(t.radialSide?i.sideZ:i.diskZ+i.curveLift);for(const o of r){const a=o/i.radialExtent*i.radiusScale;if(t.radialCurve){const c=sl(e,o,t.radialMode),l=s+c/i.maxAbs*i.heightScale;for(const u of[-1,1]){const h=gs(.065,16761856,.95);h.position.set(u*a,0,l),n.add(h)}}}}function Ra(n,e){var E;Yn.background=new ye(e.backgroundColor);const t=n.n>=5?260:190,i=n.n>=5?132:96,r=Wa()?Math.max(.001,Ba||uc(n)):Math.max(5,uc(n)),s=[];for(let b=0;b<=t;b+=1)s.push(sl(n,r*b/t,e.radialMode));const o=Math.max(...s.map(Math.abs),1e-6),a=3.7,c=a*.43,l=-1.25,u=l,h=.08,d=u+a*.72,f=e.radialSide?d:u+h,x=f+s[0]/o*c;un={radialExtent:r,radiusScale:a,heightScale:c,baseZ:l,diskZ:u,curveLift:h,sideZ:d,curveBaseZ:f,curveOriginZ:x,maxAbs:o,heightTop:f+c+.38};const v=new mt,g=new $e(new Ir(a,128,48,0,Math.PI*2,Math.PI/2,Math.PI/2),new _r({color:12105912,side:ht,transparent:!0,opacity:.88,shininess:1,specular:2236962}));g.rotation.x=Math.PI/2,g.position.z=l,v.add(g);const m=new qe,y=[],_=[],w=[];for(let b=0;b<=i;b+=1){const T=b/i*a,S=Math.round(b/i*t),M=s[S]/o;for(let P=0;P<=128;P+=1){const D=Math.PI*2*P/128,U=T*Math.cos(D),k=T*Math.sin(D);y.push(U,k,u);const B=ld(M,12105912);_.push(B.r,B.g,B.b)}}const A=129;for(let b=0;b<i;b+=1)for(let T=0;T<128;T+=1){const S=b*A+T,M=S+1,P=S+A,D=P+1;w.push(S,P,M,M,P,D)}if(m.setAttribute("position",new Ne(y,3)),m.setAttribute("color",new Ne(_,3)),m.setIndex(w),m.computeVertexNormals(),Bn=new $e(m,new _r({vertexColors:!0,side:ht,transparent:!1,opacity:1,shininess:8,specular:2236962})),Bn.userData.rings=i,Bn.userData.samples=t,v.add(Bn),e.radialSide){const b=new $e(new Lr(a,a,Math.max(.1,d-u),160,1,!0),new kx({color:14149604,side:ht,transparent:!0,opacity:.24,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.28,ior:1.45,transmission:.08,specularIntensity:.5,specularColor:16777215}));b.rotation.x=Math.PI/2,b.position.z=(d+u)/2,b.renderOrder=2,v.add(b),v.add(yc(a,d,16777215,.12)),v.add(yc(a,u,16777215,.08));const T=new qe,S=[],M=[],P=[],D=e.radialSection?64:128,U=(e.radialSection,0),k=e.radialSection?Math.PI:Math.PI*2;for(let F=0;F<=i;F+=1){const X=F/i*a,H=Math.round(F/i*t),ee=s[H]/o,re=d+ee*c;for(let ie=0;ie<=D;ie+=1){const K=U+k*ie/D,fe=X*Math.cos(K),W=X*Math.sin(K);S.push(fe,W,re);const J=ld(ee,11711154);M.push(J.r,J.g,J.b)}}const B=D+1;for(let F=0;F<i;F+=1)for(let X=0;X<D;X+=1){const H=F*B+X,ee=H+1,re=H+B,ie=re+1;P.push(H,re,ee,ee,re,ie)}T.setAttribute("position",new Ne(S,3)),T.setAttribute("color",new Ne(M,3)),T.setIndex(P),T.computeVertexNormals(),Nn=new $e(T,new _r({vertexColors:!0,side:ht,transparent:!1,opacity:1,shininess:10,specular:3355443})),Nn.userData.rings=i,Nn.userData.samples=t,Nn.userData.sideAngles=D,v.add(Nn)}if(e.radialCurve){const b=[],T=f;for(let M=0;M<=t;M+=1){const P=a*M/t,D=T+s[M]/o*c;b.push(new L(P,0,D))}const S=b.slice(1).map(M=>new L(-M.x,0,M.z)).reverse();kn=gv([...S,...b],16777215,e.radialSide?.013:.011),kn.userData.samples=t,v.add(kn)}if(e.radialAxis){const b=x;Oi=$x(a+.9,a+.45,b,e.radialMode),v.add(Oi)}Av(v,n,e,un),fc=v,Yn.add(v),Oi=null,pc=null,e.radialSide?(Ea=4.9,Ct.position.set(0,-7.2,d+1.25),Ct.lookAt(0,0,0),tl(Ea),Ft.target.set(0,0,0),(E=Ft.handleResize)==null||E.call(Ft),Ft.update()):ov(5.3),xs()}function Pa(){Tv();const n=(e,t,i,r,s)=>{var a;const o=e.getBoundingClientRect();o.width<2||o.height<2||(t.setSize(o.width,o.height,!1),t.domElement.style.width="100%",t.domElement.style.height="100%",i(s),(a=r.handleResize)==null||a.call(r),r.update())};n(p.viewer,an,Va,Ae,$n),n(p.angularViewer,_i,Ha,De,Wt),n(p.projectionViewer,Dr,Eh,pn,$c),n(p.radialViewer,Nr,tl,Ft,Ea);for(const e of Ni)al(e,e.radius);t_(),d_()}function Tv(){const n=document.querySelector(".sidebar"),e=n==null?void 0:n.querySelector(".sidebar-fit");if(!n)return;if(window.matchMedia("(max-width: 900px)").matches){document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");return}document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");const t=getComputedStyle(n),i=n.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),r=(e==null?void 0:e.scrollHeight)||n.scrollHeight;if(!i||!r||r<=i+4)return;const s=Math.max(.72,Math.min(1,(i-4)/r));document.documentElement.style.setProperty("--sidebar-zoom",s.toFixed(3)),document.documentElement.style.setProperty("--sidebar-fit-height",`${Math.ceil(r*s)}px`)}function sn(){requestAnimationFrame(()=>{Pa(),requestAnimationFrame(()=>{Pa(),us()})})}function Cv(){var n;Ce.annotationMode=!Ce.annotationMode,document.body.classList.toggle("annotation-mode",Ce.annotationMode),(n=p.annotationToolbar)==null||n.classList.toggle("closed",!Ce.annotationMode),Ce.annotationMode&&Qc(),Vn(Ce.annotationMode?"讲解标注：点击下方按钮添加标签，拖动标签调整位置。":"讲解标注已关闭。")}function Rv(n){const t={正相:"orbital",负相:"orbital",节点:"orbital",投影平面:"projection",径向节点:"radial"}[n]||"orbital";return document.querySelector(`[data-annotation-layer="${t}"]`)}function Pv(n){return n==="正相"?"positive":n==="负相"?"negative":n==="节点"?"node":n==="投影平面"?"projection":n==="径向节点"?"radial":""}function Lv(n){const e=Rv(n);if(!e)return;const t=document.createElement("button");t.type="button",t.className=`annotation-note ${Pv(n)}`.trim(),t.textContent=n;const i=e.querySelectorAll(".annotation-note").length;t.style.left=`${12+i%4*12}%`,t.style.top=`${14+i%3*14}%`,e.appendChild(t)}function Iv(){for(const n of document.querySelectorAll(".annotation-layer"))n.replaceChildren()}function Dv(n){var r;const e=n.target.closest(".annotation-note");if(!e||!Ce.annotationMode)return;n.preventDefault(),n.stopPropagation();const t=e.closest(".annotation-layer"),i=e.getBoundingClientRect();Ce.annotationDrag={note:e,layer:t,offsetX:n.clientX-i.left,offsetY:n.clientY-i.top},(r=e.setPointerCapture)==null||r.call(e,n.pointerId)}function Nv(n){const e=Ce.annotationDrag;if(!e)return;n.preventDefault();const t=e.layer.getBoundingClientRect(),i=e.note.getBoundingClientRect(),r=Math.max(0,Math.min(t.width-i.width,n.clientX-t.left-e.offsetX)),s=Math.max(0,Math.min(t.height-i.height,n.clientY-t.top-e.offsetY));e.note.style.left=`${r}px`,e.note.style.top=`${s}px`}function ud(){Ce.annotationDrag=null}function Uv(){p.boxWindow&&(p.boxWindow.classList.remove("closed","minimized"),p.boxWindow.style.zIndex="126",zr(p.boxWindow),sn())}function qa(n){const[e,t,i]=n.split(",").map(Number);return{n:e,l:t,m:i}}function Ov(n){var a;if(!n)return null;let e=Ni.find(c=>c.container===n);if(e)return n.contains(e.renderer.domElement)||n.appendChild(e.renderer.domElement),e;const t=new fs;t.background=new ye(((a=p.backgroundColor)==null?void 0:a.value)||"#000000");const i=new Bi(-5,5,5,-5,.1,2e3),r=new hs({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.appendChild(r.domElement);const s=Hi(i,r.domElement);ms(n,s),t.add(new ps(16777215,.5));const o=new Vi(16777215,1.2);return o.position.set(0,0,80),t.add(o),e={container:n,scene:t,camera:i,renderer:r,controls:s,objects:[],radius:5,target:new L,resizeObserver:null,isLeader:!1},s.addEventListener("start",()=>{for(const c of Ni)c.isLeader=!1;e.isLeader=!0}),"ResizeObserver"in window&&(e.resizeObserver=new ResizeObserver(()=>al(e,e.radius)),e.resizeObserver.observe(n)),Ni.push(e),Ni.length===1&&(e.isLeader=!0),e}function Fv(n){if(n){for(const e of n.objects)En(n.scene,e);n.objects=[]}}function al(n,e){var o,a;if(!n)return;const t=n.container.getBoundingClientRect();if(t.width<2||t.height<2)return;n.renderer.setSize(t.width,t.height,!1);const i=t.width/t.height,r=Math.max(3,e);i>=1?(n.camera.left=-r*i,n.camera.right=r*i,n.camera.top=r,n.camera.bottom=-r):(n.camera.left=-r,n.camera.right=r,n.camera.top=r/i,n.camera.bottom=-r/i),n.camera.near=.1,n.camera.far=Math.max(1e3,r*8);const s=n.target??new L;n.camera.position.set(s.x,s.y,s.z+mi(r,40)),n.camera.lookAt(s),n.camera.updateProjectionMatrix(),n.controls.target.copy(s),(a=(o=n.controls).handleResize)==null||a.call(o),n.controls.update()}function zv(n,e,t){const i=new Wn;let r=!1;for(const s of e){s.updateMatrixWorld(!0);const o=new Wn().setFromObject(s);Number.isFinite(o.min.x)&&Number.isFinite(o.min.y)&&Number.isFinite(o.min.z)&&Number.isFinite(o.max.x)&&Number.isFinite(o.max.y)&&Number.isFinite(o.max.z)&&(i.union(o),r=!0)}if(r){const s=i.getBoundingSphere(new xi);n.target.copy(s.center),n.radius=Math.max(2.5,t,s.radius*1.2)}else n.target.set(0,0,0),n.radius=Math.max(2.5,t);al(n,n.radius)}async function La(n,e,t,i){var v,g;const r=Ov(n);if(!r)return null;const s={...qa(e),z:Number((v=p.z)==null?void 0:v.value)||1},o=Gi(s),a=Math.max(4,Math.min(10,o.radius*.08)),c=Math.min(78,Math.max(42,Math.round(o.gridSize*.72))),l={iso:o.iso,density:c,radius:o.radius,opacity:.96,smooth:!1,wireframe:!0,cutaway:"none",showPositive:!0,showNegative:!0,positiveColor:p.positiveColor.value,negativeColor:p.negativeColor.value,backgroundColor:((g=p.backgroundColor)==null?void 0:g.value)||"#000000"};r.scene.background=new ye(l.backgroundColor),Fv(r);const u=await vc(0,s,l,1,l.positiveColor),h=await vc(1,s,l,-1,l.negativeColor),d=a/Math.max(1,o.radius);u.scale.multiplyScalar(d),h.scale.multiplyScalar(d);const f=Sa(Math.max(1.6,a*.5));r.scene.add(u,h,f),r.objects.push(u,h,f),zv(r,[u,h,f],a*1.45);const x=bn(s.n,s.l,s.m);return t&&(t.textContent=x),i&&(i.textContent=`${wa(s.n,s.l)}；n=${s.n}, l=${s.l}, |m|=${Math.abs(s.m)}`),{params:s,label:x,nodes:wa(s.n,s.l)}}async function Ph(){var t,i;const n=await La(p.compareAViewer,(t=p.compareA)==null?void 0:t.value,p.compareATitle,p.compareANotes),e=await La(p.compareBViewer,(i=p.compareB)==null?void 0:i.value,p.compareBTitle,p.compareBNotes);if(n&&e&&p.compareSummary){const r=n.params.l===e.params.l&&Math.abs(n.params.m)===Math.abs(e.params.m);p.compareSummary.textContent=r?`${n.label} 与 ${e.label} 角向类型相同，重点比较径向节点随 n 增加的变化。`:`${n.label} 与 ${e.label} 角向类型不同，重点比较节点面方向、相位分布和对称性。`}}async function Mc(n){var e,t;return n==="a"?La(p.compareAViewer,(e=p.compareA)==null?void 0:e.value,p.compareATitle,p.compareANotes):n==="b"?La(p.compareBViewer,(t=p.compareB)==null?void 0:t.value,p.compareBTitle,p.compareBNotes):null}function Xa(n){const e=qa(n);p.n.value=e.n,p.l.value=e.l,p.m.value=Math.abs(e.m),p.cosType.checked=e.m>=0,p.sinType.checked=e.m<0,Rt(),Or(),ot()}function dd(n,e){var s,o,a,c;const t=qa(n);Xa(n),p.mainWindow&&(p.mainWindow.classList.remove("closed","minimized","maximized"),zr(p.mainWindow)),p.positiveLobe&&(p.positiveLobe.checked=!0),p.negativeLobe&&(p.negativeLobe.checked=!0),p.wireframe&&p.smooth&&!p.wireframe.checked&&!p.smooth.checked&&(p.wireframe.checked=!0),Rt(),ot();const i=Mc(e),r=(i==null?void 0:i.label)||bn(t.n,t.l,t.m);p.compareSummary&&(p.compareSummary.textContent=`已载入主视图：${r}`),e==="a"?(o=(s=p.compareAViewer)==null?void 0:s.closest(".compare-view-card"))==null||o.scrollIntoView({block:"nearest",inline:"nearest"}):e==="b"&&((c=(a=p.compareBViewer)==null?void 0:a.closest(".compare-view-card"))==null||c.scrollIntoView({block:"nearest",inline:"nearest"})),sn()}function Kr(n){if(!p.activityWindow)return;const e=n||"predict";p.activityWindow.classList.remove("closed","minimized"),p.activityWindow.style.zIndex="125";for(const s of p.activityPanes??[]){const o=s.dataset.activityPane||s.id.replace(/Pane$/,"");s.classList.toggle("active",o===e)}for(const s of p.activityModeButtons??[])s.classList.toggle("active",s.dataset.activityMode===e);const t=document.querySelector(".client-panel"),i=document.querySelector(".view-grid");e==="challenge"||e==="predict"?(t&&(t.style.opacity="0.5",t.style.filter="blur(8px)",t.style.pointerEvents="none"),i&&(i.style.opacity="0.5",i.style.filter="blur(12px)",i.style.pointerEvents="none")):(t&&(t.style.opacity="1",t.style.filter="none",t.style.pointerEvents="auto"),i&&(i.style.opacity="1",i.style.filter="none",i.style.pointerEvents="auto"));const r={predict:"预测-验证模式",score:"预测评分",diagnosis:"错误诊断",nodes:"节点发现",compare:"轨道对比",challenge:"轨道配对挑战",explain:"原理演示",tablet:"平板课堂"};p.activityTitle&&(p.activityTitle.textContent=r[e]||"课堂互动"),zr(p.activityWindow),sn(),e==="compare"&&requestAnimationFrame(()=>{Ph(),sn()}),e==="explain"?requestAnimationFrame(()=>{_s(Ce.explanationStep,{render:!1}),sn()}):(Ya(),Nh(null))}const Lh=7200;function Bv(){const n=Rt();return bn(n.n,n.l,n.m)}const kv=["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"],Vv=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];function Ih(n,e){return(n<0?"⁻":"")+String(Math.abs(n)).split("").map(i=>e[Number(i)]??i).join("")}function hd(n){return Ih(n,kv)}function Hv(n){return Ih(n,Vv)}function Gv(n,e){return bn(Math.max(1,n+1),n,e).replace(/^\d+/,"")||`l=${n}, m=${e}`}v_({resizeAfterLayoutChange:sn,renderOrbital:ot,applyPreset:Bh,readParams:Rt,downloadBlob:(n,e)=>{const t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=e,t.click(),URL.revokeObjectURL(t.href)},getCloudPositiveObject:()=>Fn,getCloudNegativeObject:()=>zn,getIsoMeshes:()=>isoMeshes});function Dh(){const n=Rt(),e=bn(n.n,n.l,n.m),t=n.n-n.l-1,i=n.l;return[{focus:"all",title:`先把 ${e} 看成一个波函数`,formula:"Ψ(r,θ,φ) = Rₙₗ(r) · Yₗᵐ(θ,φ)",text:"四个窗口不是四套不同的计算。它们都来自同一个 Ψ，只是观察方式不同：在空间中取等值面、在平面上取切片、沿半径取曲线，或只看角向部分。",observe:`当前轨道是 ${e}：n=${n.n} 决定尺度和径向层数，l=${n.l} 决定角向节点，m=${n.m} 决定方向和相位分区。`,reason:"先建立“同源”的概念，后面的每张图就不再是孤立图像，而是同一个函数的不同读法。",action:()=>{p.projection&&(p.projection.checked=!0),ot()}},{focus:"orbital",title:"原子轨道：找出 Ψ 等于某个值的边界",formula:"Ψ(x,y,z) = +c  和  Ψ(x,y,z) = -c",text:"程序先在三维盒子里布满格点，逐点计算 Ψ。把数值等于正等值和负等值的位置连成曲面，就得到你看到的两个相位区域。",observe:"粉色和蓝色表示波函数符号相反，不表示电荷正负。网格越密，等值面越接近真实边界。",reason:"这一步回答“轨道外形怎么来”：它不是画出来的外壳，而是三维标量场中被等值面算法提取出来的边界。",action:()=>{da({cloud:!1,wireframe:!0,smooth:!0,projection:!1,node:!1,box:!0})}},{focus:"projection",title:"轨道投影：把同一个 Ψ 放到一个平面上读",formula:"例如：z=0 时，观察 Ψ(x,y,0)",text:"投影窗口先选一个最能显示该轨道对称性的平面，再在平面上逐点计算 Ψ。上方曲面用高度表达数值大小，下方等高线表达相位和节点线。",observe:"看上方曲面的峰、谷，再对照下方等高线：峰对应密集的正相线，谷对应密集的负相线，白色过渡附近就是节点。",reason:"这一步把三维轨道压到二维平面，让学生更容易判断相位分区、节点线和方向。",action:()=>{p.projection&&(p.projection.checked=!0),p.box&&(p.box.checked=!0),p.wireframe&&(p.wireframe.checked=!0),p.smooth&&(p.smooth.checked=!1),ot()}},{focus:"radial",title:"径向分布：只问电子离原子核多远",formula:"P(r) = r² · Rₙₗ(r)²",text:"径向分布函数暂时不关心方向，只沿半径统计概率。R 决定波函数随距离怎样振荡，r² 会把球壳体积因素加进去。",observe:`${e} 的径向节点数是 n-l-1 = ${t}。曲线下凹或接近零的位置，通常对应概率分布中的分层。`,reason:"这一步解释“为什么有的轨道外面还有一层”：那通常来自径向部分，而不是角向形状突然改变。",action:()=>{p.radialR&&(p.radialR.checked=!1),p.radialR2&&(p.radialR2.checked=!1),p.radialRdf&&(p.radialRdf.checked=!0),p.radialSection&&(p.radialSection.checked=!0),p.radialSide&&(p.radialSide.checked=!0),p.radialCurve&&(p.radialCurve.checked=!0),ot()}},{focus:"angular",title:"角向函数：只看方向怎样分成正负相",formula:"Yₗᵐ(θ,φ) 决定方向、节面和相位",text:"角向函数把半径影响先拿掉，只保留方向上的变化。这样可以直接看到轨道为什么沿某些轴伸展，为什么中间会出现节面。",observe:`${e} 的角向节点数是 l = ${i}。这些节点决定了轨道方向上的分瓣方式。`,reason:"最后再回到原子轨道时，学生就能把外形拆开理解：径向部分决定层数，角向部分决定方向和分瓣。",action:()=>{p.projection&&(p.projection.checked=!1),p.node&&(p.node.checked=!0),p.longitudeNode&&(p.longitudeNode.checked=!0),p.wireframe&&(p.wireframe.checked=!0),ot()}}]}function Nh(n){var t;for(const i of document.querySelectorAll(".qt-window.teaching-focus"))i.classList.remove("teaching-focus");const e=n==="all"?["orbital","projection","radial","angular"]:[n];for(const i of e)(t=document.querySelector(`[data-window-name="${i}"]`))==null||t.classList.add("teaching-focus")}function ol(n){p.explainProgressFill&&(p.explainProgressFill.style.width=`${Math.max(0,Math.min(1,n))*100}%`)}function Uh(){Ce.explanationTimer&&clearTimeout(Ce.explanationTimer),Ce.explanationFrame&&cancelAnimationFrame(Ce.explanationFrame),Ce.explanationTimer=null,Ce.explanationFrame=null}function Oh(){if(!Ce.explanationPlaying)return;const n=(performance.now()-Ce.explanationStartedAt)/Lh;ol(n),Ce.explanationFrame=requestAnimationFrame(Oh)}function Fh(){Uh(),Ce.explanationStartedAt=performance.now(),Oh(),Ce.explanationTimer=setTimeout(()=>{const n=Dh();if(Ce.explanationStep>=n.length-1){Ce.explanationPlaying=!1,p.explainPlayButton&&(p.explainPlayButton.textContent="播放"),ol(1);return}_s(Ce.explanationStep+1),Ce.explanationPlaying&&Fh()},Lh)}function _s(n,e={}){const t=Dh(),i=Math.max(0,Math.min(t.length-1,n)),r=t[i];Ce.explanationStep=i,p.explainStepBadge&&(p.explainStepBadge.textContent=`第 ${i+1} 步 / ${t.length} 步`),p.explainStepTitle&&(p.explainStepTitle.textContent=r.title),p.explainStepText&&(p.explainStepText.textContent=r.text),p.explainFormula&&(p.explainFormula.textContent=r.formula),p.explainObserveText&&(p.explainObserveText.textContent=r.observe),p.explainReasonText&&(p.explainReasonText.textContent=r.reason),p.explainHintText&&(p.explainHintText.textContent=`正在讲解 ${Bv()}。你可以暂停后旋转任意一个窗口，再继续播放。`),Nh(r.focus),ol(0),e.render!==!1&&r.action()}function Wv(){Ce.explanationPlaying=!0,p.explainPlayButton&&(p.explainPlayButton.textContent="暂停"),_s(Ce.explanationStep),Fh()}function Ya(){Ce.explanationPlaying=!1,p.explainPlayButton&&(p.explainPlayButton.textContent="播放"),Uh()}function qv(){Ce.explanationPlaying?Ya():Wv()}function Xv(){Ya(),Ce.explanationStep=0,_s(0)}function fd(n){Ya(),_s(Ce.explanationStep+n)}function da(n){n.cloud!=null&&p.cloud&&(p.cloud.checked=n.cloud),n.wireframe!=null&&p.wireframe&&(p.wireframe.checked=n.wireframe),n.smooth!=null&&p.smooth&&(p.smooth.checked=n.smooth),n.projection!=null&&p.projection&&(p.projection.checked=n.projection),n.node!=null&&(p.node&&(p.node.checked=n.node),p.radialNode&&(p.radialNode.checked=n.node),p.polarNode&&(p.polarNode.checked=n.node),p.longitudeNode&&(p.longitudeNode.checked=n.node)),n.box!=null&&p.box&&(p.box.checked=n.box),n.grid3d!=null&&p.grid3d&&(p.grid3d.checked=n.grid3d),ot()}function Yv(){return zt.find(n=>{var e;return n.value===((e=p.predictTarget)==null?void 0:e.value)})||Ce.challengeTarget||zt[0]}function $v(){const n=Yv(),e=qa(n.value),t=e.n-e.l-1,i=e.l,r=Math.max(60,100-t*4-i*3);p.scorePrompt&&(p.scorePrompt.textContent=`${n.label} 参考评分：${r} 分。检查点：径向节点 ${t} 个，角向节点 ${i} 个，相位正负分区清楚，方向与坐标轴一致。`),Xa(n.value)}function jv(){p.scorePrompt&&(p.scorePrompt.textContent="评分标准：节点数 30 分，相位颜色 25 分，空间方向 25 分，投影/截面对应关系 20 分。")}function Zv(){p.scorePrompt&&(p.scorePrompt.textContent="评分会根据当前目标轨道给出节点数、相位、方向和投影四项课堂反馈。")}function aa(n){n==="nodes"?(da({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!0}),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="节点诊断：观察径向节点数 n-l-1 与角向节点数 l 是否匹配。")):n==="phase"?(da({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!1}),p.positiveLobe&&(p.positiveLobe.checked=!0),p.negativeLobe&&(p.negativeLobe.checked=!0),ot(),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="相位诊断：紫色/青色两相表示波函数符号相反，不代表电荷正负。")):(da({cloud:!1,wireframe:!0,smooth:!1,projection:!0,node:!1,box:!0}),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="投影诊断：对照上方波函数曲面与底部等高线，判断节点线和相位区。"))}function pd(n){document.body.classList.toggle("tablet-mode",n),n?(ja("tile"),Kr("tablet"),Vn("平板课堂：已放大按钮和触控区域。")):Vn("已恢复普通课堂布局。"),sn()}function Kv(){const n=zt.find(e=>e.value===p.predictTarget.value)??zt[0];Gc(),Qe.strokes=[],Qe.currentStroke=null,Ur(),p.predictPrompt&&(p.predictPrompt.textContent=`请先在画板中预测 ${n.label} 的形状、相位和节面，再点击“显示验证”。`)}function Jv(){const n=zt.find(e=>e.value===p.predictTarget.value)??zt[0];Xa(n.value),p.predictPrompt&&(p.predictPrompt.textContent=`已显示 ${n.label}。请对照画板预测与四个窗口中的真实结果。`)}function Qv(){const n=Math.floor(Math.random()*zt.length);Ce.challengeTarget=zt[n],Xa(Ce.challengeTarget.value),setTimeout(()=>{p.viewerTitle&&(p.viewerTitle.textContent="原子轨道  ?")},120),p.challengePrompt&&(p.challengePrompt.textContent="观察当前四个窗口中的图像，选择你认为对应的轨道名称。")}function ey(){const n=Ce.challengeTarget||zt[0],e=zt.find(r=>r.value===p.challengeGuess.value),t=(e==null?void 0:e.value)===n.value;Ce.challengeTotal+=1,t&&(Ce.challengeCorrect+=1);const i=`（累计 ${Ce.challengeCorrect}/${Ce.challengeTotal}）`;p.viewerTitle&&(p.viewerTitle.textContent=`原子轨道  ${n.label}`),p.challengePrompt&&(p.challengePrompt.textContent=t?`回答正确：这是 ${n.label}。`:`还不对。你的答案是 ${(e==null?void 0:e.label)??""}，正确答案是 ${n.label}。`),Vn(`轨道配对 ${i}`)}function oa(n,e){var i,r;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();Ce.dragging=!0,Ce.dragPointerId=n.pointerId,Ce.dragWindow=e,Ce.dragOffsetX=n.clientX-t.left,Ce.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function ty(n){const e=Ce.dragWindow;if(!Ce.dragging||!e||Ce.dragPointerId!==null&&n.pointerId!==Ce.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-Ce.dragOffsetX)),s=Math.max(0,Math.min(i,n.clientY-Ce.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${s}px`,e.style.right="auto",e.style.bottom="auto"}function md(){Ce.dragging=!1,Ce.dragPointerId=null,Ce.dragWindow=null,us()}function zh(){D_(performance.now()*.001),Gn&&M_(performance.now()),Ae.update(),De.update(),pn.update(),Ft.update(),cv(),an.render(dt,je),_i.render(Dt,Je),Dr.render(Xn,bt),Nr.render(Yn,Ct);for(const n of Ni)n.controls.update(),n.renderer.render(n.scene,n.camera);requestAnimationFrame(zh)}function Bh(){const[n,e,t]=p.preset.value.split(",").map(Number);p.n.value=n,p.l.value=e,p.m.value=Math.abs(t),p.cosType.checked=t>=0,p.sinType.checked=t<0,Rt(),Or(),ot()}function hr(n,e){if(n.checked)for(const t of e)t&&t!==n&&(t.checked=!1)}function kh(n){n==="one"?(p.positiveColor.value="#ff7a00",p.negativeColor.value="#008fb8"):(p.positiveColor.value="#d83bd8",p.negativeColor.value="#00aeb8"),ot()}function ny(){for(const n of[p.cosType,p.sinType])n==null||n.addEventListener("change",()=>{hr(n,[p.cosType,p.sinType]),!p.cosType.checked&&!p.sinType.checked&&(p.cosType.checked=!0),ot()});for(const n of[p.wireframe,p.smooth])n==null||n.addEventListener("change",()=>{hr(n,[p.wireframe,p.smooth]),ot()});for(const n of[p.paletteOne,p.paletteTwo])n==null||n.addEventListener("change",()=>{hr(n,[p.paletteOne,p.paletteTwo]),!p.paletteOne.checked&&!p.paletteTwo.checked&&(p.paletteTwo.checked=!0),kh(p.paletteOne.checked?"one":"two")});for(const n of[p.xySlice,p.yzSlice,p.xzSlice])n==null||n.addEventListener("change",()=>{hr(n,[p.xySlice,p.yzSlice,p.xzSlice]),ot()});for(const n of[p.quarter,p.eighth,p.threeQuarter])n==null||n.addEventListener("change",()=>{hr(n,[p.quarter,p.eighth,p.threeQuarter]),ot()});for(const n of[p.radialR,p.radialR2,p.radialRdf])n==null||n.addEventListener("change",()=>{hr(n,[p.radialR,p.radialR2,p.radialRdf]),!p.radialR.checked&&!p.radialR2.checked&&!p.radialRdf.checked&&(p.radialRdf.checked=!0),Ca(),Ra(Rt(),nn())})}function $a(){an.render(dt,je);const n=document.createElement("a");n.download=`${p.orbitalName.textContent||"hao-orbital"}.png`,n.href=an.domElement.toDataURL("image/png"),n.click()}function Vn(n){p.statusText.textContent=n}function iy(){if(p.backgroundColor){(!document.body.contains(p.backgroundColor)||p.backgroundColor.closest(".hidden-control"))&&(document.body.appendChild(p.backgroundColor),Object.assign(p.backgroundColor.style,{position:"fixed",left:"-120px",top:"0",width:"1px",height:"1px",opacity:"0",pointerEvents:"none"}));try{typeof p.backgroundColor.showPicker=="function"?p.backgroundColor.showPicker():p.backgroundColor.click()}catch{p.backgroundColor.click()}}}function Ia(n){document.body.classList.toggle("app-fullscreen",n),Wi.hidden=!n,sn()}async function ry(){var e;$t(),Ia(!0);const n=(e=document.documentElement.requestFullscreen)==null?void 0:e.bind(document.documentElement);if(n)try{await n(),vr=!0}catch{vr=!1}}async function Vh(){if($t(),Ia(!1),document.fullscreenElement&&document.exitFullscreen)try{await document.exitFullscreen()}catch{}vr=!1}function sy(){document.body.classList.contains("app-fullscreen")||document.fullscreenElement?Vh():ry()}function $t(){p.menuPopup.hidden=!0,p.menuPopup.innerHTML="";for(const n of p.menuItems)n.classList.remove("active")}function ay(n){const e=n.dataset.menu,t={file:[["重新显示",ot],["导出图片",$a],["恢复预设值",()=>{Or(),ot()}]],window:[["全屏/退出全屏",sy],["画板",Gc],["盒子设置",Uv],["背景颜色",iy],["显示/隐藏盒子",oy],["显示/隐藏坐标轴",ll],["重置视角",()=>{el(),nv(Wt)}]],help:[["当前说明",()=>Vn("顶部按钮已连接到 Web 端功能")],["项目路径",()=>Vn("web/index.html")]],language:[["中文",()=>Vn("语言: 中文")],["English",()=>Vn("Language: English labels are partly available")]]}[e];$t(),n.classList.add("active");const i=n.getBoundingClientRect();p.menuPopup.style.left=`${i.left}px`,p.menuPopup.hidden=!1;for(const[r,s]of t){const o=document.createElement("button");o.type="button",o.textContent=r,o.addEventListener("click",()=>{$t(),s()}),p.menuPopup.appendChild(o)}}function cl(){try{const n=nn();console.log("[DEBUG] fastUpdateVisualOptions called. options.showAxis =",n.showAxis),ch(n.showAxis,Math.max(1,n.radius/4.5)),p.toolAxis&&p.toolAxis.classList.toggle("active",n.showAxis),Tr&&(Tr.visible=n.showBox),p.toolBox&&p.toolBox.classList.toggle("active",n.showBox),Oi&&(Oi.visible=n.showAxis),console.log("[DEBUG] fastUpdateVisualOptions completed successfully.")}catch(n){console.error("Error in fastUpdateVisualOptions:",n),alert("坐标轴更新失败: "+n.message+`
`+n.stack)}}function ll(){try{const n=p.toolAxis?p.toolAxis.classList.contains("active"):p.axis?p.axis.checked:!0;console.log("[DEBUG] toggleAxis called. Internal state was =",n),p.axis&&(p.axis.checked=!n),cl()}catch(n){alert("toggleAxis ERROR: "+n.message)}}function oy(){try{p.box&&(p.box.checked=!p.box.checked),cl()}catch(n){alert("toggleBox ERROR: "+n.message)}}function ja(n){var t,i;Qc({restoreLayout:!0});const e=n==="overlap";p.viewGrid.classList.toggle("overlap-layout",e),(t=p.toolTile)==null||t.classList.toggle("active",!e),(i=p.toolOverlap)==null||i.classList.toggle("active",e),sn()}function zr(n){const e=n.querySelector('[data-window-action="minimize"]'),t=n.querySelector('[data-window-action="maximize"]');e&&(e.textContent=n.classList.contains("minimized")?"□":"－"),t&&(t.textContent=n.classList.contains("maximized")?"❐":"□")}function cy(n){const e=n.closest(".qt-window");if(!e)return;const t=n.dataset.windowAction;t==="minimize"?(e.classList.toggle("minimized"),e.classList.contains("minimized")&&e.classList.remove("maximized")):t==="maximize"?(e.classList.remove("minimized"),e.classList.toggle("maximized")):t==="close"&&(e.classList.add("closed"),e.classList.remove("minimized","maximized"),e===p.animationWindow&&pauseGenerationAnimation()),zr(e),sn(),e===p.animationWindow&&!e.classList.contains("closed")&&requestAnimationFrame(()=>drawGenerationAnimation(0))}function ul(n){var s,o,a;const e=$n,t=Math.max(3,Wt),i=mi(e),r=mi(t,40);n==="xoy"?(je.up.set(0,1,0),Je.up.set(0,1,0),je.position.set(0,0,i),Je.position.set(0,0,r)):n==="yoz"?(je.up.set(0,1,0),Je.up.set(0,1,0),je.position.set(i,0,0),Je.position.set(r,0,0)):n==="xoz"&&(je.up.set(0,0,-1),Je.up.set(0,0,-1),je.position.set(0,i,0),Je.position.set(0,r,0)),je.lookAt(0,0,0),Je.lookAt(0,0,0),Va(e),Ha(t),Ae.target.set(0,0,0),De.target.set(0,0,0),Ae.update(),De.update(),(s=p.toolXOY)==null||s.classList.toggle("active",n==="xoy"),(o=p.toolYOZ)==null||o.classList.toggle("active",n==="yoz"),(a=p.toolXOZ)==null||a.classList.toggle("active",n==="xoz")}b_();for(const n of[p.n,p.l,p.m,p.z,p.iso,p.density,p.radius,p.opacity,p.mode,p.slice,p.node,p.axis,p.box,p.positiveColor,p.negativeColor,p.backgroundColor,p.desktopMatch,p.boxSizeDisplay,p.cloud,p.positiveLobe,p.negativeLobe,p.wireframe,p.smooth,p.projection,p.radialSection,p.radialSide,p.radialCurve,p.radialAxis,p.radialNode,p.polarNode,p.longitudeNode,p.grid3d,p.relationMode,p.syncRotation,p.scanRadius,p.scanTheta,p.scanPhi,p.scanSliceZ])n&&n.addEventListener("input",()=>{if(n===p.boxSizeDisplay&&I_(),Rt(),nn(),n===p.backgroundColor){jc(p.backgroundColor.value);return}if(n===p.relationMode){Ca(),Ra(Rt(),nn());return}if([p.syncRotation,p.scanRadius,p.scanTheta,p.scanPhi,p.scanSliceZ].includes(n)){if(p.relationMode.checked||(p.relationMode.checked=!0,Ca(),Ra(Rt(),nn())),xs(),n===p.scanSliceZ){const e=Rt(),t=nn();if(Jc(),rl(e,t),t.showProjection3d&&typeof Ht<"u"&&Ht){const i=Ht.children.find(s=>s.name==="integratedProjection3DGroup");i&&(Ht.remove(i),typeof En=="function"&&En(typeof dt<"u"?dt:null,i));const r=Rh(e,t);r.name="integratedProjection3DGroup",r.visible=!0,Ht.add(r)}}return}if(![p.wireframe,p.smooth].includes(n)){if([p.axis,p.box].includes(n)){cl();return}(n.type==="checkbox"||n.type==="color")&&ot(!1)}});for(const n of[p.n,p.l,p.m,p.z,p.desktopMatch])n.addEventListener("change",()=>{Or(),ot(!0)});p.preset.addEventListener("input",Bh);p.renderButton.addEventListener("click",()=>ot(!0));var gd;(gd=p.redrawProxyButton)==null||gd.addEventListener("click",()=>ot(!0));var xd;(xd=p.presetButton)==null||xd.addEventListener("click",()=>{Or(),ot(!0)});var _d;(_d=p.axisProxyButton)==null||_d.addEventListener("click",()=>{ll()});var vd;(vd=document.querySelector("#colorProxyButton"))==null||vd.addEventListener("click",()=>{p.paletteOne.checked=!p.paletteOne.checked,p.paletteTwo.checked=!p.paletteOne.checked,kh(p.paletteOne.checked?"one":"two")});p.resetCameraButton.addEventListener("click",()=>el());p.screenshotButton.addEventListener("click",$a);for(const n of document.querySelectorAll("[data-window-action]"))n.addEventListener("click",e=>{e.stopPropagation(),cy(n)});for(const n of p.menuItems)n.addEventListener("click",e=>{e.stopPropagation(),ay(n)});document.addEventListener("click",$t);p.menuPopup.addEventListener("click",n=>n.stopPropagation());Wi.addEventListener("click",Vh);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(vr=!0,Ia(!0)):vr&&(vr=!1,Ia(!1))});var yd;(yd=p.toolRender)==null||yd.addEventListener("click",()=>{$t(),ot()});var Md;(Md=p.toolSave)==null||Md.addEventListener("click",()=>{$t(),$a()});var Sd;(Sd=p.toolTile)==null||Sd.addEventListener("click",()=>{$t(),ja("tile")});var wd;(wd=p.toolOverlap)==null||wd.addEventListener("click",()=>{$t(),ja("overlap")});var Ed;(Ed=p.toolAxis)==null||Ed.addEventListener("click",()=>{console.log("[DEBUG] User clicked #toolAxis button."),$t(),ll()});var bd;(bd=p.toolXOY)==null||bd.addEventListener("click",()=>{$t(),ul("xoy")});var Ad;(Ad=p.toolYOZ)==null||Ad.addEventListener("click",()=>{$t(),ul("yoz")});var Td;(Td=p.toolXOZ)==null||Td.addEventListener("click",()=>{$t(),ul("xoz")});setTimeout(()=>{Jx(),an.domElement.addEventListener("click",Ev),window.addEventListener("resize",Pa),jc(),ny(),r_(),ly(),R_(),Pa(),ja("tile"),Or(),el(),ot(!0),zh()},0);function ly(){var n,e,t,i,r,s,o,a,c,l,u,h,d,f,x,v,g,m,y,_,w,A,E,b,T,S,M,P,D,U,k,B,F,X,H,ee,re,ie,K,fe,W,J,le;if(p.sketchCanvas){(n=p.openActivityButton)==null||n.addEventListener("click",()=>Kr("predict")),(e=p.openSketchButton)==null||e.addEventListener("click",Gc),(t=p.openPredictButton)==null||t.addEventListener("click",()=>Kr("predict")),(i=p.openChallengeButton)==null||i.addEventListener("click",()=>Kr("challenge"));for(const N of p.activityModeButtons??[])N.addEventListener("click",()=>Kr(N.dataset.activityMode));(r=p.startPredictButton)==null||r.addEventListener("click",Kv),(s=p.verifyPredictButton)==null||s.addEventListener("click",Jv),(o=p.scoreCurrentButton)==null||o.addEventListener("click",$v),(a=p.scoreShowRubricButton)==null||a.addEventListener("click",jv),(c=p.scoreResetButton)==null||c.addEventListener("click",Zv),(l=p.diagnoseNodesButton)==null||l.addEventListener("click",()=>aa("nodes")),(u=p.diagnosePhaseButton)==null||u.addEventListener("click",()=>aa("phase")),(h=p.diagnoseProjectionButton)==null||h.addEventListener("click",()=>aa("projection"));for(const N of document.querySelectorAll("[data-diagnosis]"))N.addEventListener("click",()=>aa(N.dataset.diagnosis));(d=p.nodeRevealButton)==null||d.addEventListener("click",()=>{p.radialNode&&!p.radialNode.disabled&&(p.radialNode.checked=!0),p.polarNode&&!p.polarNode.disabled&&(p.polarNode.checked=!0),p.longitudeNode.checked=!0,p.node.checked=!0,ot()}),(f=p.nodeHideButton)==null||f.addEventListener("click",()=>{p.radialNode&&(p.radialNode.checked=!1),p.polarNode&&(p.polarNode.checked=!1),p.longitudeNode.checked=!1,p.node.checked=!1,ot()}),(x=p.compareApplyButton)==null||x.addEventListener("click",()=>{Ph()}),(v=p.compareA)==null||v.addEventListener("change",()=>{Mc("a")}),(g=p.compareB)==null||g.addEventListener("change",()=>{Mc("b")}),(m=p.compareLoadAButton)==null||m.addEventListener("click",()=>{var N;(N=p.compareA)!=null&&N.value&&dd(p.compareA.value,"a")}),(y=p.compareLoadBButton)==null||y.addEventListener("click",()=>{var N;(N=p.compareB)!=null&&N.value&&dd(p.compareB.value,"b")}),(_=p.newChallengeButton)==null||_.addEventListener("click",Qv),(w=p.revealChallengeButton)==null||w.addEventListener("click",ey),(A=p.explainRestartButton)==null||A.addEventListener("click",Xv),(E=p.explainPrevButton)==null||E.addEventListener("click",()=>fd(-1)),(b=p.explainPlayButton)==null||b.addEventListener("click",qv),(T=p.explainNextButton)==null||T.addEventListener("click",()=>fd(1)),(S=p.tabletLargeButton)==null||S.addEventListener("click",()=>pd(!0)),(M=p.tabletRestoreButton)==null||M.addEventListener("click",()=>pd(!1)),(P=p.tabletScreenshotButton)==null||P.addEventListener("click",$a),(U=(D=p.boxWindow)==null?void 0:D.querySelector(".window-title"))==null||U.addEventListener("pointerdown",N=>oa(N,p.boxWindow)),(B=(k=p.activityWindow)==null?void 0:k.querySelector(".window-title"))==null||B.addEventListener("pointerdown",N=>oa(N,p.activityWindow)),(X=(F=p.formulaWindow)==null?void 0:F.querySelector(".window-title"))==null||X.addEventListener("pointerdown",N=>oa(N,p.formulaWindow)),(ee=(H=p.animationWindow)==null?void 0:H.querySelector(".window-title"))==null||ee.addEventListener("pointerdown",N=>oa(N,p.animationWindow)),window.addEventListener("pointermove",ty),window.addEventListener("pointerup",md),window.addEventListener("pointercancel",md),window.addEventListener("pointerup",jx),window.addEventListener("pointercancel",us),window.addEventListener("blur",us),(re=p.annotationModeButton)==null||re.addEventListener("click",Cv),(ie=p.openAnimationButton)==null||ie.addEventListener("click",dh),(K=document.getElementById("cinematicPlayBtn"))==null||K.addEventListener("click",y_),(fe=document.getElementById("cinematicExportBtn"))==null||fe.addEventListener("click",S_),(W=document.getElementById("cinematicExitBtn"))==null||W.addEventListener("click",hh),(J=p.openFormulaButton)==null||J.addEventListener("click",openFormulaWindow),(le=p.annotationClearButton)==null||le.addEventListener("click",Iv);for(const N of document.querySelectorAll("[data-annotation-add]"))N.addEventListener("click",()=>Lv(N.dataset.annotationAdd));for(const N of document.querySelectorAll(".annotation-layer"))N.addEventListener("pointerdown",Dv);window.addEventListener("pointermove",Nv),window.addEventListener("pointerup",ud),window.addEventListener("pointercancel",ud)}}
