(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="165",lo={ROTATE:0,DOLLY:1,PAN:2},Qd=0,_c=1,ef=2,Nh=1,tf=2,jn=3,Ei=0,jt=1,ot=2,yi=0,Ar=1,ya=2,xc=3,Mc=4,nf=5,Vi=100,rf=101,af=102,sf=103,of=104,lf=200,cf=201,uf=202,hf=203,il=204,rl=205,df=206,ff=207,pf=208,mf=209,gf=210,vf=211,_f=212,xf=213,Mf=214,yf=0,Sf=1,bf=2,bs=3,Ef=4,wf=5,Af=6,Tf=7,ks=0,Cf=1,Rf=2,Si=0,Pf=1,Lf=2,If=3,Hr=4,Df=5,Nf=6,Uf=7,Uh=300,Dr=301,Nr=302,al=303,sl=304,Vs=306,ol=1e3,Wi=1001,ll=1002,cn=1003,Ff=1004,Ua=1005,yn=1006,co=1007,qi=1008,wi=1009,Of=1010,zf=1011,Es=1012,Fh=1013,Ur=1014,xi=1015,Hs=1016,Oh=1017,zh=1018,Fr=1020,Bf=35902,kf=1021,Vf=1022,Dn=1023,Hf=1024,Gf=1025,Tr=1026,Or=1027,Wf=1028,Bh=1029,qf=1030,kh=1031,Vh=1033,uo=33776,ho=33777,fo=33778,po=33779,yc=35840,Sc=35841,bc=35842,Ec=35843,wc=36196,Ac=37492,Tc=37496,Cc=37808,Rc=37809,Pc=37810,Lc=37811,Ic=37812,Dc=37813,Nc=37814,Uc=37815,Fc=37816,Oc=37817,zc=37818,Bc=37819,kc=37820,Vc=37821,mo=36492,Hc=36494,Gc=36495,Xf=36283,Wc=36284,qc=36285,Xc=36286,Yf=3200,$f=3201,Gs=0,jf=1,mi="",Ft="srgb",Ti="srgb-linear",Rl="display-p3",Ws="display-p3-linear",ws="linear",ht="srgb",As="rec709",Ts="p3",ir=7680,Yc=519,Zf=512,Kf=513,Jf=514,Hh=515,Qf=516,ep=517,tp=518,np=519,cl=35044,Fa=35048,$c="300 es",Kn=2e3,Cs=2001;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const Cr=Math.PI/180,Sa=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Pl(n,e){return(n%e+e)%e}function ip(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function rp(n,e,t){return n!==e?(t-n)/(e-n):0}function ua(n,e,t){return(1-t)*n+t*e}function ap(n,e,t,i){return ua(n,e,1-Math.exp(-t*i))}function sp(n,e=1){return e-Math.abs(Pl(n,e*2)-e)}function op(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function lp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function up(n,e){return n+Math.random()*(e-n)}function hp(n){return n*(.5-Math.random())}function dp(n){n!==void 0&&(jc=n);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fp(n){return n*Cr}function pp(n){return n*Sa}function mp(n){return(n&n-1)===0&&n!==0}function gp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _p(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+i)/2),u=o((e+i)/2),h=a((e-i)/2),d=o((e-i)/2),f=a((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(s*u,l*h,l*d,s*c);break;case"YZY":n.set(l*d,s*u,l*h,s*c);break;case"ZXZ":n.set(l*h,l*d,s*u,s*c);break;case"XZX":n.set(s*u,l*v,l*f,s*c);break;case"YXY":n.set(l*f,s*u,l*v,s*c);break;case"ZYZ":n.set(l*v,l*f,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zc={DEG2RAD:Cr,RAD2DEG:Sa,generateUUID:ti,clamp:Rt,euclideanModulo:Pl,mapLinear:ip,inverseLerp:rp,lerp:ua,damp:ap,pingpong:sp,smoothstep:op,smootherstep:lp,randInt:cp,randFloat:up,randFloatSpread:hp,seededRandom:dp,degToRad:fp,radToDeg:pp,isPowerOfTwo:mp,ceilPowerOfTwo:gp,floorPowerOfTwo:vp,setQuaternionFromProperEuler:_p,normalize:tt,denormalize:Sn};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,a,o,s,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],v=i[8],_=r[0],g=r[3],m=r[6],M=r[1],x=r[4],y=r[7],C=r[2],E=r[5],w=r[8];return a[0]=o*_+s*M+l*C,a[3]=o*g+s*x+l*E,a[6]=o*m+s*y+l*w,a[1]=c*_+u*M+h*C,a[4]=c*g+u*x+h*E,a[7]=c*m+u*y+h*w,a[2]=d*_+f*M+v*C,a[5]=d*g+f*x+v*E,a[8]=d*m+f*y+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*o-s*c,d=s*l-u*a,f=c*a-o*l,v=t*h+i*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(s*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*a-s*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new Ge;function Gh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xp(){const n=Rs("canvas");return n.style.display="block",n}const Kc={};function Ll(n){n in Kc||(Kc[n]=!0,console.warn(n))}function Mp(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Jc=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qc=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[Ti]:{transfer:ws,primaries:As,toReference:n=>n,fromReference:n=>n},[Ft]:{transfer:ht,primaries:As,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ws]:{transfer:ws,primaries:Ts,toReference:n=>n.applyMatrix3(Qc),fromReference:n=>n.applyMatrix3(Jc)},[Rl]:{transfer:ht,primaries:Ts,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Qc),fromReference:n=>n.applyMatrix3(Jc).convertLinearToSRGB()}},yp=new Set([Ti,Ws]),nt={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Oa[e].toReference,r=Oa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Oa[n].primaries},getTransfer:function(n){return n===mi?ws:Oa[n].transfer}};function Rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rr;class Sp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Rs("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Rr(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rr(t[i]/255)*255):t[i]=Rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bp=0;class Wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(_o(r[o].image)):a.push(_o(r[o]))}else a=_o(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function _o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ep=0;class Xt extends Zi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=Wi,r=Wi,a=yn,o=qi,s=Dn,l=wi,c=Xt.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ti(),this.name="",this.source=new Wh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ol:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ol:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Uh;Xt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],v=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,C=(m+1)/2,E=(u+d)/4,w=(h+_)/4,R=(v+g)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(x),r=E/i,a=w/i):y>C?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=E/r,a=R/r):C<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(C),i=w/a,r=R/a),this.set(i,r,a,t),this}let M=Math.sqrt((g-v)*(g-v)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-v)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wp extends Zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends wp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class qh extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=a[o+0],f=a[o+1],v=a[o+2],_=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==v){let g=1-s;const m=l*d+c*f+u*v+h*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),E=Math.atan2(C,m*M);g=Math.sin(g*E)/C,s=Math.sin(s*E)/C}const y=s*M;if(l=l*g+d*y,c=c*g+f*y,u=u*g+v*y,h=h*g+_*y,g===1-s){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=a[o],d=a[o+1],f=a[o+2],v=a[o+3];return e[t]=s*v+u*h+l*f-c*d,e[t+1]=l*v+u*d+c*h-s*f,e[t+2]=c*v+u*f+s*d-l*h,e[t+3]=u*v-s*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),h=s(a/2),d=l(i/2),f=l(r/2),v=l(a/2);switch(o){case"XYZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"YXZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"ZXY":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"ZYX":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"YZX":this._x=d*u*h+c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h-d*f*v;break;case"XZY":this._x=d*u*h-c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+s+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(o-r)*f}else if(i>s&&i>h){const f=2*Math.sqrt(1+i-s-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(a+c)/f}else if(s>h){const f=2*Math.sqrt(1+s-i-h);this._w=(a-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-s);this._w=(o-r)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),u=2*(s*t-a*r),h=2*(a*i-o*t);return this.x=t+l*c+o*h-s*u,this.y=i+l*u+s*c-a*h,this.z=r+l*h+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new P,eu=new Gr;class hn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(a,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Ba.subVectors(this.max,Jr),ar.subVectors(e.a,Jr),sr.subVectors(e.b,Jr),or.subVectors(e.c,Jr),oi.subVectors(sr,ar),li.subVectors(or,sr),Ni.subVectors(ar,or);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ni.z,Ni.y,oi.z,0,-oi.x,li.z,0,-li.x,Ni.z,0,-Ni.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ni.y,Ni.x,0];return!Mo(t,ar,sr,or,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,ar,sr,or,Ba))?!1:(ka.crossVectors(oi,li),t=[ka.x,ka.y,ka.z],Mo(t,ar,sr,or,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new P,new P,new P,new P,new P,new P,new P,new P],gn=new P,za=new hn,ar=new P,sr=new P,or=new P,oi=new P,li=new P,Ni=new P,Jr=new P,Ba=new P,ka=new P,Ui=new P;function Mo(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Ui.fromArray(n,a);const s=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Tp=new hn,Qr=new P,yo=new P;class Ci{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(yo)),this.expandByPoint(Qr.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new P,So=new P,Va=new P,ci=new P,bo=new P,Ha=new P,Eo=new P;class qs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){So.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(So);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Va),s=ci.dot(this.direction),l=-ci.dot(Va),c=ci.lengthSq(),u=Math.abs(1-o*o);let h,d,f,v;if(u>0)if(h=o*l-s,d=o*s-l,v=a*u,h>=0)if(d>=-v)if(d<=v){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*s)+d*(o*h+d+2*l)+c}else d=a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;else d=-a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*a+s)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(h=Math.max(0,-(o*a+s)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c);else d=o>0?-a:a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(So).addScaledVector(Va,d),f}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,a){bo.subVectors(t,e),Ha.subVectors(i,e),Eo.crossVectors(bo,Ha);let o=this.direction.dot(Eo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=s*this.direction.dot(Ha.crossVectors(ci,Ha));if(l<0)return null;const c=s*this.direction.dot(bo.cross(ci));if(c<0||l+c>o)return null;const u=-s*ci.dot(Eo);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,a,o,s,l,c,u,h,d,f,v,_,g){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,u,h,d,f,v,_,g)}set(e,t,i,r,a,o,s,l,c,u,h,d,f,v,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=a,m[5]=o,m[9]=s,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=v,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),a=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=o*u,f=o*h,v=s*u,_=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+v*c,t[5]=d-_*c,t[9]=-s*l,t[2]=_-d*c,t[6]=v+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,v=c*u,_=c*h;t[0]=d+_*s,t[4]=v*s-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=f*s-v,t[6]=_+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,v=c*u,_=c*h;t[0]=d-_*s,t[4]=-o*h,t[8]=v+f*s,t[1]=f+v*s,t[5]=o*u,t[9]=_-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,v=s*u,_=s*h;t[0]=l*u,t[4]=v*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-v,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,v=s*l,_=s*c;t[0]=l*u,t[4]=_-d*h,t[8]=v*h+f,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=f*h+v,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,v=s*l,_=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=s*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cp,e,Rp)}lookAt(e,t,i){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ui.crossVectors(i,Qt),ui.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ui.crossVectors(i,Qt)),ui.normalize(),Ga.crossVectors(Qt,ui),r[0]=ui.x,r[4]=Ga.x,r[8]=Qt.x,r[1]=ui.y,r[5]=Ga.y,r[9]=Qt.y,r[2]=ui.z,r[6]=Ga.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],v=i[2],_=i[6],g=i[10],m=i[14],M=i[3],x=i[7],y=i[11],C=i[15],E=r[0],w=r[4],R=r[8],b=r[12],S=r[1],L=r[5],N=r[9],I=r[13],F=r[2],k=r[6],V=r[10],X=r[14],G=r[3],ie=r[7],ne=r[11],se=r[15];return a[0]=o*E+s*S+l*F+c*G,a[4]=o*w+s*L+l*k+c*ie,a[8]=o*R+s*N+l*V+c*ne,a[12]=o*b+s*I+l*X+c*se,a[1]=u*E+h*S+d*F+f*G,a[5]=u*w+h*L+d*k+f*ie,a[9]=u*R+h*N+d*V+f*ne,a[13]=u*b+h*I+d*X+f*se,a[2]=v*E+_*S+g*F+m*G,a[6]=v*w+_*L+g*k+m*ie,a[10]=v*R+_*N+g*V+m*ne,a[14]=v*b+_*I+g*X+m*se,a[3]=M*E+x*S+y*F+C*G,a[7]=M*w+x*L+y*k+C*ie,a[11]=M*R+x*N+y*V+C*ne,a[15]=M*b+x*I+y*X+C*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],v=e[3],_=e[7],g=e[11],m=e[15];return v*(+a*l*h-r*c*h-a*s*d+i*c*d+r*s*f-i*l*f)+_*(+t*l*f-t*c*d+a*o*d-r*o*f+r*c*u-a*l*u)+g*(+t*c*h-t*s*f-a*o*h+i*o*f+a*s*u-i*c*u)+m*(-r*s*u-t*l*h+t*s*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],v=e[12],_=e[13],g=e[14],m=e[15],M=h*g*c-_*d*c+_*l*f-s*g*f-h*l*m+s*d*m,x=v*d*c-u*g*c-v*l*f+o*g*f+u*l*m-o*d*m,y=u*_*c-v*h*c+v*s*f-o*_*f-u*s*m+o*h*m,C=v*h*l-u*_*l-v*s*d+o*_*d+u*s*g-o*h*g,E=t*M+i*x+r*y+a*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=M*w,e[1]=(_*d*a-h*g*a-_*r*f+i*g*f+h*r*m-i*d*m)*w,e[2]=(s*g*a-_*l*a+_*r*c-i*g*c-s*r*m+i*l*m)*w,e[3]=(h*l*a-s*d*a-h*r*c+i*d*c+s*r*f-i*l*f)*w,e[4]=x*w,e[5]=(u*g*a-v*d*a+v*r*f-t*g*f-u*r*m+t*d*m)*w,e[6]=(v*l*a-o*g*a-v*r*c+t*g*c+o*r*m-t*l*m)*w,e[7]=(o*d*a-u*l*a+u*r*c-t*d*c-o*r*f+t*l*f)*w,e[8]=y*w,e[9]=(v*h*a-u*_*a-v*i*f+t*_*f+u*i*m-t*h*m)*w,e[10]=(o*_*a-v*s*a+v*i*c-t*_*c-o*i*m+t*s*m)*w,e[11]=(u*s*a-o*h*a-u*i*c+t*h*c+o*i*f-t*s*f)*w,e[12]=C*w,e[13]=(u*_*r-v*h*r+v*i*d-t*_*d-u*i*g+t*h*g)*w,e[14]=(v*s*r-o*_*r-v*i*l+t*_*l+o*i*g-t*s*g)*w,e[15]=(o*h*r-u*s*r+u*i*l-t*h*l-o*i*d+t*s*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,h=s+s,d=a*c,f=a*u,v=a*h,_=o*u,g=o*h,m=s*h,M=l*c,x=l*u,y=l*h,C=i.x,E=i.y,w=i.z;return r[0]=(1-(_+m))*C,r[1]=(f+y)*C,r[2]=(v-x)*C,r[3]=0,r[4]=(f-y)*E,r[5]=(1-(d+m))*E,r[6]=(g+M)*E,r[7]=0,r[8]=(v+x)*w,r[9]=(g-M)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=lr.set(r[0],r[1],r[2]).length();const o=lr.set(r[4],r[5],r[6]).length(),s=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const c=1/a,u=1/o,h=1/s;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Kn){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,v;if(s===Kn)f=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(s===Cs)f=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Kn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-a),d=(t+e)*c,f=(i+r)*u;let v,_;if(s===Kn)v=(o+a)*h,_=-2*h;else if(s===Cs)v=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lr=new P,vn=new ct,Cp=new P(0,0,0),Rp=new P(1,1,1),ui=new P,Ga=new P,Qt=new P,tu=new ct,nu=new Gr;class dn{constructor(e=0,t=0,i=0,r=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pp=0;const iu=new P,cr=new Gr,Xn=new ct,Wa=new P,ea=new P,Lp=new P,Ip=new Gr,ru=new P(1,0,0),au=new P(0,1,0),su=new P(0,0,1),ou={type:"added"},Dp={type:"removed"},ur={type:"childadded",child:null},wo={type:"childremoved",child:null};class Mt extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new P,t=new dn,i=new Gr,r=new P(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ge}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(ea,Wa,this.up):Xn.lookAt(Wa,ea,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(Xn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ou),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dp),wo.child=e,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ou),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,Lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Ip,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),v=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new P(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new P,Yn=new P,Ao=new P,$n=new P,hr=new P,dr=new P,lu=new P,To=new P,Co=new P,Ro=new P;class ln{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){_n.subVectors(r,t),Yn.subVectors(i,t),Ao.subVectors(e,t);const o=_n.dot(_n),s=_n.dot(Yn),l=_n.dot(Ao),c=Yn.dot(Yn),u=Yn.dot(Ao),h=o*c-s*s;if(h===0)return a.set(0,0,0),null;const d=1/h,f=(c*l-s*u)*d,v=(o*u-s*l)*d;return a.set(1-f-v,v,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(s,$n.z),l)}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Yn.subVectors(e,t),_n.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),_n.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;hr.subVectors(r,i),dr.subVectors(a,i),To.subVectors(e,i);const l=hr.dot(To),c=dr.dot(To);if(l<=0&&c<=0)return t.copy(i);Co.subVectors(e,r);const u=hr.dot(Co),h=dr.dot(Co);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hr,o);Ro.subVectors(e,a);const f=hr.dot(Ro),v=dr.dot(Ro);if(v>=0&&f<=v)return t.copy(a);const _=f*c-l*v;if(_<=0&&c>=0&&v<=0)return s=c/(c-v),t.copy(i).addScaledVector(dr,s);const g=u*v-f*h;if(g<=0&&h-u>=0&&f-v>=0)return lu.subVectors(a,r),s=(h-u)/(h-u+(f-v)),t.copy(r).addScaledVector(lu,s);const m=1/(g+_+d);return o=_*m,s=d*m,t.copy(i).addScaledVector(hr,o).addScaledVector(dr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Po(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Me{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Pl(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Po(o,a,e+1/3),this.g=Po(o,a,e),this.b=Po(o,a,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ft){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=Xh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return nt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Rt(Nt.r*255,0,255))*65536+Math.round(Rt(Nt.g*255,0,255))*256+Math.round(Rt(Nt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,a=Nt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=u<=.5?h/(o+s):h/(2-o-s),o){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Ft){nt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(qa);const i=ua(hi.h,qa.h,t),r=ua(hi.s,qa.s,t),a=ua(hi.l,qa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Me;Me.NAMES=Xh;let Np=0;class kn extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Ar,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=rl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==il&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nn extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new P,Xa=new ge;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ll("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),a=tt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}}class Yh extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $h extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Be extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Up=0;const sn=new ct,Lo=new Mt,fr=new P,en=new hn,ta=new hn,At=new P;class $e extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gh(e)?$h:Yh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ge().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Be(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];en.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];ta.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(en.min,ta.min),en.expandByPoint(At),At.addVectors(en.max,ta.max),en.expandByPoint(At)):(en.expandByPoint(ta.min),en.expandByPoint(ta.max))}en.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)At.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(At));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)At.fromBufferAttribute(s,c),l&&(fr.fromBufferAttribute(e,c),At.add(fr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let R=0;R<i.count;R++)s[R]=new P,l[R]=new P;const c=new P,u=new P,h=new P,d=new ge,f=new ge,v=new ge,_=new P,g=new P;function m(R,b,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(a,R),f.fromBufferAttribute(a,b),v.fromBufferAttribute(a,S),u.sub(c),h.sub(c),f.sub(d),v.sub(d);const L=1/(f.x*v.y-v.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(L),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(L),s[R].add(_),s[b].add(_),s[S].add(_),l[R].add(g),l[b].add(g),l[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,b=M.length;R<b;++R){const S=M[R],L=S.start,N=S.count;for(let I=L,F=L+N;I<F;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new P,y=new P,C=new P,E=new P;function w(R){C.fromBufferAttribute(r,R),E.copy(C);const b=s[R];x.copy(b),x.sub(C.multiplyScalar(C.dot(b))).normalize(),y.crossVectors(E,b);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,b=M.length;R<b;++R){const S=M[R],L=S.start,N=S.count;for(let I=L,F=L+N;I<F;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new P,a=new P,o=new P,s=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),s.add(u),l.add(u),c.add(u),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,d=new c.constructor(l.length*u);let f=0,v=0;for(let _=0,g=l.length;_<g;_++){s.isInterleavedBufferAttribute?f=l[_]*s.data.stride+s.offset:f=l[_]*u;for(let m=0;m<u;m++)d[v++]=c[f++]}return new Ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $e,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new ct,Fi=new qs,Ya=new Ci,uu=new P,pr=new P,mr=new P,gr=new P,Io=new P,$a=new P,ja=new ge,Za=new ge,Ka=new ge,hu=new P,du=new P,fu=new P,Ja=new P,Qa=new P;class Ye extends Mt{constructor(e=new $e,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){$a.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],h=a[l];u!==0&&(Io.fromBufferAttribute(h,e),o?$a.addScaledVector(Io,u):$a.addScaledVector(Io.sub(t),u))}t.add($a)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(a),Fi.copy(e.ray).recast(e.near),!(Ya.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Ya,uu)===null||Fi.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(cu.copy(a).invert(),Fi.copy(e.ray).applyMatrix4(cu),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const g=d[v],m=o[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(s.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,C=x;y<C;y+=3){const E=s.getX(y),w=s.getX(y+1),R=s.getX(y+2);r=es(this,m,e,i,c,u,h,E,w,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),_=Math.min(s.count,f.start+f.count);for(let g=v,m=_;g<m;g+=3){const M=s.getX(g),x=s.getX(g+1),y=s.getX(g+2);r=es(this,o,e,i,c,u,h,M,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const g=d[v],m=o[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,C=x;y<C;y+=3){const E=y,w=y+1,R=y+2;r=es(this,m,e,i,c,u,h,E,w,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=v,m=_;g<m;g+=3){const M=g,x=g+1,y=g+2;r=es(this,o,e,i,c,u,h,M,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Fp(n,e,t,i,r,a,o,s){let l;if(e.side===jt?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Ei,s),l===null)return null;Qa.copy(s),Qa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:n}}function es(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,pr),n.getVertexPosition(l,mr),n.getVertexPosition(c,gr);const u=Fp(n,e,t,i,pr,mr,gr,Ja);if(u){r&&(ja.fromBufferAttribute(r,s),Za.fromBufferAttribute(r,l),Ka.fromBufferAttribute(r,c),u.uv=ln.getInterpolation(Ja,pr,mr,gr,ja,Za,Ka,new ge)),a&&(ja.fromBufferAttribute(a,s),Za.fromBufferAttribute(a,l),Ka.fromBufferAttribute(a,c),u.uv1=ln.getInterpolation(Ja,pr,mr,gr,ja,Za,Ka,new ge)),o&&(hu.fromBufferAttribute(o,s),du.fromBufferAttribute(o,l),fu.fromBufferAttribute(o,c),u.normal=ln.getInterpolation(Ja,pr,mr,gr,hu,du,fu,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new P,materialIndex:0};ln.getNormal(pr,mr,gr,h.normal),u.face=h}return u}class Wr extends $e{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;v("z","y","x",-1,-1,i,t,e,o,a,0),v("z","y","x",1,-1,i,t,-e,o,a,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(h,2));function v(_,g,m,M,x,y,C,E,w,R,b){const S=y/w,L=C/R,N=y/2,I=C/2,F=E/2,k=w+1,V=R+1;let X=0,G=0;const ie=new P;for(let ne=0;ne<V;ne++){const se=ne*L-I;for(let Q=0;Q<k;Q++){const me=Q*S-N;ie[_]=me*M,ie[g]=se*x,ie[m]=F,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[g]=0,ie[m]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Q/w),h.push(1-ne/R),X+=1}}for(let ne=0;ne<R;ne++)for(let se=0;se<w;se++){const Q=d+se+k*ne,me=d+se+k*(ne+1),W=d+(se+1)+k*(ne+1),K=d+(se+1)+k*ne;l.push(Q,me,K),l.push(me,W,K),G+=6}s.addGroup(f,G,b),f+=G,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=zr(n[t]);for(const r in i)e[r]=i[r]}return e}function Op(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const zp={clone:zr,merge:Gt};var Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=Op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zh extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new P,pu=new ge,mu=new ge;class Mn extends Zh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,_r=1;class Vp extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(vr,_r,e,t);r.layers=this.layers,this.add(r);const a=new Mn(vr,_r,e,t);a.layers=this.layers,this.add(a);const o=new Mn(vr,_r,e,t);o.layers=this.layers,this.add(o);const s=new Mn(vr,_r,e,t);s.layers=this.layers,this.add(s);const l=new Mn(vr,_r,e,t);l.layers=this.layers,this.add(l);const c=new Mn(vr,_r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Kh extends Xt{constructor(e,t,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hp extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wr(5,5,5),a=new ni({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:yi});a.uniforms.tEquirect.value=t;const o=new Ye(r,a),s=t.minFilter;return t.minFilter===qi&&(t.minFilter=yn),new Vp(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const Do=new P,Gp=new P,Wp=new Ge;class it{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Do.subVectors(i,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Do),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wp.getNormalMatrix(e),r=this.coplanarPoint(Do).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Ci,ts=new P;class Dl{constructor(e=new it,t=new it,i=new it,r=new it,a=new it,o=new it){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],v=r[9],_=r[10],g=r[11],m=r[12],M=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-a,d-c,g-f,y-m).normalize(),i[1].setComponents(l+a,d+c,g+f,y+m).normalize(),i[2].setComponents(l+o,d+u,g+v,y+M).normalize(),i[3].setComponents(l-o,d-u,g-v,y-M).normalize(),i[4].setComponents(l-s,d-h,g-_,y-x).normalize(),t===Kn)i[5].setComponents(l+s,d+h,g+_,y+x).normalize();else if(t===Cs)i[5].setComponents(s,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ts.x=r.normal.x>0?e.max.x:e.min.x,ts.y=r.normal.y>0?e.max.y:e.min.y,ts.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jh(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function qp(n){const e=new WeakMap;function t(s,l){const c=s.array,u=s.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),s.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:h}}function i(s,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,s),h.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let f=0,v=d.length;f<v;f++){const _=d[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(n.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:r,remove:a,update:o}}class Xs extends $e{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,h=e/s,d=t/l,f=[],v=[],_=[],g=[];for(let m=0;m<u;m++){const M=m*d-o;for(let x=0;x<c;x++){const y=x*h-a;v.push(y,-M,0),_.push(0,0,1),g.push(x/s),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<s;M++){const x=M+c*m,y=M+c*(m+1),C=M+1+c*(m+1),E=M+1+c*m;f.push(x,y,E),f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new Be(v,3)),this.setAttribute("normal",new Be(_,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xp=`#ifdef USE_ALPHAHASH
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vm=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`
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
#endif`,wm=`#ifdef USE_ENVMAP
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
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,a0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
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
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
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
#endif`,v0=`#ifdef USE_CLEARCOATMAP
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
#endif`,x0=`#ifdef OPAQUE
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
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
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
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
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
}`,ag=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,dg=`#define NORMAL
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
}`,vg=`#define TOON
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
}`,xg=`uniform float size;
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
}`,yg=`#include <common>
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
}`,bg=`uniform float rotation;
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
}`,He={alphahash_fragment:Xp,alphahash_pars_fragment:Yp,alphamap_fragment:$p,alphamap_pars_fragment:jp,alphatest_fragment:Zp,alphatest_pars_fragment:Kp,aomap_fragment:Jp,aomap_pars_fragment:Qp,batching_pars_vertex:em,batching_vertex:tm,begin_vertex:nm,beginnormal_vertex:im,bsdfs:rm,iridescence_fragment:am,bumpmap_pars_fragment:sm,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:um,color_fragment:hm,color_pars_fragment:dm,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:vm,displacementmap_pars_vertex:_m,displacementmap_vertex:xm,emissivemap_fragment:Mm,emissivemap_pars_fragment:ym,colorspace_fragment:Sm,colorspace_pars_fragment:bm,envmap_fragment:Em,envmap_common_pars_fragment:wm,envmap_pars_fragment:Am,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:zm,envmap_vertex:Cm,fog_vertex:Rm,fog_pars_vertex:Pm,fog_fragment:Lm,fog_pars_fragment:Im,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Nm,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Fm,lights_pars_begin:Om,lights_toon_fragment:Bm,lights_toon_pars_fragment:km,lights_phong_fragment:Vm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Wm,lights_fragment_begin:qm,lights_fragment_maps:Xm,lights_fragment_end:Ym,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Km,map_fragment:Jm,map_pars_fragment:Qm,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:r0,morphcolor_vertex:a0,morphnormal_vertex:s0,morphtarget_pars_vertex:o0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:u0,normal_pars_fragment:h0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:_0,opaque_fragment:x0,packing:M0,premultiplied_alpha_fragment:y0,project_vertex:S0,dithering_fragment:b0,dithering_pars_fragment:E0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:C0,shadowmap_vertex:R0,shadowmask_pars_fragment:P0,skinbase_vertex:L0,skinning_pars_vertex:I0,skinning_vertex:D0,skinnormal_vertex:N0,specularmap_fragment:U0,specularmap_pars_fragment:F0,tonemapping_fragment:O0,tonemapping_pars_fragment:z0,transmission_fragment:B0,transmission_pars_fragment:k0,uv_pars_fragment:V0,uv_pars_vertex:H0,uv_vertex:G0,worldpos_vertex:W0,background_vert:q0,background_frag:X0,backgroundCube_vert:Y0,backgroundCube_frag:$0,cube_vert:j0,cube_frag:Z0,depth_vert:K0,depth_frag:J0,distanceRGBA_vert:Q0,distanceRGBA_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:rg,meshbasic_vert:ag,meshbasic_frag:sg,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:ug,meshnormal_vert:hg,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:vg,meshtoon_frag:_g,points_vert:xg,points_frag:Mg,shadow_vert:yg,shadow_frag:Sg,sprite_vert:bg,sprite_frag:Eg},ve={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Tn={basic:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Me(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Gt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Gt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Me(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Gt([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Gt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Gt([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Gt([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Gt([ve.common,ve.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Gt([ve.lights,ve.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Tn.physical={uniforms:Gt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ns={r:0,b:0,g:0},zi=new dn,wg=new ct;function Ag(n,e,t,i,r,a,o){const s=new Me(0);let l=a===!0?0:1,c,u,h=null,d=0,f=null;function v(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const y=v(M);y===null?m(s,l):y&&y.isColor&&(m(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,x){const y=v(x);y&&(y.isCubeTexture||y.mapping===Vs)?(u===void 0&&(u=new Ye(new Wr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:zr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zi.copy(x.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(zi)),u.material.toneMapped=nt.getTransfer(y.colorSpace)!==ht,(h!==y||d!==y.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ye(new Xs(2,2),new ni({name:"BackgroundMaterial",uniforms:zr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=nt.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(ns,jh(n)),i.buffers.color.setClear(ns.r,ns.g,ns.b,x,o)}return{getClearColor:function(){return s},setClearColor:function(M,x=1){s.set(M),l=x,m(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(s,l)},render:_,addToRenderList:g}}function Tg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let a=r,o=!1;function s(S,L,N,I,F){let k=!1;const V=h(I,N,L);a!==V&&(a=V,c(a.object)),k=f(S,I,N,F),k&&v(S,I,N,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(S,L,N,I),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,L,N){const I=N.wireframe===!0;let F=i[S.id];F===void 0&&(F={},i[S.id]=F);let k=F[L.id];k===void 0&&(k={},F[L.id]=k);let V=k[I];return V===void 0&&(V=d(l()),k[I]=V),V}function d(S){const L=[],N=[],I=[];for(let F=0;F<t;F++)L[F]=0,N[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:I,object:S,attributes:{},index:null}}function f(S,L,N,I){const F=a.attributes,k=L.attributes;let V=0;const X=N.getAttributes();for(const G in X)if(X[G].location>=0){const ne=F[G];let se=k[G];if(se===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;V++}return a.attributesNum!==V||a.index!==I}function v(S,L,N,I){const F={},k=L.attributes;let V=0;const X=N.getAttributes();for(const G in X)if(X[G].location>=0){let ne=k[G];ne===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),F[G]=se,V++}a.attributes=F,a.attributesNum=V,a.index=I}function _(){const S=a.newAttributes;for(let L=0,N=S.length;L<N;L++)S[L]=0}function g(S){m(S,0)}function m(S,L){const N=a.newAttributes,I=a.enabledAttributes,F=a.attributeDivisors;N[S]=1,I[S]===0&&(n.enableVertexAttribArray(S),I[S]=1),F[S]!==L&&(n.vertexAttribDivisor(S,L),F[S]=L)}function M(){const S=a.newAttributes,L=a.enabledAttributes;for(let N=0,I=L.length;N<I;N++)L[N]!==S[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function x(S,L,N,I,F,k,V){V===!0?n.vertexAttribIPointer(S,L,N,F,k):n.vertexAttribPointer(S,L,N,I,F,k)}function y(S,L,N,I){_();const F=I.attributes,k=N.getAttributes(),V=L.defaultAttributeValues;for(const X in k){const G=k[X];if(G.location>=0){let ie=F[X];if(ie===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const ne=ie.normalized,se=ie.itemSize,Q=e.get(ie);if(Q===void 0)continue;const me=Q.buffer,W=Q.type,K=Q.bytesPerElement,ce=W===n.INT||W===n.UNSIGNED_INT||ie.gpuType===Fh;if(ie.isInterleavedBufferAttribute){const O=ie.data,re=O.stride,xe=ie.offset;if(O.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)m(G.location+be,O.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let be=0;be<G.locationSize;be++)g(G.location+be);n.bindBuffer(n.ARRAY_BUFFER,me);for(let be=0;be<G.locationSize;be++)x(G.location+be,se/G.locationSize,W,ne,re*K,(xe+se/G.locationSize*be)*K,ce)}else{if(ie.isInstancedBufferAttribute){for(let O=0;O<G.locationSize;O++)m(G.location+O,ie.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let O=0;O<G.locationSize;O++)g(G.location+O);n.bindBuffer(n.ARRAY_BUFFER,me);for(let O=0;O<G.locationSize;O++)x(G.location+O,se/G.locationSize,W,ne,se*K,se/G.locationSize*O*K,ce)}}else if(V!==void 0){const ne=V[X];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(G.location,ne);break;case 3:n.vertexAttrib3fv(G.location,ne);break;case 4:n.vertexAttrib4fv(G.location,ne);break;default:n.vertexAttrib1fv(G.location,ne)}}}}M()}function C(){R();for(const S in i){const L=i[S];for(const N in L){const I=L[N];for(const F in I)u(I[F].object),delete I[F];delete L[N]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const N in L){const I=L[N];for(const F in I)u(I[F].object),delete I[F];delete L[N]}delete i[S.id]}function w(S){for(const L in i){const N=i[L];if(N[S.id]===void 0)continue;const I=N[S.id];for(const F in I)u(I[F].object),delete I[F];delete N[S.id]}}function R(){b(),o=!0,a!==r&&(a=r,c(a.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:R,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Cg(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function s(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(c[f],u[f]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let v=0;v<h;v++)f+=u[v];t.update(f,i,1)}}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let v=0;for(let _=0;_<h;_++)v+=u[_];for(let _=0;_<d.length;_++)t.update(v,i,d[_])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Rg(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Dn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(E){const w=E===Hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==wi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==xi&&!w)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function Pg(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new it,s=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const v=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!r||v===null||v.length===0||a&&!g)a?u(null):c();else{const M=a?0:i,x=M*4;let y=m.clippingState||null;l.value=y,y=u(v,d,x,f);for(let C=0;C!==x;++C)y[C]=t[C];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,v){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const m=f+_*4,M=d.matrixWorldInverse;s.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(M,s),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Lg(n){let e=new WeakMap;function t(o,s){return s===al?o.mapping=Dr:s===sl&&(o.mapping=Nr),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===al||s===sl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class En extends Zh{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wr=4,gu=[.125,.215,.35,.446,.526,.582],Hi=20,No=new En,vu=new Me;let Uo=null,Fo=0,Oo=0,zo=!1;const ki=(1+Math.sqrt(5))/2,xr=1/ki,_u=[new P(-ki,xr,0),new P(ki,xr,0),new P(-xr,0,ki),new P(xr,0,ki),new P(0,ki,-xr),new P(0,ki,xr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Uo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,Fo,Oo),this._renderer.xr.enabled=zo,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Hs,format:Dn,colorSpace:Ti,depthBuffer:!1},r=Mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(a)),this._blurMaterial=Dg(a,e,t)}return r}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,i,r){const s=new Mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(vu),u.toneMapping=Si,u.autoClear=!1;const f=new nn({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),v=new Ye(new Wr,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(vu),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(s.up.set(0,l[m],0),s.lookAt(c[m],0,0)):M===1?(s.up.set(0,0,l[m]),s.lookAt(0,c[m],0)):(s.up.set(0,l[m],0),s.lookAt(0,0,c[m]));const x=this._cubeSize;is(r,M*x,m>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(v,s),u.render(e,s)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Dr||e.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;is(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,No)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=_u[(r-a-1)%_u.length];this._blur(e,a-1,a,o,s)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ye(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),_=a/v,g=isFinite(a)?1+Math.floor(u*_):Hi;g>Hi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hi}`);const m=[];let M=0;for(let w=0;w<Hi;++w){const R=w/_,b=Math.exp(-R*R/2);m.push(b),w===0?M+=b:w<g&&(M+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-wr?r-x+wr:0),E=4*(this._cubeSize-y);is(t,C,E,3*y,2*y),l.setRenderTarget(t),l.render(h,No)}}function Ig(n){const e=[],t=[],i=[];let r=n;const a=n-wr+1+gu.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-wr?l=gu[o-n+wr-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,_=3,g=2,m=1,M=new Float32Array(_*v*f),x=new Float32Array(g*v*f),y=new Float32Array(m*v*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,R=E>2?0:-1,b=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(b,_*v*E),x.set(d,g*v*E);const S=[E,E,E,E,E,E];y.set(S,m*v*E)}const C=new $e;C.setAttribute("position",new Ot(M,_)),C.setAttribute("uv",new Ot(x,g)),C.setAttribute("faceIndex",new Ot(y,m)),e.push(C),r>wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mu(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Dg(n,e,t){const i=new Float32Array(Hi),r=new P(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yu(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Su(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Nl(){return`

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
	`}function Ng(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===al||l===sl,u=l===Dr||l===Nr;if(c||u){let h=e.get(s);const d=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return t===null&&(t=new xu(n)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),h.texture;if(h!==void 0)return h.texture;{const f=s.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new xu(n)),h=c?t.fromEquirectangular(s):t.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),s.addEventListener("dispose",a),h.texture):null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ug(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ll("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Fg(n,e,t,i){const r={},a=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}d.removeEventListener("dispose",o),delete r[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const v in f){const _=f[v];for(let g=0,m=_.length;g<m;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,v=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,y=M.length;x<y;x+=3){const C=M[x+0],E=M[x+1],w=M[x+2];d.push(C,E,E,w,w,C)}}else if(v!==void 0){const M=v.array;_=v.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const C=x+0,E=x+1,w=x+2;d.push(C,E,E,w,w,C)}}else return;const g=new(Gh(d)?$h:Yh)(d,1);g.version=_;const m=a.get(h);m&&e.remove(m),a.set(h,g)}function u(h){const d=a.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function Og(n,e,t){let i;function r(d){i=d}let a,o;function s(d){a=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,a,d*o),t.update(f,i,1)}function c(d,f,v){v!==0&&(n.drawElementsInstanced(i,f,a,d*o,v),t.update(f,i,v))}function u(d,f,v){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<v;g++)this.render(d[g]/o,f[g]);else{_.multiDrawElementsWEBGL(i,f,0,a,d,0,v);let g=0;for(let m=0;m<v;m++)g+=f[m];t.update(g,i,1)}}function h(d,f,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,a,d,0,_,0,v);let m=0;for(let M=0;M<v;M++)m+=f[M];for(let M=0;M<_.length;M++)t.update(m,i,_[M])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bg(n,e,t){const i=new WeakMap,r=new Pt;function a(o,s,l){const c=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(s);if(d===void 0||d.count!==h){let S=function(){R.dispose(),i.delete(s),s.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const v=s.morphAttributes.position!==void 0,_=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],M=s.morphAttributes.normal||[],x=s.morphAttributes.color||[];let y=0;v===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let C=s.attributes.position.count*y,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*E*4*h),R=new qh(w,C,E,h);R.type=xi,R.needsUpdate=!0;const b=y*4;for(let L=0;L<h;L++){const N=m[L],I=M[L],F=x[L],k=C*E*4*L;for(let V=0;V<N.count;V++){const X=V*b;v===!0&&(r.fromBufferAttribute(N,V),w[k+X+0]=r.x,w[k+X+1]=r.y,w[k+X+2]=r.z,w[k+X+3]=0),_===!0&&(r.fromBufferAttribute(I,V),w[k+X+4]=r.x,w[k+X+5]=r.y,w[k+X+6]=r.z,w[k+X+7]=0),g===!0&&(r.fromBufferAttribute(F,V),w[k+X+8]=r.x,w[k+X+9]=r.y,w[k+X+10]=r.z,w[k+X+11]=F.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new ge(C,E)},i.set(s,d),s.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const _=s.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function kg(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class Qh extends Xt{constructor(e,t,i,r,a,o,s,l,c,u=Tr){if(u!==Tr&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Tr&&(i=Ur),i===void 0&&u===Or&&(i=Fr),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ed=new Xt,td=new Qh(1,1);td.compareFunction=Hh;const nd=new qh,id=new Ap,rd=new Kh,bu=[],Eu=[],wu=new Float32Array(16),Au=new Float32Array(9),Tu=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=bu[r];if(a===void 0&&(a=new Float32Array(r),bu[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ys(n,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Tu.set(i),n.uniformMatrix2fv(this.addr,!1,Tu),bt(t,i)}}function Xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Au.set(i),n.uniformMatrix3fv(this.addr,!1,Au),bt(t,i)}}function Yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;wu.set(i),n.uniformMatrix4fv(this.addr,!1,wu),bt(t,i)}}function $g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function Jg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function e1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function n1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?td:ed;t.setTexture2D(e||a,r)}function i1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||id,r)}function r1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rd,r)}function a1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nd,r)}function s1(n){switch(n){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return qg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return jg;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return Qg;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return a1}}function o1(n,e){n.uniform1fv(this.addr,e)}function l1(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function c1(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function u1(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function h1(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d1(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function f1(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function p1(n,e){n.uniform1iv(this.addr,e)}function m1(n,e){n.uniform2iv(this.addr,e)}function g1(n,e){n.uniform3iv(this.addr,e)}function v1(n,e){n.uniform4iv(this.addr,e)}function _1(n,e){n.uniform1uiv(this.addr,e)}function x1(n,e){n.uniform2uiv(this.addr,e)}function M1(n,e){n.uniform3uiv(this.addr,e)}function y1(n,e){n.uniform4uiv(this.addr,e)}function S1(n,e,t){const i=this.cache,r=e.length,a=Ys(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ed,a[o])}function b1(n,e,t){const i=this.cache,r=e.length,a=Ys(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||id,a[o])}function E1(n,e,t){const i=this.cache,r=e.length,a=Ys(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||rd,a[o])}function w1(n,e,t){const i=this.cache,r=e.length,a=Ys(t,r);St(i,a)||(n.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||nd,a[o])}function A1(n){switch(n){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return h1;case 35675:return d1;case 35676:return f1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return v1;case 5125:return _1;case 36294:return x1;case 36295:return M1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return w1}}class T1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=s1(t.type)}}class C1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A1(t.type)}}class R1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Cu(n,e){n.seq.push(e),n.map[e.id]=e}function P1(n,e,t){const i=n.name,r=i.length;for(Bo.lastIndex=0;;){const a=Bo.exec(i),o=Bo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Cu(t,c===void 0?new T1(s,n,e):new C1(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new R1(s),Cu(t,h)),t=h}}}class Ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);P1(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ru(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const L1=37297;let I1=0;function D1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function N1(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===Ts&&t===As?i="LinearDisplayP3ToLinearSRGB":e===As&&t===Ts&&(i="LinearSRGBToLinearDisplayP3"),n){case Ti:case Ws:return[i,"LinearTransferOETF"];case Ft:case Rl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Pu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+D1(n.getShaderSource(e),o)}else return r}function U1(n,e){const t=N1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function F1(n,e){let t;switch(e){case Pf:t="Linear";break;case Lf:t="Reinhard";break;case If:t="OptimizedCineon";break;case Hr:t="ACESFilmic";break;case Nf:t="AgX";break;case Uf:t="Neutral";break;case Df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function z1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function B1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function oa(n){return n!==""}function Lu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(n){return n.replace(k1,H1)}const V1=new Map;function H1(n,e){let t=He[e];if(t===void 0){const i=V1.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}const G1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(n){return n.replace(G1,W1)}function W1(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Nu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function q1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function X1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Dr:case Nr:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function $1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ks:e="ENVMAP_BLENDING_MULTIPLY";break;case Cf:e="ENVMAP_BLENDING_MIX";break;case Rf:e="ENVMAP_BLENDING_ADD";break}return e}function j1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Z1(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=q1(t),c=X1(t),u=Y1(t),h=$1(t),d=j1(t),f=O1(t),v=z1(a),_=r.createProgram();let g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(oa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(oa).join(`
`),m.length>0&&(m+=`
`)):(g=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?He.tonemapping_pars_fragment:"",t.toneMapping!==Si?F1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,U1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),o=ul(o),o=Lu(o,t),o=Iu(o,t),s=ul(s),s=Lu(s,t),s=Iu(s,t),o=Du(o),s=Du(s),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+g+o,y=M+m+s,C=Ru(r,r.VERTEX_SHADER,x),E=Ru(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(C).trim(),F=r.getShaderInfoLog(E).trim();let k=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,E);else{const X=Pu(r,C,"vertex"),G=Pu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+X+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(I===""||F==="")&&(V=!1);V&&(L.diagnostics={runnable:k,programLog:N,vertexShader:{log:I,prefix:g},fragmentShader:{log:F,prefix:m}})}r.deleteShader(C),r.deleteShader(E),R=new Ms(r,_),b=B1(r,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,L1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}let K1=0;class J1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Q1(e),t.set(e,i)),i}}class Q1{constructor(e){this.id=K1++,this.code=e,this.usedTimes=0}}function ev(n,e,t,i,r,a,o){const s=new Il,l=new J1,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,L,N,I){const F=N.fog,k=I.geometry,V=b.isMeshStandardMaterial?N.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),G=X&&X.mapping===Vs?X.image.height:null,ie=v[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=ne!==void 0?ne.length:0;let Q=0;k.morphAttributes.position!==void 0&&(Q=1),k.morphAttributes.normal!==void 0&&(Q=2),k.morphAttributes.color!==void 0&&(Q=3);let me,W,K,ce;if(ie){const rt=Tn[ie];me=rt.vertexShader,W=rt.fragmentShader}else me=b.vertexShader,W=b.fragmentShader,l.update(b),K=l.getVertexShaderID(b),ce=l.getFragmentShaderID(b);const O=n.getRenderTarget(),re=I.isInstancedMesh===!0,xe=I.isBatchedMesh===!0,be=!!b.map,U=!!b.matcap,pe=!!X,ze=!!b.aoMap,je=!!b.lightMap,Pe=!!b.bumpMap,qe=!!b.normalMap,ke=!!b.displacementMap,Fe=!!b.emissiveMap,ut=!!b.metalnessMap,D=!!b.roughnessMap,A=b.anisotropy>0,$=b.clearcoat>0,te=b.dispersion>0,j=b.iridescence>0,Z=b.sheen>0,oe=b.transmission>0,le=A&&!!b.anisotropyMap,ue=$&&!!b.clearcoatMap,Ae=$&&!!b.clearcoatNormalMap,ae=$&&!!b.clearcoatRoughnessMap,Ee=j&&!!b.iridescenceMap,Ve=j&&!!b.iridescenceThicknessMap,Ie=Z&&!!b.sheenColorMap,_e=Z&&!!b.sheenRoughnessMap,We=!!b.specularMap,Xe=!!b.specularColorMap,gt=!!b.specularIntensityMap,z=oe&&!!b.transmissionMap,ye=oe&&!!b.thicknessMap,J=!!b.gradientMap,ee=!!b.alphaMap,fe=b.alphaTest>0,Oe=!!b.alphaHash,Ze=!!b.extensions;let vt=Si;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Et={shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:me,fragmentShader:W,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:xe,batchingColor:xe&&I._colorsTexture!==null,instancing:re,instancingColor:re&&I.instanceColor!==null,instancingMorph:re&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ti,alphaToCoverage:!!b.alphaToCoverage,map:be,matcap:U,envMap:pe,envMapMode:pe&&X.mapping,envMapCubeUVHeight:G,aoMap:ze,lightMap:je,bumpMap:Pe,normalMap:qe,displacementMap:d&&ke,emissiveMap:Fe,normalMapObjectSpace:qe&&b.normalMapType===jf,normalMapTangentSpace:qe&&b.normalMapType===Gs,metalnessMap:ut,roughnessMap:D,anisotropy:A,anisotropyMap:le,clearcoat:$,clearcoatMap:ue,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ae,dispersion:te,iridescence:j,iridescenceMap:Ee,iridescenceThicknessMap:Ve,sheen:Z,sheenColorMap:Ie,sheenRoughnessMap:_e,specularMap:We,specularColorMap:Xe,specularIntensityMap:gt,transmission:oe,transmissionMap:z,thicknessMap:ye,gradientMap:J,opaque:b.transparent===!1&&b.blending===Ar&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:fe,alphaHash:Oe,combine:b.combine,mapUv:be&&_(b.map.channel),aoMapUv:ze&&_(b.aoMap.channel),lightMapUv:je&&_(b.lightMap.channel),bumpMapUv:Pe&&_(b.bumpMap.channel),normalMapUv:qe&&_(b.normalMap.channel),displacementMapUv:ke&&_(b.displacementMap.channel),emissiveMapUv:Fe&&_(b.emissiveMap.channel),metalnessMapUv:ut&&_(b.metalnessMap.channel),roughnessMapUv:D&&_(b.roughnessMap.channel),anisotropyMapUv:le&&_(b.anisotropyMap.channel),clearcoatMapUv:ue&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(b.sheenRoughnessMap.channel),specularMapUv:We&&_(b.specularMap.channel),specularColorMapUv:Xe&&_(b.specularColorMap.channel),specularIntensityMapUv:gt&&_(b.specularIntensityMap.channel),transmissionMapUv:z&&_(b.transmissionMap.channel),thicknessMapUv:ye&&_(b.thicknessMap.channel),alphaMapUv:ee&&_(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(qe||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(be||ee),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:be&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ot,flipSided:b.side===jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ze&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(M(S,b),x(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),b.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.doubleSided&&s.enable(10),S.flipSided&&s.enable(11),S.useDepthPacking&&s.enable(12),S.dithering&&s.enable(13),S.transmission&&s.enable(14),S.sheen&&s.enable(15),S.opaque&&s.enable(16),S.pointsUvs&&s.enable(17),S.decodeVideoTexture&&s.enable(18),S.alphaToCoverage&&s.enable(19),b.push(s.mask)}function y(b){const S=v[b.type];let L;if(S){const N=Tn[S];L=zp.clone(N.uniforms)}else L=b.uniforms;return L}function C(b,S){let L;for(let N=0,I=u.length;N<I;N++){const F=u[N];if(F.cacheKey===S){L=F,++L.usedTimes;break}}return L===void 0&&(L=new Z1(n,S,b,a),u.push(L)),L}function E(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:R}}function tv(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function nv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,v,_,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:v,renderOrder:h.renderOrder,z:_,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=v,m.renderOrder=h.renderOrder,m.z=_,m.group=g),e++,m}function s(h,d,f,v,_,g){const m=o(h,d,f,v,_,g);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function l(h,d,f,v,_,g){const m=o(h,d,f,v,_,g);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||nv),i.length>1&&i.sort(d||Uu),r.length>1&&r.sort(d||Uu)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function iv(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Fu,n.set(i,[o])):r>=a.length?(o=new Fu,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Me};break;case"SpotLight":t={position:new P,direction:new P,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function av(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sv=0;function ov(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lv(n){const e=new rv,t=av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,a=new ct,o=new ct;function s(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,v=0,_=0,g=0,m=0,M=0,x=0,y=0,C=0,E=0,w=0;c.sort(ov);for(let b=0,S=c.length;b<S;b++){const L=c[b],N=L.color,I=L.intensity,F=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*I,h+=N.g*I,d+=N.b*I;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],I);w++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,G=t.get(L);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=L.shadow.matrix,M++}i.directional[f]=V,f++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(N).multiplyScalar(I),V.distance=F,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[_]=V;const X=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,X.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[_]=X.matrix,L.castShadow){const G=t.get(L);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=k,y++}_++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(N).multiplyScalar(I),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=V,g++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const X=L.shadow,G=t.get(L);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=k,i.pointShadowMatrix[v]=L.shadow.matrix,x++}i.point[v]=V,v++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(I),V.groundColor.copy(L.groundColor).multiplyScalar(I),i.hemi[m]=V,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==f||R.pointLength!==v||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,R.directionalLength=f,R.pointLength=v,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=w,i.version=sv++)}function l(c,u){let h=0,d=0,f=0,v=0,_=0;const g=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),a.copy(x.matrixWorld),a.premultiply(g),o.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:s,setupView:l,state:i}}function Ou(n){const e=new lv(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function s(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function cv(n){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new Ou(n),e.set(r,[s])):a>=o.length?(s=new Ou(n),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}class uv extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hv extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
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
}`;function pv(n,e,t){let i=new Dl;const r=new ge,a=new ge,o=new Pt,s=new uv({depthPacking:$f}),l=new hv,c={},u=t.maxTextureSize,h={[Ei]:jt,[jt]:Ei,[ot]:ot},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:dv,fragmentShader:fv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new $e;v.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ye(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let m=this.type;this.render=function(E,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(yi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const I=m!==jn&&this.type===jn,F=m===jn&&this.type!==jn;for(let k=0,V=E.length;k<V;k++){const X=E[k],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ie=G.getFrameExtents();if(r.multiply(ie),a.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ie.x),r.x=a.x*ie.x,G.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ie.y),r.y=a.y*ie.y,G.mapSize.y=a.y)),G.map===null||I===!0||F===!0){const se=this.type!==jn?{minFilter:cn,magFilter:cn}:{};G.map!==null&&G.map.dispose(),G.map=new ji(r.x,r.y,se),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ne=G.getViewportCount();for(let se=0;se<ne;se++){const Q=G.getViewport(se);o.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),N.viewport(o),G.updateMatrices(X,se),i=G.getFrustum(),y(w,R,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===jn&&M(G,R),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,S,L)};function M(E,w){const R=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ji(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,R,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,R,f,_,null)}function x(E,w,R,b){let S=null;const L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:s,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=S.uuid,I=w.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let k=F[I];k===void 0&&(k=S.clone(),F[I]=k,w.addEventListener("dispose",C)),S=k}if(S.visible=w.visible,S.wireframe=w.wireframe,b===jn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=R}return S}function y(E,w,R,b,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===jn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const I=e.update(E),F=E.material;if(Array.isArray(F)){const k=I.groups;for(let V=0,X=k.length;V<X;V++){const G=k[V],ie=F[G.materialIndex];if(ie&&ie.visible){const ne=x(E,ie,b,S);E.onBeforeShadow(n,E,w,R,I,ne,G),n.renderBufferDirect(R,null,I,ne,E,G),E.onAfterShadow(n,E,w,R,I,ne,G)}}}else if(F.visible){const k=x(E,F,b,S);E.onBeforeShadow(n,E,w,R,I,k,null),n.renderBufferDirect(R,null,I,k,E,null),E.onAfterShadow(n,E,w,R,I,k,null)}}const N=E.children;for(let I=0,F=N.length;I<F;I++)y(N[I],w,R,b,S)}function C(E){E.target.removeEventListener("dispose",C);for(const R in c){const b=c[R],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function mv(n){function e(){let z=!1;const ye=new Pt;let J=null;const ee=new Pt(0,0,0,0);return{setMask:function(fe){J!==fe&&!z&&(n.colorMask(fe,fe,fe,fe),J=fe)},setLocked:function(fe){z=fe},setClear:function(fe,Oe,Ze,vt,Et){Et===!0&&(fe*=vt,Oe*=vt,Ze*=vt),ye.set(fe,Oe,Ze,vt),ee.equals(ye)===!1&&(n.clearColor(fe,Oe,Ze,vt),ee.copy(ye))},reset:function(){z=!1,J=null,ee.set(-1,0,0,0)}}}function t(){let z=!1,ye=null,J=null,ee=null;return{setTest:function(fe){fe?ce(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(fe){ye!==fe&&!z&&(n.depthMask(fe),ye=fe)},setFunc:function(fe){if(J!==fe){switch(fe){case yf:n.depthFunc(n.NEVER);break;case Sf:n.depthFunc(n.ALWAYS);break;case bf:n.depthFunc(n.LESS);break;case bs:n.depthFunc(n.LEQUAL);break;case Ef:n.depthFunc(n.EQUAL);break;case wf:n.depthFunc(n.GEQUAL);break;case Af:n.depthFunc(n.GREATER);break;case Tf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=fe}},setLocked:function(fe){z=fe},setClear:function(fe){ee!==fe&&(n.clearDepth(fe),ee=fe)},reset:function(){z=!1,ye=null,J=null,ee=null}}}function i(){let z=!1,ye=null,J=null,ee=null,fe=null,Oe=null,Ze=null,vt=null,Et=null;return{setTest:function(rt){z||(rt?ce(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(rt){ye!==rt&&!z&&(n.stencilMask(rt),ye=rt)},setFunc:function(rt,wn,An){(J!==rt||ee!==wn||fe!==An)&&(n.stencilFunc(rt,wn,An),J=rt,ee=wn,fe=An)},setOp:function(rt,wn,An){(Oe!==rt||Ze!==wn||vt!==An)&&(n.stencilOp(rt,wn,An),Oe=rt,Ze=wn,vt=An)},setLocked:function(rt){z=rt},setClear:function(rt){Et!==rt&&(n.clearStencil(rt),Et=rt)},reset:function(){z=!1,ye=null,J=null,ee=null,fe=null,Oe=null,Ze=null,vt=null,Et=null}}}const r=new e,a=new t,o=new i,s=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,v=!1,_=null,g=null,m=null,M=null,x=null,y=null,C=null,E=new Me(0,0,0),w=0,R=!1,b=null,S=null,L=null,N=null,I=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=V>=2);let G=null,ie={};const ne=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Q=new Pt().fromArray(ne),me=new Pt().fromArray(se);function W(z,ye,J,ee){const fe=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(z,Oe),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<J;Ze++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ye+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return Oe}const K={};K[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(bs),Pe(!1),qe(_c),ce(n.CULL_FACE),ze(yi);function ce(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function O(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function re(z,ye){return u[z]!==ye?(n.bindFramebuffer(z,ye),u[z]=ye,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ye),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function xe(z,ye){let J=d,ee=!1;if(z){J=h.get(ye),J===void 0&&(J=[],h.set(ye,J));const fe=z.textures;if(J.length!==fe.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,Ze=fe.length;Oe<Ze;Oe++)J[Oe]=n.COLOR_ATTACHMENT0+Oe;J.length=fe.length,ee=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ee=!0);ee&&n.drawBuffers(J)}function be(z){return f!==z?(n.useProgram(z),f=z,!0):!1}const U={[Vi]:n.FUNC_ADD,[rf]:n.FUNC_SUBTRACT,[af]:n.FUNC_REVERSE_SUBTRACT};U[sf]=n.MIN,U[of]=n.MAX;const pe={[lf]:n.ZERO,[cf]:n.ONE,[uf]:n.SRC_COLOR,[il]:n.SRC_ALPHA,[gf]:n.SRC_ALPHA_SATURATE,[pf]:n.DST_COLOR,[df]:n.DST_ALPHA,[hf]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[mf]:n.ONE_MINUS_DST_COLOR,[ff]:n.ONE_MINUS_DST_ALPHA,[vf]:n.CONSTANT_COLOR,[_f]:n.ONE_MINUS_CONSTANT_COLOR,[xf]:n.CONSTANT_ALPHA,[Mf]:n.ONE_MINUS_CONSTANT_ALPHA};function ze(z,ye,J,ee,fe,Oe,Ze,vt,Et,rt){if(z===yi){v===!0&&(O(n.BLEND),v=!1);return}if(v===!1&&(ce(n.BLEND),v=!0),z!==nf){if(z!==_||rt!==R){if((g!==Vi||x!==Vi)&&(n.blendEquation(n.FUNC_ADD),g=Vi,x=Vi),rt)switch(z){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ya:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ya:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,M=null,y=null,C=null,E.set(0,0,0),w=0,_=z,R=rt}return}fe=fe||ye,Oe=Oe||J,Ze=Ze||ee,(ye!==g||fe!==x)&&(n.blendEquationSeparate(U[ye],U[fe]),g=ye,x=fe),(J!==m||ee!==M||Oe!==y||Ze!==C)&&(n.blendFuncSeparate(pe[J],pe[ee],pe[Oe],pe[Ze]),m=J,M=ee,y=Oe,C=Ze),(vt.equals(E)===!1||Et!==w)&&(n.blendColor(vt.r,vt.g,vt.b,Et),E.copy(vt),w=Et),_=z,R=!1}function je(z,ye){z.side===ot?O(n.CULL_FACE):ce(n.CULL_FACE);let J=z.side===jt;ye&&(J=!J),Pe(J),z.blending===Ar&&z.transparent===!1?ze(yi):ze(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const ee=z.stencilWrite;o.setTest(ee),ee&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(z){b!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),b=z)}function qe(z){z!==Qd?(ce(n.CULL_FACE),z!==S&&(z===_c?n.cullFace(n.BACK):z===ef?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),S=z}function ke(z){z!==L&&(k&&n.lineWidth(z),L=z)}function Fe(z,ye,J){z?(ce(n.POLYGON_OFFSET_FILL),(N!==ye||I!==J)&&(n.polygonOffset(ye,J),N=ye,I=J)):O(n.POLYGON_OFFSET_FILL)}function ut(z){z?ce(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function D(z){z===void 0&&(z=n.TEXTURE0+F-1),G!==z&&(n.activeTexture(z),G=z)}function A(z,ye,J){J===void 0&&(G===null?J=n.TEXTURE0+F-1:J=G);let ee=ie[J];ee===void 0&&(ee={type:void 0,texture:void 0},ie[J]=ee),(ee.type!==z||ee.texture!==ye)&&(G!==J&&(n.activeTexture(J),G=J),n.bindTexture(z,ye||K[z]),ee.type=z,ee.texture=ye)}function $(){const z=ie[G];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ve(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(z){Q.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Q.copy(z))}function _e(z){me.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),me.copy(z))}function We(z,ye){let J=l.get(ye);J===void 0&&(J=new WeakMap,l.set(ye,J));let ee=J.get(z);ee===void 0&&(ee=n.getUniformBlockIndex(ye,z.name),J.set(z,ee))}function Xe(z,ye){const ee=l.get(ye).get(z);s.get(ye)!==ee&&(n.uniformBlockBinding(ye,ee,z.__bindingPointIndex),s.set(ye,ee))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,ie={},u={},h=new WeakMap,d=[],f=null,v=!1,_=null,g=null,m=null,M=null,x=null,y=null,C=null,E=new Me(0,0,0),w=0,R=!1,b=null,S=null,L=null,N=null,I=null,Q.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:O,bindFramebuffer:re,drawBuffers:xe,useProgram:be,setBlending:ze,setMaterial:je,setFlipSided:Pe,setCullFace:qe,setLineWidth:ke,setPolygonOffset:Fe,setScissorTest:ut,activeTexture:D,bindTexture:A,unbindTexture:$,compressedTexImage2D:te,compressedTexImage3D:j,texImage2D:Ee,texImage3D:Ve,updateUBOMapping:We,uniformBlockBinding:Xe,texStorage2D:Ae,texStorage3D:ae,texSubImage2D:Z,texSubImage3D:oe,compressedTexSubImage2D:le,compressedTexSubImage3D:ue,scissor:Ie,viewport:_e,reset:gt}}function gv(n,e,t,i,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,A){return f?new OffscreenCanvas(D,A):Rs("canvas")}function _(D,A,$){let te=1;const j=ut(D);if((j.width>$||j.height>$)&&(te=$/Math.max(j.width,j.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Z=Math.floor(te*j.width),oe=Math.floor(te*j.height);h===void 0&&(h=v(Z,oe));const le=A?v(Z,oe):h;return le.width=Z,le.height=oe,le.getContext("2d").drawImage(D,0,0,Z,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+oe+")."),le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==cn&&D.minFilter!==yn}function m(D){n.generateMipmap(D)}function M(D,A,$,te,j=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=A;if(A===n.RED&&($===n.FLOAT&&(Z=n.R32F),$===n.HALF_FLOAT&&(Z=n.R16F),$===n.UNSIGNED_BYTE&&(Z=n.R8)),A===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(Z=n.R8UI),$===n.UNSIGNED_SHORT&&(Z=n.R16UI),$===n.UNSIGNED_INT&&(Z=n.R32UI),$===n.BYTE&&(Z=n.R8I),$===n.SHORT&&(Z=n.R16I),$===n.INT&&(Z=n.R32I)),A===n.RG&&($===n.FLOAT&&(Z=n.RG32F),$===n.HALF_FLOAT&&(Z=n.RG16F),$===n.UNSIGNED_BYTE&&(Z=n.RG8)),A===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(Z=n.RG8UI),$===n.UNSIGNED_SHORT&&(Z=n.RG16UI),$===n.UNSIGNED_INT&&(Z=n.RG32UI),$===n.BYTE&&(Z=n.RG8I),$===n.SHORT&&(Z=n.RG16I),$===n.INT&&(Z=n.RG32I)),A===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),A===n.RGBA){const oe=j?ws:nt.getTransfer(te);$===n.FLOAT&&(Z=n.RGBA32F),$===n.HALF_FLOAT&&(Z=n.RGBA16F),$===n.UNSIGNED_BYTE&&(Z=oe===ht?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(D,A){let $;return D?A===null||A===Ur||A===Fr?$=n.DEPTH24_STENCIL8:A===xi?$=n.DEPTH32F_STENCIL8:A===Es&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ur||A===Fr?$=n.DEPTH_COMPONENT24:A===xi?$=n.DEPTH_COMPONENT32F:A===Es&&($=n.DEPTH_COMPONENT16),$}function y(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==cn&&D.minFilter!==yn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function C(D){const A=D.target;A.removeEventListener("dispose",C),w(A),A.isVideoTexture&&u.delete(A)}function E(D){const A=D.target;A.removeEventListener("dispose",E),b(A)}function w(D){const A=i.get(D);if(A.__webglInit===void 0)return;const $=D.source,te=d.get($);if(te){const j=te[A.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(D),Object.keys(te).length===0&&d.delete($)}i.remove(D)}function R(D){const A=i.get(D);n.deleteTexture(A.__webglTexture);const $=D.source,te=d.get($);delete te[A.__cacheKey],o.memory.textures--}function b(D){const A=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(A.__webglFramebuffer[te]))for(let j=0;j<A.__webglFramebuffer[te].length;j++)n.deleteFramebuffer(A.__webglFramebuffer[te][j]);else n.deleteFramebuffer(A.__webglFramebuffer[te]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[te])}else{if(Array.isArray(A.__webglFramebuffer))for(let te=0;te<A.__webglFramebuffer.length;te++)n.deleteFramebuffer(A.__webglFramebuffer[te]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let te=0;te<A.__webglColorRenderbuffer.length;te++)A.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[te]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=D.textures;for(let te=0,j=$.length;te<j;te++){const Z=i.get($[te]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove($[te])}i.remove(D)}let S=0;function L(){S=0}function N(){const D=S;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),S+=1,D}function I(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function F(D,A){const $=i.get(D);if(D.isVideoTexture&&ke(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const te=D.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me($,D,A);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+A)}function k(D,A){const $=i.get(D);if(D.version>0&&$.__version!==D.version){me($,D,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+A)}function V(D,A){const $=i.get(D);if(D.version>0&&$.__version!==D.version){me($,D,A);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+A)}function X(D,A){const $=i.get(D);if(D.version>0&&$.__version!==D.version){W($,D,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+A)}const G={[ol]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[ll]:n.MIRRORED_REPEAT},ie={[cn]:n.NEAREST,[Ff]:n.NEAREST_MIPMAP_NEAREST,[Ua]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[co]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},ne={[Zf]:n.NEVER,[np]:n.ALWAYS,[Kf]:n.LESS,[Hh]:n.LEQUAL,[Jf]:n.EQUAL,[tp]:n.GEQUAL,[Qf]:n.GREATER,[ep]:n.NOTEQUAL};function se(D,A){if(A.type===xi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===yn||A.magFilter===co||A.magFilter===Ua||A.magFilter===qi||A.minFilter===yn||A.minFilter===co||A.minFilter===Ua||A.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,G[A.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,G[A.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,G[A.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ie[A.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ie[A.minFilter]),A.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ne[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===cn||A.minFilter!==Ua&&A.minFilter!==qi||A.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Q(D,A){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",C));const te=A.source;let j=d.get(te);j===void 0&&(j={},d.set(te,j));const Z=I(A);if(Z!==D.__cacheKey){j[Z]===void 0&&(j[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),j[Z].usedTimes++;const oe=j[D.__cacheKey];oe!==void 0&&(j[D.__cacheKey].usedTimes--,oe.usedTimes===0&&R(A)),D.__cacheKey=Z,D.__webglTexture=j[Z].texture}return $}function me(D,A,$){let te=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=n.TEXTURE_3D);const j=Q(D,A),Z=A.source;t.bindTexture(te,D.__webglTexture,n.TEXTURE0+$);const oe=i.get(Z);if(Z.version!==oe.__version||j===!0){t.activeTexture(n.TEXTURE0+$);const le=nt.getPrimaries(nt.workingColorSpace),ue=A.colorSpace===mi?null:nt.getPrimaries(A.colorSpace),Ae=A.colorSpace===mi||le===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ae=_(A.image,!1,r.maxTextureSize);ae=Fe(A,ae);const Ee=a.convert(A.format,A.colorSpace),Ve=a.convert(A.type);let Ie=M(A.internalFormat,Ee,Ve,A.colorSpace,A.isVideoTexture);se(te,A);let _e;const We=A.mipmaps,Xe=A.isVideoTexture!==!0,gt=oe.__version===void 0||j===!0,z=Z.dataReady,ye=y(A,ae);if(A.isDepthTexture)Ie=x(A.format===Or,A.type),gt&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Ie,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ae.width,ae.height,0,Ee,Ve,null));else if(A.isDataTexture)if(We.length>0){Xe&&gt&&t.texStorage2D(n.TEXTURE_2D,ye,Ie,We[0].width,We[0].height);for(let J=0,ee=We.length;J<ee;J++)_e=We[J],Xe?z&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,Ee,Ve,_e.data):t.texImage2D(n.TEXTURE_2D,J,Ie,_e.width,_e.height,0,Ee,Ve,_e.data);A.generateMipmaps=!1}else Xe?(gt&&t.texStorage2D(n.TEXTURE_2D,ye,Ie,ae.width,ae.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Ee,Ve,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ae.width,ae.height,0,Ee,Ve,ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Xe&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ie,We[0].width,We[0].height,ae.depth);for(let J=0,ee=We.length;J<ee;J++)if(_e=We[J],A.format!==Dn)if(Ee!==null)if(Xe){if(z)if(A.layerUpdates.size>0){for(const fe of A.layerUpdates){const Oe=_e.width*_e.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,fe,_e.width,_e.height,1,Ee,_e.data.slice(Oe*fe,Oe*(fe+1)),0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,ae.depth,Ee,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Ie,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,ae.depth,Ee,Ve,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Ie,_e.width,_e.height,ae.depth,0,Ee,Ve,_e.data)}else{Xe&&gt&&t.texStorage2D(n.TEXTURE_2D,ye,Ie,We[0].width,We[0].height);for(let J=0,ee=We.length;J<ee;J++)_e=We[J],A.format!==Dn?Ee!==null?Xe?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,Ee,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?z&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,_e.width,_e.height,Ee,Ve,_e.data):t.texImage2D(n.TEXTURE_2D,J,Ie,_e.width,_e.height,0,Ee,Ve,_e.data)}else if(A.isDataArrayTexture)if(Xe){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ie,ae.width,ae.height,ae.depth),z)if(A.layerUpdates.size>0){let J;switch(Ve){case n.UNSIGNED_BYTE:switch(Ee){case n.ALPHA:J=1;break;case n.LUMINANCE:J=1;break;case n.LUMINANCE_ALPHA:J=2;break;case n.RGB:J=3;break;case n.RGBA:J=4;break;default:throw new Error(`Unknown texel size for format ${Ee}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:J=1;break;default:throw new Error(`Unknown texel size for type ${Ve}.`)}const ee=ae.width*ae.height*J;for(const fe of A.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,ae.width,ae.height,1,Ee,Ve,ae.data.slice(ee*fe,ee*(fe+1)));A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Ve,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,Ee,Ve,ae.data);else if(A.isData3DTexture)Xe?(gt&&t.texStorage3D(n.TEXTURE_3D,ye,Ie,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Ve,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,Ee,Ve,ae.data);else if(A.isFramebufferTexture){if(gt)if(Xe)t.texStorage2D(n.TEXTURE_2D,ye,Ie,ae.width,ae.height);else{let J=ae.width,ee=ae.height;for(let fe=0;fe<ye;fe++)t.texImage2D(n.TEXTURE_2D,fe,Ie,J,ee,0,Ee,Ve,null),J>>=1,ee>>=1}}else if(We.length>0){if(Xe&&gt){const J=ut(We[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ie,J.width,J.height)}for(let J=0,ee=We.length;J<ee;J++)_e=We[J],Xe?z&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ee,Ve,_e):t.texImage2D(n.TEXTURE_2D,J,Ie,Ee,Ve,_e);A.generateMipmaps=!1}else if(Xe){if(gt){const J=ut(ae);t.texStorage2D(n.TEXTURE_2D,ye,Ie,J.width,J.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Ve,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Ee,Ve,ae);g(A)&&m(te),oe.__version=Z.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function W(D,A,$){if(A.image.length!==6)return;const te=Q(D,A),j=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+$);const Z=i.get(j);if(j.version!==Z.__version||te===!0){t.activeTexture(n.TEXTURE0+$);const oe=nt.getPrimaries(nt.workingColorSpace),le=A.colorSpace===mi?null:nt.getPrimaries(A.colorSpace),ue=A.colorSpace===mi||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ae=A.isCompressedTexture||A.image[0].isCompressedTexture,ae=A.image[0]&&A.image[0].isDataTexture,Ee=[];for(let ee=0;ee<6;ee++)!Ae&&!ae?Ee[ee]=_(A.image[ee],!0,r.maxCubemapSize):Ee[ee]=ae?A.image[ee].image:A.image[ee],Ee[ee]=Fe(A,Ee[ee]);const Ve=Ee[0],Ie=a.convert(A.format,A.colorSpace),_e=a.convert(A.type),We=M(A.internalFormat,Ie,_e,A.colorSpace),Xe=A.isVideoTexture!==!0,gt=Z.__version===void 0||te===!0,z=j.dataReady;let ye=y(A,Ve);se(n.TEXTURE_CUBE_MAP,A);let J;if(Ae){Xe&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,We,Ve.width,Ve.height);for(let ee=0;ee<6;ee++){J=Ee[ee].mipmaps;for(let fe=0;fe<J.length;fe++){const Oe=J[fe];A.format!==Dn?Ie!==null?Xe?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,Oe.width,Oe.height,Ie,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,We,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,Oe.width,Oe.height,Ie,_e,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,We,Oe.width,Oe.height,0,Ie,_e,Oe.data)}}}else{if(J=A.mipmaps,Xe&&gt){J.length>0&&ye++;const ee=ut(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,We,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Xe?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee[ee].width,Ee[ee].height,Ie,_e,Ee[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Ee[ee].width,Ee[ee].height,0,Ie,_e,Ee[ee].data);for(let fe=0;fe<J.length;fe++){const Ze=J[fe].image[ee].image;Xe?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ze.width,Ze.height,Ie,_e,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,We,Ze.width,Ze.height,0,Ie,_e,Ze.data)}}else{Xe?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,_e,Ee[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Ie,_e,Ee[ee]);for(let fe=0;fe<J.length;fe++){const Oe=J[fe];Xe?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ie,_e,Oe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,We,Ie,_e,Oe.image[ee])}}}g(A)&&m(n.TEXTURE_CUBE_MAP),Z.__version=j.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function K(D,A,$,te,j,Z){const oe=a.convert($.format,$.colorSpace),le=a.convert($.type),ue=M($.internalFormat,oe,le,$.colorSpace);if(!i.get(A).__hasExternalTextures){const ae=Math.max(1,A.width>>Z),Ee=Math.max(1,A.height>>Z);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,Z,ue,ae,Ee,A.depth,0,oe,le,null):t.texImage2D(j,Z,ue,ae,Ee,0,oe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),qe(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,j,i.get($).__webglTexture,0,Pe(A)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,j,i.get($).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(D,A,$){if(n.bindRenderbuffer(n.RENDERBUFFER,D),A.depthBuffer){const te=A.depthTexture,j=te&&te.isDepthTexture?te.type:null,Z=x(A.stencilBuffer,j),oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Pe(A);qe(A)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Z,A.width,A.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Z,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Z,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,D)}else{const te=A.textures;for(let j=0;j<te.length;j++){const Z=te[j],oe=a.convert(Z.format,Z.colorSpace),le=a.convert(Z.type),ue=M(Z.internalFormat,oe,le,Z.colorSpace),Ae=Pe(A);$&&qe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ue,A.width,A.height):qe(A)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ue,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ue,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);const te=i.get(A.depthTexture).__webglTexture,j=Pe(A);if(A.depthTexture.format===Tr)qe(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(A.depthTexture.format===Or)qe(A)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function re(D){const A=i.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");O(A.__webglFramebuffer,D)}else if($){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]=n.createRenderbuffer(),ce(A.__webglDepthbuffer[te],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),ce(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(D,A,$){const te=i.get(D);A!==void 0&&K(te.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&re(D)}function be(D){const A=D.texture,$=i.get(D),te=i.get(A);D.addEventListener("dispose",E);const j=D.textures,Z=D.isWebGLCubeRenderTarget===!0,oe=j.length>1;if(oe||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=A.version,o.memory.textures++),Z){$.__webglFramebuffer=[];for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[le]=[];for(let ue=0;ue<A.mipmaps.length;ue++)$.__webglFramebuffer[le][ue]=n.createFramebuffer()}else $.__webglFramebuffer[le]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let le=0;le<A.mipmaps.length;le++)$.__webglFramebuffer[le]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(oe)for(let le=0,ue=j.length;le<ue;le++){const Ae=i.get(j[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&qe(D)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let le=0;le<j.length;le++){const ue=j[le];$.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[le]);const Ae=a.convert(ue.format,ue.colorSpace),ae=a.convert(ue.type),Ee=M(ue.internalFormat,Ae,ae,ue.colorSpace,D.isXRRenderTarget===!0),Ve=Pe(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ee,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,$.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ce($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),se(n.TEXTURE_CUBE_MAP,A);for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0)for(let ue=0;ue<A.mipmaps.length;ue++)K($.__webglFramebuffer[le][ue],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else K($.__webglFramebuffer[le],D,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(A)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let le=0,ue=j.length;le<ue;le++){const Ae=j[le],ae=i.get(Ae);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),se(n.TEXTURE_2D,Ae),K($.__webglFramebuffer,D,Ae,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),g(Ae)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(le=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),se(le,A),A.mipmaps&&A.mipmaps.length>0)for(let ue=0;ue<A.mipmaps.length;ue++)K($.__webglFramebuffer[ue],D,A,n.COLOR_ATTACHMENT0,le,ue);else K($.__webglFramebuffer,D,A,n.COLOR_ATTACHMENT0,le,0);g(A)&&m(le),t.unbindTexture()}D.depthBuffer&&re(D)}function U(D){const A=D.textures;for(let $=0,te=A.length;$<te;$++){const j=A[$];if(g(j)){const Z=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(j).__webglTexture;t.bindTexture(Z,oe),m(Z),t.unbindTexture()}}}const pe=[],ze=[];function je(D){if(D.samples>0){if(qe(D)===!1){const A=D.textures,$=D.width,te=D.height;let j=n.COLOR_BUFFER_BIT;const Z=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(D),le=A.length>1;if(le)for(let ue=0;ue<A.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ue=0;ue<A.length;ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const Ae=i.get(A[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,$,te,0,0,$,te,j,n.NEAREST),l===!0&&(pe.length=0,ze.length=0,pe.push(n.COLOR_ATTACHMENT0+ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(pe.push(Z),ze.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ue=0;ue<A.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const Ae=i.get(A[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const A=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Pe(D){return Math.min(r.maxSamples,D.samples)}function qe(D){const A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ke(D){const A=o.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function Fe(D,A){const $=D.colorSpace,te=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Ti&&$!==mi&&(nt.getTransfer($)===ht?(te!==Dn||j!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function ut(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=xe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=K,this.useMultisampledRTT=qe}function vv(n,e){function t(i,r=mi){let a;const o=nt.getTransfer(r);if(i===wi)return n.UNSIGNED_BYTE;if(i===Oh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Of)return n.BYTE;if(i===zf)return n.SHORT;if(i===Es)return n.UNSIGNED_SHORT;if(i===Fh)return n.INT;if(i===Ur)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===Hs)return n.HALF_FLOAT;if(i===kf)return n.ALPHA;if(i===Vf)return n.RGB;if(i===Dn)return n.RGBA;if(i===Hf)return n.LUMINANCE;if(i===Gf)return n.LUMINANCE_ALPHA;if(i===Tr)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===Wf)return n.RED;if(i===Bh)return n.RED_INTEGER;if(i===qf)return n.RG;if(i===kh)return n.RG_INTEGER;if(i===Vh)return n.RGBA_INTEGER;if(i===uo||i===ho||i===fo||i===po)if(o===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===uo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===uo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ho)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===po)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yc||i===Sc||i===bc||i===Ec)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===yc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ec)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wc||i===Ac||i===Tc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===wc||i===Ac)return o===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Tc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cc||i===Rc||i===Pc||i===Lc||i===Ic||i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===zc||i===Bc||i===kc||i===Vc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Cc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ic)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return o===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===Hc||i===Gc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===mo)return o===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xf||i===Wc||i===qc||i===Xc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===mo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Wc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class _v extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xv={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yv=`
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

}`;class Sv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Xt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ni({vertexShader:Mv,fragmentShader:yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class bv extends Zi{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,v=null;const _=new Sv,g=t.getContextAttributes();let m=null,M=null;const x=[],y=[],C=new ge;let E=null;const w=new Mn;w.layers.enable(1),w.viewport=new Pt;const R=new Mn;R.layers.enable(2),R.viewport=new Pt;const b=[w,R],S=new _v;S.layers.enable(1),S.layers.enable(2);let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=x[W];return K===void 0&&(K=new ko,x[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=x[W];return K===void 0&&(K=new ko,x[W]=K),K.getGripSpace()},this.getHand=function(W){let K=x[W];return K===void 0&&(K=new ko,x[W]=K),K.getHandSpace()};function I(W){const K=y.indexOf(W.inputSource);if(K===-1)return;const ce=x[K];ce!==void 0&&(ce.update(W.inputSource,W.frame,c||o),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function F(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",k);for(let W=0;W<x.length;W++){const K=y[W];K!==null&&(y[W]=null,x[W].disconnect(K))}L=null,N=null,_.reset(),e.setRenderTarget(m),f=null,d=null,h=null,r=null,M=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",F),r.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ji(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ce=null,O=null;g.depth&&(O=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Or:Tr,ce=g.stencil?Fr:Ur);const re={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:a};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ji(d.textureWidth,d.textureHeight,{format:Dn,type:wi,depthTexture:new Qh(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(W){for(let K=0;K<W.removed.length;K++){const ce=W.removed[K],O=y.indexOf(ce);O>=0&&(y[O]=null,x[O].disconnect(ce))}for(let K=0;K<W.added.length;K++){const ce=W.added[K];let O=y.indexOf(ce);if(O===-1){for(let xe=0;xe<x.length;xe++)if(xe>=y.length){y.push(ce),O=xe;break}else if(y[xe]===null){y[xe]=ce,O=xe;break}if(O===-1)break}const re=x[O];re&&re.connect(ce)}}const V=new P,X=new P;function G(W,K,ce){V.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const O=V.distanceTo(X),re=K.projectionMatrix.elements,xe=ce.projectionMatrix.elements,be=re[14]/(re[10]-1),U=re[14]/(re[10]+1),pe=(re[9]+1)/re[5],ze=(re[9]-1)/re[5],je=(re[8]-1)/re[0],Pe=(xe[8]+1)/xe[0],qe=be*je,ke=be*Pe,Fe=O/(-je+Pe),ut=Fe*-je;K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ut),W.translateZ(Fe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const D=be+Fe,A=U+Fe,$=qe-ut,te=ke+(O-ut),j=pe*U/A*D,Z=ze*U/A*D;W.projectionMatrix.makePerspective($,te,j,Z,D,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ie(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),S.near=R.near=w.near=W.near,S.far=R.far=w.far=W.far,(L!==S.near||N!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,N=S.far,w.near=L,w.far=N,R.near=L,R.far=N,w.updateProjectionMatrix(),R.updateProjectionMatrix(),W.updateProjectionMatrix());const K=W.parent,ce=S.cameras;ie(S,K);for(let O=0;O<ce.length;O++)ie(ce[O],K);ce.length===2?G(S,w,R):S.projectionMatrix.copy(w.projectionMatrix),ne(W,S,K)};function ne(W,K,ce){ce===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Sa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let se=null;function Q(W,K){if(u=K.getViewerPose(c||o),v=K,u!==null){const ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let O=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,O=!0);for(let xe=0;xe<ce.length;xe++){const be=ce[xe];let U=null;if(f!==null)U=f.getViewport(be);else{const ze=h.getViewSubImage(d,be);U=ze.viewport,xe===0&&(e.setRenderTargetTextures(M,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(M))}let pe=b[xe];pe===void 0&&(pe=new Mn,pe.layers.enable(xe),pe.viewport=new Pt,b[xe]=pe),pe.matrix.fromArray(be.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(be.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(U.x,U.y,U.width,U.height),xe===0&&(S.matrix.copy(pe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),O===!0&&S.cameras.push(pe)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")){const xe=h.getDepthInformation(ce[0]);xe&&xe.isValid&&xe.texture&&_.init(e,xe,r.renderState)}}for(let ce=0;ce<x.length;ce++){const O=y[ce],re=x[ce];O!==null&&re!==void 0&&re.update(O,K,c||o)}se&&se(W,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const me=new Jh;me.setAnimationLoop(Q),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}const Bi=new dn,Ev=new ct;function wv(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,jh(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(g,m):m.isMeshToonMaterial?(a(g,m),h(g,m)):m.isMeshPhongMaterial?(a(g,m),u(g,m)):m.isMeshStandardMaterial?(a(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(a(g,m),v(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),_(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?l(g,m,M,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,y=M.envMapRotation;x&&(g.envMap.value=x,Bi.copy(y),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),g.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Bi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Av(n,e,t,i){let r={},a={},o=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const y=x.program;i.uniformBlockBinding(M,y)}function c(M,x){let y=r[M.id];y===void 0&&(v(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",g));const C=x.program;i.updateUBOMapping(M,C);const E=e.render.frame;a[M.id]!==E&&(d(M),a[M.id]=E)}function u(M){const x=h();M.__bindingPointIndex=x;const y=n.createBuffer(),C=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let M=0;M<s;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=r[M.id],y=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,w=y.length;E<w;E++){const R=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,S=R.length;b<S;b++){const L=R[b];if(f(L,E,b,C)===!0){const N=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let k=0;k<I.length;k++){const V=I[k],X=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,N+F,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,x,y,C){const E=M.value,w=x+"_"+y;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{const R=C[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function v(M){const x=M.uniforms;let y=0;const C=16;for(let w=0,R=x.length;w<R;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,L=b.length;S<L;S++){const N=b[S],I=Array.isArray(N.value)?N.value:[N.value];for(let F=0,k=I.length;F<k;F++){const V=I[F],X=_(V),G=y%C;G!==0&&C-G<X.boundary&&(y+=C-G),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=X.storage}}}const E=y%C;return E>0&&(y+=C-E),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function m(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},a={}}return{bind:l,update:c,dispose:m}}class ri{constructor(e={}){const{canvas:t=xp(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),v=new Int32Array(4);let _=null,g=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=Si,this.toneMappingExposure=1;const x=this;let y=!1,C=0,E=0,w=null,R=-1,b=null;const S=new Pt,L=new Pt;let N=null;const I=new Me(0);let F=0,k=t.width,V=t.height,X=1,G=null,ie=null;const ne=new Pt(0,0,k,V),se=new Pt(0,0,k,V);let Q=!1;const me=new Dl;let W=!1,K=!1;const ce=new ct,O=new P,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function be(){return w===null?X:1}let U=i;function pe(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ee,!1),U===null){const B="webgl2";if(U=pe(B,T),U===null)throw pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ze,je,Pe,qe,ke,Fe,ut,D,A,$,te,j,Z,oe,le,ue,Ae,ae,Ee,Ve,Ie,_e,We,Xe;function gt(){ze=new Ug(U),ze.init(),_e=new vv(U,ze),je=new Rg(U,ze,e,_e),Pe=new mv(U),qe=new zg(U),ke=new tv,Fe=new gv(U,ze,Pe,ke,je,_e,qe),ut=new Lg(x),D=new Ng(x),A=new qp(U),We=new Tg(U,A),$=new Fg(U,A,qe,We),te=new kg(U,$,A,qe),Ee=new Bg(U,je,Fe),ue=new Pg(ke),j=new ev(x,ut,D,ze,je,We,ue),Z=new wv(x,ke),oe=new iv,le=new cv(ze),ae=new Ag(x,ut,D,Pe,te,d,l),Ae=new pv(x,te,je),Xe=new Av(U,qe,je,Pe),Ve=new Cg(U,ze,qe),Ie=new Og(U,ze,qe),qe.programs=j.programs,x.capabilities=je,x.extensions=ze,x.properties=ke,x.renderLists=oe,x.shadowMap=Ae,x.state=Pe,x.info=qe}gt();const z=new bv(x,U);this.xr=z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(k,V,!1))},this.getSize=function(T){return T.set(k,V)},this.setSize=function(T,B,q=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,V=B,t.width=Math.floor(T*X),t.height=Math.floor(B*X),q===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(k*X,V*X).floor()},this.setDrawingBufferSize=function(T,B,q){k=T,V=B,X=q,t.width=Math.floor(T*q),t.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(ne)},this.setViewport=function(T,B,q,Y){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,B,q,Y),Pe.viewport(S.copy(ne).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,B,q,Y){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,B,q,Y),Pe.scissor(L.copy(se).multiplyScalar(X).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(T){Pe.setScissorTest(Q=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){ie=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,B=!0,q=!0){let Y=0;if(T){let H=!1;if(w!==null){const de=w.texture.format;H=de===Vh||de===kh||de===Bh}if(H){const de=w.texture.type,Se=de===wi||de===Ur||de===Es||de===Fr||de===Oh||de===zh,we=ae.getClearColor(),Te=ae.getClearAlpha(),Ne=we.r,Ue=we.g,Le=we.b;Se?(f[0]=Ne,f[1]=Ue,f[2]=Le,f[3]=Te,U.clearBufferuiv(U.COLOR,0,f)):(v[0]=Ne,v[1]=Ue,v[2]=Le,v[3]=Te,U.clearBufferiv(U.COLOR,0,v))}else Y|=U.COLOR_BUFFER_BIT}B&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),oe.dispose(),le.dispose(),ke.dispose(),ut.dispose(),D.dispose(),te.dispose(),We.dispose(),Xe.dispose(),j.dispose(),z.dispose(),z.removeEventListener("sessionstart",wn),z.removeEventListener("sessionend",An),Ii.stop()};function ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=qe.autoReset,B=Ae.enabled,q=Ae.autoUpdate,Y=Ae.needsUpdate,H=Ae.type;gt(),qe.autoReset=T,Ae.enabled=B,Ae.autoUpdate=q,Ae.needsUpdate=Y,Ae.type=H}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function fe(T){const B=T.target;B.removeEventListener("dispose",fe),Oe(B)}function Oe(T){Ze(T),ke.remove(T)}function Ze(T){const B=ke.get(T).programs;B!==void 0&&(B.forEach(function(q){j.releaseProgram(q)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,Y,H,de){B===null&&(B=re);const Se=H.isMesh&&H.matrixWorld.determinant()<0,we=jd(T,B,q,Y,H);Pe.setMaterial(Y,Se);let Te=q.index,Ne=1;if(Y.wireframe===!0){if(Te=$.getWireframeAttribute(q),Te===void 0)return;Ne=2}const Ue=q.drawRange,Le=q.attributes.position;let Qe=Ue.start*Ne,pt=(Ue.start+Ue.count)*Ne;de!==null&&(Qe=Math.max(Qe,de.start*Ne),pt=Math.min(pt,(de.start+de.count)*Ne)),Te!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,Te.count)):Le!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,Le.count));const mt=pt-Qe;if(mt<0||mt===1/0)return;We.setup(H,Y,we,q,Te);let Jt,et=Ve;if(Te!==null&&(Jt=A.get(Te),et=Ie,et.setIndex(Jt)),H.isMesh)Y.wireframe===!0?(Pe.setLineWidth(Y.wireframeLinewidth*be()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(H.isLine){let Re=Y.linewidth;Re===void 0&&(Re=1),Pe.setLineWidth(Re*be()),H.isLineSegments?et.setMode(U.LINES):H.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else H.isPoints?et.setMode(U.POINTS):H.isSprite&&et.setMode(U.TRIANGLES);if(H.isBatchedMesh)H._multiDrawInstances!==null?et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances):et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)et.renderInstances(Qe,mt,H.count);else if(q.isInstancedBufferGeometry){const Re=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zt=Math.min(q.instanceCount,Re);et.renderInstances(Qe,mt,zt)}else et.render(Qe,mt)};function vt(T,B,q){T.transparent===!0&&T.side===ot&&T.forceSinglePass===!1?(T.side=jt,T.needsUpdate=!0,Da(T,B,q),T.side=Ei,T.needsUpdate=!0,Da(T,B,q),T.side=ot):Da(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),g=le.get(q),g.init(B),M.push(g),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),T!==q&&T.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const Y=new Set;return T.traverse(function(H){const de=H.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const we=de[Se];vt(we,q,H),Y.add(we)}else vt(de,q,H),Y.add(de)}),M.pop(),g=null,Y},this.compileAsync=function(T,B,q=null){const Y=this.compile(T,B,q);return new Promise(H=>{function de(){if(Y.forEach(function(Se){ke.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){H(T);return}setTimeout(de,10)}ze.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Et=null;function rt(T){Et&&Et(T)}function wn(){Ii.stop()}function An(){Ii.start()}const Ii=new Jh;Ii.setAnimationLoop(rt),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(T){Et=T,z.setAnimationLoop(T),T===null?Ii.stop():Ii.start()},z.addEventListener("sessionstart",wn),z.addEventListener("sessionend",An),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(B),B=z.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,w),g=le.get(T,M.length),g.init(B),M.push(g),ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),me.setFromProjectionMatrix(ce),K=this.localClippingEnabled,W=ue.init(this.clippingPlanes,K),_=oe.get(T,m.length),_.init(),m.push(_),z.enabled===!0&&z.isPresenting===!0){const de=x.xr.getDepthSensingMesh();de!==null&&ro(de,B,-1/0,x.sortObjects)}ro(T,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,ie),xe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,xe&&ae.addToRenderList(_,T),this.info.render.frame++,W===!0&&ue.beginShadows();const q=g.state.shadowsArray;Ae.render(q,T,B),W===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,H=_.transmissive;if(g.setupLights(),B.isArrayCamera){const de=B.cameras;if(H.length>0)for(let Se=0,we=de.length;Se<we;Se++){const Te=de[Se];fc(Y,H,T,Te)}xe&&ae.render(T);for(let Se=0,we=de.length;Se<we;Se++){const Te=de[Se];dc(_,T,Te,Te.viewport)}}else H.length>0&&fc(Y,H,T,B),xe&&ae.render(T),dc(_,T,B);w!==null&&(Fe.updateMultisampleRenderTarget(w),Fe.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,B),We.resetDefaultState(),R=-1,b=null,M.pop(),M.length>0?(g=M[M.length-1],W===!0&&ue.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ro(T,B,q,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||me.intersectsSprite(T)){Y&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const Se=te.update(T),we=T.material;we.visible&&_.push(T,Se,we,q,O.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||me.intersectsObject(T))){const Se=te.update(T),we=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),O.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),O.copy(Se.boundingSphere.center)),O.applyMatrix4(T.matrixWorld).applyMatrix4(ce)),Array.isArray(we)){const Te=Se.groups;for(let Ne=0,Ue=Te.length;Ne<Ue;Ne++){const Le=Te[Ne],Qe=we[Le.materialIndex];Qe&&Qe.visible&&_.push(T,Se,Qe,q,O.z,Le)}}else we.visible&&_.push(T,Se,we,q,O.z,null)}}const de=T.children;for(let Se=0,we=de.length;Se<we;Se++)ro(de[Se],B,q,Y)}function dc(T,B,q,Y){const H=T.opaque,de=T.transmissive,Se=T.transparent;g.setupLightsView(q),W===!0&&ue.setGlobalState(x.clippingPlanes,q),Y&&Pe.viewport(S.copy(Y)),H.length>0&&Ia(H,B,q),de.length>0&&Ia(de,B,q),Se.length>0&&Ia(Se,B,q),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function fc(T,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new ji(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Hs:wi,minFilter:qi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const de=g.state.transmissionRenderTarget[Y.id],Se=Y.viewport||S;de.setSize(Se.z,Se.w);const we=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(I),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),xe?ae.render(q):x.clear();const Te=x.toneMapping;x.toneMapping=Si;const Ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),W===!0&&ue.setGlobalState(x.clippingPlanes,Y),Ia(T,q,Y),Fe.updateMultisampleRenderTarget(de),Fe.updateRenderTargetMipmap(de),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Le=0,Qe=B.length;Le<Qe;Le++){const pt=B[Le],mt=pt.object,Jt=pt.geometry,et=pt.material,Re=pt.group;if(et.side===ot&&mt.layers.test(Y.layers)){const zt=et.side;et.side=jt,et.needsUpdate=!0,pc(mt,q,Y,Jt,et,Re),et.side=zt,et.needsUpdate=!0,Ue=!0}}Ue===!0&&(Fe.updateMultisampleRenderTarget(de),Fe.updateRenderTargetMipmap(de))}x.setRenderTarget(we),x.setClearColor(I,F),Ne!==void 0&&(Y.viewport=Ne),x.toneMapping=Te}function Ia(T,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let H=0,de=T.length;H<de;H++){const Se=T[H],we=Se.object,Te=Se.geometry,Ne=Y===null?Se.material:Y,Ue=Se.group;we.layers.test(q.layers)&&pc(we,B,q,Te,Ne,Ue)}}function pc(T,B,q,Y,H,de){T.onBeforeRender(x,B,q,Y,H,de),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,B,q,Y,T,de),H.transparent===!0&&H.side===ot&&H.forceSinglePass===!1?(H.side=jt,H.needsUpdate=!0,x.renderBufferDirect(q,B,Y,H,T,de),H.side=Ei,H.needsUpdate=!0,x.renderBufferDirect(q,B,Y,H,T,de),H.side=ot):x.renderBufferDirect(q,B,Y,H,T,de),T.onAfterRender(x,B,q,Y,H,de)}function Da(T,B,q){B.isScene!==!0&&(B=re);const Y=ke.get(T),H=g.state.lights,de=g.state.shadowsArray,Se=H.state.version,we=j.getParameters(T,H.state,de,B,q),Te=j.getProgramCacheKey(we);let Ne=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?D:ut).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",fe),Ne=new Map,Y.programs=Ne);let Ue=Ne.get(Te);if(Ue!==void 0){if(Y.currentProgram===Ue&&Y.lightsStateVersion===Se)return gc(T,we),Ue}else we.uniforms=j.getUniforms(T),T.onBuild(q,we,x),T.onBeforeCompile(we,x),Ue=j.acquireProgram(we,Te),Ne.set(Te,Ue),Y.uniforms=we.uniforms;const Le=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=ue.uniform),gc(T,we),Y.needsLights=Kd(T),Y.lightsStateVersion=Se,Y.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Ue,Y.uniformsList=null,Ue}function mc(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Ms.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function gc(T,B){const q=ke.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function jd(T,B,q,Y,H){B.isScene!==!0&&(B=re),Fe.resetTextureUnits();const de=B.fog,Se=Y.isMeshStandardMaterial?B.environment:null,we=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ti,Te=(Y.isMeshStandardMaterial?D:ut).get(Y.envMap||Se),Ne=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ue=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,pt=!!q.morphAttributes.color;let mt=Si;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=x.toneMapping);const Jt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,et=Jt!==void 0?Jt.length:0,Re=ke.get(Y),zt=g.state.lights;if(W===!0&&(K===!0||T!==b)){const an=T===b&&Y.id===R;ue.setState(Y,T,an)}let at=!1;Y.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==zt.state.version||Re.outputColorSpace!==we||H.isBatchedMesh&&Re.batching===!1||!H.isBatchedMesh&&Re.batching===!0||H.isBatchedMesh&&Re.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Re.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Re.instancing===!1||!H.isInstancedMesh&&Re.instancing===!0||H.isSkinnedMesh&&Re.skinning===!1||!H.isSkinnedMesh&&Re.skinning===!0||H.isInstancedMesh&&Re.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Re.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Re.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Re.instancingMorph===!1&&H.morphTexture!==null||Re.envMap!==Te||Y.fog===!0&&Re.fog!==de||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ue.numPlanes||Re.numIntersection!==ue.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Ue||Re.morphTargets!==Le||Re.morphNormals!==Qe||Re.morphColors!==pt||Re.toneMapping!==mt||Re.morphTargetsCount!==et)&&(at=!0):(at=!0,Re.__version=Y.version);let Gn=Re.currentProgram;at===!0&&(Gn=Da(Y,B,H));let Na=!1,Di=!1,ao=!1;const wt=Gn.getUniforms(),si=Re.uniforms;if(Pe.useProgram(Gn.program)&&(Na=!0,Di=!0,ao=!0),Y.id!==R&&(R=Y.id,Di=!0),Na||b!==T){wt.setValue(U,"projectionMatrix",T.projectionMatrix),wt.setValue(U,"viewMatrix",T.matrixWorldInverse);const an=wt.map.cameraPosition;an!==void 0&&an.setValue(U,O.setFromMatrixPosition(T.matrixWorld)),je.logarithmicDepthBuffer&&wt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&wt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Di=!0,ao=!0)}if(H.isSkinnedMesh){wt.setOptional(U,H,"bindMatrix"),wt.setOptional(U,H,"bindMatrixInverse");const an=H.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),wt.setValue(U,"boneTexture",an.boneTexture,Fe))}H.isBatchedMesh&&(wt.setOptional(U,H,"batchingTexture"),wt.setValue(U,"batchingTexture",H._matricesTexture,Fe),wt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&wt.setValue(U,"batchingColorTexture",H._colorsTexture,Fe));const so=q.morphAttributes;if((so.position!==void 0||so.normal!==void 0||so.color!==void 0)&&Ee.update(H,q,Gn),(Di||Re.receiveShadow!==H.receiveShadow)&&(Re.receiveShadow=H.receiveShadow,wt.setValue(U,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(si.envMap.value=Te,si.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(si.envMapIntensity.value=B.environmentIntensity),Di&&(wt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Zd(si,ao),de&&Y.fog===!0&&Z.refreshFogUniforms(si,de),Z.refreshMaterialUniforms(si,Y,X,V,g.state.transmissionRenderTarget[T.id]),Ms.upload(U,mc(Re),si,Fe)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ms.upload(U,mc(Re),si,Fe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&wt.setValue(U,"center",H.center),wt.setValue(U,"modelViewMatrix",H.modelViewMatrix),wt.setValue(U,"normalMatrix",H.normalMatrix),wt.setValue(U,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const an=Y.uniformsGroups;for(let oo=0,Jd=an.length;oo<Jd;oo++){const vc=an[oo];Xe.update(vc,Gn),Xe.bind(vc,Gn)}}return Gn}function Zd(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Kd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,B,q){ke.get(T.texture).__webglTexture=B,ke.get(T.depthTexture).__webglTexture=q;const Y=ke.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const q=ke.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){w=T,C=B,E=q;let Y=!0,H=null,de=!1,Se=!1;if(T){const Te=ke.get(T);Te.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1):Te.__webglFramebuffer===void 0?Fe.setupRenderTarget(T):Te.__hasExternalTextures&&Fe.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);const Ue=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?H=Ue[B][q]:H=Ue[B],de=!0):T.samples>0&&Fe.useMultisampledRTT(T)===!1?H=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[q]:H=Ue,S.copy(T.viewport),L.copy(T.scissor),N=T.scissorTest}else S.copy(ne).multiplyScalar(X).floor(),L.copy(se).multiplyScalar(X).floor(),N=Q;if(Pe.bindFramebuffer(U.FRAMEBUFFER,H)&&Y&&Pe.drawBuffers(T,H),Pe.viewport(S),Pe.scissor(L),Pe.setScissorTest(N),de){const Te=ke.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,q)}else if(Se){const Te=ke.get(T.texture),Ne=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,q||0,Ne)}R=-1},this.readRenderTargetPixels=function(T,B,q,Y,H,de,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){Pe.bindFramebuffer(U.FRAMEBUFFER,we);try{const Te=T.texture,Ne=Te.format,Ue=Te.type;if(!je.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&q>=0&&q<=T.height-H&&U.readPixels(B,q,Y,H,_e.convert(Ne),_e.convert(Ue),de)}finally{const Te=w!==null?ke.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,Y,H,de,Se){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){Pe.bindFramebuffer(U.FRAMEBUFFER,we);try{const Te=T.texture,Ne=Te.format,Ue=Te.type;if(!je.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-Y&&q>=0&&q<=T.height-H){const Le=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(B,q,Y,H,_e.convert(Ne),_e.convert(Ue),0),U.flush();const Qe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await Mp(U,Qe,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de)}finally{U.deleteBuffer(Le),U.deleteSync(Qe)}return de}}finally{const Te=w!==null?ke.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,B=null,q=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-q),H=Math.floor(T.image.width*Y),de=Math.floor(T.image.height*Y),Se=B!==null?B.x:0,we=B!==null?B.y:0;Fe.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Se,we,H,de),Pe.unbindTexture()},this.copyTextureToTexture=function(T,B,q=null,Y=null,H=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],B=arguments[2],H=arguments[3]||0,q=null);let de,Se,we,Te,Ne,Ue;q!==null?(de=q.max.x-q.min.x,Se=q.max.y-q.min.y,we=q.min.x,Te=q.min.y):(de=T.image.width,Se=T.image.height,we=0,Te=0),Y!==null?(Ne=Y.x,Ue=Y.y):(Ne=0,Ue=0);const Le=_e.convert(B.format),Qe=_e.convert(B.type);Fe.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const pt=U.getParameter(U.UNPACK_ROW_LENGTH),mt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Jt=U.getParameter(U.UNPACK_SKIP_PIXELS),et=U.getParameter(U.UNPACK_SKIP_ROWS),Re=U.getParameter(U.UNPACK_SKIP_IMAGES),zt=T.isCompressedTexture?T.mipmaps[H]:T.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,zt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,zt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,we),U.pixelStorei(U.UNPACK_SKIP_ROWS,Te),T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,Ne,Ue,de,Se,Le,Qe,zt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,Ne,Ue,zt.width,zt.height,Le,zt.data):U.texSubImage2D(U.TEXTURE_2D,H,Ne,Ue,Le,Qe,zt),U.pixelStorei(U.UNPACK_ROW_LENGTH,pt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Jt),U.pixelStorei(U.UNPACK_SKIP_ROWS,et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Re),H===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q=null,Y=null,H=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],B=arguments[3],H=arguments[4]||0);let de,Se,we,Te,Ne,Ue,Le,Qe,pt;const mt=T.isCompressedTexture?T.mipmaps[H]:T.image;q!==null?(de=q.max.x-q.min.x,Se=q.max.y-q.min.y,we=q.max.z-q.min.z,Te=q.min.x,Ne=q.min.y,Ue=q.min.z):(de=mt.width,Se=mt.height,we=mt.depth,Te=0,Ne=0,Ue=0),Y!==null?(Le=Y.x,Qe=Y.y,pt=Y.z):(Le=0,Qe=0,pt=0);const Jt=_e.convert(B.format),et=_e.convert(B.type);let Re;if(B.isData3DTexture)Fe.setTexture3D(B,0),Re=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Fe.setTexture2DArray(B,0),Re=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const zt=U.getParameter(U.UNPACK_ROW_LENGTH),at=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Gn=U.getParameter(U.UNPACK_SKIP_PIXELS),Na=U.getParameter(U.UNPACK_SKIP_ROWS),Di=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ne),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ue),T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Re,H,Le,Qe,pt,de,Se,we,Jt,et,mt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,H,Le,Qe,pt,de,Se,we,Jt,mt.data):U.texSubImage3D(Re,H,Le,Qe,pt,de,Se,we,Jt,et,mt),U.pixelStorei(U.UNPACK_ROW_LENGTH,zt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Gn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Na),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Di),H===0&&B.generateMipmaps&&U.generateMipmap(Re),Pe.unbindTexture()},this.initRenderTarget=function(T){ke.get(T).__webglFramebuffer===void 0&&Fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Fe.setTextureCube(T,0):T.isData3DTexture?Fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Fe.setTexture2DArray(T,0):Fe.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){C=0,E=0,w=null,Pe.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Rl?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Ws?"display-p3":"srgb"}}class Ri extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ll("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new P;class Ps{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),a=tt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ps(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ad extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mr;const na=new P,yr=new P,Sr=new P,br=new ge,ia=new ge,sd=new ct,rs=new P,ra=new P,as=new P,zu=new ge,Vo=new ge,Bu=new ge;class Cv extends Mt{constructor(e=new ad){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new $e;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Tv(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new Ps(i,3,0,!1)),Mr.setAttribute("uv",new Ps(i,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),sd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-Sr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;ss(rs.set(-.5,-.5,0),Sr,o,yr,r,a),ss(ra.set(.5,-.5,0),Sr,o,yr,r,a),ss(as.set(.5,.5,0),Sr,o,yr,r,a),zu.set(0,0),Vo.set(1,0),Bu.set(1,1);let s=e.ray.intersectTriangle(rs,ra,as,!1,na);if(s===null&&(ss(ra.set(-.5,.5,0),Sr,o,yr,r,a),Vo.set(0,1),s=e.ray.intersectTriangle(rs,as,ra,!1,na),s===null))return;const l=e.ray.origin.distanceTo(na);l<e.near||l>e.far||t.push({distance:l,point:na.clone(),uv:ln.getInterpolation(na,rs,ra,as,zu,Vo,Bu,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ss(n,e,t,i,r,a){br.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ia.x=a*br.x-r*br.y,ia.y=r*br.x+a*br.y):ia.copy(br),n.copy(e),n.x+=ia.x,n.y+=ia.y,n.applyMatrix4(sd)}class Ki extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ls=new P,Is=new P,ku=new ct,aa=new qs,os=new Ci,Ho=new P,Vu=new P;class ba extends Mt{constructor(e=new $e,t=new Ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Ls.fromBufferAttribute(t,r-1),Is.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ls.distanceTo(Is);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(r),os.radius+=a,e.ray.intersectsSphere(os)===!1)return;ku.copy(r).invert(),aa.copy(e.ray).applyMatrix4(ku);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=f,g=v-1;_<g;_+=c){const m=u.getX(_),M=u.getX(_+1),x=ls(this,e,aa,l,m,M);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(v-1),g=u.getX(f),m=ls(this,e,aa,l,_,g);m&&t.push(m)}}else{const f=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let _=f,g=v-1;_<g;_+=c){const m=ls(this,e,aa,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=ls(this,e,aa,l,v-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function ls(n,e,t,i,r,a){const o=n.geometry.attributes.position;if(Ls.fromBufferAttribute(o,r),Is.fromBufferAttribute(o,a),t.distanceSqToSegment(Ls,Is,Ho,Vu)>i)return;Ho.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ho);if(!(l<e.near||l>e.far))return{distance:l,point:Vu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Hu=new P,Gu=new P;class Ul extends ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Hu.fromBufferAttribute(t,r),Gu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Hu.distanceTo(Gu);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rv extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wu=new ct,hl=new qs,cs=new Ci,us=new P;class Pv extends Mt{constructor(e=new $e,t=new Rv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(r),cs.radius+=a,e.ray.intersectsSphere(cs)===!1)return;Wu.copy(r).invert(),hl.copy(e.ray).applyMatrix4(Wu);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=d,_=f;v<_;v++){const g=c.getX(v);us.fromBufferAttribute(h,g),qu(us,g,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let v=d,_=f;v<_;v++)us.fromBufferAttribute(h,v),qu(us,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function qu(n,e,t,i,r,a,o){const s=hl.distanceSqToPoint(n);if(s<t){const l=new P;hl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class Lv extends Xt{constructor(e,t,i,r,a,o,s,l,c){super(e,t,i,r,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let o;t?o=t:o=e*i[a-1];let s=0,l=a-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=i[r]-o,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(a-1);const u=i[r],d=i[r+1]-u,f=(o-u)/d;return(r+f)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),l=t||(o.isVector2?new ge:new P);return l.copy(s).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,r=[],a=[],o=[],s=new P,l=new ct;for(let f=0;f<=e;f++){const v=f/e;r[f]=this.getTangentAt(v,new P)}a[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),o[f]=o[f-1].clone(),s.crossVectors(r[f-1],r[f]),s.length()>Number.EPSILON){s.normalize();const v=Math.acos(Rt(r[f-1].dot(r[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(s,v))}o[f].crossVectors(r[f],a[f])}if(t===!0){let f=Math.acos(Rt(a[0].dot(a[e]),-1,1));f/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(f=-f);for(let v=1;v<=e;v++)a[v].applyMatrix4(l.makeRotationAxis(r[v],f*v)),o[v].crossVectors(r[v],a[v])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class od extends ai{constructor(e=0,t=0,i=1,r=1,a=0,o=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=l}getPoint(e,t=new ge){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);const s=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Iv extends od{constructor(e,t,i,r,a,o){super(e,t,i,i,r,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fl(){let n=0,e=0,t=0,i=0;function r(a,o,s,l){n=a,e=s,t=-3*a+3*o-2*s-l,i=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,c){r(o,s,c*(s-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,c,u,h){let d=(o-a)/c-(s-a)/(c+u)+(s-o)/u,f=(s-o)/u-(l-o)/(u+h)+(l-s)/h;d*=u,f*=u,r(o,s,d,f)},calc:function(a){const o=a*a,s=o*a;return n+e*a+t*o+i*s}}}const hs=new P,Go=new Fl,Wo=new Fl,qo=new Fl;class ld extends ai{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let s=Math.floor(o),l=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:l===0&&s===a-1&&(s=a-2,l=1);let c,u;this.closed||s>0?c=r[(s-1)%a]:(hs.subVectors(r[0],r[1]).add(r[0]),c=hs);const h=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(hs.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=hs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),v<1e-4&&(v=_),g<1e-4&&(g=_),Go.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,_,g),Wo.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,_,g),qo.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,_,g)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Wo.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),qo.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Go.calc(l),Wo.calc(l),qo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xu(n,e,t,i,r){const a=(i-e)*.5,o=(r-t)*.5,s=n*n,l=n*s;return(2*t-2*i+a+o)*l+(-3*t+3*i-2*a-o)*s+a*n+t}function Dv(n,e){const t=1-n;return t*t*e}function Nv(n,e){return 2*(1-n)*n*e}function Uv(n,e){return n*n*e}function ha(n,e,t,i){return Dv(n,e)+Nv(n,t)+Uv(n,i)}function Fv(n,e){const t=1-n;return t*t*t*e}function Ov(n,e){const t=1-n;return 3*t*t*n*e}function zv(n,e){return 3*(1-n)*n*n*e}function Bv(n,e){return n*n*n*e}function da(n,e,t,i,r){return Fv(n,e)+Ov(n,t)+zv(n,i)+Bv(n,r)}class kv extends ai{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(da(e,r.x,a.x,o.x,s.x),da(e,r.y,a.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vv extends ai{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(da(e,r.x,a.x,o.x,s.x),da(e,r.y,a.y,o.y,s.y),da(e,r.z,a.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hv extends ai{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gv extends ai{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wv extends ai{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(ha(e,r.x,a.x,o.x),ha(e,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends ai{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(ha(e,r.x,a.x,o.x),ha(e,r.y,a.y,o.y),ha(e,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qv extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,r=this.points,a=(r.length-1)*e,o=Math.floor(a),s=a-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Xu(s,l.x,c.x,u.x,h.x),Xu(s,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ge().fromArray(r))}return this}}var Xv=Object.freeze({__proto__:null,ArcCurve:Iv,CatmullRomCurve3:ld,CubicBezierCurve:kv,CubicBezierCurve3:Vv,EllipseCurve:od,LineCurve:Hv,LineCurve3:Gv,QuadraticBezierCurve:Wv,QuadraticBezierCurve3:cd,SplineCurve:qv});class Ol extends $e{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],o=[],s=[],l=[],c=new P,u=new ge;o.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),s.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(s,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xr extends $e{constructor(e=1,t=1,i=1,r=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],h=[],d=[],f=[];let v=0;const _=[],g=i/2;let m=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Be(h,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(f,2));function M(){const y=new P,C=new P;let E=0;const w=(t-e)/i;for(let R=0;R<=a;R++){const b=[],S=R/a,L=S*(t-e)+e;for(let N=0;N<=r;N++){const I=N/r,F=I*l+s,k=Math.sin(F),V=Math.cos(F);C.x=L*k,C.y=-S*i+g,C.z=L*V,h.push(C.x,C.y,C.z),y.set(k,w,V).normalize(),d.push(y.x,y.y,y.z),f.push(I,1-S),b.push(v++)}_.push(b)}for(let R=0;R<r;R++)for(let b=0;b<a;b++){const S=_[b][R],L=_[b+1][R],N=_[b+1][R+1],I=_[b][R+1];u.push(S,L,I),u.push(L,N,I),E+=6}c.addGroup(m,E,0),m+=E}function x(y){const C=v,E=new ge,w=new P;let R=0;const b=y===!0?e:t,S=y===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),v++;const L=v;for(let N=0;N<=r;N++){const F=N/r*l+s,k=Math.cos(F),V=Math.sin(F);w.x=b*V,w.y=g*S,w.z=b*k,h.push(w.x,w.y,w.z),d.push(0,S,0),E.x=k*.5+.5,E.y=V*.5*S+.5,f.push(E.x,E.y),v++}for(let N=0;N<r;N++){const I=C+N,F=L+N;y===!0?u.push(F,F+1,I):u.push(F+1,F,I),R+=3}c.addGroup(m,R,y===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zl extends Xr{constructor(e=1,t=1,i=32,r=1,a=!1,o=0,s=Math.PI*2){super(0,e,t,i,r,a,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(e){return new zl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ds=new P,fs=new P,Xo=new P,ps=new ln;class Yv extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(Cr*t),o=e.getIndex(),s=e.getAttribute("position"),l=o?o.count:s.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:g,c:m}=ps;if(_.fromBufferAttribute(s,c[0]),g.fromBufferAttribute(s,c[1]),m.fromBufferAttribute(s,c[2]),ps.getNormal(Xo),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const x=(M+1)%3,y=h[M],C=h[x],E=ps[u[M]],w=ps[u[x]],R=`${y}_${C}`,b=`${C}_${y}`;b in d&&d[b]?(Xo.dot(d[b].normal)<=a&&(f.push(E.x,E.y,E.z),f.push(w.x,w.y,w.z)),d[b]=null):R in d||(d[R]={index0:c[M],index1:c[x],normal:Xo.clone()})}}for(const v in d)if(d[v]){const{index0:_,index1:g}=d[v];ds.fromBufferAttribute(s,_),fs.fromBufferAttribute(s,g),f.push(ds.x,ds.y,ds.z),f.push(fs.x,fs.y,fs.z)}this.setAttribute("position",new Be(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yr extends $e{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+s,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],v=[],_=[],g=[];for(let m=0;m<=i;m++){const M=[],x=m/i;let y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const E=C/t;h.x=-e*Math.cos(r+E*a)*Math.sin(o+x*s),h.y=e*Math.cos(o+x*s),h.z=e*Math.sin(r+E*a)*Math.sin(o+x*s),v.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(E+y,1-x),M.push(c++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){const x=u[m][M+1],y=u[m][M],C=u[m+1][M],E=u[m+1][M+1];(m!==0||o>0)&&f.push(x,y,E),(m!==i-1||l<Math.PI)&&f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new Be(v,3)),this.setAttribute("normal",new Be(_,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bl extends $e{constructor(e=new cd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};const o=e.computeFrenetFrames(t,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const s=new P,l=new P,c=new ge;let u=new P;const h=[],d=[],f=[],v=[];_(),this.setIndex(v),this.setAttribute("position",new Be(h,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(f,2));function _(){for(let x=0;x<t;x++)g(x);g(a===!1?t:0),M(),m()}function g(x){u=e.getPointAt(x/t,u);const y=o.normals[x],C=o.binormals[x];for(let E=0;E<=r;E++){const w=E/r*Math.PI*2,R=Math.sin(w),b=-Math.cos(w);l.x=b*y.x+R*C.x,l.y=b*y.y+R*C.y,l.z=b*y.z+R*C.z,l.normalize(),d.push(l.x,l.y,l.z),s.x=u.x+i*l.x,s.y=u.y+i*l.y,s.z=u.z+i*l.z,h.push(s.x,s.y,s.z)}}function m(){for(let x=1;x<=t;x++)for(let y=1;y<=r;y++){const C=(r+1)*(x-1)+(y-1),E=(r+1)*x+(y-1),w=(r+1)*x+y,R=(r+1)*(x-1)+y;v.push(C,E,R),v.push(E,w,R)}}function M(){for(let x=0;x<=t;x++)for(let y=0;y<=r;y++)c.x=x/t,c.y=y/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bl(new Xv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class $v extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jv extends $v{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xi extends kn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ud extends kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hd extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Yo=new ct,Yu=new P,$u=new P;class Zv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dl,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kv extends Zv{constructor(){super(new En(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fn extends hd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Kv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pi extends hd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ju=new ct;class Jv{constructor(e,t,i=0,r=1/0){this.ray=new qs(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(e,t=!0,i=[]){return dl(e,this,i,t),i.sort(Zu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)dl(e[r],this,i,t);return i.sort(Zu),i}}function Zu(n,e){return n.distance-e.distance}function dl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let o=0,s=a.length;o<s;o++)dl(a[o],e,t,!0)}}const Ku=new P;let ms,$o;class Qv extends Mt{constructor(e=new P(0,0,1),t=new P(0,0,0),i=1,r=16776960,a=i*.2,o=a*.2){super(),this.type="ArrowHelper",ms===void 0&&(ms=new $e,ms.setAttribute("position",new Be([0,0,0,0,1,0],3)),$o=new Xr(0,.5,1,5,1),$o.translate(0,-.5,0)),this.position.copy(t),this.line=new ba(ms,new Ki({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ye($o,new nn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ku.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ku,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);const jo={type:"change"},Zo={type:"start"},Ko={type:"end"};class e_ extends Zi{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:lo.ROTATE,MIDDLE:lo.DOLLY,RIGHT:lo.PAN},this.target=new P;const a=1e-6,o=new P;let s=1,l=r.NONE,c=r.NONE,u=0,h=0,d=0;const f=new P,v=new ge,_=new ge,g=new P,m=new ge,M=new ge,x=new ge,y=new ge,C=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const O=i.domElement.getBoundingClientRect(),re=i.domElement.ownerDocument.documentElement;i.screen.left=O.left+window.pageXOffset-re.clientLeft,i.screen.top=O.top+window.pageYOffset-re.clientTop,i.screen.width=O.width,i.screen.height=O.height};const w=function(){const O=new ge;return function(xe,be){return O.set((xe-i.screen.left)/i.screen.width,(be-i.screen.top)/i.screen.height),O}}(),R=function(){const O=new ge;return function(xe,be){return O.set((xe-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-be))/i.screen.width),O}}();this.rotateCamera=function(){const O=new P,re=new Gr,xe=new P,be=new P,U=new P,pe=new P;return function(){pe.set(_.x-v.x,_.y-v.y,0);let je=pe.length();je?(f.copy(i.object.position).sub(i.target),xe.copy(f).normalize(),be.copy(i.object.up).normalize(),U.crossVectors(be,xe).normalize(),be.setLength(_.y-v.y),U.setLength(_.x-v.x),pe.copy(be.add(U)),O.crossVectors(pe,f).normalize(),je*=i.rotateSpeed,re.setFromAxisAngle(O,je),f.applyQuaternion(re),i.object.up.applyQuaternion(re),g.copy(O),d=je):!i.staticMoving&&d&&(d*=Math.sqrt(1-i.dynamicDampingFactor),f.copy(i.object.position).sub(i.target),re.setFromAxisAngle(g,d),f.applyQuaternion(re),i.object.up.applyQuaternion(re)),v.copy(_)}}(),this.zoomCamera=function(){let O;l===r.TOUCH_ZOOM_PAN?(O=u/h,u=h,i.object.isPerspectiveCamera?f.multiplyScalar(O):i.object.isOrthographicCamera?(i.object.zoom=Zc.clamp(i.object.zoom/O,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(O=1+(M.y-m.y)*i.zoomSpeed,O!==1&&O>0&&(i.object.isPerspectiveCamera?f.multiplyScalar(O):i.object.isOrthographicCamera?(i.object.zoom=Zc.clamp(i.object.zoom/O,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?m.copy(M):m.y+=(M.y-m.y)*this.dynamicDampingFactor)},this.panCamera=function(){const O=new ge,re=new P,xe=new P;return function(){if(O.copy(y).sub(x),O.lengthSq()){if(i.object.isOrthographicCamera){const U=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,pe=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;O.x*=U,O.y*=pe}O.multiplyScalar(f.length()*i.panSpeed),xe.copy(f).cross(i.object.up).setLength(O.x),xe.add(re.copy(i.object.up).setLength(O.y)),i.object.position.add(xe),i.target.add(xe),i.staticMoving?x.copy(y):x.add(O.subVectors(y,x).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(f.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,f.setLength(i.maxDistance)),m.copy(M)),f.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,f.setLength(i.minDistance)),m.copy(M)))},this.update=function(){f.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,f),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>a&&(i.dispatchEvent(jo),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>a||s!==i.object.zoom)&&(i.dispatchEvent(jo),o.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),f.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(jo),o.copy(i.object.position),s=i.object.zoom};function b(O){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",L)),me(O),O.pointerType==="touch"?ie(O):k(O))}function S(O){i.enabled!==!1&&(O.pointerType==="touch"?ne(O):V(O))}function L(O){i.enabled!==!1&&(O.pointerType==="touch"?se(O):X(),W(O),C.length===0&&(i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",L)))}function N(O){W(O)}function I(O){i.enabled!==!1&&(window.removeEventListener("keydown",I),c===r.NONE&&(O.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:O.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:O.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function F(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",I))}function k(O){if(l===r.NONE)switch(O.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const re=c!==r.NONE?c:l;re===r.ROTATE&&!i.noRotate?(_.copy(R(O.pageX,O.pageY)),v.copy(_)):re===r.ZOOM&&!i.noZoom?(m.copy(w(O.pageX,O.pageY)),M.copy(m)):re===r.PAN&&!i.noPan&&(x.copy(w(O.pageX,O.pageY)),y.copy(x)),i.dispatchEvent(Zo)}function V(O){const re=c!==r.NONE?c:l;re===r.ROTATE&&!i.noRotate?(v.copy(_),_.copy(R(O.pageX,O.pageY))):re===r.ZOOM&&!i.noZoom?M.copy(w(O.pageX,O.pageY)):re===r.PAN&&!i.noPan&&y.copy(w(O.pageX,O.pageY))}function X(){l=r.NONE,i.dispatchEvent(Ko)}function G(O){if(i.enabled!==!1&&i.noZoom!==!0){switch(O.preventDefault(),O.deltaMode){case 2:m.y-=O.deltaY*.025;break;case 1:m.y-=O.deltaY*.01;break;default:m.y-=O.deltaY*25e-5;break}i.dispatchEvent(Zo),i.dispatchEvent(Ko)}}function ie(O){switch(K(O),C.length){case 1:l=r.TOUCH_ROTATE,_.copy(R(C[0].pageX,C[0].pageY)),v.copy(_);break;default:l=r.TOUCH_ZOOM_PAN;const re=C[0].pageX-C[1].pageX,xe=C[0].pageY-C[1].pageY;h=u=Math.sqrt(re*re+xe*xe);const be=(C[0].pageX+C[1].pageX)/2,U=(C[0].pageY+C[1].pageY)/2;x.copy(w(be,U)),y.copy(x);break}i.dispatchEvent(Zo)}function ne(O){switch(K(O),C.length){case 1:v.copy(_),_.copy(R(O.pageX,O.pageY));break;default:const re=ce(O),xe=O.pageX-re.x,be=O.pageY-re.y;h=Math.sqrt(xe*xe+be*be);const U=(O.pageX+re.x)/2,pe=(O.pageY+re.y)/2;y.copy(w(U,pe));break}}function se(O){switch(C.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,_.copy(R(O.pageX,O.pageY)),v.copy(_);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let re=0;re<C.length;re++)if(C[re].pointerId!==O.pointerId){const xe=E[C[re].pointerId];_.copy(R(xe.x,xe.y)),v.copy(_);break}break}i.dispatchEvent(Ko)}function Q(O){i.enabled!==!1&&O.preventDefault()}function me(O){C.push(O)}function W(O){delete E[O.pointerId];for(let re=0;re<C.length;re++)if(C[re].pointerId==O.pointerId){C.splice(re,1);return}}function K(O){let re=E[O.pointerId];re===void 0&&(re=new ge,E[O.pointerId]=re),re.set(O.pageX,O.pageY)}function ce(O){const re=O.pointerId===C[0].pointerId?C[1]:C[0];return E[re.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",N),i.domElement.removeEventListener("wheel",G),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",L),window.removeEventListener("keydown",I),window.removeEventListener("keyup",F)},this.domElement.addEventListener("contextmenu",Q),this.domElement.addEventListener("pointerdown",b),this.domElement.addEventListener("pointercancel",N),this.domElement.addEventListener("wheel",G,{passive:!1}),window.addEventListener("keydown",I),window.addEventListener("keyup",F),this.handleResize(),this.update()}}class t_ extends Ye{constructor(e,t,i=!1,r=!1,a=1e4){const o=new $e;super(o,t),this.isMarchingCubes=!0;const s=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(M){this.resolution=M,this.isolation=80,this.size=M,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const x=a*3;this.positionArray=new Float32Array(x*3);const y=new Ot(this.positionArray,3);y.setUsage(Fa),o.setAttribute("position",y),this.normalArray=new Float32Array(x*3);const C=new Ot(this.normalArray,3);if(C.setUsage(Fa),o.setAttribute("normal",C),this.enableUvs){this.uvArray=new Float32Array(x*2);const E=new Ot(this.uvArray,2);E.setUsage(Fa),o.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(x*3);const E=new Ot(this.colorArray,3);E.setUsage(Fa),o.setAttribute("color",E)}o.boundingSphere=new Ci(new P,1)};function h(M,x,y){return M+(x-M)*y}function d(M,x,y,C,E,w,R,b,S,L){const N=(y-R)/(b-R),I=s.normal_cache;l[x+0]=C+N*s.delta,l[x+1]=E,l[x+2]=w,c[x+0]=h(I[M+0],I[M+3],N),c[x+1]=h(I[M+1],I[M+4],N),c[x+2]=h(I[M+2],I[M+5],N),u[x+0]=h(s.palette[S*3+0],s.palette[L*3+0],N),u[x+1]=h(s.palette[S*3+1],s.palette[L*3+1],N),u[x+2]=h(s.palette[S*3+2],s.palette[L*3+2],N)}function f(M,x,y,C,E,w,R,b,S,L){const N=(y-R)/(b-R),I=s.normal_cache;l[x+0]=C,l[x+1]=E+N*s.delta,l[x+2]=w;const F=M+s.yd*3;c[x+0]=h(I[M+0],I[F+0],N),c[x+1]=h(I[M+1],I[F+1],N),c[x+2]=h(I[M+2],I[F+2],N),u[x+0]=h(s.palette[S*3+0],s.palette[L*3+0],N),u[x+1]=h(s.palette[S*3+1],s.palette[L*3+1],N),u[x+2]=h(s.palette[S*3+2],s.palette[L*3+2],N)}function v(M,x,y,C,E,w,R,b,S,L){const N=(y-R)/(b-R),I=s.normal_cache;l[x+0]=C,l[x+1]=E,l[x+2]=w+N*s.delta;const F=M+s.zd*3;c[x+0]=h(I[M+0],I[F+0],N),c[x+1]=h(I[M+1],I[F+1],N),c[x+2]=h(I[M+2],I[F+2],N),u[x+0]=h(s.palette[S*3+0],s.palette[L*3+0],N),u[x+1]=h(s.palette[S*3+1],s.palette[L*3+1],N),u[x+2]=h(s.palette[S*3+2],s.palette[L*3+2],N)}function _(M){const x=M*3;s.normal_cache[x]===0&&(s.normal_cache[x+0]=s.field[M-1]-s.field[M+1],s.normal_cache[x+1]=s.field[M-s.yd]-s.field[M+s.yd],s.normal_cache[x+2]=s.field[M-s.zd]-s.field[M+s.zd])}function g(M,x,y,C,E){const w=C+1,R=C+s.yd,b=C+s.zd,S=w+s.yd,L=w+s.zd,N=C+s.yd+s.zd,I=w+s.yd+s.zd;let F=0;const k=s.field[C],V=s.field[w],X=s.field[R],G=s.field[S],ie=s.field[b],ne=s.field[L],se=s.field[N],Q=s.field[I];k<E&&(F|=1),V<E&&(F|=2),X<E&&(F|=8),G<E&&(F|=4),ie<E&&(F|=16),ne<E&&(F|=32),se<E&&(F|=128),Q<E&&(F|=64);const me=n_[F];if(me===0)return 0;const W=s.delta,K=M+W,ce=x+W,O=y+W;me&1&&(_(C),_(w),d(C*3,0,E,M,x,y,k,V,C,w)),me&2&&(_(w),_(S),f(w*3,3,E,K,x,y,V,G,w,S)),me&4&&(_(R),_(S),d(R*3,6,E,M,ce,y,X,G,R,S)),me&8&&(_(C),_(R),f(C*3,9,E,M,x,y,k,X,C,R)),me&16&&(_(b),_(L),d(b*3,12,E,M,x,O,ie,ne,b,L)),me&32&&(_(L),_(I),f(L*3,15,E,K,x,O,ne,Q,L,I)),me&64&&(_(N),_(I),d(N*3,18,E,M,ce,O,se,Q,N,I)),me&128&&(_(b),_(N),f(b*3,21,E,M,x,O,ie,se,b,N)),me&256&&(_(C),_(b),v(C*3,24,E,M,x,y,k,ie,C,b)),me&512&&(_(w),_(L),v(w*3,27,E,K,x,y,V,ne,w,L)),me&1024&&(_(S),_(I),v(S*3,30,E,K,ce,y,G,Q,S,I)),me&2048&&(_(R),_(N),v(R*3,33,E,M,ce,y,X,se,R,N)),F<<=4;let re,xe,be,U=0,pe=0;for(;gs[F+pe]!=-1;)re=F+pe,xe=re+1,be=re+2,m(l,c,u,3*gs[re],3*gs[xe],3*gs[be]),pe+=3,U++;return U}function m(M,x,y,C,E,w){const R=s.count*3;if(s.positionArray[R+0]=M[C],s.positionArray[R+1]=M[C+1],s.positionArray[R+2]=M[C+2],s.positionArray[R+3]=M[E],s.positionArray[R+4]=M[E+1],s.positionArray[R+5]=M[E+2],s.positionArray[R+6]=M[w],s.positionArray[R+7]=M[w+1],s.positionArray[R+8]=M[w+2],s.material.flatShading===!0){const b=(x[C+0]+x[E+0]+x[w+0])/3,S=(x[C+1]+x[E+1]+x[w+1])/3,L=(x[C+2]+x[E+2]+x[w+2])/3;s.normalArray[R+0]=b,s.normalArray[R+1]=S,s.normalArray[R+2]=L,s.normalArray[R+3]=b,s.normalArray[R+4]=S,s.normalArray[R+5]=L,s.normalArray[R+6]=b,s.normalArray[R+7]=S,s.normalArray[R+8]=L}else s.normalArray[R+0]=x[C+0],s.normalArray[R+1]=x[C+1],s.normalArray[R+2]=x[C+2],s.normalArray[R+3]=x[E+0],s.normalArray[R+4]=x[E+1],s.normalArray[R+5]=x[E+2],s.normalArray[R+6]=x[w+0],s.normalArray[R+7]=x[w+1],s.normalArray[R+8]=x[w+2];if(s.enableUvs){const b=s.count*2;s.uvArray[b+0]=M[C+0],s.uvArray[b+1]=M[C+2],s.uvArray[b+2]=M[E+0],s.uvArray[b+3]=M[E+2],s.uvArray[b+4]=M[w+0],s.uvArray[b+5]=M[w+2]}s.enableColors&&(s.colorArray[R+0]=y[C+0],s.colorArray[R+1]=y[C+1],s.colorArray[R+2]=y[C+2],s.colorArray[R+3]=y[E+0],s.colorArray[R+4]=y[E+1],s.colorArray[R+5]=y[E+2],s.colorArray[R+6]=y[w+0],s.colorArray[R+7]=y[w+1],s.colorArray[R+8]=y[w+2]),s.count+=3}this.addBall=function(M,x,y,C,E,w){const R=Math.sign(C);C=Math.abs(C);const b=w!=null;let S=new Me(M,x,y);if(b)try{S=w instanceof Me?w:Array.isArray(w)?new Me(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new Me(w)}catch{S=new Me(M,x,y)}const L=this.size*Math.sqrt(C/E),N=y*this.size,I=x*this.size,F=M*this.size;let k=Math.floor(N-L);k<1&&(k=1);let V=Math.floor(N+L);V>this.size-1&&(V=this.size-1);let X=Math.floor(I-L);X<1&&(X=1);let G=Math.floor(I+L);G>this.size-1&&(G=this.size-1);let ie=Math.floor(F-L);ie<1&&(ie=1);let ne=Math.floor(F+L);ne>this.size-1&&(ne=this.size-1);let se,Q,me,W,K,ce,O,re,xe,be,U;for(me=k;me<V;me++)for(K=this.size2*me,re=me/this.size-y,xe=re*re,Q=X;Q<G;Q++)for(W=K+this.size*Q,O=Q/this.size-x,be=O*O,se=ie;se<ne;se++)if(ce=se/this.size-M,U=C/(1e-6+ce*ce+be+xe)-E,U>0){this.field[W+se]+=U*R;const pe=Math.sqrt((se-F)*(se-F)+(Q-I)*(Q-I)+(me-N)*(me-N))/L,ze=1-pe*pe*pe*(pe*(pe*6-15)+10);this.palette[(W+se)*3+0]+=S.r*ze,this.palette[(W+se)*3+1]+=S.g*ze,this.palette[(W+se)*3+2]+=S.b*ze}},this.addPlaneX=function(M,x){const y=this.size,C=this.yd,E=this.zd,w=this.field;let R,b,S,L,N,I,F,k=y*Math.sqrt(M/x);for(k>y&&(k=y),R=0;R<k;R++)if(I=R/y,L=I*I,N=M/(1e-4+L)-x,N>0)for(b=0;b<y;b++)for(F=R+b*C,S=0;S<y;S++)w[E*S+F]+=N},this.addPlaneY=function(M,x){const y=this.size,C=this.yd,E=this.zd,w=this.field;let R,b,S,L,N,I,F,k,V=y*Math.sqrt(M/x);for(V>y&&(V=y),b=0;b<V;b++)if(I=b/y,L=I*I,N=M/(1e-4+L)-x,N>0)for(F=b*C,R=0;R<y;R++)for(k=F+R,S=0;S<y;S++)w[E*S+k]+=N},this.addPlaneZ=function(M,x){const y=this.size,C=this.yd,E=this.zd,w=this.field;let R,b,S,L,N,I,F,k,V=y*Math.sqrt(M/x);for(V>y&&(V=y),S=0;S<V;S++)if(I=S/y,L=I*I,N=M/(1e-4+L)-x,N>0)for(F=E*S,b=0;b<y;b++)for(k=F+b*C,R=0;R<y;R++)w[k+R]+=N},this.setCell=function(M,x,y,C){const E=this.size2*y+this.size*x+M;this.field[E]=C},this.getCell=function(M,x,y){const C=this.size2*y+this.size*x+M;return this.field[C]},this.blur=function(M=1){const x=this.field,y=x.slice(),C=this.size,E=this.size2;for(let w=0;w<C;w++)for(let R=0;R<C;R++)for(let b=0;b<C;b++){const S=E*b+C*R+w;let L=y[S],N=1;for(let I=-1;I<=1;I+=2){const F=I+w;if(!(F<0||F>=C))for(let k=-1;k<=1;k+=2){const V=k+R;if(!(V<0||V>=C))for(let X=-1;X<=1;X+=2){const G=X+b;if(G<0||G>=C)continue;const ie=E*G+C*V+F,ne=y[ie];N++,L+=M*(ne-L)/N}}}x[S]=L}},this.reset=function(){for(let M=0;M<this.size3;M++)this.normal_cache[M*3]=0,this.field[M]=0,this.palette[M*3]=this.palette[M*3+1]=this.palette[M*3+2]=0},this.update=function(){this.count=0;const M=this.size-2;for(let x=1;x<M;x++){const y=this.size2*x,C=(x-this.halfsize)/this.halfsize;for(let E=1;E<M;E++){const w=y+this.size*E,R=(E-this.halfsize)/this.halfsize;for(let b=1;b<M;b++){const S=(b-this.halfsize)/this.halfsize,L=w+b;g(S,R,C,L,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>a&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const n_=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),gs=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),vs=[1];function Mi(n){if(n<0)return NaN;for(let e=vs.length;e<=n;e+=1)vs[e]=vs[e-1]*e;return vs[n]}function dd(n,e,t){const i=Math.max(1,Math.min(6,Math.round(n))),r=Math.max(0,Math.min(i-1,Math.round(e))),a=Math.max(-r,Math.min(r,Math.round(t)));return{n:i,l:r,m:a}}function Vn(n,e,t){if(e===0)return`${n}s`;if(e===1)return`${n}${t===0?"Pz":t>0?"Px":"Py"}`;if(e===2){if(t===0)return`${n}Dz2`;if(t===1)return`${n}Dxz`;if(t===-1)return`${n}Dyz`;if(t===2)return`${n}Dx2-y2`;if(t===-2)return`${n}Dxy`}if(e===3){if(t===0)return`${n}Fz3`;if(t===1)return`${n}Fxz2`;if(t===-1)return`${n}Fyz2`;if(t===2)return`${n}Fz(x2-y2)`;if(t===-2)return`${n}Fxyz`;if(t===3)return`${n}Fx(x2-3y2)`;if(t===-3)return`${n}Fy(3x2-y2)`}if(e===4){if(t===0)return`${n}Gz4`;if(t===1)return`${n}Gxz3`;if(t===-1)return`${n}Gyz3`;if(t===2)return`${n}Gz2(x2-y2)`;if(t===-2)return`${n}Gxyz2`;if(t===3)return`${n}Gxz(x2-3y2)`;if(t===-3)return`${n}Gyz(3x2-y2)`;if(t===4)return`${n}Gx4-6x2y2+y4`;if(t===-4)return`${n}Gxy(x2-y2)`}if(e===5){if(t===0)return`${n}Hz5`;if(t===1)return`${n}Hxz4`;if(t===-1)return`${n}Hyz4`;if(t===2)return`${n}Hz3(x2-y2)`;if(t===-2)return`${n}Hxyz3`;if(t===3)return`${n}Hz(x4-6x2y2+y4)`;if(t===-3)return`${n}Hxyz(x2-y2)`;if(t===4)return`${n}Hxz(x2-y2)`;if(t===-4)return`${n}Hyz(x2-y2)`;if(t===5)return`${n}Hx(x4-10x2y2+5y4)`;if(t===-5)return`${n}Hy(5x4-10x2y2+y4)`}return`${n}${["s","P","D","F","G","H"][e]??`L${e}`}${t}`}function i_(n,e,t){let i=0;for(let r=0;r<=n;r+=1){const a=(r%2===0?1:-1)*Mi(n+e)/(Mi(n-r)*Mi(e+r)*Mi(r));i+=a*t**r}return i}function r_(n,e,t){const i=Math.abs(e);let r=1;if(i>0){const s=Math.sqrt(Math.max(0,1-t*t));let l=1;for(let c=1;c<=i;c+=1)r*=-l*s,l+=2}if(n===i)return r;let a=t*(2*i+1)*r;if(n===i+1)return a;let o=0;for(let s=i+2;s<=n;s+=1)o=((2*s-1)*t*a-(s+i-1)*r)/(s-i),r=a,a=o;return o}function fl(n,e,t,i){const r=Math.sin(t),a=Math.cos(t),o=Math.cos(i),s=Math.sin(i);if(n===1){const h=Math.sqrt(3/(4*Math.PI));return e===0?h*a:e>0?h*r*o:h*r*s}if(n===2){if(e===0)return Math.sqrt(5/Math.PI)/4*(3*a*a-1);if(e===1)return Math.sqrt(15/Math.PI)/2*r*a*o;if(e===-1)return Math.sqrt(15/Math.PI)/2*r*a*s;if(e===2)return Math.sqrt(15/Math.PI)/4*r*r*Math.cos(2*i);if(e===-2)return Math.sqrt(15/Math.PI)/4*r*r*Math.sin(2*i)}const l=Math.abs(e),c=Math.sqrt((2*n+1)/(4*Math.PI)*(Mi(n-l)/Mi(n+l))),u=r_(n,l,Math.cos(t));return e>0?Math.sqrt(2)*c*u*Math.cos(l*i):e<0?Math.sqrt(2)*c*u*Math.sin(l*i):c*u}function ys(n,e,t){const i=Math.abs(e);let r=1;for(let c=2;c<=2*i;c+=2)r*=(1-t*t)*((c+1)/c);let a=Math.sqrt(Math.max(0,r/2));if(n===i)return a;let o=Math.sqrt(2*i+3)*t*a;if(n===i+1)return o;let s=0,l=Math.sqrt((4*i*i+8*i+3)/(2*i+1));for(let c=i+2;c<=n;c+=1){const u=Math.sqrt((4*c*c-1)/(c*c-i*i));s=o*t*u-a*u/l,a=o,o=s,l=u}return s}function Fn(n,e,t,i){const r=2*t*i/n;return Math.sqrt((2*t/n)**3*(Mi(n-e-1)/(2*n*Mi(n+e))))*Math.exp(-r/2)*r**e*i_(n-e-1,2*e+1,r)}function xt({n,l:e,m:t,z:i},r,a,o){const s=Math.hypot(r,a,o);if(s<1e-9)return e===0?Fn(n,e,i,0)*fl(e,t,0,0):0;const l=Math.acos(o/s),c=Math.atan2(a,r);return Fn(n,e,i,s)*fl(e,t,l,c)}function Jo({n,l:e,m:t,z:i},r,a,o){const s=Math.hypot(r,a),l=Math.hypot(s,o),c=l<.01?0:o/l,u=Fn(n,e,i,l)*ys(e,t,c);let h=1/Math.sqrt(Math.PI);if(t!==0){const d=s>.001?t*Math.atan2(a,r):Math.PI/2;h*=t>0?Math.cos(d):-Math.sin(d)}return u*h}function a_(n){return n>=7?120:n===6?100:n===5?90:n===4?80:n===3?70:n===2?60:50}const Ju=new Map;function Hn(n,e=.8){const t=`${n.n}|${n.l}|${n.z}|${e}`,i=Ju.get(t);if(i)return{...i};let r=0;const a=.002;let o=0,s=0;for(;s<2e5;){const v=la(n,o),_=la(n,o+a/2),g=la(n,o+a);if(r+=(v+4*_+g)/6,o+=a,s+=1,a*r>e)break}const l=o*1.5,c=a_(n.n),h=2*Math.ceil(l)/c*c/2,d=Math.sqrt(la(n,o)/(4*Math.PI*o*o))||1e-4,f={radius:h,iso:Math.max(1e-4,d),gridSize:c,leastRadius:l};return Ju.set(t,f),{...f}}function la(n,e){return e*e*Fn(n.n,n.l,n.z,e)**2}const Qu=new Map;function fd(n){const e=`${n.n}|${n.l}|${n.z}`,t=Qu.get(e);if(t!=null)return t;const{leastRadius:i}=Hn(n),r=n.n===1&&n.l===0?2:20;let a=i;for(let s=.1;s<=i+r&&(a=s,!(s>i&&la(n,s)<1e-9));s+=.1);const o=Math.max(1,a);return Qu.set(e,o),o}const eh=new Map;function kl(n){const e=`${n.n}|${n.l}|${n.z}`,t=eh.get(e);if(t)return[...t];const i=Math.max(0,n.n-n.l-1);if(!i)return[];const r=Math.max(fd(n),Hn(n).leastRadius*1.2),a=Math.max(900,n.n*520),o=[];let s=1e-5,l=Fn(n.n,n.l,n.z,s);for(let c=1;c<=a;c+=1){const u=r*c/a,h=Fn(n.n,n.l,n.z,u);if(Number.isFinite(h)){if(Math.abs(l)>1e-14&&Math.abs(h)>1e-14&&l*h<0){let d=s,f=u,v=l;for(let g=0;g<36;g+=1){const m=(d+f)/2,M=Fn(n.n,n.l,n.z,m);v*M<=0?f=m:(d=m,v=M)}const _=(d+f)/2;if(o.some(g=>Math.abs(g-_)<.02)||o.push(_),o.length>=i)break}s=u,l=h}}return o.sort((c,u)=>c-u),eh.set(e,o),[...o]}function Vl(n){const e=Math.abs(n.m),t=Math.max(0,n.l-e),i=[];if(t>0){const a=Math.max(720,n.l*300);let o=1e-5,s=ys(n.l,n.m,Math.cos(o));for(let l=1;l<a;l+=1){const c=Math.PI*l/a,u=ys(n.l,n.m,Math.cos(c));if(Math.abs(s)>1e-12&&Math.abs(u)>1e-12&&s*u<0){let h=o,d=c,f=s;for(let _=0;_<34;_+=1){const g=(h+d)/2,m=ys(n.l,n.m,Math.cos(g));f*m<=0?d=g:(h=g,f=m)}const v=(h+d)/2;if(i.some(_=>Math.abs(_-v)<.01)||i.push(v),i.length>=t)break}o=c,s=u}}const r=[];if(e>0)for(let a=0;a<e;a+=1){const o=n.m>0?(a+.5)*Math.PI/e:a*Math.PI/e;r.push(o)}return{polar:i,azimuthal:r}}function Ds(n,e){return`${n-e-1} radial, ${e} angular`}function s_(n,e){const{radius:t}=e,i=Math.min(42,Math.max(24,Math.round(e.density*.58))),r=[],a=[],o=t*2/(i-1),s=t*t,l=15e4;let c=0;for(let v=0;v<i;v+=1){const _=-t+v*o;for(let g=0;g<i;g+=1){const m=-t+g*o;for(let M=0;M<i;M+=1){const x=-t+M*o;if(_*_+m*m+x*x>s||!pl(e.cutaway,_,m,x))continue;const y=xt(n,_,m,x);c=Math.max(c,Math.abs(y))}}}const u=c||1;let h=(n.n*73856093^n.l*19349663^(n.m+8)*83492791^Math.round(t*1e3))>>>0;const d=()=>(h=1664525*h+1013904223>>>0,h/4294967296),f=Math.min(26e5,Math.max(72e4,e.density*e.density*430));for(let v=0;v<f;v+=1){const _=(d()*2-1)*t,g=(d()*2-1)*t,m=(d()*2-1)*t;if(_*_+g*g+m*m>s||!pl(e.cutaway,_,g,m))continue;const M=xt(n,_,g,m),x=Math.min(1,(Math.abs(M)/u)**2);if(d()>x)continue;const y=M>=0?r:a;if(!(y.length/3>=l)&&(y.push(_,g,m),r.length/3>=l&&a.length/3>=l))break}return{positive:r,negative:a}}function pd(n,e){const t=e.thetaSegments??64,i=e.phiSegments??128,r=e.radius??4,a=[];let o=0;for(let l=0;l<=t;l+=1){const c=Math.PI*l/t,u=[];for(let h=0;h<=i;h+=1){const d=Math.PI*2*h/i,f=fl(n.l,n.m,c,d);u.push(f),o=Math.max(o,Math.abs(f))}a.push(u)}function s(l){const c=[],u=[],h=[],d=r/(o||1);for(let f=0;f<=t;f+=1){const v=Math.PI*f/t,_=[],g=Math.sin(v),m=Math.cos(v);for(let M=0;M<=i;M+=1){const x=Math.PI*2*M/i,y=a[f][M];if(l*y<=1e-6){_.push(-1);continue}const C=Math.abs(y)*d;_.push(c.length/3),c.push(C*g*Math.cos(x),C*g*Math.sin(x),C*m)}h.push(_)}for(let f=0;f<t;f+=1)for(let v=0;v<i;v+=1){const _=h[f][v],g=h[f+1][v],m=h[f][v+1],M=h[f+1][v+1];_>=0&&g>=0&&m>=0&&u.push(_,g,m),m>=0&&g>=0&&M>=0&&u.push(m,g,M)}return{vertices:c,indices:u}}return{positive:s(1),negative:s(-1)}}function pl(n,e,t,i){return n==="quarter"?t<=0&&i<=0:n==="eighth"?e<=0&&t<=0&&i<=0:n==="threeQuarter"?!(t>0&&i>0):!0}function o_(n,e,t,i=1){const r=t.density,a=t.radius,o=a*2/r;let s=0,l=0;for(let c=0;c<r;c+=1){const u=-a+c*o;for(let h=0;h<r;h+=1){const d=-a+h*o;for(let f=0;f<r;f+=1){const v=-a+f*o,_=pl(t.cutaway,v,d,u)?i*xt(e,v,d,u):0;n[s]=_,l=Math.max(l,Math.abs(_)),s+=1}}}return l}function l_(n,e,t,i=180){const r=[],a=e.radius;let o=0;for(let s=0;s<i;s+=1){const l=[],c=a-2*a*s/(i-1);for(let u=0;u<i;u+=1){const h=-a+2*a*u/(i-1);let d=0;t==="xoy"&&(d=xt(n,h,c,0)),t==="xoz"&&(d=xt(n,h,0,c)),t==="yoz"&&(d=xt(n,0,h,c)),o=Math.max(o,Math.abs(d)),l.push(d)}r.push(l)}return{rows:r,maxAbs:o}}function c_(n,e,t,i){const a=t.radius/140;let o=0,s=i*xt(n,0,0,0)-t.iso,l=null;for(let c=1;c<=140;c+=1){const u=c*a,h=i*xt(n,e.x*u,e.y*u,e.z*u)-t.iso;if(s<=0&&h>=0){let d=o,f=u;for(let v=0;v<12;v+=1){const _=(d+f)/2;i*xt(n,e.x*_,e.y*_,e.z*_)-t.iso>=0?f=_:d=_}l=f}if(s>=0&&h<=0&&l!==null){let d=o,f=u;for(let v=0;v<12;v+=1){const _=(d+f)/2;i*xt(n,e.x*_,e.y*_,e.z*_)-t.iso>=0?d=_:f=_}l=d}o=u,s=h}return l}function u_(n,e){const t=e.thetaSegments??58,i=e.phiSegments??96;function r(a){const o=[],s=[],l=[];for(let c=0;c<=t;c+=1){const u=Math.PI*c/t,h=[],d=Math.sin(u),f=Math.cos(u);for(let v=0;v<=i;v+=1){const _=Math.PI*2*v/i,g={x:d*Math.cos(_),y:d*Math.sin(_),z:f},m=c_(n,g,e,a);m===null||!Number.isFinite(m)?h.push(-1):(h.push(o.length/3),o.push(g.x*m,g.y*m,g.z*m))}l.push(h)}for(let c=0;c<t;c+=1)for(let u=0;u<i;u+=1){const h=l[c][u],d=l[c+1][u],f=l[c+1][u+1],v=l[c][u+1];h>=0&&d>=0&&f>=0&&s.push(h,d,f),h>=0&&f>=0&&v>=0&&s.push(h,f,v)}return{vertices:o,indices:s}}return{positive:r(1),negative:r(-1)}}const p={viewer:document.querySelector("#viewer"),angularViewer:document.querySelector("#angularViewer"),projectionViewer:document.querySelector("#projectionViewer"),radialViewer:document.querySelector("#radialViewer"),viewGrid:document.querySelector(".view-grid"),mainWindow:document.querySelector(".main-window"),menuPopup:document.querySelector("#menuPopup"),menuItems:document.querySelectorAll(".menu-item"),toolRender:document.querySelector("#toolRender"),toolSave:document.querySelector("#toolSave"),toolTile:document.querySelector("#toolTile"),toolOverlap:document.querySelector("#toolOverlap"),toolAxis:document.querySelector("#toolAxis"),toolXOY:document.querySelector("#toolXOY"),toolYOZ:document.querySelector("#toolYOZ"),toolXOZ:document.querySelector("#toolXOZ"),preset:document.querySelector("#presetInput"),cosType:document.querySelector("#cosTypeInput"),sinType:document.querySelector("#sinTypeInput"),cloud:document.querySelector("#cloudInput"),positiveLobe:document.querySelector("#positiveLobeInput"),negativeLobe:document.querySelector("#negativeLobeInput"),wireframe:document.querySelector("#wireframeInput"),smooth:document.querySelector("#smoothInput"),projection:document.querySelector("#projectionInput"),paletteOne:document.querySelector("#paletteOneInput"),paletteTwo:document.querySelector("#paletteTwoInput"),xySlice:document.querySelector("#xySliceInput"),yzSlice:document.querySelector("#yzSliceInput"),xzSlice:document.querySelector("#xzSliceInput"),quarter:document.querySelector("#quarterInput"),eighth:document.querySelector("#eighthInput"),threeQuarter:document.querySelector("#threeQuarterInput"),radialR:document.querySelector("#radialRInput"),radialR2:document.querySelector("#radialR2Input"),radialRdf:document.querySelector("#radialRdfInput"),radialSection:document.querySelector("#radialSectionInput"),radialSide:document.querySelector("#radialSideInput"),radialCurve:document.querySelector("#radialCurveInput"),radialAxis:document.querySelector("#radialAxisInput"),radialNode:document.querySelector("#radialNodeInput"),polarNode:document.querySelector("#polarNodeInput"),relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue"),longitudeNode:document.querySelector("#longitudeNodeInput"),grid3d:document.querySelector("#grid3dInput"),desktopMatch:document.querySelector("#desktopMatchInput"),n:document.querySelector("#nInput"),l:document.querySelector("#lInput"),m:document.querySelector("#mInput"),z:document.querySelector("#zInput"),mode:document.querySelector("#modeInput"),slice:document.querySelector("#sliceInput"),node:document.querySelector("#nodeInput"),axis:document.querySelector("#axisInput"),box:document.querySelector("#boxInput"),positiveColor:document.querySelector("#positiveColorInput"),negativeColor:document.querySelector("#negativeColorInput"),backgroundColor:document.querySelector("#backgroundColorInput"),iso:document.querySelector("#isoInput"),density:document.querySelector("#densityInput"),radius:document.querySelector("#radiusInput"),boxSizeDisplay:document.querySelector("#boxSizeDisplay"),intervalValue:document.querySelector("#intervalValue"),probabilityValue:document.querySelector("#probabilityValue"),opacity:document.querySelector("#opacityInput"),isoValue:document.querySelector("#isoValue"),densityValue:document.querySelector("#densityValue"),radiusValue:document.querySelector("#radiusValue"),opacityValue:document.querySelector("#opacityValue"),renderButton:document.querySelector("#renderButton"),axisProxyButton:document.querySelector("#axisProxyButton"),presetButton:document.querySelector("#presetButton"),redrawProxyButton:document.querySelector("#redrawProxyButton"),resetCameraButton:document.querySelector("#resetCameraButton"),screenshotButton:document.querySelector("#screenshotButton"),orbitalName:document.querySelector("#orbitalName"),viewerTitle:document.querySelector("#viewerTitle"),statusText:document.querySelector("#statusText"),posCount:document.querySelector("#posCount"),negCount:document.querySelector("#negCount"),nodeText:document.querySelector("#nodeText"),sliceText:document.querySelector("#sliceText"),boxText:document.querySelector("#boxText"),isoText:document.querySelector("#isoText"),openActivityButton:document.querySelector("#openActivityButton"),annotationModeButton:document.querySelector("#annotationModeButton"),annotationToolbar:document.querySelector("#annotationToolbar"),annotationClearButton:document.querySelector("#annotationClearButton"),openSketchButton:document.querySelector("#openSketchButton"),openAnimationButton:document.querySelector("#openAnimationButton"),openFormulaButton:document.querySelector("#openFormulaButton"),openPredictButton:document.querySelector("#openPredictButton"),openChallengeButton:document.querySelector("#openChallengeButton"),sketchWindow:document.querySelector("#sketchWindow"),formulaWindow:document.querySelector("#formulaWindow"),formulaOrbitalName:document.querySelector("#formulaOrbitalName"),formulaQuantumText:document.querySelector("#formulaQuantumText"),formulaMain:document.querySelector("#formulaMain"),formulaRadialText:document.querySelector("#formulaRadialText"),formulaAngularText:document.querySelector("#formulaAngularText"),formulaVisualText:document.querySelector("#formulaVisualText"),formulaRadialNodes:document.querySelector("#formulaRadialNodes"),formulaAngularNodes:document.querySelector("#formulaAngularNodes"),formulaPhaseText:document.querySelector("#formulaPhaseText"),animationWindow:document.querySelector("#animationWindow"),animationCanvas:document.querySelector("#animationCanvas"),animationStepBadge:document.querySelector("#animationStepBadge"),animationTitle:document.querySelector("#animationTitle"),animationText:document.querySelector("#animationText"),animationProgressFill:document.querySelector("#animationProgressFill"),animationRestartButton:document.querySelector("#animationRestartButton"),animationPrevButton:document.querySelector("#animationPrevButton"),animationPlayButton:document.querySelector("#animationPlayButton"),animationNextButton:document.querySelector("#animationNextButton"),animationExportButton:document.querySelector("#animationExportButton"),activityWindow:document.querySelector("#activityWindow"),activityTitle:document.querySelector("#activityTitle"),activityModeButtons:document.querySelectorAll("[data-activity-mode]"),activityPanes:document.querySelectorAll(".activity-pane"),predictPane:document.querySelector("#predictPane"),scorePane:document.querySelector("#scorePane"),diagnosisPane:document.querySelector("#diagnosisPane"),nodesPane:document.querySelector("#nodesPane"),comparePane:document.querySelector("#comparePane"),challengePane:document.querySelector("#challengePane"),explainPane:document.querySelector("#explainPane"),tabletPane:document.querySelector("#tabletPane"),predictTarget:document.querySelector("#predictTargetInput"),startPredictButton:document.querySelector("#startPredictButton"),verifyPredictButton:document.querySelector("#verifyPredictButton"),predictPrompt:document.querySelector("#predictPrompt"),scoreCurrentButton:document.querySelector("#scoreCurrentButton"),scoreShowRubricButton:document.querySelector("#scoreShowRubricButton"),scoreResetButton:document.querySelector("#scoreResetButton"),scorePrompt:document.querySelector("#scorePrompt"),diagnoseNodesButton:document.querySelector("#diagnoseNodesButton"),diagnosePhaseButton:document.querySelector("#diagnosePhaseButton"),diagnoseProjectionButton:document.querySelector("#diagnoseProjectionButton"),diagnosisPrompt:document.querySelector("#diagnosisPrompt"),nodeRevealButton:document.querySelector("#nodeRevealButton"),nodeHideButton:document.querySelector("#nodeHideButton"),compareA:document.querySelector("#compareAInput"),compareB:document.querySelector("#compareBInput"),compareApplyButton:document.querySelector("#compareApplyButton"),compareLoadAButton:document.querySelector("#compareLoadAButton"),compareLoadBButton:document.querySelector("#compareLoadBButton"),compareAViewer:document.querySelector("#compareAViewer"),compareBViewer:document.querySelector("#compareBViewer"),compareATitle:document.querySelector("#compareATitle"),compareBTitle:document.querySelector("#compareBTitle"),compareANotes:document.querySelector("#compareANotes"),compareBNotes:document.querySelector("#compareBNotes"),compareSummary:document.querySelector("#compareSummary"),newChallengeButton:document.querySelector("#newChallengeButton"),challengeGuess:document.querySelector("#challengeGuessInput"),revealChallengeButton:document.querySelector("#revealChallengeButton"),challengePrompt:document.querySelector("#challengePrompt"),explainRestartButton:document.querySelector("#explainRestartButton"),explainPrevButton:document.querySelector("#explainPrevButton"),explainPlayButton:document.querySelector("#explainPlayButton"),explainNextButton:document.querySelector("#explainNextButton"),explainProgressFill:document.querySelector("#explainProgressFill"),explainStepBadge:document.querySelector("#explainStepBadge"),explainStepTitle:document.querySelector("#explainStepTitle"),explainStepText:document.querySelector("#explainStepText"),explainFormula:document.querySelector("#explainFormula"),explainObserveText:document.querySelector("#explainObserveText"),explainReasonText:document.querySelector("#explainReasonText"),explainHintText:document.querySelector("#explainHintText"),sketchCanvas:document.querySelector("#sketchCanvas"),sketchColor:document.querySelector("#sketchColorInput"),sketchSize:document.querySelector("#sketchSizeInput"),sketchPen:document.querySelector("#sketchPenButton"),sketchEraser:document.querySelector("#sketchEraserButton"),sketchClear:document.querySelector("#sketchClearButton"),tabletLargeButton:document.querySelector("#tabletLargeButton"),tabletRestoreButton:document.querySelector("#tabletRestoreButton"),tabletScreenshotButton:document.querySelector("#tabletScreenshotButton")},Wt=new Ri;Wt.background=new Me(1120295);function Ji(n,e){const t=new e_(n,e);return t.rotateSpeed=3.2,t.zoomSpeed=1.15,t.panSpeed=.65,t.staticMoving=!1,t.dynamicDampingFactor=.12,t.noRotate=!1,t.noZoom=!1,t.noPan=!1,t}function Qo(n){return n.pointerType==="mouse"&&(n.button===2||(n.buttons&2)===2)}function tn(n){var l,c,u,h,d,f;if(!n)return;const e=n.object,t=(l=e==null?void 0:e.position)==null?void 0:l.clone(),i=(c=e==null?void 0:e.quaternion)==null?void 0:c.clone(),r=(u=e==null?void 0:e.up)==null?void 0:u.clone(),a=e==null?void 0:e.zoom,o=(h=n.target)==null?void 0:h.clone(),s=n.staticMoving;typeof n.reset=="function"&&t&&o&&(n.staticMoving=!0,n.reset(),e.position.copy(t),i&&e.quaternion.copy(i),r&&e.up.copy(r),typeof a=="number"&&(e.zoom=a),n.target.copy(o),(d=e.updateProjectionMatrix)==null||d.call(e),n.staticMoving=s),n.enabled=!0,n.noRotate=!1,n.noZoom=!1,n.noPan=!1,(f=n.handleResize)==null||f.call(n),n.update()}function Ta(n,e){const t=n==null?void 0:n.querySelector("canvas");if(!t||!e)return;const i=()=>typeof e=="function"?e():e;t.addEventListener("pointerdown",r=>{if(Qo(r)){r.preventDefault(),r.stopImmediatePropagation(),tn(i());return}tn(i())},{capture:!0}),t.addEventListener("pointermove",r=>{Qo(r)&&(r.preventDefault(),r.stopImmediatePropagation())},{capture:!0}),t.addEventListener("pointerup",r=>{Qo(r)&&(r.preventDefault(),r.stopImmediatePropagation()),tn(i())},{capture:!0}),t.addEventListener("pointercancel",()=>tn(i()),{capture:!0}),t.addEventListener("lostpointercapture",()=>tn(i())),t.addEventListener("mouseenter",()=>tn(i())),t.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopImmediatePropagation(),tn(i())},{capture:!0})}const Ke=new En(-5,5,5,-5,.1,1e3),pn=new ri({antialias:!0,preserveDrawingBuffer:!0});pn.setPixelRatio(Math.min(window.devicePixelRatio,2));pn.localClippingEnabled=!0;p.viewer.appendChild(pn.domElement);let Ce=Ji(Ke,pn.domElement);const mn=new Ri,st=new En(-5,5,5,-5,.1,1e3),Li=new ri({antialias:!0,preserveDrawingBuffer:!0});Li.setPixelRatio(Math.min(window.devicePixelRatio,2));Li.localClippingEnabled=!0;p.angularViewer.appendChild(Li.domElement);let De=Ji(st,Li.domElement);const zn=new Ri,yt=new En(-5,5,5,-5,.1,1e3);yt.up.set(0,0,1);const Qi=new ri({antialias:!0,preserveDrawingBuffer:!0});Qi.setPixelRatio(Math.min(window.devicePixelRatio,2));p.projectionViewer.appendChild(Qi.domElement);const In=Ji(yt,Qi.domElement),Bn=new Ri,It=new En(-5,5,5,-5,.1,1e3),$r=new ri({antialias:!0,preserveDrawingBuffer:!0});$r.setPixelRatio(Math.min(window.devicePixelRatio,2));p.radialViewer.appendChild($r.domElement);const $t=Ji(It,$r.domElement);Ta(p.viewer,()=>Ce);Ta(p.angularViewer,()=>De);Ta(p.projectionViewer,In);Ta(p.radialViewer,$t);function Pr(){tn(Ce),tn(De),tn(In),tn($t)}function h_(){var t,i,r;const n=((t=Ce==null?void 0:Ce.target)==null?void 0:t.clone())??new P,e={rotateSpeed:(Ce==null?void 0:Ce.rotateSpeed)??3.2,zoomSpeed:(Ce==null?void 0:Ce.zoomSpeed)??1.15,panSpeed:(Ce==null?void 0:Ce.panSpeed)??.65,staticMoving:(Ce==null?void 0:Ce.staticMoving)??!1,dynamicDampingFactor:(Ce==null?void 0:Ce.dynamicDampingFactor)??.12,noRotate:(Ce==null?void 0:Ce.noRotate)??!1,noZoom:(Ce==null?void 0:Ce.noZoom)??!1,noPan:(Ce==null?void 0:Ce.noPan)??!1};(i=Ce==null?void 0:Ce.dispose)==null||i.call(Ce),Ce=Ji(Ke,pn.domElement),Object.assign(Ce,e),Ce.target.copy(n),(r=Ce.handleResize)==null||r.call(Ce),Ce.update()}function d_(){var t,i,r;const n=((t=De==null?void 0:De.target)==null?void 0:t.clone())??new P,e={rotateSpeed:(De==null?void 0:De.rotateSpeed)??3.2,zoomSpeed:(De==null?void 0:De.zoomSpeed)??1.15,panSpeed:(De==null?void 0:De.panSpeed)??.65,staticMoving:(De==null?void 0:De.staticMoving)??!1,dynamicDampingFactor:(De==null?void 0:De.dynamicDampingFactor)??.12,noRotate:!1,noZoom:!1,noPan:!1};(i=De==null?void 0:De.dispose)==null||i.call(De),De=Ji(st,Li.domElement),Object.assign(De,e),De.target.copy(n),(r=De.handleResize)==null||r.call(De),De.update()}const Hl=new fn(16777215,1.45);Hl.position.set(0,0,1);Ke.add(Hl);Ke.add(new fn(16777215,.28));Wt.add(Ke);Wt.add(new Pi(16777215,.42));const Gl=new fn(16777215,1.45);Gl.position.set(0,0,1);st.add(Gl);st.add(new fn(16777215,.28));mn.add(st);mn.add(new Pi(16777215,.42));const Wl=new fn(16777215,1.7);Wl.position.set(0,0,80);zn.add(Wl);zn.add(new Pi(16777215,.65));const ql=new fn(16777215,1.8);ql.position.set(0,-40,60);Bn.add(ql);Bn.add(new Pi(16777215,.62));for(const n of[pn,Li,Qi,$r])n.outputColorSpace=Ft,n.toneMapping=Hr,n.toneMappingExposure=1.16;Hl.intensity=1.72;Gl.intensity=1.72;Wl.intensity=1.88;ql.intensity=1.92;const Ea=$s(4.5,.2,.9);let gi=$s(4.2,.1,.9);Wt.add(Ea);mn.add(gi);let Tt=null,Ct=null,Yi=null,$i=null,fa=null,pa=null,Ns=null,ml=null,fi=null,pi=null,ma=null,ga=null,va=null,Gi=null,_a=null,xa=null,on=null,gl=null,vl=null,_l=null,xl=null,Ml=null,yl=null,Zn=null,xn=null,Xl=1,ii=5,Zt=4,Yl=3,wa=4.5;const vi=new Map,f_=6,_i=new Map,p_=4;let Cn=null,Jn=null,kt=null,bn=null,th="",Rn=null,Qn=null,Vt=null,Nn=null,nh="",Pn=null,bi=null,Ht=null,Un=null,ih="",Ln=null,Ut=null,Lr=!1;const Aa=[],Je={drawing:!1,erasing:!1,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,strokes:[],currentStroke:null};function $l(n=(e=>(e=p.backgroundColor)==null?void 0:e.value)()||"#668080"){document.documentElement.style.setProperty("--viewer-bg",n);const t=new Me(n);Wt.background=t.clone(),mn.background=t.clone(),zn.background=t.clone(),Bn.background=t.clone();for(const i of Aa)i.scene.background=t.clone()}function m_(){var t;if(document.querySelector("#relationModeInput")){Object.assign(p,{relationMode:document.querySelector("#relationModeInput"),syncRotation:document.querySelector("#syncRotationInput"),scanRadius:document.querySelector("#scanRadiusInput"),scanRadiusValue:document.querySelector("#scanRadiusValue"),scanTheta:document.querySelector("#scanThetaInput"),scanThetaValue:document.querySelector("#scanThetaValue"),scanPhi:document.querySelector("#scanPhiInput"),scanPhiValue:document.querySelector("#scanPhiValue")});return}const n=(t=p.longitudeNode)==null?void 0:t.closest("fieldset");if(!n)return;const e=document.createElement("fieldset");e.className="relation-panel",e.innerHTML=`
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
  `,n.insertAdjacentElement("afterend",e),Object.assign(p,{relationMode:e.querySelector("#relationModeInput"),syncRotation:e.querySelector("#syncRotationInput"),scanRadius:e.querySelector("#scanRadiusInput"),scanRadiusValue:e.querySelector("#scanRadiusValue"),scanTheta:e.querySelector("#scanThetaInput"),scanThetaValue:e.querySelector("#scanThetaValue"),scanPhi:e.querySelector("#scanPhiInput"),scanPhiValue:e.querySelector("#scanPhiValue")})}m_();$l();const er=document.createElement("button");er.type="button";er.className="fullscreen-exit-button";er.textContent="退出全屏";er.hidden=!0;document.body.appendChild(er);function g_(n,e,t){return Vn(n,e,t)}function md(n,e,t){return`${n},${e},${t}`}function v_(n){const e=[0];for(let t=1;t<=n;t+=1)e.push(t,-t);return e}function gd(n){const e=Math.max(1,Math.min(6,Math.round(n)||1)),t=[];for(let i=0;i<e;i+=1)for(const r of v_(i))t.push({value:md(e,i,r),label:g_(e,i,r)});return t}function __(n=6){const e=[];for(let t=1;t<=n;t+=1)e.push(...gd(t));return e}const qt=__(6);function _s(n,e,t=null){if(n){n.replaceChildren();for(const i of e){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,n.append(r)}t&&e.some(i=>i.value===t)&&(n.value=t)}}function x_(){_s(p.predictTarget,qt,"2,1,1"),_s(p.challengeGuess,qt,"2,1,1"),_s(p.compareA,qt,"2,1,1"),_s(p.compareB,qt,"3,1,1")}function M_(n=null){if(!p.preset)return;const e=n??dd(Number(p.n.value),Number(p.l.value),Number(p.m.value));if(Number(p.preset.dataset.n)!==e.n){p.preset.replaceChildren();for(const i of gd(e.n)){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,p.preset.append(r)}p.preset.dataset.n=String(e.n)}p.preset.value=md(e.n,e.l,e.m)}const he={challengeTarget:qt[0],challengeTotal:0,challengeCorrect:0,dragWindow:null,dragging:!1,dragPointerId:null,dragOffsetX:0,dragOffsetY:0,explanationStep:0,explanationPlaying:!1,explanationStartedAt:0,explanationTimer:null,explanationFrame:null,animationStep:0,animationPlaying:!1,animationStartedAt:0,animationTimer:null,animationFrame:null,animationExporting:!1,annotationMode:!1,annotationDrag:null};function ft(){var e,t;const n=dd(Number(p.n.value),Number(p.l.value),Number(p.m.value));return(e=p.sinType)!=null&&e.checked&&n.m>0&&(n.m=-n.m),(t=p.cosType)!=null&&t.checked&&n.m<0&&(n.m=Math.abs(n.m)),p.n.value=n.n,p.l.max=n.n-1,p.l.value=n.l,p.m.min=-n.l,p.m.max=n.l,p.m.value=Math.abs(n.m),M_(n),{...n,z:Math.max(1,Math.min(10,Number(p.z.value)||1))}}function el(n,e){var t;n&&(n.disabled=!e,(t=n.closest("label"))==null||t.classList.toggle("muted",!e),e||(n.checked=!1))}function y_(n){const e=kl(n).length,{polar:t,azimuthal:i}=Vl(n);el(p.radialNode,e>0),el(p.polarNode,t.length>0),el(p.longitudeNode,i.length>0)}function Kt(){var r,a,o,s,l,c,u,h,d,f,v,_,g,m,M,x,y,C,E,w,R,b,S,L,N,I,F,k;const n=ft();y_(n);const e=p.desktopMatch.checked?Hn(n):null;let t=p.slice.value;(r=p.xySlice)!=null&&r.checked&&(t="xoy"),(a=p.yzSlice)!=null&&a.checked&&(t="yoz"),(o=p.xzSlice)!=null&&o.checked&&(t="xoz"),!((s=p.xySlice)!=null&&s.checked)&&!((l=p.yzSlice)!=null&&l.checked)&&!((c=p.xzSlice)!=null&&c.checked)&&(t="none");const i={iso:Number(p.iso.value),density:Number(p.density.value),radius:Number(p.radius.value),opacity:Number(p.opacity.value),mode:p.mode.value,showCloud:((u=p.cloud)==null?void 0:u.checked)??!1,slice:t,nodeRadial:!!(p.node.checked||(h=p.radialNode)!=null&&h.checked),nodePolar:!!(p.node.checked||(d=p.polarNode)!=null&&d.checked),nodeAzimuthal:!!(p.node.checked||(f=p.longitudeNode)!=null&&f.checked),showNode:!!(p.node.checked||(v=p.radialNode)!=null&&v.checked||(_=p.polarNode)!=null&&_.checked||(g=p.longitudeNode)!=null&&g.checked),showAxis:p.axis.checked,showBox:p.box.checked,showPositive:((m=p.positiveLobe)==null?void 0:m.checked)??!0,showNegative:((M=p.negativeLobe)==null?void 0:M.checked)??!0,wireframe:((x=p.wireframe)==null?void 0:x.checked)??!1,smooth:((y=p.smooth)==null?void 0:y.checked)??!1,showProjection:((C=p.projection)==null?void 0:C.checked)??!1,grid3d:((E=p.grid3d)==null?void 0:E.checked)??!1,cutaway:(w=p.eighth)!=null&&w.checked?"eighth":(R=p.quarter)!=null&&R.checked?"quarter":(b=p.threeQuarter)!=null&&b.checked?"threeQuarter":"none",radialMode:(S=p.radialR)!=null&&S.checked?"R":(L=p.radialR2)!=null&&L.checked?"R2":"RDF",radialSection:((N=p.radialSection)==null?void 0:N.checked)??!1,radialSide:((I=p.radialSide)==null?void 0:I.checked)??!1,radialCurve:((F=p.radialCurve)==null?void 0:F.checked)??!0,radialAxis:((k=p.radialAxis)==null?void 0:k.checked)??!1,positiveColor:p.positiveColor.value,negativeColor:p.negativeColor.value,backgroundColor:p.backgroundColor.value,desktopMatched:!!e};return p.isoValue.value=i.iso.toFixed(4),p.densityValue.value=i.density,p.radiusValue.value=i.radius.toFixed(1),p.opacityValue.value=i.opacity.toFixed(2),p.boxSizeDisplay&&(p.boxSizeDisplay.value=(i.radius*2.4).toFixed(2)),p.intervalValue&&(p.intervalValue.value=(i.radius*2/i.density).toFixed(3)),p.probabilityValue&&(p.probabilityValue.value="0.800"),p.iso.disabled=!1,p.density.disabled=!1,p.radius.disabled=!1,i}function jr(){if(!p.desktopMatch.checked)return;const n=Hn(ft()),e=Math.min(Number(p.iso.max),Math.max(Number(p.iso.min),n.iso));p.iso.value=e.toFixed(4),p.density.value=Math.min(Number(p.density.max),Math.max(Number(p.density.min),n.gridSize)),p.radius.value=Math.min(Number(p.radius.max),Math.max(Number(p.radius.min),n.radius)),Kt()}function S_(){if(!p.boxSizeDisplay)return;const n=Number(p.boxSizeDisplay.value);!Number.isFinite(n)||n<=0||(p.radius.value=Math.min(Number(p.radius.max),Math.max(Number(p.radius.min),n/2.4)),Kt())}function Us(n,e){const t=new $e;t.setAttribute("position",new Be(n,3));const i=new Float32Array(n.length/3);for(let a=0;a<i.length;a+=1){const o=Math.sin((a+1)*12.9898)*43758.5453;i[a]=o-Math.floor(o)}t.setAttribute("seed",new Ot(i,1));const r=new ni({uniforms:{uColor:{value:new Me(e)},uTime:{value:0},uSize:{value:2.7}},transparent:!0,depthWrite:!1,blending:ya,vertexShader:`
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
    `});return new Pv(t,r)}function b_(n){var e,t;for(const i of[Tt,Ct,Yi,$i])i!=null&&i.isPoints&&((t=(e=i.material)==null?void 0:e.uniforms)!=null&&t.uTime)&&(i.material.uniforms.uTime.value=n)}function Lt(n){return Number.parseInt(n.replace("#","0x"),16)}function Sl(n,e){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle=e;const r=n.length>2?34:n.length>1?44:58;i.font=`700 ${r}px Segoe UI, Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,64,64);const a=new Lv(t);a.colorSpace=Ft;const o=new ad({map:a,transparent:!0,alphaTest:.2,depthTest:!0,depthWrite:!1});o.toneMapped=!1;const s=new Cv(o);return s.scale.set(.68,.68,.68),s.renderOrder=20,s}function bl(n,e,t,i){const r=e.clone().sub(n),a=r.length(),o=new nn({color:i});o.toneMapped=!1;const s=new Ye(new Xr(t,t,a,48,1,!1),o);return s.position.copy(n).add(e).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new P(0,1,0),r.normalize()),s}function El(n,e,t,i,r){const a=new nn({color:r});a.toneMapped=!1;const o=new Ye(new zl(i,t,96,1,!1),a);return o.position.copy(e),o.quaternion.setFromUnitVectors(new P(0,1,0),n.clone().normalize()),o}function $s(n,e=.2,t=.9){const i=new dt,r=n*t,a=n*.02,o=r*.1,s=a*3,l=[{dir:new P(1,0,0),color:16711680,label:"x",labelColor:"#ff0000"},{dir:new P(0,1,0),color:47400,label:"y",labelColor:"#00e63a"},{dir:new P(0,0,1),color:15785216,label:"z",labelColor:"#fff000"}];for(const c of l){const u=c.dir.clone().multiplyScalar(-r),h=c.dir.clone().multiplyScalar(r);i.add(bl(u,h,a,c.color)),i.add(El(c.dir,c.dir.clone().multiplyScalar(r*1.01),o,s,c.color));const d=Sl(c.label,c.labelColor);d.scale.setScalar(Math.max(.98,Math.min(1.18,n*.23))),c.label==="x"&&d.position.set(r*1.2,-e,0),c.label==="y"&&d.position.set(-e,r*1.2,0),c.label==="z"&&d.position.set(-e,-e,r*1.2),i.add(d)}return i}function E_(n,e,t,i){const r=new dt,a=Math.max(.018,n*.006),o=n*.08,s=a*3.2,l=new P(0,0,t),c=new P(n,0,t),u=new P(0,0,t+e);r.add(bl(l,c,a,15785216)),r.add(El(new P(1,0,0),c,o,s,15785216)),r.add(bl(l,u,a,22527)),r.add(El(new P(0,0,1),u,o,s,22527));const h=Sl("r","#fff000");h.scale.setScalar(.48),h.position.set(n+o*.85,-n*.045,t),r.add(h);const d=Sl(i==="R2"?"R*R":i,"#0057ff");return d.scale.setScalar(.58),d.position.set(-n*.08,0,t+e+o*.9),r.add(d),r}function Br(n,e,t){const i=new $e;i.setAttribute("position",new Be(n.vertices,3)),i.setIndex(n.indices),i.computeVertexNormals();const r=new ud({color:e,transparent:t<1,opacity:t,side:ot,emissive:e,emissiveIntensity:.055});return new Ye(i,r)}function kr(n,e){n!=null&&n.material&&(n.visible=!0,n.material.wireframe=e.wireframe&&!e.smooth,n.material.flatShading=!e.smooth,n.material.clippingPlanes=[],n.material.clipIntersection=!1,n.material.needsUpdate=!0)}function vd(n){return n.wireframe||n.smooth}function w_(n){return n==="quarter"?[new it(new P(0,1,0),0),new it(new P(0,0,1),0)]:n==="eighth"?[new it(new P(1,0,0),0),new it(new P(0,1,0),0),new it(new P(0,0,1),0)]:n==="threeQuarter"?[new it(new P(0,0,1),0)]:[]}function jl(n){const e=w_(n.cutaway),t=Zr(n.slice);return t==="x"&&e.push(new it(new P(1,0,0),0)),t==="y"&&e.push(new it(new P(0,1,0),0)),t==="z"&&e.push(new it(new P(0,0,1),0)),e}function Zr(n){return n==="yoz"?"x":n==="xoz"?"y":n==="xoy"?"z":null}function A_(n){const e=[];n.cutaway==="quarter"&&e.push("y","z"),n.cutaway==="eighth"&&e.push("x","y","z"),n.cutaway==="threeQuarter"&&e.push("y","z");const t=Zr(n.slice);return t&&e.push(t),[...new Set(e)]}function Fs(n,e,t,i){const r=e._clipPlanes||jl(e);if(!r.length)return n;const a=e._capFilter||(()=>!0);n.updateMatrixWorld(!0);const o=n.geometry.getAttribute("position"),s=n.geometry.index,l=[],c=s?s.count:Math.min(o.count,n.count||o.count);function u(Q){return n.localToWorld(new P(o.getX(Q),o.getY(Q),o.getZ(Q)))}const h=Math.floor(c/3);for(let Q=0;Q<h;Q+=1){const me=s?s.getX(Q*3):Q*3,W=s?s.getX(Q*3+1):Q*3+1,K=s?s.getX(Q*3+2):Q*3+2;l.push([u(me),u(W),u(K)])}let d=l;const f=r.map(()=>[]);r.forEach((Q,me)=>{const W=[];for(const K of d){const{clipped:ce,segments:O}=k_(K,Q);ce.length>=3&&W.push(ce),f[me].push(...O)}d=W});const v=[],_=[],g=new Me(Lt(t));function m(Q){return v.push(Q.x,Q.y,Q.z),v.length/3-1}for(const Q of d){const me=m(Q[0]);for(let W=1;W<Q.length-1;W+=1){const K=m(Q[W]),ce=m(Q[W+1]);_.push(me,K,ce)}}const M=!e._skipCaps,x=[],y=[],C=[];function E(Q){return x.push(Q.x,Q.y,Q.z),y.push(xt(i,Q.x,Q.y,Q.z)),x.length/3-1}function w(Q){const me=Q.normal.clone().normalize(),W=Math.abs(me.x)<.9?new P(1,0,0):new P(0,1,0);W.sub(me.clone().multiplyScalar(W.dot(me))).normalize();const K=new P().crossVectors(me,W).normalize(),ce=me.clone().multiplyScalar(-Q.constant);return{normal:me,basisA:W,basisB:K,origin:ce}}function R(Q,me){const{basisA:W,basisB:K,origin:ce}=w(Q),O=e.radius,re=i.n>=6?6.2:i.n>=5?5.4:3.8,xe=i.n>=6?420:i.n>=5?360:280,be=Math.max(128,Math.min(xe,Math.round(e.density*re))),U=O*2/be,pe=e._capSign??1,ze=e.iso*1.015,je=be+1,Pe=new Float32Array(je*je);function qe(j,Z){const oe=-O+j*U,le=-O+Z*U;return ce.clone().addScaledVector(W,oe).addScaledVector(K,le)}function ke(j,Z){return Z*je+j}for(let j=0;j<=be;j+=1)for(let Z=0;Z<=be;Z+=1){const oe=qe(Z,j);Pe[ke(Z,j)]=pe*xt(i,oe.x,oe.y,oe.z)-ze}function Fe(j,Z){return{point:qe(j,Z),value:Pe[ke(j,Z)]}}function ut(j,Z,oe){return{point:j.point.clone().lerp(Z.point,oe),value:j.value+(Z.value-j.value)*oe}}function D(j,Z){const oe=j-Z;return Math.abs(oe)<1e-12?.5:Math.max(0,Math.min(1,j/oe))}function A(j,Z){const oe=[];for(let le=0;le<j.length;le+=1){const ue=j[le],Ae=j[(le+1)%j.length],ae=Z.distanceToPoint(ue.point),Ee=Z.distanceToPoint(Ae.point),Ve=ae>=-1e-7,Ie=Ee>=-1e-7;if(Ve&&Ie)oe.push(Ae);else if(Ve&&!Ie){const _e=D(ae,Ee);oe.push(ut(ue,Ae,_e))}else if(!Ve&&Ie){const _e=D(ae,Ee);oe.push(ut(ue,Ae,_e),Ae)}}return oe}function $(j){const Z=[];for(let oe=0;oe<j.length;oe+=1){const le=j[oe],ue=j[(oe+1)%j.length],Ae=le.value>=0,ae=ue.value>=0;if(Ae&&ae)Z.push(ue);else if(Ae&&!ae){const Ee=D(le.value,ue.value);Z.push(ut(le,ue,Ee))}else if(!Ae&&ae){const Ee=D(le.value,ue.value);Z.push(ut(le,ue,Ee),ue)}}return Z}function te(j){return E(j.point)}for(let j=0;j<be;j+=1)for(let Z=0;Z<be;Z+=1){let oe=[Fe(Z,j),Fe(Z+1,j),Fe(Z+1,j+1),Fe(Z,j+1)];for(let Ae=0;Ae<r.length&&!(Ae!==me&&(oe=A(oe,r[Ae]),oe.length<3));Ae+=1);if(oe.length<3||(oe=$(oe),oe.length<3))continue;const le=oe.reduce((Ae,ae)=>Ae.add(ae.point),new P).multiplyScalar(1/oe.length);if(!a(me,le))continue;const ue=te(oe[0]);for(let Ae=1;Ae<oe.length-1;Ae+=1)C.push(ue,te(oe[Ae]),te(oe[Ae+1]))}}M&&r.forEach((Q,me)=>{R(Q,me)});const b=new $e;b.setAttribute("position",new Be(v,3)),b.setIndex(_),e.smooth&&!e.wireframe&&!e._skipSmooth&&xd(b,e),b.computeVertexNormals();const S=new Xi({color:g,emissive:g,emissiveIntensity:.08,shininess:28,specular:3355443,transparent:e.opacity<1,opacity:e.opacity,side:ot,wireframe:e.wireframe,flatShading:!e.smooth}),L=new Ye(b,S);if(L.userData.vertexCount=_.length,!C.length)return L;const N=new $e,I=Ed(y,e.iso*1.6),F=[];for(let Q=0;Q<y.length;Q+=1){const me=y[Q],W=x[Q*3],K=x[Q*3+1],ce=x[Q*3+2],O=bd(me,W,K,ce,e,i,I);F.push(O.r,O.g,O.b)}N.setAttribute("position",new Be(x,3)),N.setAttribute("color",new Be(F,3)),N.setIndex(C),N.computeVertexNormals();const V=!!Zr(e.slice)||e.cutaway!=="none",X=new nn({vertexColors:!0,side:ot,transparent:!1,opacity:1,depthWrite:!0});X.toneMapped=!1;const G=new Ye(N,X);G.renderOrder=V?3:1;const ie=new nn({vertexColors:!0,side:ot,transparent:!0,opacity:.26,depthWrite:!1,depthTest:!0,blending:ya});ie.toneMapped=!1;const ne=new Ye(N,ie);ne.renderOrder=G.renderOrder+.05;const se=new dt;return se.add(L,G,ne),se.userData.vertexCount=_.length+C.length*2,se}function Zl(n){var t,i;let e=((t=n==null?void 0:n.userData)==null?void 0:t.vertexCount)||0;return(i=n==null?void 0:n.traverse)==null||i.call(n,r=>{var a;r!==n&&(e+=((a=r.userData)==null?void 0:a.vertexCount)||0)}),e}function _d(n){const e=n.clone(!0);return e.traverse(t=>{t.geometry&&(t.geometry=t.geometry.clone()),t.material&&(t.material=Array.isArray(t.material)?t.material.map(i=>i.clone()):t.material.clone()),t.userData={...t.userData}}),e.userData={...n.userData},e}function T_(n){var e;(e=n==null?void 0:n.traverse)==null||e.call(n,t=>{var i,r,a,o;(r=(i=t.geometry)==null?void 0:i.dispose)==null||r.call(i),Array.isArray(t.material)?t.material.forEach(s=>{var l;return(l=s.dispose)==null?void 0:l.call(s)}):(o=(a=t.material)==null?void 0:a.dispose)==null||o.call(a)})}function C_(n){var e,t,i,r;(t=(e=n==null?void 0:n.geometry)==null?void 0:e.dispose)==null||t.call(e),(r=(i=n==null?void 0:n.material)==null?void 0:i.dispose)==null||r.call(i)}function R_(n){const e=new Ye(n.geometry.clone(),n.material.clone());return e.position.copy(n.position),e.scale.copy(n.scale),e.count=n.count,e.userData.vertexCount=n.vertexCount,e}function P_(n,e,t,i){return JSON.stringify({n:n.n,l:n.l,m:n.m,z:n.z,sign:t,color:i,iso:e.iso,density:e.density,radius:e.radius,opacity:e.opacity})}function L_(n,e){var i;const t={geometry:e.geometry.clone(),material:e.material.clone(),position:e.position.clone(),scale:e.scale.clone(),count:e.count,vertexCount:e.count??((i=e.geometry.getAttribute("position"))==null?void 0:i.count)??0};for(_i.set(n,t);_i.size>p_;){const r=_i.keys().next().value,a=_i.get(r);_i.delete(r),C_(a)}}function I_(n,e,t,i){return JSON.stringify({n:n.n,l:n.l,m:n.m,z:n.z,sign:t,color:i,iso:e.iso,density:e.density,radius:e.radius,opacity:e.opacity,mode:e.mode,cutaway:e.cutaway,slice:e.slice,wireframe:e.wireframe,smooth:e.smooth,showPositive:e.showPositive,showNegative:e.showNegative,backgroundColor:e.backgroundColor})}function D_(n,e){const t=_d(e);for(vi.set(n,t);vi.size>f_;){const i=vi.keys().next().value,r=vi.get(i);vi.delete(i),T_(r)}}function rh(n,e,t,i){const r=I_(n,e,t,i),a=vi.get(r);if(a)return vi.delete(r),vi.set(r,a),_d(a);const o=wl(n,e,t,i);return D_(r,o),o}function N_(n,e,t,i,r){const a=new dt;let o=0;for(const s of r){const l=Fs(n,{...e,_clipPlanes:s.planes,_capFilter:s.capFilter,_skipSmooth:!0},t,i);l&&(a.add(l),o+=Zl(l))}return a.userData.vertexCount=o,a}function U_(n,e,t){const i=[],r=e.radius,a=Math.max(1800,n.n*620);let o=0,s=t*xt(n,0,0,0)-e.iso;for(let l=1;l<=a;l+=1){const c=r*l/a,u=t*xt(n,c,0,0)-e.iso;if(Number.isFinite(u)&&Number.isFinite(s)&&s*u<0){let h=o,d=c,f=s;for(let _=0;_<36;_+=1){const g=(h+d)/2,m=t*xt(n,g,0,0)-e.iso;f*m<=0?d=g:(h=g,f=m)}const v=(h+d)/2;v>.02&&!i.some(_=>Math.abs(_-v)<.025)&&i.push(v)}o=c,s=u}return i}function F_(n){const e=(()=>{const i=Zr(n.slice);return i==="x"?new it(new P(1,0,0),0):i==="y"?new it(new P(0,1,0),0):i==="z"?new it(new P(0,0,1),0):null})(),t=i=>e?[...i,e]:i;return n.cutaway==="threeQuarter"?[{planes:t([new it(new P(0,-1,0),0)])},{planes:t([new it(new P(0,0,-1),0)])}]:[{planes:jl(n)}]}function O_(n,e,t,i){const r=U_(n,e,t),a=new dt,o=F_(e),s=Lt(i);let l=0;for(const u of r){const h=new Yr(u,n.n>=5?160:128,n.n>=5?96:72);for(const d of o){const f=new Xi({color:s,emissive:s,emissiveIntensity:.08,shininess:28,specular:3355443,transparent:e.opacity<1,opacity:e.opacity,side:ot,wireframe:e.wireframe,flatShading:!e.smooth,clippingPlanes:d.planes,clipIntersection:!1}),v=new Ye(h.clone(),f);v.userData.vertexCount=h.getAttribute("position").count,a.add(v),l+=v.userData.vertexCount}h.dispose()}const c=X_(n,e,t);return c&&(a.add(c),l+=Zl(c)),a.userData.vertexCount=l,a.children.length?a:null}function z_(n,e,t,i){return e.cutaway==="quarter"?Fs(n,{...e,_clipPlanes:[new it(new P(0,1,0),0),new it(new P(0,0,1),0)],_skipSmooth:!0},t,i):e.cutaway==="eighth"?Fs(n,{...e,_clipPlanes:[new it(new P(1,0,0),0),new it(new P(0,1,0),0),new it(new P(0,0,1),0)],_skipSmooth:!0},t,i):e.cutaway==="threeQuarter"?N_(n,e,t,i,[{planes:[new it(new P(0,-1,0),0)],capFilter:(r,a)=>a.z>0},{planes:[new it(new P(0,1,0),0),new it(new P(0,0,-1),0)],capFilter:(r,a)=>r===1&&a.y>0}]):null}function B_(n,e,t){var x;n.updateMatrixWorld(!0);const i=n.geometry.getAttribute("position"),r=Number.isFinite(n.count)&&n.count>0?n.count:Number.POSITIVE_INFINITY,a=Number.isFinite((x=n.geometry.drawRange)==null?void 0:x.count)&&n.geometry.drawRange.count>0?n.geometry.drawRange.count:Number.POSITIVE_INFINITY,o=Math.min(i.count,r,a),s=[],l=[],c=new Map;function u(y){return Number.isFinite(y.x)&&Number.isFinite(y.y)&&Number.isFinite(y.z)}const h=Zr(e.slice);function d(y){return e.cutaway==="quarter"?(y.y>0&&(y.y=0),y.z>0&&(y.z=0)):e.cutaway==="eighth"?(y.x>0&&(y.x=0),y.y>0&&(y.y=0),y.z>0&&(y.z=0)):e.cutaway==="threeQuarter"&&y.y>0&&y.z>0&&(y.y<y.z?y.y=0:y.z=0),h==="x"&&y.x>0&&(y.x=0),h==="y"&&y.y>0&&(y.y=0),h==="z"&&y.z>0&&(y.z=0),y}function f(y,C){const E=n.localToWorld(new P(i.getX(y),i.getY(y),i.getZ(y)));if(d(E),!u(E))return-1;if(C){const R=`${Math.round(E.x*1e4)},${Math.round(E.y*1e4)},${Math.round(E.z*1e4)}`;if(c.has(R))return c.get(R);const b=s.length/3;return s.push(E.x,E.y,E.z),c.set(R,b),b}return s.push(E.x,E.y,E.z),s.length/3-1}const v=Math.floor(o/3),_=e.smooth&&!e.wireframe;for(let y=0;y<v;y+=1){const C=y*3,E=y*3+1,w=y*3+2,R=f(C,_),b=f(E,_),S=f(w,_);R>=0&&b>=0&&S>=0&&l.push(R,b,S)}const g=new $e;g.setAttribute("position",new Be(s,3)),g.setIndex(l),e.smooth&&!e.wireframe&&xd(g,e),g.computeVertexNormals();const m=n.material.clone();m.color=new Me(Lt(t)),m.emissive=new Me(Lt(t)),m.side=ot,m.wireframe=e.wireframe,m.flatShading=!e.smooth,m.clippingPlanes=[],m.needsUpdate=!0;const M=new Ye(g,m);return M.userData.vertexCount=o,M}function xd(n,e){const t=n.getAttribute("position"),i=n.index;if(!t||!i)return;const r=t.count,a=Array.from({length:r},()=>new Set);for(let f=0;f<i.count;f+=3){const v=i.getX(f),_=i.getX(f+1),g=i.getX(f+2);a[v].add(_).add(g),a[_].add(v).add(g),a[g].add(v).add(_)}const o=Math.max(.035,e.radius/Math.max(80,e.density*2)),s=new Uint8Array(r),l=Zr(e.slice);for(let f=0;f<r;f+=1){const v=t.getX(f),_=t.getY(f),g=t.getZ(f);e.cutaway==="quarter"&&(Math.abs(_)<o||Math.abs(g)<o)&&(s[f]=1),e.cutaway==="eighth"&&(Math.abs(v)<o||Math.abs(_)<o||Math.abs(g)<o)&&(s[f]=1),e.cutaway==="threeQuarter"&&(Math.abs(_)<o||Math.abs(g)<o)&&(s[f]=1),l==="x"&&Math.abs(v)<o&&(s[f]=1),l==="y"&&Math.abs(_)<o&&(s[f]=1),l==="z"&&Math.abs(g)<o&&(s[f]=1)}const c=new Float32Array(t.array),u=new Float32Array(c.length),h=e.cutaway==="none"?10:7,d=e.cutaway==="none"?.16:.1;for(let f=0;f<h;f+=1){u.set(c);for(let v=0;v<r;v+=1){if(s[v]||a[v].size<3)continue;let _=0,g=0,m=0;for(const y of a[v]){const C=y*3;_+=c[C],g+=c[C+1],m+=c[C+2]}const M=a[v].size,x=v*3;u[x]=c[x]+(_/M-c[x])*d,u[x+1]=c[x+1]+(g/M-c[x+1])*d,u[x+2]=c[x+2]+(m/M-c[x+2])*d}c.set(u)}t.array.set(c),t.needsUpdate=!0}function k_(n,e){const t=[],i=[];for(let a=0;a<n.length;a+=1){const o=n[a],s=n[(a+1)%n.length],l=e.distanceToPoint(o)>=-1e-7,c=e.distanceToPoint(s)>=-1e-7;if(l&&c)t.push(s.clone());else if(l&&!c){const u=ah(o,s,e);t.push(u),i.push(u)}else if(!l&&c){const u=ah(o,s,e);t.push(u,s.clone()),i.push(u)}}const r=i.length===2?[[i[0],i[1]]]:[];return{clipped:t,segments:r}}function ah(n,e,t){const i=e.clone().sub(n),r=t.normal.dot(i);if(Math.abs(r)<1e-10)return n.clone();const a=-(t.normal.dot(n)+t.constant)/r;return n.clone().add(i.multiplyScalar(Math.max(0,Math.min(1,a))))}function V_(n,e,t,i,r){const a=P_(n,t,i,r),o=_i.get(a);if(o)return _i.delete(a),_i.set(a,o),R_(o);const s=new ud({color:Lt(r),transparent:e.opacity<1,opacity:e.opacity,side:ot,emissive:Lt(r),emissiveIntensity:.055}),l=n.n>=5?5e5:16e4,c=new t_(t.density,s,!0,!0,l);return c.isolation=t.iso,c.position.set(0,0,0),c.scale.set(t.radius,t.radius,t.radius),o_(c.field,n,{...t,cutaway:"none"},i),c.update(),L_(a,c),c}function wl(n,e,t,i){const r=e.cutaway!=="none"||e.slice!=="none";if(n.l===0&&r){const u=O_(n,e,t,i);if(u)return u}const a=e.smooth&&!e.wireframe?Math.round(e.density*(r?3:2)):e.density,o={...e,density:Math.min(r?220:180,Math.max(e.density,a))},s=V_(n,e,o,t,i),l={...e,_capSign:t,_skipCaps:n.l===0},c=z_(s,l,i,n);return c||(jl(e).length?Fs(s,l,i,n):B_(s,e,i))}function H_(n,e){const t=new dt,i=G_(n,e.radius,e);return i&&t.add(i),t.userData.vertexCount=Zl(t),t.children.length?t:null}function Ma(n,e=.18){const t=new nn({color:n,transparent:!0,opacity:e,side:ot,depthWrite:!1,depthTest:!0});return t.toneMapped=!1,t}function Md(n,e,t){const i=new P(Math.cos(n),Math.sin(n),0).multiplyScalar(e),r=new P(0,0,e),a=[-i.x-r.x,-i.y-r.y,-i.z-r.z,i.x-r.x,i.y-r.y,i.z-r.z,i.x+r.x,i.y+r.y,i.z+r.z,-i.x+r.x,-i.y+r.y,-i.z+r.z],o=new $e;return o.setAttribute("position",new Be(a,3)),o.setIndex([0,1,2,0,2,3]),o.computeVertexNormals(),new Ye(o,t)}function yd(n,e,t){const i=Math.min(n,Math.PI-n);if(Math.abs(i-Math.PI/2)<.018){const h=new Ye(new Ol(e,160),t);return h.renderOrder=3,h}const r=e*Math.sin(i),a=e*Math.cos(i),o=160,s=[],l=[];for(const h of[1,-1]){const d=s.length/3;s.push(0,0,0);for(let f=0;f<=o;f+=1){const v=Math.PI*2*f/o;s.push(r*Math.cos(v),r*Math.sin(v),h*a)}for(let f=1;f<=o;f+=1)l.push(d,d+f,d+f+1)}const c=new $e;c.setAttribute("position",new Be(s,3)),c.setIndex(l),c.computeVertexNormals();const u=new Ye(c,t);return u.renderOrder=3,u}function G_(n,e,t={}){const i=new dt;if(t.nodeRadial){const o=Ma(16766282,.16);for(const s of kl(n)){if(s<=.02||s>=e*.99)continue;const l=new Ye(new Yr(s,128,64),o.clone());l.renderOrder=3,i.add(l),i.add(Cd(s,16761856,.46))}}const{polar:r,azimuthal:a}=Vl(n);if(t.nodePolar){const o=Ma(16773288,.15);for(const s of r)i.add(yd(s,e*1.04,o.clone()))}if(t.nodeAzimuthal){const o=Ma(12447743,.13);for(const s of a){const l=Md(s,e*1.04,o.clone());l.renderOrder=3,i.add(l)}}return i.children.length?i:null}function W_(n,e,t={}){const i=new dt,{polar:r,azimuthal:a}=Vl(n);if(t.nodePolar){const o=Ma(16773288,.18);for(const s of r)i.add(yd(s,e,o.clone()))}if(t.nodeAzimuthal){const o=Ma(12447743,.16);for(const s of a)i.add(Md(s,e,o.clone()))}return i.children.length?i:null}function q_(n,e){return null}function Sd(n){const e=new Wr(n*2,n*2,n*2),t=new Yv(e),i=new Ki({color:13686237,transparent:!0,opacity:.58}),r=new Ul(t,i);return e.dispose(),r}function X_(n,e,t=null){const i=A_(e);if(!i.length)return null;const r=new dt;for(const a of i){const o=$_(n,e,a,t);o&&r.add(o)}return r.children.length?r:null}function Y_(n,e){const t=Math.max(0,Math.min(1,Math.abs(n)/Math.max(e*.5,1e-12))),i=Math.pow(t,.52);return n>=0?new Me(16711896).lerp(new Me(16716306),i):new Me(60159).lerp(new Me(1054975),i)}function bd(n,e,t,i,r,a,o){const s=new Me(r.backgroundColor||"#668080"),l=new Me(16711896),c=new Me(60159),u=(S,L,N)=>{const I=Math.max(0,Math.min(1,(N-S)/Math.max(1e-12,L-S)));return I*I*(3-2*I)},h=Math.min(1,Math.hypot(e,t,i)/Math.max(r.radius,1e-9)),d=Math.pow(1-h,1.45),f=Math.max(0,Math.min(1,(a.n-4)/2)),v=Math.abs(n),_=r.iso*(.86-d*.18-f*.04),g=r.iso*(1.62+d*1.05+f*.28),m=r.iso*(1.05+d*.18),M=Math.max(r.iso*(2.1+d*1.05+f*.22),o*(.48+d*.14)),x=u(_,g,v),y=u(m,M,v),C=Y_(n,o),E=n>=0?l:c,w=.38+y*(.62-d*.06),R=E.clone().lerp(C,Math.max(.34,w)),b=Math.max(0,(1-x)*(.16+d*.06));return R.clone().lerp(s,b)}function Ed(n,e){const t=n.map(r=>Math.abs(r)).filter(r=>Number.isFinite(r)&&r>1e-12).sort((r,a)=>r-a);if(!t.length)return Math.max(e,1e-9);const i=Math.min(t.length-1,Math.floor(t.length*.82));return Math.max(e,t[i])}function $_(n,e,t,i=null){const r=Math.max(160,Math.min(n.n>=5?420:320,Math.round(e.density*(n.n>=5?5.4:4.4)))),a=e.radius;function o(I,F){return t==="x"?[0,I,F]:t==="y"?[I,0,F]:[I,F,0]}function s(I,F,k){return e.cutaway==="quarter"||e.cutaway==="threeQuarter"?t==="y"?k>0:t==="z"?F>0:!1:e.cutaway==="eighth"?t==="x"?F>0&&k>0:t==="y"?I>0&&k>0:t==="z"?I>0&&F>0:!1:!0}const l=r+1,c=e.iso*1.015,u=new Float32Array(l*l),h=[],d=(I,F)=>F*l+I;for(let I=0;I<=r;I+=1){const F=a-2*a*I/r;for(let k=0;k<=r;k+=1){const V=-a+2*a*k/r,[X,G,ie]=o(V,F),ne=xt(n,X,G,ie);u[d(k,I)]=ne;const se=i==null||(i>0?ne>=0:ne<0);s(X,G,ie)&&se&&Math.abs(ne)>=e.iso*.94&&h.push(ne)}}if(!h.length)return null;const f=Ed(h,e.iso*1.6),v=[],_=[],g=[];function m(I){return i==null?Math.abs(I)-c:i*I-c}function M(I,F){const k=-a+2*a*I/r,V=a-2*a*F/r,[X,G,ie]=o(k,V),ne=u[d(I,F)];return{point:new P(X,G,ie),rawValue:ne,value:m(ne)}}function x(I,F,k){return{point:I.point.clone().lerp(F.point,k),rawValue:I.rawValue+(F.rawValue-I.rawValue)*k,value:I.value+(F.value-I.value)*k}}function y(I,F){const k=I-F;return Math.abs(k)<1e-12?.5:Math.max(0,Math.min(1,I/k))}function C(I){const F=[];for(let k=0;k<I.length;k+=1){const V=I[k],X=I[(k+1)%I.length],G=V.value>=0,ie=X.value>=0;G&&ie?F.push(X):G&&!ie?F.push(x(V,X,y(V.value,X.value))):!G&&ie&&F.push(x(V,X,y(V.value,X.value)),X)}return F}function E(I){const{x:F,y:k,z:V}=I.point;v.push(F,k,V);const X=bd(I.rawValue,F,k,V,e,n,f);return _.push(X.r,X.g,X.b),v.length/3-1}for(let I=0;I<r;I+=1)for(let F=0;F<r;F+=1){const k=-a+2*a*(F+.5)/r,V=a-2*a*(I+.5)/r,[X,G,ie]=o(k,V);if(!s(X,G,ie))continue;let ne=[M(F,I),M(F+1,I),M(F+1,I+1),M(F,I+1)];if(ne=C(ne),ne.length<3)continue;const se=E(ne[0]);for(let Q=1;Q<ne.length-1;Q+=1)g.push(se,E(ne[Q]),E(ne[Q+1]))}if(!g.length)return null;const w=new $e;w.setAttribute("position",new Be(v,3)),w.setAttribute("color",new Be(_,3)),w.setIndex(g),w.computeVertexNormals();const R=new nn({vertexColors:!0,side:ot,transparent:!1,opacity:1,depthWrite:!0});R.toneMapped=!1;const b=new Ye(w,R);b.renderOrder=4,b.userData.vertexCount=g.length;const S=new nn({vertexColors:!0,side:ot,transparent:!0,opacity:.26,depthWrite:!1,depthTest:!0,blending:ya});S.toneMapped=!1;const L=new Ye(w,S);L.renderOrder=4.05,L.userData.vertexCount=g.length;const N=new dt;return N.add(b,L),N.userData.vertexCount=g.length*2,N}function j_(){for(const n of[Tt,Ct,Yi,$i,fa,pa,Ns,ml])n&&tr(Wt,n);Tt=null,Ct=null,Yi=null,$i=null,fa=null,pa=null,Ns=null,ml=null}function Z_(){for(const n of[fi,pi,ma])n&&tr(mn,n);fi=null,pi=null,ma=null}function K_(n,e=!0){gi&&tr(mn,gi),gi=$s(n,Math.max(.08,n*.024),.9),gi.visible=e,mn.add(gi)}function J_(){for(const n of[ga,va,Gi])n&&tr(zn,n);ga=null,va=null,Gi=null}function wd(){for(const n of[_a,xa,on,gl,vl])n&&tr(Bn,n);_a=null,xa=null,on=null,gl=null,vl=null}function tr(n,e){n.remove(e),e.traverse(t=>{var i,r,a,o;if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const s of t.material)s.dispose();else t.material&&(t.material.map&&t.material.map.dispose(),(o=(a=(r=(i=t.material.uniforms)==null?void 0:i.volumeMap)==null?void 0:r.value)==null?void 0:a.dispose)==null||o.call(a),t.material.dispose())})}function lt(){Kl();const n=ft(),e=Kt(),t=Vn(n.n,n.l,n.m);p.statusText.textContent="Calculating",p.renderButton.disabled=!0,requestAnimationFrame(()=>{var s;j_(),Z_(),J_(),wd();let i=0,r=0;if($l(e.backgroundColor),Ea.visible=e.showAxis,Ea.scale.setScalar(Math.max(1,e.radius/4.5)),(s=p.toolAxis)==null||s.classList.toggle("active",e.showAxis),e.mode==="marching"||e.mode==="points")Tt=rh(n,e,1,e.positiveColor),Ct=rh(n,e,-1,e.negativeColor),i=Tt.userData.vertexCount,r=Ct.userData.vertexCount;else{const{positive:l,negative:c}=u_(n,{...e,thetaSegments:Math.max(30,e.density+18),phiSegments:Math.max(52,e.density*3)});Tt=Br(l,Lt(e.positiveColor),e.opacity),Ct=Br(c,Lt(e.negativeColor),e.opacity),kr(Tt,e),kr(Ct,e),i=l.vertices.length/3,r=c.vertices.length/3}const a=vd(e);if(Tt&&Ct&&(Tt.visible=e.showPositive&&a,Ct.visible=e.showNegative&&a,Wt.add(Tt,Ct)),e.showCloud){const{positive:l,negative:c}=s_(n,e);Yi=Us(l,Lt(e.positiveColor)),$i=Us(c,Lt(e.negativeColor)),Yi.visible=e.showPositive,$i.visible=e.showNegative,Wt.add(Yi,$i),i=l.length/3,r=c.length/3}e.showNode&&Ds(n.n,n.l)!=="0 radial, 0 angular"&&(fa=H_(n,e),fa&&Wt.add(fa)),pa=q_(),pa&&Wt.add(pa),ml=null,(e.showBox||e.grid3d)&&(Ns=Sd(e.radius),Wt.add(Ns)),hx(e),p.orbitalName.textContent=t,p.viewerTitle.textContent=`原子轨道  ${t}`,p.nodeText.textContent=Ds(n.n,n.l),p.sliceText.textContent=e.slice.toUpperCase(),p.boxText.textContent=e.radius.toFixed(2),p.isoText.textContent=e.iso.toFixed(5),p.posCount.textContent=String(i),p.negCount.textContent=String(r),p.statusText.textContent="Rendered",Ud(),p.animationWindow&&!p.animationWindow.classList.contains("closed")&&Vr(0),ox(n,e),Ex(n,e),Pd(n,e);const o=n.n>=5||n.l>=3?1.65:1.22;ix(n,e.radius*o,Math.max(Zt,tx(e))),h_(),d_(),tn(Ce),tn(De),p.renderButton.disabled=!1,un()})}function Q_(){return Array.from(document.querySelectorAll(".view-grid > .qt-window"))}function Kl(n={}){for(const e of Q_())e.classList.remove("closed"),n.restoreLayout?e.classList.remove("minimized","maximized"):e.classList.remove("minimized"),nr(e)}function js(n=ii){const e=p.viewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(Ke.left=-n*t,Ke.right=n*t,Ke.top=n,Ke.bottom=-n):(Ke.left=-n,Ke.right=n,Ke.top=n/t,Ke.bottom=-n/t),Ke.near=.1,Ke.far=Math.max(1e3,n*8),Ke.updateProjectionMatrix()}function Ai(n,e=90){return Math.max(e,n*2.8)}function Jl(n=ii){var t,i,r;ii=n;const e=Ai(n);Ke.position.set(0,0,e),Ke.lookAt(0,0,0),js(n),Ce.target.set(0,0,0),Ce.update(),(t=p.toolXOY)==null||t.classList.add("active"),(i=p.toolYOZ)==null||i.classList.remove("active"),(r=p.toolXOZ)==null||r.classList.remove("active")}function Zs(n=Math.max(3,ii*.45)){const e=p.angularViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(st.left=-n*t,st.right=n*t,st.top=n,st.bottom=-n):(st.left=-n,st.right=n,st.top=n/t,st.bottom=-n/t),st.near=.1,st.far=Math.max(1e3,n*8),st.updateProjectionMatrix()}function ex(n=4){var t;Zt=Math.max(3,n);const e=Ai(Zt,40);st.position.set(0,0,e),st.lookAt(0,0,0),Zs(Zt),De.target.set(0,0,0),(t=De.handleResize)==null||t.call(De),De.update()}function tx(n){const e=Math.max(4,Math.min(8,n.radius*.55))*.74;return Math.max(5.8,e*1.55)}function nx(...n){var a;const e=new hn,t=new hn;let i=!1;for(const o of n)o&&((a=o.updateWorldMatrix)==null||a.call(o,!0,!1),t.setFromObject(o),!(!Number.isFinite(t.min.x)||!Number.isFinite(t.max.x))&&(i?e.union(t):e.copy(t),i=!0));if(!i)return 4.2;const r=new Ci;return e.getBoundingSphere(r),Math.max(.001,r.radius)}function ix(n,e,t){var o,s,l,c,u;const i=ic(n);ii=e,Zt=Math.max(3,t);const r=Ai(e),a=Ai(Zt,40);i==="yoz"?(Ke.position.set(r,0,0),st.position.set(a,0,0)):i==="xoz"?(Ke.position.set(0,r,0),st.position.set(0,a,0)):(Ke.position.set(0,0,r),st.position.set(0,0,a)),Ke.lookAt(0,0,0),st.lookAt(0,0,0),js(e),Zs(Zt),Ce.target.set(0,0,0),De.target.set(0,0,0),(o=Ce.handleResize)==null||o.call(Ce),(s=De.handleResize)==null||s.call(De),Ce.update(),De.update(),(l=p.toolXOY)==null||l.classList.toggle("active",i==="xoy"),(c=p.toolYOZ)==null||c.classList.toggle("active",i==="yoz"),(u=p.toolXOZ)==null||u.classList.toggle("active",i==="xoz")}function Ad(n=Math.max(2.5,ii*.6)){const e=p.projectionViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(yt.left=-n*t,yt.right=n*t,yt.top=n,yt.bottom=-n):(yt.left=-n,yt.right=n,yt.top=n/t,yt.bottom=-n/t),yt.near=.1,yt.far=1e3,yt.updateProjectionMatrix()}function rx(n=Math.max(3,ii*.5)){var e;Yl=n,yt.up.set(0,0,1),yt.position.set(n*.78,-n*1.18,n*.68),yt.lookAt(0,0,0),Ad(n),In.target.set(0,0,0),(e=In.handleResize)==null||e.call(In),In.update()}function Ql(n=4.5){const e=p.radialViewer.getBoundingClientRect(),t=e.width&&e.height?e.width/e.height:1;t>=1?(It.left=-n*t,It.right=n*t,It.top=n,It.bottom=-n):(It.left=-n,It.right=n,It.top=n/t,It.bottom=-n/t),It.near=.1,It.far=1e3,It.updateProjectionMatrix()}function ax(n=4.5){var e;wa=n,It.position.set(n*.65,-n*.9,n*.7),It.lookAt(0,0,0),Ql(n),$t.target.set(0,0,0),(e=$t.handleResize)==null||e.call($t),$t.update()}function sx(){var i;if(!tc()||!((i=p.syncRotation)!=null&&i.checked))return;const n=Ke.position.clone().sub(Ce.target).normalize(),e=Ke.up.clone(),t=(r,a,o,s=40)=>{const l=Ai(o,s);r.position.copy(n.clone().multiplyScalar(l)),r.up.copy(e),r.lookAt(0,0,0),a.target.set(0,0,0),r.updateProjectionMatrix()};t(st,De,Zt,40),t(yt,In,Yl,30)}function ox(n,e){const t={...e,radius:Math.max(4,Math.min(8,e.radius*.55)),thetaSegments:72,phiSegments:144},{positive:i,negative:r}=pd(n,t);fi=Br(i,Lt(e.positiveColor),1),pi=Br(r,Lt(e.negativeColor),1),kr(fi,{...e,smooth:!0,wireframe:e.wireframe}),kr(pi,{...e,smooth:!0,wireframe:e.wireframe}),fi.scale.setScalar(.74),pi.scale.setScalar(.74);const a=vd(e);fi.visible=e.showPositive&&a,pi.visible=e.showNegative&&a,mn.add(fi,pi);const o=nx(fi,pi),s=Math.max(4.2,o*1.45);e.showNode&&(ma=W_(n,Math.max(o*1.16,2.8),e),ma&&mn.add(ma)),K_(s,e.showAxis),Zt=Math.max(Zt,s*1.12)}const sa=(()=>{const n=[255,0,0],e=[255,0,255],t=[255,255,255],i=[0,255,255],r=[0,0,255],a=[],o=(l,c)=>{for(let u=0;u<c;u+=1)a.push(l)},s=(l,c,u)=>{const h=[(c[0]-l[0])/u,(c[1]-l[1])/u,(c[2]-l[2])/u];for(let d=0;d<u;d+=1)a.push([l[0]+d*h[0],l[1]+d*h[1],l[2]+d*h[2]])};return o(n,20),s(n,e,80),s(e,t,25),o(t,5),s(t,i,25),s(i,r,80),o(r,20),a.reverse().map(([l,c,u])=>new Me(l/255,c/255,u/255))})();function ec(n){const t=(Math.max(-1,Math.min(1,n))+1)/2*(sa.length-1),i=Math.max(0,Math.min(sa.length-1,Math.floor(t))),r=Math.max(0,Math.min(sa.length-1,i+1));return sa[i].clone().lerp(sa[r],t-i)}function lx(n,e,t,i,r,a){const o=e.rows,s=o.length,l=2*t/(s-1),c=Math.max(1,Math.round(.4/l)),u=new Ki({color:16777215,transparent:!0,opacity:.56}),h=(d,f)=>{const v=-t+2*t*d/(s-1),_=-t+2*t*f/(s-1),g=o[f][d]/a;return new P(v,_,i+g*r+.012)};for(let d=0;d<s;d+=c){const f=[];for(let v=0;v<s;v+=1)f.push(h(v,d));n.add(new ba(new $e().setFromPoints(f),u))}for(let d=0;d<s;d+=c){const f=[];for(let v=0;v<s;v+=1)f.push(h(d,v));n.add(new ba(new $e().setFromPoints(f),u))}}function cx(n,e,t,i,r,a=1){const o=e.rows,s=o.length,l=2*t/(s-1),c=[(h,d,f)=>new P(-t+(h+f)*l,-t+d*l,i),(h,d,f)=>new P(-t+(h+1)*l,-t+(d+f)*l,i),(h,d,f)=>new P(-t+(h+1-f)*l,-t+(d+1)*l,i),(h,d,f)=>new P(-t+h*l,-t+(d+1-f)*l,i)],u=[[0,1],[1,2],[2,3],[3,0]];for(const h of r){const d=new Ki({color:ec(h).getHex(),transparent:!0,opacity:.95}),f=[];for(let v=0;v<s-1;v+=1)for(let _=0;_<s-1;_+=1){const g=[o[v][_],o[v][_+1],o[v+1][_+1],o[v+1][_]].map(M=>M/a),m=[];for(let M=0;M<4;M+=1){const[x,y]=u[M],C=g[x]-h,E=g[y]-h;if(C===0||C*E<0){const w=Math.abs(C)+Math.abs(E);if(w<1e-12)continue;const R=Math.max(0,Math.min(1,Math.abs(C)/w));m.push(c[M](_,v,R))}}m.length>=2&&(f.push(m[0],m[1]),m.length>=4&&f.push(m[2],m[3]))}f.length&&n.add(new Ul(new $e().setFromPoints(f),d))}}const On={radius:16756736,direction:3538793,point:16776960};function tc(){var n;return!!((n=p.relationMode)!=null&&n.checked)}function ux(){const n=[[Wt,_l],[zn,xl],[Bn,Ml],[mn,yl]];for(const[e,t]of n)t&&tr(e,t);_l=null,xl=null,Ml=null,yl=null}function sh(n){var i,r;let e=0;const t=new P;return(i=n==null?void 0:n.updateMatrixWorld)==null||i.call(n,!0),(r=n==null?void 0:n.traverse)==null||r.call(n,a=>{var s,l;const o=(l=(s=a.geometry)==null?void 0:s.attributes)==null?void 0:l.position;if(o){a.updateMatrixWorld(!0);for(let c=0;c<o.count;c+=1)t.fromBufferAttribute(o,c).applyMatrix4(a.matrixWorld),e=Math.max(e,t.length())}}),e}function hx(n){const e=Math.max(sh(Tt),sh(Ct));Xl=e>.001?e*1.02:n.radius*.86}function Td(){var u,h,d;const n=Kt(),e=Math.max(0,Math.min(100,Number(((u=p.scanRadius)==null?void 0:u.value)??45))),t=Math.max(0,Math.min(180,Number(((h=p.scanTheta)==null?void 0:h.value)??90))),i=(Number(((d=p.scanPhi)==null?void 0:d.value)??0)%360+360)%360,r=Math.max(.001,Xl||n.radius),a=r*e/100,o=t*Math.PI/180,s=i*Math.PI/180,l=new P(Math.sin(o)*Math.cos(s),Math.sin(o)*Math.sin(s),Math.cos(o)).normalize(),c=l.clone().multiplyScalar(a);return{options:n,radiusPercent:e,thetaDegrees:t,phiDegrees:i,r:a,maxRadius:r,direction:l,point:c}}function dx(n=Td()){p.scanRadiusValue&&(p.scanRadiusValue.value=`${Math.round(n.radiusPercent)}%`),p.scanThetaValue&&(p.scanThetaValue.value=`${Math.round(n.thetaDegrees)}°`),p.scanPhiValue&&(p.scanPhiValue.value=`${Math.round(n.phiDegrees)}°`)}function nc(n,e,t=.95){const i=new Ki({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new ba(new $e().setFromPoints(n),i);return r.renderOrder=30,r}function fx(n,e,t=.95){const i=new Ki({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new Ul(new $e().setFromPoints(n),i);return r.renderOrder=30,r}function px(n,e=16777215,t=.026,i=1){const r=new ld(n,!1,"centripetal",.18),a=new Bl(r,Math.max(80,n.length*2),t,8,!1),o=new nn({color:e,transparent:i<1,opacity:i,depthTest:!1,depthWrite:!1});o.toneMapped=!1;const s=new Ye(a,o);return s.renderOrder=31,s}function Al(n,e,t,i=.95){const r=[];for(let o=0;o<=160;o+=1){const s=Math.PI*2*o/160;r.push(new P(n*Math.cos(s),n*Math.sin(s),e))}return nc(r,t,i)}function Cd(n,e,t=.74){const i=[],o=s=>{for(let l=0;l<160;l+=1){const c=Math.PI*2*l/160,u=Math.PI*2*(l+1)/160;i.push(s(c),s(u))}};for(let s=1;s<12;s+=1){const l=Math.PI*s/12,c=Math.cos(l)*n,u=Math.sin(l)*n;o(h=>new P(u*Math.cos(h),u*Math.sin(h),c))}for(let s=0;s<6;s+=1){const l=Math.PI*s/6;o(c=>new P(n*Math.sin(c)*Math.cos(l),n*Math.sin(c)*Math.sin(l),n*Math.cos(c)))}return fx(i,e,t)}function Ca(n,e,t=1){const i=new nn({color:e,transparent:t<1,opacity:t,depthTest:!1,depthWrite:!1});i.toneMapped=!1;const r=new Ye(new Yr(n,24,16),i);return r.renderOrder=32,r}function Rd(n,e,t,i,r){const a=new Qv(n,new P(0,0,0),e,t,i,r);return a.traverse(o=>{o.material&&(o.material.depthTest=!1,o.material.depthWrite=!1,o.material.toneMapped=!1,o.renderOrder=31)}),a}function mx(n,e,t){return e==="xoz"?new ge(n.x*t,n.z*t):e==="yoz"?new ge(n.y*t,n.z*t):new ge(n.x*t,n.y*t)}function gx(n,e){const t=n.length();return t>e&&t>1e-9&&n.multiplyScalar(e/t),n}function vx(n){const e=new dt;n.r>.001&&e.add(Cd(n.r,On.radius,.72));const t=Math.max(n.r,n.maxRadius*.22,1);e.add(Rd(n.direction,t,On.direction,t*.11,t*.035));const i=Ca(Math.max(.08,n.maxRadius*.018),On.point);i.position.copy(n.point),e.add(i),Wt.add(e),_l=e}function _x(n){const e=new dt,t=Math.max(2.4,Zt*.55);e.add(Rd(n.direction,t,On.direction,t*.14,t*.045));const i=Ca(.08,On.point);i.position.copy(n.direction.clone().multiplyScalar(t)),e.add(i),mn.add(e),yl=e}function xx(n){if(!Zn)return;const e=new dt,t=Zn.radius*.92,i=Zn.radius/Math.max(1e-4,n.maxRadius),r=Math.max(0,n.r*i),a=r>t?t/r:1,o=i*a,s=Math.min(t,Math.max(0,n.r*o));e.add(Al(s,Zn.bottomZ+.18,On.radius,.95));const l=gx(mx(n.point,Zn.plane,o),t),c=Ca(.075,On.point);c.position.set(l.x,l.y,Zn.bottomZ+.28),e.add(c),e.add(nc([new P(0,0,Zn.bottomZ+.22),new P(l.x,l.y,Zn.bottomZ+.22)],On.direction,.82)),zn.add(e),xl=e}function Mx(n){if(!xn)return;const e=new dt,t=Math.min(xn.radiusScale,n.r/Math.max(1e-4,xn.radialExtent)*xn.radiusScale),i=rc(ft(),n.r,n.options.radialMode),r=xn.curveBaseZ+i/xn.maxAbs*xn.heightScale;e.add(nc([new P(t,0,xn.baseZ-.15),new P(t,0,xn.heightTop)],On.radius,.95));const a=Ca(.07,On.point);a.position.set(t,0,r),e.add(a),Bn.add(e),Ml=e}function Ks(){ux();const n=Td();dx(n),tc()&&(vx(n),_x(n),xx(n),Mx(n))}function yx(n){const e=n.length();if(e<1e-6)return;const t=Math.acos(Math.max(-1,Math.min(1,n.z/e))),i=(Math.atan2(n.y,n.x)+Math.PI*2)%(Math.PI*2);p.scanRadius&&(p.scanRadius.value=String(Math.round(Math.max(0,Math.min(100,e/Math.max(1e-4,Xl)*100))))),p.scanTheta&&(p.scanTheta.value=String(Math.round(t*180/Math.PI))),p.scanPhi&&(p.scanPhi.value=String(Math.round(i*180/Math.PI))),Ks(),ei(`关联高亮：r=${e.toFixed(2)}, θ=${Math.round(t*180/Math.PI)}°, φ=${Math.round(i*180/Math.PI)}°`)}function Sx(n){var o;if(!tc())return;const e=pn.domElement.getBoundingClientRect(),t=new ge((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),i=new Jv;i.params.Points.threshold=Math.max(.12,Kt().radius*.025),i.setFromCamera(t,Ke);const r=[Tt,Ct,Yi,$i].filter(Boolean),a=i.intersectObjects(r,!0);(o=a[0])!=null&&o.point&&yx(a[0].point)}function ic(n){const e=Vn(n.n,n.l,n.m).replace(/^\d+/,"");return e.startsWith("Dyz")||e.startsWith("Fyz2")||e.startsWith("Gz3y")||e.startsWith("Gzy3")||e.startsWith("Gyz3")||e.startsWith("Hyz4")||e.startsWith("Hyz")?"yoz":e.startsWith("Pz")||e.startsWith("Dz2")||e.startsWith("Dxz")||e.startsWith("Fz3")||e.startsWith("Fxz2")||e.startsWith("Gz4")||e.startsWith("Gz3x")||e.startsWith("Gxz3")||e.startsWith("Gzx3")||e.startsWith("Hxz4")||e.startsWith("Hz5")||e.startsWith("Hxz")?"xoz":"xoy"}function bx(n,e,t,i){const r=[],a=e.radius;let o=0,s=0,l=0;for(let c=0;c<i;c+=1){const u=[],h=-a+2*a*c/(i-1);for(let d=0;d<i;d+=1){const f=-a+2*a*d/(i-1);let v=0;t==="xoy"&&(v=Jo(n,f,h,0)),t==="xoz"&&(v=Jo(n,f,0,h)),t==="yoz"&&(v=Jo(n,0,f,h)),o=Math.max(o,Math.abs(v)),s=Math.max(s,v),l=Math.min(l,v),u.push(v)}r.push(u)}return{data:{rows:r,maxAbs:o,maxPositive:s,minNegative:l},scale:1}}function Ex(n,e){zn.background=new Me(e.backgroundColor);const t=new dt,r=Hn(n).gridSize*2+1,a=ic(n),{data:o}=bx(n,e,a,r),s=(o.maxPositive>1e-12?o.maxPositive:o.maxAbs||1)/.9,l=[],c=[],u=[],h=Math.min(4.7,e.radius*.42),d=h*1,f=-h*1,v=h*.9;Zn={plane:a,radius:h,surfaceZ:d,bottomZ:f,height:v};for(let C=0;C<r;C+=1)for(let E=0;E<r;E+=1){const w=-h+2*h*E/(r-1),R=-h+2*h*C/(r-1),b=o.rows[C][E]/s,S=b;l.push(w,R,d+S*v);const L=ec(b);c.push(L.r,L.g,L.b)}for(let C=0;C<r-1;C+=1)for(let E=0;E<r-1;E+=1){const w=C*r+E,R=w+1,b=w+r,S=b+1;u.push(w,b,R,R,b,S)}const _=new $e;_.setAttribute("position",new Be(l,3)),_.setAttribute("color",new Be(c,3)),_.setIndex(u),_.computeVertexNormals(),ga=new Ye(_,new Xi({vertexColors:!0,side:ot,transparent:!0,opacity:.98,specular:3355443,shininess:10,emissive:1118481,emissiveIntensity:.04})),t.add(ga),lx(t,o,h,d,v,s);const g=new dt,m=[];for(let C=0;C<r;C+=1)for(let E=0;E<r;E+=1){const w=-h+2*h*E/(r-1),R=-h+2*h*C/(r-1);m.push(w,R,f+.02)}const M=new $e;M.setAttribute("position",new Be(m,3)),M.setAttribute("color",new Be(c,3)),M.setIndex(u),M.computeVertexNormals();const x=new Ye(M,new nn({vertexColors:!0,side:ot,transparent:!0,opacity:.78}));g.add(x);const y=(C,E,w)=>Array.from({length:w},(R,b)=>C+(E-C)*b/(w-1));cx(g,o,h,f+.08,[...y(-1,0,20),...y(0,1,20)],s),va=g,t.add(va),Gi=Sd(h),Gi.scale.z=1,Gi.position.z=(d+f)/2,t.add(Gi),ga=t,va=null,Gi=null,zn.add(t),rx(h*1.92),Ks()}function rc(n,e,t){const i=Math.max(e,1e-4),r=Fn(n.n,n.l,n.z,i);return t==="R"?r:t==="R2"?r*r:i*i*r*r}function oh(n,e=11974326){const t=Math.abs(n),i=Math.max(0,Math.min(1,(t-.035)/.72)),r=i*i*(3-2*i);return new Me(e).lerp(ec(n),r)}function wx(n,e,t,i){const r=kl(e).filter(o=>o>.02&&o<i.radialExtent*.995);if(!r.length)return;const a=i.curveBaseZ??(t.radialSide?i.sideZ:i.diskZ+i.curveLift);for(const o of r){const s=o/i.radialExtent*i.radiusScale;if(t.radialCurve){const l=rc(e,o,t.radialMode),c=a+l/i.maxAbs*i.heightScale;for(const u of[-1,1]){const h=Ca(.065,16761856,.95);h.position.set(u*s,0,c),n.add(h)}}}}function Pd(n,e){var E;Bn.background=new Me(e.backgroundColor);const t=n.n>=5?260:190,i=n.n>=5?132:96,r=Math.max(5,fd(n)),a=[];for(let w=0;w<=t;w+=1)a.push(rc(n,r*w/t,e.radialMode));const o=Math.max(...a.map(Math.abs),1e-6),s=3.7,l=s*.43,c=-1.25,u=c,h=.08,d=u+s*.72,f=e.radialSide?d:u+h,v=f+a[0]/o*l;xn={radialExtent:r,radiusScale:s,heightScale:l,baseZ:c,diskZ:u,curveLift:h,sideZ:d,curveBaseZ:f,curveOriginZ:v,maxAbs:o,heightTop:f+l+.38};const _=new dt,g=new Ye(new Yr(s,128,48,0,Math.PI*2,Math.PI/2,Math.PI/2),new Xi({color:12105912,side:ot,transparent:!0,opacity:.88,shininess:1,specular:2236962}));g.rotation.x=Math.PI/2,g.position.z=c,_.add(g);const m=new $e,M=[],x=[],y=[];for(let w=0;w<=i;w+=1){const R=w/i*s,b=Math.round(w/i*t),S=a[b]/o;for(let L=0;L<=128;L+=1){const N=Math.PI*2*L/128,I=R*Math.cos(N),F=R*Math.sin(N);M.push(I,F,u);const k=oh(S,12105912);x.push(k.r,k.g,k.b)}}const C=129;for(let w=0;w<i;w+=1)for(let R=0;R<128;R+=1){const b=w*C+R,S=b+1,L=b+C,N=L+1;y.push(b,L,S,S,L,N)}if(m.setAttribute("position",new Be(M,3)),m.setAttribute("color",new Be(x,3)),m.setIndex(y),m.computeVertexNormals(),_a=new Ye(m,new Xi({vertexColors:!0,side:ot,transparent:!1,opacity:1,shininess:8,specular:2236962})),_.add(_a),e.radialSide){const w=new Ye(new Xr(s,s,Math.max(.1,d-u),160,1,!0),new jv({color:14149604,side:ot,transparent:!0,opacity:.24,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.28,ior:1.45,transmission:.08,specularIntensity:.5,specularColor:16777215}));w.rotation.x=Math.PI/2,w.position.z=(d+u)/2,w.renderOrder=2,_.add(w),_.add(Al(s,d,16777215,.12)),_.add(Al(s,u,16777215,.08));const R=new $e,b=[],S=[],L=[],N=e.radialSection?64:128,I=(e.radialSection,0),F=e.radialSection?Math.PI:Math.PI*2;for(let V=0;V<=i;V+=1){const X=V/i*s,G=Math.round(V/i*t),ie=a[G]/o,ne=d+ie*l;for(let se=0;se<=N;se+=1){const Q=I+F*se/N,me=X*Math.cos(Q),W=X*Math.sin(Q);b.push(me,W,ne);const K=oh(ie,11711154);S.push(K.r,K.g,K.b)}}const k=N+1;for(let V=0;V<i;V+=1)for(let X=0;X<N;X+=1){const G=V*k+X,ie=G+1,ne=G+k,se=ne+1;L.push(G,ne,ie,ie,ne,se)}R.setAttribute("position",new Be(b,3)),R.setAttribute("color",new Be(S,3)),R.setIndex(L),R.computeVertexNormals(),_.add(new Ye(R,new Xi({vertexColors:!0,side:ot,transparent:!1,opacity:1,shininess:10,specular:3355443})))}if(e.radialCurve){const w=[],R=f;for(let S=0;S<=t;S+=1){const L=s*S/t,N=R+a[S]/o*l;w.push(new P(L,0,N))}const b=w.slice(1).map(S=>new P(-S.x,0,S.z)).reverse();xa=px([...b,...w],16777215,e.radialSide?.013:.011),_.add(xa)}if(e.radialAxis){const w=v;on=E_(s+.9,s+.45,w,e.radialMode),_.add(on)}wx(_,n,e,xn),gl=_,Bn.add(_),_a=null,xa=null,on=null,vl=null,e.radialSide?(wa=4.9,It.position.set(0,-7.2,d+1.25),It.lookAt(0,0,0),Ql(wa),$t.target.set(0,0,0),(E=$t.handleResize)==null||E.call($t),$t.update()):ax(5.3),Ks()}function Os(){Ax();const n=(e,t,i,r,a)=>{var s;const o=e.getBoundingClientRect();o.width<2||o.height<2||(t.setSize(o.width,o.height,!1),t.domElement.style.width="100%",t.domElement.style.height="100%",i(a),(s=r.handleResize)==null||s.call(r),r.update())};n(p.viewer,pn,js,Ce,ii),n(p.angularViewer,Li,Zs,De,Zt),n(p.projectionViewer,Qi,Ad,In,Yl),n(p.radialViewer,$r,Ql,$t,wa);for(const e of Aa)sc(e,e.radius);Tx()}function Ax(){const n=document.querySelector(".sidebar"),e=n==null?void 0:n.querySelector(".sidebar-fit");if(!n)return;if(window.matchMedia("(max-width: 900px)").matches){document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");return}document.documentElement.style.setProperty("--sidebar-zoom","1"),document.documentElement.style.setProperty("--sidebar-fit-height","auto");const t=getComputedStyle(n),i=n.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),r=(e==null?void 0:e.scrollHeight)||n.scrollHeight;if(!i||!r||r<=i+4)return;const a=Math.max(.72,Math.min(1,(i-4)/r));document.documentElement.style.setProperty("--sidebar-zoom",a.toFixed(3)),document.documentElement.style.setProperty("--sidebar-fit-height",`${Math.ceil(r*a)}px`)}function un(){requestAnimationFrame(()=>{Os(),requestAnimationFrame(()=>{Os(),Pr()})})}function Ld(n){const e=p.sketchCanvas.getBoundingClientRect();return{x:(n.clientX-e.left)/Math.max(1,e.width),y:(n.clientY-e.top)/Math.max(1,e.height)}}function lh(n,e,t,i){if(!e.points.length)return;n.save(),n.globalCompositeOperation=e.mode==="erase"?"destination-out":"source-over",n.strokeStyle=e.color,n.lineWidth=e.size,n.lineCap="round",n.lineJoin="round",n.beginPath();const r=e.points[0];n.moveTo(r.x*t,r.y*i);for(const a of e.points.slice(1))n.lineTo(a.x*t,a.y*i);e.points.length===1&&n.lineTo(r.x*t+.01,r.y*i+.01),n.stroke(),n.restore()}function Kr(){const n=p.sketchCanvas;if(!n)return;const e=n.getContext("2d");e.clearRect(0,0,n.width,n.height);for(const t of Je.strokes)lh(e,t,n.width,n.height);Je.currentStroke&&lh(e,Je.currentStroke,n.width,n.height)}function Tx(){const n=p.sketchCanvas;if(!n)return;const e=n.getBoundingClientRect();if(e.width<2||e.height<2)return;const t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,Math.floor(e.width*t)),r=Math.max(220,Math.floor(e.height*t));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r,Kr())}function tl(n){var e,t;Je.erasing=n,(e=p.sketchPen)==null||e.classList.toggle("active",!n),(t=p.sketchEraser)==null||t.classList.toggle("active",n)}function Cx(n){var e,t,i,r;p.sketchCanvas&&(n.preventDefault(),(t=(e=p.sketchCanvas).setPointerCapture)==null||t.call(e,n.pointerId),Je.drawing=!0,Je.currentStroke={color:((i=p.sketchColor)==null?void 0:i.value)||"#ffffff",size:Number(((r=p.sketchSize)==null?void 0:r.value)||5)*Math.min(window.devicePixelRatio||1,2),mode:Je.erasing?"erase":"draw",points:[Ld(n)]},Kr())}function Rx(n){!Je.drawing||!Je.currentStroke||(n.preventDefault(),Je.currentStroke.points.push(Ld(n)),Kr())}function ch(n){!Je.drawing||!Je.currentStroke||(n.preventDefault(),Je.strokes.push(Je.currentStroke),Je.currentStroke=null,Je.drawing=!1,Kr())}function Px(){var n,e,t,i,r,a,o,s,l,c,u,h,d,f,v,_,g,m,M,x,y,C,E,w,R,b,S,L,N,I,F,k,V,X,G,ie,ne,se,Q,me,W,K,ce,O,re,xe,be,U;if(p.sketchCanvas){p.sketchCanvas.addEventListener("pointerdown",Cx),p.sketchCanvas.addEventListener("pointermove",Rx),p.sketchCanvas.addEventListener("pointerup",ch),p.sketchCanvas.addEventListener("pointercancel",ch),(n=p.openActivityButton)==null||n.addEventListener("click",()=>ca("predict")),(e=p.openSketchButton)==null||e.addEventListener("click",ac),(t=p.openPredictButton)==null||t.addEventListener("click",()=>ca("predict")),(i=p.openChallengeButton)==null||i.addEventListener("click",()=>ca("challenge"));for(const pe of p.activityModeButtons??[])pe.addEventListener("click",()=>ca(pe.dataset.activityMode));(r=p.startPredictButton)==null||r.addEventListener("click",OM),(a=p.verifyPredictButton)==null||a.addEventListener("click",zM),(o=p.scoreCurrentButton)==null||o.addEventListener("click",NM),(s=p.scoreShowRubricButton)==null||s.addEventListener("click",UM),(l=p.scoreResetButton)==null||l.addEventListener("click",FM),(c=p.diagnoseNodesButton)==null||c.addEventListener("click",()=>xs("nodes")),(u=p.diagnosePhaseButton)==null||u.addEventListener("click",()=>xs("phase")),(h=p.diagnoseProjectionButton)==null||h.addEventListener("click",()=>xs("projection"));for(const pe of document.querySelectorAll("[data-diagnosis]"))pe.addEventListener("click",()=>xs(pe.dataset.diagnosis));(d=p.nodeRevealButton)==null||d.addEventListener("click",()=>{p.radialNode&&!p.radialNode.disabled&&(p.radialNode.checked=!0),p.polarNode&&!p.polarNode.disabled&&(p.polarNode.checked=!0),p.longitudeNode.checked=!0,p.node.checked=!0,lt()}),(f=p.nodeHideButton)==null||f.addEventListener("click",()=>{p.radialNode&&(p.radialNode.checked=!1),p.polarNode&&(p.polarNode.checked=!1),p.longitudeNode.checked=!1,p.node.checked=!1,lt()}),(v=p.compareApplyButton)==null||v.addEventListener("click",()=>{Id()}),(_=p.compareA)==null||_.addEventListener("change",()=>{Tl("a")}),(g=p.compareB)==null||g.addEventListener("change",()=>{Tl("b")}),(m=p.compareLoadAButton)==null||m.addEventListener("click",()=>{var pe;(pe=p.compareA)!=null&&pe.value&&hh(p.compareA.value,"a")}),(M=p.compareLoadBButton)==null||M.addEventListener("click",()=>{var pe;(pe=p.compareB)!=null&&pe.value&&hh(p.compareB.value,"b")}),(x=p.newChallengeButton)==null||x.addEventListener("click",BM),(y=p.revealChallengeButton)==null||y.addEventListener("click",kM),(C=p.explainRestartButton)==null||C.addEventListener("click",IM),(E=p.explainPrevButton)==null||E.addEventListener("click",()=>_h(-1)),(w=p.explainPlayButton)==null||w.addEventListener("click",LM),(R=p.explainNextButton)==null||R.addEventListener("click",()=>_h(1)),(b=p.tabletLargeButton)==null||b.addEventListener("click",()=>xh(!0)),(S=p.tabletRestoreButton)==null||S.addEventListener("click",()=>xh(!1)),(L=p.tabletScreenshotButton)==null||L.addEventListener("click",no),(I=(N=p.sketchWindow)==null?void 0:N.querySelector(".window-title"))==null||I.addEventListener("pointerdown",VM),(k=(F=p.activityWindow)==null?void 0:F.querySelector(".window-title"))==null||k.addEventListener("pointerdown",pe=>nl(pe,p.activityWindow)),(X=(V=p.formulaWindow)==null?void 0:V.querySelector(".window-title"))==null||X.addEventListener("pointerdown",pe=>nl(pe,p.formulaWindow)),(ie=(G=p.animationWindow)==null?void 0:G.querySelector(".window-title"))==null||ie.addEventListener("pointerdown",pe=>nl(pe,p.animationWindow)),window.addEventListener("pointermove",HM),window.addEventListener("pointermove",GM),window.addEventListener("pointerup",Mh),window.addEventListener("pointerup",yh),window.addEventListener("pointercancel",Mh),window.addEventListener("pointercancel",yh),window.addEventListener("pointerup",Pr),window.addEventListener("pointercancel",Pr),window.addEventListener("blur",Pr),(ne=p.sketchPen)==null||ne.addEventListener("click",()=>tl(!1)),(se=p.sketchEraser)==null||se.addEventListener("click",()=>tl(!0)),(Q=p.sketchClear)==null||Q.addEventListener("click",()=>{Je.strokes=[],Je.currentStroke=null,Kr()}),(me=p.annotationModeButton)==null||me.addEventListener("click",Lx),(W=p.openAnimationButton)==null||W.addEventListener("click",RM),(K=p.animationRestartButton)==null||K.addEventListener("click",wM),(ce=p.animationPrevButton)==null||ce.addEventListener("click",()=>gh(-1)),(O=p.animationPlayButton)==null||O.addEventListener("click",EM),(re=p.animationNextButton)==null||re.addEventListener("click",()=>gh(1)),(xe=p.animationExportButton)==null||xe.addEventListener("click",CM),(be=p.openFormulaButton)==null||be.addEventListener("click",Xx),(U=p.annotationClearButton)==null||U.addEventListener("click",Ux);for(const pe of document.querySelectorAll("[data-annotation-add]"))pe.addEventListener("click",()=>Nx(pe.dataset.annotationAdd));for(const pe of document.querySelectorAll(".annotation-layer"))pe.addEventListener("pointerdown",Fx);window.addEventListener("pointermove",Ox),window.addEventListener("pointerup",uh),window.addEventListener("pointercancel",uh),tl(!1)}}function Lx(){var n;he.annotationMode=!he.annotationMode,document.body.classList.toggle("annotation-mode",he.annotationMode),(n=p.annotationToolbar)==null||n.classList.toggle("closed",!he.annotationMode),he.annotationMode&&Kl(),ei(he.annotationMode?"讲解标注：点击下方按钮添加标签，拖动标签调整位置。":"讲解标注已关闭。")}function Ix(n){const t={正相:"orbital",负相:"orbital",节点:"orbital",投影平面:"projection",径向节点:"radial"}[n]||"orbital";return document.querySelector(`[data-annotation-layer="${t}"]`)}function Dx(n){return n==="正相"?"positive":n==="负相"?"negative":n==="节点"?"node":n==="投影平面"?"projection":n==="径向节点"?"radial":""}function Nx(n){const e=Ix(n);if(!e)return;const t=document.createElement("button");t.type="button",t.className=`annotation-note ${Dx(n)}`.trim(),t.textContent=n;const i=e.querySelectorAll(".annotation-note").length;t.style.left=`${12+i%4*12}%`,t.style.top=`${14+i%3*14}%`,e.appendChild(t)}function Ux(){for(const n of document.querySelectorAll(".annotation-layer"))n.replaceChildren()}function Fx(n){var r;const e=n.target.closest(".annotation-note");if(!e||!he.annotationMode)return;n.preventDefault(),n.stopPropagation();const t=e.closest(".annotation-layer"),i=e.getBoundingClientRect();he.annotationDrag={note:e,layer:t,offsetX:n.clientX-i.left,offsetY:n.clientY-i.top},(r=e.setPointerCapture)==null||r.call(e,n.pointerId)}function Ox(n){const e=he.annotationDrag;if(!e)return;n.preventDefault();const t=e.layer.getBoundingClientRect(),i=e.note.getBoundingClientRect(),r=Math.max(0,Math.min(t.width-i.width,n.clientX-t.left-e.offsetX)),a=Math.max(0,Math.min(t.height-i.height,n.clientY-t.top-e.offsetY));e.note.style.left=`${r}px`,e.note.style.top=`${a}px`}function uh(){he.annotationDrag=null}function ac(){p.sketchWindow&&(p.sketchWindow.classList.remove("closed","minimized"),p.sketchWindow.style.zIndex="120",nr(p.sketchWindow),un())}function Js(n){const[e,t,i]=n.split(",").map(Number);return{n:e,l:t,m:i}}function zx(n){var s;if(!n)return null;let e=Aa.find(l=>l.container===n);if(e)return n.contains(e.renderer.domElement)||n.appendChild(e.renderer.domElement),e;const t=new Ri;t.background=new Me(((s=p.backgroundColor)==null?void 0:s.value)||"#668080");const i=new En(-5,5,5,-5,.1,2e3),r=new ri({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.appendChild(r.domElement);const a=Ji(i,r.domElement);Ta(n,a),t.add(new Pi(16777215,.5));const o=new fn(16777215,1.2);return o.position.set(0,0,80),t.add(o),e={container:n,scene:t,camera:i,renderer:r,controls:a,objects:[],radius:5,target:new P,resizeObserver:null},"ResizeObserver"in window&&(e.resizeObserver=new ResizeObserver(()=>sc(e,e.radius)),e.resizeObserver.observe(n)),Aa.push(e),e}function Bx(n){if(n){for(const e of n.objects)tr(n.scene,e);n.objects=[]}}function sc(n,e){var o,s;if(!n)return;const t=n.container.getBoundingClientRect();if(t.width<2||t.height<2)return;n.renderer.setSize(t.width,t.height,!1);const i=t.width/t.height,r=Math.max(3,e);i>=1?(n.camera.left=-r*i,n.camera.right=r*i,n.camera.top=r,n.camera.bottom=-r):(n.camera.left=-r,n.camera.right=r,n.camera.top=r/i,n.camera.bottom=-r/i),n.camera.near=.1,n.camera.far=Math.max(1e3,r*8);const a=n.target??new P;n.camera.position.set(a.x,a.y,a.z+Ai(r,40)),n.camera.lookAt(a),n.camera.updateProjectionMatrix(),n.controls.target.copy(a),(s=(o=n.controls).handleResize)==null||s.call(o),n.controls.update()}function kx(n,e,t){const i=new hn;let r=!1;for(const a of e){a.updateMatrixWorld(!0);const o=new hn().setFromObject(a);Number.isFinite(o.min.x)&&Number.isFinite(o.min.y)&&Number.isFinite(o.min.z)&&Number.isFinite(o.max.x)&&Number.isFinite(o.max.y)&&Number.isFinite(o.max.z)&&(i.union(o),r=!0)}if(r){const a=i.getBoundingSphere(new Ci);n.target.copy(a.center),n.radius=Math.max(2.5,t,a.radius*1.2)}else n.target.set(0,0,0),n.radius=Math.max(2.5,t);sc(n,n.radius)}function zs(n,e,t,i){var _,g;const r=zx(n);if(!r)return null;const a={...Js(e),z:Number((_=p.z)==null?void 0:_.value)||1},o=Hn(a),s=Math.max(4,Math.min(10,o.radius*.08)),l=Math.min(78,Math.max(42,Math.round(o.gridSize*.72))),c={iso:o.iso,density:l,radius:o.radius,opacity:.96,smooth:!1,wireframe:!0,cutaway:"none",showPositive:!0,showNegative:!0,positiveColor:p.positiveColor.value,negativeColor:p.negativeColor.value,backgroundColor:((g=p.backgroundColor)==null?void 0:g.value)||"#668080"};r.scene.background=new Me(c.backgroundColor),Bx(r);const u=wl(a,c,1,c.positiveColor),h=wl(a,c,-1,c.negativeColor),d=s/Math.max(1,o.radius);u.scale.multiplyScalar(d),h.scale.multiplyScalar(d);const f=$s(Math.max(1.6,s*.5));r.scene.add(u,h,f),r.objects.push(u,h,f),kx(r,[u,h,f],s*1.45);const v=Vn(a.n,a.l,a.m);return t&&(t.textContent=v),i&&(i.textContent=`${Ds(a.n,a.l)}；n=${a.n}, l=${a.l}, |m|=${Math.abs(a.m)}`),{params:a,label:v,nodes:Ds(a.n,a.l)}}function Id(){var t,i;const n=zs(p.compareAViewer,(t=p.compareA)==null?void 0:t.value,p.compareATitle,p.compareANotes),e=zs(p.compareBViewer,(i=p.compareB)==null?void 0:i.value,p.compareBTitle,p.compareBNotes);if(n&&e&&p.compareSummary){const r=n.params.l===e.params.l&&Math.abs(n.params.m)===Math.abs(e.params.m);p.compareSummary.textContent=r?`${n.label} 与 ${e.label} 角向类型相同，重点比较径向节点随 n 增加的变化。`:`${n.label} 与 ${e.label} 角向类型不同，重点比较节点面方向、相位分布和对称性。`}}function Tl(n){var e,t;return n==="a"?zs(p.compareAViewer,(e=p.compareA)==null?void 0:e.value,p.compareATitle,p.compareANotes):n==="b"?zs(p.compareBViewer,(t=p.compareB)==null?void 0:t.value,p.compareBTitle,p.compareBNotes):null}function Qs(n){const e=Js(n);p.n.value=e.n,p.l.value=e.l,p.m.value=Math.abs(e.m),p.cosType.checked=e.m>=0,p.sinType.checked=e.m<0,ft(),jr(),lt()}function hh(n,e){var a,o,s,l;const t=Js(n);Qs(n),p.mainWindow&&(p.mainWindow.classList.remove("closed","minimized","maximized"),nr(p.mainWindow)),p.positiveLobe&&(p.positiveLobe.checked=!0),p.negativeLobe&&(p.negativeLobe.checked=!0),p.wireframe&&p.smooth&&!p.wireframe.checked&&!p.smooth.checked&&(p.wireframe.checked=!0),ft(),lt();const i=Tl(e),r=(i==null?void 0:i.label)||Vn(t.n,t.l,t.m);p.compareSummary&&(p.compareSummary.textContent=`已载入主视图：${r}`),e==="a"?(o=(a=p.compareAViewer)==null?void 0:a.closest(".compare-view-card"))==null||o.scrollIntoView({block:"nearest",inline:"nearest"}):e==="b"&&((l=(s=p.compareBViewer)==null?void 0:s.closest(".compare-view-card"))==null||l.scrollIntoView({block:"nearest",inline:"nearest"})),un()}function ca(n){if(!p.activityWindow)return;const e=n||"predict";p.activityWindow.classList.remove("closed","minimized"),p.activityWindow.style.zIndex="125";for(const i of p.activityPanes??[]){const r=i.dataset.activityPane||i.id.replace(/Pane$/,"");i.classList.toggle("active",r===e)}for(const i of p.activityModeButtons??[])i.classList.toggle("active",i.dataset.activityMode===e);const t={predict:"预测-验证模式",score:"预测评分",diagnosis:"错误诊断",nodes:"节点发现",compare:"轨道对比",challenge:"轨道配对挑战",explain:"原理演示",tablet:"平板课堂"};p.activityTitle&&(p.activityTitle.textContent=t[e]||"课堂互动"),nr(p.activityWindow),un(),e==="compare"&&requestAnimationFrame(()=>{Id(),un()}),e==="explain"?requestAnimationFrame(()=>{La(he.explanationStep,{render:!1}),un()}):(to(),Pa(null))}const Dd=7200;function Vx(){const n=ft();return Vn(n.n,n.l,n.m)}const Hx=["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"],Gx=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];function Nd(n,e){return(n<0?"⁻":"")+String(Math.abs(n)).split("").map(i=>e[Number(i)]??i).join("")}function dh(n){return Nd(n,Hx)}function Wx(n){return Nd(n,Gx)}function qx(n,e){return Vn(Math.max(1,n+1),n,e).replace(/^\d+/,"")||`l=${n}, m=${e}`}function oc(n){const e=Vn(n.n,n.l,n.m),t=Math.max(0,n.n-n.l-1),i=n.l,r=qx(n.l,n.m),a=dh(n.n),o=dh(n.l),s=Wx(n.m);return{label:e,radialNodes:t,angularNodes:i,main:`Ψ(r,θ,φ) = R${a}${o}(r) · Y${o}${s}(θ,φ)`,radial:`R${a}${o}(r) 决定离原子核不同距离处的振幅变化；当前轨道有 ${t} 个径向节点。`,angular:`${r} 对应的 Y${o}${s}(θ,φ) 决定轨道朝向、节面和正负相位；当前有 ${i} 个角向节点。`,visual:"原子轨道窗口显示 Ψ=+c 和 Ψ=-c 的等值面；轨道投影是在选定平面上看 Ψ；径向分布函数看 r²R²；电子云来自 |Ψ|² 的概率分布。"}}function Ud(){var t,i;if(!p.formulaWindow)return;const n=ft(),e=oc(n);p.formulaOrbitalName&&(p.formulaOrbitalName.textContent=e.label),p.formulaQuantumText&&(p.formulaQuantumText.textContent=`n=${n.n}, l=${n.l}, m=${n.m}`),p.formulaMain&&(p.formulaMain.textContent=e.main),p.formulaRadialText&&(p.formulaRadialText.textContent=e.radial),p.formulaAngularText&&(p.formulaAngularText.textContent=e.angular),p.formulaVisualText&&(p.formulaVisualText.textContent=e.visual),p.formulaRadialNodes&&(p.formulaRadialNodes.textContent=String(e.radialNodes)),p.formulaAngularNodes&&(p.formulaAngularNodes.textContent=String(e.angularNodes)),p.formulaPhaseText&&(p.formulaPhaseText.textContent=`${((t=p.positiveLobe)==null?void 0:t.checked)===!1?"隐藏正相":"正相"} / ${((i=p.negativeLobe)==null?void 0:i.checked)===!1?"隐藏负相":"负相"}`)}function Xx(){p.formulaWindow&&(Ud(),p.formulaWindow.classList.remove("closed","minimized"),p.formulaWindow.style.zIndex="128",nr(p.formulaWindow),un())}const Yx=5200;function eo(){const n=ft(),e=oc(n);return[{focus:"all",title:"同一个波函数，四种观察方式",text:`${e.label} 的四个窗口都来自同一个 Ψ。动画先给出公式，再依次把它变成轨道、投影、径向图和电子云。`},{focus:"radial",title:"径向函数决定离核距离",text:`Rₙₗ(r) 控制波函数随半径的振荡和衰减；当前轨道有 ${e.radialNodes} 个径向节点。`},{focus:"angular",title:"角向函数决定方向和节面",text:`Yₗᵐ(θ,φ) 给出方向上的正负相位分区；当前轨道有 ${e.angularNodes} 个角向节点。`},{focus:"orbital",title:"径向 × 角向，合成三维波函数",text:"R(r) 提供距离变化，Y(θ,φ) 提供方向变化，两者相乘后形成空间中的正相和负相区域。"},{focus:"orbital",title:"抽取 Ψ=±c，得到原子轨道等值面",text:"等值面不是电子轨迹，而是波函数达到某个正值或负值时形成的边界。"},{focus:"projection",title:"把同一个 Ψ 放到平面上，得到轨道投影",text:"投影窗口把空间波函数在代表性平面上读出来，上方是高度曲面，下方是等高线。"},{focus:"orbital",title:"按 |Ψ|² 随机出现，形成电子云",text:"电子云表示电子出现概率。越亮、越密的区域，表示多次测量中电子更容易出现。"}]}function $x(){const n=p.animationCanvas;if(!n)return null;const e=n.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2),i=Math.max(320,e.width||640),r=Math.max(220,e.height||360);(n.width!==Math.round(i*t)||n.height!==Math.round(r*t))&&(n.width=Math.round(i*t),n.height=Math.round(r*t));const a=n.getContext("2d");return a.setTransform(t,0,0,t,0,0),{ctx:a,width:i,height:r}}function lc(n,e,t,i,r,a){const o=Math.min(a,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function jx(n,e,t,i){const r=["公式","径向","角向","合成","等值面","投影","电子云"],o=e-42,s=34,l=o-42;n.save(),n.lineWidth=2,n.strokeStyle="rgba(255,255,255,0.45)",n.beginPath(),n.moveTo(42,s),n.lineTo(o,s),n.stroke(),n.strokeStyle="#ffb000",n.beginPath(),n.moveTo(42,s),n.lineTo(42+l*Math.min(1,(t+i)/(r.length-1)),s),n.stroke(),r.forEach((c,u)=>{const h=42+l*u/(r.length-1),d=u===t;n.fillStyle=d?"#ffb000":"rgba(255,255,255,0.82)",n.beginPath(),n.arc(h,s,d?8:5,0,Math.PI*2),n.fill(),n.fillStyle=d?"#fff4bf":"rgba(255,255,255,0.86)",n.font=d?"bold 14px sans-serif":"13px sans-serif",n.textAlign="center",n.fillText(c,h,s+24)}),n.restore()}function Zx(n,e,t,i){const r=oc(ft()),a=e/2,o=t*.52;n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.92)",lc(n,a-220,o-68,440,136,12),n.fill(),n.fillStyle="#111827",n.textAlign="center",n.font="bold 30px serif",n.fillText(r.main,a,o-12),n.font="18px sans-serif",n.fillStyle="#175cd3",n.fillText("同一个 Ψ 经过不同读取方式，形成四个窗口的图像",a,o+34),n.restore()}function Fd(n,e,t,i,r=1){n.save(),n.globalAlpha=Math.min(1,r*1.6),n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText(i,e/2,t*.9),n.restore()}function fh(n,e,t,i=1){const r=ft(),a=Math.max(0,r.n-r.l-1),o=Math.min(e*.82,560),s=76,l=(e-o)/2,c=t*.77;n.save(),n.globalAlpha=Math.min(1,i*1.6),n.fillStyle="rgba(255,255,255,0.9)",lc(n,l,c,o,s,10),n.fill(),n.fillStyle="#111827",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText(`径向节点数 = n - l - 1 = ${r.n} - ${r.l} - 1 = ${a}`,e/2,c+29),n.font="15px sans-serif",n.fillStyle=a>0?"#175cd3":"#667085",n.fillText(a>0?"曲线过零处对应三维空间中的球形径向节面":"当前轨道没有径向节点，因此不会出现球形径向节面",e/2,c+55),n.restore()}function Kx(n,e,t,i,r,a,o=1,s=""){if(!(e!=null&&e.domElement)||!t||!i)return!1;e.render(t,i);const l=e.domElement;if(!l.width||!l.height)return!1;const c=Math.min(r*.92,l.width),u=Math.min(a*.72,c*(l.height/Math.max(1,l.width))),h=Math.min(c,u*(l.width/Math.max(1,l.height))),d=Math.min(u,h*(l.height/Math.max(1,l.width)));return n.save(),n.globalAlpha=Math.min(1,o*1.4),n.drawImage(l,(r-h)/2,a*.12,h,d),s&&(n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText(s,r/2,a*.1)),n.restore(),!0}function Jx(){return Ln||(Ut=new En(-5,5,5,-5,.1,2e3),Ln=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Ln.outputColorSpace=Ft,Ln.toneMapping=Hr,Ln.toneMappingExposure=1.16),!0}function Od(n,e,t,i,r=!1){if(!Jx())return!1;const a=r?Math.max(180,Math.min(520,Math.floor(e*.92))):Math.max(260,Math.min(700,Math.floor(e*.58))),o=r?Math.max(130,Math.min(360,Math.floor(t*.78))):Math.max(190,Math.min(560,Math.floor(t*.7)));Ln.setSize(a,o,!1);const s=new Me(getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#668080");Ln.setClearColor(s,1);const l=Math.max(4.5,wa||4.8),c=a/o,u=l*1.05;c>=1?(Ut.left=-u*c,Ut.right=u*c,Ut.top=u,Ut.bottom=-u):(Ut.left=-u,Ut.right=u,Ut.top=u/c,Ut.bottom=-u/c),Ut.near=.1,Ut.far=2e3;const h=i*Math.PI*.75+performance.now()*18e-5;Ut.up.set(0,0,1),Ut.position.set(Math.cos(h)*l*.55,-l*1.35,l*.46+Math.sin(h)*l*.1),Ut.lookAt(0,0,0),Ut.updateProjectionMatrix();const d=on==null?void 0:on.visible;on&&(on.visible=!1),Ln.render(Bn,Ut),on&&d!=null&&(on.visible=d),n.save(),n.globalAlpha=Math.min(1,i*1.4);const f=r?(e-a)/2:Math.min(e-a-e*.04,Math.max(e*.36,(e-a)/2+e*.16));return n.drawImage(Ln.domElement,f,t*.12,a,o),n.restore(),!0}function Qx(n,e,t,i=1){const r=ft(),a=Hn(r),o=Math.max(4,a.leastRadius+1),s=Math.min(300,e*.32),l=150,c=e*.055,u=t*.16,h=22,d=[];for(let m=0;m<=140;m+=1)d.push(Fn(r.n,r.l,r.z,o*m/140));const f=Math.max(...d.map(m=>Math.abs(m)),1e-4),v=Math.max(2,Math.floor(140*Math.min(1,i)));n.save(),n.globalAlpha=Math.min(1,i*1.7),n.fillStyle="rgba(255,255,255,0.9)",lc(n,c,u,s,l,10),n.fill(),n.strokeStyle="rgba(17,24,39,0.28)",n.lineWidth=1,n.beginPath(),n.moveTo(c+h,u+l*.58),n.lineTo(c+s-h,u+l*.58),n.moveTo(c+h,u+h),n.lineTo(c+h,u+l-h),n.stroke(),n.strokeStyle="#175cd3",n.lineWidth=2.4,n.beginPath();for(let m=0;m<=v;m+=1){const M=c+h+(s-h*2)*m/140,x=u+l*.58-d[m]/f*(l*.36);m===0?n.moveTo(M,x):n.lineTo(M,x)}n.stroke();const _=u+l*.58,g=[];for(let m=2;m<=v;m+=1){const M=d[m-1],x=d[m];if(M===0||M*x<0){const y=Math.abs(M)/Math.max(1e-9,Math.abs(M)+Math.abs(x)),C=c+h+(s-h*2)*(m-1+y)/140;g.push(C)}}g.length&&(n.save(),n.fillStyle="#ffb000",g.forEach(m=>{n.beginPath(),n.arc(m,_,4.2,0,Math.PI*2),n.fill()}),n.restore()),n.fillStyle="#111827",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText("Rnl(r) 函数图像",c+s/2,u+18),n.font="12px sans-serif",n.fillText("横轴 r",c+s-38,u+l-8),n.save(),n.translate(c+12,u+l/2),n.rotate(-Math.PI/2),n.fillText("振幅",0,0),n.restore(),n.restore()}function eM(n,e,t,i){if(Od(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.5),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("径向分布函数的 3D 读法",e/2,t*.1),n.restore(),Qx(n,e,t,i),fh(n,e,t,i);return}const r=ft(),a=Hn(r),o=Math.max(4,a.leastRadius+1),s=e*.14,l=t*.66,c=e*.72,u=t*.42,h=[];for(let v=0;v<=180;v+=1){const _=o*v/180;h.push(Fn(r.n,r.l,r.z,_))}const d=Math.max(...h.map(v=>Math.abs(v)),1e-4),f=Math.max(2,Math.floor(180*i));n.save(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2,n.beginPath(),n.moveTo(s,l),n.lineTo(s+c,l),n.moveTo(s,l-u/2),n.lineTo(s,l+u/2),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=3,n.beginPath();for(let v=0;v<=f;v+=1){const _=s+c*v/180,g=l-h[v]/d*(u/2);v===0?n.moveTo(_,g):n.lineTo(_,g)}n.stroke(),n.fillStyle="#ffb000";for(let v=1;v<f;v+=1)if(h[v-1]*h[v]<=0){const _=s+c*v/180;n.beginPath(),n.arc(_,l,4,0,Math.PI*2),n.fill()}n.fillStyle="rgba(255,255,255,0.94)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Rnl(r)",s+c/2,l-u/2-18),n.font="14px sans-serif",n.textAlign="left",n.fillText("r = 0 原子核",s-38,l+24),n.textAlign="right",n.fillText("r 增大：离核距离",s+c,l+28),n.save(),n.translate(s-34,l-u/2+12),n.rotate(-Math.PI/2),n.textAlign="center",n.fillText("纵轴：径向波函数振幅 Rnl(r)",0,0),n.restore(),n.fillStyle="#ffb000",n.beginPath(),n.arc(s,l,5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.88)",n.textAlign="center",n.fillText("曲线穿过横轴的位置，对应径向节面",s+c*.55,l+u/2+22),fh(n,e,t,i),n.restore()}function tM(){Nn&&(Nn.traverse(n=>{var e,t;n.geometry&&((t=(e=n.geometry).dispose)==null||t.call(e)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{var a;return(a=r.dispose)==null?void 0:a.call(r)})}),Qn==null||Qn.remove(Nn),Nn=null)}function nM(){if(Rn)return!0;Qn=new Ri,Vt=new En(-5,5,5,-5,.1,2e3),Rn=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Rn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Rn.outputColorSpace=Ft,Rn.toneMapping=Hr,Rn.toneMappingExposure=1.18,Qn.add(new Pi(16777215,.58));const n=new fn(16777215,1.72);n.position.set(5,-6,8),Qn.add(n);const e=new fn(16777215,.55);return e.position.set(-4,5,4),Qn.add(e),!0}function iM(){const n=ft(),e=Kt(),t=[n.n,n.l,n.m,n.z,e.positiveColor,e.negativeColor].join("|");if(Nn&&nh===t)return!0;tM(),nh=t,Nn=new dt;const i={radius:3.8,thetaSegments:80,phiSegments:160},{positive:r,negative:a}=pd(n,i),o=Br(r,Lt(e.positiveColor),.96),s=Br(a,Lt(e.negativeColor),.96);return kr(o,{...e,smooth:!0,wireframe:!1}),kr(s,{...e,smooth:!0,wireframe:!1}),Nn.add(s,o),Qn.add(Nn),!0}function zd(n,e,t,i){if(!nM()||!iM())return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(620,Math.floor(t*.78)));Rn.setSize(r,a,!1),Rn.setClearColor(0,0);const o=new hn().setFromObject(Nn);if(o.isEmpty())return!1;const s=o.getCenter(new P),l=Math.max(1,o.getSize(new P).length()*.5),c=r/a,u=l*1.08;c>=1?(Vt.left=-u*c,Vt.right=u*c,Vt.top=u,Vt.bottom=-u):(Vt.left=-u,Vt.right=u,Vt.top=u/c,Vt.bottom=-u/c),Vt.near=.1,Vt.far=Math.max(1e3,l*18);const h=i*Math.PI*.7;Vt.position.copy(s).add(new P(Math.cos(h)*l*1.5,-l*1.9,l*.95+Math.sin(h)*l*.35)),Vt.lookAt(s),Vt.updateProjectionMatrix();const d=.16+.84*(1-(1-Math.min(1,i))**3);return Nn.traverse(f=>{var v;((v=f.material)==null?void 0:v.opacity)!=null&&f.isMesh&&(f.material.transparent=!0,f.material.opacity=d,f.material.needsUpdate=!0)}),Rn.render(Qn,Vt),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Rn.domElement,(e-r)/2,t*.08,r,a),n.restore(),!0}function rM(n,e,t,i){var c,u;if(zd(n,e,t,i)){n.save(),n.globalAlpha=Math.min(1,i*1.8),n.fillStyle="rgba(255,255,255,0.96)",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)：每一个方向对应一个角向函数值",e/2,t*.12),n.font="14px sans-serif",n.fillStyle=((c=p.positiveColor)==null?void 0:c.value)||"#d83bd8",n.fillText("正相位 Y > 0",e*.32,t*.84),n.fillStyle=((u=p.negativeColor)==null?void 0:u.value)||"#00aeb8",n.fillText("负相位 Y < 0",e*.68,t*.84),n.fillStyle="#ffd15c",n.fillText("两色交界处就是 Y = 0 的角向节面",e/2,t*.9),n.restore();return}const r=ft(),a=e/2,o=t*.56,s=Math.max(2,r.l*2||1),l=Math.min(e,t)*.18*Math.min(1,i*1.7);n.save(),n.translate(a,o),n.rotate(r.m*Math.PI/12);for(let h=0;h<s;h+=1){const d=Math.PI*2*h/s,f=h%2===0,v=l*(r.l===0?1.25:1.55);n.save(),n.rotate(d);const _=n.createRadialGradient(v*.5,0,4,v*.5,0,v);_.addColorStop(0,f?"#ff2bd6":"#00d7ff"),_.addColorStop(1,f?"rgba(255,43,214,0.15)":"rgba(0,215,255,0.15)"),n.fillStyle=_,n.beginPath(),n.ellipse(v*.55,0,v*.62,l*.5,0,0,Math.PI*2),n.fill(),n.restore()}n.strokeStyle="#ffb000",n.lineWidth=2;for(let h=0;h<Math.max(1,r.l);h+=1)n.beginPath(),n.moveTo(-l*2,0),n.lineTo(l*2,0),n.stroke(),n.rotate(Math.PI/Math.max(1,r.l));n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("Ylm(θ,φ)",0,-l*1.75-20),n.font="14px sans-serif",n.fillStyle="#ff9cff",n.fillText("Y > 0：正相位",l*1.7,-l*.88),n.fillStyle="#72f6ff",n.fillText("Y < 0：负相位",-l*1.7,l*.95),n.fillStyle="#ffd15c",n.fillText("Y = 0：角向节面/节线",0,l*1.9),n.strokeStyle="rgba(255,255,255,0.78)",n.lineWidth=1.1,n.beginPath(),n.moveTo(0,0),n.lineTo(l*1.55,-l*1.15),n.stroke(),n.fillStyle="rgba(255,255,255,0.9)",n.textAlign="left",n.fillText("一个方向由 θ 和 φ 确定",l*1.6,-l*1.18),n.restore()}function aM(n,e,t,i){const r=Math.min(1,i*1.45),a=[e*.2,e*.5,e*.8],o=e*.24,s=t*.32,l=t*.2,c=(h,d,f)=>{n.strokeStyle="#ffb000",n.fillStyle="#ffb000",n.lineWidth=3.2,n.beginPath(),n.moveTo(h,d),n.lineTo(f,d),n.stroke(),n.beginPath(),n.moveTo(f,d),n.lineTo(f-13,d-8),n.lineTo(f-13,d+8),n.closePath(),n.fill()};n.save(),n.globalAlpha=r,n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText("径向",a[0],l-20),n.fillText("角向",a[1],l-20),n.fillText("轨道",a[2],l-20),n.save(),n.translate(a[0]-o/2,l),Od(n,o,s,i,!0),n.restore(),n.save(),n.translate(a[1]-o/2,l),zd(n,o,s,i),n.restore(),n.save(),n.translate(a[2]-o/2,l),kd(n,o,s,i),n.restore();const u=l+s*.78;n.fillStyle="#ffb000",n.font="bold 34px serif",n.fillText("×",(a[0]+a[1])/2,u),c(a[1]+o*.46,u,a[2]-o*.48),n.fillStyle="rgba(255,255,255,0.96)",n.font="bold 28px serif",n.fillText("R(r) × Y(θ,φ) = Ψ(x,y,z)",e/2,t*.76),n.restore()}function sM(n,e,t,i){return aM(n,e,t,i)}function oM(n,e,t,i){var l,c;const r=e/2,a=t*.56,o=Math.min(e,t)*.27*Math.min(1,i*1.5),s=ft();n.save(),n.globalAlpha=.96,n.fillStyle=((l=p.negativeColor)==null?void 0:l.value)||"#00a0a0",n.beginPath(),n.ellipse(r-o*.76,a,o*(s.l>2?.9:.78),o*.72,-.12,0,Math.PI*2),n.fill(),n.fillStyle=((c=p.positiveColor)==null?void 0:c.value)||"#b24bb2",n.beginPath(),n.ellipse(r+o*.76,a,o*(s.l>2?.9:.78),o*.72,.12,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.72)",n.lineWidth=1.2;for(let u=0;u<10;u+=1){const h=a-o*.72+o*1.44*u/9;n.beginPath(),n.moveTo(r-o*1.65,h),n.lineTo(r+o*1.65,h),n.stroke()}n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("抽取 Ψ=+c 与 Ψ=-c",r,a+o+38),n.restore()}function Yt(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Bd(n){return{x:n.x*.82+n.y*.34,y:-n.z*.88+n.y*.22}}function lM(n,e=6e4){var r,a;const t=[],i=[new P,new P,new P];for(const o of n)o.object&&((a=(r=o.object).updateWorldMatrix)==null||a.call(r,!0,!0),o.object.traverse(s=>{var d,f;const l=(f=(d=s.geometry)==null?void 0:d.attributes)==null?void 0:f.position;if(!l)return;const c=s.geometry.index,u=Math.floor(c?c.count/3:l.count/3);if(!u)return;s.updateWorldMatrix(!0,!1);const h=Math.max(1,Math.ceil(u/Math.max(1,e/n.length)));for(let v=0;v<u;v+=h){let _=0;const g=[];for(let m=0;m<3;m+=1){const M=c?c.getX(v*3+m):v*3+m;i[m].fromBufferAttribute(l,M).applyMatrix4(s.matrixWorld),_+=i[m].y,g.push(Bd(i[m]))}t.push({points:g,color:o.color,depth:_/3})}}));return t}function cM(n,e){const t=new Me(n);return`rgba(${Math.round(t.r*255)}, ${Math.round(t.g*255)}, ${Math.round(t.b*255)}, ${e})`}function uM(n,e,t,i,r){if(!e.length)return!1;let a=1e-4;for(const u of e)for(const h of u.points)a=Math.max(a,Math.abs(h.x),Math.abs(h.y));const o=Math.min(t,i)*.34/a,s=t/2,l=i*.55,c=.14+.76*(1-(1-Math.min(1,r))**3);return n.save(),e.sort((u,h)=>u.depth-h.depth).forEach(u=>{const[h,d,f]=u.points;n.fillStyle=cM(u.color,c),n.beginPath(),n.moveTo(s+h.x*o,l+h.y*o),n.lineTo(s+d.x*o,l+d.y*o),n.lineTo(s+f.x*o,l+f.y*o),n.closePath(),n.fill()}),n.restore(),!0}function ph(){bn&&(bn.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(t=>{var i;return(i=t.dispose)==null?void 0:i.call(t)})}),Jn==null||Jn.remove(bn),bn=null)}function hM(){if(Cn)return!0;Jn=new Ri,kt=new En(-5,5,5,-5,.1,2e3),Cn=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Cn.outputColorSpace=Ft,Cn.toneMapping=Hr,Cn.toneMappingExposure=1.12,Jn.add(new Pi(16777215,.56));const n=new fn(16777215,1.65);n.position.set(5,-7,8),Jn.add(n);const e=new fn(16777215,.55);return e.position.set(-6,4,5),Jn.add(e),!0}function dM(n=1){var r,a,o,s,l,c,u;const e=Kt(),t=[(Tt==null?void 0:Tt.uuid)||"",(Ct==null?void 0:Ct.uuid)||"",((r=p.positiveColor)==null?void 0:r.value)||"",((a=p.negativeColor)==null?void 0:a.value)||"",e.opacity].join("|");if(bn&&th===t)return!0;ph(),th=t,bn=new dt;const i=[{object:Ct,color:((o=p.negativeColor)==null?void 0:o.value)||"#00a0a0"},{object:Tt,color:((s=p.positiveColor)==null?void 0:s.value)||"#b24bb2"}];for(const h of i)(c=(l=h.object)==null?void 0:l.updateWorldMatrix)==null||c.call(l,!0,!0),(u=h.object)==null||u.traverse(d=>{if(!d.isMesh||!d.geometry)return;const f=new Xi({color:Lt(h.color),emissive:Lt(h.color),emissiveIntensity:.04,shininess:26,side:ot,transparent:!0,opacity:Math.min(.98,e.opacity)}),v=new Ye(d.geometry,f);v.matrix.copy(d.matrixWorld),v.matrixAutoUpdate=!1,bn.add(v)});return bn.children.length?(Jn.add(bn),!0):(ph(),!1)}function kd(n,e,t,i){if(!Tt&&!Ct||!hM()||!dM(i))return!1;const r=Math.max(240,Math.min(900,Math.floor(e))),a=Math.max(180,Math.min(680,Math.floor(t*.82)));Cn.setSize(r,a,!1),Cn.setClearColor(0,0);const o=new hn().setFromObject(bn);if(o.isEmpty())return!1;const s=o.getCenter(new P),l=Math.max(1,o.getSize(new P).length()*.5),c=r/a,u=l*1.16;c>=1?(kt.left=-u*c,kt.right=u*c,kt.top=u,kt.bottom=-u):(kt.left=-u,kt.right=u,kt.top=u/c,kt.bottom=-u/c),kt.near=.1,kt.far=Math.max(2e3,l*20);const h=performance.now()*42e-5+i*Math.PI*.28;kt.position.copy(s).add(new P(Math.cos(h)*l*1.65,Math.sin(h)*l*1.65,l*.92)),kt.lookAt(s),kt.updateProjectionMatrix();const d=.08+.9*(1-(1-Math.min(1,i))**3);return bn.traverse(f=>{f.material&&(f.material.opacity=d)}),Cn.render(Jn,kt),n.save(),n.globalAlpha=Math.min(1,i*1.4),n.drawImage(Cn.domElement,(e-r)/2,t*.1,r,a),n.restore(),!0}function fM(n,e,t,i){var a,o;if(kd(n,e,t,i)){n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore();return}const r=lM([{object:Ct,color:((a=p.negativeColor)==null?void 0:a.value)||"#00a0a0"},{object:Tt,color:((o=p.positiveColor)==null?void 0:o.value)||"#b24bb2"}]);if(!uM(n,r,e,t,i)){oM(n,e,t,i);return}n.save(),n.fillStyle="#ffffff",n.font="20px sans-serif",n.textAlign="center",n.fillText("当前轨道真实等值面：Ψ=+c / Ψ=-c",e/2,t*.88),n.restore()}function pM(n,e){var a,o;const t=Math.min(1,Math.abs(n)/Math.max(e,1e-8)),i=new Me(n>=0?((a=p.positiveColor)==null?void 0:a.value)||"#b24bb2":((o=p.negativeColor)==null?void 0:o.value)||"#00a0a0"),r=new Me(16777215);return i.lerp(r,1-Math.sqrt(t)),`rgba(${Math.round(i.r*255)}, ${Math.round(i.g*255)}, ${Math.round(i.b*255)}, ${.16+.78*t})`}function mM(n,e,t,i,r,a){var h,d;const o=[.18,.32,.48,.64,.8].filter((f,v,_)=>v/_.length<=a+.08),s=e.length,l=i/(s-1),c=r/(s-1),u=(f,v,_)=>Math.abs(v-f)<1e-9?.5:(_-f)/(v-f);for(const f of[1,-1]){n.strokeStyle=f>0?((h=p.positiveColor)==null?void 0:h.value)||"#ff2bd6":((d=p.negativeColor)==null?void 0:d.value)||"#00d7ff",n.lineWidth=1.45;for(const v of o){const _=f*t*v;n.beginPath();for(let g=0;g<s-1;g+=1)for(let m=0;m<s-1;m+=1){const M=e[g][m],x=e[g][m+1],y=e[g+1][m+1],C=e[g+1][m],E=[];(M-_)*(x-_)<=0&&E.push([m+u(M,x,_),g]),(x-_)*(y-_)<=0&&E.push([m+1,g+u(x,y,_)]),(y-_)*(C-_)<=0&&E.push([m+1-u(y,C,_),g+1]),(C-_)*(M-_)<=0&&E.push([m,g+1-u(C,M,_)]),E.length>=2&&(n.moveTo(-i/2+E[0][0]*l,-r/2+E[0][1]*c),n.lineTo(-i/2+E[1][0]*l,-r/2+E[1][1]*c))}n.stroke()}}}function gM(n,e,t,i){if(Kx(n,Qi,zn,yt,e,t,i,"轨道投影的 3D 视图")){Fd(n,e,t,"同一个 Ψ 在投影平面上显示为高度曲面和等高线",i);return}const r=ft(),a=Kt(),o=ic(r),s=l_(r,a,o,78),l=e/2,c=t*.58,u=e*.56,h=t*.34,d=document.createElement("canvas");d.width=s.rows.length,d.height=s.rows.length;const f=d.getContext("2d");for(let v=0;v<s.rows.length;v+=1)for(let _=0;_<s.rows.length;_+=1)f.fillStyle=pM(s.rows[v][_],s.maxAbs),f.fillRect(_,v,1,1);n.save(),n.translate(l,c),n.transform(1,-.22,.35,.82,0,0),n.fillStyle="rgba(238,244,244,0.88)",n.fillRect(-u/2,-h/2,u,h),n.globalAlpha=Math.min(1,i*1.35),n.drawImage(d,-u/2,-h/2,u,h),n.globalAlpha=Math.min(1,i*1.8),mM(n,s.rows,s.maxAbs,u,h,i),n.strokeStyle="rgba(255,255,255,0.9)",n.strokeRect(-u/2,-h/2,u,h),n.restore(),n.save(),n.globalAlpha=i,n.strokeStyle="#ffb000",n.lineWidth=2,n.beginPath(),n.moveTo(l,t*.22),n.lineTo(l,c-h*.22),n.stroke(),n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText(`当前投影平面：${o.toUpperCase()}，颜色来自 Ψ 的正负`,l,t*.2),n.restore()}function vM(){Un&&(Un.traverse(n=>{var e,t,i;n.geometry&&!((e=n.userData)!=null&&e.sharedGeometry)&&((i=(t=n.geometry).dispose)==null||i.call(t)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{var o;return(o=a.dispose)==null?void 0:o.call(a)})}),bi==null||bi.remove(Un),Un=null)}function _M(){if(Pn)return!0;bi=new Ri,Ht=new En(-5,5,5,-5,.1,2e3),Pn=new ri({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Pn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Pn.outputColorSpace=Ft,Pn.toneMapping=Hr,Pn.toneMappingExposure=1.18,bi.add(new Pi(16777215,.56));const n=new fn(16777215,1.55);return n.position.set(5,-7,8),bi.add(n),!0}function mh(n,e,t,i=3200){const r=Math.min(e.radius,Math.max(5,Hn(n).leastRadius+1.2)),a=r*r;let o=0;for(let c=0;c<520;c+=1){const u=(Yt(c,51)*2-1)*r,h=(Yt(c,52)*2-1)*r,d=(Yt(c,53)*2-1)*r;u*u+h*h+d*d>a||(o=Math.max(o,Math.abs(xt(n,u,h,d))))}const s=[];let l=0;for(;s.length/3<i&&l<i*110;){const c=(Yt(l,61+t)*2-1)*r,u=(Yt(l,62+t)*2-1)*r,h=(Yt(l,63+t)*2-1)*r;if(l+=1,c*c+u*u+h*h>a)continue;const d=xt(n,c,u,h);if(t*d<=0)continue;const f=(Math.abs(d)/Math.max(o,1e-8))**2;Yt(l,71+t)>f*.92||s.push(c,u,h)}return{points:s,radius:r}}function xM(){const n=ft(),e=Kt(),t=[n.n,n.l,n.m,n.z,e.radius.toFixed(3),e.iso.toFixed(5),e.positiveColor,e.negativeColor].join("|");if(Un&&ih===t)return!0;vM(),ih=t,Un=new dt;const i=mh(n,e,1),r=mh(n,e,-1),a=Us(i.points,Lt(e.positiveColor)),o=Us(r.points,Lt(e.negativeColor));return a.material.uniforms.uSize.value=3.4,o.material.uniforms.uSize.value=3.4,Un.add(o,a),bi.add(Un),!0}function MM(n,e,t,i,r){if(!_M()||!xM())return!1;const a=Math.max(240,Math.min(900,Math.floor(e))),o=Math.max(180,Math.min(680,Math.floor(t*.82)));Pn.setSize(a,o,!1),Pn.setClearColor(0,0),Un.traverse(f=>{var v,_,g;(_=(v=f.material)==null?void 0:v.uniforms)!=null&&_.uTime?(f.material.uniforms.uTime.value=r,f.material.opacity=Math.min(1,i*1.3)):((g=f.material)==null?void 0:g.opacity)!=null&&f.isMesh&&(f.material.opacity=.28*Math.min(1,i*1.6),f.material.needsUpdate=!0)});const s=new hn().setFromObject(Un);if(s.isEmpty())return!1;const l=s.getCenter(new P),c=Math.max(1,s.getSize(new P).length()*.5),u=a/o,h=c*1.1;u>=1?(Ht.left=-h*u,Ht.right=h*u,Ht.top=h,Ht.bottom=-h):(Ht.left=-h,Ht.right=h,Ht.top=h/u,Ht.bottom=-h/u),Ht.near=.1,Ht.far=Math.max(2e3,c*20);const d=r*.25;return Ht.position.copy(l).add(new P(Math.cos(d)*c*1.55,-c*1.75,c*.95)),Ht.lookAt(l),Ht.updateProjectionMatrix(),Pn.render(bi,Ht),n.save(),n.globalAlpha=Math.min(1,i*1.5),n.drawImage(Pn.domElement,(e-a)/2,t*.1,a,o),n.restore(),!0}function yM(n,e,t,i,r){if(MM(n,e,t,i,r)){Fd(n,e,t,"|Ψ|² 越大，三维空间中的闪烁点越密集",i);return}const a=ft(),o=Kt(),s=Math.min(o.radius,Math.max(5,Hn(a).leastRadius+1.2));let l=0;for(let f=0;f<260;f+=1){const v=(Yt(f,11)*2-1)*s,_=(Yt(f,12)*2-1)*s,g=(Yt(f,13)*2-1)*s;v*v+_*_+g*g>s*s||(l=Math.max(l,Math.abs(xt(a,v,_,g))))}const c=e/2,u=t*.55,h=Math.min(e,t)*.34/s,d=Math.floor(1500*i);n.save();for(let f=0;f<d;f+=1){const v=(Yt(f,21)*2-1)*s,_=(Yt(f,22)*2-1)*s,g=(Yt(f,23)*2-1)*s;if(v*v+_*_+g*g>s*s)continue;const m=xt(a,v,_,g),M=(Math.abs(m)/Math.max(l,1e-8))**2;if(Yt(f,Math.floor(r*4)+31)>M*.9)continue;const x=Bd(new P(v,_,g));n.fillStyle=m>=0?"rgba(255,43,214,0.82)":"rgba(0,215,255,0.82)",n.fillRect(c+x.x*h,u+x.y*h,1.9,1.9)}n.fillStyle="#ffffff",n.font="18px sans-serif",n.textAlign="center",n.fillText("|Ψ|² 越大，随机点越密",c,t*.84),n.restore()}function Vr(n=0){var v,_;const e=$x();if(!e)return;const{ctx:t,width:i,height:r}=e,a=he.animationStep,o=eo();t.clearRect(0,0,i,r),t.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--viewer-bg").trim()||"#668080",t.fillRect(0,0,i,r);const s=16/9;let l=i,c=l/s;c>r&&(c=r,l=c*s);const u=(i-l)/2,h=(r-c)/2,d=54;t.save(),t.translate(u,h),jx(t,l,a,n),t.translate(0,d);const f=c-d;a===0?Zx(t,l,f,n):a===1?eM(t,l,f,n):a===2?rM(t,l,f,n):a===3?sM(t,l,f,n):a===4?fM(t,l,f,n):a===5?gM(t,l,f,n):yM(t,l,f,n,performance.now()*.001),t.restore(),p.animationProgressFill&&(p.animationProgressFill.style.width=`${Math.round(n*100)}%`),p.animationStepBadge&&(p.animationStepBadge.textContent=`第 ${a+1} 步 / ${o.length} 步`),p.animationTitle&&(p.animationTitle.textContent=((v=o[a])==null?void 0:v.title)||""),p.animationText&&(p.animationText.textContent=a===3?"径向给出离核距离变化，角向给出方向和相位；共同决定同一个三维波函数。":((_=o[a])==null?void 0:_.text)||"")}function SM(){he.animationTimer&&clearTimeout(he.animationTimer),he.animationFrame&&cancelAnimationFrame(he.animationFrame),he.animationTimer=null,he.animationFrame=null}function Vd(){var t;if(!he.animationPlaying)return;const n=eo(),e=Math.min(1,(performance.now()-he.animationStartedAt)/Yx);if(Vr(e),e>=1){if(he.animationStep>=n.length-1){he.animationPlaying=!1,p.animationPlayButton&&(p.animationPlayButton.textContent="播放");return}he.animationStep+=1,he.animationStartedAt=performance.now(),Pa((t=n[he.animationStep])==null?void 0:t.focus)}he.animationFrame=requestAnimationFrame(Vd)}function Ir(n,e=0){var i;const t=eo();he.animationStep=Math.max(0,Math.min(t.length-1,n)),Pa((i=t[he.animationStep])==null?void 0:i.focus),Vr(e)}function bM(){he.animationPlaying=!0,he.animationStartedAt=performance.now(),p.animationPlayButton&&(p.animationPlayButton.textContent="暂停"),Vd()}function Ra(){he.animationPlaying=!1,p.animationPlayButton&&(p.animationPlayButton.textContent="播放"),SM()}function EM(){he.animationPlaying?Ra():bM()}function wM(){Ra(),Ir(0,0)}function gh(n){Ra(),Ir(he.animationStep+n,0)}function AM(){return typeof MediaRecorder>"u"||!MediaRecorder.isTypeSupported?"":["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(n=>MediaRecorder.isTypeSupported(n))||""}function vh(){return new Promise(n=>requestAnimationFrame(n))}function TM(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),1200)}async function CM(){var d,f;const n=p.animationCanvas;if(!(n!=null&&n.captureStream)||typeof MediaRecorder>"u"){alert("当前浏览器不支持直接导出视频。建议使用新版 Chrome 或 Edge 打开后再导出。");return}if(he.animationExporting)return;Ra(),he.animationExporting=!0;const e=he.animationStep,t=[p.animationRestartButton,p.animationPrevButton,p.animationPlayButton,p.animationNextButton,p.animationExportButton].filter(Boolean),i=t.map(v=>v.disabled),r=((d=p.animationExportButton)==null?void 0:d.textContent)||"导出视频";t.forEach(v=>{v.disabled=!0}),p.animationExportButton&&(p.animationExportButton.textContent="导出中...");const a=eo(),o=[],s=n.captureStream(30),l=AM(),c={videoBitsPerSecond:6e6,...l?{mimeType:l}:{}};let u;try{u=new MediaRecorder(s,c)}catch{s.getTracks().forEach(_=>_.stop()),alert("当前浏览器无法创建视频录制器，请换用新版 Chrome 或 Edge。"),he.animationExporting=!1,t.forEach((_,g)=>{_.disabled=i[g]}),p.animationExportButton&&(p.animationExportButton.textContent=r),Ir(e,0);return}const h=new Promise((v,_)=>{u.ondataavailable=g=>{var m;(m=g.data)!=null&&m.size&&o.push(g.data)},u.onerror=()=>_(u.error||new Error("video export failed")),u.onstop=()=>v(new Blob(o,{type:u.mimeType||"video/webm"}))});try{Ir(0,0),await vh(),u.start(250);const v=2600;for(let M=0;M<a.length;M+=1){he.animationStep=M,Pa((f=a[M])==null?void 0:f.focus);const x=performance.now();let y=0;for(;y<1;)y=Math.min(1,(performance.now()-x)/v),Vr(y),await vh();Vr(1),await new Promise(C=>setTimeout(C,160))}u.state!=="inactive"&&u.stop();const _=await h,g=ft(),m=`HAO-${Vn(g.n,g.l,g.m)}-generation.webm`;TM(_,m)}catch(v){u.state!=="inactive"&&u.stop(),console.error(v),alert("导出视频失败，请刷新页面后再试。")}finally{s.getTracks().forEach(v=>v.stop()),he.animationExporting=!1,t.forEach((v,_)=>{v.disabled=i[_]}),p.animationExportButton&&(p.animationExportButton.textContent=r),Ir(e,0)}}function RM(){p.animationWindow&&(p.animationWindow.classList.remove("closed","minimized"),p.animationWindow.style.zIndex="129",nr(p.animationWindow),un(),requestAnimationFrame(()=>Ir(he.animationStep,0)))}function Hd(){const n=ft(),e=Vn(n.n,n.l,n.m),t=n.n-n.l-1,i=n.l;return[{focus:"all",title:`先把 ${e} 看成一个波函数`,formula:"Ψ(r,θ,φ) = Rₙₗ(r) · Yₗᵐ(θ,φ)",text:"四个窗口不是四套不同的计算。它们都来自同一个 Ψ，只是观察方式不同：在空间中取等值面、在平面上取切片、沿半径取曲线，或只看角向部分。",observe:`当前轨道是 ${e}：n=${n.n} 决定尺度和径向层数，l=${n.l} 决定角向节点，m=${n.m} 决定方向和相位分区。`,reason:"先建立“同源”的概念，后面的每张图就不再是孤立图像，而是同一个函数的不同读法。",action:()=>{p.projection&&(p.projection.checked=!0),lt()}},{focus:"orbital",title:"原子轨道：找出 Ψ 等于某个值的边界",formula:"Ψ(x,y,z) = +c  和  Ψ(x,y,z) = -c",text:"程序先在三维盒子里布满格点，逐点计算 Ψ。把数值等于正等值和负等值的位置连成曲面，就得到你看到的两个相位区域。",observe:"粉色和蓝色表示波函数符号相反，不表示电荷正负。网格越密，等值面越接近真实边界。",reason:"这一步回答“轨道外形怎么来”：它不是画出来的外壳，而是三维标量场中被等值面算法提取出来的边界。",action:()=>{Ss({cloud:!1,wireframe:!0,smooth:!0,projection:!1,node:!1,box:!0})}},{focus:"projection",title:"轨道投影：把同一个 Ψ 放到一个平面上读",formula:"例如：z=0 时，观察 Ψ(x,y,0)",text:"投影窗口先选一个最能显示该轨道对称性的平面，再在平面上逐点计算 Ψ。上方曲面用高度表达数值大小，下方等高线表达相位和节点线。",observe:"看上方曲面的峰、谷，再对照下方等高线：峰对应密集的正相线，谷对应密集的负相线，白色过渡附近就是节点。",reason:"这一步把三维轨道压到二维平面，让学生更容易判断相位分区、节点线和方向。",action:()=>{p.projection&&(p.projection.checked=!0),p.box&&(p.box.checked=!0),p.wireframe&&(p.wireframe.checked=!0),p.smooth&&(p.smooth.checked=!1),lt()}},{focus:"radial",title:"径向分布：只问电子离原子核多远",formula:"P(r) = r² · Rₙₗ(r)²",text:"径向分布函数暂时不关心方向，只沿半径统计概率。R 决定波函数随距离怎样振荡，r² 会把球壳体积因素加进去。",observe:`${e} 的径向节点数是 n-l-1 = ${t}。曲线下凹或接近零的位置，通常对应概率分布中的分层。`,reason:"这一步解释“为什么有的轨道外面还有一层”：那通常来自径向部分，而不是角向形状突然改变。",action:()=>{p.radialR&&(p.radialR.checked=!1),p.radialR2&&(p.radialR2.checked=!1),p.radialRdf&&(p.radialRdf.checked=!0),p.radialSection&&(p.radialSection.checked=!0),p.radialSide&&(p.radialSide.checked=!0),p.radialCurve&&(p.radialCurve.checked=!0),lt()}},{focus:"angular",title:"角向函数：只看方向怎样分成正负相",formula:"Yₗᵐ(θ,φ) 决定方向、节面和相位",text:"角向函数把半径影响先拿掉，只保留方向上的变化。这样可以直接看到轨道为什么沿某些轴伸展，为什么中间会出现节面。",observe:`${e} 的角向节点数是 l = ${i}。这些节点决定了轨道方向上的分瓣方式。`,reason:"最后再回到原子轨道时，学生就能把外形拆开理解：径向部分决定层数，角向部分决定方向和分瓣。",action:()=>{p.projection&&(p.projection.checked=!1),p.node&&(p.node.checked=!0),p.longitudeNode&&(p.longitudeNode.checked=!0),p.wireframe&&(p.wireframe.checked=!0),lt()}}]}function Pa(n){var t;for(const i of document.querySelectorAll(".qt-window.teaching-focus"))i.classList.remove("teaching-focus");const e=n==="all"?["orbital","projection","radial","angular"]:[n];for(const i of e)(t=document.querySelector(`[data-window-name="${i}"]`))==null||t.classList.add("teaching-focus")}function cc(n){p.explainProgressFill&&(p.explainProgressFill.style.width=`${Math.max(0,Math.min(1,n))*100}%`)}function Gd(){he.explanationTimer&&clearTimeout(he.explanationTimer),he.explanationFrame&&cancelAnimationFrame(he.explanationFrame),he.explanationTimer=null,he.explanationFrame=null}function Wd(){if(!he.explanationPlaying)return;const n=(performance.now()-he.explanationStartedAt)/Dd;cc(n),he.explanationFrame=requestAnimationFrame(Wd)}function qd(){Gd(),he.explanationStartedAt=performance.now(),Wd(),he.explanationTimer=setTimeout(()=>{const n=Hd();if(he.explanationStep>=n.length-1){he.explanationPlaying=!1,p.explainPlayButton&&(p.explainPlayButton.textContent="播放"),cc(1);return}La(he.explanationStep+1),he.explanationPlaying&&qd()},Dd)}function La(n,e={}){const t=Hd(),i=Math.max(0,Math.min(t.length-1,n)),r=t[i];he.explanationStep=i,p.explainStepBadge&&(p.explainStepBadge.textContent=`第 ${i+1} 步 / ${t.length} 步`),p.explainStepTitle&&(p.explainStepTitle.textContent=r.title),p.explainStepText&&(p.explainStepText.textContent=r.text),p.explainFormula&&(p.explainFormula.textContent=r.formula),p.explainObserveText&&(p.explainObserveText.textContent=r.observe),p.explainReasonText&&(p.explainReasonText.textContent=r.reason),p.explainHintText&&(p.explainHintText.textContent=`正在讲解 ${Vx()}。你可以暂停后旋转任意一个窗口，再继续播放。`),Pa(r.focus),cc(0),e.render!==!1&&r.action()}function PM(){he.explanationPlaying=!0,p.explainPlayButton&&(p.explainPlayButton.textContent="暂停"),La(he.explanationStep),qd()}function to(){he.explanationPlaying=!1,p.explainPlayButton&&(p.explainPlayButton.textContent="播放"),Gd()}function LM(){he.explanationPlaying?to():PM()}function IM(){to(),he.explanationStep=0,La(0)}function _h(n){to(),La(he.explanationStep+n)}function Ss(n){n.cloud!=null&&p.cloud&&(p.cloud.checked=n.cloud),n.wireframe!=null&&p.wireframe&&(p.wireframe.checked=n.wireframe),n.smooth!=null&&p.smooth&&(p.smooth.checked=n.smooth),n.projection!=null&&p.projection&&(p.projection.checked=n.projection),n.node!=null&&(p.node&&(p.node.checked=n.node),p.radialNode&&(p.radialNode.checked=n.node),p.polarNode&&(p.polarNode.checked=n.node),p.longitudeNode&&(p.longitudeNode.checked=n.node)),n.box!=null&&p.box&&(p.box.checked=n.box),n.grid3d!=null&&p.grid3d&&(p.grid3d.checked=n.grid3d),lt()}function DM(){return qt.find(n=>{var e;return n.value===((e=p.predictTarget)==null?void 0:e.value)})||he.challengeTarget||qt[0]}function NM(){const n=DM(),e=Js(n.value),t=e.n-e.l-1,i=e.l,r=Math.max(60,100-t*4-i*3);p.scorePrompt&&(p.scorePrompt.textContent=`${n.label} 参考评分：${r} 分。检查点：径向节点 ${t} 个，角向节点 ${i} 个，相位正负分区清楚，方向与坐标轴一致。`),Qs(n.value)}function UM(){p.scorePrompt&&(p.scorePrompt.textContent="评分标准：节点数 30 分，相位颜色 25 分，空间方向 25 分，投影/截面对应关系 20 分。")}function FM(){p.scorePrompt&&(p.scorePrompt.textContent="评分会根据当前目标轨道给出节点数、相位、方向和投影四项课堂反馈。")}function xs(n){n==="nodes"?(Ss({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!0}),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="节点诊断：观察径向节点数 n-l-1 与角向节点数 l 是否匹配。")):n==="phase"?(Ss({cloud:!1,wireframe:!0,smooth:!1,projection:!1,node:!1}),p.positiveLobe&&(p.positiveLobe.checked=!0),p.negativeLobe&&(p.negativeLobe.checked=!0),lt(),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="相位诊断：紫色/青色两相表示波函数符号相反，不代表电荷正负。")):(Ss({cloud:!1,wireframe:!0,smooth:!1,projection:!0,node:!1,box:!0}),p.diagnosisPrompt&&(p.diagnosisPrompt.textContent="投影诊断：对照上方波函数曲面与底部等高线，判断节点线和相位区。"))}function xh(n){document.body.classList.toggle("tablet-mode",n),n?(io("tile"),ca("tablet"),ei("平板课堂：已放大按钮和触控区域。")):ei("已恢复普通课堂布局。"),un()}function OM(){const n=qt.find(e=>e.value===p.predictTarget.value)??qt[0];ac(),Je.strokes=[],Je.currentStroke=null,Kr(),p.predictPrompt&&(p.predictPrompt.textContent=`请先在画板中预测 ${n.label} 的形状、相位和节面，再点击“显示验证”。`)}function zM(){const n=qt.find(e=>e.value===p.predictTarget.value)??qt[0];Qs(n.value),p.predictPrompt&&(p.predictPrompt.textContent=`已显示 ${n.label}。请对照画板预测与四个窗口中的真实结果。`)}function BM(){const n=Math.floor(Math.random()*qt.length);he.challengeTarget=qt[n],Qs(he.challengeTarget.value),setTimeout(()=>{p.viewerTitle&&(p.viewerTitle.textContent="原子轨道  ?")},120),p.challengePrompt&&(p.challengePrompt.textContent="观察当前四个窗口中的图像，选择你认为对应的轨道名称。")}function kM(){const n=he.challengeTarget||qt[0],e=qt.find(r=>r.value===p.challengeGuess.value),t=(e==null?void 0:e.value)===n.value;he.challengeTotal+=1,t&&(he.challengeCorrect+=1);const i=`（累计 ${he.challengeCorrect}/${he.challengeTotal}）`;p.viewerTitle&&(p.viewerTitle.textContent=`原子轨道  ${n.label}`),p.challengePrompt&&(p.challengePrompt.textContent=t?`回答正确：这是 ${n.label}。`:`还不对。你的答案是 ${(e==null?void 0:e.label)??""}，正确答案是 ${n.label}。`),ei(`轨道配对 ${i}`)}function VM(n){var i,r;const e=p.sketchWindow;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();Je.dragging=!0,Je.dragPointerId=n.pointerId,Je.dragOffsetX=n.clientX-t.left,Je.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function HM(n){const e=p.sketchWindow;if(!e||!Je.dragging||Je.dragPointerId!==null&&n.pointerId!==Je.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-Je.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-Je.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function Mh(){Je.dragging=!1,Je.dragPointerId=null,Pr()}function nl(n,e){var i,r;if(!e||e.classList.contains("maximized")||n.target.closest(".window-controls")||n.pointerType!=="mouse"&&!n.isPrimary)return;n.preventDefault();const t=e.getBoundingClientRect();he.dragging=!0,he.dragPointerId=n.pointerId,he.dragWindow=e,he.dragOffsetX=n.clientX-t.left,he.dragOffsetY=n.clientY-t.top,(r=(i=n.currentTarget)==null?void 0:i.setPointerCapture)==null||r.call(i,n.pointerId),e.style.zIndex="130"}function GM(n){const e=he.dragWindow;if(!he.dragging||!e||he.dragPointerId!==null&&n.pointerId!==he.dragPointerId)return;n.preventDefault();const t=window.innerWidth-Math.min(120,e.offsetWidth),i=window.innerHeight-32,r=Math.max(0,Math.min(t,n.clientX-he.dragOffsetX)),a=Math.max(0,Math.min(i,n.clientY-he.dragOffsetY));e.style.left=`${r}px`,e.style.top=`${a}px`,e.style.right="auto",e.style.bottom="auto"}function yh(){he.dragging=!1,he.dragPointerId=null,he.dragWindow=null,Pr()}function Xd(){b_(performance.now()*.001),Ce.update(),De.update(),In.update(),$t.update(),sx(),pn.render(Wt,Ke),Li.render(mn,st),Qi.render(zn,yt),$r.render(Bn,It);for(const n of Aa)n.controls.update(),n.renderer.render(n.scene,n.camera);requestAnimationFrame(Xd)}function WM(){const[n,e,t]=p.preset.value.split(",").map(Number);p.n.value=n,p.l.value=e,p.m.value=Math.abs(t),p.cosType.checked=t>=0,p.sinType.checked=t<0,ft(),jr(),lt()}function Er(n,e){if(n.checked)for(const t of e)t&&t!==n&&(t.checked=!1)}function Yd(n){n==="one"?(p.positiveColor.value="#ff7a00",p.negativeColor.value="#008fb8"):(p.positiveColor.value="#d83bd8",p.negativeColor.value="#00aeb8"),lt()}function qM(){for(const n of[p.cosType,p.sinType])n==null||n.addEventListener("change",()=>{Er(n,[p.cosType,p.sinType]),!p.cosType.checked&&!p.sinType.checked&&(p.cosType.checked=!0),lt()});for(const n of[p.wireframe,p.smooth])n==null||n.addEventListener("change",()=>{Er(n,[p.wireframe,p.smooth]),lt()});for(const n of[p.paletteOne,p.paletteTwo])n==null||n.addEventListener("change",()=>{Er(n,[p.paletteOne,p.paletteTwo]),!p.paletteOne.checked&&!p.paletteTwo.checked&&(p.paletteTwo.checked=!0),Yd(p.paletteOne.checked?"one":"two")});for(const n of[p.xySlice,p.yzSlice,p.xzSlice])n==null||n.addEventListener("change",()=>{Er(n,[p.xySlice,p.yzSlice,p.xzSlice]),lt()});for(const n of[p.quarter,p.eighth,p.threeQuarter])n==null||n.addEventListener("change",()=>{Er(n,[p.quarter,p.eighth,p.threeQuarter]),lt()});for(const n of[p.radialR,p.radialR2,p.radialRdf])n==null||n.addEventListener("change",()=>{Er(n,[p.radialR,p.radialR2,p.radialRdf]),!p.radialR.checked&&!p.radialR2.checked&&!p.radialRdf.checked&&(p.radialRdf.checked=!0),wd(),Pd(ft(),Kt())})}function no(){pn.render(Wt,Ke);const n=document.createElement("a");n.download=`${p.orbitalName.textContent||"hao-orbital"}.png`,n.href=pn.domElement.toDataURL("image/png"),n.click()}function ei(n){p.statusText.textContent=n}function XM(){if(p.backgroundColor){(!document.body.contains(p.backgroundColor)||p.backgroundColor.closest(".hidden-control"))&&(document.body.appendChild(p.backgroundColor),Object.assign(p.backgroundColor.style,{position:"fixed",left:"-120px",top:"0",width:"1px",height:"1px",opacity:"0",pointerEvents:"none"}));try{typeof p.backgroundColor.showPicker=="function"?p.backgroundColor.showPicker():p.backgroundColor.click()}catch{p.backgroundColor.click()}}}function Bs(n){document.body.classList.toggle("app-fullscreen",n),er.hidden=!n,un()}async function YM(){var e;rn(),Bs(!0);const n=(e=document.documentElement.requestFullscreen)==null?void 0:e.bind(document.documentElement);if(n)try{await n(),Lr=!0}catch{Lr=!1}}async function $d(){if(rn(),Bs(!1),document.fullscreenElement&&document.exitFullscreen)try{await document.exitFullscreen()}catch{}Lr=!1}function $M(){document.body.classList.contains("app-fullscreen")||document.fullscreenElement?$d():YM()}function rn(){p.menuPopup.hidden=!0,p.menuPopup.innerHTML="";for(const n of p.menuItems)n.classList.remove("active")}function jM(n){const e=n.dataset.menu,t={file:[["重新显示",lt],["导出图片",no],["恢复预设值",()=>{jr(),lt()}]],window:[["全屏/退出全屏",$M],["画板",ac],["背景颜色",XM],["显示/隐藏盒子",ZM],["显示/隐藏坐标轴",uc],["重置视角",()=>{Jl(),ex(Zt)}]],help:[["当前说明",()=>ei("顶部按钮已连接到 Web 端功能")],["项目路径",()=>ei("web/index.html")]],language:[["中文",()=>ei("语言: 中文")],["English",()=>ei("Language: English labels are partly available")]]}[e];rn(),n.classList.add("active");const i=n.getBoundingClientRect();p.menuPopup.style.left=`${i.left}px`,p.menuPopup.hidden=!1;for(const[r,a]of t){const o=document.createElement("button");o.type="button",o.textContent=r,o.addEventListener("click",()=>{rn(),a()}),p.menuPopup.appendChild(o)}}function uc(){var e;p.axis.checked=!p.axis.checked;const n=Kt();Ea.visible=n.showAxis,Ea.scale.setScalar(Math.max(1,n.radius/4.5)),gi&&(gi.visible=n.showAxis),(e=p.toolAxis)==null||e.classList.toggle("active",n.showAxis),render()}function ZM(){p.box.checked=!p.box.checked,Kt(),lt()}function io(n){var t,i;Kl({restoreLayout:!0});const e=n==="overlap";p.viewGrid.classList.toggle("overlap-layout",e),(t=p.toolTile)==null||t.classList.toggle("active",!e),(i=p.toolOverlap)==null||i.classList.toggle("active",e),un()}function nr(n){const e=n.querySelector('[data-window-action="minimize"]'),t=n.querySelector('[data-window-action="maximize"]');e&&(e.textContent=n.classList.contains("minimized")?"□":"－"),t&&(t.textContent=n.classList.contains("maximized")?"❐":"□")}function KM(n){const e=n.closest(".qt-window");if(!e)return;const t=n.dataset.windowAction;t==="minimize"?(e.classList.toggle("minimized"),e.classList.contains("minimized")&&e.classList.remove("maximized")):t==="maximize"?(e.classList.remove("minimized"),e.classList.toggle("maximized")):t==="close"&&(e.classList.add("closed"),e.classList.remove("minimized","maximized"),e===p.animationWindow&&Ra()),nr(e),un(),e===p.animationWindow&&!e.classList.contains("closed")&&requestAnimationFrame(()=>Vr(0))}function hc(n){var a,o,s;const e=ii,t=Math.max(3,Zt),i=Ai(e),r=Ai(t,40);n==="xoy"?(Ke.position.set(0,0,i),st.position.set(0,0,r)):n==="yoz"?(Ke.position.set(i,0,0),st.position.set(r,0,0)):n==="xoz"&&(Ke.position.set(0,i,0),st.position.set(0,r,0)),Ke.lookAt(0,0,0),st.lookAt(0,0,0),js(e),Zs(t),Ce.target.set(0,0,0),De.target.set(0,0,0),Ce.update(),De.update(),(a=p.toolXOY)==null||a.classList.toggle("active",n==="xoy"),(o=p.toolYOZ)==null||o.classList.toggle("active",n==="yoz"),(s=p.toolXOZ)==null||s.classList.toggle("active",n==="xoz")}for(const n of[p.n,p.l,p.m,p.z,p.iso,p.density,p.radius,p.opacity,p.mode,p.slice,p.node,p.axis,p.box,p.positiveColor,p.negativeColor,p.backgroundColor,p.desktopMatch,p.boxSizeDisplay,p.cloud,p.positiveLobe,p.negativeLobe,p.wireframe,p.smooth,p.projection,p.radialSection,p.radialSide,p.radialCurve,p.radialAxis,p.radialNode,p.polarNode,p.longitudeNode,p.grid3d,p.relationMode,p.syncRotation,p.scanRadius,p.scanTheta,p.scanPhi])n&&n.addEventListener("input",()=>{if(n===p.boxSizeDisplay&&S_(),ft(),Kt(),n===p.backgroundColor){$l(p.backgroundColor.value);return}if([p.relationMode,p.syncRotation,p.scanRadius,p.scanTheta,p.scanPhi].includes(n)){Ks();return}[p.wireframe,p.smooth].includes(n)||(n.type==="checkbox"||n.type==="color")&&lt()});for(const n of[p.n,p.l,p.m,p.z,p.desktopMatch])n.addEventListener("change",()=>{jr(),lt()});p.preset.addEventListener("input",WM);p.renderButton.addEventListener("click",lt);var Sh;(Sh=p.redrawProxyButton)==null||Sh.addEventListener("click",lt);var bh;(bh=p.presetButton)==null||bh.addEventListener("click",()=>{jr(),lt()});var Eh;(Eh=p.axisProxyButton)==null||Eh.addEventListener("click",()=>{uc()});var wh;(wh=document.querySelector("#colorProxyButton"))==null||wh.addEventListener("click",()=>{p.paletteOne.checked=!p.paletteOne.checked,p.paletteTwo.checked=!p.paletteOne.checked,Yd(p.paletteOne.checked?"one":"two")});p.resetCameraButton.addEventListener("click",()=>Jl());p.screenshotButton.addEventListener("click",no);for(const n of document.querySelectorAll("[data-window-action]"))n.addEventListener("click",e=>{e.stopPropagation(),KM(n)});for(const n of p.menuItems)n.addEventListener("click",e=>{e.stopPropagation(),jM(n)});document.addEventListener("click",rn);p.menuPopup.addEventListener("click",n=>n.stopPropagation());er.addEventListener("click",$d);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?(Lr=!0,Bs(!0)):Lr&&(Lr=!1,Bs(!1))});var Ah;(Ah=p.toolRender)==null||Ah.addEventListener("click",()=>{rn(),lt()});var Th;(Th=p.toolSave)==null||Th.addEventListener("click",()=>{rn(),no()});var Ch;(Ch=p.toolTile)==null||Ch.addEventListener("click",()=>{rn(),io("tile")});var Rh;(Rh=p.toolOverlap)==null||Rh.addEventListener("click",()=>{rn(),io("overlap")});var Ph;(Ph=p.toolAxis)==null||Ph.addEventListener("click",()=>{rn(),uc()});var Lh;(Lh=p.toolXOY)==null||Lh.addEventListener("click",()=>{rn(),hc("xoy")});var Ih;(Ih=p.toolYOZ)==null||Ih.addEventListener("click",()=>{rn(),hc("yoz")});var Dh;(Dh=p.toolXOZ)==null||Dh.addEventListener("click",()=>{rn(),hc("xoz")});pn.domElement.addEventListener("click",Sx);window.addEventListener("resize",Os);qM();Px();x_();Os();io("tile");jr();Jl();lt();Xd();
